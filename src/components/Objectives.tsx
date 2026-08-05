import React from 'react';
import { Target, Compass, Sparkles, BookOpen, HeartHandshake, Users, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface ObjectivesProps {
  lang: Language;
}

export const Objectives: React.FC<ObjectivesProps> = ({ lang }) => {
  const goals = [
    {
      icon: BookOpen,
      titleId: 'Orientasi & Adaptasi Akademik',
      titleEn: 'Academic Orientation & Adaptation',
      descId: 'Memperkenalkan lingkungan kampus, kurikulum pembelajaran, serta Visi & Misi Program Studi Tadris Bahasa Inggris (TBI).',
      descEn: 'Introducing campus environment, learning curriculum, and the Vision & Mission of the English Education Department.',
    },
    {
      icon: Sparkles,
      titleId: 'Pengembangan Bakat & Minat',
      titleEn: 'Talent & Interest Development',
      descId: 'Menumbuhkan potensi kreatif, bakat seni, kepemimpinan, dan kepercayaan diri mahasiswa baru dalam skala kampus.',
      descEn: 'Fostering creative potential, arts talent, leadership, and self-confidence of new students on a campus scale.',
    },
    {
      icon: HeartHandshake,
      titleId: 'Kebersamaan & Memory Building',
      titleEn: 'Togetherness & Memory Building',
      descId: 'Membangun ikatan kekeluargaan antara mahasiswa baru, senior panitia, dan seluruh jajaran dosen TBI.',
      descEn: 'Building strong family bonds among new students, committee seniors, and the entire TBI faculty members.',
    },
  ];

  return (
    <section id="tujuan" className="py-24 bg-slate-900 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-bold uppercase tracking-widest">
            {lang === 'id' ? 'Latar Belakang & Tujuan' : 'Background & Objectives'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {lang === 'id' ? 'Membangun Generasi Unggul TBI' : 'Empowering The Next TBI Generation'}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {lang === 'id'
              ? 'Memasuki dunia perkuliahan merupakan fase penting bagi mahasiswa baru untuk membangun kesiapan mental maupun intelektual. ETATION MMXXVI hadir sebagai jembatan awal adaptasi.'
              : 'Entering university is a vital transition phase for new students to build mental and intellectual readiness. ETATION MMXXVI acts as the primary bridge.'}
          </p>
        </div>

        {/* 3 Core Goals Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {goals.map((goal, index) => {
            const IconComponent = goal.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-slate-950/70 border border-slate-800/80 hover:border-pink-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-rose-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {lang === 'id' ? goal.titleId : goal.titleEn}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {lang === 'id' ? goal.descId : goal.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Target Audience Highlight Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-widest">
                <Users className="w-4 h-4" />
                <span>Target Segment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {lang === 'id' ? 'Audiens & Sasaran Kegiatan' : 'Event Target Demographics'}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {lang === 'id'
                  ? 'Sponsorship Anda akan menjangkau langsung audiens potensial generasi muda yang aktif, antusias, dan terhubung secara digital.'
                  : 'Your sponsorship will directly reach an active, enthusiastic, and digitally connected young audience segment.'}
              </p>
            </div>

            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">350+ Mahasiswa Baru</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Peserta utama angkatan 2026 Jurusan Tadris Bahasa Inggris.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">40+ Panitia Active Crew</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Tim publikasi & promotor langsung di Instagram & TikTok.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Dosen & Civitas UIN SATU</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Tamu VVIP, juri, dan akademisi pimpinan fakultas.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">160K+ Digital Audience</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Jangkauan eksposur konten media sosial official HMPS TBI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
