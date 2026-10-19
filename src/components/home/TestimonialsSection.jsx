import React from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import SectionHeading from '../common/SectionHeading';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory border-t border-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Words of Appreciation"
          title="Loved by"
          italicTitle="Our Clients"
          subtitle="Real reflections from clients who experienced our bespoke bridal artistry, facial therapies, and at-home service."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-beige p-8 rounded-sm shadow-luxury hover:shadow-luxuryHover transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Subtle quote icon */}
              <Quote className="w-10 h-10 text-gold/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote in Montserrat */}
                <blockquote className="font-sans italic text-base sm:text-lg text-espresso leading-relaxed mb-6 font-medium">
                  “{t.quote}”
                </blockquote>
              </div>

              {/* Client Signature */}
              <div className="pt-4 border-t border-beige flex items-center justify-between">
                <div>
                  <div className="font-sans font-semibold text-xs tracking-wider uppercase text-gold-deep">
                    {t.client}
                  </div>
                  <div className="text-[11px] text-mutedText font-light">
                    {t.service}
                  </div>
                </div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-mutedText/80 px-2 py-0.5 bg-ivory border border-beige rounded-sm">
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
