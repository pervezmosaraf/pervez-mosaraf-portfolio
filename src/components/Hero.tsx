import React, { useState } from 'react';
import { Play, Sparkles, ArrowRight, Eye, Film, TrendingUp, Zap, Clock } from 'lucide-react';
import { PERSONAL_INFO, EDITING_TOOLKIT } from '../data/portfolioData';

interface HeroProps {
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden studio-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-brand-neon/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[250px] bg-brand-pink/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-cyan/30 text-xs font-semibold text-slate-300 mb-8 shadow-lg shadow-brand-cyan/10 animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          <span className="text-brand-cyan tracking-wide uppercase text-[11px] font-bold">2026 Portfolio</span>
          <span className="text-slate-500">•</span>
          <span>{PERSONAL_INFO.availability}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6">
          High-Retention <span className="text-gradient-cyan">YouTube Edits</span>, Viral <span className="text-gradient-purple">9:16 Shorts</span> & Motion VFX
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          I turn raw footage into cinematic, high-retention stories that hook viewers in the first 3 seconds, keep watch-time high, and turn casual scrollers into loyal subscribers.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenShowreel}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-cyan to-teal-300 hover:from-white hover:to-brand-cyan text-dark-950 font-display font-bold text-base shadow-xl shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
          >
            <div className="w-6 h-6 rounded-full bg-dark-950/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 text-dark-950 fill-dark-950 translate-x-[1px]" />
            </div>
            Watch 2026 Showreel
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:glass-panel-glow text-white font-display font-semibold text-base border border-white/10 hover:border-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 text-brand-cyan group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Hero Showreel Video Teaser Card */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-dark-900 shadow-2xl hover:border-brand-cyan/50 transition-all duration-300">
            {isPlayingInline ? (
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <iframe
                  src={`${PERSONAL_INFO.showreel.videoUrl}?autoplay=1&rel=0`}
                  title={PERSONAL_INFO.showreel.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div 
                className="relative aspect-video w-full overflow-hidden cursor-pointer group"
                onClick={() => setIsPlayingInline(true)}
              >
                <img 
                  src={PERSONAL_INFO.showreel.thumbnail} 
                  alt="Featured SaaS Animation Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                
                {/* Center Play Glow Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-brand-cyan/30 rounded-full blur-xl group-hover:bg-brand-cyan/60 transition-all"></div>
                    <div className="w-20 h-20 rounded-full bg-brand-cyan text-dark-950 flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all">
                      <Play className="w-8 h-8 fill-dark-950 text-dark-950 translate-x-[2px]" />
                    </div>
                  </div>
                </div>

                {/* Badges on Showreel */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md text-xs font-semibold text-brand-cyan border border-brand-cyan/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                    Featured Project
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-brand-neon/80 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider">
                    SaaS Animation
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                  <div>
                    <h3 className="text-white font-display font-bold text-lg sm:text-xl">
                      {PERSONAL_INFO.showreel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Click to watch instantly — High-converting UI motion graphics & sound design
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-md bg-brand-cyan/20 border border-brand-cyan/30 text-xs font-semibold text-brand-cyan">
                    Watch Now ▶
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          <div className="glass-card p-5 rounded-2xl text-left border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Total Views</span>
              <Eye className="w-4 h-4 text-brand-cyan" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {PERSONAL_INFO.stats.totalViews}
            </div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Across client channels
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Videos Delivered</span>
              <Film className="w-4 h-4 text-brand-neon" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {PERSONAL_INFO.stats.projectsCompleted}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              YouTube + Reels + 3D
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Avg. Retention</span>
              <Zap className="w-4 h-4 text-brand-pink" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {PERSONAL_INFO.stats.avgRetention}
            </div>
            <div className="text-[11px] text-brand-cyan mt-1">
              Targeted hook psychology
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Fast Turnaround</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {PERSONAL_INFO.stats.avgTurnaround}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Always on deadline
            </div>
          </div>
        </div>

        {/* Tools Marquee Strip */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-5">
            Mastered Software & AI Production Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {EDITING_TOOLKIT.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl glass-panel hover:border-brand-cyan/40 transition-colors text-xs font-medium text-slate-300"
              >
                <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${tool.color} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>
                  {tool.icon}
                </div>
                <span>{tool.name}</span>
                <span className="text-[10px] text-slate-500 hidden sm:inline">({tool.category})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
