import React from 'react';
import { ASSETS } from '../constants/assets';

export const WhyRedwoodHouseSection: React.FC = () => {
  const principles = [
    {
      title: 'Discretion & Privacy',
      desc: 'We are ghostwriters in the truest sense. Strict non-disclosure agreements are standard. Your book remains entirely yours, whether published under your name or within your private company ecosystem.',
    },
    {
      title: 'One-Time Clear Engagement',
      desc: 'No open-ended monthly consulting retainers with ambiguous deliverables. You invest in a defined engagement with milestone approvals and a single finished book outcome.',
    },
    {
      title: 'Intellectual Ownership Flexibility',
      desc: 'The delivered book is built to become your intellectual property. You can rebrand it, adapt it into workshops, excerpt chapters into keynotes, or distribute it without royalties.',
    },
    {
      title: 'Real Editorial Standards',
      desc: 'We do not generate generic filler or machine slop. Every chapter is architected with literary weight, precise domain terminology, and rhythmic prose written to endure.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Studio Ethos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            Built with specialists, not spectators.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            Redwood House was founded on a simple truth: the people with the most valuable ideas are often the least likely to have the empty months required to turn them into books.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg border border-[#E8E4DC] shadow-xs hover:border-[#3D1D18]/50 transition-colors"
            >
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block mb-2">
                Pillar {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-serif text-[#1C1A18] font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#58544E] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Presence Card */}
        <div className="mt-14 bg-white rounded-lg border border-[#E8E4DC] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full relative min-h-[300px]">
              <img
                src={ASSETS.studioLibrary}
                alt="The private library and editorial consultation room at Redwood House, Chandigarh"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
                Studio Location · Chandigarh, India
              </span>
              <h4 className="text-2xl font-serif text-[#1C1A18]">
                A deliberate space for serious book development.
              </h4>
              <p className="text-sm text-[#58544E] leading-relaxed">
                Located in Chandigarh, India, Redwood House operates as an independent private studio working with specialists across time zones. We keep our client roster intentionally small to ensure direct editorial immersion for every volume.
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-[#78716C]">
                <span>Focused capacity</span>
                <span aria-hidden="true">·</span>
                <span>Select client engagements only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
