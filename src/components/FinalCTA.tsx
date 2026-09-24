import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono block">
          Editorial Collaboration · Chandigarh, India
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.12]">
          You already know what the book is about. <br />
          <span className="italic text-[#3D1D18]">Let's build the book.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#58544E] max-w-xl mx-auto leading-relaxed">
          Send us an email describing your subject, your background, and your target audience. We review every inquiry with direct editorial consideration.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BRAND.mailtoGeneral}
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-sm font-semibold rounded-md transition-colors tracking-wide shadow-xs"
          >
            <span>Email Redwood House</span>
            <ArrowUpRight className="w-4 h-4 text-[#D6D3D1]" />
          </a>
        </div>
        <div className="pt-2">
          <a
            href={BRAND.mailtoGeneral}
            className="text-sm font-mono text-[#58544E] hover:text-[#1C1A18] underline underline-offset-4"
          >
            {BRAND.email}
          </a>
        </div>
      </div>
    </section>
  );
};
