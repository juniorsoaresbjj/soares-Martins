import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, 
  MapPin, Calendar, DollarSign, ExternalLink, Info, FileSpreadsheet, ShieldAlert
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1784923050786.png';

interface CopacabanaAuctionPageProps {
  onBack?: () => void;
}

const CopacabanaAuctionPage: React.FC<CopacabanaAuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-ministro-viveiros-de-castro-32/";

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
          "name": "Leilão em Copacabana - Rua M. V. Castro 32",
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
          "name": "Qual é a avaliação oficial do imóvel no leilão judicial da Rua M. V. Castro 32 em Copacabana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O apartamento possui avaliação oficial no processo de R$ 480.000,00. Na 1ª praça (24/08/2026), o lance mínimo corresponde a 100% da avaliação. Na 2ª praça (03/09/2026), o lance mínimo é fixado em 50% do valor avaliado (R$ 240.000,00), nos termos autorizados no edital e pelo CPC."
          }
        },
        {
          "@type": "Question",
          "name": "O arrematante deste apartamento em Copacabana assume débitos anteriores de IPTU e condomínio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os débitos de IPTU e taxas públicas sub-rogam-se sobre o valor depositado na arrematação (art. 130 do CTN). Quanto às cotas condominiais pendentes, a responsabilidade é aferida no exame minucioso das regras expressas do edital de leilão e das decisões proferidas pelo TJRJ."
          }
        },
        {
          "@type": "Question",
          "name": "Como funciona o pedido de imissão na posse para imóveis arrematados em Copacabana/RJ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Após a expedição e registro da carta de arrematação no 5º Cartório de Registro de Imóveis, a petição de imissão na posse é protocolada diretamente nos autos da execução, requerendo-se o mandado judicial para desocupação e entrega das chaves ao arrematante."
          }
        },
        {
          "@type": "Question",
          "name": "É possível solicitar proposta de aquisição parcelada para este leilão em Copacabana?",
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
      q: "Qual é a avaliação oficial do imóvel no leilão judicial da Rua M. V. Castro 32 em Copacabana?",
      a: "O apartamento possui avaliação judicial fixada em R$ 480.000,00. Na 1ª Praça (24/08/2026), o lance mínimo é correspondente a 100% da avaliação. Na 2ª Praça (03/09/2026), caso não haja arremate na primeira, admite-se lance mínimo com até 50% de desconto legal (R$ 240.000,00), observadas as diretrizes fixadas pelo magistrado e pelo edital publicado."
    },
    {
      q: "O arrematante deste apartamento em Copacabana assume débitos anteriores de IPTU e condomínio?",
      a: "Para débitos tributários de IPTU e taxa de incêndio, aplica-se a regra do art. 130 do CTN, ocorrendo a sub-rogação sobre o preço arrecadado. Em relação às cotas de condomínio em atraso, a definição de responsabilidade exige parecer técnico prévio para confrontar a redação exata do edital com a jurisprudência sumulada dos Tribunais."
    },
    {
      q: "Como funciona a imissão judicial na posse e entrega das chaves no Rio de Janeiro?",
      a: "Concluída a arrematação e lavrado o auto, requer-se ao juízo a expedição da Carta de Arrematação e do Mandado de Imissão na Posse. Com o registro junto ao Cartório imobiliário competente (5º RGI/RJ), é expedida ordem de desocupação do bem, acompanhada pela assessoria jurídica do escritório até a efetiva imissão."
    },
    {
      q: "É possível protocolar proposta de pagamento parcelado neste leilão judicial?",
      a: "Sim. O art. 895 do Código de Processo Civil faculta aos interessados a apresentação de proposta para pagamento parcelado de imóvel em leilão judicial (sinal de ao menos 25% à vista e saldo em até 30 parcelas mensais ajustadas), mediante formalização tempestiva antes do encerramento da praça."
    },
    {
      q: "Como solicitar a auditoria jurídica completa do edital deste leilão em Copacabana?",
      a: "Nossa equipe jurídica realiza o levantamento integral dos autos processuais, verificação da certidão de ônus reais, cálculo detalhado de custos acessórios e elaboração de parecer fundamentado de viabilidade jurídica antes do dia de abertura do certame."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title="Leilão Judicial de Apartamento em Copacabana, Rua Ministro Viveiros de Castro 32 | Assessoria Leilões Judiciais Imóveis Rio de Janeiro"
        description="Assessoria jurídica em leilões judiciais de imóveis, com análise de editais, riscos, oportunidades, acompanhamento completo e atendimento no Rio de Janeiro."
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
          <span className="text-white font-medium">Copacabana - Rua M. V. Castro 32</span>
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
            Leilão Judicial de Apartamento em Copacabana
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left">
            Rua Ministro Viveiros de Castro, nº 32 — Copacabana, Rio de Janeiro/RJ | Análise Preventiva de Edital e Viabilidade Processual
          </p>

          {/* Grid Layout: Photo & Auction Info Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Photo of Property */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group bg-midnight/80 h-full min-h-[300px] flex flex-col">
                <img 
                  src={buildingImage} 
                  alt="Edifício na Rua Ministro Viveiros de Castro 32 - Copacabana, Rio de Janeiro" 
                  className="w-full h-full object-cover min-h-[280px] sm:min-h-[340px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-midnight/90 backdrop-blur-md border-t border-white/10">
                  <p className="text-xs text-white/90 font-medium flex items-center gap-2">
                    <MapPin size={14} className="text-bronze shrink-0" />
                    Rua Ministro Viveiros de Castro, 32 — Copacabana, Rio de Janeiro - RJ
                  </p>
                  <p className="text-[10px] text-text-muted mt-1 uppercase tracking-wider font-mono">
                    Imagem meramente ilustrativa / Fachada do Edifício
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Quadro Visual com Praças e Valores */}
            <div className="lg:col-span-6 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between text-left space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">Valor de Avaliação Judicial</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">R$ 480.000,00</span>
                </div>

                {/* Praças Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  {/* 1ª Praça */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-left">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-bronze mb-1 flex items-center gap-1.5">
                      <Calendar size={12} /> 1ª Praça Judicial
                    </div>
                    <div className="text-sm font-semibold text-white mb-2">100% da Avaliação</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-lg font-serif font-bold text-white">R$ 480.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">24/08/2026 às 14:00h</div>
                  </div>

                  {/* 2ª Praça */}
                  <div className="bg-white/5 rounded-xl p-4 border border-bronze/30 text-left relative overflow-hidden">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                      <Calendar size={12} /> 2ª Praça Judicial
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">Até 50% de Desconto</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-lg font-serif font-bold text-emerald-400">R$ 240.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">03/09/2026 às 14:00h</div>
                  </div>
                </div>

                {/* Ações / Didactic Summary Link */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowEditalModal(true)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl border border-white/10 transition-all text-center"
                  >
                    <FileText size={16} className="text-bronze" />
                    Consultar Resumo do Edital e Documentos
                  </button>

                  <a 
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20em%20Copacabana."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white hover:text-midnight text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl transition-all text-center shadow-lg"
                  >
                    <PhoneCall size={16} />
                    Solicitar Parecer de Viabilidade via WhatsApp
                  </a>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-3 bg-midnight-light/50 rounded-xl border border-white/5 text-[11px] text-text-muted leading-relaxed flex items-start gap-2">
                <Info size={14} className="text-bronze shrink-0 mt-0.5" />
                <span>
                  Divulgação puramente informativa e técnica para fins de análise jurídica de editais de leilões no Rio de Janeiro, em estrita conformidade com as normas da OAB.
                </span>
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
            Trata-se de apartamento residencial situado na Rua Ministro Viveiros de Castro, nº 32, no tradicional bairro de Copacabana, Zona Sul do Rio de Janeiro. A localização é privilegiada pela proximidade com a Praia de Copacabana (Posto 2), fácil acesso à Estação Cardeal Arcoverde do Metrô e vasta infraestrutura de comércio, serviços, gastronomia e transporte público.
          </p>

          {/* Ficha Técnica Discreta */}
          <div className="bg-midnight/80 p-6 rounded-2xl border border-bronze/20 space-y-3">
            <div className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-wider">
              <Info size={16} /> Ficha Técnica do Edifício
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
              <strong className="text-white font-medium">Prédio Residencial – Idade: 1952.</strong> Prédio com doze andares, sendo oito apartamentos por andar e 11º e 12º andares com coberturas; prédio sem garagem; sem área de lazer; com três elevadores; serviço de porteiros 24horas; interfone e sistema de monitoramento por câmeras de segurança em todo prédio, com duas lojas na área externa do prédio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Identificação Imobiliária</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Localização:</strong> Rua M. V. Castro, 32 — Copacabana, RJ</li>
                <li><strong className="text-white">Cartório de Origem:</strong> 5º Cartório de Registro de Imóveis do RJ</li>
                <li><strong className="text-white">Tipologia:</strong> Unidade Residencial em Edifício Multifamiliar</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Dados da Execução Judicial</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Jurisdição:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</li>
                <li><strong className="text-white">Modalidade:</strong> Leilão Judicial Eletrônico</li>
                <li><strong className="text-white">Avaliação Judicial:</strong> R$ 480.000,00</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Seção 2: Contexto Institucional de Copacabana e Mercado Imobiliário */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <MapPin size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto do Mercado Imobiliário em Copacabana
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O bairro de Copacabana, situado na Zona Sul do Rio de Janeiro, destaca-se pela elevadíssima liquidez e procura constante por unidades residenciais. A combinação entre infraestrutura urbana consolidada, proximidade imediata da praia e conexão eficiente ao metrô Cardeal Arcoverde sustenta um mercado aquecido tanto para moradia própria quanto para locação anual ou de temporada.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Nesse cenário, a arrematação em leilão judicial de imóveis no Rio de Janeiro surge como uma oportunidade técnica de aquisição com valor atraente em relação ao mercado tradicional. Contudo, o aproveitamento seguro dessa oportunidade pressupõe uma assessoria jurídica em leilões judiciais capaz de realizar a auditoria prévia do edital do TJRJ, certidões de ônus no 5º RGI e verificação das regras de desonerabilidade tributária e condominial.
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
              Por Que a Assessoria Jurídica É Importante
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A atuação de um advogado especialista em leilão judicial de imóveis no Rio de Janeiro proporciona a avaliação técnica preventiva indispensável para mitigar riscos de anulação e conferir previsibilidade jurídica ao investimento em Copacabana.
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
                Levantamento integral dos autos no TJRJ, certidão de ônus e análise de débitos tributários/condominiais com emissão de parecer de viabilidade.
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
              Perguntas Frequentes Sobre o Leilão em Copacabana
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20em%20Copacabana."
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
                <FileText size={20} className="text-bronze" /> Resumo do Edital — Copacabana
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
                <div>Rua Ministro Viveiros de Castro, nº 32, Ap. Residencial — Copacabana, Rio de Janeiro/RJ.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Valor de Avaliação Oficial:</div>
                <div className="text-bronze font-bold">R$ 480.000,00</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Datas das Praças Judiciais:</div>
                <div>1ª Praça: 24/08/2026 (100% da avaliação = R$ 480.000,00)</div>
                <div>2ª Praça: 03/09/2026 (Até 50% da avaliação = R$ 240.000,00)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Observações do Processo de Origem:</div>
                <div>Processo em trâmite no TJRJ. A arrematação exige auditoria do edital e verificação de pendências tributárias ou condominiais.</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20de%20Copacabana."
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

export default CopacabanaAuctionPage;
