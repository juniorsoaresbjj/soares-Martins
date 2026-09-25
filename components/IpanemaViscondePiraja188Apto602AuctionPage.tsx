import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Sun, Home, Shield, Sparkles, Car
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1790346986060.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface IpanemaViscondePiraja188Apto602AuctionPageProps {
  onBack?: () => void;
}

const IpanemaViscondePiraja188Apto602AuctionPage: React.FC<IpanemaViscondePiraja188Apto602AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['ipanema-visconde-piraja-188-apto-602'];
  const item = (editalEntry && editalEntry[language]) ? editalEntry[language] : (editalEntry ? editalEntry.pt : {
    title: 'Leilão Judicial de Apartamento em Ipanema — Rua Visconde de Pirajá nº 188, Apto 602 (Edifício Nara)',
    subtitle: 'Rua Visconde de Pirajá, nº 188, Apto 602 — Ipanema, Rio de Janeiro/RJ | 63 m² • Edifício Nara com 44 Apartamentos • 6 Aptos/Andar • 2 Elevadores Reformados • 1 Vaga de Garagem no Prédio (Térreo/Subsolo) • Portaria 24h & Circuito CFTV • Imóvel de Frente para o Logradouro (Sala e 1 Quarto de Frente, 1 Quarto Fundos) • 2 Quartos + Dependências • 5º Ofício RGI Matrícula 89.580 • Inscrição Municipal IPTU: 0.994.226-9 • Avaliação: R$ 1.069.307,78 • 1º Leilão: R$ 1.069.307,78 • 2º Leilão: R$ 534.654,00 (Lance Inicial a 50%)',
    address: 'Rua Visconde de Pirajá, nº 188, Apto 602 — Ipanema, Rio de Janeiro - RJ',
    p1Date: '19/10/2026 às 12:00h',
    p2Date: '29/10/2026 às 12:00h',
    process: 'Execução Judicial / TJRJ',
    court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
    iptu: '0.994.226-9',
    rgi: '5º Ofício de Registro de Imóveis (Matrícula nº 89.580)',
    val: 'R$ 1.069.307,78',
    p2Val: 'R$ 534.654,00 (Lance inicial 2ª Praça - 50%)',
    description: 'Apartamento residencial de 63 m² de área edificada privativa correspondente à unidade 602 do conceituado Edifício Nara, situado na cobiçada Rua Visconde de Pirajá nº 188, no coração de Ipanema, Zona Sul do Rio de Janeiro.',
    checklist: [],
    modal: { title: 'Resumo Estruturado do Edital', sections: [] },
    faqs: []
  });

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/ipanema/apartamento/rua-visconde-de-piraja-188-apto-602/";

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
      "description": item.subtitle,
      "image": [
        "https://soaresmartinsadv.com/src/assets/images/regenerated_image_1790346986060.png"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "534654.00",
        "highPrice": "1069307.78",
        "offerCount": "2",
        "offers": [
          {
            "@type": "Offer",
            "name": "1º Leilão Judicial (100% da avaliação)",
            "price": "1069307.78",
            "priceCurrency": "BRL",
            "validFrom": "2026-10-19T12:00:00-03:00",
            "availability": "https://schema.org/InStock",
            "url": canonicalUrl
          },
          {
            "@type": "Offer",
            "name": "2º Leilão Judicial (50% do valor de avaliação)",
            "price": "534654.00",
            "priceCurrency": "BRL",
            "validFrom": "2026-10-29T12:00:00-03:00",
            "availability": "https://schema.org/InStock",
            "url": canonicalUrl
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": item.title,
      "description": item.description,
      "url": canonicalUrl,
      "image": "https://soaresmartinsadv.com/src/assets/images/regenerated_image_1790346986060.png",
      "datePosted": "2026-09-25",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Visconde de Pirajá, nº 188, Apto 602",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ",
        "postalCode": "22410-002",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -22.9838,
        "longitude": -43.1995
      }
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
      "areaServed": "Rio de Janeiro/RJ"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": item.faqs.map((faq: { q: string; a: string }) => ({
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-medium">
              <Building2 size={13} className="text-bronze" /> 63 m² • Edifício Nara
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <Car size={13} className="text-emerald-400" /> 1 Vaga de Garagem
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-medium">
              <Home size={13} className="text-bronze" /> 2 Quartos + Dependências (Frente)
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-medium">
              <Shield size={13} className="text-bronze" /> Portaria 24h & Câmeras TV
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-medium">
              <Sun size={13} className="text-amber-400" /> Ipanema • Zona Sul / RJ
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-4 text-left">
            {item.title}
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left leading-relaxed">
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20602%20do%20Edif%C3%ADcio%20Nara%20na%20Rua%20Visconde%20de%20Piraj%C3%A1%20188%20em%20Ipanema%20-%20RJ."
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
              {tC.specsTitle} — Ficha Técnica e Resumo do Imóvel
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
                <li><strong className="text-white">Endereço Principal:</strong> Rua Visconde de Pirajá, nº 188, Apto 602 — Ipanema, Rio de Janeiro/RJ (CEP: 22410-002)</li>
                <li><strong className="text-white">Edifício Condominial:</strong> Edifício Nara (44 apartamentos residenciais)</li>
                <li><strong className="text-white">Unidade Imobiliária:</strong> Apartamento nº 602 (6º pavimento)</li>
                <li><strong className="text-white">Registro Imobiliário:</strong> Matrícula nº 89.580 do Cartório do 5º Ofício de Registro de Imóveis do Rio de Janeiro (5º RGI/RJ)</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0.994.226-9</li>
                <li><strong className="text-white">Área Edificada Privativa:</strong> 63 metros quadrados (63 m²)</li>
                <li><strong className="text-white">Distribuição dos Cômodos:</strong> Sala, 2 quartos, banheiro social, cozinha, área de serviço e dependências de empregada</li>
                <li><strong className="text-white">Vaga de Garagem:</strong> O imóvel tem expressamente direito a 1 (uma) vaga de garagem no condomínio (térreo e subsolo com vagas livres e demarcadas)</li>
                <li><strong className="text-white">Posição da Unidade:</strong> De frente para o logradouro — sala e um dos quartos voltados para a frente da via e o outro quarto para os fundos</li>
                <li><strong className="text-white">Pisos e Acabamentos:</strong> Piso da área social e demais cômodos em cerâmica bege em bom estado, porém antigo; quartos com armários embutidos antigos; esquadrias e janelas em alumínio</li>
                <li><strong className="text-white">Estado de Conservação:</strong> Submetido a reformas há muitos anos, necessitando de nova reforma geral e modernização de acabamentos e instalações</li>
                <li><strong className="text-white">Estrutura do Edifício Nara:</strong> 44 apartamentos (6 unidades por andar, exceto cobertura), grades em alumínio marrom, portaria social pequena acessada por escadas com paredes em mármore branco, piso em granito preto, bancada para porteiro e portas blindex</li>
                <li><strong className="text-white">Elevadores:</strong> 2 elevadores (social e de serviço), em funcionamento e reformados</li>
                <li><strong className="text-white">Segurança Condominial:</strong> Portaria 24 horas, sistema interno de monitoramento por TV (CFTV) e interfones</li>
                <li><strong className="text-white">Bairro / Zona:</strong> Ipanema — Zona Sul da Cidade do Rio de Janeiro</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução, Lances e Avaliação
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial / TJRJ</li>
                <li><strong className="text-white">Valor da Avaliação Oficial:</strong> R$ 1.069.307,78</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 1.069.307,78 (19/10/2026 às 12:00h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (50%):</strong> R$ 534.654,00 (29/10/2026 às 12:00h) — deságio de 50% (~R$ 8.486,57/m²)</li>
                <li><strong className="text-white">Foro / Juízo:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ) / Comarca da Capital</li>
                <li><strong className="text-white">Condições de Pagamento:</strong> À vista em 24h ou parcelamento judicial pelo Art. 895 do CPC (25% de entrada: R$ 133.663,50 na 2ª praça e saldo em até 30 parcelas mensais corrigidas com hipoteca judicial)</li>
                <li><strong className="text-white">Sub-rogação Tributária:</strong> Débitos tributários pretéritos de IPTU sub-rogam-se sobre o produto da arrematação (Art. 130, parágrafo único, do Código Tributário Nacional)</li>
                <li><strong className="text-white">Auditoria Condominial:</strong> Exame prévio de débitos condominiais e habilitação do credor nos autos para resguardar a higidez da arrematação</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Caracterização da Região */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <ShieldCheck size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado na Rua Visconde de Pirajá e Potencial de Valorização em Ipanema
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Rua Visconde de Pirajá é a artéria mais importante, valorizada e emblemática de Ipanema. O trecho do número 188 situa-se estrategicamente a poucos metros das estações de metrô da Praça General Osório e de fácil acesso à Praça Nossa Senhora da Paz, cercado pela mais seleta rede de bistrôs, galerias de arte, livrarias, mercados gourmet e a escassos minutos a pé da Praia de Ipanema (Posto 8 e Posto 9) e da Lagoa Rodrigo de Freitas.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Encontrar em Ipanema um apartamento de 63 m² com 2 quartos, dependências completas e, fundamentalmente, <strong>1 vaga de garagem no prédio</strong> é uma raridade absoluta. Vagas de garagem na Zona Sul carioca agregam até R$ 150.000,00 a R$ 200.000,00 ao valor patrimonial do bem, constituindo um dos fatores de maior liquidez e atratividade do mercado.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
              <div className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Home size={18} /> Metro Quadrado em 2ª Praça: ~R$ 8.486/m²
              </div>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Em Ipanema, o metro quadrado de unidades reformadas e com vaga na Visconde de Pirajá varia entre R$ 22.000,00 e R$ 28.000,00/m². O lance inicial de 2ª praça fixado em R$ 534.654,00 projeta um custo de aquisição de apenas ~R$ 8.486,57/m², proporcionando uma margem bruta superior a 60% para retrofit e modernização.
              </p>
            </div>

            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-2">
              <div className="text-emerald-400 font-serif font-bold text-base flex items-center gap-2">
                <Sparkles size={18} /> Potencial de Retrofit e Alta Rentabilidade
              </div>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Por demandar reforma geral, o apartamento permite a integração da cozinha com a sala em conceito aberto, modernização dos 2 quartos e do banheiro social, transformando a unidade em um produto imobiliário de alto padrão com elevadíssima taxa de rentabilidade em locação residencial ou venda final.
              </p>
            </div>
          </div>
        </article>

        {/* Como Participar e Formas de Pagamento (Art. 895 CPC) */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Gavel size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Como Participar do Leilão e Modalidades de Pagamento Previstas no CPC
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A participação no leilão judicial do Edifício Nara (Rua Visconde de Pirajá nº 188) processa-se perante leiloeiro público oficial nomeado pelo Tribunal de Justiça do Estado do Rio de Janeiro. O Código de Processo Civil viabiliza duas modalidades de pagamento:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-white font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} className="text-bronze" /> Pagamento À Vista
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                O arrematante deposita o valor integral de seu lance em conta judicial vinculada ao processo no prazo legal de até 24 horas após a arrematação, acrescido de 5% de comissão devida ao leiloeiro oficial. Ofertas de pagamento à vista prevalecem legalmente sobre propostas parceladas de igual valor.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-white font-serif font-bold text-base flex items-center gap-2">
                <Calendar size={18} className="text-emerald-400" /> Parcelamento Judicial (Art. 895 do CPC)
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                O interessado pode formular proposta formal nos autos antes da abertura do pregão para pagamento com entrada mínima de 25% (R$ 133.663,50 na 2ª praça) e o saldo dividido em até 30 parcelas mensais corrigidas por índice oficial da Justiça estadual, com hipoteca judicial averbada na própria Matrícula nº 89.580.
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
            A aquisição de imóveis em leilões judiciais exige rigor técnico e auditoria jurídica aprofundada para mitigar riscos de nulidade, recursos processuais ou surpresas condominiais e fiscais. O escritório Soares Martins Advogados oferece assistência integral em todas as etapas da arrematação:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 1. Due Diligence Prévia
              </div>
              <p className="text-xs text-text-muted">
                Auditoria registral minuciosa da Matrícula 89.580 no 5º RGI, certidões fiscais (IPTU 0.994.226-9), débitos de condomínio e verificação de nulidades processuais no TJRJ.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 2. Estratégia de Lance
              </div>
              <p className="text-xs text-text-muted">
                Habilitação jurídica perante o leiloeiro oficial e elaboração de proposta formal de parcelamento nos termos do Art. 895 do CPC ou lance estratégico em 2ª praça.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 3. Homologação & Guia
              </div>
              <p className="text-xs text-text-muted">
                Acompanhamento da assinatura do Auto de Arrematação, conferência de custas judiciais e recolhimento das guias com estrita observância aos prazos legais.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 4. Carta & Imissão na Posse
              </div>
              <p className="text-xs text-text-muted">
                Expedição da Carta de Arrematação pelo TJRJ, cancelamento de ônus no 5º RGI, registro imobiliário e cumprimento do Mandado de Imissão na Posse com entrega das chaves.
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
            {item.faqs.map((faq: { q: string; a: string }, idx: number) => (
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20602%20na%20Rua%20Visconde%20de%20Piraj%C3%A1%20188%20em%20Ipanema%20-%20RJ."
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

              {item.modal.sections.map((sec: { title: string; text: string }, i: number) => (
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20da%20Rua%20Visconde%20de%20Piraj%C3%A1%20188%20apto%20602%20em%20Ipanema."
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

export default IpanemaViscondePiraja188Apto602AuctionPage;
