import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Wallet, Clock
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1793323902285.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface CentroGomesFreire740AuctionPageProps {
  onBack?: () => void;
}

const CentroGomesFreire740AuctionPage: React.FC<CentroGomesFreire740AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['centro-gomes-freire-740'] || editaisData['copacabana-atlantica'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/avenida-gomes-freire-740-apto-202/";

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
        "lowPrice": "155163.60",
        "highPrice": "258606.00",
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
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/10 border border-bronze/30 text-bronze text-xs font-semibold uppercase tracking-wider">
              <Gavel size={14} /> {tC.badgeTag}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Clock size={13} /> {language === 'es' ? 'Oportunidad Abierta' : language === 'en' ? 'Active Opportunity' : 'Oportunidade Ativa'}
            </div>
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
                    <div className="text-sm font-semibold text-emerald-300 mb-2">{language === 'es' ? '60% de la Evaluación' : language === 'en' ? '60% of Valuation' : '60% da Avaliação'}</div>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20202%20na%20Avenida%20Gomes%20Freire%20740%20no%20Centro."
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
                <FileCheck size={18} /> Identificação Imobiliária e Registral
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Endereço Principal:</strong> Avenida Gomes Freire, nº 740, Apartamento 202 — Centro, Rio de Janeiro/RJ</li>
                <li><strong className="text-white">Registro Imobiliário:</strong> Matrícula nº 50294 do Cartório do 2º Ofício de Registro de Imóveis do Rio de Janeiro (2º RGI/RJ)</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0702801-2</li>
                <li><strong className="text-white">Área Edificada / Privativa:</strong> 31 metros quadrados (31 m²)</li>
                <li><strong className="text-white">Tipologia:</strong> Apartamento residencial compacto (quarto, sala, cozinha e banheiro)</li>
                <li><strong className="text-white">Pavimento:</strong> 2º pavimento (apartamento 202)</li>
                <li><strong className="text-white">Bairro / Região:</strong> Centro do Rio de Janeiro (eixo cultural Gomes Freire / Lapa / Tiradentes)</li>
                <li><strong className="text-white">Destinação Legal:</strong> Estritamente residencial</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução e Valoração Judicial
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial / TJRJ</li>
                <li><strong className="text-white">Valor da Avaliação Oficial:</strong> R$ 258.606,00</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 258.606,00 (26/10/2026 às 12:40h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (60%):</strong> R$ 155.163,60 (10/11/2026 às 12:40h) — desconto de 40% do valor avaliado</li>
                <li><strong className="text-white">Sub-rogação de IPTU / Taxas:</strong> Aplicação expressa do Art. 130, parágrafo único, do CTN</li>
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
              Contexto de Mercado e Potencial de Valorização na Avenida Gomes Freire
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Avenida Gomes Freire é um dos principais eixos de revitalização residencial e cultural do Centro do Rio de Janeiro. Ligando a Praça Tiradentes aos Arcos da Lapa, a via reúne infraestrutura completa de comércio, farmácias, padarias, restaurantes, centros universitários (UFRJ, Faculdade Nacional de Direito, IFCS) e importantes órgãos públicos e sedes corporativas da Petrobras, BNDES e Tribunal Regional Federal.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Apartamentos compactos de 31 m² no Centro contam com elevadíssima liquidez e procura constante para locação tradicional voltada a profissionais liberais, servidores públicos e estudantes universitários, além de excelente desempenho no mercado de locação por temporada (Airbnb), impulsionado pela vida noturna e boemia da Lapa e pelos eventos artísticos do Circo Voador e Fundição Progresso. A mobilidade urbana é privilegiada pelas estações Carioca e Cinelândia do Metrô, além de paradas do VLT Carioca que conectam rapidamente ao Aeroporto Santos Dumont e à Rodoviária Novo Rio.
          </p>

          <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
            <div className="text-bronze font-serif font-bold text-base">
              Oportunidade na 2ª Praça a 60% da Avaliação Oficial (R$ 155.163,60)
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Com avaliação judicial oficial fixada em R$ 258.606,00, a abertura da 2ª Praça por R$ 155.163,60 estabelece um custo por metro quadrado altamente atrativo de aproximadamente R$ 5.005,00/m² em plena região central carioca, proporcionando sólida margem de segurança patrimonial tanto para quem visa moradia quanto para investidores focados em rendimento com aluguel.
            </p>
          </div>
        </article>

        {/* Como Participar do Leilão Judicial */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Wallet size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Como Participar do Leilão e Modalidades de Pagamento
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A participação no leilão judicial exige habilitação prévia perante o leiloeiro oficial credenciado junto ao Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ). Os lances podem ser ofertados na modalidade eletrônica (online) e requerem auditoria prévia dos autos para validação de intimações e levantamento de passivos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base">
                Pagamento à Vista
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                O arrematante deposita o valor integral do lance homologado mediante guia judicial da Caixa Econômica Federal ou Banco do Brasil, acrescido da comissão de 5% do leiloeiro público e eventuais custas judiciais devidas.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base">
                Proposta Parcelada (Art. 895 do CPC)
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Interessados podem apresentar proposta formal de parcelamento com oferta mínima de 25% à vista como sinal e o saldo remanescente em até 30 prestações mensais sucessivas corrigidas, gravando-se hipoteca judiciária sobre a matrícula 50294.
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
            A aquisição de imóveis em leilão judicial demanda rigor técnico para evitar nulidades processuais, embargos de terceiros ou assunção indevida de encargos. Nossa equipe atua em todas as etapas, assegurando que o arrematante receba a propriedade imobiliária com segurança jurídica e imissão efetiva na posse:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 1. Due Diligence
              </div>
              <p className="text-xs text-text-muted">
                Auditoria jurídica completa da matrícula nº 50294 (2º RGI/RJ), certidões cíveis do executado, regularidade fiscal do IPTU nº 0702801-2 e verificação de intimações no TJRJ.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 2. Estratégia de Lance
              </div>
              <p className="text-xs text-text-muted">
                Habilitação legal perante o leiloeiro oficial, elaboração de propostas parceladas (art. 895 CPC) e orientação sobre o teto econômico para a 1ª ou 2ª Praça.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 3. Homologação & Guia
              </div>
              <p className="text-xs text-text-muted">
                Assinatura do Auto de Arrematação, conferência das guias judiciais, sub-rogação de débitos tributários (Art. 130 CTN) e prevenção de recursos protelatórios.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 4. Carta & Imissão
              </div>
              <p className="text-xs text-text-muted">
                Expedição e registro da Carta de Arrematação no 2º RGI, cancelamento de penhoras anteriores e requerimento imediato do mandado de imissão na posse.
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
              {tC.faqTitle} — Perguntas Frequentes sobre o Leilão da Gomes Freire 740
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

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20202%20na%20Avenida%20Gomes%20Freire%20740%20no%20Centro."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-midnight text-white hover:bg-midnight/80 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl"
              >
                <PhoneCall size={16} /> {tC.ctaWA}
              </a>
              <Link 
                to="/contato/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-midnight px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border border-midnight/10"
              >
                {tC.ctaEmail}
              </Link>
            </div>

            <p className="text-[11px] opacity-75 pt-2 text-center">
              {tC.ctaFooterNote} Informações estritamente jurídicas e em conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </section>
      </section>

      {/* Modal de Detalhes do Edital */}
      {showEditalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-md">
          <div className="bg-midnight-light border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-left shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <FileText size={20} className="text-bronze" /> {item.modal.title}
              </h3>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-white text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {item.modal.sections.map((sec, idx) => (
                <div key={idx} className="bg-midnight/60 p-4 rounded-xl border border-white/5 space-y-1">
                  <h4 className="text-sm font-serif font-bold text-bronze">{sec.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{sec.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-end">
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

export default CentroGomesFreire740AuctionPage;
