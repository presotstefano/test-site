import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Settings2, 
  Phone, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Flame
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface VaillantSectionProps {
  onOpenAssistanceModal: (service?: string) => void;
}

export const VaillantSection: React.FC<VaillantSectionProps> = ({ 
  onOpenAssistanceModal 
}) => {
  return (
    <section id="vaillant" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div>
            <span className="inline-block bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-500/30">
              Assistenza Autorizzata
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Centro Assistenza Tecnica Ufficiale <span className="text-emerald-400">Vaillant</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            ITC fa parte della rete dei Centri Assistenza Tecnica Ufficiali Vaillant in Italia. Forniamo supporto, manutenzione e assistenza tecnica su caldaie e prodotti Vaillant.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Assistenza tecnica
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Supporto per interventi di assistenza su caldaie, climatizzatori e prodotti Vaillant.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Interventi qualificati e sicuri</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Garanzia
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Applicazione delle condizioni previste dalla garanzia convenzionale e dai programmi Vaillant applicabili.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs text-sky-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Tutela formale e conformità</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                <Settings2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Ricambi e manutenzione
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Interventi professionali, manutenzione ordinaria e utilizzo di ricambi originali quando previsto.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ricambi originali e certificati</span>
            </div>
          </div>

        </div>

        {/* Brand Extension Note */}
        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 text-center max-w-2xl mx-auto mb-10 text-xs sm:text-sm text-slate-300">
          <span className="font-semibold text-white">Eseguiamo inoltre interventi e assistenza sui principali marchi come:</span>{' '}
          <span className="text-sky-300 font-semibold">Daikin</span>,{' '}
          <span className="text-sky-300 font-semibold">Haier</span> e{' '}
          <span className="text-sky-300 font-semibold">Mitsubishi Electric</span>.
        </div>

        {/* Section CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onOpenAssistanceModal('Assistenza Vaillant')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md transition-all active:scale-98 cursor-pointer"
            id="vaillant-request-btn"
          >
            <span>Richiedi assistenza Vaillant</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${CONTACT_INFO.phonePrimaryClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all active:scale-98"
            id="vaillant-call-btn"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Chiama 06 5235 2802</span>
          </a>
        </div>

      </div>
    </section>
  );
};
