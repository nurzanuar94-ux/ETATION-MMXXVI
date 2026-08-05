export type Language = 'id' | 'en';

export interface BudgetItem {
  category: string;
  amount: number;
  description: string;
  details?: { name: string; qty: string; total: number }[];
}

export interface SponsorPackage {
  id: 'diamond' | 'platinum' | 'gold' | 'silver';
  name: string;
  price: number;
  popular?: boolean;
  color: string;
  badgeColor: string;
  borderColor: string;
  logoSize: string;
  benefits: {
    logoPublication: boolean;
    adlibsMC: boolean;
    instastory: string;
    videoAd: string;
    boothSpace?: boolean;
    certificate?: boolean;
  };
}

export interface FAQItem {
  questionId: string;
  questionEn: string;
  answerId: string;
  answerEn: string;
}

export interface SponsorshipForm {
  brandName: string;
  contactName: string;
  phone: string;
  email: string;
  packageId: 'diamond' | 'platinum' | 'gold' | 'silver' | 'custom';
  customNotes: string;
  includeInKind: boolean;
  selectedContact: 'azman' | 'aul';
}
