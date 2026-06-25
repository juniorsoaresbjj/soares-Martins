
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import DataSection from './components/DataSection';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AIDiagnosticModal from './components/AIDiagnosticModal';
import HistoryPage from './components/HistoryPage';
import ServicesPage from './components/ServicesPage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import ServiceDetail from './components/ServiceDetail';
import SEO from './components/SEO';
import ScrollReveal from './components/ScrollReveal';

type ViewType = 'home' | 'history' | 'services' | 'team' | 'contact' | 'blog';

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [initialAIInput, setInitialAIInput] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [view, setView] = useState<ViewType>('home');

  const getWhatsAppMessage = () => {
    switch (language) {
      case 'es':
        return '¡Hola! Me gustaría hablar con un abogado de Soares %26 Martins Advogados.';
      case 'en':
        return 'Hello! I would like to speak with an attorney from Soares %26 Martins Advogados.';
      default:
        return 'Olá! Gostaria de falar com um advogado da Soares %26 Martins Advogados.';
    }
  };

  const getWhatsAppTooltip = () => {
    switch (language) {
      case 'es':
        return 'Contactar por WhatsApp';
      case 'en':
        return 'Contact via WhatsApp';
      default:
        return 'Falar no WhatsApp';
    }
  };

  useEffect(() => {
    // Normalize path by removing trailing slash for comparison
    const path = location.pathname.endsWith('/') && location.pathname !== '/' 
      ? location.pathname.slice(0, -1) 
      : location.pathname;
    const hash = location.hash.toLowerCase();
    
    if (path === '/historia' || hash === '#history' || hash === '#escritorio') {
      setView('history');
    } else if (path === '/servicos' || hash === '#services' || hash === '#atuacao') {
      setView('services');
    } else if (path === '/equipe' || hash === '#team' || hash === '#equipe') {
      setView('team');
    } else if (path === '/contato' || hash === '#contact' || hash === '#contato') {
      setView('contact');
    } else if (path === '/blog' || hash === '#blog') {
      setView('blog');
    } else if (path === '/') {
      setView('home');
    }
    
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const navigateToHome = () => {
    navigate('/');
    setView('home');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-midnight bg-midnight">
      <Navbar currentView={view} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <div className="animate-fade-in-up">
              <SEO 
                title="Especialistas em Direito Condominial no Rio de Janeiro" 
                description="Soares Martins Advogados — Escritório corporativo focado em Direito Condominial e Patrimonial no RJ. Assessoria jurídica para síndicos e condomínios."
              />
              <Hero />
              <ScrollReveal>
                <AboutSection />
              </ScrollReveal>
              <ScrollReveal>
                <QuoteSection />
              </ScrollReveal>
              <ScrollReveal>
                <Services />
              </ScrollReveal>
              <ScrollReveal>
                <DataSection />
              </ScrollReveal>
              <ScrollReveal>
                <FAQSection onOpenDiagnostic={(contextText) => {
                  setInitialAIInput(contextText);
                  setIsAIModalOpen(true);
                }} />
              </ScrollReveal>
              <ScrollReveal>
                <ContactSection />
              </ScrollReveal>
              
              {/* Botão flutuante para WhatsApp */}
              <a 
                href={`https://wa.me/5521979549241?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-28 right-8 z-[500] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group cursor-pointer"
                aria-label="Falar conosco no WhatsApp"
              >
                <span className="absolute right-20 bg-midnight text-white px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {getWhatsAppTooltip()}
                </span>
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.432 2.519 1.22 3.504l-.794 2.899 2.973-.779c.954.52 2.035.794 3.137.795h.002c3.181 0 5.767-2.586 5.768-5.766 0-1.54-.599-2.987-1.688-4.077a5.72 5.72 0 00-4.074-1.688zM12 18c-1.12 0-2.22-.3-3.18-.87l-.23-.13-1.78.47.48-1.73-.15-.24A5.96 5.96 0 016 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6zm3.3-4.3c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09-.12.18-.46.58-.57.7-.1.12-.21.13-.39.04a4.93 4.93 0 01-1.44-.89c-.39-.34-.65-.77-.73-.91-.08-.14-.01-.22.06-.29.06-.06.14-.17.21-.25.07-.08.1-.14.15-.24.05-.1.02-.19-.01-.25-.03-.06-.3-.72-.41-.98-.11-.26-.22-.22-.3-.22-.08 0-.17-.01-.26-.01a.5.5 0 00-.36.17c-.12.13-.47.46-.47 1.13 0 .67.49 1.32.56 1.41.07.09.96 1.46 2.33 2.05.33.14.58.22.78.29.33.1.63.09.87.05.27-.04.87-.36 1-.7.13-.34.13-.63.09-.7-.04-.07-.16-.1-.33-.19z" />
                  <path d="M12.004.01C5.397.01.06 5.348.057 11.957c-.001 2.097.546 4.142 1.587 5.946L0 24l6.326-1.659c1.751.952 3.719 1.453 5.724 1.454h.005c6.613 0 11.949-5.34 11.953-11.997A11.9 11.9 0 0012.004.01zm0 21.99a9.87 9.87 0 01-5.021-1.378l-.36-.214-3.733.978.995-3.636-.235-.374A9.86 9.86 0 012.14 11.96c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.028 6.988 2.896a9.827 9.827 0 012.893 6.992c-.001 5.45-4.437 9.884-9.887 9.884z" />
                </svg>
              </a>

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
          } />
          
          <Route path="/historia/" element={<HistoryPage onBack={navigateToHome} />} />
          <Route path="/servicos/" element={<ServicesPage onBack={navigateToHome} />} />
          <Route path="/equipe/" element={<TeamPage onBack={navigateToHome} />} />
          <Route path="/contato/" element={<ContactPage onBack={navigateToHome} />} />
          <Route path="/blog/" element={<BlogPage onBack={navigateToHome} />} />
          <Route path="/blog/:slug/" element={<BlogPage onBack={navigateToHome} />} />
          
          {/* Novas páginas de serviços para SEO */}
          <Route path="/:slug/" element={<ServiceDetail />} />
        </Routes>
      </main>

      <Footer />

      {isAIModalOpen && (
        <AIDiagnosticModal 
          initialInput={initialAIInput}
          onClose={() => {
            setIsAIModalOpen(false);
            setInitialAIInput('');
          }} 
        />
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
