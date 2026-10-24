import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { Sparkles, ShieldCheck, Home, CalendarCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Premium Products",
      desc: "We exclusively utilize imported, dermatologically vetted European pigment formulations, organic botanical oils, and medical-grade skincare."
    },
    {
      icon: ShieldCheck,
      title: "Hygiene First",
      desc: "Autoclave sterilized metal tools, single-use disposable applicators, and a completely fresh sanitary workstation for every individual client."
    },
    {
      icon: Home,
      title: "At-Home Concierge",
      desc: "Prefer private sanctuary? Our certified beauty specialists travel to your residence across Dubai & Sharjah with complete salon equipment and fresh linens."
    },
    {
      icon: CalendarCheck,
      title: "Seamless Booking",
      desc: "Browse transparent pricing, select your preferred artist and time slot, and finalize your reservation directly on WhatsApp with our concierge."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Standard of Excellence"
          title="Why Choose"
          italicTitle="SM Home Beauty"
          subtitle="Quiet luxury rooted in clinical cleanliness, artisanal technique, and uncompromising client respect."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 border border-beige hover:border-gold/60 transition-all duration-300 bg-ivory/40 rounded-sm text-center flex flex-col items-center group shadow-luxury hover:shadow-luxuryHover"
              >
                <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center bg-white text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-espresso transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <div className="text-[10px] uppercase font-sans tracking-[0.25em] text-champagne mb-1">
                  Pillar 0{idx + 1}
                </div>

                <h3 className="font-serif text-2xl font-bold text-espresso mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs text-mutedText font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
