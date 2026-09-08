import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Store, Sparkles
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1788898922210.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface CopacabanaBarataRibeiro334AuctionPageProps {
  onBack?: () => void;
}

const CopacabanaBarataRibeiro334AuctionPage: React.FC<CopacabanaBarataRibeiro334AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['copacabana-barata-ribeiro-334-apto-303'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-barata-ribeiro-334-apto-303/";

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
        "lowPrice": "260193.33",
        "highPrice": "371704.75",
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

                  {/* 2ª Praça (70%) */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> {tC.p2Title}
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">70% da avaliação</div>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20303%20na%20Rua%20Barata%20Ribeiro%20334%20em%20Copacabana."
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
                <li><strong className="text-white">Endereço Principal:</strong> Rua Barata Ribeiro, nº 334, Apartamento 303 — Copacabana, Rio de Janeiro/RJ</li>
                <li><strong className="text-white">Andar e Posição:</strong> 3º pavimento, unidade 303</li>
                <li><strong className="text-white">Área Edificada Privativa:</strong> 33 metros quadrados (33 m²)</li>
                <li><strong className="text-white">Estrutura do Edifício:</strong> Composto por 12 pavimentos no total</li>
                <li><strong className="text-white">Distribuição por Pavimento:</strong> 04 unidades residenciais por andar do 2º ao 10º andar, mais 01 unidade na cobertura</li>
                <li><strong className="text-white">Total de Apartamentos:</strong> 37 unidades residenciais no condomínio</li>
                <li><strong className="text-white">Elevadores:</strong> Servido por 02 (dois) elevadores funcionais</li>
                <li><strong className="text-white">Portaria e Acesso:</strong> Portaria simples, com acabamento de piso em pedra, portão em alumínio e escada de acesso</li>
                <li><strong className="text-white">Áreas Comuns e Lazer:</strong> O edifício não possui playground ou salão de festas; possui apenas uma área livre no terraço sem benfeitorias</li>
                <li><strong className="text-white">Estado de Conservação:</strong> O prédio encontra-se em regular estado de conservação</li>
                <li><strong className="text-white">Registro Imobiliário:</strong> Devidamente registrado, dimensionado e caracterizado no 5º Ofício de Registro de Imóveis do Rio de Janeiro (5º RGI/RJ) sob a matrícula nº 102.946</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0904756-4</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução e Parâmetros Judiciais
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial perante o Tribunal de Justiça do RJ (TJRJ)</li>
                <li><strong className="text-white">Comarca / Juízo:</strong> Comarca da Capital / Tribunal de Justiça do Estado do Rio de Janeiro</li>
                <li><strong className="text-white">Valor da Avaliação Oficial:</strong> R$ 371.704,75</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 371.704,75 (28/09/2026 às 12:00h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (70%):</strong> R$ 260.193,33 (01/10/2026 às 12:00h) — desconto de 30% correspondente a R$ 111.511,42</li>
                <li><strong className="text-white">Regra da 2ª Praça:</strong> Terá início com 70% do valor da avaliação oficial homologada</li>
                <li><strong className="text-white">Condições de Pagamento:</strong> À vista mediante guia de depósito judicial no TJRJ ou parcelamento judicial conforme Art. 895 do CPC (sinal mínimo de 25% e saldo em até 30 meses corrigidos)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Oportunidade em Copacabana */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Store size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado: Barata Ribeiro, Liquidez de Compactos e Custo por Metro Quadrado
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Rua Barata Ribeiro é uma das principais artérias residenciais e comerciais de Copacabana, integrando facilidade de mobilidade urbana (a passos das estações de metrô Cantagalo e Siqueira Campos), linhas de ônibus estratégicas e ampla rede de supermercados, drogarias, restaurantes e bancos. Além disso, a unidade situa-se a apenas três quadras do calçadão da Praia de Copacabana.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            No mercado imobiliário tradicional de Copacabana, apartamentos compactos (estúdios e conjugados de 30 a 35 m²) registram valores médios entre <strong>R$ 11.000,00 e R$ 14.500,00 por metro quadrado</strong> devido à sua altíssima velocidade de locação. Na 2ª Praça deste certame judicial, com lance inicial de <strong>R$ 260.193,33</strong> para 33 m², o custo de arrematação situa-se em aproximadamente <strong>R$ 7.884,00/m²</strong>.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O tíquete reduzido de entrada viabiliza uma taxa interna de retorno (TIR) e um yield de aluguel substancialmente elevados, seja para arrendamento residencial de médio e longo prazo, seja para modernização e retrofit voltado a estadias temporárias.
          </p>

          <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
            <div className="text-bronze font-serif font-bold text-base flex items-center gap-2">
              <Sparkles size={18} /> Aquisição a ~R$ 7.884/m² no Coração de Copacabana
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Com economia de R$ 111.511,42 na segunda praça em relação à avaliação homologada e lance inicial de R$ 260.193,33, a unidade 303 destaca-se pelo baixo capital de entrada exigido e elevado potencial de rentabilização no mercado carioca.
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
            O leilão judicial será realizado eletronicamente pelo leiloeiro oficial designado pelo Tribunal de Justiça do Estado do Rio de Janeiro. A habilitação de arrematantes exige prévio envio de documentação e validação cadastral com antecedência mínima recomendada de 48 a 72 horas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <CheckCircle2 size={18} /> Arrematação à Vista
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Pagamento do lance vencedor integralmente mediante guia de depósito judicial vinculada ao processo no TJRJ no prazo assinalado pelo juízo, além de 5% de comissão do leiloeiro público e custas de expedição da Carta de Arrematação.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Scale size={18} /> Proposta de Parcelamento Judicial (Art. 895 do CPC)
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Apresentação tempestiva de proposta escrita perante o leiloeiro antes do encerramento da praça, com sinal de ao menos 25% à vista e o saldo restante em até 30 (trinta) parcelas mensais corrigidas por índice oficial da Justiça, com hipoteca judicial gravada sobre a matrícula nº 102.946 no 5º RGI.
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
            A arrematação judicial é uma forma originária de aquisição que extingue gravames anteriores. No entanto, para garantir uma compra segura e sem imprevistos financeiros, a assessoria jurídica especializada realiza a auditoria processual profunda e assegura o desembaraço célere do imóvel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 1</div>
              <h3 className="text-white font-bold text-sm">Due Diligence Prévia</h3>
              <p className="text-xs text-text-muted">
                Exame rigoroso da Matrícula nº 102.946 do 5º RGI, certidões fiscais de IPTU nº 0904756-4, débitos condominiais e regularidade do edital de leilão.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 2</div>
              <h3 className="text-white font-bold text-sm">Estratégia e Lances</h3>
              <p className="text-xs text-text-muted">
                Habilitação na plataforma do leiloeiro, redação técnica de proposta de parcelamento (Art. 895 CPC) e suporte de lances durante a praça.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 3</div>
              <h3 className="text-white font-bold text-sm">Homologação e ITBI</h3>
              <p className="text-xs text-text-muted">
                Acompanhamento da assinatura do auto de arrematação, guia de ITBI na Prefeitura do Rio, expedição da Carta de Arrematação e baixa de ônus no 5º RGI.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 4</div>
              <h3 className="text-white font-bold text-sm">Imissão na Posse</h3>
              <p className="text-xs text-text-muted">
                Requerimento judicial célere e cumprimento do Mandado de Imissão na Posse com Oficial de Justiça até a efetiva entrega das chaves ao arrematante.
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

        {/* FAQ Específica da Barata Ribeiro 334 */}
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20303%20na%20Rua%20Barata%20Ribeiro%20334%20em%20Copacabana."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-bronze text-midnight font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <PhoneCall size={16} /> {tC.ctaWA}
              </a>
              <a 
                href="mailto:Juniorsadv@hotmail.com?subject=Consulta%20Juridica%20-%20Leilao%20Copacabana%20Rua%20Barata%20Ribeiro%20334%20Apto%20303"
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

export default CopacabanaBarataRibeiro334AuctionPage;
