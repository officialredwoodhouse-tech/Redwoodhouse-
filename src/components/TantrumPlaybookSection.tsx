import React from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowUpRight } from 'lucide-react';

interface TantrumPlaybookSectionProps {
  onViewDedicatedPage: () => void;
}

export const TantrumPlaybookSection: React.FC<TantrumPlaybookSectionProps> = ({
  onViewDedicatedPage,
}) => {
  const archetypes = [
    { name: 'Happy', subtitle: 'Light & Easy', note: 'Grounding joyful energy into calm transitions.' },
    { name: 'Overwhelmed', subtitle: 'Big Feelings', note: 'De-escalating sensory storms with minimal speech.' },
    { name: 'Anxious', subtitle: 'Worried & Uncertain', note: 'Rebuilding physical safety and predictability.' },
    { name: 'Tired', subtitle: 'Drained & Overstimulated', note: 'Softening friction and facilitating sleep.' },
    { name: 'Sad', subtitle: 'Down & Blue', note: 'Validating grief and quiet isolation.' },
    { name: 'Sensitive', subtitle: 'Needing Extra Love & Patience', note: 'Nurturing deep emotional receptors.' },
  ];

  return (
    <section id="tantrum-playbook" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Pre-header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DC] mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
              Current Redwood House Production
            </span>
            <span aria-hidden="true" className="text-[#A8A29E]">·</span>
            <span className="text-xs font-sans text-[#3D1D18] font-medium">Real Product Case</span>
          </div>
          <button
            onClick={onViewDedicatedPage}
            className="text-xs font-medium text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4 cursor-pointer hidden sm:inline-flex items-center gap-1"
          >
            <span>View Dedicated Book Page</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Main Grid: Cover Showcase + Book Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Book Visual Representation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-[#D5CFC5] shadow-lg bg-white group">
              <img
                src={ASSETS.tantrumPlaybookCover}
                alt="The Tantrum Playbook published by Redwood House"
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Visual Provenance & Production Details */}
            <div className="p-4 bg-white rounded-md border border-[#E8E4DC] text-xs text-[#58544E] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#78716C]">Title</span>
                <span className="font-serif font-medium text-[#1C1A18]">The Tantrum Playbook</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78716C]">Editorial House</span>
                <span className="font-sans text-[#1C1A18]">Redwood House, Chandigarh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78716C]">Asset Type</span>
                <span className="font-sans text-[#1C1A18]">Field Guide & Script System</span>
              </div>
            </div>
          </div>

          {/* Right Column: Book Narrative, Positioning, and Direct Email CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest uppercase text-[#78716C]">
                Your child's moods change. You're not alone.
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] tracking-tight">
                The Tantrum Playbook
              </h3>
              <p className="text-lg sm:text-xl font-serif italic text-[#3D1D18] leading-snug">
                What to Say, What to Do, and How to Stay Calm Through Your Toddler's Biggest Emotions
              </p>
            </div>

            <div className="space-y-4 text-base text-[#4A4641] leading-relaxed">
              <p>
                When a toddler is unraveling in public or on the kitchen floor, parents do not need 300 pages of child-psychology theory. They need immediate, situational scripts that defuse distress while preserving emotional safety.
              </p>
              <p>
                <strong className="text-[#1C1A18] font-medium">The Tantrum Playbook</strong> is structured as an operational field manual for the household. It maps unpredictable toddler dysregulation across six emotional states, giving parents exact words, physiological anchors, and non-reactive postures.
              </p>
            </div>

            {/* Core Quotes from the Book */}
            <div className="p-5 border-l-2 border-[#3D1D18] bg-white rounded-r-md space-y-1">
              <p className="text-sm font-serif italic text-[#1C1A18]">
                "You will read this book when your child is asleep."
              </p>
              <p className="text-xs font-sans text-[#58544E]">
                After the tantrum comes calm. After the storm comes connection.
              </p>
            </div>

            {/* The Six Emotional Archetypes */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                The 6 Behavioral Weather States Mapped Inside
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {archetypes.map((item) => (
                  <div key={item.name} className="p-3 bg-white border border-[#E8E4DC] rounded-sm text-left">
                    <span className="text-xs font-serif font-medium text-[#1C1A18] block">{item.name}</span>
                    <span className="text-[11px] font-sans text-[#78716C] block">{item.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BRAND.mailtoPlaybook}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-sm font-semibold rounded-md transition-colors shadow-xs"
              >
                <span>Request The Tantrum Playbook</span>
                <ArrowUpRight className="w-4 h-4 text-[#D6D3D1]" />
              </a>
              <button
                onClick={onViewDedicatedPage}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#D5CFC5] hover:border-[#1C1A18] bg-white text-[#1C1A18] text-sm font-medium rounded-md transition-colors cursor-pointer"
              >
                <span>Full Book Page & Architecture</span>
              </button>
            </div>

            <div className="text-xs text-[#78716C] flex items-center gap-2">
              <span>Direct inquiries handled via</span>
              <a href={BRAND.mailtoPlaybook} className="font-mono text-[#1C1A18] hover:underline">
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
