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
  const baseStyles = "relative inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.2em] rounded-[3px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D9B46A]/50 disabled:opacity-40 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-[10px] px-4 py-2 gap-1.5",
    md: "text-[11px] px-6 py-3.5 gap-2",
    lg: "text-xs px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#D9B46A] text-[#100C0A] border border-[#D9B46A] hover:bg-[#B88A44] hover:border-[#B88A44] shadow-[0_4px_20px_rgba(217,180,106,0.25)] hover:shadow-[0_6px_25px_rgba(217,180,106,0.4)] active:scale-[0.98]",
    secondary: "bg-transparent text-[#D9B46A] border border-[rgba(217,180,106,0.35)] hover:bg-[#D9B46A] hover:text-[#100C0A] hover:border-[#D9B46A] active:scale-[0.98]",
    dark: "bg-[#1A120E] text-[#D9B46A] border border-[rgba(217,180,106,0.35)] hover:border-[#D9B46A] hover:bg-[#2B1D14] active:scale-[0.98]",
    outline: "bg-transparent text-[#F8F5F0] border border-[rgba(217,180,106,0.35)] hover:border-[#D9B46A] hover:text-[#D9B46A] active:scale-[0.98]",
    ghost: "bg-transparent text-[#B8AEA8] hover:text-[#D9B46A] hover:bg-[#D9B46A]/5 active:scale-[0.98]",
    white: "bg-[#F8F5F0] text-[#100C0A] border border-[#F8F5F0] hover:bg-transparent hover:text-[#F8F5F0] active:scale-[0.98]",
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
