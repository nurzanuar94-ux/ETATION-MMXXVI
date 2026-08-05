import React, { useState } from 'react';
import { CreditCard, Copy, Check, Phone, MessageSquare, ChevronDown, ChevronUp, HelpCircle, Building2 } from 'lucide-react';
import { PAYMENT_INFO, CONTACTS, FAQ_ITEMS } from '../data/proposalData';
import { Language } from '../types';

interface PaymentAndContactProps {
  lang: Language;
}

export const PaymentAndContact: React.FC<PaymentAndContactProps> = ({ lang }) => {
  const [accountCopied, setAccountCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(PAYMENT_INFO.accountNumber);
    setAccountCopied(true);
    setTimeout(() => setAccountCopied(false), 2000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="kontak" className="py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-bold uppercase tracking-widest">
            {lang === 'id' ? 'Narahubung & Pembayaran' : 'Contact & Payment Details'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {lang === 'id' ? 'Mari Bermitra Bersama Kami' : 'Let’s Partner Together'}
          </h2>
          <p className="text-slate-400 text-base italic leading-relaxed">
            {lang === 'id'
              ? '"Besar harapan kami agar proposal ini dapat menjadi awal terjalinnya kerja sama yang bermanfaat bagi kedua pihak."'
              : '"We sincerely hope this proposal serves as the beginning of a fruitful partnership for both parties."'}
          </p>
        </div>

        {/* Top Grid: Contacts & Payment Card */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Contact Person Cards Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-pink-400" />
              <span>{lang === 'id' ? 'Narahubung Panitia Sponsorship' : 'Sponsorship Committee Contacts'}</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {CONTACTS.map((c) => (
                <div
                  key={c.id}
                  className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-pink-500/40 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-pink-400">
                      {c.role}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-white mt-1">{c.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">{c.displayPhone}</p>
                  </div>

                  <a
                    href={`https://wa.me/${c.phone}?text=Halo%20Kak%20${c.name},%20saya%20tertarik%20dengan%20Proposal%20Sponsorship%20ETATION%20MMXXVI`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Official Payment Account Card */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-pink-400" />
              <span>{lang === 'id' ? 'Rekening Pembayaran Resmi' : 'Official Payment Account'}</span>
            </h3>

            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-pink-950/40 border border-pink-500/30 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-pink-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-pink-300">
                    {PAYMENT_INFO.bankName}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Verified Account
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">
                  Nomor Rekening
                </p>
                <div className="flex items-center justify-between bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-widest">
                    {PAYMENT_INFO.accountNumber}
                  </span>
                  <button
                    onClick={handleCopyAccount}
                    className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 hover:bg-pink-500 hover:text-white transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                    title="Salin Nomor Rekening"
                  >
                    {accountCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  Atas Nama (Pemegang Rekening)
                </p>
                <p className="text-lg font-serif font-bold text-slate-100 mt-1">
                  {PAYMENT_INFO.accountHolder}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-6 pt-12 border-t border-slate-800">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl font-serif font-bold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-pink-400" />
              <span>{lang === 'id' ? 'Pertanyaan Sering Diajukan (FAQ)' : 'Frequently Asked Questions'}</span>
            </h3>
            <p className="text-xs text-slate-400">
              {lang === 'id' ? 'Informasi seputar mekanisme kerjasama, batas waktu, dan pendaftaran.' : 'Information regarding mechanics, deadlines, and registration.'}
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/50 transition cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-100">
                      {lang === 'id' ? faq.questionId : faq.questionEn}
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-pink-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {lang === 'id' ? faq.answerId : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
