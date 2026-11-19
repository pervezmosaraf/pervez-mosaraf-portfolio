import React, { useState } from 'react';
import { Play, Sparkles, ArrowRight, Star, Layers, Scissors, Volume2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  return (
    <section className="relative min-h-[96vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden studio-grid">
      
      {/* Reference Design: Atmospheric Brand Orbital Glow Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] brand-orbit-glow pointer-events-none -z-10" />
      
      {/* Decorative elliptical orbital rings matching reference screenshot */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[320px] sm:h-[420px] rounded-full border border-accent/20 pointer-events-none -z-10 transform -rotate-6" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[400px] sm:h-[520px] rounded-full border border-sand-300/10 pointer-events-none -z-10 transform rotate-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-accent/30 text-xs font-semibold text-sand-200 mb-6 shadow-lg shadow-accent/10">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-accent tracking-wide uppercase text-[11px] font-bold">Available For Q2/Q3 Projects</span>
          <span className="text-sand-500">•</span>
          <span className="text-sand-300 font-sans">Full Channel Retainers & Single Edits</span>
        </div>

        {/* Main Headline (Flow and Typography matching reference design) */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6">
          Editing Stories <br className="hidden sm:inline" />
          That <span className="text-gradient-accent">Inspire Audiences</span>
        </h1>

        {/* Subtitle in Inter with Sandstone (#d9d0c9) */}
        <p className="font-sans text-sand-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
          High-retention YouTube video editing, SaaS product motion graphics, and viral 9:16 reels engineered to capture attention in 3 seconds and scale conversions.
        </p>

        {/* Action Buttons & Social Proof Pill (matching reference design layout) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14">
          <a
            href="#portfolio"
            className="btn-brand flex items-center justify-center gap-2.5 text-sm px-8 py-4"
          >
            <span>See My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Social Proof Badges with Avatars */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel border border-sand-300/15">
            <div className="flex -space-x-2.5 overflow-hidden">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-dark-950 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Creator" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-dark-950 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Creator" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-dark-950 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Creator" />
            </div>
            <div className="text-left font-sans">
              <div className="flex items-center text-accent text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent" />
                ))}
              </div>
              <span className="text-[11px] text-sand-300 font-medium">4.9/5 from 80+ Creators</span>
            </div>
          </div>
        </div>

        {/* Hero Video Editor Mockup Window (matching reference design card) */}
        <div className="max-w-4xl mx-auto mb-14 relative group">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-sand-300/15 bg-dark-900 shadow-2xl group-hover:border-accent/40 transition-all duration-300">
            
            {/* Top Editor Toolbar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-dark-950/80 border-b border-sand-300/10 text-xs text-sand-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-accent/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-sand-300 hidden sm:inline">
                  Timeline — {PERSONAL_INFO.showreel.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent/20 text-accent border border-accent/30 font-semibold">
                  4K 60FPS
                </span>
                <span className="font-mono text-[11px] text-sand-400">00:01:45:12</span>
              </div>
            </div>

            {/* Video Area */}
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
                className="relative aspect-video w-full overflow-hidden cursor-pointer"
                onClick={() => setIsPlayingInline(true)}
              >
                <img 
                  src={PERSONAL_INFO.showreel.thumbnail} 
                  alt="Featured SaaS Animation Preview" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.95]"
                />
                
                {/* Center Glowing Play Button in 10% Accent (#f58517) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-accent/30 rounded-full blur-xl group-hover:bg-accent/60 transition-all"></div>
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-accent to-accent-dark text-dark-950 flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all">
                      <Play className="w-8 h-8 fill-dark-950 text-dark-950 translate-x-[2px]" />
                    </div>
                  </div>
                </div>

                {/* Badges on Video Preview */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-dark-950/85 backdrop-blur-md text-xs font-semibold text-accent border border-accent/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    Featured SaaS Animation
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-accent-dark/90 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider">
                    Watch Now
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                  <div>
                    <h3 className="text-white font-display font-bold text-lg sm:text-xl">
                      {PERSONAL_INFO.showreel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-sand-300 font-sans">
                      Click to play immediately — Clean UI motion graphics, rhythm cuts & sound design
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-md bg-accent/20 border border-accent/30 text-xs font-semibold text-accent">
                    Watch Reel ▶
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Timeline Waveform Track (matching reference editor window) */}
            <div className="bg-dark-950 px-4 py-3 border-t border-sand-300/10 flex items-center justify-between text-xs text-sand-400">
              <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto">
                <span className="flex items-center gap-1 text-[11px] text-sand-300 font-sans">
                  <Scissors className="w-3.5 h-3.5 text-accent" /> Visual Cut
                </span>
                <span className="flex items-center gap-1 text-[11px] text-sand-300 font-sans">
                  <Volume2 className="w-3.5 h-3.5 text-sand-400" /> Multi-Track SFX
                </span>
                <span className="flex items-center gap-1 text-[11px] text-sand-300 font-sans">
                  <Layers className="w-3.5 h-3.5 text-accent-light" /> 3D Motion VFX
                </span>
              </div>
              <button
                onClick={onOpenShowreel}
                className="text-xs text-accent font-semibold hover:underline hidden sm:inline"
              >
                Expand Lightbox ↗
              </button>
            </div>

          </div>
        </div>

        {/* Platforms & Tools Marquee Strip */}
        <div className="border-t border-sand-300/10 pt-8 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-sand-400 font-semibold mb-5 font-sans">
            Trusted Production Standards & Software Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sand-300/80 text-xs sm:text-sm font-display font-semibold">
            <span className="hover:text-accent transition-colors">Premiere Pro</span>
            <span className="text-sand-600">•</span>
            <span className="hover:text-accent transition-colors">After Effects</span>
            <span className="text-sand-600">•</span>
            <span className="hover:text-accent transition-colors">DaVinci Resolve</span>
            <span className="text-sand-600">•</span>
            <span className="hover:text-accent transition-colors">YouTube 16:9</span>
            <span className="text-sand-600">•</span>
            <span className="hover:text-accent transition-colors">Shorts & Reels</span>
            <span className="text-sand-600">•</span>
            <span className="hover:text-accent transition-colors">Runway Gen-3 AI</span>
          </div>
        </div>

      </div>
    </section>
  );
};
