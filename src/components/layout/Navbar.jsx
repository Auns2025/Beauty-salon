import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Calendar, ShoppingBag } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { BUSINESS_CONFIG } from '../../config/business';
import Button from '../common/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { selectedServices } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Book', path: '/booking' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-espresso/95 backdrop-blur-md py-3.5 border-b border-gold/25 shadow-lg shadow-black/20 text-ivory'
            : 'bg-espresso/80 backdrop-blur-sm py-5 border-b border-gold/15 text-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="group flex items-center gap-2.5 focus:outline-none focus:ring-1 focus:ring-gold"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/60 overflow-hidden flex items-center justify-center bg-chocolate group-hover:border-gold transition-colors flex-shrink-0 shadow-sm">
                <img
                  src="/favicon.png"
                  alt="S&M Home Beauty Salon Logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm sm:text-base font-bold tracking-[0.16em] uppercase text-ivory group-hover:text-gold transition-colors">
                  S&M Home Beauty Salon
                </span>
                <span className="text-[8px] uppercase tracking-[0.22em] text-gold/80 font-sans -mt-0.5 hidden sm:block">
                  Dubai & Sharjah · Free Home Service
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] font-sans uppercase tracking-[0.2em] transition-colors relative py-1 focus:outline-none focus:ring-1 focus:ring-gold ${
                    isActive(link.path)
                      ? 'text-gold font-medium'
                      : 'text-ivory/80 hover:text-gold'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Action: Cart Indicator + Book CTA */}
            <div className="hidden sm:flex items-center gap-4">
              {selectedServices.length > 0 && (
                <Link
                  to="/booking"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs font-sans hover:bg-gold/20 transition-all"
                  title="View Selected Services"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span className="font-medium">{selectedServices.length}</span>
                </Link>
              )}

              <Link to="/booking">
                <Button variant="primary" size="sm">
                  Book Appointment
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ivory hover:text-gold focus:outline-none focus:ring-1 focus:ring-gold"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-espresso-900/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold/60 border-b border-gold/15 pb-2">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-sans uppercase font-bold tracking-wider py-2 flex items-center justify-between ${
                  isActive(link.path) ? 'text-gold' : 'text-ivory hover:text-gold'
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && <Sparkles className="w-4 h-4 text-gold" />}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-gold/15 flex flex-col gap-3">
            {selectedServices.length > 0 && (
              <div className="text-xs text-gold flex items-center justify-between bg-chocolate p-3 border border-gold/20">
                <span>Selected Services</span>
                <span className="font-bold">{selectedServices.length} items</span>
              </div>
            )}
            <Link to="/booking" className="w-full">
              <Button variant="primary" size="lg" className="w-full">
                Book Appointment
              </Button>
            </Link>
            <div className="text-center text-[10px] text-ivory/50 tracking-wider pt-2">
              {BUSINESS_CONFIG.hours.display}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
