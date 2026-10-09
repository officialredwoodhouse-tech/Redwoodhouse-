import React from 'react';
import { ASSETS } from '../constants/assets';

export const WhyRedwoodHouseSection: React.FC = () => {
  const principles = [
    {
      title: 'Architecture Before Aesthetics',
      desc: 'We never design in a vacuum. Every layout decision is grounded in buyer psychology, information hierarchy, and semantic search engine structure.',
    },
    {
      title: 'SEO Engineered Into the Code',
      desc: 'Search engine optimization isn\'t a plugin. We build clean DOM trees, sub-second asset pipelines, structured JSON-LD schema, and programmatic topic hubs directly into your site.',
    },
    {
      title: 'Complete Digital Ownership',
      desc: 'No hostage hosting or proprietary lock-in. You own 100% of your custom codebase, design tokens, content assets, and analytics properties from the moment we launch.',
    },
    {
      title: 'Editorial & Visual Restraint',
      desc: 'We reject generic AI templates, neon gradients, and cluttered agency gimmicks. Your digital presence is crafted with timeless typography, clarity, and commercial weight.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Studio Ethos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            Built by engineers, designers, and search architects.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            Redwood House was founded on a simple observation: the businesses doing the most meaningful work rarely have an online presence that matches their real-world reputation.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg border border-[#E8E4DC] shadow-xs hover:border-[#3D1D18]/50 transition-colors"
            >
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider block mb-2">
                Pillar {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-serif text-[#1C1A18] font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#58544E] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Presence Card */}
        <div className="mt-14 bg-white rounded-lg border border-[#E8E4DC] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full relative min-h-[300px]">
              <img
                src={ASSETS.chandigarhDigitalStudio}
                alt="Redwood House web development and SEO studio in Chandigarh, India"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
                Studio Location · Chandigarh, India
              </span>
              <h4 className="text-2xl font-serif text-[#1C1A18]">
                A dedicated studio for serious digital craftsmanship.
              </h4>
              <p className="text-sm text-[#58544E] leading-relaxed">
                Rooted in the modernist architectural city of Chandigarh, Redwood House partners with companies, founders, and specialists worldwide. We take on a focused roster of engagements each quarter so every website and SEO system receives senior engineering attention.
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-[#78716C]">
                <span>Senior-only execution</span>
                <span aria-hidden="true">·</span>
                <span>Direct founder & technical collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
