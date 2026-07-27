import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, 
  MapPin, Calendar, DollarSign, ExternalLink, Info, FileSpreadsheet, ShieldAlert, Home
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1785173891217.png';

interface SilveiraMartins503AuctionPageProps {
  onBack?: () => void;
}

const SilveiraMartins503AuctionPage: React.FC<SilveiraMartins503AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140-apto-503/";

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
          "name": "Leilão no Catete - Rua Silveira Martins 140 Apto 503",
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
          "name": "Qual é o valor de avaliação e o desconto da 2ª praça do apartamento 503 na Rua Silveira Martins 140?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O apartamento 503 na Rua Silveira Martins 140 possui avaliação judicial de R$ 334.118,04. Na 1ª praça (27/07/2026 às 12:50h), o lance mínimo exige 100% da avaliação. Na 2ª praça (29/07/2026 às 12:50h), o lance mínimo inicia em 50% do valor avaliado, equivalente a R$ 168.000,00."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são as características do apartamento 503 na Rua Silveira Martins 140 no Catete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trata-se de uma unidade residencial com 36 m² de área privativa, sem vaga de garagem, localizada em prédio residencial de 8 pavimentos contendo 7 apartamentos por andar e portaria presencial antiga. O imóvel está registrado no 9º RGI sob a matrícula nº 486819, livro 3, fls. 1."
          }
        },
        {
          "@type": "Question",
          "name": "Como são quitados os débitos tributários de IPTU na arrematação judicial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Com amparo no artigo 130 do Código Tributário Nacional (CTN), os débitos municipais sub-rogam-se sobre o valor depositado da arrematação, recebendo o arrematante o bem livre desses encargos fiscais prévios mediante pedido nos autos."
          }
        },
        {
          "@type": "Question",
          "name": "É possível realizar proposta de parcelamento judicial nos termos do Código de Processo Civil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Nos termos do artigo 895 do CPC, o interessado pode protocolar proposta nos autos com sinal de no mínimo 25% à vista e o saldo restante financiado em até 30 parcelas mensais, garantido por hipoteca judicial do próprio imóvel."
          }
        }
      ]
    }
  ];

  const faqs = [
    {
      q: "Qual é o valor de avaliação oficial e o lance mínimo na 2ª praça do Apto 503?",
      a: "A avaliação judicial fixou o valor oficial do imóvel em R$ 334.118,04 (trezentos e trinta e quatro mil, cento e dezoito reais e quatro centavos). Na 1ª Praça (27/07/2026 às 12:50h), exige-se 100% da avaliação. Na 2ª Praça (29/07/2026 às 12:50h), o valor inicial da praça é de 50% do valor de avaliação, totalizando R$ 168.000,00 (cento e sessenta e oito mil reais)."
    },
    {
      q: "Quais são as especificações do imóvel e da estrutura do edifício na Rua Silveira Martins 140?",
      a: "O apartamento 503 possui 36 m² de área privativa e não dispõe de vaga de garagem. O edifício é residencial, edificado em 8 pavimentos, composto por 7 apartamentos por andar, dispondo de portaria antiga (não 24 horas). Fica registrado no 9º Ofício do Registro de Imóveis (9º RGI) sob a matrícula nº 486819, livro 3, fls. 1."
    },
    {
      q: "Como é a localização da Rua Silveira Martins no bairro do Catete?",
      a: "A Rua Silveira Martins é uma das vias mais valorizadas e tradicionais do Catete, ligando diretamente o bairro ao Aterro do Flamengo. Está a passos do Museu da República e do Metrô Catete, rodeada de farta infraestrutura de transporte, bancos, farmácias e supermercados."
    },
    {
      q: "Como o escritório Soares Martins Advogados garante a segurança jurídica do investimento?",
      a: "Nossa equipe realiza rigorosa due diligence imobiliária: auditoria integral do processo no TJRJ, certidão de ônus reais no 9º RGI, verificação de intimações das partes, apuração de potenciais débitos municipais e condominiais, elaboração de peças jurídicas e acompanhamento contínuo até a efetiva imissão na posse."
    },
    {
      q: "Como funciona a apresentação de proposta parcelada segundo o art. 895 do CPC?",
      a: "O art. 895 do CPC autoriza o arrematante a apresentar proposta formal nos autos do processo com entrada mínima de 25% à vista e o saldo restante em até 30 parcelas mensais corrigidas. Nossa equipe redige e protocoliza a petição com antecedência para apreciação do juiz competente da causa."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-midnight text-white text-left font-sans">
      <SEO 
        title="Leilão Judicial de Apartamento na Rua Silveira Martins 140, Apto 503, Catete | Assessoria Rio de Janeiro"
        description="Assessoria jurídica em leilões judiciais para apartamento 503 na Rua Silveira Martins 140, Catete. 36 m², 2ª praça a R$ 168.000,00 (50%), 9º RGI, parecer processual no Rio de Janeiro."
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
          <span className="text-white font-medium">Catete - Rua Silveira Martins 140 (Apto 503)</span>
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
            Leilão Judicial de Apartamento no Catete — Rua Silveira Martins, nº 140 (Apto 503)
          </h1>

          <p className="text-bronze text-base sm:text-lg font-serif mb-8 text-left">
            Apartamento 503 — Rua Silveira Martins, nº 140, Catete, Rio de Janeiro/RJ | Análise Preventiva de Edital e Viabilidade Processual
          </p>

          {/* Grid Layout: Photo & Auction Info Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Foto do Imóvel */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[16/10]">
                <img 
                  src={buildingImage} 
                  alt="Apartamento 503 na Rua Silveira Martins 140 no Catete Rio de Janeiro" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span className="flex items-center gap-1.5 bg-midnight/80 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin size={13} className="text-bronze" /> Rua Silveira Martins 140 • Apto 503
                  </span>
                  <span className="bg-bronze/90 text-midnight px-3 py-1.5 rounded-lg font-bold">
                    36 m² • Catete • Sem Vaga
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted italic text-left">
                Imagem ilustrativa do edifício residencial na Rua Silveira Martins, Catete. Fonte dos dados: Edital de Leilão Judicial do TJRJ.
              </p>
            </div>

            {/* Box de Informações Financeiras e Praças */}
            <div className="lg:col-span-5 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-bronze/30 space-y-6 shadow-xl text-left">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">Valor de Avaliação Judicial</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">R$ 334.118,04</span>
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
                    <div className="text-base sm:text-lg font-serif font-bold text-white">R$ 334.118,04</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">27/07/2026 às 12:50h</div>
                  </div>

                  {/* 2ª Praça */}
                  <div className="bg-midnight-light/50 p-4 rounded-xl border border-emerald-500/30">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                      <Calendar size={12} /> 2ª Praça
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">50% da Avaliação</div>
                    <div className="text-xs text-text-muted mb-1">Lance Mínimo:</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-emerald-400">R$ 168.000,00</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">29/07/2026 às 12:50h</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Tipologia / Unidade:</span>
                    <span className="text-white font-medium">Apartamento 503</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Área Útil Privativa:</span>
                    <span className="text-white font-medium">36 m²</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Vaga de Garagem:</span>
                    <span className="text-white font-medium">Sem vaga de garagem</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Pavimentos do Prédio:</span>
                    <span className="text-white font-medium">8 andares (7 aptos/andar)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Registro de Imóveis:</span>
                    <span className="text-white font-medium font-mono">9º RGI • Matrícula 486819</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Inscrição IPTU:</span>
                    <span className="text-white font-medium font-mono">Desconhecida / Em apuração</span>
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20jur%C3%ADdica%20do%20leil%C3%A3o%20do%20apartamento%20503%20na%20Rua%20Silveira%20Martins%20140%20no%20Catete."
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
            Trata-se do Apartamento 503, localizado na Rua Silveira Martins, nº 140, no tradicional bairro do Catete, Rio de Janeiro - RJ. A unidade residencial conta com 36 m² de área privativa, sem vaga de garagem, inserida em ponto privilegiado próximo ao Parque do Flamengo, Estação do Metrô Catete e Palácio da República.
          </p>

          {/* Ficha Técnica Discreta */}
          <div className="bg-midnight/80 p-6 rounded-2xl border border-bronze/20 space-y-3">
            <div className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-wider">
              <Info size={16} /> Caracterização do Edifício e Serviços
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
              <strong className="text-white font-medium">Características do Prédio:</strong> Edifício residencial composto por 8 pavimentos, contendo 7 apartamentos por andar. O condomínio dispõe de portaria presencial antiga (não 24 horas). Não possui vaga de garagem ou área de lazer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Identificação Imobiliária</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Endereço:</strong> Rua Silveira Martins, nº 140, Apto 503</li>
                <li><strong className="text-white">Bairro / Cidade:</strong> Catete, Rio de Janeiro - RJ</li>
                <li><strong className="text-white">Área Privativa:</strong> 36 m²</li>
                <li><strong className="text-white">Vaga de Garagem:</strong> Sem vaga de garagem</li>
                <li><strong className="text-white">Estrutura:</strong> 8 pavimentos, 7 unidades por andar</li>
                <li><strong className="text-white">Cartório de Registro:</strong> 9º Ofício do Registro de Imóveis (9º RGI)</li>
                <li><strong className="text-white">Matrícula:</strong> 486819 (livro 3, fls. 1)</li>
                <li><strong className="text-white">Inscrição IPTU:</strong> Desconhecida / Em levantamento</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Dados da Execução Judicial</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Jurisdição:</strong> Tribunal de Justiça do Estado do Rio de Janeiro (TJRJ)</li>
                <li><strong className="text-white">Modalidade:</strong> Leilão Judicial Eletrônico</li>
                <li><strong className="text-white">Avaliação Oficial:</strong> R$ 334.118,04</li>
                <li><strong className="text-white">1ª Praça (100%):</strong> 27/07/2026 às 12:50h (R$ 334.118,04)</li>
                <li><strong className="text-white">2ª Praça (50%):</strong> 29/07/2026 às 12:50h (Mínimo: R$ 168.000,00)</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Seção 2: Contexto de Mercado */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <MapPin size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              Contexto do Mercado Imobiliário no Catete
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            O Catete atrai grande contingente de moradores e investidores devido ao seu perfil urbano dinâmico, excelente oferta de modal público e proximidade imediata com as praias e parques do Flamengo e Botafogo.
          </p>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            Apartamentos compactos de 36 m² possuem altíssima liquidez de locação e revenda na Zona Sul do Rio de Janeiro. Com o lance inicial na 2ª praça fixado em R$ 168.000,00 (50% do valor de avaliação de R$ 334.118,04), a arrematação configura excelente oportunidade sob a ótica de retorno sobre o capital.
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
            Para arrematar o imóvel no TJRJ, o investidor pode optar por duas vias jurídicas de participação:
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
                  <span><strong>Disputa Online:</strong> Lances em tempo real nas datas aprazadas no edital (27/07/2026 e 29/07/2026 às 12:50h).</span>
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
                  Exame da Matrícula 486819 no 9º RGI, verificação da intimação dos executados e credores, e levantamento do histórico de ônus judiciais.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Estudo de Viabilidade Financeira e Fiscal</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Cálculo do custo total de aquisição abrangendo comissão do leiloeiro, ITBI, custas de registro e aplicação da sub-rogação do art. 130 do CTN para tributos municipais.
                </p>
              </div>
            </div>

            <div className="p-5 bg-midnight/60 rounded-2xl border border-white/5 flex items-start gap-4">
              <CheckCircle2 size={20} className="text-bronze shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Atuação Célere Pós-Arrematação até a Posse</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Peticionamento para expedição da carta de arrematação, baixa de penhoras existentes na matrícula do imóvel e mandado de imissão na posse.
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
                Estudo prévio dos autos judiciais no TJRJ, matrícula imobiliária e emissão do parecer de viabilidade jurídica.
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
              Perguntas Frequentes Sobre o Leilão do Apto 503 na Rua Silveira Martins 140
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20do%20apartamento%20503%20na%20Rua%20Silveira%20Martins%20140%20no%20Catete."
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
                <FileText size={20} className="text-bronze" /> Resumo do Edital — Silveira Martins 140 (Apto 503)
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
                <div>Rua Silveira Martins nº 140, Apto 503 — Catete, Rio de Janeiro/RJ.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Valor de Avaliação Oficial:</div>
                <div className="text-bronze font-bold">R$ 334.118,04</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Datas das Praças Judiciais:</div>
                <div>1ª Praça: 27/07/2026 às 12:50h (100% da avaliação = R$ 334.118,04)</div>
                <div>2ª Praça: 29/07/2026 às 12:50h (50% da avaliação = R$ 168.000,00)</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Descrição e Tipologia:</div>
                <div>Apartamento 503 com 36 m² de área privativa, sem vaga de garagem. Edifício residencial de 8 pavimentos contendo 7 apartamentos por andar, portaria antiga presencial.</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Registro e Inscrição Municipal:</div>
                <div>9º RGI — Matrícula nº 486819 (livro 3, fls. 1) | Inscrição IPTU: Desconhecida / Em apuração.</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital%20do%20apartamento%20503%20na%20Rua%20Silveira%20Martins%20140%20no%20Catete."
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

export default SilveiraMartins503AuctionPage;
