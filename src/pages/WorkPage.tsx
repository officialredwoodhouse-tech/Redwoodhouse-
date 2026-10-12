import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { ArrowLeft, ArrowUpRight, Check, Building2, Stethoscope, Dumbbell, Search, Code, Palette, Globe } from 'lucide-react';

interface WorkPageProps {
  onBack: () => void;
  onNavigatePlaybook: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onBack, onNavigatePlaybook }) => {
  const [filter, setFilter] = useState<'all' | 'agencies' | 'clinics-hospitals' | 'gyms' | 'software-seo'>('all');

  const projects = [
    {
      id: 'scaleflow',
      name: 'ScaleFlow Media & Growth Agency',
      type: 'agencies',
      category: 'Agency Operations · AI Onboarding & Reporting Pipelines',
      metrics: 'Saved 20+ hrs/week per PM · 2.8x Faster Onboarding',
      challenge: 'Account managers were spending 15+ hours weekly compiling manual client slide decks from Meta Ads, Google Ads, and Stripe across 24 enterprise accounts.',
      concept: 'An autonomous agency operations engine: 60-second client onboarding bot, Monday morning AI reporting agent, and custom client dashboard.',
      built: 'Custom agency client portal, autonomous Slack/Drive provisioning agent, narrative performance reporting bot, and Stripe webhook billing automations.',
      deliverable: 'Bespoke agency software portal + autonomous reporting agents + ad attribution pipeline.',
      note: 'Agency AI & Software Blueprint',
    },
    {
      id: 'apex-clinics',
      name: 'Apex Multi-Specialty Clinics',
      type: 'clinics-hospitals',
      category: 'Healthcare & Clinic AI Automation · Web Platform · Local SEO',
      metrics: '3.4x Inbound Patient Inquiries · <2% No-Show Rate',
      challenge: 'Clinic front desks were inundated with telephone calls during doctor consultations, resulting in missed after-hours inquiries and a 22% no-show rate.',
      concept: 'A 24/7 clinical web flagship with conversational WhatsApp triage, automated electronic intake forms, and local medical search dominance.',
      built: 'Sub-second clinic web platform, 24/7 AI WhatsApp triage bot, electronic patient intake pipeline, MedicalClinic JSON-LD schema, and automated SMS reminder sequences.',
      deliverable: 'Custom healthcare web platform + 24/7 WhatsApp triage agent + local search dominance.',
      note: 'Clinic AI & Local SEO Blueprint',
    },
    {
      id: 'metro-hospital',
      name: 'Metro City Healthcare & Hospital Center',
      type: 'clinics-hospitals',
      category: 'Hospital Systems · Department Routing AI · Institutional Portal',
      metrics: '45% Faster Patient Routing · 24/7 Dispatch Readiness',
      challenge: 'Multi-specialty hospital with 12 departments suffered from patient intake confusion, emergency call center overload, and fragmented doctor on-call scheduling.',
      concept: 'An institutional healthcare web portal with conversational department routing, automated doctor dispatch alerts, and verified Google Knowledge Graph authority.',
      built: 'Institutional doctor directory, conversational emergency triage bot, secure doctor dispatch alerting, and post-discharge recovery check-in sequences.',
      deliverable: 'High-security hospital portal + department routing intelligence + physician alert system.',
      note: 'Hospital Systems Blueprint',
    },
    {
      id: 'ironpulse',
      name: 'IronPulse Fitness & Athletic Clubs',
      type: 'gyms',
      category: 'Fitness Centers · Lead-to-Trial WhatsApp Bot · Churn Prevention',
      metrics: '+68% Trial Attendance · 35% Reduction in Member Churn',
      challenge: 'Meta Ad leads went cold before front-desk staff could call them back. 35% of members dropped off after month two with no staff intervention.',
      concept: 'An instant 30-second WhatsApp lead response bot that books free trial sessions immediately, paired with predictive churn detection sequences.',
      built: 'Modern gym web flagship with interactive timetable, instant WhatsApp trial qualifier, QR mobile pass generator, and automated membership retention workflows.',
      deliverable: 'Modern gym web flagship + instant WhatsApp conversion bot + member retention engine.',
      note: 'Gym & Fitness Systems Blueprint',
    },
    {
      id: 'tensordata',
      name: 'TensorData Cloud & Systems',
      type: 'software-seo',
      category: 'Custom Software · Programmatic SEO Marketing · SaaS Portal',
      metrics: '+310% Organic Pipeline · 99/100 Core Web Vitals',
      challenge: 'A data engineering platform had zero organic Google search traffic and paid tens of thousands monthly for fragmented third-party dashboard tools.',
      concept: 'A unified custom customer analytics dashboard paired with 50+ programmatic SEO comparison and solution hub pages engineered for technical search intent.',
      built: 'Custom React/Next.js customer portal, programmatic topic silo generator, SoftwareApplication schema graph, and autonomous SERP rank tracking bot.',
      deliverable: 'Bespoke customer software portal + programmatic SEO engine + full code handover.',
      note: 'Software & SEO Blueprint',
    },
    {
      id: 'atelier-verma',
      name: 'Atelier Verma Modernist Architecture',
      type: 'software-seo',
      category: 'High-Craft Brand Design · Architectural UI/UX · Flagship Website',
      metrics: '0.8s Global LCP · +240% Inbound Inquiries',
      challenge: 'An acclaimed studio had thousands of uncompressed high-resolution photographs that caused 7-second load times and low high-ticket client conviction.',
      concept: 'A gallery-grade digital monograph with progressive image streaming, editorial project narratives, and international search visibility.',
      built: 'Custom typographic identity system, progressive image CDN delivery pipeline, architectural schema markup, and high-converting inquiry flow.',
      deliverable: 'Monograph digital flagship + complete design system + sub-second CDN architecture.',
      note: 'Design & Web Flagship Blueprint',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.type === filter);

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
            Selected Work & Real-World Deployments · Redwood House
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 border-b border-[#E8E4DC]">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
            Selected Systems & Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.08]">
            AI Automations, Custom Software, SEO, and Flagship Websites.
          </h1>
          <p className="text-lg sm:text-xl text-[#58544E] leading-relaxed">
            Every deployment solves an operational bottleneck: from patient triage in healthcare and trial booking in fitness to automated reporting for agencies and sub-second web flagships.
          </p>

          {/* Filter Bar */}
          <div className="pt-4 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Deployments' },
              { id: 'agencies', label: 'Agencies' },
              { id: 'clinics-hospitals', label: 'Clinics & Hospitals' },
              { id: 'gyms', label: 'Gyms & Fitness' },
              { id: 'software-seo', label: 'Software, SEO & Design' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#1C1A18] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="space-y-12">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-12 shadow-xs hover:border-[#3D1D18]/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-6 border-b border-[#F4F0E8] gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1A18]">
                      {p.name}
                    </h2>
                    <span className="text-xs font-mono px-2.5 py-1 bg-[#FAF8F3] text-[#3D1D18] border border-[#E8E4DC] rounded">
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
                    The Operational Challenge
                  </span>
                  <p className="text-sm text-[#4A4641] leading-relaxed">
                    {p.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The AI & Architectural Strategy
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
                  href={`${BRAND.mailtoGeneral}&body=Hello%20Redwood%20House,%0D%0A%0D%0AWe%20are%20interested%20in%20a%20system%20similar%20to%20your%20${encodeURIComponent(p.name)}%20(${encodeURIComponent(p.category)})%20blueprint...`}
                  className="inline-flex items-center gap-1 font-semibold text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4"
                >
                  <span>Inquire about a similar deployment</span>
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
            Ready to automate your operations and build a digital flagship?
          </h3>
          <p className="text-sm text-[#58544E] leading-relaxed">
            Email our Chandigarh studio with your current workflow bottlenecks and goals to receive an architectural assessment.
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
