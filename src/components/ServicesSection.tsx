import React from 'react';
import { ASSETS } from '../constants/assets';

export const ServicesSection: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Bespoke Website Development',
      points: [
        'Custom React, Next.js, and modern full-stack engineering',
        'Sub-second page loads & 99+ Core Web Vitals optimization',
        'Responsive, mobile-first architectural layouts',
        'Clean, maintainable codebase with zero template bloat',
      ],
    },
    {
      index: '02',
      title: 'Online Presence & Brand Creation',
      points: [
        'Digital flagship positioning & category authority narrative',
        'Refined typographic systems & custom UI component libraries',
        'Cohesive visual identity across web, search, and social profiles',
        'Trust-building case study and proof architecture',
      ],
    },
    {
      index: '03',
      title: 'Technical SEO & Search Infrastructure',
      points: [
        'Crawl budget optimization, XML sitemaps, & canonical architecture',
        'Comprehensive Schema.org JSON-LD entity & rich snippet graphs',
        'Semantic HTML5 DOM hierarchy & internal link equity sculpting',
        'Core Web Vitals (LCP, INP, CLS) engineering at the code level',
      ],
    },
    {
      index: '04',
      title: 'Programmatic & Content SEO',
      points: [
        'High-intent buyer keyword & search cluster mapping',
        'Topic hub-and-spoke architecture that captures category demand',
        'Editorial-grade landing pages written for both humans and algorithms',
        'Competitor search gap analysis & authority capture',
      ],
    },
    {
      index: '05',
      title: 'Local & Global Search Dominance',
      points: [
        'Google Business Profile & Knowledge Graph entity verification',
        'Multi-location and international hreflang search structuring',
        'High-authority digital PR & citation consistency systems',
        'AI Search (GEO / Answer Engine) visibility optimization',
      ],
    },
    {
      index: '06',
      title: 'Conversion Architecture & Analytics',
      points: [
        'Frictionless lead capture, booking flows, and inquiry pipelines',
        'Privacy-first search & conversion telemetry (GA4, Search Console)',
        'Full intellectual property, domain, and source code handover',
        'Built to scale seamlessly as your business expands',
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
              Complete Digital Scope
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
              What we actually build.
            </h2>
            <p className="text-lg text-[#58544E] leading-relaxed">
              We do not sell fragile WordPress templates or generic monthly SEO reports. Redwood House engineers complete digital flagships where design, code, and search engine dominance work as one system.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
              Studio Standard
            </span>
            <span className="text-xl font-serif text-[#3D1D18] font-medium block mt-1">
              One Studio. Web + Presence + SEO.
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

        {/* Digital Craftsmanship Quote with studio image */}
        <div className="mt-16 bg-white rounded-lg border border-[#E8E4DC] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
              <img
                src={ASSETS.digitalPresenceCraft}
                alt="Bespoke website and digital presence displayed across desktop and tablet"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 p-8 lg:p-12 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                Engineering & Search Integrity
              </span>
              <p className="text-2xl font-serif italic text-[#1C1A18] leading-snug">
                "A great website is not a digital ornament. It is an architectural engine engineered to load instantaneously, rank for high-intent search queries, and earn immediate buyer conviction."
              </p>
              <div className="pt-2 text-xs text-[#78716C] font-mono">
                Redwood House Engineering Standards · Chandigarh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
