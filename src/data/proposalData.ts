import { BudgetItem, SponsorPackage, FAQItem } from '../types';

export const EVENT_DETAILS = {
  title: 'ETATION MMXXVI',
  fullTitle: 'English Department Orientation & Association (ETATION) MMXXVI',
  organizer: 'HMPS Tadris Bahasa Inggris (TBI)',
  institution: 'UIN Sayyid Ali Rahmatullah Tulungagung',
  taglineId: '"A Journey Through Emotions, Building New Core Memories"',
  taglineEn: '"A Journey Through Emotions, Building New Core Memories"',
  year: '2026',
  targetAudience: 'Mahasiswa Baru TBI, Dosen & Sivitas Akademika, Mahasiswa Kampus, & Publik Media Sosial',
};

export const BUDGET_DATA: BudgetItem[] = [
  {
    category: 'Sie Kesekretariatan',
    amount: 400000,
    description: 'Pengadaan proposal cetak, surat menyurat, sertifikat, dan perlengkapan administrasi.',
    details: [
      { name: 'Cetak Proposal & Penggandaan', qty: '10 Paket', total: 150000 },
      { name: 'Kertas, Map & Stamp Administrasi', qty: '1 Paket', total: 100000 },
      { name: 'Cetak ID Card & Sertifikat', qty: '1 Paket', total: 150000 },
    ],
  },
  {
    category: 'Sie DPAT & Humas',
    amount: 20580000,
    description: 'Dekorasi, Panggung, Sound System, Lighting, Alat Musik, Transportasi, dan Publikasi Media.',
    details: [
      { name: 'Sewa Rigging Panggung & Lighting', qty: '1 Set Main Stage', total: 8500000 },
      { name: 'Sewa Sound System & Alat Musik', qty: '1 Set Full System', total: 6000000 },
      { name: 'Dekorasi Main Gate & Backstage', qty: '1 Paket', total: 2500000 },
      { name: 'Media Campaign & Banner/Photobooth', qty: '1 Paket Media', total: 2080000 },
      { name: 'Transportasi & Operasional Humas', qty: '1 Paket', total: 1500000 },
    ],
  },
  {
    category: 'Sie Konsumsi',
    amount: 7370000,
    description: 'Konsumsi Mahasiswa Baru, Tamu Undangan, Dosen, Juri, Pemateri, dan Panitia.',
    details: [
      { name: 'Konsumsi Pemateri & Tamu VVIP', qty: '20 Pax', total: 1200000 },
      { name: 'Konsumsi Panitia & Pendamping', qty: '60 Pax x 2 Hari', total: 3600000 },
      { name: 'Air Mineral & Snack Corner', qty: '25 Dus', total: 1070000 },
      { name: 'Konsumsi Mahasiswa Baru & Juri', qty: '1 Paket', total: 1500000 },
    ],
  },
  {
    category: 'Sie Acara',
    amount: 7740000,
    description: 'Honor Pemateri, Guest Star/Performance, Trophy, Gift Box, dan Peralatan Games.',
    details: [
      { name: 'Honorarium Pemateri Utama & Juri', qty: '3 Orang', total: 3000000 },
      { name: 'Guest Star & Art Performance', qty: '1 Talent', total: 2500000 },
      { name: 'Trophy, Plakat & Goodie Bag Winner', qty: '1 Paket', total: 1240000 },
      { name: 'Property Output & Games Session', qty: '1 Paket', total: 1000000 },
    ],
  },
];

export const TOTAL_BUDGET = BUDGET_DATA.reduce((acc, curr) => acc + curr.amount, 0); // 36,090,000

export const SPONSOR_PACKAGES: SponsorPackage[] = [
  {
    id: 'diamond',
    name: 'Diamond',
    price: 750000,
    popular: true,
    color: 'from-pink-500 to-rose-600',
    badgeColor: 'bg-pink-500 text-white',
    borderColor: 'border-pink-500',
    logoSize: 'XL (Extra Large - Paling Menonjol)',
    benefits: {
      logoPublication: true,
      adlibsMC: true,
      instastory: 'Promosi oleh 40+ Panitia Active Story',
      videoAd: 'Video Iklan Max 1 Menit di Playback Stage',
      boothSpace: true,
      certificate: true,
    },
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 625000,
    color: 'from-purple-500 to-indigo-600',
    badgeColor: 'bg-purple-500 text-white',
    borderColor: 'border-purple-500',
    logoSize: 'L (Large)',
    benefits: {
      logoPublication: true,
      adlibsMC: true,
      instastory: 'Promosi oleh 15+ Winner / High Reach',
      videoAd: 'Video Iklan Max 30 Detik',
      boothSpace: false,
      certificate: true,
    },
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 400000,
    color: 'from-amber-500 to-yellow-600',
    badgeColor: 'bg-amber-500 text-white',
    borderColor: 'border-amber-500',
    logoSize: 'M (Medium)',
    benefits: {
      logoPublication: true,
      adlibsMC: true,
      instastory: 'Promosi Tag Feed & Story Official IG',
      videoAd: 'Tidak Termasuk',
      boothSpace: false,
      certificate: true,
    },
  },
  {
    id: 'silver',
    name: 'Silver',
    price: 250000,
    color: 'from-slate-400 to-slate-600',
    badgeColor: 'bg-slate-600 text-white',
    borderColor: 'border-slate-600',
    logoSize: 'S (Small)',
    benefits: {
      logoPublication: true,
      adlibsMC: true,
      instastory: 'Story Mention Official IG',
      videoAd: 'Tidak Termasuk',
      boothSpace: false,
      certificate: true,
    },
  },
];

export const REACH_STATS = {
  totalImpressions: 163412,
  viewersIncreasePercent: 52.4,
  nonFollowersReachPercent: 41.4,
  activeFollowersCount: '12.8K+',
  targetParticipants: '350+ Mahasiswa Baru',
  instagramAccount: '@hmps_tbi_uinone',
};

export const PAYMENT_INFO = {
  bankName: 'Bank Jatim',
  accountNumber: '6114749834',
  accountHolder: 'A. N. Haniyandra Raihan Almayda',
};

export const CONTACTS = [
  {
    id: 'azman',
    name: 'Azman',
    role: 'Narahubung Sponsorship 1',
    phone: '6282336515854',
    displayPhone: '+62 823-3651-5854',
  },
  {
    id: 'aul',
    name: 'Aul',
    role: 'Narahubung Sponsorship 2',
    phone: '6285604817398',
    displayPhone: '+62 856-0481-7398',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    questionId: 'Apakah bisa melakukan sponsor berbentuk produk/barter (In-Kind)?',
    questionEn: 'Can we sponsor in the form of products or in-kind barter?',
    answerId: 'Sangat bisa! Kami menerima barter produk seperti voucher, produk konsumsi, goodie bag, alat tulis, atau hadiah perlombaan yang ekuivalen dengan nilai paket sponsor.',
    answerEn: 'Yes, absolutely! We accept in-kind product barter such as vouchers, food & beverages, goodie bag items, stationery, or contest prizes matching the equivalent package value.',
  },
  {
    questionId: 'Kapan batas akhir konfirmasi sponsorship?',
    questionEn: 'When is the deadline for sponsorship confirmation?',
    answerId: 'Konfirmasi sponsorship diharapkan selambat-lambatnya 7 hari sebelum pelaksanaan acara agar logo dan materi publikasi dapat dicetak tepat waktu.',
    answerEn: 'Sponsorship confirmation is expected at least 7 days before the event to ensure logos and promotional media can be printed on time.',
  },
  {
    questionId: 'Format logo seperti apa yang dibutuhkan?',
    questionEn: 'What logo format is required?',
    answerId: 'Format PNG transparan resolusi tinggi, SVG, AI, atau PDF untuk memastikan hasil cetak banner dan media sosial jernih dan profesional.',
    answerEn: 'High-resolution transparent PNG, SVG, AI, or PDF to guarantee crisp and professional print results on banners and digital media.',
  },
  {
    questionId: 'Bagaimana prosedur penandatanganan MoU dan pembayaran?',
    questionEn: 'How is the MoU signed and payment processed?',
    answerId: 'Tim Humas kami akan mengirimkan invoice & draft MoU via WhatsApp/Email. Pembayaran dapat ditransfer via Bank Jatim ke rekening resmi panitia.',
    answerEn: 'Our PR team will send an official invoice & draft MoU via WhatsApp/Email. Payments can be transferred to our official Bank Jatim account.',
  },
];
