import React, { useState } from 'react';
import {
  Building2,
  Stethoscope,
  Building,
  Dumbbell,
  Search,
  Code2,
  Palette,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VerticalDetail {
  id: string;
  name: string;
  label: string;
  icon: React.ElementType;
  subtitle: string;
  challenge: string;
  solution: string;
  automationDeliverables: string[];
  metrics: string;
}

export const FitSection: React.FC = () => {
  const [selectedVertical, setSelectedVertical] = useState<string>('agencies');

  const badges = [
    'Customer conversations',
    'Intake and bookings',
    'Reminders and follow-up',
    'Reporting and growth',
  ];

  const verticals: VerticalDetail[] = [
    {
      id: 'agencies',
      name: 'Agencies',
      label: 'Growth & Creative Agencies',
      icon: Building2,
      subtitle: 'Client Onboarding, Performance Reporting & Attribution',
      challenge: 'Account managers drown in manual onboarding forms, client status emails, and Monday morning reporting spreadsheet compilation.',
      solution: 'Autonomous onboarding pipeline that provisions Slack/Drive/ClickUp channels in 90 seconds, plus automated weekly executive report generation.',
      automationDeliverables: [
        'Instant multi-channel client intake & contract sync',
        'Monday 8:00 AM automated executive reporting agent',
        'Ad spend to Stripe transaction attribution pipeline',
      ],
      metrics: 'Eliminates 18+ operator hours/week per account team',
    },
    {
      id: 'clinics',
      name: 'Clinics',
      label: 'Specialty & Private Practices',
      icon: Stethoscope,
      subtitle: '24/7 Patient Triage & Frictionless Booking',
      challenge: 'Front desk overwhelmed with repetitive scheduling phone calls, inquiries after hours, and painful 28% patient no-show rates.',
      solution: 'Conversational clinical triage assistant on web and WhatsApp that qualifies symptoms, reserves doctor slots, and sends smart preparation reminders.',
      automationDeliverables: [
        '24/7 symptom & intake qualification across channels',
        'Direct calendar EHR / Practice Management synchronization',
        'Automated 48h/2h WhatsApp pre-visit reminders & reschedule bot',
      ],
      metrics: 'Reduces appointment no-shows from 28% down to under 5%',
    },
    {
      id: 'hospitals',
      name: 'Hospitals',
      label: 'Multi-Department Health Systems',
      icon: Building,
      subtitle: 'Department Intake, Doctor Dispatch & Records Flow',
      challenge: 'Siloed departments cause endless phone hold times, lost patient paperwork, and high friction in specialist referrals.',
      solution: 'Unified operating layer routing emergency vs outpatient triage, automated document digitization, and cross-department notification flows.',
      automationDeliverables: [
        'Intelligent multi-specialty triage & department routing',
        'Automated consent & medical insurance document processing',
        'Doctor on-call automated SMS / alert dispatching',
      ],
      metrics: 'Zero lost intakes and 4.2x faster emergency triage routing',
    },
    {
      id: 'gyms',
      name: 'Gyms & Fitness',
      label: 'Boutique Studios & Gym Chains',
      icon: Dumbbell,
      subtitle: 'Lead-to-Trial Booking & Membership Retention',
      challenge: 'Instagram and Meta ad leads go cold because front desk staff takes 4+ hours to respond; high 90-day member cancellation drop-off.',
      solution: 'Sub-60-second AI conversational lead engagement that locks in free trial visits, followed by automated milestone check-in journeys.',
      automationDeliverables: [
        'Instant 45-second conversational WhatsApp lead booking',
        'Automated class booking, trainer scheduling & QR check-in sync',
        'Churn-risk detection & proactive member win-back sequences',
      ],
      metrics: 'Boosts ad lead-to-trial conversion by +140%',
    },
    {
      id: 'seo-marketing',
      name: 'SEO & Marketing',
      label: 'SEO & Growth Systems',
      icon: Search,
      subtitle: 'Programmatic SEO & Ad-to-Transaction Pipelines',
      challenge: 'Stale static sites fail to capture high-intent long-tail search traffic and lack transparent tracking between paid ads and final cash revenue.',
      solution: 'Engineered programmatic SEO topic clusters with structured JSON-LD schemas, combined with deterministic ad-to-transaction tracking.',
      automationDeliverables: [
        'Programmatic location & vertical landing page generation',
        'Automated Schema.org semantic data and Core Web Vitals optimization',
        'Full-funnel ad click to bank deposit tracking dashboard',
      ],
      metrics: 'Dominates organic search rank with sub-1.1s page speeds',
    },
    {
      id: 'custom-software',
      name: 'Custom Software',
      label: 'Internal Tools & Portals',
      icon: Code2,
      subtitle: 'Purpose-Built Operational Software',
      challenge: 'Off-the-shelf SaaS software charges $40/user/month for bloated features that still do not match the company’s real day-to-day workflow.',
      solution: 'Bespoke web applications, administrative portals, and automation backends built specifically for your team’s operating rhythm.',
      automationDeliverables: [
        'Role-based operator dashboards and client portals',
        'Custom database architectures with zero vendor lock-in',
        'Webhook-driven automations connected to your existing ERP/CRM',
      ],
      metrics: '100% custom fit with zero recurring per-seat SaaS tax',
    },
    {
      id: 'design',
      name: 'Design & UI/UX',
      label: 'High-Craft Systems',
      icon: Palette,
      subtitle: 'Calm, Intuitive Human Interfaces',
      challenge: 'Cluttered, noisy dashboards confuse staff and cause errors; generic website templates damage enterprise credibility.',
      solution: 'Understated, functional, and editorial digital craft that feels calm to busy operators and instills immediate confidence in clients.',
      automationDeliverables: [
        'Complete typographic design systems and component libraries',
        'Clutter-free, high-speed UX engineered for daily operation',
        'Enterprise brand identity & digital design collateral',
      ],
      metrics: 'Measurably faster operator task completion and premium market trust',
    },
    {
      id: 'websites',
      name: 'Websites',
      label: 'Websites Built the Professional Way',
      icon: Globe,
      subtitle: 'Engineered from Code · Digital Flagships with Built-in Automation',
      challenge: 'Bloated WordPress or cookie-cutter template sites that load in 6 seconds, break on mobile, look amateurish, and leak qualified customer leads.',
      solution: 'We make websites the professional way: Handcrafted with modern React & TypeScript, sub-second speeds, bespoke typography, zero template bloat, and automated CRM conversion pipelines.',
      automationDeliverables: [
        'Custom engineering from clean code — zero template slop or drag-and-drop bloat',
        'Sub-1.0s Core Web Vitals with 100/100 performance, accessibility & SEO scores',
        'Embedded triage & conversion mechanisms wired directly to your workflows',
        'Direct automated hooks into your CRM, database, scheduling, and notifications',
      ],
      metrics: '100% bespoke engineering · Sub-second load times · 3.8x lead momentum',
    },
  ];

  const current = verticals.find((v) => v.id === selectedVertical) || verticals[0];
  const CurrentIcon = current.icon;

  return (
    <section id="fit" className="scroll-mt-20 border-b border-[#DDD7CB] bg-[#EBE7DE]/40 py-section overflow-hidden">
      <div className="container-page">
        {/* Core Headline Grid with Framer Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20"
        >
          <p className="text-eyebrow">Built for busy operators</p>
          <div>
            <h2 className="max-w-3xl font-display text-h2 text-[#0A111D]">
              From agencies and clinics to hospitals, gyms, and growing companies.
            </h2>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-small text-[#6B665E]">
              {badges.map((badge, idx) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  className="inline-flex items-center gap-2"
                >
                  <span className="size-1.5 bg-[#9B111E] shrink-0" aria-hidden="true" />
                  <span>{badge}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive Industry Deep Dive Selector with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 border border-[#DDD7CB] bg-white shadow-sm"
        >
          {/* Top Tabs */}
          <div className="flex overflow-x-auto border-b border-[#DDD7CB] bg-[#F4F1EB] scrollbar-none">
            {verticals.map((vert) => {
              const Icon = vert.icon;
              const isSelected = vert.id === selectedVertical;
              return (
                <button
                  key={vert.id}
                  onClick={() => setSelectedVertical(vert.id)}
                  className={`flex items-center gap-2 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition-colors border-r border-[#DDD7CB] cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#0A192F] border-b-2 border-b-[#9B111E] shadow-2xs font-bold'
                      : 'text-[#6B665E] hover:text-[#0A111D] hover:bg-[#E6E1D8]/50'
                  }`}
                >
                  <Icon className={`size-4 ${isSelected ? 'text-[#9B111E]' : 'text-[#6B665E]'}`} />
                  <span>{vert.name}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel with Crossfade Motion */}
          <div className="p-7 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVertical}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start"
              >
                {/* Left details */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center border border-[#0A192F]/20 bg-[#0A192F]/5 text-[#0A192F]">
                      <CurrentIcon className="size-5" />
                    </div>
                    <div>
                      <span className="text-caption uppercase tracking-[0.16em] text-[#9B111E] font-semibold">
                        {current.label}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-[#0A111D]">
                        {current.subtitle}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="border-l-2 border-[#DDD7CB] pl-4">
                      <p className="text-caption font-semibold uppercase tracking-wider text-[#6B665E]">
                        The Operational Friction
                      </p>
                      <p className="mt-1 text-sm text-[#6B665E] leading-relaxed">
                        {current.challenge}
                      </p>
                    </div>

                    <div className="border-l-2 border-[#9B111E] pl-4">
                      <p className="text-caption font-semibold uppercase tracking-wider text-[#9B111E]">
                        The Redwood House System
                      </p>
                      <p className="mt-1 text-sm text-[#0A111D] font-medium leading-relaxed">
                        {current.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#DDD7CB]">
                    <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[#0A111D] mb-3">
                      Engineered Automation Capabilities:
                    </p>
                    <ul className="space-y-2.5">
                      {current.automationDeliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#0A111D]">
                          <CheckCircle2 className="size-4 text-[#9B111E] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Box: Live Pipeline Preview */}
                <div className="bg-[#EBE7DE] border border-[#DDD7CB] p-6 sm:p-7">
                  <div className="flex items-center justify-between pb-4 border-b border-[#DDD7CB]">
                    <span className="text-caption uppercase tracking-[0.16em] font-semibold text-[#9B111E] flex items-center gap-2">
                      <Zap className="size-4 text-[#9B111E]" />
                      <span>Real-World Impact</span>
                    </span>
                    <span className="text-xs font-mono text-[#6B665E]">System Verified</span>
                  </div>

                  <div className="my-6">
                    <p className="text-caption uppercase tracking-wider text-[#6B665E] mb-2 font-mono">
                      Measured Outcome
                    </p>
                    <div className="bg-white border border-[#DDD7CB] p-4 font-display text-lg font-semibold text-[#0A111D]">
                      "{current.metrics}"
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-[#6B665E] border-t border-[#DDD7CB] pt-4 font-mono">
                    <div className="flex justify-between">
                      <span>Implementation:</span>
                      <span className="text-[#0A111D] font-semibold">Turnkey & Managed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Integration:</span>
                      <span className="text-[#0A111D] font-semibold">Zero Workflow Interruption</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Data Privacy:</span>
                      <span className="text-[#0A111D] font-semibold">Client Owned & Encrypted</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DDD7CB]">
                    <a
                      href="#contact"
                      className="flex items-center justify-between w-full bg-[#0A192F] hover:bg-[#172A45] text-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors group"
                    >
                      <span>Deploy for {current.name}</span>
                      <ArrowUpRight className="size-4 text-[#BA1A24] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
