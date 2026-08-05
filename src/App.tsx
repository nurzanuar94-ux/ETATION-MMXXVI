import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Objectives } from './components/Objectives';
import { BudgetSection } from './components/BudgetSection';
import { ReachAnalytics } from './components/ReachAnalytics';
import { PackagesSection } from './components/PackagesSection';
import { SponsorshipCalculator } from './components/SponsorshipCalculator';
import { PaymentAndContact } from './components/PaymentAndContact';
import { Footer } from './components/Footer';
import { Language } from './types';
import { Sparkles, MessageSquare, ShieldCheck, X } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<'diamond' | 'platinum' | 'gold' | 'silver' | 'custom'>('diamond');

  const handleSelectPackage = (pkgId: 'diamond' | 'platinum' | 'gold' | 'silver' | 'custom') => {
    setSelectedPackage(pkgId);
    setCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenCalculator={() => setCalculatorOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onOpenCalculator={() => setCalculatorOpen(true)}
      />

      {/* Objectives & Background Section */}
      <Objectives lang={lang} />

      {/* Budget Breakdown (RAB) Section */}
      <BudgetSection lang={lang} />

      {/* Reach & Media Analytics Section */}
      <ReachAnalytics lang={lang} />

      {/* Sponsorship Packages & Matrix Section */}
      <PackagesSection
        lang={lang}
        onSelectPackage={handleSelectPackage}
      />

      {/* Static Interactive Calculator Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SponsorshipCalculator
            lang={lang}
            initialPackageId={selectedPackage}
          />
        </div>
      </section>

      {/* Payment & Contact Section */}
      <PaymentAndContact lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Quick Action Drawer Trigger for Mobile & Desktop */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setCalculatorOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-xs shadow-glow hover:scale-105 transition-all cursor-pointer border border-pink-400/40"
        >
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{lang === 'id' ? 'Simulasi Sponsor' : 'Calculator'}</span>
        </button>
      </div>

      {/* Modal Backdrop for Calculator */}
      {calculatorOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="w-full max-w-5xl my-8">
            <SponsorshipCalculator
              lang={lang}
              initialPackageId={selectedPackage}
              onClose={() => setCalculatorOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
