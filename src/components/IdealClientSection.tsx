import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight, Building2, Stethoscope, Dumbbell, Search, Code, Palette, Globe, Cpu, CheckCircle2, Zap } from 'lucide-react';

interface VerticalSolution {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  bottlenecks: string;
  aiAutomations: string[];
  softwareAndWeb: string;
  adTransaction: string;
  metrics: string;
}

export const IdealClientSection: React.FC = () => {
  const verticals: VerticalSolution[] = [
    {
      id: 'agencies',
      name: 'Agencies',
      category: 'Marketing, Creative & Development Agencies',
      icon: Building2,
      tagline: 'Autonomous client onboarding, automated reporting & delivery pipelines.',
      bottlenecks: 'Account managers spending 15+ hours weekly copying data into client decks, delayed client onboarding, and manual lead qualification.',
      aiAutomations: [
        'AI Client Onboarding Agent: Auto-provisions Slack channels, Drive folders, and onboarding intake questionnaires in 60 seconds.',
        'Autonomous Performance Reporting: Pulls Google Ads, Meta, and SEO metrics to draft narrative client executive summaries every Monday.',
        'Intelligent Lead Qualification Bot: Scores inbound prospects and books high-ticket discovery calls directly into account executive calendars.',
      ],
      softwareAndWeb: 'Custom agency client portal + sub-second case study flagship with interactive client ROI calculators.',
      adTransaction: 'Automated Stripe subscription invoicing, ad spend ROAS attribution tracking, and client billing webhooks.',
      metrics: 'Save 20+ hrs/week per PM · 2.8x Faster Onboarding',
    },
    {
      id: 'clinics',
      name: 'Clinics & Specialist Practices',
      category: 'Dental, Ortho, Dermatology & Specialist Clinics',
      icon: Stethoscope,
      tagline: '24/7 patient triage, WhatsApp booking, and zero-no-show automations.',
      bottlenecks: 'Reception desk overwhelmed during peak hours, lost after-hours patient inquiries, paper-based patient intake, and high appointment no-show rates.',
      aiAutomations: [
        '24/7 WhatsApp & Web Triage AI: Answers patient treatment queries, checks doctor availability, and schedules consultations instantly.',
        'Zero-No-Show Reminder Sequences: Smart SMS/WhatsApp confirmation workflows that reduce cancellations by 70%.',
        'Digital Pre-Visit Intake Automation: Securely collects patient history and consent forms before the patient steps into the clinic.',
      ],
      softwareAndWeb: 'HIPAA-aware web booking platform + MedicalClinic JSON-LD schema dominating local Chandigarh & regional Google searches.',
      adTransaction: 'Automated consultation deposit transactions, Google Ads conversion tracking, and appointment payment receipts.',
      metrics: '3.4x Inbound Patient Inquiries · <2% No-Show Rate',
    },
    {
      id: 'hospital',
      name: 'Hospitals & Healthcare Centers',
      category: 'Multi-Specialty Hospitals & Healthcare Facilities',
      icon: Building2,
      tagline: 'Department routing AI, patient dispatch workflows, and institutional portals.',
      bottlenecks: 'Patient confusion navigating multi-department services, emergency call center overload, and disjointed doctor schedule management across specialties.',
      aiAutomations: [
        'Multi-Department Routing Intelligence: Guides patients to Cardiology, Pediatrics, Orthopedics, or Emergency care with conversational precision.',
        'Doctor On-Call Alerting Bot: Dispatches urgent consultation requests to on-duty specialists via automated secure notifications.',
        'Post-Discharge Follow-Up Sequences: Automated check-in messages monitoring patient recovery and scheduling follow-up lab tests.',
      ],
      softwareAndWeb: 'Institutional healthcare portal with sub-second doctor directory, department search, and verified Knowledge Graph signals.',
      adTransaction: 'Diagnostic test prepayments, automated billing statements, and insurance pre-verification document processing.',
      metrics: '45% Faster Patient Routing · 24/7 Dispatch Readiness',
    },
    {
      id: 'gym',
      name: 'Gyms & Fitness Centers',
      category: 'Fitness Clubs, CrossFit Boxes, MMA & Boutique Studios',
      icon: Dumbbell,
      tagline: 'Lead-to-trial conversion bots, class booking, and member retention engines.',
      bottlenecks: 'Ad leads go cold before staff can call them back, members silently drop off after 60 days, and front desks struggle with manual renewal tracking.',
      aiAutomations: [
        'Instant 30-Second Lead Qualifier: Triggers WhatsApp/SMS the moment an ad form is submitted, booking their free trial session instantly.',
        'Predictive Churn Detection: Identifies members who haven\'t scanned in for 10 days and triggers automated motivational re-engagement offers.',
        'Trainer & Class Booking Automation: Members book personal training or group classes via chat with zero front-desk intervention.',
      ],
      softwareAndWeb: 'Modern high-converting gym membership website with interactive timetable, member portal, and local search dominance.',
      adTransaction: 'Automated recurring gym membership billing, failed payment recovery sequences, and paid ad transaction attribution.',
      metrics: '+62% Trial Attendance · 35% Reduction in Member Churn',
    },
    {
      id: 'seo-marketing',
      name: 'SEO & Marketing Systems',
      category: 'Search Engine Optimization & Inbound Demand Generation',
      icon: Search,
      tagline: 'Programmatic search silos, technical schema, and organic demand engines.',
      bottlenecks: 'Relying on expensive paid ads with rising CPAs, poor organic Google rankings, and unindexable website templates.',
      aiAutomations: [
        'Autonomous SERP & Competitor Monitor: Alerts your team when competitors lose rankings or when new commercial keyword clusters emerge.',
        'Programmatic Search Architecture: Builds 50+ high-intent location or service pages structured perfectly for Google and AI Answer Engines.',
        'Content Decay Detection: Identifies published pages losing traffic and automatically suggests targeted entity updates.',
      ],
      softwareAndWeb: 'Sub-second Core Web Vitals (99+ score), semantic HTML5 DOM hierarchy, and comprehensive Schema.org JSON-LD entity graph.',
      adTransaction: 'Full-funnel Google/Meta ad attribution, CRM transaction sync, and automated conversion event reporting.',
      metrics: 'Page-1 Rankings for High-Intent Terms · +280% Organic Pipeline',
    },
    {
      id: 'software',
      name: 'Custom Software & Portals',
      category: 'Bespoke Internal Tools, Web Apps & Client Portals',
      icon: Code,
      tagline: 'Custom web software engineered to run your exact business workflows.',
      bottlenecks: 'Clunky spreadsheets, paying thousands monthly for 5 different SaaS tools that do not talk to each other, and manual copy-pasting.',
      aiAutomations: [
        'Intelligent Document & Data Processing: Extracts structured data from invoices, lab reports, or customer uploads automatically.',
        'Role-Based Operational Workflows: Custom approval flows, staff assignment bots, and automated task dispatching.',
        'Third-Party API Integrations: Syncs with WhatsApp Business API, Stripe, CRMs, EHR systems, and Google Workspace.',
      ],
      softwareAndWeb: 'Bespoke React, Next.js, Node.js, and TypeScript applications with bulletproof databases, clean APIs, and 100% source code ownership.',
      adTransaction: 'Custom payment gateways, subscription billing logic, enterprise invoicing, and transaction auditing.',
      metrics: '100% Code Ownership · Zero Monthly SaaS Seat Taxes',
    },
    {
      id: 'design',
      name: 'High-Craft Brand & UI/UX Design',
      category: 'Visual Identity, Design Systems & Product Interfaces',
      icon: Palette,
      tagline: 'Design systems with commercial weight, visual restraint, and clear conversion.',
      bottlenecks: 'Generic template look that looks like every competitor, clunky user interfaces causing high drop-offs, and disjointed brand touchpoints.',
      aiAutomations: [
        'Automated Asset Generation Pipelines: Generates social cards, brand banners, and multi-format collateral consistent with your design tokens.',
        'Conversion Heatmap & Interaction Analysis: Intelligent recommendations based on user drop-off points and friction areas.',
      ],
      softwareAndWeb: 'Architectural typographic systems (Newsreader + Plus Jakarta Sans), custom UI component library, and responsive design systems.',
      adTransaction: 'High-converting checkout UI, micro-copy engineered for trust, and friction-free payment flows.',
      metrics: '+45% Perceived Brand Value · Sub-second Visual Polish',
    },
    {
      id: 'websites',
      name: 'Flagship Website Engineering',
      category: 'Sub-Second React & Next.js Web Development',
      icon: Globe,
      tagline: 'Fast, unmistakable digital flagships engineered for conversions.',
      bottlenecks: 'Outdated WordPress sites with 6+ second load times, plugin vulnerability nightmares, and zero conversion optimization.',
      aiAutomations: [
        'Automated Uptime & Performance Monitoring: Continuous CWV checks ensuring your site never degrades below 95+ performance.',
        'AI-Driven Dynamic Form Personalization: Tailors inquiry questions based on user source and intent.',
      ],
      softwareAndWeb: 'Clean React/Next.js frontend, static site generation, global CDN distribution, and 99+ Core Web Vitals standard.',
      adTransaction: 'Seamless integration with Stripe, booking engines, and CRM pipelines for instant transaction confirmation.',
      metrics: '99+ Core Web Vitals · 0.8s Global LCP · 100% Code Handover',
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('agencies');
  const activeSolution = verticals.find((v) => v.id === activeTab) || verticals[0];
  const ActiveIcon = activeSolution.icon;

  return (
    <section id="verticals" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
              Tailored Engineering by Industry
            </span>
            <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-[#1C1A18] text-white rounded">
              8 Core Disciplines
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            AI Automations, Software, and Digital Flagships built for your exact vertical.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            We don’t just deliver static code. We engineer bespoke operational pipelines, automated workflows, and conversion architecture tailored specifically for agencies, healthcare, fitness, and growing businesses.
          </p>
        </div>

        {/* Vertical Selector Navigation Pills */}
        <div className="mt-12 flex flex-wrap gap-2 pb-2">
          {verticals.map((v) => {
            const Icon = v.icon;
            const isActive = activeTab === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveTab(v.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1C1A18] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#58544E] hover:text-[#1C1A18] border border-[#E8E4DC] hover:border-[#1C1A18]/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#3D1D18]'}`} />
                <span>{v.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Vertical Architecture Card */}
        <div className="mt-6 bg-white rounded-lg border border-[#E8E4DC] shadow-xs overflow-hidden">
          {/* Card Top Banner */}
          <div className="p-6 sm:p-8 bg-[#F4F0E8]/50 border-b border-[#E8E4DC] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg border border-[#E8E4DC] shadow-2xs">
                <ActiveIcon className="w-6 h-6 text-[#3D1D18]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                    {activeSolution.category}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white text-[#3D1D18] border border-[#E8E4DC]">
                    {activeSolution.metrics}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-[#1C1A18] mt-1 font-medium">
                  {activeSolution.name}: {activeSolution.tagline}
                </h3>
              </div>
            </div>

            <a
              href={BRAND.mailtoVertical(activeSolution.name)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 shadow-2xs"
            >
              <span>Inquire for {activeSolution.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Solution Breakdown Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Bottleneck vs AI Automations */}
            <div className="lg:col-span-7 space-y-6">
              {/* Problem / Bottlenecks */}
              <div className="p-4 rounded-md bg-[#FAF9F7] border border-[#E8E4DC]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                  Common Operational Friction Before Redwood House
                </span>
                <p className="text-sm text-[#58544E] leading-relaxed">
                  {activeSolution.bottlenecks}
                </p>
              </div>

              {/* What AI Automations We Build */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#3D1D18] font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#3D1D18]" />
                  Deployed AI Automations & Intelligent Agents
                </span>
                <div className="space-y-2.5">
                  {activeSolution.aiAutomations.map((auto, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-md border border-[#E8E4DC] bg-white hover:border-[#3D1D18]/30 transition-colors flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3D1D18] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#1C1A18] leading-relaxed">
                        {auto}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Software, Web & Ad/Transaction Architecture */}
            <div className="lg:col-span-5 space-y-6">
              {/* Software & Web Platform */}
              <div className="p-5 rounded-md border border-[#E8E4DC] bg-[#FAF8F3] space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-[#3D1D18]" />
                  Custom Software & Web Flagship
                </span>
                <p className="text-sm text-[#1C1A18] font-sans leading-relaxed">
                  {activeSolution.softwareAndWeb}
                </p>
              </div>

              {/* Ad & Transaction Systems */}
              <div className="p-5 rounded-md border border-[#E8E4DC] bg-[#FAF8F3] space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#3D1D18]" />
                  Ad & Transaction Automation
                </span>
                <p className="text-sm text-[#1C1A18] font-sans leading-relaxed">
                  {activeSolution.adTransaction}
                </p>
              </div>

              {/* Direct Action Link */}
              <div className="pt-2">
                <a
                  href={`${BRAND.mailtoGeneral}&body=Hello%20Redwood%20House,%0D%0A%0D%0AWe%20run%20a%20business%20in%20the%20${encodeURIComponent(activeSolution.name)}%20space.%20We%20want%20to%20implement%20AI%20automation,%20custom%20software,%20and%20web%20infrastructure...`}
                  className="w-full inline-flex items-center justify-between p-3.5 rounded-md border border-[#1C1A18] hover:bg-[#1C1A18] text-[#1C1A18] hover:text-white transition-all text-xs font-semibold group cursor-pointer"
                >
                  <span>Build This System For Your {activeSolution.name}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
