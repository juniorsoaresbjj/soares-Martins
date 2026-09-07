import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Store, Sparkles, Car
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1788793297061.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface HumaitaDaviCampista296AuctionPageProps {
  onBack?: () => void;
}

const HumaitaDaviCampista296AuctionPage: React.FC<HumaitaDaviCampista296AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['humaita-davi-campista-296-apto-603'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/humaita/apartamento/rua-davi-campista-296-apto-603/";

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
        "lowPrice": "973098.80",
        "highPrice": "1946197.60",
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20603%20na%20Rua%20Davi%20Campista%20296%20no%20Humait%C3%A1."
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
        {/* Resumo do Imóvel — Ficha Técnica e Caracterização */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Building2 size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              {tC.specsTitle} — Ficha Técnica e Caracterização Detalhada
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {item.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <FileCheck size={18} /> Identificação Imobiliária e Edificação
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Endereço Principal:</strong> Rua Davi Campista, nº 296, Apartamento 603 — Humaitá, Rio de Janeiro/RJ</li>
                <li><strong className="text-white">Área Edificada:</strong> 135 metros quadrados (135 m²) de área privativa</li>
                <li><strong className="text-white">Distribuição Interna:</strong> Sala ampla com varanda integrada, 3 quartos (sendo um deles com pequena varanda privativa), 1 banheiro social antigo, cozinha, área de serviço e dependência completa de serviço (quarto de serviço e banheiro auxiliar)</li>
                <li><strong className="text-white">Acabamentos Nobres:</strong> Área social do apartamento revestida com clássico piso em taco de madeira de lei</li>
                <li><strong className="text-white">Vaga de Garagem:</strong> Imóvel com direito a 1 vaga de garagem garantida na convenção/escritura</li>
                <li><strong className="text-white">Estado de Conservação:</strong> O laudo de avaliação judicial aponta necessidade de obras de reforma geral e modernização das áreas molhadas e revestimentos — oportunidade típica de retrofit de alto valor agregado</li>
                <li><strong className="text-white">Estrutura Predial:</strong> Edifício residencial com portaria presencial 24 horas, estrutura de lazer para moradores, controle de acesso e monitoramento integral das partes comuns</li>
                <li><strong className="text-white">Registro Imobiliário:</strong> Devidamente registrado, dimensionado e caracterizado perante o Cartório do 2º Ofício de Registro de Imóveis do Rio de Janeiro (2º RGI/RJ)</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0520187-6</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução e Parâmetros Judiciais
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial perante o Tribunal de Justiça do RJ (TJRJ)</li>
                <li><strong className="text-white">Comarca / Juízo:</strong> Comarca da Capital / Tribunal de Justiça do Estado do Rio de Janeiro</li>
                <li><strong className="text-white">Valor da Avaliação Oficial:</strong> R$ 1.946.197,60</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 1.946.197,60 (21/09/2026 às 12:00h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (50%):</strong> R$ 973.098,80 (24/09/2026 às 12:00h) — desconto de R$ 973.098,80</li>
                <li><strong className="text-white">Deságio na 2ª Praça:</strong> 50% de abatimento sobre a valoração pericial judicial homologada</li>
                <li><strong className="text-white">Condições de Pagamento:</strong> À vista mediante guia judicial ou proposta de parcelamento judicial (Art. 895 do CPC: 25% de entrada e até 30 meses)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Oportunidade de Retrofit no Humaitá */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Store size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado: Exclusividade no Humaitá e Potencial de Valorização por Retrofit
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O Humaitá é um dos bairros residenciais mais valorizados e charmosos da Zona Sul do Rio de Janeiro, reconhecido por sua atmosfera arborizada, segurança e proximidade imediata com a Lagoa Rodrigo de Freitas, Botafogo, o Jardim Botânico e o Parque Lage. A Rua Davi Campista destaca-se pela tranquilidade residencial e fácil mobilidade para os principais polos corporativos e gastronômicos da cidade.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Apartamentos de 3 quartos com varanda e vaga de garagem reformados no Humaitá são negociados no mercado tradicional entre <strong>R$ 13.000,00 e R$ 16.000,00 por metro quadrado</strong>. Na 2ª Praça deste leilão judicial, com o lance de abertura fixado em <strong>R$ 973.098,80</strong> para uma metragem de 135 m², o custo de aquisição atinge aproximadamente <strong>R$ 7.200,00/m²</strong>.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Com um desconto nominal de quase <strong>R$ 1 milhão (R$ 973.098,80)</strong> em relação à avaliação judicial pericial, o arrematante obtém margem financeira mais que suficiente para restaurar os tacos originais de madeira, modernizar banheiros, cozinha e dependências, criando uma unidade residencial de alto padrão contemporâneo com excelente valor de revenda ou atrativa rentabilidade locatícia.
          </p>

          <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
            <div className="text-bronze font-serif font-bold text-base flex items-center gap-2">
              <Sparkles size={18} /> Custo de Aquisição de ~R$ 7.200/m² no Humaitá
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              O deságio de 50% na 2ª praça confere expressiva blindagem financeira ao investidor, permitindo absorver custos de reforma integral mantendo um retorno patrimonial significativamente superior à média das operações imobiliárias convencionais na Zona Sul.
            </p>
          </div>
        </article>

        {/* Como Participar e Modalidades de Pagamento */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Gavel size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Como Participar do Leilão e Modalidades de Pagamento
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O certame judicial será realizado de forma eletrônica pelo leiloeiro oficial credenciado perante o Tribunal de Justiça do Estado do Rio de Janeiro. A habilitação prévia na plataforma do leiloeiro deve ser efetuada com antecedência mínima de 48 a 72 horas para validação documental.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <CheckCircle2 size={18} /> Arrematação à Vista
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Pagamento do lance vencedor integralmente mediante depósito judicial vinculado aos autos do processo no TJRJ, acrescido de 5% de comissão do leiloeiro público e custas de expedição da Carta de Arrematação.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Scale size={18} /> Proposta de Parcelamento Judicial (Art. 895 do CPC)
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Possibilidade de protocolar proposta escrita antes do encerramento da praça, com entrada mínima de 25% à vista e saldo parcelado em até 30 (trinta) prestações mensais corrigidas por índice oficial da Justiça, com hipoteca judicial averbada na matrícula do 2º RGI.
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
            Arrematar imóveis em leilão judicial no Rio de Janeiro requer análise prévia aprofundada dos autos processuais, verificação da regularidade das intimações das partes e confrontação minuciosa de débitos propter rem (condomínio e IPTU) para garantir que a aquisição seja segura e juridicamente perfeita.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 1</div>
              <h3 className="text-white font-bold text-sm">Due Diligence Prévia</h3>
              <p className="text-xs text-text-muted">
                Auditoria na Matrícula imobiliária no 2º RGI, certidões de IPTU nº 0520187-6, verificação de passivos de condomínio e conformidade do edital de leilão.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 2</div>
              <h3 className="text-white font-bold text-sm">Estratégia e Lances</h3>
              <p className="text-xs text-text-muted">
                Habilitação formal do investidor, formulação de propostas de parcelamento judicial (Art. 895 CPC) e estratégia de disputa durante o certame oficial.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 3</div>
              <h3 className="text-white font-bold text-sm">Homologação e ITBI</h3>
              <p className="text-xs text-text-muted">
                Acompanhamento da assinatura do auto de arrematação, guia de ITBI perante a Prefeitura do Rio, expedição da Carta de Arrematação e baixa de constrições no 2º RGI.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 4</div>
              <h3 className="text-white font-bold text-sm">Imissão na Posse</h3>
              <p className="text-xs text-text-muted">
                Atuação célere junto ao Juízo para expedição e cumprimento do Mandado de Imissão na Posse com Oficial de Justiça, troca de fechaduras e entrega das chaves.
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
            Aprofunde seus conhecimentos jurídicos através de nossas publicações técnicas e áreas correlatas de prática no direito imobiliário:
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
                  Regras de participação, prazos das praças, cálculo de deságio e garantias processuais do arrematante.
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
                  Apartamento em Leilão por Dívida Condominial
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Sub-rogação dos débitos no preço da arrematação, obrigações propter rem e orientações do STJ.
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
                  Due Diligence Imobiliária e Análise Registral
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Como auditar matrículas do RGI, ônus reais e certidões cíveis e fiscais para blindar aquisições imobiliárias.
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
                <h4 className="text-sm font-bold text-white">Direito Imobiliário Estratégico</h4>
                <p className="text-xs text-text-muted">Consultoria em transações imobiliárias, regularizações e contratos no RJ</p>
              </div>
              <ExternalLink size={16} className="text-bronze shrink-0" />
            </Link>

            <Link 
              to="/direito-condominial/" 
              className="p-4 rounded-xl bg-midnight/40 border border-white/10 hover:border-bronze/30 transition-all flex items-center justify-between"
            >
              <div>
                <h4 className="text-sm font-bold text-white">Direito Condominial Preventivo</h4>
                <p className="text-xs text-text-muted">Análise de regras condominiais, passivos e convenções no Rio de Janeiro</p>
              </div>
              <ExternalLink size={16} className="text-bronze shrink-0" />
            </Link>
          </div>
        </article>

        {/* FAQ Específica do Humaitá */}
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20603%20na%20Rua%20Davi%20Campista%20296%20no%20Humait%C3%A1."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-bronze text-midnight font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <PhoneCall size={16} /> {tC.ctaWA}
              </a>
              <a 
                href="mailto:Juniorsadv@hotmail.com?subject=Consulta%20Juridica%20-%20Leilao%20Humaita%20Rua%20Davi%20Campista%20296%20Apto%20603"
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

export default HumaitaDaviCampista296AuctionPage;
