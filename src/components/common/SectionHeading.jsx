import React from 'react';

export default function SectionHeading({
  eyebrow = "",
  title,
  italicTitle = "",
  subtitle = "",
  align = "center", // 'center' | 'left'
  dark = false,
  className = ""
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.25em] mb-3.5 ${dark ? 'text-gold-light' : 'text-champagne'}`}>
          <span className="text-gold">✦</span>
          <span>{eyebrow}</span>
          {isCenter && <span className="text-gold">✦</span>}
        </div>
      )}

      <h2 className={`font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] uppercase ${dark ? 'text-ivory' : 'text-espresso'}`}>
        {title}{' '}
        {italicTitle && (
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-deep">
            {italicTitle}
          </span>
        )}
      </h2>

      {/* Decorative Gold Divider */}
      <div className={`flex items-center gap-2 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-8 bg-gold/40" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
        <div className="h-[1px] w-8 bg-gold/40" />
      </div>

      {subtitle && (
        <p className={`text-sm md:text-base font-light leading-relaxed ${dark ? 'text-ivory/70' : 'text-mutedText'} max-w-xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
