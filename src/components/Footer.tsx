import React from 'react';
import { BRAND } from '../constants/assets';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C1A18] text-[#FBF9F5] border-t border-[#33302B] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#33302B]">
          {/* Brand & Studio Location */}
          <div className="md:col-span-6 space-y-4">
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
              A private editorial studio and productized book creation service. We turn specialist knowledge, proprietary frameworks, and career expertise into finished, published-grade books.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#78716C] block mb-1">
                Direct Contact
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
                  Selected Work & Archetypes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('tantrum-playbook');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Tantrum Playbook
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
                  How It Works
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
                  About the Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Engagement Philosophy Note */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono block">
              Engagement Model
            </span>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              Every project is conducted as a single, productized book-creation engagement with a fixed deliverable. Delivered as a complete intellectual asset you can adapt, rebrand, and build around.
            </p>
            <div className="pt-2">
              <a
                href={BRAND.mailtoGeneral}
                className="inline-block text-xs font-medium text-[#FBF9F5] border border-[#57534E] hover:border-white px-3.5 py-2 rounded-sm transition-colors"
              >
                Initiate Project Conversation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Redwood House. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Private Editorial Studio</span>
          </div>
          <div className="text-right">
            <span>Chandigarh, India · Dedicated Private Inquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
