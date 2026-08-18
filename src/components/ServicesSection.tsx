import React from 'react';
import { 
  Snowflake, 
  Flame, 
  Sun, 
  Droplets, 
  Grid2X2, 
  Wind, 
  Wrench, 
  ArrowRight, 
  Check, 
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  onOpenQuoteModal 
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'climatizzazione': return Snowflake;
      case 'caldaie': return Flame;
      case 'fotovoltaico': return Sun;
      case 'idraulico': return Droplets;
      case 'riscaldamento-pavimento': return Grid2X2;
      case 'aerazione': return Wind;
      case 'assistenza': return Wrench;
      default: return Sparkles;
    }
  };

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div>
            <span className="inline-block bg-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              I Nostri Servizi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tutto ciò che serve per il comfort della tua casa
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Dalla progettazione all'installazione, fino alla manutenzione e all'assistenza: seguiamo ogni impianto in tutte le sue fasi.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.id);
            const isHighlight = service.id === 'climatizzazione' || service.id === 'caldaie' || service.id === 'assistenza';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Top */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  
                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-bold bg-white/95 text-slate-900 shadow-sm backdrop-blur-xs">
                      {service.badge}
                    </span>
                  )}

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-white text-sky-700 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Brands Treated */}
                    {service.brands && service.brands.length > 0 && (
                      <div className="pt-2">
                        <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Marchi trattati:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.brands.map((b) => (
                            <span 
                              key={b} 
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key features bullet points */}
                    <div className="pt-2 space-y-1.5">
                      {service.features.slice(0, 2).map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-bold text-slate-700 hover:text-sky-600 flex items-center gap-1 transition-colors cursor-pointer"
                      id={`btn-detail-${service.id}`}
                    >
                      <span>Dettagli</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white border border-sky-200/80 transition-all cursor-pointer"
                      id={`btn-quote-${service.id}`}
                    >
                      {service.ctaText}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Non trovi la soluzione adatta al tuo immobile?
            </h4>
            <p className="text-sm text-slate-300">
              I nostri tecnici eseguono sopralluoghi dedicati e preventivi su misura per ogni esigenza termoidraulica.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Consulenza personalizzata')}
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-sky-50 shadow-md transition-colors cursor-pointer"
            id="services-custom-quote-btn"
          >
            Richiedi consulenza
          </button>
        </div>

      </div>
    </section>
  );
};
