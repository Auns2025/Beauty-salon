import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { formatPKR } from '../../utils/pricing';
import { Clock, Calendar, MapPin, Trash2, Info } from 'lucide-react';

export default function BookingHistorySection() {
  const { bookingHistory, cancelBookingRequest } = useBooking();

  if (!bookingHistory || bookingHistory.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-beige">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold block">
            Local Session Records
          </span>
          <h3 className="font-serif text-2xl font-bold text-espresso">
            Your Booking Requests ({bookingHistory.length})
          </h3>
        </div>
      </div>

      <div className="p-3 bg-ivory border border-beige text-xs text-mutedText flex items-start gap-2 mb-4 rounded-sm">
        <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
        <span>
          These booking requests are preserved in your local browser session for easy reference. To officially modify or cancel a submitted request, please coordinate directly with our concierge on WhatsApp referencing your ID.
        </span>
      </div>

      <div className="space-y-3">
        {bookingHistory.map((req) => (
          <div
            key={req.id}
            className="p-4 bg-white border border-beige hover:border-gold/50 shadow-sm rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg font-bold text-gold-deep">
                  {req.id}
                </span>
                <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-gold/10 text-gold-deep border border-gold/30 rounded-full font-medium">
                  {req.status}
                </span>
                <span className="text-[10px] uppercase font-sans text-mutedText">
                  {req.location}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-darkText/80">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  {req.date} at {req.time}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  Stylist: {req.stylist}
                </span>
              </div>

              <div className="text-xs text-mutedText">
                Services: {req.services.map(s => s.name).join(', ')}
              </div>
            </div>

            <div className="flex items-center gap-4 sm:flex-col sm:items-end w-full sm:w-auto justify-between sm:justify-center pt-2 sm:pt-0 border-t sm:border-t-0 border-beige/60">
              <div className="font-serif text-xl font-bold text-espresso">
                {formatPKR(req.total)}
              </div>

              <button
                type="button"
                onClick={() => cancelBookingRequest(req.id)}
                className="text-xs text-roseAccent hover:underline flex items-center gap-1"
                title="Remove from local history"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Cancel Request</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
