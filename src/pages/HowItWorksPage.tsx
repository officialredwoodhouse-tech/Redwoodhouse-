import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface HowItWorksPageProps {
  onBack: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBack }) => {
  const steps = [
    {
      num: '01',
      title: 'Discover & Thesis Definition',
      weeks: 'Phase 1 · Weeks 1–2',
      headline: 'Extracting what you already know without asking you to write.',
      description: 'We conduct 4 to 5 recorded, highly structured conversation sessions. We don\'t ask for rough drafts or essays; our editorial directors probe your frameworks, stories, client diagnostic notes, and counter-intuitive insights.',
      clientAction: 'Participate in 4–5 recorded conversation sessions (approx. 5–6 hours total).',
      deliverable: 'Core Thesis Dossier, reader persona definition, and strategic positioning manifesto.',
    },
    {
      num: '02',
      title: 'Book Blueprint & Chapter Architecture',
      weeks: 'Phase 2 · Weeks 3–4',
      headline: 'Turning scattered thoughts into an undeniable structural spine.',
      description: 'A great book lives or dies by its architecture. We synthesize the recorded transcripts into a comprehensive chapter-by-chapter blueprint, complete with case study distribution, thesis progressions, and practical models.',
      clientAction: 'One 60-minute review session to calibrate chapter order and give blueprint approval.',
      deliverable: 'Complete 15-to-20 page Book Blueprint detailing every chapter\'s argument, stories, and takeaways.',
    },
    {
      num: '03',
      title: 'Manuscript Development & Drafting',
      weeks: 'Phase 3 · Weeks 5–10',
      headline: 'Our studio drafts the full manuscript from zero to one.',
      description: 'This is where Redwood House bears the heavy operational lift. Our writers draft every chapter in your voice, translating complex domain principles into lucid, engaging, and memorable prose. We pace each chapter for effortless reader momentum.',
      clientAction: 'Zero administrative management. You focus entirely on your business while we write.',
      deliverable: 'Complete, unabridged developmental first draft of the entire book.',
    },
    {
      num: '04',
      title: 'Editorial Calibration & Refinement',
      weeks: 'Phase 4 · Weeks 11–13',
      headline: 'Line-by-line editorial tightening, fact checking, and voice tuning.',
      description: 'The manuscript undergoes developmental editing, line editing, and copy polishing. We eliminate fluff, calibrate cadence, verify citations and claims, and ensure your authentic perspective shines throughout every passage.',
      clientAction: 'Structured milestone review of the draft chapters with direct inline comments or verbal feedback.',
      deliverable: 'Polished, publication-ready manuscript with zero developmental gaps.',
    },
    {
      num: '05',
      title: 'Packaging & Asset Handover',
      weeks: 'Phase 5 · Weeks 14–16',
      headline: 'Delivered as a permanent asset you can build your business around.',
      description: 'We typeset the interior typography to fine-art publishing standards, format digital and print-ready master files, and deliver the complete book package. It becomes your intellectual property to rebrand, adapt, and distribute.',
      clientAction: 'Final sign-off and receipt of master book archives.',
      deliverable: 'Print-ready interior typeset, digital eBook masters, and complete intellectual asset rights.',
    },
  ];

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
            Production Framework · Redwood House
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 border-b border-[#E8E4DC]">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
            The Redwood House Process
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.08]">
            From specialist knowledge to finished book.
          </h1>
          <p className="text-lg sm:text-xl text-[#58544E] leading-relaxed">
            Our five-phase framework is designed to extract, write, and produce a finished, published-grade book with approximately 10 to 12 hours of total client conversation time.
          </p>
        </div>

        {/* Quick Operational Metrics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E8E4DC]">
          <div className="p-6 bg-white rounded-lg border border-[#E8E4DC]">
            <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block">Your Time Commitment</span>
            <div className="text-2xl font-serif text-[#3D1D18] mt-1 font-medium">~10–12 Hours</div>
            <p className="text-xs text-[#58544E] mt-1">Focused interviews and milestone reviews; no draft writing.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-[#E8E4DC]">
            <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block">Our Production Hours</span>
            <div className="text-2xl font-serif text-[#1C1A18] mt-1 font-medium">250+ Hours</div>
            <p className="text-xs text-[#58544E] mt-1">Research, structuring, drafting, line editing, and typesetting.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-[#E8E4DC]">
            <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block">Engagement Model</span>
            <div className="text-2xl font-serif text-[#1C1A18] mt-1 font-medium">One-Time Fee</div>
            <p className="text-xs text-[#58544E] mt-1">Single defined engagement; no ongoing retainers.</p>
          </div>
        </div>
      </div>

      {/* Detailed 5-Step Breakdown */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-b border-[#E8E4DC]">
        <div className="space-y-12">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-10 shadow-xs hover:border-[#3D1D18]/50 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number & Phase */}
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl sm:text-4xl font-mono font-semibold text-[#3D1D18]">
                      {st.num}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                      / Phase
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#1C1A18] font-medium mb-1">
                    {st.title}
                  </h3>
                  <span className="text-xs font-mono text-[#78716C] block">
                    {st.weeks}
                  </span>
                </div>

                {/* Narrative & Details */}
                <div className="lg:col-span-5 space-y-3">
                  <h4 className="text-base font-serif italic text-[#1C1A18]">
                    {st.headline}
                  </h4>
                  <p className="text-sm text-[#58544E] leading-relaxed">
                    {st.description}
                  </p>
                </div>

                {/* Scope & Deliverable Column */}
                <div className="lg:col-span-4 bg-[#FAF8F3] p-5 rounded-md border border-[#E8E4DC] space-y-3 text-xs">
                  <div>
                    <span className="font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                      What is asked of you:
                    </span>
                    <p className="text-[#1C1A18] font-medium">
                      {st.clientAction}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#E8E4DC]">
                    <span className="font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                      Milestone deliverable:
                    </span>
                    <p className="text-[#3D1D18] font-serif font-medium">
                      {st.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="bg-[#FAF8F3] rounded-lg border border-[#E8E4DC] p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
            Ready to Begin
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A18]">
            Let's review your book idea.
          </h2>
          <p className="text-sm sm:text-base text-[#58544E] leading-relaxed">
            Send an introductory email to our studio in Chandigarh. Tell us about your field of expertise, what problem you want to address, and who should read it.
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
          <div className="text-xs text-[#78716C] font-mono">
            {BRAND.email}
          </div>
        </div>
      </div>
    </div>
  );
};
