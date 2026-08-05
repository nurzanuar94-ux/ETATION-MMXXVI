import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, PhoneCall, Sparkles, FileText } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenCalculator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#tujuan', labelId: 'Tujuan', labelEn: 'Objectives' },
    { href: '#anggaran', labelId: 'Anggaran', labelEn: 'Budget' },
    { href: '#reach', labelId: 'Jangkauan', labelEn: 'Reach & Stats' },
    { href: '#paket', labelId: 'Paket Sponsor', labelEn: 'Packages' },
    { href: '#kontak', labelId: 'Kontak', labelEn: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center font-bold text-white shadow-glow group-hover:scale-105 transition-transform">
            E
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-pink-400 transition-colors">
              ETATION MMXXVI
            </span>
            <p className="text-[10px] text-slate-400 -mt-1 font-medium tracking-wider">
              HMPS TBI UIN SATU
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-800/50 px-5 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-pink-400 transition-colors"
              >
                {lang === 'id' ? link.labelId : link.labelEn}
              </a>
            ))}
          </div>

          {/* Calculator Quick Trigger */}
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/30 hover:bg-pink-500/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Simulasi' : 'Calculator'}</span>
          </button>

          {/* Language Selector Toggle */}
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 transition cursor-pointer"
            title="Ganti Bahasa / Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-pink-400" />
            <span className="uppercase font-bold">{lang}</span>
          </button>

          {/* CTA Hubungi Kami */}
          <a
            href="#kontak"
            className="flex items-center gap-2 text-xs font-bold bg-gradient-to-r from-pink-500 to-rose-600 text-white px-5 py-2 rounded-full hover:shadow-glow hover:scale-105 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold"
          >
            {lang.toUpperCase()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-200 hover:text-pink-400 py-1 transition-colors"
              >
                {lang === 'id' ? link.labelId : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/30 text-xs font-bold"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'id' ? 'Simulasi Sponsorship' : 'Sponsorship Calculator'}</span>
            </button>

            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-bold"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'id' ? 'Hubungi Panitia' : 'Contact Committee'}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
