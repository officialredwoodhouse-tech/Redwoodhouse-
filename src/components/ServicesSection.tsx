import React from 'react';
import { ASSETS } from '../constants/assets';
import { Cpu, Code, Search, Zap, Palette, Globe, Check, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../constants/assets';

export const ServicesSection: React.FC = () => {
  const disciplines = [
    {
      index: '01',
      icon: Cpu,
      title: 'AI Automation & Autonomous Agents',
      subtitle: 'Eliminating Operational Drudgery',
      points: [
        'Autonomous AI agents for client onboarding, intake & triage',
        '24/7 intelligent patient & lead qualification on WhatsApp & Web',
        'Multi-department dispatching for clinics, hospitals & gyms',
        'Context-aware LLM agents connected directly to your CRM & database',
      ],
    },
    {
      index: '02',
      icon: Code,
      title: 'Custom Software & Operational Portals',
      subtitle: 'Engineered for Your Exact Workflows',
      points: [
        'Bespoke client portals, staff dashboards & operational tools',
        'Role-based access control, HIPAA-aware records & secure databases',
        'Custom workflow engines eliminating fragmented SaaS subscription costs',
        '100% source code ownership with zero vendor lock-in',
      ],
    },
    {
      index: '03',
      icon: Search,
      title: 'SEO Marketing & Programmatic Search',
      subtitle: 'Compounding Inbound Commercial Demand',
      points: [
        'Semantic HTML5 & Schema.org JSON-LD entity graph engineering',
        'Programmatic topic silos capturing high-intent commercial keywords',
        'Core Web Vitals tuning (sub-1.2s LCP, zero layout shifts)',
        'Local Google Business Profile and regional medical/clinic authority',
      ],
    },
    {
      index: '04',
      icon: Zap,
      title: 'Ad & Transaction Automation',
      subtitle: 'End-to-End Conversion Pipelines',
      points: [
        'Automated checkout flows, Stripe billing webhooks & payment triggers',
        'Instant ad lead-to-booking conversions (SMS/WhatsApp within 30s)',
        'Full-funnel Google & Meta ad ROAS attribution and event telemetry',
        'Automated recurring membership & subscription recovery pipelines',
      ],
    },
    {
      index: '05',
      icon: Palette,
      title: 'Brand Identity & UI/UX Design',
      subtitle: 'Architectural Restraint & Commercial Polish',
      points: [
        'Distinctive typographic hierarchies (Newsreader + Plus Jakarta Sans)',
        'Comprehensive design tokens, Figma component systems & guidelines',
        'High-converting checkout, consultation & trial booking UI flows',
        'Enduring brand presence that elevates perceived enterprise value',
      ],
    },
    {
      index: '06',
      icon: Globe,
      title: 'Bespoke Website Development',
      subtitle: 'Sub-Second React & Next.js Flagships',
      points: [
        'Handcrafted web engineering with zero template or page-builder bloat',
        'Scoring 99+ on Google Core Web Vitals across mobile and desktop',
        'Global edge CDN distribution with sub-second page loads worldwide',
        'Engineered to convert visitors into consultations, trials, or clients',
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
              Full-Spectrum Studio Scope
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
              We just don't make websites. <br />
              <span className="italic text-[#3D1D18]">What we actually engineer.</span>
            </h2>
            <p className="text-lg text-[#58544E] leading-relaxed">
              We don't build hollow brochureware. Redwood House engineers complete business systems where AI automation, custom software, SEO marketing, brand design, and high-performance websites operate as one unified engine.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
              Redwood Standard
            </span>
            <span className="text-xl font-serif text-[#3D1D18] font-medium block mt-1">
              AI + Software + SEO + Websites
            </span>
          </div>
        </div>

        {/* 6 Integrated Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className="bg-white p-8 rounded-lg border border-[#E8E4DC] shadow-xs hover:border-[#3D1D18]/50 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#F4F0E8] mb-5">
                    <span className="font-mono text-xs font-semibold text-[#3D1D18]">
                      Pillar {pillar.index}
                    </span>
                    <Icon className="w-4 h-4 text-[#78716C] group-hover:text-[#3D1D18] transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-[#1C1A18] mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block mb-4">
                    {pillar.subtitle}
                  </span>
                  <ul className="space-y-3">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#58544E]">
                        <Check className="w-3.5 h-3.5 text-[#3D1D18] shrink-0 mt-1" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F4F0E8] flex items-center justify-between text-xs">
                  <span className="text-[#78716C] font-mono">Custom Engineered</span>
                  <a
                    href={`${BRAND.mailtoGeneral}&body=Hello%20Redwood%20House,%0D%0A%0D%0AWe%20are%20interested%20in%20discussing%20${encodeURIComponent(pillar.title)}...`}
                    className="font-medium text-[#1C1A18] hover:text-[#3D1D18] inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Feature Box highlighting Ad & Transaction + Custom Software Integration */}
        <div className="mt-12 bg-white rounded-lg border border-[#E8E4DC] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xl font-serif text-[#1C1A18]">
              Seamless Ad-to-Transaction & Workflow Automation
            </h4>
            <p className="text-sm text-[#58544E] leading-relaxed">
              From the instant a prospective patient, client, or gym member clicks an ad or discovers you on Google, our systems automate the entire journey: qualification via conversational AI, appointment booking, payment transaction processing, and CRM synchronization.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-start md:items-end">
            <span className="text-xs uppercase tracking-wider font-mono text-[#78716C] mb-1">
              Zero Manual Bottlenecks
            </span>
            <span className="text-2xl font-serif text-[#3D1D18] font-medium">
              End-to-End Autonomy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
