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
      name: 'Audit & Discovery',
      headline: 'Diagnosing Your Brand, Market & Search Landscape',
      copy: 'We audit your existing digital footprint, technical search barriers, competitor keyword share, and buyer conversion bottlenecks. You share your business goals; we map the exact opportunity.',
      deliverable: 'Technical SEO Audit & Positioning Brief',
    },
    {
      num: '02',
      name: 'Information & SEO Architecture',
      headline: 'Structuring Sitemaps, Silos & Conversion Flows',
      copy: 'Before writing a line of code, we blueprint your entire site hierarchy: URL taxonomy, high-intent landing pages, wireframe layouts, and semantic keyword mapping.',
      deliverable: 'Interactive Wireframes & Search Taxonomy',
    },
    {
      num: '03',
      name: 'Design & Full-Stack Build',
      headline: 'Engineering a Bespoke, Sub-Second Website',
      copy: 'Our studio designs your visual system, writes authoritative conversion copy, and develops a fast, responsive, custom frontend and backend built to modern web standards.',
      deliverable: 'Staging Flagship Website (99+ CWV)',
    },
    {
      num: '04',
      name: 'Technical SEO & Schema Integration',
      headline: 'Embedding Search Intelligence Into Every Page',
      copy: 'We implement structured JSON-LD schema graphs, OpenGraph social cards, canonical tags, automated XML sitemaps, internal linking matrices, and Core Web Vitals tuning.',
      deliverable: 'Verified Search & Schema Infrastructure',
    },
    {
      num: '05',
      name: 'Launch, Indexing & Growth Handover',
      headline: 'Deploying Your Digital Flagship to the World',
      copy: 'We manage zero-downtime deployment, DNS migration, Google Search Console indexing, and analytics configuration—handing over 100% ownership plus an actionable SEO growth roadmap.',
      deliverable: 'Live Production Website & SEO Playbook',
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
            How Redwood House builds and ranks your digital flagship.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            A disciplined, five-stage engineering and SEO workflow designed for busy founders and operators. No endless agency meetings—just structured milestones and measurable execution.
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
                      Stage {step.num}
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
                    Stage Deliverable
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

        {/* Contrast Banner */}
        <div className="mt-12 bg-[#F4F0E8] rounded-lg border border-[#E8E4DC] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xl font-serif text-[#1C1A18]">
              You run the business. We engineer the growth engine.
            </h4>
            <p className="text-sm text-[#58544E] leading-relaxed">
              No bloated account management layers or vague deliverables. Redwood House handles the copywriting, UI design, full-stack development, and technical SEO from end to end.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href={BRAND.mailtoGeneral}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors"
            >
              <span>Discuss Your Project Timeline</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
