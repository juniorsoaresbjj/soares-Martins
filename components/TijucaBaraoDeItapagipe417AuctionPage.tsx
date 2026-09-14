import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Sparkles, Compass
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1789392658512.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface TijucaBaraoDeItapagipe417AuctionPageProps {
  onBack?: () => void;
}

const TijucaBaraoDeItapagipe417AuctionPage: React.FC<TijucaBaraoDeItapagipe417AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['tijuca-barao-de-itapagipe-417-bloco-a-apto-501'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-barao-de-itapagipe-417-bloco-a-apto-501/";

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
      "name": "Soares Martins Advogados - Assessoria em Leilões Judiciais de Imóveis",
      "description": "Assessoria jurídica e auditoria de riscos em leilões judiciais de imóveis no Rio de Janeiro. Análise de editais, due diligence processual e imissão na posse.",
      "url": "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Visconde de Pirajá, 414, Sala 718",
        "addressLocality": "Ipanema",
        "addressRegion": "RJ",
        "postalCode": "22410-002",
        "addressCountry": "BR"
      },
      "telephone": "+55-21-97954-9241"
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Leilão Judicial Apartamento Tijuca - Rua Barão de Itapagipe 417 Bloco A Apto 501",
      "description": item.description,
      "image": "https://soaresmartinsadv.com/assets/images/regenerated_image_1789392658512.png",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "140000.00",
        "highPrice": "280000.00",
        "offerCount": "2",
        "offers": [
          {
            "@type": "Offer",
            "name": "1º Leilão Oficial (100% da avaliação)",
            "price": "280000.00",
            "priceCurrency": "BRL",
            "validFrom": "2026-09-30T14:00:00-03:00"
          },
          {
            "@type": "Offer",
            "name": "2º Leilão Oficial (50% da avaliação)",
            "price": "140000.00",
            "priceCurrency": "BRL",
            "validFrom": "2026-10-07T14:00:00-03:00"
          }
        ]
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

  return (
    <div className="bg-sand-light min-h-screen text-text-primary">
      <SEO 
        title={`${item.title} | Soares Martins Advogados`}
        description={`Assessoria jurídica especializada no leilão judicial do apartamento de 50 m² (unidade de frente 501, Bloco A) na Rua Barão de Itapagipe nº 417 na Tijuca/RJ. Avaliação R$ 280.000,00 e 2ª praça a 50% por R$ 140.000,00. 11º RGI Matrícula 3553 e IPTU 11509312.`}
        canonical={canonicalUrl}
        schema={pageSchema}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-sand-dark/40 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-xs text-text-secondary gap-2">
            <Link to="/" className="hover:text-midnight transition-colors">{tC.home}</Link>
            <ChevronRight size={12} />
            <Link to="/servicos/" className="hover:text-midnight transition-colors">{tC.practiceAreas}</Link>
            <ChevronRight size={12} />
            <Link to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" className="hover:text-midnight transition-colors">
              {tC.auctionsTitle}
            </Link>
            <ChevronRight size={12} />
            <span className="text-midnight font-medium truncate max-w-[200px] sm:max-w-xs">Tijuca — Rua Barão de Itapagipe 417 (Apto 501, Bloco A)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-midnight text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link 
              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/"
              className="inline-flex items-center text-xs uppercase tracking-wider text-bronze hover:text-white transition-colors gap-1 font-semibold"
            >
              <ArrowLeft size={14} /> {tC.backToAuctions}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Col: Headings and Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/20 text-bronze-light border border-bronze/30 text-xs font-medium uppercase tracking-wider mb-4">
                <Gavel size={13} /> {tC.opportunityAnalysis} • Tijuca / Rio de Janeiro
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-4">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6 font-light">
                {item.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-white/80 mb-8">
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <MapPin size={13} className="text-bronze" /> Tijuca — Zona Norte / RJ
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Building2 size={13} className="text-bronze" /> 50 m² privativos • Posição Frente
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Compass size={13} className="text-bronze" /> Bloco A • 5º Pavimento (Apto 501)
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Scale size={13} className="text-bronze" /> 11º RGI Matrícula 3553
                </span>
              </div>

              {/* Photo Box */}
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative group bg-midnight-light aspect-video max-h-[380px] w-full">
                <img 
                  src={buildingImage} 
                  alt="Edifício na Rua Barão de Itapagipe nº 417, Tijuca, Rio de Janeiro - Leilão Judicial" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="bg-midnight/80 backdrop-blur-sm px-3 py-1 rounded-md border border-white/20">
                    Foto da Fachada • Rua Barão de Itapagipe nº 417, Tijuca/RJ
                  </span>
                  <span className="text-[11px] text-white/70">
                    Condomínio Residencial • Bloco A
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Auction Box & Financial Card */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 lg:sticky lg:top-24">
              <div className="border-b border-white/10 pb-6 mb-6">
                <span className="text-xs uppercase tracking-wider text-bronze font-bold block mb-1">
                  {tC.appraisalValueLabel}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">{item.val}</span>
                </div>

                {/* Praças Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {/* 1ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase font-bold text-bronze tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> {tC.p1Title}
                    </div>
                    <div className="text-sm font-semibold text-white mb-2">{tC.p1Desc}</div>
                    <div className="text-xs text-text-muted mb-1">{tC.minBidLabel}</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-white">{item.val}</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">{item.p1Date}</div>
                  </div>

                  {/* 2ª Praça (50%) */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> {tC.p2Title}
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">50% da avaliação</div>
                    <div className="text-xs text-text-muted mb-1">{tC.minBidLabel}</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-emerald-400">{item.p2Val}</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">{item.p2Date}</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3 text-xs text-text-muted">
                  <div className="flex items-center justify-between">
                    <span>{tC.specsRgi}:</span>
                    <span className="text-white font-medium">{item.rgi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{tC.specsIptu}:</span>
                    <span className="text-white font-medium font-mono">{item.iptu}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{tC.specsProcess}:</span>
                    <span className="text-white font-medium">{item.process}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{tC.specsCourt}:</span>
                    <span className="text-white font-medium">{item.court}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <button 
                    onClick={() => setShowEditalModal(true)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText size={15} /> {tC.btnViewDetails}
                  </button>

                  <a 
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20501%20bloco%20A%20na%20Rua%20Bar%C3%A3o%20de%20Itapagipe%20417%20na%20Tijuca."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <PhoneCall size={15} /> {tC.btnConsultAuditors}
                  </a>
                </div>

                <div className="mt-4 text-[11px] text-white/50 text-center leading-relaxed">
                  {tC.disclaimerLegal}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Ficha Técnica */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm">
              <h2 className="text-xl font-serif font-bold text-midnight mb-6 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <FileCheck className="text-bronze" size={22} /> Ficha Técnica da Oportunidade
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Imóvel</span>
                  <span className="font-semibold text-midnight">Apartamento Residencial de Frente (Apto 501, Bloco A)</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Área Privativa</span>
                  <span className="font-semibold text-midnight">50 metros quadrados (50 m²)</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Endereço Completo</span>
                  <span className="font-semibold text-midnight">Rua Barão de Itapagipe, nº 417, Bloco A, Apto 501 — Tijuca, Rio de Janeiro/RJ</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Posição Solar e Fachada</span>
                  <span className="font-semibold text-midnight">Posição Frente (Vista aberta e ventilação direta)</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Registro de Imóveis (RGI)</span>
                  <span className="font-semibold text-midnight">11º Ofício de RGI da Capital / Matrícula nº 3553</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Inscrição Municipal (IPTU)</span>
                  <span className="font-semibold text-midnight font-mono">11509312</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Valor de Avaliação</span>
                  <span className="font-semibold text-midnight">R$ 280.000,00</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Lance Mínimo na 2ª Praça</span>
                  <span className="font-semibold text-emerald-700 font-bold">R$ 140.000,00 (50% de deságio — ~R$ 2.800/m²)</span>
                </div>
              </div>
            </section>

            {/* 2. Resumo do Imóvel */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-bold text-midnight mb-4 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Building2 className="text-bronze" size={22} /> Resumo do Imóvel e Características
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                O imóvel sob análise consiste em um apartamento residencial com <strong>50 metros quadrados de área privativa</strong>, 
                situado no <strong>5º pavimento (unidade 501)</strong> do <strong>Bloco A</strong> do condomínio residencial localizado na 
                <strong> Rua Barão de Itapagipe, nº 417</strong>, em ponto estratégico da <strong>Tijuca</strong>, um dos bairros mais tradicionais, 
                completos e consolidados da Zona Norte do Rio de Janeiro.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Um dos principais atributos do imóvel é a sua <strong>posição de frente</strong>, garantindo excelente incidência de iluminação natural 
                ao longo do dia e circulação contínua de ar fresco, características muito valorizadas tanto para moradia própria quanto para atração 
                de inquilinos qualificados no mercado locatício carioca.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                A Rua Barão de Itapagipe é conhecida por seu perfil residencial arborizado, com ambiente calmo e vizinhança familiar, ao mesmo tempo 
                em que oferece acesso imediato a uma rede ampla de conveniências urbanas: supermercados tradicionais, academias, colégios renomados, 
                hospitais de excelência (como o Hospital São Francisco na Providência de Deus e o Hospital Universitário Pedro Ernesto nas imediações), 
                além de rápido deslocamento para as estações de metrô <strong>Afonso Pena</strong> e <strong>São Francisco Xavier</strong>, 
                integrando o morador em poucos minutos ao Centro da Cidade e à Zona Sul.
              </p>
            </section>

            {/* 3. Identificação Imobiliária e Registral */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-bold text-midnight mb-4 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Landmark className="text-bronze" size={22} /> Identificação Imobiliária e Registral
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                A segurança da arrematação judicial inicia-se pela precisa correspondência entre o laudo pericial de avaliação, o edital do leilão e os 
                assentos constantes no fólio real. O imóvel encontra-se devidamente registrado, dimensionado e caracterizado perante a circunscrição competente:
              </p>
              <div className="bg-sand-light/60 p-5 rounded-xl border border-sand-dark/30 space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-sand-dark/20 pb-2">
                  <span className="text-text-muted">Circunscrição Registral:</span>
                  <span className="font-semibold text-midnight">11º Ofício de Registro de Imóveis do Rio de Janeiro (11º RGI)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-sand-dark/20 pb-2">
                  <span className="text-text-muted">Número da Matrícula Imobiliária:</span>
                  <span className="font-semibold text-midnight font-mono">Matrícula nº 3553</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-sand-dark/20 pb-2">
                  <span className="text-text-muted">Inscrição Municipal (IPTU Carioca):</span>
                  <span className="font-semibold text-midnight font-mono">11509312</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-text-muted">Designação Condominial:</span>
                  <span className="font-semibold text-midnight">Apartamento 501, Bloco A — Rua Barão de Itapagipe nº 417</span>
                </div>
              </div>
              <p className="text-xs text-text-muted leading-relaxed italic">
                A assessoria técnica jurídica do escritório Soares Martins Advogados realiza a varredura prévia de todas as prenotações, gravames, 
                penhoras fiscais ou cíveis e eventuais ações reipersecutórias anotadas na Matrícula nº 3553 do 11º RGI, assegurando a eficácia 
                extintiva dos ônus após a expedição da respectiva Carta de Arrematação pelo Juízo.
              </p>
            </section>

            {/* 4. Dados da Execução e Regularidade Processual */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-bold text-midnight mb-4 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Scale className="text-bronze" size={22} /> Dados da Execução Judicial e Regularidade Processual
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                A alienação judicial é realizada no âmbito do <strong>Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</strong>, 
                Comarca da Capital, sob rito expropriatório previsto no Código de Processo Civil brasileiro (Lei Federal nº 13.105/2015).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
                <div className="p-4 rounded-xl bg-sand-light border border-sand-dark/20">
                  <span className="font-semibold text-midnight block mb-1">Intimações Regulares</span>
                  <span className="text-xs text-text-secondary">
                    Verificação rigorosa da intimação pessoal de executados, coproprietários, cônjuges e eventuais credores com penhoras preexistentes (Art. 889 do CPC).
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-sand-light border border-sand-dark/20">
                  <span className="font-semibold text-midnight block mb-1">Débitos Fiscais (IPTU)</span>
                  <span className="text-xs text-text-secondary">
                    Aplicação do Art. 130, parágrafo único, do CTN: sub-rogação dos créditos tributários sobre o preço arrematado, garantindo a aquisição livre de passivos de IPTU.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-sand-light border border-sand-dark/20">
                  <span className="font-semibold text-midnight block mb-1">Débito Condominial Propter Rem</span>
                  <span className="text-xs text-text-secondary">
                    Auditoria detalhada da convenção de condomínio, planilha de cobrança e previsão no edital sobre a responsabilidade ou sub-rogação das quotas em atraso.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-sand-light border border-sand-dark/20">
                  <span className="font-semibold text-midnight block mb-1">Auto de Arrematação Perfeito</span>
                  <span className="text-xs text-text-secondary">
                    Blindagem contra embargos protelatórios, nos termos do Art. 903 do CPC, conferindo higidez jurídica inatacável à aquisição.
                  </span>
                </div>
              </div>
            </section>

            {/* 5. Contexto de Mercado e Atratividade do Investimento */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-bold text-midnight mb-4 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Sparkles className="text-bronze" size={22} /> Contexto de Mercado e Atratividade Econômica
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                A Tijuca destaca-se como o polo imobiliário de maior liquidez e solidez da Zona Norte carioca, atraindo famílias tradicionais, 
                jovens casais, estudantes universitários e investidores em busca de rentabilidade com locação residencial:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-xl bg-midnight text-white text-center">
                  <div className="text-xs text-bronze uppercase tracking-wider font-semibold">Avaliação Oficial</div>
                  <div className="text-xl font-serif font-bold mt-1">R$ 280.000,00</div>
                  <div className="text-[11px] text-white/60 mt-1">~R$ 5.600/m²</div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-700 text-white text-center">
                  <div className="text-xs text-emerald-200 uppercase tracking-wider font-semibold">Lance Mínimo 2ª Praça</div>
                  <div className="text-xl font-serif font-bold mt-1">R$ 140.000,00</div>
                  <div className="text-[11px] text-emerald-100 mt-1 font-semibold">Apenas ~R$ 2.800/m²</div>
                </div>

                <div className="p-4 rounded-xl bg-sand-light border border-sand-dark/30 text-center">
                  <div className="text-xs text-text-muted uppercase tracking-wider font-semibold">Mercado Médio Tijuca</div>
                  <div className="text-xl font-serif font-bold text-midnight mt-1">R$ 6.500 – R$ 8.500/m²</div>
                  <div className="text-[11px] text-text-secondary mt-1">Imóveis residenciais similares</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-text-secondary">
                <p>
                  <strong>1. Deságio de 50% e Margem Excepcional:</strong> A possibilidade de arrematação pelo valor inicial da 2ª Praça (R$ 140.000,00) 
                  representa uma economia bruta imediata de R$ 140.000,00 em relação à avaliação homologada, proporcionando margem de segurança patrimonial 
                  que absorve eventuais custos de regularização, reformas estéticas e despesas cartorárias.
                </p>
                <p>
                  <strong>2. Custo por Metro Quadrado Inédito:</strong> O patamar de aproximadamente <strong>R$ 2.800 por metro quadrado</strong> é 
                  virtualmente inexistente no mercado aberto da Tijuca, onde unidades prontas e bem localizadas são transacionadas entre R$ 6.000 e R$ 8.500/m².
                </p>
                <p>
                  <strong>3. Liquidez para Locação e Revenda:</strong> Unidades residenciais compactas de 50 m² com posição frontal na Tijuca possuem 
                  uma das taxas de vacância mais baixas da cidade do Rio de Janeiro, garantindo retorno contínuo sobre o capital investido através de aluguel 
                  residencial tradicional ou contratos por temporada.
                </p>
              </div>
            </section>

            {/* 6. Como Participar da Arrematação */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-bold text-midnight mb-4 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Gavel className="text-bronze" size={22} /> Como Participar da Arrematação e Condições de Pagamento
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                A participação no leilão judicial exige prévio credenciamento e habilitação perante o leiloeiro público oficial designado nos autos. 
                O arrematante dispõe de duas modalidades principais de pagamento admitidas pela legislação processual civil:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-sand-light p-6 rounded-xl border border-sand-dark/30 space-y-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-midnight block">Opção 1: Pagamento à Vista</span>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Depósito judicial do lance integral em até 24 horas após o encerramento do leilão, mediante guia oficial da Caixa Econômica Federal 
                    ou Banco do Brasil vinculado ao processo judicial, acrescido da comissão de 5% do leiloeiro e custas judiciais cabíveis.
                  </p>
                </div>

                <div className="bg-sand-light p-6 rounded-xl border border-sand-dark/30 space-y-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-midnight block">Opção 2: Parcelamento Judicial (Art. 895 CPC)</span>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Apresentação de proposta formal escrita antes do início do leilão, prevendo <strong>entrada mínima de 25% à vista</strong> e o 
                    saldo remanescente em <strong>até 30 parcelas mensais sucessivas</strong> corrigidas pelo índice oficial da Justiça, com hipoteca judicial 
                    gravada sobre o próprio imóvel na matrícula nº 3553 do 11º RGI.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Importância da Assessoria Jurídica Especializada */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-midnight mb-2 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <ShieldCheck className="text-bronze" size={22} /> Importância da Assessoria Jurídica Especializada
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Adquirir imóveis em leilão judicial é uma das estratégias de investimento imobiliário mais rentáveis do país, mas envolve 
                complexidades processuais e registrais que exigem rigor técnico antes, durante e após o leilão. A atuação de uma assessoria jurídica 
                especializada elimina riscos de surpresas financeiras e atrasos desnecessários.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-sand-light/70 border border-sand-dark/20">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-midnight mb-1">1. Due Diligence Prévia Exaustiva</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Análise completa dos autos da execução no TJRJ, validade das notificações de todas as partes e terceiros interessados, 
                    certidões cíveis e fiscais em nome do devedor e proprietários tabulares.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-sand-light/70 border border-sand-dark/20">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-midnight mb-1">2. Levantamento de Ônus e Penhoras</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Auditoria dos assentos da Matrícula nº 3553 do 11º RGI para assegurar a ordem de cancelamento de penhoras e indisponibilidades, 
                    garantindo que o adquirente receba o título de propriedade 100% desembaraçado.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-sand-light/70 border border-sand-dark/20">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-midnight mb-1">3. Apuração de Condomínio e IPTU</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Cálculo exato de eventuais dívidas condominiais e tributárias perante a Prefeitura do Rio, verificando a responsabilidade 
                    de quitação ou retenção sobre o preço depositado no processo.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-sand-light/70 border border-sand-dark/20">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-midnight mb-1">4. Mandado de Imissão na Posse Eficaz</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Acompanhamento célere das petições judiciais para expedição da Carta de Arrematação, guia de ITBI, registro imobiliário e 
                    cumprimento do mandado de imissão na posse com entrega definitiva das chaves.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Fases do Acompanhamento Jurídico */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-midnight mb-2 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <CheckCircle2 className="text-bronze" size={22} /> As 4 Fases do Acompanhamento Jurídico
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-sand-light/50 border border-sand-dark/20">
                  <div className="w-8 h-8 rounded-full bg-midnight text-bronze font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-midnight">Fase 1: Auditoria Preventiva (Due Diligence Pré-Leilão)</h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Emissão do Relatório Jurídico Preliminar com análise do edital, certidões da 11ª Circunscrição Imobiliária, 
                      avaliação judicial, riscos de recursos e cálculo de viabilidade financeira consolidada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-sand-light/50 border border-sand-dark/20">
                  <div className="w-8 h-8 rounded-full bg-midnight text-bronze font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-midnight">Fase 2: Estratégia de Lance e Habilitação</h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Credenciamento formal perante o leiloeiro oficial, estruturação da proposta de lance (à vista ou parcelado nos termos do Art. 895 do CPC) 
                      e assessoria em tempo real no pregão judicial.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-sand-light/50 border border-sand-dark/20">
                  <div className="w-8 h-8 rounded-full bg-midnight text-bronze font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-midnight">Fase 3: Homologação e Expedição da Carta de Arrematação</h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Acompanhamento da assinatura do auto de arrematação, defesa contra eventuais embargos protelatórios, recolhimento 
                      do ITBI e obtenção da Carta de Arrematação assinada pelo Magistrado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-sand-light/50 border border-sand-dark/20">
                  <div className="w-8 h-8 rounded-full bg-midnight text-bronze font-bold flex items-center justify-center shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-midnight">Fase 4: Registro no 11º RGI e Imissão na Posse</h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Prenotação e registro da propriedade na Matrícula nº 3553 perante o 11º RGI, cancelamento dos gravames preexistentes e 
                      acompanhamento do cumprimento do Mandado de Imissão na Posse junto ao Oficial de Justiça para entrega definitiva das chaves.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. FAQ Específica */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm">
              <h2 className="text-xl font-serif font-bold text-midnight mb-6 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <HelpCircle className="text-bronze" size={22} /> Perguntas Frequentes sobre a Unidade na Tijuca
              </h2>
              <div className="space-y-3">
                {item.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-sand-dark/30 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 text-left font-medium text-midnight flex items-center justify-between gap-4 bg-sand-light/40 hover:bg-sand-light transition-colors text-sm"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? <ChevronUp size={16} className="text-bronze shrink-0" /> : <ChevronDown size={16} className="text-text-muted shrink-0" />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 text-xs text-text-secondary leading-relaxed bg-white border-t border-sand-dark/20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 10. Links Internos e Artigos Relacionados */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-4">
              <h2 className="text-xl font-serif font-bold text-midnight mb-4 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <ExternalLink className="text-bronze" size={22} /> Conteúdos Jurídicos e Serviços Relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <Link 
                  to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" 
                  className="p-3.5 rounded-xl bg-sand-light hover:bg-sand-dark/20 border border-sand-dark/30 transition-all font-medium text-midnight block"
                >
                  <span className="text-bronze block font-bold mb-0.5">Serviço Especializado</span>
                  Assessoria Jurídica em Leilões Judiciais de Imóveis no Rio de Janeiro
                </Link>
                <Link 
                  to="/direito-imobiliario/" 
                  className="p-3.5 rounded-xl bg-sand-light hover:bg-sand-dark/20 border border-sand-dark/30 transition-all font-medium text-midnight block"
                >
                  <span className="text-bronze block font-bold mb-0.5">Área de Atuação</span>
                  Direito Imobiliário e Regularização Registral de Bens
                </Link>
                <Link 
                  to="/blog/apartamento-leilao-debito-condominial/" 
                  className="p-3.5 rounded-xl bg-sand-light hover:bg-sand-dark/20 border border-sand-dark/30 transition-all font-medium text-midnight block"
                >
                  <span className="text-bronze block font-bold mb-0.5">Artigo de Referência</span>
                  Apartamento em Leilão com Dívida Condominial: Quem Paga o Débito?
                </Link>
                <Link 
                  to="/blog/direito-imobiliario-due-diligence-compra/" 
                  className="p-3.5 rounded-xl bg-sand-light hover:bg-sand-dark/20 border border-sand-dark/30 transition-all font-medium text-midnight block"
                >
                  <span className="text-bronze block font-bold mb-0.5">Artigo de Referência</span>
                  Due Diligence Imobiliária: O Guia de Certidões e Prevenção de Riscos
                </Link>
                <Link 
                  to="/blog/guia-compra-venda-segura-imoveis-rj/" 
                  className="p-3.5 rounded-xl bg-sand-light hover:bg-sand-dark/20 border border-sand-dark/30 transition-all font-medium text-midnight block"
                >
                  <span className="text-bronze block font-bold mb-0.5">Guia Prático</span>
                  Compra e Venda Segura de Imóveis no Rio de Janeiro: Passo a Passo
                </Link>
                <Link 
                  to="/direito-patrimonial-sucessorio/" 
                  className="p-3.5 rounded-xl bg-sand-light hover:bg-sand-dark/20 border border-sand-dark/30 transition-all font-medium text-midnight block"
                >
                  <span className="text-bronze block font-bold mb-0.5">Planejamento</span>
                  Estruturação Patrimonial e Sucessória para Investidores
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* CTA Box */}
            <div className="bg-midnight text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl space-y-6 lg:sticky lg:top-24">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-bronze font-bold block mb-1">
                  Atendimento Especializado
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Assessoria Jurídica no Leilão da Tijuca
                </h3>
                <p className="text-xs text-text-muted mt-2 leading-relaxed">
                  Agende uma consulta com nossos advogados para análise prévia dos autos, verificação da Matrícula nº 3553 no 11º RGI e suporte completo no pregão judicial.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <a 
                  href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20501%20bloco%20A%20na%20Rua%20Bar%C3%A3o%20de%20Itapagipe%20417%20na%20Tijuca."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <PhoneCall size={15} /> Atendimento via WhatsApp
                </a>

                <Link
                  to="/contato/"
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2"
                >
                  Formulário Institucional
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/70 space-y-2">
                <div className="font-semibold text-bronze flex items-center gap-1.5">
                  <ShieldCheck size={14} /> Conformidade com o Código de Ética da OAB
                </div>
                <p className="leading-relaxed text-[11px] text-white/60">
                  A presente publicação possui caráter exclusivamente informativo e técnico-jurídico, em estrita observância ao Provimento 205/2021 do Conselho Federal da OAB.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Modal de Detalhes do Edital */}
      {showEditalModal && (
        <div className="fixed inset-0 z-50 bg-midnight/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-sand-dark/40">
            <div className="flex items-center justify-between border-b border-sand-dark/30 pb-4 mb-6">
              <h3 className="text-lg font-serif font-bold text-midnight flex items-center gap-2">
                <FileText className="text-bronze" size={20} /> Detalhamento Técnico do Edital
              </h3>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-midnight text-xl font-bold p-1 cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-text-secondary leading-relaxed">
              <p>
                <strong>Processo:</strong> Execução Judicial em trâmite perante o Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ).
              </p>
              <p>
                <strong>Objeto:</strong> Apartamento residencial de frente, unidade nº 501 do Bloco A, situado na Rua Barão de Itapagipe nº 417, Tijuca, Rio de Janeiro/RJ, com área privativa de 50 metros quadrados (50 m²).
              </p>
              <p>
                <strong>Cartório de Imóveis:</strong> 11º Ofício de Registro de Imóveis da Capital (11º RGI/RJ), sob a Matrícula nº 3553.
              </p>
              <p>
                <strong>Inscrição Municipal (IPTU):</strong> 11509312 perante a Secretaria Municipal de Fazenda da Cidade do Rio de Janeiro.
              </p>
              <p>
                <strong>1º Leilão:</strong> 30/09/2026 às 14:00h | Lance Inicial: R$ 280.000,00 (100% do valor da avaliação judicial homologada).
              </p>
              <p>
                <strong>2º Leilão:</strong> 07/10/2026 às 14:00h | Lance Inicial: R$ 140.000,00 (50% do valor da avaliação judicial homologada — deságio de 50%).
              </p>
              <p>
                <strong>Condições de Pagamento:</strong> À vista no prazo legal de 24h ou parcelado nos termos do Art. 895 do Código de Processo Civil (mínimo de 25% à vista e saldo em até 30 prestações mensais corrigidas com garantia hipotecária sobre a matrícula).
              </p>
              <div className="p-4 bg-sand-light rounded-xl border border-sand-dark/30 mt-4 text-xs">
                <span className="font-bold text-midnight block mb-1">Nota Institucional:</span>
                O escritório Soares Martins Advogados não atua como leiloeiro nem comercializa cotas imobiliárias. Nossa prestação de serviços é estritamente de consultoria, assessoria jurídica preventiva, auditoria registral e representação processual perante os tribunais e cartórios imobiliários.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-dark/30 flex justify-end">
              <button
                onClick={() => setShowEditalModal(false)}
                className="bg-midnight hover:bg-midnight-light text-white text-xs uppercase font-bold tracking-wider py-2.5 px-6 rounded-xl transition-all cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TijucaBaraoDeItapagipe417AuctionPage;
