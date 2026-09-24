import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight, Check } from 'lucide-react';

interface HowItWorksSectionProps {
  onLearnMore?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onLearnMore }) => {
  const steps = [
    {
      num: '01',
      name: 'Discover',
      headline: 'Extracting the Core Knowledge',
      copy: 'We conduct structured, recorded conversations to extract your expertise, audience needs, core thesis, and career observations. No preliminary writing is required from you.',
      deliverable: 'Knowledge dossier & thesis definition',
    },
    {
      num: '02',
      name: 'Structure',
      headline: 'Architecting the Book Blueprint',
      copy: 'We transform raw conversation notes into a complete book architecture: table of contents, chapter progression, case study distribution, and narrative arcs.',
      deliverable: 'Complete book outline & chapter blueprint',
    },
    {
      num: '03',
      name: 'Build',
      headline: 'Drafting the Full Manuscript',
      copy: 'Our editorial studio writes the complete chapters, fleshing out frameworks, real-world examples, transitions, and explanations in your authentic voice.',
      deliverable: 'Full developmental first draft',
    },
    {
      num: '04',
      name: 'Refine',
      headline: 'Editorial Calibration & Polish',
      copy: 'The manuscript undergoes developmental editing, line editing, and voice tuning. You review milestone proofs with zero administrative friction.',
      deliverable: 'Polished, publication-ready text',
    },
    {
      num: '05',
      name: 'Deliver',
      headline: 'Complete Asset Handover',
      copy: 'You receive the finished book asset alongside typography specs and packaging direction. Delivered as your intellectual property to rebrand, adapt, and distribute.',
      deliverable: 'Final book package & design specifications',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Process & Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            How Redwood House builds your book.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            A linear, high-trust process designed for busy specialists. You do not need to become a full-time author or project manager to publish what you know.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="mt-16 space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-lg border border-[#E8E4DC] p-6 sm:p-8 hover:border-[#3D1D18]/40 transition-colors shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Number & Name */}
                <div className="lg:col-span-3 flex items-center lg:items-start gap-4">
                  <span className="font-mono text-2xl font-medium text-[#3D1D18]">
                    {step.num}
                  </span>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#78716C] block">
                      Phase {step.num}
                    </span>
                    <h3 className="text-xl font-serif font-medium text-[#1C1A18]">
                      {step.name}
                    </h3>
                  </div>
                </div>

                {/* Narrative & Scope */}
                <div className="lg:col-span-6 space-y-2">
                  <h4 className="text-base font-serif font-medium text-[#1C1A18]">
                    {step.headline}
                  </h4>
                  <p className="text-sm text-[#58544E] leading-relaxed font-sans">
                    {step.copy}
                  </p>
                </div>

                {/* Milestone Deliverable */}
                <div className="lg:col-span-3 lg:border-l lg:border-[#F4F0E8] lg:pl-6 pt-2 lg:pt-0">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                    Phase Deliverable
                  </span>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1C1A18]">
                    <Check className="w-3.5 h-3.5 text-[#3D1D18] shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contrast Banner: Managing vs Authoring */}
        <div className="mt-12 bg-[#F4F0E8] rounded-lg border border-[#E8E4DC] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xl font-serif text-[#1C1A18]">
              You stay the author. We handle the heavy lifting.
            </h4>
            <p className="text-sm text-[#58544E] leading-relaxed">
              No endless revision loops or administrative tracking sheets. Redwood House runs the editorial schedule, synthesizes the sessions, and delivers finished chapters for review.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href={BRAND.mailtoGeneral}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors"
            >
              <span>Discuss Your Book Timeline</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
