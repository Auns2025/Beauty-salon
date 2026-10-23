import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SERVICES, SERVICE_CATEGORIES, PACKAGES } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { formatAED, formatDuration } from '../utils/pricing';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import PackageCard from '../components/services/PackageCard';
import ServiceFilter from '../components/services/ServiceFilter';
import Button from '../components/common/Button';
import { ShoppingBag, ArrowRight, Check, Sparkles, Filter, Package as PackageIcon, Scissors } from 'lucide-react';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';
  const initialTab = searchParams.get('view') || 'packages'; // 'packages' | 'services'
  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const {
    selectedServiceIds,
    toggleService,
    selectedServices,
    selectedPackage,
    selectPackage,
    clearPackage,
    togglePackageService,
    totals,
    setCurrentStep,
  } = useBooking();

  // Synchronize category with search param
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && SERVICE_CATEGORIES.includes(cat)) {
      setActiveCategory(cat);
      setActiveTab('services');
    }
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat, view: 'services' });
    }
  };

  // Category counts
  const categoryCounts = SERVICE_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? SERVICES.length : SERVICES.filter(s => s.category === cat).length;
    return acc;
  }, {});

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const hasSelections = selectedServices.length > 0 || !!selectedPackage;

  return (
    <div className="flex-1 pt-28 sm:pt-32 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <SectionHeading
          eyebrow="The Official Menu"
          title="Packages &"
          italicTitle="Transparent AED Pricing"
          subtitle="Explore our 11 official packages (points-based & fixed inclusive) alongside bespoke treatments. Free home beauty services across Dubai & Sharjah."
        />

        {/* View Switcher: Packages vs A La Carte */}
        <div className="max-w-md mx-auto mb-10 flex items-center p-1.5 bg-white border border-beige rounded-sm shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab('packages')}
            className={`flex-1 py-2.5 px-4 rounded-sm text-xs font-sans font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              activeTab === 'packages'
                ? 'bg-espresso text-gold shadow-sm border border-gold/40'
                : 'text-mutedText hover:text-espresso'
            }`}
          >
            <PackageIcon className="w-3.5 h-3.5" />
            <span>Official Packages (11)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('services')}
            className={`flex-1 py-2.5 px-4 rounded-sm text-xs font-sans font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              activeTab === 'services'
                ? 'bg-espresso text-gold shadow-sm border border-gold/40'
                : 'text-mutedText hover:text-espresso'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>Individual Services</span>
          </button>
        </div>

        {/* PACKAGES TAB */}
        {activeTab === 'packages' && (
          <div className="space-y-6">
            <div className="p-4 bg-white border border-gold/30 rounded-sm text-xs text-darkText max-w-3xl mx-auto text-center">
              <span className="font-semibold text-espresso">Points Packages & Curated Fixed Packages:</span>
              <p className="text-mutedText mt-1">
                Packages 1 (12 pts), 2 (22 pts), 3 (25 pts), and 6 (35 pts) offer custom points flexibility. Packages 4, 5, 7, 8, 9, 10, and 11 feature fixed high-value inclusive treatments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {PACKAGES.map((pkg) => {
                const isPkgSelected = selectedPackage && selectedPackage.id === pkg.id;
                return (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    isSelected={isPkgSelected}
                    onSelect={() => selectPackage(pkg)}
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

        {/* INDIVIDUAL SERVICES TAB */}
        {activeTab === 'services' && (
          <div>
            {/* Category Tabs */}
            <ServiceFilter
              activeCategory={activeCategory}
              onSelectCategory={handleCategoryChange}
              categoryCounts={categoryCounts}
            />

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSelected={selectedServiceIds.includes(service.id)}
                  onToggle={() => toggleService(service.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Home Service Availability Note */}
        <div className="mt-16 p-6 bg-white border border-beige rounded-sm shadow-sm max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 text-gold-deep text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Salon Studio & Free In-Home Availability</span>
          </div>
          <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
            All services and packages are available at our boutique studio or in the comfort of your residence. Complimentary Free Home Beauty Service is provided across Dubai & Sharjah with certified stylists and complete sanitized mobile equipment.
          </p>
        </div>
      </div>

      {/* Persistent Bottom Floating Action Bar when items selected */}
      {hasSelections && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-espresso text-ivory border-t-2 border-gold py-3.5 px-4 sm:px-8 shadow-2xl backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 rounded-full bg-gold text-espresso font-bold flex items-center justify-center text-xs">
                {selectedPackage ? '1' : selectedServices.length}
              </div>
              <div>
                <div className="font-serif text-lg sm:text-xl font-bold text-gold-light leading-none">
                  {totals.formattedSubtotal}
                </div>
                <div className="text-[10px] text-ivory/70 font-sans tracking-wider mt-0.5">
                  {selectedPackage
                    ? `${selectedPackage.shortName || selectedPackage.name} Selected`
                    : `${selectedServices.length} Treatment${selectedServices.length > 1 ? 's' : ''} Selected · ${totals.formattedDuration}`}
                </div>
              </div>
            </div>

            <Link
              to="/booking"
              onClick={() => setCurrentStep(1)}
            >
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Continue to Booking
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}