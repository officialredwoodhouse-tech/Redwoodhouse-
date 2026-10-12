import React, { useState } from 'react';
import { BRAND, ASSETS } from '../constants/assets';
import { ArrowUpRight, Cpu, Play, CheckCircle2, RefreshCw, Zap, Building2, Stethoscope, Dumbbell, ShieldCheck, ArrowRight } from 'lucide-react';

interface TantrumPlaybookSectionProps {
  onViewDedicatedPage: () => void;
}

export const TantrumPlaybookSection: React.FC<TantrumPlaybookSectionProps> = ({
  onViewDedicatedPage,
}) => {
  const [activeSimulation, setActiveSimulation] = useState<'agency' | 'clinic' | 'hospital' | 'gym'>('clinic');
  const [simStep, setSimStep] = useState<number>(3); // All complete by default
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const simulationScenarios = {
    clinic: {
      title: 'Specialist Clinic Patient Triage & Booking',
      icon: Stethoscope,
      trigger: 'Patient lands on clinic website from Google Search for "emergency tooth implant"',
      steps: [
        { title: '1. Inbound Triage', desc: 'AI Triage Agent queries symptoms, confirms severity, and offers available doctor slots within 30 seconds.' },
        { title: '2. Identity & Intake', desc: 'Agent texts patient secure WhatsApp intake link. Medical history & insurance card uploaded digitally.' },
        { title: '3. Ad & Transaction', desc: 'Deposit payment processed via Stripe integration; automated receipt and calendar invite synced.' },
        { title: '4. Clinic Dispatch', desc: 'Clinic EHR updated with pre-intake notes. Automated zero-no-show WhatsApp reminder scheduled for T-24h.' },
      ],
      result: 'Consultation booked in 90 seconds without reception staff lifting a finger.',
    },
    agency: {
      title: 'Marketing Agency Client Onboarding & Reporting',
      icon: Building2,
      trigger: 'Enterprise client submits proposal inquiry through bespoke agency flagship',
      steps: [
        { title: '1. Lead Qualification', desc: 'AI agent scores budget, timelines, and scope. Schedules 45-min strategy call with Director.' },
        { title: '2. Contract & Transaction', desc: 'Client signs Master Services Agreement; Stripe billing webhook auto-creates monthly retainer.' },
        { title: '3. Autonomous Setup', desc: 'Agent spins up dedicated Slack channel, Google Drive asset folders, and Notion workspace.' },
        { title: '4. Autonomous Reporting', desc: 'Every Monday at 9:00 AM, AI pulls Meta/Google Ads data and generates an executive performance briefing.' },
      ],
      result: 'Saved 20+ account manager hours per month per client.',
    },
    hospital: {
      title: 'Hospital Department Routing & Alerting',
      icon: Building2,
      trigger: 'Family member contacts emergency or specialist desk online after hours',
      steps: [
        { title: '1. Conversational Routing', desc: 'AI assesses department urgency (Cardiology vs Orthopedic vs General Outpatient).' },
        { title: '2. Doctor Dispatch', desc: 'Secure SMS/Pager alert dispatched to the on-call specialist with incident summary.' },
        { title: '3. Registration & Prepay', desc: 'Digital registration token generated; pre-admission diagnostic tests added to chart.' },
        { title: '4. Family Recovery Updates', desc: 'Automated post-procedure recovery notifications sent to designated family contact.' },
      ],
      result: 'Zero department routing delays, reducing intake bottlenecks by 45%.',
    },
    gym: {
      title: 'Gym Lead-to-Trial & Retention Automation',
      icon: Dumbbell,
      trigger: 'Prospect clicks Meta Ad offer for "7-Day CrossFit & Strength Trial"',
      steps: [
        { title: '1. Instant 30s Contact', desc: 'AI WhatsApp bot texts prospect within 30 seconds of ad form submit to pick trial slot.' },
        { title: '2. Digital Waiver & Pass', desc: 'Prospect completes waiver on mobile; QR code trial gym pass generated instantly.' },
        { title: '3. Attendance Follow-Up', desc: 'Post-workout automated message checks in and delivers exclusive membership link.' },
        { title: '4. Churn Prevention', desc: 'If member skips gym for 10 days, motivational sequence fires with a personal trainer session offer.' },
      ],
      result: 'Trial attendance jumps from 38% to 74%; 30-day member churn drops by 35%.',
    },
  };

  const currentScenario = simulationScenarios[activeSimulation];

  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(0);
    const interval = setInterval(() => {
      setSimStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setIsSimulating(false);
          return 3;
        }
        return prev + 1;
      });
    }, 700);
  };

  return (
    <section id="seo-blueprint" className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Pre-header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DC] mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
              Redwood Systems Architecture
            </span>
            <span aria-hidden="true" className="text-[#A8A29E]">·</span>
            <span className="text-xs font-sans text-[#3D1D18] font-medium">AI Automation & Transaction Blueprint</span>
          </div>
          <button
            onClick={onViewDedicatedPage}
            className="text-xs font-medium text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4 cursor-pointer hidden sm:inline-flex items-center gap-1"
          >
            <span>Inspect 10-Stage Architecture Blueprint</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Main Grid: Visual Automation Showcase + Live Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual System & Provenance */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-[#D5CFC5] shadow-lg bg-white group">
              <img
                src={ASSETS.aiAutomationWorkflow}
                alt="Redwood House AI Automation and Workflow Pipeline Architecture"
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded text-[11px] font-mono flex items-center gap-1.5 border border-white/20">
                <Cpu className="w-3 h-3 text-[#E8E4DC]" />
                <span>Autonomous Agent Pipeline</span>
              </div>
            </div>

            {/* Visual Provenance & Details */}
            <div className="p-4 bg-white rounded-md border border-[#E8E4DC] text-xs text-[#58544E] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#78716C]">Architecture</span>
                <span className="font-serif font-medium text-[#1C1A18]">The Redwood Autonomous Engine</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78716C]">Deployment Studio</span>
                <span className="font-sans text-[#1C1A18]">Redwood House, Chandigarh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78716C]">Scope</span>
                <span className="font-sans text-[#1C1A18]">Agencies · Clinics · Hospitals · Gyms</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Simulation Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest uppercase text-[#78716C]">
                Interactive Workflow Simulation
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] tracking-tight">
                How Our AI & Automation Pipelines Actually Run.
              </h3>
              <p className="text-base text-[#58544E] leading-relaxed">
                Select an industry below and run the simulated workflow to observe how our AI agents, ad transactions, and custom software eliminate manual human overhead.
              </p>
            </div>

            {/* Industry Simulator Tabs */}
            <div className="flex flex-wrap gap-2 pt-2">
              {(['clinic', 'agency', 'hospital', 'gym'] as const).map((key) => {
                const item = simulationScenarios[key];
                const Icon = item.icon;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveSimulation(key);
                      setSimStep(3); // Show full steps
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all cursor-pointer ${
                      activeSimulation === key
                        ? 'bg-[#1C1A18] text-white font-medium shadow-2xs'
                        : 'bg-white text-[#58544E] border border-[#E8E4DC] hover:text-[#1C1A18]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="capitalize">{key === 'clinic' ? 'Clinic' : key === 'agency' ? 'Agency' : key === 'hospital' ? 'Hospital' : 'Gym'}</span>
                  </button>
                );
              })}
            </div>

            {/* Simulation Canvas Box */}
            <div className="bg-white rounded-lg border border-[#E8E4DC] p-6 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F4F0E8]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
                    Simulated Workflow
                  </span>
                  <h4 className="text-base font-serif font-medium text-[#1C1A18] mt-0.5">
                    {currentScenario.title}
                  </h4>
                </div>
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F4F0E8] hover:bg-[#EAE4D7] text-[#1C1A18] text-xs font-medium rounded transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Simulating...' : 'Run Simulation'}</span>
                </button>
              </div>

              {/* Trigger description */}
              <div className="p-3 rounded bg-[#FAF9F7] border border-[#E8E4DC] text-xs text-[#58544E] flex items-center gap-2">
                <span className="font-mono text-[#3D1D18] font-bold uppercase text-[10px] shrink-0">Trigger:</span>
                <span>{currentScenario.trigger}</span>
              </div>

              {/* 4 Pipeline Steps */}
              <div className="space-y-3">
                {currentScenario.steps.map((st, i) => {
                  const isDone = simStep >= i;
                  return (
                    <div
                      key={i}
                      className={`p-3.5 rounded-md border transition-all flex items-start gap-3 ${
                        isDone
                          ? 'border-[#3D1D18]/30 bg-white shadow-2xs'
                          : 'border-dashed border-[#E8E4DC] opacity-40 bg-[#FAF9F7]'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-[#3D1D18]" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-[#D5CFC5] flex items-center justify-center text-[10px] text-[#78716C]">
                            {i + 1}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-[#1C1A18] block">
                          {st.title}
                        </span>
                        <p className="text-xs text-[#58544E] mt-0.5 leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Measured Impact */}
              <div className="p-3.5 rounded bg-[#FAF8F3] border border-[#E8E4DC] flex items-center justify-between text-xs">
                <span className="font-mono text-[#78716C]">Outcome Metric:</span>
                <span className="font-serif italic font-medium text-[#3D1D18]">{currentScenario.result}</span>
              </div>
            </div>

            {/* Dedicated Page Button */}
            <div className="pt-2">
              <button
                onClick={onViewDedicatedPage}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1C1A18] hover:text-[#3D1D18] underline underline-offset-4 cursor-pointer"
              >
                <span>Read Full 10-Stage Automation & Software Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
