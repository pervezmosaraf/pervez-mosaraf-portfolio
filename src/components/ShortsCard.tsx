import React, { useState, useRef } from 'react';
import { Play, Eye, Sparkles } from 'lucide-react';
import type { ProjectItem } from '../types';

interface ShortsCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ShortsCard: React.FC<ShortsCardProps> = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.videoType === 'mp4' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (project.videoType === 'mp4' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer flex flex-col items-center"
    >
      {/* Smartphone-inspired bezel shell */}
      <div className="relative w-full aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-dark-900 border-2 border-white/10 group-hover:border-brand-neon/60 shadow-xl group-hover:shadow-2xl group-hover:shadow-brand-neon/20 transition-all duration-300 transform group-hover:-translate-y-1.5">
        
        {/* Dynamic Video or Thumbnail */}
        {project.videoType === 'mp4' ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.thumbnailUrl}
            muted
            loop
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        )}

        {/* Gradient dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-950/30 to-dark-950/40 pointer-events-none" />

        {/* Top bar indicators */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2 py-0.5 rounded-full bg-dark-950/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-brand-neon border border-brand-neon/30">
            9:16 Reel
          </span>
          {project.retentionRate && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
              {project.retentionRate}
            </span>
          )}
        </div>

        {/* Center Hover Action */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`w-14 h-14 rounded-full bg-brand-neon/90 text-white flex items-center justify-center shadow-xl shadow-brand-neon/40 transition-all duration-300 ${
            isHovered ? 'scale-110 opacity-100' : 'scale-90 opacity-0 group-hover:opacity-100'
          }`}>
            <Play className="w-6 h-6 fill-white text-white translate-x-[1.5px]" />
          </div>
        </div>

        {/* Bottom Details (Title, Views, Client) */}
        <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
          <div className="text-[11px] font-semibold text-brand-cyan mb-1 line-clamp-1">
            {project.client}
          </div>
          <h4 className="text-white font-display font-bold text-sm sm:text-base leading-tight line-clamp-2 mb-2 group-hover:text-brand-cyan transition-colors">
            {project.title}
          </h4>

          {/* Metrics bar */}
          <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/10 text-slate-300">
            <span className="flex items-center gap-1 font-semibold text-white">
              <Eye className="w-3.5 h-3.5 text-brand-cyan" /> {project.views}
            </span>
            <span className="flex items-center gap-1 text-[10px] text-slate-400">
              <Sparkles className="w-3 h-3 text-brand-neon" /> Viral Edit
            </span>
          </div>
        </div>

      </div>

      {/* Software pills under the card */}
      <div className="w-full flex items-center justify-center gap-1.5 mt-2.5">
        {project.softwareUsed.slice(0, 2).map((s) => (
          <span key={s} className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-400 border border-white/5">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};
