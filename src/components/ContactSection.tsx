import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Calendar, 
  CheckCircle, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channelLink: '',
    projectType: initialPackage || 'Video Editing',
    budget: '$1,000 - $2,500 / mo',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-950">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Ready To Level Up Your <span className="text-gradient-cyan">Content</span>?
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
            Send me a message with your raw footage or channel link. I usually reply within 2–4 hours with initial thoughts and turnaround estimates.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Fast Response Channels
              </h3>
              <p className="font-sans text-sm text-slate-400 mb-6">
                Prefer chat? Reach out directly on WhatsApp or Email for instant project discussions.
              </p>

              {/* WhatsApp */}
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/5 hover:border-emerald-500/40 group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                      WhatsApp Chat
                    </div>
                    <div className="text-xs text-emerald-400 font-mono font-medium">
                      {PERSONAL_INFO.socials.whatsappNumber}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400" />
              </a>

              {/* Email Direct */}
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/5 hover:border-brand-cyan/40 group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-sm group-hover:text-brand-cyan transition-colors">
                      Direct Email
                    </div>
                    <div className="text-xs text-slate-400 font-sans">
                      {PERSONAL_INFO.socials.email}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan" />
              </a>

              {/* Calendly Discovery Call */}
              <a
                href={PERSONAL_INFO.socials.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/5 hover:border-brand-cyan/40 group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-cyan flex items-center justify-center border border-brand-blue/20 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-sm group-hover:text-brand-cyan transition-colors">
                      Book 15-Min Strategy Call
                    </div>
                    <div className="text-xs text-slate-400 font-sans">
                      Discuss video roadmap & style
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan" />
              </a>
            </div>

            {/* Availability Box */}
            <div className="p-5 rounded-2xl glass-panel border border-brand-cyan/20 mt-6">
              <div className="flex items-center gap-2 mb-1.5 font-sans">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Current Capacity
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Accepting <strong className="text-white">2 new channel retainers</strong> and <strong className="text-white">individual project commissions</strong> for this month.
              </p>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Inquiry Received!
                  </h3>
                  <p className="font-sans text-slate-300 text-sm max-w-md mx-auto">
                    Thanks for reaching out, Pervez is reviewing your project details and will email/WhatsApp you back shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full glass-panel text-xs font-sans font-semibold text-slate-300 hover:text-white cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-sans">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-sans">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@channel.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-sans">
                      Channel Link / Social Handle
                    </label>
                    <input
                      type="text"
                      value={formData.channelLink}
                      onChange={(e) => setFormData({ ...formData, channelLink: e.target.value })}
                      placeholder="youtube.com/@yourchannel or @instagram"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-sans">
                        Service Needed
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      >
                        <option value="Video Editing">YouTube & Long-Form Editing (16:9)</option>
                        <option value="Shorts & Reels">Viral Shorts & Reels (9:16)</option>
                        <option value="Motion Graphics">Motion Graphics & 3D VFX</option>
                        <option value="SaaS & AI Visuals">SaaS Product Animation & AI</option>
                        <option value="Monthly Retainer">Full Channel Monthly Retainer</option>
                        <option value="Other">Other Custom Project</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-sans">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      >
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $1,500">$500 - $1,500</option>
                        <option value="$1,500 - $3,500 / mo">$1,500 - $3,500 / month</option>
                        <option value="$3,500+ / mo">$3,500+ / month (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-sans">
                      Project Details / Raw Footage Link
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your video idea, reference videos you like, deadline, and link to raw footage (Google Drive, Dropbox, Frame.io)..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-white hover:to-brand-cyan text-dark-950 font-display font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-brand-blue/30 hover:shadow-brand-cyan/50 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Submit Project Brief
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-sans">
                    🔒 100% Confidential. Your raw footage & project concepts remain strictly private.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
