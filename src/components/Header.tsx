import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  Menu, 
  X, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface HeaderProps {
  onOpenQuoteModal: (initialService?: string) => void;
  onOpenAssistanceModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenQuoteModal,
  onOpenAssistanceModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Clima', href: '#climatizzazione' },
    { name: 'Caldaie', href: '#caldaie' },
    { name: 'Vaillant', href: '#vaillant' },
    { name: 'Fotovoltaico', href: '#sostenibilita' },
    { name: 'Assistenza', href: '#assistenza' },
    { name: 'Chi siamo', href: '#chi-siamo' },
    { name: 'Contatti', href: '#contatti' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar (Desktop / Sleek Interface) */}
      <div className="bg-slate-900 text-white text-[10px] py-1.5 px-4 sm:px-6 lg:px-8 flex justify-between items-center uppercase tracking-wider font-semibold border-b border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3 h-3 text-sky-400" />
              <span>Lun–Ven 9:00–18:00</span>
            </span>
            <div className="flex items-center gap-2">
              <a 
                href={`tel:${CONTACT_INFO.phoneSecondaryClean}`} 
                className="hover:text-sky-300 text-slate-300 transition-colors font-semibold"
                id="top-bar-tel-secondary"
              >
                06 9158878
              </a>
              <span className="text-slate-600">•</span>
              <a 
                href={`tel:${CONTACT_INFO.phonePrimaryClean}`} 
                className="text-white hover:text-sky-300 font-bold transition-colors"
                id="top-bar-tel-primary"
              >
                06 52352802
              </a>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-400 font-medium">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              <span>Partner Ufficiale Vaillant</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>Pomezia</span>
            <span>Torvaianica</span>
            <span>Roma & Provincia</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className={`w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2.5' 
          : 'bg-white border-b border-slate-200 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group"
            id="brand-logo-link"
          >
            <div className="bg-sky-600 text-white font-black px-2.5 py-1 rounded italic text-xl tracking-tighter shadow-sm group-hover:bg-sky-700 transition-colors">
              ITC
            </div>
            <div className="text-xs font-bold leading-tight uppercase text-slate-500 border-l border-slate-200 pl-2 text-left">
              <span className="text-slate-900 block font-extrabold tracking-tight">Nuova I.T.C.</span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-normal lowercase first-letter:uppercase">Tecnologia & Comfort</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors hover:text-sky-600 ${
                  idx === 0 ? 'text-sky-600 font-bold' : 'text-slate-600'
                }`}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action / Direct Phone & CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="text-right hidden xl:block">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Parla con un tecnico</div>
              <a 
                href={`tel:${CONTACT_INFO.phonePrimaryClean}`}
                className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
              >
                06 5235 2802
              </a>
            </div>

            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-sky-200 transition-all active:scale-98 cursor-pointer flex items-center gap-2"
              id="header-quote-cta-btn"
            >
              <span>Richiedi preventivo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenQuoteModal()}
              className="xs:flex sm:hidden items-center px-3 py-1.5 text-xs font-bold text-white bg-sky-600 rounded-full shadow-sm"
              id="header-mobile-quote-btn"
            >
              Preventivo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Apri menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {/* Quick Contacts Bar in Drawer */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-700">
                <span className="font-semibold text-slate-500 uppercase text-[10px]">Orario ufficio</span>
                <span className="font-bold">Lun–Ven 9:00–18:00</span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-slate-900 font-bold">
                <span className="text-slate-600 font-normal">Sede Pomezia / Roma:</span>
                <a href={`tel:${CONTACT_INFO.phonePrimaryClean}`} className="text-sky-600 font-bold hover:underline">
                  06 5235 2802
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors flex items-center justify-between"
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-full shadow-lg shadow-sky-200 cursor-pointer"
                id="drawer-quote-btn"
              >
                Richiedi preventivo
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssistanceModal();
                }}
                className="w-full py-3 text-center text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl cursor-pointer"
                id="drawer-assistance-btn"
              >
                Prenota assistenza tecnica
              </button>

              <a
                href={`tel:${CONTACT_INFO.phonePrimaryClean}`}
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-2"
                id="drawer-call-btn"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Chiama 06 5235 2802</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
