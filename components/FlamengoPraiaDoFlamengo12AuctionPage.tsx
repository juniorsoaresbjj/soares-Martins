import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Sun, Home, Shield
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1790258463259.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface FlamengoPraiaDoFlamengo12AuctionPageProps {
  onBack?: () => void;
}

const FlamengoPraiaDoFlamengo12AuctionPage: React.FC<FlamengoPraiaDoFlamengo12AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['flamengo-praia-do-flamengo-12-apto-306'];
  const item = (editalEntry && editalEntry[language]) ? editalEntry[language] : (editalEntry ? editalEntry.pt : {
    title: 'Leilão Judicial de Apartamento no Flamengo — Praia do Flamengo nº 12 — Apto 306',
    subtitle: 'Praia do Flamengo, nº 12, Apto 306 — Flamengo, Rio de Janeiro/RJ | 40 m² • Amplo Conjugado Dividido em Sala, Quarto, Cozinha e Banheiro • Sem Garagem • Interfone • Razoável Estado de Conservação • Edifício de 1940 ("Condomínio do Edifício Rio Carioca") • 2 Blocos com 13 Andares e 270 Apartamentos • 4 Elevadores • Portaria 24 Horas • Sem Infraestrutura de Lazer • Localização Privilegiada na Orla do Flamengo • 9º RGI Matrícula 154.629 • IPTU: 0.258.058-7 • 1º Leilão: R$ 627.898,69 • 2º Leilão: R$ 313.949,34 (~R$ 7.848,73/m²)',
    address: 'Praia do Flamengo, nº 12, Apto 306 — Flamengo, Rio de Janeiro - RJ',
    p1Date: '26/10/2026 às 12:00h',
    p2Date: '29/10/2026 às 12:00h',
    process: 'Execução Judicial / TJRJ',
    court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
    iptu: '0.258.058-7',
    rgi: '9º Ofício de Registro de Imóveis (Matrícula nº 154.629)',
    val: 'R$ 627.898,69',
    p2Val: 'R$ 313.949,34 (Lance inicial 2ª Praça)',
    description: 'Imóvel residencial caracterizado como amplo conjugado de 40 m² de área privativa, situado no 3º pavimento (unidade 306) do tradicional "Condomínio do Edifício Rio Carioca", edificado em 1940 na emblemática Praia do Flamengo nº 12.',
    checklist: [],
    modal: { title: 'Resumo Estruturado do Edital', sections: [] },
    faqs: []
  });

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/praia-do-flamengo-12-apto-306/";

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
        "https://soaresmartinsadv.com/src/assets/images/regenerated_image_1790258463259.png"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "313949.34",
        "highPrice": "627898.69",
        "offerCount": "2",
        "offers": [
          {
            "@type": "Offer",
            "name": "1º Leilão Judicial",
            "price": "627898.69",
            "priceCurrency": "BRL",
            "validFrom": "2026-10-26T12:00:00-03:00",
            "availability": "https://schema.org/InStock",
            "url": canonicalUrl
          },
          {
            "@type": "Offer",
            "name": "2º Leilão Judicial (50% do valor de avaliação)",
            "price": "313949.34",
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
      "image": "https://soaresmartinsadv.com/src/assets/images/regenerated_image_1790258463259.png",
      "datePosted": "2026-09-24",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Praia do Flamengo, nº 12, Apto 306",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ",
        "postalCode": "22210-030",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -22.9234,
        "longitude": -43.1746
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
              <Building2 size={13} className="text-bronze" /> 40 m² • Amplo Conjugado
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-medium">
              <Shield size={13} className="text-emerald-400" /> Edifício de 1940 • Portaria 24h
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-medium">
              <Sun size={13} className="text-amber-400" /> Orla da Praia do Flamengo
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20306%20na%20Praia%20do%20Flamengo%2012%20(Edif%C3%ADcio%20Rio%20Carioca)."
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
                <li><strong className="text-white">Endereço Principal:</strong> Praia do Flamengo, nº 12, Apto 306 — Flamengo, Rio de Janeiro/RJ (CEP: 22210-030)</li>
                <li><strong className="text-white">Denominação do Condomínio:</strong> Condomínio do Edifício Rio Carioca</li>
                <li><strong className="text-white">Registro Imobiliário:</strong> Matrícula nº 154.629 do Cartório do 9º Ofício de Registro de Imóveis do Rio de Janeiro (9º RGI/RJ)</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0.258.058-7</li>
                <li><strong className="text-white">Área Edificada Privativa:</strong> 40 metros quadrados (40 m²)</li>
                <li><strong className="text-white">Tipologia e Divisão:</strong> Amplo conjugado dividido em sala, quarto privativo, cozinha e banheiro social</li>
                <li><strong className="text-white">Acessórios e Conforto:</strong> Sem vaga de garagem, equipado com sistema de interfone</li>
                <li><strong className="text-white">Estado de Conservação:</strong> Apresentando razoável estado de conservação face ao tempo de uso</li>
                <li><strong className="text-white">Estrutura do Edifício (1940):</strong> Prédio composto de 2 blocos com 13 andares, totalizando 270 apartamentos, servido por 4 elevadores, portaria 24 horas, sem infraestrutura de lazer (taxas condominiais enxutas)</li>
                <li><strong className="text-white">Bairro / Zona:</strong> Flamengo — Zona Sul da Capital / RJ</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução, Lances e Avaliação
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial / TJRJ</li>
                <li><strong className="text-white">Valor da Avaliação Oficial:</strong> R$ 627.898,69</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 627.898,69 (26/10/2026 às 12:00h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (50%):</strong> R$ 313.949,34 (29/10/2026 às 12:00h) — desconto de 50% (~R$ 7.848,73/m²)</li>
                <li><strong className="text-white">Foro / Juízo:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ) / Comarca da Capital</li>
                <li><strong className="text-white">Condições de Pagamento:</strong> Pagamento à vista em 24h ou parcelamento judicial previsto no Art. 895 do CPC (25% de entrada e saldo em até 30 parcelas mensais corrigidas, com hipoteca judicial)</li>
                <li><strong className="text-white">Sub-rogação Fiscal:</strong> Débitos de IPTU pretéritos sub-rogam-se no preço arrematado (Art. 130, parágrafo único, do CTN)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Caracterização da Região */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <ShieldCheck size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado na Orla do Flamengo e Potencial de Rentabilidade
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Praia do Flamengo é um dos endereços mais tradicionais, cinematográficos e perenes de toda a Zona Sul do Rio de Janeiro. Localizado em frente à imensidão verde e às ciclovias do Parque Brigadeiro Eduardo Gomes (Aterro do Flamengo), projetado por Burle Marx, o trecho oferece vista deslumbrante para a Baía de Guanabara e o Pão de Açúcar, combinando qualidade de vida náutica e esportiva com mobilidade ímpar.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O imóvel no Condomínio do Edifício Rio Carioca desfruta de acesso imediato a poucos minutos a pé das estações do metrô Catete e Glória, permitindo conexões diretas em menos de 10 minutos com o Centro financeiro da cidade, bem como com Botafogo, Copacabana e Ipanema. Imóveis compactos de 40 m² com sala e quarto privativo nesta faixa de localização possuem baixíssima vacância e grande liquidez, atendendo tanto a profissionais e estudantes quanto a locações temporárias corporativas e turísticas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
              <div className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Home size={18} /> M² Excepcional na Orla Carioca: ~R$ 7.848/m²
              </div>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Na orla da Praia do Flamengo e em suas imediações nobres, o valor do metro quadrado residencial varia entre R$ 12.000,00 e R$ 16.000,00/m². O lance inicial de 2ª praça a R$ 313.949,34 representa um valor de apenas R$ 7.848,73/m², assegurando uma expressiva margem de segurança patrimonial superior a 40% a 50% frente ao mercado convencional.
              </p>
            </div>

            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-2">
              <div className="text-emerald-400 font-serif font-bold text-base flex items-center gap-2">
                <Sun size={18} /> Condomínio Econômico e Portaria 24 Horas
              </div>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Com 270 unidades distribuídas em 2 blocos e sem custos onerosos de áreas de lazer ou garagens, a cota condominial mensal do Edifício Rio Carioca é notavelmente enxuta, maximizando a rentabilidade líquida do investidor (Cap Rate elevado) em qualquer modelo de locação.
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
            A participação em leilões judiciais no Estado do Rio de Janeiro exige cadastramento e habilitação formal prévia perante o leiloeiro público designado pelo Tribunal de Justiça do Estado do Rio de Janeiro. O Código de Processo Civil admite duas formas de pagamento:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-white font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} className="text-bronze" /> Pagamento À Vista
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                O arrematante deposita o valor integral do lance em conta judicial vinculada ao processo no prazo improrrogável de até 24 (vinte e quatro) horas após o pregão, acompanhado da comissão de 5% devida ao leiloeiro oficial. A proposta à vista tem preferência legal sobre ofertas a prazo.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-white font-serif font-bold text-base flex items-center gap-2">
                <Calendar size={18} className="text-emerald-400" /> Parcelamento Judicial (Art. 895 do CPC)
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                O investidor pode submeter proposta escrita nos autos judiciais antes da abertura do pregão para parcelar a arrematação: pagamento de entrada mínima de 25% (R$ 78.487,34 na 2ª praça) e o saldo dividido em até 30 parcelas mensais corrigidas por índice oficial da Justiça estadual, ficando o próprio imóvel registrado sob hipoteca judicial até a quitação final.
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
            A assessoria jurídica imobiliária da Soares Martins Advogados blinda sua arrematação contra surpresas e custos imprevistos, conduzindo a auditoria completa da Matrícula nº 154.629 do 9º RGI/RJ, apuração de eventuais passivos condominiais, verificação da regularidade de intimação dos executados e intervenientes nos autos do TJRJ e assistência integral até a entrega física das chaves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 1. Due Diligence Prévia
              </div>
              <p className="text-xs text-text-muted">
                Auditoria minuciosa da Matrícula 154.629 no 9º RGI, certidões cíveis e fiscais, conformidade do edital e análise das intimações legais.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 2. Estratégia de Lance
              </div>
              <p className="text-xs text-text-muted">
                Habilitação perante o leiloeiro oficial e estruturação de proposta formal de parcelamento sob o Art. 895 do CPC ou lance estratégico em 2ª praça.
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
                Expedição célere da Carta de Arrematação, cancelamento de ônus no 9º RGI e cumprimento do Mandado Judicial de Imissão na Posse.
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20306%20na%20Praia%20do%20Flamengo%2012%20(Edif%C3%ADcio%20Rio%20Carioca)."
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20da%20Praia%20do%20Flamengo%2012%20apto%20306."
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

export default FlamengoPraiaDoFlamengo12AuctionPage;
