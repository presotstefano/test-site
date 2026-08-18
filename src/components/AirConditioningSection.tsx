import React from 'react';
import { 
  Snowflake, 
  Wind, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  VolumeX, 
  Smartphone, 
  ShieldCheck
} from 'lucide-react';

interface AirConditioningSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const AirConditioningSection: React.FC<AirConditioningSectionProps> = ({ 
  onOpenQuoteModal 
}) => {
  return (
    <section id="climatizzazione" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Snowflake className="w-3.5 h-3.5 text-sky-600" />
            <span>Condizionamento & Clima</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Climatizzazione per case, uffici e aziende
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            ITC installa e assiste sistemi di climatizzazione a Roma e provincia, proponendo soluzioni adatte ad abitazioni, uffici e attività commerciali.
          </p>
        </div>

        {/* Brands Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Mitsubishi Electric Card */}
          <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
                  Top Brand
                </span>
                <span className="text-xs font-semibold text-slate-700">Silenziosità estrema</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Mitsubishi Electric
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Sistemi compatti, silenziosi e progettati per un'elevata efficienza energetica e una durata eccezionale nel tempo.
              </p>

              {/* Focus on MSZ-EF */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Modello in evidenza: MSZ-EF</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Linea dal design elegante realizzata per combinare comfort, prestazioni elevate ed estetica raffinata in ogni ambiente.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <VolumeX className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Modalità silenziosa per camere da letto</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Controllo remoto Wi-Fi tramite app</span>
              </div>
            </div>
          </div>

          {/* Daikin Card */}
          <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Innovazione
                </span>
                <span className="text-xs font-semibold text-slate-700">Controllo Smart</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Daikin
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Soluzioni di climatizzazione che permettono di gestire gli ambienti in modo efficiente e personalizzato, garantendo una temperatura ideale in ogni stagione.
              </p>

              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Sensori di presenza intelligenti</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Filtri di purificazione aria avanzati</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Sistemi mono e multisplit flessibili</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-blue-900 font-medium">
              Ottimo bilanciamento tra classe energetica e precisione termica.
            </div>
          </div>

          {/* Haier Card */}
          <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  Versatilità
                </span>
                <span className="text-xs font-semibold text-slate-700">Qualità / Prezzo</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Haier
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Soluzioni moderne per climatizzazione domestica e professionale, con funzioni di autopulizia e connettività avanzata per il massimo comfort.
              </p>

              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tecnologia Self-Clean e igienizzazione</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Flusso d'aria 3D per comfort omogeneo</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Installazione rapida e affidabilità</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-teal-50/50 border border-teal-100 text-xs text-teal-900 font-medium">
              Soluzioni pratiche e moderne per ogni tipo di metratura.
            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <button
            onClick={() => onOpenQuoteModal('Climatizzazione')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-900/15 transition-all active:scale-98 cursor-pointer"
            id="aircon-quote-cta-btn"
          >
            <span>Richiedi un preventivo climatizzazione</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
