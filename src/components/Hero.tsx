import React, { useState } from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowDown, Cpu, Sparkles, Building2, Stethoscope, Dumbbell, Search, Code, Palette, Globe, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onExploreSystems: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onExploreSystems }) => {
  const [activeCapability, setActiveCapability] = useState<'automation' | 'software' | 'seo' | 'websites' | 'presence'>('automation');

  const capabilities = {
    automation: {
      src: ASSETS.aiAutomationWorkflow,
      alt: 'Autonomous AI workflows and intelligent business pipelines at Redwood House studio',
      label: 'AI Automation',
      tagline: 'Autonomous AI Agents & Operational Workflows',
      caption: 'Automated triage, lead qualification, CRM sync & ad transaction pipelines',
      quote: '"We eliminate manual grunt work by deploying intelligent AI agents that operate 24/7 across your business."',
      badge: 'Zero Latency Agents',
    },
    software: {
      src: ASSETS.customSoftwareSystems,
      alt: 'Custom software systems, operational portals and intelligent dashboard architecture',
      label: 'Custom Software',
      tagline: 'Bespoke Software & Intelligent Web Portals',
      caption: 'Internal operational tools, HIPAA-aware portals & customer dashboards',
      quote: '"Purpose-built software engineered to run your exact business logic with zero subscription bloat."',
      badge: 'Full-Stack Architecture',
    },
    seo: {
      src: ASSETS.seoArchitectureShowcase,
      alt: 'SEO marketing, technical schema graphs, and organic search infrastructure',
      label: 'SEO Marketing',
      tagline: 'Technical & Programmatic SEO Marketing',
      caption: 'High-intent search siloing, JSON-LD graphs & ad conversion attribution',
      quote: '"Search visibility and ad conversion pipelines engineered straight into code and copy."',
      badge: 'High-Intent Demand',
    },
    websites: {
      src: ASSETS.webStudioHero,
      alt: 'Bespoke website development and architectural wireframes at Redwood House studio',
      label: 'Flagship Websites',
      tagline: 'Sub-Second React & Next.js Web Engineering',
      caption: 'Custom digital flagships scoring 99+ on Google Core Web Vitals',
      quote: '"Yes, we make websites—not sluggish templates, but fast, unmistakable digital flagships that convert."',
      badge: '99+ Core Web Vitals',
    },
    presence: {
      src: ASSETS.digitalPresenceCraft,
      alt: 'Cohesive online presence and high-taste design across desktop and mobile displays',
      label: 'Brand & Design',
      tagline: 'Timeless Identity & Architectural UI/UX',
      caption: 'Typographic hierarchy, design tokens & conversion flow design',
      quote: '"Design with commercial weight and visual restraint that establishes instant market authority."',
      badge: 'Bespoke Identity',
    },
  };

  const currentCap = capabilities[activeCapability];

  const targetIndustries = [
    { label: 'Agencies', icon: Building2, desc: 'Client onboarding, autonomous reporting & delivery pipelines' },
    { label: 'Clinics', icon: Stethoscope, desc: '24/7 patient triage, WhatsApp booking & EHR intake automation' },
    { label: 'Hospitals', icon: Building2, desc: 'Multi-department routing, patient dispatch & inquiry AI' },
    { label: 'Gyms & Fitness', icon: Dumbbell, desc: 'Trial conversion bots, class booking & churn prevention sequences' },
    { label: 'SEO Marketing', icon: Search, desc: 'Programmatic search silos, rank tracking & ad attribution' },
    { label: 'Custom Software', icon: Code, desc: 'Bespoke internal portals, AI tools & client dashboards' },
    { label: 'Design & UI/UX', icon: Palette, desc: 'Architectural brand systems & high-converting product interfaces' },
    { label: 'Websites', icon: Globe, desc: 'Sub-second React/Next.js flagships with zero template bloat' },
  ];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#E8E4DC] bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Kicker */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-widest uppercase font-mono text-[#78716C] mb-6">
          <span className="inline-flex items-center gap-1.5 text-[#3D1D18] font-semibold">
            <Cpu className="w-3.5 h-3.5 text-[#3D1D18]" />
            AI Automation
          </span>
          <span aria-hidden="true">·</span>
          <span>Custom Softwares</span>
          <span aria-hidden="true">·</span>
          <span>SEO Marketing</span>
          <span aria-hidden="true">·</span>
          <span>Design</span>
          <span aria-hidden="true">·</span>
          <span>Websites</span>
          <span aria-hidden="true">·</span>
          <span>Chandigarh, India</span>
        </div>

        {/* Main Grid: Asymmetric Typography & Visual Cap Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Core Positioning Statement */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="inline-block px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#F4F0E8] text-[#3D1D18] border border-[#E8E4DC] rounded-sm font-semibold">
                Beyond Conventional Web Agencies
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-serif font-normal text-[#1C1A18] tracking-tight leading-[1.08] text-balance">
                We just don't make websites. <br />
                <span className="italic font-normal text-[#3D1D18]">
                  We build AI automations, custom software, and digital flagships.
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#4A4641] font-sans font-normal leading-relaxed max-w-2xl">
              Redwood House engineers full-spectrum intelligence for <strong>agencies, clinics, hospitals, gyms, and growing companies</strong>. We deploy autonomous AI workflows, custom operational software, technical SEO marketing, high-craft brand design, and yes—world-class websites.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BRAND.mailtoGeneral}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-sm font-semibold rounded-md transition-colors tracking-wide shadow-sm"
              >
                <span>Initiate an Automation Project</span>
                <span className="text-[#A8A29E] font-normal">·</span>
                <span className="text-xs font-mono text-[#D6D3D1] hidden sm:inline">{BRAND.email}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6D3D1]" />
              </a>
              <button
                onClick={onExploreSystems}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#D5CFC5] hover:border-[#1C1A18] bg-transparent text-[#1C1A18] text-sm font-medium rounded-md transition-colors cursor-pointer"
              >
                <span>Explore Verticals & Systems</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#58544E]" />
              </button>
            </div>

            {/* Industry Breadth Badges */}
            <div className="pt-8 border-t border-[#E8E4DC]">
              <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono block mb-3">
                Tailored Intelligence Across 8 Core Disciplines
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {targetIndustries.map((ind, i) => {
                  const Icon = ind.icon;
                  return (
                    <div
                      key={i}
                      className="p-2.5 rounded-md border border-[#E8E4DC] bg-white hover:border-[#3D1D18]/50 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[#1C1A18]">
                        <Icon className="w-3.5 h-3.5 text-[#3D1D18] shrink-0" />
                        <span className="truncate">{ind.label}</span>
                      </div>
                      <p className="text-[10px] text-[#78716C] font-sans mt-0.5 line-clamp-1">
                        {ind.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Interactive Capability Tabs */}
          <div className="lg:col-span-5 relative space-y-3">
            {/* View Selector Tabs */}
            <div className="flex items-center justify-between pb-1 text-xs">
              <span className="font-mono text-[#78716C] uppercase tracking-wider text-[11px] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#3D1D18]" />
                Capability Studio
              </span>
              <div className="flex flex-wrap items-center gap-1 bg-[#F4F0E8] p-0.5 rounded-md border border-[#E8E4DC]">
                {(Object.keys(capabilities) as (keyof typeof capabilities)[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveCapability(key)}
                    className={`px-2 py-1 text-[11px] font-sans rounded transition-all cursor-pointer ${
                      activeCapability === key
                        ? 'bg-white text-[#1C1A18] shadow-xs font-semibold'
                        : 'text-[#78716C] hover:text-[#1C1A18]'
                    }`}
                  >
                    {capabilities[key].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Card */}
            <div className="relative rounded-lg overflow-hidden border border-[#E8E4DC] shadow-md bg-white">
              <img
                src={currentCap.src}
                alt={currentCap.alt}
                className="w-full h-[380px] lg:h-[430px] object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-black/60 text-white backdrop-blur-sm border border-white/20">
                  {currentCap.badge}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E7E3DC] block mb-1">
                  Redwood House · {currentCap.tagline}
                </span>
                <p className="text-sm font-serif italic text-white/95 leading-snug">
                  {currentCap.quote}
                </p>
              </div>
            </div>

            {/* Caption beneath */}
            <div className="flex items-center justify-between text-xs text-[#78716C] font-sans px-1">
              <span className="truncate pr-2">{currentCap.caption}</span>
              <span className="font-mono text-[#3D1D18] font-medium shrink-0">Bespoke Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
