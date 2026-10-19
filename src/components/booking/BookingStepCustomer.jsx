import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import Button from '../common/Button';
import { ArrowLeft, CheckCircle2, AlertCircle, Phone, User, MapPin, FileText } from 'lucide-react';

export default function BookingStepCustomer({ onBack, onSubmit }) {
  const { customerInfo, setCustomerInfo, serviceLocation } = useBooking();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!customerInfo.name || customerInfo.name.trim().length < 2) {
      errs.name = 'Please provide your full name (minimum 2 letters).';
    }

    const cleanPhone = customerInfo.phone ? customerInfo.phone.replace(/\D/g, '') : '';
    if (!customerInfo.phone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid WhatsApp / Phone number with at least 10 digits.';
    }

    if (serviceLocation === 'At Home' && (!customerInfo.address || customerInfo.address.trim().length < 5)) {
      errs.address = 'A complete residential address is required for At Home beauty services.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-beige pb-4">
        <h3 className="font-serif text-2xl font-bold text-espresso">
          3. Client Information
        </h3>
        <p className="text-xs text-mutedText mt-0.5">
          Please provide your contact coordinates so our concierge can reach you to confirm your appointment.
        </p>
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="customer-name"
            className="block text-[11px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold mb-1.5 flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-gold" />
            <span>Full Name *</span>
          </label>
          <input
            id="customer-name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Ayesha Khan"
            value={customerInfo.name}
            onChange={(e) => {
              setCustomerInfo(prev => ({ ...prev, name: e.target.value }));
              if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
            }}
            className={`w-full bg-white border px-4 py-3 text-sm text-darkText font-sans transition-all focus:outline-none ${
              errors.name ? 'border-roseAccent ring-1 ring-roseAccent' : 'border-beige focus:border-gold focus:ring-1 focus:ring-gold'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-roseAccent flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* WhatsApp / Phone */}
        <div>
          <label
            htmlFor="customer-phone"
            className="block text-[11px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold mb-1.5 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span>WhatsApp / Phone Number *</span>
          </label>
          <input
            id="customer-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. 0300 1234567 or +92 300 1234567"
            value={customerInfo.phone}
            onChange={(e) => {
              setCustomerInfo(prev => ({ ...prev, phone: e.target.value }));
              if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
            }}
            className={`w-full bg-white border px-4 py-3 text-sm text-darkText font-sans transition-all focus:outline-none ${
              errors.phone ? 'border-roseAccent ring-1 ring-roseAccent' : 'border-beige focus:border-gold focus:ring-1 focus:ring-gold'
            }`}
          />
          <p className="mt-1 text-[11px] text-mutedText">
            Our concierge will contact you via WhatsApp to verify your requested time slot.
          </p>
          {errors.phone && (
            <p className="mt-1 text-xs text-roseAccent flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Address (Only for Home Service) */}
        <div>
          <label
            htmlFor="customer-address"
            className="block text-[11px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold mb-1.5 flex items-center justify-between"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Residential Address {serviceLocation === 'At Home' ? '*' : '(Optional for Studio)'}</span>
            </span>
            {serviceLocation === 'At Home' && (
              <span className="text-[10px] text-roseAccent uppercase tracking-wider">Required for Home Visit</span>
            )}
          </label>
          <input
            id="customer-address"
            type="text"
            autoComplete="street-address"
            placeholder={serviceLocation === 'At Home' ? 'House / Flat #, Street, Block, Phase, Area (e.g. DHA / Gulberg)' : 'Optional'}
            value={customerInfo.address}
            onChange={(e) => {
              setCustomerInfo(prev => ({ ...prev, address: e.target.value }));
              if (errors.address) setErrors(prev => ({ ...prev, address: '' }));
            }}
            className={`w-full bg-white border px-4 py-3 text-sm text-darkText font-sans transition-all focus:outline-none ${
              errors.address ? 'border-roseAccent ring-1 ring-roseAccent' : 'border-beige focus:border-gold focus:ring-1 focus:ring-gold'
            }`}
          />
          {errors.address && (
            <p className="mt-1 text-xs text-roseAccent flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.address}</span>
            </p>
          )}
        </div>

        {/* Special Notes / Bridal Notes */}
        <div>
          <label
            htmlFor="customer-notes"
            className="block text-[11px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold mb-1.5 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-gold" />
            <span>Special Requests / Skin Allergies / Bridal Notes (Optional)</span>
          </label>
          <textarea
            id="customer-notes"
            rows={3}
            placeholder="Tell us about skin sensitivities, bridal trial preferences, hair length, or event timing..."
            value={customerInfo.notes}
            onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
            className="w-full bg-white border border-beige px-4 py-3 text-sm text-darkText font-sans focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-beige flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={onBack}
          icon={ArrowLeft}
        >
          Back: Preferences
        </Button>
        <Button
          type="submit"
          variant="primary"
          size="md"
          icon={CheckCircle2}
          iconPosition="right"
        >
          Review & Dispatch Request
        </Button>
      </div>
    </form>
  );
}
