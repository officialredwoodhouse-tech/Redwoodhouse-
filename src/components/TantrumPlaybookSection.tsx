import React from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowUpRight } from 'lucide-react';

interface TantrumPlaybookSectionProps {
  onViewDedicatedPage: () => void;
}

export const TantrumPlaybookSection: React.FC<TantrumPlaybookSectionProps> = ({
  onViewDedicatedPage,
}) => {
  const systemLayers = [
    { name: '01 · Core Web Vitals', subtitle: 'Sub-Second Speed', note: 'LCP < 1.2s, zero layout shift, clean semantic DOM.' },
    { name: '02 · Technical Schema', subtitle: 'JSON-LD Entity Graph', note: 'Rich snippets, Organization, FAQ, & Service schema.' },
    { name: '03 · Search Architecture', subtitle: 'Hub & Spoke Silos', note: 'Programmatic landing pages & internal link equity.' },
    { name: '04 · Editorial Authority', subtitle: 'Conversion Copywriting', note: 'Zero-fluff domain copy built for humans and crawlers.' },
    { name: '05 · Local & Global SEO', subtitle: 'Search Dominance', note: 'Google Business Profile, citations, & geo-targeted pages.' },
    { name: '06 · Presence Ecosystem', subtitle: 'Cohesive Digital Footprint', note: 'Unified brand identity across web, search, and social.' },
  ];

  return (
    <section id="seo-blueprint" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Pre-header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DC] mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
              Signature Redwood House Methodology
            </span>
            <span aria-hidden="true" className="text-[#A8A29E]">·</span>
            <span className="text-xs font-sans text-[#3D1D18] font-medium">The Flagship Presence & SEO Blueprint</span>
          </div>
          <button
            onClick={onViewDedicatedPage}
            className="text-xs font-medium text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4 cursor-pointer hidden sm:inline-flex items-center gap-1"
          >
            <span>Inspect Full 10-Stage Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Main Grid: Visual Blueprint Showcase + System Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic SEO & Web Architecture Visual Representation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-[#D5CFC5] shadow-lg bg-white group">
              <img
                src={ASSETS.seoArchitectureShowcase}
                alt="Redwood House Technical SEO and Online Presence Architecture Blueprint"
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Visual Provenance & Production Details */}
            <div className="p-4 bg-white rounded-md border border-[#E8E4DC] text-xs text-[#58544E] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#78716C]">System</span>
                <span className="font-serif font-medium text-[#1C1A18]">The Redwood Digital & SEO Blueprint</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78716C]">Engineering Studio</span>
                <span className="font-sans text-[#1C1A18]">Redwood House, Chandigarh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78716C]">Deliverable</span>
                <span className="font-sans text-[#1C1A18]">Custom Website + Search Authority Engine</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Positioning, and Direct Email CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest uppercase text-[#78716C]">
                Algorithms shift. Structural authority compounds.
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] tracking-tight">
                The Online Presence & SEO Playbook
              </h3>
              <p className="text-lg sm:text-xl font-serif italic text-[#3D1D18] leading-snug">
                How We Engineer High-Converting Websites, Semantic Search Architecture, and Category-Leading Digital Authority
              </p>
            </div>

            <div className="space-y-4 text-base text-[#4A4641] leading-relaxed">
              <p>
                Most websites fail for one of two reasons: either they are designed as pretty visual brochures with zero technical SEO foundation, or they are stuffed with awkward agency keywords that repel actual human buyers.
              </p>
              <p>
                <strong className="text-[#1C1A18] font-medium">The Redwood House Presence System</strong> unites bespoke frontend engineering with deep semantic SEO. We structure every URL, heading hierarchy, schema graph, and conversion pathway so your brand ranks on page one and converts visitors into high-value inquiries.
              </p>
            </div>

            {/* Core Studio Principle Quote */}
            <div className="p-5 border-l-2 border-[#3D1D18] bg-white rounded-r-md space-y-1">
              <p className="text-sm font-serif italic text-[#1C1A18]">
                "Your website works 24 hours a day while your team is asleep."
              </p>
              <p className="text-xs font-sans text-[#58544E]">
                Every page is engineered as a permanent digital asset that captures intent, proves competence, and initiates trust.
              </p>
            </div>

            {/* The Six Core System Layers */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                The 6 Architectural Layers Engineered Into Every Build
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {systemLayers.map((item) => (
                  <div key={item.name} className="p-3 bg-white border border-[#E8E4DC] rounded-sm text-left">
                    <span className="text-xs font-serif font-medium text-[#1C1A18] block">{item.name}</span>
                    <span className="text-[11px] font-sans text-[#78716C] block mt-0.5">{item.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BRAND.mailtoAudit}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-sm font-semibold rounded-md transition-colors shadow-xs"
              >
                <span>Request a Web & SEO Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6D3D1]" />
              </a>
              <button
                onClick={onViewDedicatedPage}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#D5CFC5] hover:border-[#1C1A18] bg-white text-[#1C1A18] text-sm font-medium rounded-md transition-colors cursor-pointer"
              >
                <span>View Full 10-Stage System & Checklist</span>
              </button>
            </div>

            <div className="text-xs text-[#78716C] flex items-center gap-2">
              <span>Direct studio inquiries handled via</span>
              <a href={BRAND.mailtoAudit} className="font-mono text-[#1C1A18] hover:underline">
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
