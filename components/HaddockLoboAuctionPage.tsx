import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, 
  MapPin, Calendar, DollarSign, ExternalLink, Info, FileSpreadsheet, ShieldAlert, Home
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1785176048605.png';

interface HaddockLoboAuctionPageProps {
  onBack?: () => void;
}

const HaddockLoboAuctionPage: React.FC<HaddockLoboAuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-haddock-lobo-191-apto-405/";

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
          "name": "Leilão na Tijuca - Rua Haddock Lobo 191 Apto 405",
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
          "name": "Qual é o valor de avaliação e o lance mínimo da 2ª praça do apartamento 405 na Rua Haddock Lobo 191 na Tijuca?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O apartamento 405 no Edifício Colima (Rua Haddock Lobo 191, Tijuca) possui avaliação judicial oficial de R$ 320.550,21. Na 1ª praça (28/07/2026 às 12:40h), exige-se 100% da avaliação. Na 2ª praça (30/07/2026 às 12:40h), o lance mínimo inicia em 50% da avaliação, equivalente a R$ 161.000,00."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são as especificações do apartamento e da estrutura do Edifício Colima na Tijuca?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O apartamento 405 possui 60 m² de área edificada, posição de frente, em prédio residencial construído em 1951 composto por 7 pavimentos, com portaria 24 horas e dois elevadores. O imóvel é registrado no 11º RGI sob a matrícula nº 114.079 e inscrito no IPTU sob o nº 0.574.460-2."
          }
        },
        {
          "@type": "Question",
          "name": "Como são quitadas as dívidas de IPTU do imóvel na arrematação judicial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Com amparo no artigo 130 do Código Tributário Nacional (CTN), os débitos tributários municipais de IPTU sub-rogam-se no preço da arrematação, recebendo o arrematante o imóvel livre e desembaraçado de dívidas fiscais anteriores mediante requerimento nos autos."
          }
        },
        {
          "@type": "Question",
          "name": "É possível realizar proposta de parcelamento judicial conforme o artigo 895 do CPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. O artigo 895 do CPC permite a apresentação de proposta escrita nos autos com oferta de sinal mínimo de 25% à vista e o saldo restante parcelado em até 30 parcelas mensais corrigidas, garantido por hipoteca do próprio imóvel."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Qual é o valor de avaliação e a oferta mínima na 2ª praça do Apto 405 na Tijuca?",
      a: "A avaliação judicial oficial fixou o imóvel em R$ 320.550,21 (trezentos e vinte mil, quinhentos e cinquenta reais e vinte e um centavos). Na 1ª Praça (28/07/2026 às 12:40h), aceita-se apenas 100% do valor avaliado. Na 2ª Praça (30/07/2026 às 12:40h), o valor inicial corresponde a 50% da avaliação, estabelecido em R$ 161.000,00 (cento e sessenta e um mil reais)."
    },
    {
      q: "Quais são as características físicas do apartamento e do Edifício Colima?",
      a: "O imóvel é o apartamento 405 situado na Rua Haddock Lobo, nº 191, na Tijuca. Possui 60 m² de área edificada, posição de frente e destinação residencial. O 'Condomínio do Edifício Colima' conta com 7 pavimentos, portaria 24 horas e dois elevadores. O imóvel está registrado no 11º Ofício do Registro de Imóveis (11º RGI) sob a matrícula nº 114.079 e IPTU nº 0.574.460-2."
    },
    {
      q: "Qual é o atrativo de investimento em um apartamento de 60 m² na Tijuca por R$ 161.000,00?",
      a: "O valor de 2ª praça a R$ 161.000,00 equivale a aproximadamente R$ 2.683/m² para um imóvel residencial de frente na Tijuca, bairro tradicional da Zona Norte com altíssima demanda por locação e moradia. Imóveis similares no bairro são negociados entre R$ 6.500 e R$ 8.500/m², oferecendo margem superior a 50% em relação ao mercado."
    },
    {
      q: "Como a equipe do Soares Martins Advogados avalia a segurança jurídica do processo?",
      a: "Analisamos detalhadamente a petição inicial, citação dos executados, eventuais gravames, certidão de matrícula do 11º RGI e a regularidade do edital de leilão, emitindo parecer completo de viabilidade e prevenindo quaisquer riscos de anulação ou passivos ocultos."
    },
    {
      q: "Como funciona a proposta de aquisição parcelada com base no art. 895 do CPC?",
      a: "O interessado pode formular proposta por escrito nos autos do processo antes do encerramento da praça, oferecendo pelo menos 25% do valor da avaliação à vista e o saldo remanescente em até 30 parcelas mensais reajustadas por índice oficial, com garantia de hipoteca judiciária gravada na própria matrícula do bem."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title="Leilão Judicial de Apartamento na Rua Haddock Lobo 191, Apto 405, Tijuca | Assessoria Rio de Janeiro"
        description="Assessoria jurídica em leilões judiciais para o apartamento 405 no Edifício Colima (Rua Haddock Lobo 191, Tijuca). 60 m², frente, 2ª praça a R$ 161.000,00 (50%), 11º RGI, parecer processual no Rio de Janeiro."
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
          <span className="text-white font-medium">Tijuca - Haddock Lobo 191 (Apto 405)</span>
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
            Leilão Judicial de Apartamento na Tijuca — Rua Haddock Lobo, nº 191 (Apto 405)
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left">
            Apartamento 405 — Condomínio do Edifício Colima | Rua Haddock Lobo, 191, Tijuca, Rio de Janeiro/RJ | Análise Preventiva de Edital e Viabilidade Processual
          </p>

          {/* Grid Layout: Photo & Auction Info Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Foto do Imóvel */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[16/10]">
                <img 
                  src={buildingImage} 
                  alt="Apartamento 405 no Edifício Colima na Rua Haddock Lobo 191 na Tijuca Rio de Janeiro" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin size={13} className="text-bronze" /> Rua Haddock Lobo 191 • Apto 405
                  </span>
                  <span className="bg-bronze/90 text-midnight px-3 py-1.5 rounded-lg font-bold">
                    60 m² • Tijuca • Ano 1951
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted italic text-left">
                Imagem ilustrativa do Edifício Colima na Rua Haddock Lobo, Tijuca. Fonte dos dados: Edital de Leilão Judicial do TJRJ.
              </p>
            </div>

            {/* Box de Informações Financeiras e Praças */}
            <div className="lg:col-span-5 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-bronze/30 space-y-6 shadow-xl text-left">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">Valor de Avaliação Judicial</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">R$ 320.550,21</span>
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
                    <div className="text-base sm:text-lg font-serif font-bold text-white">R$ 320.550,21</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">28/07/2026 às 12:40h</div>
                  </div>

                  {/* 2ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> 2ª Praça
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">50% da Avaliação</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 161.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">30/07/2026 às 12:40h</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Nome do Condomínio:</span>
                    <span className="text-white font-medium">Edifício Colima</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Área Edificada:</span>
                    <span className="text-white font-medium">60 m² (Posição: Frente)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Estrutura do Prédio:</span>
                    <span className="text-white font-medium">7 pavimentos • Portaria 24h • 2 Elevadores</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Ano da Edificação:</span>
                    <span className="text-white font-medium">1951</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Registro de Imóveis:</span>
                    <span className="text-white font-medium font-mono">11º RGI • Matrícula 114.079</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Inscrição IPTU:</span>
                    <span className="text-white font-medium font-mono">0.574.460-2</span>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20jur%C3%ADdica%20do%20leil%C3%A3o%20do%20apartamento%20405%20na%20Rua%20Haddock%20Lobo%20191%20na%20Tijuca."
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
            Trata-se do Apartamento 405 integrante do condomínio denominado "Edifício Colima", situado na Rua Haddock Lobo, nº 191, em um dos trechos mais tradicionais e valorizados da Tijuca, Zona Norte do Rio de Janeiro - RJ.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O imóvel possui 60 m² de área edificada, posição de frente para a via pública e destinação estritamente residencial. O condomínio dispõe de infraestrutura sólida composta por 7 pavimentos, portaria 24 horas e 2 elevadores sociais e de serviço, proporcionando conforto e segurança aos moradores.
          </p>

          {/* Ficha Técnica Discreta */}
          <div className="bg-midnight/80 p-6 rounded-2xl border border-bronze/20 space-y-3">
            <div className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-wider">
              <Info size={16} /> Estrutura do Edifício e Posição do Imóvel
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
              <strong className="text-white font-medium">Tipologia:</strong> Apartamento residencial de frente. <strong className="text-white font-medium">Condomínio:</strong> Edifício Colima (construção de 1951), prédio de 7 andares, portaria 24 horas, 2 elevadores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Identificação Imobiliária</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Condomínio:</strong> Edifício Colima</li>
                <li><strong className="text-white">Endereço:</strong> Rua Haddock Lobo, nº 191, Apto 405</li>
                <li><strong className="text-white">Bairro / Cidade:</strong> Tijuca, Rio de Janeiro - RJ</li>
                <li><strong className="text-white">Área Edificada:</strong> 60 m² (Frente)</li>
                <li><strong className="text-white">Ano da Edificação:</strong> 1951</li>
                <li><strong className="text-white">Cartório de Registro:</strong> 11º Ofício do Registro de Imóveis (11º RGI)</li>
                <li><strong className="text-white">Matrícula:</strong> 114.079</li>
                <li><strong className="text-white">Inscrição IPTU:</strong> 0.574.460-2</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Dados da Execução Judicial</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Jurisdição:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</li>
                <li><strong className="text-white">Modalidade:</strong> Leilão Judicial Eletrônico</li>
                <li><strong className="text-white">Avaliação Oficial:</strong> R$ 320.550,21</li>
                <li><strong className="text-white">1ª Praça (100%):</strong> 28/07/2026 às 12:40h (R$ 320.550,21)</li>
                <li><strong className="text-white">2ª Praça (50%):</strong> 30/07/2026 às 12:40h (Mínimo: R$ 161.000,00)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Seção 2: Contexto de Mercado */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <MapPin size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto do Mercado Imobiliário na Tijuca
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Tijuca destaca-se como o bairro mais consolidado e autossuficiente da Zona Norte do Rio de Janeiro. A Rua Haddock Lobo situa-se em localização estratégica, conectando rapidamente o bairro à Zona Sul, ao Centro e aos polos comerciais das praças Saens Peña e Afonso Pena.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A oportunidade de arrematação na 2ª praça por R$ 161.000,00 representa um valor por metro quadrado de apenas ~R$ 2.683/m² para uma unidade residencial de 60 m² de frente, enquanto a média praticada na região para apartamentos semelhantes varia entre R$ 6.500 e R$ 8.500/m². Trata-se de uma excelente oportunidade tanto para residência própria quanto para investidores focados em renda de locação contínua.
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
            Para arrematar o apartamento 405 perante o TJRJ, existem duas modalidades de participação amparadas na legislação processual civil:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Primeira Forma: Nos Autos do Processo */}
            <div className="bg-midnight/60 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-bronze/30 transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-bronze/10 border border-bronze/30 text-bronze flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <h3 className="text-white font-serif font-bold text-lg sm:text-xl">Proposta Formal nos Autos do Processo</h3>
              </div>
              
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Intervenção advocatícia por petição formal de proposta oferecida diretamente nos autos judiciais do processo.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Pagamento Parcelado (Art. 895 do CPC):</strong> Proposta contendo no mínimo 25% de sinal à vista e o saldo restante em até 30 parcelas mensais corrigidas com garantia hipotecária.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Apreciação do Magistrado:</strong> Submissão direta ao juízo em caso de ausência de lances superiores à vista.</span>
                </div>
              </div>
            </div>

            {/* Segunda Forma: No Site do Leiloeiro */}
            <div className="bg-midnight/60 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-bronze/30 transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-bronze/10 border border-bronze/30 text-bronze flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <h3 className="text-white font-serif font-bold text-lg sm:text-xl">Lances no Portal do Leiloeiro Oficial</h3>
              </div>

              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Participação eletrônica direta em ambiente do leiloeiro público oficial credenciado.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Habilitação Eletrônica:</strong> Cadastro e validação de documentos prévios no sistema do leiloeiro.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Pregão Online:</strong> Oferta de lances em tempo real nas datas indicadas (28/07/2026 e 30/07/2026 às 12:40h).</span>
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
            A atuação preventiva de advogados especializados em leilões judiciais assegura total conformidade com o Código de Processo Civil e mitiga riscos de questionamentos futuros por nulidade ou intimação pendente.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Auditoria de Processo e Matrícula (11º RGI)</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Exame completo da Matrícula nº 114.079 no 11º RGI, validação de citações dos executados, penhoras e verificação de eventuais recursos pendentes no TJRJ.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Análise de Débitos e Sub-rogação Fiscal</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Levantamento minucioso dos débitos fiscais de IPTU (nº 0.574.460-2) e aplicação da regra de sub-rogação do artigo 130 do CTN para recebimento do bem livre de pendências municipais.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Acompanhamento do Auto à Imissão na Posse</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Confecção das peças pós-arrematação, expedição da carta de arrematação, guia de ITBI, registro junto ao 11º RGI e cumprimento de mandado de imissão na posse.
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
            Suporte integral ao arrematante dividido em 4 etapas estratégicas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 1 • Due Diligence</div>
              <h3 className="text-white font-semibold text-base">Auditoria Processual e Imobiliária</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Análise técnica da certidão do 11º RGI, autos do processo judicial e emissão do parecer conclusivo de risco.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 2 • Estratégia do Lance</div>
              <h3 className="text-white font-semibold text-base">Habilitação ou Proposta Judicial</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Suporte na habilitação com o leiloeiro ou elaboração de proposta escrita parcelada com fundamento no art. 895 do CPC.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 3 • Arrematação</div>
              <h3 className="text-white font-semibold text-base">Acompanhamento e Assinatura</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Acompanhamento durante a praça pública e validação da lavratura do auto de arrematação judicial.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 4 • Posse e Registro</div>
              <h3 className="text-white font-semibold text-base">Carta de Arrematação e Imissão</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Petição para expedição da carta de arrematação, pagamento de ITBI, registro no 11º RGI e imissão na posse do imóvel.
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
              Perguntas Frequentes Sobre o Leilão do Apto 405 na Rua Haddock Lobo 191
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
            O escritório Soares Martins Advogados presta exclusivamente serviços advocatícios de consultoria jurídica e representação judicial em arrematações. A veiculação de informações extraídas do edital judicial possui propósito meramente informativo, sem constituir intermediação imobiliária comercial ou garantia de ganho financeiro. Cada certame pressupõe auditoria técnica dos autos do processo.
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20405%20na%20Rua%20Haddock%20Lobo%20191%20na%20Tijuca."
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
                <FileText size={20} className="text-bronze" /> Resumo do Edital — Haddock Lobo 191 (Apto 405)
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
                <div>Rua Haddock Lobo nº 191, Apto 405 — Condomínio Edifício Colima, Tijuca, Rio de Janeiro/RJ.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Valor de Avaliação Oficial:</div>
                <div className="text-bronze font-bold">R$ 320.550,21</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Datas das Praças Judiciais:</div>
                <div>1ª Praça: 28/07/2026 às 12:40h (100% da avaliação = R$ 320.550,21)</div>
                <div>2ª Praça: 30/07/2026 às 12:40h (50% da avaliação = R$ 161.000,00)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Descrição e Posição do Bem:</div>
                <div>Apartamento 405 de frente, com 60 m² de área edificada em prédio construído em 1951, com 7 pavimentos, portaria 24h e 2 elevadores.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Registro e Inscrição Municipal:</div>
                <div>11º RGI — Matrícula nº 114.079 | Inscrição IPTU: nº 0.574.460-2.</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20do%20apartamento%20405%20na%20Rua%20Haddock%20Lobo%20191%20na%20Tijuca."
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

export default HaddockLoboAuctionPage;
