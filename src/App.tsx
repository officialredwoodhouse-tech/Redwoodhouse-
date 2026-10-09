/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { IdealClientSection } from './components/IdealClientSection';
import { TantrumPlaybookSection } from './components/TantrumPlaybookSection';
import { ServicesSection } from './components/ServicesSection';
import { TransactionSection } from './components/TransactionSection';
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
import { TransactionPage } from './pages/TransactionPage';

export default function App() {
  const [currentView, setCurrentView] = useState<
    'home' | 'seo-blueprint' | 'transactions' | 'how-it-works' | 'about' | 'work'
  >('home');

  // Sync hash routing for direct linkability
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (hash === 'tantrum-playbook' || hash === 'seo-blueprint') {
        setCurrentView('seo-blueprint');
      } else if (['transactions', 'how-it-works', 'about', 'work'].includes(hash)) {
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

      {/* Main Content Area with Editorial Motion Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentView === 'home' && (
              <>
                <Hero
                  onExploreWork={() => navigateTo('work')}
                  onExplorePlaybook={() => {
                    const el = document.getElementById('seo-blueprint');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigateTo('seo-blueprint');
                    }
                  }}
                />
                <ProblemSection />
                <IdealClientSection />
                <TantrumPlaybookSection onViewDedicatedPage={() => navigateTo('seo-blueprint')} />
                <ServicesSection />
                <TransactionSection
                  onOpenFullTransactionPage={() => navigateTo('transactions')}
                />
                <HowItWorksSection onLearnMore={() => navigateTo('how-it-works')} />
                <SelectedWorkSection />
                <ValuePropositionSection />
                <WhyRedwoodHouseSection />
                <FAQSection />
                <FinalCTA />
              </>
            )}

            {currentView === 'seo-blueprint' && (
              <TantrumPlaybookPage onBack={() => navigateTo('home')} />
            )}

            {currentView === 'transactions' && (
              <TransactionPage onBack={() => navigateTo('home')} />
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
                onNavigatePlaybook={() => navigateTo('seo-blueprint')}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimal Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
