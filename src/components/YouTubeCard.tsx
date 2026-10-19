import React from 'react';
import { Play, Eye, TrendingUp } from 'lucide-react';
import type { ProjectItem } from '../types';

interface YouTubeCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const YouTubeCard: React.FC<YouTubeCardProps> = ({ project, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full border border-white/5 hover:border-brand-cyan/40 transition-all duration-300"
    >
      {/* 16:9 Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-dark-900">
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md bg-dark-950/80 backdrop-blur-md text-[11px] font-semibold text-brand-cyan border border-brand-cyan/20 uppercase tracking-wider">
            {project.category}
          </span>
          {project.duration && (
            <span className="px-2 py-0.5 rounded bg-dark-950/80 backdrop-blur-md text-[11px] font-mono text-slate-200">
              {project.duration}
            </span>
          )}
        </div>

        {/* Center Hover Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-brand-cyan/90 text-dark-950 flex items-center justify-center shadow-xl shadow-brand-cyan/40 group-hover:scale-110 active:scale-95 transition-transform">
            <Play className="w-6 h-6 fill-dark-950 text-dark-950 translate-x-[1.5px]" />
          </div>
        </div>

        {/* Bottom Metrics Bar over thumbnail */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          {project.views && (
            <span className="flex items-center gap-1 font-medium text-slate-200 bg-dark-950/70 backdrop-blur-sm px-2 py-0.5 rounded">
              <Eye className="w-3.5 h-3.5 text-brand-cyan" /> {project.views}
            </span>
          )}
          {project.retentionRate && (
            <span className="flex items-center gap-1 font-semibold text-emerald-400 bg-dark-950/70 backdrop-blur-sm px-2 py-0.5 rounded">
              <TrendingUp className="w-3.5 h-3.5" /> {project.retentionRate}
            </span>
          )}
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="text-xs text-brand-cyan/90 font-medium mb-1">
            {project.client}
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand-cyan transition-colors line-clamp-2 mb-2">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Software Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
          {project.softwareUsed.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-slate-300"
            >
              {tool}
            </span>
          ))}
          {project.softwareUsed.length > 3 && (
            <span className="text-[10px] text-slate-500">
              +{project.softwareUsed.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
