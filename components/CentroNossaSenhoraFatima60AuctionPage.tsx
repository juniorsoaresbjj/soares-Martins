import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Sun, Home, Shield
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1790082376850.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface CentroNossaSenhoraFatima60AuctionPageProps {
  onBack?: () => void;
}

const CentroNossaSenhoraFatima60AuctionPage: React.FC<CentroNossaSenhoraFatima60AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['centro-avenida-nossa-senhora-de-fatima-60-apto-501'];
  const item = (editalEntry && editalEntry[language]) ? editalEntry[language] : (editalEntry ? editalEntry.pt : {
    title: 'Leilão Judicial de Apartamento no Centro / Bairro de Fátima — Avenida Nossa Senhora de Fátima nº 60 — Apto 501',
    subtitle: 'Avenida Nossa Senhora de Fátima, nº 60, Apto 501 — Centro (Bairro de Fátima), Rio de Janeiro/RJ | 67 m² • Posição de Frente • 3 Quartos • Sala em Porcelanato com Janela de Alumínio • Cozinha com Bancada de Alumínio • Área de Serviço • Banheiro com Box Blindex • Bom Estado de Conservação • Edifício de 1950 • 2 Elevadores • Porteiro/Zelador • CFTV • 2º RGI Matrícula 05392 • IPTU: 0.580.436-4 • 1º Leilão: R$ 420.592,00 • 2º Leilão: R$ 210.296,00 (~R$ 3.138/m²)',
    address: 'Avenida Nossa Senhora de Fátima, nº 60, Apto 501 — Centro (Bairro de Fátima), Rio de Janeiro - RJ',
    p1Date: '26/10/2026 às 14:00h',
    p2Date: '28/10/2026 às 14:00h',
    process: 'Execução Judicial / TJRJ',
    court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
    iptu: '0.580.436-4',
    rgi: '2º Ofício de Registro de Imóveis (Matrícula nº 05392)',
    val: 'R$ 420.592,00',
    p2Val: 'R$ 210.296,00 (Lance inicial 2ª Praça)',
    description: 'Apartamento residencial de 67 m² de área edificada privativa no 5º pavimento (unidade 501), de frente para a rua principal em edifício tradicional de 1950 na aprazível Avenida Nossa Senhora de Fátima nº 60, Bairro de Fátima / Centro do Rio de Janeiro.',
    checklist: [],
    modal: { title: 'Resumo Estruturado do Edital', sections: [] },
    faqs: []
  });

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/avenida-nossa-senhora-de-fatima-60-apto-501/";

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
      "@type": "Product",
      "name": item.title,
      "image": buildingImage,
      "description": item.description,
      "category": "Real Estate / Judicial Auction / Centro Bairro de Fatima RJ",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "210296.00",
        "highPrice": "420592.00",
        "offerCount": "2",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-10-26T14:00:00-03:00"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": item.title,
      "description": item.description,
      "url": canonicalUrl,
      "datePosted": "2026-09-22",
      "validThrough": "2026-10-28T18:00:00-03:00",
      "image": buildingImage,
      "containedInPlace": {
        "@type": "Place",
        "name": "Edifício Residencial Av. Nossa Senhora de Fátima 60 — Bairro de Fátima / Centro",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Avenida Nossa Senhora de Fátima, 60, Apto 501",
          "addressLocality": "Centro, Bairro de Fátima, Rio de Janeiro",
          "addressRegion": "RJ",
          "postalCode": "20240-050",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -22.9158,
          "longitude": -43.1895
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Soares Martins Advogados — Assessoria Jurídica em Leilões Judiciais",
      "url": "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/",
      "logo": "https://soaresmartinsadv.com/logo.png",
      "telephone": "+55-21-97954-9241",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Visconde de Pirajá, 547, Sala 605",
        "addressLocality": "Ipanema, Rio de Janeiro",
        "addressRegion": "RJ",
        "postalCode": "22410-003",
        "addressCountry": "BR"
      },
      "areaServed": ["Rio de Janeiro", "Centro", "Bairro de Fátima", "Lapa", "Glória", "Zona Sul RJ"],
      "priceRange": "$$$"
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
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title={`${item.title} | Soares Martins Advogados`}
        description={`Assessoria jurídica em leilão judicial de apartamento de frente na Avenida Nossa Senhora de Fátima 60, Apto 501, Centro (Bairro de Fátima) - RJ. 67 m², 3 quartos, sala em porcelanato, 2 elevadores, porteiro e CFTV. 2º RGI Matrícula 05392.`}
        canonical={canonicalUrl}
        schema={pageSchema}
      />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <Link to="/" className="hover:text-bronze transition-colors">{tC.home}</Link>
          <ChevronRight size={12} className="text-bronze shrink-0" />
          <Link to="/servicos/" className="hover:text-bronze transition-colors">{tC.practiceAreas}</Link>
          <ChevronRight size={12} className="text-bronze shrink-0" />
          <Link to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" className="hover:text-bronze transition-colors">{tC.auctionsTitle}</Link>
          <ChevronRight size={12} className="text-bronze shrink-0" />
          <span className="text-white font-medium truncate max-w-xs sm:max-w-md">{item.title}</span>
        </nav>

        {/* Back Link */}
        <Link 
          to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" 
          className="inline-flex items-center gap-2 text-bronze text-xs uppercase tracking-widest font-bold hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={14} /> {tC.backToAuctions}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pb-12 sm:pb-16">
        <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          {/* Header Title and Tags */}
          <div className="mb-6 text-left">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-bronze/20 text-bronze text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-bronze/30">
                Residencial • Centro / Bairro de Fátima (RJ)
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-500/30 flex items-center gap-1">
                <Sun size={12} /> Posição de Frente • 67 m² • 3 Quartos
              </span>
              <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-500/30 flex items-center gap-1">
                <Building2 size={12} /> 2 Elevadores • Porteiro & CFTV
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-4 text-left">
              {item.title}
            </h1>
            <p className="text-bronze text-base sm:text-lg font-serif mb-6 text-left">
              {item.subtitle}
            </p>
          </div>

          {/* Grid Layout: Photo & Auction Info Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Foto do Edifício */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[16/10]">
                <img 
                  src={buildingImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin size={13} className="text-bronze" /> {item.address}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted italic text-left">
                {tC.imageIllustrative}
              </p>
            </div>

            {/* Box de Informações Financeiras e Praças */}
            <div className="lg:col-span-5 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-bronze/30 space-y-6 shadow-xl text-left">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">{tC.valuationLabel}</span>
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

                  {/* 2ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> {tC.p2Title}
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">{tC.p2Desc}</div>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20501%20na%20Avenida%20Nossa%20Senhora%20de%20F%C3%A1tima%2060%20no%20Centro%20/%20Bairro%20de%20F%C3%A1tima."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <PhoneCall size={15} /> {tC.btnWhatsApp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-7xl mx-auto px-6 pb-16 space-y-12">
        {/* Resumo do Imóvel — Ficha Técnica e Diligência */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Building2 size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              {tC.specsTitle} — Ficha Técnica e Diligência Registral
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {item.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <FileCheck size={18} /> Identificação Imobiliária & Registral
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Endereço Principal:</strong> Avenida Nossa Senhora de Fátima, nº 60, Apto 501 — Centro (Bairro de Fátima), Rio de Janeiro/RJ (CEP: 20240-050)</li>
                <li><strong className="text-white">Registro Imobiliário:</strong> Matrícula nº 05392 do Cartório do 2º Ofício de Registro de Imóveis do Rio de Janeiro (2º RGI/RJ)</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0.580.436-4</li>
                <li><strong className="text-white">Área Edificada Privativa:</strong> 67 metros quadrados (67 m²)</li>
                <li><strong className="text-white">Posição da Unidade:</strong> De frente para a rua principal, desfrutando de ótima claridade e ventilação</li>
                <li><strong className="text-white">Distribuição Interna:</strong> 3 quartos (quarto 1 com piso em tábua corrida e quartos 2 e 3 em cerâmica, todos com janelas de alumínio); sala arejada em porcelanato com janela de alumínio; corredor principal em porcelanato; corredor de entrada em cerâmica; cozinha com bancada de alumínio, azulejos em meia parede e cerâmica; área de serviço com azulejos em meia parede e cerâmica; e banheiro social com box em blindex e piso cerâmico</li>
                <li><strong className="text-white">Estado de Conservação:</strong> Em bom estado de conservação</li>
                <li><strong className="text-white">Características do Edifício:</strong> Construído em 1950 (idade 1950), servido por 2 elevadores (capacidade 4 pessoas cada), porteiro/zelador presencial (segunda a sexta das 9h às 18h e sábado das 9h às 13h) e circuito interno de TV (CFTV)</li>
                <li><strong className="text-white">Bairro / Região:</strong> Centro (Bairro de Fátima) — Rio de Janeiro/RJ</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução, Lances e Avaliação
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial / TJRJ</li>
                <li><strong className="text-white">Valor da Avaliação Oficial:</strong> R$ 420.592,00</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 420.592,00 (26/10/2026 às 14:00h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (50%):</strong> R$ 210.296,00 (28/10/2026 às 14:00h) — desconto de 50% (~R$ 3.138,75/m²)</li>
                <li><strong className="text-white">Foro / Juízo:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ) / Comarca da Capital</li>
                <li><strong className="text-white">Condições de Pagamento:</strong> Pagamento à vista em 24h ou parcelamento judicial previsto no Art. 895 do CPC (25% de entrada e saldo em até 30 vezes corrigidas, com garantia hipotecária)</li>
                <li><strong className="text-white">Sub-rogação Fiscal:</strong> IPTU e taxas anteriores sub-rogam-se no preço arrematado (Art. 130, parágrafo único, do CTN)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Caracterização da Região */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <ShieldCheck size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Caracterização do Bairro de Fátima e Potencial de Rentabilidade
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O Bairro de Fátima é um dos enclaves residenciais mais singulares e valorizados da região central do Rio de Janeiro. Delimitado ao redor da arborizada Praça Presidente Aguirre Cerda, o bairro preserva uma atmosfera bucólica, pacata e com perfil de vizinhança acolhedora, destacando-se pela tranquilidade, feira livre semanal, padarias tradicionais, farmácias, pequenos comércios e total conveniência de serviços.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Sua localização estratégica permite acesso rápido e a pé ou por transporte público ao polo corporativo e financeiro do Centro da cidade (Avenida Rio Branco, Praça XV, Carioca), além de estar a passos da Lapa histórica, Glória, Catete e dos principais eixos de mobilidade cariocas. Apartamentos de 3 quartos nesta localidade apresentam altíssima liquidez tanto para moradia própria quanto para locação residencial fixa ou por temporada para executivos e profissionais que atuam no Centro do Rio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
              <div className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Home size={18} /> Custo de M² Extraordinário de R$ 3.138/m²
              </div>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                No Bairro de Fátima e imediações centrais, apartamentos residenciais são negociados entre R$ 6.000,00 e R$ 8.500,00/m². Na 2ª praça a R$ 210.296,00, o metro quadrado atinge impressionantes R$ 3.138,75/m², estabelecendo uma margem de segurança patrimonial imediata superior a 50% sobre o valor de avaliação e mais de 60% sobre a média de mercado.
              </p>
            </div>

            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-2">
              <div className="text-emerald-400 font-serif font-bold text-base flex items-center gap-2">
                <Sun size={18} /> Posição de Frente e 3 Quartos em Bom Estado
              </div>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                A tipologia de frente com 67 m² bem aproveitados conta com sala em porcelanato, 3 quartos arejados, cozinha com bancada de alumínio, área de serviço individualizada e banheiro com blindex, dispensando reformas estruturais vultosas e permitindo rápida monetização.
              </p>
            </div>
          </div>
        </article>

        {/* Como Participar e Formas de Pagamento (Art. 895 CPC) */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Gavel size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Como Participar do Leilão e Formas de Pagamento Previstas no CPC
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A participação em leilão judicial imobiliário no Estado do Rio de Janeiro exige cadastro prévio e habilitação técnica perante o leiloeiro oficial designado pelo Juízo do TJRJ. A legislação processual civil admite duas modalidades de aquisição:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-white font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} className="text-bronze" /> Pagamento À Vista
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                O arrematante efetua o depósito judicial da integralidade do lance no prazo improrrogável de 24 (vinte e quatro) horas após o encerramento do pregão, além da comissão legal de 5% devida ao leiloeiro público. O pagamento à vista tem preferência legal sobre propostas parceladas de igual valor.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-white font-serif font-bold text-base flex items-center gap-2">
                <Calendar size={18} className="text-emerald-400" /> Parcelamento Judicial (Art. 895 do CPC)
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                O interessado pode formular proposta escrita protocolada antes do início do leilão para pagamento parcelado: entrada mínima de 25% (R$ 52.574,00 na 2ª praça) e o saldo em até 30 parcelas mensais sucessivas, corrigidas pela tabela da Corregedoria do TJRJ e garantidas por hipoteca judicial averbada na própria Matrícula 05392 do 2º RGI.
              </p>
            </div>
          </div>
        </article>

        {/* Importância da Assessoria Jurídica e Fases do Acompanhamento */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-8">
          <div className="flex items-center gap-3 text-bronze">
            <Scale size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Importância da Assessoria Jurídica Especializada e Fases do Acompanhamento
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A assessoria jurídica personalizada da Soares Martins Advogados blinda o investidor contra riscos ocultos, assegurando auditoria prévia da Matrícula 05392 do Cartório do 2º Ofício de Registro de Imóveis do Rio de Janeiro, exame minucioso dos débitos fiscais sob o IPTU nº 0.580.436-4 e verificação rigorosa da higidez dos autos da Execução Judicial perante o Tribunal de Justiça do Rio de Janeiro (TJRJ).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 1. Due Diligence
              </div>
              <p className="text-xs text-text-muted">
                Auditoria integral da matrícula nº 05392 (2º RGI/RJ), certidões cíveis e fiscais do executado e regularidade das intimações.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 2. Estratégia de Lance
              </div>
              <p className="text-xs text-text-muted">
                Habilitação legal no leiloeiro e elaboração de proposta formal nos moldes do Artigo 895 do CPC ou lance estratégico em 2ª praça.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 3. Homologação & Guia
              </div>
              <p className="text-xs text-text-muted">
                Acompanhamento da assinatura do Auto de Arrematação, recolhimento de custas processuais e emissão das guias judiciais de depósito.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 4. Carta & Posse
              </div>
              <p className="text-xs text-text-muted">
                Expedição célere da Carta de Arrematação, cancelamento de ônus no 2º RGI e cumprimento do Mandado Judicial de Imissão na Posse.
              </p>
            </div>
          </div>
        </article>

        {/* Conteúdos e Serviços Relacionados */}
        <section className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <h3 className="text-white font-serif text-xl sm:text-2xl font-bold">{tC.relatedTitle}</h3>
              <p className="text-xs sm:text-sm text-text-muted">
                Conheça nossos artigos, guias jurídicos e serviços especializados em leilões imobiliários no Rio de Janeiro.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link 
                to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-bronze hover:text-white border border-bronze/30 hover:border-white px-4 py-3 rounded-xl transition-all"
              >
                {tC.auctionsTitle} <ChevronRight size={14} />
              </Link>
              <Link 
                to="/servicos/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white border border-white/10 hover:border-white px-4 py-3 rounded-xl transition-all"
              >
                {tC.practiceAreas} <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Como Analisar um Imóvel em Leilão Antes de Dar um Lance',
                desc: 'Guia prático com checklist de análise de edital, vistoria, ônus e viabilidade jurídica.',
                path: '/blog/como-analisar-imovel-em-leilao-antes-de-dar-um-lance-guia-completo/'
              },
              {
                title: 'Quais Dívidas Acompanham o Imóvel em Leilão?',
                desc: 'Entenda a responsabilidade por dívidas de condomínio, IPTU e penhoras anteriores à arrematação.',
                path: '/blog/quais-dividas-acompanham-imovel-adquirido-em-leilao/'
              },
              {
                title: 'Parcelamento Judicial em Leilões de Imóveis (Art. 895 CPC)',
                desc: 'Saiba como adquirir imóveis de leilão com 25% de entrada e saldo em até 30 parcelas mensais.',
                path: '/blog/apartamento-leilao-debito-condominial/'
              },
              {
                title: 'É Possível Visitar um Imóvel de Leilão Antes de Dar o Lance?',
                desc: 'Saiba como funciona a visitação em leilões judiciais e extrajudiciais e cuidados essenciais.',
                path: '/blog/e-possivel-visitar-imovel-de-leilao-antes-de-dar-o-lance/'
              },
              {
                title: 'Guia de Compra e Venda Segura de Imóveis no RJ',
                desc: 'Passo a passo jurídico para aquisições imobiliárias seguras no Rio de Janeiro.',
                path: '/blog/guia-compra-venda-segura-imoveis-rj/'
              },
              {
                title: 'Due Diligence Imobiliária e Auditoria Jurídica',
                desc: 'Auditoria completa de certidões, ônus processuais e verificação de riscos contratuais.',
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20501%20na%20Avenida%20Nossa%20Senhora%20de%20F%C3%A1tima%2060%20no%20Centro%20/%20Bairro%20de%20F%C3%A1tima."
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
                <div className="text-white font-semibold">Localização:</div>
                <div>{item.address}</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20da%20Avenida%20Nossa%20Senhora%20de%20F%C3%A1tima%2060%20no%20Centro."
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

export default CentroNossaSenhoraFatima60AuctionPage;
