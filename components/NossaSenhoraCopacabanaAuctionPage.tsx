import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, 
  MapPin, Calendar, DollarSign, ExternalLink, Info, FileSpreadsheet, ShieldAlert, Home
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1785171230500.png';

interface NossaSenhoraCopacabanaAuctionPageProps {
  onBack?: () => void;
}

const NossaSenhoraCopacabanaAuctionPage: React.FC<NossaSenhoraCopacabanaAuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-nossa-senhora-de-copacabana-1003/";

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
          "name": "Leilão em Copacabana - Av. N. Sra. de Copacabana 1003",
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
          "name": "Qual é o valor de avaliação e o desconto da 2ª praça do apartamento na Av. N. Sra. de Copacabana 1003?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O apartamento 1101 na Av. N. Sra. de Copacabana 1003 possui avaliação judicial de R$ 448.971,12. Na 1ª praça (27/07/2026 às 12:50h), o lance mínimo exige 100% da avaliação. Na 2ª praça (29/07/2026 às 12:50h), o lance mínimo inicia em 50% do valor avaliado, equivalente a R$ 225.000,00."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são as características do apartamento 1101 na Av. Nossa Senhora de Copacabana 1003?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trata-se de um apartamento residencial de frente com 35 m², sem vaga de garagem, situado em prédio construído em 1957 com 13 andares, portaria 24 horas, dois elevadores e câmeras de segurança. O imóvel é cadastrado no 5º RGI sob a matrícula nº 111923 e inscrição municipal IPTU nº 0.172.431-9."
          }
        },
        {
          "@type": "Question",
          "name": "Como funciona a quitação dos débitos fiscais de IPTU na arrematação judicial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos termos do artigo 130 do Código Tributário Nacional, os débitos de IPTU e taxas municipais sub-rogam-se sobre o preço da arrematação, desonerando o arrematante das dívidas tributárias anteriores, desde que devidamente requerido pela assessoria jurídica nos autos."
          }
        },
        {
          "@type": "Question",
          "name": "É possível realizar proposta parcelada segundo o Código de Processo Civil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Conforme o artigo 895 do CPC, é permitido apresentar proposta escrita nos autos do processo contendo oferta de pagamento de pelo menos 25% à vista e o saldo dividido em até 30 parcelas mensais, com garantia por hipoteca do próprio imóvel."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Qual é o valor de avaliação oficial e o lance mínimo na 2ª praça em Copacabana?",
      a: "A avaliação judicial do imóvel fixou o valor de R$ 448.971,12 (quatrocentos e quarenta e oito mil, novecentos e setenta e um reais e doze centavos). Na 1ª Praça (27/07/2026 às 12:50h), o lance mínimo é de 100% do valor avaliado. Na 2ª Praça (29/07/2026 às 12:50h), o valor inicial da 2ª praça corresponde a 50% da avaliação, ou seja, R$ 225.000,00 (duzentos e vinte e cinco mil reais)."
    },
    {
      q: "Quais são as especificações do imóvel e do edifício na Av. N. Sra. de Copacabana 1003?",
      a: "O apartamento 1101 possui 35 m² de área privativa (segundo o espelho do IPTU), posição frente e não dispõe de vaga de garagem. O edifício é residencial, construído em 1957, com 13 andares (sendo o 13º utilizado como residência do porteiro, e do 2º ao 12º composto por 12 unidades por andar), possui 2 elevadores, portaria presencial 24 horas e circuito interno de monitoramento por câmeras de segurança. Não possui área de lazer ou garagem."
    },
    {
      q: "Como é a localização na Av. Nossa Senhora de Copacabana nº 1003?",
      a: "O imóvel está localizado em um dos trechos mais valorizados e funcionais do bairro de Copacabana, próximo ao Posto 5, a poucos passos da praia, cercado por vasta rede de comércio, agências bancárias, restaurantes e facilidades de transporte público (estações de metrô Cantagalo e Siqueira Campos)."
    },
    {
      q: "Como o escritório Soares Martins Advogados atua para garantir a segurança da arrematação?",
      a: "Nossa equipe realiza auditoria jurídica preventiva de due diligence: verificação dos autos no TJRJ, certidão de ônus no 5º RGI (Matrícula 111923), confirmação da intimação do executado e credores fiduciários, conferência das dívidas do IPTU (Inscrição 0.172.431-9) e débitos condominiais, e condução atenta até a imissão na posse."
    },
    {
      q: "Como funciona a apresentação de proposta parcelada conforme o art. 895 do CPC?",
      a: "Conforme autoriza o art. 895 do CPC, o interessado pode protocolar nos autos do processo proposta formal com sinal mínimo de 25% à vista e o valor remanescente em até 30 parcelas corrigidas, com garantia de hipoteca do próprio imóvel. Nossa assessoria minuta e protocoliza a petição dentro dos prazos legais do TJRJ."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title="Leilão Judicial de Apartamento na Av. Nossa Senhora de Copacabana 1003 | Assessoria Rio de Janeiro"
        description="Assessoria jurídica em leilões judiciais para apartamento 1101 na Av. Nossa Senhora de Copacabana 1003, Copacabana. 35 m², frente, 2ª praça a R$ 225.000,00 (50%), 5º RGI, parecer processual TJRJ."
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
          <span className="text-white font-medium">Copacabana - Av. N. Sra. de Copacabana 1003</span>
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
            Leilão Judicial de Apartamento em Copacabana — Avenida Nossa Senhora de Copacabana, nº 1003
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left">
            Apartamento 1101 — Av. Nossa Senhora de Copacabana, nº 1003, Copacabana, Rio de Janeiro/RJ | Análise Preventiva de Edital e Viabilidade Processual
          </p>

          {/* Grid Layout: Photo & Auction Info Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Foto do Imóvel */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[16/10]">
                <img 
                  src={buildingImage} 
                  alt="Apartamento na Avenida Nossa Senhora de Copacabana 1003 Copacabana Rio de Janeiro" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin size={13} className="text-bronze" /> Av. N. Sra. de Copacabana 1003 • Apto 1101
                  </span>
                  <span className="bg-bronze/90 text-midnight px-3 py-1.5 rounded-lg font-bold">
                    35 m² (IPTU) • Frente • Sem Vaga
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted italic text-left">
                Imagem ilustrativa do edifício residencial na Avenida Nossa Senhora de Copacabana. Fonte dos dados: Edital de Leilão Judicial do TJRJ.
              </p>
            </div>

            {/* Box de Informações Financeiras e Praças */}
            <div className="lg:col-span-5 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-bronze/30 space-y-6 shadow-xl text-left">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">Valor de Avaliação Judicial</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">R$ 448.971,12</span>
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
                    <div className="text-base sm:text-lg font-serif font-bold text-white">R$ 448.971,12</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">27/07/2026 às 12:50h</div>
                  </div>

                  {/* 2ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> 2ª Praça
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">50% da Avaliação</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 225.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">29/07/2026 às 12:50h</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Tipologia / Unidade:</span>
                    <span className="text-white font-medium">Apartamento 1101 (Frente)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Área Útil (IPTU):</span>
                    <span className="text-white font-medium">35 m²</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Vaga de Garagem:</span>
                    <span className="text-white font-medium">Sem vaga de garagem</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Ano / Idade Prédio:</span>
                    <span className="text-white font-medium">1957 (13 andares)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Registro de Imóveis:</span>
                    <span className="text-white font-medium font-mono">5º RGI • Matrícula 111923</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Inscrição IPTU:</span>
                    <span className="text-white font-medium font-mono">0.172.431-9</span>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20jur%C3%ADdica%20do%20leil%C3%A3o%20do%20apartamento%201101%20na%20Av.%20Nossa%20Senhora%20de%20Copacabana%201003."
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
            Trata-se do Apartamento 1101, situado na Avenida Nossa Senhora de Copacabana, nº 1003, no tradicional bairro de Copacabana, Rio de Janeiro - RJ. Segundo a certidão do espelho da inscrição municipal de IPTU, a unidade residencial localiza-se na posição frente e mede 35 m² de área privativa. O imóvel não dispõe de vaga de garagem.
          </p>

          {/* Ficha Técnica Discreta */}
          <div className="bg-midnight/80 p-6 rounded-2xl border border-bronze/20 space-y-3">
            <div className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-wider">
              <Info size={16} /> Caracterização do Edifício e Infraestrutura
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
              <strong className="text-white font-medium">Características do Prédio:</strong> Edifício estritamente residencial construído em 1957, composto por 13 andares (sendo o décimo terceiro andar utilizado como residência do porteiro, e do segundo ao décimo segundo andar composto de doze apartamentos por andar). O condomínio conta com 2 elevadores, portaria presencial com serviço de porteiro 24 horas, e circuito fechado de monitoramento por câmeras de segurança instalado em todo o prédio. Não dispõe de garagem nem de área de lazer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Identificação Imobiliária</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Endereço:</strong> Av. Nossa Senhora de Copacabana, nº 1003, Apto 1101</li>
                <li><strong className="text-white">Bairro / Cidade:</strong> Copacabana, Rio de Janeiro - RJ</li>
                <li><strong className="text-white">Área Privativa:</strong> 35 m² (segundo IPTU)</li>
                <li><strong className="text-white">Posição:</strong> Frente</li>
                <li><strong className="text-white">Vaga de Garagem:</strong> Sem vaga de garagem</li>
                <li><strong className="text-white">Ano do Prédio:</strong> 1957 (13 andares)</li>
                <li><strong className="text-white">Cartório de Registro:</strong> 5º Ofício do Registro de Imóveis (5º RGI)</li>
                <li><strong className="text-white">Matrícula:</strong> 111923 (Livro nº 2)</li>
                <li><strong className="text-white">Inscrição IPTU:</strong> 0.172.431-9</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Dados da Execução Judicial</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Jurisdição:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</li>
                <li><strong className="text-white">Modalidade:</strong> Leilão Judicial Eletrônico</li>
                <li><strong className="text-white">Avaliação Oficial:</strong> R$ 448.971,12</li>
                <li><strong className="text-white">1ª Praça (100%):</strong> 27/07/2026 às 12:50h (R$ 448.971,12)</li>
                <li><strong className="text-white">2ª Praça (50%):</strong> 29/07/2026 às 12:50h (Mínimo: R$ 225.000,00)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Seção 2: Contexto de Mercado */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <MapPin size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto do Mercado Imobiliário em Copacabana
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A Avenida Nossa Senhora de Copacabana constitui o coração do comércio e da vida urbana na Zona Sul do Rio de Janeiro. Apartamentos compactos residenciais com 35 m² possuem altíssima liquidez para locação de longa temporada ou aluguel residencial permanente, devido à proximidade imediata da praia e a poucos minutos a pé das estações de metrô.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A oportunidade de arrematação em 2ª praça a partir de R$ 225.000,00 (representando 50% da avaliação judicial fixada em R$ 448.971,12) posiciona a unidade em patamar expressivamente vantajoso. A assessoria jurídica do escritório Soares Martins Advogados avalia integralmente os aspectos processuais, intimações e débitos propter rem para conferir total segurança à transação.
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
            O arrematante pode atuar no certame judicial eletrônico do TJRJ por meio de duas vertentes jurídicas reconhecidas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Primeira Forma: Nos Autos do Processo */}
            <div className="bg-midnight/60 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-bronze/30 transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-bronze/10 border border-bronze/30 text-bronze flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <h3 className="text-white font-serif font-bold text-lg sm:text-xl">Proposta Formal nos Autos do Processo</h3>
              </div>
              
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Intervenção jurídica via petição de proposta protocolada diretamente no processo judicial antes da realização da praça.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Proposta Parcelada (Art. 895 do CPC):</strong> Sinal mínimo de 25% à vista e o saldo restante parcelado em até 30 meses corrigidos, garantido por hipoteca judicial do próprio imóvel.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Apreciação pelo Magistrado:</strong> Julgada pelo juiz da causa no caso de ausência de lances superiores na modalidade à vista.</span>
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
                Lances eletrônicos oferecidos mediante cadastro e aprovação prévia de documentos no portal do leiloeiro público nomeado.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Habilitação Preventiva:</strong> Análise de documentos e liberação de acesso com antecedência perante a gestora do leilão.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Acompanhamento em Tempo Real:</strong> Ofertas no certame online nas datas aprazadas (27/07/2026 e 29/07/2026 às 12:50h).</span>
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
            A arrematação imobiliária em leilão judicial exige estrito alinhamento com as normas do Código de Processo Civil e do Código Tributário Nacional para afastar riscos de nulidade, recursos posteriores ou despesas imprevistas.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Auditoria de Due Diligence Processual e Cartorária</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Exame integral da Matrícula 111923 no 5º RGI, regularidade da citação do executado, inexistência de usufrutos e levantamento de certidões fiscais.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Análise de Viabilidade Financeira e Tributária</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Dimensionamento do custo global da operação englobando ITBI, comissão do leiloeiro, despesas cartorárias e aplicação da regra de sub-rogação do art. 130 do CTN para tributos municipais.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Peticionamento e Imissão na Posse do Imóvel</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Atuação pós-leilão para homologação do auto de arrematação, guia do ITBI, expedição da carta de arrematação, mandado de imissão na posse e cancelamento das penhoras no registro de imóveis.
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
            Acompanhamos o investidor de forma personalizada em 4 fases estruturadas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 1 • Due Diligence</div>
              <h3 className="text-white font-semibold text-base">Análise de Risco do Processo</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Estudo prévio das peças judiciais do TJRJ, certidão de ônus e expedição do relatório de viabilidade jurídica.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 2 • Habilitação ou Proposta</div>
              <h3 className="text-white font-semibold text-base">Estratégia do Lance Judicial</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Cadastramento no site oficial ou elaboração de proposta parcelada em até 30 parcelas com respaldo no art. 895 do CPC.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 3 • Arrematação</div>
              <h3 className="text-white font-semibold text-base">Participação e Homologação</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Suporte durante a praça eletrônica e fiscalização da formalização do auto de arrematação assinado pelo magistrado.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 4 • Posse e Registro</div>
              <h3 className="text-white font-semibold text-base">Carta de Arrematação e Mandado de Posse</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Requerimento judicial da carta de arrematação, guia de ITBI, baixa de penhoras e imissão efetiva na posse do imóvel.
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
              Perguntas Frequentes Sobre o Leilão na Av. N. Sra. de Copacabana 1003
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%201101%20na%20Av.%20Nossa%20Senhora%20de%20Copacabana%201003."
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
                <FileText size={20} className="text-bronze" /> Resumo do Edital — Av. N. Sra. de Copacabana 1003
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
                <div>Avenida Nossa Senhora de Copacabana nº 1003, Apto 1101 — Copacabana, Rio de Janeiro/RJ.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Valor de Avaliação Oficial:</div>
                <div className="text-bronze font-bold">R$ 448.971,12</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Datas das Praças Judiciais:</div>
                <div>1ª Praça: 27/07/2026 às 12:50h (100% da avaliação = R$ 448.971,12)</div>
                <div>2ª Praça: 29/07/2026 às 12:50h (50% da avaliação = R$ 225.000,00)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Descrição e Tipologia:</div>
                <div>Apartamento 1101 com 35 m² (IPTU), frente, sem vaga de garagem. Prédio residencial construído em 1957, com 13 andares, 2 elevadores, portaria presencial 24 horas e circuito de monitoramento por câmeras de segurança em todo o edifício.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Registro e Inscrição Municipal:</div>
                <div>5º RGI — Matrícula nº 111923 (Livro nº 2) | Inscrição IPTU nº 0.172.431-9.</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20do%20apartamento%201101%20na%20Av.%20Nossa%20Senhora%20de%20Copacabana%201003."
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

export default NossaSenhoraCopacabanaAuctionPage;
