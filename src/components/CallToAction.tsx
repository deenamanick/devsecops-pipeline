import React from 'react';
import { Calendar, ChevronRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface CallToActionProps {
  onBookTestDrive: () => void;
  onExploreCars: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onBookTestDrive, onExploreCars }) => {
  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-[#0a0b0f] border-t border-neutral-800">
      {/* Premium Car Background with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2160&q=85"
          alt="Luxury performance vehicle ready on open road"
          className="w-full h-full object-cover object-center filter brightness-65 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-transparent to-black/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs uppercase tracking-[0.2em] font-semibold mb-6">
          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
          Private Consultations & Test Drives
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase tracking-tight leading-tight">
          READY TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
            HIT THE ROAD?
          </span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-xl font-light leading-relaxed">
          Your dream car is closer than you think.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            id="cta-book-test-drive-button"
            onClick={onBookTestDrive}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-xs uppercase font-bold tracking-[0.2em] text-black bg-gradient-to-r from-neutral-200 to-neutral-400 hover:from-white hover:to-neutral-300 shadow-2xl shadow-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Book a Test Drive</span>
            <ChevronRight className="w-4 h-4 text-neutral-800" />
          </button>

          <button
            id="cta-browse-inventory-button"
            onClick={onExploreCars}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase font-bold tracking-[0.2em] text-neutral-200 bg-black/50 hover:bg-neutral-900 border border-neutral-700 hover:border-neutral-400 backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            View Available Fleet
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-xs text-neutral-400 tracking-wider">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-neutral-300" />
            <span>Complimentary 48-Hour Reservation</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="hidden sm:flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-neutral-300" />
            <span>Direct Concierge: +1 (800) 555-MOTORX</span>
          </div>
        </div>
      </div>
    </section>
  );
};
