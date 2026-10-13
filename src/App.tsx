/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SiteNav } from './components/SiteNav';
import { Hero } from './components/Hero';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ApproachSection } from './components/ApproachSection';
import { FitSection } from './components/FitSection';
import { ContactSection } from './components/ContactSection';
import { SiteFooter } from './components/SiteFooter';
import { LiveSimulatorModal } from './components/LiveSimulatorModal';
import { PageEffects } from './components/PageEffects';

export default function App() {
  const [simulatorOpen, setSimulatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F1EB] text-[#0A111D] flex flex-col font-sans selection:bg-[#9B111E]/15 selection:text-[#9B111E]">
      {/* Visual Page Effects: reading progress bar, tactile grain, cursor spotlight, floating dock */}
      <PageEffects onOpenSimulator={() => setSimulatorOpen(true)} />

      {/* Sticky Top Header Nav */}
      <SiteNav onOpenSimulator={() => setSimulatorOpen(true)} />

      {/* Main Page Sections matching redwood-house.polsia.io verbatim */}
      <main className="overflow-hidden flex-1">
        {/* Hero Section with Operating Layer Live Card */}
        <Hero
          onStartConversation={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSeeCapabilities={() => {
            const el = document.getElementById('capabilities');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 01: What We Build (Capabilities) */}
        <CapabilitiesSection />

        {/* Section 02: How We Work (Approach) & A Considered Stack */}
        <ApproachSection />

        {/* Section 03: Who It Is For (Fit) & 8-Vertical Deep Dive */}
        <FitSection />

        {/* Section 04: Contact / Tell Us Where The System Is Getting In Your Way */}
        <ContactSection />
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Interactive Operating Layer Simulator Modal */}
      <LiveSimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />
    </div>
  );
}
