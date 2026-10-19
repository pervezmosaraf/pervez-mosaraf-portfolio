import React, { useEffect, useState } from 'react';
import { X, Share2, Check, ExternalLink, Sparkles, Eye, TrendingUp } from 'lucide-react';
import type { ProjectItem } from '../types';

interface VideoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isVertical = project.format === '9:16';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark-950/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className={`relative z-10 w-full ${
          isVertical ? 'max-w-4xl' : 'max-w-5xl'
        } bg-dark-900 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-auto`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-dark-950/50">
          <div className="flex items-center gap-2.5">
            <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
              isVertical ? 'bg-brand-neon/20 text-brand-neon border border-brand-neon/30' : 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
            }`}>
              {isVertical ? '9:16 Vertical Reel' : '16:9 Long-Form / Motion'}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">•</span>
            <span className="text-xs font-medium text-slate-300 hidden sm:inline">{project.client}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5 text-xs"
              title="Share project link"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className={`grid ${isVertical ? 'md:grid-cols-12' : 'grid-cols-1'} gap-6 p-4 sm:p-6`}>
          
          {/* Video Container */}
          <div className={`${isVertical ? 'md:col-span-5 flex justify-center' : 'w-full'}`}>
            <div 
              className={`relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${
                isVertical 
                  ? 'w-[280px] sm:w-[320px] aspect-[9/16] ring-4 ring-white/5' 
                  : 'w-full aspect-video'
              }`}
            >
              {project.videoType === 'youtube' ? (
                <iframe
                  src={`${project.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                  title={project.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={project.videoUrl}
                  poster={project.thumbnailUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Project Details Panel */}
          <div className={`${isVertical ? 'md:col-span-7 flex flex-col justify-between' : 'w-full pt-2'}`}>
            <div>
              {/* Client & Category */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-brand-cyan text-xs font-semibold uppercase tracking-wider">
                  {project.category.toUpperCase()} SHOWCASE
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-300">Client: {project.client}</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Performance Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-dark-950/60 border border-white/5 mb-5">
                  {project.metrics.views && (
                    <div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Eye className="w-3 h-3 text-brand-cyan" /> Views
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        {project.metrics.views}
                      </div>
                    </div>
                  )}
                  {project.metrics.retention && (
                    <div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-brand-pink" /> Retention
                      </div>
                      <div className="text-sm font-bold text-emerald-400 mt-0.5">
                        {project.metrics.retention}
                      </div>
                    </div>
                  )}
                  {project.metrics.subscribersGained && (
                    <div className="col-span-2 sm:col-span-1">
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" /> Result
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        {project.metrics.subscribersGained}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Software Used Tags */}
              <div className="mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Software & Tech Applied
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.softwareUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-400">
                Want a similar video for your brand or channel?
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-cyan to-teal-300 hover:from-white hover:to-brand-cyan text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg shadow-brand-cyan/20"
              >
                Hire For Similar Project
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
