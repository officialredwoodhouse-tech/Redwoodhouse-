import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Cpu } from 'lucide-react';
import { BRAND } from '../constants/assets';

interface SiteNavProps {
  onOpenSimulator?: () => void;
}

export const SiteNav: React.FC<SiteNavProps> = ({ onOpenSimulator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'border-[#DDD7CB] bg-[#F4F1EB]/95 backdrop-blur-md shadow-xs'
          : 'border-[#DDD7CB]/80 bg-[#F4F1EB]/80 backdrop-blur-sm'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Brand logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="mr-4 flex items-center gap-2 text-base font-semibold tracking-tight text-[#0A111D] hover:text-[#9B111E] transition-colors"
        >
          <span className="inline-block size-2 rounded-full bg-[#9B111E]" aria-hidden="true" />
          <span>{BRAND.name}</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          <button
            onClick={() => scrollToSection('capabilities')}
            className="px-3.5 py-1.5 text-sm font-medium text-[#6B665E] hover:text-[#0A111D] hover:bg-[#E6E1D8]/60 transition-colors"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection('approach')}
            className="px-3.5 py-1.5 text-sm font-medium text-[#6B665E] hover:text-[#0A111D] hover:bg-[#E6E1D8]/60 transition-colors"
          >
            Approach
          </button>
          <button
            onClick={() => scrollToSection('fit')}
            className="px-3.5 py-1.5 text-sm font-medium text-[#6B665E] hover:text-[#0A111D] hover:bg-[#E6E1D8]/60 transition-colors"
          >
            Who it is for
          </button>

          {onOpenSimulator && (
            <button
              onClick={onOpenSimulator}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#9B111E] bg-[#9B111E]/8 hover:bg-[#9B111E]/15 flex items-center gap-1.5 transition-colors mr-2 ml-1"
            >
              <Cpu className="size-3.5" />
              Live Pipeline
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="inline-flex items-center justify-center gap-1.5 bg-[#0A192F] hover:bg-[#172A45] text-white px-4 py-1.5 text-sm font-medium transition-colors shadow-xs"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="size-4 text-[#BA1A24]" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0A111D] hover:bg-[#E6E1D8] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#DDD7CB] bg-[#F4F1EB] px-4 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('capabilities')}
              className="text-left px-3 py-2 text-sm font-medium text-[#0A111D] hover:bg-[#E6E1D8]"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('approach')}
              className="text-left px-3 py-2 text-sm font-medium text-[#0A111D] hover:bg-[#E6E1D8]"
            >
              Approach
            </button>
            <button
              onClick={() => scrollToSection('fit')}
              className="text-left px-3 py-2 text-sm font-medium text-[#0A111D] hover:bg-[#E6E1D8]"
            >
              Who it is for
            </button>
            {onOpenSimulator && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSimulator();
                }}
                className="text-left px-3 py-2 text-sm font-medium text-[#9B111E] bg-[#9B111E]/8 flex items-center gap-2"
              >
                <Cpu className="size-4" />
                Live Pipeline Simulator
              </button>
            )}
            <div className="pt-2 border-t border-[#DDD7CB] mt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="flex items-center justify-between bg-[#0A192F] text-white px-4 py-2.5 text-sm font-medium"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="size-4 text-[#BA1A24]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
