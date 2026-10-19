import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost' | 'white'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.2em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-40 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-[10px] px-4 py-2 gap-1.5",
    md: "text-[11px] px-6 py-3.5 gap-2",
    lg: "text-xs px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-gold text-espresso border border-gold hover:bg-gold-light hover:border-gold-light hover:shadow-goldGlow shadow-sm active:scale-[0.98]",
    secondary: "bg-transparent text-gold border border-gold hover:bg-gold hover:text-espresso active:scale-[0.98]",
    dark: "bg-espresso text-gold border border-gold/40 hover:border-gold hover:bg-chocolate active:scale-[0.98]",
    outline: "bg-transparent text-darkText border border-bronze/30 hover:border-gold hover:text-gold active:scale-[0.98]",
    ghost: "bg-transparent text-mutedText hover:text-gold hover:bg-gold/5 active:scale-[0.98]",
    white: "bg-white text-espresso border border-white hover:bg-transparent hover:text-white active:scale-[0.98]",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-3.5 h-3.5" />}
    </button>
  );
}
