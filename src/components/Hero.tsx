import React, { useState } from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onExplorePlaybook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onExplorePlaybook }) => {
  const [activeImageKey, setActiveImageKey] = useState<'flagship' | 'seo' | 'devices'>('flagship');

  const imageOptions = {
    flagship: {
      src: ASSETS.webStudioHero,
      alt: 'Bespoke website development and architectural wireframes at Redwood House studio',
      label: 'Web Engineering',
      caption: 'Bespoke website architecture & frontend engineering',
      quote: '"Turning real-world reputation into a fast, unmistakable digital flagship that converts."',
    },
    seo: {
      src: ASSETS.seoArchitectureShowcase,
      alt: 'Technical SEO blueprint, site map hierarchy, and Core Web Vitals engineering',
      label: 'SEO Architecture',
      caption: 'Technical SEO, structured schema & organic search systems',
      quote: '"Search visibility is not an afterthought—it is engineered directly into the code and copy."',
    },
    devices: {
      src: ASSETS.digitalPresenceCraft,
      alt: 'Cohesive online presence across desktop and mobile displays',
      label: 'Online Presence',
      caption: 'Multi-device brand systems & conversion design',
      quote: '"We build cohesive digital ecosystems that make your brand the obvious choice in your category."',
    },
  };

  const currentImg = imageOptions[activeImageKey];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#E8E4DC] bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Editorial Kicker */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-widest uppercase font-mono text-[#78716C] mb-6">
          <span>Website Development</span>
          <span aria-hidden="true">·</span>
          <span>Online Presence Creator</span>
          <span aria-hidden="true">·</span>
          <span>SEO Studio</span>
          <span aria-hidden="true">·</span>
          <span>Chandigarh, India</span>
        </div>

        {/* Main Grid: Asymmetric Typography & Marquee Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Core Positioning Statement */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-serif font-normal text-[#1C1A18] tracking-tight leading-[1.08] text-balance">
              You know your craft. <br />
              <span className="italic font-normal text-[#3D1D18]">We build your digital presence.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4A4641] font-sans font-normal leading-relaxed max-w-2xl">
              Redwood House is a private website development, online presence creation, and technical SEO studio. We engineer high-converting websites and search authority systems that turn your real-world expertise into compounding inbound demand.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BRAND.mailtoGeneral}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-sm font-semibold rounded-md transition-colors tracking-wide shadow-sm"
              >
                <span>Start a Project</span>
                <span className="text-[#A8A29E] font-normal">·</span>
                <span className="text-xs font-mono text-[#D6D3D1] hidden sm:inline">{BRAND.email}</span>
              </a>
              <button
                onClick={onExplorePlaybook}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#D5CFC5] hover:border-[#1C1A18] bg-transparent text-[#1C1A18] text-sm font-medium rounded-md transition-colors cursor-pointer"
              >
                <span>Explore our SEO & Web System</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#58544E]" />
              </button>
            </div>

            {/* Quiet Value Indicators */}
            <div className="pt-8 border-t border-[#E8E4DC] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#78716C] font-mono">Engineering</span>
                <span className="text-sm font-medium text-[#1C1A18] mt-1 block">Bespoke Web Development</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#78716C] font-mono">Authority</span>
                <span className="text-sm font-medium text-[#1C1A18] mt-1 block">Online Presence & Brand</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#78716C] font-mono">Discovery</span>
                <span className="text-sm font-medium text-[#1C1A18] mt-1 block">Technical & Semantic SEO</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor of Digital Craft */}
          <div className="lg:col-span-5 relative space-y-3">
            {/* View Selector Tabs */}
            <div className="flex items-center justify-between pb-1 text-xs">
              <span className="font-mono text-[#78716C] uppercase tracking-wider text-[11px]">
                Studio Capabilities
              </span>
              <div className="flex items-center gap-1 bg-[#F4F0E8] p-0.5 rounded-md border border-[#E8E4DC]">
                {(['flagship', 'seo', 'devices'] as const).map((key) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E7E3DC] block mb-1">
                  Redwood House Digital Studio · Chandigarh
                </span>
                <p className="text-sm font-serif italic text-white/95 leading-snug">
                  {currentImg.quote}
                </p>
              </div>
            </div>

            {/* Subtle caption beneath */}
            <div className="flex items-center justify-between text-xs text-[#78716C] font-sans px-1">
              <span>{currentImg.caption}</span>
              <span className="font-mono">99+ CWV Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
