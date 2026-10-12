import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight, Building2, Stethoscope, Dumbbell, Search, Code, Palette, Globe, Check } from 'lucide-react';

interface CaseStudy {
  id: string;
  clientPlaceholder: string;
  vertical: string;
  category: string;
  challenge: string;
  whatWeBuilt: string;
  aiAutomationHighlights: string;
  finalDeliverable: string;
  metrics: string;
}

export const SelectedWorkSection: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: 'apex-clinics',
      clientPlaceholder: 'Apex Multi-Specialty Clinics',
      vertical: 'Clinics',
      category: 'Healthcare & Clinic AI Automation · Web Platform · Local SEO',
      challenge: 'The clinic reception was losing 40+ patient inquiry calls daily during peak surgery hours, with no evening triage and high patient no-shows.',
      whatWeBuilt: 'Sub-second clinical web platform with 24/7 conversational WhatsApp triage agent, automated electronic pre-visit forms, and MedicalClinic Schema SEO.',
      aiAutomationHighlights: 'Intelligent triage agent books consultations, checks doctor availability, processes deposit transactions, and schedules zero-no-show WhatsApp reminders.',
      finalDeliverable: 'Custom healthcare web flagship + 24/7 WhatsApp AI triage agent + local search dominance.',
      metrics: '3.4x Increase in Booked Consultations · <2% No-Show Rate',
    },
    {
      id: 'scaleflow-agency',
      clientPlaceholder: 'ScaleFlow Media & Growth Agency',
      vertical: 'Agencies',
      category: 'Agency Operations · AI Onboarding & Reporting Pipelines',
      challenge: 'Senior account managers were spending 15 hours every week manually compiling performance decks from Meta Ads, Google Ads, and Stripe across 24 clients.',
      whatWeBuilt: 'Autonomous agency delivery pipeline: custom client portal, weekly AI performance briefing generation, and Stripe subscription webhook automation.',
      aiAutomationHighlights: 'Monday 9AM autonomous reporting bot + automated client onboarding pipeline provisioning Slack, Drive, and client briefs in under 2 minutes.',
      finalDeliverable: 'Custom agency operations portal + autonomous reporting agents + ad attribution pipeline.',
      metrics: 'Saved 20+ hrs/week per PM · 2.8x Faster Client Ramp-Up',
    },
    {
      id: 'ironpulse-gym',
      clientPlaceholder: 'IronPulse Fitness & Athletic Club',
      vertical: 'Gyms & Fitness',
      category: 'Fitness Centers · Lead-to-Trial AI Bot · Churn Prevention',
      challenge: 'Paid ad leads took 6 to 12 hours to receive a manual callback, losing 60% of interested prospects. Member churn hit 35% after month two.',
      whatWeBuilt: 'High-converting gym membership website with interactive class schedule, Stripe recurring billing, and mobile member pass integration.',
      aiAutomationHighlights: 'Instant 30-second WhatsApp lead response bot that books free trial sessions immediately, plus predictive 10-day inactivity churn alert sequence.',
      finalDeliverable: 'Modern gym web flagship + instant WhatsApp conversion bot + member retention engine.',
      metrics: '+68% Trial Attendance · 35% Drop in 60-Day Member Churn',
    },
    {
      id: 'metro-hospital',
      clientPlaceholder: 'Metro Healthcare & Hospital Center',
      vertical: 'Hospitals',
      category: 'Hospital Systems · Department Routing AI · Institutional Portal',
      challenge: 'Multi-specialty hospital with 12 departments suffered from patient routing confusion, emergency desk telephone congestion, and fragmented doctor scheduling.',
      whatWeBuilt: 'Institutional hospital web portal with sub-second doctor directory, department triage engine, and verified Google Knowledge Graph authority.',
      aiAutomationHighlights: 'Intelligent emergency vs outpatient routing bot with automated doctor-on-call dispatch alerts and post-discharge recovery check-in sequences.',
      finalDeliverable: 'High-security hospital web portal + department routing intelligence + physician alert system.',
      metrics: '45% Faster Patient Routing · 24/7 Dispatch Readiness',
    },
    {
      id: 'tensordata-software',
      clientPlaceholder: 'TensorData Cloud & Systems',
      vertical: 'Softwares & SEO',
      category: 'Custom Software · Programmatic SEO Marketing · SaaS Portal',
      challenge: 'A data engineering platform had zero non-branded Google search traffic and needed a custom customer analytics dashboard with role-based team access.',
      whatWeBuilt: 'Custom React/Next.js client analytics portal paired with 50+ programmatic SEO comparison and solution hub pages engineered for technical search intent.',
      aiAutomationHighlights: 'Autonomous SERP rank monitoring agent + programmatic content architecture generating 99/100 Core Web Vitals landing pages.',
      finalDeliverable: 'Bespoke customer software portal + programmatic SEO engine + full source code handover.',
      metrics: '+310% Organic Inbound Pipeline · 0.7s Global LCP',
    },
    {
      id: 'atelier-design',
      clientPlaceholder: 'Atelier Verma Modernist Architecture',
      vertical: 'Design & Web',
      category: 'High-Craft Brand Design · Architectural UI/UX · Flagship Website',
      challenge: 'An acclaimed studio had thousands of high-resolution architectural images causing 7-second page loads, template layouts, and low enterprise client conviction.',
      whatWeBuilt: 'Editorial-grade visual brand identity, custom typographic tokens (Newsreader + Plus Jakarta Sans), and progressive streaming web monograph.',
      aiAutomationHighlights: 'Automated high-res asset optimization pipeline and dynamic inquiry qualification workflow.',
      finalDeliverable: 'Monograph digital flagship + complete design system + sub-second image CDN architecture.',
      metrics: '0.8s Global LCP · +240% Inbound Inquiries',
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Selected Work & Real-World Deployments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            Systems we engineer across agencies, healthcare, fitness, and tech.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            Every deployment unites AI automation, custom software, SEO marketing, brand design, and high-performance websites. Explore real architectural case studies below.
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
                    <span className="text-xs font-mono uppercase tracking-wider text-[#3D1D18] font-semibold block">
                      Vertical: {item.vertical}
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-[#1C1A18] mt-1">
                      {item.clientPlaceholder}
                    </h3>
                    <span className="text-xs font-sans text-[#78716C] block mt-0.5">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono px-2.5 py-1 bg-[#FAF8F3] text-[#3D1D18] border border-[#E8E4DC] rounded block font-medium">
                      {item.metrics}
                    </span>
                  </div>
                </div>

                {/* Challenge */}
                <div className="space-y-1.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The Operational Challenge
                  </span>
                  <p className="text-sm text-[#4A4641] leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* AI Automation Highlights */}
                <div className="p-3.5 rounded bg-[#FAF9F7] border border-[#E8E4DC] space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#3D1D18] font-semibold block">
                    AI Automation Highlight
                  </span>
                  <p className="text-xs sm:text-sm text-[#1C1A18] leading-relaxed">
                    {item.aiAutomationHighlights}
                  </p>
                </div>

                {/* What We Engineered */}
                <div className="space-y-1.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    Software & Web Infrastructure
                  </span>
                  <p className="text-sm text-[#58544E] leading-relaxed">
                    {item.whatWeBuilt}
                  </p>
                </div>
              </div>

              {/* Bottom deliverable and action */}
              <div className="mt-8 pt-4 border-t border-[#F4F0E8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-[#1C1A18]">
                  <Check className="w-4 h-4 text-[#3D1D18]" />
                  <span><strong>Delivered:</strong> {item.finalDeliverable}</span>
                </div>
                <a
                  href={`${BRAND.mailtoGeneral}&body=Hello%20Redwood%20House,%0D%0A%0D%0AWe%20would%20like%20to%20inquire%20about%20a%20system%20similar%20to%20${encodeURIComponent(item.clientPlaceholder)}%20(${encodeURIComponent(item.vertical)})...`}
                  className="font-medium text-[#1C1A18] hover:text-[#3D1D18] inline-flex items-center gap-1 underline underline-offset-4 shrink-0"
                >
                  <span>Inquire for {item.vertical}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
