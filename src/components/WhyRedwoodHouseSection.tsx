import React from 'react';
import { ASSETS } from '../constants/assets';

export const WhyRedwoodHouseSection: React.FC = () => {
  const principles = [
    {
      title: 'Real AI Automation, Never Gimmicks',
      desc: 'We do not install generic AI chat widgets that frustrate your customers. We engineer production-grade conversational and operational agents connected directly to your WhatsApp Business API, Stripe billing, EHR, or CRM to execute real transactions.',
    },
    {
      title: 'Purpose-Built Software, Zero SaaS Bloat',
      desc: 'Stop paying monthly seat taxes for five disconnected tools that do not talk to each other. We engineer custom client portals, staff dashboards, and operational tools tailored to your exact business logic with 100% source code ownership.',
    },
    {
      title: 'Deep Industry Mechanics (Agencies, Healthcare, Gyms)',
      desc: 'A dental clinic needs HIPAA-aware intake and zero-no-show reminders. A gym needs 30-second lead-to-trial booking and churn prevention. An agency needs autonomous reporting. We understand the distinct operational anatomy of each vertical.',
    },
    {
      title: 'Sub-Second Web Speed & Enduring Design',
      desc: 'Yes, we make websites—and we build them better than anyone else. Sub-second global page loads scoring 99+ on Google Core Web Vitals, paired with architectural typography and visual restraint that elevates perceived market authority.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            Studio Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            Why leading businesses choose Redwood House.
          </h2>
          <p className="text-lg text-[#58544E] leading-relaxed">
            Founded in Chandigarh, India, Redwood House operates at the intersection of applied artificial intelligence, full-stack software engineering, search marketing, and digital design.
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
        <div className="mt-12 bg-white rounded-lg border border-[#E8E4DC] overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 h-64 md:h-full min-h-[240px]">
            <img
              src={ASSETS.chandigarhDigitalStudio}
              alt="Redwood House AI Automation and Software Engineering Studio in Chandigarh"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-7 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
              Physical Studio · Chandigarh, India
            </span>
            <h4 className="text-2xl font-serif text-[#1C1A18]">
              High-Trust Collaboration with Global Reach
            </h4>
            <p className="text-sm text-[#58544E] leading-relaxed">
              We work with ambitious founders, clinic directors, hospital leadership, fitness brands, and agency owners across India, North America, the UK, and the UAE. Every engagement is managed through clear async architectural milestones and live strategic reviews.
            </p>
            <div className="pt-2 text-xs font-mono text-[#3D1D18] font-medium">
              Chandigarh Studio · officialredwoodHouse@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
