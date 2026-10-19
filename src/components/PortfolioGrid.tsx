import React, { useState } from 'react';
import type { VideoCategory, ProjectItem } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { YouTubeCard } from './YouTubeCard';
import { ShortsCard } from './ShortsCard';
import { Sparkles, Film, Smartphone, Layers, Bot, SlidersHorizontal } from 'lucide-react';

interface PortfolioGridProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<VideoCategory>('all');

  const filterTabs: { id: VideoCategory; label: string; icon: React.ReactNode; count: number }[] = [
    { 
      id: 'all', 
      label: 'All Projects', 
      icon: <Sparkles className="w-4 h-4" />,
      count: PROJECTS.length 
    },
    { 
      id: 'youtube', 
      label: 'YouTube (16:9)', 
      icon: <Film className="w-4 h-4" />,
      count: PROJECTS.filter(p => p.category === 'youtube').length 
    },
    { 
      id: 'reels', 
      label: 'Reels & Shorts (9:16)', 
      icon: <Smartphone className="w-4 h-4" />,
      count: PROJECTS.filter(p => p.category === 'reels').length 
    },
    { 
      id: 'motion', 
      label: 'Motion Graphics & 3D', 
      icon: <Layers className="w-4 h-4" />,
      count: PROJECTS.filter(p => p.category === 'motion').length 
    },
    { 
      id: 'ai', 
      label: 'AI Video & VFX', 
      icon: <Bot className="w-4 h-4" />,
      count: PROJECTS.filter(p => p.category === 'ai').length 
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  const horizontalProjects = filteredProjects.filter(p => p.format === '16:9');
  const verticalProjects = filteredProjects.filter(p => p.format === '9:16');

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Curated Portfolio
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Proven Results Across <span className="text-gradient-cyan">Every Screen</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From 20-minute deep-dive YouTube documentaries to viral 30-second vertical reels that stop the scroll. Click any video to inspect metrics, tools, and playback.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-cyan text-dark-950 shadow-lg shadow-brand-cyan/30 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isActive ? 'bg-dark-950/20 text-dark-950' : 'bg-white/10 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display based on active tab */}
        {activeTab === 'reels' ? (
          /* Dedicated Vertical Reels Phone Grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {verticalProjects.map((project) => (
              <ShortsCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        ) : activeTab === 'youtube' || activeTab === 'motion' ? (
          /* Dedicated 16:9 Widescreen Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {horizontalProjects.map((project) => (
              <YouTubeCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        ) : (
          /* All Work / Mixed Tab: Showcase layout */
          <div className="space-y-16">
            
            {/* Long-Form & Motion Graphics Section */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Film className="w-5 h-5 text-brand-cyan" />
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    YouTube Long-Form & Motion Graphics (16:9)
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('youtube')}
                  className="text-xs font-semibold text-brand-cyan hover:underline"
                >
                  View all 16:9 →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {horizontalProjects.map((project) => (
                  <YouTubeCard
                    key={project.id}
                    project={project}
                    onSelect={onSelectProject}
                  />
                ))}
              </div>
            </div>

            {/* Short-Form Viral Reels & AI Visuals Section */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-5 h-5 text-brand-neon" />
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Viral Shorts, Reels & AI Video (9:16)
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('reels')}
                  className="text-xs font-semibold text-brand-neon hover:underline"
                >
                  View all 9:16 →
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {verticalProjects.map((project) => (
                  <ShortsCard
                    key={project.id}
                    project={project}
                    onSelect={onSelectProject}
                  />
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
