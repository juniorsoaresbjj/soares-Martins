import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Car, Compass, BookOpen
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1790777043015.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface IpanemaViscondePiraja82Loja103AuctionPageProps {
  onBack?: () => void;
}

const IpanemaViscondePiraja82Loja103AuctionPage: React.FC<IpanemaViscondePiraja82Loja103AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['ipanema-visconde-piraja-82-loja-103'] || editaisData['ipanema-visconde-piraja-188-apto-602'];
  const item = (editalEntry && editalEntry[language]) ? editalEntry[language] : (editalEntry ? editalEntry.pt : {
    title: 'Leilão Judicial em Ipanema — Rua Visconde de Pirajá nº 82, Loja 103 (25 m² com Vaga)',
    subtitle: 'Rua Visconde de Pirajá, nº 82, Loja 103 — Ipanema, Rio de Janeiro/RJ | 25 m² • 1 Vaga de Garagem • 2º Ofício RGI Matrícula 94.935 • Inscrição Municipal IPTU: 1271337 • Avaliação: R$ 577.000,00 • 1º Leilão: 26/10/2026 às 12:00h por R$ 577.000,00 • 2º Leilão: 29/10/2026 às 12:00h por R$ 288.500,00 (Lance Inicial a 50%)',
    address: 'Rua Visconde de Pirajá, nº 82, Loja 103 — Ipanema, Rio de Janeiro - RJ',
    p1Date: '26/10/2026 às 12:00h',
    p2Date: '29/10/2026 às 12:00h',
    process: 'Execução Judicial / TJRJ',
    court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
    iptu: '1271337',
    rgi: '2º Ofício de Registro de Imóveis (Matrícula nº 94.935)',
    val: 'R$ 577.000,00',
    p2Val: 'R$ 288.500,00 (Lance inicial 2ª Praça - 50%)',
    description: 'Imóvel de 25 m² de área privativa correspondente à Loja 103 com vaga de garagem na Rua Visconde de Pirajá nº 82, Ipanema, Rio de Janeiro - RJ.',
    checklist: [],
    modal: { title: 'Resumo Estruturado do Edital', sections: [] },
    faqs: []
  });

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/ipanema/loja/rua-visconde-de-piraja-82-loja-103/";

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
      "@type": "RealEstateListing",
      "name": item.title,
      "description": item.subtitle,
      "url": canonicalUrl,
      "image": `https://soaresmartinsadv.com/src/assets/images/regenerated_image_1790777043015.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Visconde de Pirajá, 82, Loja 103",
        "addressLocality": "Ipanema, Rio de Janeiro",
        "addressRegion": "RJ",
        "postalCode": "22410-000",
        "addressCountry": "BR"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "288500.00",
        "highPrice": "577000.00",
        "offerCount": "2"
      }
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
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10 text-emerald-400 font-bold">
                    <Car size={13} /> 1 Vaga de Garagem
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
                    <span>Garagem:</span>
                    <span className="text-emerald-400 font-medium">1 vaga assegurada</span>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20da%20Loja%20103%20na%20Rua%20Visconde%20de%20Piraj%C3%A1%2082%20em%20Ipanema."
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
              {tC.specsTitle} — Ficha Técnica e Diligência Jurídica
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
                <li><strong className="text-white">Endereço Oficial:</strong> Rua Visconde de Pirajá, nº 82, Loja 103 — Ipanema, Rio de Janeiro/RJ</li>
                <li><strong className="text-white">Bairro e Polo:</strong> Ipanema — Posto 8 / Praça General Osório</li>
                <li><strong className="text-white">Registro de Imóveis:</strong> Matrícula nº 94.935 do 2º Ofício de Registro de Imóveis do Rio de Janeiro (2º RGI/RJ)</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 1271337</li>
                <li><strong className="text-white">Área Edificada Privativa:</strong> 25 metros quadrados (25 m²)</li>
                <li><strong className="text-white">Vaga de Garagem:</strong> 1 (uma) vaga de garagem no condomínio com direito garantido</li>
                <li><strong className="text-white">Perfil do Imóvel:</strong> Unidade compacta com potencial comercial ou residencial multifuncional em polo nobre</li>
                <li><strong className="text-white">Acessibilidade:</strong> A poucos metros da estação de metrô General Osório e principais vias da Zona Sul</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução e Valoração Oficial
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial / TJRJ</li>
                <li><strong className="text-white">Foro Competente:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ) / Comarca da Capital</li>
                <li><strong className="text-white">Valor da Avaliação Homologada:</strong> R$ 577.000,00</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 577.000,00 (26/10/2026 às 12:00h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (50%):</strong> R$ 288.500,00 (29/10/2026 às 12:00h) — Desconto legal de 50%</li>
                <li><strong className="text-white">Condição de Pagamento Parcelado:</strong> Possibilidade legal de parcelamento em até 30 parcelas (Art. 895 CPC)</li>
                <li><strong className="text-white">Regime Tributário:</strong> Sub-rogação dos débitos de IPTU sobre o preço da arrematação (Art. 130 CTN)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Caracterização da Região em Ipanema */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Compass size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado e Caracterização da Região na Rua Visconde de Pirajá
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Rua Visconde de Pirajá é a artéria vital e comercial mais nobre de Ipanema, consagrada por abrigar um dos mercados imobiliários mais cobiçados do Brasil e da América Latina. O imóvel no número 82 ocupa uma posição estratégica no início da via, vizinho imediato à Praça General Osório, que concentra intensa circulação diária de pedestres, moradores de alto poder aquisitivo, executivos e turistas do mundo inteiro.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Unidades de 25 m² situadas neste quadrilátero de Ipanema contam com elevadíssima liquidez operacional, tanto para locação como estúdio, boutique, consultório, ponto de atendimento especializado ou base de serviços de alto padrão. Adicionalmente, o direito expressamente assegurado a 1 (uma) vaga de garagem representa um ativo financeiro autônomo de extrema raridade em Ipanema, onde vagas isoladas são disputadas e comercializadas por valores expressivos.
          </p>

          <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
            <div className="text-bronze font-serif font-bold text-base flex items-center gap-2">
              <ShieldCheck size={18} /> Oportunidade com 50% de Desconto na 2ª Praça
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Com avaliação judicial oficial fixada em R$ 577.000,00, a abertura da 2ª Praça em 29/10/2026 com lance mínimo inicial de R$ 288.500,00 oferece um custo de aquisição raríssimo para o metro quadrado de Ipanema (aproximadamente R$ 11.540,00/m² já incluindo a vaga de garagem), permitindo uma expressiva margem de valorização patrimonial ou geração de receita recorrente de locação.
            </p>
          </div>
        </article>

        {/* Como Participar do Leilão Judicial */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <BookOpen size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Como Participar do Leilão Judicial da Loja 103 em Ipanema
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A participação em leilões judiciais no Estado do Rio de Janeiro exige rigor técnico, cumprimento estrito de prazos processuais e conformidade com as regras do Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ). Veja o passo a passo fundamental:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="text-bronze font-bold text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-bronze/20 text-bronze flex items-center justify-center text-xs">1</span>
                Habilitação Prévia com o Leiloeiro
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Envio da documentação pessoal ou societária para homologação cadastral no portal do leiloeiro oficial credenciado perante o TJRJ com antecedência mínima de 24 a 48 horas.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="text-bronze font-bold text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-bronze/20 text-bronze flex items-center justify-center text-xs">2</span>
                Auditoria de Edital e Viabilidade
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Exame detalhado de todas as certidões judiciais, ônus inscritos na Matrícula nº 94.935 do 2º RGI, débitos fiscais de IPTU e elaboração da matriz de segurança jurídica.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="text-bronze font-bold text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-bronze/20 text-bronze flex items-center justify-center text-xs">3</span>
                Estratégia de Lance ou Parcelamento
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Definição do teto máximo de arrematação na 1ª ou 2ª Praça e protocolo formal de proposta de parcelamento com fulcro no Art. 895 do CPC (25% à vista + até 30 meses).
              </p>
            </div>
          </div>
        </article>

        {/* Importância da Assessoria Jurídica Especializada e Fases do Acompanhamento */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-8">
          <div className="flex items-center gap-3 text-bronze">
            <Scale size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Importância da Assessoria Jurídica Especializada e Fases do Acompanhamento
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Arrematar um imóvel em leilão judicial sem acompanhamento jurídico especializado expõe o investidor a riscos ocultos, como embargos à arrematação, nulidades de intimação, débitos de condomínio cobrados indevidamente ou demoras desnecessárias na expedição do mandado de imissão de posse. Nossa assessoria atua de forma integral em todas as etapas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 1. Due Diligence
              </div>
              <p className="text-xs text-text-muted">
                Auditoria minuciosa da Matrícula 94.935 (2º RGI/RJ), certidões dos executados no TJRJ/TRF2 e débitos fiscais do IPTU nº 1271337.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 2. Estratégia de Lance
              </div>
              <p className="text-xs text-text-muted">
                Apoio técnico na habilitação perante o leiloeiro oficial, estruturação do plano financeiro e redação de propostas de parcelamento judicial.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 3. Homologação & Custas
              </div>
              <p className="text-xs text-text-muted">
                Assinatura do Auto de Arrematação, recolhimento das custas de ITBI, emissão de guias judiciais e blindagem contra recursos intempestivos.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 4. Carta, RGI & Posse
              </div>
              <p className="text-xs text-text-muted">
                Expedição da Carta de Arrematação, cancelamento de penhoras no 2º RGI e cumprimento rápido do Mandado de Imissão na Posse com entrega das chaves.
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
                title: 'Vaga de Garagem em Condomínio: Regras, Uso e Conflitos',
                desc: 'Direito à vaga na escritura, demarcação e implicações jurídicas na arrematação.',
                path: '/blog/vaga-de-garagem-em-condominio-regras-uso-aluguel-conflitos/'
              },
              {
                title: 'Due Diligence Imobiliária e Auditoria Jurídica',
                desc: 'Auditoria completa de certidões, ônus processuais e verificação de riscos contratuais.',
                path: '/blog/direito-imobiliario-due-diligence-compra/'
              },
              {
                title: 'Guia de Compra e Venda Segura de Imóveis no RJ',
                desc: 'Passo a passo jurídico para aquisições imobiliárias seguras no Rio de Janeiro.',
                path: '/blog/guia-compra-venda-segura-imoveis-rj/'
              },
              {
                title: 'Apartamento em Leilão por Débito de Condomínio',
                desc: 'Entenda como funciona o leilão judicial de dívida de cota condominial e como se resguardar.',
                path: '/blog/apartamento-leilao-debito-condominial/'
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20da%20Loja%20103%20na%20Rua%20Visconde%20de%20Piraj%C3%A1%2082%20em%20Ipanema."
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
              {tC.ctaFooterNote} • Soares Martins Advogados — Advocacia em estrita conformidade com o Provimento 205/2021 da OAB
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
                <div className="text-white font-semibold">Localização Oficial:</div>
                <div>{item.address}</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">{tC.specsValuation}:</div>
                <div className="text-bronze font-bold">{item.val}</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Praças Judiciais e Lances Mínimos:</div>
                <div>1ª Praça: {item.p1Date} ({item.val} — 100% da Avaliação)</div>
                <div>2ª Praça: {item.p2Date} ({item.p2Val} — 50% de Desconto)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Registro e IPTU:</div>
                <div>{item.rgi} | Inscrição Municipal: {item.iptu} | 1 Vaga de Garagem</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20da%20Rua%20Visconde%20de%20Piraj%C3%A1%2082."
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

export default IpanemaViscondePiraja82Loja103AuctionPage;
