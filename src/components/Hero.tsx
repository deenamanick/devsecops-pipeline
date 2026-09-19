import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, ChevronRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onExploreCars: () => void;
  onBookTestDrive: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCars, onBookTestDrive }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#090a0d]"
    >
      {/* Cinematic Background Car Image with Multi-Layer Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2160&q=85"
          alt="Luxury performance sports car on an open coastal highway"
          className="w-full h-full object-cover object-center scale-105 filter brightness-85"
        />

        {/* Dynamic Dark Vignette & Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0d]/90 via-[#090a0d]/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#090a0d]/40 to-[#090a0d]/95" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-neutral-300">
            Automotive Excellence
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Large Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-[1.05] drop-shadow-2xl"
        >
          DRIVE YOUR NEXT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500">
            ADVENTURE
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          Experience performance, technology and design engineered for those who refuse to settle.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Explore Cars Button */}
          <button
            id="hero-explore-cars-button"
            onClick={onExploreCars}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase font-bold tracking-[0.2em] text-black bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 hover:from-white hover:to-neutral-200 shadow-xl shadow-white/5 hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore Cars</span>
            <ChevronRight className="w-4 h-4 text-neutral-800" />
          </button>

          {/* Book a Test Drive Button */}
          <button
            id="hero-book-test-drive-button"
            onClick={onBookTestDrive}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase font-bold tracking-[0.2em] text-white bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-600/80 hover:border-neutral-300 backdrop-blur-md shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Book a Test Drive</span>
          </button>
        </motion.div>

        {/* Quick Highlights Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 hidden sm:flex items-center justify-center gap-8 text-neutral-400 text-xs tracking-wider uppercase border-t border-neutral-800/80 pt-6"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-neutral-300" />
            <span>Certified Pre-Owned & New</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-neutral-600" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-neutral-300" />
            <span>Direct Concierge Delivery</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-neutral-600" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">0% APR</span>
            <span>Bespoke Financing</span>
          </div>
        </motion.div>
      </div>

      {/* Small Scroll Down Indicator */}
      <motion.button
        id="hero-scroll-indicator"
        onClick={onExploreCars}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll down to explore cars"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-neutral-400 group-hover:text-neutral-200 transition-colors">
          Scroll Down
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-neutral-600/70 group-hover:border-neutral-300 flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-2 bg-neutral-300 rounded-full"
          />
        </div>
      </motion.button>
    </section>
  );
};
