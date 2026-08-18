import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, MessageSquare, Search, Wrench, Headphones } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return MessageSquare;
      case 1: return Search;
      case 2: return Wrench;
      case 3: return Headphones;
      default: return Wrench;
    }
  };

  return (
    <section id="processo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <span>Metodo di Lavoro</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dalla prima consulenza all'assistenza
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Un percorso chiaro, trasparente e strutturato per garantirti la massima serenità prima, durante e dopo ogni intervento.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(idx);
            return (
              <div 
                key={step.step}
                id={`process-step-${step.step}`}
                className="relative p-6 rounded-3xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between space-y-6 hover:bg-white hover:border-sky-300 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-sky-600 transition-colors">
                    {step.step}
                  </span>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 group-hover:text-sky-600 group-hover:border-sky-200 transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="w-8 h-1 rounded-full bg-slate-200 group-hover:bg-sky-500 transition-colors" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
