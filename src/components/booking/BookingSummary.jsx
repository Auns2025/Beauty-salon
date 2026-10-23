import React, { useState } from 'react';
import { Trash2, Clock, MapPin, User, Calendar, ShieldCheck, ChevronUp, ChevronDown, Package as PackageIcon, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { formatAED, formatDuration } from '../../utils/pricing';
import { BUSINESS_CONFIG } from '../../config/business';

export default function BookingSummary({ showEditControls = true }) {
  const {
    selectedServices,
    selectedPackage,
    removeService,
    clearPackage,
    serviceLocation,
    preferredStylist,
    appointmentDate,
    appointmentTime,
    totals,
  } = useBooking();

  const [mobileExpanded, setMobileExpanded] = useState(false);

  const hasItems = selectedServices.length > 0 || !!selectedPackage;

  return (
    <>
      {/* Desktop / Tablet Sticky Card */}
      <div className="bg-white border border-beige shadow-luxury p-6 rounded-sm sticky top-28">
        <div className="border-b border-beige pb-4 mb-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-champagne font-semibold block">
              Reservation Summary
            </span>
            <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-espresso">
              Your Experience
            </h3>
          </div>
          <div className="text-right">
            <span className="px-2.5 py-1 text-[10px] font-sans uppercase tracking-wider bg-ivory text-gold-deep border border-gold/30">
              {serviceLocation}
            </span>
          </div>
        </div>

        {/* Selected Services & Packages List */}
        <div className="space-y-3 mb-5 max-h-72 overflow-y-auto pr-1">
          {!hasItems ? (
            <div className="py-8 text-center text-xs text-mutedText italic border border-dashed border-beige">
              No package or treatments selected yet. Please select an option to continue.
            </div>
          ) : (
            <>
              {/* Selected Package (if any) */}
              {selectedPackage && (
                <div className="p-3 bg-ivory rounded-sm border border-gold/40 mb-3 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-espresso font-bold text-xs">
                      <PackageIcon className="w-3.5 h-3.5 text-gold-deep flex-shrink-0" />
                      <span>{selectedPackage.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-sm font-bold text-gold-deep">
                        {formatAED(selectedPackage.price)}
                      </span>
                      {showEditControls && (
                        <button
                          type="button"
                          onClick={clearPackage}
                          className="text-mutedText hover:text-roseAccent p-1 transition-colors"
                          title="Remove package"
                          aria-label="Remove package"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Points Package Breakdown */}
                  {selectedPackage.type === 'points' ? (
                    <div className="pt-2 border-t border-beige/80 text-[11px]">
                      <div className="text-gold-deep font-semibold mb-1">
                        Chosen Services ({selectedPackage.usedPoints || 0}/{selectedPackage.totalPoints} Points):
                      </div>
                      {selectedPackage.selectedPackageServices && selectedPackage.selectedPackageServices.length > 0 ? (
                        <div className="space-y-1 pl-1">
                          {selectedPackage.selectedPackageServices.map((item) => (
                            <div key={item.id} className="flex justify-between text-mutedText">
                              <span>• {item.name}</span>
                              <span className="text-espresso font-medium">{item.points} pt{item.points > 1 ? 's' : ''}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-roseAccent text-[10px] italic">
                          Click treatments on the card to choose up to {selectedPackage.totalPoints} points.
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Fixed Package Services */
                    <div className="pt-2 border-t border-beige/80 text-[11px] text-mutedText">
                      <span className="text-espresso font-semibold block mb-0.5">Includes {selectedPackage.includedServices?.length} treatments:</span>
                      <span className="line-clamp-2">{selectedPackage.includedServices?.join(', ')}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Individual Services */}
              {selectedServices.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between gap-3 text-xs pb-2 border-b border-beige/60 group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-darkText truncate group-hover:text-gold-deep transition-colors">
                      {service.name}
                    </div>
                    <div className="text-[11px] text-mutedText">
                      {formatDuration(service.durationMinutes)}
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <span className="font-semibold text-espresso">
                      {formatAED(service.price)}
                    </span>
                    {showEditControls && (
                      <button
                        type="button"
                        onClick={() => removeService(service.id)}
                        className="text-mutedText hover:text-roseAccent p-1 transition-colors"
                        title="Remove service"
                        aria-label={`Remove ${service.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Breakdown Calculation */}
        {hasItems && (
          <div className="space-y-2 text-xs pt-2 border-t border-beige mb-5">
            <div className="flex justify-between text-mutedText">
              <span>Investment Subtotal</span>
              <span className="text-darkText font-medium">{totals.formattedSubtotal}</span>
            </div>

            {serviceLocation === 'At Home' && (
              <div className="flex justify-between text-mutedText">
                <span className="flex items-center gap-1 text-gold-deep">
                  <MapPin className="w-3 h-3" /> Home Concierge
                </span>
                <span className="text-gold-deep font-semibold">Free (Dubai & Sharjah)</span>
              </div>
            )}

            <div className="flex justify-between text-mutedText">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gold" /> Estimated Duration
              </span>
              <span className="text-darkText font-medium">{totals.formattedDuration}</span>
            </div>

            {/* Appointment Meta If Selected */}
            {appointmentDate && (
              <div className="flex justify-between text-mutedText">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gold" /> Date & Time
                </span>
                <span className="text-darkText font-medium">
                  {appointmentDate} {appointmentTime ? `· ${appointmentTime}` : ''}
                </span>
              </div>
            )}

            {preferredStylist && (
              <div className="flex justify-between text-mutedText">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3 text-gold" /> Artist
                </span>
                <span className="text-darkText font-medium">{preferredStylist}</span>
              </div>
            )}
          </div>
        )}

        {/* Grand Total */}
        <div className="pt-4 border-t border-gold/40 flex items-baseline justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-mutedText">Total Investment</div>
            <div className="text-[10px] text-champagne">Pay after service completion</div>
          </div>
          <div className="font-sans text-2xl font-extrabold text-gold-deep">
            {totals.formattedGrandTotal}
          </div>
        </div>

        {/* Reassurance Disclaimer */}
        <div className="mt-4 p-3 bg-ivory rounded-sm border border-beige text-[11px] text-mutedText flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
          <span>
            {serviceLocation === 'At Home'
              ? 'Complimentary free home visit across Dubai & Sharjah with sterile mobile equipment.'
              : 'Private luxury styling station prepared exclusively for you.'}
          </span>
        </div>
      </div>

      {/* Mobile Floating Drawer Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-espresso text-ivory border-t border-gold/30 shadow-2xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-gold">
              {selectedPackage ? selectedPackage.shortName || 'Package' : `${selectedServices.length} Selected`} · {totals.formattedDuration}
            </div>
            <div className="font-sans text-xl font-extrabold text-gold-light">
              {totals.formattedGrandTotal}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileExpanded(!mobileExpanded)}
            className="flex items-center gap-1 text-xs text-ivory/80 hover:text-gold border border-gold/40 px-3 py-1.5 rounded-sm"
          >
            <span>{mobileExpanded ? 'Hide Breakdown' : 'View Details'}</span>
            {mobileExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Mobile Expanded List */}
        {mobileExpanded && (
          <div className="mt-4 pt-3 border-t border-gold/20 max-h-52 overflow-y-auto space-y-2 text-xs">
            {selectedPackage && (
              <div className="flex justify-between items-center text-gold font-semibold">
                <span>{selectedPackage.name}</span>
                <span>{formatAED(selectedPackage.price)}</span>
              </div>
            )}
            {selectedServices.map(s => (
              <div key={s.id} className="flex justify-between items-center text-ivory/80">
                <span>{s.name}</span>
                <span className="text-gold">{formatAED(s.price)}</span>
              </div>
            ))}
            {serviceLocation === 'At Home' && (
              <div className="flex justify-between items-center text-gold/90">
                <span>Home Visit Service (Dubai & Sharjah)</span>
                <span>FREE</span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}