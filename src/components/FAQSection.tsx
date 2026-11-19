import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-dark-900/40 relative overflow-hidden border-t border-sand-300/10">
      
      {/* Background ambient lighting in 10% Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-900/60 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Everything You Need <span className="text-gradient-accent">To Know</span>
          </h2>
          <p className="font-sans text-sand-300 text-sm sm:text-base leading-relaxed">
            Got questions about file formats, revision speed, or licensing? Here are the answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-sand-300/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-white hover:text-accent transition-colors cursor-pointer"
                >
                  <span className="font-display font-semibold text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-dark-950/60 border border-sand-300/15 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-accent/20 text-accent border-accent/40' : 'text-sand-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sand-300 font-sans text-sm sm:text-base leading-relaxed border-t border-sand-300/10 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
