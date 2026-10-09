import React, { useState } from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowLeft, ArrowUpRight, BookOpen, LayoutGrid, CheckSquare, Square } from 'lucide-react';

interface TantrumPlaybookPageProps {
  onBack: () => void;
}

export const TantrumPlaybookPage: React.FC<TantrumPlaybookPageProps> = ({ onBack }) => {
  const [tocLayout, setTocLayout] = useState<'typeset' | 'grid'>('typeset');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    cwv: false,
    schema: false,
    silos: false,
    copy: true,
    local: false,
    cro: false,
  });

  const auditCriteria = [
    {
      id: 'cwv',
      label: 'Sub-1.5s Load Speed & 95+ Core Web Vitals on Mobile',
      impact: 'High Technical SEO & Bounce Rate Impact',
    },
    {
      id: 'schema',
      label: 'Custom Schema.org JSON-LD Graph (Organization, Service, FAQ)',
      impact: 'Rich Snippets & AI Search Entity Recognition',
    },
    {
      id: 'silos',
      label: 'Dedicated Landing Pages for Every Core Service & Buyer Intent',
      impact: 'Non-Branded Organic Keyword Capture',
    },
    {
      id: 'copy',
      label: 'Clear, Zero-Jargon Positioning Above the Fold',
      impact: 'Immediate Visitor Conviction & Time-on-Site',
    },
    {
      id: 'local',
      label: 'Synchronized Google Business Profile, Citations & OpenGraph Cards',
      impact: 'Cohesive Multi-Channel Online Presence',
    },
    {
      id: 'cro',
      label: 'Frictionless Inquiry / Booking Architecture with Search Attribution',
      impact: 'Direct Visitor-to-Pipeline Conversion',
    },
  ];

  const toggleCriterion = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const readinessScore = Math.round((checkedCount / auditCriteria.length) * 100);

  const corePillars = [
    {
      state: 'Technical Foundation',
      tagline: 'Core Web Vitals & Clean DOM',
      description: 'Eliminating render-blocking bloat, cumulative layout shift, and sluggish server responses so search crawlers and users experience instant speed.',
      spec: 'Target: LCP < 1.2s · CLS < 0.02 · Semantic HTML5 Hierarchy',
    },
    {
      state: 'Search Architecture',
      tagline: 'Topic Clusters & URL Taxonomy',
      description: 'Structuring your website around real commercial search intent rather than internal company jargon, capturing buyers actively looking for your solution.',
      spec: 'Target: Hub-and-Spoke Silos · Internal Link Equity Sculpting',
    },
    {
      state: 'Entity & Schema Graph',
      tagline: 'Structured Data & AI Visibility',
      description: 'Feeding Google and AI answer engines explicit machine-readable facts about your brand, services, credentials, locations, and FAQs.',
      spec: 'Target: Validated JSON-LD Graph · Rich Result Eligibility',
    },
    {
      state: 'Editorial Authority',
      tagline: 'High-Conviction Domain Copy',
      description: 'Writing crisp, authoritative pages that prove deep subject-matter competence without sounding like generic keyword-stuffed agency filler.',
      spec: 'Target: E-E-A-T Signal Alignment · Clear Value Proposition',
    },
    {
      state: 'Visual & Brand Presence',
      tagline: 'Architectural UI System',
      description: 'Crafting a distinctive typographic and visual identity that elevates perceived enterprise value across desktop, tablet, and mobile viewports.',
      spec: 'Target: Bespoke Design Tokens · Zero Template Footprint',
    },
    {
      state: 'Conversion Engine',
      tagline: 'Intent-to-Inquiry Pathways',
      description: 'Turning organic visitors into qualified leads through strategic proof placement, interactive tools, and low-friction contact flows.',
      spec: 'Target: Clear Call-to-Action Hierarchy · Event Telemetry',
    },
  ];

  const tocData = {
    introduction: {
      title: 'Introduction',
      subtitle: 'Why Most Websites Fail to Rank or Convert—and How Structural Engineering Fixes Both',
    },
    chapters: [
      {
        number: 'Stage 1',
        title: 'Technical Audit & Search Baseline',
        subtitle: 'Uncovering crawl bottlenecks, speed penalties, and competitor keyword gaps',
      },
      {
        number: 'Stage 2',
        title: 'Category Positioning & Messaging Spine',
        subtitle: 'Defining your unmistakable value proposition for human buyers and search engines',
      },
      {
        number: 'Stage 3',
        title: 'Sitemap Taxonomy & Search Silo Architecture',
        subtitle: 'Mapping high-intent commercial keywords to dedicated pillar and cluster pages',
      },
      {
        number: 'Stage 4',
        title: 'Bespoke UI Design & Typographic System',
        subtitle: 'Creating an editorial-grade visual identity that commands immediate trust',
      },
      {
        number: 'Stage 5',
        title: 'Clean Full-Stack Web Engineering',
        subtitle: 'Building sub-second responsive pages in React/Next.js with 99+ Core Web Vitals',
      },
      {
        number: 'Stage 6',
        title: 'On-Page Semantic SEO & Editorial Copywriting',
        subtitle: 'Structuring H1–H3 hierarchies, internal anchor links, and authoritative domain prose',
      },
      {
        number: 'Stage 7',
        title: 'Schema.org JSON-LD & Knowledge Graph Signals',
        subtitle: 'Engineering machine-readable structured data for Google and AI answer engines',
      },
      {
        number: 'Stage 8',
        title: 'Local & Global Presence Synchronization',
        subtitle: 'Aligning Google Business Profile, OpenGraph social cards, and regional search signals',
      },
      {
        number: 'Stage 9',
        title: 'Conversion Rate Optimization & Lead Flows',
        subtitle: 'Designing high-intent inquiry touchpoints, interactive calculators, and proof blocks',
      },
      {
        number: 'Stage 10',
        title: 'Compounding Search Authority & Handover',
        subtitle: 'Search Console indexing, analytics telemetry, and 100% client code ownership',
      },
    ],
    sections: [
      {
        title: 'Technical SEO & Launch Checklists',
        subtitle: '10 pre-flight engineering audits for redirects, canonicals, sitemaps, robots.txt, and CWV',
      },
      {
        title: 'Quick-Reference Online Presence Guide',
        subtitle: 'A practical operating manual for maintaining search authority after launch',
      },
    ],
    backMatter: ['Technical Specifications', 'Analytics & Telemetry', 'About Redwood House'],
  };

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
            Proprietary Methodology · Redwood House
          </div>
        </div>
      </div>

      {/* Main Header / Blueprint Showcase */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 border-b border-[#E8E4DC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Visual Display */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#D5CFC5] shadow-xl bg-white sticky top-36">
              <img
                src={ASSETS.seoArchitectureShowcase}
                alt="Redwood House Website Development, Online Presence & SEO Blueprint"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-[#E8E4DC] text-center text-xs text-[#78716C]">
                Redwood House Engineering Standard · Web + Presence + SEO
              </div>
            </div>
          </div>

          {/* System Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78716C]">
                <span>Web Engineering</span>
                <span aria-hidden="true">·</span>
                <span>Online Presence</span>
                <span aria-hidden="true">·</span>
                <span>Technical SEO System</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.08]">
                The Online Presence & SEO Playbook
              </h1>
              <p className="text-xl sm:text-2xl font-serif italic text-[#3D1D18] leading-snug">
                How We Engineer High-Converting Websites, Semantic Search Architecture, and Category-Leading Digital Authority
              </p>
            </div>

            {/* Core Premise */}
            <div className="space-y-4 text-base text-[#4A4641] leading-relaxed">
              <p>
                Every day, prospective clients, enterprise buyers, and investors search for your category—or look up your company by name after a referral. What they find in the first five seconds dictates whether they trust you or move to a competitor.
              </p>
              <p>
                Traditional web agencies focus only on surface visuals while ignoring search architecture. Traditional SEO vendors peddle automated backlink schemes without fixing slow, confusing websites.
              </p>
              <p>
                Redwood House created our <strong className="text-[#1C1A18]">10-Stage Presence & SEO System</strong> to unify custom full-stack web development, editorial brand authority, and technical search optimization into a single deliverable.
              </p>
            </div>

            {/* Interactive Self-Diagnostic Tool */}
            <div className="p-6 sm:p-8 bg-white border border-[#E8E4DC] rounded-lg shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F4F0E8]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#3D1D18] font-semibold block">
                    Interactive Diagnostic
                  </span>
                  <h3 className="text-lg font-serif text-[#1C1A18]">
                    Audit Your Current Website & SEO Readiness
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono text-[#78716C] block">Current Score</span>
                  <span className="text-2xl font-mono font-bold text-[#3D1D18]">{readinessScore}%</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {auditCriteria.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleCriterion(item.id)}
                      className={`w-full text-left p-3.5 rounded-md border transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-[#FAF8F3] border-[#3D1D18]/40 text-[#1C1A18]'
                          : 'bg-white border-[#E8E4DC] text-[#58544E] hover:border-[#D5CFC5]'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#3D1D18] shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-4 h-4 text-[#A8A29E] shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-medium text-[#1C1A18]">{item.label}</div>
                        <div className="text-[11px] font-mono text-[#78716C]">{item.impact}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#58544E]">
                <span>
                  {readinessScore < 60
                    ? 'Your digital footprint has significant search & conversion upside.'
                    : readinessScore < 100
                    ? 'Solid foundation—targeted technical SEO & UI upgrades will compound growth.'
                    : 'Flagship standard achieved.'}
                </span>
                <a
                  href={`${BRAND.mailtoAudit}&body=Hello%20Redwood%20House,%0D%0A%0D%0AI%20completed%20the%20Website%20%26%20SEO%20Readiness%20Diagnostic%20(Score:%20${readinessScore}%25)%20and%20would%20like%20to%20request%20a%20technical%20audit...`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4 shrink-0"
                >
                  <span>Send Score for a Custom Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 6 Architectural Pillars In-Depth */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-b border-[#E8E4DC]">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
            System Components
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A18]">
            The Six Core Pillars of Online Presence & SEO
          </h2>
          <p className="text-base text-[#58544E]">
            Every Redwood House website is engineered across six interdependent layers so aesthetics, speed, and search rankings reinforce one another:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePillars.map((item) => (
            <div
              key={item.state}
              className="bg-white p-7 rounded-lg border border-[#E8E4DC] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#F4F0E8] mb-3">
                  <h3 className="text-xl font-serif font-medium text-[#1C1A18]">
                    {item.state}
                  </h3>
                  <span className="text-xs font-sans text-[#78716C] italic">
                    {item.tagline}
                  </span>
                </div>
                <p className="text-sm text-[#58544E] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#F4F0E8] bg-[#FAF8F3] -mx-7 -mb-7 p-5 rounded-b-lg">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                  Engineering Specification
                </span>
                <p className="text-xs font-mono text-[#3D1D18]">
                  {item.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complete 10-Stage Blueprint / Table of Contents Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-b border-[#E8E4DC] bg-[#FAF8F3]/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
              Master Specification
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A18]">
              10-Stage Website & SEO Architecture Index
            </h2>
            <p className="text-sm sm:text-base text-[#58544E]">
              The complete execution sequence we follow to take your brand from audit to page-one search authority:
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center p-1 bg-white border border-[#E8E4DC] rounded-lg shadow-2xs self-start sm:self-auto">
            <button
              onClick={() => setTocLayout('typeset')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                tocLayout === 'typeset'
                  ? 'bg-[#1C1A18] text-white shadow-xs'
                  : 'text-[#58544E] hover:text-[#1C1A18]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Blueprint Sheet</span>
            </button>
            <button
              onClick={() => setTocLayout('grid')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                tocLayout === 'grid'
                  ? 'bg-[#1C1A18] text-white shadow-xs'
                  : 'text-[#58544E] hover:text-[#1C1A18]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Stage Grid</span>
            </button>
          </div>
        </div>

        {/* View A: Typeset Blueprint Sheet */}
        {tocLayout === 'typeset' && (
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-[#FAF7F0] border border-[#D5CFC5] rounded-xl p-8 sm:p-14 lg:p-16 shadow-lg overflow-hidden text-center">
              {/* Title Header */}
              <div className="relative z-10 space-y-1 mb-10 pb-6 border-b border-[#E3DCCF]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
                  Redwood House · Master Architecture
                </span>
                <h3 className="text-2xl sm:text-4xl font-sans font-black tracking-[0.14em] text-[#1C1A18] uppercase">
                  SYSTEM BLUEPRINT INDEX
                </h3>
              </div>

              {/* Centered Entries */}
              <div className="relative z-10 space-y-7 text-[#1C1A18] max-w-xl mx-auto">
                {/* Introduction */}
                <div className="space-y-1">
                  <div className="font-serif font-bold text-base sm:text-lg text-[#1C1A18]">
                    {tocData.introduction.title}
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[#58544E]">
                    {tocData.introduction.subtitle}
                  </div>
                </div>

                {/* Stages 1 to 10 */}
                {tocData.chapters.map((ch) => (
                  <div key={ch.number} className="space-y-1 pt-1">
                    <div className="font-serif font-bold text-base sm:text-lg text-[#1C1A18] tracking-tight">
                      {ch.number} — {ch.title}
                    </div>
                    <div className="font-sans text-xs sm:text-sm text-[#58544E] leading-relaxed">
                      {ch.subtitle}
                    </div>
                  </div>
                ))}

                {/* Checklists & Operating Manual */}
                <div className="pt-3 border-t border-[#E3DCCF]/60 space-y-6">
                  {tocData.sections.map((sec) => (
                    <div key={sec.title} className="space-y-1">
                      <div className="font-serif font-bold text-base sm:text-lg text-[#1C1A18]">
                        {sec.title}
                      </div>
                      <div className="font-sans text-xs sm:text-sm text-[#58544E] leading-relaxed">
                        {sec.subtitle}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Back Matter */}
                <div className="pt-4 space-y-1.5 font-serif font-bold text-sm sm:text-base text-[#1C1A18]">
                  {tocData.backMatter.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>

                {/* Copyright Line */}
                <div className="pt-8 text-right text-[11px] font-mono text-[#78716C]">
                  Copyright © 2026 Redwood House
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View B: Interactive Stage Cards */}
        {tocLayout === 'grid' && (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-7 rounded-lg border border-[#E8E4DC] shadow-xs flex items-start gap-4">
              <span className="text-xs font-mono font-bold text-[#3D1D18] uppercase tracking-wider px-2 py-1 bg-[#F4F0E8] rounded-sm shrink-0">
                Thesis
              </span>
              <div>
                <h4 className="text-lg font-serif font-bold text-[#1C1A18]">
                  {tocData.introduction.title}
                </h4>
                <p className="text-sm text-[#58544E] mt-0.5">
                  {tocData.introduction.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {tocData.chapters.map((ch) => (
                <div
                  key={ch.number}
                  className="bg-white p-6 rounded-lg border border-[#E8E4DC] shadow-xs hover:border-[#3D1D18]/50 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-bold text-[#3D1D18] tracking-wider uppercase block">
                      {ch.number}
                    </span>
                    <h4 className="text-base sm:text-lg font-serif font-bold text-[#1C1A18] leading-snug">
                      {ch.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                      {ch.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                Direct Technical Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1A18]">
                Ready to turn your website into a compounding search asset?
              </h3>
              <p className="text-sm sm:text-base text-[#58544E] leading-relaxed">
                Whether you need a ground-up flagship website, a complete online presence overhaul, or a technical SEO architecture that ranks on page one, our Chandigarh studio is ready to collaborate.
              </p>
            </div>

            <div className="lg:col-span-5 text-left lg:text-right space-y-3">
              <span className="text-xs font-mono uppercase text-[#78716C] block">
                Studio Desk
              </span>
              <div className="font-serif text-xl text-[#1C1A18]">
                Redwood House
              </div>
              <div className="text-xs text-[#78716C]">
                Chandigarh, India · Website Development, Online Presence & SEO
              </div>
              <div className="pt-2">
                <a
                  href={BRAND.mailtoAudit}
                  className="inline-flex items-center gap-1.5 px-5 py-3 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  <span>Request Your Web & SEO Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
