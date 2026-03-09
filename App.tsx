
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import DataSection from './components/DataSection';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AIDiagnosticModal from './components/AIDiagnosticModal';
import HistoryPage from './components/HistoryPage';
import ServicesPage from './components/ServicesPage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';

type ViewType = 'home' | 'history' | 'services' | 'team' | 'contact' | 'blog';

const AppContent: React.FC = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [view, setView] = useState<ViewType>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      
      if (hash === '#history' || hash === '#escritorio') {
        setView('history');
      } else if (hash === '#services' || hash === '#atuacao') {
        setView('services');
      } else if (hash === '#team' || hash === '#equipe') {
        setView('team');
      } else if (hash === '#contact' || hash === '#contato') {
        setView('contact');
      } else if (hash === '#blog') {
        setView('blog');
      } else {
        setView('home');
      }
      
      window.scrollTo(0, 0);
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
    setView('home');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-midnight bg-midnight">
      <Navbar currentView={view} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <div className="animate-fade-in-up">
            <Hero />
            <AboutSection />
            <QuoteSection />
            <Services />
            <DataSection />
            <ContactSection />
            
            {/* Botão flutuante para Diagnóstico IA */}
            <button 
              onClick={() => setIsAIModalOpen(true)}
              className="fixed bottom-8 right-8 z-[500] bg-bronze text-midnight w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
              aria-label="Abrir diagnóstico jurídico com IA"
            >
              <span className="absolute right-20 bg-midnight text-white px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Diagnóstico IA
              </span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </button>
          </div>
        )}
        
        {view === 'history' && <HistoryPage onBack={navigateToHome} />}
        {view === 'services' && <ServicesPage onBack={navigateToHome} />}
        {view === 'team' && <TeamPage onBack={navigateToHome} />}
        {view === 'contact' && <ContactPage onBack={navigateToHome} />}
        {view === 'blog' && <BlogPage onBack={navigateToHome} />}
      </main>

      <Footer />

      {isAIModalOpen && (
        <AIDiagnosticModal onClose={() => setIsAIModalOpen(false)} />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
