import React, { useState } from 'react';
import { Wallet, ChevronDown, ChevronUp, Search, PieChart, Layers, Info } from 'lucide-react';
import { BUDGET_DATA, TOTAL_BUDGET } from '../data/proposalData';
import { Language } from '../types';

interface BudgetSectionProps {
  lang: Language;
}

export const BudgetSection: React.FC<BudgetSectionProps> = ({ lang }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Sie DPAT & Humas');
  const [searchTerm, setSearchTerm] = useState('');

  const formatCurrency = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const toggleExpand = (cat: string) => {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

  const filteredData = BUDGET_DATA.filter((item) => {
    const matchesCategory = item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDesc = item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSub = item.details?.some((d) => d.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory || matchesDesc || matchesSub;
  });

  return (
    <section id="anggaran" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-bold uppercase tracking-widest">
              {lang === 'id' ? 'Transparansi Keuangan' : 'Financial Transparency'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              {lang === 'id' ? 'Rencana Anggaran Biaya' : 'Budget Allocation Plan'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              {lang === 'id'
                ? 'Rincian alokasi kebutuhan dana pelaksanaan ETATION MMXXVI yang disusun secara terukur dan akuntabel.'
                : 'Detailed allocation plan for ETATION MMXXVI designed with strict accountability.'}
            </p>
          </div>

          {/* Total Highlight Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-purple-500/10 border border-pink-500/30 backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
              {lang === 'id' ? 'Total Kebutuhan Anggaran' : 'Total Required Budget'}
            </p>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
              {formatCurrency(TOTAL_BUDGET)}
            </p>
          </div>
        </div>

        {/* Visual Allocation Distribution Bar */}
        <div className="mb-12 p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <PieChart className="w-4 h-4 text-pink-400" />
              <span>{lang === 'id' ? 'Proporsi Anggaran Per Divisi' : 'Budget Division Breakdown'}</span>
            </h3>
            <span className="text-xs text-slate-400">100% Total ({formatCurrency(TOTAL_BUDGET)})</span>
          </div>

          {/* Stacked Bar */}
          <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden flex gap-0.5 p-0.5">
            {BUDGET_DATA.map((item, idx) => {
              const pct = (item.amount / TOTAL_BUDGET) * 100;
              const colors = [
                'bg-slate-500', // Kesekretariatan
                'bg-pink-500', // DPAT
                'bg-purple-500', // Konsumsi
                'bg-amber-500', // Acara
              ];
              return (
                <div
                  key={idx}
                  style={{ width: `${pct}%` }}
                  className={`h-full ${colors[idx % colors.length]} transition-all`}
                  title={`${item.category}: ${pct.toFixed(1)}%`}
                />
              );
            })}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-800">
            {BUDGET_DATA.map((item, idx) => {
              const pct = (item.amount / TOTAL_BUDGET) * 100;
              const dotColors = ['bg-slate-500', 'bg-pink-500', 'bg-purple-500', 'bg-amber-500'];
              return (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <span className={`w-3 h-3 rounded-full ${dotColors[idx % dotColors.length]}`} />
                  <div>
                    <p className="font-semibold text-slate-200">{item.category}</p>
                    <p className="text-slate-400 text-[11px]">{pct.toFixed(1)}% • {formatCurrency(item.amount)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 flex justify-between items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'id' ? 'Cari kategori atau item anggaran...' : 'Search budget items...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-pink-500"
            />
          </div>
          <span className="text-xs text-slate-400">
            {filteredData.length} {lang === 'id' ? 'Divisi Ditampilkan' : 'Divisions Shown'}
          </span>
        </div>

        {/* Budget Table / Cards */}
        <div className="space-y-4">
          {filteredData.map((item, index) => {
            const isExpanded = expandedCategory === item.category;
            const percentage = ((item.amount / TOTAL_BUDGET) * 100).toFixed(1);

            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden"
              >
                {/* Main Row */}
                <div
                  onClick={() => toggleExpand(item.category)}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-pink-400 font-bold text-xs">
                        0{index + 1}
                      </div>
                      <h3 className="text-lg font-serif font-bold text-white">{item.category}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-pink-400 border border-slate-700">
                        {percentage}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 pl-11">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                    <div className="text-right">
                      <p className="text-xs text-slate-400 font-medium">Subtotal</p>
                      <p className="text-lg font-bold text-white">{formatCurrency(item.amount)}</p>
                    </div>

                    <button
                      className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                      aria-label="Toggle Detail"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Sub-item Details Dropdown */}
                {isExpanded && item.details && (
                  <div className="px-6 py-5 bg-slate-950/70 border-t border-slate-800 space-y-3 animate-in fade-in duration-200">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-pink-400" />
                      <span>{lang === 'id' ? 'Rincian Kebutuhan' : 'Detailed Line Items'}</span>
                    </p>

                    <div className="divide-y divide-slate-800/60">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                            <span className="text-slate-300 font-medium">{detail.name}</span>
                          </div>
                          <div className="flex items-center gap-6">
                            <span className="text-slate-400 text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                              {detail.qty}
                            </span>
                            <span className="font-semibold text-slate-200 min-w-[100px] text-right">
                              {formatCurrency(detail.total)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
