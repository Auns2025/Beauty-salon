import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/services';
import { useBooking } from '../../context/BookingContext';
import { formatPKR, formatDuration } from '../../utils/pricing';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Clock, Check, Plus, Sparkles } from 'lucide-react';

export default function SignatureTreatments() {
  const { isServiceSelected, toggleService } = useBooking();
  const signatureServices = SERVICES.filter(s => s.featured).slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-beige/40 border-y border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Master Artistry"
          title="Signature"
          italicTitle="Treatments"
          subtitle="Our most coveted salon rituals and bridal transformations, celebrated for transformative longevity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureServices.map((service, index) => {
            const selected = isServiceSelected(service.id);

            return (
              <div
                key={service.id}
                className="bg-white border border-beige shadow-luxury hover:shadow-luxuryHover transition-all duration-300 flex flex-col justify-between overflow-hidden rounded-sm group"
              >
                {/* Visual */}
                <div className="relative aspect-[4/3] overflow-hidden bg-espresso">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 bg-espresso/90 text-gold border border-gold/40 text-[9px] uppercase tracking-widest px-2.5 py-1">
                    Signature 0{index + 1}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between text-ivory">
                    <span className="font-sans text-xl sm:text-2xl font-extrabold text-gold-light">
                      {formatPKR(service.price)}
                    </span>
                    <span className="text-xs text-ivory/80 flex items-center gap-1 font-sans">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {formatDuration(service.durationMinutes)}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-champagne mb-1">
                      {service.category} Discipline
                    </div>
                    <h3 className="font-sans text-lg sm:text-xl font-bold uppercase tracking-wide text-espresso mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs text-mutedText font-light leading-relaxed mb-6">
                      {service.fullDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-beige flex items-center justify-between gap-3">
                    <Button
                      variant={selected ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => toggleService(service.id)}
                      icon={selected ? Check : Plus}
                      className="w-full"
                    >
                      {selected ? 'Added to Booking' : 'Add to Booking'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="md">
              View All 11 Services & Full Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
