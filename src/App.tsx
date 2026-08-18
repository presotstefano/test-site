import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustNumbers } from './components/TrustNumbers';
import { ServicesSection } from './components/ServicesSection';
import { VaillantSection } from './components/VaillantSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AssistanceSection } from './components/AssistanceSection';
import { BoilerSection } from './components/BoilerSection';
import { AirConditioningSection } from './components/AirConditioningSection';
import { SavingsSustainability } from './components/SavingsSustainability';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { AreaServita } from './components/AreaServita';
import { FaqSection } from './components/FaqSection';
import { QuoteFormSection } from './components/QuoteFormSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Climatizzazione');
  const [isAssistanceMode, setIsAssistanceMode] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const handleOpenQuoteModal = (initialService = 'Climatizzazione') => {
    setModalService(initialService);
    setIsAssistanceMode(false);
    setQuoteModalOpen(true);
  };

  const handleOpenAssistanceModal = (initialService = 'Assistenza Caldaia') => {
    setModalService(initialService);
    setIsAssistanceMode(true);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white pb-16 sm:pb-0">
      
      {/* 1. Header with Top Utility Bar & Sticky Navigation */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenAssistanceModal={handleOpenAssistanceModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal('Climatizzazione')}
          onOpenAssistanceModal={() => handleOpenAssistanceModal('Assistenza Generale')}
        />

        {/* 3. Verified Reliability Numbers Bar */}
        <TrustNumbers />

        {/* 4. Core Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceDetail(service)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 5. Official Vaillant Dedicated Center Section */}
        <VaillantSection
          onOpenAssistanceModal={(service) => handleOpenAssistanceModal(service || 'Assistenza Vaillant')}
        />

        {/* 6. Why Choose ITC (6 Value Pillars) */}
        <WhyChooseUs />

        {/* 7. Assistance Diagnostic & Booking Section */}
        <AssistanceSection
          onOpenAssistanceModal={handleOpenAssistanceModal}
        />

        {/* 8. Boiler & Heating Maintenance Section */}
        <BoilerSection
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 9. Air Conditioning Brands & Tech (Mitsubishi, Daikin, Haier) */}
        <AirConditioningSection
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 10. Savings, Eco-Solidale Sustainability & Incentives */}
        <SavingsSustainability
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 11. 4-Step Process Flow */}
        <ProcessSection />

        {/* 12. About Us - 30+ Years Company Story */}
        <AboutSection />

        {/* 13. Service Coverage Area & Interactive Map */}
        <AreaServita />

        {/* 14. Frequently Asked Questions (FAQ Accordion) */}
        <FaqSection />

        {/* 15. Final Conversion CTA & Quote Request Form */}
        <QuoteFormSection
          initialService={modalService}
          onOpenAssistanceModal={() => handleOpenAssistanceModal('Guasto urgente')}
        />

      </main>

      {/* 16. Footer with P.IVA, contact details & quick links */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 17. Sticky Mobile Action Bar (Chiama / Preventivo) */}
      <MobileBottomBar onOpenQuoteModal={() => handleOpenQuoteModal('Climatizzazione')} />

      {/* Global Quote / Assistance Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={modalService}
        isAssistanceMode={isAssistanceMode}
      />

      {/* Service Deep-Dive Modal */}
      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onOpenQuote={handleOpenQuoteModal}
      />

    </div>
  );
}
