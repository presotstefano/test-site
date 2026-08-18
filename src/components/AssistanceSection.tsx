import React, { useState } from 'react';
import { 
  Flame, 
  Snowflake, 
  Zap, 
  Thermometer, 
  Droplets, 
  Award, 
  Phone, 
  Wrench, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface AssistanceSectionProps {
  onOpenAssistanceModal: (initialDevice?: string) => void;
}

export const AssistanceSection: React.FC<AssistanceSectionProps> = ({ 
  onOpenAssistanceModal 
}) => {
  const [selectedIssue, setSelectedIssue] = useState<string>('Caldaie');

  const assistanceItems = [
    { 
      id: 'caldaie', 
      name: 'Caldaie', 
      icon: Flame, 
      desc: 'Mancata accensione, calo di pressione, blocco o anomalie fumi.',
      color: 'from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200' 
    },
    { 
      id: 'climatizzatori', 
      name: 'Climatizzatori', 
      icon: Snowflake, 
      desc: 'Non raffredda, perdita acqua, filtri da sanificare o gas esaurito.',
      color: 'from-sky-500/10 to-blue-500/10 text-sky-600 border-sky-200' 
    },
    { 
      id: 'pompe-di-calore', 
      name: 'Pompe di calore', 
      icon: Zap, 
      desc: 'Errori inverter, sbilanciamenti termici o taratura circuito.',
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200' 
    },
    { 
      id: 'impianti-termici', 
      name: 'Impianti termici', 
      icon: Thermometer, 
      desc: 'Radiatori freddi, sfiato aria, valvole termostatiche bloccate.',
      color: 'from-rose-500/10 to-pink-500/10 text-rose-600 border-rose-200' 
    },
    { 
      id: 'impianti-idraulici', 
      name: 'Impianti idraulici', 
      icon: Droplets, 
      desc: 'Perdite visibili o occulte, scarichi lenti, pressione idrica.',
      color: 'from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-200' 
    },
    { 
      id: 'prodotti-vaillant', 
      name: 'Prodotti Vaillant', 
      icon: Award, 
      desc: 'Assistenza ufficiale, diagnosi rapida con ricambi originali.',
      color: 'from-emerald-600/15 to-emerald-500/10 text-emerald-700 border-emerald-300' 
    },
  ];

  return (
    <section id="assistenza" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Supporto & Riparazioni</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hai un problema con il tuo impianto?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Siamo pronti a garantirti assistenza con interventi professionali, manutenzione ordinaria e straordinaria e supporto tecnico specializzato.
          </p>
        </div>

        {/* Issue Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {assistanceItems.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedIssue === item.name;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIssue(item.name)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between bg-white ${
                  isSelected 
                    ? 'border-emerald-600 shadow-md ring-2 ring-emerald-500/20' 
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
                id={`assistance-card-${item.id}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} border`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {isSelected && (
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Selezionato
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-700">Intervento rapido a Roma e litorale</span>
                  <span className="text-emerald-700 font-bold group-hover:underline">Seleziona →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Action Box with Telephones */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Richiedi subito l'intervento di un tecnico per <span className="text-emerald-600">{selectedIssue}</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Compila il modulo per essere ricontattato in tempi brevi oppure chiama direttamente i nostri numeri per urgenze e appuntamenti.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAssistanceModal(`Assistenza ${selectedIssue}`)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-900/15 transition-all active:scale-98 cursor-pointer"
              id="assistance-big-cta-btn"
            >
              <span>Prenota un intervento</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Telephones Bar */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a
              href={`tel:${CONTACT_INFO.phoneSecondaryClean}`}
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center gap-3 transition-colors text-slate-900"
              id="assistenza-tel-secondary"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <div className="text-left">
                <div className="text-[11px] text-slate-700 font-medium">Ufficio & Interventi</div>
                <div className="text-base font-bold tracking-wide">06 9158878</div>
              </div>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phonePrimaryClean}`}
              className="p-3.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200 flex items-center justify-center gap-3 transition-colors text-slate-900"
              id="assistenza-tel-primary"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <div className="text-left">
                <div className="text-[11px] text-emerald-800 font-semibold">Linea Diretta Tecnica</div>
                <div className="text-base font-extrabold tracking-wide text-emerald-950">06 5235 2802</div>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
