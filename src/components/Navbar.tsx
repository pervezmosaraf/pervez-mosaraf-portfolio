import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenShowreel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShowreel }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Featured Work', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Availability */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 p-1 flex items-center justify-center shadow-lg group-hover:border-brand-cyan/50 transition-all">
              <img 
                src="/logo.png" 
                alt="Pervez Mosaraf Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
              />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-medium text-emerald-400">Available for projects</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav in Inter font */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-slate-300 hover:text-brand-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenShowreel}
              className="px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider text-slate-200 hover:text-white glass-panel rounded-full border border-white/10 hover:border-brand-cyan/40 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              Watch Reel
            </button>
            <a
              href="#contact"
              className="btn-brand flex items-center gap-1.5 text-xs px-5 py-2.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-sans">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-brand-cyan py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShowreel();
              }}
              className="w-full py-2.5 px-4 text-xs font-display font-semibold uppercase tracking-wider text-center text-slate-200 glass-panel rounded-full border border-white/10 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              Watch Showreel
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-brand w-full py-2.5 text-center flex items-center justify-center gap-2"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
