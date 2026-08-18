import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { ServiceItem } from '../types';
import { CONTACT_INFO } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Top Image Banner */}
        <div className="relative h-48 sm:h-60 w-full bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors cursor-pointer backdrop-blur-xs"
            id="service-modal-close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            {service.badge && (
              <span className="px-2.5 py-0.5 rounded-md bg-sky-500 text-white text-xs font-bold uppercase tracking-wider mb-1.5 inline-block">
                {service.badge}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Descrizione del servizio
            </h4>
            <p className="text-base text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Brand Highlights */}
          {service.brands && service.brands.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Marchi trattati e certificati:
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.brands.map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features list */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Cosa include l'intervento ITC:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={`tel:${CONTACT_INFO.phonePrimaryClean}`}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>06 5235 2802</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenQuote(service.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              id="service-modal-quote-btn"
            >
              <span>Richiedi preventivo per {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
