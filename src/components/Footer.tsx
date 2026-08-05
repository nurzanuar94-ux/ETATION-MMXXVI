import React from 'react';
import { ChevronUp, Heart } from 'lucide-react';
import { EVENT_DETAILS } from '../data/proposalData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <span className="font-serif text-xl font-bold text-white tracking-tight">
              {EVENT_DETAILS.title}
            </span>
            <p className="text-xs text-slate-500 mt-1">
              {EVENT_DETAILS.organizer} • {EVENT_DETAILS.institution}
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#tujuan" className="hover:text-pink-400 transition">Tujuan</a>
            <a href="#anggaran" className="hover:text-pink-400 transition">Anggaran</a>
            <a href="#reach" className="hover:text-pink-400 transition">Analytics</a>
            <a href="#paket" className="hover:text-pink-400 transition">Paket Sponsor</a>
            <a href="#kontak" className="hover:text-pink-400 transition">Kontak</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition cursor-pointer"
            title="Kembali ke Atas"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-8 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 HMPS Tadris Bahasa Inggris (TBI). UIN Sayyid Ali Rahmatullah Tulungagung.</p>
          <p className="flex items-center gap-1">
            <span>Official Web Proposal</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>ETATION MMXXVI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
