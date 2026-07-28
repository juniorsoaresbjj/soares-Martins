import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, 
  MapPin, Calendar, DollarSign, ExternalLink, Info, FileSpreadsheet, ShieldAlert
} from 'lucide-react';
import SEO from './SEO';
import buildingImage from '../src/assets/images/regenerated_image_1784923050786.png';
import { useLanguage } from '../context/LanguageContext';
import { editalCommon, editaisData } from '../translations/editais';

interface CopacabanaAuctionPageProps {
  onBack?: () => void;
}

const CopacabanaAuctionPage: React.FC<CopacabanaAuctionPageProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showEditalModal, setShowEditalModal] = useState<boolean>(false);
  const { language } = useLanguage();

  const tC = editalCommon[language] || editalCommon.pt;
  const editalEntry = editaisData['copacabana-viveiros'];
  const item = (editalEntry && (editalEntry[language] || editalEntry.pt)) || editaisData['copacabana-viveiros'].pt;

  const canonicalUrl = "https://soaresmartinsadv.com/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-ministro-viveiros-de-castro-32/";

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
          "item": "https://soaresmartinsadv.com/assessoria-leiloes-judiciais/"
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
          <Link to="/assessoria-leiloes-judiciais/" className="hover:text-bronze transition-colors">{tC.auctionsTitle}</Link>
          <ChevronRight size={12} className="text-bronze shrink-0" />
          <span className="text-white font-medium">{item.title}</span>
        </nav>

        {/* Back Link */}
        <Link 
          to="/assessoria-leiloes-judiciais/" 
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Photo of Property */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group bg-midnight/80 h-full min-h-[300px] flex flex-col">
                <img 
                  src={buildingImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover min-h-[280px] sm:min-h-[340px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-midnight/90 backdrop-blur-md border-t border-white/10">
                  <p className="text-xs text-white/90 font-medium flex items-center gap-2">
                    <MapPin size={14} className="text-bronze shrink-0" />
                    {item.address}
                  </p>
                  <p className="text-[10px] text-text-muted mt-1 uppercase tracking-wider font-mono">
                    {tC.imageIllustrative}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Quadro Visual com Praças e Valores */}
            <div className="lg:col-span-6 bg-midnight/80 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between text-left space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-widest text-text-muted font-bold">{tC.valuationLabel}</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-bronze">{item.val}</span>
                </div>

                {/* Praças Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  {/* 1ª Praça */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-left">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-bronze mb-1 flex items-center gap-1.5">
                      <Calendar size={12} /> {tC.p1Title}
                    </div>
                    <div className="text-sm font-semibold text-white mb-2">{tC.p1Desc}</div>
                    <div className="text-xs text-text-muted mb-1">{tC.minBidLabel}</div>
                    <div className="text-lg font-serif font-bold text-white">{item.val}</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">{item.p1Date}</div>
                  </div>

                  {/* 2ª Praça */}
                  <div className="bg-white/5 rounded-xl p-4 border border-bronze/30 text-left relative overflow-hidden">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                      <Calendar size={12} /> {tC.p2Title}
                    </div>
                    <div className="text-sm font-semibold text-emerald-300 mb-2">{tC.p2Desc}</div>
                    <div className="text-xs text-text-muted mb-1">{tC.minBidLabel}</div>
                    <div className="text-lg font-serif font-bold text-emerald-400">{item.p2Val}</div>
                    <div className="text-[11px] text-white/60 mt-2 font-mono">{item.p2Date}</div>
                  </div>
                </div>

                {/* Ações / Didactic Summary Link */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowEditalModal(true)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl border border-white/10 transition-all text-center cursor-pointer"
                  >
                    <FileText size={16} className="text-bronze" />
                    {tC.btnViewDetails}
                  </button>

                  <a 
                    href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20em%20Copacabana."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white hover:text-midnight text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl transition-all text-center shadow-lg"
                  >
                    <PhoneCall size={16} />
                    {tC.btnWhatsApp}
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
              {tC.specsTitle}
            </h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {item.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Identificação Imobiliária</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">Localização:</strong> {item.address}</li>
                <li><strong className="text-white">{tC.specsRgi}</strong> {item.rgi}</li>
                <li><strong className="text-white">{tC.specsIptu}</strong> {item.iptu}</li>
              </ul>
            </div>

            <div className="bg-midnight/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs uppercase tracking-widest text-bronze font-bold block">Dados da Execução Judicial</span>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2">
                <li><strong className="text-white">{tC.specsProcess}</strong> {item.process}</li>
                <li><strong className="text-white">{tC.specsCourt}</strong> {item.court}</li>
                <li><strong className="text-white">{tC.specsValuation}</strong> {item.val}</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Links Internos Relevantes */}
        <section className="bg-midnight/60 rounded-2xl p-6 sm:p-8 border border-white/10 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-white font-serif text-lg font-bold">{tC.relatedTitle}</h3>
            <p className="text-xs text-text-muted">
              Conheça mais sobre nossos serviços em leilões imobiliários e direito imobiliário no Rio de Janeiro.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link 
              to="/assessoria-leiloes-judiciais/"
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
        </section>

        {/* FAQ Específica da Página */}
        <article className="bg-midnight-light/30 rounded-3xl p-8 sm:p-12 border border-white/10 text-left space-y-6">
          <div className="flex items-center gap-3 text-bronze">
            <HelpCircle size={24} className="shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-bold">
              {tC.faqTitle}
            </h2>
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

        {/* CTA Sóbrio Final */}
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20assessoria%20jur%C3%ADdica%20para%20o%20leil%C3%A3o%20em%20Copacabana."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-midnight text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-midnight transition-all shadow-lg"
              >
                <PhoneCall size={16} />
                {tC.ctaWA}
              </a>

              <a 
                href="mailto:Juniorsadv@hotmail.com" 
                className="inline-flex items-center justify-center gap-2 border-2 border-midnight text-midnight px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-midnight hover:text-white transition-all"
              >
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
                <div className="text-white font-semibold">Localização do Imóvel:</div>
                <div>{item.address}</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">{tC.specsValuation}</div>
                <div className="text-bronze font-bold">{item.val}</div>
              </div>

              <div className="p-4 bg-midnight rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-semibold">Datas das Praças Judiciais:</div>
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
                href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20o%20parecer%20completo%20do%20edital."
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

export default CopacabanaAuctionPage;
