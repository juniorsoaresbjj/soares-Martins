import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Sparkles,
  DollarSign, Compass, Home, Award, Layers, Shield, KeyRound, Check,
  Car, Trees, Waves
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1787838989908.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface IpanemaBaraoDaTorreAuctionPageProps {
  onBack?: () => void;
}

const IpanemaBaraoDaTorreAuctionPage: React.FC<IpanemaBaraoDaTorreAuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['ipanema-barao-da-torre-292'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/ipanema/apartamento/rua-barao-da-torre-292-apto-404/";

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
        "lowPrice": "814412.73",
        "highPrice": "1357354.55",
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
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 bg-bronze/90 text-midnight font-bold text-xs px-3 py-1.5 rounded-lg border border-bronze/40 shadow-lg">
                    <Car size={13} /> 1 VAGA NA ESCRITURA • LAZER & ELEVADOR
                  </span>
                </div>
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
                    <div className="text-sm font-semibold text-emerald-300 mb-2">60% da Avaliação</div>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20404%20na%20Rua%20Bar%C3%A3o%20da%20Torre%20292%20em%20Ipanema%20-%20Rio%20de%20Janeiro."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <PhoneCall size={15} /> {tC.btnConsultReport}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ficha Técnica Rápida */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-midnight-light/30 border border-white/10 rounded-2xl p-5 text-left">
            <Building2 className="text-bronze mb-2" size={24} />
            <div className="text-xs text-text-muted uppercase tracking-wider">Área Privativa</div>
            <div className="text-xl font-bold text-white mt-1">45 m²</div>
            <div className="text-[11px] text-text-muted mt-0.5">4º Andar • Apto 404</div>
          </div>
          <div className="bg-midnight-light/30 border border-white/10 rounded-2xl p-5 text-left">
            <Car className="text-bronze mb-2" size={24} />
            <div className="text-xs text-text-muted uppercase tracking-wider">Vaga de Garagem</div>
            <div className="text-xl font-bold text-white mt-1">1 Vaga</div>
            <div className="text-[11px] text-text-muted mt-0.5">Registrada na Escritura</div>
          </div>
          <div className="bg-midnight-light/30 border border-white/10 rounded-2xl p-5 text-left">
            <Shield className="text-bronze mb-2" size={24} />
            <div className="text-xs text-text-muted uppercase tracking-wider">Infraestrutura</div>
            <div className="text-xl font-bold text-white mt-1">Padrão Excelente</div>
            <div className="text-[11px] text-text-muted mt-0.5">Lazer, Elevador e Funcionários</div>
          </div>
          <div className="bg-midnight-light/30 border border-white/10 rounded-2xl p-5 text-left">
            <DollarSign className="text-emerald-400 mb-2" size={24} />
            <div className="text-xs text-text-muted uppercase tracking-wider">Lance 2ª Praça</div>
            <div className="text-xl font-bold text-emerald-400 mt-1">R$ 814.412,73</div>
            <div className="text-[11px] text-emerald-400/80 mt-0.5">60% da Avaliação (-40%)</div>
          </div>
        </div>
      </section>

      {/* Resumo do Imóvel & Identificação Imobiliária */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          <div className="lg:col-span-8 space-y-8">
            {/* Box 1: Descrição Detalhada */}
            <div className="bg-midnight-light/20 rounded-2xl p-8 border border-white/10 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <FileCheck className="text-bronze" size={24} /> Descrição do Imóvel e Características do Edifício
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                O imóvel objeto de leilão judicial corresponde ao <strong>Apartamento nº 404</strong>, situado no <strong>quarto andar</strong> do edifício residencial localizado na prestigiada <strong>Rua Barão da Torre, nº 292</strong>, no bairro de <strong>Ipanema</strong>, uma das regiões mais valorizadas e procuradas do Rio de Janeiro/RJ.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Com <strong>45 m² de área privativa</strong>, a unidade conta com o valioso direito a <strong>uma vaga de garagem na escritura</strong>, item de extrema raridade e alta valorização em Ipanema, onde a oferta de vagas é severamente restrita.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                O condomínio é caracterizado por um <strong>padrão construtivo e de conservação excelente para a área</strong>, dispondo de moderna estrutura de elevadores, espaço de lazer para os condôminos, portaria com controle de segurança, interfonia e quadro completo de funcionários dedicados.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="space-y-2">
                  <div className="text-bronze font-bold uppercase tracking-wider">Identificação Registral e Fiscal</div>
                  <div className="text-gray-300"><strong>Cartório do 5º RGI/RJ:</strong> Matrícula nº 104771</div>
                  <div className="text-gray-300"><strong>Inscrição Municipal (IPTU):</strong> 3009818-0</div>
                </div>
                <div className="space-y-2">
                  <div className="text-bronze font-bold uppercase tracking-wider">Metragem e Posição</div>
                  <div className="text-gray-300"><strong>Área Edificada:</strong> 45 m² privativos</div>
                  <div className="text-gray-300"><strong>Vaga:</strong> 1 vaga na escritura</div>
                </div>
              </div>
            </div>

            {/* Box 2: Contexto de Mercado e Valorização em Ipanema */}
            <div className="bg-midnight-light/20 rounded-2xl p-8 border border-white/10 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <Compass className="text-bronze" size={24} /> Contexto de Mercado & Potencial Imobiliário na Rua Barão da Torre
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                A <strong>Rua Barão da Torre</strong> representa um dos endereços residenciais mais sofisticados e desejados de Ipanema. Arborizada, tranquila e estrategicamente posicionada a poucas quadras da Praia de Ipanema (Posto 9 e Posto 10), da Lagoa Rodrigo de Freitas e da Praça Nossa Senhora da Paz, a via concentra restaurantes de alta gastronomia, boutiques de luxo, galerias de arte e fácil acesso à estação de Metrô.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                No mercado tradicional de Ipanema, o metro quadrado residencial supera consistentemente a marca de <strong>R$ 25.000 a R$ 35.000/m²</strong> para unidades compactas com vaga de garagem. A oportunidade de arrematação em 2ª praça por <strong>R$ 814.412,73</strong> (aproximadamente R$ 18.098/m² com vaga na escritura) oferece um desconto real de <strong>40% sobre a avaliação judicial oficial (economia de R$ 542.941,82)</strong>, gerando uma margem excepcional para:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-midnight/60 p-4 rounded-xl border border-white/10">
                  <div className="text-bronze font-bold text-sm mb-1">Moradia Nobre</div>
                  <p className="text-xs text-text-muted">Residência de alto padrão com vaga e lazer em localização privilegiada na Zona Sul.</p>
                </div>
                <div className="bg-midnight/60 p-4 rounded-xl border border-white/10">
                  <div className="text-bronze font-bold text-sm mb-1">Locação Premium</div>
                  <p className="text-xs text-text-muted">Altíssima demanda para locação por temporada (Airbnb) ou residencial com rentabilidade superior.</p>
                </div>
                <div className="bg-midnight/60 p-4 rounded-xl border border-white/10">
                  <div className="text-bronze font-bold text-sm mb-1">Ganho de Capital</div>
                  <p className="text-xs text-text-muted">Potencial de valorização e liquidez rápida no quadrilátero mais valorizado do Rio.</p>
                </div>
              </div>
            </div>

            {/* Box 3: Como Funciona a Participação e Fases */}
            <div className="bg-midnight-light/20 rounded-2xl p-8 border border-white/10 space-y-6">
              <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <Layers className="text-bronze" size={24} /> Como Participar do Leilão & Fases de Acompanhamento
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-bronze/20 text-bronze font-bold flex items-center justify-center shrink-0 text-sm">1</div>
                  <div>
                    <h3 className="text-white font-bold text-base">Auditoria Jurídica Prévia (Due Diligence)</h3>
                    <p className="text-xs text-gray-300 mt-1">Análise minuciosa dos autos processuais, intimações, certidões fiscais e débitos condominiais ou tributários para garantir a higidez jurídica da compra.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-bronze/20 text-bronze font-bold flex items-center justify-center shrink-0 text-sm">2</div>
                  <div>
                    <h3 className="text-white font-bold text-base">Habilitação e Estratégia de Lance</h3>
                    <p className="text-xs text-gray-300 mt-1">Cadastro homologado junto ao leiloeiro oficial, estruturação do teto de lances ou elaboração de proposta de parcelamento judicial nos termos do Art. 895 do CPC.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-bronze/20 text-bronze font-bold flex items-center justify-center shrink-0 text-sm">3</div>
                  <div>
                    <h3 className="text-white font-bold text-base">Homologação Judicial e Guia de Pagamento</h3>
                    <p className="text-xs text-gray-300 mt-1">Acompanhamento dos prazos recursais, emissão e pagamento das guias judiciais, comissão do leiloeiro e recolhimento de ITBI.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-bronze/20 text-bronze font-bold flex items-center justify-center shrink-0 text-sm">4</div>
                  <div>
                    <h3 className="text-white font-bold text-base">Carta de Arrematação, Registro no 5º RGI e Posse</h3>
                    <p className="text-xs text-gray-300 mt-1">Expedição da Carta de Arrematação, cancelamento de ônus anteriores na matrícula 104771 e cumprimento do mandado judicial de imissão na posse com entrega das chaves.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Direita: Auditoria & Informações Rápidas */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-midnight-light/30 rounded-2xl p-6 border border-bronze/30 space-y-4">
              <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                <ShieldCheck className="text-bronze" size={20} /> Assessoria Soares Martins
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Nosso escritório é sediado em Ipanema (Rua Visconde de Pirajá, 414) e oferece representação jurídica de ponta em leilões judiciais em todo o Rio de Janeiro.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0" /> Auditoria processual e registral completa
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0" /> Cálculo de viabilidade financeira e custos
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0" /> Parcelamento judicial (Art. 895 CPC)
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0" /> Baixa de penhoras e hipotecas no 5º RGI
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0" /> Mandado e cumprimento de imissão na posse
                </li>
              </ul>

              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20uma%20an%C3%A1lise%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20na%20Rua%20Bar%C3%A3o%20da%20Torre%20292."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
              >
                <PhoneCall size={14} /> Falar com Especialista
              </a>
            </div>

            <div className="bg-midnight-light/20 rounded-2xl p-6 border border-white/10 space-y-3 text-xs text-text-muted">
              <div className="text-white font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                <Landmark size={15} className="text-bronze" /> Dados do Edital
              </div>
              <div className="pt-2 space-y-2 border-t border-white/10">
                <div className="flex justify-between">
                  <span>Processo:</span>
                  <span className="text-white font-medium">Execução Judicial</span>
                </div>
                <div className="flex justify-between">
                  <span>Comarca:</span>
                  <span className="text-white font-medium">Capital / TJRJ</span>
                </div>
                <div className="flex justify-between">
                  <span>Matrícula:</span>
                  <span className="text-white font-medium">104771 (5º RGI)</span>
                </div>
                <div className="flex justify-between">
                  <span>IPTU:</span>
                  <span className="text-white font-mono">3009818-0</span>
                </div>
                <div className="flex justify-between">
                  <span>Avaliação:</span>
                  <span className="text-bronze font-bold">R$ 1.357.354,55</span>
                </div>
                <div className="flex justify-between">
                  <span>2ª Praça (60%):</span>
                  <span className="text-emerald-400 font-bold">R$ 814.412,73</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artigos e Links Internos */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-midnight-light/30 rounded-3xl p-8 border border-white/10 space-y-6 text-left">
          <div className="flex items-center gap-3 text-bronze">
            <FileText size={24} className="shrink-0" />
            <h2 className="text-2xl font-serif text-white font-bold">
              Artigos e Guias Jurídicos Relacionados
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-text-muted">
            Consulte nossa base de conhecimento sobre aquisição segura de imóveis em leilões judiciais e direito imobiliário no Rio de Janeiro:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <Link 
              to="/blog/como-analisar-um-imovel-em-leilao-antes-de-dar-um-lance/"
              className="bg-midnight/60 hover:bg-midnight border border-white/10 hover:border-bronze/40 p-5 rounded-2xl transition-all group"
            >
              <div className="text-xs text-bronze font-bold uppercase tracking-wider mb-2">Guia Prático</div>
              <h3 className="text-white font-serif font-bold text-sm group-hover:text-bronze transition-colors">
                Como Analisar um Imóvel em Leilão Antes de Dar um Lance
              </h3>
              <p className="text-xs text-text-muted mt-2">Checklist indispensável para auditar o edital, matrícula e riscos ocultos.</p>
            </Link>

            <Link 
              to="/blog/quais-dividas-acompanham-o-imovel-em-leilao/"
              className="bg-midnight/60 hover:bg-midnight border border-white/10 hover:border-bronze/40 p-5 rounded-2xl transition-all group"
            >
              <div className="text-xs text-bronze font-bold uppercase tracking-wider mb-2">Tributário & Condomínio</div>
              <h3 className="text-white font-serif font-bold text-sm group-hover:text-bronze transition-colors">
                Quais Dívidas Acompanham o Imóvel em Leilão?
              </h3>
              <p className="text-xs text-text-muted mt-2">Entenda o Art. 130 do CTN e a sub-rogação de débitos tributários sobre o preço.</p>
            </Link>

            <Link 
              to="/blog/e-possivel-visitar-um-imovel-de-leilao-antes-de-dar-o-lance/"
              className="bg-midnight/60 hover:bg-midnight border border-white/10 hover:border-bronze/40 p-5 rounded-2xl transition-all group"
            >
              <div className="text-xs text-bronze font-bold uppercase tracking-wider mb-2">Visitação & Posse</div>
              <h3 className="text-white font-serif font-bold text-sm group-hover:text-bronze transition-colors">
                É Possível Visitar um Imóvel de Leilão Antes do Lance?
              </h3>
              <p className="text-xs text-text-muted mt-2">Descubra as regras de vistoria e procedimentos para garantir segurança.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Específica */}
      <section className="max-w-7xl mx-auto px-6 pb-16 space-y-12">
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <HelpCircle size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              {tC.faqTitle} — Rua Barão da Torre nº 292 / Apto 404
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
                  <div className="px-6 pb-6 text-text-muted text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>

        {/* CTA Institucional OAB Compliance */}
        <div className="bg-gradient-to-br from-midnight-light to-midnight rounded-3xl p-8 sm:p-12 border border-bronze/30 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Assessoria Jurídica em Leilões Imobiliários no Rio de Janeiro
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Consulte a equipe de <strong>Soares Martins Advogados</strong> para análise completa do processo de execução, auditoria das certidões no 5º RGI e assessoria integral até a entrega das chaves.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20na%20Rua%20Bar%C3%A3o%20da%20Torre%20292."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-xl flex items-center gap-2"
            >
              <PhoneCall size={16} /> Atendimento via WhatsApp
            </a>
            <Link 
              to="/contato/"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all border border-white/10 flex items-center gap-2"
            >
              <MapPin size={16} /> Escritório em Ipanema/RJ
            </Link>
          </div>
          <div className="text-[11px] text-text-muted pt-4 border-t border-white/10 max-w-xl mx-auto">
            Atuação ética e em estrita conformidade com as normas da Ordem dos Advogados do Brasil (OAB/RJ). As informações disponibilizadas têm caráter estritamente informativo.
          </div>
        </div>
      </section>

      {/* Modal de Detalhes do Edital */}
      {showEditalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-md">
          <div className="bg-midnight-light border border-white/10 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <FileText className="text-bronze" size={20} /> Ficha Técnica e Dados Processuais
              </h3>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-white text-sm uppercase tracking-wider font-bold cursor-pointer"
              >
                Fechar
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300">
              <div className="bg-midnight/60 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="text-bronze font-bold uppercase tracking-wider text-xs">Identificação do Bem</div>
                <p><strong>Endereço:</strong> Rua Barão da Torre, nº 292, Apartamento 404 — Ipanema, Rio de Janeiro/RJ</p>
                <p><strong>Área Privativa:</strong> 45 m²</p>
                <p><strong>Vaga:</strong> 1 vaga de garagem na escritura</p>
                <p><strong>Condomínio:</strong> Padrão excelente, com elevador, área de lazer e funcionários</p>
              </div>

              <div className="bg-midnight/60 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="text-bronze font-bold uppercase tracking-wider text-xs">Dados Registrais & Fazendários</div>
                <p><strong>Cartório de Registro:</strong> 5º Ofício de Registro de Imóveis (5º RGI/RJ)</p>
                <p><strong>Matrícula:</strong> 104771</p>
                <p><strong>Inscrição Municipal (IPTU):</strong> 3009818-0</p>
              </div>

              <div className="bg-midnight/60 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="text-bronze font-bold uppercase tracking-wider text-xs">Valores e Praças do Leilão</div>
                <p><strong>Valor de Avaliação:</strong> R$ 1.357.354,55</p>
                <p><strong>1ª Praça:</strong> 09/09/2026 às 13:00h — Lance mínimo: R$ 1.357.354,55 (100%)</p>
                <p><strong>2ª Praça:</strong> 11/09/2026 às 13:00h — Lance mínimo: R$ 814.412,73 (60% da avaliação)</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end gap-4">
              <button 
                onClick={() => setShowEditalModal(false)}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all"
              >
                Fechar
              </button>
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20404%20na%20Rua%20Bar%C3%A3o%20da%20Torre%20292%20em%20Ipanema."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all flex items-center gap-2"
              >
                <PhoneCall size={14} /> Falar com Advogado
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IpanemaBaraoDaTorreAuctionPage;
