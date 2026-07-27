import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, 
  MapPin, Calendar, DollarSign, ExternalLink, Info, FileSpreadsheet, ShieldAlert, Home
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1785174970963.png';

interface VoluntariosPatriaAuctionPageProps {
  onBack?: () => void;
}

const VoluntariosPatriaAuctionPage: React.FC<VoluntariosPatriaAuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-381-apto-305/";

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
          "name": "Leilão em Botafogo - Rua Voluntários da Pátria 381 Apto 305",
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
          "name": "Qual é o valor de avaliação e o lance mínimo da 2ª praça do apartamento 305 na Rua Voluntários da Pátria 381?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O apartamento 305 no Edifício Coaracy Nunes (Rua Voluntários da Pátria 381) possui avaliação judicial de R$ 1.030.339,95. Na 1ª praça (28/07/2026 às 12:30h), o lance mínimo exige 100% da avaliação. Na 2ª praça (30/07/2026 às 12:30h), o lance mínimo inicia em 50% da avaliação, equivalente a R$ 516.000,00."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são as características físicas do apartamento e do Edifício Coaracy Nunes em Botafogo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O apartamento 305 conta com 109 m² de área edificada e encontra-se fechado há mais de 10 anos, exigindo projeto de reforma total. O imóvel integra o clássico 'Edifício Coaracy Nunes', construído em 1945 no coração de Botafogo, estando registrado no 3º RGI sob a matrícula nº 9497 e IPTU nº 0.298.026-6."
          }
        },
        {
          "@type": "Question",
          "name": "Como são tratados os débitos tributários de IPTU na arrematação judicial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Com fulcro no artigo 130 do Código Tributário Nacional (CTN), os débitos fiscais municipais de IPTU sub-rogam-se sobre o preço obtido na arrematação, recebendo o arrematante o bem livre e desembaraçado de pendências tributárias anteriores mediante requerimento nos autos."
          }
        },
        {
          "@type": "Question",
          "name": "É possível realizar proposta de parcelamento judicial segundo o artigo 895 do CPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. O artigo 895 do CPC permite a apresentação de proposta formal nos autos do processo contendo oferta de sinal mínimo de 25% à vista e o saldo restante financiado em até 30 parcelas mensais corrigidas, mediante garantia de hipoteca judicial do próprio imóvel."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Qual é o valor de avaliação oficial e o lance mínimo na 2ª praça do Apto 305?",
      a: "A avaliação judicial oficial do imóvel foi fixada em R$ 1.030.339,95 (um milhão, trinta mil, trezentos e trinta e nove reais e noventa e cinco centavos). Na 1ª Praça (28/07/2026 às 12:30h), exige-se 100% do valor avaliado. Na 2ª Praça (30/07/2026 às 12:30h), o valor mínimo para início da praça corresponde a 50% da avaliação, estabelecido em R$ 516.000,00 (quinhentos e dezesseis mil reais)."
    },
    {
      q: "Quais são as especificações do imóvel e do Edifício Coaracy Nunes em Botafogo?",
      a: "O imóvel é o apartamento 305 do Edifício Coaracy Nunes, situado na Rua Voluntários da Pátria, nº 381. Possui 109 m² de área edificada em construção clássica datada de 1945. Consta nos autos judiciais que o apartamento encontra-se fechado há mais de 10 anos. Registrado no 3º Ofício do Registro de Imóveis (3º RGI) sob a matrícula nº 9497 e inscrito na Prefeitura sob o IPTU nº 0.298.026-6."
    },
    {
      q: "Qual é o apelo de investimento em um imóvel de 109 m² fechado há mais de 10 anos em Botafogo?",
      a: "O valor de 2ª praça a R$ 516.000,00 representa um custo de aproximadamente R$ 4.733/m² para uma área nobre de 109 m² no miolo de Botafogo, onde o metro quadrado médio supera R$ 12.000/m². O deságio de 50% absorve com folga os custos estimados de reforma completa, proporcionando elevado potencial de valorização patrimonial ou renda de locação."
    },
    {
      q: "Como a equipe do Soares Martins Advogados avalia os riscos do processo e das dívidas do bem?",
      a: "Realizamos auditoria jurídica completa (due diligence): verificação minuciosa do processo no TJRJ, certidões do 3º RGI, regularidade da citação dos executados, apuração de potenciais débitos condominiais e fiscais, e análise da aplicação da sub-rogação do art. 130 do CTN, mitigando riscos antes do lance."
    },
    {
      q: "Como funciona o requerimento de parcelamento judicial conforme o art. 895 do CPC?",
      a: "Nos termos do art. 895 do Código de Processo Civil, o interessado pode protocolar petição com proposta formal nos autos antes do encerramento da praça, oferecendo pelo menos 25% do valor da avaliação à vista e o restante em até 30 parcelas mensais reajustadas, garantidas por hipoteca sobre o imóvel."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title="Leilão Judicial de Apartamento na Rua Voluntários da Pátria 381, Apto 305, Botafogo | Assessoria Rio de Janeiro"
        description="Assessoria jurídica em leilões judiciais para o apartamento 305 no Edifício Coaracy Nunes (Rua Voluntários da Pátria 381, Botafogo). 109 m², 2ª praça a R$ 516.000,00 (50%), 3º RGI, parecer processual no Rio de Janeiro."
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
          <span className="text-white font-medium">Botafogo - Voluntários da Pátria 381 (Apto 305)</span>
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
            Leilão Judicial de Apartamento em Botafogo — Rua Voluntários da Pátria, nº 381 (Apto 305)
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left">
            Apartamento 305 — Edifício Coaracy Nunes | Rua Voluntários da Pátria, 381, Botafogo, Rio de Janeiro/RJ | Análise Preventiva de Edital e Viabilidade Processual
          </p>

          {/* Grid Layout: Photo & Auction Info Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Foto do Imóvel */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[16/10]">
                <img 
                  src={buildingImage} 
                  alt="Apartamento 305 no Edifício Coaracy Nunes na Rua Voluntários da Pátria 381 em Botafogo Rio de Janeiro" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin size={13} className="text-bronze" /> Voluntários da Pátria 381 • Apto 305
                  </span>
                  <span className="bg-bronze/90 text-midnight px-3 py-1.5 rounded-lg font-bold">
                    109 m² • Botafogo • Ano 1945
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted italic text-left">
                Imagem ilustrativa do Edifício Coaracy Nunes na Rua Voluntários da Pátria, Botafogo. Fonte dos dados: Edital de Leilão Judicial do TJRJ.
              </p>
            </div>

            {/* Box de Informações Financeiras e Praças */}
            <div className="lg:col-span-5 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-bronze/30 space-y-6 shadow-xl text-left">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">Valor de Avaliação Judicial</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">R$ 1.030.339,95</span>
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
                    <div className="text-base sm:text-lg font-serif font-bold text-white">R$ 1.030.339,95</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">28/07/2026 às 12:30h</div>
                  </div>

                  {/* 2ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> 2ª Praça
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">50% da Avaliação</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 516.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">30/07/2026 às 12:30h</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Nome do Condomínio:</span>
                    <span className="text-white font-medium">Edifício Coaracy Nunes</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Área Edificada:</span>
                    <span className="text-white font-medium">109 m²</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Ano da Construção:</span>
                    <span className="text-white font-medium">1945 (Clássico)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Situação do Imóvel:</span>
                    <span className="text-amber-400 font-semibold">Fechado há +10 anos</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Registro de Imóveis:</span>
                    <span className="text-white font-medium font-mono">3º RGI • Matrícula 9497</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Inscrição IPTU:</span>
                    <span className="text-white font-medium font-mono">0.298.026-6</span>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20jur%C3%ADdica%20do%20leil%C3%A3o%20do%20apartamento%20305%20na%20Rua%20Volunt%C3%A1rios%20da%20P%C3%A1tria%20381%20em%20Botafogo."
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
            Trata-se do Apartamento 305 do tradicional condomínio denominado "Edifício Coaracy Nunes", situado na Rua Voluntários da Pátria, nº 381, no coração gastronômico e comercial de Botafogo, Zona Sul do Rio de Janeiro - RJ.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O imóvel possui generosa área edificada de 109 m², sendo edificado em 1945. Conforme consta expressamente do edital e laudo de avaliação judicial, a unidade encontra-se desocupada e fechada há mais de 10 (dez) anos, o que demanda um projeto abrangente de reforma técnica de instalações elétricas, hidráulicas e revestimentos, justificando a expressiva margem de deságio da arrematação.
          </p>

          {/* Ficha Técnica Discreta */}
          <div className="bg-midnight/80 p-6 rounded-2xl border border-bronze/20 space-y-3">
            <div className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-wider">
              <Info size={16} /> Estado de Conservação e Especificações
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
              <strong className="text-white font-medium">Status de Desocupação:</strong> Fechado há mais de 10 anos. <strong className="text-white font-medium">Condomínio:</strong> Edifício Coaracy Nunes, construído em 1945. Estrutura sólida da arquitetura de meados do século XX na Zona Sul carioca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Identificação Imobiliária</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Edifício:</strong> Edifício Coaracy Nunes</li>
                <li><strong className="text-white">Endereço:</strong> Rua Voluntários da Pátria, nº 381, Apto 305</li>
                <li><strong className="text-white">Bairro / Cidade:</strong> Botafogo, Rio de Janeiro - RJ</li>
                <li><strong className="text-white">Área Edificada:</strong> 109 m²</li>
                <li><strong className="text-white">Ano da Edificação:</strong> 1945</li>
                <li><strong className="text-white">Cartório de Registro:</strong> 3º Ofício do Registro de Imóveis (3º RGI)</li>
                <li><strong className="text-white">Matrícula:</strong> 9497</li>
                <li><strong className="text-white">Inscrição IPTU:</strong> 0.298.026-6</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Dados da Execução Judicial</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Jurisdição:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</li>
                <li><strong className="text-white">Modalidade:</strong> Leilão Judicial Eletrônico</li>
                <li><strong className="text-white">Avaliação Oficial:</strong> R$ 1.030.339,95</li>
                <li><strong className="text-white">1ª Praça (100%):</strong> 28/07/2026 às 12:30h (R$ 1.030.339,95)</li>
                <li><strong className="text-white">2ª Praça (50%):</strong> 30/07/2026 às 12:30h (Mínimo: R$ 516.000,00)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Seção 2: Contexto de Mercado */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <MapPin size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto do Mercado Imobiliário em Botafogo
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Botafogo consagra-se como um dos polos culturais, gastronômicos e residenciais mais cobiçados da Zona Sul do Rio de Janeiro. A Rua Voluntários da Pátria é a artéria vital do bairro, contando com farta malha de transportes, estação de metrô, cinemas, hospitais de excelência e colégios tradicionais.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A aquisição de uma unidade de 109 m² por R$ 516.000,00 na 2ª praça equivale a um valor de apenas ~R$ 4.733/m², patamar extremamente raro em Botafogo, onde o metro quadrado de imóveis reformados oscila rotineiramente entre R$ 11.000 e R$ 15.000. O deságio de 50% oferece ampla margem financeira para cobrir o retrofit completo do apartamento e ainda garantir uma valorização expressiva ao capital investido.
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
            Para arrematar o apartamento 305 no TJRJ, o investidor dispõe de duas vias jurídicas de participação regulamentadas pelo Código de Processo Civil:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Primeira Forma: Nos Autos do Processo */}
            <div className="bg-midnight/60 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-bronze/30 transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-bronze/10 border border-bronze/30 text-bronze flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <h3 className="text-white font-serif font-bold text-lg sm:text-xl">Proposta Formal nos Autos do Processo</h3>
              </div>
              
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Intervenção advocatícia mediante petição formal de proposta protocolada diretamente nos autos do processo judicial.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Pagamento Parcelado (Art. 895 do CPC):</strong> Ofertando sinal de no mínimo 25% à vista e o saldo restante em até 30 parcelas mensais corrigidas com hipoteca do imóvel.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Submissão ao Juízo:</strong> Apreciação direta pelo magistrado da causa em caso de inexistência de lances superiores na modalidade à vista.</span>
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
                Oferta de lances em ambiente eletrônico público mediante habilitação cadastral prévia na plataforma do gestor do leilão.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Habilitação Prévia:</strong> Validação documental e verificação de capacidade jurídica perante o leiloeiro.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Disputa Online:</strong> Lances em tempo real nas datas aprazadas no edital (28/07/2026 e 30/07/2026 às 12:30h).</span>
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
            A arrematação de bens em leilões judiciais exige estrito rigor técnico quanto ao Código de Processo Civil e ao Código Tributário Nacional para afastar vícios de citação, nulidades ou passivos não identificados.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Auditoria Completa do Processo e RGI</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Exame da Matrícula nº 9497 no 3º RGI, verificação da citação dos executados, eventual coproprietário ou credores hipotecários, e mapeamento do histórico de ônus judiciais.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Estudo de Viabilidade Financeira e Fiscal</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Cálculo do custo global de aquisição incluindo comissão do leiloeiro (5%), ITBI, custas de registro e análise da sub-rogação do art. 130 do CTN para débitos de IPTU (nº 0.298.026-6).
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Atuação Célere Pós-Arrematação até a Posse</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Requerimento do auto de arrematação, expedição da carta de arrematação, baixa de penhoras na matrícula e expedição de mandado de imissão na posse.
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
            Acompanhamento integral do arrematante ao longo de 4 etapas estruturadas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 1 • Due Diligence</div>
              <h3 className="text-white font-semibold text-base">Análise Processual e Cartorária</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Estudo prévio dos autos judiciais no TJRJ, matrícula imobiliária no 3º RGI e emissão do parecer de viabilidade jurídica.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 2 • Habilitação ou Proposta</div>
              <h3 className="text-white font-semibold text-base">Estratégia do Lance ou Proposta</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Cadastramento na plataforma do leiloeiro ou minuta de proposta parcelada em até 30 meses nos termos do art. 895 do CPC.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 3 • Arrematação</div>
              <h3 className="text-white font-semibold text-base">Acompanhamento e Homologação</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Suporte durante a praça e acompanhamento da lavratura e assinatura do auto de arrematação pelo magistrado.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 4 • Posse e Registro</div>
              <h3 className="text-white font-semibold text-base">Carta de Arrematação e Imissão</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Requerimento judicial da expedição da carta de arrematação, recolhimento de ITBI, baixa de ônus no RGI e posse efetiva.
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
              Perguntas Frequentes Sobre o Leilão do Apto 305 na Rua Voluntários da Pátria 381
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20305%20na%20Rua%20Volunt%C3%A1rios%20da%20P%C3%A1tria%20381%20em%20Botafogo."
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
                <FileText size={20} className="text-bronze" /> Resumo do Edital — Voluntários da Pátria 381 (Apto 305)
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
                <div>Rua Voluntários da Pátria nº 381, Apto 305 — Edifício Coaracy Nunes, Botafogo, Rio de Janeiro/RJ.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Valor de Avaliação Oficial:</div>
                <div className="text-bronze font-bold">R$ 1.030.339,95</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Datas das Praças Judiciais:</div>
                <div>1ª Praça: 28/07/2026 às 12:30h (100% da avaliação = R$ 1.030.339,95)</div>
                <div>2ª Praça: 30/07/2026 às 12:30h (50% da avaliação = R$ 516.000,00)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Descrição e Situação do Bem:</div>
                <div>Apartamento 305 com 109 m² de área edificada em prédio construído em 1945. Unidade fechada há mais de 10 anos.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Registro e Inscrição Municipal:</div>
                <div>3º RGI — Matrícula nº 9497 | Inscrição IPTU: nº 0.298.026-6.</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20do%20apartamento%20305%20na%20Rua%20Volunt%C3%A1rios%20da%20P%C3%A1tria%20381%20em%20Botafogo."
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

export default VoluntariosPatriaAuctionPage;
