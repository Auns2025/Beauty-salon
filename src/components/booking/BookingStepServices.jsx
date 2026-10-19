import React, { useState } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/services';
import { useBooking } from '../../context/BookingContext';
import ServiceCard from '../services/ServiceCard';
import ServiceFilter from '../services/ServiceFilter';
import Button from '../common/Button';
import { ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export default function BookingStepServices({ onNext }) {
  const { selectedServiceIds, toggleService, selectedServices } = useBooking();
  const [activeCategory, setActiveCategory] = useState('All');
  const [errorMessage, setErrorMessage] = useState('');

  // Category counts
  const categoryCounts = SERVICE_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? SERVICES.length : SERVICES.filter(s => s.category === cat).length;
    return acc;
  }, {});

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const handleProceed = () => {
    if (selectedServiceIds.length === 0) {
      setErrorMessage('Please select at least one treatment before continuing to scheduling.');
      return;
    }
    setErrorMessage('');
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-beige pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl font-bold text-espresso">
            1. Select Your Treatments
          </h3>
          <p className="text-xs text-mutedText mt-0.5">
            Choose single or multiple salon and home services tailored to your aesthetic desire.
          </p>
        </div>
        <div className="text-xs font-sans text-gold-deep flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>{selectedServiceIds.length} Treatments Selected</span>
        </div>
      </div>

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
          {selectedServiceIds.length === 0
            ? 'Select a treatment to proceed'
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
