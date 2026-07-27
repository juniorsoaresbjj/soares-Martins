
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, Users, ShieldAlert, Search, Filter, ExternalLink, 
  CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, CheckSquare 
} from 'lucide-react';
import SEO from './SEO';

const serviceData: Record<string, any> = {
  'cobranca-condominial': {
    titleKey: 'services.s3',
    descKey: 'services.s3Desc',
    icon: <Scale size={48} />,
    detailsKey: 'services_page.details.s3'
  },
  'assessoria-juridica-para-sindicos': {
    titleKey: 'services.s4',
    descKey: 'services.s4Desc',
    icon: <ShieldCheck size={48} />,
    detailsKey: 'services_page.details.s4'
  },
  'direito-condominial': {
    titleKey: 'services.s5',
    descKey: 'services.s5Desc',
    icon: <FileText size={48} />,
    detailsKey: 'services_page.details.s5'
  },
  'assembleias-convencao-regimento': {
    titleKey: 'services.s6',
    descKey: 'services.s6Desc',
    icon: <Users size={48} />,
    detailsKey: 'services_page.details.s6'
  },
  'direito-patrimonial-sucessorio': {
    titleKey: 'services.s1',
    descKey: 'services.s1Desc',
    icon: <ShieldCheck size={48} />,
    detailsKey: 'services_page.details.s1'
  },
  'direito-imobiliario': {
    titleKey: 'services.s2',
    descKey: 'services.s2Desc',
    icon: <Building2 size={48} />,
    detailsKey: 'services_page.details.s2'
  },
  'compliance-condominial-penal': {
    titleKey: 'services_page.penal_title',
    descKey: 'services_page.penal_desc',
    icon: <ShieldAlert size={48} />,
    detailsKey: 'services_page.details.penal'
  },
  'assessoria-leiloes-judiciais': {
    titleKey: 'services.s8',
    descKey: 'services.s8Desc',
    icon: <Gavel size={48} />,
    detailsKey: 'services_page.details.s8'
  },
  'assessoria-leiloes-judiciais-imoveis-rio-de-janeiro': {
    titleKey: 'services.s8',
    descKey: 'services.s8Desc',
    icon: <Gavel size={48} />,
    detailsKey: 'services_page.details.s8'
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<string>('todos');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeChecklist, setActiveChecklist] = useState<number>(0);
  const [showAllAuctions, setShowAllAuctions] = useState<boolean>(false);
  
  const service = slug ? serviceData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-midnight text-white flex items-center justify-center">
        <div className="text-left p-8">
          <h1 className="text-4xl font-serif mb-4">Página não encontrada</h1>
          <Link to="/" className="text-bronze hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Voltar para o início
          </Link>
        </div>
      </div>
    );
  }

  // Determine content from translations or fallback
  const getServiceContent = () => {
    try {
      // @ts-ignore - access nested translations
      const content = (t('service_content') as any)?.[slug as string] || (t('service_content') as any)?.['assessoria-leiloes-judiciais'];
      if (content && content.h1) return content;
    } catch (e) {}
    
    return {
      h1: t(service.titleKey),
      h2: 'Especialidades e Atuação',
      sections: [],
      faqs: []
    };
  };

  const content = getServiceContent();
  const details = t(service.detailsKey) as unknown as string[];

  // Generate description for SEO
  const seoDescription = `${content.h1} no Rio de Janeiro/RJ. ${t(service.descKey)}`.substring(0, 160);
  const canonicalUrl = `https://soaresmartinsadv.com/${slug}/`;

  // Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://soaresmartinsadv.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Áreas de Atuação",
        "item": "https://soaresmartinsadv.com/servicos/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": content.h1,
        "item": canonicalUrl
      }
    ]
  };

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://soaresmartinsadv.com/#legalservice",
    "name": "Soares Martins Advogados",
    "url": "https://soaresmartinsadv.com/",
    "logo": "https://soaresmartinsadv.com/favicon.svg",
    "image": "https://soaresmartinsadv.com/favicon.svg",
    "telephone": "+55-21-97954-9241",
    "email": "Juniorsadv@hotmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Visconde de Pirajá, 414 - Sala 718",
      "addressLocality": "Ipanema, Rio de Janeiro",
      "addressRegion": "RJ",
      "postalCode": "22410-002",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.9838,
      "longitude": -43.2036
    },
    "areaServed": "Rio de Janeiro/RJ"
  };

  const faqSchema = content.faqs && content.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  const combinedSchemas = [breadcrumbSchema, legalServiceSchema, ...(faqSchema ? [faqSchema] : [])];

  const checklistItems = [
    {
      title: "1. Exame da Matrícula e Ônus Reais",
      desc: "Levantamento detalhado de hipotecas, penhoras, indisponibilidades e averbações junto ao Cartório de Registro de Imóveis.",
      risk: "Análise de Ônus"
    },
    {
      title: "2. Análise de Débitos Propter Rem",
      desc: "Verificação da atribuição de responsabilidade por débitos tributários e condominiais em observância ao edital e ao art. 130 do CTN.",
      risk: "Análise de Passivos"
    },
    {
      title: "3. Regularidade Processual das Intimações",
      desc: "Verificação da citação e intimação válida do executado, coproprietários e credores garantidores nos autos do processo de origem.",
      risk: "Verificação de Nulidades"
    },
    {
      title: "4. Rito da Carta de Arrematação e Imissão",
      desc: "Acompanhamento dos atos judiciais e cartorários para expedição da carta de arrematação e mandado de imissão na posse.",
      risk: "Procedimento de Posse"
    }
  ];

  return (
    <div className="min-h-screen bg-midnight text-white relative overflow-hidden">
      {/* Background Texture & Modern Architectural Silhouette / Facade Projection Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Rich Radial Lighting and Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-light/90 via-midnight to-midnight" />
        
        {/* Architectural Photo Overlay with High-Contrast Blend */}
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-25 grayscale contrast-125 mix-blend-luminosity"
          alt=""
          referrerPolicy="no-referrer"
        />

        {/* Fine Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* High-Contrast Vivid Lighting Ray Highlights & Golden Glow Orbs */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-bronze/30 via-bronze/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 -right-10 w-[600px] h-[600px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 -left-10 w-[600px] h-[600px] bg-bronze/20 blur-[130px] rounded-full pointer-events-none" />

        {/* Modern Building Silhouette & Glass Facade Projection - Right Modern Tower */}
        <div className="absolute top-10 right-0 lg:right-10 text-bronze pointer-events-none select-none opacity-85 filter drop-shadow-[0_0_20px_rgba(197,160,89,0.4)]">
          <svg width="450" height="750" viewBox="0 0 300 500" fill="none">
            {/* Building Fill with Subtle Gradient */}
            <defs>
              <linearGradient id="towerGradRight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c5a059" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#c5a059" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="windowGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#c5a059" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Skyscraper Outer Shape */}
            <polygon points="50,500 50,140 100,80 150,20 200,80 250,140 250,500" fill="url(#towerGradRight)" stroke="#c5a059" strokeWidth="1.2" />
            
            {/* Spire / Crown Lighting */}
            <line x1="150" y1="20" x2="150" y2="0" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="150" cy="0" r="3.5" fill="#f59e0b" className="animate-pulse" />

            {/* Vertical Glass Facade Columns */}
            <line x1="100" y1="80" x2="100" y2="500" stroke="#c5a059" strokeWidth="0.8" strokeDasharray="6 3" opacity="0.7" />
            <line x1="150" y1="20" x2="150" y2="500" stroke="#c5a059" strokeWidth="1" opacity="0.8" />
            <line x1="200" y1="80" x2="200" y2="500" stroke="#c5a059" strokeWidth="0.8" strokeDasharray="6 3" opacity="0.7" />

            {/* Glowing Window Units */}
            <rect x="110" y="100" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="160" y="100" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="110" y="140" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="160" y="140" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="110" y="180" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="160" y="180" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="65" y="220" width="25" height="6" rx="1" fill="url(#windowGlow)" opacity="0.7" />
            <rect x="110" y="220" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="160" y="220" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="210" y="220" width="25" height="6" rx="1" fill="url(#windowGlow)" opacity="0.7" />

            {/* Horizontal Floor Bands */}
            <line x1="50" y1="140" x2="250" y2="140" stroke="#c5a059" strokeWidth="1" />
            <line x1="50" y1="260" x2="250" y2="260" stroke="#c5a059" strokeWidth="1" />
            <line x1="50" y1="380" x2="250" y2="380" stroke="#c5a059" strokeWidth="1" />

            {/* Diagonal Architectural Bracing */}
            <line x1="50" y1="260" x2="150" y2="140" stroke="#c5a059" strokeWidth="0.8" opacity="0.7" />
            <line x1="150" y1="140" x2="250" y2="260" stroke="#c5a059" strokeWidth="0.8" opacity="0.7" />
            <line x1="50" y1="380" x2="150" y2="260" stroke="#c5a059" strokeWidth="0.8" opacity="0.7" />
            <line x1="150" y1="260" x2="250" y2="380" stroke="#c5a059" strokeWidth="0.8" opacity="0.7" />
          </svg>
        </div>

        {/* Modern Building Silhouette & Glass Facade Projection - Left Twin Tower */}
        <div className="absolute top-1/3 -left-10 lg:left-0 text-bronze pointer-events-none select-none opacity-80 filter drop-shadow-[0_0_18px_rgba(197,160,89,0.35)]">
          <svg width="400" height="650" viewBox="0 0 250 450" fill="none">
            <defs>
              <linearGradient id="towerGradLeft" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c5a059" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Left Tower Body */}
            <polygon points="10,450 10,120 40,80 80,80 110,120 110,450" fill="url(#towerGradLeft)" stroke="#c5a059" strokeWidth="1" />
            
            {/* Center Main Tower Body */}
            <polygon points="120,450 120,60 160,20 200,60 230,100 230,450" fill="url(#towerGradLeft)" stroke="#c5a059" strokeWidth="1.2" />

            {/* Spire */}
            <line x1="160" y1="20" x2="160" y2="0" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="160" cy="0" r="3" fill="#f59e0b" className="animate-pulse" />

            {/* Facade Grid Lines */}
            <line x1="120" y1="140" x2="230" y2="140" stroke="#c5a059" strokeWidth="0.8" />
            <line x1="120" y1="220" x2="230" y2="220" stroke="#c5a059" strokeWidth="0.8" />
            <line x1="120" y1="300" x2="230" y2="300" stroke="#c5a059" strokeWidth="0.8" />

            {/* Illuminated Windows */}
            <rect x="135" y="80" width="18" height="20" fill="#f59e0b" opacity="0.8" rx="1" />
            <rect x="165" y="80" width="18" height="20" fill="#f59e0b" opacity="0.8" rx="1" />
            <rect x="135" y="160" width="18" height="20" fill="#f59e0b" opacity="0.7" rx="1" />
            <rect x="195" y="160" width="18" height="20" fill="#f59e0b" opacity="0.7" rx="1" />
            <rect x="165" y="240" width="18" height="20" fill="#f59e0b" opacity="0.8" rx="1" />
            <rect x="30" y="140" width="20" height="15" fill="#f59e0b" opacity="0.6" rx="1" />
            <rect x="60" y="140" width="20" height="15" fill="#f59e0b" opacity="0.6" rx="1" />
          </svg>
        </div>

        {/* Floating Golden Particles / Lights for Added Life */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-bronze/80 blur-[1px] animate-ping pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-amber-400/70 blur-[2px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-bronze/80 blur-[1px] animate-pulse pointer-events-none" />

        {/* Soft Vignette Gradient at Top & Bottom Only */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-transparent to-midnight/80 pointer-events-none" />
      </div>

      <SEO 
        title={content.h1} 
        description={seoDescription}
        schema={combinedSchemas}
      />
      
      <main className="relative z-10 pt-20 sm:pt-28 pb-12 sm:pb-16 px-5 sm:px-8 md:px-[8%] lg:px-[10%]">
        <div className="max-w-4xl mx-auto w-full">
          {/* Breadcrumbs UI (Centralized Non-Selected Part) */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-text-muted mb-6 flex-wrap text-center">
            <Link to="/" className="hover:text-bronze transition-colors">Início</Link>
            <ChevronRight size={12} className="text-bronze/50" />
            <Link to="/servicos/" className="hover:text-bronze transition-colors">Áreas de Atuação</Link>
            <ChevronRight size={12} className="text-bronze/50" />
            <span className="text-bronze font-medium truncate">{content.h1}</span>
          </nav>

          <div className="text-center mb-8">
            <Link to="/#services" className="inline-flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-widest hover:text-white group text-center">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {t('nav.back_home')}
            </Link>
          </div>

          {/* Centralized Hero Header (Non-Selected Header Part) */}
          <div className="text-center mb-12 sm:mb-14 border-b border-white/10 pb-10 sm:pb-12 space-y-5 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center text-bronze p-4 bg-midnight-light/60 rounded-2xl border border-bronze/20 shadow-xl mx-auto">
              {service.icon}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white tracking-tight text-center">{content.h1}</h1>
            <p className="text-base sm:text-lg md:text-xl text-text-muted font-light leading-relaxed text-center px-4">{t(service.descKey)}</p>
          </div>

          {/* Imagem de Prédio Residencial e Destaque de Atuação (Selected Part -> Left-Aligned text-left) */}
          <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden mb-12 sm:mb-14 shadow-2xl text-left grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-7 p-7 sm:p-10 md:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-bronze/20 text-bronze border border-bronze/30">
                  <Building2 size={14} /> Residencial e Comercial
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white leading-tight text-left">
                  Assessoria Jurídica em Leilão de Imóveis
                </h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed text-left">
                  A arrematação de apartamentos, lojas e salas no Rio de Janeiro exige auditoria prévia detalhada da matrícula, verificação de dívidas de cota condominial e análise de risco processual para garantir posse célere e investimento seguro.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 text-left">
                <div>
                  <span className="text-bronze font-serif text-xl sm:text-2xl font-bold block mb-1">Rio de Janeiro</span>
                  <span className="text-xs text-text-muted leading-snug block">Foco em imóveis residenciais e comerciais no RJ</span>
                </div>
                <div>
                  <span className="text-bronze font-serif text-xl sm:text-2xl font-bold block mb-1">Parecer Técnico</span>
                  <span className="text-xs text-text-muted leading-snug block">Avaliação jurídica e matriz de riscos</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" 
                alt="Edifício residencial de alto padrão no Rio de Janeiro"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 bg-midnight/85 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs text-white/90 shadow-lg text-left">
                <span className="font-bold text-bronze block mb-0.5">Rio de Janeiro / RJ</span>
                Análise prévia de edital e débitos de condomínio
              </div>
            </div>
          </div>

          {/* Render Sections with Strictly Left-Aligned Content Cards (Selected Parts -> text-left) */}
          {content.sections && content.sections.length > 0 && (
            <div className="space-y-8 sm:space-y-10 mb-10 sm:mb-12 text-left">
              {content.sections.map((sec: any, i: number) => {
                const isStepText = sec.p.includes('1)') && sec.p.includes('2)');
                let introText = sec.p;
                let stepParts: string[] = [];

                if (isStepText) {
                  const parts = sec.p.split(/(?=\d\)\s)/);
                  introText = parts[0].includes('1)') ? '' : parts.shift();
                  stepParts = parts;
                }

                return (
                  <section key={i} className="relative overflow-hidden bg-midnight-light/50 backdrop-blur-md p-7 sm:p-10 md:p-12 rounded-3xl border border-white/15 hover:border-bronze/50 transition-all text-left space-y-6 shadow-2xl hover:shadow-[0_20px_50px_rgba(197,160,89,0.12)] group">
                    {/* Corner Building Facade Accent Line Wireframe */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity text-bronze pointer-events-none">
                      <svg width="128" height="128" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                        <line x1="100" y1="0" x2="0" y2="100" strokeDasharray="2 2" />
                        <line x1="100" y1="30" x2="30" y2="100" />
                        <line x1="100" y1="60" x2="60" y2="100" />
                        <rect x="60" y="10" width="30" height="30" rx="4" strokeWidth="0.5" />
                      </svg>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif text-bronze flex items-center gap-3 border-b border-white/15 pb-5 text-left">
                      <span className="w-2.5 h-2.5 rounded-full bg-bronze inline-block shrink-0 shadow-md shadow-bronze" />
                      {sec.h2}
                    </h2>
                    
                    {isStepText ? (
                      <div className="space-y-6 pt-2 text-left">
                        {introText && <p className="text-white/90 leading-relaxed text-base md:text-lg text-left font-light">{introText.trim()}</p>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                          {stepParts.map((part, idx) => {
                            const cleanPart = part.replace(/^\d\)\s*/, '');
                            return (
                              <div key={idx} className="bg-midnight/70 border border-white/15 hover:border-bronze/40 p-5 rounded-2xl flex items-start gap-3.5 text-left shadow-md hover:shadow-lg transition-all">
                                <span className="w-6 h-6 rounded-full bg-bronze/20 text-bronze font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-bronze/40 shadow-sm">
                                  {idx + 1}
                                </span>
                                <p className="text-sm text-white/90 leading-relaxed text-left font-normal">{cleanPart}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 text-left">
                        <p className="text-white/90 leading-relaxed text-base md:text-lg pl-5 border-l-2 border-bronze/40 py-1 text-left font-light">
                          {sec.p}
                        </p>
                        <div className="pt-2 text-left">
                          <a 
                            href={`https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20consultar%20sobre:%20${encodeURIComponent(sec.h2)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-bronze hover:text-white transition-colors group/link"
                          >
                            <PhoneCall size={14} className="group-hover/link:scale-110 transition-transform" />
                            Consultar com Especialista no WhatsApp
                            <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          )}

          {/* Interactive Checklist / Matriz de Risco do Leilão */}
          {slug === 'assessoria-leiloes-judiciais' && (
            <section className="bg-midnight-light/40 backdrop-blur-sm p-7 sm:p-10 md:p-12 rounded-3xl border border-white/10 mb-10 sm:mb-12 text-left shadow-2xl space-y-8">
              <div className="border-b border-white/10 pb-6">
                <span className="text-bronze text-xs font-bold uppercase tracking-widest block mb-2">Metodologia Interativa</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white">4 Pilares da Auditoria de Leilão Judicial</h2>
                <p className="text-sm text-text-muted mt-2">Clique em cada etapa para examinar os pontos críticos auditados em nosso parecer prévio.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                <div className="lg:col-span-5 space-y-3.5">
                  {checklistItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveChecklist(index)}
                      className={`w-full p-4.5 rounded-xl text-left border transition-all flex items-center justify-between group ${
                        activeChecklist === index 
                          ? 'bg-bronze text-midnight border-bronze font-bold shadow-lg' 
                          : 'bg-midnight/60 text-white/80 border-white/10 hover:border-bronze/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckSquare size={18} className={activeChecklist === index ? 'text-midnight' : 'text-bronze'} />
                        <span className="text-xs sm:text-sm">{item.title}</span>
                      </div>
                      <ChevronRight size={16} className={`transition-transform ${activeChecklist === index ? 'rotate-90 text-midnight' : 'text-white/40'}`} />
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-7 bg-midnight/80 border border-bronze/30 p-7 sm:p-9 rounded-2xl min-h-[240px] flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-bronze/20 text-bronze border border-bronze/30 mb-5">
                      {checklistItems[activeChecklist].risk}
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-white mb-3">{checklistItems[activeChecklist].title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{checklistItems[activeChecklist].desc}</p>
                  </div>
                  <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-text-muted">
                    <span>Soares Martins Advogados - Ipanema/RJ</span>
                    <span className="text-bronze font-semibold">Parecer emitido em 24h a 48h</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* SPECIAL STRUCTURE FOR LEILÕES JUDICIAIS */}
          {(slug === 'assessoria-leiloes-judiciais' || slug === 'assessoria-leiloes-judiciais-imoveis-rio-de-janeiro') && (
            <>
              {/* Leilões em análise (Left-Aligned Structure) */}
              <section className="bg-midnight-light/40 backdrop-blur-sm p-7 sm:p-10 md:p-12 rounded-3xl border border-white/10 mb-10 sm:mb-12 shadow-2xl text-left space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-bronze mb-2 text-left">Leilões em Análise</h2>
                    <p className="text-xs sm:text-sm text-text-muted text-left">Painel de consulta e acompanhamento técnico de oportunidades sob auditoria jurídica.</p>
                  </div>
                  <div className="flex gap-2 self-start sm:self-auto flex-wrap">
                    <button 
                      onClick={() => setFilterCategory('todos')}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${filterCategory === 'todos' ? 'bg-bronze text-midnight font-bold shadow-md' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                    >
                      Todos
                    </button>
                    <button 
                      onClick={() => setFilterCategory('residencial')}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${filterCategory === 'residencial' ? 'bg-bronze text-midnight font-bold shadow-md' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                    >
                      Residencial
                    </button>
                    <button 
                      onClick={() => setFilterCategory('comercial')}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${filterCategory === 'comercial' ? 'bg-bronze text-midnight font-bold shadow-md' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                    >
                      Comercial
                    </button>
                  </div>
                </div>

                {/* Cards Grid */}
                {(filterCategory === 'todos' || filterCategory === 'residencial') ? (
                  <div className="grid grid-cols-1 gap-6">
                    {/* Item 1: Copacabana - Rua M. V. Castro 32 */}
                    <div className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                            Residencial • Copacabana/RJ
                          </span>
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Oportunidade Auditada
                          </span>
                        </div>
                        <span className="text-xs text-text-muted font-mono">Processo TJRJ</span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                          Leilão Judicial de Apartamento em Copacabana — Rua M. V. Castro, 32
                        </h3>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                          Unidade residencial situada em Copacabana, próximo à praia e metrô Cardeal Arcoverde. Análise preventiva de edital, sub-rogação de tributos e verificação de passivos condominiais concluídas.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                        <div>
                          <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">1ª Praça (24/08/2026):</span>
                          <span className="text-base sm:text-lg font-serif font-bold text-white">R$ 480.000,00</span>
                        </div>
                        <div>
                          <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">2ª Praça (03/09/2026):</span>
                          <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 240.000,00</span>
                        </div>
                        <div>
                          <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">Auditoria Jurídica:</span>
                          <span className="text-xs font-semibold text-bronze block mt-1">Concluída • Parecer Disponível</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link 
                          to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-ministro-viveiros-de-castro-32/"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                        >
                          <FileText size={15} />
                          Ver Análise do Edital e Relatório
                          <ChevronRight size={14} />
                        </Link>

                        <a 
                          href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20em%20Copacabana%20(Rua%20M.%20V.%20Castro%2032)."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <PhoneCall size={14} /> Solicitar Parecer via WhatsApp
                        </a>
                      </div>
                    </div>

                    {/* Item 2: Copacabana - Av. Atlântica 2376 */}
                    <div className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                            Residencial • Copacabana/RJ
                          </span>
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Oportunidade Auditada
                          </span>
                        </div>
                        <span className="text-xs text-text-muted font-mono">Processo TJRJ</span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                          Leilão Judicial de Apartamento na Avenida Atlântica nº 2.376
                        </h3>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                          Apartamento 203 com 119 m² no Edifício Assú (orla de Copacabana) e entrada suplementar pela Rua Domingos Ferreira 25. Composto por sala, 3 quartos (2 suítes), banheiro social, cozinha e área de serviço.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                        <div>
                          <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">1ª Praça (03/08/2026):</span>
                          <span className="text-base sm:text-lg font-serif font-bold text-white">R$ 1.350.000,00</span>
                        </div>
                        <div>
                          <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">2ª Praça (05/08/2026):</span>
                          <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 675.000,00</span>
                        </div>
                        <div>
                          <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">Auditoria Jurídica:</span>
                          <span className="text-xs font-semibold text-bronze block mt-1">Concluída • Parecer Disponível</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link 
                          to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-2376/"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                        >
                          <FileText size={15} />
                          Ver Análise do Edital e Relatório
                          <ChevronRight size={14} />
                        </Link>

                        <a 
                          href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20na%20Av.%20Atl%C3%A2ntica%202376."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <PhoneCall size={14} /> Solicitar Parecer via WhatsApp
                        </a>
                      </div>
                    </div>

                    {/* Item 3: Urca - Rua Marechal Cantuária 75 */}
                    <div className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                            Residencial • Urca/RJ
                          </span>
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Oportunidade Auditada
                          </span>
                        </div>
                        <span className="text-xs text-text-muted font-mono">Processo TJRJ</span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                          Leilão Judicial de Casa na Rua Marechal Cantuária nº 75 — Urca
                        </h3>
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                          Casa residencial unifamiliar com 321 m² de área construída, edificada em 1938 de frente para o logradouro bucólico da Urca. Inscrição IPTU nº 0.422.940-7. Ativo raríssimo na Zona Sul do Rio de Janeiro.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                        <div>
                          <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">1ª Praça (19/08/2026):</span>
                          <span className="text-base sm:text-lg font-serif font-bold text-white">R$ 3.820.000,00</span>
                        </div>
                        <div>
                          <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">2ª Praça (25/08/2026):</span>
                          <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 1.910.000,00</span>
                        </div>
                        <div>
                          <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">Auditoria Jurídica:</span>
                          <span className="text-xs font-semibold text-bronze block mt-1">Concluída • Parecer Disponível</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link 
                          to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/casa/rua-marechal-cantuaria-75/"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                        >
                          <FileText size={15} />
                          Ver Análise do Edital e Relatório
                          <ChevronRight size={14} />
                        </Link>

                        <a 
                          href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20da%20casa%20na%20Rua%20Marechal%20Cantu%C3%A1ria%2075%20na%20Urca."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <PhoneCall size={14} /> Solicitar Parecer via WhatsApp
                        </a>
                      </div>
                    </div>

                    {/* Additional Items shown when showAllAuctions is true */}
                    {showAllAuctions && (
                      <>
                        {/* Item 4: Copacabana - Av. Prado Júnior 298 */}
                        <div className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                                Residencial • Copacabana/RJ
                              </span>
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Oportunidade Auditada
                              </span>
                            </div>
                            <span className="text-xs text-text-muted font-mono">Processo TJRJ</span>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                              Leilão Judicial de Apartamento na Av. Prado Júnior nº 298 — Apto 1003
                            </h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                              Apartamento 1003 com 42 m² (IPTU), fundos, sem vaga de garagem. Prédio residencial construído em 1957 com 12 andares, 2 elevadores, portaria presencial e câmeras de segurança. Inscrição IPTU nº 0.691.500-3. Matrícula nº 119.755 (5º RGI).
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">1ª Praça (17/08/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-white">R$ 520.000,00</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">2ª Praça (19/08/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 312.000,00</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">Auditoria Jurídica:</span>
                              <span className="text-xs font-semibold text-bronze block mt-1">Concluída • Parecer Disponível</span>
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link 
                              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-prado-junior-298/"
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                            >
                              <FileText size={15} />
                              Ver Análise do Edital e Relatório
                              <ChevronRight size={14} />
                            </Link>

                            <a 
                              href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201003%20na%20Av.%20Prado%20J%C3%BAnior%20298."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                            >
                              <PhoneCall size={14} /> Solicitar Parecer via WhatsApp
                            </a>
                          </div>
                        </div>

                        {/* Item 5: Copacabana - Av. Nossa Senhora de Copacabana 1003 */}
                        <div className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                                Residencial • Copacabana/RJ
                              </span>
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Oportunidade Auditada
                              </span>
                            </div>
                            <span className="text-xs text-text-muted font-mono">Processo TJRJ</span>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                              Leilão Judicial de Apartamento na Av. Nossa Senhora de Copacabana nº 1003 — Apto 1101
                            </h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                              Apartamento 1101 com 35 m² (IPTU), frente, sem vaga de garagem. Prédio residencial construído em 1957 com 13 andares, 2 elevadores, portaria 24 horas e câmeras de segurança. Inscrição IPTU nº 0.172.431-9. Matrícula nº 111923 (5º RGI).
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">1ª Praça (27/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-white">R$ 448.971,12</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">2ª Praça (29/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 225.000,00</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">Auditoria Jurídica:</span>
                              <span className="text-xs font-semibold text-bronze block mt-1">Concluída • Parecer Disponível</span>
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link 
                              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-nossa-senhora-de-copacabana-1003/"
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                            >
                              <FileText size={15} />
                              Ver Análise do Edital e Relatório
                              <ChevronRight size={14} />
                            </Link>

                            <a 
                              href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201101%20na%20Av.%20Nossa%20Senhora%20de%20Copacabana%201003."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                            >
                              <PhoneCall size={14} /> Solicitar Parecer via WhatsApp
                            </a>
                          </div>
                        </div>

                        {/* Item 6: Catete - Rua Silveira Martins 140 (Apto 502) */}
                        <div className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                                Residencial • Catete/RJ
                              </span>
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Oportunidade Auditada
                              </span>
                            </div>
                            <span className="text-xs text-text-muted font-mono">Processo TJRJ</span>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                              Leilão Judicial de Apartamento na Rua Silveira Martins nº 140 — Apto 502
                            </h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                              Apartamento 502 com 53 m² de área privativa, sem vaga de garagem. Prédio residencial com 8 pavimentos, 7 apartamentos por andar, portaria presencial antiga. Registro no 9º RGI sob a Matrícula nº 486828 (fls. 1).
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">1ª Praça (27/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-white">R$ 532.500,63</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">2ª Praça (29/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 267.000,00</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">Auditoria Jurídica:</span>
                              <span className="text-xs font-semibold text-bronze block mt-1">Concluída • Parecer Disponível</span>
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link 
                              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140/"
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                            >
                              <FileText size={15} />
                              Ver Análise do Edital e Relatório
                              <ChevronRight size={14} />
                            </Link>

                            <a 
                              href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20502%20na%20Rua%20Silveira%20Martins%20140%20no%20Catete."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                            >
                              <PhoneCall size={14} /> Solicitar Parecer via WhatsApp
                            </a>
                          </div>
                        </div>

                        {/* Item 7: Catete - Rua Silveira Martins 140 (Apto 503) */}
                        <div className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                                Residencial • Catete/RJ
                              </span>
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Oportunidade Auditada
                              </span>
                            </div>
                            <span className="text-xs text-text-muted font-mono">Processo TJRJ</span>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                              Leilão Judicial de Apartamento na Rua Silveira Martins nº 140 — Apto 503
                            </h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                              Apartamento 503 com 36 m² de área privativa, sem vaga de garagem. Prédio residencial com 8 pavimentos, 7 apartamentos por andar, portaria presencial antiga. Registro no 9º RGI sob a Matrícula nº 486819 (livro 3, fls. 1).
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">1ª Praça (27/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-white">R$ 334.118,04</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">2ª Praça (29/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 168.000,00</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">Auditoria Jurídica:</span>
                              <span className="text-xs font-semibold text-bronze block mt-1">Concluída • Parecer Disponível</span>
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link 
                              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140-apto-503/"
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                            >
                              <FileText size={15} />
                              Ver Análise do Edital e Relatório
                              <ChevronRight size={14} />
                            </Link>

                            <a 
                              href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20503%20na%20Rua%20Silveira%20Martins%20140%20no%20Catete."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                            >
                              <PhoneCall size={14} /> Solicitar Parecer via WhatsApp
                            </a>
                          </div>
                        </div>

                        {/* Item 8: Botafogo - Rua Voluntários da Pátria 381 (Apto 305) */}
                        <div className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                                Residencial • Botafogo/RJ
                              </span>
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Oportunidade Auditada
                              </span>
                            </div>
                            <span className="text-xs text-text-muted font-mono">Processo TJRJ</span>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                              Leilão Judicial de Apartamento na Rua Voluntários da Pátria nº 381 — Apto 305
                            </h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                              Apartamento 305 no Edifício Coaracy Nunes com 109 m² de área edificada. Imóvel fechado há mais de 10 anos. Construção de 1945. Matrícula nº 9497 no 3º RGI e IPTU nº 0.298.026-6.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">1ª Praça (28/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-white">R$ 1.030.339,95</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">2ª Praça (30/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 516.000,00</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">Auditoria Jurídica:</span>
                              <span className="text-xs font-semibold text-bronze block mt-1">Concluída • Parecer Disponível</span>
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link 
                              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-381-apto-305/"
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                            >
                              <FileText size={15} />
                              Ver Análise do Edital e Relatório
                              <ChevronRight size={14} />
                            </Link>

                            <a 
                              href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20305%20na%20Rua%20Volunt%C3%A1rios%20da%20P%C3%A1tria%20381%20em%20Botafogo."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                            >
                              <PhoneCall size={14} /> Solicitar Parecer via WhatsApp
                            </a>
                          </div>
                        </div>

                        {/* Item 9: Tijuca - Rua Haddock Lobo 191 (Apto 405) */}
                        <div className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                                Residencial • Tijuca/RJ
                              </span>
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Oportunidade Auditada
                              </span>
                            </div>
                            <span className="text-xs text-text-muted font-mono">Processo TJRJ</span>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                              Leilão Judicial de Apartamento na Rua Haddock Lobo nº 191 — Apto 405
                            </h3>
                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                              Apartamento 405 no Edifício Colima de frente, com 60 m² de área edificada. Prédio residencial construído em 1951, de 7 pavimentos, com portaria 24 horas e 2 elevadores. Matrícula nº 114.079 no 11º RGI e IPTU nº 0.574.460-2.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">1ª Praça (28/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-white">R$ 320.550,21</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">2ª Praça (30/07/2026):</span>
                              <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 161.000,00</span>
                            </div>
                            <div>
                              <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">Auditoria Jurídica:</span>
                              <span className="text-xs font-semibold text-bronze block mt-1">Concluída • Parecer Disponível</span>
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link 
                              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-haddock-lobo-191-apto-405/"
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                            >
                              <FileText size={15} />
                              Ver Análise do Edital e Relatório
                              <ChevronRight size={14} />
                            </Link>

                            <a 
                              href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20405%20na%20Rua%20Haddock%20Lobo%20191%20na%20Tijuca."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                            >
                              <PhoneCall size={14} /> Solicitar Parecer via WhatsApp
                            </a>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Botão Veja Mais / Veja Menos */}
                    <div className="pt-4 flex justify-center">
                      <button
                        onClick={() => setShowAllAuctions(!showAllAuctions)}
                        className="inline-flex items-center gap-2.5 bg-midnight/90 text-bronze hover:bg-bronze hover:text-midnight border border-bronze/40 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl"
                      >
                        {showAllAuctions ? (
                          <>
                            <span>Recolher Oportunidades</span>
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            <span>Veja Mais Oportunidades em Análise (+6 imóveis)</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-midnight/60 rounded-2xl border border-dashed border-white/15 p-7 sm:p-10 text-left space-y-5">
                    <div className="w-12 h-12 rounded-full bg-bronze/10 text-bronze flex items-center justify-center border border-bronze/20">
                      <Search size={22} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-white text-left">Sem lotes comerciais abertos no momento</h3>
                    <p className="text-sm text-text-muted max-w-2xl leading-relaxed text-left">
                      Nossa equipe realiza análises sob demanda para imóveis comerciais e corporativos no Rio de Janeiro.
                    </p>
                  </div>
                )}
              </section>

              {/* Histórico de leilões analisados (Left-Aligned Structure) */}
              <section className="bg-midnight-light/40 backdrop-blur-sm p-7 sm:p-10 md:p-12 rounded-3xl border border-white/10 mb-10 sm:mb-12 text-left space-y-6 shadow-2xl">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-bronze mb-2 text-left">Acervo e Histórico de Análises Técnicas</h2>
                  <p className="text-xs sm:text-sm text-text-muted text-left">Registro institucional e diretrizes de divulgação de pareceres e estudos de caso em leilões imobiliários.</p>
                </div>

                <div className="bg-midnight/60 rounded-2xl border border-white/10 p-6 sm:p-8 space-y-4 text-left">
                  <div className="flex items-center gap-3 text-bronze font-serif font-semibold text-base sm:text-lg">
                    <ShieldCheck size={20} className="shrink-0" />
                    <span>Conformidade Ética e Proteção de Dados</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed text-left font-light">
                    Em estrita observância ao Código de Ética e Disciplina da OAB (Provimento 205/2021) e às normas de proteção de dados, o acervo de pareceres jurídicos e relatórios de auditoria é mantido sob sigilo profissional. Esta seção é destinada ao registro de notas técnicas descaracterizadas e jurisprudência aplicada aos leilões imobiliários no Estado do Rio de Janeiro, sendo atualizada conforme viabilidade jurídica e regulamentar.
                  </p>
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-2">
                      <FileText size={14} className="text-bronze shrink-0" />
                      Pareceres individualizados emitidos mediante contratação prévia
                    </span>
                    <span className="text-bronze font-medium">Soares Martins Advogados — Rio de Janeiro/RJ</span>
                  </div>
                </div>
              </section>

              {/* Internal Links to Services & Guides (Left-Aligned Structure) */}
              <section className="bg-midnight-light/30 p-7 sm:p-10 md:p-12 rounded-3xl border border-white/5 mb-10 sm:mb-12 text-left">
                <h2 className="text-xl sm:text-2xl font-serif text-white mb-8 text-left">Conteúdos e Serviços Relacionados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Link 
                    to="/direito-imobiliario/" 
                    className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all flex items-center justify-between group text-left shadow-sm"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">Direito Imobiliário e Negócios</h3>
                      <p className="text-xs text-text-muted">Assessoria em compra, venda e estruturação patrimonial.</p>
                    </div>
                    <ChevronRight size={18} className="text-bronze group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </Link>

                  <Link 
                    to="/blog/guia-compra-venda-segura-imoveis-rj/" 
                    className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all flex items-center justify-between group text-left shadow-sm"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">Guia de Compra e Venda Segura</h3>
                      <p className="text-xs text-text-muted">Passo a passo jurídico para aquisições no Rio de Janeiro.</p>
                    </div>
                    <ChevronRight size={18} className="text-bronze group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </Link>

                  <Link 
                    to="/blog/direito-imobiliario-due-diligence-compra/" 
                    className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all flex items-center justify-between group text-left shadow-sm"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">Due Diligence Imobiliária</h3>
                      <p className="text-xs text-text-muted">Auditoria de certidões, ônus e riscos contratuais.</p>
                    </div>
                    <ChevronRight size={18} className="text-bronze group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </Link>

                  <Link 
                    to="/blog/apartamento-leilao-debito-condominial/" 
                    className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all flex items-center justify-between group text-left shadow-sm"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">Leilão por Débito de Condomínio</h3>
                      <p className="text-xs text-text-muted">Entenda como funciona o leilão judicial de dívida de cota.</p>
                    </div>
                    <ChevronRight size={18} className="text-bronze group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </Link>

                  <Link 
                    to="/direito-patrimonial-sucessorio/" 
                    className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all flex items-center justify-between group text-left shadow-sm"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">Direito Patrimonial e Sucessório</h3>
                      <p className="text-xs text-text-muted">Proteção, planejamento de bens e regularização.</p>
                    </div>
                    <ChevronRight size={18} className="text-bronze group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </Link>

                  <Link 
                    to="/blog/clausulas-fundamentais-contrato-locacao/" 
                    className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all flex items-center justify-between group text-left shadow-sm"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">Contratos de Locação e Garantias</h3>
                      <p className="text-xs text-text-muted">Análise de cláusulas essenciais e segurança contratual.</p>
                    </div>
                    <ChevronRight size={18} className="text-bronze group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </Link>
                </div>
              </section>
            </>
          )}

          {/* Details list fallback for other services */}
          {slug !== 'assessoria-leiloes-judiciais' && details && details.length > 0 && (
            <div className="bg-midnight-light/40 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-3xl border border-white/5 mb-10 sm:mb-12 text-left shadow-xl">
              <h2 className="text-2xl font-serif mb-8 text-bronze text-left">
                {content.h2 || "Especialidades e Atuação"}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed text-left">
                    <ChevronRight size={18} className="text-bronze shrink-0 mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ Block (Non-Selected Section -> Centralized Title, Clean Accordion Layout) */}
          {content.faqs && content.faqs.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <div className="text-center mb-10 border-b border-white/10 pb-6">
                <h2 className="text-2xl sm:text-3xl font-serif text-bronze text-center">Perguntas Frequentes (FAQ)</h2>
                <p className="text-sm text-text-muted mt-2 text-center">Dúvidas comuns sobre auditoria de editais, arrematação e imissão na posse no RJ</p>
              </div>
              <div className="space-y-5 text-left">
                {content.faqs.map((faq: any, i: number) => {
                  const isOpen = openFaq === i;
                  return (
                    <div 
                      key={i} 
                      className={`rounded-2xl border transition-all text-left overflow-hidden ${
                        isOpen 
                          ? 'bg-midnight-light/40 border-bronze/40 shadow-xl' 
                          : 'bg-midnight-light/20 border-white/5 hover:border-bronze/20'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 font-serif text-lg text-white hover:text-bronze transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-bronze font-bold text-base font-sans">P.</span> {faq.q}
                        </span>
                        {isOpen ? <ChevronUp size={20} className="text-bronze shrink-0" /> : <ChevronDown size={20} className="text-bronze/60 shrink-0" />}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 sm:px-7 pb-7 pt-0 text-left border-t border-white/5 mt-1">
                          <p className="text-white/80 leading-relaxed text-sm sm:text-base pt-5 border-l-2 border-bronze/30 pl-5 text-left">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA Section (Non-Selected Section -> Centralized Layout) */}
          <div className="bg-bronze p-8 sm:p-14 md:p-16 rounded-3xl text-midnight text-center shadow-2xl border border-bronze/30">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-serif mb-4 font-bold text-midnight text-center">Fale Com Nossa Equipe Especializada</h2>
              <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed font-medium text-center">
                O escritório Soares Martins Advogados oferece auditoria jurídica completa e suporte especializado para garantir máxima segurança em suas decisões e investimentos em leilões imobiliários no Rio de Janeiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a 
                  href={`https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20${encodeURIComponent(content.h1)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-midnight text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-midnight transition-all shadow-lg"
                >
                  <PhoneCall size={16} />
                  Atendimento via WhatsApp
                </a>
                <a 
                  href="mailto:Juniorsadv@hotmail.com"
                  className="inline-flex items-center justify-center gap-2 border-2 border-midnight text-midnight px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-midnight hover:text-white transition-all"
                >
                  Enviar E-mail Corporativo
                </a>
              </div>
              <p className="mt-6 text-[11px] uppercase tracking-wider opacity-80 font-semibold text-center">Atendimento presencial em Ipanema/RJ e suporte jurídico virtual para todo o Brasil.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;
