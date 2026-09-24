import React from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface TantrumPlaybookPageProps {
  onBack: () => void;
}

export const TantrumPlaybookPage: React.FC<TantrumPlaybookPageProps> = ({ onBack }) => {
  const emotionalStates = [
    {
      state: 'Happy',
      tagline: 'Light & Easy',
      description: 'How to harness high-energy joy and gently transition before the crash.',
      phrases: ['"I see how fast your body wants to go right now. Let\'s bring your feet to the earth."'],
    },
    {
      state: 'Overwhelmed',
      tagline: 'Big Feelings',
      description: 'Immediate sensory grounding when sound, crowd, or sudden frustration triggers meltdown.',
      phrases: ['"You are safe. I will keep your body safe while you feel this."'],
    },
    {
      state: 'Anxious',
      tagline: 'Worried & Uncertain',
      description: 'Disarming separation dread, transitional fears, and unpredictability panic.',
      phrases: ['"You don\'t have to know what happens next. My hand is right here."'],
    },
    {
      state: 'Tired',
      tagline: 'Drained & Overstimulated',
      description: 'Navigating the end-of-day collapse without bargaining, threats, or counter-screaming.',
      phrases: ['"Your body is working so hard today. We can let the heavy day rest now."'],
    },
    {
      state: 'Sad',
      tagline: 'Down & Blue',
      description: 'Holding space for grief, rejection, and quiet tears without rushing to cheer them up.',
      phrases: ['"It hurts when things don\'t go the way you hoped. You can cry as long as you need."'],
    },
    {
      state: 'Sensitive',
      tagline: 'Needing Extra Love & Patience',
      description: 'Techniques for highly receptive children who absorb parental anxiety and environmental friction.',
      phrases: ['"I\'m listening with quiet ears. Take all the time you need."'],
    },
  ];

  const chapters = [
    {
      number: '01',
      title: 'The Neurological Storm',
      summary: 'Why toddlers literally cannot hear logic or rational explanations during limbic hijacking.',
    },
    {
      number: '02',
      title: 'The Six Emotional Weather States',
      summary: 'Diagnostic triage: identifying the exact state your child is in before speaking a word.',
    },
    {
      number: '03',
      title: 'Emergency Scripts & Non-Verbal Postures',
      summary: 'Field-tested phrases, low-center postures, and eye-level grounding techniques.',
    },
    {
      number: '04',
      title: 'Meltdowns in Public Spaces',
      summary: 'How to manage grocery stores, airport terminals, and family dinners with zero shame.',
    },
    {
      number: '05',
      title: 'Parental Co-Regulation Protocols',
      summary: 'How to calm your own nervous system when toddler screaming triggers fight-or-flight.',
    },
    {
      number: '06',
      title: 'Bedtime & Repair Reconnection',
      summary: 'The crucial window after sleep: transforming daytime conflict into lasting emotional trust.',
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
            Published Asset · Redwood House
          </div>
        </div>
      </div>

      {/* Main Header / Book Showcase */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 border-b border-[#E8E4DC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Cover Display */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#D5CFC5] shadow-xl bg-white sticky top-36">
              <img
                src={ASSETS.tantrumPlaybookCover}
                alt="The Tantrum Playbook cover published by Redwood House"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-[#E8E4DC] text-center text-xs text-[#78716C]">
                Official Redwood House Production · Printed & Digital Editions
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78716C]">
                <span>Child Development</span>
                <span aria-hidden="true">·</span>
                <span>Parenting Manual</span>
                <span aria-hidden="true">·</span>
                <span>Field Script System</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.08]">
                The Tantrum Playbook
              </h1>
              <p className="text-xl sm:text-2xl font-serif italic text-[#3D1D18] leading-snug">
                What to Say, What to Do, and How to Stay Calm Through Your Toddler's Biggest Emotions
              </p>
            </div>

            {/* Core Premise */}
            <div className="space-y-4 text-base text-[#4A4641] leading-relaxed">
              <p>
                Every parent knows the paralyzing vertigo of a public meltdown: the high-pitched screaming, the clenched fists, the sudden thrashing on the floor, and the judgmental glances of strangers.
              </p>
              <p>
                In that critical moment, parents do not have the cognitive bandwidth to recall abstract behavioral psychology. They need concrete, muscle-memory scripts and physical cues that defuse dysregulation without resorting to bribes, threats, or punitive timeouts.
              </p>
              <p>
                Redwood House produced <strong className="text-[#1C1A18]">The Tantrum Playbook</strong> to bridge clinical childhood emotion research and the messy realities of daily family life.
              </p>
            </div>

            {/* Prominent Reader Quote */}
            <div className="p-6 bg-white border-l-3 border-[#3D1D18] rounded-r-md shadow-xs space-y-2">
              <p className="text-lg font-serif italic text-[#1C1A18]">
                "You will read this book when your child is asleep."
              </p>
              <p className="text-sm font-sans text-[#58544E]">
                After the tantrum comes calm. After the storm comes connection.
              </p>
            </div>

            {/* Email Request CTA Box */}
            <div className="p-8 bg-[#FAF8F3] rounded-lg border border-[#E8E4DC] space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                  Direct Inquiries & Asset Access
                </span>
                <h3 className="text-xl font-serif text-[#1C1A18]">
                  Request The Tantrum Playbook
                </h3>
                <p className="text-xs sm:text-sm text-[#58544E]">
                  To request reading copies, licensing information, or editorial rights, send an email directly to our Chandigarh desk with the subject <em>'The Tantrum Playbook'</em>.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={BRAND.mailtoPlaybook}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  <span>Request The Tantrum Playbook via Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D6D3D1]" />
                </a>
              </div>
              <div className="text-[11px] font-mono text-[#78716C]">
                Official Address: {BRAND.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 6 Emotional States In-Depth */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-b border-[#E8E4DC]">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
            Behavioral Archetypes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A18]">
            The Six Emotional Weather States
          </h2>
          <p className="text-base text-[#58544E]">
            Rather than treating all tantrums as uniform defiance, the playbook categorizes dysregulation by neurological root state:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emotionalStates.map((item) => (
            <div
              key={item.state}
              className="bg-white p-7 rounded-lg border border-[#E8E4DC] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#F4F0E8] mb-3">
                  <h3 className="text-xl font-serif font-medium text-[#1C1A18]">
                    {item.state}
                  </h3>
                  <span className="text-xs font-sans text-[#78716C] italic">
                    {item.tagline}
                  </span>
                </div>
                <p className="text-sm text-[#58544E] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#F4F0E8] bg-[#FAF8F3] -mx-7 -mb-7 p-5 rounded-b-lg">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] block mb-1">
                  Sample Field Script
                </span>
                <p className="text-xs font-serif italic text-[#3D1D18]">
                  {item.phrases[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter Blueprint / Architecture */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-b border-[#E8E4DC] bg-[#FAF8F3]/60">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
            Table of Contents
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A18]">
            Chapter Architecture
          </h2>
          <p className="text-base text-[#58544E]">
            Structured for fast reference on nights when calm has returned and parents are preparing for tomorrow:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.map((ch) => (
            <div
              key={ch.number}
              className="bg-white p-6 rounded-lg border border-[#E8E4DC] flex items-start gap-4"
            >
              <span className="font-mono text-xl font-semibold text-[#3D1D18] shrink-0">
                {ch.number}
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-serif font-medium text-[#1C1A18]">
                  {ch.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                  {ch.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Intended Reader Profile */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                Intended Reader
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1A18]">
                Who this book was built for.
              </h3>
              <p className="text-sm sm:text-base text-[#58544E] leading-relaxed">
                Parents of children ages 18 months to 6 years, foster caregivers, Montessori educators, pediatric clinicians, and grandparents seeking consistent, non-punitive regulation tools.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#1C1A18]">
                <span className="bg-[#FAF8F3] px-3 py-1.5 border border-[#E8E4DC] rounded-sm">Toddler Parents</span>
                <span className="bg-[#FAF8F3] px-3 py-1.5 border border-[#E8E4DC] rounded-sm">Early Childhood Educators</span>
                <span className="bg-[#FAF8F3] px-3 py-1.5 border border-[#E8E4DC] rounded-sm">Pediatric Specialists</span>
                <span className="bg-[#FAF8F3] px-3 py-1.5 border border-[#E8E4DC] rounded-sm">Family Counselors</span>
              </div>
            </div>

            <div className="lg:col-span-5 text-left lg:text-right space-y-3">
              <span className="text-xs font-mono uppercase text-[#78716C] block">
                Publisher
              </span>
              <div className="font-serif text-xl text-[#1C1A18]">
                Redwood House
              </div>
              <div className="text-xs text-[#78716C]">
                Chandigarh, India · Private Editorial Studio
              </div>
              <div className="pt-2">
                <a
                  href={BRAND.mailtoPlaybook}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  <span>Request The Tantrum Playbook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
