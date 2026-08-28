import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Phone, 
  AlertCircle, 
  ShieldCheck,
  Wrench
} from 'lucide-react';
import posthog from 'posthog-js';
import { CONTACT_INFO, SERVICE_OPTIONS } from '../data/content';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  isAssistanceMode?: boolean;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Climatizzazione',
  isAssistanceMode = false,
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

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, serviceType: initialService }));
      setSubmitted(false);
      setErrorMsg(null);
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

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
    posthog.capture('quote_requested', {
      source: 'modal',
      service_type: formData.serviceType,
      is_assistance_request: isAssistanceMode,
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        id="quote-modal-container"
      >
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-center justify-between ${
          isAssistanceMode ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white'
        }`}>
          <div className="flex items-center gap-2.5">
            {isAssistanceMode ? (
              <Wrench className="w-5 h-5 text-emerald-200" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-sky-400" />
            )}
            <div>
              <h3 className="text-lg font-bold">
                {isAssistanceMode ? 'Prenota Assistenza Tecnica' : 'Richiedi un Preventivo'}
              </h3>
              <p className="text-xs text-slate-200">
                I.T.C. Impianti & Centro Ufficiale Vaillant
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900">
                  Richiesta Ricevuta con Successo!
                </h4>
                <p className="text-sm text-slate-600">
                  Grazie <strong className="text-slate-900">{formData.fullName}</strong>. Un tecnico I.T.C. ti ricontatterà al recapito indicato (<strong className="text-slate-900">{formData.phone || formData.email}</strong>) entro poche ore lavorative.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Chiudi finestra
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Direct call banner in modal */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600">Preferisci parlare subito?</span>
                <a 
                  href={`tel:${CONTACT_INFO.phonePrimaryClean}`} 
                  className="font-bold text-sky-700 hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>{CONTACT_INFO.phonePrimary}</span>
                </a>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Nome e cognome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="es. Marco Bianchi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-slate-900 text-sm outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="es. 333 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-slate-900 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="es. email@dominio.it"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-slate-900 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Tipo di servizio / intervento *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-slate-900 text-sm outline-none cursor-pointer"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Descrivi brevemente cosa ti serve
                </label>
                <textarea
                  rows={2}
                  placeholder="Dettagli impianto, modello o zona (es. Roma Sud, Torvaianica...)"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-slate-900 text-sm outline-none resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="modalPrivacy"
                  checked={formData.privacyAccepted}
                  onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                />
                <label htmlFor="modalPrivacy" className="text-xs text-slate-600 leading-snug cursor-pointer">
                  Accetto l'informativa sulla privacy per il contatto commerciale o tecnico.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 ${
                    isAssistanceMode 
                      ? 'bg-emerald-600 hover:bg-emerald-700' 
                      : 'bg-sky-600 hover:bg-sky-700'
                  }`}
                  id="modal-submit-btn"
                >
                  <span>{isAssistanceMode ? 'Conferma richiesta intervento' : 'Invia richiesta preventivo'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
