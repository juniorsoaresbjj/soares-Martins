import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, 
  FileText, HelpCircle, PhoneCall, MapPin, Calendar, ExternalLink,
  ShieldCheck, FileCheck, Landmark, CheckCircle2, Scale, Car, Sparkles,
  DollarSign, Compass, Home, Award, Layers, Shield
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1787601044416.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface BarraRicardoMarinho300AuctionPageProps {
  onBack?: () => void;
}

const BarraRicardoMarinho300AuctionPage: React.FC<BarraRicardoMarinho300AuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['barra-jornalista-ricardo-marinho-300-apto-312'];
  const item = editalEntry[language] || editalEntry.pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-jornalista-ricardo-marinho-300-apto-312/";

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
        "lowPrice": "650000.00",
        "highPrice": "1300000.00",
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
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20312%20na%20Av.%20Jornalista%20Ricardo%20Marinho%20300%20na%20Barra%20da%20Tijuca."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <PhoneCall size={15} /> {tC.btnConsultReport}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ficha Técnica Rápida */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-midnight-light/30 border border-white/10 rounded-2xl p-5 text-left">
            <Building2 className="text-bronze mb-2" size={24} />
            <div className="text-xs text-text-muted uppercase tracking-wider">Área Privativa</div>
            <div className="text-xl font-bold text-white mt-1">101 m²</div>
            <div className="text-[11px] text-text-muted mt-0.5">Posição Fundos (Silêncio)</div>
          </div>
          <div className="bg-midnight-light/30 border border-white/10 rounded-2xl p-5 text-left">
            <Car className="text-bronze mb-2" size={24} />
            <div className="text-xs text-text-muted uppercase tracking-wider">Vaga de Garagem</div>
            <div className="text-xl font-bold text-white mt-1">1 Vaga Coberta</div>
            <div className="text-[11px] text-text-muted mt-0.5">Direito de uso garantido</div>
          </div>
          <div className="bg-midnight-light/30 border border-white/10 rounded-2xl p-5 text-left">
            <Compass className="text-bronze mb-2" size={24} />
            <div className="text-xs text-text-muted uppercase tracking-wider">Condomínio & Ano</div>
            <div className="text-xl font-bold text-white mt-1">Ano 1989</div>
            <div className="text-[11px] text-text-muted mt-0.5">Lazer, Serviços e Portaria 24h</div>
          </div>
          <div className="bg-midnight-light/30 border border-white/10 rounded-2xl p-5 text-left">
            <DollarSign className="text-emerald-400 mb-2" size={24} />
            <div className="text-xs text-text-muted uppercase tracking-wider">Desconto 2ª Praça</div>
            <div className="text-xl font-bold text-emerald-400 mt-1">50% de Desconto</div>
            <div className="text-[11px] text-text-muted mt-0.5">Economia de R$ 650.000,00</div>
          </div>
        </div>
      </section>

      {/* Resumo do Imóvel & Identificação Imobiliária */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          <div className="lg:col-span-8 space-y-8">
            {/* Box 1: Descrição Detalhada */}
            <div className="bg-midnight-light/20 rounded-2xl p-8 border border-white/10 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <FileCheck className="text-bronze" size={24} /> Descrição Detalhada do Imóvel
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                O imóvel designado como <strong>Apartamento nº 312</strong>, situado no 3º pavimento do edifício residencial na <strong>Avenida Jornalista Ricardo Marinho, nº 300</strong>, no nobre bairro da Barra da Tijuca, Rio de Janeiro/RJ, apresenta <strong>101 m² de área edificada</strong> e posição de fundos, que proporciona extraordinária tranquilidade, silêncio acústico e privacidade aos seus ocupantes.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                O condomínio, edificado no ano de <strong>1989</strong>, possui sólida estrutura de lazer, comodidades e serviços para moradores, portaria com controle de acesso presencial <strong>24 horas</strong> e segurança especializada, contando a unidade com o direito ao uso de <strong>1 (uma) vaga de garagem coberta</strong> no edifício.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="space-y-2">
                  <div className="text-bronze font-bold uppercase tracking-wider">Registros Oficiais</div>
                  <div className="text-gray-300"><strong>Cartório do 9º RGI/RJ:</strong> Matrícula nº 150903</div>
                  <div className="text-gray-300"><strong>Inscrição Municipal (IPTU):</strong> 1.845.927-1</div>
                </div>
                <div className="space-y-2">
                  <div className="text-bronze font-bold uppercase tracking-wider">Dados Cadastrais</div>
                  <div className="text-gray-300"><strong>Tipologia:</strong> Apartamento Residencial (Fundos)</div>
                  <div className="text-gray-300"><strong>Área Edificada:</strong> 101 m² | 1 Vaga Coberta</div>
                </div>
              </div>
            </div>

            {/* Box 2: Contexto de Mercado e Potencial de Valorização */}
            <div className="bg-midnight-light/20 rounded-2xl p-8 border border-white/10 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <Landmark className="text-bronze" size={24} /> Contexto de Mercado & Potencial de Valorização
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                A <strong>Avenida Jornalista Ricardo Marinho</strong> desfruta de localização nobre e consolidada na Barra da Tijuca, paralela ao canal e próxima à Avenida das Américas e Avenida Prefeito Dulcídio Cardoso. A região reúne mobilidade ágil com balsa ecológica para a praia, proximidade de shoppings prestigiados (como BarraShopping e VillageMall), supermercados de grande porte (Hortifruti, Zona Sul), conceituadas escolas e hospitais de referência.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Na 2ª praça judicial, com lance mínimo fixado em <strong>R$ 650.000,00</strong>, o valor por metro quadrado atinge a marca extremamente atrativa de aproximadamente <strong>R$ 6.435,00/m²</strong>. Na Barra da Tijuca, apartamentos similares com vaga e infraestrutura de lazer costumam ser comercializados entre R$ 11.000,00 e R$ 15.000,00/m², conferindo excelente margem de valorização para moradia própria ou aluguel de alta liquidez.
              </p>
            </div>

            {/* Box 3: Como Funciona a Participação e Proposta Parcelada */}
            <div className="bg-midnight-light/20 rounded-2xl p-8 border border-white/10 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <Scale className="text-bronze" size={24} /> Como Participar e Proposta Parcelada (Art. 895 do CPC)
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                O leilão judicial admite a participação de pessoas físicas e jurídicas para lances à vista ou com propostas de pagamento parcelado previstas no <strong>Artigo 895 do CPC</strong>:
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-bronze shrink-0 mt-1" />
                  <span><strong>1ª Praça (24/08/2026 às 12:00h):</strong> Abertura de lances pelo valor integral da avaliação (R$ 1.300.000,00).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-1" />
                  <span><strong>2ª Praça (26/08/2026 às 12:00h):</strong> Lances a partir de 50% do laudo judicial (R$ 650.000,00).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-bronze shrink-0 mt-1" />
                  <span><strong>Regime de Parcelamento Judicial:</strong> O interessado pode apresentar proposta prévia com entrada de no mínimo 25% à vista e o saldo restante parcelado em até 30 meses corrigidos por índice judicial, garantido por hipoteca no próprio RGI.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar: Dados da Execução e Acompanhamento */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-midnight-light/30 border border-bronze/30 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                <ShieldCheck className="text-bronze" size={20} /> Segurança e Auditoria
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Nossa auditoria jurídica atesta a regularidade das intimações e editais, garantindo a aquisição originária sem riscos de anulação.
              </p>
              <div className="space-y-3 text-xs border-t border-white/10 pt-4">
                <div>
                  <span className="text-text-muted block">Tribunal:</span>
                  <span className="text-white font-medium">TJRJ / Comarca da Capital - Barra da Tijuca</span>
                </div>
                <div>
                  <span className="text-text-muted block">Sub-rogação Fiscal:</span>
                  <span className="text-emerald-400 font-medium">Art. 130, parágrafo único do CTN</span>
                </div>
                <div>
                  <span className="text-text-muted block">Passivos Condominiais:</span>
                  <span className="text-white font-medium">Auditoria integral prévia</span>
                </div>
              </div>
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20desejo%20solicitar%20a%20auditoria%20jur%C3%ADdica%20do%20leil%C3%A3o%20da%20Av.%20Jornalista%20Ricardo%20Marinho%20300."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-bronze/10 hover:bg-bronze hover:text-midnight border border-bronze text-bronze text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={14} /> Solicitar Parecer de Viabilidade
              </a>
            </div>

            {/* 4 Fases do Acompanhamento */}
            <div className="bg-midnight-light/20 border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
                <Award className="text-bronze" size={18} /> Fases do Acompanhamento
              </h3>
              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex gap-2">
                  <span className="font-bold text-bronze">1.</span>
                  <span><strong>Due Diligence Prévia:</strong> Exame minucioso do processo judicial, certidões e edital.</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-bronze">2.</span>
                  <span><strong>Estratégia no Leilão:</strong> Habilitação e lances estratégicos online/presenciais.</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-bronze">3.</span>
                  <span><strong>Homologação e RGI:</strong> Obtenção da Carta de Arrematação e cancelamento de gravames.</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-bronze">4.</span>
                  <span><strong>Imissão na Posse:</strong> Mandado judicial e entrega definitiva das chaves.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artigos e Serviços Jurídicos Relacionados */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-midnight-light/30 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="text-bronze" size={22} /> Artigos de Referência & Serviços Relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <Link 
              to="/blog/estrangeiro-pode-comprar-imovel-em-leilao-no-brasil/" 
              className="p-4 bg-midnight/60 rounded-xl border border-white/10 hover:border-bronze/50 transition-colors group"
            >
              <div className="text-xs text-bronze font-bold uppercase tracking-wider mb-1">Guia Internacional</div>
              <div className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">
                Estrangeiro Pode Comprar Imóvel em Leilão no Brasil? Regras e Documentos
              </div>
            </Link>
            <Link 
              to="/blog/apartamento-leilao-debito-condominial/" 
              className="p-4 bg-midnight/60 rounded-xl border border-white/10 hover:border-bronze/50 transition-colors group"
            >
              <div className="text-xs text-bronze font-bold uppercase tracking-wider mb-1">Dívidas Propter Rem</div>
              <div className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">
                Leilão por Débito de Condomínio: Riscos, Notificações e Como Arrematar
              </div>
            </Link>
            <Link 
              to="/blog/direito-imobiliario-due-diligence-compra/" 
              className="p-4 bg-midnight/60 rounded-xl border border-white/10 hover:border-bronze/50 transition-colors group"
            >
              <div className="text-xs text-bronze font-bold uppercase tracking-wider mb-1">Auditoria Imobiliária</div>
              <div className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">
                Due Diligence Imobiliária no RJ: Certidões, Matrícula e Prevenção de Fraudes
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Específica */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Perguntas Frequentes sobre o Leilão na Av. Jornalista Ricardo Marinho 300
            </h2>
            <p className="text-text-muted text-sm">
              Esclarecimentos técnicos e jurídicos sobre a oportunidade do Edifício na Barra da Tijuca.
            </p>
          </div>

          <div className="space-y-3 mt-8">
            {item.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-midnight-light/20 border border-white/10 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="text-bronze shrink-0" size={18} />
                  ) : (
                    <ChevronDown className="text-bronze shrink-0" size={18} />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional CTA & OAB Compliance */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-midnight-light to-midnight border border-bronze/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Arremate na Barra da Tijuca com Segurança Jurídica Plena
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              O escritório Soares Martins Advogados oferece assessoria jurídica de alta precisão em leilões judiciais de imóveis na Barra da Tijuca. Cuidamos de todo o processo — da análise de riscos processuais e certidões à homologação e entrega das chaves.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20conversar%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20312%20na%20Av.%20Jornalista%20Ricardo%20Marinho%20300%20na%20Barra."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <PhoneCall size={16} /> Falar com Advogado Especialista
              </a>
              <Link 
                to="/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2"
              >
                <Gavel size={16} /> Ver Todos os Leilões
              </Link>
            </div>
            <p className="text-[11px] text-text-muted pt-6 border-t border-white/10">
              Atendimento em conformidade com o Código de Ética e Disciplina da OAB/RJ. Informações de caráter estritamente orientativo e técnico baseadas em editais públicos judiciais.
            </p>
          </div>
        </div>
      </section>

      {/* Modal de Resumo do Edital */}
      {showEditalModal && (
        <div className="fixed inset-0 z-50 bg-midnight/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="bg-midnight-light border border-bronze/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto text-left">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <FileText className="text-bronze" size={20} /> Resumo do Edital Judicial
              </h3>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="text-text-muted hover:text-white text-sm font-bold px-2 py-1 rounded-lg hover:bg-white/10"
              >
                ✕ Fechar
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <div>
                <strong className="text-white block text-sm mb-1">Localização e Descrição:</strong>
                Apartamento nº 312, situado no 3º pavimento do edifício na Avenida Jornalista Ricardo Marinho, nº 300, Barra da Tijuca, Rio de Janeiro/RJ. Área privativa de 101 m², posição fundos, com direito ao uso de 1 (uma) vaga de garagem coberta.
              </div>

              <div>
                <strong className="text-white block text-sm mb-1">Características do Condomínio:</strong>
                Construído em 1989, com completa estrutura de lazer, serviços aos moradores, portaria com controle de acesso 24 horas e elevadores.
              </div>

              <div>
                <strong className="text-white block text-sm mb-1">Registros e Inscrições:</strong>
                Matrícula nº 150903 do Cartório do 9º Ofício de Registro de Imóveis (9º RGI/RJ) e Inscrição Municipal (IPTU) nº 1.845.927-1.
              </div>

              <div>
                <strong className="text-white block text-sm mb-1">Valores e Praças Judiciais:</strong>
                Avaliação judicial: R$ 1.300.000,00.<br />
                • 1ª Praça: 24/08/2026 às 12:00h — Lance mínimo: R$ 1.300.000,00.<br />
                • 2ª Praça: 26/08/2026 às 12:00h — Lance mínimo: R$ 650.000,00 (50% da avaliação).
              </div>

              <div>
                <strong className="text-white block text-sm mb-1">Forma de Pagamento:</strong>
                À vista ou parcelado nos termos do Art. 895 do CPC (mínimo de 25% de entrada e saldo em até 30 vezes corrigidas, com garantia hipotecária).
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex gap-3">
              <a 
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20edital%20completo%20do%20leil%C3%A3o%20da%20Av.%20Jornalista%20Ricardo%20Marinho%20300."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-bronze text-midnight hover:bg-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl text-center transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={14} /> Solicitar Parecer de Viabilidade
              </a>
              <button 
                onClick={() => setShowEditalModal(false)}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BarraRicardoMarinho300AuctionPage;
