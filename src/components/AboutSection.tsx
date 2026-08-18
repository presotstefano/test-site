import React from 'react';
import { ShieldCheck, Award, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Photography Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=700&q=80"
                    alt="Tecnico ITC su impianto tecnologico termico"
                    className="w-full h-52 sm:h-64 object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-1 shadow-md">
                  <div className="text-2xl font-black text-emerald-400">30+ Anni</div>
                  <div className="text-xs text-slate-300">Radicati a Roma e sul litorale laziale</div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-5 rounded-3xl bg-sky-600 text-white space-y-1 shadow-md">
                  <Award className="w-6 h-6 text-sky-200" />
                  <div className="text-sm font-bold pt-1">Centro Vaillant</div>
                  <div className="text-xs text-sky-100">Assistenza Tecnica Ufficiale</div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=700&q=80"
                    alt="Manutenzione e strumenti di controllo impianti"
                    className="w-full h-48 sm:h-56 object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Values */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-sky-600" />
              <span>Storia & Affidabilità</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Da oltre trent'anni al servizio di Roma e provincia
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              <strong>I.T.C.</strong> è attiva sul territorio di Roma, Pomezia e Torvaianica da oltre trent'anni. Grazie a competenza, professionalità e attenzione all'innovazione tecnologica è diventata un punto di riferimento nel settore degli impianti termici, idraulici, di climatizzazione, aerazione e fotovoltaici.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Il nostro staff segue ogni cliente dalla progettazione iniziale e dal preventivo fino all'installazione e alla successiva assistenza, con la serietà che solo un'azienda radicata e solida può garantire.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Interventi svolti esclusivamente da personale tecnico specializzato</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Utilizzo di materiali certificati e ricambi originali garantiti</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Rapporto diretto, chiaro e senza intermediari</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center gap-4 text-xs text-slate-700">
              <div>
                <span className="font-bold text-slate-900 block">{CONTACT_INFO.owner}</span>
                <span>P.IVA: {CONTACT_INFO.vatNumber}</span>
              </div>
              <div className="h-6 w-px bg-slate-300" />
              <div>
                <span className="font-bold text-slate-900 block">Sede Operativa</span>
                <span>{CONTACT_INFO.address}, Torvaianica</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
