import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, 
  MapPin, Calendar, DollarSign, ExternalLink, Info, FileSpreadsheet, ShieldAlert, Home
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1785169922175.png';

interface PradoJuniorAuctionPageProps {
  onBack?: () => void;
}

const PradoJuniorAuctionPage: React.FC<PradoJuniorAuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-prado-junior-298/";

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
          "name": "Leilão em Copacabana - Av. Prado Júnior 298",
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
          "name": "Qual é o valor de avaliação e o desconto da 2ª praça do apartamento na Av. Prado Júnior 298 em Copacabana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O apartamento 1003 na Av. Prado Júnior 298 possui avaliação judicial de R$ 520.000,00. Na 1ª praça (17/08/2026 às 12:30h), o lance mínimo exige 100% da avaliação. Na 2ª praça (19/08/2026 às 12:30h), o lance mínimo inicia em 60% do valor avaliado, equivalente a R$ 312.000,00."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são as características do apartamento 1003 na Av. Prado Júnior 298?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trata-se de um apartamento residencial com 42 m², posição fundos, sem vaga de garagem, localizado em prédio construído em 1957 com 12 andares, dois elevadores, circuito interno de câmeras e portaria. Fica cadastrado no 5º RGI sob a matrícula nº 119.755 (antiga 56.905) e inscrição municipal nº 0.691.500-3."
          }
        },
        {
          "@type": "Question",
          "name": "Como são quitados os débitos de IPTU e condomínio na arrematação judicial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conforme o art. 130 do Código Tributário Nacional, débitos tributários de IPTU sub-rogam-se sobre o valor depositado da arrematação. As dívidas condominiais propter rem também seguem as disposições fixadas no edital e jurisprudência do TJRJ, devendo ser auditadas preventivamente pela assessoria jurídica."
          }
        },
        {
          "@type": "Question",
          "name": "É possível realizar proposta de parcelamento judicial conforme o Código de Processo Civil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Nos termos do art. 895 do CPC, o interessado pode protocolar nos autos proposta de pagamento com sinal de no mínimo 25% à vista e o saldo restante parcelado em até 30 meses, garantido por hipoteca judicial do próprio imóvel."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Qual é o valor de avaliação oficial e o lance mínimo na 2ª praça em Copacabana?",
      a: "A avaliação judicial do imóvel fixou o valor de R$ 520.000,00 (quinhentos e vinte mil reais). Na 1ª Praça (17/08/2026 às 12:30h), o lance mínimo aceito é de 100% do valor avaliado. Na 2ª Praça (19/08/2026 às 12:30h), o lance mínimo inicia-se em 60% da avaliação, ou seja, R$ 312.000,00 (trezentos e doze mil reais)."
    },
    {
      q: "Quais são as especificações do imóvel e da infraestrutura do edifício?",
      a: "O apartamento 1003 possui 42 m² de área privativa (segundo o espelho do IPTU), posição fundos e não possui vaga de garagem. O edifício é estritamente residencial, construído em 1957, composto por 12 andares (sendo o 1º andar com 2 unidades e os demais com 4 por andar), dispõe de 2 elevadores, sistema de monitoramento por câmeras e portaria nos dias de semana (8h às 19:50h) e finais de semana (10:30h às 19:50h)."
    },
    {
      q: "Como é a localização da Av. Prado Júnior no bairro de Copacabana?",
      a: "A Av. Prado Júnior está localizada na tradicional região do Posto 2 em Copacabana, a curtíssima caminhada da orla marítima e da Estação de Metrô Cardeal Arcoverde. A via conta com facilidade de locomoção, farta oferta de supermercados, farmácias, serviços e alta procura para locação residencial e de temporada."
    },
    {
      q: "Como o escritório Soares Martins Advogados garante a segurança jurídica da arrematação?",
      a: "Nossa equipe realiza auditoria completa de due diligence: exame dos autos no TJRJ, certidão de ônus reais no 5º RGI, verificação da intimação dos executados e credores, análise de débitos de IPTU (Inscrição 0.691.500-3) e taxa condominial, elaboração de petições e atuação técnica até a expedição do mandado de imissão na posse."
    },
    {
      q: "É viável apresentar proposta parcelada segundo o art. 895 do CPC?",
      a: "Sim. O art. 895 do CPC autoriza propostas para pagamento em até 30 parcelas mensais, mediante entrada mínima de 25% à vista. Apresentamos a petição formalmente no processo antes do encerramento do certame para apreciação do juiz competente."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title="Leilão Judicial de Apartamento na Av. Prado Júnior, Copacabana | Assessoria Leilões Judiciais Rio de Janeiro"
        description="Assessoria jurídica em leilões judiciais para apartamento 1003 na Av. Prado Júnior 298, Copacabana. 42 m², 2ª praça a R$ 312.000,00 (60%), 5º RGI, parecer processual no Rio de Janeiro."
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
          <span className="text-white font-medium">Copacabana - Av. Prado Júnior 298</span>
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
            Leilão Judicial de Apartamento em Copacabana — Avenida Prado Júnior, nº 298
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left">
            Apartamento 1003 — Av. Prado Júnior, nº 298, Copacabana, Rio de Janeiro/RJ | Análise Preventiva de Edital e Viabilidade Processual
          </p>

          {/* Grid Layout: Photo & Auction Info Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Foto do Imóvel */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[16/10]">
                <img 
                  src={buildingImage} 
                  alt="Apartamento na Avenida Prado Junior 298 em Copacabana Rio de Janeiro" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin size={13} className="text-bronze" /> Av. Prado Júnior 298 • Apto 1003
                  </span>
                  <span className="bg-bronze/90 text-midnight px-3 py-1.5 rounded-lg font-bold">
                    42 m² (IPTU) • Fundos • Sem Vaga
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted italic text-left">
                Imagem ilustrativa do logradouro na Avenida Prado Júnior, Copacabana. Fonte dos dados: Edital de Leilão Judicial do TJRJ.
              </p>
            </div>

            {/* Box de Informações Financeiras e Praças */}
            <div className="lg:col-span-5 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-bronze/30 space-y-6 shadow-xl text-left">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">Valor de Avaliação Judicial</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">R$ 520.000,00</span>
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
                    <div className="text-base sm:text-lg font-serif font-bold text-white">R$ 520.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">17/08/2026 às 12:30h</div>
                  </div>

                  {/* 2ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> 2ª Praça
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">60% da Avaliação</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 312.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">19/08/2026 às 12:30h</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Tipologia / Unidade:</span>
                    <span className="text-white font-medium">Apartamento 1003 (Fundos)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Área Útil (IPTU):</span>
                    <span className="text-white font-medium">42 m²</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Vaga de Garagem:</span>
                    <span className="text-white font-medium">Sem vaga de garagem</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Ano / Idade Prédio:</span>
                    <span className="text-white font-medium">1957 (12 andares)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Registro de Imóveis:</span>
                    <span className="text-white font-medium font-mono">5º RGI • Matrícula 119.755</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Inscrição IPTU:</span>
                    <span className="text-white font-medium font-mono">0.691.500-3</span>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20jur%C3%ADdica%20do%20leil%C3%A3o%20do%20apartamento%201003%20na%20Av.%20Prado%20J%C3%BAnior%20298%20em%20Copacabana."
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
            Trata-se do Apartamento 1003, situado na Avenida Prado Júnior, nº 298, no bairro de Copacabana, Rio de Janeiro - RJ. Segundo o espelho da inscrição municipal de IPTU, a unidade residencial mede 42 m² de área privativa e possui localização de fundos, proporcionando maior silêncio no cotidiano de uma das principais vias do bairro. O imóvel não conta com vaga de garagem.
          </p>

          {/* Ficha Técnica Discreta */}
          <div className="bg-midnight/80 p-6 rounded-2xl border border-bronze/20 space-y-3">
            <div className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-wider">
              <Info size={16} /> Caracterização do Edifício e Serviços
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
              <strong className="text-white font-medium">Características do Prédio:</strong> Edifício estritamente residencial construído em 1957, composto por 12 andares (sendo o primeiro andar com 2 apartamentos e, a partir do segundo andar, 4 apartamentos por pavimento). O condomínio dispõe de 2 elevadores, sistema de monitoramento por câmeras de segurança instaladas em todos os pavimentos e portaria presencial (dias úteis das 08h às 19:50h; sábados e domingos das 10:30h às 19:50h). Não possui área de lazer ou garagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Identificação Imobiliária</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Endereço:</strong> Av. Prado Júnior, nº 298, Apto 1003</li>
                <li><strong className="text-white">Bairro / Cidade:</strong> Copacabana, Rio de Janeiro - RJ</li>
                <li><strong className="text-white">Área Privativa:</strong> 42 m² (segundo IPTU)</li>
                <li><strong className="text-white">Posição:</strong> Fundos</li>
                <li><strong className="text-white">Vaga de Garagem:</strong> Sem vaga de garagem</li>
                <li><strong className="text-white">Ano do Prédio:</strong> 1957 (12 andares)</li>
                <li><strong className="text-white">Cartório de Registro:</strong> 5º Ofício do Registro de Imóveis (5º RGI)</li>
                <li><strong className="text-white">Matrícula:</strong> 56.905 (atual nº 119.755, Livro 2, S/5, Fls. 158)</li>
                <li><strong className="text-white">Inscrição IPTU:</strong> 0.691.500-3</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Dados da Execução Judicial</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Jurisdição:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</li>
                <li><strong className="text-white">Modalidade:</strong> Leilão Judicial Eletrônico</li>
                <li><strong className="text-white">Avaliação Oficial:</strong> R$ 520.000,00</li>
                <li><strong className="text-white">1ª Praça (100%):</strong> 17/08/2026 às 12:30h (R$ 520.000,00)</li>
                <li><strong className="text-white">2ª Praça (60%):</strong> 19/08/2026 às 12:30h (Mínimo: R$ 312.000,00)</li>
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
            Copacabana permanece como um dos mercados imobiliários mais aquecidos e líquidos do Rio de Janeiro. Imóveis de 1 quarto/conjugados com cerca de 42 m² na região do Posto 2 possuem procura constante tanto para moradia própria quanto para renda de aluguel por temporada ou contrato residencial de longo prazo.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A oportunidade de arrematação em 2ª praça a partir de R$ 312.000,00 (correspondente a 60% da avaliação oficial de R$ 520.000,00) representa um desconto atraente perante o valor de metro quadrado praticado na Zona Sul. A assessoria jurídica preventiva do escritório Soares Martins Advogados assegura que todo o histórico processual, débitos fiscais e de condomínio sejam perfeitamente equacionados antes de apresentar qualquer proposta.
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
            Existem duas vias reconhecidas para arrematação de imóveis em leilão judicial no TJRJ. Nossa assessoria jurídica orienta a melhor escolha de acordo com a estratégia do investidor:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Primeira Forma: Nos Autos do Processo */}
            <div className="bg-midnight/60 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-bronze/30 transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-bronze/10 border border-bronze/30 text-bronze flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <h3 className="text-white font-serif font-bold text-lg sm:text-xl">Proposta Formal nos Autos do Processo</h3>
              </div>
              
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Modalidade na qual o advogado especialista protocoliza petição de proposta diretamente no processo judicial de execução antes da praça.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Pagamento Parcelado (Art. 895 do CPC):</strong> Permite ofertar sinal mínimo de 25% à vista e o saldo restante em até 30 parcelas mensais corrigidas com garantia hipotecária.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Análise pelo Juiz da Causa:</strong> Submetida diretamente ao julgamento do magistrado responsável em caso de ausência de lances à vista superiores.</span>
                </div>
              </div>
            </div>

            {/* Segunda Forma: No Site do Leiloeiro */}
            <div className="bg-midnight/60 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-bronze/30 transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-bronze/10 border border-bronze/30 text-bronze flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <h3 className="text-white font-serif font-bold text-lg sm:text-xl">Lances no Portal Eletrônico do Leiloeiro</h3>
              </div>

              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Participação no certame eletrônico público por meio de cadastro prévio e habilitação no site do leiloeiro oficial nomeado pelo TJRJ.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Habilitação Preventiva:</strong> Cadastro de documentos pessoais e verificação de capacidade jurídica perante o gestor do leilão.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-bronze shrink-0 mt-0.5" />
                  <span><strong>Disputa em Tempo Real:</strong> Oferta de lances online nas datas e horários estipulados no edital (17/08/2026 e 19/08/2026 às 12:30h).</span>
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
            A aquisição de imóvel em leilão judicial requer estrita observância das normas do Código de Processo Civil e do Código Tributário Nacional para afastar riscos de nulidade, recursos de terceiros ou custos não previstos.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Auditoria Completa do Processo e RGI</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Verificação da certidão de ônus reais no 5º RGI (Matrícula 119.755), citações dos executados, eventual existência de coproprietários ou usufrutuários e certidões fiscais.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Cálculo de Viabilidade Financeira e Tributária</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Apurar o teto máximo da arrematação somando ITBI, comissão do leiloeiro, custas cartorárias e eventuais pendências de taxas sob a regra de sub-rogação do art. 130 do CTN.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Atuação Célere para Expedição da Carta de Arrematação</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Requisição de assinatura do auto, guia de ITBI, expedição de mandado de imissão na posse e cancelamento formal das penhoras no registro imobiliário.
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
            Nosso escritório conduz o arrematante com total transparência ao longo de 4 etapas estruturadas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 1 • Due Diligence</div>
              <h3 className="text-white font-semibold text-base">Auditoria de Edital e Processo</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Análise minuciosa dos autos no TJRJ, certidões imobiliárias e emissão de relatório parecer de risco antes de qualquer lance.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 2 • Estratégia de Lance</div>
              <h3 className="text-white font-semibold text-base">Habilitação ou Proposta</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Cadastramento no leiloeiro oficial ou elaboração de petição de proposta parcelada em até 30 meses (Art. 895 do CPC).
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 3 • Arrematação</div>
              <h3 className="text-white font-semibold text-base">Certame e Auto de Arrematação</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Acompanhamento em tempo real durante o leilão e fiscalização da lavratura e homologação do auto pelo magistrado.
              </p>
            </div>

            <div className="p-6 bg-midnight/60 rounded-2xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-bronze uppercase tracking-widest">Fase 4 • Posse e Baixa</div>
              <h3 className="text-white font-semibold text-base">Carta de Arrematação e Posse</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Atuação judicial para expedição do mandado de imissão na posse, pagamento de ITBI e registro definitivo no 5º RGI.
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
              Perguntas Frequentes Sobre o Leilão na Av. Prado Júnior 298
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
            O escritório Soares Martins Advogados atua exclusivamente na prestação de serviços de consultoria e representação jurídica em leilões judiciais. A divulgação de dados de editais do TJRJ possui caráter informativo e técnico, sem constituir intermediação imobiliária comercial ou promessa de rentabilidade. Cada arrematação exige avaliação individualizada dos autos judiciais.
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20na%20Av.%20Prado%20J%C3%BAnior%20298%20em%20Copacabana."
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
                <FileText size={20} className="text-bronze" /> Resumo do Edital — Av. Prado Júnior 298
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
                <div>Avenida Prado Júnior nº 298, Apto 1003 — Copacabana, Rio de Janeiro/RJ.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Valor de Avaliação Oficial:</div>
                <div className="text-bronze font-bold">R$ 520.000,00</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Datas das Praças Judiciais:</div>
                <div>1ª Praça: 17/08/2026 às 12:30h (100% da avaliação = R$ 520.000,00)</div>
                <div>2ª Praça: 19/08/2026 às 12:30h (60% da avaliação = R$ 312.000,00)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Descrição e Tipologia:</div>
                <div>Apartamento 1003 com 42 m² (IPTU), fundos, sem vaga de garagem. Prédio residencial construído em 1957, com 12 andares, 2 elevadores, portaria presencial com horários fixados e sistema de monitoramento por câmeras.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Registro e Inscrição Municipal:</div>
                <div>5º RGI — Matrícula nº 56.905 (atual 119.755, Livro 2, S/5, Fls. 158) | Inscrição IPTU nº 0.691.500-3.</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20do%20apartamento%201003%20na%20Av.%20Prado%20J%C3%BAnior%20298."
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

export default PradoJuniorAuctionPage;
