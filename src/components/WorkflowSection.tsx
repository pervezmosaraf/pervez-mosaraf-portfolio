import React from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { Target, Scissors, Layers, Volume2, CheckCircle2, Film } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5 text-brand-cyan" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-brand-neon" />;
      case 'Layers': return <Layers className="w-5 h-5 text-brand-pink" />;
      case 'Volume2': return <Volume2 className="w-5 h-5 text-amber-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default: return <Film className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Film className="w-3.5 h-3.5" />
            The Studio Pipeline
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            How Every Video Is <span className="text-gradient-cyan">Engineered</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested production pipeline modeled after top Hollywood editing suites and high-retention creator studios.
          </p>
        </div>

        {/* Timeline Visualization Deck */}
        <div className="relative">
          
          {/* Subtle timeline track indicator for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan via-brand-neon to-brand-pink -translate-y-1/2 z-0 opacity-20" />

          {/* Workflow Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {WORKFLOW_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-extrabold text-slate-600 group-hover:text-brand-cyan transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-cyan/30 transition-all">
                      {getIcon(step.icon)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom track bar marker */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>TRACK #{index + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-brand-cyan/40 group-hover:bg-brand-cyan transition-colors" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Simulated NLE Editing Track Footer Bar */}
        <div className="mt-12 glass-panel rounded-2xl p-4 sm:p-5 border border-white/5 max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono text-slate-300">
              FRAME.IO COLLABORATION READY: 00:14:20:00 [4K PRORES 422 HQ]
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-brand-cyan font-bold">100% On-Time Delivery Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
