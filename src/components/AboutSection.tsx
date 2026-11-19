import React from 'react';
import { Sparkles, Film } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900/40 border-y border-sand-300/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent-dark/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Pervez's Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Solid decorative backdrop in 10% Accent */}
              <div className="absolute -inset-2 bg-accent/20 rounded-3xl blur-xl group-hover:bg-accent/30 transition-all" />
              
              {/* Photo Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-sand-300/20 shadow-2xl bg-dark-900">
                <img
                  src="/pervez.jpg"
                  alt="Pervez Mosaraf - Video Editor & Motion Graphics Designer"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center filter brightness-[0.95] contrast-[1.05] hover:scale-102 transition-transform duration-700"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-dark-950/40" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-3.5 border border-sand-300/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-dark-950 font-display font-bold shadow-md">
                      <Film className="w-5 h-5 text-dark-950" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">
                        {PERSONAL_INFO.name}
                      </div>
                      <div className="text-[11px] text-accent font-medium">
                        {PERSONAL_INFO.title}
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-accent/30 text-xs font-semibold text-accent">
              <Sparkles className="w-3.5 h-3.5" />
              About The Editor
            </div>

            {/* Headline matching reference */}
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15]">
              Turning Raw Footage <br className="hidden sm:inline" />
              Into <span className="text-accent">Pure Visual Art</span>
            </h2>

            {/* Paragraphs in Inter & Sandstone (#d9d0c9) */}
            <div className="space-y-4 text-sand-300 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I'm <strong className="text-white">Pervez Mosaraf</strong>. I specialize in turning complex ideas and unedited footage into high-retention, cinematic video content that stops the scroll and inspires audiences to take action.
              </p>
              <p>
                Whether it's a 20-minute deep-dive YouTube documentary, viral 9:16 shorts engineered for 100%+ retention loops, or a high-converting SaaS product animation, I blend rhythm-accurate pacing, custom 2D/3D motion graphics, and Hollywood-level sound design into every single frame.
              </p>
              <p className="text-sand-400 text-xs sm:text-sm italic border-l-2 border-accent pl-3.5">
                "Every cut serves the story. Every sound effect heightens the emotion. No filler, pure engagement."
              </p>
            </div>

            {/* 3 Metric Counters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sand-300/10">
              <div className="glass-card rounded-2xl p-4 sm:p-5 border border-sand-300/10">
                <div className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-sand-400 font-sans mt-1">
                  Projects Delivered
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 sm:p-5 border border-sand-300/10">
                <div className="font-display font-extrabold text-2xl sm:text-4xl text-accent tracking-tight">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-sand-400 font-sans mt-1">
                  Global Clients
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 sm:p-5 border border-sand-300/10">
                <div className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                  5+ Yrs
                </div>
                <div className="text-xs sm:text-sm text-sand-400 font-sans mt-1">
                  Industry Expertise
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="btn-brand inline-flex items-center gap-2"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Start A Project
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
