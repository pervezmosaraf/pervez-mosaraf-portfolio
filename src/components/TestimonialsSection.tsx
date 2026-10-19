import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { MessageSquare, Star, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Creator Endorsements
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Trusted by Creators with <span className="text-gradient-cyan">Millions of Viewers</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hear from channel owners, startup founders, and content leads who scaled their watch-time and conversions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-3xl p-7 sm:p-8 border border-white/5 flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300"
            >
              <div>
                {/* Metric Badge */}
                {t.metricBadge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-5">
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

                {/* Quote Content */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
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
                  <div className="text-xs text-slate-400">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-brand-cyan font-semibold">
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
