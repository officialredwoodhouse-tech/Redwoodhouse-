import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, Globe, Lock, Cable, Bot, Route, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND } from '../constants/assets';

interface HeroProps {
  onStartConversation?: () => void;
  onSeeCapabilities?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartConversation, onSeeCapabilities }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'qualify',
      title: 'Qualify',
      icon: Bot,
      detail: 'Conversational assistants capture intent and triage real opportunities 24/7.',
    },
    {
      id: 'route',
      title: 'Route',
      icon: Route,
      detail: 'Instant dispatch to calendars, specialist teams, CRM pipelines, or clinic EHR.',
    },
    {
      id: 'grow',
      title: 'Grow',
      icon: Sparkles,
      detail: 'Automated follow-ups, attribution tracking, and executive intelligence compound growth.',
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative border-b border-[#DDD7CB] overflow-hidden bg-[#F4F1EB]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 top-16 size-96 rounded-full bg-[#0A192F]/8 blur-3xl animate-ambient-pulse" />
      <div className="pointer-events-none absolute -left-32 bottom-10 size-80 rounded-full bg-[#9B111E]/8 blur-3xl animate-ambient-pulse [animation-delay:4s]" />

      <div className="container-page relative grid min-h-[calc(100vh-3.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        {/* Left Column: Headline and Positioning with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow badge */}
          <div className="mb-8 flex items-center gap-3 text-caption font-semibold uppercase tracking-[0.18em] text-[#9B111E]">
            <span className="inline-block size-2 rounded-full bg-[#9B111E]" aria-hidden="true" />
            <span>{BRAND.eyebrow}</span>
          </div>

          {/* Display Headline */}
          <h1 className="max-w-4xl font-display text-display text-[#0A111D]">
            {BRAND.headline}
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-body-lg text-[#6B665E]">
            {BRAND.subheadline}
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onStartConversation) onStartConversation();
                else scrollTo('contact');
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#0A192F] hover:bg-[#172A45] text-white px-7 py-3.5 text-sm font-medium transition-colors shadow-sm active:scale-[0.98] group"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="size-4 text-[#BA1A24] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault();
                if (onSeeCapabilities) onSeeCapabilities();
                else scrollTo('capabilities');
              }}
              className="inline-flex items-center justify-center gap-2 border border-[#DDD7CB] bg-white/70 hover:bg-[#E6E1D8] text-[#0A111D] px-7 py-3.5 text-sm font-medium transition-colors active:scale-[0.98]"
            >
              <span>See what we build</span>
              <ArrowDown className="size-4 text-[#9B111E]" />
            </a>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#DDD7CB] pt-5 text-small text-[#6B665E]">
            <span className="inline-flex items-center gap-2 text-[#9B111E] font-semibold">
              <Sparkles className="size-4 text-[#9B111E]" />
              <span>Websites made in a professional way</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe className="size-4 text-[#0A192F]" />
              <span>India and international markets</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Lock className="size-4 text-[#0A192F]" />
              <span>Privacy-conscious by design</span>
            </span>
          </div>
        </motion.div>

        {/* Right Column: The Operating Layer Interactive Card with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl lg:ml-auto"
        >
          {/* Outer Card: Midnight Navy Primary Container */}
          <div className="relative overflow-hidden rounded-none border border-[#0A192F]/60 bg-[#0A192F] text-white shadow-2xl shadow-[#0A192F]/30">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/15 px-5 py-4 text-caption font-semibold uppercase tracking-[0.16em] bg-[#071324]">
              <span className="tracking-widest">Operating layer</span>
              <span className="flex items-center gap-2 text-white/80">
                <span className="size-2 rounded-full bg-[#BA1A24] animate-pulse" aria-hidden="true" />
                <span className="text-white/90">Live view</span>
              </span>
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-7">
              {/* People <-> Systems */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center text-caption font-semibold uppercase tracking-[0.12em]">
                <div className="border border-white/20 p-4 bg-white/5 backdrop-blur-xs font-mono">
                  People
                </div>
                <div className="relative flex items-center justify-center p-2">
                  <Cable className="size-5 text-[#BA1A24]" />
                  <span className="absolute -top-0.5 right-2 size-1.5 rounded-full bg-[#BA1A24] animate-ping" />
                  <span className="absolute -top-0.5 right-2 size-1.5 rounded-full bg-[#BA1A24]" />
                </div>
                <div className="border border-white/20 p-4 bg-white/5 backdrop-blur-xs font-mono">
                  Systems
                </div>
              </div>

              {/* Connected 3-Step Pipeline */}
              <div className="relative my-8 grid grid-cols-3 gap-3">
                {/* Connecting dashed line with animated signal packet */}
                <div className="absolute left-[16.6667%] right-[16.6667%] top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed border-white/30 overflow-hidden">
                  <div className="absolute top-0 h-[2px] w-12 bg-[#BA1A24] shadow-[0_0_10px_#BA1A24] animate-wire-packet" />
                </div>

                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className="relative z-10 flex flex-col items-center gap-3 focus:outline-none group text-left cursor-pointer"
                    >
                      <div
                        className={`flex size-14 items-center justify-center rounded-full border transition-all duration-200 ${
                          isActive
                            ? 'border-[#BA1A24] bg-white text-[#0A192F] scale-105 shadow-lg ring-4 ring-[#BA1A24]/30'
                            : 'border-white/25 bg-[#0D203D] text-white hover:border-white/60 hover:-translate-y-0.5'
                        }`}
                      >
                        <Icon className="size-6" />
                      </div>
                      <span
                        className={`text-caption uppercase tracking-[0.14em] font-medium transition-colors ${
                          isActive ? 'text-white font-semibold' : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Explainer Tooltip */}
              <div className="bg-white/8 border border-white/15 px-4 py-3 mb-6 text-xs text-white/90">
                <span className="font-semibold text-[#BA1A24] uppercase tracking-wider mr-2 font-mono">
                  Stage {activeStep + 1}:
                </span>
                {steps[activeStep].detail}
              </div>

              {/* Bottom Before / After metrics */}
              <div className="grid gap-3 border-t border-white/15 pt-5 text-small">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Manual handoffs</span>
                  <span className="line-through opacity-60 text-white/70 font-mono">Everywhere</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Useful signal</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#BA1A24] inline" />
                    In the right place
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Technical Corner Accents */}
          <div
            className="absolute -bottom-5 -left-5 hidden size-24 border-b border-l border-[#0A192F]/40 sm:block pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -right-4 -top-4 hidden size-16 border-r border-t border-[#9B111E]/40 sm:block pointer-events-none"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
};
