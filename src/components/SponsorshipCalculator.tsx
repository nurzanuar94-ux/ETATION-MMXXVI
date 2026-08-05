import React, { useState, useEffect } from 'react';
import { Sparkles, Send, CheckCircle2, Copy, FileCheck, RefreshCw, X, MessageSquare } from 'lucide-react';
import { SPONSOR_PACKAGES, CONTACTS, EVENT_DETAILS } from '../data/proposalData';
import { Language, SponsorshipForm } from '../types';

interface SponsorshipCalculatorProps {
  lang: Language;
  initialPackageId?: 'diamond' | 'platinum' | 'gold' | 'silver' | 'custom';
  onClose?: () => void;
}

export const SponsorshipCalculator: React.FC<SponsorshipCalculatorProps> = ({
  lang,
  initialPackageId = 'diamond',
  onClose,
}) => {
  const [form, setForm] = useState<SponsorshipForm>({
    brandName: '',
    contactName: '',
    phone: '',
    email: '',
    packageId: initialPackageId,
    customNotes: '',
    includeInKind: false,
    selectedContact: 'azman',
  });

  // Additional options
  const [addBooth, setAddBooth] = useState(false);
  const [addGoodieBag, setAddGoodieBag] = useState(false);
  const [addSampling, setAddSampling] = useState(false);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPackageId) {
      setForm((prev) => ({ ...prev, packageId: initialPackageId }));
    }
  }, [initialPackageId]);

  const selectedPackage = SPONSOR_PACKAGES.find((p) => p.id === form.packageId);

  // Price Calculation
  const basePrice = selectedPackage ? selectedPackage.price : 0;
  const boothPrice = addBooth && form.packageId !== 'diamond' ? 150000 : 0;
  const goodieBagPrice = addGoodieBag ? 100000 : 0;
  const samplingPrice = addSampling ? 100000 : 0;

  const totalPrice = basePrice + boothPrice + goodieBagPrice + samplingPrice;

  const contactPerson = CONTACTS.find((c) => c.id === form.selectedContact) || CONTACTS[0];

  const generateWhatsAppMessage = () => {
    const brand = form.brandName.trim() || '[Nama Brand/Usaha]';
    const sender = form.contactName.trim() || '[Nama Penanggung Jawab]';
    const pkgName = form.packageId === 'custom' ? 'Custom Barter / In-Kind' : selectedPackage?.name + ' Tier';
    const priceText = form.packageId === 'custom' ? 'Negosiasi Barter' : `Rp ${totalPrice.toLocaleString('id-ID')}`;

    let addOnsText = '';
    if (addBooth && form.packageId !== 'diamond') addOnsText += '\n- Stand / Booth Produk';
    if (addGoodieBag) addOnsText += '\n- Penyelipan Merchandise/Flyer di Goodie Bag';
    if (addSampling) addOnsText += '\n- Sampling Produk ke Mahasiswa Baru';

    let msg = `Halo Kak ${contactPerson.name} (Humas ETATION MMXXVI),\n\n`;
    msg += `Saya *${sender}* dari *${brand}*.\n`;
    msg += `Saya berminat untuk menjadi Sponsor pada kegiatan *ETATION MMXXVI* (HMPS TBI UIN SATU Tulungagung).\n\n`;
    msg += `*Detail Pengajuan Sponsorship:*\n`;
    msg += `- Paket Terpilih: *${pkgName}*\n`;
    msg += `- Estimasi Nilai: *${priceText}*\n`;
    if (form.includeInKind) msg += `- Jenis Kerjasama: Termasuk Barter Produk (In-Kind)\n`;
    if (addOnsText) msg += `- Tambahan Benefit:${addOnsText}\n`;
    if (form.customNotes) msg += `- Catatan Tambahan: ${form.customNotes}\n`;
    msg += `\nMohon informasi selanjutnya terkait pendaftaran & draf MoU. Terima kasih!`;

    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = () => {
    const encoded = generateWhatsAppMessage();
    window.open(`https://wa.me/${contactPerson.phone}?text=${encoded}`, '_blank');
  };

  const handleCopyDraft = () => {
    const brand = form.brandName.trim() || '[Nama Brand]';
    const sender = form.contactName.trim() || '[Nama]';
    const pkgName = form.packageId === 'custom' ? 'Custom Barter' : selectedPackage?.name + ' Tier';

    const text = `Pengajuan Sponsorship ETATION MMXXVI\nBrand: ${brand}\nKontak: ${sender}\nPaket: ${pkgName}\nTotal: Rp ${totalPrice.toLocaleString('id-ID')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-glow">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold text-white">
            {lang === 'id' ? 'Simulasi & Pengajuan Sponsorship' : 'Sponsorship Calculator & Proposal Builder'}
          </h3>
          <p className="text-xs text-slate-400">
            {lang === 'id' ? 'Hitung estimasi nilai investasi & buat draft WhatsApp langsung' : 'Calculate estimate & generate instant WhatsApp draft'}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Form Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Brand Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Nama Brand / Perusahaan *
              </label>
              <input
                type="text"
                placeholder="Contoh: Kopi Janji Jiwa / Toko ABC"
                value={form.brandName}
                onChange={(e) => setForm({ ...form, brandName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Nama Penanggung Jawab *
              </label>
              <input
                type="text"
                placeholder="Contoh: Bpk. Ahmad"
                value={form.contactName}
                onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

          {/* Tier Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Pilih Paket Sponsorship Utama
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SPONSOR_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setForm({ ...form, packageId: pkg.id })}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    form.packageId === pkg.id
                      ? 'bg-pink-500/15 border-pink-500 text-white shadow-glow'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <p className="text-xs font-bold uppercase">{pkg.name}</p>
                  <p className="text-sm font-serif font-bold text-pink-400 mt-1">
                    Rp {(pkg.price / 1000).toLocaleString('id-ID')}k
                  </p>
                </button>
              ))}

              <button
                type="button"
                onClick={() => setForm({ ...form, packageId: 'custom' })}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  form.packageId === 'custom'
                    ? 'bg-purple-500/20 border-purple-500 text-white shadow-glow'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <p className="text-xs font-bold uppercase">Custom Barter</p>
                <p className="text-xs text-purple-300 mt-1">In-Kind Product</p>
              </button>
            </div>
          </div>

          {/* Additional Options */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Tambahan Benefit / Add-Ons
            </label>

            {form.packageId !== 'diamond' && (
              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700">
                <input
                  type="checkbox"
                  checked={addBooth}
                  onChange={(e) => setAddBooth(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-900 text-pink-500 focus:ring-pink-500"
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-200">Stand / Booth Space Produk (+Rp 150.000)</span>
                  <p className="text-slate-400">Sewa area booth penjualan/promosi langsung saat acara.</p>
                </div>
              </label>
            )}

            <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700">
              <input
                type="checkbox"
                checked={addGoodieBag}
                onChange={(e) => setAddGoodieBag(e.target.checked)}
                className="rounded border-slate-700 bg-slate-900 text-pink-500 focus:ring-pink-500"
              />
              <div className="text-xs">
                <span className="font-bold text-slate-200">Penyelipan Flyer / Voucher Goodie Bag (+Rp 100.000)</span>
                <p className="text-slate-400">Brosur atau voucher Anda dibagikan ke seluruh peserta maba.</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800/80 cursor-pointer hover:border-slate-700">
              <input
                type="checkbox"
                checked={addSampling}
                onChange={(e) => setAddSampling(e.target.checked)}
                className="rounded border-slate-700 bg-slate-900 text-pink-500 focus:ring-pink-500"
              />
              <div className="text-xs">
                <span className="font-bold text-slate-200">Sampling Produk Langsung (+Rp 100.000)</span>
                <p className="text-slate-400">Pembagian tester produk langsung di sela-sela acara.</p>
              </div>
            </label>
          </div>

          {/* Select Contact Person */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Pilih Narahubung Panitia
            </label>
            <div className="grid grid-cols-2 gap-3">
              {CONTACTS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setForm({ ...form, selectedContact: c.id as 'azman' | 'aul' })}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    form.selectedContact === c.id
                      ? 'bg-pink-500/20 border-pink-500 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <p className="text-xs font-bold">{c.name}</p>
                  <p className="text-[11px] text-slate-400">{c.displayPhone}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Catatan Khusus / Barter Produk (Opsional)
            </label>
            <textarea
              rows={2}
              placeholder="Contoh: Kami ingin barter 100 pcs minuman dingin + banner..."
              value={form.customNotes}
              onChange={(e) => setForm({ ...form, customNotes: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-pink-500"
            />
          </div>
        </div>

        {/* Right Live Preview Card Column */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4" />
                <span>Ringkasan Pengajuan</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                Live Draft
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <p className="text-slate-400">
                Brand: <span className="font-bold text-white">{form.brandName || '(Belum diisi)'}</span>
              </p>
              <p className="text-slate-400">
                Penanggung Jawab: <span className="font-bold text-white">{form.contactName || '(Belum diisi)'}</span>
              </p>
              <p className="text-slate-400">
                Paket: <span className="font-bold text-pink-400">{form.packageId === 'custom' ? 'Custom Barter' : selectedPackage?.name}</span>
              </p>
            </div>

            {/* Total Calculation Display */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center my-4">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">
                Estimasi Nilai Kerjasama
              </p>
              <p className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                {form.packageId === 'custom' ? 'Negosiasi Barter' : `Rp ${totalPrice.toLocaleString('id-ID')}`}
              </p>
            </div>

            {/* WhatsApp Draft Preview Box */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300 font-mono space-y-1.5 max-h-48 overflow-y-auto">
              <p className="text-emerald-400 font-bold font-sans">Draft Pesan WhatsApp:</p>
              <p className="whitespace-pre-wrap leading-relaxed text-slate-300">
                Halo Kak {contactPerson.name}, saya {form.contactName || '[Nama]'} dari {form.brandName || '[Brand]'}. Kami berminat menjadi sponsor ETATION MMXXVI ({form.packageId === 'custom' ? 'Custom Barter' : selectedPackage?.name}). Total: Rp {totalPrice.toLocaleString('id-ID')}.
              </p>
            </div>
          </div>

          {/* Direct WhatsApp Action Button */}
          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Kirim Pengajuan Langsung via WhatsApp</span>
            </button>

            <button
              onClick={handleCopyDraft}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800 flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Ringkasan Text'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
