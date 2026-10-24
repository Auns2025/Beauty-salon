import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Facebook, MessageCircle, MapPin, Clock, Phone, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { createGeneralInquiryLink } from '../../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-ivory border-t border-gold/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gold/15">
          {/* Brand Manifesto */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/60 overflow-hidden flex items-center justify-center bg-chocolate flex-shrink-0 shadow-sm group-hover:border-gold transition-colors">
                <img
                  src="/favicon.png"
                  alt="S&M Home Beauty Salon Logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="font-sans text-lg font-bold tracking-[0.16em] uppercase text-ivory group-hover:text-gold transition-colors">
                S&M Home Beauty Salon
              </span>
            </Link>
            <p className="text-xs text-ivory/70 font-light leading-relaxed mb-5">
              {BUSINESS_CONFIG.tagline}. High-touch bridal aesthetics, hair couture, and skin therapies delivered at our boutique studio or in the comfort of your home.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={createGeneralInquiryLink("Concierge Inquiry")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium mb-4 flex items-center gap-1.5">
              <span>Explore</span>
              <span className="text-gold/60">✦</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/80">
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Services & Pricing Menu
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-gold transition-colors">
                  Multi-Step Booking Request
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">
                  Artistry Visual Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  Our Philosophy & Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Studio Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Disciplines */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium mb-4 flex items-center gap-1.5">
              <span>Disciplines</span>
              <span className="text-gold/60">✦</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/80">
              <li>
                <Link to="/services?cat=Hair" className="hover:text-gold transition-colors">
                  Precision Haircut & Balayage
                </Link>
              </li>
              <li>
                <Link to="/services?cat=Skin" className="hover:text-gold transition-colors">
                  Cellular Glow & Whitening Facials
                </Link>
              </li>
              <li>
                <Link to="/services?cat=Makeup" className="hover:text-gold transition-colors">
                  Haute Couture Bridal & Party Makeup
                </Link>
              </li>
              <li>
                <Link to="/services?cat=Nails" className="hover:text-gold transition-colors">
                  Deluxe Manicure & Botanical Pedicure
                </Link>
              </li>
              <li>
                <Link to="/services?cat=Waxing" className="hover:text-gold transition-colors">
                  Hygienic Waxing & Facial Threading
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Hours & Concierge */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium mb-4 flex items-center gap-1.5">
              <span>Concierge</span>
              <span className="text-gold/60">✦</span>
            </h4>
            <div className="space-y-3 text-xs text-ivory/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.hours.display}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Dubai & Sharjah, UAE (Free Home Service across city limits)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>WhatsApp: {BUSINESS_CONFIG.contact.whatsappDisplay}</span>
              </div>
            </div>

            {/* UAE Direct Dispatch info */}
            <div className="mt-4 p-2.5 bg-chocolate border border-gold/20 rounded-sm text-[11px] text-ivory/70 flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
              <span>Serving residential clients across Dubai & Sharjah with sanitized mobile salon kits.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory/50">
          <div>
            © {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-ivory/60">
            <span>Currency: AED</span>
            <span>·</span>
            <span>Free Home Service (Dubai & Sharjah)</span>
            <span>·</span>
            <span className="text-gold font-medium">Bespoke Quiet Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
