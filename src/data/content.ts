import { ContactInfo, FaqItem, ServiceItem } from '../types';

export const CONTACT_INFO: ContactInfo = {
  companyName: 'I.T.C. / Nuova I.T.C.',
  owner: 'I.T.C. di Jacopo Torturo',
  vatNumber: '16010081004',
  phonePrimary: '06 5235 2802',
  phonePrimaryClean: '0652352802',
  phoneSecondary: '06 9158878',
  phoneSecondaryClean: '069158878',
  email: 'itctecnologica@gmail.com',
  address: 'Viale Francia, 70/B',
  city: 'Torvaianica – Pomezia',
  postalCode: '00071',
  province: 'RM',
  hours: 'Lunedì – Venerdì: 09:00 – 18:00',
};

export const TRUST_PILLARS = [
  {
    icon: 'ShieldCheck',
    title: '30+ anni di esperienza',
    subtitle: 'Competenza consolidata nel settore termoidraulico a Roma e provincia',
  },
  {
    icon: 'Award',
    title: 'Centro Assistenza Tecnica Ufficiale Vaillant',
    subtitle: 'Tecnici certificati e ricambi originali per la massima efficienza',
  },
  {
    icon: 'UserCheck',
    title: 'Tecnici specializzati',
    subtitle: 'Aggiornamento costante su normative di sicurezza ed efficienza energetica',
  },
  {
    icon: 'MapPin',
    title: 'Roma e provincia',
    subtitle: 'Interventi rapidi a Roma, Pomezia, Torvaianica e comuni limitrofi',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'climatizzazione',
    title: 'Climatizzazione',
    shortDesc: 'Installazione, manutenzione e assistenza di climatizzatori per abitazioni, uffici e aziende.',
    fullDesc: 'Progettiamo e installiamo impianti di climatizzazione mono e multisplit, sistemi canalizzati e soluzioni VRF ad altissima efficienza energetica. Garantiamo aria salubre, consumi contenuti e totale silenziosità per ogni tipo di ambiente.',
    ctaText: 'Scopri la climatizzazione',
    badge: 'Alta Efficienza A+++',
    brands: ['Mitsubishi Electric', 'Daikin', 'Haier'],
    features: [
      'Installazione mono, dual, trial e quadri-split',
      'Manutenzione periodica e sanificazione filtri',
      'Ricarica gas refrigerante certificata F-Gas',
      'Sistemi silenziosi con connettività Wi-Fi smart'
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'caldaie',
    title: 'Caldaie e Riscaldamento',
    shortDesc: 'Installazione e manutenzione di caldaie a gas, a condensazione, pompe di calore e sistemi di riscaldamento.',
    fullDesc: 'Interventi specializzati su caldaie murali, a condensazione e sistemi ibridi di ultima generazione. Come Centro Assistenza Ufficiale Vaillant e specialisti multimarca, ottimizziamo rendimento e sicurezza del tuo impianto termico.',
    ctaText: 'Scopri le soluzioni',
    badge: 'Centro Ufficiale Vaillant',
    brands: ['Vaillant', 'Daikin', 'Mitsubishi Electric'],
    features: [
      'Caldaie a condensazione ad alto rendimento',
      'Pompe di calore per riscaldamento ed ACS',
      'Stufe a pellet e sistemi radianti',
      'Analisi fumi e rilascio bollino di controllo'
    ],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'fotovoltaico',
    title: 'Fotovoltaico',
    shortDesc: 'Progettazione e installazione di sistemi fotovoltaici per migliorare l\'efficienza energetica dell\'immobile.',
    fullDesc: 'Trasforma l\'energia solare in risparmio concreto per la tua casa o azienda. Realizziamo impianti fotovoltaici su misura con moduli ad alto rendimento, inverter di ultima generazione e sistemi di accumulo a batteria.',
    ctaText: 'Scopri il fotovoltaico',
    badge: 'Risparmio in Bolletta',
    features: [
      'Dimensionamento personalizzato sui tuoi consumi',
      'Pannelli fotovoltaici ad alta resa',
      'Sistemi di accumulo a batteria al litio',
      'Supporto per pratiche di connessione alla rete'
    ],
    image: 'https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'idraulico',
    title: 'Impianti Idraulici',
    shortDesc: 'Installazione e manutenzione di impianti idraulici, sanitari e tecnologici per residenziale e commerciale.',
    fullDesc: 'Realizzazione a regola d\'arte di impianti idrico-sanitari, adduzione acqua, scarichi, trattamento acque, addolcitori e rifacimento reti idrauliche nel pieno rispetto delle normative vigenti.',
    ctaText: 'Richiedi informazioni',
    features: [
      'Rifacimento e posa impianti idrico-sanitari',
      'Trattamento acque, filtri e addolcitori',
      'Riparazione perdite e sostituzione componenti',
      'Collaudo e certificazione di conformità'
    ],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'riscaldamento-pavimento',
    title: 'Riscaldamento a Pavimento',
    shortDesc: 'Soluzioni radianti a bassa temperatura per aumentare comfort ed efficienza energetica.',
    fullDesc: 'Il riscaldamento a pannelli radianti a pavimento garantisce una distribuzione uniforme e omogenea del calore senza ingombri a parete, lavorando a basse temperature in perfetta sinergia con pompe di calore e caldaie a condensazione.',
    ctaText: 'Scopri i sistemi radianti',
    features: [
      'Distribuzione uniforme della temperatura',
      'Perfetto abbinamento con pompe di calore',
      'Nessun ingombro visivo negli ambienti',
      'Maggior benessere e salubrità dell\'aria'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'aerazione',
    title: 'Aerazione e Trattamento Aria',
    shortDesc: 'Impianti e sistemi di aerazione e ventilazione per abitazioni, uffici e attività.',
    fullDesc: 'Impianti di ventilazione meccanica controllata (VMC) e canali di estrazione/immissione per rinnovare costantemente l\'aria indoor, eliminare umidità in eccesso, muffe e inquinanti, recuperando calore prezioso.',
    ctaText: 'Scopri l\'aerazione',
    features: [
      'Sistemi di Ventilazione Meccanica Controllata (VMC)',
      'Filtrazione antipolline e recupero termico',
      'Eliminazione di umidità e muffe indoor',
      'Soluzioni per negozi, uffici e locali tecnici'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'assistenza',
    title: 'Assistenza e Manutenzione',
    shortDesc: 'Manutenzione ordinaria e straordinaria, riparazioni tempestive e supporto tecnico specializzato.',
    fullDesc: 'Il nostro team tecnico è sempre pronto a intervenire su guasti, anomalie o per i controlli programmati previsti dalla legge su caldaie, climatizzatori, pompe di calore e impianti termici.',
    ctaText: 'Richiedi assistenza',
    badge: 'Pronto Intervento',
    features: [
      'Diagnosi rapida e riparazione guasti',
      'Manutenzione ordinaria programmata',
      'Controllo efficienza energetica e bollini',
      'Ricambi originali e supporto certificato'
    ],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80',
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Clock',
    title: 'Oltre 30 anni di esperienza',
    description: 'Esperienza consolidata nel settore degli impianti tecnologici, con una reputazione fondata sulla serietà e sui risultati concreti.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Tecnici specializzati',
    description: 'Uno staff qualificato e costantemente aggiornato accompagna il cliente in ogni fase, garantendo interventi a regola d\'arte.',
  },
  {
    icon: 'Layers',
    title: 'Servizio completo',
    description: 'Dalla consulenza iniziale e preventivo fino all\'installazione, collaudo, manutenzione e assistenza post-vendita.',
  },
  {
    icon: 'Zap',
    title: 'Innovazione tecnologica',
    description: 'Ricerca continua di soluzioni impiantistiche moderne ad alta efficienza energetica per ridurre i consumi e rispettare l\'ambiente.',
  },
  {
    icon: 'MessageSquareHeart',
    title: 'Consulenza personalizzata',
    description: 'Ogni immobile ha esigenze termiche uniche: ti guidiamo nella scelta della soluzione tecnica più efficiente e conveniente.',
  },
  {
    icon: 'Wrench',
    title: 'Assistenza dopo l\'installazione',
    description: 'La nostra presenza continua anche dopo i lavori: garantiamo manutenzione ordinaria e straordinaria tempestiva.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Raccontaci cosa ti serve',
    description: 'Contattaci telefonicamente ai nostri numeri dedicati o compila il modulo online con la tua richiesta di preventivo o assistenza.',
  },
  {
    step: '02',
    title: 'Analizziamo il progetto',
    description: 'Valutiamo con cura le tue esigenze, gli spazi dell\'immobile e le caratteristiche tecniche dell\'impianto per proporti la soluzione ideale.',
  },
  {
    step: '03',
    title: 'Installiamo',
    description: 'I nostri tecnici specializzati realizzano l\'intervento concordato con la massima pulizia, precisione e rispetto dei tempi previsti.',
  },
  {
    step: '04',
    title: 'Restiamo al tuo fianco',
    description: 'Ti garantiamo assistenza continuativa, controlli periodici e manutenzione ordinaria e straordinaria per mantenere l\'impianto al top.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'In quali zone operate?',
    answer: 'Operiamo principalmente a Roma, Pomezia, Torvaianica e in tutta la provincia di Roma e aree limitrofe, garantendo interventi tempestivi sia in ambito residenziale che commerciale.',
  },
  {
    question: 'Fate assistenza sulle caldaie Vaillant?',
    answer: 'Sì, ITC fa parte della rete ufficiale ed è Centro Assistenza Tecnica Ufficiale Vaillant in Italia. Forniamo supporto tecnico qualificato, manutenzione e applicazione delle garanzie previste con ricambi originali.',
  },
  {
    question: 'Installate climatizzatori?',
    answer: 'Sì, installiamo e assistiamo impianti di climatizzazione per abitazioni private, uffici, negozi e aziende, offrendo soluzioni mono-split, multi-split e canalizzate ad alta efficienza energetica.',
  },
  {
    question: 'Quali marchi di climatizzazione trattate?',
    answer: 'Trattiamo i marchi leader del settore tra cui Mitsubishi Electric (con linee di design come MSZ-EF), Daikin e Haier, oltre ad offrire assistenza su tutte le principali marche.',
  },
  {
    question: 'Fate manutenzione delle caldaie?',
    answer: 'Sì, eseguiamo manutenzione ordinaria e straordinaria su caldaie tradizionali, caldaie a condensazione e pompe di calore, inclusi i controlli di efficienza energetica e analisi dei fumi quando previsti.',
  },
  {
    question: 'Installate impianti fotovoltaici?',
    answer: 'Sì, ITC progetta e installa sistemi fotovoltaici e soluzioni integrate per l\'efficienza energetica, permettendo di produrre energia pulita e ridurre sensibilmente i costi in bolletta.',
  },
  {
    question: 'Posso richiedere un preventivo?',
    answer: 'Certamente! È possibile contattare ITC telefonicamente ai numeri 06 5235 2802 / 06 9158878 oppure compilare il modulo preventivo online presente su questo sito.',
  },
];

export const SERVICE_OPTIONS = [
  'Climatizzazione',
  'Caldaia',
  'Manutenzione',
  'Assistenza Vaillant',
  'Fotovoltaico',
  'Impianto idraulico',
  'Riscaldamento',
  'Altro',
];

export const SERVED_ZONES = [
  'Roma Centro & Eur',
  'Roma Sud & Laurentina',
  'Pomezia',
  'Torvaianica',
  'Ardea & Litorale',
  'Castelli Romani',
  'Ostia & Fiumicino',
  'Provincia di Roma',
];
