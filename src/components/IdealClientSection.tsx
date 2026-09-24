import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight } from 'lucide-react';

interface Archetype {
  id: string;
  label: string;
  rawAsset: string;
  finishedBookForm: string;
  whyThisWorks: string;
}

export const IdealClientSection: React.FC = () => {
  const archetypes: Archetype[] = [
    {
      id: 'founders',
      label: 'Founders',
      rawAsset: 'Company memos, product philosophies, investor decks, scaling war stories.',
      finishedBookForm: 'Category-defining founder monograph or operating manual.',
      whyThisWorks: 'Positions your company as the category authority without pulling you away from executing your roadmap.'
    },
    {
      id: 'consultants',
      label: 'Consultants',
      rawAsset: 'Proprietary audit frameworks, client diagnostic sheets, workshop methodologies.',
      finishedBookForm: 'Standard client onboarding book or business doctrine.',
      whyThisWorks: 'Pre-sells high-ticket engagements and standardizes your unique diagnostic perspective.'
    },
    {
      id: 'operators',
      label: 'Operators',
      rawAsset: 'Standard operating systems, triage protocols, turnaround playbooks.',
      finishedBookForm: 'Pragmatic tactical guide for practitioners in your sector.',
      whyThisWorks: 'Demonstrates deep functional competence in an industry crowded with superficial advice.'
    },
    {
      id: 'specialists',
      label: 'Specialists & Researchers',
      rawAsset: 'Technical whitepapers, data findings, niche clinical or scientific insights.',
      finishedBookForm: 'Accessible commercial book bridging high-level science with general practice.',
      whyThisWorks: 'Translates dense, inaccessible expertise into lucid prose that executives and peers can act upon.'
    },
    {
      id: 'executives',
      label: 'Executives & Leaders',
      rawAsset: 'Leadership speeches, board memos, organizational restructuring insights.',
      finishedBookForm: 'Thoughtful leadership doctrine establishing industry footprint.',
      whyThisWorks: 'Solidifies your legacy and corporate reputation under strict private discretion.'
    },
    {
      id: 'coaches',
      label: 'Coaches & Creators',
      rawAsset: 'Curriculum modules, high-frequency newsletters, core podcasts, coaching notes.',
      finishedBookForm: 'Definitive physical guide that anchors your ecosystem.',
      whyThisWorks: 'Transforms ephemeral digital media into a permanent physical book asset.'
    },
    {
      id: 'professionals',
      label: 'Professionals with Frameworks',
      rawAsset: 'Step-by-step diagnostic models, patent ideas, unique client methodologies.',
      finishedBookForm: 'Structured intellectual property asset ready for licensing and training.',
      whyThisWorks: 'Secures your methodology in print so you can rebrand, adapt, and build products around it.'
    },
  ];

  const [activeArchetype, setActiveArchetype] = useState<Archetype>(archetypes[0]);

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Audience & Fit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            Built for people who already know something worth saying.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            You have the knowledge. You have the experience. You may even have the outline in your head. You just don't have the time or desire to build the book from scratch.
          </p>
        </div>

        {/* Core Roster of Specialists */}
        <div className="mt-12 pt-8 border-t border-[#E8E4DC]">
          <div className="text-xs uppercase tracking-widest text-[#78716C] font-mono mb-4">
            We work with
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base font-medium text-[#1C1A18]">
            <span className="hover:text-[#3D1D18] transition-colors">Founders</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Consultants</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Operators</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Specialists</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Researchers</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Executives</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Coaches</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Creators</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Industry Experts</span>
            <span className="text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="hover:text-[#3D1D18] transition-colors">Professionals with Proprietary Frameworks</span>
          </div>
        </div>

        {/* Interactive Archetype Translation Card */}
        <div className="mt-12 bg-white rounded-lg border border-[#E8E4DC] overflow-hidden shadow-xs">
          <div className="p-6 md:p-8 bg-[#F4F0E8]/40 border-b border-[#E8E4DC]">
            <div className="text-xs uppercase tracking-widest text-[#78716C] font-mono mb-3">
              Select Your Profile to View the Translation Path
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {archetypes.map((arch) => (
                <button
                  key={arch.id}
                  onClick={() => setActiveArchetype(arch)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    activeArchetype.id === arch.id
                      ? 'bg-[#1C1A18] text-white shadow-xs'
                      : 'bg-white text-[#58544E] hover:text-[#1C1A18] border border-[#E8E4DC]'
                  }`}
                >
                  {arch.label}
                </button>
              ))}
            </div>
          </div>

          {/* Translation Details Grid */}
          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                Raw Knowledge You Provide
              </span>
              <p className="text-sm sm:text-base text-[#1C1A18] font-sans leading-relaxed">
                {activeArchetype.rawAsset}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                Book Asset We Deliver
              </span>
              <p className="text-sm sm:text-base text-[#3D1D18] font-serif font-medium leading-relaxed">
                {activeArchetype.finishedBookForm}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                Strategic Outcome
              </span>
              <p className="text-sm sm:text-base text-[#58544E] font-sans leading-relaxed">
                {activeArchetype.whyThisWorks}
              </p>
            </div>
          </div>

          <div className="px-6 md:px-10 py-4 bg-[#FBF9F5] border-t border-[#E8E4DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs text-[#78716C]">
              Have a proprietary framework or manuscript idea ready to discuss?
            </span>
            <a
              href={`${BRAND.mailtoGeneral}&body=Hello%20Redwood%20House,%0D%0A%0D%0AI%20am%20a%20${encodeURIComponent(activeArchetype.label)}%20and%20I%20have%20an%20idea%20for%20a%20book%20project...`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4"
            >
              <span>Email us about a {activeArchetype.label} book project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
