import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Store, Sparkles
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1787169272910.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface UrcaPortugal584AuctionPageProps {
  onBack?: () => void;
}

const UrcaPortugal584AuctionPage: React.FC<UrcaPortugal584AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['urca-portugal-584-apto-501'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/avenida-portugal-584-apto-501/";

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
        "lowPrice": "545610.46",
        "highPrice": "1091220.92",
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20501%20no%20Edif%C3%ADcio%20Urca-Mar%20na%20Avenida%20Portugal%20584%20na%20Urca."
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
                <li><strong className="text-white">Endereço Principal:</strong> Avenida Portugal, nº 584, Apto 501 (Edifício Urca-Mar) — Urca, Rio de Janeiro/RJ</li>
                <li><strong className="text-white">Registro Imobiliário:</strong> Matrícula nº 40.262 do Cartório do 3º Ofício de Registro de Imóveis do Rio de Janeiro (3º RGI/RJ)</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0650419-5</li>
                <li><strong className="text-white">Área Privativa / Edificada:</strong> 68 metros quadrados (68 m²)</li>
                <li><strong className="text-white">Pavimento:</strong> Último pavimento de apartamentos (cobertura com grande terraço frontal descoberto)</li>
                <li><strong className="text-white">Composição Interna:</strong> Sala de estar, cozinha, 01 (uma) suíte, 01 (um) banheiro social, área de serviço e grande terraço frontal descoberto</li>
                <li><strong className="text-white">Vaga de Garagem:</strong> Unidade sem vaga de garagem vinculada</li>
                <li><strong className="text-white">Vista Panorâmica:</strong> Vista frontal indevassável para a Enseada de Botafogo, Baía de Guanabara e Pão de Açúcar</li>
                <li><strong className="text-white">Bairro / Zona:</strong> Urca (Zona Sul) — Rio de Janeiro/RJ</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução e Valoração
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial / TJRJ</li>
                <li><strong className="text-white">Valor da Avaliação Oficial:</strong> R$ 1.091.220,92</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 1.091.220,92 (25/08/2026 às 13:00h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (50%):</strong> R$ 545.610,46 (27/08/2026 às 13:00h) — desconto de 50% (R$ 545.610,46 abaixo da avaliação)</li>
                <li><strong className="text-white">Foro / Juízo:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ) / Comarca da Capital</li>
                <li><strong className="text-white">Possibilidade de Parcelamento:</strong> Proposta com 25% de entrada + até 30 parcelas corrigidas (Art. 895 do CPC)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Caracterização da Região */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Store size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado e Exclusividade Residencial na Urca
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Urca é internacionalmente reconhecida como o bairro mais seguro, nobre e bucólico da cidade do Rio de Janeiro. Cercada pelas águas da Baía de Guanabara e aos pés do Pão de Açúcar e do Morro da Urca, a região possui rigorosas restrições de zoneamento urbano que preservam o gabarito baixo dos edifícios e impedem novos adensamentos imobiliários, tornando qualquer imóvel no bairro uma raridade de altíssima liquidez e valorização contínua.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Avenida Portugal é a principal orla residencial do bairro, estendendo-se à beira-mar e proporcionando uma vista de cartão-postal para a Enseada de Botafogo, o Cristo Redentor e o skyline da Zona Sul. É um endereço com tráfego calmo e estritamente residencial, onde moradores desfrutam de caminhadas à beira da mureta, proximidade à Praia Vermelha, Pista Cláudio Coutinho e ao Iate Clube do Rio de Janeiro.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O Condomínio do Edifício Urca-Mar situa-se no número 584 da Avenida Portugal. A unidade 501 destaca-se por estar no último pavimento residencial, funcionando como um autêntico apartamento tipo cobertura com grande terraço frontal descoberto. Essa área externa privativa permite a criação de um espaço de lazer ao ar livre exclusivo de frente para o mar, diferencial quase inexistente em imóveis com essa metragem na Zona Sul.
          </p>

          <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
            <div className="text-bronze font-serif font-bold text-base flex items-center gap-2">
              <Sparkles size={18} /> Oportunidade com 50% de Desconto na 2ª Praça (Economia de R$ 545.610,46)
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Com avaliação judicial homologada em R$ 1.091.220,92, a abertura da 2ª praça por R$ 545.610,46 (50% da avaliação) representa a chance única de arrematar uma cobertura de 68 m² com terraço frontal na orla da Urca por um valor por metro quadrado significativamente abaixo da média do mercado imobiliário da Zona Sul carioca.
            </p>
          </div>
        </article>

        {/* Como Participar e Estratégia de Lance */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Gavel size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Como Participar do Leilão e Estruturar Propostas Parceladas
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A arrematação em hasta pública eletrônica ocorre via portal do leiloeiro oficial designado pelo Poder Judiciário do Estado do Rio de Janeiro. Para participar, o interessado deve efetuar seu cadastramento prévio na plataforma do leiloeiro com antecedência mínima de 24 a 48 horas úteis, submetendo os documentos comprobatórios exigidos no edital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <CheckCircle2 size={18} /> Arrematação à Vista
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Pagamento do valor integral do lance arrematado acrescido da comissão de 5% do leiloeiro oficial, realizado via Guia de Depósito Judicial vinculado aos autos do processo perante o TJRJ no prazo estipulado no provimento e edital.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Scale size={18} /> Proposta Parcelada (Art. 895 do CPC)
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                O interessado pode formular proposta escrita para aquisição parcelada: entrada de no mínimo 25% à vista e o saldo remanescente em até 30 (trinta) parcelas mensais e sucessivas corrigidas, com garantia hipotecária gravada na própria matrícula nº 40.262 do 3º RGI/RJ.
              </p>
            </div>
          </div>
        </article>

        {/* Importância da Assessoria Jurídica e Fases do Acompanhamento */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <ShieldCheck size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Importância da Assessoria Jurídica Especializada e Fases do Processo
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A aquisição imobiliária por meio de leilão judicial oferece retorno financeiro diferenciado, mas requer auditoria jurídica preventiva rigorosa para afastar nulidades processuais, pendências fiscais ocultas ou discussões possessórias prolongadas. Nosso escritório conduz todas as etapas com total respaldo técnico e conformidade com os provimentos do TJRJ e da Corregedoria Geral da Justiça.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 1</div>
              <h3 className="text-white font-bold text-sm">Due Diligence Prévia</h3>
              <p className="text-xs text-text-muted">
                Auditoria na Matrícula nº 40.262 (3º RGI), certidões fiscais do IPTU nº 0650419-5, débitos de condomínio e regularidade das intimações judiciais.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 2</div>
              <h3 className="text-white font-bold text-sm">Estratégia e Habilitação</h3>
              <p className="text-xs text-text-muted">
                Elaboração da estratégia de lances em 1ª ou 2ª praça, redação de propostas nos termos do Art. 895 do CPC e cadastramento seguro no leiloeiro.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 3</div>
              <h3 className="text-white font-bold text-sm">Homologação e ITBI</h3>
              <p className="text-xs text-text-muted">
                Acompanhamento da assinatura do Auto de Arrematação, expedição da Carta de Arrematação, guias de ITBI e registro sem ônus no 3º RGI.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 4</div>
              <h3 className="text-white font-bold text-sm">Imissão na Posse</h3>
              <p className="text-xs text-text-muted">
                Requerimento judicial célere do Mandado de Imissão na Posse, acompanhamento da diligência com Oficial de Justiça e entrega das chaves ao arrematante.
              </p>
            </div>
          </div>
        </article>

        {/* 4 Pilares da Auditoria */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/10 border border-bronze/30 text-bronze text-xs font-semibold uppercase tracking-wider mb-3">
              {tC.pillarsTag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold mb-2">
              {tC.pillarsTitle}
            </h2>
            <p className="text-text-muted text-sm sm:text-base">
              {tC.pillarsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {item.checklist.map((c, i) => (
              <div key={i} className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-serif font-bold text-base">{c.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-bronze/20 text-bronze">
                    {c.risk}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Conteúdos e Serviços Relacionados */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <FileText size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Artigos de Referência e Serviços Relacionados
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Consulte nossos artigos jurídicos técnicos e áreas de atuação para aprofundar seu conhecimento sobre arrematação, diligência registral e tributária em leilões judiciais:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <Link 
              to="/blog/leilao-judicial-imoveis-guia-completo/" 
              className="p-6 rounded-2xl bg-midnight/60 border border-white/10 hover:border-bronze/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="text-xs text-bronze uppercase tracking-widest font-bold">Artigo Técnico</div>
                <h3 className="text-white font-bold text-base group-hover:text-bronze transition-colors">
                  Guia Completo de Leilões Judiciais de Imóveis no RJ
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Entenda o passo a passo da arrematação, editais, 1ª e 2ª praça, riscos jurídicos e cancelamento de hipotecas.
                </p>
              </div>
              <div className="mt-4 text-xs text-bronze font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ler artigo <ChevronRight size={14} />
              </div>
            </Link>

            <Link 
              to="/blog/apartamento-leilao-debito-condominial/" 
              className="p-6 rounded-2xl bg-midnight/60 border border-white/10 hover:border-bronze/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="text-xs text-bronze uppercase tracking-widest font-bold">Artigo Técnico</div>
                <h3 className="text-white font-bold text-base group-hover:text-bronze transition-colors">
                  Apartamento em Leilão por Dívida de Condomínio
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Como funciona a penhora da unidade por débitos propter rem, sub-rogação no preço e precedentes do STJ.
                </p>
              </div>
              <div className="mt-4 text-xs text-bronze font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ler artigo <ChevronRight size={14} />
              </div>
            </Link>

            <Link 
              to="/blog/direito-imobiliario-due-diligence-compra/" 
              className="p-6 rounded-2xl bg-midnight/60 border border-white/10 hover:border-bronze/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="text-xs text-bronze uppercase tracking-widest font-bold">Artigo Técnico</div>
                <h3 className="text-white font-bold text-base group-hover:text-bronze transition-colors">
                  Due Diligence Imobiliária e Auditoria Registral
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  A importância da análise minuciosa de certidões cíveis, fiscais e trabalhistas para blindar o adquirente.
                </p>
              </div>
              <div className="mt-4 text-xs text-bronze font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ler artigo <ChevronRight size={14} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <Link 
              to="/direito-imobiliario/" 
              className="p-4 rounded-xl bg-midnight/40 border border-white/10 hover:border-bronze/30 transition-all flex items-center justify-between"
            >
              <div>
                <h4 className="text-sm font-bold text-white">Direito Imobiliário e Negócios</h4>
                <p className="text-xs text-text-muted">Assessoria em aquisições e regularização patrimonial no RJ</p>
              </div>
              <ExternalLink size={16} className="text-bronze shrink-0" />
            </Link>

            <Link 
              to="/direito-condominial/" 
              className="p-4 rounded-xl bg-midnight/40 border border-white/10 hover:border-bronze/30 transition-all flex items-center justify-between"
            >
              <div>
                <h4 className="text-sm font-bold text-white">Direito Condominial Estratégico</h4>
                <p className="text-xs text-text-muted">Auditoria de passivos e convenções condominiais</p>
              </div>
              <ExternalLink size={16} className="text-bronze shrink-0" />
            </Link>
          </div>
        </article>

        {/* FAQ Específica do Imóvel */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <HelpCircle size={24} className="shrink-0" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
                {tC.faqTitle}
              </h2>
              <p className="text-text-muted text-xs sm:text-sm mt-1">
                {tC.faqSub}
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {item.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-midnight/60 rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-bronze transition-colors cursor-pointer"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-serif font-bold text-base text-white">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp size={18} className="text-bronze shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-text-muted shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>

        {/* CTA Sóbrio em Conformidade com a OAB */}
        <article className="bg-gradient-to-br from-midnight-light to-midnight rounded-3xl p-8 sm:p-12 border border-bronze/30 text-center space-y-6 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/10 border border-bronze/30 text-bronze text-xs font-semibold uppercase tracking-wider">
              <Scale size={14} /> Atendimento Jurídico Especializado
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-white font-bold">
              {tC.ctaTitle}
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              {tC.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20501%20no%20Edif%C3%ADcio%20Urca-Mar%20na%20Avenida%20Portugal%20584%20na%20Urca."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-bronze text-midnight font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <PhoneCall size={16} /> {tC.ctaWA}
              </a>
              <a 
                href="mailto:Juniorsadv@hotmail.com?subject=Consulta%20Juridica%20-%20Leilao%20Urca%20Av%20Portugal%20584%20Apto%20501"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <FileText size={16} /> {tC.ctaEmail}
              </a>
            </div>
            <p className="text-[11px] text-text-muted pt-2">
              Sede em Ipanema: Rua Visconde de Pirajá, 414 - Sala 718, Rio de Janeiro/RJ. Atuação ética e pautada no Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </article>
      </section>

      {/* Modal de Resumo Didático do Edital */}
      {showEditalModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowEditalModal(false)}
        >
          <div 
            className="bg-midnight-light border border-bronze/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-bronze">
                <FileText size={20} />
                <h3 className="font-serif font-bold text-lg text-white">
                  {item.modal.title}
                </h3>
              </div>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-white text-xs uppercase tracking-widest font-bold p-1 cursor-pointer"
              >
                {tC.modalClose}
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-text-muted">
              {item.modal.sections.map((sec, sIdx) => (
                <div key={sIdx} className="bg-midnight/80 p-4 rounded-xl border border-white/5 space-y-1.5">
                  <h4 className="font-bold text-white text-sm">{sec.title}</h4>
                  <p className="leading-relaxed">{sec.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button 
                onClick={() => setShowEditalModal(false)}
                className="px-6 py-2.5 bg-bronze text-midnight font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all cursor-pointer"
              >
                {tC.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrcaPortugal584AuctionPage;
