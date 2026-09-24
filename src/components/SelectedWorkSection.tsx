import React, { useState } from 'react';
import { BRAND } from '../constants/assets';

interface CaseStudy {
  id: string;
  clientPlaceholder: string;
  category: string;
  challenge: string;
  subjectMatter: string;
  bookConcept: string;
  whatWeBuilt: string;
  finalDeliverable: string;
  note: string;
}

export const SelectedWorkSection: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: 'northstar',
      clientPlaceholder: 'Northstar Labs',
      category: 'Deep Tech & Founder Monograph',
      challenge: 'The founder had 8 years of hardware operating principles, but could not dedicate 6 months to draft a manuscript without stalling company roadmap execution.',
      subjectMatter: 'First-principles industrial hardware scaling and resilient supply chain architecture.',
      bookConcept: 'A candid 180-page hardbound monograph written for incoming engineers, Tier-1 investors, and industrial enterprise buyers.',
      whatWeBuilt: 'Conducted 10 knowledge-capture sessions, translated engineering memos into fluid narrative prose, designed typography, and produced the finished interior typeset.',
      finalDeliverable: 'Complete publication-ready manuscript + print specifications + digital asset foundation.',
      note: 'Illustrative placeholder · replace with client name before publishing',
    },
    {
      id: 'pine',
      clientPlaceholder: 'Pine & Co.',
      category: 'Boutique Advisory & Management Doctrine',
      challenge: 'A senior management consultancy relied on verbal pitches and complex slide decks to explain their organizational transformation thesis.',
      subjectMatter: 'Decentralized operational cadence and post-merger cultural integration.',
      bookConcept: 'An authoritative 220-page executive manual sent directly to Fortune 500 CEOs before initial advisory engagements.',
      whatWeBuilt: 'Distilled proprietary diagnostic spreadsheets and client workshops into a 9-chapter executive framework with bespoke diagram adaptations.',
      finalDeliverable: 'Clothbound book asset + modular executive summaries for consulting proposals.',
      note: 'Illustrative placeholder · replace with client name before publishing',
    },
    {
      id: 'arcwell',
      clientPlaceholder: 'Arcwell',
      category: 'Executive Leadership & Turnaround',
      challenge: 'A seasoned operator wanted to document a repeatable operational turnaround model developed across four company acquisitions.',
      subjectMatter: 'Distressed asset triage, capital efficiency, and rapid operational stabilization.',
      bookConcept: 'A concise, punchy 140-page playbook detailing the first 90 days of an operational turnaround.',
      whatWeBuilt: 'Full ghostwriting engagement, narrative development, war-story anonymization, and proof editing.',
      finalDeliverable: 'Master publication draft with complete intellectual property rights.',
      note: 'Illustrative placeholder · replace with client name before publishing',
    },
    {
      id: 'signal',
      clientPlaceholder: 'Signal Foundry',
      category: 'Venture & Product Architecture',
      challenge: 'Partners had dozens of high-performing essays and investment memos scattered across newsletters without a cohesive intellectual home.',
      subjectMatter: 'Product distribution mechanics in fragmented enterprise markets.',
      bookConcept: 'A unified 200-page thesis volume defining their venture firm s core investment philosophy.',
      whatWeBuilt: 'Editorial architecture, essay synthesis, transitional chapter development, and publication styling.',
      finalDeliverable: 'Definitive partner volume for prospective portfolio founders.',
      note: 'Illustrative placeholder · replace with client name before publishing',
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Selected Work & Archetypes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            How specialist knowledge becomes print.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            Due to strict private ghostwriting agreements, client projects are held in confidence. Below are representative project blueprints illustrating how different knowledge domains are structured.
          </p>
          <div className="inline-block text-xs font-mono text-[#78716C] bg-[#F4F0E8] px-3 py-1.5 rounded-sm border border-[#E8E4DC]">
            Transparency Notice: Brand identities below are illustrative archetypes to protect client discretion.
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-[#E8E4DC] p-8 hover:border-[#3D1D18]/50 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header Lockup */}
                <div className="flex items-start justify-between border-b border-[#F4F0E8] pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#78716C] block uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-serif text-[#1C1A18] font-medium mt-1">
                      {item.clientPlaceholder}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#8C867E] bg-[#F9F8F6] px-2 py-1 border border-[#E8E4DC] rounded-xs">
                    Sample archetype
                  </span>
                </div>

                {/* Challenge */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The Challenge
                  </span>
                  <p className="text-sm text-[#4A4641] leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* Book Concept */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The Book Concept
                  </span>
                  <p className="text-sm font-serif italic text-[#3D1D18] leading-relaxed">
                    "{item.bookConcept}"
                  </p>
                </div>

                {/* What Redwood House Built */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    What Redwood House Built
                  </span>
                  <p className="text-sm text-[#58544E] leading-relaxed">
                    {item.whatWeBuilt}
                  </p>
                </div>

                {/* Final Deliverable */}
                <div className="pt-2 border-t border-[#F4F0E8] flex items-center justify-between text-xs">
                  <span className="text-[#78716C]">Deliverable:</span>
                  <span className="font-medium text-[#1C1A18] text-right">{item.finalDeliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Ghostwriting Confidentiality Guarantee */}
        <div className="mt-12 p-8 bg-[#FAF8F3] border border-[#E8E4DC] rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-lg font-serif text-[#1C1A18]">
              Discretion is fundamental to our practice.
            </h4>
            <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
              Every client project is protected under strict Non-Disclosure Agreements. We never publicize client names, ghostwritten titles, or commercial agreements without explicit prior written authorization.
            </p>
          </div>
          <a
            href={BRAND.mailtoGeneral}
            className="shrink-0 text-xs font-medium text-[#1C1A18] border border-[#58544E] hover:border-[#1C1A18] hover:bg-white px-4 py-2.5 rounded-sm transition-colors"
          >
            Inquire Under NDA
          </a>
        </div>
      </div>
    </section>
  );
};
