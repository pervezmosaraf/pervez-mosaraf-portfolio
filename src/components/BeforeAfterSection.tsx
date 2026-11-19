import React, { useState, useRef } from 'react';
import { BEFORE_AFTER_DATA } from '../data/portfolioData';
import { Sliders, Sparkles, CheckCircle, Zap } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activePairIndex, setActivePairIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentPair = BEFORE_AFTER_DATA[activePairIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-24 bg-dark-900/60 border-y border-sand-300/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-900/60 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            The Edit Magic
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Interactive <span className="text-accent">Before & After</span>
          </h2>
          <p className="font-sans text-sand-300 text-sm sm:text-base leading-relaxed">
            Drag the slider to see how raw, flat camera files are transformed into high-impact, color-graded masterpieces with motion graphics and sound design.
          </p>

          {/* Selector Switch */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {BEFORE_AFTER_DATA.map((pair, idx) => (
              <button
                key={pair.id}
                onClick={() => setActivePairIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-display font-semibold transition-all cursor-pointer ${
                  activePairIndex === idx
                    ? 'bg-accent text-dark-950 font-bold shadow-md'
                    : 'glass-panel text-sand-300 hover:text-white hover:border-accent'
                }`}
              >
                Comparison #{idx + 1}: {pair.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-sand-300/15 select-none cursor-ew-resize bg-black"
          >
            {/* Edited / Master Image (Full background) */}
            <img
              src={currentPair.editedImage}
              alt="Final Edited Master"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Raw Image (Clipped on top) */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentPair.rawImage}
                alt="Raw Camera Footage"
                className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                draggable={false}
              />
              {/* Raw Label */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-md bg-dark-950/85 backdrop-blur-md text-xs font-bold text-sand-300 border border-sand-300/15 uppercase tracking-wider font-mono">
                  Raw Flat Footage
                </span>
              </div>
            </div>

            {/* Edited Label */}
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1 rounded-md bg-accent text-dark-950 text-xs font-display font-extrabold uppercase tracking-wider shadow-md">
                Final Master + Color VFX
              </span>
            </div>

            {/* Divider Line & Draggable Handle in 10% Accent */}
            <div 
              className="absolute inset-y-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-accent shadow-[0_0_15px_rgba(245,133,23,0.8)]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-950 border-2 border-accent shadow-xl flex items-center justify-center text-accent pointer-events-auto">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Instruction tooltip at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <span className="px-4 py-1.5 rounded-full bg-dark-950/85 backdrop-blur-md text-xs font-sans font-medium text-sand-300 border border-sand-300/15">
                Drag slider left / right to compare
              </span>
            </div>
          </div>

          {/* Details Bar below comparison */}
          <div className="glass-panel rounded-2xl p-6 mt-6 border border-sand-300/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-display font-bold text-lg">
                {currentPair.title}
              </h3>
              <p className="font-sans text-sm text-sand-400 mt-1">
                {currentPair.details}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 font-sans">
              <span className="flex items-center gap-1.5 text-xs text-accent font-semibold">
                <CheckCircle className="w-4 h-4" /> 100% Broadcast Ready
              </span>
              <span className="flex items-center gap-1.5 text-xs text-sand-300 font-semibold">
                <Zap className="w-4 h-4 text-accent" /> 4K 10-Bit Color
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
