
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, Gavel, ShieldCheck, FileText, Users, Building2, ChevronRight, Zap, Target, BarChart3, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from './SEO';

interface ServicesPageProps {
  onBack: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack }) => {
  const { t } = useLanguage();

  const specializedAreas = [
    {
      title: t('services.s1'),
      description: t('services.s1Desc'),
      icon: <Building2 size={32} />,
      details: t('services_page.details.s1') as unknown as string[],
      slug: null
    },
    {
      title: t('services.s2'),
      description: t('services.s2Desc'),
      icon: <Gavel size={32} />,
      details: t('services_page.details.s2') as unknown as string[],
      slug: null
    },
    {
      title: t('services.s3'),
      description: t('services.s3Desc'),
      icon: <Scale size={32} />,
      details: t('services_page.details.s3') as unknown as string[],
      slug: 'cobranca-condominial'
    },
    {
      title: t('services.s4'),
      description: t('services.s4Desc'),
      icon: <ShieldCheck size={32} />,
      details: t('services_page.details.s4') as unknown as string[],
      slug: 'assessoria-juridica-para-sindicos'
    },
    {
      title: t('services.s6'),
      description: t('services.s6Desc'),
      icon: <Users size={32} />,
      details: t('services_page.details.s6') as unknown as string[],
      slug: 'assembleias-convencao-regimento'
    },
    {
      title: t('services.s5'),
      description: t('services.s5Desc'),
      icon: <FileText size={32} />,
      details: t('services_page.details.s5') as unknown as string[],
      slug: 'direito-condominial'
    },
    {
      title: t('services_page.penal_title'),
      description: t('services_page.penal_desc'),
      icon: <ShieldAlert size={32} />,
      details: t('services_page.details.penal') as unknown as string[],
      slug: null
    }
  ];

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-24 px-6 md:px-[10%] animate-fade-in-up bg-midnight overflow-x-hidden">
      <SEO 
        title={t('nav.services')} 
        description={t('services_page.subtitle')}
      />
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-20 grayscale"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <button onClick={onBack} className="flex items-center gap-2 text-bronze text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-10 md:mb-12 hover:text-white group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t('nav.back_home')}
          </button>
          <div className="max-w-5xl space-y-4 md:space-y-6">
            <span className="text-bronze text-xs sm:text-sm font-bold uppercase tracking-widest block">{t('services_page.tag')}</span>
            <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1]">
              {t('services_page.title')} <br className="hidden sm:block" />
              <span className="serif-italic text-bronze">{t('services_page.titleHighlight')}</span>
            </h1>
            <div className="max-w-3xl space-y-3 border-l border-bronze/30 pl-4 sm:pl-8">
              <p className="text-white text-lg sm:text-xl md:text-2xl font-serif">{t('services_page.subtitle')}</p>
              <p className="text-text-muted text-sm sm:text-base">{t('services_page.desc')}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-16 mb-20 md:mb-40">
          {specializedAreas.map((area, index) => (
            <div key={index} className="group bg-midnight-light/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-bronze/30 transition-all flex flex-col h-full">
              <div className="text-bronze mb-6 md:mb-8 transition-transform duration-500 group-hover:scale-110">
                {React.cloneElement(area.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-serif mb-4 md:mb-6 group-hover:text-bronze">{area.title}</h3>
              <div className="flex-grow">
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 md:mb-8">{area.description}</p>
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {area.details?.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-bold">
                      <ChevronRight size={12} className="text-bronze shrink-0" /> {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 mt-auto">
                {area.slug && (
                  <Link 
                    to={`/${area.slug}`}
                    className="inline-flex items-center gap-2 text-bronze text-[10px] font-bold uppercase tracking-widest hover:text-white"
                  >
                    Ver página completa <ChevronRight size={14} />
                  </Link>
                )}
                <a href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20escrit%C3%B3rio%20Soares%20Martins." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-bronze text-[10px] font-bold uppercase tracking-widest hover:text-white">
                  {t('services_page.request_opinion')} <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
