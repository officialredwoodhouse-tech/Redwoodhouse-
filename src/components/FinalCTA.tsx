import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono block">
          Website Development · Online Presence · SEO Studio · Chandigarh
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.12]">
          You already built the business. <br />
          <span className="italic text-[#3D1D18]">Let's build your digital flagship.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#58544E] max-w-xl mx-auto leading-relaxed">
          Send us an email with your current website URL, your industry, and what you want to achieve online. We review every inquiry with direct technical and strategic consideration.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BRAND.mailtoGeneral}
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#1C1A18] hover:bg-[#3D1D18] text-white text-sm font-semibold rounded-md transition-colors tracking-wide shadow-xs"
          >
            <span>Initiate a Project with Redwood House</span>
            <ArrowUpRight className="w-4 h-4 text-[#D6D3D1]" />
          </a>
          <a
            href={BRAND.mailtoAudit}
            className="inline-flex items-center gap-2 px-6 py-4 border border-[#D5CFC5] hover:border-[#1C1A18] bg-white text-[#1C1A18] text-sm font-medium rounded-md transition-colors"
          >
            <span>Request an SEO & Presence Audit</span>
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
