import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS } from '../data/team';
import { FAQS } from '../data/testimonials';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { Sparkles, ShieldCheck, Heart, Award, ArrowRight, Info, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="flex-1 pt-28 sm:pt-32 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. Brand Philosophy & Introduction */}
        <section>
          <SectionHeading
            eyebrow="Our Heritage & Philosophy"
            title="The Art of"
            italicTitle="Quiet Luxury"
            subtitle="SM Home Beauty was founded on a simple conviction: luxury beauty should never feel impersonal, hurried, or compromised by vanity."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-mutedText font-light leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:mr-2 first-letter:float-left first-letter:font-bold">
                SM Home Beauty is a premier beauty studio dedicated to elevating personal radiance through precision craftsmanship, dermatological respect, and gracious hospitality. Whether preparing a bride for her most momentous celebration or delivering restorative hair and dermal rituals, we pair gentle touch with professional grade results.
              </p>
              <p>
                Recognizing that our discerning clients lead demanding lives, we pioneered our premier At-Home Beauty Concierge. Our certified senior specialists arrive at your private residence with hospital-grade sanitized instruments, botanical salon elixirs, and bespoke lighting, transforming your room into a peaceful beauty sanctuary.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-beige">
                <div className="p-4 bg-white border border-beige rounded-sm">
                  <div className="font-serif text-2xl font-bold text-gold-deep mb-1">
                    Boutique Studio
                  </div>
                  <p className="text-xs text-mutedText">
                    Private treatment suites with champagne lighting and serene salon comfort.
                  </p>
                </div>
                <div className="p-4 bg-white border border-beige rounded-sm">
                  <div className="font-serif text-2xl font-bold text-gold-deep mb-1">
                    Home Concierge
                  </div>
                  <p className="text-xs text-mutedText">
                    Free Home Service across Dubai & Sharjah with complete sanitized kits.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Ambient Visual */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gold/40 shadow-luxury">
                <img
                  src="/images/hero/salon-ambience.jpg"
                  alt="S&M Home Beauty Salon Studio Ambience"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Professional Hygiene & Safety Standards */}
        <section className="bg-white border border-beige p-8 sm:p-12 rounded-sm shadow-luxury">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-sans tracking-[0.25em] text-champagne font-semibold mb-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Safety & Purity Protocols</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
              Hygiene Without Compromise
            </h3>
            <p className="text-xs sm:text-sm text-mutedText mt-2 font-light">
              We hold our salon environment and mobile home visits to clinical sanitization standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-ivory/50 border border-beige rounded-sm text-center">
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-deep flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-espresso mb-1">
                Autoclave Sterilization
              </h4>
              <p className="text-xs text-mutedText font-light">
                All metal implements undergo medical-grade heat and pressure autoclave cycles prior to sealing in tamper-evident pouches.
              </p>
            </div>

            <div className="p-5 bg-ivory/50 border border-beige rounded-sm text-center">
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-deep flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-espresso mb-1">
                Single-Use Disposables
              </h4>
              <p className="text-xs text-mutedText font-light">
                Mascara wands, lip applicators, waxing strips, and cape liners are strictly single-use and disposed of immediately.
              </p>
            </div>

            <div className="p-5 bg-ivory/50 border border-beige rounded-sm text-center">
              <div className="w-10 h-10 rounded-full bg-gold/15 text-gold-deep flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-espresso mb-1">
                Dermatologically Vetted
              </h4>
              <p className="text-xs text-mutedText font-light">
                We formulate with hypoallergenic, cruelty-free formulas free from harsh parabens, toxic sulfates, or damaging formaldehydes.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Team Showcase (Preserved from prototype with honest profiles) */}
        <section>
          <SectionHeading
            eyebrow="The Master Hands"
            title="Meet Our"
            italicTitle="Beauty Specialists"
            subtitle="Artisans dedicated to understated perfection. Each specialist brings deep discipline and warm hospitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-beige p-6 rounded-sm shadow-luxury flex flex-col justify-between text-center group hover:border-gold/60 transition-all"
              >
                <div>
                  {/* Elegant text-based monogram avatar with verified disclaimer */}
                  <div className="relative w-28 h-36 mx-auto mb-5 rounded-sm border-2 border-gold/40 bg-gradient-to-b from-chocolate to-espresso flex flex-col items-center justify-center text-ivory p-3 shadow-md">
                    <span className="font-serif italic text-3xl font-bold text-gold">
                      {member.initials}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-ivory/70 mt-1 font-sans">
                      SM Studio
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-espresso mb-0.5">
                    {member.name}
                  </h3>
                  <div className="text-xs font-sans uppercase tracking-[0.18em] text-gold-deep font-semibold mb-2">
                    {member.title}
                  </div>
                  <div className="text-[11px] font-sans text-champagne mb-3">
                    {member.specialty}
                  </div>
                  <p className="text-xs text-mutedText font-light leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-beige/60">
                  <div className="text-[10px] text-mutedText/80 italic">
                    {member.placeholderNote}
                  </div>
                  <Link
                    to={`/booking`}
                    className="inline-block mt-3 text-xs font-sans uppercase tracking-wider text-gold-deep hover:text-gold font-medium"
                  >
                    Request Appointment with {member.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Comprehensive FAQ Section */}
        <section className="bg-white border border-beige p-8 sm:p-12 rounded-sm shadow-luxury">
          <SectionHeading
            eyebrow="Client Inquiries"
            title="Frequently Asked"
            italicTitle="Questions"
            subtitle="Detailed answers regarding our cancellation policies, bridal packages, and home visits."
          />

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="p-4 sm:p-5 bg-ivory/50 border border-beige rounded-sm group cursor-pointer"
              >
                <summary className="font-serif text-lg sm:text-xl font-bold text-espresso group-hover:text-gold-deep transition-colors list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-gold text-lg transition-transform group-open:rotate-45">✦</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-mutedText font-light leading-relaxed border-t border-beige/60 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center bg-espresso text-ivory p-10 sm:p-14 rounded-sm border border-gold/40 shadow-2xl">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ivory mb-2">
            Experience the SM Standard
          </h3>
          <p className="text-xs sm:text-sm text-ivory/80 font-light max-w-lg mx-auto mb-6">
            Reserve your appointment today or contact our concierge for customized group and bridal bridal trousseau bookings.
          </p>
          <Link to="/booking">
            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
