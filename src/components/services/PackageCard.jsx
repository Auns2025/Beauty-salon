import React, { useState } from 'react';
import { Sparkles, Check, CheckCircle2, Plus, AlertCircle, ChevronDown, ChevronUp, Clock, Layers } from 'lucide-react';
import { formatAED, formatDuration } from '../../utils/pricing';
import Button from '../common/Button';

export default function PackageCard({
  pkg,
  isSelected = false,
  onSelect,
  onClear,
  onToggleService,
  selectedServicesInPkg = [],
  usedPoints = 0,
}) {
  const [expandedServices, setExpandedServices] = useState(false);
  const [pointAlert, setPointAlert] = useState('');

  const isPointsType = pkg.type === 'points';
  const remainingPoints = isPointsType ? Math.max(0, pkg.totalPoints - usedPoints) : 0;

  const handleServiceClick = (serviceItem) => {
    if (!onToggleService) return;
    const result = onToggleService(serviceItem);
    if (result && !result.success && result.reason) {
      setPointAlert(result.reason);
      setTimeout(() => setPointAlert(''), 4500);
    } else {
      setPointAlert('');
    }
  };

  return (
    <div
      className={`group relative bg-white border transition-all duration-300 flex flex-col justify-between rounded-sm overflow-hidden ${
        isSelected
          ? 'border-gold ring-1 ring-gold shadow-luxuryHover'
          : 'border-beige hover:border-gold/50 shadow-luxury hover:shadow-luxuryHover'
      }`}
    >
      {/* Top Header Banner */}
      <div className="p-5 pb-4 bg-gradient-to-br from-[#1A120E] via-[#241A14] to-[#100C0A] text-[#F8F5F0] border-b border-[rgba(217,180,106,0.25)]">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-2.5 py-1 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] bg-[#100C0A]/90 text-[#D9B46A] border border-[rgba(217,180,106,0.35)]">
            {pkg.tag || `Package ${pkg.number}`}
          </span>
          <span className="text-[11px] font-sans text-[#F0D394] font-medium flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#D9B46A]" />
            <span>{formatDuration(pkg.durationMinutes)}</span>
          </span>
        </div>

        <h3 className="font-sans text-lg sm:text-xl font-bold uppercase tracking-wide text-[#F8F5F0] mb-2 group-hover:text-[#F0D394] transition-colors">
          {pkg.name}
        </h3>

        <p className="text-xs text-[#B8AEA8] font-light leading-relaxed mb-4">
          {pkg.description}
        </p>

        {/* Price & Points Badge */}
        <div className="flex items-baseline justify-between pt-3 border-t border-[rgba(217,180,106,0.2)]">
          <div>
            <div className="text-[9px] uppercase tracking-wider text-[#B8AEA8]">Package Investment</div>
            <div className="font-sans text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AA60] via-[#F4DEA9] to-[#C99D51]">
              {formatAED(pkg.price)}
            </div>
          </div>

          {isPointsType ? (
            <div className="text-right">
              <span className="inline-block px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider bg-[#D9B46A] text-[#100C0A] rounded-[2px] shadow-sm">
                {pkg.totalPoints} Points Total
              </span>
            </div>
          ) : (
            <div className="text-right">
              <span className="inline-block px-2.5 py-1 text-[10px] font-sans font-semibold uppercase tracking-wider bg-[#2B1D14] text-[#D9B46A] border border-[#D9B46A]/40">
                Fixed Inclusive
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Package Content & Service Breakdown */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {isPointsType ? (
          <div>
            {/* Points Tracker Bar when selected */}
            {isSelected ? (
              <div className="mb-4 p-3.5 bg-[#FAF6F0] border border-gold/30 rounded-sm">
                <div className="flex items-center justify-between text-xs font-sans font-semibold mb-2">
                  <span className="text-espresso flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    Points Allowance
                  </span>
                  <span className="text-gold-deep">
                    {usedPoints} of {pkg.totalPoints} Pts Used ({remainingPoints} left)
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-beige rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold via-champagne to-gold-deep transition-all duration-300"
                    style={{ width: `${Math.min(100, (usedPoints / pkg.totalPoints) * 100)}%` }}
                  />
                </div>

                {/* Over-limit warning if triggered */}
                {pointAlert && (
                  <div className="mt-2 text-[11px] text-roseAccent flex items-start gap-1 animate-fadeIn">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>{pointAlert}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="mb-4 p-3 bg-ivory border border-beige rounded-sm text-xs text-mutedText flex items-center justify-between">
                <span>Select this package to pick eligible services</span>
                <span className="text-gold-deep font-semibold">Choose {pkg.totalPoints} Pts</span>
              </div>
            )}

            {/* Eligible Services Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-champagne font-semibold">
                  Eligible Menu ({pkg.eligibleServices?.length || 0} services available)
                </span>
                <button
                  type="button"
                  onClick={() => setExpandedServices(!expandedServices)}
                  className="text-[11px] text-gold-deep hover:text-gold flex items-center gap-0.5 font-medium"
                >
                  <span>{expandedServices ? 'Compact List' : 'View All'}</span>
                  {expandedServices ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              </div>

              <div className={`space-y-1.5 overflow-y-auto ${expandedServices ? 'max-h-80' : 'max-h-48'} pr-1`}>
                {pkg.eligibleServices?.map((item) => {
                  const isItemChosen = selectedServicesInPkg.some(s => s.id === item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => isSelected && handleServiceClick(item)}
                      className={`flex items-center justify-between p-2 rounded-[2px] text-xs transition-all ${
                        !isSelected
                          ? 'opacity-80 bg-ivory/60'
                          : isItemChosen
                          ? 'bg-gold/15 border border-gold/40 text-espresso font-medium cursor-pointer shadow-sm'
                          : 'bg-ivory hover:bg-beige/60 text-darkText border border-beige/60 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        {isSelected ? (
                          <div
                            className={`w-4 h-4 rounded-[2px] flex items-center justify-center text-[10px] border transition-colors ${
                              isItemChosen
                                ? 'bg-gold border-gold text-espresso font-bold'
                                : 'border-gold/40 bg-white'
                            }`}
                          >
                            {isItemChosen && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                        )}
                        <span className="truncate">{item.name}</span>
                        {item.tag && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-gold/15 text-gold-deep border border-gold/30 font-semibold tracking-wider uppercase flex-shrink-0">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <span className="px-1.5 py-0.5 text-[10px] font-sans uppercase font-semibold bg-white border border-beige text-gold-deep rounded-[2px]">
                        {item.points} pt{item.points > 1 ? 's' : ''}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Fixed Package Services List */
          <div>
            <div className="text-[10px] font-sans uppercase tracking-[0.15em] text-champagne font-semibold mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-gold" />
              <span>All Included Treatments ({pkg.includedServices?.length || 0})</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-56 overflow-y-auto pr-1">
              {pkg.includedServices?.map((serviceName, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 bg-ivory rounded-[2px] border border-beige/60 text-xs text-darkText"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep flex-shrink-0" />
                  <span className="font-normal truncate">{serviceName}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-beige flex items-center justify-between gap-3">
          <div className="text-[11px] text-mutedText hidden sm:block">
            {isSelected ? (
              <span className="text-gold-deep font-semibold">
                {isPointsType
                  ? `${selectedServicesInPkg.length} services chosen (${usedPoints}/${pkg.totalPoints} pts)`
                  : 'Package selected in booking tray'}
              </span>
            ) : (
              'Available for Salon & Free Home Service'
            )}
          </div>

          {isSelected ? (
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant="secondary"
                size="sm"
                onClick={onClear}
                className="w-full sm:w-auto text-xs"
              >
                Change Package
              </Button>
            </div>
          ) : (
            <Button
              variant="primary"
              size="sm"
              onClick={onSelect}
              className="w-full sm:w-auto"
              icon={Plus}
            >
              Select Package
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}