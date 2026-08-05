import React from 'react';
import { Eye, TrendingUp, Users, Instagram, Share2, Award, Smartphone } from 'lucide-react';
import { REACH_STATS } from '../data/proposalData';
import { Language } from '../types';

interface ReachAnalyticsProps {
  lang: Language;
}

export const ReachAnalytics: React.FC<ReachAnalyticsProps> = ({ lang }) => {
  return (
    <section id="reach" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-bold uppercase tracking-widest">
            {lang === 'id' ? 'Jangkauan & Performa Media' : 'Media Performance & Audience Reach'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {lang === 'id' ? 'Visibilitas Tinggi Brand Anda' : 'High Visibility for Your Brand'}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {lang === 'id'
              ? 'Platform media sosial HMPS TBI merupakan sarana promosi yang sangat efektif dengan statistik performa organic impressions yang tinggi.'
              : 'HMPS TBI social media platforms serve as an effective promotional ecosystem with proven high organic impressions.'}
          </p>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Big Hero Stat Box */}
          <div className="md:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-tr from-pink-950/40 via-slate-900 to-slate-900 border border-pink-500/30 flex flex-col justify-between shadow-glow relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold uppercase tracking-widest">
                  Total Impressions
                </span>
                <Instagram className="w-6 h-6 text-pink-400" />
              </div>

              <div>
                <h3 className="text-6xl sm:text-7xl font-serif font-extrabold text-white tracking-tight">
                  163.412
                </h3>
                <p className="text-slate-300 font-semibold text-lg mt-2">
                  {lang === 'id' ? 'Views Konten Media Dalam 90 Hari' : 'Content Views in Last 90 Days'}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'id'
                  ? 'Promosi produk Anda akan langsung disaksikan oleh ratusan ribu audiens potensial secara terstruktur melalui Feed, Story, & Video Reel.'
                  : 'Your brand will be showcased directly to hundreds of thousands of organic viewers through Feeds, Stories, and Reels.'}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Official IG: {REACH_STATS.instagramAccount}</span>
              <a
                href={`https://instagram.com/${REACH_STATS.instagramAccount.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="text-pink-400 font-bold hover:text-pink-300 flex items-center gap-1"
              >
                <span>Buka Instagram</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="md:col-span-6 grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-pink-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-white">+52.4%</p>
                <p className="text-sm font-bold text-slate-200 mt-1">Viewers Growth Rate</p>
                <p className="text-xs text-slate-400 mt-1">
                  Peningkatan penonton organik secara berkelanjutan tiap periode event.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-pink-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-white">41.4%</p>
                <p className="text-sm font-bold text-slate-200 mt-1">Non-Followers Reach</p>
                <p className="text-xs text-slate-400 mt-1">
                  Menjangkau penonton baru di luar pengikut akun resmi HMPS.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-pink-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-white">12.8K+</p>
                <p className="text-sm font-bold text-slate-200 mt-1">Active Community</p>
                <p className="text-xs text-slate-400 mt-1">
                  Pengikut setia di ekosistem civitas akademika UIN SATU.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-pink-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-white">40+ Crew</p>
                <p className="text-sm font-bold text-slate-200 mt-1">Story Amplifiers</p>
                <p className="text-xs text-slate-400 mt-1">
                  Promosi serentak di akun Story panitia untuk mengamplifikasi jangkauan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demographics Bar */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
          <h3 className="text-lg font-serif font-bold text-white mb-6">
            {lang === 'id' ? 'Profil Demografi Audiens Utama' : 'Audience Demographic Profile'}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Age */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-slate-300 font-semibold">
                <span>Usia Gen-Z (18-24 Tahun)</span>
                <span className="text-pink-400">84.2%</span>
              </div>
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 w-[84.2%]" />
              </div>
              <p className="text-[11px] text-slate-400">Mahasiswa aktif, gen-z, & early career young adults.</p>
            </div>

            {/* Gender */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-slate-300 font-semibold">
                <span>Wanita (68%) / Pria (32%)</span>
                <span className="text-purple-400">68% / 32%</span>
              </div>
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-purple-500 w-[68%]" />
                <div className="h-full bg-indigo-500 w-[32%]" />
              </div>
              <p className="text-[11px] text-slate-400">Segmen pembeli konsumtif & responsive terhadap promosi visual.</p>
            </div>

            {/* Top Region */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-slate-300 font-semibold">
                <span>Tulungagung, Kediri, Blitar, Malang</span>
                <span className="text-emerald-400">Jawa Timur</span>
              </div>
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[92%]" />
              </div>
              <p className="text-[11px] text-slate-400">Konsentrasi area Jawa Timur bagian selatan & sekitarnya.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
