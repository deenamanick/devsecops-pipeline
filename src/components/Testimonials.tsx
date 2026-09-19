import React from 'react';
import { TESTIMONIALS_DATA } from '../data/cars';
import { Star, Quote, Sparkles, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs uppercase tracking-[0.2em] font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
          Verified Ownership
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
          WHAT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">DRIVERS SAY</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
          Discerning drivers share their experiences acquiring bespoke engineering at MOTORX.
        </p>
      </div>

      {/* 3 Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((t) => (
          <div
            key={t.id}
            id={`testimonial-card-${t.id}`}
            className="group relative bg-[#111218] border border-neutral-800 hover:border-neutral-600/80 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black flex flex-col justify-between"
          >
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-neutral-700 group-hover:text-neutral-500 transition-colors" />
              </div>

              {/* Review Text */}
              <p className="text-sm text-neutral-300 leading-relaxed font-light italic mb-6">
                "{t.review}"
              </p>
            </div>

            {/* Customer Profile Footer */}
            <div className="pt-5 border-t border-neutral-800/80 flex items-center gap-3.5">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border border-neutral-700"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white truncate">{t.name}</h3>
                  <CheckCircle className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                </div>
                <p className="text-xs text-neutral-400 truncate">{t.title}</p>
                <span className="inline-block text-[11px] font-medium text-neutral-400 mt-0.5">
                  Acquired {t.carPurchased}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
