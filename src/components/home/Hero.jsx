import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Home, CheckCircle2, Star } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import HeroVisual from './HeroVisual';

export default function Hero() {
  // Motion easing and animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[95vh] lg:min-h-screen bg-[#100C0A] text-[#F8F5F0] overflow-hidden flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
      {/* 1. Refined Luxury Ambient Lighting & Vignette Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial golden warmth at the top center */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(217,180,106,0.18) 0%, rgba(43,29,20,0.35) 45%, transparent 75%)'
          }}
        />

        {/* Deep ambient vignette from edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A120E]/40 via-transparent to-[#100C0A]" />
        
        {/* Subtle warm glow focused behind right-side imagery */}
        <div 
          className="absolute top-1/4 right-0 w-[600px] h-[600px] opacity-25 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(217,180,106,0.2) 0%, rgba(43,29,20,0.3) 60%, transparent 80%)'
          }}
        />
      </div>

      {/* 2. Main Hero Container (Max Width 1440px) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ============================================================== */}
          {/* LEFT EDITORIAL COLUMN (~52%)                                   */}
          {/* ============================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7"
          >
            {/* Step 1: Small Minimal Outlined Eyebrow Pill */}
            <motion.div variants={itemFadeUp} className="flex items-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[3px] bg-[#2B1D14]/50 border border-[rgba(217,180,106,0.35)] backdrop-blur-sm text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.25em] text-[#D9B46A] uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9B46A]" />
                <span>S&M HOME BEAUTY SALON · DUBAI & SHARJAH</span>
              </div>
            </motion.div>

            {/* Step 2: Bold Contemporary Luxury Editorial Heading */}
            <motion.div variants={itemFadeUp} className="space-y-1">
              <h1 className="font-sans font-black text-5xl sm:text-7xl lg:text-[76px] xl:text-[84px] tracking-[-0.03em] leading-[0.98] uppercase">
                <span className="block text-[#F8F5F0]">
                  REDEFINE
                </span>
                <span 
                  className="block text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(105deg, #D4AA60 0%, #F4DEA9 48%, #C99D51 100%)'
                  }}
                >
                  YOUR RADIANCE
                </span>
              </h1>
            </motion.div>

            {/* Step 3: Refined Editorial Description */}
            <motion.p
              variants={itemFadeUp}
              className="text-[#B8AEA8] text-[15px] sm:text-[17px] lg:text-[18px] font-normal leading-relaxed max-w-[570px] font-sans"
            >
              Experience bespoke bridal artistry, beautiful hair transformations, and revitalizing skin therapies — at our private studio or in the comfort of your home.
            </motion.p>

            {/* Step 4: Call-To-Action Buttons */}
            <motion.div
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1"
            >
              {/* Primary CTA */}
              <Link to="/booking" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 rounded-[3px] bg-[#D9B46A] hover:bg-[#B88A44] text-[#100C0A] font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(217,180,106,0.25)] hover:shadow-[0_6px_25px_rgba(217,180,106,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 group active:scale-[0.98]"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#100C0A]" />
                  <span>BOOK APPOINTMENT</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>

              {/* Secondary CTA */}
              <Link to="/services" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-7 py-4 rounded-[3px] bg-[#1A120E]/70 hover:bg-[#2B1D14] border border-[rgba(217,180,106,0.35)] hover:border-[#D9B46A] text-[#D9B46A] font-sans font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98]"
                >
                  <span>EXPLORE 11 PACKAGES & SERVICES</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>

            {/* Step 5: Mobile Hero Visual (Only displayed on screens < lg) */}
            <div className="lg:hidden py-6 sm:py-8">
              <HeroVisual />
            </div>

            {/* Step 6: Trust Features (Subtle minimal row) */}
            <motion.div
              variants={itemFadeUp}
              className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-[#B8AEA8] pt-2 font-sans"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9B46A]" />
                <span>Transparent AED Pricing</span>
              </div>
              <span className="text-[rgba(217,180,106,0.4)] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#D9B46A]" />
                <span>Free Home Service (Dubai & Sharjah)</span>
              </div>
              <span className="text-[rgba(217,180,106,0.4)] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D9B46A]" />
                <span>Professional Hygiene Standards</span>
              </div>
            </motion.div>

            {/* Step 7: Hero Statistics (Below Thin Gold Divider) */}
            <motion.div
              variants={itemFadeUp}
              className="pt-6 sm:pt-7 border-t border-[rgba(217,180,106,0.25)] grid grid-cols-3 gap-3 sm:gap-6 max-w-lg"
            >
              {/* Stat 1 */}
              <div>
                <div className="font-sans font-extrabold text-2xl sm:text-3xl text-[#D9B46A] leading-none">
                  500+
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#B8AEA8] font-medium mt-1.5">
                  Happy Clients
                </div>
              </div>

              {/* Stat 2 with subtle separator */}
              <div className="border-l border-[rgba(217,180,106,0.2)] pl-3 sm:pl-6">
                <div className="font-sans font-extrabold text-2xl sm:text-3xl text-[#D9B46A] leading-none flex items-center gap-1">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-[#D9B46A] text-[#D9B46A]" />
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#B8AEA8] font-medium mt-1.5">
                  Client Rating
                </div>
              </div>

              {/* Stat 3 with subtle separator */}
              <div className="border-l border-[rgba(217,180,106,0.2)] pl-3 sm:pl-6">
                <div className="font-sans font-extrabold text-2xl sm:text-3xl text-[#D9B46A] leading-none">
                  11+
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#B8AEA8] font-medium mt-1.5">
                  Signature Services
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ============================================================== */}
          {/* RIGHT EDITORIAL COMPOSITION (~48%, Desktop only)              */}
          {/* ============================================================== */}
          <div className="hidden lg:block lg:col-span-5">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
