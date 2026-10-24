import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/business';
import { createGeneralInquiryLink, normalizeWhatsAppNumber } from '../utils/whatsapp';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { MessageCircle, Instagram, MapPin, Clock, Phone, Mail, Send, Check, AlertCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryService, setInquiryService] = useState('General Consultation');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isDispatched, setIsDispatched] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const cleanPhone = normalizeWhatsAppNumber(BUSINESS_CONFIG.contact.whatsappNumber);
    const textLines = [
      `✦ *CONCIERGE INQUIRY — ${BUSINESS_CONFIG.name}* ✦`,
      `Name: ${inquiryName || 'Not specified'}`,
      `Phone: ${inquiryPhone || 'Not specified'}`,
      `Interest: ${inquiryService}`,
      `Message: ${inquiryMessage || 'Hello, I would like to inquire about booking availability.'}`
    ];
    const encoded = encodeURIComponent(textLines.join('\n'));
    const url = `https://wa.me/${cleanPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsDispatched(true);
  };

  return (
    <div className="flex-1 pt-28 sm:pt-32 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Direct Concierge"
          title="Connect With"
          italicTitle="Our Studio"
          subtitle="Whether planning bridal makeup, organizing home beauty appointments, or inquiring regarding our service menu, we are at your service."
        />


        {/* 4 Cards from Prototype */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp Card */}
          <div className="bg-white border border-beige p-7 rounded-sm shadow-luxury hover:border-gold/60 transition-all text-center flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold group-hover:text-espresso transition-all">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-1">
                WhatsApp
              </h3>
              <p className="text-xs text-mutedText mb-3">
                Fastest booking confirmation & direct inquiries.
              </p>
              <div className="font-mono text-sm font-semibold text-gold-deep">
                {BUSINESS_CONFIG.contact.whatsappDisplay}
              </div>
            </div>
            <a
              href={createGeneralInquiryLink("WhatsApp Direct Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-xs uppercase tracking-[0.2em] font-medium text-gold-deep hover:text-gold"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-white border border-beige p-7 rounded-sm shadow-luxury hover:border-gold/60 transition-all text-center flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold group-hover:text-espresso transition-all">
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-1">
                Instagram
              </h3>
              <p className="text-xs text-mutedText mb-3">
                Daily transformations, client reels & stories.
              </p>
              <div className="font-mono text-sm font-semibold text-gold-deep">
                {BUSINESS_CONFIG.contact.instagram}
              </div>
            </div>
            <a
              href={BUSINESS_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-xs uppercase tracking-[0.2em] font-medium text-gold-deep hover:text-gold"
            >
              View Instagram →
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white border border-beige p-7 rounded-sm shadow-luxury hover:border-gold/60 transition-all text-center flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold group-hover:text-espresso transition-all">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-1">
                Studio Address
              </h3>
              <p className="text-xs text-mutedText mb-3">
                Boutique salon appointments & Dubai/Sharjah home visits.
              </p>
              <div className="text-xs text-darkText font-medium leading-relaxed">
                {BUSINESS_CONFIG.contact.address.display}
              </div>
            </div>
            <Link
              to="/booking"
              className="mt-5 inline-block text-xs uppercase tracking-[0.2em] font-medium text-gold-deep hover:text-gold"
            >
              Book Studio Visit →
            </Link>
          </div>

          {/* Hours Card */}
          <div className="bg-white border border-beige p-7 rounded-sm shadow-luxury hover:border-gold/60 transition-all text-center flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold group-hover:text-espresso transition-all">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-1">
                Studio Hours
              </h3>
              <p className="text-xs text-mutedText mb-3">
                Open 7 days a week for studio & home sessions.
              </p>
              <div className="text-sm font-semibold text-gold-deep">
                {BUSINESS_CONFIG.hours.display}
              </div>
            </div>
            <div className="mt-5 text-[10px] text-mutedText uppercase tracking-wider">
              By Advance Appointment
            </div>
          </div>
        </div>

        {/* Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-beige p-8 sm:p-12 rounded-sm shadow-luxury">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-champagne font-semibold block">
              Concierge Desk
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
              Send a Personalized Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
              Have questions regarding bridal trousseau prep, custom party packages, or group bookings? Leave your note and connect instantly with our studio team on WhatsApp.
            </p>

            <div className="pt-4 border-t border-beige space-y-2 text-xs text-mutedText">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Responses typically within 15–30 minutes during studio hours.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>Direct WhatsApp concierge hotline active daily.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-sans tracking-[0.2em] text-mutedText mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sana Malik"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full bg-ivory border border-beige px-3.5 py-3 text-xs text-darkText font-sans focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-sans tracking-[0.2em] text-mutedText mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +971 55 123 4567 or 055 123 4567"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full bg-ivory border border-beige px-3.5 py-3 text-xs text-darkText font-sans focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-sans tracking-[0.2em] text-mutedText mb-1">
                  Service of Interest
                </label>
                <select
                  value={inquiryService}
                  onChange={(e) => setInquiryService(e.target.value)}
                  className="w-full bg-ivory border border-beige px-3.5 py-3 text-xs text-darkText font-sans focus:outline-none focus:border-gold"
                >
                  <option value="Bridal Couture Artistry">Bridal Couture Artistry</option>
                  <option value="Signature Hair Balayage / Spa">Signature Hair Balayage / Spa</option>
                  <option value="Cellular Skincare Facials">Cellular Skincare Facials</option>
                  <option value="At-Home VIP Concierge Experience">At-Home VIP Concierge Experience</option>
                  <option value="General Salon Inquiry">General Salon Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-sans tracking-[0.2em] text-mutedText mb-1">
                  Message / Special Request
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your event date, required services, or location..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full bg-ivory border border-beige px-3.5 py-3 text-xs text-darkText font-sans focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  iconPosition="right"
                >
                  Dispatch to WhatsApp
                </Button>

                {isDispatched && (
                  <span className="text-xs text-green-700 flex items-center gap-1 font-medium">
                    <Check className="w-4 h-4" /> Message prepared for WhatsApp
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Direct Booking CTA */}
       <div className="text-center pt-6">
  <Link to="/booking">
    <Button 
      variant="outline" 
      size="lg"
      className="!text-black !bg-[#d9b46a] hover:!bg-[#B8863B] hover:!text-black border-[#d9b46a] hover:border-[#B8863B] transition-colors"
    >
      Proceed Directly to Multi-Step Booking →
    </Button>
  </Link>
</div>
      </div>
    </div>
  );
}
