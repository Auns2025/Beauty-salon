import React from 'react';
import { motion } from 'framer-motion';
import HeroFloatingCard from './HeroFloatingCard';

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[480px] lg:max-w-[540px] mx-auto select-none">
      {/* 1. Subtle Warm Golden Ambient Glow Behind Frame */}
      <div 
        className="absolute -inset-4 sm:-inset-6 rounded-t-[160px] rounded-b-2xl opacity-60 blur-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(217,180,106,0.22) 0%, rgba(43,29,20,0.4) 60%, transparent 80%)'
        }}
      />

      {/* 2. Asymmetric Luxury Image Frame with Arch Top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 p-2 sm:p-2.5 rounded-t-[140px] rounded-b-[8px] bg-gradient-to-b from-[rgba(217,180,106,0.4)] via-[rgba(43,29,20,0.6)] to-[rgba(217,180,106,0.2)] shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
      >
        <div className="relative w-full aspect-[4/5] sm:aspect-[10/13] rounded-t-[132px] rounded-b-[6px] overflow-hidden bg-[#1A120E] border border-[rgba(217,180,106,0.3)]">
          {/* Main Authentic Salon Stylist & Client Photograph */}
          <img
            src="/images/hero/hero-stylist-treatment.jpg"
            alt="Professional Salon Hair Artistry and Styling at SM Home Beauty"
            className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.04]"
            loading="eager"
          />

          {/* Deep Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#100C0A]/85 via-transparent to-[#100C0A]/20 pointer-events-none" />

          {/* Top Delicate Studio Tag */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#100C0A]/80 border border-[rgba(217,180,106,0.35)] backdrop-blur-md text-[9px] uppercase font-sans tracking-[0.25em] text-[#D9B46A] shadow-md">
            ✦ BOUTIQUE SALON & STUDIO
          </div>

          {/* Subtle Bottom Accent Gradient Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D9B46A]/60 to-transparent" />
        </div>
      </motion.div>

      {/* 3. Floating Card 1 — Haute Bridal (Upper-Left, does not block faces) */}
      <div className="absolute top-12 -left-3 sm:-left-8 lg:-left-12 z-20">
        <HeroFloatingCard
          variant="bridal"
          delay={0.5}
        />
      </div>

      {/* 4. Floating Card 2 — At-Home Concierge (Lower-Right) */}
      <div className="absolute -bottom-6 -right-2 sm:-right-6 lg:-right-8 z-20">
        <HeroFloatingCard
          variant="concierge"
          delay={0.7}
        />
      </div>
    </div>
  );
}
