import React, { useState } from 'react';
import { Check, X, Sparkles, Award, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { SPONSOR_PACKAGES } from '../data/proposalData';
import { Language, SponsorPackage } from '../types';

interface PackagesSectionProps {
  lang: Language;
  onSelectPackage: (pkgId: 'diamond' | 'platinum' | 'gold' | 'silver' | 'custom') => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  lang,
  onSelectPackage,
}) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'matrix'>('cards');

  const formatPrice = (p: number) => {
    return 'Rp ' + (p / 1000).toLocaleString('id-ID') + '.000';
  };

  return (
    <section id="paket" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-bold uppercase tracking-widest">
            {lang === 'id' ? 'Pilihan Kemitraan' : 'Partnership Packages'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {lang === 'id' ? 'Paket Sponsor ETATION MMXXVI' : 'Sponsorship Packages'}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {lang === 'id'
              ? 'Pilih skema kerjasama yang tepat sesuai dengan strategi promosi dan efisiensi anggaran brand Anda.'
              : 'Choose the ideal partnership scheme aligned with your brand promotion goals and budget.'}
          </p>

          {/* Toggle Tab Cards vs Matrix */}
          <div className="inline-flex p-1 rounded-full bg-slate-900 border border-slate-800 mt-4">
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'cards'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'id' ? 'Tampilan Kartu' : 'Card View'}
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'id' ? 'Matriks Komparasi' : 'Comparison Matrix'}
            </button>
          </div>
        </div>

        {/* Card View Mode */}
        {activeTab === 'cards' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
            {SPONSOR_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl bg-slate-900 p-6 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-2.5 ${
                  pkg.popular
                    ? 'border-pink-500/80 shadow-glow ring-1 ring-pink-500/50'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{lang === 'id' ? 'Paling Populer' : 'Most Popular'}</span>
                  </div>
                )}

                <div>
                  {/* Package Name & Price */}
                  <div className="space-y-3 pb-6 border-b border-slate-800">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${pkg.badgeColor}`}>
                      {pkg.name} Tier
                    </span>
                    <p className="text-3xl font-serif font-bold text-white">
                      {formatPrice(pkg.price)}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      Ukuran Logo: <span className="text-slate-200 font-bold">{pkg.logoSize}</span>
                    </p>
                  </div>

                  {/* Benefits Checklist */}
                  <div className="py-6 space-y-3 text-xs">
                    <div className="flex items-start gap-2.5 text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Logo Media Publikasi (Cetak & Digital)</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Adlibs MC Pembawa Acara</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pkg.benefits.instastory}</span>
                    </div>

                    <div className={`flex items-start gap-2.5 ${pkg.benefits.videoAd === 'Tidak Termasuk' ? 'text-slate-500' : 'text-slate-200 font-semibold'}`}>
                      {pkg.benefits.videoAd === 'Tidak Termasuk' ? (
                        <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                      ) : (
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      <span>{pkg.benefits.videoAd}</span>
                    </div>

                    {pkg.benefits.boothSpace && (
                      <div className="flex items-start gap-2.5 text-pink-400 font-bold">
                        <Sparkles className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                        <span>Penempatan Stand / Booth Produk</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-md'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
                  }`}
                >
                  <span>{lang === 'id' ? 'Pilih Paket Ini' : 'Select Package'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Matrix View Mode */}
        {activeTab === 'matrix' && (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-x-auto shadow-2xl mb-16">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-widest border-b border-slate-800">
                  <th className="p-5 font-bold">Fasilitas / Benefit</th>
                  <th className="p-5 text-center text-pink-400 font-bold">Diamond (Rp 750k)</th>
                  <th className="p-5 text-center text-purple-400 font-bold">Platinum (Rp 625k)</th>
                  <th className="p-5 text-center text-amber-400 font-bold">Gold (Rp 400k)</th>
                  <th className="p-5 text-center text-slate-300 font-bold">Silver (Rp 250k)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                <tr>
                  <td className="p-5 font-bold">Ukuran Logo Banner</td>
                  <td className="p-5 text-center font-bold text-pink-400">XL (Extra Large)</td>
                  <td className="p-5 text-center font-bold text-purple-400">L (Large)</td>
                  <td className="p-5 text-center font-bold text-amber-400">M (Medium)</td>
                  <td className="p-5 text-center font-bold text-slate-400">S (Small)</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold">Logo Media Cetak & Digital</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold">Adlibs MC Saat Acara</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔ Utama</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔ Regular</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔ Regular</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔ Mention</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold">Promosi Instagram Story</td>
                  <td className="p-5 text-center font-bold text-pink-400">40+ Panitia Crew</td>
                  <td className="p-5 text-center font-bold text-purple-400">15+ Winner Crew</td>
                  <td className="p-5 text-center text-slate-300">Tag Feed IG</td>
                  <td className="p-5 text-center text-slate-400">Mention Story</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold">Playback Video Iklan</td>
                  <td className="p-5 text-center font-bold text-emerald-400">Max 1 Menit</td>
                  <td className="p-5 text-center font-bold text-emerald-400">Max 30 Detik</td>
                  <td className="p-5 text-center text-slate-500">-</td>
                  <td className="p-5 text-center text-slate-500">-</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold">Stand / Booth Produk Space</td>
                  <td className="p-5 text-center font-bold text-emerald-400">✔ Priority Space</td>
                  <td className="p-5 text-center text-slate-500">-</td>
                  <td className="p-5 text-center text-slate-500">-</td>
                  <td className="p-5 text-center text-slate-500">-</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold">Sertifikat Kerjasama Official</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔</td>
                  <td className="p-5 text-center text-emerald-400 font-bold">✔</td>
                </tr>
              </tbody>
              <tfoot className="bg-slate-950 border-t border-slate-800">
                <tr>
                  <td className="p-5 font-bold text-slate-400">Aksi Fast Response</td>
                  {SPONSOR_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className="p-5 text-center">
                      <button
                        onClick={() => onSelectPackage(pkg.id)}
                        className="px-4 py-2 rounded-xl bg-pink-500/20 text-pink-400 hover:bg-pink-500 hover:text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        Pilih {pkg.name}
                      </button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        )}

        {/* Custom Sponsorship / Barter Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-pink-950/40 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider">
              {lang === 'id' ? 'Kemitraan Fleksibel' : 'Flexible Partnership'}
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              {lang === 'id' ? 'Ingin Sponsor Barter Produk (In-Kind) atau Custom?' : 'In-Kind Product Barter or Custom Request?'}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              {lang === 'id'
                ? 'Kami menyambut baik kerjasama berupa konsumsi, goodie bag, voucher diskon, merchandise, atau kebutuhan peralatan event. Kontak panitia untuk penyesuaian benefit.'
                : 'We welcome product sponsorships such as food & beverage, merchandise, vouchers, or event equipment. Contact us to adjust benefits.'}
            </p>
          </div>

          <button
            onClick={() => onSelectPackage('custom')}
            className="px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-lg whitespace-nowrap cursor-pointer transition-transform hover:scale-105"
          >
            {lang === 'id' ? 'Pengajuan Custom Barter' : 'Submit Custom Request'}
          </button>
        </div>
      </div>
    </section>
  );
};
