import React, { useState } from 'react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import SectionHeading from '../components/common/SectionHeading';
import ImageLightbox from '../components/common/ImageLightbox';
import { Eye, Instagram, Sparkles, Info } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (item) => {
    const originalIndex = GALLERY_ITEMS.findIndex(i => i.id === item.id);
    setSelectedPhotoIndex(originalIndex >= 0 ? originalIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="flex-1 pt-28 sm:pt-32 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          eyebrow="Editorial Portfolio"
          title="Artistry"
          italicTitle="In Focus"
          subtitle="A visual celebration of high-definition bridal artistry, radiant dermal treatments, hair transformations, and tranquil salon architecture."
        />

      

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {GALLERY_CATEGORIES.map((cat) => {
            const isCurrent = activeCategory === cat;
            const count = cat === 'All' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(i => i.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 text-[11px] font-sans uppercase tracking-[0.18em] transition-all duration-300 border focus:outline-none ${
                  isCurrent
                    ? 'bg-gold text-espresso border-gold font-medium shadow-goldGlow'
                    : 'bg-white text-darkText border-beige hover:border-gold/60'
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 text-[10px] ${isCurrent ? 'text-espresso/70' : 'text-mutedText'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Masonry / Editorial Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="break-inside-avoid group relative rounded-sm overflow-hidden border border-beige bg-white shadow-luxury hover:shadow-luxuryHover transition-all duration-500 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-espresso/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-sans text-lg sm:text-xl font-bold uppercase tracking-wide leading-snug text-ivory mb-2">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs text-ivory/80 font-light leading-relaxed mb-3 line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                  <div className="inline-flex items-center gap-1.5 text-xs text-gold uppercase tracking-wider font-sans">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View In Fullscreen</span>
                  </div>
                </div>
              </div>

              {/* Mobile caption below image for touch users */}
              <div className="p-4 bg-white sm:hidden border-t border-beige">
                <div className="text-[9px] uppercase font-sans tracking-wider text-gold-deep">
                  {item.category}
                </div>
                <div className="font-sans text-base font-bold uppercase tracking-wide text-espresso">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout (Preserved from prototype) */}
        <div className="mt-16 text-center p-8 bg-white border border-gold/30 rounded-sm shadow-luxury max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mx-auto mb-3">
            <Instagram className="w-6 h-6" />
          </div>
          <h4 className="font-sans text-xl sm:text-2xl font-bold uppercase tracking-wide text-espresso mb-1">
            Follow Our Daily Artistry
          </h4>
          <p className="text-xs text-mutedText font-light mb-4">
            Discover behind-the-scenes transformations, bridal trial stories, and real client results daily on Instagram.
          </p>
          <a
            href={BUSINESS_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-gold border border-gold hover:bg-chocolate text-xs uppercase tracking-[0.2em] font-medium transition-all"
          >
            <span>{BUSINESS_CONFIG.contact.instagram}</span>
          </a>
        </div>
      </div>

      {/* Lightbox Component with keyboard navigation */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={GALLERY_ITEMS}
        currentIndex={selectedPhotoIndex}
        onNavigate={setSelectedPhotoIndex}
      />
    </div>
  );
}
