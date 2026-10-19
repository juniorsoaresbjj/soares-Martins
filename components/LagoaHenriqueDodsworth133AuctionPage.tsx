import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Clock, Sparkles
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1792422500386.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface LagoaHenriqueDodsworth133AuctionPageProps {
  onBack?: () => void;
}

const LagoaHenriqueDodsworth133AuctionPage: React.FC<LagoaHenriqueDodsworth133AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['lagoa-henrique-dodsworth-133-apto-206'] || editaisData['copacabana-atlantica-3806-apto-312'];
  const item = (editalEntry && editalEntry[language]) ? editalEntry[language] : (editalEntry ? editalEntry.pt : {
    title: 'Leilão Judicial na Lagoa — Av. Henrique Dodsworth nº 133 — Apto 206 (92 m²)',
    subtitle: 'Avenida Henrique Dodsworth, nº 133, Apto 206 (entrada pela Rua Prof. Gastão Bahiana nº 496) — Lagoa, Rio de Janeiro/RJ | Edifício Gemini • 92 m² • Posição Frente • 5º Ofício RGI Matrícula 60366 • IPTU: 1186769-4 • Avaliação: R$ 1.330.000,00 • 1º Leilão: 23/10/2026 às 13:00h por R$ 1.330.000,00 • 2º Leilão: 27/10/2026 às 13:00h por R$ 665.000,00 (50% da Avaliação — ~R$ 7.228,26/m² na Lagoa)',
    address: 'Avenida Henrique Dodsworth, nº 133, Apartamento 206 — Lagoa, Rio de Janeiro - RJ',
    p1Date: '23/10/2026 às 13:00h',
    p2Date: '27/10/2026 às 13:00h',
    process: 'Execução Judicial / TJRJ',
    court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
    iptu: '1186769-4',
    rgi: '5º Ofício de Registro de Imóveis (Matrícula nº 60366)',
    val: 'R$ 1.330.000,00',
    p2Val: 'R$ 665.000,00 (Lance inicial 2ª Praça - 50%)',
    description: 'Apartamento de frente com 92 m² no Condomínio do Edifício Gemini, com 2 torres cilíndricas com fachada em vidro fumê, na Lagoa, Rio de Janeiro - RJ.',
    checklist: [],
    modal: { title: 'Resumo Estruturado do Edital', sections: [] },
    faqs: []
  });

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/lagoa/apartamento/avenida-henrique-dodsworth-133-apto-206/";

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": tC.home,
          "item": "https://soaresmartinsadv.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": tC.practiceAreas,
          "item": "https://soaresmartinsadv.com/servicos/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": tC.auctionsTitle,
          "item": "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": item.title,
          "item": canonicalUrl
        }
      ]
    },
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": item.title,
      "description": item.description,
      "image": "https://soaresmartinsadv.com/favicon.svg",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "665000.00",
        "highPrice": "1330000.00",
        "offerCount": "2",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": item.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-midnight text-text-light pt-28 pb-16 selection:bg-bronze selection:text-midnight">
      <SEO 
        title={`${item.title} | Soares Martins Advogados`}
        description={`Assessoria jurídica especializada no leilão judicial do Edifício Gemini, Av. Henrique Dodsworth nº 133, apto 206, Lagoa, Rio de Janeiro. 92 m², 5º RGI Matrícula 60366, IPTU 1186769-4. 1º Leilão: 23/10/2026 (R$ 1.330.000,00) e 2º Leilão: 27/10/2026 (R$ 665.000,00). Análise de risco e imissão na posse com segurança.`}
        canonical={canonicalUrl}
        schema={pageSchema}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <li>
            <Link to="/" className="hover:text-bronze transition-colors flex items-center gap-1">
              {tC.home}
            </Link>
          </li>
          <ChevronRight size={12} className="text-bronze/60" />
          <li>
            <Link to="/servicos/" className="hover:text-bronze transition-colors">
              {tC.practiceAreas}
            </Link>
          </li>
          <ChevronRight size={12} className="text-bronze/60" />
          <li>
            <Link to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" className="hover:text-bronze transition-colors">
              {tC.auctionsTitle}
            </Link>
          </li>
          <ChevronRight size={12} className="text-bronze/60" />
          <li className="text-bronze font-medium truncate max-w-[280px] sm:max-w-md">
            Lagoa • Av. Henrique Dodsworth 133 / 206
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bronze/10 border border-bronze/30 text-bronze text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={14} className="text-bronze animate-pulse" />
              <span>Residencial • Lagoa / Edifício Gemini • Rio de Janeiro</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              {item.title}
            </h1>

            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              {item.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted border-y border-white/10 py-4">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-bronze" /> Lagoa • Rio de Janeiro/RJ
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 size={15} className="text-bronze" /> 92 m² privativos • Posição Frente
              </span>
              <span className="flex items-center gap-1.5">
                <Landmark size={15} className="text-bronze" /> 5º Ofício RGI • Matrícula 60366
              </span>
              <span className="flex items-center gap-1.5">
                <FileText size={15} className="text-bronze" /> IPTU nº 1186769-4
              </span>
            </div>

            {/* Praças Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-midnight-light/50 border border-white/10 relative overflow-hidden">
                <div className="text-[11px] font-bold text-bronze tracking-wider uppercase flex items-center gap-1.5 mb-1">
                  <Calendar size={13} /> {tC.p1Title}
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  {item.p1Date}
                </div>
                <div className="text-xs text-text-muted mb-2">
                  {tC.p1Desc}
                </div>
                <div className="text-xl font-bold font-serif text-white">
                  {item.val}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-bronze/10 border border-bronze/40 relative overflow-hidden shadow-lg shadow-bronze/5">
                <div className="text-[11px] font-bold text-bronze tracking-wider uppercase flex items-center gap-1.5 mb-1">
                  <Clock size={13} /> {tC.p2Title} (Desconto de 50%)
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  {item.p2Date}
                </div>
                <div className="text-xs text-text-muted mb-2">
                  50% do valor de avaliação (~R$ 7.228,26/m²)
                </div>
                <div className="text-xl font-bold font-serif text-bronze">
                  {item.p2Val}
                </div>
              </div>
            </div>

            {/* CTAs do Hero */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => setShowEditalModal(true)}
                className="inline-flex items-center gap-2 bg-bronze hover:bg-bronze-light text-midnight font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-bronze/20 cursor-pointer"
              >
                <FileText size={16} />
                {tC.btnViewDetails}
              </button>

              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20206%20na%20Av.%20Henrique%20Dodsworth%20133%20(Edif%C3%ADcio%20Gemini)%20na%20Lagoa%20-%20RJ."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all border border-white/10"
              >
                <PhoneCall size={16} className="text-bronze" />
                {tC.btnWhatsApp}
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-midnight-light/40 group">
              <img 
                src={buildingImage} 
                alt="Condomínio do Edifício Gemini — Duas torres cilíndricas com fachada em vidro fumê na Lagoa, Rio de Janeiro"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-left p-4 bg-midnight/80 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-xs font-semibold text-white">
                  Condomínio do Edifício Gemini — 1973
                </p>
                <p className="text-[11px] text-text-muted mt-0.5">
                  Av. Henrique Dodsworth nº 133 / Rua Prof. Gastão Bahiana nº 496 • Lagoa • RJ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Ficha Técnica da Auditoria */}
        <article className="bg-midnight-light/40 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-8">
          <div className="flex items-center gap-3 text-bronze border-b border-white/10 pb-4">
            <FileCheck size={26} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              {tC.specsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-midnight/50 border border-white/5 space-y-1">
              <span className="text-xs text-text-muted uppercase tracking-wider block font-medium">Localização & Acessos</span>
              <p className="text-sm font-semibold text-white">Av. Henrique Dodsworth nº 133, Apto 206 (acesso também por R. Prof. Gastão Bahiana 496)</p>
              <p className="text-xs text-text-muted">Lagoa, Rio de Janeiro/RJ • CEP 22061-030</p>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/50 border border-white/5 space-y-1">
              <span className="text-xs text-text-muted uppercase tracking-wider block font-medium">Área & Posição</span>
              <p className="text-sm font-semibold text-white">92 m² de Área Edificada • Posição de Frente</p>
              <p className="text-xs text-text-muted">Unidade 206 no 2º Pavimento</p>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/50 border border-white/5 space-y-1">
              <span className="text-xs text-text-muted uppercase tracking-wider block font-medium">Condomínio & Arquitetura</span>
              <p className="text-sm font-semibold text-white">Condomínio do Edifício Gemini (1973)</p>
              <p className="text-xs text-text-muted">02 torres cilíndricas com fachada em vidro fumê</p>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/50 border border-white/5 space-y-1">
              <span className="text-xs text-text-muted uppercase tracking-wider block font-medium">{tC.specsRgi}</span>
              <p className="text-sm font-semibold text-white">Matrícula nº 60366</p>
              <p className="text-xs text-text-muted">5º Ofício de Registro de Imóveis do Rio de Janeiro</p>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/50 border border-white/5 space-y-1">
              <span className="text-xs text-text-muted uppercase tracking-wider block font-medium">{tC.specsIptu}</span>
              <p className="text-sm font-semibold text-white">1186769-4</p>
              <p className="text-xs text-text-muted">Inscrição Municipal na Prefeitura da Cidade do Rio de Janeiro</p>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/50 border border-white/5 space-y-1">
              <span className="text-xs text-text-muted uppercase tracking-wider block font-medium">{tC.specsValuation}</span>
              <p className="text-sm font-bold text-bronze">{item.val}</p>
              <p className="text-xs text-text-muted">2ª Praça (50%): {item.p2Val}</p>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/50 border border-white/5 space-y-1">
              <span className="text-xs text-text-muted uppercase tracking-wider block font-medium">{tC.specsTaxes}</span>
              <p className="text-sm font-semibold text-emerald-400">Sub-rogação sobre o Preço</p>
              <p className="text-xs text-text-muted">Conforme Art. 130, parágrafo único, do CTN</p>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/50 border border-white/5 space-y-1">
              <span className="text-xs text-text-muted uppercase tracking-wider block font-medium">{tC.specsCondo}</span>
              <p className="text-sm font-semibold text-white">Auditoria de Passivo Propter Rem</p>
              <p className="text-xs text-text-muted">Exame de edital, rateios e certidão de quitação condominial</p>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/50 border border-white/5 space-y-1">
              <span className="text-xs text-text-muted uppercase tracking-wider block font-medium">Lazer & Estrutura</span>
              <p className="text-sm font-semibold text-white">Clube Residencial Completo</p>
              <p className="text-xs text-text-muted">Piscina, sauna, 2 quadras, salão de festas, churrasqueira, CFTV</p>
            </div>
          </div>
        </article>

        {/* Resumo do Imóvel e Arquitetura */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          <div className="lg:col-span-8 bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 text-bronze">
              <Building2 size={24} className="shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
                Resumo do Imóvel e Estrutura do Edifício Gemini
              </h2>
            </div>

            <div className="space-y-4 text-sm text-text-muted leading-relaxed font-sans">
              <p>
                O imóvel leiloado consiste em um <strong className="text-white">apartamento residencial na posição de frente</strong>, com área edificada de <strong className="text-white">92 metros quadrados</strong>, situado na <strong className="text-white">Avenida Henrique Dodsworth nº 133, unidade 206</strong>, contando ainda com conveniente entrada suplementar pela <strong className="text-white">Rua Professor Gastão Bahiana nº 496</strong>, no aprazível e valorizado bairro da <strong className="text-white">Lagoa</strong>, Zona Sul do Rio de Janeiro.
              </p>
              <p>
                A unidade integra o prestigiado <strong className="text-white">Condomínio do Edifício Gemini</strong>, constituído de <strong className="text-white">02 distintas torres em formato cilíndrico</strong> com moderna fachada revestida em vidro fumê. A construção data de <strong className="text-white">1973</strong>, conforme apurado na guia do IPTU, com destinação estritamente residencial, não possuindo lojas comerciais no alinhamento da via pública.
              </p>
              <p>
                A entrada principal do condomínio é pela <strong className="text-white">Rua Professor Gastão Bahiana nº 496</strong>, com acesso rápido e prático de pedestres por elevador pela <strong className="text-white">Avenida Henrique Dodsworth nº 133</strong>. O edifício conta com elevadores sociais e de serviço modernizados e oferece infraestrutura de lazer rara na Zona Sul:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Circuito interno de TV (CFTV) e portaria</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Piscina com deck e espreguiçadeiras</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Sauna seca/vapor e duchas</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Quadra poliesportiva oficial</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Quadra de futebol de salão dedicada</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Salão de festas amplo e decorado</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Churrasqueira gourmet equipada</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Brinquedoteca em pátio externo e playground</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Bicicletário coberto e rampa entre torres</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-midnight/50 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-bronze shrink-0" />
                  <span>Elevadores sociais e de serviço modernizados</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-midnight-light/30 rounded-3xl p-8 sm:p-10 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 text-bronze">
              <Scale size={22} className="shrink-0" />
              <h3 className="text-xl font-serif text-white font-bold">
                Identificação Imobiliária
              </h3>
            </div>

            <div className="space-y-4 text-xs text-text-muted">
              <div className="p-4 bg-midnight/60 rounded-xl border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Cartório de Registro:</span>
                <p>5º Ofício de Registro de Imóveis da Capital (Rio de Janeiro/RJ)</p>
              </div>

              <div className="p-4 bg-midnight/60 rounded-xl border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Matrícula Imobiliária:</span>
                <p className="text-bronze font-mono font-bold text-sm">60366</p>
              </div>

              <div className="p-4 bg-midnight/60 rounded-xl border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Inscrição Municipal (IPTU):</span>
                <p className="text-white font-mono font-semibold">1186769-4</p>
              </div>

              <div className="p-4 bg-midnight/60 rounded-xl border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Regime de Execução:</span>
                <p>Hasta Pública Judicial — Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</p>
              </div>

              <div className="p-4 bg-midnight/60 rounded-xl border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Lance Inicial 2ª Praça:</span>
                <p className="text-emerald-400 font-bold text-sm">R$ 665.000,00 (50% da Avaliação)</p>
                <p className="text-[11px] text-text-muted">Custo aproximado de R$ 7.228,26 por m²</p>
              </div>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Atratividade */}
        <article className="bg-midnight-light/20 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Landmark size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado: Lagoa Rodrigo de Freitas e Potencial de Valorização
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-midnight/40 border border-white/5 space-y-3">
              <div className="text-bronze text-sm font-bold uppercase tracking-wider">Localização Premium</div>
              <h3 className="text-lg font-serif text-white font-bold">Conexão Lagoa • Copacabana</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                A Avenida Henrique Dodsworth liga a Lagoa Rodrigo de Freitas a Copacabana através do Corte do Cantagalo, com rápido acesso à Praia de Copacabana, estação de Metrô Cantagalo e Ipanema. Região com alta procura residencial e perfil familiar consolidado.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/40 border border-white/5 space-y-3">
              <div className="text-bronze text-sm font-bold uppercase tracking-wider">Margem de Desconto</div>
              <h3 className="text-lg font-serif text-white font-bold">~R$ 7.228,26 / m²</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Enquanto o valor médio de venda do metro quadrado residencial na Lagoa e imediações varia entre R$ 16.000,00 e R$ 22.000,00/m², a 2ª praça com lance inicial de R$ 665.000,00 oferece uma margem bruta de desconto superior a 55% sobre o valor praticado de mercado.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/40 border border-white/5 space-y-3">
              <div className="text-bronze text-sm font-bold uppercase tracking-wider">Liquidez e Lazer</div>
              <h3 className="text-lg font-serif text-white font-bold">Infraestrutura Excepcional</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Edifícios na Zona Sul construídos na década de 70 raramente dispõem de complexo com 2 quadras esportivas, piscina, sauna e ampla área verde. O Edifício Gemini alia planta de 92 m² com custo condominial diluído entre as duas torres.
              </p>
            </div>
          </div>
        </article>

        {/* 4 Pilares da Auditoria Jurídica Soares Martins Advogados */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-bronze uppercase tracking-widest">{tC.pillarsTag}</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">{tC.pillarsTitle}</h2>
            <p className="text-xs sm:text-sm text-text-muted">{tC.pillarsSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-midnight/60 border border-white/5 space-y-3 hover:border-bronze/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-bronze/10 border border-bronze/30 flex items-center justify-center text-bronze font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-serif font-bold text-white">Due Diligence da Matrícula 60366</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Análise da cadeia dominial no 5º Ofício RGI, verificação de penhoras de outros juízos, hipotecas, arrolamentos fiscais e averbações de indisponibilidade (CNIB).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/60 border border-white/5 space-y-3 hover:border-bronze/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-bronze/10 border border-bronze/30 flex items-center justify-center text-bronze font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-serif font-bold text-white">Validade Processual no TJRJ</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Conferência da citação válida do executado, regularidade da intimação das datas das praças e cientificação de eventuais coproprietários ou cônjuges.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/60 border border-white/5 space-y-3 hover:border-bronze/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-bronze/10 border border-bronze/30 flex items-center justify-center text-bronze font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-serif font-bold text-white">Proteção Fiscais & Condomínio</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Aplicação do Art. 130 do CTN para assegurar a sub-rogação dos débitos de IPTU (nº 1186769-4) e estudo preciso de eventuais quotas condominiais propter rem.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/60 border border-white/5 space-y-3 hover:border-bronze/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-bronze/10 border border-bronze/30 flex items-center justify-center text-bronze font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-serif font-bold text-white">Carta e Imissão Rápida na Posse</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Acompanhamento pós-leilão: recolhimento do ITBI, expedição célere da carta de arrematação, registro imobiliário e mandado judicial de imissão na posse.
              </p>
            </div>
          </div>
        </article>

        {/* Fases do Acompanhamento Jurídico */}
        <article className="bg-midnight-light/20 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <ShieldCheck size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Fases da Assessoria Jurídica em Leilões Judiciais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-midnight/40 border border-white/5 space-y-2">
              <span className="text-xs font-bold text-bronze uppercase">Fase 1 • Pré-Arrematação</span>
              <h3 className="text-base font-serif font-bold text-white">Auditoria Preventiva e Viabilidade</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Emissão de Parecer Jurídico circunstanciado sobre o imóvel, cálculo de custos totais (comissão do leiloeiro, ITBI, emolumentos cartorários e eventuais reformas) e definição de teto seguro de lance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/40 border border-white/5 space-y-2">
              <span className="text-xs font-bold text-bronze uppercase">Fase 2 • Habilitação e Lances</span>
              <h3 className="text-base font-serif font-bold text-white">Estratégia e Habilitação Homologada</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Credenciamento perante o leiloeiro oficial, formalização de proposta à vista ou parcelada (art. 895 do CPC) e assessoria jurídica em tempo real durante a sessão pública de lances.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/40 border border-white/5 space-y-2">
              <span className="text-xs font-bold text-bronze uppercase">Fase 3 • Pós-Arrematação e Posse</span>
              <h3 className="text-base font-serif font-bold text-white">Registro Definitivo e Entrega das Chaves</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Petição ao juízo para homologação célere, obtenção da guia de ITBI, assinatura do auto, expedição do mandado de entrega das chaves e cancelamento de ônus pretéritos no RGI.
              </p>
            </div>
          </div>
        </article>

        {/* Links Internos e Oportunidades Relacionadas */}
        <section className="bg-midnight-light/20 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3 text-bronze">
              <Gavel size={24} className="shrink-0" />
              <h3 className="text-2xl font-serif text-white font-bold">{tC.relatedTitle}</h3>
            </div>
            <Link 
              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" 
              className="text-xs font-bold text-bronze hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              Ver Todas as Oportunidades <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Copacabana — R. Mascarenhas de Moraes 124 (Apto 102)',
                desc: '60 m² • 5º RGI Matrícula 59.230 • 2ª Praça por R$ 375.000,00',
                path: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-marechal-mascarenhas-de-moraes-124-apto-102/'
              },
              {
                title: 'Leblon — Rua Prof. Saboya Ribeiro 60 (Apto 104)',
                desc: '86 m² • 3 Quartos • 2º RGI Matrícula 26453 • 2ª Praça R$ 1.118.000,00',
                path: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-professor-saboya-ribeiro-60-apto-104/'
              },
              {
                title: 'Copacabana — Av. Atlântica 3806 (Apto 312)',
                desc: '70 m² • Frente Mar • 5º RGI Matrícula 23.402 • 2ª Praça por R$ 225.100,00',
                path: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-3806-apto-312/'
              },
              {
                title: 'Copacabana — R. Mascarenhas de Moraes 190 (Apto 703)',
                desc: '110 m² • Silencioso • 5º RGI Matrícula 6.425 • 2ª Praça R$ 478.000,00',
                path: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-marechal-mascarenhas-de-moraes-190-apto-703/'
              },
              {
                title: 'Icaraí / Niterói — Av. Alberto Torres 237 (Apto 1004)',
                desc: '157 m² • 4 Quartos • Frente Praia de Icaraí • 2ª Praça R$ 522.000,00',
                path: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/icarai/apartamento/avenida-jornalista-alberto-francisco-torres-237-apto-1004/'
              },
              {
                title: 'Lagoa — Rua Fonte da Saudade 270 (Cobertura 402)',
                desc: 'Cobertura Duplex • 5º RGI • Vista Privilegiada para a Lagoa Rodrigo de Freitas',
                path: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/lagoa/cobertura/rua-fonte-da-saudade-270-apto-402/'
              },
              {
                title: 'Copacabana — Av. Princesa Isabel 134 (Apto 801)',
                desc: '31 m² • Edifício Prof. Zerbini • 2ª Praça por R$ 150.000,00',
                path: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-princesa-isabel-134-apto-801/'
              },
              {
                title: 'Catete — Rua Andrade Pertence 28 (Apto 704)',
                desc: '67 m² com Suíte • Fundos silencioso • 2ª Praça por R$ 313.895,00',
                path: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-andrade-pertence-28-apto-704/'
              },
              {
                title: 'Artigo: Como Funciona a Arrematação Parcelada (Art. 895 CPC)',
                desc: 'Entenda os requisitos legais para propor 25% de sinal e 30 parcelas em leilões',
                path: '/blog/como-funciona-arrematacao-parcelada-leilao-judicial/'
              },
              {
                title: 'Artigo: Due Diligence em Leilões Judiciais de Imóveis',
                desc: 'Checklist completo das certidões e riscos processuais avaliados por advogados',
                path: '/blog/direito-imobiliario-due-diligence-compra/'
              }
            ].map((link, idx) => (
              <Link 
                key={idx}
                to={link.path} 
                className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all flex items-center justify-between group text-left shadow-sm"
              >
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">{link.title}</h4>
                  <p className="text-xs text-text-muted">{link.desc}</p>
                </div>
                <ChevronRight size={18} className="text-bronze group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Específica */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <HelpCircle size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              {tC.faqTitle}
            </h2>
          </div>

          <div className="space-y-4 pt-2">
            {item.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-white/5 bg-midnight/40 overflow-hidden transition-all hover:border-bronze/20"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-white hover:text-bronze transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-bronze font-bold text-sm font-sans">P.</span>
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp size={18} className="text-bronze shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-bronze shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-text-muted leading-relaxed font-sans border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>

        {/* CTA Sóbrio Final com conformidade OAB */}
        <section className="bg-bronze p-8 sm:p-12 md:p-14 rounded-3xl text-midnight text-center shadow-2xl border border-bronze/30">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-midnight text-center">
              {tC.ctaTitle}
            </h2>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed font-medium text-center">
              {tC.ctaDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20206%20na%20Av.%20Henrique%20Dodsworth%20133%20(Edif%C3%ADcio%20Gemini)%20na%20Lagoa%20-%20RJ."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-midnight text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-midnight transition-all shadow-lg"
              >
                <PhoneCall size={16} />
                {tC.ctaWA}
              </a>

              <a 
                href="mailto:Juniorsadv@hotmail.com" 
                className="inline-flex items-center justify-center gap-2 border-2 border-midnight text-midnight px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-midnight hover:text-white transition-all"
              >
                {tC.ctaEmail}
              </a>
            </div>

            <p className="pt-4 text-[11px] uppercase tracking-wider opacity-80 font-semibold text-center">
              {tC.ctaFooterNote}
            </p>
          </div>
        </section>
      </section>

      {/* Modal Resumo Didático do Edital */}
      {showEditalModal && (
        <div className="fixed inset-0 z-[1000] bg-midnight/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-midnight-light border border-bronze/30 rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-left space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-serif text-white font-bold flex items-center gap-2">
                <FileText size={20} className="text-bronze" /> {tC.modalTitle}
              </h3>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-white p-1 rounded-lg text-sm cursor-pointer"
              >
                ✕ {tC.modalClose}
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-text-muted leading-relaxed">
              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Localização & Condomínio:</div>
                <div>{item.address} (Edifício Gemini — 1973)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">{tC.specsValuation}:</div>
                <div className="text-bronze font-bold">{item.val}</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Praças Judiciais:</div>
                <div>1ª Praça: {item.p1Date} ({item.val})</div>
                <div>2ª Praça: {item.p2Date} ({item.p2Val})</div>
              </div>

              {item.modal.sections.map((sec, i) => (
                <div key={i} className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                  <div className="text-white font-semibold">{sec.title}</div>
                  <div>{sec.text}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
              <button 
                onClick={() => setShowEditalModal(false)}
                className="px-5 py-2.5 bg-white/10 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all cursor-pointer"
              >
                {tC.modalClose}
              </button>
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20da%20Av.%20Henrique%20Dodsworth%20133%20na%20Lagoa."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-bronze text-midnight font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-white transition-all inline-flex items-center gap-1.5"
              >
                {tC.btnWhatsApp} <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LagoaHenriqueDodsworth133AuctionPage;
