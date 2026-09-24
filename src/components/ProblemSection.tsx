import React from 'react';

export const ProblemSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Core Thesis', role: 'You provide', desc: 'Your proprietary principles, hard-won insights, and operational war stories.' },
    { num: '02', title: 'Positioning & Audience', role: 'We shape', desc: 'Determining exact reader intent, category definition, and commercial spine.' },
    { num: '03', title: 'Knowledge Extraction', role: 'We conduct', desc: 'Structured interviews, voice note synthesis, and framework unpacking.' },
    { num: '04', title: 'Manuscript Architecture', role: 'We draft', desc: 'Chapter-by-chapter developmental writing, pacing, and narrative rhythm.' },
    { num: '05', title: 'Editorial Polish', role: 'We refine', desc: 'Line editing, structural tightening, and voice calibration.' },
    { num: '06', title: 'Finished Book Asset', role: 'Delivered', desc: 'A publication-ready asset built to become your intellectual property.' },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#F4F0E8]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            The Structural Gap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            You already have the hard part.
          </h2>
          <p className="text-base sm:text-lg text-[#58544E] leading-relaxed">
            You've spent years learning the subject, developing the framework, making mistakes, discovering what works, and building opinions worth sharing.
          </p>
          <p className="text-base sm:text-lg text-[#1C1A18] font-medium leading-relaxed">
            The problem isn't knowledge. It's everything required to turn that knowledge into a coherent, finished book.
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
                <span>Phase {idx + 1} of 6</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Synthesis Callout */}
        <div className="mt-12 bg-white rounded-lg border border-[#E8E4DC] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xl font-serif text-[#1C1A18]">
              One engagement. Zero management fatigue.
            </h4>
            <p className="text-sm text-[#58544E] leading-relaxed">
              We compress 250+ hours of outlining, drafting, editing, and typographic design into a streamlined editorial partnership. You stay the subject-matter authority; we do the heavy lifting.
            </p>
          </div>
          <div className="shrink-0">
            <div className="text-xs uppercase tracking-wider font-mono text-[#78716C] mb-1">
              Client Time Investment
            </div>
            <div className="text-2xl font-serif text-[#3D1D18]">
              ~10–12 Hours Total
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
