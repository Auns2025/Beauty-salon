import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageLightbox({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onNavigate,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && items.length > 1) {
        onNavigate((currentIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft' && items.length > 1) {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !items.length) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-900/95 backdrop-blur-md p-4 sm:p-6 md:p-10"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-espresso/80 text-ivory/80 hover:text-gold hover:bg-espresso border border-gold/30 transition-all duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + items.length) % items.length);
            }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-espresso/80 text-ivory/80 hover:text-gold hover:bg-espresso border border-gold/30 transition-all duration-200 hidden sm:flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % items.length);
            }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-espresso/80 text-ivory/80 hover:text-gold hover:bg-espresso border border-gold/30 transition-all duration-200 hidden sm:flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Modal Content */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden rounded-sm border border-gold/40 shadow-2xl bg-espresso">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain mx-auto select-none"
            />
          </div>

          {/* Caption & Metadata */}
          <div className="mt-4 text-center max-w-xl text-ivory px-4">
            <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold mb-1">
              {currentItem.category} · {currentIndex + 1} of {items.length}
            </div>
            <h3 className="font-sans text-lg sm:text-2xl font-bold uppercase tracking-wide text-ivory">
              {currentItem.title}
            </h3>
            {currentItem.caption && (
              <p className="text-xs sm:text-sm text-ivory/70 mt-1 font-light">
                {currentItem.caption}
              </p>
            )}
            
            {/* Disclaimer for stock gallery photography */}
            {currentItem.isDemonstrationAsset && (
              <div className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] text-ivory/50 bg-bronze/40 px-3 py-1 rounded-full border border-gold/20">
                <Info className="w-3 h-3 text-gold/80" />
                <span>Editorial reference photography (Real client portfolio updates monthly)</span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
