import React, { useState } from 'react';
import { RwHLogo } from './RwHLogo';
import { BRAND } from '../constants/assets';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', id: 'work' },
    { label: 'The Tantrum Playbook', id: 'tantrum-playbook' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'About', id: 'about' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-[#E8E4DC] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Zone 1: Single Brand Zone */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D1D18] rounded-sm group cursor-pointer"
        >
          <RwHLogo variant="full" />
        </button>

        {/* Zone 2: Clean Text Navigation Links (Single-Line, Hover Underline) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#58544E]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors py-1 cursor-pointer relative ${
                currentView === item.id
                  ? 'text-[#1C1A18] font-semibold'
                  : 'hover:text-[#1C1A18]'
              }`}
            >
              {item.label}
              {currentView === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#3D1D18]" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BRAND.mailtoGeneral}
            className="text-xs font-mono text-[#78716C] hover:text-[#1C1A18] px-2.5 py-1.5 border border-[#E8E4DC] hover:border-[#1C1A18] rounded-md transition-colors"
          >
            {BRAND.email}
          </a>
          <a
            href={BRAND.mailtoGeneral}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1C1A18] hover:bg-[#3D1D18] rounded-md transition-colors tracking-wide whitespace-nowrap shadow-xs"
          >
            <span>Email Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E7E3DC]" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={BRAND.mailtoGeneral}
            className="text-xs font-medium text-[#1C1A18] border border-[#D5CFC5] px-2.5 py-1.5 rounded-sm whitespace-nowrap"
          >
            Email
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-1.5 text-[#1C1A18] hover:text-[#3D1D18] focus-visible:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E4DC] bg-[#FBF9F5] px-6 py-6 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-serif py-1 transition-colors cursor-pointer ${
                  currentView === item.id
                    ? 'text-[#1C1A18] font-semibold underline underline-offset-4 decoration-[#3D1D18]'
                    : 'text-[#58544E]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#E8E4DC] flex flex-col gap-2">
              <span className="text-xs text-[#7A756D] uppercase tracking-wider">Direct Studio Contact</span>
              <a
                href={BRAND.mailtoGeneral}
                className="text-sm font-medium text-[#1C1A18] hover:underline font-mono"
              >
                {BRAND.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
