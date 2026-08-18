import React from 'react';
import { 
  Flame, 
  Snowflake, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface FooterProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-sky-700 flex items-center justify-center text-white shadow-md">
                <div className="relative flex items-center justify-center">
                  <Flame className="w-5 h-5 text-amber-400 absolute -top-1 -left-1 opacity-90" />
                  <Snowflake className="w-4 h-4 text-sky-200 absolute -bottom-1 -right-1" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">I.T.C.</span>
                <span className="text-[11px] font-medium text-slate-400 tracking-tight">
                  Impianti Termici & Climatizzazione
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Da oltre 30 anni leader negli impianti termici, idraulici, climatizzazione e fotovoltaico a Roma, Pomezia e Torvaianica. Centro Assistenza Tecnica Ufficiale Vaillant.
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Centro Assistenza Tecnica Ufficiale Vaillant in Italia</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors cursor-pointer border border-slate-800">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors cursor-pointer border border-slate-800">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors cursor-pointer border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Column Servizi (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Servizi
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('#climatizzazione')} className="hover:text-white transition-colors cursor-pointer">
                  Climatizzazione (Daikin, Mitsubishi, Haier)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#caldaie')} className="hover:text-white transition-colors cursor-pointer">
                  Caldaie a condensazione & riscaldamento
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#fotovoltaico')} className="hover:text-white transition-colors cursor-pointer">
                  Impianti fotovoltaici & accumulo
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#servizi')} className="hover:text-white transition-colors cursor-pointer">
                  Impianti idraulici e sanitari
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#assistenza')} className="hover:text-white transition-colors cursor-pointer">
                  Assistenza tecnica & riparazioni
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#caldaie')} className="hover:text-white transition-colors cursor-pointer">
                  Manutenzione caldaie e analisi fumi
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#vaillant')} className="hover:text-emerald-400 transition-colors cursor-pointer font-semibold text-emerald-500">
                  Assistenza Ufficiale Vaillant
                </button>
              </li>
            </ul>
          </div>

          {/* Column Azienda (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Azienda
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('#chi-siamo')} className="hover:text-white transition-colors cursor-pointer">
                  Chi siamo
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#perche-itc')} className="hover:text-white transition-colors cursor-pointer">
                  Perché scegliere ITC
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#processo')} className="hover:text-white transition-colors cursor-pointer">
                  Come lavoriamo
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#area-servita')} className="hover:text-white transition-colors cursor-pointer">
                  Area servita Roma e litorale
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#faq')} className="hover:text-white transition-colors cursor-pointer">
                  FAQ & Domande
                </button>
              </li>
              <li>
                <button onClick={() => onOpenQuoteModal()} className="hover:text-sky-400 transition-colors cursor-pointer font-semibold text-sky-400">
                  Richiedi preventivo
                </button>
              </li>
            </ul>
          </div>

          {/* Column Contatti (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contatti
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <a href={`tel:${CONTACT_INFO.phonePrimaryClean}`} className="text-white hover:text-sky-300 font-bold block">
                      {CONTACT_INFO.phonePrimary} (Diretto)
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${CONTACT_INFO.phoneSecondaryClean}`} className="text-slate-300 hover:text-white block">
                      {CONTACT_INFO.phoneSecondary} (Ufficio)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-300 hover:text-white truncate">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {CONTACT_INFO.address}<br />
                  {CONTACT_INFO.postalCode} {CONTACT_INFO.city} ({CONTACT_INFO.province})
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.hours}</span>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                <strong className="text-slate-300 block">{CONTACT_INFO.owner}</strong>
                Partita IVA: {CONTACT_INFO.vatNumber}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-slate-900 border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {CONTACT_INFO.companyName}. Tutti i diritti riservati. P.IVA {CONTACT_INFO.vatNumber}.
          </div>

          <div className="flex items-center gap-6">
            <span>Roma • Pomezia • Torvaianica</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
              id="footer-scroll-top-btn"
            >
              <span>Torna su</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
