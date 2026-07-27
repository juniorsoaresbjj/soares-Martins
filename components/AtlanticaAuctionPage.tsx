import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, 
  MapPin, Calendar, DollarSign, ExternalLink, Info, FileSpreadsheet, ShieldAlert
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1785166146346.png';

interface AtlanticaAuctionPageProps {
  onBack?: () => void;
}

const AtlanticaAuctionPage: React.FC<AtlanticaAuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-2376/";

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
          "name": "Leilão em Copacabana - Av. Atlântica 2376",
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
          "name": "Qual é a avaliação oficial do imóvel no leilão judicial da Avenida Atlântica 2376 em Copacabana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O apartamento nº 203 possui avaliação oficial no processo de R$ 1.350.000,00. Na 1ª praça (03/08/2026 às 12h), o lance mínimo corresponde a 100% da avaliação. Na 2ª praça (05/08/2026 às 12h), o lance mínimo é fixado em 50% do valor avaliado (R$ 675.000,00), nos termos autorizados no edital e pelo CPC."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são as características do apartamento 203 na Avenida Atlântica 2376?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trata-se de unidade residencial com 119 m² de área edificada, composta por sala, 3 quartos (sendo 2 suítes), banheiro social, cozinha e área de serviço, em regular estado de conservação, situada no Edifício Assú, com entrada principal pela Avenida Atlântica 2376 e entrada suplementar pela Rua Domingos Ferreira 25."
          }
        },
        {
          "@type": "Question",
          "name": "O arrematante deste apartamento na Av. Atlântica assume débitos anteriores de IPTU e condomínio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os débitos de IPTU e taxas públicas sub-rogam-se sobre o valor depositado na arrematação (art. 130 do CTN). Quanto às cotas condominiais pendentes, a responsabilidade é aferida no exame minucioso das regras expressas do edital de leilão e das decisões proferidas pelo TJRJ."
          }
        },
        {
          "@type": "Question",
          "name": "É possível solicitar proposta de aquisição parcelada para este leilão na Av. Atlântica?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conforme disposto no art. 895 do Código de Processo Civil, havendo permissão no edital, o arrematante pode protocolar proposta contendo oferta de no mínimo 25% à vista e o saldo em até 30 parcelas mensais corrigidas, garantidas por hipoteca sobre o próprio bem."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Qual é a avaliação oficial do imóvel no leilão judicial da Avenida Atlântica 2376 em Copacabana?",
      a: "O apartamento nº 203 possui avaliação judicial fixada em R$ 1.350.000,00 (um milhão, trezentos e cinquenta mil reais). Na 1ª Praça (03/08/2026 às 12:00h), o lance mínimo é correspondente a 100% da avaliação. Na 2ª Praça (05/08/2026 às 12:00h), caso não haja arremate na primeira, admite-se lance mínimo com até 50% de desconto legal (R$ 675.000,00), observadas as diretrizes fixadas pelo magistrado e pelo edital publicado."
    },
    {
      q: "O imóvel possui entrada suplementar e fácil acesso a transporte em Copacabana?",
      a: "Sim. O apartamento possui entrada principal pela orla da Avenida Atlântica nº 2.376 e entrada suplementar pela Rua Domingos Ferreira nº 25, proporcionando excelente mobilidade urbana, proximidade com estações de metrô e farto comércio tradicional do bairro."
    },
    {
      q: "O arrematante deste apartamento na Av. Atlântica assume débitos anteriores de IPTU e condomínio?",
      a: "Para débitos tributários de IPTU (Inscrição Municipal nº 0.649.780-4), aplica-se a regra do art. 130 do CTN, ocorrendo a sub-rogação sobre o preço arrecadado. Em relação às cotas de condomínio em atraso do Edifício Assú, a definição de responsabilidade exige parecer técnico prévio para confrontar a redação exata do edital com a jurisprudência do TJRJ e STJ."
    },
    {
      q: "É possível protocolar proposta de pagamento parcelado neste leilão judicial?",
      a: "Sim. O art. 895 do Código de Processo Civil faculta aos interessados a apresentação de proposta para pagamento parcelado de imóvel em leilão judicial (sinal de ao menos 25% à vista e saldo em até 30 parcelas mensais ajustadas), mediante formalização tempestiva nos autos antes do encerramento da praça."
    },
    {
      q: "Como solicitar a auditoria jurídica completa do edital deste leilão na Av. Atlântica?",
      a: "Nossa equipe jurídica realiza o levantamento integral dos autos processuais no TJRJ, verificação da certidão de ônus reais no 5º RGI, cálculo detalhado de custos acessórios e elaboração de parecer fundamentado de viabilidade jurídica antes do dia de abertura do certame."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title="Leilão Judicial de Apartamento na Avenida Atlântica, Copacabana | Assessoria Leilões Judiciais Imóveis Rio de Janeiro"
        description="Assessoria jurídica em leilões judiciais para apartamento na Avenida Atlântica 2376, Copacabana. Análise de edital, 119 m², beira-mar, parecer processual no Rio de Janeiro."
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
          <span className="text-white font-medium">Copacabana - Av. Atlântica 2376</span>
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
            Leilão Judicial de Apartamento na Avenida Atlântica, Copacabana
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left">
            Avenida Atlântica, nº 2.376 (Entrada Suplementar: Rua Domingos Ferreira, nº 25) — Copacabana, Rio de Janeiro/RJ | Análise Preventiva de Edital e Viabilidade Processual
          </p>

          {/* Grid Layout: Photo & Auction Info Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Foto do Edifício */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[16/10]">
                <img 
                  src={buildingImage} 
                  alt="Edifício Assú na Avenida Atlântica 2376 em Copacabana Rio de Janeiro" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin size={13} className="text-bronze" /> Av. Atlântica 2376 • Copacabana
                  </span>
                  <span className="bg-bronze/90 text-midnight px-3 py-1.5 rounded-lg font-bold">
                    119 m² • 3 Qts (2 Suítes)
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted italic text-left">
                Imagem ilustrativa da fachada e localização da orla de Copacabana. Fonte dos dados: Edital de Leilão Judicial do TJRJ.
              </p>
            </div>

            {/* Box de Informações Financeiras e Praças */}
            <div className="lg:col-span-5 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-bronze/30 space-y-6 shadow-xl text-left">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">Valor de Avaliação Judicial</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">R$ 1.350.000,00</span>
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
                    <div className="text-base sm:text-lg font-serif font-bold text-white">R$ 1.350.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">03/08/2026 às 12:00h</div>
                  </div>

                  {/* 2ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> 2ª Praça
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Até 50% de Desconto</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 675.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">05/08/2026 às 12:00h</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Edifício:</span>
                    <span className="text-white font-medium">Edifício Assú (28 Unidades)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Área Edificada:</span>
                    <span className="text-white font-medium">119 m²</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Distribuição:</span>
                    <span className="text-white font-medium">Sala, 3 Qts (2 Suítes), W.C., Cozinha, A.S.</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Entrada Suplementar:</span>
                    <span className="text-white font-medium">Rua Domingos Ferreira, 25</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Matrícula RGI:</span>
                    <span className="text-white font-medium">109.679 (5º RGI/RJ)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Inscrição Municipal:</span>
                    <span className="text-white font-medium font-mono">0.649.780-4 (C.L. 06979-9)</span>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20jur%C3%ADdica%20do%20leil%C3%A3o%20na%20Av.%20Atl%C3%A2ntica%202376."
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
            <Building2 size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Resumo do Imóvel e Ficha Técnica
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Trata-se do Apartamento nº 203, situado na prestigiada Avenida Atlântica, nº 2.376, em plena orla do bairro de Copacabana, na Zona Sul do Rio de Janeiro - RJ, com entrada suplementar pela Rua Domingos Ferreira, nº 25. O imóvel possui 119 m² de área edificada e encontra-se em regular estado de conservação, localizado em ponto nobre de Copacabana, cercado por restaurantes de alto padrão, rede bancária, supermercados, serviços e fácil acesso às estações de metrô.
          </p>

          {/* Ficha Técnica Discreta */}
          <div className="bg-midnight/80 p-6 rounded-2xl border border-bronze/20 space-y-3">
            <div className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-wider">
              <Info size={16} /> Ficha Técnica do Edifício Assú e Unidade 203
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
              <strong className="text-white font-medium">Prédio Residencial denominado Assú.</strong> Dispondo de portaria 24 horas, quatro elevadores (sendo dois sociais e dois de serviço), sistema de monitoramento por câmeras de vigilância em todo o prédio e composto por 28 (vinte e oito) unidades no total. <strong className="text-white font-medium">UNIDADE 203:</strong> Composta por sala, 3 (três) quartos, 2 (duas) suítes, 1 (um) banheiro social, cozinha e área de serviço, totalizando 119 m² de área edificada, em regular estado de conservação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Identificação Imobiliária</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Endereço Principal:</strong> Av. Atlântica, nº 2.376, Ap. 203</li>
                <li><strong className="text-white">Entrada Suplementar:</strong> Rua Domingos Ferreira, nº 25</li>
                <li><strong className="text-white">Bairro/Cidade:</strong> Copacabana, Rio de Janeiro - RJ</li>
                <li><strong className="text-white">Cartório de Registro:</strong> 5º Ofício de Registro de Imóveis (5º RGI/RJ)</li>
                <li><strong className="text-white">Matrícula nº:</strong> 109.679</li>
                <li><strong className="text-white">Inscrição Municipal:</strong> 0.649.780-4 (C.L. nº 06979-9)</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Dados da Execução Judicial</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Jurisdição:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</li>
                <li><strong className="text-white">Modalidade:</strong> Leilão Judicial Eletrônico</li>
                <li><strong className="text-white">Avaliação Judicial:</strong> R$ 1.350.000,00</li>
                <li><strong className="text-white">1ª Praça (100%):</strong> 03/08/2026 às 12:00h</li>
                <li><strong className="text-white">2ª Praça (50%):</strong> 05/08/2026 às 12:00h (Mínimo: R$ 675.000,00)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Seção 2: Contexto Institucional de Copacabana e Mercado Imobiliário */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <MapPin size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto do Mercado Imobiliário na Avenida Atlântica
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Avenida Atlântica representa o endereço mais nobre e desejado do bairro de Copacabana, na Zona Sul do Rio de Janeiro. Imóveis de frente para o mar ou situados em edifícios tradicionais na orla possuem altíssima liquidez imobiliária, valorização histórica contínua e forte demanda tanto para moradia própria quanto para locação residencial de alto padrão ou de curta temporada.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A dupla entrada do Edifício Assú (pela Avenida Atlântica nº 2.376 e pela Rua Domingos Ferreira nº 25) confere ao apartamento 203 uma conveniência funcional única. A arrematação judicial com valor de 2ª praça fixado em 50% da avaliação (R$ 675.000,00) posiciona este certame como uma oportunidade relevante no TJRJ, exigindo due diligence minuciosa sobre a estrutura condominial, sub-rogação de débitos fiscais e higidez das intimações dos autos.
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
            A atuação de um advogado especialista em leilão judicial de imóveis na Avenida Atlântica proporciona a avaliação técnica preventiva indispensável para mitigar riscos de anulação e conferir previsibilidade jurídica ao investimento em Copacabana.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Due Diligence Preventiva e Auditoria de Riscos Processuais</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Exame minucioso da cadeia processual no TJRJ, certidão de ônus reais no 5º RGI e verificação das intimações legais dos devedores e credores hipotecários para assegurar a higidez da arrematação.
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
            O suporte prestado pelo escritório Soares Martins Advogados para leilões judiciais em Copacabana e todo o Rio de Janeiro é estruturado de forma direta e transparente em 4 fases integradas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 1 • Auditoria Preventiva</div>
              <h3 className="text-white font-semibold text-base">Análise do Edital e Matrícula</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Levantamento integral dos autos no TJRJ, certidão de ônus e análise de débitos tributários/condominiais do Edifício Assú com emissão de parecer de viabilidade.
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
                Requerimento da Carta de Arrematação, cumprimento do mandado de imissão na posse e baixa dos gravames no 5º Cartório do Registro de Imóveis.
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
              Perguntas Frequentes Sobre o Leilão na Av. Atlântica 2376
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20na%20Av.%20Atl%C3%A2ntica%202376."
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
                <FileText size={20} className="text-bronze" /> Resumo do Edital — Av. Atlântica 2376
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
                <div>Avenida Atlântica nº 2.376, Ap. 203 (Entrada Suplementar: Rua Domingos Ferreira nº 25) — Copacabana, Rio de Janeiro/RJ.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Valor de Avaliação Oficial:</div>
                <div className="text-bronze font-bold">R$ 1.350.000,00</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Datas das Praças Judiciais:</div>
                <div>1ª Praça: 03/08/2026 às 12:00h (100% da avaliação = R$ 1.350.000,00)</div>
                <div>2ª Praça: 05/08/2026 às 12:00h (Até 50% da avaliação = R$ 675.000,00)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Descrição e Edifício:</div>
                <div>Edifício Assú (portaria 24h, 4 elevadores, monitoramento por câmeras, 28 unidades). Ap. 203 com 119 m², sala, 3 quartos (2 suítes), W.C. social, cozinha e área de serviço, em regular estado de conservação.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Registro e Inscrição:</div>
                <div>5º RGI/RJ (Matrícula nº 109.679) | Inscrição Municipal nº 0.649.780-4 | C.L. nº 06979-9.</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20da%20Av.%20Atl%C3%A2ntica%202376."
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

export default AtlanticaAuctionPage;
