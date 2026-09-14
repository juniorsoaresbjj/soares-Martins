import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Sparkles, Car, PartyPopper
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1789393943089.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface JardimGuanabaraBrenoGuimaraes106AuctionPageProps {
  onBack?: () => void;
}

const JardimGuanabaraBrenoGuimaraes106AuctionPage: React.FC<JardimGuanabaraBrenoGuimaraes106AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['jardim-guanabara-rua-breno-guimaraes-106-apto-105'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/jardim-guanabara/apartamento/rua-breno-guimaraes-106-apto-105/";

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
      "name": "Soares Martins Advogados - Assessoria em Leilões Judiciais de Imóveis no Rio de Janeiro",
      "image": "https://soaresmartinsadv.com/assets/images/logo.png",
      "@id": "https://soaresmartinsadv.com/#legal-service",
      "url": "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/",
      "telephone": "+55-21-97954-9241",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Visconde de Pirajá, 414, Sala 718",
        "addressLocality": "Ipanema",
        "addressRegion": "RJ",
        "postalCode": "22410-002",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -22.9838,
        "longitude": -43.2045
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Leilão Judicial Apartamento Jardim Guanabara - Rua Breno Guimarães 106 Apto 105",
      "description": item.description,
      "image": "https://soaresmartinsadv.com/assets/images/regenerated_image_1789393943089.png",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "310000.00",
        "highPrice": "620000.00",
        "offerCount": 2,
        "offers": [
          {
            "@type": "Offer",
            "name": "1ª Praça",
            "price": "620000.00",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/PreOrder",
            "validFrom": "2026-11-19T13:00:00-03:00"
          },
          {
            "@type": "Offer",
            "name": "2ª Praça (50% da avaliação)",
            "price": "310000.00",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/PreOrder",
            "validFrom": "2026-11-26T13:00:00-03:00"
          }
        ]
      }
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

  const metaTitle = "Leilão Judicial Apartamento Jardim Guanabara 122m² — 2 Vagas | Soares Martins Advogados";
  const metaDesc = "Assessoria jurídica para o leilão judicial de apartamento de 122 m² no Jardim Guanabara, Ilha do Governador/RJ. Rua Breno Guimarães nº 106, apto 105. 2 vagas de garagem, salão de festas e playground. 11º RGI Matrícula 86.056. 2ª Praça a 50% por R$ 310.000,00.";

  return (
    <div className="bg-sand-light/30 min-h-screen">
      <SEO 
        title={metaTitle}
        description={metaDesc}
        canonical={canonicalUrl}
        keywords="leilão judicial jardim guanabara, leilao ilha do governador rj, leilao rua breno guimaraes 106, leilao judicial apartamento ilha do governador, assessoria juridica leilao rj, leilao 11 rgi rj matricula 86056, due diligence leilao judicial rj"
        schemaJson={JSON.stringify(pageSchema)}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-sand-dark/40 py-3 text-xs text-text-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 flex-wrap">
            <Link to="/" className="hover:text-bronze transition-colors">{tC.home}</Link>
            <ChevronRight size={12} className="text-sand-dark" />
            <Link to="/servicos/" className="hover:text-bronze transition-colors">{tC.practiceAreas}</Link>
            <ChevronRight size={12} className="text-sand-dark" />
            <Link to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" className="hover:text-bronze transition-colors">{tC.auctionsTitle}</Link>
            <ChevronRight size={12} className="text-sand-dark" />
            <span className="text-midnight font-medium truncate max-w-[200px] sm:max-w-xs">Jardim Guanabara — Rua Breno Guimarães 106 (Apto 105)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-midnight text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link 
              to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/"
              className="inline-flex items-center text-xs uppercase tracking-wider text-bronze hover:text-white transition-colors gap-1 font-semibold"
            >
              <ArrowLeft size={14} /> {tC.backToAuctions}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Col: Headings and Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/20 text-bronze-light border border-bronze/30 text-xs font-medium uppercase tracking-wider mb-4">
                <Gavel size={13} /> {tC.opportunityAnalysis} • Jardim Guanabara / Ilha do Governador
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-4">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6 font-light">
                {item.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-white/80 mb-8">
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <MapPin size={13} className="text-bronze" /> Jardim Guanabara — Ilha do Governador / RJ
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Building2 size={13} className="text-bronze" /> 122 m² privativos • Apto 105
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Car size={13} className="text-bronze" /> 02 Vagas de Garagem
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <PartyPopper size={13} className="text-bronze" /> Playground e Salão de Festas
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Scale size={13} className="text-bronze" /> 11º RGI Matrícula 86.056
                </span>
              </div>

              {/* Photo Box */}
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative group bg-midnight-light aspect-video max-h-[380px] w-full">
                <img 
                  src={buildingImage} 
                  alt="Edifício Residencial na Rua Breno Guimarães nº 106, Jardim Guanabara, Ilha do Governador, Rio de Janeiro - Leilão Judicial" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="bg-midnight/80 backdrop-blur-sm px-3 py-1 rounded-md border border-white/20">
                    Fachada do Edifício • Rua Breno Guimarães nº 106, Jardim Guanabara/RJ
                  </span>
                  <span className="text-[11px] text-white/70">
                    122 m² • 2 Vagas • Playground e Salão de Festas
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Auction Box & Financial Card */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 lg:sticky lg:top-24">
              <div className="border-b border-white/10 pb-6 mb-6">
                <span className="text-xs uppercase tracking-wider text-bronze font-bold block mb-1">
                  {tC.appraisalValueLabel}
                </span>
                <div className="flex items-baseline gap-2">
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
                    <div className="text-sm font-semibold text-emerald-300 mb-2">50% da avaliação</div>
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
                    <span>Vagas de Garagem:</span>
                    <span className="text-white font-medium">02 (duas) vagas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Comodidades:</span>
                    <span className="text-white font-medium">Playground e Salão de Festas</span>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20105%20na%20Rua%20Breno%20Guimar%C3%A3es%20106%20no%20Jardim%20Guanabara%20(Ilha%20do%20Governador)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <PhoneCall size={15} /> {tC.btnConsultAuditors}
                  </a>
                </div>

                <div className="mt-4 text-[11px] text-white/50 text-center leading-relaxed">
                  {tC.disclaimerLegal}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Ficha Técnica */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm">
              <h2 className="text-xl font-serif font-bold text-midnight mb-6 flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <FileCheck className="text-bronze" size={22} /> Ficha Técnica da Oportunidade
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Imóvel</span>
                  <span className="text-midnight font-semibold">Apartamento Residencial nº 105</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Localização</span>
                  <span className="text-midnight font-semibold">Rua Breno Guimarães, nº 106, Apto 105</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Bairro / Cidade</span>
                  <span className="text-midnight font-semibold">Jardim Guanabara, Ilha do Governador — Rio de Janeiro/RJ</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Área Privativa</span>
                  <span className="text-midnight font-semibold">122,00 m² (cento e vinte e dois metros quadrados)</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Vagas de Garagem</span>
                  <span className="text-midnight font-semibold">Direito a 02 (duas) vagas de garagem no condomínio</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Infraestrutura do Condomínio</span>
                  <span className="text-midnight font-semibold">Playground infantil e Salão de festas comunitário</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Registro de Imóveis (RGI)</span>
                  <span className="text-midnight font-semibold">11º Ofício do RGI/RJ — Matrícula nº 86.056</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Inscrição Municipal (IPTU)</span>
                  <span className="text-midnight font-semibold font-mono">1.898.000-3</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Avaliação Judicial Homologada</span>
                  <span className="text-midnight font-semibold">R$ 620.000,00</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Lance Mínimo na 2ª Praça (50%)</span>
                  <span className="text-emerald-600 font-bold text-base">R$ 310.000,00 (Deságio de 50%)</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Custo por Metro Quadrado (2ª Praça)</span>
                  <span className="text-midnight font-semibold font-mono">~R$ 2.540,98 / m² (com 2 vagas)</span>
                </div>
                <div>
                  <span className="text-text-muted text-xs block uppercase font-medium">Preço Médio de Mercado na Região</span>
                  <span className="text-midnight font-semibold">R$ 5.500 a R$ 8.000 / m² no Jardim Guanabara</span>
                </div>
              </div>
            </section>

            {/* 2. Resumo do Imóvel & Identificação Imobiliária */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-midnight flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Building2 className="text-bronze" size={22} /> Resumo e Identificação do Imóvel
              </h2>
              <div className="prose prose-sm max-w-none text-text leading-relaxed space-y-4">
                <p>
                  O imóvel penhorado e levado a leilão judicial consiste no <strong>Apartamento nº 105</strong> do edifício situado na 
                  <strong> Rua Breno Guimarães nº 106</strong>, no tradicional, seguro e valorizado bairro do <strong>Jardim Guanabara</strong>, 
                  na Ilha do Governador, Zona Norte da cidade do Rio de Janeiro/RJ.
                </p>
                <p>
                  Com uma generosa <strong>área privativa de 122 metros quadrados</strong>, o imóvel oferece planta ampla e confortável, 
                  ideal para famílias que buscam espaço, tranquilidade e excelente qualidade de vida. O edifício conta com infraestrutura 
                  completa de convivência, dispondo de <strong>playground infantil</strong> e <strong>salão de festas</strong> para comemorações 
                  privativas dos condôminos. Além disso, a unidade possui o <strong>direito a 02 (duas) vagas de garagem</strong> no condomínio, 
                  um diferencial de raríssima disponibilidade no mercado da região.
                </p>
                <p>
                  A <strong>Rua Breno Guimarães</strong> é uma via estritamente residencial, arborizada e segura no Jardim Guanabara, 
                  situada em localização privilegiada, a poucos minutos da orla da Praia da Bica — principal polo gastronômico e de lazer da Ilha —, 
                  além de facilidade de acesso a renomados colégios, supermercados, academias, clubes sociais e vias de ligação expressa.
                </p>

                <div className="bg-sand-light/50 p-6 rounded-xl border border-sand-dark/30 mt-4 space-y-3">
                  <h3 className="font-serif font-bold text-midnight text-base flex items-center gap-2">
                    <Landmark size={18} className="text-bronze" /> Identificação Registral e Cadastral
                  </h3>
                  <ul className="space-y-2 text-xs text-text-muted">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-bronze mt-0.5 shrink-0" />
                      <span><strong>11º Ofício de Registro de Imóveis do Rio de Janeiro:</strong> Devidamente registrado sob a <strong>Matrícula nº 86.056</strong>, com todas as confrontações, frações ideais de terreno e direito privativo às 02 vagas de garagem devidamente averbados.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-bronze mt-0.5 shrink-0" />
                      <span><strong>Inscrição Municipal (IPTU Carioca):</strong> Cadastrado na Secretaria Municipal de Fazenda sob o nº <strong>1.898.000-3</strong>, possibilitando a pesquisa e fiscalização preventiva de tributos territoriais.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-bronze mt-0.5 shrink-0" />
                      <span><strong>Valor Homologado pelo Juízo:</strong> A avaliação técnica judicial atribuiu ao imóvel o valor oficial de <strong>R$ 620.000,00</strong>, balizador oficial dos lances das duas praças.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Dados da Execução Judicial & Aspectos Processuais */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-midnight flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Scale className="text-bronze" size={22} /> Dados da Execução e Aspectos Processuais
              </h2>
              <div className="prose prose-sm max-w-none text-text leading-relaxed space-y-4">
                <p>
                  A expropriação judicial decorre de processo judicial em trâmite perante o <strong>Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</strong>. 
                  Como em toda arrematação judicial, a aquisição imobiliária constitui <strong>aquisição originária da propriedade</strong>, 
                  o que significa que os ônus gravados anteriormente (como penhoras e hipotecas) são cancelados por ordem do juiz da execução com a expedição da Carta de Arrematação.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-sand-light/40 rounded-xl border border-sand-dark/30">
                    <span className="text-xs uppercase font-bold text-bronze block mb-1">Aplicação do Art. 130 do CTN</span>
                    <p className="text-xs text-text-muted leading-relaxed">
                      Os débitos tributários de IPTU e taxas municipais sub-rogam-se sobre o respectivo preço da arrematação, 
                      assegurando que o arrematante não assuma passivos fiscais pretéritos sem prévia ressalva expressa no edital.
                    </p>
                  </div>
                  <div className="p-4 bg-sand-light/40 rounded-xl border border-sand-dark/30">
                    <span className="text-xs uppercase font-bold text-bronze block mb-1">Auditoria de Débitos de Condomínio</span>
                    <p className="text-xs text-text-muted leading-relaxed">
                      As obrigações condominiais possuem natureza <em>propter rem</em>. Nossa assessoria jurídica realiza a apuração prévia e detalhada 
                      junto à administração condominial e ao processo para garantir a correta destinação do lance ou a responsabilidade processual pactuada.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Contexto de Mercado & Atratividade Financeira */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-midnight flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Sparkles className="text-bronze" size={22} /> Contexto de Mercado & Atratividade Financeira
              </h2>
              <div className="prose prose-sm max-w-none text-text leading-relaxed space-y-4">
                <p>
                  O <strong>Jardim Guanabara</strong> é unanimemente reconhecido como o metro quadrado mais valorizado, seguro e nobre de toda a 
                  Ilha do Governador. Caracterizado por seu traçado urbanístico planejado, ruas estritamente residenciais e arborizadas, o bairro conta 
                  com elevada demanda tanto para moradia definitiva de famílias quanto para investimento de renda e revenda.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center my-6">
                  <div className="p-4 bg-midnight text-white rounded-xl">
                    <span className="text-[10px] uppercase tracking-wider text-bronze font-bold block mb-1">Mercado Tradicional</span>
                    <span className="text-lg font-serif font-bold">R$ 5.500 a R$ 8.000/m²</span>
                    <span className="text-[11px] text-text-muted block mt-1">Preço médio no Jardim Guanabara</span>
                  </div>
                  <div className="p-4 bg-sand-light rounded-xl border border-sand-dark/40">
                    <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold block mb-1">Avaliação Judicial (100%)</span>
                    <span className="text-lg font-serif font-bold text-midnight">~R$ 5.081/m²</span>
                    <span className="text-[11px] text-text-muted block mt-1">R$ 620.000,00 homologados</span>
                  </div>
                  <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-600 font-bold block mb-1">Lance 2ª Praça (50%)</span>
                    <span className="text-lg font-serif font-bold text-emerald-700">~R$ 2.540/m²</span>
                    <span className="text-[11px] text-emerald-600 block mt-1">R$ 310.000,00 (com 2 vagas)</span>
                  </div>
                </div>
                <p>
                  Com a arrematação em 2ª Praça pelo lance inicial de <strong>R$ 310.000,00</strong>, o arrematante obtém um deságio imediato de 
                  <strong> 50% em relação à avaliação judicial</strong> e um custo de aquisição de apenas <strong>R$ 2.540/m²</strong> para um apartamento 
                  de 122 m² com 2 vagas de garagem. Essa margem confere ampla blindagem financeira contra eventuais oscilações de mercado e permite 
                  expressivo ganho de capital na revenda ou excelente taxa de retorno de locação familiar.
                </p>
              </div>
            </section>

            {/* 5. Como Participar & Modalidades de Pagamento (Art. 895 CPC) */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-midnight flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Gavel className="text-bronze" size={22} /> Como Participar e Formas de Pagamento
              </h2>
              <div className="prose prose-sm max-w-none text-text leading-relaxed space-y-4">
                <p>
                  O leilão judicial será realizado eletronicamente por meio do portal do leiloeiro público designado. 
                  Para participar com total segurança jurídica, o interessado deve cumprir os requisitos legais de habilitação e homologação:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="p-5 bg-sand-light/40 rounded-xl border border-sand-dark/30">
                    <h3 className="font-bold text-midnight text-sm flex items-center gap-2 mb-2">
                      <Landmark size={16} className="text-bronze" /> 1. Pagamento à Vista
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      O arrematante efetua o depósito integral do lance via guia judicial vinculada aos autos do TJRJ em até 24 horas 
                      após o encerramento do leilão, juntamente com a comissão legal de 5% do leiloeiro público oficial.
                    </p>
                  </div>
                  <div className="p-5 bg-sand-light/40 rounded-xl border border-sand-dark/30">
                    <h3 className="font-bold text-midnight text-sm flex items-center gap-2 mb-2">
                      <Scale size={16} className="text-bronze" /> 2. Parcelamento Judicial (Art. 895 do CPC)
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      É facultado a qualquer interessado apresentar proposta escrita de pagamento parcelado: sinal de no mínimo 
                      <strong> 25% à vista</strong> e o saldo restante financiado em até <strong>30 (trinta) parcelas mensais</strong> corrigidas monetariamente, 
                      ficando o próprio imóvel como garantia mediante hipoteca judicial gravada na matrícula nº 86.056 do 11º RGI.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Importância da Assessoria Jurídica Especializada */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-midnight flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <ShieldCheck className="text-bronze" size={22} /> Por Que Contratar Assessoria Jurídica Especializada?
              </h2>
              <div className="prose prose-sm max-w-none text-text leading-relaxed space-y-4">
                <p>
                  Adquirir um imóvel em leilão judicial oferece retornos financeiros incomparáveis, mas exige rigor técnico inegociável. 
                  A Soares Martins Advogados atua para eliminar riscos ocultos e assegurar que a arrematação se traduza em propriedade segura e imissão tranquila na posse:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex gap-3 items-start p-4 bg-sand-light/30 rounded-xl">
                    <CheckCircle2 size={18} className="text-bronze shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-midnight block mb-1">Auditoria de Editais e Processos</strong>
                      <span className="text-text-muted">Conferência minuciosa de intimações dos executados, eventuais recursos pendentes e nulidades absolutas do processo.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-4 bg-sand-light/30 rounded-xl">
                    <CheckCircle2 size={18} className="text-bronze shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-midnight block mb-1">Mapeamento de Dívidas Propter Rem</strong>
                      <span className="text-text-muted">Levantamento preciso de débitos de IPTU na Fazenda Municipal e de taxas ordinárias e extraordinárias junto ao Condomínio.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-4 bg-sand-light/30 rounded-xl">
                    <CheckCircle2 size={18} className="text-bronze shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-midnight block mb-1">Estratégia de Lance e Habilitação</strong>
                      <span className="text-text-muted">Orientação estratégica para definir o teto financeiro de lance, garantindo viabilidade e retorno sob medida.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-4 bg-sand-light/30 rounded-xl">
                    <CheckCircle2 size={18} className="text-bronze shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-midnight block mb-1">Imissão na Posse e Registro Imobiliário</strong>
                      <span className="text-text-muted">Condução ágil da expedição da Carta de Arrematação, recolhimento do ITBI, registro no 11º RGI e mandado de desocupação/entrega das chaves.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. As 4 Fases do Acompanhamento */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-midnight flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <Landmark className="text-bronze" size={22} /> Fases do Acompanhamento Jurídico
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-sand-light/40 rounded-xl border border-sand-dark/30">
                  <span className="w-7 h-7 rounded-full bg-bronze text-white font-bold flex items-center justify-center text-xs mb-3">1</span>
                  <h3 className="font-bold text-midnight text-xs mb-1">Due Diligence Prévia</h3>
                  <p className="text-[11px] text-text-muted">Auditoria do edital, certidões da matrícula nº 86.056 do 11º RGI, débitos fiscais e condominiais.</p>
                </div>
                <div className="p-4 bg-sand-light/40 rounded-xl border border-sand-dark/30">
                  <span className="w-7 h-7 rounded-full bg-bronze text-white font-bold flex items-center justify-center text-xs mb-3">2</span>
                  <h3 className="font-bold text-midnight text-xs mb-1">Habilitação e Lance</h3>
                  <p className="text-[11px] text-text-muted">Cadastro e habilitação formal junto ao leiloeiro e estruturação da estratégia de lances.</p>
                </div>
                <div className="p-4 bg-sand-light/40 rounded-xl border border-sand-dark/30">
                  <span className="w-7 h-7 rounded-full bg-bronze text-white font-bold flex items-center justify-center text-xs mb-3">3</span>
                  <h3 className="font-bold text-midnight text-xs mb-1">Homologação e Registro</h3>
                  <p className="text-[11px] text-text-muted">Assinatura do auto de arrematação, guia judicial, ITBI e expedição da Carta no 11º RGI.</p>
                </div>
                <div className="p-4 bg-sand-light/40 rounded-xl border border-sand-dark/30">
                  <span className="w-7 h-7 rounded-full bg-bronze text-white font-bold flex items-center justify-center text-xs mb-3">4</span>
                  <h3 className="font-bold text-midnight text-xs mb-1">Imissão na Posse</h3>
                  <p className="text-[11px] text-text-muted">Ajuizamento do mandado de imissão de posse, cumprimento por oficial de justiça e entrega das chaves.</p>
                </div>
              </div>
            </section>

            {/* 8. Artigos e Links Internos Recomendados */}
            <section className="bg-sand-light/40 p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-4">
              <h2 className="text-lg font-serif font-bold text-midnight flex items-center gap-2">
                <FileText className="text-bronze" size={20} /> Artigos de Referência e Áreas Correlatas
              </h2>
              <p className="text-xs text-text-muted leading-relaxed">
                Aprofunde seus conhecimentos em segurança imobiliária e entenda os aspectos legais abordados por nossa equipe jurídica:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <Link 
                  to="/blog/due-diligence-imobiliaria-o-que-e/" 
                  className="p-3 bg-white rounded-lg border border-sand-dark/30 hover:border-bronze hover:text-bronze transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">Due Diligence Imobiliária: O Que É e Como Funciona</span>
                  <ExternalLink size={13} className="shrink-0 text-text-muted" />
                </Link>
                <Link 
                  to="/blog/apartamento-em-leilao-com-divida-de-condominio/" 
                  className="p-3 bg-white rounded-lg border border-sand-dark/30 hover:border-bronze hover:text-bronze transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">Apartamento em Leilão com Dívida de Condomínio: Riscos</span>
                  <ExternalLink size={13} className="shrink-0 text-text-muted" />
                </Link>
                <Link 
                  to="/blog/guia-compra-venda-imovel-segura-rio-de-janeiro/" 
                  className="p-3 bg-white rounded-lg border border-sand-dark/30 hover:border-bronze hover:text-bronze transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">Guia Prático para Compra e Venda Segura de Imóveis no RJ</span>
                  <ExternalLink size={13} className="shrink-0 text-text-muted" />
                </Link>
                <Link 
                  to="/servicos/direito-imobiliario/" 
                  className="p-3 bg-white rounded-lg border border-sand-dark/30 hover:border-bronze hover:text-bronze transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">Área de Atuação: Direito Imobiliário Estratégico</span>
                  <ExternalLink size={13} className="shrink-0 text-text-muted" />
                </Link>
                <Link 
                  to="/servicos/direito-patrimonial-familia/" 
                  className="p-3 bg-white rounded-lg border border-sand-dark/30 hover:border-bronze hover:text-bronze transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">Área de Atuação: Planejamento Patrimonial e Sucessório</span>
                  <ExternalLink size={13} className="shrink-0 text-text-muted" />
                </Link>
                <Link 
                  to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" 
                  className="p-3 bg-white rounded-lg border border-sand-dark/30 hover:border-bronze hover:text-bronze transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">Hub Geral: Assessoria Jurídica em Leilões Judiciais RJ</span>
                  <ExternalLink size={13} className="shrink-0 text-text-muted" />
                </Link>
              </div>
            </section>

            {/* 9. FAQ Específica */}
            <section className="bg-white p-8 rounded-2xl border border-sand-dark/40 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-midnight flex items-center gap-2 border-b border-sand-dark/30 pb-4">
                <HelpCircle className="text-bronze" size={22} /> Perguntas Frequentes sobre Este Imóvel no Jardim Guanabara
              </h2>
              <div className="space-y-4">
                {item.faqs.map((faq: { q: string; a: string }, idx: number) => (
                  <div 
                    key={idx} 
                    className="border border-sand-dark/40 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-sand-light/20 hover:bg-sand-light/40 transition-colors"
                    >
                      <span className="font-semibold text-sm text-midnight">{faq.q}</span>
                      {openFaq === idx ? <ChevronUp size={16} className="text-bronze shrink-0" /> : <ChevronDown size={16} className="text-sand-dark shrink-0" />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 sm:p-5 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-sand-dark/30 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 10. CTA Institucional OAB */}
            <section className="bg-gradient-to-br from-midnight via-midnight-light to-midnight text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl space-y-4">
                <span className="text-xs uppercase tracking-wider text-bronze font-bold block">
                  Segurança Jurídica & Auditoria Especializada
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
                  Pretende arrematar o apartamento na Rua Breno Guimarães nº 106?
                </h2>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Agende uma consulta com nossos advogados especialistas em leilões judiciais. Realizamos a auditoria processual completa, 
                  analisamos o edital e elaboramos parecer detalhado de viabilidade antes da apresentação do seu lance.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20105%20na%20Rua%20Breno%20Guimar%C3%A3es%20106%20no%20Jardim%20Guanabara%20(Ilha%20do%20Governador)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <PhoneCall size={15} /> Falar com Advogado pelo WhatsApp
                  </a>
                  <Link 
                    to="/contato/"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all border border-white/15 flex items-center justify-center gap-2"
                  >
                    Formulário de Contato
                  </Link>
                </div>
                <div className="pt-4 text-[10px] text-white/40 leading-relaxed border-t border-white/10">
                  Soares Martins Advogados • OAB/RJ • Atendimento em conformidade com o Provimento nº 205/2021 do CFOAB. 
                  Sede em Ipanema/RJ (Rua Visconde de Pirajá, 414, Sala 718) e atendimento digital para todo o Brasil.
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Box Agendamento / Contato */}
            <div className="bg-white p-6 rounded-2xl border border-sand-dark/40 shadow-sm sticky top-24">
              <h3 className="font-serif font-bold text-midnight text-base mb-4 border-b border-sand-dark/30 pb-3 flex items-center gap-2">
                <PhoneCall size={18} className="text-bronze" /> Atendimento Especializado
              </h3>
              <p className="text-xs text-text-muted leading-relaxed mb-6">
                Tenha o suporte de uma banca jurídica experiente nas varas cíveis e empresariais do Rio de Janeiro para garantir arrematação e imissão seguras.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-xs text-midnight">
                  <div className="w-8 h-8 rounded-full bg-sand-light flex items-center justify-center shrink-0 text-bronze">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <span className="block font-semibold">Ipanema, Rio de Janeiro</span>
                    <span className="text-[11px] text-text-muted">Rua Visconde de Pirajá, 414, Sl 718</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-midnight">
                  <div className="w-8 h-8 rounded-full bg-sand-light flex items-center justify-center shrink-0 text-bronze">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <span className="block font-semibold">Auditoria Preventiva 100%</span>
                    <span className="text-[11px] text-text-muted">Certidões, tributos e passivos</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20105%20na%20Rua%20Breno%20Guimar%C3%A3es%20106%20no%20Jardim%20Guanabara%20(Ilha%20do%20Governador)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mb-3"
              >
                <PhoneCall size={14} /> Falar no WhatsApp
              </a>

              <Link 
                to="/contato/"
                className="w-full bg-sand-light hover:bg-sand-dark/40 text-midnight font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all border border-sand-dark/40 flex items-center justify-center gap-2"
              >
                Agendar Consulta
              </Link>
            </div>

            {/* Outros Leilões em Destaque */}
            <div className="bg-white p-6 rounded-2xl border border-sand-dark/40 shadow-sm">
              <h3 className="font-serif font-bold text-midnight text-sm mb-4 border-b border-sand-dark/30 pb-3 flex items-center gap-2">
                <Gavel size={16} className="text-bronze" /> Outras Oportunidades no RJ
              </h3>
              <div className="space-y-4 text-xs">
                <Link 
                  to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-barao-de-itapagipe-417-bloco-a-apto-501/"
                  className="block p-3 rounded-lg border border-sand-dark/30 hover:border-bronze transition-colors group"
                >
                  <span className="text-[10px] uppercase font-bold text-bronze block">Tijuca • Barão de Itapagipe 417</span>
                  <span className="font-medium text-midnight group-hover:text-bronze transition-colors">Apto 501 Bloco A • 50 m² de Frente</span>
                  <span className="text-[11px] text-text-muted block mt-1">2ª Praça: R$ 140.000,00</span>
                </Link>

                <Link 
                  to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-general-urquiza-117-apto-501/"
                  className="block p-3 rounded-lg border border-sand-dark/30 hover:border-bronze transition-colors group"
                >
                  <span className="text-[10px] uppercase font-bold text-bronze block">Leblon • General Urquiza 117</span>
                  <span className="font-medium text-midnight group-hover:text-bronze transition-colors">Apto 501 • 75 m² • 2 Quartos</span>
                  <span className="text-[11px] text-text-muted block mt-1">2ª Praça: R$ 724.500,00</span>
                </Link>

                <Link 
                  to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/laranjeiras/apartamento/rua-das-laranjeiras-336-bloco-1-apto-826/"
                  className="block p-3 rounded-lg border border-sand-dark/30 hover:border-bronze transition-colors group"
                >
                  <span className="text-[10px] uppercase font-bold text-bronze block">Laranjeiras • Rua das Laranjeiras 336</span>
                  <span className="font-medium text-midnight group-hover:text-bronze transition-colors">Apto 826 Bloco 1 • 66 m² • 1 Vaga</span>
                  <span className="text-[11px] text-text-muted block mt-1">2ª Praça: R$ 265.000,00</span>
                </Link>

                <Link 
                  to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-2690-apto-601/"
                  className="block p-3 rounded-lg border border-sand-dark/30 hover:border-bronze transition-colors group"
                >
                  <span className="text-[10px] uppercase font-bold text-bronze block">Copacabana • Av. Atlântica 2690</span>
                  <span className="font-medium text-midnight group-hover:text-bronze transition-colors">Apto 601 • 211 m² • Frente Mar</span>
                  <span className="text-[11px] text-text-muted block mt-1">2ª Praça: R$ 1.950.000,00</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Modal de Detalhes do Edital */}
      {showEditalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-sand-dark/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-sand-dark/30 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <FileText className="text-bronze" size={22} />
                <h3 className="font-serif font-bold text-midnight text-lg">
                  Resumo Oficial do Edital de Leilão Judicial
                </h3>
              </div>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-midnight font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-text leading-relaxed">
              <div className="p-4 bg-sand-light/40 rounded-xl space-y-2">
                <div><strong>Imóvel:</strong> Apartamento nº 105, Rua Breno Guimarães nº 106, Jardim Guanabara, Ilha do Governador/RJ.</div>
                <div><strong>Área Privativa:</strong> 122,00 m².</div>
                <div><strong>Vagas:</strong> Direito a 02 (duas) vagas de garagem no condomínio.</div>
                <div><strong>Comodidades:</strong> Playground e salão de festas.</div>
                <div><strong>Registro de Imóveis:</strong> 11º Ofício do RGI do Rio de Janeiro, Matrícula nº 86.056.</div>
                <div><strong>Inscrição Municipal (IPTU):</strong> 1.898.000-3.</div>
                <div><strong>1º Leilão:</strong> 19/11/2026 às 13:00h — Lance Mínimo: R$ 620.000,00 (100% da avaliação).</div>
                <div><strong>2º Leilão:</strong> 26/11/2026 às 13:00h — Lance Mínimo: R$ 310.000,00 (50% da avaliação).</div>
                <div><strong>Pagamento:</strong> À vista ou parcelado nos termos do Art. 895 do Código de Processo Civil (25% à vista e saldo em até 30 parcelas corrigidas).</div>
              </div>

              <p>
                <strong>Observação de Segurança Jurídica:</strong> Este resumo é elaborado para fins meramente informativos com base nas peças 
                públicas do edital de leilão. A arrematação em leilões judiciais requer a elaboração de relatório de due diligence processual e imobiliária 
                por advogado especializado antes da apresentação de propostas ou lances.
              </p>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  onClick={() => setShowEditalModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-sand-dark/40 text-text-muted font-bold text-xs uppercase"
                >
                  Fechar
                </button>
                <a 
                  href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20105%20na%20Rua%20Breno%20Guimar%C3%A3es%20106%20no%20Jardim%20Guanabara%20(Ilha%20do%20Governador)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-bronze text-midnight font-bold text-xs uppercase tracking-wider hover:bg-sand-dark transition-colors flex items-center gap-2"
                >
                  <PhoneCall size={14} /> Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JardimGuanabaraBrenoGuimaraes106AuctionPage;
