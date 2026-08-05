import React from 'react';
import { Sparkles, ArrowRight, Eye, ShieldCheck, Award, Download, Users } from 'lucide-react';
import { EVENT_DETAILS, REACH_STATS } from '../data/proposalData';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCalculator }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-pink-500/30 text-pink-400 text-xs font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
              <span>
                {lang === 'id' ? 'Proposal Sponsorship Resmi' : 'Official Sponsorship Proposal'}
              </span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-white tracking-tight leading-[1.08]">
                ETATION
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500">
                  MMXXVI
                </span>
              </h1>

              <div className="mt-5 border-l-4 border-pink-500 pl-5 py-1 bg-slate-900/40 rounded-r-xl">
                <p className="text-xl sm:text-2xl font-serif italic text-slate-300">
                  {lang === 'id' ? EVENT_DETAILS.taglineId : EVENT_DETAILS.taglineEn}
                </p>
              </div>
            </div>

            {/* Organizer Subtitle */}
            <div className="space-y-1">
              <p className="text-base sm:text-lg font-bold text-slate-200">
                {EVENT_DETAILS.organizer}
              </p>
              <p className="text-sm text-slate-400 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-pink-500" />
                {EVENT_DETAILS.institution}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#paket"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold text-sm shadow-glow hover:scale-[1.02] transition-all"
              >
                <span>{lang === 'id' ? 'Lihat Paket Sponsor' : 'Explore Packages'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-pink-500/50 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span>{lang === 'id' ? 'Hitung Simulasi Brand' : 'Sponsorship Calculator'}</span>
              </button>
            </div>
          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl">
              {/* Header Badge inside Card */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {lang === 'id' ? 'Mengapa Bermitra?' : 'Why Partner With Us?'}
                    </h3>
                    <p className="text-xs text-slate-400">HMPS TBI Event 2026</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Open Sponsor
                </span>
              </div>

              {/* Quick Key Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-pink-400 text-xs font-bold mb-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Impressions</span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-white">
                    {REACH_STATS.totalImpressions.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Views / 90 Days</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-bold mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>Participants</span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-white">350+</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Mahasiswa Baru TBI</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Crew Reach</span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-white">40+</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Active Promotion Crew</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Media Exposure</span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-white">Multi</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Stage & Digital Media</p>
                </div>
              </div>

              {/* Call to action footer inside card */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {lang === 'id' ? 'Proposal lengkap & MoU Siap' : 'Complete Proposal & MoU Ready'}
                </span>
                <a
                  href="#kontak"
                  className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1"
                >
                  <span>{lang === 'id' ? 'Hubungi Panitia' : 'Contact Us'}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
