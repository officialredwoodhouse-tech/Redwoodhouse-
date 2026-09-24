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
            We believe the most valuable books are waiting inside people who are too busy doing the work to write them.
          </h1>
        </div>

        {/* Studio Image */}
        <div className="mt-12 rounded-lg overflow-hidden border border-[#E8E4DC] shadow-md">
          <img
            src={ASSETS.studioLibrary}
            alt="Redwood House private editorial library, Chandigarh"
            className="w-full h-80 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-4 bg-white border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#78716C]">
            <span>The Redwood House Studio</span>
            <span className="font-mono">Chandigarh, India</span>
          </div>
        </div>

        {/* Core Philosophical Thesis */}
        <div className="mt-16 space-y-8 text-base sm:text-lg text-[#4A4641] leading-relaxed font-sans">
          <p className="text-xl sm:text-2xl font-serif italic text-[#1C1A18] leading-snug">
            "There are people who have spent years becoming experts in something. They should not need to spend another year learning the mechanics of turning that expertise into a book. Redwood House exists to close that gap."
          </p>

          <p>
            Writing a full-length, publication-grade book is an entirely different discipline than running a business, diagnosing an enterprise failure, managing a clinical practice, or leading an engineering team. It demands hundreds of hours of lonely outline surgery, developmental drafting, chapter transitions, voice modulation, and editorial refinement.
          </p>

          <p>
            When experts attempt to write books alone, one of two things almost always happens: either they burn out after three chapters because their day job demands their full attention, or they hire cheap freelance copywriters who produce generic, superficial fluff that damages their credibility.
          </p>

          <p>
            Redwood House was founded to offer an alternative: a private, high-trust editorial studio operating as an intellectual partner. We treat your career knowledge with genuine respect, extracting the nuance and trade-offs that make your perspective valuable.
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
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Discretion Over Self-Promotion</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                We are ghostwriters in the classical sense. We do not use your book to brag on social media or market our own studio. Your project is conducted under strict non-disclosure.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Pillar 02</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Anti-Slop Craftsmanship</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                We reject generic AI copywriting, automated fillers, and hollow buzzwords. A book that bears your name must have intellectual depth, precise terminology, and authentic narrative weight.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Pillar 03</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Productized Simplicity</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                One engagement. One finished book asset. We do not trap clients in open-ended hourly billing or ambiguous consulting contracts.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Pillar 04</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Enduring Intellectual Property</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                Delivered as a complete asset you can build around. You have the total freedom to rebrand it, adapt it into workshops, create derivative works, or distribute it freely.
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
              Based in the modernist architectural hub of Chandigarh, Redwood House works with specialists, founders, and leaders internationally. We accept a limited number of book engagements each quarter to preserve editorial focus.
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
