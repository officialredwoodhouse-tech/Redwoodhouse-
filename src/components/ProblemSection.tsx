import React from 'react';

export const ProblemSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Domain Expertise & Offer', role: 'You provide', desc: 'Your core business value, market reputation, service insights, and customer proof.' },
    { num: '02', title: 'Positioning & Messaging Spine', role: 'We architect', desc: 'Clarifying your category narrative, value proposition, and buyer conversion journey.' },
    { num: '03', title: 'Digital Identity & UI System', role: 'We design', desc: 'High-taste editorial typography, responsive layouts, and custom visual systems.' },
    { num: '04', title: 'Full-Stack Web Development', role: 'We engineer', desc: 'Clean, sub-second React/Next.js or custom web architecture with zero template bloat.' },
    { num: '05', title: 'Technical & Semantic SEO', role: 'We optimize', desc: 'Schema.org graphs, programmatic site structure, keyword intent mapping, and Core Web Vitals.' },
    { num: '06', title: 'Commanding Online Presence', role: 'Delivered', desc: 'A complete digital flagship and search engine asset that compounds inbound authority.' },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#F4F0E8]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            The Digital Credibility Gap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            You already have a great business. Your online presence should prove it.
          </h2>
          <p className="text-base sm:text-lg text-[#58544E] leading-relaxed">
            Most accomplished companies, founders, and specialists outgrow their digital footprint years before they fix it. They rely on word-of-mouth while living with an outdated website that loads slowly, ranks poorly on Google, and fails to articulate their true caliber.
          </p>
          <p className="text-base sm:text-lg text-[#1C1A18] font-medium leading-relaxed">
            The problem isn't the quality of your work. It's everything required to translate that authority into a high-performing website, cohesive online presence, and search engine dominance.
          </p>
        </div>

        {/* Visual Workflow Pipeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-white p-7 rounded-lg border border-[#E8E4DC] hover:border-[#3D1D18]/40 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F4F0E8] mb-4">
                  <span className="font-mono text-sm font-semibold text-[#3D1D18]">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#78716C]">
                    {step.role}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-medium text-[#1C1A18] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#58544E] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F4F0E8] flex items-center text-xs text-[#78716C]">
                <span>Architecture Layer {idx + 1} of 6</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Synthesis Callout */}
        <div className="mt-12 bg-white rounded-lg border border-[#E8E4DC] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xl font-serif text-[#1C1A18]">
              Web Engineering + Online Presence + SEO under one roof.
            </h4>
            <p className="text-sm text-[#58544E] leading-relaxed">
              Instead of hiring a disconnected web designer, a separate freelance developer, and a generic SEO agency that bolts keywords onto broken code, Redwood House builds your entire digital ecosystem as one unified architecture.
            </p>
          </div>
          <div className="shrink-0">
            <div className="text-xs uppercase tracking-wider font-mono text-[#78716C] mb-1">
              Performance Benchmark
            </div>
            <div className="text-2xl font-serif text-[#3D1D18]">
              99+ Core Web Vitals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
