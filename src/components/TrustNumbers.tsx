import React from 'react';
import { Calendar, MapPin, Award, Layers } from 'lucide-react';

export const TrustNumbers: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      number: '30+',
      label: 'Anni di esperienza',
      description: 'Presenza storica a Roma, Pomezia e Torvaianica',
    },
    {
      icon: MapPin,
      number: 'Roma e provincia',
      label: 'Area di intervento',
      description: 'Copertura capillare per privati e aziende',
    },
    {
      icon: Award,
      number: 'Centro Ufficiale',
      label: 'Assistenza Vaillant',
      description: 'Tecnici certificati e ricambi originali',
    },
    {
      icon: Layers,
      number: 'Installazione + Assistenza',
      label: 'Servizio completo',
      description: 'Unico referente dalla progettazione al post-vendita',
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-10 border-y border-slate-800" id="statistiche-affidabilita">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-sky-500/40 transition-colors"
                id={`stat-card-${idx}`}
              >
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold text-sky-300">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
