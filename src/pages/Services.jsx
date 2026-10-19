import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { formatPKR, formatDuration } from '../utils/pricing';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import ServiceFilter from '../components/services/ServiceFilter';
import Button from '../components/common/Button';
import { ShoppingBag, ArrowRight, Check, Sparkles, Filter } from 'lucide-react';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const {
    selectedServiceIds,
    toggleService,
    selectedServices,
    totals,
    setCurrentStep,
  } = useBooking();

  // Synchronize category with search param
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && SERVICE_CATEGORIES.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat });
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

  return (
    <div className="flex-1 pt-28 sm:pt-32 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <SectionHeading
          eyebrow="The Complete Menu"
          title="Services &"
          italicTitle="Transparent Pricing"
          subtitle="Explore all 11 artisanal salon and home beauty treatments. Select any combination of treatments to calculate your custom reservation."
        />

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

        {/* Home Service Logistics Note */}
        <div className="mt-16 p-6 bg-white border border-beige rounded-sm shadow-sm max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 text-gold-deep text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Salon Studio & In-Home Availability</span>
          </div>
          <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
            All services listed above are available at our boutique studio or in the comfort of your home. A fixed visit fee of PKR 500 is applied for home visits across Lahore to cover mobile equipment sanitization and artist logistics.
          </p>
        </div>
      </div>

      {/* Persistent Bottom Floating Action Bar when services selected (like prototype .bar) */}
      {selectedServices.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-espresso text-ivory border-t-2 border-gold py-3.5 px-4 sm:px-8 shadow-2xl backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 rounded-full bg-gold text-espresso font-bold flex items-center justify-center text-xs">
                {selectedServices.length}
              </div>
              <div>
                <div className="font-serif text-lg sm:text-xl font-bold text-gold-light leading-none">
                  {totals.formattedSubtotal}
                </div>
                <div className="text-[10px] text-ivory/70 font-sans tracking-wider mt-0.5">
                  {selectedServices.length} Treatment{selectedServices.length > 1 ? 's' : ''} Selected · {totals.formattedDuration}
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
