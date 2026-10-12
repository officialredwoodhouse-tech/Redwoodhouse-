import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight, Cpu } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C1A18] text-[#FBF9F5] border-t border-[#33302B] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#33302B]">
          {/* Brand & Studio Location */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-white">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl tracking-tight font-medium text-white">
                  Redwood House
                </span>
                <span className="text-xs tracking-widest uppercase font-sans text-[#A8A29E] border-l border-[#44403C] pl-3">
                  Chandigarh, India
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A8A29E] max-w-md font-sans leading-relaxed">
              We just don't make websites. We engineer AI automation, custom software, SEO marketing, brand design, and high-performance digital flagships for agencies, clinics, hospitals, gyms, and growing companies.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#78716C] block mb-1">
                Direct Studio Desk
              </span>
              <a
                href={BRAND.mailtoGeneral}
                className="text-sm font-serif text-[#FBF9F5] hover:text-white hover:underline inline-flex items-center gap-1.5"
              >
                <span>{BRAND.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A29E]" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm text-[#D6D3D1]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('work');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Selected Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('seo-blueprint');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Automation & Systems Blueprint
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('how-it-works');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Engineering Workflow
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Redwood House
                </button>
              </li>
            </ul>
          </div>

          {/* Disciplines & Verticals */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono block">
              Core Verticals & Systems
            </span>
            <ul className="space-y-2 text-xs text-[#A8A29E] font-sans">
              <li className="flex items-center gap-2">
                <span className="text-white font-medium">Agencies:</span> AI Onboarding & Reporting Pipelines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-medium">Clinics:</span> 24/7 Patient Triage & Booking Automations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-medium">Hospitals:</span> Multi-Department Routing Intelligence
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-medium">Gyms:</span> Lead-to-Trial WhatsApp Bots & Retention Engines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-medium">SEO Marketing:</span> Programmatic Silos & Entity Graphs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-medium">Custom Software:</span> Bespoke Client Portals & Operations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-medium">Websites:</span> Sub-Second React & Next.js Flagships
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon & Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div className="flex items-center gap-2">
            <span>© 2026 Redwood House. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Chandigarh, India</span>
          </div>

          <div className="flex items-center gap-4 text-[#A8A29E]">
            <span>100% Client Code Ownership</span>
            <span aria-hidden="true">·</span>
            <span>Zero Proprietary Lock-in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
