import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { createWhatsAppLink, buildWhatsAppMessage } from '../../utils/whatsapp';
import { formatAED, formatDuration } from '../../utils/pricing';
import { BUSINESS_CONFIG } from '../../config/business';
import Button from '../common/Button';
import { MessageCircle, Copy, Check, Calendar, Clock, MapPin, User, Sparkles, RefreshCw, ShieldAlert } from 'lucide-react';

export default function BookingStepConfirmation() {
  const { confirmedRequest, startNewBooking } = useBooking();
  const [copied, setCopied] = useState(false);

  if (!confirmedRequest) {
    return (
      <div className="text-center py-12">
        <p className="text-mutedText">No active booking request found.</p>
        <Button variant="primary" size="md" onClick={startNewBooking} className="mt-4">
          Start New Booking
        </Button>
      </div>
    );
  }

  const whatsappUrl = createWhatsAppLink(confirmedRequest);
  const messageText = buildWhatsAppMessage(confirmedRequest);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Editorial Luxury Ticket Card */}
      <div className="bg-white border-2 border-gold/60 p-6 sm:p-8 rounded-sm shadow-luxury relative overflow-hidden">
        {/* Subtle watermark in background */}
        <div className="absolute right-4 bottom-4 font-serif italic text-9xl text-beige/30 select-none pointer-events-none">
          SM
        </div>

        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/40 text-gold-deep text-xs font-sans uppercase tracking-[0.2em] rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Booking Request Generated</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mb-1">
            Appointment Requested
          </h3>
          <div className="font-sans text-xs tracking-[0.25em] text-champagne uppercase font-medium">
            Reference ID: <span className="font-bold text-espresso text-sm tracking-widest">{confirmedRequest.id}</span>
          </div>

          {/* Pending Status Banner */}
          <div className="mt-4 p-3 bg-ivory border border-gold/30 rounded-sm text-xs text-mutedText flex items-start sm:items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0 mt-1 sm:mt-0" />
            <span>
              <strong className="text-espresso">Status: Pending Staff Confirmation.</strong> Your time slot is reserved for verification by our studio concierge.
            </span>
          </div>
        </div>

        {/* Structured Appointment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-ivory/60 p-5 border border-beige rounded-sm mb-6">
          <div className="space-y-3">
            <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-champagne font-semibold">
              Reservation Details
            </div>
            <div className="flex items-center gap-2 text-xs text-darkText">
              <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
              <span><strong>Date:</strong> {confirmedRequest.date}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-darkText">
              <Clock className="w-4 h-4 text-gold flex-shrink-0" />
              <span><strong>Time:</strong> {confirmedRequest.time} ({formatDuration(confirmedRequest.durationMinutes)})</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-darkText">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
              <span><strong>Venue:</strong> {confirmedRequest.location} {confirmedRequest.address ? `(${confirmedRequest.address})` : ''}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-darkText">
              <User className="w-4 h-4 text-gold flex-shrink-0" />
              <span><strong>Selected Artist:</strong> {confirmedRequest.stylist}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-champagne font-semibold">
              Requested Services ({confirmedRequest.services.length})
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto text-xs">
              {confirmedRequest.services.map((s, idx) => (
                <div key={idx} className="flex justify-between text-darkText/90">
                  <span>• {s.name}</span>
                  <span className="font-medium text-espresso">{formatAED(s.price)}</span>
                </div>
              ))}
              {confirmedRequest.homeFee > 0 && (
                <div className="flex justify-between text-gold-deep pt-1 border-t border-beige">
                  <span>• Home Concierge Fee</span>
                  <span className="font-medium">{formatAED(confirmedRequest.homeFee)}</span>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-gold/40 flex justify-between items-baseline">
              <span className="text-xs uppercase font-sans tracking-wider text-mutedText font-medium">Total Investment</span>
              <span className="font-sans text-2xl font-bold text-gold-deep">{formatAED(confirmedRequest.total)}</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Dispatch Section */}
        <div className="bg-espresso text-ivory p-6 sm:p-7 rounded-sm border border-gold/40 text-center space-y-4">
          <div className="max-w-lg mx-auto">
            <h4 className="font-serif text-2xl text-gold-light mb-1.5">
              Dispatch to WhatsApp Concierge
            </h4>
            <p className="text-xs text-ivory/80 font-light leading-relaxed">
              To complete your reservation, please send this pre-filled appointment summary to our team on WhatsApp. Our concierge will review your schedule and confirm your artist immediately.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-green-700 hover:bg-green-600 border-green-600 text-white font-semibold"
                icon={MessageCircle}
              >
                Send on WhatsApp
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              onClick={handleCopyMessage}
              className="w-full sm:w-auto text-ivory border-ivory/30 hover:border-gold hover:text-gold"
              icon={copied ? Check : Copy}
            >
              {copied ? 'Message Copied!' : 'Copy Message Text'}
            </Button>
          </div>

          <div className="text-[11px] text-ivory/50 flex items-center justify-center gap-1.5 pt-1">
            <ShieldAlert className="w-3.5 h-3.5 text-gold/70" />
            <span>If WhatsApp does not open automatically, copy the message text and send to {BUSINESS_CONFIG.contact.whatsappDisplay}.</span>
          </div>
        </div>

        {/* Action: Book Another */}
        <div className="pt-6 border-t border-beige flex items-center justify-between text-xs text-mutedText">
          <span>This appointment request is saved to your local browser history below.</span>
          <button
            type="button"
            onClick={startNewBooking}
            className="text-gold-deep hover:text-gold uppercase tracking-[0.15em] font-medium flex items-center gap-1.5 focus:outline-none"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Book Another Appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
