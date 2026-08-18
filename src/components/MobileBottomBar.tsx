import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface MobileBottomBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-2xl"
      id="mobile-sticky-action-bar"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${CONTACT_INFO.phonePrimaryClean}`}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-slate-900 text-white active:scale-98 transition-transform shadow-sm"
          id="mobile-bar-call-btn"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Chiama</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-600 to-blue-700 text-white active:scale-98 transition-transform shadow-md shadow-sky-900/20 cursor-pointer"
          id="mobile-bar-quote-btn"
        >
          <FileText className="w-4 h-4" />
          <span>Preventivo</span>
        </button>
      </div>
    </div>
  );
};
