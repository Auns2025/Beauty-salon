import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { createGeneralInquiryLink } from '../../utils/whatsapp';

export default function BookingCta() {
  return (
    <section className="relative py-24 sm:py-32 bg-espresso text-ivory overflow-hidden border-t border-gold/30">
      {/* Background Ambience Image */}
      <div className="absolute inset-0 opacity-25">
        <img
          src="/images/hero/salon-ambience.jpg"
          alt="SM Home Beauty Sanctuary"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-espresso" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold-light text-xs font-sans uppercase tracking-[0.25em]">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Begin Your Bespoke Journey</span>
        </div>

        <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-ivory leading-tight">
          Ready for Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-deep">
            Glow-Up?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-ivory/80 font-light max-w-xl mx-auto leading-relaxed">
          Reserve your studio appointment or schedule an at-home concierge session. Experience the refined touch of SM Home Beauty.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/booking" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto" icon={Calendar}>
              Reserve Your Visit
            </Button>
          </Link>

          <a
            href={createGeneralInquiryLink("Bespoke Appointment Consultation")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-ivory border-gold/50 hover:bg-gold hover:text-espresso"
              icon={MessageCircle}
            >
              Consult on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
