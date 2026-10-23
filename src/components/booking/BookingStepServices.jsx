import React, { useState } from 'react';
import { SERVICES, SERVICE_CATEGORIES, PACKAGES } from '../../data/services';
import { useBooking } from '../../context/BookingContext';
import ServiceCard from '../services/ServiceCard';
import PackageCard from '../services/PackageCard';
import ServiceFilter from '../services/ServiceFilter';
import Button from '../common/Button';
import { ArrowRight, AlertCircle, Sparkles, Package as PackageIcon, Scissors } from 'lucide-react';

export default function BookingStepServices({ onNext }) {
  const {
    selectedServiceIds,
    toggleService,
    selectedPackage,
    selectPackage,
    clearPackage,
    togglePackageService,
  } = useBooking();

  const [bookingMode, setBookingMode] = useState(selectedPackage ? 'packages' : 'packages'); // 'packages' | 'services'
  const [activeCategory, setActiveCategory] = useState('All');
  const [errorMessage, setErrorMessage] = useState('');

  // Category counts for a la carte services
  const categoryCounts = SERVICE_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? SERVICES.length : SERVICES.filter(s => s.category === cat).length;
    return acc;
  }, {});

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const handleProceed = () => {
    // Validate selection
    if (!selectedPackage && selectedServiceIds.length === 0) {
      setErrorMessage('Please select either a luxury package or at least one individual treatment before continuing.');
      return;
    }

    if (selectedPackage && selectedPackage.type === 'points' && (!selectedPackage.selectedPackageServices || selectedPackage.selectedPackageServices.length === 0)) {
      setErrorMessage(`Please select at least one eligible service for your ${selectedPackage.name} (${selectedPackage.totalPoints} points available).`);
      return;
    }

    setErrorMessage('');
    onNext();
  };

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="border-b border-beige pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl font-bold text-espresso">
            1. Select Your Experience
          </h3>
          <p className="text-xs text-mutedText mt-0.5">
            Choose from our 11 official luxury packages or customize your reservation with individual treatments.
          </p>
        </div>
        <div className="text-xs font-sans text-gold-deep flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>
            {selectedPackage
              ? `1 Package Selected (${selectedPackage.price} AED)`
              : `${selectedServiceIds.length} Treatments Selected`}
          </span>
        </div>
      </div>

      {/* Mode Switcher: Packages vs A La Carte */}
      <div className="flex items-center gap-2 p-1.5 bg-ivory border border-beige rounded-sm">
        <button
          type="button"
          onClick={() => setBookingMode('packages')}
          className={`flex-1 py-2 px-4 rounded-sm text-xs font-sans font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            bookingMode === 'packages'
              ? 'bg-espresso text-gold shadow-sm border border-gold/40'
              : 'text-mutedText hover:text-espresso'
          }`}
        >
          <PackageIcon className="w-3.5 h-3.5" />
          <span>Official Salon Packages (11)</span>
        </button>

        <button
          type="button"
          onClick={() => setBookingMode('services')}
          className={`flex-1 py-2 px-4 rounded-sm text-xs font-sans font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            bookingMode === 'services'
              ? 'bg-espresso text-gold shadow-sm border border-gold/40'
              : 'text-mutedText hover:text-espresso'
          }`}
        >
          <Scissors className="w-3.5 h-3.5" />
          <span>A La Carte Services ({SERVICES.length})</span>
        </button>
      </div>

      {/* PACKAGES VIEW */}
      {bookingMode === 'packages' && (
        <div className="space-y-5">
          <div className="p-3.5 bg-ivory border border-gold/30 rounded-sm text-xs text-darkText/90 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-espresso">Points Packages & Fixed Inclusive Offers:</span>
              <span className="text-mutedText ml-1">
                Packages 1, 2, 3, and 6 allow you to handpick treatments up to your points allowance. Packages 4, 5, 7, 8, 9, 10, and 11 come with curated all-inclusive services.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PACKAGES.map((pkg) => {
              const isPkgSelected = selectedPackage && selectedPackage.id === pkg.id;
              return (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  isSelected={isPkgSelected}
                  onSelect={() => {
                    selectPackage(pkg);
                    setErrorMessage('');
                  }}
                  onClear={clearPackage}
                  onToggleService={(serviceItem) => togglePackageService(serviceItem)}
                  selectedServicesInPkg={isPkgSelected ? (selectedPackage.selectedPackageServices || []) : []}
                  usedPoints={isPkgSelected ? (selectedPackage.usedPoints || 0) : 0}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* A LA CARTE SERVICES VIEW */}
      {bookingMode === 'services' && (
        <div className="space-y-5">
          {/* Filter Tabs */}
          <ServiceFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            categoryCounts={categoryCounts}
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedServiceIds.includes(service.id)}
                onToggle={() => {
                  toggleService(service.id);
                  if (errorMessage) setErrorMessage('');
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Error Feedback */}
      {errorMessage && (
        <div className="p-3 bg-roseAccent/10 border border-roseAccent/30 text-roseAccent text-xs flex items-center gap-2 rounded-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Stepper Navigation */}
      <div className="pt-6 border-t border-beige flex items-center justify-between">
        <div className="text-xs text-mutedText">
          {selectedPackage
            ? `${selectedPackage.name} ready (${selectedPackage.price} AED)`
            : selectedServiceIds.length === 0
            ? 'Select a package or service to proceed'
            : `${selectedServiceIds.length} service(s) ready for scheduling`}
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={handleProceed}
          icon={ArrowRight}
          iconPosition="right"
        >
          Next: Date & Venue
        </Button>
      </div>
    </div>
  );
}