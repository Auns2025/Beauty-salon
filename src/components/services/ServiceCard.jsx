import React, { useState } from 'react';
import { Clock, Check, Plus, Info, Sparkles } from 'lucide-react';
import { formatAED, formatDuration } from '../../utils/pricing';
import Button from '../common/Button';

export default function ServiceCard({
  service,
  isSelected = false,
  onToggle,
  showFullDetails = true,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isSelected
          ? 'border-gold ring-1 ring-gold shadow-luxuryHover'
          : 'border-beige hover:border-gold/50 shadow-luxury hover:shadow-luxuryHover'
      }`}
    >
      {/* Service Image with Subtle Editorial Zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-espresso/10">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
          <span className="px-2.5 py-1 text-[10px] font-sans uppercase tracking-[0.15em] bg-espresso/90 text-gold border border-gold/30 backdrop-blur-sm">
            {service.category}
          </span>
          {service.points && (
            <span className="px-2 py-1 text-[9px] font-sans uppercase tracking-[0.15em] bg-[#2B1D14]/90 text-[#F0D394] border border-[#D9B46A]/40 backdrop-blur-sm">
              {service.points} Pts
            </span>
          )}
          {service.tag && (
            <span className="px-2 py-1 text-[9px] font-sans uppercase tracking-[0.15em] bg-gold/90 text-espresso font-semibold">
              {service.tag}
            </span>
          )}
        </div>

        {/* Selected Overlay Indicator */}
        {isSelected && (
          <div className="absolute top-3 right-3 bg-gold text-espresso w-6 h-6 rounded-full flex items-center justify-center shadow-md">
            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        )}

        {/* Price & Duration Overlay at bottom of image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-ivory">
          <div>
            <div className="text-[10px] font-sans uppercase tracking-wider text-ivory/80">Investment</div>
            <div className="font-sans text-xl sm:text-2xl font-extrabold text-gold-light leading-none">
              {formatAED(service.price)}
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-sans bg-espresso/80 px-2 py-1 border border-gold/20 backdrop-blur-sm">
            <Clock className="w-3 h-3 text-gold" />
            <span>{formatDuration(service.durationMinutes)}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-sans text-base sm:text-lg font-bold uppercase tracking-wide text-espresso mb-1.5 group-hover:text-gold-deep transition-colors">
            {service.name}
          </h3>
          <p className="text-xs text-mutedText font-light leading-relaxed mb-3">
            {service.shortDesc}
          </p>

          {showFullDetails && service.fullDesc && (
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="text-[10px] font-sans uppercase tracking-[0.15em] text-champagne hover:text-gold flex items-center gap-1 focus:outline-none"
              >
                <Info className="w-3 h-3" />
                <span>{expanded ? 'Hide Treatment Details' : 'View Full Details'}</span>
              </button>

              {expanded && (
                <div className="mt-2.5 p-3 bg-ivory rounded-sm text-xs text-darkText/80 leading-relaxed border border-beige animate-fadeIn">
                  {service.fullDesc}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-beige/60 flex items-center justify-between gap-3">
          <div className="text-[11px] text-mutedText hidden sm:block">
            {isSelected ? 'Ready in booking tray' : 'Available for Salon & Free Home'}
          </div>
          <Button
            variant={isSelected ? 'primary' : 'secondary'}
            size="sm"
            onClick={onToggle}
            className="w-full sm:w-auto"
            icon={isSelected ? Check : Plus}
          >
            {isSelected ? 'Added to Tray' : 'Add Service'}
          </Button>
        </div>
      </div>
    </div>
  );
}
