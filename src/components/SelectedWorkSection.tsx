import React from 'react';
import { BRAND } from '../constants/assets';

interface CaseStudy {
  id: string;
  clientPlaceholder: string;
  category: string;
  challenge: string;
  subjectMatter: string;
  architectureConcept: string;
  whatWeBuilt: string;
  finalDeliverable: string;
  metrics: string;
}

export const SelectedWorkSection: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: 'northstar',
      clientPlaceholder: 'Northstar Industrial Systems',
      category: 'B2B Deep Tech · Flagship Website & Programmatic SEO',
      challenge: 'An enterprise hardware & telemetry company had strong engineering credentials but a slow, outdated site that ranked for zero non-branded commercial keywords.',
      subjectMatter: 'Industrial IoT architecture, enterprise compliance, and supply chain telemetry.',
      architectureConcept: 'A sub-second architectural web platform paired with 45+ technical solution and specification pages engineered for enterprise search intent.',
      whatWeBuilt: 'Custom React/TypeScript frontend, interactive product specification matrices, JSON-LD technical schema graph, and complete search silo restructuring.',
      finalDeliverable: 'Custom web flagship + 99/100 Core Web Vitals + 45 programmatic SEO landing hubs.',
      metrics: '+310% Organic Inbound Pipeline',
    },
    {
      id: 'pine',
      clientPlaceholder: 'Pine & Co. Advisory',
      category: 'Boutique Consultancy · Online Presence & Authority SEO',
      challenge: 'A senior M&A and restructuring consultancy relied entirely on referrals because their digital footprint looked like a generic 2016 template.',
      subjectMatter: 'Post-merger integration, executive advisory, and capital allocation.',
      architectureConcept: 'An editorial-grade digital flagship positioning the firm alongside Tier-1 global consultancies while capturing high-intent executive search traffic.',
      whatWeBuilt: 'Bespoke editorial design system, partner authority profiles, interactive diagnostic assessment tool, and thought-leadership SEO architecture.',
      finalDeliverable: 'Full digital rebrand + custom web platform + Google Knowledge Graph optimization.',
      metrics: 'Page-1 Rankings for 28 Core Terms',
    },
    {
      id: 'aura-clinics',
      clientPlaceholder: 'Aura Specialist Clinics',
      category: 'Healthcare & Aesthetics · Web Platform & Local SEO',
      challenge: 'A premier multi-specialty clinic was losing high-value patient inquiries to inferior competitors who had better local search visibility and faster mobile booking.',
      subjectMatter: 'Specialist clinical procedures, patient education, and multi-city clinic discovery.',
      architectureConcept: 'A calm, high-trust digital clinic experience with dedicated treatment hubs, physician schema, and hyper-local search dominance.',
      whatWeBuilt: 'Mobile-first patient portal interface, 30+ medically reviewed treatment SEO guides, MedicalClinic JSON-LD schema, and local search architecture.',
      finalDeliverable: 'Custom healthcare web platform + local SEO system + frictionless consultation flow.',
      metrics: '3.4x Increase in Patient Inquiries',
    },
    {
      id: 'atelier-verma',
      clientPlaceholder: 'Atelier Vastu & Modernist Studio',
      category: 'Architecture & Luxury Design · Portfolio & Global Presence',
      challenge: 'An acclaimed architecture studio had hundreds of high-resolution project photographs that caused 8-second load times and poor search indexation.',
      subjectMatter: 'Modernist residential architecture, bespoke interiors, and spatial design.',
      architectureConcept: 'A gallery-grade digital monograph with next-gen image streaming, editorial project narratives, and international search visibility.',
      whatWeBuilt: 'Custom progressive image delivery pipeline, typographic portfolio index, architectural project schema, and press/media kit portal.',
      finalDeliverable: 'Ultra-fast visual portfolio website + global organic search footprint.',
      metrics: '0.8s Load Time · +240% Search Impressions',
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Selected Work & Blueprints
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            How we engineer websites, online presence, and search growth.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            Every engagement combines custom frontend craftsmanship, clear brand positioning, and technical search engine architecture. Below are representative project blueprints across key verticals.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-[#E8E4DC] p-8 hover:border-[#3D1D18]/50 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header Lockup */}
                <div className="flex items-start justify-between border-b border-[#F4F0E8] pb-4 gap-4">
                  <div>
                    <span className="text-xs font-mono text-[#78716C] block uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-serif text-[#1C1A18] font-medium mt-1">
                      {item.clientPlaceholder}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#3D1D18] font-semibold bg-[#FAF8F3] px-2.5 py-1 border border-[#E8E4DC] rounded-xs shrink-0">
                    {item.metrics}
                  </span>
                </div>

                {/* Challenge */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The Digital Challenge
                  </span>
                  <p className="text-sm text-[#4A4641] leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* Architecture Concept */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The Presence & SEO Strategy
                  </span>
                  <p className="text-sm font-serif italic text-[#3D1D18] leading-relaxed">
                    "{item.architectureConcept}"
                  </p>
                </div>

                {/* What Redwood House Built */}
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    What Redwood House Engineered
                  </span>
                  <p className="text-sm text-[#58544E] leading-relaxed">
                    {item.whatWeBuilt}
                  </p>
                </div>

                {/* Final Deliverable */}
                <div className="pt-3 border-t border-[#F4F0E8] flex items-center justify-between text-xs gap-4">
                  <span className="text-[#78716C] shrink-0">Deliverable:</span>
                  <span className="font-medium text-[#1C1A18] text-right">{item.finalDeliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Studio Guarantee */}
        <div className="mt-12 p-8 bg-[#FAF8F3] border border-[#E8E4DC] rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-lg font-serif text-[#1C1A18]">
              Bespoke engineering & white-label confidentiality available.
            </h4>
            <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
              We partner directly with founders and leadership teams, and also operate under strict NDA for select enterprise and agency partners. Every build includes 100% source code and intellectual property ownership.
            </p>
          </div>
          <a
            href={BRAND.mailtoGeneral}
            className="shrink-0 text-xs font-medium text-[#1C1A18] border border-[#58544E] hover:border-[#1C1A18] hover:bg-white px-4 py-2.5 rounded-sm transition-colors"
          >
            Request Private Portfolio & Audit
          </a>
        </div>
      </div>
    </section>
  );
};
