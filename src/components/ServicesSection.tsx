import React from 'react';
import { SERVICE_PACKAGES } from '../data/portfolioData';
import { Check, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectPackage: (packageTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing & Services
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Simple Rates, <span className="text-gradient-cyan">Maximum Retention</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose a one-off package or monthly retainer. Every cut is engineered with sound design, kinetic graphics, and frame-accurate pacing.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'glass-panel-glow border-brand-cyan/40 -translate-y-2'
                  : 'glass-card'
              }`}
            >
              {/* Popular Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
                    pkg.popular 
                      ? 'bg-brand-cyan text-dark-950 shadow-brand-cyan/30' 
                      : 'bg-dark-800 text-brand-neon border border-brand-neon/30'
                  }`}>
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6 pt-2">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Price and turnaround */}
                <div className="mb-6 p-4 rounded-2xl bg-dark-950/60 border border-white/5">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {pkg.priceTag}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-cyan mt-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5" /> Turnaround: {pkg.deliveryTime}
                  </div>
                </div>

                {/* Best For tag */}
                <p className="text-xs text-slate-300 italic mb-6 border-b border-white/5 pb-4">
                  Best for: {pkg.bestFor}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                onClick={() => onSelectPackage(pkg.title)}
                className={`w-full py-3.5 px-6 rounded-full font-display font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 group ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-brand-cyan to-teal-300 hover:from-white hover:to-brand-cyan text-dark-950 shadow-lg shadow-brand-cyan/20'
                    : 'glass-panel hover:bg-white/10 text-white border border-white/10 hover:border-brand-cyan/40'
                }`}
              >
                Book This Package
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          ))}
        </div>

        {/* Retainer / Custom Enterprise note */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-white/5 max-w-2xl mx-auto">
          <p className="text-sm text-slate-300">
            Need a dedicated editor for <span className="text-white font-bold">4+ videos per month</span> or custom brand assets? 
            <a href="#contact" className="text-brand-cyan font-bold hover:underline ml-1">
              Inquire about monthly retainer discounts →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
