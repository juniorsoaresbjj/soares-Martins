import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Sparkles, Car, Sun
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1790080209781.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface CopacabanaRaulPompeia240AuctionPageProps {
  onBack?: () => void;
}

const CopacabanaRaulPompeia240AuctionPage: React.FC<CopacabanaRaulPompeia240AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['copacabana-rua-raul-pompeia-240-apto-702'];
  const item = (editalEntry && editalEntry[language]) ? editalEntry[language] : (editalEntry ? editalEntry.pt : {
    title: 'Leilão Judicial de Apartamento em Copacabana — Rua Raul Pompéia nº 240 — Apto 702',
    subtitle: 'Rua Raul Pompéia, nº 240, Apto 702 — Copacabana (Posto 6), Rio de Janeiro/RJ | 143 m² • Posição Frente com Luz Natural • 3 Quartos (2 de Frente) • Antessala e Sala Ampla com Janelas para a Rua • 2 Banheiros Sociais e Banheiro de Serviço • Cozinha Espaçosa • Edifício Construído em 1957 • Portaria 24 Horas, Elevadores e Garagem • 5º RGI Matrícula 26.715 • IPTU: 0.277.837-1 • 1º Leilão: R$ 1.300.000,00 • 2º Leilão: R$ 650.000,00 (~R$ 4.545/m²)',
    address: 'Rua Raul Pompéia, nº 240, Apto 702 — Copacabana (Posto 6), Rio de Janeiro - RJ',
    p1Date: '03/11/2026 às 12:00h',
    p2Date: '05/11/2026 às 12:00h',
    process: 'Execução Judicial / TJRJ',
    court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
    iptu: '0.277.837-1',
    rgi: '5º Ofício de Registro de Imóveis (Matrícula nº 26.715)',
    val: 'R$ 1.300.000,00',
    p2Val: 'R$ 650.000,00 (Lance inicial 2ª Praça)',
    description: 'Apartamento residencial de frente com 143 m² de área edificada privativa no 7º andar (unidade 702) de clássico edifício construído em 1957 na aprazível Rua Raul Pompéia nº 240, Posto 6 de Copacabana.',
    checklist: [],
    modal: { title: 'Resumo Estruturado do Edital', sections: [] },
    faqs: []
  });

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-raul-pompeia-240-apto-702/";

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
      "category": "Real Estate / Judicial Auction / Copacabana Posto 6 RJ",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "650000.00",
        "highPrice": "1300000.00",
        "offerCount": "2",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-11-03T12:00:00-03:00"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": item.title,
      "description": item.description,
      "url": canonicalUrl,
      "datePosted": "2026-09-22",
      "validThrough": "2026-11-05T18:00:00-03:00",
      "image": buildingImage,
      "containedInPlace": {
        "@type": "Place",
        "name": "Edifício Residencial Rua Raul Pompéia 240 — Posto 6 Copacabana",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Raul Pompéia, 240, Apto 702",
          "addressLocality": "Copacabana, Rio de Janeiro",
          "addressRegion": "RJ",
          "postalCode": "22080-002",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -22.9841,
          "longitude": -43.1906
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
      "areaServed": ["Rio de Janeiro", "Copacabana", "Posto 6", "Arpoador", "Ipanema", "Zona Sul RJ"],
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

  return (
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title={`${item.title} | Soares Martins Advogados`}
        description={`Assessoria jurídica em leilão judicial de apartamento de frente na Rua Raul Pompéia 240, Apto 702, Copacabana (Posto 6) - RJ. 143 m², 3 quartos, antessala, vaga de garagem, portaria 24h. 5º RGI Matrícula 26.715.`}
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
                Residencial • Copacabana / Posto 6 (RJ)
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-500/30 flex items-center gap-1">
                <Sun size={12} /> Apartamento de Frente • 143 m²
              </span>
              <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-500/30 flex items-center gap-1">
                <Car size={12} /> Com Vaga de Garagem • Portaria 24h
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

                  {/* 2ª Praça (50%) */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> {tC.p2Title}
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Lance inicial 2ª Praça</div>
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
                    href={`https://wa.me/5521979549241?text=${encodeURIComponent("Olá, gostaria de assessoria jurídica para o leilão judicial do apartamento 702 na Rua Raul Pompéia 240 em Copacabana (Posto 6) - RJ.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-600/20"
                  >
                    <PhoneCall size={15} /> {tC.btnConsultWhatsApp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-16">
        
        {/* Resumo do Imóvel & Ficha Técnica */}
        <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl text-left">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="text-bronze" size={28} />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {tC.specsTitle} — Rua Raul Pompéia 240 / Apto 702
            </h2>
          </div>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-8">
            {item.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-bronze flex items-center gap-2">
                <FileCheck size={18} /> Identificação Imobiliária e Arquitetura
              </h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Endereço Completo:</span>
                  <span className="font-semibold text-white text-right">Rua Raul Pompéia nº 240, Apto 702</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Bairro / Região:</span>
                  <span className="font-semibold text-white">Copacabana (Posto 6) / Divisa Arpoador</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Área Edificada Privativa:</span>
                  <span className="font-semibold text-emerald-400">143,00 m²</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Posição & Insolação:</span>
                  <span className="font-semibold text-white">Frente (ampla luminosidade e ventilação)</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Distribuição Interna:</span>
                  <span className="font-semibold text-white text-right">3 Quartos (2 de frente), Antessala, Sala, 2 Banheiros Sociais, Copa/Cozinha, Banheiro de Serviço</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Ano de Construção do Edifício:</span>
                  <span className="font-semibold text-white">1957 (Construção clássica e sólida)</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Comodidades do Prédio:</span>
                  <span className="font-semibold text-white text-right">Portaria 24 horas, Elevadores e Vaga de Garagem</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-bronze flex items-center gap-2">
                <Gavel size={18} /> Dados da Execução e Parâmetros Judiciais
              </h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Registro Imobiliário (RGI):</span>
                  <span className="font-semibold text-white">5º Ofício RGI — Matrícula nº 26.715</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Inscrição Municipal (IPTU):</span>
                  <span className="font-semibold text-white font-mono">0.277.837-1</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Valor de Avaliação / 1ª Praça:</span>
                  <span className="font-semibold text-white">{item.val}</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Lance Inicial 2ª Praça:</span>
                  <span className="font-semibold text-emerald-400 font-bold">{item.p2Val}</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Preço por m² (2ª Praça):</span>
                  <span className="font-semibold text-emerald-400 font-mono">~R$ 4.545,45 / m²</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Data da 1ª Praça:</span>
                  <span className="font-semibold text-white">{item.p1Date}</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Data da 2ª Praça:</span>
                  <span className="font-semibold text-white">{item.p2Date}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contexto de Mercado e Atratividade do Investimento */}
        <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl text-left">
          <div className="flex items-center gap-3 mb-6">
            <Landmark className="text-bronze" size={28} />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Contexto de Mercado: Posto 6 em Copacabana e Margem de Valorização
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed">
            <p>
              A Rua Raul Pompéia situa-se no tradicional <strong>Posto 6 de Copacabana</strong>, uma das micro-regiões mais desejadas de toda a Zona Sul carioca devido à proximidade imediata com o Forte de Copacabana, a Praia do Diabo, a Pedra do Arpoador e a orla de Ipanema. Trata-se de uma via arborizada e tranquila, servida por comércio refinado, padarias artesanais, supermercados nobres e com fácil acesso à estação de metrô General Osório.
            </p>
            <p>
              No mercado imobiliário tradicional do Posto 6, apartamentos de frente com metragem generosa (143 m²) e vaga de garagem costumam ser comercializados por valores que oscilam entre <strong>R$ 11.000,00 e R$ 16.000,00 por metro quadrado</strong>, totalizando tíquetes de venda de R$ 1.570.000,00 a mais de R$ 2.200.000,00 após reformas contemporâneas.
            </p>
            <div className="bg-midnight/60 p-6 rounded-xl border border-bronze/20 mt-4">
              <h4 className="font-serif font-bold text-white text-base mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-bronze" /> Comparativo de Custo por Metro Quadrado
              </h4>
              <p className="text-sm">
                Na 2ª Praça do leilão judicial, com lance mínimo fixado em <strong>R$ 650.000,00</strong>, o valor do metro quadrado atinge impressionantes <strong>~R$ 4.545,45/m²</strong> — representando uma margem de deságio substancial para investidores patrimoniais ou adquirentes que buscam moradia de excelência no Posto 6.
              </p>
            </div>
          </div>
        </div>

        {/* Como Participar e Modalidades de Pagamento */}
        <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl text-left">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="text-bronze" size={28} />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Como Participar: À Vista ou Parcelamento Judicial (Art. 895 do CPC)
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-midnight/50 p-6 rounded-xl border border-white/10 space-y-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" /> Modalidade À Vista
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                O arrematante deposita o valor integral do lance no prazo fixado pelo edital (geralmente em até 24 ou 48 horas após a homologação judicial), acrescido da comissão de 5% do leiloeiro público e das custas processuais aplicáveis. O pagamento integral confere prioridade de preferência legal sobre lances parcelados de mesmo valor.
              </p>
            </div>
            <div className="bg-midnight/50 p-6 rounded-xl border border-bronze/20 space-y-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <CheckCircle2 size={18} className="text-bronze" /> Parcelamento Judicial (Art. 895 CPC)
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                É facultado ao interessado formalizar proposta por escrito antes da realização do leilão, contemplando sinal mínimo de <strong>25% de entrada</strong> (R$ 162.500,00 na 2ª Praça) e parcelamento do saldo remanescente em até <strong>30 prestações mensais</strong> sucessivas, corrigidas pela taxa da Justiça e garantidas por hipoteca sobre a própria Matrícula 26.715 do 5º RGI.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pilares da Auditoria Preventiva */}
        <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl text-left">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-bronze" size={28} />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {tC.checklistTitle}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-text-muted mb-8 leading-relaxed">
            {tC.checklistSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {item.checklist && item.checklist.map((pillar, idx) => (
              <div key={idx} className="bg-midnight/60 p-5 rounded-xl border border-white/10 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-bronze/20 text-bronze flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-sm text-white">{pillar.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fases do Acompanhamento Jurídico */}
        <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl text-left">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-bronze" size={28} />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {tC.phasesTitle}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-text-muted mb-8 leading-relaxed">
            {tC.phasesSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tC.phases && tC.phases.map((phase, idx) => (
              <div key={idx} className="relative p-5 rounded-xl bg-midnight/40 border border-white/10 space-y-2">
                <div className="text-xs font-bold text-bronze uppercase tracking-wider">{tC.phaseLabel} 0{idx + 1}</div>
                <h3 className="font-bold text-sm text-white">{phase.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links Internos & Artigos de Referência */}
        <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl text-left">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6">
            Artigos de Referência Jurídica & Serviços Conexos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <Link 
              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/"
              className="p-4 rounded-xl bg-midnight/50 border border-white/10 hover:border-bronze transition-all group block"
            >
              <span className="text-xs text-bronze font-semibold block mb-1">Serviço Especializado</span>
              <h3 className="font-bold text-white group-hover:text-bronze transition-colors flex items-center justify-between">
                Assessoria em Leilões Judiciais no RJ <ExternalLink size={14} />
              </h3>
              <p className="text-xs text-text-muted mt-2">Visão geral do serviço de auditoria prévia, arrematação e imissão na posse no Tribunal de Justiça do Rio de Janeiro.</p>
            </Link>

            <Link 
              to="/artigos/sub-rogacao-debitos-propter-rem-leilao-judicial/"
              className="p-4 rounded-xl bg-midnight/50 border border-white/10 hover:border-bronze transition-all group block"
            >
              <span className="text-xs text-bronze font-semibold block mb-1">Artigo Jurídico</span>
              <h3 className="font-bold text-white group-hover:text-bronze transition-colors flex items-center justify-between">
                Sub-rogação de IPTU e Condomínio <ExternalLink size={14} />
              </h3>
              <p className="text-xs text-text-muted mt-2">Compreenda a aplicação do Artigo 130 do CTN e a desoneração de gravames tributários pretéritos.</p>
            </Link>

            <Link 
              to="/artigos/parcelamento-judicial-art-895-cpc/"
              className="p-4 rounded-xl bg-midnight/50 border border-white/10 hover:border-bronze transition-all group block"
            >
              <span className="text-xs text-bronze font-semibold block mb-1">Estratégia Processual</span>
              <h3 className="font-bold text-white group-hover:text-bronze transition-colors flex items-center justify-between">
                Parcelamento em até 30x no CPC <ExternalLink size={14} />
              </h3>
              <p className="text-xs text-text-muted mt-2">Como formular proposta legalmente vinculante com 25% de entrada e proteção patrimonial completa.</p>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl text-left">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-bronze" size={28} />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {tC.faqTitle}
            </h2>
          </div>
          <div className="divide-y divide-white/10">
            {item.faqs && item.faqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-white hover:text-bronze transition-colors cursor-pointer py-2"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-bronze shrink-0 ml-4" /> : <ChevronDown size={18} className="text-text-muted shrink-0 ml-4" />}
                </button>
                {openFaq === idx && (
                  <div className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed pr-8">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Institucional OAB */}
        <section className="bg-gradient-to-br from-midnight via-midnight-light to-midnight rounded-3xl p-8 sm:p-12 border border-bronze/30 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-bronze/20 text-bronze text-xs font-semibold px-4 py-1.5 rounded-full border border-bronze/30 uppercase tracking-widest">
            {tC.ctaOabNotice}
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
            {tC.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            {tC.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/5521979549241?text=${encodeURIComponent("Olá, gostaria de conversar sobre a auditoria jurídica do apartamento na Rua Raul Pompéia 240 / Apto 702 em Copacabana.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <PhoneCall size={16} /> {tC.btnConsultWhatsApp}
            </a>
            <Link
              to="/contato/"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              {tC.btnEmailUs}
            </Link>
          </div>
          <p className="text-[11px] text-white/40 pt-4">
            {tC.ctaDisclaimer}
          </p>
        </section>

      </section>

      {/* Modal Resumo Estruturado do Edital */}
      {showEditalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-midnight rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-white/10 shadow-2xl text-left space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                <FileText size={20} className="text-bronze" /> {item.modal?.title || 'Resumo Estruturado do Edital'}
              </h3>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-white text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              {item.modal?.sections && item.modal.sections.map((sec, idx) => (
                <div key={idx} className="bg-midnight-light/40 p-4 rounded-xl border border-white/5 space-y-1">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-bronze">{sec.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{sec.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowEditalModal(false)}
                className="bg-bronze hover:bg-bronze-dark text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                {tC.modalCloseBtn}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default CopacabanaRaulPompeia240AuctionPage;
