import React from 'react';
import { Cpu, Zap, CheckCircle2, Building2, Stethoscope, Dumbbell, Globe, Code } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const layers = [
    {
      num: '01',
      title: 'Domain & Core Operation',
      role: 'Your Foundation',
      desc: 'Your real-world service: treating patients, coaching athletes, delivering agency client results, or shipping products.',
    },
    {
      num: '02',
      title: 'High-Converting Web Flagship',
      role: 'We engineer',
      desc: 'Sub-second React/Next.js web presence with clean architectural design, commanding positioning, and 99+ Core Web Vitals.',
    },
    {
      num: '03',
      title: 'SEO Marketing & Search Silos',
      role: 'We optimize',
      desc: 'Capturing high-intent commercial searches via programmatic topic clusters, Schema.org graphs, and local dominance.',
    },
    {
      num: '04',
      title: 'Ad & Transaction Funnels',
      role: 'We automate',
      desc: 'Frictionless checkout, Stripe billing, automated payment triggers, and transparent ad ROAS attribution.',
    },
    {
      num: '05',
      title: 'Autonomous AI Workflows',
      role: 'We deploy',
      desc: '24/7 intelligent patient triage, lead scoring, WhatsApp booking bots, and automated client reporting agents.',
    },
    {
      num: '06',
      title: 'Custom Operational Software',
      role: 'We deliver',
      desc: 'Bespoke internal portals, staff dashboards, and integrated CRM systems that save 20+ hours of manual labor per week.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#E8E4DC] bg-[#F4F0E8]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-mono">
            The Disconnection In Modern Business
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1C1A18] tracking-tight">
            A website by itself does not fix broken operations.
          </h2>
          <p className="text-base sm:text-lg text-[#58544E] leading-relaxed">
            Most businesses don't just have a website problem. They have an <strong>operational and conversion bottleneck</strong>: leads sit unanswered for hours, clinic receptionists are overwhelmed with basic booking calls, gym members drop off silently, agencies drown in manual reporting, and ad budgets leak money with zero transaction tracking.
          </p>
          <p className="text-base sm:text-lg text-[#1C1A18] font-medium leading-relaxed">
            That's why Redwood House unites <strong>AI Automation, Custom Software, SEO Marketing, Brand Design, and Web Development</strong> into one connected machine.
          </p>
        </div>

        {/* Visual Pipeline Layers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, idx) => (
            <div
              key={layer.num}
              className="bg-white p-7 rounded-lg border border-[#E8E4DC] hover:border-[#3D1D18]/40 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F4F0E8] mb-4">
                  <span className="font-mono text-sm font-semibold text-[#3D1D18]">
                    {layer.num}
                  </span>
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#78716C]">
                    {layer.role}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-medium text-[#1C1A18] mb-2">
                  {layer.title}
                </h3>
                <p className="text-sm text-[#58544E] leading-relaxed">
                  {layer.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F4F0E8] flex items-center text-xs text-[#78716C]">
                <span>System Architecture Layer {idx + 1} of 6</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Synthesis Callout */}
        <div className="mt-12 bg-white rounded-lg border border-[#E8E4DC] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xl font-serif text-[#1C1A18]">
              One Unified Studio. No Finger-Pointing Between Vendors.
            </h4>
            <p className="text-sm text-[#58544E] leading-relaxed">
              Instead of paying a separate web designer who doesn't understand SEO, a freelancer who writes fragile Zapier scripts, and a generic agency that leaves your operations disconnected, Redwood House builds your digital presence and automations as a single coherent architecture.
            </p>
          </div>
          <div className="shrink-0">
            <div className="text-xs uppercase tracking-wider font-mono text-[#78716C] mb-1">
              Operational Impact
            </div>
            <div className="text-2xl font-serif text-[#3D1D18]">
              24/7 Autonomous Scale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
