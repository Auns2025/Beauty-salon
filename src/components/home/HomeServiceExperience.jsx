import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { BUSINESS_CONFIG } from '../../config/business';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Home, ShieldCheck, Sparkles, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function HomeServiceExperience() {
  const navigate = useNavigate();
  const { setServiceLocation, setCurrentStep } = useBooking();

  const handleBookHome = () => {
    setServiceLocation('At Home');
    setCurrentStep(1);
    navigate('/booking');
  };

  const steps = [
    {
      step: "01",
      title: "Select Treatments & Date",
      desc: "Browse our complete treatment catalog and choose your preferred date and time slot."
    },
    {
      step: "02",
      title: "VIP Dispatch & Sanitation",
      desc: "Our artists prep hospital-sterilized tools, fresh sealed linens, and professional mobile salon lighting."
    },
    {
      step: "03",
      title: "Sanctuary at Your Doorstep",
      desc: "We arrive at your residence on time, set up a spotless beauty station, and provide bespoke pampering."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory border-t border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.25em] text-champagne">
              <Home className="w-3.5 h-3.5 text-gold" />
              <span>Sanctuary in Your Residence</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso tracking-tight leading-[1.15]">
              The Luxury of Salon Care <br />
              <em className="italic font-normal text-gold-deep">In the Comfort of Home</em>
            </h2>

            <p className="text-sm sm:text-base text-mutedText font-light leading-relaxed">
              Why navigate traffic and crowded lobbies when bespoke hair transformations, revitalizing facials, and couture makeup can be experienced in your own private sanctuary? We deliver the complete boutique salon experience directly to your residence across Lahore for a fixed PKR 500 concierge fee.
            </p>

            {/* Step sequence */}
            <div className="space-y-4 pt-2">
              {steps.map((s) => (
                <div key={s.step} className="flex items-start gap-4 p-4 bg-white border border-beige rounded-sm">
                  <span className="font-serif italic text-2xl font-bold text-gold flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-espresso mb-1">
                      {s.title}
                    </h4>
                    <p className="text-xs text-mutedText font-light leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleBookHome}
                icon={Home}
                className="w-full sm:w-auto"
              >
                Book At-Home Experience
              </Button>
              <div className="text-xs text-mutedText flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Fixed PKR {BUSINESS_CONFIG.homeServiceFee} fee across Lahore</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-sm overflow-hidden border border-gold/40 shadow-luxury">
              <img
                src="/images/hero/home-service.jpg"
                alt="At Home Beauty Concierge Service"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-espresso/90 border border-gold/30 backdrop-blur-md rounded-sm text-ivory">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-ivory font-serif">
                      Hospital-Grade Sterilization Protocols
                    </div>
                    <div className="text-[11px] text-ivory/70 font-light">
                      All instruments arrive sealed in sterile medical indicator pouches.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
