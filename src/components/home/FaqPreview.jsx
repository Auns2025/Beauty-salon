import React, { useState } from 'react';
import { FAQS } from '../../data/testimonials';
import SectionHeading from '../common/SectionHeading';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clear Transparency"
          title="Frequently Asked"
          italicTitle="Questions"
          subtitle="Everything you need to know about our studio rituals, at-home visits, and booking protocols."
        />

        <div className="space-y-4">
          {FAQS.slice(0, 5).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-beige bg-ivory/30 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-gold"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-espresso">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full border border-gold/40 text-gold-deep transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold text-espresso' : 'bg-white'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-mutedText font-light leading-relaxed border-t border-beige/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
