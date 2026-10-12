import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight, Cpu } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="flex items-center justify-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#3D1D18]" />
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono block">
            AI Automation · Custom Software · SEO Marketing · Design · Websites
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1A18] tracking-tight leading-[1.12]">
          We just don't make websites. <br />
          <span className="italic text-[#3D1D18]">We build your entire operational engine.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#58544E] max-w-xl mx-auto leading-relaxed">
          Whether you run an agency, clinic, hospital, gym, or software venture, send our Chandigarh studio an email detailing your operational bottlenecks and business goals.
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
            <span>Request an Automation & Software Audit</span>
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
