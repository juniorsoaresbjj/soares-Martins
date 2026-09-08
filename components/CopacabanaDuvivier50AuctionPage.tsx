import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Store, Sparkles
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1788896590027.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface CopacabanaDuvivier50AuctionPageProps {
  onBack?: () => void;
}

const CopacabanaDuvivier50AuctionPage: React.FC<CopacabanaDuvivier50AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['copacabana-duvivier-50-apto-201'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-duvivier-50-apto-201/";

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
        "lowPrice": "542941.75",
        "highPrice": "1085883.50",
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20201%20na%20Rua%20Duvivier%2050%20em%20Copacabana."
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
                <li><strong className="text-white">Endereço Principal:</strong> Rua Duvivier, nº 50, Apartamento 201 — Copacabana, Rio de Janeiro/RJ</li>
                <li><strong className="text-white">Posição:</strong> De frente para a Rua Duvivier (excelente iluminação e ventilação natural)</li>
                <li><strong className="text-white">Área Edificada Privativa:</strong> 102 metros quadrados (102 m²)</li>
                <li><strong className="text-white">Distribuição Interna:</strong> Sala ampla com piso em tacos de madeira e paredes pintadas com tinta; varanda frontal com piso em pedra e fechamento retrátil em cortina de vidro; dois quartos com piso em tacos de madeira; um banheiro social com piso em cerâmica e paredes azulejadas; cozinha com piso cerâmico e azulejos brancos; área de serviço independente; quarto e banheiro de serviço (dependência completa) reversíveis e reformados, com piso cerâmico no quarto e banheiro completo azulejado</li>
                <li><strong className="text-white">Garagem:</strong> Unidade sem vaga de garagem privativa</li>
                <li><strong className="text-white">Ano de Construção do Prédio:</strong> 1938 (edifício residencial de arquitetura clássica tradicional de Copacabana)</li>
                <li><strong className="text-white">Estrutura Predial:</strong> 8 andares (térreo correspondendo ao 1º andar), apenas 3 apartamentos por andar, 2 elevadores, salão de festas privativo, interfonia e câmeras de vigilância em todo o edifício</li>
                <li><strong className="text-white">Portaria:</strong> Portaria presencial de segunda a sábado das 9h às 21h (sem serviço de porteiros aos domingos); no térreo externo há duas lojas comerciais</li>
                <li><strong className="text-white">Registro Imobiliário:</strong> Devidamente registrado, dimensionado e caracterizado perante o Cartório do 2º Ofício de Registro de Imóveis do Rio de Janeiro (2º RGI/RJ) sob a matrícula nº 52.950</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0.566.818-1</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução e Parâmetros Judiciais
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Processo de Origem:</strong> Execução Judicial perante o Tribunal de Justiça do RJ (TJRJ)</li>
                <li><strong className="text-white">Comarca / Juízo:</strong> Comarca da Capital / Tribunal de Justiça do Estado do Rio de Janeiro</li>
                <li><strong className="text-white">Valor da Avaliação Oficial:</strong> R$ 1.085.883,50</li>
                <li><strong className="text-white">Lance Mínimo 1ª Praça (100%):</strong> R$ 1.085.883,50 (22/09/2026 às 14:30h)</li>
                <li><strong className="text-white">Lance Mínimo 2ª Praça (50%):</strong> R$ 542.941,75 (23/09/2026 às 14:30h) — expressivo desconto de R$ 542.941,75</li>
                <li><strong className="text-white">Deságio na 2ª Praça:</strong> 50% de redução sobre a avaliação judicial homologada</li>
                <li><strong className="text-white">Condições de Pagamento:</strong> À vista mediante depósito judicial ou proposta escrita de parcelamento judicial (Art. 895 do CPC: 25% à vista e até 30 meses)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado e Oportunidade em Copacabana */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Store size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado: Localização Estratégica em Copacabana e Custo por Metro Quadrado
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Rua Duvivier situa-se na área mais nobre e histórica de Copacabana (Posto 2), entre a Avenida Atlântica e a Praça Cardeal Arcoverde. A localização combina a conveniência de estar a poucos passos do calçadão mais famoso do mundo com o fácil acesso ao metrô (Estação Cardeal Arcoverde), polos gastronômicos, supermercados, farmácias, teatros e hotéis de renome como o Copacabana Palace.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            No mercado imobiliário tradicional da Zona Sul, apartamentos de 2 quartos com dependência e varanda em Copacabana são comercializados entre <strong>R$ 11.000,00 e R$ 14.000,00 por metro quadrado</strong>. Na 2ª Praça deste leilão judicial, com o lance inicial fixado em <strong>R$ 542.941,75</strong> para uma metragem de 102 m², o custo de aquisição situa-se em aproximadamente <strong>R$ 5.320,00/m²</strong>.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Trata-se de uma oportunidade singular tanto para moradia própria na quadra da praia quanto para investidores focados em locação por temporada (Airbnb / short-stay) ou locação residencial convencional, cuja demanda na região é perene e de alta liquidez.
          </p>

          <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
            <div className="text-bronze font-serif font-bold text-base flex items-center gap-2">
              <Sparkles size={18} /> Aquisição a ~R$ 5.320/m² a 2 Quadras da Praia de Copacabana
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Com economia imediata de R$ 542.941,75 na segunda praça e a dependência de empregada já reformada e reversível para um terceiro quarto ou home office, o imóvel oferece uma relação custo-benefício e potencial de valorização substancialmente acima da média de mercado.
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
            O certame será realizado na modalidade eletrônica pelo leiloeiro público oficial credenciado junto ao Tribunal de Justiça do Rio de Janeiro. A habilitação prévia na plataforma do leiloeiro exige cadastro e envio de documentos com antecedência mínima de 48 a 72 horas para homologação.
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
                Possibilidade de protocolar proposta escrita de parcelamento antes do encerramento de cada praça, com sinal de pelo menos 25% à vista e o saldo restante em até 30 (trinta) parcelas mensais corrigidas por índice oficial da Justiça, garantidas por hipoteca judicial sobre a matrícula nº 52.950 no 2º RGI.
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
            A aquisição originária de imóveis em hasta pública judicial confere segurança ao investidor quando precedida de rigorosa auditoria jurídica dos autos, garantindo que eventuais gravames e débitos propter rem sejam devidamente equalizados e sub-rogados no preço.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 1</div>
              <h3 className="text-white font-bold text-sm">Due Diligence Prévia</h3>
              <p className="text-xs text-text-muted">
                Auditoria minuciosa na Matrícula nº 52.950 do 2º RGI, certidões fiscais de IPTU nº 0.566.818-1, débitos condominiais e regularidade do edital.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 2</div>
              <h3 className="text-white font-bold text-sm">Estratégia e Lances</h3>
              <p className="text-xs text-text-muted">
                Habilitação na plataforma do leiloeiro, elaboração de propostas de parcelamento (Art. 895 CPC) e representação técnica durante o leilão.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 3</div>
              <h3 className="text-white font-bold text-sm">Homologação e ITBI</h3>
              <p className="text-xs text-text-muted">
                Acompanhamento da assinatura do auto de arrematação, guia de ITBI perante a SMF/RJ, expedição da Carta de Arrematação e cancelamento de ônus no 2º RGI.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">Fase 4</div>
              <h3 className="text-white font-bold text-sm">Imissão na Posse</h3>
              <p className="text-xs text-text-muted">
                Requerimento e cumprimento célere do Mandado Judicial de Imissão na Posse com Oficial de Justiça, troca de fechaduras e imissão definitiva.
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

        {/* FAQ Específica de Copacabana / Duvivier 50 */}
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20201%20na%20Rua%20Duvivier%2050%20em%20Copacabana."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-bronze text-midnight font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <PhoneCall size={16} /> {tC.ctaWA}
              </a>
              <a 
                href="mailto:Juniorsadv@hotmail.com?subject=Consulta%20Juridica%20-%20Leilao%20Copacabana%20Rua%20Duvivier%2050%20Apto%20201"
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

export default CopacabanaDuvivier50AuctionPage;
