import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowLeft, ArrowUpRight, Cpu, Code, Search, Zap, Globe, Check } from 'lucide-react';

interface HowItWorksPageProps {
  onBack: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBack }) => {
  const steps = [
    {
      num: '01',
      title: 'Operational Diagnosis & System Discovery',
      weeks: 'Stage 1 · Week 1',
      headline: 'Diagnosing intake friction, manual bottlenecks, and search engine opportunities.',
      description: 'We audit your daily operations: how leads, patients, or gym members enter your pipeline, where reception staff or account managers get bogged down, and where commercial search intent is missed. We specify exactly which workflows will be handled by autonomous AI agents, what requires custom software portals, and what web architecture is needed.',
      clientAction: 'Participate in a 60-minute operational workflow session with our studio directors.',
      deliverable: 'Operational Bottleneck Audit, Automation Blueprint, and Architecture Spec.',
    },
    {
      num: '02',
      title: 'Agent Flows, Data Schemas & UI Wireframes',
      weeks: 'Stage 2 · Weeks 2–3',
      headline: 'Designing conversational AI logic, database schemas, and clean UI wireframes.',
      description: 'Before coding, we map the exact logic: 24/7 WhatsApp and web conversational triage prompts, appointment booking trees, Stripe transaction webhooks, EHR/CRM data synchronization, and high-taste architectural UI layouts with zero template bloat.',
      clientAction: 'Review and approve the interactive wireframes and AI agent logic trees.',
      deliverable: 'Interactive Wireframe Spec, Agent Prompt Trees, and Data Integration Architecture.',
    },
    {
      num: '03',
      title: 'Full-Stack Software Engineering & Web Flagship Build',
      weeks: 'Stage 3 · Weeks 4–7',
      headline: 'Our studio develops your custom portals, software tools, and sub-second website.',
      description: 'Redwood House engineers the entire stack: handcrafted React and Next.js digital flagship scoring 99+ on Core Web Vitals, custom operational portals for staff/clients, clean API endpoints, and authoritative conversion copywriting.',
      clientAction: 'Zero day-to-day micromanagement. You run your business while our engineers build.',
      deliverable: 'Staging Digital Flagship (99+ CWV) + Custom Software Operational Backend.',
    },
    {
      num: '04',
      title: 'AI Agent Deployment, Ad & Transaction Wiring',
      weeks: 'Stage 4 · Weeks 8–9',
      headline: 'Deploying autonomous agents, Stripe billing, and ad conversion telemetry.',
      description: 'We connect your AI agents to WhatsApp Business API, configure automated zero-no-show reminders, activate autonomous Monday client reporting for agencies, wire Stripe payment triggers, and embed full-funnel Google and Meta ad conversion tracking.',
      clientAction: 'Perform end-to-end sandbox testing of booking flows and automated agent replies.',
      deliverable: 'Live AI Agent Pipelines, Verified Payment Webhooks, and Ad Tracking Telemetry.',
    },
    {
      num: '05',
      title: 'Production Launch, Indexing & 100% Code Handover',
      weeks: 'Stage 5 · Week 10',
      headline: 'Zero-downtime deployment, Search Console submission, and full repository ownership.',
      description: 'We manage DNS cutover, Google Search Console sitemap indexing, staff walkthroughs for the new operational software, and hand over 100% ownership of your GitHub source code repositories, design tokens, and automation scripts. Zero lock-in.',
      clientAction: 'Final sign-off and transfer of production repositories and admin credentials.',
      deliverable: 'Live Production Platform, Search Indexing, and 100% Source Code Handover.',
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
            Engineering & AI Deployment Methodology · Redwood House
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
            From manual chaos to an autonomous digital flagship.
          </h1>
          <p className="text-lg sm:text-xl text-[#58544E] leading-relaxed">
            Our structured five-stage engineering workflow builds your AI automations, custom software, SEO marketing, and bespoke website without dragging your leadership team into endless agency meetings.
          </p>
        </div>

        {/* Operational Metrics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E8E4DC]">
          <div className="p-6 bg-white rounded-lg border border-[#E8E4DC]">
            <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block">Web Performance</span>
            <div className="text-2xl font-serif text-[#3D1D18] mt-1 font-medium">99+ Core Web Vitals</div>
            <p className="text-xs text-[#58544E] mt-1">Sub-second page loads, clean DOM, and zero layout shift.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-[#E8E4DC]">
            <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block">AI Response Latency</span>
            <div className="text-2xl font-serif text-[#1C1A18] mt-1 font-medium">&lt; 30 Seconds</div>
            <p className="text-xs text-[#58544E] mt-1">Immediate conversational triage on WhatsApp & web 24/7.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-[#E8E4DC]">
            <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block">Client Ownership</span>
            <div className="text-2xl font-serif text-[#3D1D18] mt-1 font-medium">100% Code & Data</div>
            <p className="text-xs text-[#58544E] mt-1">Full GitHub repo transfer with zero vendor lock-in or seat fees.</p>
          </div>
        </div>
      </div>

      {/* 5-Stage Breakdown */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="space-y-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-12 shadow-xs hover:border-[#3D1D18]/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-[#F4F0E8] gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl font-light text-[#3D1D18]">
                    {step.num}
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1A18]">
                      {step.title}
                    </h2>
                    <span className="text-xs font-mono text-[#78716C] block mt-0.5">
                      {step.weeks}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-serif text-[#1C1A18] mb-2 font-normal">
                    {step.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-[#58544E] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#F4F0E8]">
                  <div className="p-4 bg-[#FAF8F3] rounded-md border border-[#E8E4DC]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                      Your Time Commitment
                    </span>
                    <p className="text-xs sm:text-sm text-[#1C1A18]">
                      {step.clientAction}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-md border border-[#E8E4DC]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#3D1D18] font-semibold block mb-1">
                      Verified Milestone Deliverable
                    </span>
                    <p className="text-xs sm:text-sm text-[#1C1A18] font-medium">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-[#E8E4DC]">
        <div className="bg-[#FAF8F3] rounded-lg border border-[#E8E4DC] p-8 sm:p-12 text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif text-[#1C1A18]">
            Ready to initiate an AI automation & digital project?
          </h3>
          <p className="text-sm text-[#58544E] leading-relaxed">
            Email our Chandigarh studio with your current bottlenecks and timeline to begin Phase 1.
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
        </div>
      </div>
    </div>
  );
};
