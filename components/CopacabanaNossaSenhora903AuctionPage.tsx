import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1790643277271.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface CopacabanaNossaSenhora903AuctionPageProps {
  onBack?: () => void;
}

const CopacabanaNossaSenhora903AuctionPage: React.FC<CopacabanaNossaSenhora903AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['copacabana-nossa-senhora-copacabana-903'] || editaisData['copacabana-atlantica-3806'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-nossa-senhora-de-copacabana-903-apto-301/";

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
      "image": buildingImage,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "600000.00",
        "highPrice": "1200000.00",
        "offerCount": "2",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": item.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
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
        description={item.subtitle}
        image={buildingImage}
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
          <span className="text-white font-medium">{item.title}</span>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/10 border border-bronze/30 text-bronze text-xs font-semibold uppercase tracking-wider mb-6">
            <Gavel size={14} /> {tC.badgeTag}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-4 text-left">
            {item.title}
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left">
            {item.subtitle}
          </p>

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
                    <div className="text-sm font-semibold text-emerald-300 mb-2">{item.p2Val}</div>
                    <div className="text-xs text-text-muted mb-1">{tC.minBidLabel}</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 600.000,00</div>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20301%20na%20Av.%20Nossa%20Senhora%20de%20Copacabana%20903%20em%20Copacabana%20-%20RJ."
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
              {tC.specsTitle} — Ficha Técnica e Diligência
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {item.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <FileCheck size={18} /> Identificação Imobiliária
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Endereço Principal:</strong> Avenida Nossa Senhora de Copacabana, nº 903 - Apartamento 301 — Copacabana, Rio de Janeiro/RJ</li>
                <li><strong className="text-white">Edifício / Condomínio:</strong> Condomínio denominado Edifício Dona Emília (composto de 22 apartamentos)</li>
                <li><strong className="text-white">Registro Imobiliário:</strong> Matrícula nº 51.505 do Cartório do 5º Ofício de Registro de Imóveis do Rio de Janeiro (5º RGI/RJ)</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0.666.777-8</li>
                <li><strong className="text-white">Área Edificada / Útil:</strong> 117 metros quadrados (117 m²)</li>
                <li><strong className="text-white">Pavimento / Unidade:</strong> 3º Pavimento — Apartamento 301</li>
                <li><strong className="text-white">Garagem:</strong> Sem vaga de garagem vinculada</li>
                <li><strong className="text-white">Estrutura Predial:</strong> Portaria 24 horas, câmeras de vigilância e 2 elevadores (social e serviço)</li>
                <li><strong className="text-white">Ano de Construção do Edifício:</strong> 1957 (utilização residencial sólida)</li>
                <li><strong className="text-white">Bairro / Região:</strong> Copacabana (Posto 4, próximo a Constante Ramos e Santa Clara) — Rio de Janeiro/RJ</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução e Valoração
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial / TJRJ</li>
                <li><strong className="text-white">Valor da Avaliação Oficial:</strong> R$ 1.200.000,00</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 1.200.000,00 (19/10/2026 às 12:00h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (50%):</strong> R$ 600.000,00 (22/10/2026 às 12:00h) — desconto de 50% do valor da avaliação</li>
                <li><strong className="text-white">Custo por Metro Quadrado na 2ª Praça:</strong> Apenas ~R$ 5.128,20/m²</li>
                <li><strong className="text-white">Foro / Juízo:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ) / Comarca da Capital</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Caracterização da Região */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <ShieldCheck size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado e Potencial de Valorização na Avenida Nossa Senhora de Copacabana
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Avenida Nossa Senhora de Copacabana é a artéria vital do bairro, concentrando ampla oferta de serviços, comércio de alto padrão, supermercados, academias e opções gastronômicas conceituadas. Na altura do número 903 (Posto 4), o condomínio está situado a apenas duas quadras da praia da Avenida Atlântica e a curta distância das estações de metrô Cantagalo e Siqueira Campos.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O Edifício Dona Emília, edificado em 1957, preserva a exclusividade de um prédio de apenas 22 unidades residenciais, equipado com portaria 24 horas presencial, controle de câmeras e elevadores social e de serviço independentes. A generosa planta privativa de 117 m² no 3º andar possibilita projetos de retrofit e revitalização com retorno substancial de capital, tanto para locação convencional ou por temporada, quanto para residência própria.
          </p>

          <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
            <div className="text-bronze font-serif font-bold text-base">
              Oportunidade Excepcional: Desconto de 50% na 2ª Praça (~R$ 5.128,20/m²)
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              O preço médio do metro quadrado residencial em Copacabana situa-se historicamente entre R$ 11.000,00 e R$ 15.000,00. Adquirir um apartamento de 117 m² pelo lance inicial de R$ 600.000,00 na 2ª praça representa uma arrematação a ~R$ 5.128,20/m², proporcionando margem de lucro e segurança patrimonial inigualáveis na Zona Sul do Rio de Janeiro.
            </p>
          </div>
        </article>

        {/* Como Participar do Leilão Judicial */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Gavel size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Como Participar do Leilão Judicial do Imóvel
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A participação em leilões judiciais do Tribunal de Justiça do Rio de Janeiro é aberta a investidores e compradores em geral, exigindo o cumprimento estrito dos requisitos editalícios e das normas do Código de Processo Civil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="text-bronze font-bold text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-bronze/20 text-bronze flex items-center justify-center text-xs font-bold">1</span>
                Habilitação Prévia
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Cadastro e envio tempestivo de documentos no portal do leiloeiro oficial credenciado junto ao TJRJ, com antecedência de até 48 horas antes da abertura do 1º Leilão (19/10/2026) ou 2º Leilão (22/10/2026).
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="text-bronze font-bold text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-bronze/20 text-bronze flex items-center justify-center text-xs font-bold">2</span>
                Lances e Parcelamento Judicial
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Envio de lances eletrônicos no pregão ou apresentação prévia de proposta de aquisição parcelada com respaldo no art. 895 do CPC (sinal mínimo de 25% e saldo em até 30 prestações mensais corrigidas).
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="text-bronze font-bold text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-bronze/20 text-bronze flex items-center justify-center text-xs font-bold">3</span>
                Homologação e Regularização
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Lavratura e assinatura do Auto de Arrematação, recolhimento das guias judiciais e ITBI, expedição da Carta de Arrematação para registro no 5º RGI e mandado de imissão na posse.
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
            A auditoria jurídica em leilões judiciais blinda o investidor contra riscos ocultos, como impugnações pendentes, débitos fiscais de IPTU anteriores e eventuais passivos condominiais. O escritório Soares Martins Advogados analisa a Matrícula nº 51.505 do 5º RGI, assegurando a correta sub-rogação sobre o preço nos termos do art. 130 do Código Tributário Nacional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 1. Due Diligence
              </div>
              <p className="text-xs text-text-muted">
                Auditoria integral da Matrícula 51.505 (5º RGI), certidões cíveis e fiscais dos executados, edital e processo no TJRJ.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 2. Estratégia de Lance
              </div>
              <p className="text-xs text-text-muted">
                Definição do teto financeiro seguro, habilitação no leiloeiro e formulação de propostas de parcelamento conforme art. 895 CPC.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 3. Homologação & Guia
              </div>
              <p className="text-xs text-text-muted">
                Conferência do Auto de Arrematação, cálculo das custas e comissão, acompanhamento do prazo de embargos e quitação perante o juízo.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 4. Carta & Imissão
              </div>
              <p className="text-xs text-text-muted">
                Expedição célere da Carta de Arrematação, pagamento do ITBI, averbação imobiliária e efetiva imissão judicial na posse do imóvel.
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
                title: 'É Possível Visitar um Imóvel de Leilão Antes de Dar o Lance?',
                desc: 'Saiba como funciona a visitação em leilões judiciais e extrajudiciais e cuidados essenciais.',
                path: '/blog/e-possivel-visitar-imovel-de-leilao-antes-de-dar-o-lance/'
              },
              {
                title: 'Apartamento em Leilão por Débito de Condomínio',
                desc: 'Entenda como funciona o leilão judicial de dívida de cota condominial e como se resguardar.',
                path: '/blog/apartamento-leilao-debito-condominial/'
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20301%20na%20Av.%20Nossa%20Senhora%20de%20Copacabana%20903%20em%20Copacabana."
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
                <div>2ª Praça: {item.p2Date} (R$ 600.000,00 - 50% da avaliação)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Registro Imobiliário:</div>
                <div>Matrícula nº 51.505 do 5º Ofício de Registro de Imóveis do Rio de Janeiro</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Inscrição Municipal (IPTU):</div>
                <div>0.666.777-8</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Metragem e Condomínio:</div>
                <div>117 m² de área útil privativa • 3º Pavimento • Sem vaga de garagem • Condomínio Edifício Dona Emília (22 apartamentos, portaria 24h, 2 elevadores, CFTV)</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20da%20Av.%20Nossa%20Senhora%20de%20Copacabana%20903%20em%20Copacabana."
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

export default CopacabanaNossaSenhora903AuctionPage;
