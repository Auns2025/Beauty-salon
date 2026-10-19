import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS } from '../../data/gallery';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import ImageLightbox from '../common/ImageLightbox';
import { Eye, ArrowRight, Instagram } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export default function GalleryPreview() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const previewItems = GALLERY_ITEMS.slice(0, 6);

  const handleOpenLightbox = (index) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Artistry in Action"
          title="The Visual"
          italicTitle="Gallery"
          subtitle="Explore authentic photography of our bridal creations, hair transformations, and tranquil salon aesthetics."
        />

        {/* Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {previewItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer border border-beige shadow-sm hover:shadow-luxuryHover transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-ivory" />

              <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ivory">
                <span className="text-[9px] uppercase font-sans tracking-[0.2em] text-gold block mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                  {item.title}
                </h4>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold">
                  <Eye className="w-3.5 h-3.5" />
                  <span className="font-sans uppercase tracking-wider text-[10px]">Expand Look</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link & Social Follow */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/gallery">
            <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
              View Complete Gallery (12 Looks)
            </Button>
          </Link>

          <a
            href={BUSINESS_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-gold-deep hover:text-gold px-4 py-3 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {BUSINESS_CONFIG.contact.instagram}</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={previewItems}
        currentIndex={selectedPhotoIndex}
        onNavigate={setSelectedPhotoIndex}
      />
    </section>
  );
}
