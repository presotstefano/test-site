import React from 'react';
import { MapPin, Navigation, Phone, CheckCircle, Clock } from 'lucide-react';
import { CONTACT_INFO, SERVED_ZONES } from '../data/content';

export const AreaServita: React.FC = () => {
  return (
    <section id="area-servita" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Information */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Copertura Territoriale</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Operiamo a Roma, Pomezia, Torvaianica e provincia
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              La nostra sede si trova a Torvaianica, nel comune di Pomezia, a pochi chilometri da Roma. Da questa posizione strategica serviamo con tempestività sia la capitale che tutto il litorale e l'entroterra pontino.
            </p>

            {/* Address Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-sky-600 text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">Sede Principale</div>
                  <div className="text-lg font-extrabold text-slate-900">{CONTACT_INFO.address}</div>
                  <div className="text-sm text-slate-700">{CONTACT_INFO.postalCode} {CONTACT_INFO.city} ({CONTACT_INFO.province})</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <Clock className="w-3.5 h-3.5 text-slate-700" />
                <span>Orario di apertura ufficio: {CONTACT_INFO.hours}</span>
              </div>
            </div>

            {/* Served Municipalities Chips */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Zone di intervento frequente:
              </div>
              <div className="flex flex-wrap gap-2">
                {SERVED_ZONES.map((zone) => (
                  <span
                    key={zone}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>{zone}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation and Call actions */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent('Viale Francia 70/B Torvaianica Pomezia RM')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                id="maps-directions-link"
              >
                <Navigation className="w-4 h-4 text-sky-600" />
                <span>Indicazioni stradali</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phonePrimaryClean}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                id="area-call-link"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Chiama la sede</span>
              </a>
            </div>

          </div>

          {/* Right Map View */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 relative h-[420px]">
              {/* Clean Map Embed with Location Coordinates */}
              <iframe
                title="Mappa Sede ITC Torvaianica Pomezia Roma"
                src="https://maps.google.com/maps?q=Viale%20Francia,%2070%2FB,%2000071%20Torvaianica%20Pomezia%20RM&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                aria-hidden="false"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />

              {/* Overlay Marker Card */}
              <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 text-left max-w-xs pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-slate-900">Sede Operativa I.T.C.</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1">
                  Viale Francia 70/B, Torvaianica (RM)
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
