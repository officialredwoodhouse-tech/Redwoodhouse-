import React, { useState } from 'react';
import { BRAND } from '../constants/assets';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';

interface WorkPageProps {
  onBack: () => void;
  onNavigatePlaybook: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onBack, onNavigatePlaybook }) => {
  const [filter, setFilter] = useState<'all' | 'founder' | 'advisory' | 'technical'>('all');

  const projects = [
    {
      id: 'northstar',
      name: 'Northstar Labs',
      type: 'founder',
      category: 'Deep Tech Founder Monograph',
      pageCount: '180 pages · Hardbound & Digital',
      challenge: 'The technical founder had accumulated eight years of hardware manufacturing heuristics and supply chain lessons, but lacked 6 months of writing bandwidth while scaling factory capacity.',
      concept: 'An unsparing, first-principles examination of hardware unit economics, resilient supply chains, and engineering leadership in hardware-software hybrids.',
      built: '10 recorded knowledge-capture sessions, translated complex hardware diagrams into accessible editorial graphics, complete manuscript drafting, and custom fine-art interior typography.',
      deliverable: 'Clothbound volume for Tier-1 hires, strategic investors, and enterprise customers.',
      note: 'Illustrative archetype · replace before publishing',
    },
    {
      id: 'pine',
      name: 'Pine & Co.',
      type: 'advisory',
      category: 'Management Advisory Doctrine',
      pageCount: '220 pages · Executive Format',
      challenge: 'The firm relied on transient slide decks and consultative pitches to convey their post-merger integration framework, losing deal velocity against larger legacy consultancies.',
      concept: 'An authoritative executive blueprint analyzing decentralized management cadences and cultural reconciliation in 9-figure corporate mergers.',
      built: 'Full synthesis of proprietary audit worksheets and workshop modules into a 9-chapter business manual with bespoke diagnostic frameworks.',
      deliverable: 'Master physical monograph presented to target Fortune 500 CEOs ahead of procurement cycles.',
      note: 'Illustrative archetype · replace before publishing',
    },
    {
      id: 'arcwell',
      name: 'Arcwell',
      type: 'advisory',
      category: 'Executive Turnaround Playbook',
      pageCount: '140 pages · Field Guide Format',
      challenge: 'A seasoned chief operating officer wanted to codify a repeatable 90-day turnaround framework developed across four corporate rehabilitations.',
      concept: 'A direct, tactical manual documenting the diagnostic triage of insolvent business units, cash-flow triage, and organizational stabilizing.',
      built: 'End-to-end ghostwriting, sensitive corporate anonymization, narrative sequencing, and proof refinement.',
      deliverable: 'Publication-ready manuscript with complete unrestricted intellectual property rights.',
      note: 'Illustrative archetype · replace before publishing',
    },
    {
      id: 'signal',
      name: 'Signal Foundry',
      type: 'technical',
      category: 'Venture & Product Architecture',
      pageCount: '200 pages · Thesis Monograph',
      challenge: 'General partners had distributed dozens of high-signal market essays across disparate channels without a singular intellectual anchor.',
      concept: 'A unified investment and product distribution doctrine detailing how counter-positioning unlocks multi-billion dollar enterprise software categories.',
      built: 'Curatorial synthesis, narrative transitions, chapter expansion, and print typography production.',
      deliverable: 'Definitive partner book gifted to prospective founders at term-sheet presentation.',
      note: 'Illustrative archetype · replace before publishing',
    },
    {
      id: 'lumen',
      name: 'Lumen Systems',
      type: 'technical',
      category: 'Engineering Operating Manual',
      pageCount: '160 pages · Technical Monograph',
      challenge: 'A distributed infrastructure team needed to turn complex internal architectural decision records into a public-facing engineering standard.',
      concept: 'A clear treatise on distributed system fault tolerance, asynchronous team coordination, and engineering reliability standards.',
      built: 'Interviews with staff engineers, code-to-prose translation, developmental line editing, and print formatting.',
      deliverable: 'Technical standard manual used for senior engineering recruiting and developer community credibility.',
      note: 'Illustrative archetype · replace before publishing',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

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
            Selected Work & Archetypes · Redwood House
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 border-b border-[#E8E4DC]">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
            Portfolio of Archetypes
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.08]">
            Selected Work & Book Archetypes.
          </h1>
          <p className="text-lg sm:text-xl text-[#58544E] leading-relaxed">
            Because Redwood House operates as a private ghostwriting studio under strict confidentiality agreements, client identities remain protected. Below are representative engagement blueprints.
          </p>
          <div className="p-4 bg-[#FAF8F3] border border-[#E8E4DC] rounded-md text-xs font-mono text-[#78716C]">
            Notice: All company names below (Northstar Labs, Pine & Co., Arcwell, Signal Foundry, Lumen Systems) are illustrative placeholders representing real structural book engagements.
          </div>
        </div>

        {/* Featured Current Book Callout */}
        <div className="mt-12 bg-white rounded-lg border border-[#D5CFC5] p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3D1D18] font-semibold block">
              Featured Published Product
            </span>
            <h3 className="text-2xl font-serif text-[#1C1A18]">
              The Tantrum Playbook
            </h3>
            <p className="text-sm text-[#58544E] max-w-xl">
              What to Say, What to Do, and How to Stay Calm Through Your Toddler's Biggest Emotions. A real Redwood House publication exploring six emotional weather states.
            </p>
          </div>
          <button
            onClick={onNavigatePlaybook}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
          >
            <span>View The Tantrum Playbook</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Filter Tabs & Archetypes Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'all'
                ? 'bg-[#1C1A18] text-white'
                : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
            }`}
          >
            All Blueprints ({projects.length})
          </button>
          <button
            onClick={() => setFilter('founder')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'founder'
                ? 'bg-[#1C1A18] text-white'
                : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
            }`}
          >
            Founder Monographs
          </button>
          <button
            onClick={() => setFilter('advisory')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'advisory'
                ? 'bg-[#1C1A18] text-white'
                : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
            }`}
          >
            Advisory & Executive Doctrines
          </button>
          <button
            onClick={() => setFilter('technical')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'technical'
                ? 'bg-[#1C1A18] text-white'
                : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
            }`}
          >
            Technical & Architecture Systems
          </button>
        </div>

        {/* Project Blueprint Cards */}
        <div className="space-y-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg border border-[#E8E4DC] p-8 sm:p-10 shadow-xs hover:border-[#3D1D18]/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#F4F0E8] gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-serif font-medium text-[#1C1A18]">
                      {p.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[#78716C] bg-[#FAF8F3] px-2 py-0.5 border border-[#E8E4DC] rounded-xs">
                      {p.note}
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] mt-1 block">
                    {p.category}
                  </span>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-xs font-mono text-[#3D1D18] font-semibold block">
                    {p.pageCount}
                  </span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The Challenge
                  </span>
                  <p className="text-sm text-[#4A4641] leading-relaxed">
                    {p.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    The Book Concept
                  </span>
                  <p className="text-sm font-serif italic text-[#3D1D18] leading-relaxed">
                    "{p.concept}"
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    What Redwood House Built
                  </span>
                  <p className="text-sm text-[#58544E] leading-relaxed">
                    {p.built}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F4F0E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-[#1C1A18]">
                  <Check className="w-4 h-4 text-[#3D1D18]" />
                  <span><strong>Deliverable:</strong> {p.deliverable}</span>
                </div>
                <a
                  href={`${BRAND.mailtoGeneral}&body=Hello%20Redwood%20House,%0D%0A%0D%0AI%20am%20interested%20in%20a%20book%20structure%20similar%20to%20the%20${encodeURIComponent(p.category)}%20archetype...`}
                  className="inline-flex items-center gap-1 font-semibold text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4"
                >
                  <span>Discuss a project in this format</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-[#E8E4DC]">
        <div className="bg-[#FAF8F3] rounded-lg border border-[#E8E4DC] p-8 sm:p-12 text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif text-[#1C1A18]">
            Have an unwritten doctrine or framework?
          </h3>
          <p className="text-sm text-[#58544E] leading-relaxed">
            All consultations are conducted under strict non-disclosure. Email our Chandigarh studio to begin an exploratory dialogue.
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
        </div>
      </div>
    </div>
  );
};
