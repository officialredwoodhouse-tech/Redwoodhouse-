import React from 'react';
import { Check, Minus } from 'lucide-react';

export const ValuePropositionSection: React.FC = () => {
  const contrasts = [
    {
      diy: 'Paying for a basic website while your staff still wastes 20+ hours a week on manual bookings, data entry, and reports.',
      rwh: 'Autonomous AI agents and custom operational software eliminate repetitive admin for clinics, gyms, agencies, and businesses.',
    },
    {
      diy: 'Juggling a freelance designer, an offshore coder, an SEO freelancer, and Zapier scripts that constantly break.',
      rwh: 'One unified engineering studio in Chandigarh designing your AI agents, software, SEO, design, and web architecture together.',
    },
    {
      diy: 'Slow WordPress or Wix templates taking 6+ seconds to load, full of plugin vulnerabilities and zero SEO structure.',
      rwh: 'Handcrafted sub-second React/Next.js architectures scoring 99+ on Google Core Web Vitals with rich Schema.org graphs.',
    },
    {
      diy: 'Ad clicks that lead to cold contact forms with no immediate response, causing 60%+ of high-intent leads to bounce.',
      rwh: 'Instant 30-second AI conversational triage (WhatsApp/Web) converting ad traffic directly into booked consultations or trials.',
    },
    {
      diy: 'Proprietary lock-in or agency retainers where you don\'t even own your source code, AI prompts, or domain assets.',
      rwh: '100% complete client ownership of source code, database schemas, AI agent pipelines, and analytics assets.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Strategic Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            The difference between a basic website and an intelligent business engine.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            Most businesses hire a web agency and realize their real problems remain untouched: manual intake, slow response times, lost bookings, and zero search authority. Redwood House solves the entire chain.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mt-14 bg-white rounded-lg border border-[#E8E4DC] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E8E4DC]">
            {/* The Fragmented Route */}
            <div className="p-8 sm:p-10 space-y-6 bg-[#FAF9F7]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                  The Old Model
                </span>
                <h3 className="text-xl font-serif text-[#58544E] mt-1 font-medium">
                  Isolated Websites & Manual Operations
                </h3>
              </div>
              <ul className="space-y-6">
                {contrasts.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#78716C]">
                    <Minus className="w-4 h-4 text-[#A8A29E] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{c.diy}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Redwood House Route */}
            <div className="p-8 sm:p-10 space-y-6 bg-white">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#3D1D18] block font-semibold">
                  The Redwood Standard
                </span>
                <h3 className="text-xl font-serif text-[#1C1A18] mt-1 font-medium">
                  AI Automation + Software + SEO + Websites
                </h3>
              </div>
              <ul className="space-y-6">
                {contrasts.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1C1A18]">
                    <Check className="w-4 h-4 text-[#3D1D18] mt-0.5 shrink-0" />
                    <span className="leading-relaxed font-medium">{c.rwh}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="p-6 bg-[#F4F0E8]/50 border-t border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#58544E]">
              Replace 4 disconnected vendors with one intelligent engineering studio.
            </span>
            <span className="text-xs font-mono text-[#3D1D18] font-semibold">
              Engineered in Chandigarh · Deployed Globally
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
