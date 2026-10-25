import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { MessageSquare, Star, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-dark-900/30">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Social Proof
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Client <span className="text-gradient-cyan">Testimonials</span>
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
            What creators, SaaS founders, and channel leads say about working with Pervez Mosaraf.
          </p>
        </div>

        {/* Testimonials Grid (matching reference layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-white/5 flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 group"
            >
              <div>
                {/* Metric Badge */}
                {t.metricBadge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-bold mb-5 font-sans">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {t.metricBadge}
                  </div>
                )}

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Content in Inter */}
                <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Creator Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-cyan/40"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {t.name}
                  </h4>
                  <div className="text-xs text-slate-400 font-sans">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-brand-cyan font-semibold font-sans">
                    {t.channelOrCompany}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
