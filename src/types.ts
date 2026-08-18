export type ServiceCategory = 
  | 'climatizzazione'
  | 'caldaie'
  | 'fotovoltaico'
  | 'idraulico'
  | 'riscaldamento-pavimento'
  | 'aerazione'
  | 'assistenza';

export interface ServiceItem {
  id: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  ctaText: string;
  badge?: string;
  features: string[];
  brands?: string[];
  image: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  addressOrZone?: string;
  notes: string;
  privacyAccepted: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactInfo {
  companyName: string;
  owner: string;
  vatNumber: string;
  phonePrimary: string;
  phonePrimaryClean: string;
  phoneSecondary: string;
  phoneSecondaryClean: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  province: string;
  hours: string;
}
