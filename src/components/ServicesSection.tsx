import React from 'react';
import { Film, Smartphone, Layers, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: "video-editing",
      title: "Video Editing",
      category: "YouTube & Long Form",
      description: "High-retention storytelling for YouTubers and video podcasters. We remove dead air, calibrate rhythmic pacing, color grade, and engineer immersive multi-track sound design.",
      features: [
        "Narrative pacing & dead-air reduction",
        "Multi-camera angle synchronization",
        "Vocal audio mastering & noise reduction",
        "Broadcast Rec.709 color grading"
      ],
      icon: <Film className="w-6 h-6 text-brand-cyan" />,
      tag: "16:9 Long-Form"
    },
    {
      id: "shorts-reels",
      title: "Shorts & Reels",
      category: "9:16 Viral Social",
      description: "Fast-paced vertical videos engineered for TikTok, Instagram Reels, and YouTube Shorts. Crafted with scroll-stopping hooks, kinetic typography, and audio sync.",
      features: [
        "Hormozi / Vox-style animated subtitles",
        "Punch-in zooms & motion tracking",
        "Trending sound foley & bass hits",
        "100%+ viewer retention loop engineering"
      ],
      icon: <Smartphone className="w-6 h-6 text-sky-400" />,
      tag: "9:16 Vertical"
    },
    {
      id: "motion-graphics",
      title: "Motion Graphics",
      category: "2D & 3D Visual Effects",
      description: "Clean UI screen animations, kinetic typography, isometric explainers, and 3D product renders that turn complex concepts into captivating visual metaphors.",
      features: [
        "Custom kinetic typography & titles",
        "UI screen extrusions & vector motion",
        "3D product reveals & logo stings",
        "Custom After Effects VFX assets"
      ],
      icon: <Layers className="w-6 h-6 text-brand-blue" />,
      tag: "After Effects"
    },
    {
      id: "saas-commercial",
      title: "SaaS & AI Visuals",
      category: "Commercial Animation",
      description: "High-converting product launch videos, software feature explainers, and next-gen generative AI video visuals that boost sign-ups and demonstrate product value.",
      features: [
        "SaaS product walkthrough & UI highlights",
        "Generative AI video scenes (Runway Gen-3)",
        "Commercial promo pacing & music licensing",
        "4K ProRes & social media exports"
      ],
      icon: <Bot className="w-6 h-6 text-teal-400" />,
      tag: "SaaS & AI"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dark-950">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (matching reference design) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              What I Do
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Our <span className="text-gradient-cyan">Services</span>
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
              Comprehensive post-production solutions engineered for high retention, viral engagement, and broadcast visual quality.
            </p>
          </div>

          <a
            href="#contact"
            className="btn-brand self-start md:self-auto inline-flex items-center gap-2"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Services Grid (matching reference design layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/5 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-cyan/30 transition-all">
                    {service.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-mono text-slate-400 border border-white/5">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-1 font-sans">
                  {service.category}
                </div>
                <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-cyan transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6 pt-4 border-t border-white/5">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                onClick={() => onSelectService && onSelectService(service.title)}
                className="w-full py-2.5 px-4 rounded-xl glass-panel text-xs font-display font-semibold text-center text-slate-300 hover:text-white hover:border-brand-cyan/40 hover:bg-white/5 transition-all flex items-center justify-center gap-1.5 group/btn"
              >
                Inquire For This Service
                <ArrowRight className="w-3.5 h-3.5 text-brand-cyan group-hover/btn:translate-x-1 transition-transform" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
