import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is Redwood House for?',
      a: 'We work with founders, operators, consultants, researchers, specialists, executives, and creators who possess valuable proprietary knowledge, but lack the bandwidth to spend 6–12 months drafting and polishing a full-length book from scratch.',
    },
    {
      q: 'What does the one-time engagement include?',
      a: 'The engagement covers the complete book lifecycle: strategy and positioning, structured knowledge extraction sessions, full manuscript development, developmental editing, line editing, interior book typography specifications, and delivery of a publication-ready master asset.',
    },
    {
      q: 'How involved do I need to be as the client?',
      a: 'Your active time commitment is concentrated in approximately 10 to 12 hours of structured, recorded conversation sessions spaced over the early weeks of the engagement. We handle the synthesis, drafting, structural architecture, and line polish. You review chapter milestones without needing to manage project admin.',
    },
    {
      q: 'How do you capture my expertise and authentic voice?',
      a: 'We use structured interview prompts that excavate not just high-level principles, but the specific stories, diagnostic frameworks, trade-offs, and metaphors you naturally use with clients or teams. We analyze your natural cadence so the finished prose reads unmistakably like you at your sharpest.',
    },
    {
      q: 'Can I use, rebrand, or adapt the finished book?',
      a: 'Yes. The final asset is delivered as your intellectual property to build around. You can adapt chapters into client onboarding materials, keynotes, employee operating manuals, or commercial editions under your name.',
    },
    {
      q: 'Do you work under confidentiality and NDAs?',
      a: 'Yes. Strict non-disclosure agreements are standard. As a private ghostwriting studio, we operate with complete discretion. We never disclose client identities or book titles without explicit prior consent.',
    },
    {
      q: 'Where is Redwood House located?',
      a: 'Redwood House is based in Chandigarh, India. We collaborate with clients globally via structured virtual sessions and asynchronous review workflows.',
    },
    {
      q: 'How do I initiate a conversation about my book?',
      a: 'Simply send an introductory email to Officialredwoodhouse@gmail.com outlining your subject matter, your target reader, and any existing materials you have. We will review your thesis and reply directly.',
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
            Clear answers on the engagement.
          </h2>
          <p className="text-base sm:text-lg text-[#58544E] max-w-xl mx-auto leading-relaxed">
            Straightforward details on process, intellectual property, time commitment, and confidentiality.
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
          <span>Have a specific subject or timeline requirement? </span>
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
