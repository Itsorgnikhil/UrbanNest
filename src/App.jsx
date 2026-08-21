import React, { useState } from 'react';
import { StoreProvider } from './context/StoreContext';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { BentoExplore } from './components/BentoExplore';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductCatalog } from './components/ProductCatalog';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QueryForm } from './components/QueryForm';
import { N8NChatbotWidget } from './components/N8NChatbotWidget';
import { CartDrawer } from './components/CartDrawer';
import { StoreLocation } from './components/StoreLocation';
import { Testimonials } from './components/Testimonials';
import { AIRecommenderModal } from './components/AIRecommenderModal';
import { DocumentationModal } from './components/DocumentationModal';
import { N8NSettingsModal } from './components/N8NSettingsModal';
import { ToastContainer } from './components/ToastContainer';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <StoreProvider>
      {/* Master App Container Frame with Apple Liquid Glass Sidebar */}
      <div className="app-container">
        {/* Sticky Left Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Dashboard & Store Body */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
          <TopHeader />

          <main style={{ flex: 1, padding: '0 32px' }}>
            <BentoExplore />
            <Hero />
            <AboutSection />
            <ProductCatalog />
            <WhyChooseUs />
            <QueryForm onOpenSettings={() => setIsSettingsOpen(true)} />
            <N8NChatbotWidget />
            <StoreLocation />
            <Testimonials />
          </main>

          <Footer />
        </div>
      </div>

      {/* Dynamic Modals & Drawers */}
      <CartDrawer />
      <AIRecommenderModal />
      <DocumentationModal />
      <N8NSettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <ToastContainer />
    </StoreProvider>
  );
}
