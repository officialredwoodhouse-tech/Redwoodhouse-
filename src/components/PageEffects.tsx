import React, { useEffect, useState } from 'react';
import { ArrowUp, ArrowUpRight, Cpu } from 'lucide-react';

interface PageEffectsProps {
  onOpenSimulator?: () => void;
}

export const PageEffects: React.FC<PageEffectsProps> = ({ onOpenSimulator }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState<string>('');
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Detect if device has fine pointer (mouse/trackpad)
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsPointerDevice(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      setShowFloatingBar(window.scrollY > 450);

      // Identify active section
      const sections = [
        { id: 'contact', label: 'Contact' },
        { id: 'fit', label: 'Who It Is For' },
        { id: 'approach', label: 'Approach' },
        { id: 'capabilities', label: 'Capabilities' },
        { id: 'hero', label: 'Redwood House' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setCurrentSection(section.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Ultra-thin Reading Progress Bar at the absolute top of the viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#BA1A24] shadow-[0_0_8px_rgba(186,26,36,0.6)] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Tactile Editorial Noise / Paper Grain Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.035] mix-blend-multiply"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Ambient Cursor Spotlight (Subtle warm glow following mouse on desktop) */}
      {isPointerDevice && mousePos && (
        <div
          className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
          aria-hidden="true"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(10, 25, 47, 0.05), transparent 80%)`,
          }}
        />
      )}

      {/* 4. Floating Quick Navigation Dock (appears on scroll) */}
      <div
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 transition-all duration-300 ${
          showFloatingBar
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 p-1.5 bg-[#F4F1EB]/95 backdrop-blur-md border border-[#DDD7CB] shadow-xl text-xs font-medium text-[#0A111D]">
          {/* Section Indicator */}
          {currentSection && (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 text-[#6B665E] border-r border-[#DDD7CB]">
              <span className="size-1.5 rounded-full bg-[#BA1A24] animate-pulse" />
              <span className="tracking-wide uppercase text-[10px] font-semibold text-[#BA1A24]">
                {currentSection}
              </span>
            </div>
          )}

          {/* Live Pipeline Simulator Button */}
          {onOpenSimulator && (
            <button
              onClick={onOpenSimulator}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0A192F] bg-[#0A192F]/8 hover:bg-[#0A192F]/15 transition-colors btn-press-effect"
              title="Open Live Operating Layer Simulation"
            >
              <Cpu className="size-3.5 text-[#BA1A24]" />
              <span className="hidden sm:inline">Live Pipeline</span>
            </button>
          )}

          {/* Quick Contact Button */}
          <button
            onClick={scrollToContact}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A192F] text-white hover:bg-[#172A45] transition-colors btn-press-effect"
          >
            <span>Inquire</span>
            <ArrowUpRight className="size-3.5 text-[#BA1A24]" />
          </button>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-1.5 text-[#6B665E] hover:text-[#0A111D] hover:bg-[#E6E1D8] transition-colors btn-press-effect"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </>
  );
};
