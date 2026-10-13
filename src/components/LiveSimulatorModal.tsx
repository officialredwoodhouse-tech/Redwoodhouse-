import React, { useState } from 'react';
import { X, Bot, Route, Sparkles, CheckCircle2, Play, RefreshCw, ArrowRight } from 'lucide-react';
import { BRAND } from '../constants/assets';

interface LiveSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveSimulatorModal: React.FC<LiveSimulatorModalProps> = ({ isOpen, onClose }) => {
  const [industry, setIndustry] = useState<'agency' | 'clinic' | 'hospital' | 'gym'>('clinic');
  const [simulationState, setSimulationState] = useState<'idle' | 'qualifying' | 'routing' | 'completed'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  if (!isOpen) return null;

  const scenarios = {
    agency: {
      title: 'Agency Inbound Lead',
      incoming: 'Meta ad lead: "Looking to scale our dental DSO with $40k/mo ad spend. Need onboarding ASAP."',
      qualifyLog: 'AI Agent identified high-intent ICP: budget $40k/mo, multi-location. Extracted key decision maker.',
      routeLog: 'Dispatched directly to Senior Growth Partner calendar with pre-qualification brief attached.',
      completeLog: 'Provisioned Slack client channel, synced CRM deal stage, queued Monday 8:00 AM reporting agent.',
    },
    clinic: {
      title: 'Specialty Clinic Patient Inquiry',
      incoming: 'WhatsApp 11:42 PM: "Severe lumbar pain radiating to right leg. Do you have appointments tomorrow?"',
      qualifyLog: 'AI Clinical Triage qualified severity as non-emergency radiculopathy. Checked Dr. Mehta orthopedic schedule.',
      routeLog: 'Locked 10:30 AM specialist slot, sent instant calendar invite & automated pre-visit medical intake link.',
      completeLog: 'Synced EHR patient profile, scheduled automated 48h/2h WhatsApp reminder sequence with 0% staff intervention.',
    },
    hospital: {
      title: 'Multi-Department Hospital Intake',
      incoming: 'Web Portal: "Referral from regional clinic for cardiac assessment with recent Holter monitor report."',
      qualifyLog: 'Document OCR processed Holter PDF, extracted arrhythmia flags, and assigned urgency score Tier 2.',
      routeLog: 'Routed file to Cardiology OPD triage desk and dispatched instant SMS to duty cardiologist.',
      completeLog: 'Digital patient chart generated, insurance eligibility verified, bed availability verified.',
    },
    gym: {
      title: 'Gym Trial Lead',
      incoming: 'Instagram Ad DM: "Hey! What are the rates for personal training and can I try a class this evening?"',
      qualifyLog: 'Bot responded in 18 seconds, offered VIP 1-day pass, collected fitness goals (hypertrophy/strength).',
      routeLog: 'Booked 6:30 PM Coach Marcus intro session, sent digital waiver and direct QR access pass.',
      completeLog: 'Lead synced to member database, scheduled post-workout retention follow-up 2 hours after check-in.',
    },
  };

  const handleRunSimulation = () => {
    setSimulationState('qualifying');
    setLogs([`[0.0s] Incoming event captured across channel.`]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[0.4s] [STAGE 01: QUALIFY] ${scenarios[industry].qualifyLog}`,
      ]);
      setSimulationState('routing');
    }, 1100);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[0.9s] [STAGE 02: ROUTE] ${scenarios[industry].routeLog}`,
      ]);
      setSimulationState('completed');
    }, 2200);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[1.4s] [STAGE 03: GROW] ${scenarios[industry].completeLog}`,
        `[1.5s] System state: Zero manual handoffs. All signals synchronized.`,
      ]);
    }, 2900);
  };

  const currentScenario = scenarios[industry];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#F4F1EB] border border-[#DDD7CB] shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#6B665E] hover:text-[#0A111D] hover:bg-[#E6E1D8]"
          aria-label="Close simulator"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="size-2 rounded-full bg-[#BA1A24]" />
          <span className="text-caption uppercase tracking-[0.18em] font-semibold text-[#BA1A24]">
            Redwood House Operating Layer Simulator
          </span>
        </div>

        <h3 className="font-display text-2xl font-semibold text-[#0A111D]">
          Live Automation Pipeline Test
        </h3>
        <p className="mt-1 text-sm text-[#6B665E]">
          See how real customer inquiries are processed autonomously from capture to back-office execution.
        </p>

        {/* Industry switcher */}
        <div className="mt-6 flex flex-wrap gap-2 border-b border-[#DDD7CB] pb-4">
          {(['clinic', 'agency', 'hospital', 'gym'] as const).map((ind) => (
            <button
              key={ind}
              onClick={() => {
                setIndustry(ind);
                setSimulationState('idle');
                setLogs([]);
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                industry === ind
                  ? 'bg-[#0A192F] text-white border-b-2 border-b-[#BA1A24]'
                  : 'bg-[#E6E1D8] text-[#6B665E] hover:bg-[#DDD7CB] text-[#0A111D]'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Incoming Payload Box */}
        <div className="mt-5 bg-white border border-[#DDD7CB] p-4 text-xs font-mono text-[#0A111D]">
          <span className="text-[#6B665E] uppercase tracking-wider block mb-1">
            Simulated Inbound Signal:
          </span>
          <p className="font-sans text-sm text-[#0A111D]">{currentScenario.incoming}</p>
        </div>

        {/* Pipeline Stage Visualizer */}
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div
            className={`p-3 border text-center transition-all ${
              simulationState === 'qualifying' || simulationState === 'routing' || simulationState === 'completed'
                ? 'border-[#0A192F] bg-[#0A192F]/10 text-[#0A192F]'
                : 'border-[#DDD7CB] bg-white text-[#6B665E]'
            }`}
          >
            <Bot className="size-5 mx-auto mb-1 text-[#BA1A24]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider block">
              1. Qualify
            </span>
            <span className="text-[10px] text-[#6B665E]">AI Triage</span>
          </div>

          <div
            className={`p-3 border text-center transition-all ${
              simulationState === 'routing' || simulationState === 'completed'
                ? 'border-[#0A192F] bg-[#0A192F]/10 text-[#0A192F]'
                : 'border-[#DDD7CB] bg-white text-[#6B665E]'
            }`}
          >
            <Route className="size-5 mx-auto mb-1 text-[#BA1A24]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider block">
              2. Route
            </span>
            <span className="text-[10px] text-[#6B665E]">Calendar/Staff</span>
          </div>

          <div
            className={`p-3 border text-center transition-all ${
              simulationState === 'completed'
                ? 'border-[#BA1A24] bg-[#BA1A24]/10 text-[#BA1A24]'
                : 'border-[#DDD7CB] bg-white text-[#6B665E]'
            }`}
          >
            <Sparkles className="size-5 mx-auto mb-1 text-[#BA1A24]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider block">
              3. Compound
            </span>
            <span className="text-[10px] text-[#6B665E]">CRM & Reports</span>
          </div>
        </div>

        {/* Terminal Logs */}
        <div className="mt-5 bg-[#060D17] text-emerald-400 p-4 font-mono text-xs max-h-40 overflow-y-auto space-y-1.5 border border-black/50">
          {logs.length === 0 ? (
            <p className="text-white/40">// Click "Execute Pipeline" below to trigger the simulation.</p>
          ) : (
            logs.map((log, i) => <div key={i}>{log}</div>)
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleRunSimulation}
            disabled={simulationState === 'qualifying' || simulationState === 'routing'}
            className="inline-flex items-center gap-2 bg-[#0A192F] hover:bg-[#172A45] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors disabled:opacity-50 cursor-pointer"
          >
            <Play className="size-3.5 text-[#BA1A24]" />
            <span>Execute Pipeline</span>
          </button>

          <a
            href={`mailto:${BRAND.email}?subject=Deploy%20Redwood%20Operating%20Layer%20for%20${industry}`}
            className="text-xs font-semibold uppercase tracking-wider text-[#9B111E] hover:underline flex items-center gap-1"
          >
            <span>Deploy for our team</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
