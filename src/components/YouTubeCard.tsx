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
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full border border-sand-300/10 hover:border-accent/45 transition-all duration-300"
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
          <span className="px-2.5 py-1 rounded-md bg-dark-950/85 backdrop-blur-md text-[11px] font-semibold text-accent border border-accent/30 uppercase tracking-wider font-sans">
            {project.category}
          </span>
          {project.duration && (
            <span className="px-2 py-0.5 rounded bg-dark-950/85 backdrop-blur-md text-[11px] font-mono text-sand-200">
              {project.duration}
            </span>
          )}
        </div>

        {/* Center Hover Play Button with 10% Accent */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-accent text-dark-950 flex items-center justify-center shadow-xl shadow-accent/50 group-hover:scale-110 active:scale-95 transition-transform">
            <Play className="w-6 h-6 fill-dark-950 text-dark-950 translate-x-[1.5px]" />
          </div>
        </div>

        {/* Bottom Metrics Bar over thumbnail */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          {project.views && (
            <span className="flex items-center gap-1 font-medium text-sand-200 bg-dark-950/75 backdrop-blur-sm px-2 py-0.5 rounded">
              <Eye className="w-3.5 h-3.5 text-accent" /> {project.views}
            </span>
          )}
          {project.retentionRate && (
            <span className="flex items-center gap-1 font-semibold text-emerald-400 bg-dark-950/75 backdrop-blur-sm px-2 py-0.5 rounded">
              <TrendingUp className="w-3.5 h-3.5" /> {project.retentionRate}
            </span>
          )}
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="text-xs text-sand-400 font-medium mb-1 font-sans">
            {project.client}
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-accent transition-colors line-clamp-2 mb-2">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-sand-300/90 line-clamp-2 mb-4 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Software Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-sand-300/10">
          {project.softwareUsed.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-dark-900/80 text-sand-300 border border-sand-300/10 font-sans"
            >
              {tool}
            </span>
          ))}
          {project.softwareUsed.length > 3 && (
            <span className="text-[10px] text-sand-500 font-sans">
              +{project.softwareUsed.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
