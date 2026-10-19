import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { ArrowRight } from 'lucide-react';

export default function ServiceShowcase() {
  const categories = [
    {
      name: "Hair Artistry",
      query: "Hair",
      desc: "Balayage, precision cuts, and keratin infusion therapy.",
      image: "/images/services/hair-colour.jpg",
      startingPrice: "From PKR 1,500"
    },
    {
      name: "Dermal Skincare",
      query: "Skin",
      desc: "Cellular glow facials, whitening therapies, and botanical masks.",
      image: "/images/services/glow-facial.jpg",
      startingPrice: "From PKR 3,000"
    },
    {
      name: "Bridal & Glam Makeup",
      query: "Makeup",
      desc: "Flawless HD makeup, Barat couture looks, and party glam.",
      image: "/images/services/bridal-makeup.jpg",
      startingPrice: "From PKR 5,000"
    },
    {
      name: "Nail Architecture",
      query: "Nails",
      desc: "Organic botanical manicures, pedicures, and nail polish care.",
      image: "/images/services/manicure.jpg",
      startingPrice: "From PKR 1,500"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated Disciplines"
          title="Treatments"
          italicTitle="We Love"
          subtitle="Explore our signature salon and home beauty offerings, carefully curated for uncompromising standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/services?cat=${cat.query}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-beige shadow-luxury hover:shadow-luxuryHover transition-all duration-500 flex flex-col justify-end p-6"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-colors pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 text-ivory">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold font-medium mb-1 block">
                  {cat.startingPrice}
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-bold uppercase tracking-wide text-ivory mb-2 group-hover:text-gold-light transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-ivory/70 font-light leading-relaxed mb-4 line-clamp-2">
                  {cat.desc}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-gold group-hover:text-gold-light">
                  <span>Explore Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
