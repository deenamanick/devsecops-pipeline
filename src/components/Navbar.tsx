import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Gauge, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenTestDrive: (carId?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTestDrive, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Cars', target: 'cars' },
    { label: 'Services', target: 'services' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(target);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0b0f]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="navbar-brand-button"
          onClick={() => handleLinkClick('home')}
          className="group flex items-center gap-2.5 focus:outline-none text-left"
          aria-label="MOTORX Home"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-700 p-[1px] shadow-lg transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0d0e12] rounded-[7px] flex items-center justify-center">
              <Gauge className="w-5 h-5 text-gray-200 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-2xl tracking-[0.2em] text-white flex items-center">
              MOTOR<span className="text-gray-400 group-hover:text-white transition-colors">X</span>
            </span>
            <span className="block text-[9px] uppercase tracking-[0.3em] text-gray-400 -mt-1 font-medium">
              Automotive
            </span>
          </div>
        </button>

        {/* Center Navigation Links (Desktop) */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              id={`nav-link-${link.target}`}
              onClick={() => handleLinkClick(link.target)}
              className="px-4 py-2 text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors rounded-md relative hover:bg-white/5 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-book-test-drive-button"
            onClick={() => onOpenTestDrive()}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-neutral-800 to-neutral-900 border border-neutral-600/60 shadow-lg hover:border-neutral-300 hover:shadow-white/10 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Test Drive
              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-gray-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-gray-200 hover:text-white hover:bg-neutral-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#0d0e14]/98 border-b border-neutral-800 backdrop-blur-2xl px-6 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className="w-full text-left px-4 py-3 text-base font-medium tracking-wide text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 space-y-2">
            <button
              id="mobile-test-drive-button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTestDrive();
              }}
              className="w-full py-3.5 px-4 rounded-xl text-xs uppercase font-bold tracking-widest text-center text-white bg-gradient-to-r from-neutral-800 to-neutral-950 border border-neutral-600 shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <PhoneCall className="w-4 h-4 text-gray-300" />
              Book a Test Drive
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
