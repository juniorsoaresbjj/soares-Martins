import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Sparkles
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1790005376625.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface LemeGustavoSampaio723AuctionPageProps {
  onBack?: () => void;
}

const LemeGustavoSampaio723AuctionPage: React.FC<LemeGustavoSampaio723AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['leme-gustavo-sampaio-723-apto-601'];
  const item = (editalEntry && editalEntry[language]) ? editalEntry[language] : (editalEntry ? editalEntry.pt : {
    title: 'Leilão Judicial de Apartamento no Leme — Rua Gustavo Sampaio nº 723 — Apto 601',
    subtitle: 'Rua Gustavo Sampaio, nº 723, Apartamento 601 — Leme, Rio de Janeiro/RJ | 95 m² • 6º Andar • Edifício Waldorf (1952) • 12 Pavimentos • 3 Elevadores • Garagem • Portaria 24h e CFTV • 5º RGI Matrícula 87.664 • IPTU: 0.578.298-2 • Avaliação R$ 1.400.000,00 • 2ª Praça a 50% por R$ 700.000,00',
    address: 'Rua Gustavo Sampaio, nº 723, Apto 601 — Leme, Rio de Janeiro - RJ',
    p1Date: '05/11/2026 às 12:20h',
    p2Date: '10/11/2026 às 12:20h',
    process: 'Execução Judicial / TJRJ',
    court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
    iptu: '0.578.298-2',
    rgi: '5º Ofício de Registro de Imóveis (Matrícula nº 87.664)',
    val: 'R$ 1.400.000,00',
    p2Val: 'R$ 700.000,00 (50% da avaliação)',
    description: 'Apartamento residencial com 95 m² de área privativa no 6º andar (unidade 601) do tradicional Edifício Waldorf, situado na Rua Gustavo Sampaio nº 723, no bucólico e nobre bairro do Leme, Zona Sul do Rio de Janeiro.',
    checklist: [],
    modal: { title: 'Resumo Estruturado do Edital', sections: [] },
    faqs: []
  });

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leme/apartamento/rua-gustavo-sampaio-723-apto-601/";

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
      "category": "Real Estate / Judicial Auction / Leme RJ",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "700000.00",
        "highPrice": "1400000.00",
        "offerCount": "2",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-11-05T12:20:00-03:00"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": item.title,
      "description": item.description,
      "url": canonicalUrl,
      "datePosted": "2026-09-21",
      "validThrough": "2026-11-10T18:00:00-03:00",
      "image": buildingImage,
      "containedInPlace": {
        "@type": "Place",
        "name": "Edifício Waldorf — Rua Gustavo Sampaio 723",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Gustavo Sampaio, 723, Apto 601",
          "addressLocality": "Leme, Rio de Janeiro",
          "addressRegion": "RJ",
          "postalCode": "22010-010",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -22.9634,
          "longitude": -43.1673
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
      "areaServed": ["Rio de Janeiro", "Leme", "Copacabana", "Zona Sul RJ", "Região Metropolitana RJ"],
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20601%20do%20Edif%C3%ADcio%20Waldorf%20na%20Rua%20Gustavo%20Sampaio%20723%20no%20Leme%20-%20RJ."
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
        {/* Resumo do Imóvel — Ficha Técnica e Caracterização Detalhada */}
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
                <li><strong className="text-white">Endereço Completo:</strong> Rua Gustavo Sampaio, nº 723, Apartamento 601, Edifício Waldorf — Leme, Rio de Janeiro/RJ</li>
                <li><strong className="text-white">Área Privativa Edificada:</strong> 95 metros quadrados (95 m²)</li>
                <li><strong className="text-white">Pavimento / Posicionamento:</strong> 6º andar (unidade residencial 601)</li>
                <li><strong className="text-white">Denominação do Condomínio:</strong> Edifício Waldorf</li>
                <li><strong className="text-white">Ano da Construção:</strong> Edificação datada de 1952</li>
                <li><strong className="text-white">Implantação:</strong> Construído no alinhamento do logradouro público (Rua Gustavo Sampaio)</li>
                <li><strong className="text-white">Número de Pavimentos:</strong> 12 pavimentos destinados ao uso residencial</li>
                <li><strong className="text-white">Distribuição por Andar:</strong> 1 unidade no primeiro andar, 3 unidades por andar do 2º ao 10º andar e 2 unidades no 11º e 12º andar</li>
                <li><strong className="text-white">Acessibilidade e Elevadores:</strong> Servido por 3 elevadores, sendo dois elevadores sociais e um elevador de serviço</li>
                <li><strong className="text-white">Garagem:</strong> O edifício possui garagem coletiva para veículos</li>
                <li><strong className="text-white">Portaria e Segurança:</strong> Portaria presencial com atendimento 24 horas e circuito interno de TV (CFTV)</li>
                <li><strong className="text-white">Perfil Condominial:</strong> O prédio não dispõe de playground e nem de salão de festas (ambiente reservado e taxas otimizadas)</li>
                <li><strong className="text-white">Cartório de Registro:</strong> Devidamente registrado, dimensionado e caracterizado no 5º Ofício de Registro de Imóveis (5º RGI) sob a Matrícula nº 87.664</li>
                <li><strong className="text-white">Inscrição Municipal (IPTU):</strong> 0.578.298-2 (Secretaria Municipal de Fazenda do Rio de Janeiro)</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Landmark size={18} /> Dados da Execução e Parâmetros Judiciais
              </h3>
              <ul className="text-xs sm:text-sm text-text-muted space-y-2">
                <li><strong className="text-white">Natureza da Ação:</strong> Execução Judicial perante o Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</li>
                <li><strong className="text-white">Juízo Competente:</strong> Comarca da Capital / Poder Judiciário do Estado do Rio de Janeiro</li>
                <li><strong className="text-white">Valor da Avaliação Judicial:</strong> R$ 1.400.000,00 (homologação oficial nos autos)</li>
                <li><strong className="text-white">1ª Praça Judicial (100%):</strong> 05/11/2026 às 12:20h — Lance mínimo de R$ 1.400.000,00</li>
                <li><strong className="text-white">2ª Praça Judicial (50%):</strong> 10/11/2026 às 12:20h — Lance inicial de R$ 700.000,00</li>
                <li><strong className="text-white">Desconto Homologado:</strong> A segunda praça terá como início 50% do valor da avaliação (economia de R$ 700.000,00)</li>
                <li><strong className="text-white">Custo por m² na 2ª Praça:</strong> Apenas R$ 7.368,42/m² a uma quadra da orla do Leme</li>
                <li><strong className="text-white">Regime de Aquisição:</strong> Aquisição originária judicial, livre e desembaraçada com sub-rogação de tributos (Art. 130 CTN)</li>
                <li><strong className="text-white">Formas de Pagamento:</strong> À vista mediante depósito judicial em 24h ou parcelado nos termos do Art. 895 do CPC</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Contexto de Mercado: Leme, Zona Sul do Rio */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Sparkles size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto de Mercado: Leme, Charme Bucólico e Oportunidade por Metro Quadrado
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O Leme é uma das joias mais exclusivas e charmosas da Zona Sul do Rio de Janeiro. Conhecido por seu ambiente predominantemente residencial, calmo e seguro, o bairro é delimitado pela icônica Pedra do Leme e pelo Forte Duque de Caxias, proporcionando aos seus moradores um clima de vila à beira-mar com total infraestrutura urbana. A Rua Gustavo Sampaio corre paralela à Avenida Atlântica, permitindo chegar à praia em menos de dois minutos a pé, cercada por padarias artesanais, quiosques renomados, bistrôs e comércio de conveniência.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O Edifício Waldorf, erguido em 1952, é um clássico exemplar da arquitetura residencial carioca de meados do século XX: sólida estrutura construtiva, pé-direito generoso, planta versátil de 95 m² com iluminação natural abundante, hall social elegante servido por 3 elevadores e portaria 24 horas com CFTV. O fato de não contar com áreas de lazer barulhentas (sem playground e sem salão de festas) traduz-se no perfil ideal para quem busca silêncio, privacidade e uma cota condominial mensal extremamente controlada e eficiente.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Sob a perspectiva financeira de investimento, o valor estipulado para a 2ª Praça — <strong>R$ 700.000,00</strong> — coloca o metro quadrado em <strong>R$ 7.368,42/m²</strong>. Trata-se de uma oportunidade ímpar: no Leme, apartamentos residenciais de padrão similar situados na Rua Gustavo Sampaio são comercializados no mercado imobiliário tradicional com valores entre <strong>R$ 14.000,00 e R$ 20.000,00/m²</strong>. A margem patrimonial de aquisição assegura excelente retorno para moradia ou para locação (incluindo temporada de alta demanda na Zona Sul).
          </p>

          <div className="p-6 bg-bronze/10 border border-bronze/30 rounded-2xl space-y-2">
            <div className="text-bronze font-serif font-bold text-base flex items-center gap-2">
              <Sparkles size={18} /> Economia Bruta de R$ 700.000,00 (50% de Deságio Judicial)
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Arrematar um apartamento de 95 m² no Leme por metade da avaliação oficial proporciona uma folga orçamentária robusta para eventuais modernizações e decoração personalizada, consolidando liquidez e valorização patrimonial imediata.
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
            O leilão judicial será realizado eletronicamente pelo portal do leiloeiro público oficial credenciado junto ao Tribunal de Justiça do Estado do Rio de Janeiro. A participação requer cadastro prévio e habilitação documental com no mínimo 48 horas de antecedência ao encerramento do pregão.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <CheckCircle2 size={18} /> Pagamento à Vista com Guia Judicial
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Quitação do lance vencedor mediante guia de depósito judicial vinculada à Comarca da Capital do TJRJ no prazo assinalado pelo edital (ordinariamente em até 24 horas), acrescido da comissão de 5% devida ao leiloeiro oficial e custas de cartório.
              </p>
            </div>

            <div className="bg-midnight/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-bronze font-serif font-bold text-base flex items-center gap-2">
                <Scale size={18} /> Parcelamento Judicial nos Termos do Art. 895 do CPC
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Possibilidade legal de submissão de proposta formal nos autos: entrada mínima de 25% (R$ 175.000,00 na 2ª Praça) e saldo remanescente dividido em até 30 parcelas mensais sucessivas corrigidas pela tabela da Justiça, com hipoteca judicial constituída sobre a própria Matrícula nº 87.664 do 5º RGI.
              </p>
            </div>
          </div>
        </article>

        {/* Importância da Assessoria Jurídica e Fases do Processo */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-8">
          <div className="flex items-center gap-3 text-bronze">
            <ShieldCheck size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Importância da Assessoria Jurídica Especializada e Fases do Processo
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Embora o leilão judicial seja uma das vias mais seguras e rentáveis para aquisição imobiliária, o sucesso do investimento depende de uma minuciosa auditoria prévia (due diligence). É imperativo analisar a higidez das intimações processuais, a suficiência da publicação do edital, a eventual existência de recursos pendentes, débitos de cotas condominiais e a correta aplicação do art. 130, parágrafo único do Código Tributário Nacional para sub-rogação do IPTU municipal (nº 0.578.298-2).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 1. Due Diligence
              </div>
              <p className="text-xs text-text-muted">
                Exame rigoroso da Matrícula 87.664 do 5º RGI, autos do processo no TJRJ, certidões dos distribuidores forenses e validação fiscal do IPTU 0.578.298-2.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 2. Estratégia de Lance
              </div>
              <p className="text-xs text-text-muted">
                Habilitação na plataforma do leiloeiro, elaboração de proposta escrita de parcelamento (Art. 895 CPC) ou planejamento financeiro do teto de lance.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 3. Homologação & Custas
              </div>
              <p className="text-xs text-text-muted">
                Assinatura do Auto de Arrematação, recolhimento do ITBI perante a Prefeitura do Rio e peticionamento para baixa de gravames e cancelamento de penhoras.
              </p>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-bronze font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 4. Carta & Posse
              </div>
              <p className="text-xs text-text-muted">
                Obtenção da Carta de Arrematação para registro imobiliário definitivo no 5º RGI e cumprimento presencial do Mandado de Imissão na Posse do Apto 601.
              </p>
            </div>
          </div>
        </article>

        {/* 4 Pilares da Auditoria Preventiva */}
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
        <section className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <h3 className="text-white font-serif text-xl sm:text-2xl font-bold">{tC.relatedTitle}</h3>
              <p className="text-xs sm:text-sm text-text-muted">
                Conheça nossos artigos, guias jurídicos e serviços especializados em leilões imobiliários e direito imobiliário no Estado do Rio de Janeiro.
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
                desc: 'Passo a passo jurídico para aquisições imobiliárias seguras no Estado do Rio de Janeiro.',
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
                <p className="text-xs text-text-muted">Análise de regras condominiais, passivos e convenções na Zona Sul do Rio</p>
              </div>
              <ExternalLink size={16} className="text-bronze shrink-0" />
            </Link>
          </div>
        </section>

        {/* FAQ Específica */}
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
                className="rounded-2xl border border-white/5 bg-midnight/40 overflow-hidden transition-all hover:border-bronze/20"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-white hover:text-bronze transition-colors cursor-pointer"
                  aria-expanded={openFaq === idx}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-bronze font-bold text-sm font-sans">P.</span>
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp size={18} className="text-bronze shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-text-muted shrink-0" />
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20601%20do%20Edif%C3%ADcio%20Waldorf%20na%20Rua%20Gustavo%20Sampaio%20723%20no%20Leme%20-%20RJ."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-midnight text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-midnight transition-all shadow-lg"
              >
                <PhoneCall size={16} />
                {tC.ctaWA}
              </a>

              <a 
                href="mailto:Juniorsadv@hotmail.com?subject=Consulta%20Juridica%20-%20Leilao%20Leme%20Rua%20Gustavo%20Sampaio%20723%20Apto%20601" 
                className="inline-flex items-center justify-center gap-2 border-2 border-midnight text-midnight px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-midnight hover:text-white transition-all"
              >
                <FileText size={16} />
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20da%20Rua%20Gustavo%20Sampaio%20723%20no%20Leme%20-%20RJ."
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

export default LemeGustavoSampaio723AuctionPage;
