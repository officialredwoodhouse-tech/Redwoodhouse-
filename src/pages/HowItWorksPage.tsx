import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface HowItWorksPageProps {
  onBack: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBack }) => {
  const steps = [
    {
      num: '01',
      title: 'Technical Audit & Positioning Discovery',
      weeks: 'Stage 1 · Week 1',
      headline: 'Diagnosing your brand positioning, technical debt, and search opportunity.',
      description: 'We begin by auditing your current domain, competitor search share, keyword intent landscape, and conversion bottlenecks. Through focused strategy sessions, we extract your core commercial differentiators so we never ask you to write copy from scratch.',
      clientAction: 'Participate in 1–2 focused discovery & positioning sessions with our directors.',
      deliverable: 'Comprehensive Technical SEO Audit, Keyword Opportunity Matrix, and Positioning Brief.',
    },
    {
      num: '02',
      title: 'Sitemap Taxonomy & Wireframe Architecture',
      weeks: 'Stage 2 · Weeks 2–3',
      headline: 'Structuring URLs, search silos, and buyer conversion journeys.',
      description: 'Great SEO begins with site architecture. We blueprint your exact page hierarchy, topic clusters, navigation contract, and interactive wireframes—ensuring every high-intent buyer query has a dedicated, authoritative destination.',
      clientAction: 'One 45-minute walkthrough to review and approve the sitemap and wireframe blueprint.',
      deliverable: 'Interactive Wireframes, Search Silo Blueprint, and Conversion Copy Outline.',
    },
    {
      num: '03',
      title: 'Bespoke UI Design & Full-Stack Engineering',
      weeks: 'Stage 3 · Weeks 4–7',
      headline: 'Our studio designs, writes, and codes your flagship website.',
      description: 'Redwood House handles the heavy lifting: crafting your visual design system, writing clear editorial domain copy, and developing a blazing-fast custom website in React/Next.js with clean semantic HTML and zero plugin bloat.',
      clientAction: 'Zero day-to-day micromanagement. You focus on running your business while we build.',
      deliverable: 'Full Staging Website scoring 99+ on Google Core Web Vitals across mobile and desktop.',
    },
    {
      num: '04',
      title: 'On-Page SEO, Schema Graph & Presence Sync',
      weeks: 'Stage 4 · Weeks 8–9',
      headline: 'Embedding technical search intelligence and unifying your online footprint.',
      description: 'We integrate bespoke Schema.org JSON-LD graphs, OpenGraph social cards, canonical tags, internal link equity loops, 301 redirect maps, and Google Business Profile / Knowledge Graph alignments.',
      clientAction: 'Review the staging environment and provide consolidated feedback.',
      deliverable: 'Validated Schema Infrastructure, On-Page SEO Optimization, and Unified Brand Profiles.',
    },
    {
      num: '05',
      title: 'Deployment, Search Indexing & Handover',
      weeks: 'Stage 5 · Week 10',
      headline: 'Zero-downtime launch with 100% code ownership and search telemetry.',
      description: 'We manage production deployment, SSL/DNS cutover, Google Search Console sitemap submission, and analytics event tracking. You receive complete ownership of all code and assets alongside a clear 12-month organic growth roadmap.',
      clientAction: 'Final sign-off and handover of production repositories and analytics dashboards.',
      deliverable: 'Live Digital Flagship, Search Console Indexing, and 100% Source Code Ownership.',
    },
  ];

  return (
    <div className="bg-[#FBF9F5] min-h-screen">
      {/* Top Back Action Bar */}
      <div className="border-b border-[#E8E4DC] bg-[#FAF8F3]/80 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#58544E] hover:text-[#1C1A18] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio Overview</span>
          </button>
          <div className="text-xs font-mono text-[#78716C] hidden sm:block">
            Engineering & SEO Workflow · Redwood House
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 border-b border-[#E8E4DC]">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
            The Redwood House Process
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.08]">
            From fragmented footprint to commanding digital flagship.
          </h1>
          <p className="text-lg sm:text-xl text-[#58544E] leading-relaxed">
            Our five-stage workflow is engineered to design, develop, and optimize your complete online presence and search infrastructure without pulling your leadership team away from daily operations.
          </p>
        </div>

        {/* Quick Operational Metrics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E8E4DC]">
          <div className="p-6 bg-white rounded-lg border border-[#E8E4DC]">
            <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block">Performance Target</span>
            <div className="text-2xl font-serif text-[#3D1D18] mt-1 font-medium">99+ Core Web Vitals</div>
            <p className="text-xs text-[#58544E] mt-1">Sub-second page speed, clean DOM, and mobile-first responsiveness.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-[#E8E4DC]">
            <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block">Search Architecture</span>
            <div className="text-2xl font-serif text-[#1C1A18] mt-1 font-medium">100% Semantic SEO</div>
            <p className="text-xs text-[#58544E] mt-1">JSON-LD Schema, topic clusters, and high-intent conversion copy.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-[#E8E4DC]">
            <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block">Asset Ownership</span>
            <div className="text-2xl font-serif text-[#1C1A18] mt-1 font-medium">Full Code & IP</div>
            <p className="text-xs text-[#58544E] mt-1">Zero vendor lock-in; you own your repository, domain, and data.</p>
          </div>
        </div>
      </div>

      {/* Detailed 5-Step Breakdown */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-b border-[#E8E4DC]">
        <div className="space-y-12">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-10 shadow-xs hover:border-[#3D1D18]/50 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number & Phase */}
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl sm:text-4xl font-mono font-semibold text-[#3D1D18]">
                      {st.num}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                      / Stage
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#1C1A18] font-medium mb-1">
                    {st.title}
                  </h3>
                  <span className="text-xs font-mono text-[#78716C] block">
                    {st.weeks}
                  </span>
                </div>

                {/* Narrative & Details */}
                <div className="lg:col-span-5 space-y-3">
                  <h4 className="text-base font-serif italic text-[#1C1A18]">
                    {st.headline}
                  </h4>
                  <p className="text-sm text-[#58544E] leading-relaxed">
                    {st.description}
                  </p>
                </div>

                {/* Scope & Deliverable Column */}
                <div className="lg:col-span-4 bg-[#FAF8F3] p-5 rounded-md border border-[#E8E4DC] space-y-3 text-xs">
                  <div>
                    <span className="font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                      What is asked of you:
                    </span>
                    <p className="text-[#1C1A18] font-medium">
                      {st.clientAction}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#E8E4DC]">
                    <span className="font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                      Stage deliverable:
                    </span>
                    <p className="text-[#3D1D18] font-serif font-medium">
                      {st.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="bg-[#FAF8F3] rounded-lg border border-[#E8E4DC] p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
            Ready to Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A18]">
            Let's audit your current online presence.
          </h2>
          <p className="text-sm sm:text-base text-[#58544E] leading-relaxed">
            Send an email to our studio in Chandigarh with your website URL and growth objectives. We will reply with a tailored architectural and SEO roadmap.
          </p>
          <div className="pt-2">
            <a
              href={BRAND.mailtoGeneral}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors"
            >
              <span>Email Redwood House</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6D3D1]" />
            </a>
          </div>
          <div className="text-xs text-[#78716C] font-mono">
            {BRAND.email}
          </div>
        </div>
      </div>
    </div>
  );
};
