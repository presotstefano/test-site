import React from 'react';
import { 
  Flame, 
  CheckCircle, 
  Sparkles, 
  Activity, 
  ArrowRight, 
  ShieldCheck, 
  FileCheck,
  Zap
} from 'lucide-react';

interface BoilerSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const BoilerSection: React.FC<BoilerSectionProps> = ({ 
  onOpenQuoteModal 
}) => {
  const maintenanceSteps = [
    {
      title: 'Controllo generale e tenuta',
      desc: 'Verifica dello stato generale dei componenti interni, del circuito idraulico e della pressione di esercizio.',
    },
    {
      title: 'Pulizia bruciatore e scambiatore',
      desc: 'Rimozione delle incrostazioni per preservare lo scambio termico ed evitare sprechi di combustibile.',
    },
    {
      title: 'Analisi della combustione e fumi',
      desc: 'Rilievo dei parametri di combustione e rendimento energetico secondo le disposizioni normative vigenti.',
    },
    {
      title: 'Rilascio documentazione e bollino',
      desc: 'Compilazione del libretto di impianto e rilascio del rapporto di controllo tecnico di efficienza energetica.',
    },
  ];

  return (
    <section id="caldaie" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information & Condensing Spotlight */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>Riscaldamento & Efficienza</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Manutenzione caldaie a Roma e provincia
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Lo staff ITC esegue interventi di manutenzione su caldaie tradizionali e caldaie a condensazione a Roma e provincia.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed space-y-2">
              <p>
                La manutenzione regolare consente di verificare il corretto funzionamento dell'impianto, migliorare l'efficienza e individuare tempestivamente eventuali anomalie.
              </p>
              <p className="text-slate-700 font-medium">
                ITC può effettuare anche controlli tecnici e analisi della combustione quando previsti.
              </p>
            </div>

            {/* Condensing Boiler Spotlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
                <Zap className="w-5 h-5 text-amber-600" />
                <h3>Più efficienza, meno sprechi</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Le caldaie a condensazione recuperano parte del calore che negli impianti tradizionali viene disperso con i fumi di scarico, aumentando l'efficienza complessiva dell'impianto e garantendo una gestione più oculata dei consumi di gas.
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Manutenzione Caldaia')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all active:scale-98 cursor-pointer"
                id="boiler-request-btn"
              >
                <span>Richiedi manutenzione caldaia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Maintenance Checklist Visual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-8 shadow-xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Intervento Standard ITC</h3>
                    <p className="text-xs text-slate-400">Caldaie murali e a basamento</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Certificato
                </span>
              </div>

              <div className="space-y-4">
                {maintenanceSteps.map((step, sidx) => (
                  <div key={sidx} className="flex items-start gap-3 text-sm">
                    <div className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-slate-700">
                      {sidx + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-100">{step.title}</div>
                      <div className="text-xs text-slate-400 leading-snug mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Interventi eseguiti da tecnici abilitati con rilascio del rapporto tecnico di controllo.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
