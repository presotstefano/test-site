import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Wrench,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO, SERVICE_OPTIONS } from '../data/content';
import { QuoteFormData } from '../types';

interface QuoteFormSectionProps {
  initialService?: string;
  onOpenAssistanceModal?: () => void;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({ 
  initialService = 'Climatizzazione',
  onOpenAssistanceModal 
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService,
    notes: '',
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Per favore inserisci il tuo nome e cognome.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMsg('Per favore inserisci almeno un recapito telefonico o un\'email.');
      return;
    }
    if (!formData.privacyAccepted) {
      setErrorMsg('È necessario accettare l\'informativa sulla privacy per procedere.');
      return;
    }

    setErrorMsg(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceType: 'Climatizzazione',
      notes: '',
      privacyAccepted: false,
    });
    setSubmitted(false);
  };

  return (
    <section id="contatti" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Card */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Preventivo Gratuito & Assistenza</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Hai bisogno di un nuovo impianto o di assistenza?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Raccontaci cosa ti serve. Ti aiuteremo a trovare la soluzione più adatta per il comfort della tua casa, del tuo ufficio o della tua azienda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Operating Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Contatto Diretto ITC
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Parla direttamente con i nostri responsabili tecnici per consulenze o emergenze.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${CONTACT_INFO.phonePrimaryClean}`}
                  className="p-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 flex items-center gap-4 transition-colors group"
                  id="form-section-tel-primary"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Telefono Principale</div>
                    <div className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {CONTACT_INFO.phonePrimary}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phoneSecondaryClean}`}
                  className="p-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 flex items-center gap-4 transition-colors group"
                  id="form-section-tel-secondary"
                >
                  <div className="p-3 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Ufficio & Centralino</div>
                    <div className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                      {CONTACT_INFO.phoneSecondary}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="p-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 flex items-center gap-4 transition-colors group"
                  id="form-section-email"
                >
                  <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email di contatto</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                      {CONTACT_INFO.email}
                    </div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>{CONTACT_INFO.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Centro Assistenza Tecnica Ufficiale Vaillant</span>
                </div>
              </div>
            </div>

            {/* Quick Assistance Callout */}
            {onOpenAssistanceModal && (
              <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-emerald-950">Hai un guasto urgente?</div>
                  <div className="text-xs text-emerald-800">Salta il form e prenota direttamente un intervento tecnico.</div>
                </div>
                <button
                  onClick={onOpenAssistanceModal}
                  className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-xs cursor-pointer"
                  id="form-quick-assistance-btn"
                >
                  Prenota assistenza
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Richiesta Inviata con Successo!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Grazie <strong className="text-slate-900">{formData.fullName}</strong>. Il nostro team tecnico prenderà in carico la tua richiesta per <strong className="text-slate-900">{formData.serviceType}</strong> e ti contatterà nel più breve tempo possibile.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
                      id="form-reset-btn"
                    >
                      Invia un'altra richiesta
                    </button>
                    <a
                      href={`tel:${CONTACT_INFO.phonePrimaryClean}`}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Chiama {CONTACT_INFO.phonePrimary}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left" id="main-quote-form">
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Modulo Richiesta Preventivo
                    </h3>
                    <p className="text-xs text-slate-600">
                      Compila i campi sottostanti. Riceverai una risposta dettagliata e senza impegno.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Nome e Cognome */}
                  <div>
                    <label htmlFor="fullName" className="text-[10px] uppercase font-bold text-slate-400 block mb-1 tracking-wider">
                      Nome e cognome *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="es. Mario Rossi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white outline-none transition-all"
                    />
                  </div>

                  {/* Telefono & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="text-[10px] uppercase font-bold text-slate-400 block mb-1 tracking-wider">
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="es. 333 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-[10px] uppercase font-bold text-slate-400 block mb-1 tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="es. mario.rossi@email.it"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Tipo di Servizio (Dropdown) */}
                  <div>
                    <label htmlFor="serviceType" className="text-[10px] uppercase font-bold text-slate-400 block mb-1 tracking-wider">
                      Tipo di servizio *
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white outline-none transition-all cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Descrizione breve */}
                  <div>
                    <label htmlFor="notes" className="text-[10px] uppercase font-bold text-slate-400 block mb-1 tracking-wider">
                      Descrizione *
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Cosa ti serve? (es. installazione condizionatore, sostituzione caldaia...)"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-900 focus:border-sky-500 focus:bg-white outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                    />
                    <label htmlFor="privacyAccepted" className="text-xs text-slate-500 leading-snug cursor-pointer">
                      Accetto l'informativa sulla privacy per il trattamento dei dati personali.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-sky-100 uppercase tracking-wide text-xs transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                    id="submit-quote-form-btn"
                  >
                    <span>Invia Richiesta</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-center text-[11px] text-slate-600">
                    Nessun costo o vincolo. Risposta rapida entro i normali orari di lavoro (Lun–Ven 9:00–18:00).
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
