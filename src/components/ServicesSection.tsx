import React from 'react';
import { ASSETS } from '../constants/assets';

export const ServicesSection: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Strategy & Thesis Architecture',
      points: [
        'Commercial and intellectual book positioning',
        'Target reader profiling and reading intent',
        'Chapter architecture and thesis spine',
        'Competitive category differentiation',
      ],
    },
    {
      index: '02',
      title: 'Structured Knowledge Capture',
      points: [
        'Recorded in-depth extraction interviews',
        'Proprietary framework decomposition',
        'War stories, case studies, and anecdotal archiving',
        'Voice, tone, and rhetorical analysis',
      ],
    },
    {
      index: '03',
      title: 'Manuscript Development & Writing',
      points: [
        'Full developmental drafting from scratch',
        'Clear, engaging, non-academic narrative voice',
        'Fluid transitions and chapter cliffhangers',
        'Practical models, checklists, and field guides',
      ],
    },
    {
      index: '04',
      title: 'Developmental & Line Editorial',
      points: [
        'Rigorous structural pruning and tightening',
        'Line-by-line cadence and readability pass',
        'Clarity, concision, and terminology consistency',
        'Fact-checking and claim verification',
      ],
    },
    {
      index: '05',
      title: 'Book Typography & Interior Layout',
      points: [
        'Print-ready interior typeset & font pairings',
        'Cover design art direction and concept framing',
        'Information design for charts & diagrams',
        'Digital PDF and e-reader master formatting',
      ],
    },
    {
      index: '06',
      title: 'Final Reusable Intellectual Asset',
      points: [
        'Complete publication-ready manuscript',
        'Modular chapters adaptable for keynotes or decks',
        'Built to become your enduring intellectual property',
        'Unrestricted freedom to rebrand and distribute',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E8E4DC]">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
              Complete Editorial Scope
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
              What we actually do.
            </h2>
            <p className="text-lg text-[#58544E] leading-relaxed">
              We do not sell writing hours or a menu of fragmented freelance services. Redwood House provides one unified engagement that delivers one complete book.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
              Engagement Principle
            </span>
            <span className="text-xl font-serif text-[#3D1D18] font-medium block mt-1">
              One Engagement. One Complete Book.
            </span>
          </div>
        </div>

        {/* 6 Integrated Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="bg-white p-8 rounded-lg border border-[#E8E4DC] shadow-xs hover:border-[#3D1D18]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-sm text-[#3D1D18] font-semibold block mb-3">
                  {pillar.index}
                </span>
                <h3 className="text-xl font-serif font-medium text-[#1C1A18] mb-5 pb-3 border-b border-[#F4F0E8]">
                  {pillar.title}
                </h3>
                <ul className="space-y-3 text-sm text-[#58544E]">
                  {pillar.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#3D1D18] mt-1 text-xs">·</span>
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Craftsmanship Quote with studio image */}
        <div className="mt-16 bg-white rounded-lg border border-[#E8E4DC] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
              <img
                src={ASSETS.openBookSpread}
                alt="Open book interior spread showing typography and generous margins"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 p-8 lg:p-12 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                Editorial Integrity
              </span>
              <p className="text-2xl font-serif italic text-[#1C1A18] leading-snug">
                "A book is not a blog post stretched across 200 pages. It requires intellectual architecture, narrative cadence, and an obsessive respect for the reader's attention."
              </p>
              <div className="pt-2 text-xs text-[#78716C] font-mono">
                Redwood House Editorial Standards · Chandigarh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
