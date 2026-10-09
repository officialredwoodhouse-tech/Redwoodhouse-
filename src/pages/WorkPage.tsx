import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';

interface WorkPageProps {
  onBack: () => void;
  onNavigatePlaybook: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onBack, onNavigatePlaybook }) => {
  const [filter, setFilter] = useState<'all' | 'b2b' | 'advisory' | 'local-seo'>('all');

  const projects = [
    {
      id: 'northstar',
      name: 'Northstar Industrial Systems',
      type: 'b2b',
      category: 'B2B Deep Tech · Custom Web Flagship & Programmatic SEO',
      metrics: '+310% Organic Pipeline · 99/100 CWV',
      challenge: 'The engineering leader had 8 years of industrial telemetry breakthroughs, but their legacy website took 7 seconds to load and was invisible for commercial search queries.',
      concept: 'A sub-second architectural web platform paired with 45+ programmatic specification and solution hubs engineered around enterprise procurement search intent.',
      built: 'Custom React/TypeScript frontend, interactive product specification matrices, JSON-LD technical schema graph, and complete search silo restructuring.',
      deliverable: 'Full-stack flagship website + 45 SEO landing hubs + Search Console telemetry.',
      note: 'B2B Web & SEO Blueprint',
    },
    {
      id: 'pine',
      name: 'Pine & Co. Advisory',
      type: 'advisory',
      category: 'Boutique Consultancy · Online Presence & Authority SEO',
      metrics: 'Page-1 Rankings for 28 Core Terms',
      challenge: 'The firm relied on referrals and slide decks to explain their post-merger integration thesis, losing inbound deal velocity to larger consultancies with stronger digital authority.',
      concept: 'An authoritative digital flagship positioning the firm alongside Tier-1 global consultancies while capturing high-intent C-suite search traffic.',
      built: 'Editorial typographic design system, partner authority profiles, interactive M&A readiness diagnostic tool, and thought-leadership SEO architecture.',
      deliverable: 'Complete digital rebrand + custom web platform + Google Knowledge Graph entity setup.',
      note: 'Advisory Presence Blueprint',
    },
    {
      id: 'aura',
      name: 'Aura Specialist Clinics',
      type: 'local-seo',
      category: 'Multi-Specialty Healthcare · Web Platform & Local SEO',
      metrics: '3.4x Increase in Patient Inquiries',
      challenge: 'A premier clinical practice was losing high-value patient bookings to competitors who ranked higher in Google Maps and local treatment searches.',
      concept: 'A calm, patient-first digital clinic platform with dedicated procedure hubs, physician credentials schema, and multi-city local search dominance.',
      built: 'Mobile-first patient booking UX, 30+ medically structured treatment SEO pages, MedicalClinic JSON-LD schema, and local citation synchronization.',
      deliverable: 'Custom healthcare web platform + local SEO engine + conversion booking pipeline.',
      note: 'Healthcare & Local SEO Blueprint',
    },
    {
      id: 'signal',
      name: 'Signal Cloud & AI',
      type: 'b2b',
      category: 'Enterprise SaaS · Marketing Website & Comparison SEO',
      metrics: '+185% Demo Conversions · 0.7s LCP',
      challenge: 'A fast-growing SaaS platform had scattered documentation and product pages that failed to rank for "alternatives" and "vs" bottom-of-funnel search terms.',
      concept: 'A unified product marketing flagship with modular feature showcases and programmatic competitor comparison pages.',
      built: 'Custom component library, interactive ROI calculator, SoftwareApplication schema graph, and 25 high-converting comparison SEO pages.',
      deliverable: 'High-converting SaaS web architecture + programmatic SEO growth engine.',
      note: 'SaaS Growth Blueprint',
    },
    {
      id: 'atelier-verma',
      name: 'Atelier Vastu & Modernist Studio',
      type: 'local-seo',
      category: 'Architecture & Luxury Design · Digital Monograph & Search',
      metrics: '0.8s Load Time · +240% Search Impressions',
      challenge: 'An acclaimed architecture and interior studio had hundreds of uncompressed high-resolution photographs that crippled mobile performance and search indexability.',
      concept: 'A gallery-grade digital portfolio with next-gen AVIF/WebP image streaming, editorial project narratives, and regional + international search visibility.',
      whatWeBuilt: 'Progressive image delivery pipeline, typographic project archive, architectural schema markup, and press inquiry portal.',
      built: 'Progressive image delivery pipeline, typographic project archive, architectural schema markup, and press inquiry portal.',
      deliverable: 'Ultra-fast luxury portfolio website + international organic search footprint.',
      note: 'Luxury Portfolio Blueprint',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

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
            Selected Work & Case Studies · Redwood House
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 border-b border-[#E8E4DC]">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
            Portfolio of Digital Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.08]">
            Selected Work & Web + SEO Blueprints.
          </h1>
          <p className="text-lg sm:text-xl text-[#58544E] leading-relaxed">
            Explore how Redwood House combines bespoke web engineering, editorial online presence, and technical search optimization across B2B, advisory, healthcare, and luxury verticals.
          </p>
        </div>

        {/* Featured Methodology Callout */}
        <div className="mt-12 bg-white rounded-lg border border-[#D5CFC5] p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3D1D18] font-semibold block">
              Proprietary Studio System
            </span>
            <h3 className="text-2xl font-serif text-[#1C1A18]">
              The Online Presence & SEO Playbook
            </h3>
            <p className="text-sm text-[#58544E] max-w-xl">
              Inspect our 10-stage engineering and technical SEO blueprint, and run an interactive readiness diagnostic on your current website.
            </p>
          </div>
          <button
            onClick={onNavigatePlaybook}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
          >
            <span>Explore the SEO & Presence System</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Filter Tabs & Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'all'
                ? 'bg-[#1C1A18] text-white'
                : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
            }`}
          >
            All Case Blueprints ({projects.length})
          </button>
          <button
            onClick={() => setFilter('b2b')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'b2b'
                ? 'bg-[#1C1A18] text-white'
                : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
            }`}
          >
            B2B & SaaS Platforms
          </button>
          <button
            onClick={() => setFilter('advisory')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'advisory'
                ? 'bg-[#1C1A18] text-white'
                : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
            }`}
          >
            Advisory & Executive Presence
          </button>
          <button
            onClick={() => setFilter('local-seo')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'local-seo'
                ? 'bg-[#1C1A18] text-white'
                : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
            }`}
          >
            Healthcare, Architecture & Local SEO
          </button>
        </div>

        {/* Project Blueprint Cards */}
        <div className="space-y-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-10 shadow-xs hover:border-[#3D1D18]/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#F4F0E8] gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-serif font-medium text-[#1C1A18]">
                      {p.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[#78716C] bg-[#FAF8F3] px-2 py-0.5 border border-[#E8E4DC] rounded-xs">
                      {p.note}
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] mt-1 block">
                    {p.category}
                  </span>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-xs font-mono text-[#3D1D18] font-semibold block">
                    {p.metrics}
                  </span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The Digital Challenge
                  </span>
                  <p className="text-sm text-[#4A4641] leading-relaxed">
                    {p.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The Presence & SEO Strategy
                  </span>
                  <p className="text-sm font-serif italic text-[#3D1D18] leading-relaxed">
                    "{p.concept}"
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    What Redwood House Engineered
                  </span>
                  <p className="text-sm text-[#58544E] leading-relaxed">
                    {p.built}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F4F0E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-[#1C1A18]">
                  <Check className="w-4 h-4 text-[#3D1D18]" />
                  <span><strong>Deliverable:</strong> {p.deliverable}</span>
                </div>
                <a
                  href={`${BRAND.mailtoGeneral}&body=Hello%20Redwood%20House,%0D%0A%0D%0AWe%20are%20interested%20in%20a%20website%20and%20SEO%20architecture%20similar%20to%20your%20${encodeURIComponent(p.category)}%20blueprint...`}
                  className="inline-flex items-center gap-1 font-semibold text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4"
                >
                  <span>Inquire about a similar build</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-[#E8E4DC]">
        <div className="bg-[#FAF8F3] rounded-lg border border-[#E8E4DC] p-8 sm:p-12 text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif text-[#1C1A18]">
            Ready to build a high-performing digital flagship?
          </h3>
          <p className="text-sm text-[#58544E] leading-relaxed">
            Email our Chandigarh studio with your current website and goals to receive an initial technical & search assessment.
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
