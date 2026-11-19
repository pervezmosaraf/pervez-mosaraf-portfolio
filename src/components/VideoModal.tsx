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
      {/* Backdrop (60% Dominant Base) */}
      <div 
        className="fixed inset-0 bg-dark-950/92 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className={`relative z-10 w-full ${
          isVertical ? 'max-w-4xl' : 'max-w-5xl'
        } bg-dark-900 border border-sand-300/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-auto`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-sand-300/10 bg-dark-950/80">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider font-sans bg-accent/15 text-accent border border-accent/30">
              {isVertical ? '9:16 Vertical Reel' : '16:9 Long-Form / Motion'}
            </span>
            <span className="text-xs text-sand-500 hidden sm:inline">•</span>
            <span className="text-xs font-medium text-sand-400 hidden sm:inline font-sans">{project.client}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 text-sand-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5 text-xs font-sans cursor-pointer"
              title="Share project link"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium font-sans">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline font-sans">Share</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-sand-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
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
              className={`relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-sand-300/15 ${
                isVertical 
                  ? 'w-[280px] sm:w-[320px] aspect-[9/16] ring-4 ring-sand-300/5' 
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
                <span className="text-accent text-xs font-semibold uppercase tracking-wider font-sans">
                  {project.category.toUpperCase()} SHOWCASE
                </span>
                <span className="text-sand-600">•</span>
                <span className="text-xs text-sand-400 font-sans">Client: {project.client}</span>
              </div>

              {/* Title in Space Grotesk Bold */}
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                {project.title}
              </h2>

              {/* Description in Inter with Sandstone (#d9d0c9) */}
              <p className="text-sand-300 font-sans text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Performance Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-dark-950/80 border border-sand-300/10 mb-5 font-sans">
                  {project.metrics.views && (
                    <div>
                      <div className="text-[11px] text-sand-400 flex items-center gap-1 font-sans">
                        <Eye className="w-3 h-3 text-accent" /> Views
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5 font-display">
                        {project.metrics.views}
                      </div>
                    </div>
                  )}
                  {project.metrics.retention && (
                    <div>
                      <div className="text-[11px] text-sand-400 flex items-center gap-1 font-sans">
                        <TrendingUp className="w-3 h-3 text-emerald-400" /> Retention
                      </div>
                      <div className="text-sm font-bold text-emerald-400 mt-0.5 font-display">
                        {project.metrics.retention}
                      </div>
                    </div>
                  )}
                  {project.metrics.subscribersGained && (
                    <div className="col-span-2 sm:col-span-1">
                      <div className="text-[11px] text-sand-400 flex items-center gap-1 font-sans">
                        <Sparkles className="w-3 h-3 text-accent" /> Result
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5 font-display">
                        {project.metrics.subscribersGained}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Software Used Tags */}
              <div className="mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-sand-400 block mb-2 font-sans">
                  Software & Tech Applied
                </span>
                <div className="flex flex-wrap gap-1.5 font-sans">
                  {project.softwareUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-dark-950/60 border border-sand-300/10 text-xs font-medium text-sand-300 font-sans"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-sand-300/10 flex flex-wrap items-center justify-between gap-3 font-sans">
              <div className="text-xs text-sand-400 font-sans">
                Want a similar video for your brand or channel?
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="btn-brand flex items-center gap-1.5 text-xs px-5 py-2.5"
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
