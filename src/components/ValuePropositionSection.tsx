import React from 'react';
import { Check, Minus } from 'lucide-react';

export const ValuePropositionSection: React.FC = () => {
  const contrasts = [
    {
      diy: 'Years of expertise trapped in internal memos and scattered slide decks.',
      rwh: 'A structured, permanent book asset that consolidates your life s work.',
    },
    {
      diy: '300+ hours spent wrestling with writer s block, outlines, and structural dead-ends.',
      rwh: '10 12 focused conversation hours with our editorial directors; we handle the drafting.',
    },
    {
      diy: 'Unclear publishing timelines that stall for months or years.',
      rwh: 'A predictable, milestone-driven productized engagement from kickoff to finished book.',
    },
    {
      diy: 'Traditional publisher agreements requiring loss of speed, control, and rights.',
      rwh: 'A complete, finished asset built to become your intellectual property to rebrand and distribute.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Strategic Contrast
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            The difference between writing alone and building with an editorial house.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            Writing a book from scratch is an extraordinary operational tax. Redwood House exists so you don t have to pause your career to bring your ideas into the world.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mt-14 bg-white rounded-lg border border-[#E8E4DC] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E8E4DC]">
            {/* The DIY / In-House Route */}
            <div className="p-8 sm:p-10 space-y-6 bg-[#FAF9F7]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                  Path A
                </span>
                <h3 className="text-xl font-serif text-[#58544E] mt-1 font-medium">
                  Building the Book Yourself
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
                  Path B
                </span>
                <h3 className="text-xl font-serif text-[#1C1A18] mt-1 font-medium">
                  Partnering with Redwood House
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
        </div>
      </div>
    </section>
  );
};
