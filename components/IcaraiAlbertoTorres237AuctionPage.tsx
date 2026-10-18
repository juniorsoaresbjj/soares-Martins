import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Compass, BookOpen, Clock, Sparkles
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1792349115382.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface IcaraiAlbertoTorres237AuctionPageProps {
  onBack?: () => void;
}

const IcaraiAlbertoTorres237AuctionPage: React.FC<IcaraiAlbertoTorres237AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['icarai-alberto-torres-237-apto-1004'] || editaisData['copacabana-decio-vilares-265-apto-304'];
  const item = (editalEntry && editalEntry[language]) ? editalEntry[language] : (editalEntry ? editalEntry.pt : {
    title: 'Leilão Judicial em Icaraí — Av. Jornalista Alberto Francisco Torres nº 237 — Apto 1004 (157 m²)',
    subtitle: 'Avenida Jornalista Alberto Francisco Torres, nº 237, Apto 1004 (Frente para a Rua Presidente Backer) — Icaraí, Niterói/RJ | 157 m² • 10º Andar (Coluna 4) • Sala Ampla, 4 Quartos (1 Reversível), Lavabo, 2 Banheiros, Cozinha e Área de Serviço • Piso em Tábua Corrida • 1 Vaga de Garagem • Portaria 24h, Salão de Festas e 2 Elevadores • 9º Ofício RGI Matrícula nº 43 • IPTU: 115727-0 • Avaliação: R$ 870.000,00 • 1º Leilão: 26/10/2026 às 12:00h por R$ 870.000,00 • 2º Leilão: 28/10/2026 às 12:00h por R$ 522.000,00 (60% da Avaliação — ~R$ 3.324,84/m²)',
    address: 'Avenida Jornalista Alberto Francisco Torres, nº 237, Apartamento 1004 — Icaraí, Niterói - RJ',
    p1Date: '26/10/2026 às 12:00h',
    p2Date: '28/10/2026 às 12:00h',
    process: 'Execução Judicial / TJRJ',
    court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca de Niterói',
    iptu: '115727-0',
    rgi: '9º Ofício de Registro de Imóveis (Matrícula nº 43)',
    val: 'R$ 870.000,00',
    p2Val: 'R$ 522.000,00 (Lance inicial 2ª Praça - 60%)',
    description: 'Apartamento de 157 m² na Avenida Jornalista Alberto Francisco Torres nº 237, Apto 1004, Icaraí, Niterói - RJ.',
    checklist: [],
    modal: { title: 'Resumo Estruturado do Edital', sections: [] },
    faqs: []
  });

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/icarai/apartamento/avenida-jornalista-alberto-francisco-torres-237-apto-1004/";

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
      "areaServed": "Rio de Janeiro e Grande Rio/RJ"
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": item.title,
      "description": item.subtitle,
      "url": canonicalUrl,
      "image": `https://soaresmartinsadv.com/src/assets/images/regenerated_image_1792349115382.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida Jornalista Alberto Francisco Torres, 237, Apartamento 1004",
        "addressLocality": "Icaraí, Niterói",
        "addressRegion": "RJ",
        "postalCode": "24230-004",
        "addressCountry": "BR"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "522000.00",
        "highPrice": "870000.00",
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
                    <MapPin size={13} className="text-bronze" /> Praia de Icaraí / Pres. Backer • Niterói/RJ
                  </span>
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10 text-emerald-400 font-bold">
                    <Clock size={13} /> 10º Andar • 157 m² • 4 Quartos • 1 Vaga
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted italic text-left">
                {tC.imageIllustrative}
              </p>
            </div>

            {/* Box de Informações Financeiras e Praças */}
            <div className="lg:col-span-5 bg-midnight/90 rounded-2xl p-6 border border-bronze/30 shadow-xl space-y-6 text-left">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-wider text-text-muted font-semibold block mb-1">
                  {tC.appraisalValueLabel}
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">
                  {item.val}
                </span>
                <span className="text-xs text-text-muted block mt-1">
                  Metro quadrado avaliado a apenas ~R$ 5.541/m² na Praia de Icaraí
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-bronze/40 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-bronze uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar size={13} /> {tC.firstAuctionLabel}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-bronze/20 text-bronze font-semibold">100%</span>
                  </div>
                  <div className="text-sm font-semibold text-white">{item.p1Date}</div>
                  <div className="text-lg font-serif font-bold text-emerald-400 mt-1">{item.val}</div>
                </div>

                <div className="bg-emerald-950/20 rounded-xl p-4 border border-emerald-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-emerald-500 text-midnight text-[10px] font-bold px-2 py-0.5 rounded-bl uppercase">
                    40% OFF
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar size={13} /> {tC.secondAuctionLabel}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">60% Mínimo</span>
                  </div>
                  <div className="text-sm font-semibold text-white">{item.p2Date}</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-emerald-300 mt-1">{item.p2Val}</div>
                  <div className="text-xs text-emerald-400/80 mt-1 font-medium">
                    Lance inicial por apenas ~R$ 3.324,84/m² em Icaraí
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={() => setShowEditalModal(true)}
                  className="w-full py-3.5 px-4 rounded-xl bg-bronze text-midnight font-bold text-sm uppercase tracking-wider hover:bg-bronze-light transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText size={16} /> {tC.viewEditalSummaryButton}
                </button>

                <a
                  href={`https://wa.me/5521979549241?text=${encodeURIComponent(`Olá, gostaria de assessoria jurídica especializada para o leilão do apartamento 1004 na Av. Jornalista Alberto Francisco Torres 237, Icaraí - Niterói (Avaliação: R$ 870.000,00 | 2ª Praça: R$ 522.000,00).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/30 font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall size={16} /> {tC.speakWithLawyerButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 1: Ficha Técnica & Resumo do Imóvel */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="text-bronze" size={24} />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            {tC.specSheetTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-midnight-light/30 rounded-2xl p-6 border border-white/5 space-y-2">
            <span className="text-xs uppercase tracking-wider text-bronze font-semibold block">Área Privativa e Andar</span>
            <span className="text-xl font-serif text-white font-bold block">157 m² • 10º Andar (Col. 4)</span>
            <p className="text-xs text-text-muted">
              Planta generosa de 157 m² com frente voltada para a arborizada Rua Presidente Backer. Excelente ventilação natural e iluminação.
            </p>
          </div>

          <div className="bg-midnight-light/30 rounded-2xl p-6 border border-white/5 space-y-2">
            <span className="text-xs uppercase tracking-wider text-bronze font-semibold block">Distribuição da Unidade</span>
            <span className="text-xl font-serif text-white font-bold block">4 Quartos • Lavabo • 2 Banheiros</span>
            <p className="text-xs text-text-muted">
              1 sala ampla, 4 dormitórios (1 reversível), 1 lavabo, 1 banheiro social, cozinha, área de serviço e 1 banheiro de empregada.
            </p>
          </div>

          <div className="bg-midnight-light/30 rounded-2xl p-6 border border-white/5 space-y-2">
            <span className="text-xs uppercase tracking-wider text-bronze font-semibold block">Acabamentos e Conservação</span>
            <span className="text-xl font-serif text-white font-bold block">Tábua Corrida • Bom Estado</span>
            <p className="text-xs text-text-muted">
              Sala e quartos com piso em nobre tábua corrida; cozinha e banheiros com azulejos e piso frio; portas internas de madeira.
            </p>
          </div>

          <div className="bg-midnight-light/30 rounded-2xl p-6 border border-white/5 space-y-2">
            <span className="text-xs uppercase tracking-wider text-bronze font-semibold block">Garagem e Condomínio</span>
            <span className="text-xl font-serif text-white font-bold block">1 Vaga • Portaria 24h</span>
            <p className="text-xs text-text-muted">
              Com direito a 1 vaga de garagem vinculada. Prédio com portaria 24 horas na Rua Presidente Backer, salão de festas e 2 elevadores.
            </p>
          </div>

          <div className="bg-midnight-light/30 rounded-2xl p-6 border border-white/5 space-y-2">
            <span className="text-xs uppercase tracking-wider text-bronze font-semibold block">Avaliação Judicial Homologada</span>
            <span className="text-xl font-serif text-emerald-400 font-bold block">R$ 870.000,00</span>
            <p className="text-xs text-text-muted">
              Avaliação pericial homologada na Comarca de Niterói. Lance mínimo na 2ª praça fixado em 60% (R$ 522.000,00).
            </p>
          </div>

          <div className="bg-midnight-light/30 rounded-2xl p-6 border border-white/5 space-y-2">
            <span className="text-xs uppercase tracking-wider text-bronze font-semibold block">Condições de Aquisição</span>
            <span className="text-xl font-serif text-white font-bold block">À Vista ou Parcelado</span>
            <p className="text-xs text-text-muted">
              Possibilidade de proposta com sinal de 25% (R$ 130.500,00 no 2º leilão) e o saldo dividido em até 30 parcelas mensais corrigidas (Art. 895 CPC).
            </p>
          </div>
        </div>

        {/* Resumo Descritivo */}
        <div className="mt-8 bg-midnight-light/40 rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4 text-left">
          <h3 className="text-lg font-serif font-bold text-bronze flex items-center gap-2">
            <BookOpen size={18} /> Resumo do Imóvel e Oportunidade
          </h3>
          <p className="text-sm text-text leading-relaxed">
            {item.description}
          </p>
        </div>
      </section>

      {/* Seção 2: Identificação Imobiliária & Dados da Execução */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dados Registrais */}
          <div className="bg-midnight-light/30 rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <FileCheck className="text-bronze" size={22} />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Identificação Imobiliária e Registral
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-midnight/80 rounded-xl border border-white/5 flex flex-col gap-1">
                <span className="text-xs text-bronze font-bold uppercase tracking-wider">Cartório de Registro de Imóveis (RGI)</span>
                <span className="text-sm font-semibold text-white">{item.rgi}</span>
                <span className="text-xs text-text-muted">Serviço registral imobiliário competente para a circunscrição da Comarca de Niterói.</span>
              </div>

              <div className="p-4 bg-midnight/80 rounded-xl border border-white/5 flex flex-col gap-1">
                <span className="text-xs text-bronze font-bold uppercase tracking-wider">Matrícula Imobiliária</span>
                <span className="text-base font-bold text-white font-mono">43</span>
                <span className="text-xs text-text-muted">Imóvel devidamente registrado, dimensionado e caracterizado sob a Matrícula 43.</span>
              </div>

              <div className="p-4 bg-midnight/80 rounded-xl border border-white/5 flex flex-col gap-1">
                <span className="text-xs text-bronze font-bold uppercase tracking-wider">Inscrição Municipal (IPTU)</span>
                <span className="text-base font-bold text-white font-mono">{item.iptu}</span>
                <span className="text-xs text-text-muted">Cadastro individualizado perante a Secretaria Municipal de Fazenda de Niterói.</span>
              </div>

              <div className="p-4 bg-midnight/80 rounded-xl border border-white/5 flex flex-col gap-1">
                <span className="text-xs text-bronze font-bold uppercase tracking-wider">Endereço e Acesso Social</span>
                <span className="text-sm font-bold text-white">Av. Jornalista Alberto Francisco Torres nº 237 / Rua Pres. Backer</span>
                <span className="text-xs text-text-muted">Apto 1004 da Coluna 4 (frente para a Rua Presidente Backer, onde se situa a portaria), Icaraí, Niterói - RJ.</span>
              </div>
            </div>
          </div>

          {/* Dados da Execução e Proteção Legal */}
          <div className="bg-midnight-light/30 rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <Scale className="text-bronze" size={22} />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Dados da Execução e Proteção ao Arrematante
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-midnight/80 rounded-xl border border-white/5 flex flex-col gap-1">
                <span className="text-xs text-bronze font-bold uppercase tracking-wider">Juízo Competente e Processo</span>
                <span className="text-sm font-semibold text-white">{item.court}</span>
                <span className="text-xs text-text-muted">{item.process}</span>
              </div>

              <div className="p-4 bg-midnight/80 rounded-xl border border-emerald-500/20 flex flex-col gap-1">
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck size={14} /> Sub-rogação Fiscal (Art. 130, parágrafo único do CTN)
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  As dívidas tributárias anteriores à arrematação (IPTU e taxa de coleta imobiliária da Prefeitura de Niterói) sub-rogam-se diretamente sobre o preço depositado em juízo. O imóvel é transferido juridicamente livre de ônus fiscais ao arrematante.
                </p>
              </div>

              <div className="p-4 bg-midnight/80 rounded-xl border border-bronze/30 flex flex-col gap-1">
                <span className="text-xs text-bronze font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} /> Parcelamento Judicial (Art. 895 do CPC)
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  Possibilidade de aquisição com 25% de entrada (R$ 130.500,00 no 2º leilão) e o saldo restante em até 30 prestações mensais sucessivas corrigidas, mediante hipoteca judicial gravada na própria matrícula 43 do imóvel.
                </p>
              </div>

              <div className="p-4 bg-midnight/80 rounded-xl border border-white/5 flex flex-col gap-1">
                <span className="text-xs text-bronze font-bold uppercase tracking-wider">Aquisição Originária</span>
                <p className="text-xs text-text-muted leading-relaxed">
                  A arrematação judicial constitui modo originário de aquisição da propriedade, viabilizando a baixa e cancelamento de eventuais penhoras, gravames e hipotecas na matrícula do imóvel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Contexto de Mercado & Valorização Imobiliária */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="bg-midnight-light/40 rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <Compass className="text-bronze" size={24} />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Contexto de Mercado: Praia de Icaraí & Rua Presidente Backer (Niterói)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2 p-5 bg-midnight/60 rounded-xl border border-white/5">
              <span className="text-xs text-bronze font-bold uppercase tracking-wider">Ponto Mais Cobiçado de Niterói</span>
              <p className="text-xs text-text leading-relaxed">
                A Praia de Icaraí (Avenida Jornalista Alberto Francisco Torres) é o endereço residencial mais nobre e emblemático de Niterói, com deslumbrante vista panorâmica para a Baía de Guanabara, Pão de Açúcar e Corcovado. A esquina com a Presidente Backer oferece tranquilidade e acesso imediato a todas as facilidades.
              </p>
            </div>

            <div className="space-y-2 p-5 bg-midnight/60 rounded-xl border border-white/5">
              <span className="text-xs text-bronze font-bold uppercase tracking-wider">Desconto Excepcional de 40%</span>
              <p className="text-xs text-text leading-relaxed">
                Enquanto o valor de mercado de apartamentos de 4 quartos na Praia de Icaraí varia entre R$ 8.500 e R$ 13.000 por metro quadrado, a 2ª praça judicial oferta esta ampla unidade de 157 m² por apenas ~R$ 3.324,84/m², propiciando sólida margem de segurança patrimonial.
              </p>
            </div>

            <div className="space-y-2 p-5 bg-midnight/60 rounded-xl border border-white/5">
              <span className="text-xs text-bronze font-bold uppercase tracking-wider">Infraestrutura e Comércio Nobre</span>
              <p className="text-xs text-text leading-relaxed">
                A poucos metros da Rua Coronel Moreira César (polo comercial nobre com boutiques, cafés, bancos e restaurantes premiados), renomados colégios e clubes esportivos (como o Clube de Regatas Icaraí e Central).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Como Participar e a Importância da Assessoria */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Landmark className="text-bronze" size={24} />
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Como Participar do Leilão com Segurança
              </h2>
            </div>
            <p className="text-sm text-text leading-relaxed">
              A arrematação de imóveis em leilão judicial exige cautela e rigorosa auditoria jurídica prévia. Ao contrário da compra e venda comum no mercado imobiliário, o certame judicial é regido pelas regras do CPC, sendo imprescindível analisar a regularidade do edital, as intimações das partes e o histórico de débitos.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-midnight-light/30 rounded-xl border border-white/5">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-text">
                  <strong className="text-white block mb-0.5">Auditoria Prévia (Due Diligence):</strong> Exame aprofundado da Matrícula nº 43 (9º RGI), certidões fazendárias de Niterói, eventuais débitos condominiais propter rem e verificação de citações no processo judicial.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-midnight-light/30 rounded-xl border border-white/5">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-text">
                  <strong className="text-white block mb-0.5">Habilitação Homologada:</strong> Cadastro prévio perante o leiloeiro público oficial credenciado no TJRJ com antecedência mínima recomendada de 48 horas.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-midnight-light/30 rounded-xl border border-white/5">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-text">
                  <strong className="text-white block mb-0.5">Estratégia de Lance e Parcelamento:</strong> Definição precisa do teto orçamentário e protocolo tempestivo da proposta de parcelamento com sinal de 25% antes da abertura do pregão.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-bronze" size={24} />
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                A Importância da Assessoria Jurídica
              </h2>
            </div>
            <p className="text-sm text-text leading-relaxed">
              A assessoria jurídica especializada em leilões judiciais protege o arrematante contra riscos de anulação, recursos processuais ou débitos ocultos. Nossa atuação assegura a higidez do certame desde a fase pré-leilão até a efetiva imissão na posse e entrega das chaves.
            </p>

            <div className="p-6 bg-midnight-light/40 rounded-2xl border border-bronze/30 space-y-4">
              <h3 className="text-sm font-bold text-bronze uppercase tracking-wider">Atuação do Escritório Soares Martins</h3>
              <ul className="space-y-2 text-xs text-text leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span> Emissão de Parecer Jurídico de Viabilidade e Risco (Due Diligence).
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span> Estruturação de proposta de parcelamento nos termos do Art. 895 do CPC.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span> Acompanhamento do auto de arrematação e recolhimento das custas e ITBI de Niterói.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span> Peticionamento para expedição e registro da Carta de Arrematação no 9º RGI.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span> Cumprimento célere do Mandado de Imissão na Posse com apoio de oficial de justiça.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Fases do Acompanhamento Jurídico */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="text-bronze" size={24} />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Fases do Acompanhamento Jurídico
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-midnight-light/30 rounded-2xl border border-white/5 space-y-3">
            <span className="text-2xl font-serif font-bold text-bronze">01</span>
            <h3 className="text-base font-bold text-white">Auditoria Preliminar</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Análise minuciosa dos autos processuais, regularidade das notificações de devedores e coproprietários, certidão de ônus reais da matrícula 43 e passivo fiscal de Niterói.
            </p>
          </div>

          <div className="p-6 bg-midnight-light/30 rounded-2xl border border-white/5 space-y-3">
            <span className="text-2xl font-serif font-bold text-bronze">02</span>
            <h3 className="text-base font-bold text-white">Estratégia e Habilitação</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Orientação do teto orçamentário, cadastro no leiloeiro e apresentação formal de proposta de parcelamento com 25% de sinal conforme o Art. 895 do CPC.
            </p>
          </div>

          <div className="p-6 bg-midnight-light/30 rounded-2xl border border-white/5 space-y-3">
            <span className="text-2xl font-serif font-bold text-bronze">03</span>
            <h3 className="text-base font-bold text-white">Arrematação & Depósitos</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Suporte durante o pregão, conferência da guia judicial e comissão do leiloeiro (5%), assinatura do auto de arrematação e requerimentos fiscais.
            </p>
          </div>

          <div className="p-6 bg-midnight-light/30 rounded-2xl border border-white/5 space-y-3">
            <span className="text-2xl font-serif font-bold text-bronze">04</span>
            <h3 className="text-base font-bold text-white">Carta de Arrematação & Posse</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Expedição da carta de arrematação, baixa dos gravames no 9º RGI, recolhimento do ITBI e cumprimento do mandado judicial de imissão na posse.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 6: Links Internos e Artigos de Referência */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-bronze" size={24} />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Artigos e Conteúdos Recomendados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            to="/blog/como-analisar-imovel-em-leilao-antes-de-dar-um-lance-guia-completo/" 
            className="p-5 bg-midnight-light/30 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all group block"
          >
            <span className="text-xs text-bronze font-bold uppercase tracking-wider block mb-2">Guia Prático</span>
            <h3 className="text-sm font-bold text-white group-hover:text-bronze transition-colors mb-2">
              Como Analisar Imóvel em Leilão Antes de Dar um Lance
            </h3>
            <p className="text-xs text-text-muted">
              Checklist completo de auditoria jurídica, análise do edital e pontos de atenção essenciais.
            </p>
          </Link>

          <Link 
            to="/blog/quais-dividas-acompanham-imovel-adquirido-em-leilao/" 
            className="p-5 bg-midnight-light/30 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all group block"
          >
            <span className="text-xs text-bronze font-bold uppercase tracking-wider block mb-2">Segurança Jurídica</span>
            <h3 className="text-sm font-bold text-white group-hover:text-bronze transition-colors mb-2">
              Quais Dívidas Acompanham o Imóvel em Leilão?
            </h3>
            <p className="text-xs text-text-muted">
              Entenda como funciona a sub-rogação de débitos de IPTU (Art. 130 CTN) e taxas condominiais.
            </p>
          </Link>

          <Link 
            to="/blog/e-possivel-visitar-imovel-de-leilao-antes-de-dar-o-lance/" 
            className="p-5 bg-midnight-light/30 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all group block"
          >
            <span className="text-xs text-bronze font-bold uppercase tracking-wider block mb-2">Visitação</span>
            <h3 className="text-sm font-bold text-white group-hover:text-bronze transition-colors mb-2">
              É Possível Visitar o Imóvel de Leilão Antes do Lance?
            </h3>
            <p className="text-xs text-text-muted">
              Descubra os procedimentos legais para inspeção visual e alternativas quando o imóvel está ocupado.
            </p>
          </Link>

          <Link 
            to="/blog/qual-bairro-rio-de-janeiro-vale-mais-a-pena-comprar-em-leilao/" 
            className="p-5 bg-midnight-light/30 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all group block"
          >
            <span className="text-xs text-bronze font-bold uppercase tracking-wider block mb-2">Análise de Mercado</span>
            <h3 className="text-sm font-bold text-white group-hover:text-bronze transition-colors mb-2">
              Qual Bairro Vale Mais a Pena Comprar em Leilão?
            </h3>
            <p className="text-xs text-text-muted">
              Estudo comparativo de liquidez e valorização na orla da Região Metropolitana e Zona Sul.
            </p>
          </Link>

          <Link 
            to="/blog/direito-imobiliario-due-diligence-compra/" 
            className="p-5 bg-midnight-light/30 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all group block"
          >
            <span className="text-xs text-bronze font-bold uppercase tracking-wider block mb-2">Due Diligence</span>
            <h3 className="text-sm font-bold text-white group-hover:text-bronze transition-colors mb-2">
              Due Diligence Imobiliária em Aquisições no RJ
            </h3>
            <p className="text-xs text-text-muted">
              Como funciona a checagem completa de certidões, certidões cíveis, fiscais e trabalhistas.
            </p>
          </Link>

          <Link 
            to="/blog/apartamento-leilao-debito-condominial/" 
            className="p-5 bg-midnight-light/30 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all group block"
          >
            <span className="text-xs text-bronze font-bold uppercase tracking-wider block mb-2">Condomínio</span>
            <h3 className="text-sm font-bold text-white group-hover:text-bronze transition-colors mb-2">
              Apartamento em Leilão por Débito Condominial
            </h3>
            <p className="text-xs text-text-muted">
              Orientações sobre a obrigação propter rem e a responsabilidade pelo saldo credor ou devedor.
            </p>
          </Link>
        </div>
      </section>

      {/* Seção 7: FAQ Específica */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="text-bronze" size={24} />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Perguntas Frequentes (FAQ) — Alberto Torres 237, Apto 1004 (Icaraí)
          </h2>
        </div>

        <div className="space-y-4">
          {item.faqs && item.faqs.map((faq: { q: string; a: string }, idx: number) => (
            <div 
              key={idx} 
              className="bg-midnight-light/30 rounded-2xl border border-white/5 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-bronze font-mono text-xs">0{idx + 1}.</span> {faq.q}
                </span>
                {openFaq === idx ? (
                  <ChevronUp size={18} className="text-bronze shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-text-muted shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-white/5 bg-midnight/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Seção 8: CTA Institucional */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
        <div className="bg-gradient-to-r from-midnight-light via-midnight-light/60 to-midnight-light rounded-3xl p-8 sm:p-12 border border-bronze/30 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/10 border border-bronze/30 text-bronze text-xs font-semibold uppercase tracking-wider">
            <Scale size={14} /> Atendimento Especializado
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white max-w-3xl mx-auto">
            Interessado no Leilão de Icaraí (Av. Alberto Torres 237)?
          </h2>

          <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
            Consulte nossa equipe jurídica para emitir o relatório de viabilidade da Matrícula nº 43 (9º RGI) e planejar sua estratégia de arrematação na 1ª ou 2ª praça com segurança e tranquilidade.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/5521979549241?text=${encodeURIComponent(`Olá, gostaria de falar com um advogado especialista sobre o leilão do apartamento 1004 na Av. Jornalista Alberto Francisco Torres 237, Icaraí - Niterói/RJ.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-bronze text-midnight font-bold text-xs uppercase tracking-widest hover:bg-bronze-light transition-all shadow-lg flex items-center gap-2"
            >
              <PhoneCall size={15} /> Atendimento via WhatsApp
            </a>

            <a
              href="mailto:contato@soaresmartinsadv.com?subject=Assessoria%20Leil%C3%A3o%20Av%20Alberto%20Torres%20237%20Apto%201004"
              className="py-3.5 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2"
            >
              Enviar E-mail Corporativo
            </a>
          </div>

          <div className="text-[11px] text-text-muted pt-4 border-t border-white/5 max-w-xl mx-auto">
            Atendimento presencial em Ipanema/RJ e suporte jurídico virtual para arrematantes e investidores de todo o Brasil e exterior.
          </div>
        </div>
      </section>

      {/* Modal: Resumo Estruturado do Edital */}
      {showEditalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-midnight border border-bronze/40 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <FileText className="text-bronze" size={20} />
                <h3 className="text-lg font-serif font-bold text-white">
                  {item.modal?.title || 'Resumo Estruturado do Edital'}
                </h3>
              </div>
              <button
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-white p-1 rounded-lg text-lg font-bold cursor-pointer"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {item.modal?.sections && item.modal.sections.map((sec: { title: string; text: string }, idx: number) => (
                <div key={idx} className="p-4 bg-midnight-light/40 rounded-xl border border-white/5 space-y-1">
                  <h4 className="text-xs font-bold text-bronze uppercase tracking-wider">{sec.title}</h4>
                  <p className="text-xs text-text leading-relaxed">{sec.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end">
              <button
                onClick={() => setShowEditalModal(false)}
                className="py-2.5 px-6 rounded-xl bg-bronze text-midnight font-bold text-xs uppercase tracking-wider hover:bg-bronze-light transition-all cursor-pointer"
              >
                {tC.closeModalButton}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conformidade Ética OAB */}
      <div className="max-w-7xl mx-auto px-6 pb-12 text-center text-[11px] text-text-muted/60">
        Informativo jurídico elaborado em observância às normas do Código de Ética e Disciplina da OAB e do Provimento nº 205/2021 da OAB/CFOAB. Conteúdo exclusivamente técnico-informativo sem caráter de assessoria imobiliária mercantil ou garantia de resultado financeiro.
      </div>
    </div>
  );
};

export default IcaraiAlbertoTorres237AuctionPage;
