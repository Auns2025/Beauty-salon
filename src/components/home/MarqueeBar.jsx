import React from 'react';

export default function MarqueeBar() {
  const items = [
    "Precision Hair",
    "Cellular Skin",
    "Haute Makeup",
    "Couture Bridal",
    "Deluxe Nails",
    "Hygienic Waxing",
    "At-Home Concierge",
    "Sanctuary Studio",
  ];

  return (
    <div className="bg-gold text-espresso overflow-hidden py-3.5 border-y border-gold-deep/30 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 font-sans font-bold uppercase tracking-[0.25em] text-xs sm:text-sm">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              <span className="text-espresso/60 text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-8 font-sans font-bold uppercase tracking-[0.25em] text-xs sm:text-sm ml-8" aria-hidden="true">
          {items.map((item, index) => (
            <React.Fragment key={`rep-${index}`}>
              <span>{item}</span>
              <span className="text-espresso/60 text-sm">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
