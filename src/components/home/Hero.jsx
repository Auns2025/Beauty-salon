import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck, Home, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import Button from '../common/Button';
import HeroCanvasDust from './HeroCanvasDust';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] sm:min-h-screen bg-espresso text-ivory flex items-center pt-28 pb-20 overflow-hidden">
      {/* 1. Cinematic Background Image & Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-beauty.jpg"
          alt="SM Home Beauty Luxury Radiance"
          className="w-full h-full object-cover object-top sm:object-center opacity-30 filter brightness-90 saturate-110"
        />
        {/* Layered luxury dark espresso & radial gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900 via-espresso/95 to-espresso/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-espresso-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/80" />
      </div>

      {/* 2. Ambient Golden Dust Particles Canvas */}
      <HeroCanvasDust />

      {/* 3. Main Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Editorial Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Luxury Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 text-gold-light text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              <span>SM Home Beauty · Studio & At-Home Concierge</span>
            </div>

            {/* Main Title in Montserrat Luxury Styling */}
            <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight leading-[1.02] uppercase text-ivory">
              Redefine <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#FFF0C8] to-gold">
                Your Radiance
              </span>
            </h1>

            {/* Subtitle Statement */}
            <p className="text-sm sm:text-base md:text-lg text-ivory/80 font-light leading-relaxed max-w-xl font-sans tracking-wide">
              Bespoke bridal artistry, hair transformations, and revitalizing skin therapies in a world of quiet luxury — hosted at our private studio or in the comfort of your residence across Lahore.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link to="/booking">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto shadow-goldGlow hover:scale-[1.02] active:scale-[0.98]"
                  icon={Calendar}
                >
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-gold/50 text-gold-light hover:bg-gold hover:text-espresso backdrop-blur-sm"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Explore 11 Services
                </Button>
              </Link>
            </div>

            {/* Quick Assurances Badges */}
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-ivory/70 pt-1 font-sans">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                <span>Transparent PKR Pricing</span>
              </div>
              <span className="text-gold/40">•</span>
              <div className="flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-gold" />
                <span>At-Home VIP Service (PKR 500)</span>
              </div>
              <span className="text-gold/40">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Hospital-Grade Sterilization</span>
              </div>
            </div>

            {/* Metrics & Social Proof Ribbon */}
            <div className="pt-6 sm:pt-7 border-t border-gold/20 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
              <div>
                <div className="font-sans text-2xl sm:text-3xl font-extrabold text-gold leading-none">
                  500+
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ivory/60 mt-1 font-sans font-medium">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="font-sans text-2xl sm:text-3xl font-extrabold text-gold flex items-center gap-1 leading-none">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-gold text-gold" />
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ivory/60 mt-1 font-sans font-medium">
                  Client Rating
                </div>
              </div>
              <div>
                <div className="font-sans text-2xl sm:text-3xl font-extrabold text-gold leading-none">
                  11+
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ivory/60 mt-1 font-sans font-medium">
                  Signature Services
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Composition: Multi-Layered Editorial Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glowing Ring */}
              <div className="absolute -inset-2 rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-gold/30 via-transparent to-gold/10 opacity-70 blur-sm pointer-events-none" />

              {/* Main Editorial Image Frame */}
              <div className="relative aspect-[4/5] rounded-t-[130px] rounded-b-xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-espresso p-1.5">
                <div className="w-full h-full rounded-t-[125px] rounded-b-lg overflow-hidden relative">
                  <img
                    src="/images/hero/hero-editorial.jpg"
                    alt="SM Home Beauty Editorial Artistry"
                    className="w-full h-full object-cover object-center filter saturate-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-transparent to-transparent" />

                  {/* Subtle Top Crown Monogram */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-espresso/80 border border-gold/40 px-3 py-1 rounded-full backdrop-blur-md text-[9px] uppercase font-sans tracking-[0.25em] text-gold">
                    Haute Beauty Studio
                  </div>
                </div>
              </div>

              {/* Floating Card 1: Authentic Bridal Glam Preview */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="absolute -top-5 -left-4 sm:-left-8 bg-chocolate/95 border border-gold/40 p-3 sm:p-3.5 rounded-sm shadow-2xl backdrop-blur-md max-w-[210px] sm:max-w-[230px] z-30"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="/images/gallery/gal-bridal-2.jpg"
                    alt="Bridal Makeup"
                    className="w-12 h-12 rounded-sm object-cover border border-gold/40 flex-shrink-0"
                  />
                  <div>
                    <span className="text-[9px] uppercase font-sans tracking-[0.2em] text-gold block font-semibold">
                      Haute Bridal
                    </span>
                    <span className="text-xs font-bold text-ivory block font-sans">
                      Luminous Velvet Glam
                    </span>
                    <span className="text-[10px] text-gold-light font-sans font-medium">
                      PKR 25,000 · 180 min
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2: At-Home VIP Concierge Badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 bg-chocolate/95 border border-gold/40 p-4 rounded-sm shadow-2xl backdrop-blur-md max-w-[240px] sm:max-w-[260px] z-30"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold font-bold">
                      At-Home Concierge
                    </div>
                    <div className="text-xs font-bold text-ivory font-sans mt-0.5">
                      Salon Care at Your Residence
                    </div>
                    <div className="text-[10px] text-ivory/70 font-sans mt-1">
                      Fixed PKR 500 logistics fee across Lahore
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Live Artist Availability Badge */}
              <div className="absolute bottom-8 left-4 z-30 bg-espresso/90 border border-gold/40 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-2 text-[10px] text-ivory font-sans shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Today's Time Slots Open (10 AM – 7 PM)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
