import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What exactly does Redwood House do?',
      a: 'We just don\'t make websites. Redwood House is an AI automation, custom software, SEO marketing, brand design, and web development studio based in Chandigarh, India. We engineer intelligent systems that automate operations, triage inquiries, process transactions, and drive organic search growth for agencies, clinics, hospitals, gyms, and growing companies.',
    },
    {
      q: 'How does AI automation work for clinics and specialist healthcare practices?',
      a: 'We deploy 24/7 conversational triage agents on your website and WhatsApp that answer patient procedure questions, check real-time doctor availability, and book appointments instantly. We automate digital pre-visit intake forms and schedule smart reminders that reduce clinic no-show rates by up to 70%.',
    },
    {
      q: 'What automations do you engineer for gyms and fitness clubs?',
      a: 'When an interested prospect submits a Meta or Google Ad lead form, our AI agent contacts them on WhatsApp within 30 seconds to book their free trial session while their intent is at its peak. We also deploy predictive churn detection that alerts you when members miss 10 days of workouts and triggers automated re-engagement offers.',
    },
    {
      q: 'How do you streamline operations for marketing and creative agencies?',
      a: 'We build autonomous onboarding pipelines that auto-provision Slack channels, Google Drive asset folders, and intake briefs in under two minutes. Additionally, we deploy autonomous weekly reporting agents that aggregate Meta Ads, Google Ads, and SEO metrics to draft narrative executive briefings every Monday morning, saving account managers 15–20 hours per week.',
    },
    {
      q: 'What types of custom software and portals do you build?',
      a: 'We engineer bespoke client portals, internal staff operations software, role-based access dashboards, diagnostic calculators, and custom web applications using React, Next.js, TypeScript, and robust databases. You receive 100% source code ownership with zero monthly SaaS seat charges.',
    },
    {
      q: 'What is included in your SEO marketing and ad transaction architecture?',
      a: 'We engineer programmatic search silos targeting high-intent commercial keywords, comprehensive Schema.org JSON-LD entity graphs, sub-second Core Web Vitals (99+ score), and seamless ad transaction tracking that connects Google/Meta Ads directly to Stripe checkout and CRM revenue data.',
    },
    {
      q: 'Do you still build bespoke websites?',
      a: 'Yes, and we engineer them to the highest technical standard in the industry: sub-second global page loads, architectural editorial typography, responsive mobile-first layouts, and zero template or WordPress bloat. Your website serves as the fast, unmistakable digital flagship for your entire business.',
    },
    {
      q: 'Do we own the software code, AI workflows, and domain assets?',
      a: '100%. We do not lock you into proprietary platforms or hold your code hostage. Upon deployment, you receive complete ownership of your GitHub source repository, design system tokens, database schemas, and AI agent prompts.',
    },
    {
      q: 'How do we initiate a project or request an architecture audit?',
      a: 'Send an email to Officialredwoodhouse@gmail.com with an overview of your current business, your industry vertical (agency, clinic, hospital, gym, software, etc.), and what bottlenecks you want to solve. Our directors will review your inquiry and schedule an architectural roadmap session.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            Clear answers on AI automation, software, SEO, and web builds.
          </h2>
          <p className="text-base sm:text-lg text-[#58544E] max-w-xl mx-auto leading-relaxed">
            Straightforward details on our technology stack, industry automations, code ownership, and collaboration process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-[#E8E4DC] border-y border-[#E8E4DC]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D1D18] rounded-sm group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1C1A18] group-hover:text-[#3D1D18] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="text-[#78716C] group-hover:text-[#1C1A18] transition-colors shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 pr-8 text-sm sm:text-base text-[#58544E] font-sans leading-relaxed animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Note */}
        <div className="mt-12 text-center text-xs text-[#78716C] font-mono">
          Have a specific operational question? Email{' '}
          <a
            href={BRAND.mailtoGeneral}
            className="text-[#1C1A18] underline underline-offset-4 hover:text-[#3D1D18]"
          >
            {BRAND.email}
          </a>
        </div>
      </div>
    </section>
  );
};
