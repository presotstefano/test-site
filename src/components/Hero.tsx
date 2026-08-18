import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  Snowflake,
  Sun,
  Wrench,
  Check
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenAssistanceModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenQuoteModal, 
  onOpenAssistanceModal 
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Hero Copy & Actions (Sleek Interface) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow badge */}
            <div>
              <span className="inline-block bg-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full" id="hero-eyebrow-badge">
                Impianti • Climatizzazione • Assistenza • Fotovoltaico
              </span>
            </div>

            {/* Single H1 for optimal typography & local SEO */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Comfort, efficienza e assistenza tecnica a Roma.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Da oltre 30 anni installiamo e manteniamo impianti di climatizzazione, riscaldamento e fotovoltaici per abitazioni e aziende a <strong className="text-slate-900 font-semibold">Roma, Pomezia e Torvaianica</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onOpenQuoteModal}
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                id="hero-quote-cta-btn"
              >
                <span>Richiedi un preventivo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAssistanceModal}
                className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                id="hero-assistance-cta-btn"
              >
                <Wrench className="w-4 h-4 text-emerald-600" />
                <span>Prenota assistenza</span>
              </button>
            </div>

            {/* Direct Phone Dial Prompt */}
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Parla direttamente con un nostro tecnico:</span>
              <a 
                href={`tel:${CONTACT_INFO.phonePrimaryClean}`} 
                className="font-bold text-slate-900 hover:text-sky-600 transition-colors"
                id="hero-quick-call-link"
              >
                06 5235 2802
              </a>
            </div>

            {/* 4 Sleek Trust Elements */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2.5" id="hero-trust-30years">
                <div className="h-8 w-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="text-xs font-semibold text-slate-900">30+ Anni di esperienza</div>
              </div>

              <div className="flex items-center gap-2.5" id="hero-trust-vaillant">
                <div className="h-8 w-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="text-xs font-semibold text-emerald-700">Partner Ufficiale Vaillant</div>
              </div>

              <div className="flex items-center gap-2.5" id="hero-trust-techs">
                <div className="h-8 w-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="text-xs font-semibold text-slate-900">Tecnici Specializzati</div>
              </div>

              <div className="flex items-center gap-2.5" id="hero-trust-area">
                <div className="h-8 w-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="text-xs font-semibold text-slate-900">Intervento Rapido</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (Sleek Service & Vaillant Box) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Upper Mini Services Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-left">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Servizi Principali</h2>
                <span className="text-[10px] text-slate-400 font-semibold">Roma • Pomezia</span>
              </div>
              <div className="space-y-2.5">
                <a href="#climatizzazione" className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl hover:border-sky-300 border border-transparent transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 shrink-0">
                      <Snowflake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Climatizzazione</div>
                      <div className="text-[10px] text-slate-500">Daikin, Mitsubishi, Haier</div>
                    </div>
                  </div>
                  <div className="text-slate-300 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all text-xs">→</div>
                </a>

                <a href="#caldaie" className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl hover:border-sky-300 border border-transparent transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 shrink-0">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Caldaie e Riscaldamento</div>
                      <div className="text-[10px] text-slate-500">Condensazione e Pompe di Calore</div>
                    </div>
                  </div>
                  <div className="text-slate-300 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all text-xs">→</div>
                </a>

                <a href="#fotovoltaico" className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl hover:border-sky-300 border border-transparent transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Fotovoltaico</div>
                      <div className="text-[10px] text-slate-500">Sostenibilità ed Efficienza</div>
                    </div>
                  </div>
                  <div className="text-slate-300 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all text-xs">→</div>
                </a>
              </div>
            </div>

            {/* Lower Official Vaillant Tech Box in Sleek #2EB55F */}
            <div className="bg-[#2EB55F] rounded-2xl p-5 text-white shadow-lg text-left flex flex-col justify-between">
              <div>
                <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2.5 inline-block">
                  Assistenza Autorizzata
                </span>
                <h3 className="text-lg font-extrabold leading-tight mb-1.5">
                  Centro Assistenza Tecnica Ufficiale Vaillant
                </h3>
                <p className="text-xs text-white/90 leading-relaxed">
                  Siamo parte della rete ufficiale Vaillant. Manutenzione, garanzia e ricambi originali per la tua caldaia.
                </p>
              </div>
              
              <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-white/20">
                <button
                  onClick={onOpenAssistanceModal}
                  className="bg-white text-[#2EB55F] hover:bg-slate-50 px-3.5 py-1.5 rounded-lg font-bold text-xs shadow-sm transition-all cursor-pointer"
                  id="hero-vaillant-quick-btn"
                >
                  Chiama Assistenza
                </button>
                <div className="text-[10px] font-medium flex items-center gap-1 opacity-95">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Garanzia Ufficiale e Ricambi Originali</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
