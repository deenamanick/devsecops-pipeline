import React from 'react';
import { ShieldCheck, BadgePercent, CreditCard, Wrench, Sparkles, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'premium-collection',
      title: 'Premium Collection',
      description: 'Carefully selected vehicles from leading automotive brands.',
      icon: ShieldCheck,
      badge: 'Certified Quality',
      perk: '180-Point Pre-Purchase Inspection',
    },
    {
      id: 'transparent-pricing',
      title: 'Transparent Pricing',
      description: 'No hidden costs. Clear and straightforward pricing.',
      icon: BadgePercent,
      badge: 'Zero Surprise Fees',
      perk: 'Direct Market Value Pricing',
    },
    {
      id: 'easy-financing',
      title: 'Easy Financing',
      description: 'Flexible financing options designed around you.',
      icon: CreditCard,
      badge: 'Custom Rates',
      perk: 'Instant Approval & Bespoke Terms',
    },
    {
      id: 'trusted-service',
      title: 'Trusted Service',
      description: 'Professional support before and after your purchase.',
      icon: Wrench,
      badge: 'Lifetime Support',
      perk: 'Certified Master Technicians',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0c0d12] border-y border-neutral-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs uppercase tracking-[0.2em] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            The MOTORX Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">MOTORX?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            We redefine the automotive acquisition journey by pairing uncompromising vehicle standards with dedicated white-glove service.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                id={`why-card-${item.id}`}
                className="group relative bg-[#121319]/90 border border-neutral-800 hover:border-neutral-600 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/70 flex flex-col justify-between"
              >
                <div>
                  {/* Icon and Accent Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-200 group-hover:text-white group-hover:border-neutral-500 transition-colors shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-neutral-800/80 text-neutral-400 border border-neutral-700/60">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-neutral-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Perk Line */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs font-medium text-neutral-300">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{item.perk}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
