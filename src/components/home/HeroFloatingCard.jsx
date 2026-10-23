import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Home, Clock } from 'lucide-react';

export default function HeroFloatingCard({
  variant = 'bridal', // 'bridal' | 'concierge'
  className = '',
  delay = 0.5,
}) {
  if (variant === 'bridal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -3, transition: { duration: 0.25 } }}
        className={`bg-[#1A120E]/95 backdrop-blur-md border border-[rgba(217,180,106,0.35)] p-3 sm:p-3.5 rounded-[4px] shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-3 max-w-[240px] sm:max-w-[260px] select-none ${className}`}
      >
        {/* Real Authentic Bridal Beauty Thumbnail */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-[3px] overflow-hidden border border-[rgba(217,180,106,0.4)] flex-shrink-0">
          <img
            src="/images/gallery/gal-bridal-2.jpg"
            alt="Luminous Velvet Glam Bridal Look"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100C0A]/40 to-transparent" />
        </div>

        {/* Card Typography */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-[#D9B46A] font-semibold mb-0.5">
            <Sparkles className="w-2.5 h-2.5 text-[#F0D394]" />
            <span>HAUTE BRIDAL</span>
          </div>
          <div className="text-xs sm:text-[13px] font-bold text-[#F8F5F0] truncate font-sans">
            Luminous Velvet Glam
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#D9B46A] font-medium tracking-wide mt-0.5">
            AED 450 · 180 min
          </div>
        </div>
      </motion.div>
    );
  }

  // Variant: concierge
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
      className={`bg-[#1A120E]/95 backdrop-blur-md border border-[rgba(217,180,106,0.35)] p-3 sm:p-3.5 rounded-[4px] shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-3 max-w-[245px] sm:max-w-[275px] select-none ${className}`}
    >
      {/* Icon Badge */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[3px] bg-[#2B1D14] border border-[rgba(217,180,106,0.4)] flex items-center justify-center text-[#D9B46A] flex-shrink-0 shadow-inner">
        <Home className="w-5 h-5 stroke-[1.75]" />
      </div>

      {/* Card Typography */}
      <div className="flex-1 min-w-0">
        <div className="text-[9px] uppercase tracking-[0.2em] text-[#D9B46A] font-semibold mb-0.5">
          AT-HOME CONCIERGE
        </div>
        <div className="text-xs sm:text-[13px] font-bold text-[#F8F5F0] truncate font-sans">
          Salon Care at Your Residence
        </div>
        <div className="text-[10px] sm:text-[11px] text-[#D9B46A] font-medium tracking-wide mt-0.5">
          Free Home Concierge (Dubai & Sharjah)
        </div>
      </div>
    </motion.div>
  );
}
