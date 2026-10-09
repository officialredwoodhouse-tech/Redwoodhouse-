import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What does Redwood House do?',
      a: 'Redwood House is a private website development, online presence creation, and technical SEO studio. We design and engineer bespoke, fast-loading websites, craft cohesive digital brand ecosystems, and build search engine optimization architectures that drive compounding organic traffic and client inquiries.',
    },
    {
      q: 'Why combine website development and SEO in one studio?',
      a: 'When web design and SEO are separated, designers often build heavy, unindexable pages with poor heading hierarchies, forcing SEO agencies to patch broken foundations later. By engineering your website, copy architecture, Schema.org data, and Core Web Vitals together from day one, your site launches ready to rank and convert.',
    },
    {
      q: 'What technologies and platforms do you build with?',
      a: 'We specialize in modern, high-performance web stacks including React, Next.js, TypeScript, Tailwind CSS, headless CMS architectures, and custom e-commerce or booking integrations. Every build is tailored for sub-second speed, security, and effortless content scaling.',
    },
    {
      q: 'Can you overhaul our existing website without losing our current search rankings?',
      a: 'Yes. Every redesign or migration includes a comprehensive URL mapping protocol, 301 redirect matrix, canonical preservation, and backlink equity audit so you retain existing search authority while unlocking new keyword growth.',
    },
    {
      q: 'What is included in your Online Presence Creation service?',
      a: 'Beyond your core website, we align your entire digital footprint: brand positioning, editorial copywriting, Google Business Profile & Knowledge Graph signals, OpenGraph social sharing cards, landing page funnels, and authoritative domain presence so prospects see a unified, high-trust brand everywhere they look.',
    },
    {
      q: 'Do we own the code, domain, and SEO assets upon completion?',
      a: '100%. Unlike agencies that lease websites or lock you into proprietary page builders, you receive complete ownership of your source code repository, design system, content, analytics, and search console properties.',
    },
    {
      q: 'Where is Redwood House based, and do you work with international clients?',
      a: 'Redwood House is based in Chandigarh, India, and collaborates with founders, businesses, and specialist practices across North America, Europe, Asia-Pacific, and India through structured async milestones and live strategy sessions.',
    },
    {
      q: 'How do we start a project or request an audit?',
      a: 'Send an email to Officialredwoodhouse@gmail.com with your current website URL (if applicable), your business goals, and your target timeline. Our directors will review your current online footprint and reply with an initial architectural assessment.',
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
            Clear answers on web builds, online presence, and SEO.
          </h2>
          <p className="text-base sm:text-lg text-[#58544E] max-w-xl mx-auto leading-relaxed">
            Straightforward details on our engineering stack, search optimization methodology, code ownership, and collaboration workflow.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-[#E8E4DC] border-y border-[#E8E4DC]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left group focus-visible:outline-none cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-serif text-[#1C1A18] group-hover:text-[#3D1D18] transition-colors pr-6">
                    {faq.q}
                  </span>
                  <span className="text-[#78716C] group-hover:text-[#1C1A18] shrink-0 p-1">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-4 pr-12 text-sm sm:text-base text-[#58544E] leading-relaxed font-sans animate-in fade-in duration-150">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Question Callout */}
        <div className="mt-12 text-center text-sm text-[#78716C]">
          <span>Have a specific technical requirement or SEO target? </span>
          <a
            href={BRAND.mailtoGeneral}
            className="text-[#1C1A18] font-medium underline underline-offset-4 hover:text-[#3D1D18]"
          >
            Email us directly at {BRAND.email}
          </a>
        </div>
      </div>
    </section>
  );
};
