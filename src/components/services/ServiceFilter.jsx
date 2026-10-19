import React from 'react';
import { SERVICE_CATEGORIES } from '../../data/services';

export default function ServiceFilter({
  activeCategory = "All",
  onSelectCategory,
  categoryCounts = {}
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
      {SERVICE_CATEGORIES.map((cat) => {
        const isCurrent = activeCategory === cat;
        const count = categoryCounts[cat];

        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] font-sans uppercase tracking-[0.18em] transition-all duration-300 border focus:outline-none focus:ring-1 focus:ring-gold ${
              isCurrent
                ? 'bg-gold text-espresso border-gold font-medium shadow-goldGlow'
                : 'bg-white text-darkText border-beige hover:border-gold/60 hover:text-gold-deep'
            }`}
          >
            <span>{cat}</span>
            {count !== undefined && (
              <span className={`ml-1.5 text-[10px] ${isCurrent ? 'text-espresso/70' : 'text-mutedText'}`}>
                ({count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
