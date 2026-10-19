import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../../data/services';
import { useBooking } from '../../context/BookingContext';
import { formatPKR, getMinDateString } from '../../utils/pricing';
import Button from '../common/Button';
import { Calendar, Sparkles, ArrowRight, Info } from 'lucide-react';

export default function QuickBooking() {
  const navigate = useNavigate();
  const { initiateQuickBooking } = useBooking();

  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0]?.id || '');
  const [selectedDate, setSelectedDate] = useState('');
  const minDate = getMinDateString();

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    initiateQuickBooking(selectedServiceId, selectedDate);
    navigate('/booking');
  };

  return (
    <div className="relative z-20 -mt-8 sm:-mt-10 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-[#1A120E]/95 text-[#F8F5F0] border border-[rgba(217,180,106,0.35)] shadow-2xl backdrop-blur-xl p-5 sm:p-7 rounded-[4px]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-[rgba(217,180,106,0.2)] pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D9B46A]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#D9B46A] font-semibold">
              Quick Appointment Inquiry
            </span>
          </div>
          <div className="text-[11px] text-[#B8AEA8] flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-[#D9B46A]" />
            <span>Availability verified directly by studio concierge on WhatsApp</span>
          </div>
        </div>

        <form onSubmit={handleCheckAvailability} className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-end">
          {/* Service Picker */}
          <div className="sm:col-span-5">
            <label className="block text-[10px] uppercase font-sans tracking-[0.18em] text-[#B8AEA8] mb-1.5 font-medium">
              Select Desired Service
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full bg-[#100C0A] border border-[rgba(217,180,106,0.3)] px-3.5 py-3 text-xs text-[#F8F5F0] font-sans focus:outline-none focus:border-[#D9B46A] rounded-[2px]"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id} className="bg-[#100C0A] text-[#F8F5F0]">
                  {s.name} — {formatPKR(s.price)} ({s.category})
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div className="sm:col-span-4">
            <label className="block text-[10px] uppercase font-sans tracking-[0.18em] text-[#B8AEA8] mb-1.5 font-medium">
              Select Preferred Date
            </label>
            <input
              type="date"
              min={minDate}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-[#100C0A] border border-[rgba(217,180,106,0.3)] px-3.5 py-2.5 text-xs text-[#F8F5F0] font-sans focus:outline-none focus:border-[#D9B46A] rounded-[2px]"
            />
          </div>

          {/* CTA Button */}
          <div className="sm:col-span-3">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full h-[42px]"
              icon={ArrowRight}
              iconPosition="right"
            >
              Check Slot
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
