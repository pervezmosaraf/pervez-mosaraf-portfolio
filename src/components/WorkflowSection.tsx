import React from 'react';
import { Target, Scissors, Volume2, CheckCircle2 } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const processSteps = [
    {
      step: "01",
      title: "Concept & Strategy",
      description: "We analyze your raw footage and craft a scroll-stopping 3-5 second hook to prevent early drop-off.",
      icon: <Target className="w-5 h-5 text-accent" />
    },
    {
      step: "02",
      title: "Creative Production",
      description: "Tight narrative assembly, cutting all dead air, stutters, and tangents with variable rhythmic pacing.",
      icon: <Scissors className="w-5 h-5 text-accent-light" />
    },
    {
      step: "03",
      title: "Sound & Polish",
      description: "Layering 80+ Foley effects (whooshes, risers, impacts) with custom motion graphics and color grading.",
      icon: <Volume2 className="w-5 h-5 text-amber-400" />
    },
    {
      step: "04",
      title: "Final Delivery",
      description: "Collaborative timestamped review via Frame.io, fast revisions, and final 4K broadcast-ready export.",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-dark-900/60 border-t border-sand-300/10">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-900/60 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Production Roadmap
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Our <span className="text-gradient-accent">Process</span>
          </h2>
          <p className="font-sans text-sand-300 text-sm sm:text-base leading-relaxed">
            Precision post-production modeled after top YouTube creators and commercial studios.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-sand-300/10 hover:border-accent/45 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-extrabold text-sand-500/40 group-hover:text-accent transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-dark-950/60 border border-sand-300/15 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/40 transition-all">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>

                {/* Description in Inter */}
                <p className="font-sans text-xs sm:text-sm text-sand-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Track Indicator */}
              <div className="mt-6 pt-3 border-t border-sand-300/10 flex items-center justify-between text-[11px] text-sand-400 font-mono">
                <span>STAGE #{index + 1}</span>
                <span className="w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Progress Timeline Track Bar with Glowing Ticks */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-sand-300/15 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-2 text-xs font-mono text-sand-400">
            <span className="text-accent font-semibold">01 INGESTION</span>
            <span>02 ROUGH CUT</span>
            <span>03 SOUND & VFX</span>
            <span className="text-emerald-400 font-semibold">04 4K DELIVERY</span>
          </div>

          {/* Timeline Bar with glowing ticks */}
          <div className="w-full h-2.5 rounded-full bg-dark-950 p-0.5 border border-sand-300/15 relative overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-amber-400 via-accent to-accent-dark w-full animate-pulse-subtle" />
          </div>
          
          <div className="flex items-center justify-between mt-3 text-[11px] font-sans text-sand-300">
            <span>Average turnaround: 24-48 hours for shorts • 3-5 days for long-form</span>
            <span className="text-accent font-medium hidden sm:inline">100% On-Time Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
