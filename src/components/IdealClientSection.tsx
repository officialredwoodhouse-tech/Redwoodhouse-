import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight } from 'lucide-react';

interface Archetype {
  id: string;
  label: string;
  rawAsset: string;
  finishedBookForm: string;
  whyThisWorks: string;
}

export const IdealClientSection: React.FC = () => {
  const archetypes: Archetype[] = [
    {
      id: 'saas-founders',
      label: 'SaaS & Tech Founders',
      rawAsset: 'Product capabilities, technical docs, feature releases, and founder thesis.',
      finishedBookForm: 'High-converting marketing flagship + programmatic SEO comparison & solution hubs.',
      whyThisWorks: 'Captures high-intent bottom-of-funnel search traffic while elevating enterprise buyer trust.'
    },
    {
      id: 'b2b-advisory',
      label: 'Consultancies & Advisory Firms',
      rawAsset: 'Proprietary methodologies, case studies, partner bios, and industry whitepapers.',
      finishedBookForm: 'Authoritative digital flagship with interactive diagnostic tools and thought-leadership SEO.',
      whyThisWorks: 'Pre-sells six-figure retainers and replaces generic brochureware with category authority.'
    },
    {
      id: 'healthcare-specialists',
      label: 'Clinics & Specialist Practices',
      rawAsset: 'Clinical expertise, treatment protocols, patient outcomes, and regional reputation.',
      finishedBookForm: 'Patient-first web platform + Local & Medical Schema SEO dominating regional search.',
      whyThisWorks: 'Ranks #1 for high-value treatment queries and converts discerning patients with calm clarity.'
    },
    {
      id: 'luxury-architecture',
      label: 'Architecture, Real Estate & Design',
      rawAsset: 'Project portfolios, high-resolution photography, material specs, and studio ethos.',
      finishedBookForm: 'Editorial-grade portfolio website with sub-second image delivery and local search authority.',
      whyThisWorks: 'Showcases visual craft without sacrificing page speed or search engine indexability.'
    },
    {
      id: 'ecommerce-d2c',
      label: 'D2C & Bespoke Commerce',
      rawAsset: 'Product catalogs, brand story, customer reviews, and collection lookbooks.',
      finishedBookForm: 'Custom headless or Shopify flagship + category & product schema SEO engine.',
      whyThisWorks: 'Reduces paid ad dependency by compounding organic product discovery and conversion rate.'
    },
    {
      id: 'venture-finance',
      label: 'Venture, Legal & Financial Firms',
      rawAsset: 'Investment thesis, regulatory insights, track record, and partner credentials.',
      finishedBookForm: 'Discreet, institutional-grade web presence with verified Google Knowledge Graph signals.',
      whyThisWorks: 'Establishes immediate institutional credibility when LPs, founders, or clients search your name.'
    },
    {
      id: 'creators-executives',
      label: 'Executives & Category Creators',
      rawAsset: 'Keynotes, essays, podcasts, media appearances, and personal advisory offers.',
      finishedBookForm: 'Centralized personal digital flagship owning page-one search results for your name and topic.',
      whyThisWorks: 'Consolidates scattered social profiles into a permanent,owned online presence.'
    },
  ];

  const [activeArchetype, setActiveArchetype] = useState<Archetype>(archetypes[0]);

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Audience & Fit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            Built for brands and specialists ready to own their category online.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            You have the operational track record, the expertise, and the ambition. You just need a digital engineering and SEO partner to make your online presence unmistakable.
          </p>
        </div>

        {/* Core Roster of Specialists */}
        <div className="mt-12 pt-8 border-t border-[#E8E4DC]">
          <div className="text-xs uppercase tracking-widest text-[#78716C] font-mono mb-4">
            We partner with
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base font-medium text-[#1C1A18]">
            <span className="hover:text-[#3D1D18] transition-colors">SaaS & Tech Companies</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">B2B Consultancies</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Specialist Clinics</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Architecture & Design Studios</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">D2C Brands</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Law & Advisory Practices</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Venture Firms</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Founders & Executives</span>
          </div>
        </div>

        {/* Interactive Archetype Translation Card */}
        <div className="mt-12 bg-white rounded-lg border border-[#E8E4DC] overflow-hidden shadow-xs">
          <div className="p-6 md:p-8 bg-[#F4F0E8]/40 border-b border-[#E8E4DC]">
            <div className="text-xs uppercase tracking-widest text-[#78716C] font-mono mb-3">
              Select Your Sector to View Our Web & SEO Blueprint
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {archetypes.map((arch) => (
                <button
                  key={arch.id}
                  onClick={() => setActiveArchetype(arch)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    activeArchetype.id === arch.id
                      ? 'bg-[#1C1A18] text-white shadow-xs'
                      : 'bg-white text-[#58544E] hover:text-[#1C1A18] border border-[#E8E4DC]'
                  }`}
                >
                  {arch.label}
                </button>
              ))}
            </div>
          </div>

          {/* Translation Details Grid */}
          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                Raw Assets You Have
              </span>
              <p className="text-sm sm:text-base text-[#1C1A18] font-sans leading-relaxed">
                {activeArchetype.rawAsset}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                Digital Flagship We Build
              </span>
              <p className="text-sm sm:text-base text-[#3D1D18] font-serif font-medium leading-relaxed">
                {activeArchetype.finishedBookForm}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                Search & Conversion Outcome
              </span>
              <p className="text-sm sm:text-base text-[#58544E] font-sans leading-relaxed">
                {activeArchetype.whyThisWorks}
              </p>
            </div>
          </div>

          <div className="px-6 md:px-10 py-4 bg-[#FBF9F5] border-t border-[#E8E4DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs text-[#78716C]">
              Ready to upgrade your website, online presence, or search rankings?
            </span>
            <a
              href={`${BRAND.mailtoGeneral}&body=Hello%20Redwood%20House,%0D%0A%0D%0AWe%20are%20in%20the%20${encodeURIComponent(activeArchetype.label)}%20space%20and%20would%20like%20to%20discuss%20a%20website%20development%20and%20SEO%20engagement...`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4"
            >
              <span>Inquire about a {activeArchetype.label} project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
