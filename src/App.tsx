import React, { useState } from 'react';
import type { ProjectItem } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
  const [selectedPackage, setSelectedPackage] = useState<string>('Viral Short-Form Pack');

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

  const handleSelectPackage = (packageTitle: string) => {
    setSelectedPackage(packageTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/25 selection:text-brand-cyan">
      {/* Sticky Navigation */}
      <Navbar onOpenShowreel={handleOpenShowreel} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenShowreel={handleOpenShowreel} />

        {/* Portfolio Showcase Grid (16:9 & 9:16) */}
        <PortfolioGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Before & After Editing Demonstration */}
        <BeforeAfterSection />

        {/* Studio Workflow & Production Pipeline */}
        <WorkflowSection />

        {/* Services & Transparent Pricing */}
        <ServicesSection onSelectPackage={handleSelectPackage} />

        {/* Client & Creator Endorsements */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Direct Booking & Project Inquiry Form */}
        <ContactSection initialPackage={selectedPackage} />
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
