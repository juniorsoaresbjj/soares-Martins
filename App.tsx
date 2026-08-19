
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { trackWhatsAppClick, trackPhoneClick } from './services/analytics';
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
import CopacabanaAuctionPage from './components/CopacabanaAuctionPage';
import AtlanticaAuctionPage from './components/AtlanticaAuctionPage';
import UrcaAuctionPage from './components/UrcaAuctionPage';
import PradoJuniorAuctionPage from './components/PradoJuniorAuctionPage';
import NossaSenhoraCopacabanaAuctionPage from './components/NossaSenhoraCopacabanaAuctionPage';
import SilveiraMartinsAuctionPage from './components/SilveiraMartinsAuctionPage';
import SilveiraMartins503AuctionPage from './components/SilveiraMartins503AuctionPage';
import VoluntariosPatriaAuctionPage from './components/VoluntariosPatriaAuctionPage';
import HaddockLoboAuctionPage from './components/HaddockLoboAuctionPage';
import LeblonAuctionPage from './components/LeblonAuctionPage';
import SiqueiraCamposAuctionPage from './components/SiqueiraCamposAuctionPage';
import LauroMullerAuctionPage from './components/LauroMullerAuctionPage';
import GaveaAuctionPage from './components/GaveaAuctionPage';
import PraiaBotafogo356AuctionPage from './components/PraiaBotafogo356AuctionPage';
import SantaTeresaCostaBastos8AuctionPage from './components/SantaTeresaCostaBastos8AuctionPage';
import CentroRiachuelo220AuctionPage from './components/CentroRiachuelo220AuctionPage';
import CopacabanaAtlantica3806AuctionPage from './components/CopacabanaAtlantica3806AuctionPage';
import TijucaSaoFranciscoXavier90AuctionPage from './components/TijucaSaoFranciscoXavier90AuctionPage';
import TijucaDelgadoCarvalho75AuctionPage from './components/TijucaDelgadoCarvalho75AuctionPage';
import CopacabanaTonelero202AuctionPage from './components/CopacabanaTonelero202AuctionPage';
import CopacabanaSantaClara431AuctionPage from './components/CopacabanaSantaClara431AuctionPage';
import LaranjeirasAuctionPage from './components/LaranjeirasAuctionPage';
import RioCompridoHaddockLobo117AuctionPage from './components/RioCompridoHaddockLobo117AuctionPage';
import TijucaUruguai94AuctionPage from './components/TijucaUruguai94AuctionPage';
import CosmeVelhoSaoJudasTadeu6AuctionPage from './components/CosmeVelhoSaoJudasTadeu6AuctionPage';
import MaracanaDonaZulmira19AuctionPage from './components/MaracanaDonaZulmira19AuctionPage';
import CopacabanaMascarenhasMorais190AuctionPage from './components/CopacabanaMascarenhasMorais190AuctionPage';
import CopacabanaSilvaCastro44AuctionPage from './components/CopacabanaSilvaCastro44AuctionPage';
import SantaTeresaJoaquimMurtinho587AuctionPage from './components/SantaTeresaJoaquimMurtinho587AuctionPage';
import SantaTeresaJulioOtoni254AuctionPage from './components/SantaTeresaJulioOtoni254AuctionPage';
import BarraDaTijucaLucioCosta6500AuctionPage from './components/BarraDaTijucaLucioCosta6500AuctionPage';
import BotafogoGuilherminaGuinle18AuctionPage from './components/BotafogoGuilherminaGuinle18AuctionPage';
import FlamengoHonorioDeBarros23AuctionPage from './components/FlamengoHonorioDeBarros23AuctionPage';
import UrcaPortugal584AuctionPage from './components/UrcaPortugal584AuctionPage';
import MaracanaMoraisSilva51AuctionPage from './components/MaracanaMoraisSilva51AuctionPage';
import SEO from './components/SEO';
import ScrollReveal from './components/ScrollReveal';

type ViewType = 'home' | 'history' | 'services' | 'team' | 'contact' | 'blog';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://soaresmartinsadv.com/#website",
      "url": "https://soaresmartinsadv.com",
      "name": "Soares Martins Advogados",
      "description": "Advogado Condominial e Imobiliário no Rio de Janeiro. Assessoria jurídica para condomínios, síndicos, proprietários e locadores."
    },
    {
      "@type": "Organization",
      "@id": "https://soaresmartinsadv.com/#organization",
      "name": "Soares Martins Advogados",
      "url": "https://soaresmartinsadv.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://soaresmartinsadv.com/#logo",
        "url": "https://soaresmartinsadv.com/favicon.svg",
        "caption": "Soares Martins Advogados Logo"
      },
      "image": {
        "@id": "https://soaresmartinsadv.com/#logo"
      },
      "sameAs": [
        "https://www.instagram.com/soaresmartinsadvogados/"
      ]
    },
    {
      "@type": "LegalService",
      "@id": "https://soaresmartinsadv.com/#legalservice",
      "name": "Soares Martins Advogados",
      "url": "https://soaresmartinsadv.com",
      "logo": "https://soaresmartinsadv.com/favicon.svg",
      "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "telephone": ["+55-21-97954-9241", "+55-21-98352-5872"],
      "email": "soaresmartinsadv@hotmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Visconde de Pirajá, 414 - Sala 718 - Ipanema",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ",
        "postalCode": "22410-002",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -22.9836,
        "longitude": -43.2031
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Rio de Janeiro"
      }
    }
  ]
};

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

    // Google Analytics 4 (GA4) - Rastreamento de visualização de páginas em SPA
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-XKSBFW851Q', {
        page_path: location.pathname + location.search + location.hash,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);

  // Google Analytics 4 (GA4) - Rastreamento de cliques em WhatsApp e Telefone
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a');
      if (!anchor || !anchor.href) return;

      const href = anchor.href;
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        trackWhatsAppClick(href);
      } else if (href.startsWith('tel:')) {
        const phoneNumber = href.replace(/^tel:/, '');
        trackPhoneClick(phoneNumber);
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

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
                title="Advogado Condominial e Imobiliário RJ | Soares Martins" 
                description="Advogado condominial e imobiliário no RJ. Assessoria jurídica para condomínios, síndicos, contratos de locações, cobranças e ações de despejo no Rio de Janeiro."
                schema={homeSchema}
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
          
          {/* Subpágina de leilão específico em Copacabana */}
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-ministro-viveiros-de-castro-32/" element={<CopacabanaAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-ministro-viveiros-de-castro-32" element={<CopacabanaAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-2376/" element={<AtlanticaAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-2376" element={<AtlanticaAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/casa/rua-marechal-cantuaria-75/" element={<UrcaAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/casa/rua-marechal-cantuaria-75" element={<UrcaAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-prado-junior-298/" element={<PradoJuniorAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-prado-junior-298" element={<PradoJuniorAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-nossa-senhora-de-copacabana-1003/" element={<NossaSenhoraCopacabanaAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-nossa-senhora-de-copacabana-1003" element={<NossaSenhoraCopacabanaAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140/" element={<SilveiraMartinsAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140" element={<SilveiraMartinsAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140-apto-503/" element={<SilveiraMartins503AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140-apto-503" element={<SilveiraMartins503AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-381-apto-305/" element={<VoluntariosPatriaAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-381-apto-305" element={<VoluntariosPatriaAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-haddock-lobo-191-apto-405/" element={<HaddockLoboAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-haddock-lobo-191-apto-405" element={<HaddockLoboAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-general-urquiza-263/" element={<LeblonAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-general-urquiza-263" element={<LeblonAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-siqueira-campos-43/" element={<SiqueiraCamposAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-siqueira-campos-43" element={<SiqueiraCamposAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-36/" element={<LauroMullerAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-36" element={<LauroMullerAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/gavea/apartamento/rua-vice-governador-rubens-berardo-175/" element={<GaveaAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/gavea/apartamento/rua-vice-governador-rubens-berardo-175" element={<GaveaAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/praia-de-botafogo-356/" element={<PraiaBotafogo356AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/praia-de-botafogo-356" element={<PraiaBotafogo356AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/apartamento/rua-costa-bastos-8/" element={<SantaTeresaCostaBastos8AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/apartamento/rua-costa-bastos-8" element={<SantaTeresaCostaBastos8AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-riachuelo-220/" element={<CentroRiachuelo220AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-riachuelo-220" element={<CentroRiachuelo220AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-3806-apto-312/" element={<CopacabanaAtlantica3806AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-3806-apto-312" element={<CopacabanaAtlantica3806AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-3806/" element={<CopacabanaAtlantica3806AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-3806" element={<CopacabanaAtlantica3806AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-sao-francisco-xavier-90-apto-503/" element={<TijucaSaoFranciscoXavier90AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-sao-francisco-xavier-90-apto-503" element={<TijucaSaoFranciscoXavier90AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-sao-francisco-xavier-90/" element={<TijucaSaoFranciscoXavier90AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-sao-francisco-xavier-90" element={<TijucaSaoFranciscoXavier90AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/cobertura/rua-delgado-de-carvalho-75-cobertura-01/" element={<TijucaDelgadoCarvalho75AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/cobertura/rua-delgado-de-carvalho-75-cobertura-01" element={<TijucaDelgadoCarvalho75AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/cobertura/rua-delgado-de-carvalho-75/" element={<TijucaDelgadoCarvalho75AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/cobertura/rua-delgado-de-carvalho-75" element={<TijucaDelgadoCarvalho75AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/hotel/rua-tonelero-202/" element={<CopacabanaTonelero202AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/hotel/rua-tonelero-202" element={<CopacabanaTonelero202AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/predio-comercial/rua-tonelero-202/" element={<CopacabanaTonelero202AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/predio-comercial/rua-tonelero-202" element={<CopacabanaTonelero202AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-santa-clara-431-apto-704/" element={<CopacabanaSantaClara431AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-santa-clara-431-apto-704" element={<CopacabanaSantaClara431AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/laranjeiras/apartamento/rua-das-laranjeiras-347/" element={<LaranjeirasAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/laranjeiras/apartamento/rua-das-laranjeiras-347" element={<LaranjeirasAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/laranjeiras/apartamento/rua-das-laranjeiras-347-407/" element={<LaranjeirasAuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/laranjeiras/apartamento/rua-das-laranjeiras-347-407" element={<LaranjeirasAuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/rio-comprido/apartamento/rua-haddock-lobo-117-apto-301/" element={<RioCompridoHaddockLobo117AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/rio-comprido/apartamento/rua-haddock-lobo-117-apto-301" element={<RioCompridoHaddockLobo117AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/rio-comprido/apartamento/rua-haddock-lobo-117/" element={<RioCompridoHaddockLobo117AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/rio-comprido/apartamento/rua-haddock-lobo-117" element={<RioCompridoHaddockLobo117AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-uruguai-94-apto-104/" element={<TijucaUruguai94AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-uruguai-94-apto-104" element={<TijucaUruguai94AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-uruguai-94/" element={<TijucaUruguai94AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-uruguai-94" element={<TijucaUruguai94AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/cosme-velho/cobertura/praca-sao-judas-tadeu-6-apto-601/" element={<CosmeVelhoSaoJudasTadeu6AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/cosme-velho/cobertura/praca-sao-judas-tadeu-6-apto-601" element={<CosmeVelhoSaoJudasTadeu6AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/cosme-velho/cobertura/praca-sao-judas-tadeu-6/" element={<CosmeVelhoSaoJudasTadeu6AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/cosme-velho/cobertura/praca-sao-judas-tadeu-6" element={<CosmeVelhoSaoJudasTadeu6AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-dona-zulmira-19-apto-101/" element={<MaracanaDonaZulmira19AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-dona-zulmira-19-apto-101" element={<MaracanaDonaZulmira19AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-dona-zulmira-19/" element={<MaracanaDonaZulmira19AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-dona-zulmira-19" element={<MaracanaDonaZulmira19AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/cobertura/rua-silva-castro-44-apto-1001/" element={<CopacabanaSilvaCastro44AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/cobertura/rua-silva-castro-44-apto-1001" element={<CopacabanaSilvaCastro44AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/cobertura/rua-silva-castro-44/" element={<CopacabanaSilvaCastro44AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/cobertura/rua-silva-castro-44" element={<CopacabanaSilvaCastro44AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-marechal-mascarenhas-de-morais-190-apto-703/" element={<CopacabanaMascarenhasMorais190AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-marechal-mascarenhas-de-morais-190-apto-703" element={<CopacabanaMascarenhasMorais190AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-marechal-mascarenhas-de-morais-190/" element={<CopacabanaMascarenhasMorais190AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-marechal-mascarenhas-de-morais-190" element={<CopacabanaMascarenhasMorais190AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/pousada-casarao/rua-joaquim-murtinho-587/" element={<SantaTeresaJoaquimMurtinho587AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/pousada-casarao/rua-joaquim-murtinho-587" element={<SantaTeresaJoaquimMurtinho587AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/casarao/rua-joaquim-murtinho-587/" element={<SantaTeresaJoaquimMurtinho587AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/casarao/rua-joaquim-murtinho-587" element={<SantaTeresaJoaquimMurtinho587AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/casa/rua-julio-otoni-254/" element={<SantaTeresaJulioOtoni254AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/casa/rua-julio-otoni-254" element={<SantaTeresaJulioOtoni254AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/imovel-residencial/rua-julio-otoni-254/" element={<SantaTeresaJulioOtoni254AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/imovel-residencial/rua-julio-otoni-254" element={<SantaTeresaJulioOtoni254AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/rua-honorio-de-barros-23-apto-601/" element={<FlamengoHonorioDeBarros23AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/rua-honorio-de-barros-23-apto-601" element={<FlamengoHonorioDeBarros23AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/rua-honorio-de-barros-23/" element={<FlamengoHonorioDeBarros23AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/rua-honorio-de-barros-23" element={<FlamengoHonorioDeBarros23AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/avenida-portugal-584-apto-501/" element={<UrcaPortugal584AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/avenida-portugal-584-apto-501" element={<UrcaPortugal584AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/avenida-portugal-584/" element={<UrcaPortugal584AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/avenida-portugal-584" element={<UrcaPortugal584AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-morais-e-silva-51-apto-1401/" element={<MaracanaMoraisSilva51AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-morais-e-silva-51-apto-1401" element={<MaracanaMoraisSilva51AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-morais-e-silva-51/" element={<MaracanaMoraisSilva51AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-morais-e-silva-51" element={<MaracanaMoraisSilva51AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-guilhermina-guinle-18-apto-401/" element={<BotafogoGuilherminaGuinle18AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-guilhermina-guinle-18-apto-401" element={<BotafogoGuilherminaGuinle18AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-guilhermina-guinle-18/" element={<BotafogoGuilherminaGuinle18AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-guilhermina-guinle-18" element={<BotafogoGuilherminaGuinle18AuctionPage />} />

          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-lucio-costa-6500-apto-203/" element={<BarraDaTijucaLucioCosta6500AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-lucio-costa-6500-apto-203" element={<BarraDaTijucaLucioCosta6500AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-lucio-costa-6500/" element={<BarraDaTijucaLucioCosta6500AuctionPage />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-lucio-costa-6500" element={<BarraDaTijucaLucioCosta6500AuctionPage />} />

          {/* Alias da rota de assessoria em leilões */}
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" element={<ServiceDetail />} />
          <Route path="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro" element={<ServiceDetail />} />

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
