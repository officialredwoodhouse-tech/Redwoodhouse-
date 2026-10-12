import React from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowLeft, ArrowUpRight, Cpu, Code, Search, Zap, Globe, Palette } from 'lucide-react';

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
            We just don't make websites. <br />
            <span className="italic text-[#3D1D18]">We build intelligent operational engines and digital flagships.</span>
          </h1>
        </div>

        {/* Studio Image */}
        <div className="mt-12 rounded-lg overflow-hidden border border-[#E8E4DC] shadow-md">
          <img
            src={ASSETS.chandigarhDigitalStudio}
            alt="Redwood House AI Automation, Custom Software & Web Engineering Studio in Chandigarh"
            className="w-full h-80 sm:h-96 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-4 bg-white border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#78716C]">
            <span>The Redwood House Systems & AI Engineering Studio</span>
            <span className="font-mono">Chandigarh, India</span>
          </div>
        </div>

        {/* Core Philosophical Thesis */}
        <div className="mt-16 space-y-8 text-base sm:text-lg text-[#4A4641] leading-relaxed font-sans">
          <p className="text-xl sm:text-2xl font-serif italic text-[#1C1A18] leading-snug">
            "A website that doesn't automate your intake, doesn't triage inquiries, doesn't rank on Google, and doesn't process transactions is simply an expensive digital business card. Real scale requires connected intelligence."
          </p>

          <p>
            Redwood House was founded in Chandigarh, India, to bridge the massive gap between modern applied artificial intelligence, full-stack software development, search engine dominance, and high-craft brand design.
          </p>

          <p>
            We partner with <strong>marketing and creative agencies, medical and specialist clinics, multi-specialty hospitals, gyms and fitness clubs, and software companies</strong>. For each vertical, we deploy custom AI agents that answer inquiries in 30 seconds, automate client reporting, prevent membership churn, route hospital patients, and process payments without manual admin overhead.
          </p>

          <p>
            And yes, we make websites—sub-second, custom-coded React and Next.js flagships scoring 99+ on Google Core Web Vitals with rich Schema.org search entity graphs.
          </p>
        </div>

        {/* What We Believe & Stand For */}
        <div className="mt-16 pt-12 border-t border-[#E8E4DC] space-y-8">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1A18]">
            Our Operating Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Principle 01</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Autonomous Operations First</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                If an inquiry can be triaged in 30 seconds, an intake form collected digitally, or a report drafted automatically by an AI agent, human staff should not do it manually.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Principle 02</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Purpose-Built Custom Software</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                We reject bloated monthly subscription tools and fragile Zapier bridges. We engineer bespoke client portals, clinic backends, and dashboards with 100% source code ownership.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Principle 03</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Sub-Second Speed & Web Rigor</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                Every website we deliver is engineered for sub-second page loads, 99+ Core Web Vitals, and semantic HTML5 hierarchy that commands instant visitor trust and search crawler priority.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#E8E4DC] space-y-2">
              <span className="text-xs font-mono uppercase text-[#78716C]">Principle 04</span>
              <h3 className="text-lg font-serif font-medium text-[#1C1A18]">Complete Client Code & Model Ownership</h3>
              <p className="text-xs sm:text-sm text-[#58544E] leading-relaxed">
                You own 100% of your source code repository, database schemas, AI agent prompts, domain assets, and analytics properties. Zero vendor lock-in.
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
              Based in the modernist architectural city of Chandigarh, Redwood House engineers AI automations, custom software, SEO marketing, and digital flagships for companies globally. We partner directly with senior leadership to guarantee precision execution.
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
