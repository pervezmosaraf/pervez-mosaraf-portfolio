import React, { useState } from 'react';
import type { ProjectItem } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioGrid } from './components/PortfolioGrid';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Video Editing');

  const handleOpenShowreel = () => {
    const showreelProject: ProjectItem = {
      id: "official-showreel",
      title: PERSONAL_INFO.showreel.title,
      client: "Pervez Mosaraf — Featured Showcase",
      category: "motion",
      format: "16:9",
      aspectRatio: "16/9",
      thumbnailUrl: PERSONAL_INFO.showreel.thumbnail,
      videoUrl: PERSONAL_INFO.showreel.videoUrl,
      videoType: PERSONAL_INFO.showreel.videoType,
      duration: PERSONAL_INFO.showreel.duration,
      views: "Featured Masterpiece",
      retentionRate: "92%",
      description: "SaaS Product & Workflow Explainer animation featuring modern UI motion design, kinetic transitions, and high-retention storytelling.",
      softwareUsed: ["After Effects", "Premiere Pro", "Illustrator"],
      featured: true,
      metrics: {
        views: "Featured Showcase",
        retention: "92% Watch Time",
        subscribersGained: "Conversion Optimized"
      }
    };
    setSelectedProject(showreelProject);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/25 selection:text-brand-cyan">
      {/* Sticky Navigation */}
      <Navbar onOpenShowreel={handleOpenShowreel} />

      {/* Main Content Area - Matching Reference Design Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenShowreel={handleOpenShowreel} />

        {/* 2. About Section: "Turning Raw Footage Into Pure Art" with Pervez's Photo */}
        <AboutSection />

        {/* 3. Featured Work: 16:9 Long-Form & 9:16 Shorts/Reels */}
        <PortfolioGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Interactive Before & After Editing Demonstration */}
        <BeforeAfterSection />

        {/* 5. Client Testimonials */}
        <TestimonialsSection />

        {/* 6. Our Services (Clean grid - Pricing removed as requested) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 7. Our Process: 4-Step Production Roadmap & Timeline */}
        <WorkflowSection />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. Direct Contact & Booking Inquiry Form */}
        <ContactSection initialPackage={selectedService} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Full-Screen Video Lightbox Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
