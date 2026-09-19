import React, { useState } from 'react';
import { Zap, Gauge, Wind, ChevronRight, Volume2, ShieldCheck, Flame } from 'lucide-react';

interface PerformanceSectionProps {
  onDiscoverPerformance: () => void;
}

export const PerformanceSection: React.FC<PerformanceSectionProps> = ({ onDiscoverPerformance }) => {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'aero' | 'engine' | 'chassis'>('engine');

  return (
    <section id="services" className="relative py-28 bg-[#08090c] overflow-hidden">
      {/* High-Resolution Performance Sports Car Background with Cinematic Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=2160&q=85"
          alt="High performance sports car in dark studio lighting"
          className="w-full h-full object-cover object-center filter brightness-65 contrast-125"
        />
        {/* Layered dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c] via-[#08090c]/85 to-[#08090c]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-[#08090c]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Header Accent */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Track Engineered
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-none">
            BUILT FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              PERFORMANCE
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Where aerodynamic refinement meets raw mechanical adrenaline. Designed to conquer apexes, command highways, and deliver an visceral connection between driver and asphalt.
          </p>

          {/* 3 Prominent Telemetry Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y border-neutral-700/60 bg-neutral-950/40 backdrop-blur-md rounded-2xl px-4 sm:px-6">
            {/* 0-100 km/h */}
            <div className="text-center sm:text-left">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono block">
                3.2s
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400 mt-1 block font-medium">
                0–100 km/h
              </span>
            </div>

            {/* Maximum Power */}
            <div className="text-center sm:text-left border-x border-neutral-800/80 px-2 sm:px-6">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono block">
                520 HP
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400 mt-1 block font-medium">
                Maximum Power
              </span>
            </div>

            {/* Top Speed */}
            <div className="text-center sm:text-left">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-mono block">
                310 km/h
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-400 mt-1 block font-medium">
                Top Speed
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              id="discover-performance-button"
              onClick={onDiscoverPerformance}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase font-bold tracking-[0.2em] text-black bg-gradient-to-r from-neutral-200 to-neutral-400 hover:from-white hover:to-neutral-300 shadow-xl shadow-white/5 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer active:scale-95"
            >
              <span>Discover Performance</span>
              <ChevronRight className="w-4 h-4 text-neutral-800" />
            </button>

            <span className="text-xs text-neutral-400 italic">
              Exclusive track day package included with every performance acquisition
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
