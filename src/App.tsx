/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { IdealClientSection } from './components/IdealClientSection';
import { TantrumPlaybookSection } from './components/TantrumPlaybookSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { WhyRedwoodHouseSection } from './components/WhyRedwoodHouseSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { TantrumPlaybookPage } from './pages/TantrumPlaybookPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tantrum-playbook' | 'how-it-works' | 'about' | 'work'>('home');

  // Sync hash routing for direct linkability
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (['tantrum-playbook', 'how-it-works', 'about', 'work'].includes(hash)) {
        setCurrentView(hash as any);
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: string) => {
    if (view === 'home') {
      window.location.hash = '';
      setCurrentView('home');
    } else {
      window.location.hash = view;
      setCurrentView(view as any);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1A18] selection:bg-[#3D1D18] selection:text-white">
      {/* Top Bar Contract compliant Navigation */}
      <Header currentView={currentView} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero
              onExploreWork={() => navigateTo('work')}
              onExplorePlaybook={() => {
                const el = document.getElementById('tantrum-playbook');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigateTo('tantrum-playbook');
                }
              }}
            />
            <ProblemSection />
            <IdealClientSection />
            <TantrumPlaybookSection onViewDedicatedPage={() => navigateTo('tantrum-playbook')} />
            <ServicesSection />
            <HowItWorksSection onLearnMore={() => navigateTo('how-it-works')} />
            <SelectedWorkSection />
            <ValuePropositionSection />
            <WhyRedwoodHouseSection />
            <FAQSection />
            <FinalCTA />
          </>
        )}

        {currentView === 'tantrum-playbook' && (
          <TantrumPlaybookPage onBack={() => navigateTo('home')} />
        )}

        {currentView === 'how-it-works' && (
          <HowItWorksPage onBack={() => navigateTo('home')} />
        )}

        {currentView === 'about' && (
          <AboutPage onBack={() => navigateTo('home')} />
        )}

        {currentView === 'work' && (
          <WorkPage
            onBack={() => navigateTo('home')}
            onNavigatePlaybook={() => navigateTo('tantrum-playbook')}
          />
        )}
      </main>

      {/* Minimal Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
