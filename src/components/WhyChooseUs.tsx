import React from 'react';
import { 
  Clock, 
  UserCheck, 
  Layers, 
  Zap, 
  MessageSquare, 
  Wrench,
  Shield
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return Clock;
      case 1: return UserCheck;
      case 2: return Layers;
      case 3: return Zap;
      case 4: return MessageSquare;
      case 5: return Wrench;
      default: return Shield;
    }
  };

  return (
    <section id="perche-itc" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <span>Garanzia di Qualità</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Un unico partner, dalla progettazione all'assistenza
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            I.T.C. opera sul territorio di Roma e Torvaianica da oltre trent'anni ed è diventata un punto di riferimento nel settore grazie a competenza, professionalità e continua ricerca dell'innovazione tecnologica.
          </p>
        </div>

        {/* 6 Grid Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={idx}
                id={`why-card-${idx}`}
                className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-sky-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
