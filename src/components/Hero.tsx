import React, { useState } from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onExplorePlaybook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onExplorePlaybook }) => {
  const [activeImageKey, setActiveImageKey] = useState<'hero' | 'craft' | 'desk'>('hero');

  const imageOptions = {
    hero: {
      src: ASSETS.editorialHeroCover,
      alt: 'Curated collection of clothbound hardcover books and manuscript proofs at Redwood House',
      label: 'Clothbound Editions',
      caption: 'Bespoke book craft & manuscript development',
      quote: '"Turning years of experience into something people can hold, read, share, and build on."',
    },
    craft: {
      src: ASSETS.bespokeBookCraft,
      alt: 'Fine-art bespoke book craft and open manuscript draft in sunlit studio',
      label: 'Manuscript Drafts',
      caption: 'Fine-art book binding & archival materials',
      quote: '"We build books that look, feel, and endure like modern literary classics."',
    },
    desk: {
      src: ASSETS.editorialDesk,
      alt: 'Editorial manuscript proof and reference volumes at the Redwood House studio desk',
      label: 'Editorial Desk',
      caption: 'Private manuscript development studio',
      quote: '"Obsessive line editing, structural calibration, and literary discipline."',
    },
  };

  const currentImg = imageOptions[activeImageKey];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#E8E4DC] bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Editorial Kicker */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#78716C] mb-6">
          <span>Private Editorial Studio</span>
          <span aria-hidden="true">·</span>
          <span>Chandigarh, India</span>
          <span aria-hidden="true">·</span>
          <span>Ghostwriting & Book Production</span>
        </div>

        {/* Main Grid: Asymmetric Typography & Marquee Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Core Positioning Statement */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-serif font-normal text-[#1C1A18] tracking-tight leading-[1.08] text-balance">
              You know the subject. <br />
              <span className="italic font-normal text-[#3D1D18]">We build the book.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4A4641] font-sans font-normal leading-relaxed max-w-2xl">
              Redwood House turns specialist knowledge into finished, published-grade books without asking you to build the entire thing from zero to one.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BRAND.mailtoGeneral}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-sm font-semibold rounded-md transition-colors tracking-wide shadow-sm"
              >
                <span>Get in touch</span>
                <span className="text-[#A8A29E] font-normal">·</span>
                <span className="text-xs font-mono text-[#D6D3D1] hidden sm:inline">{BRAND.email}</span>
              </a>
              <button
                onClick={onExplorePlaybook}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#D5CFC5] hover:border-[#1C1A18] bg-transparent text-[#1C1A18] text-sm font-medium rounded-md transition-colors cursor-pointer"
              >
                <span>See what we're building</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#58544E]" />
              </button>
            </div>

            {/* Quiet Value Indicators */}
            <div className="pt-8 border-t border-[#E8E4DC] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#78716C] font-mono">Format</span>
                <span className="text-sm font-medium text-[#1C1A18] mt-1 block">One-Time Engagement</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#78716C] font-mono">Outcome</span>
                <span className="text-sm font-medium text-[#1C1A18] mt-1 block">Finished Book Asset</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#78716C] font-mono">Discretion</span>
                <span className="text-sm font-medium text-[#1C1A18] mt-1 block">Strict Confidentiality</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor of Editorial Craft */}
          <div className="lg:col-span-5 relative space-y-3">
            {/* View Selector Tabs */}
            <div className="flex items-center justify-between pb-1 text-xs">
              <span className="font-mono text-[#78716C] uppercase tracking-wider text-[11px]">
                Studio Perspective
              </span>
              <div className="flex items-center gap-1 bg-[#F4F0E8] p-0.5 rounded-md border border-[#E8E4DC]">
                {(['hero', 'craft', 'desk'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveImageKey(key)}
                    className={`px-2 py-1 text-[11px] font-sans font-medium rounded transition-all cursor-pointer ${
                      activeImageKey === key
                        ? 'bg-white text-[#1C1A18] shadow-xs font-semibold'
                        : 'text-[#78716C] hover:text-[#1C1A18]'
                    }`}
                  >
                    {imageOptions[key].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Card */}
            <div className="relative rounded-lg overflow-hidden border border-[#E8E4DC] shadow-md bg-white">
              <img
                src={currentImg.src}
                alt={currentImg.alt}
                className="w-full h-[380px] lg:h-[440px] object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E7E3DC] block mb-1">
                  Private Studio Production · Chandigarh
                </span>
                <p className="text-sm font-serif italic text-white/95 leading-snug">
                  {currentImg.quote}
                </p>
              </div>
            </div>

            {/* Subtle caption beneath */}
            <div className="flex items-center justify-between text-xs text-[#78716C] font-sans px-1">
              <span>{currentImg.caption}</span>
              <span className="font-mono">Vol. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
