import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { STYLISTS } from '../../data/services';
import { BUSINESS_CONFIG } from '../../config/business';
import { getMinDateString, formatTimeSlot } from '../../utils/pricing';
import Button from '../common/Button';
import { ArrowLeft, ArrowRight, Home, Building2, Calendar, Clock, User, AlertCircle, Info } from 'lucide-react';

export default function BookingStepPreferences({ onBack, onNext }) {
  const {
    serviceLocation,
    setServiceLocation,
    preferredStylist,
    setPreferredStylist,
    appointmentDate,
    setAppointmentDate,
    appointmentTime,
    setAppointmentTime,
  } = useBooking();

  const [errorMessage, setErrorMessage] = useState('');
  const minDate = getMinDateString();

  const timeSlots = (BUSINESS_CONFIG.hours.arrivalSlots || [
    { label: "9:00 AM", value: "9:00 AM" },
    { label: "12:00 PM", value: "12:00 PM" },
    { label: "3:00 PM", value: "3:00 PM" },
    { label: "5:30 PM", value: "5:30 PM" },
    { label: "7:30 PM", value: "7:30 PM" },
  ]).map(slot => ({
    raw: slot.value || slot.label,
    label: slot.label
  }));

  const handleProceed = () => {
    if (!appointmentDate) {
      setErrorMessage('Please select a preferred appointment date.');
      return;
    }
    if (!appointmentTime) {
      setErrorMessage('Please select a preferred time slot.');
      return;
    }
    setErrorMessage('');
    onNext();
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-beige pb-4">
        <h3 className="font-serif text-2xl font-bold text-espresso">
          2. Appointment Preferences
        </h3>
        <p className="text-xs text-mutedText mt-0.5">
          Select whether you wish to be hosted at our boutique studio or receive VIP service at your residence.
        </p>
      </div>

      {/* 1. Venue / Location Selection */}
      <div className="space-y-3">
        <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold">
          Select Experience Venue
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Salon Option */}
          <button
            type="button"
            onClick={() => setServiceLocation('Salon')}
            className={`p-4 sm:p-5 border text-left transition-all duration-300 relative ${
              serviceLocation === 'Salon'
                ? 'bg-white border-gold ring-1 ring-gold shadow-luxury'
                : 'bg-white/70 border-beige hover:border-gold/50'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2.5 rounded-full ${
                serviceLocation === 'Salon' ? 'bg-gold/20 text-gold-deep' : 'bg-beige text-mutedText'
              }`}>
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-lg font-semibold text-espresso">
                  Boutique Studio
                </div>
                <p className="text-xs text-mutedText font-light mt-1">
                  Enjoy our tranquil, private suites with champagne lighting and complete salon amenities.
                </p>
                <div className="mt-2 text-[10px] uppercase font-sans tracking-wider text-gold-deep">
                  Standard Studio Pricing
                </div>
              </div>
            </div>
          </button>

          {/* At Home Option */}
          <button
            type="button"
            onClick={() => setServiceLocation('At Home')}
            className={`p-4 sm:p-5 border text-left transition-all duration-300 relative ${
              serviceLocation === 'At Home'
                ? 'bg-white border-gold ring-1 ring-gold shadow-luxury'
                : 'bg-white/70 border-beige hover:border-gold/50'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2.5 rounded-full ${
                serviceLocation === 'At Home' ? 'bg-gold/20 text-gold-deep' : 'bg-beige text-mutedText'
              }`}>
                <Home className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-lg font-semibold text-espresso flex items-center gap-2">
                  <span>At Home Concierge</span>
                  <span className="text-[10px] font-sans font-medium px-2 py-0.5 bg-gold/15 text-gold-deep border border-gold/30">
                    VIP
                  </span>
                </div>
                <p className="text-xs text-mutedText font-light mt-1">
                  Our certified beauty specialists arrive at your residence with sanitized kits and fresh linens.
                </p>
                <div className="mt-2 text-[10px] uppercase font-sans tracking-wider text-gold-deep font-semibold">
                  Free Home Service across Dubai & Sharjah
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* 2. Stylist Selection */}
      <div className="space-y-3">
        <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold flex items-center justify-between">
          <span>Preferred Beauty Artist</span>
          <span className="text-[10px] font-normal text-mutedText lowercase">optional preference</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {STYLISTS.map((artist) => {
            const isSelected = preferredStylist === artist.name;
            return (
              <button
                key={artist.id}
                type="button"
                onClick={() => setPreferredStylist(artist.name)}
                className={`p-3.5 border text-left transition-all duration-200 flex items-start gap-3 ${
                  isSelected
                    ? 'bg-white border-gold ring-1 ring-gold shadow-sm'
                    : 'bg-white/70 border-beige hover:border-gold/40'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif font-bold ${
                  isSelected ? 'bg-gold text-espresso' : 'bg-beige text-darkText'
                }`}>
                  {artist.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-xs text-espresso">
                    {artist.name}
                  </div>
                  <div className="text-[10px] text-gold-deep font-sans">
                    {artist.role}
                  </div>
                  <div className="text-[10px] text-mutedText truncate mt-0.5 font-light">
                    {artist.note}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Date Selection */}
      <div className="space-y-3">
        <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold">
          Preferred Appointment Date
        </label>
        <div className="relative max-w-sm">
          <input
            type="date"
            min={minDate}
            value={appointmentDate}
            onChange={(e) => {
              setAppointmentDate(e.target.value);
              if (errorMessage) setErrorMessage('');
            }}
            className="w-full bg-white border border-beige px-4 py-3 text-sm text-darkText font-sans focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>
        <p className="text-[11px] text-mutedText">
          Booking requests must be placed for today or a future date.
        </p>
      </div>

      {/* 4. Time Slot Selection */}
      <div className="space-y-3">
        <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold">
          Preferred Arrival Time Slot
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5">
          {timeSlots.map((slot) => {
            const isSelected = appointmentTime === slot.label || appointmentTime === slot.raw;
            return (
              <button
                key={slot.raw}
                type="button"
                onClick={() => {
                  setAppointmentTime(slot.label);
                  if (errorMessage) setErrorMessage('');
                }}
                className={`py-3 px-2 text-center text-xs font-sans tracking-wide border transition-all duration-200 ${
                  isSelected
                    ? 'bg-gold text-espresso border-gold font-medium shadow-goldGlow'
                    : 'bg-white text-darkText border-beige hover:border-gold/60'
                }`}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Verification Notice */}
      <div className="p-3.5 bg-ivory border border-beige rounded-sm flex items-start gap-2.5 text-xs text-mutedText">
        <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-medium text-darkText">Request Status Notice: </span>
          Online slot selection initiates a formal booking request. Our concierge verifies stylist availability and coordinates your slot directly on WhatsApp.
        </div>
      </div>

      {/* Error Feedback */}
      {errorMessage && (
        <div className="p-3 bg-roseAccent/10 border border-roseAccent/30 text-roseAccent text-xs flex items-center gap-2 rounded-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-beige flex items-center justify-between">
        <Button
          variant="outline"
          size="md"
          onClick={onBack}
          icon={ArrowLeft}
        >
          Back: Services
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={handleProceed}
          icon={ArrowRight}
          iconPosition="right"
        >
          Next: Contact Details
        </Button>
      </div>
    </div>
  );
}
