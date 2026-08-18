import React from 'react';
import { 
  PiggyBank, 
  Smile, 
  Wrench, 
  Leaf, 
  Sun, 
  Flame, 
  Snowflake, 
  Layers, 
  ArrowRight, 
  HelpCircle,
  FileText,
  CheckCircle2
} from 'lucide-react';

interface SavingsSustainabilityProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const SavingsSustainability: React.FC<SavingsSustainabilityProps> = ({ 
  onOpenQuoteModal 
}) => {
  const ecoTechnologies = [
    { title: 'Climatizzatori di nuova generazione', icon: Snowflake },
    { title: 'Caldaie ad alta efficienza', icon: Flame },
    { title: 'Pompe di calore aria-acqua', icon: Leaf },
    { title: 'Riscaldamento a pavimento radiante', icon: Layers },
    { title: 'Pannelli fotovoltaici e accumulo', icon: Sun },
    { title: 'Riqualificazione energetica globale', icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-20 py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. SEZIONE RISPARMIO E SALUTE */}
        <section id="risparmio-salute">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Efficienza per le persone e per gli ambienti
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Creiamo le condizioni ideali di benessere termico riducendo al minimo l'impatto economico ed ecologico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Ti aiutiamo a risparmiare
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Soluzioni ad alta efficienza energetica progettate per ridurre gli sprechi e ottimizzare ogni kilowattora o metro cubo consumato.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Pensiamo al tuo comfort
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Climatizzazione, riscaldamento e qualità dell'aria pensati per creare ambienti più confortevoli, salubri e piacevoli da vivere.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Manutenzione ordinaria e straordinaria
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Manteniamo gli impianti efficienti e affidabili nel tempo attraverso controlli regolari e supporto tecnico costante.
              </p>
            </div>
          </div>
        </section>


        {/* 2. SEZIONE SOSTENIBILITÀ: ITC È ECO-SOLIDALE */}
        <section id="sostenibilita" className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sostenibilità Ambientale</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                ITC è eco-solidale
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Le nostre installazioni puntano a migliorare comfort ed efficienza energetica riducendo gli sprechi.
              </p>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {ecoTechnologies.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <Icon className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{tech.title}</span>
                    </div>
                  );
                })}
              </div>

              <p className="text-sm text-slate-700 font-medium pt-2 leading-relaxed border-t border-slate-100">
                Tecnologie più efficienti possono aumentare il comfort degli ambienti e contribuire alla valorizzazione energetica degli immobili.
              </p>
            </div>

            {/* Right Image: Modern Sustainable Home with Solar PV */}
            <div className="lg:col-span-5 h-full min-h-[340px] relative bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=900&q=80"
                alt="Abitazione moderna ad alta efficienza energetica con impianto fotovoltaico e climatizzazione integrata"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-white text-xs text-slate-900 font-semibold shadow-lg">
                <div className="text-emerald-800 font-bold">Impianti Green & Risparmio Energetico</div>
                <div className="text-slate-600 text-[11px] font-normal mt-0.5">Soluzioni integrate per abitazioni a Roma e litorale</div>
              </div>
            </div>

          </div>
        </section>


        {/* 3. SEZIONE INCENTIVI E AGEVOLAZIONI */}
        <section id="incentivi" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 text-white shadow-xl">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Detrazioni Fiscali & Supporto</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Incentivi e agevolazioni
            </h2>

            <div className="space-y-4 max-w-2xl mx-auto text-slate-200 text-sm sm:text-base leading-relaxed">
              <p>
                Alcuni interventi di efficientamento energetico possono accedere a incentivi, agevolazioni o detrazioni fiscali previste dalla normativa vigente.
              </p>
              <p className="font-semibold text-white">
                Il nostro staff può aiutarti a capire quali opportunità possono essere applicabili al tuo intervento.
              </p>
            </div>

            {/* Note box */}
            <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700 text-xs text-slate-300 max-w-2xl mx-auto flex items-start gap-3 text-left">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Nota informativa:</strong> Le agevolazioni possono cambiare nel tempo. Verifica sempre requisiti e normativa vigente al momento dell'intervento.
              </span>
            </div>

            <div>
              <button
                onClick={() => onOpenQuoteModal('Informazioni Incentivi')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md transition-colors cursor-pointer"
                id="incentives-info-btn"
              >
                <span>Richiedi informazioni</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
