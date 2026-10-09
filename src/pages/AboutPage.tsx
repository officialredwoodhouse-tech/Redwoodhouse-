import React from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
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
            Studio Philosophy · Chandigarh, India
          </div>
        </div>
      </div>

      {/* Main Narrative Header */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-16 pb-20 border-b border-[#E8E4DC]">
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
            About Redwood House
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.1]">
            We believe the strongest businesses deserve an online presence and search authority that match their real-world caliber.
          </h1>
        </div>

        {/* Studio Image */}
        <div className="mt-12 rounded-lg overflow-hidden border border-[#E8E4DC] shadow-md">
          <img
            src={ASSETS.chandigarhDigitalStudio}
            alt="Redwood House Website Development, Online Presence & SEO Studio, Chandigarh"
            className="w-full h-80 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-4 bg-white border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#78716C]">
            <span>The Redwood House Digital & SEO Studio</span>
            <span className="font-mono">Chandigarh, India</span>
          </div>
        </div>

        {/* Core Philosophical Thesis */}
        <div className="mt-16 space-y-8 text-base sm:text-lg text-[#4A4641] leading-relaxed font-sans">
          <p className="text-xl sm:text-2xl font-serif italic text-[#1C1A18] leading-snug">
            "There are companies and specialists who have spent years mastering their craft. They should not lose opportunities to inferior competitors simply because their website is slow, unclear, or invisible on Google. Redwood House exists to close that gap."
          </p>

          <p>
            Building a high-performing digital flagship requires three disciplines that rarely live under one roof: editorial-grade brand positioning, modern full-stack web engineering, and rigorous technical search engine optimization (SEO).
          </p>

          <p>
            When companies try to assemble this piecemeal, they either end up with a visually flashy agency site that fails Core Web Vitals and ranks for nothing, or they hire a commodity SEO vendor that stuffs awkward keywords into a broken, low-trust template.
          </p>

          <p>
            Redwood House was founded as an integrated Website Development, Online Presence Creator, and SEO Studio. We treat your website and search footprint as a unified piece of commercial architecture—engineered for speed, clarity, and compounding organic discovery.
          </p>
        </div>

        {/* What We Believe & Stand For */}
        <div className="mt-16 pt-12 border-t border-[#E8E4DC] space-y-8">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1A18]">
            Our Operating Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Pillar 01</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Performance as a Trust Signal</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                Speed is the first impression of competence. We engineer every website for sub-second load times and 99+ Core Web Vitals scores across mobile and desktop.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Pillar 02</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Anti-Template Craftsmanship</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                We reject bloated page builders, generic AI slop, and fleeting design gimmicks. Every layout, typographic scale, and interaction is custom-built for your brand.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Pillar 03</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Architectural SEO</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                We engineer search visibility directly into the HTML DOM, URL hierarchy, Schema.org JSON-LD graph, and topic clusters so organic traffic compounds month after month.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Pillar 04</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">100% Client Ownership</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                Delivered as a complete digital asset you own outright. You hold full control of your code repository, domain, design system, and search analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="mt-16 bg-[#FAF8F3] p-8 rounded-lg border border-[#E8E4DC] space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
              Studio Base
            </span>
            <h3 className="text-xl font-serif text-[#1C1A18]">
              Chandigarh, India
            </h3>
            <p className="text-sm text-[#58544E] leading-relaxed">
              Based in the modernist architectural city of Chandigarh, Redwood House partners with founders, businesses, and category leaders globally. We take on a focused number of web development and SEO engagements each quarter to guarantee direct senior execution.
            </p>
          </div>
          <div className="pt-2">
            <a
              href={BRAND.mailtoGeneral}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-xs font-semibold rounded-md transition-colors"
            >
              <span>Email Redwood House</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D6D3D1]" />
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
