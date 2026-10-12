import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight, Check, Cpu, Code, Search, Zap, Globe } from 'lucide-react';

interface HowItWorksSectionProps {
  onLearnMore?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onLearnMore }) => {
  const steps = [
    {
      num: '01',
      name: 'Operational & Search Audit',
      icon: Search,
      headline: 'Diagnosing Bottlenecks, Search Gaps & Manual Churn',
      copy: 'We analyze your current operations: how patient/lead inquiries are handled, clinic or gym booking drop-offs, agency reporting overhead, and organic Google visibility. We map exactly what can be automated by AI and what needs custom software.',
      deliverable: 'Operational Audit & Automation Blueprint',
    },
    {
      num: '02',
      name: 'System Architecture & AI Design',
      icon: Cpu,
      headline: 'Designing Agent Flows, Data Schemas & UI Wireframes',
      copy: 'Before writing code, we blueprint the entire architecture: conversational triage flows for WhatsApp/Web, database schemas (EHR/CRM/Stripe), programmatic SEO topic silos, and clean editorial UI wireframes.',
      deliverable: 'Interactive Architecture & Wireframe Spec',
    },
    {
      num: '03',
      name: 'Full-Stack Software & Web Build',
      icon: Code,
      headline: 'Engineering Sub-Second Flagships & Custom Portals',
      copy: 'Our studio develops your bespoke React/Next.js frontend, backend APIs, and custom operational portals. We write authoritative domain copy and enforce sub-second load times scoring 99+ on Google Core Web Vitals.',
      deliverable: 'Production Software & Staging Web Flagship',
    },
    {
      num: '04',
      name: 'AI Agent & Ad/Transaction Integration',
      icon: Zap,
      headline: 'Wiring Autonomous Agents, Payments & CRM Pipelines',
      copy: 'We deploy intelligent AI agents for 24/7 lead triage, automated appointment scheduling, Stripe transaction webhooks, automated Monday client reporting, and ad conversion tracking (Google & Meta Ads).',
      deliverable: 'Live AI Automations & Verified Webhooks',
    },
    {
      num: '05',
      name: 'Launch, Indexing & Full Code Handover',
      icon: Globe,
      headline: 'Zero-Downtime Deployment & 100% Client Ownership',
      copy: 'We manage DNS configuration, Google Search Console indexing, staff onboarding for the new workflows, and hand over 100% of your source code repository, design tokens, and automation scripts. Zero lock-in.',
      deliverable: 'Live Production Flagship + Full Code Handover',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Structured Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            How Redwood House deploys AI automations and custom software.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            A disciplined, 5-stage engineering lifecycle designed for founders, clinic directors, gym owners, and agency leaders. No endless meetings—just clear milestones and measurable business leverage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-10 hover:border-[#3D1D18]/50 transition-colors shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Step indicator */}
                  <div className="lg:col-span-3 flex items-start gap-4">
                    <span className="font-mono text-3xl font-light text-[#3D1D18]">
                      {step.num}
                    </span>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                        Phase {idx + 1}
                      </span>
                      <h3 className="text-lg font-serif font-medium text-[#1C1A18] mt-0.5">
                        {step.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="lg:col-span-6 space-y-2">
                    <h4 className="text-base font-serif text-[#1C1A18] font-normal">
                      {step.headline}
                    </h4>
                    <p className="text-sm text-[#58544E] leading-relaxed">
                      {step.copy}
                    </p>
                  </div>

                  {/* Deliverable tag */}
                  <div className="lg:col-span-3 lg:text-right flex flex-col justify-between h-full pt-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                      Key Milestone
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1C1A18] bg-[#FAF8F3] px-3 py-1.5 rounded border border-[#E8E4DC] lg:self-end">
                      <Check className="w-3.5 h-3.5 text-[#3D1D18]" />
                      <span>{step.deliverable}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA link to dedicated page */}
        {onLearnMore && (
          <div className="mt-12 text-center">
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 text-sm font-serif italic text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4 cursor-pointer"
            >
              <span>Read the detailed engineering process & sprint breakdown</span>
              <ArrowUpRight className="w-4 h-4 not-italic" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
