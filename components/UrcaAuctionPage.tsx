import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, 
  MapPin, Calendar, DollarSign, ExternalLink, Info, FileSpreadsheet, ShieldAlert, Home
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1785168483869.png';

interface UrcaAuctionPageProps {
  onBack?: () => void;
}

const UrcaAuctionPage: React.FC<UrcaAuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/casa/rua-marechal-cantuaria-75/";

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://soaresmartinsadv.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Áreas de Atuação",
          "item": "https://soaresmartinsadv.com/servicos/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Assessoria em Leilões Judiciais",
          "item": "https://soaresmartinsadv.com/assessoria-leiloes-judiciais/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Leilão na Urca - Rua Marechal Cantuária 75",
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
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qual é a avaliação oficial e o valor de 2ª praça da casa na Rua Marechal Cantuária 75 na Urca?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A casa possui avaliação judicial oficial fixada em R$ 3.820.000,00. Na 1ª praça (19/08/2026 às 12h), o lance mínimo exige 100% da avaliação. Na 2ª praça (25/08/2026 às 12h), autoriza-se lance mínimo a partir de 50% da avaliação (R$ 1.910.000,00), nos termos do CPC e do edital publicado."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são as características da casa na Rua Marechal Cantuária 75 na Urca?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trata-se de um imóvel residencial unifamiliar tipo Casa, com 321 m² de área construída, edificada originalmente em 1938 (fator idade 0,50 e fator tipologia 1,0), de frente para a via, situada em uma das ruas mais arborizadas e bucólicas do tradicional bairro da Urca."
          }
        },
        {
          "@type": "Question",
          "name": "Como funciona a verificação de dívidas de IPTU para este imóvel na Urca?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conforme disposto no art. 130 do Código Tributário Nacional (CTN), os débitos tributários de IPTU (Inscrição Municipal nº 0.422.940-7) sub-rogam-se sobre o valor depositado da arrematação, desonerando o arrematante, ressalvadas as disposições específicas verificadas na auditoria prévia do edital."
          }
        },
        {
          "@type": "Question",
          "name": "É possível protocolar proposta de pagamento parcelado para a compra da casa na Urca?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Nos termos do art. 895 do Código de Processo Civil, o interessado pode apresentar proposta por petição nos autos com sinal de no mínimo 25% à vista e o saldo restante parcelado em até 30 meses, com correção monetária e garantia hipotecária sobre o próprio imóvel."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Qual é a avaliação oficial e o valor de 2ª praça da casa na Rua Marechal Cantuária 75 na Urca?",
      a: "A casa possui avaliação judicial fixada em R$ 3.820.000,00 (três milhões oitocentos e vinte mil reais). Na 1ª Praça (19/08/2026 às 12:00h), o lance mínimo corresponde a 100% da avaliação. Na 2ª Praça (25/08/2026 às 12:00h), caso não haja arrematante na primeira, o lance mínimo é reduzido para 50% da avaliação (R$ 1.910.000,00), permitindo uma expressiva oportunidade de aquisição na Zona Sul."
    },
    {
      q: "Quais são as características físicas e cadastrais da casa na Urca?",
      a: "Trata-se de imóvel residencial unifamiliar tipo Casa de frente para o logradouro, construída em 1938 (com Fator Idade de 0,50 e Fator Tipologia de 1,0), dispondo de 321 m² de área edificada. Cadastrada no IPTU da Prefeitura do Rio sob o número de matrícula 0.422.940-7 e Código de Logradouro 076265."
    },
    {
      q: "Por que o bairro da Urca é considerado um ativo imobiliário diferenciado no Rio de Janeiro?",
      a: "A Urca destaca-se pela elevadíssima segurança, atmosfera bucólica, preservação do patrimônio arquitetônico e escassez absoluta de novas construções. Imóveis residenciais tipo Casa com 321 m² são raros e possuem altíssimo valor patrimonial e demanda consolidada de famílias que buscam tranquilidade na Zona Sul."
    },
    {
      q: "O arrematante responde por débitos anteriores de IPTU ou dívidas fiscais?",
      a: "Pela regra do art. 130, parágrafo único, do Código Tributário Nacional (CTN), os créditos tributários de IPTU e taxas referentes ao imóvel sub-rogam-se no preço da arrematação judicial, liberando o imóvel para transferência limpa ao novo proprietário, mediante confirmação no edital."
    },
    {
      q: "Como funciona a assessoria do escritório Soares Martins Advogados para este leilão?",
      a: "Nossa atuação abrange a auditoria completa dos autos no TJRJ, certidão de ônus reais no RGI competente, análise de viabilidade do pedido de parcelamento (Art. 895 do CPC), acompanhamento no certame e atuações para imissão na posse e baixa dos gravames no registro de imóveis."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title="Leilão Judicial de Casa na Rua Marechal Cantuária, Urca | Assessoria Leilões Judiciais Imóveis Rio de Janeiro"
        description="Assessoria jurídica em leilões judiciais para casa na Rua Marechal Cantuária 75, Urca. Análise de edital, 321 m², 1938, parecer processual no Rio de Janeiro."
        image={buildingImage}
        schema={pageSchema}
      />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <Link to="/" className="hover:text-bronze transition-colors">Início</Link>
          <ChevronRight size={12} className="text-bronze shrink-0" />
          <Link to="/servicos/" className="hover:text-bronze transition-colors">Áreas de Atuação</Link>
          <ChevronRight size={12} className="text-bronze shrink-0" />
          <Link to="/assessoria-leiloes-judiciais/" className="hover:text-bronze transition-colors">Leilões Judiciais</Link>
          <ChevronRight size={12} className="text-bronze shrink-0" />
          <span className="text-white font-medium">Urca - Rua Marechal Cantuária 75</span>
        </nav>

        {/* Back Link */}
        <Link 
          to="/assessoria-leiloes-judiciais/" 
          className="inline-flex items-center gap-2 text-bronze text-xs uppercase tracking-widest font-bold hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Voltar para Assessoria em Leilões Judiciais
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pb-12 sm:pb-16">
        <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/10 border border-bronze/30 text-bronze text-xs font-semibold uppercase tracking-wider mb-6">
            <Gavel size={14} /> Leilão Judicial de Imóveis • Rio de Janeiro/RJ
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-4 text-left">
            Leilão Judicial de Casa na Urca — Rua Marechal Cantuária, nº 75
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left">
            Rua Marechal Cantuária, nº 75 — Urca, Rio de Janeiro/RJ | Análise Preventiva de Edital e Viabilidade Processual
          </p>

          {/* Grid Layout: Photo & Auction Info Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Foto do Imóvel */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[16/10]">
                <img 
                  src={buildingImage} 
                  alt="Casa na Rua Marechal Cantuaria 75 na Urca Rio de Janeiro" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin size={13} className="text-bronze" /> R. Marechal Cantuária 75 • Urca
                  </span>
                  <span className="bg-bronze/90 text-midnight px-3 py-1.5 rounded-lg font-bold">
                    321 m² Área Construída • Casa (1938)
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted italic text-left">
                Imagem ilustrativa do logradouro bucólico na Urca. Fonte dos dados: Edital de Leilão Judicial do TJRJ.
              </p>
            </div>

            {/* Box de Informações Financeiras e Praças */}
            <div className="lg:col-span-5 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-bronze/30 space-y-6 shadow-xl text-left">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">Valor de Avaliação Judicial</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">R$ 3.820.000,00</span>
                </div>

                {/* Praças Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {/* 1ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] uppercase font-bold text-bronze tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> 1ª Praça
                    </div>
                    <div className="text-sm font-semibold text-white mb-2">100% da Avaliação</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-white">R$ 3.820.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">19/08/2026 às 12:00h</div>
                  </div>

                  {/* 2ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> 2ª Praça
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Até 50% de Desconto</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 1.910.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">25/08/2026 às 12:00h</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Tipologia:</span>
                    <span className="text-white font-medium">Casa Residencial (Unifamiliar)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Área Edificada:</span>
                    <span className="text-white font-medium">321 m²</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Ano / Idade:</span>
                    <span className="text-white font-medium">1938 (Fator Idade: 0,50)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Posição no Terreno:</span>
                    <span className="text-white font-medium">Frente (Fator Tipologia: 1,0)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Inscrição IPTU:</span>
                    <span className="text-white font-medium font-mono">0.422.940-7</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Código Logradouro:</span>
                    <span className="text-white font-medium font-mono">076265</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <button 
                    onClick={() => setShowEditalModal(true)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2"
                  >
                    <FileText size={15} /> Ver Resumo Didático do Edital
                  </button>

                  <a 
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20jur%C3%ADdica%20do%20leil%C3%A3o%20da%20casa%20na%20Rua%20Marechal%20Cantu%C3%A1ria%2075%20na%20Urca."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-bronze hover:bg-white text-midnight font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <PhoneCall size={15} /> Solicitar Parecer de Viabilidade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-7xl mx-auto px-6 pb-16 space-y-12">
        {/* Seção 1: Resumo do Imóvel & Ficha Técnica */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Home size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Resumo do Imóvel e Ficha Técnica
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Trata-se de um imóvel residencial unifamiliar tipo Casa, situado na Rua Marechal Cantuária, nº 75, no tradicional e bucólico bairro da Urca, Zona Sul do município do Rio de Janeiro - RJ. A edificação possui 321 m² de área construída, com construção originária de 1938, de frente para o logradouro. A Urca é reconhecida pela excelente qualidade de vida, arborização, baixíssima densidade construtiva e altíssima segurança patrimonial.
          </p>

          {/* Ficha Técnica Discreta */}
          <div className="bg-midnight/80 p-6 rounded-2xl border border-bronze/20 space-y-3">
            <div className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-wider">
              <Info size={16} /> Ficha Técnica e Cadastro Imobiliário
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
              <strong className="text-white font-medium">Caracterização da Região e Logradouro:</strong> O imóvel avaliado está situado na Rua Marechal Cantuária, no bairro da Urca, Zona Sul do município do Rio de Janeiro. Trata-se de um dos bairros mais tradicionais da cidade, caracterizado por sua atmosfera residencial, arborizada e de baixa densidade construtiva, mantendo preservadas muitas de suas edificações originais e o charme de suas ruas tranquilas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Identificação Imobiliária</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Endereço:</strong> Rua Marechal Cantuária, nº 75</li>
                <li><strong className="text-white">Bairro / Cidade:</strong> Urca, Rio de Janeiro - RJ</li>
                <li><strong className="text-white">Tipologia:</strong> Casa (Residencial)</li>
                <li><strong className="text-white">Área Construída:</strong> 321 m²</li>
                <li><strong className="text-white">Ano da Construção:</strong> 1938 (Fator Idade: 0,50)</li>
                <li><strong className="text-white">Posição:</strong> Frente (Fator Tipologia: 1,0)</li>
                <li><strong className="text-white">Inscrição IPTU:</strong> 0.422.940-7</li>
                <li><strong className="text-white">Código Logradouro:</strong> 076265</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Dados da Execução Judicial</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Jurisdição:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</li>
                <li><strong className="text-white">Modalidade:</strong> Leilão Judicial Eletrônico</li>
                <li><strong className="text-white">Avaliação Judicial:</strong> R$ 3.820.000,00</li>
                <li><strong className="text-white">1ª Praça (100%):</strong> 19/08/2026 às 12:00h</li>
                <li><strong className="text-white">2ª Praça (50%):</strong> 25/08/2026 às 12:00h (Mínimo: R$ 1.910.000,00)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Seção 2: Contexto Institucional da Urca e Mercado Imobiliário */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <MapPin size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto do Mercado Imobiliário na Urca
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O bairro da Urca é uma península abrigada aos pés do Pão de Açúcar, famosa por sua tranquilidade, segurança diferenciada mantida por guarnições militares e estilo de vida único. Por se tratar de uma área tombada e com limitações construtivas rígidas, a oferta de casas residenciais com 321 m² na Urca é extremamente restrita.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O surgimento de um imóvel unifamiliar em leilão judicial na Rua Marechal Cantuária constitui um evento raro na Zona Sul carioca. A oportunidade de arrematação em 2ª praça com 50% de desconto (R$ 1.910.000,00) exige, contudo, indispensável auditoria jurídica prévia do processo de execução, verificação da regularidade fiscal no IPTU da Prefeitura do Rio e exame das intimações das partes e eventuais credores com direito real.
          </p>
        </article>

        {/* Seção 3: Como participar do Leilão */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Gavel size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Como Participar do Leilão
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Existem duas formas principais de participar e apresentar lances em um leilão judicial de imóveis no Rio de Janeiro. Ambas contam com respaldo legal e exigem atenção aos prazos e requisitos estipulados no edital e no Código de Processo Civil:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Primeira Forma: Nos Autos do Processo */}
            <div className="bg-midnight/60 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-bronze/30 transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-bronze/10 border border-bronze/30 text-bronze flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <h3 className="text-white font-serif font-bold text-lg sm:text-xl">Oferecendo Lance nos Autos do Processo</h3>
              </div>
              
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Esta modalidade é realizada por meio de petição formal protocolada diretamente nos autos da execução pelo advogado representante do interessado.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Propostas de Parcelamento (Art. 895 do CPC):</strong> Ideal para quem deseja ofertar sinal mínimo de 25% à vista e o saldo em até 30 parcelas corrigidas, apresentando a proposta antes do início da praça correspondente.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Segurança e Análise Direta do Juiz:</strong> A oferta fica registrada no processo e é submetida à apreciação do magistrado caso não haja lances à vista equivalentes no leilão.</span>
                </div>
              </div>
            </div>

            {/* Segunda Forma: No Site do Leiloeiro */}
            <div className="bg-midnight/60 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-bronze/30 transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-bronze/10 border border-bronze/30 text-bronze flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <h3 className="text-white font-serif font-bold text-lg sm:text-xl">Oferecendo Lance no Site do Leiloeiro</h3>
              </div>

              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Esta é a forma mais tradicional de disputar o imóvel durante o leilão público eletrônico, ocorrendo diretamente no sistema online do leiloeiro oficial designado.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Habilitação Prévia:</strong> O interessado realiza seu cadastro no site do leiloeiro, envia os documentos pessoais (RG, CPF, comprovante de residência) e aguarda a aprovação da conta.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Disputa em Tempo Real:</strong> Durante os dias e horários fixados para a 1ª ou 2ª praça, os participantes homologados efetuam seus lances online em tempo real no portal do leilão.</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Seção 4: Por que a assessoria jurídica é importante */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <Scale size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Importância da Assessoria Jurídica em Leilões
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A atuação de um advogado especialista em leilão judicial de imóveis na Urca proporciona a avaliação técnica preventiva indispensável para mitigar riscos de anulação e conferir previsibilidade jurídica ao investimento na Zona Sul.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Due Diligence Preventiva e Auditoria de Riscos Processuais</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Exame minucioso da cadeia processual no TJRJ, certidão de ônus reais no Cartório de Registro de Imóveis competente e verificação das intimações legais dos devedores para assegurar a higidez da arrematação.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Elaboração de Proposta Parcelada (Art. 895 do CPC)</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Orientação e formalização de proposta para aquisição parcelada em leilão judicial (mínimo de 25% à vista e saldo em até 30 parcelas mensais corrigidas), observando os requisitos exigidos no juízo competente.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Expedição de Carta de Arrematação e Imissão na Posse</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Atuação célere perante o cartório judicial para lavratura do auto, quitação do ITBI, expedição do mandado de imissão na posse e cancelamento das penhoras e hipotecas no registro de imóveis.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Seção 5: Como funciona o acompanhamento (4 Fases Resumidas) */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <FileSpreadsheet size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Fases do Acompanhamento Jurídico
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O suporte prestado pelo escritório Soares Martins Advogados para leilões judiciais na Urca e todo o Rio de Janeiro é estruturado de forma direta e transparente em 4 fases integradas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 1 • Auditoria Preventiva</div>
              <h3 className="text-white font-semibold text-base">Análise do Edital e Matrícula</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Levantamento integral dos autos no TJRJ, certidão de ônus e análise de débitos tributários com emissão de parecer de viabilidade.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 2 • Estratégia de Lance</div>
              <h3 className="text-white font-semibold text-base">Habilitação e Proposta</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Cadastro junto ao leiloeiro oficial, definição do teto máximo de arrematação e elaboração de petição de proposta parcelada (Art. 895 do CPC).
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 3 • Arrematação</div>
              <h3 className="text-white font-semibold text-base">Acompanhamento e Auto</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Acompanhamento da praça eletrônica em tempo real e verificação formal da lavratura do Auto de Arrematação pelo leiloeiro e juiz.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 4 • Posse e Registro</div>
              <h3 className="text-white font-semibold text-base">Carta, Imissão e Registro</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Requerimento da Carta de Arrematação, cumprimento do mandado de imissão na posse e baixa dos gravames no Cartório do Registro de Imóveis.
              </p>
            </div>
          </div>
        </article>

        {/* Links Internos Relevantes */}
        <section className="bg-midnight/60 rounded-2xl p-6 sm:p-8 border border-white/10 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-white font-serif text-lg font-bold">Navegue Pelas Nossas Áreas de Atuação</h3>
            <p className="text-xs text-text-muted">
              Conheça mais sobre nossos serviços em leilões imobiliários e direito imobiliário no Rio de Janeiro.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link 
              to="/assessoria-leiloes-judiciais/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-bronze hover:text-white border border-bronze/30 hover:border-white px-4 py-3 rounded-xl transition-all"
            >
              Assessoria em Leilões <ChevronRight size={14} />
            </Link>
            <Link 
              to="/direito-imobiliario/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white border border-white/10 hover:border-white px-4 py-3 rounded-xl transition-all"
            >
              Direito Imobiliário <ChevronRight size={14} />
            </Link>
          </div>
        </section>

        {/* FAQ Específica da Página */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <HelpCircle size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Perguntas Frequentes Sobre o Leilão na Rua Marechal Cantuária 75 (Urca)
            </h2>
          </div>

          <div className="space-y-4 pt-2">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-white/5 bg-midnight/40 overflow-hidden transition-all hover:border-bronze/20"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-white hover:text-bronze transition-colors"
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

        {/* Texto Neutro Institucional Antes do CTA */}
        <article className="bg-midnight/40 rounded-2xl p-6 sm:p-8 border border-white/10 text-left space-y-3">
          <div className="flex items-center gap-2 text-bronze text-xs uppercase font-bold tracking-widest">
            <ShieldCheck size={16} /> Nota Institucional e Independência Técnica
          </div>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            O escritório Soares Martins Advogados atua com foco exclusivo na auditoria jurídica preventiva e no acompanhamento processual para arrematação de imóveis em leilões judiciais no Rio de Janeiro. A divulgação destas informações possui caráter puramente educativo e técnico, não constituindo promessa de rentabilidade ou anúncio imobiliário comercial. Cada oportunidade deve ser precedida de exame individualizado dos autos e das condições do edital.
          </p>
        </article>

        {/* CTA Sóbrio Final */}
        <section className="bg-bronze p-8 sm:p-12 md:p-14 rounded-3xl text-midnight text-center shadow-2xl border border-bronze/30">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-midnight text-center">
              Fale Com Nossa Equipe Especializada
            </h2>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed font-medium text-center">
              O escritório Soares Martins Advogados oferece pareceres jurídicos fundamentados e suporte preventivo para arrematação de imóveis em leilões judiciais no Rio de Janeiro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20da%20casa%20na%20Rua%20Marechal%20Cantu%C3%A1ria%2075%20na%20Urca."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-midnight text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-midnight transition-all shadow-lg"
              >
                <PhoneCall size={16} />
                Atendimento via WhatsApp
              </a>

              <a 
                href="mailto:Juniorsadv@hotmail.com" 
                className="inline-flex items-center justify-center gap-2 border-2 border-midnight text-midnight px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-midnight hover:text-white transition-all"
              >
                Enviar E-mail Corporativo
              </a>
            </div>

            <p className="pt-4 text-[11px] uppercase tracking-wider opacity-80 font-semibold text-center">
              Atendimento presencial em Ipanema/RJ (Rua Visconde de Pirajá, 414 - Sala 718) e consultas virtuais.
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
                <FileText size={20} className="text-bronze" /> Resumo do Edital — Rua Marechal Cantuária 75
              </h3>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-white p-1 rounded-lg text-sm"
              >
                ✕ Fechar
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-text-muted leading-relaxed">
              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Localização do Imóvel:</div>
                <div>Rua Marechal Cantuária nº 75 — Urca, Rio de Janeiro/RJ.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Valor de Avaliação Oficial:</div>
                <div className="text-bronze font-bold">R$ 3.820.000,00</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Datas das Praças Judiciais:</div>
                <div>1ª Praça: 19/08/2026 às 12:00h (100% da avaliação = R$ 3.820.000,00)</div>
                <div>2ª Praça: 25/08/2026 às 12:00h (Até 50% da avaliação = R$ 1.910.000,00)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Descrição e Tipologia:</div>
                <div>Imóvel Residencial Unifamiliar tipo Casa de frente, com 321 m² de área construída, edificada em 1938 (Fator Idade: 0,50 | Fator Tipologia: 1,0). Bairro bucólico de baixa densidade construtiva.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Cadastro de Logradouro e IPTU:</div>
                <div>Inscrição IPTU nº 0.422.940-7 | Código do Logradouro nº 076265.</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
              <button 
                onClick={() => setShowEditalModal(false)}
                className="px-5 py-2.5 bg-white/10 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                Fechar
              </button>
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20da%20casa%20na%20Urca."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-bronze text-midnight font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-white transition-all inline-flex items-center gap-1.5"
              >
                Solicitar Parecer no WhatsApp <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrcaAuctionPage;
