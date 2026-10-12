import React, { useState } from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowLeft, ArrowUpRight, BookOpen, LayoutGrid, CheckSquare, Square, Cpu, Zap, Code, Search, Globe, Palette } from 'lucide-react';

interface TantrumPlaybookPageProps {
  onBack: () => void;
}

export const TantrumPlaybookPage: React.FC<TantrumPlaybookPageProps> = ({ onBack }) => {
  const [tocLayout, setTocLayout] = useState<'typeset' | 'grid'>('typeset');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    aiTriage: false,
    autoBooking: false,
    softwarePortal: false,
    schemaSEO: false,
    cwv: true,
    adTransaction: false,
  });

  const auditCriteria = [
    {
      id: 'aiTriage',
      label: '24/7 AI Conversational Triage on WhatsApp & Website',
      impact: 'Instant response within 30s · Captures 100% of after-hours inquiries',
    },
    {
      id: 'autoBooking',
      label: 'Automated Consultation, Trial, or Discovery Booking Workflows',
      impact: 'Zero-no-show sequences · 70% reduction in appointment cancellations',
    },
    {
      id: 'softwarePortal',
      label: 'Custom Operational Software / Client Portal (No Fragmented SaaS)',
      impact: '100% code ownership · Eliminates 15–20 hours of manual admin per week',
    },
    {
      id: 'schemaSEO',
      label: 'Programmatic SEO Silos & Schema.org JSON-LD Knowledge Graph',
      impact: 'Page-1 Google ranking for commercial search queries · Rich snippet eligibility',
    },
    {
      id: 'cwv',
      label: 'Sub-1.2s Global Load Speed & 99+ Core Web Vitals (Mobile & Desktop)',
      impact: 'Zero layout shift · Instant visitor conviction and high search crawl priority',
    },
    {
      id: 'adTransaction',
      label: 'Ad & Transaction Automation with Stripe & CRM Sync',
      impact: 'Full-funnel ROAS attribution · Automated recurring billing & receipts',
    },
  ];

  const toggleCriterion = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const readinessScore = Math.round((checkedCount / auditCriteria.length) * 100);

  const corePillars = [
    {
      state: 'AI Automation & Agents',
      tagline: 'Autonomous Inbound & Dispatch',
      description: 'Deploying conversational and operational agents connected directly to WhatsApp, email, Stripe, and your CRM to triage inquiries and process bookings around the clock.',
      spec: 'Target: <30s First Response · Zero Missed Inquiries · Auto Calendar Sync',
    },
    {
      state: 'Custom Software & Portals',
      tagline: 'Bespoke Operational Tools',
      description: 'Building dedicated client portals, patient intake tools, and agency dashboards tailored to your exact business logic with zero monthly subscription seat fees.',
      spec: 'Target: Role-Based Access · Full-Stack React/Next.js/Node · 100% Code Handover',
    },
    {
      state: 'Programmatic & Technical SEO',
      tagline: 'Entity Graphs & Topic Silos',
      description: 'Architecting high-intent commercial landing page clusters and machine-readable Schema.org graphs so Google and AI search engines recognize your category authority.',
      spec: 'Target: Validated JSON-LD Graph · High-Intent Keyword Silos · E-E-A-T Signals',
    },
    {
      state: 'Ad & Transaction Funnels',
      tagline: 'Conversion & Billing Automation',
      description: 'Automating the bridge between paid advertising (Google & Meta) and actual revenue through automated checkout, Stripe webhooks, and conversion attribution telemetry.',
      spec: 'Target: Instant Lead-to-Trial Flow · Automated Billing Recovery · ROAS Telemetry',
    },
    {
      state: 'Bespoke Brand & UI/UX Design',
      tagline: 'Architectural Typographic System',
      description: 'Crafting an editorial, timeless visual identity using Newsreader and Plus Jakarta Sans that commands enterprise trust across every viewport and device.',
      spec: 'Target: Bespoke Design Tokens · Zero Generic Template Footprint',
    },
    {
      state: 'Sub-Second Web Engineering',
      tagline: '99+ Core Web Vitals Standard',
      description: 'Handcrafted React and Next.js digital flagships with zero template bloat, sub-second global load times, and frictionless lead conversion pathways.',
      spec: 'Target: LCP < 1.2s · CLS < 0.02 · Clean Semantic HTML5 Hierarchy',
    },
  ];

  const tocData = {
    introduction: {
      title: 'Introduction',
      subtitle: 'Why Conventional Websites Alone Fail—and How AI Automations + Custom Software Build an Unstoppable Business Engine',
    },
    chapters: [
      {
        number: 'Stage 1',
        title: 'Operational & Search Bottleneck Audit',
        subtitle: 'Uncovering admin friction in clinics, gyms, agencies, and tech ventures',
      },
      {
        number: 'Stage 2',
        title: 'Category Positioning & Messaging Spine',
        subtitle: 'Defining your unmistakable value proposition for buyers and search algorithms',
      },
      {
        number: 'Stage 3',
        title: 'Information Architecture & Programmatic Topic Silos',
        subtitle: 'Structuring high-intent search clusters to capture non-branded commercial traffic',
      },
      {
        number: 'Stage 4',
        title: 'Architectural UI/UX Design & Typographic System',
        subtitle: 'Crafting editorial brand presence with high-converting booking & checkout flows',
      },
      {
        number: 'Stage 5',
        title: 'Clean Full-Stack Web Development',
        subtitle: 'Engineering sub-second React/Next.js pages with 99+ Core Web Vitals',
      },
      {
        number: 'Stage 6',
        title: 'Autonomous AI Agent Deployment',
        subtitle: 'Wiring 24/7 WhatsApp triage, lead qualification, and doctor/staff routing bots',
      },
      {
        number: 'Stage 7',
        title: 'Custom Operational Software & Client Portals',
        subtitle: 'Bespoke dashboards, patient intake pipelines, and automated agency reporting',
      },
      {
        number: 'Stage 8',
        title: 'Schema.org JSON-LD & AI Search Visibility',
        subtitle: 'Engineering machine-readable structured data for Google Knowledge Graph and AI engines',
      },
      {
        number: 'Stage 9',
        title: 'Ad & Transaction Automation',
        subtitle: 'Stripe subscription webhooks, automated invoicing, and ad ROAS conversion telemetry',
      },
      {
        number: 'Stage 10',
        title: 'Zero-Downtime Launch & 100% Code Handover',
        subtitle: 'Deployment, Search Console indexing, staff onboarding, and full GitHub repo transfer',
      },
    ],
    sections: [
      {
        title: 'Pre-Flight Operational & Technical Checklists',
        subtitle: '10 audits covering AI agent response latency, Stripe webhooks, CWV, and Schema validation',
      },
      {
        title: 'Quick-Reference Automation & Presence Operating Manual',
        subtitle: 'Standard operating procedures for managing your AI pipelines and software post-launch',
      },
    ],
    backMatter: ['Technical Specifications', 'Security & HIPAA Considerations', 'About Redwood House'],
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
            Proprietary Architecture Blueprint · Redwood House
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
                src={ASSETS.aiAutomationWorkflow}
                alt="Redwood House AI Automation, Software, SEO and Web Architecture Blueprint"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-[#E8E4DC] text-center text-xs text-[#78716C]">
                Redwood House Engineering Standard · AI + Software + SEO + Websites
              </div>
            </div>
          </div>

          {/* System Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78716C]">
                <span>AI Automation</span>
                <span aria-hidden="true">·</span>
                <span>Custom Software</span>
                <span aria-hidden="true">·</span>
                <span>SEO Marketing</span>
                <span aria-hidden="true">·</span>
                <span>Websites</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.08]">
                The AI Automation & Systems Blueprint
              </h1>
              <p className="text-xl sm:text-2xl font-serif italic text-[#3D1D18] leading-snug">
                How We Engineer Autonomous Workflows, Custom Software, High-Intent SEO, and Sub-Second Web Flagships
              </p>
            </div>

            {/* Core Premise */}
            <div className="space-y-4 text-base text-[#4A4641] leading-relaxed">
              <p>
                A modern business cannot operate efficiently with fragmented vendors. When your web developer knows nothing about automated booking, your SEO team doesn't touch code, and your staff manually copies patient and client data across spreadsheets, you leak revenue and waste hundreds of hours.
              </p>
              <p>
                Redwood House unites <strong className="text-[#1C1A18]">AI Automation, Custom Software, SEO Marketing, Brand Design, and Web Development</strong> into one synchronized architecture.
              </p>
            </div>

            {/* Interactive Self-Diagnostic Tool */}
            <div className="p-6 sm:p-8 bg-white border border-[#E8E4DC] rounded-lg shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F4F0E8]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#3D1D18] font-semibold block">
                    Interactive Readiness Diagnostic
                  </span>
                  <h3 className="text-lg font-serif text-[#1C1A18]">
                    Audit Your Automation & Digital Infrastructure
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono text-[#78716C] block">Readiness Score</span>
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
                    ? 'Your business has major operational and inbound conversion upside through AI automation.'
                    : readinessScore < 100
                    ? 'Solid foundation—deploying custom software and conversational agents will compound leverage.'
                    : 'Maximum automation & flagship standard achieved.'}
                </span>
                <a
                  href={`${BRAND.mailtoAudit}&body=Hello%20Redwood%20House,%0D%0A%0D%0AI%20completed%20the%20Automation%20%26%20Digital%20Readiness%20Diagnostic%20(Score:%20${readinessScore}%25)%20and%20would%20like%20to%20request%20an%20architecture%20audit...`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4 shrink-0"
                >
                  <span>Request an Architecture Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 6 Architectural Pillars */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-b border-[#E8E4DC]">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
            Integrated Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A18]">
            The Six Pillars of the Redwood Architecture
          </h2>
          <p className="text-base text-[#58544E]">
            Every engagement deploys these six interconnected layers to automate operations, capture search demand, and convert high-value buyers:
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
                  Engineering Standard
                </span>
                <p className="text-xs font-mono text-[#3D1D18]">
                  {item.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Master 10-Stage Execution Sequence */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-b border-[#E8E4DC] bg-[#FAF8F3]/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
              Master Blueprint Index
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A18]">
              10-Stage Automation, Software & Web Architecture Index
            </h2>
            <p className="text-sm sm:text-base text-[#58544E]">
              The complete sequential roadmap we deploy for agencies, clinics, hospitals, gyms, and tech companies:
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
              <div className="relative z-10 space-y-1 mb-10 pb-6 border-b border-[#E3DCCF]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
                  Redwood House · Master Specification
                </span>
                <h3 className="text-2xl sm:text-4xl font-sans font-black tracking-[0.14em] text-[#1C1A18] uppercase">
                  SYSTEM BLUEPRINT INDEX
                </h3>
              </div>

              <div className="relative z-10 space-y-7 text-[#1C1A18] max-w-xl mx-auto">
                <div className="space-y-1">
                  <div className="font-serif font-bold text-base sm:text-lg text-[#1C1A18]">
                    {tocData.introduction.title}
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[#58544E]">
                    {tocData.introduction.subtitle}
                  </div>
                </div>

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

                <div className="pt-4 space-y-1.5 font-serif font-bold text-sm sm:text-base text-[#1C1A18]">
                  {tocData.backMatter.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>

                <div className="pt-8 text-right text-[11px] font-mono text-[#78716C]">
                  Copyright © 2026 Redwood House · Chandigarh, India
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View B: Interactive Stage Grid */}
        {tocLayout === 'grid' && (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-7 rounded-lg border border-[#E8E4DC] shadow-xs flex items-start gap-4">
              <span className="text-xs font-mono font-bold text-[#3D1D18] uppercase tracking-wider px-2 py-1 bg-[#F4F0E8] rounded-sm shrink-0">
                Foundational Thesis
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

      {/* Bottom CTA Block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                Direct Technical Collaboration
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1A18]">
                Ready to deploy AI automation, custom software, or a digital flagship?
              </h3>
              <p className="text-sm sm:text-base text-[#58544E] leading-relaxed">
                Whether you run an agency, clinic, hospital, gym, or software venture, email our studio with your business goals and current bottlenecks.
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
                Chandigarh, India · AI Automation, Software & Digital Flagships
              </div>
              <div className="pt-2">
                <a
                  href={BRAND.mailtoGeneral}
                  className="inline-flex items-center gap-1.5 px-5 py-3 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  <span>Initiate Project Consultation</span>
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
