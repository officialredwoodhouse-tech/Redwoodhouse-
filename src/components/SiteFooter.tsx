import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../constants/assets';

export const SiteFooter: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#DDD7CB] bg-[#F4F1EB] py-12 text-sm text-[#6B665E]">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-start justify-between">
          <div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-base font-semibold tracking-tight text-[#0A111D] hover:text-[#9B111E] transition-colors"
            >
              <span className="inline-block size-2 rounded-full bg-[#9B111E]" aria-hidden="true" />
              <span>{BRAND.name}</span>
            </a>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-[#6B665E]">
              {BRAND.tagline}
            </p>
            <p className="mt-2 text-xs font-mono text-[#6B665E]">
              {BRAND.location}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:justify-end">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <button
                onClick={() => scrollTo('capabilities')}
                className="hover:text-[#0A111D] transition-colors"
              >
                Capabilities
              </button>
              <button
                onClick={() => scrollTo('approach')}
                className="hover:text-[#0A111D] transition-colors"
              >
                Approach
              </button>
              <button
                onClick={() => scrollTo('fit')}
                className="hover:text-[#0A111D] transition-colors"
              >
                Who it is for
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="hover:text-[#0A111D] transition-colors"
              >
                Contact
              </button>
            </nav>

            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0A192F] hover:text-[#9B111E] transition-colors hover:underline group"
            >
              <span>Email Redwood House</span>
              <ArrowUpRight className="size-3.5 text-[#BA1A24] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#DDD7CB] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B665E] gap-4">
          <p>© {new Date().getFullYear()} Redwood House. All rights reserved.</p>
          <p className="font-mono text-[11px] opacity-75">
            Architecture: Redwood House Operating Layer
          </p>
        </div>
      </div>
    </footer>
  );
};
