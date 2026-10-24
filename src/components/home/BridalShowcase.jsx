import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import Button from '../common/Button';
import { Sparkles, Heart, Check, Clock, ArrowRight } from 'lucide-react';
import { formatAED } from '../../utils/pricing';

export default function BridalShowcase() {
  const navigate = useNavigate();
  const { addService, isServiceSelected, setCurrentStep } = useBooking();
  const bridalSelected = isServiceSelected("m2");

  const handleBookPartyMakeup = () => {
    addService("m2");
    setCurrentStep(1);
    navigate('/booking');
  };

  const highlights = [
    "One-on-one advance shade & jewelry consultation",
    "Waterproof HD complexion base enduring 14+ hours",
    "Custom mink-effect lash sculpting & brow contouring",
    "Precision dupatta pinning and jewelry placement assistance",
    "Available in our private studio suite or party dressing at your venue"
  ];

  return (
    <section className="py-20 sm:py-28 bg-espresso text-ivory relative overflow-hidden border-t border-gold/20">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Party Editorial Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-2 border-gold/40 shadow-2xl">
              <img
                src="/images/services/Bridal Lipstick Application in a Glamorous Studio.jpg"
                alt="Haute Couture Party Artistry"
                loading="lazy"
                className="w-full h-full object-cover object-top filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-chocolate/90 border border-gold/30 backdrop-blur-md rounded-sm">
                <div className="flex items-center justify-between text-ivory">
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold block">
                      Haute Couture Party
                    </span>
                    <span className="font-sans text-lg sm:text-xl font-bold uppercase tracking-wide">
                      Luminous Velvet Glam
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-xl sm:text-2xl font-extrabold text-gold-light block">
                      {formatAED(350)}
                    </span>
                    <span className="text-[10px] text-ivory/60 font-sans">
                      180 Minutes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -top-4 -left-4 bg-gold text-espresso font-sans text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-sm shadow-lg">
              Signature Party Suite
            </div>
          </div>

          {/* Right Column: Editorial Copy & Booking CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.25em] text-gold-light">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>For Your Most Cherished Moment</span>
            </div>

            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-ivory tracking-tight uppercase leading-[1.12]">
              Couture Party <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-deep">
                Master Artistry
              </span>
            </h2>

            <p className="text-sm sm:text-base text-ivory/80 font-light leading-relaxed">
              Every guest deserves an atmosphere of serene, unhurried luxury on her special day. Our master makeup artists blend high-fashion party contouring with classical timeless elegance, ensuring you radiate with effortless poise through every photograph and moment of joy.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ivory/85">
                  <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Group */}
            <div className="pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleBookPartyMakeup}
                className="w-full sm:w-auto"
                icon={ArrowRight}
                iconPosition="right"
              >
                {bridalSelected ? "Party Makeup Added — Book Now" : "Add Party Makeup (AED 350)"}
              </Button>

              <Link to="/booking">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-ivory border-gold/40 hover:border-gold hover:text-gold"
                >
                  Schedule Trial Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}