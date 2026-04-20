
import React from 'react';
import { Link } from 'react-router-dom';
import { Gavel, Scale, ShieldCheck, FileText, Building2, Users, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const servicesList = [
    {
      title: t('services.s1'),
      description: t('services.s1Desc'),
      icon: <Building2 size={28} strokeWidth={1.5} />,
      slug: null
    },
    {
      title: t('services.s2'),
      description: t('services.s2Desc'),
      icon: <Gavel size={28} strokeWidth={1.5} />,
      slug: null
    },
    {
      title: t('services.s3'),
      description: t('services.s3Desc'),
      icon: <Scale size={28} strokeWidth={1.5} />,
      slug: 'cobranca-condominial'
    },
    {
      title: t('services.s4'),
      description: t('services.s4Desc'),
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      slug: 'assessoria-juridica-para-sindicos'
    },
    {
      title: t('services.s5'),
      description: t('services.s5Desc'),
      icon: <FileText size={28} strokeWidth={1.5} />,
      slug: 'direito-condominial'
    },
    {
      title: t('services.s6'),
      description: t('services.s6Desc'),
      icon: <Users size={28} strokeWidth={1.5} />,
      slug: 'assembleias-convencao-regimento'
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-[10%] bg-midnight relative overflow-hidden" id="atuacao">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-10 grayscale"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
          <span className="text-bronze text-[10px] sm:text-xs font-bold uppercase tracking-widest">{t('services.tag')}</span>
          <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-7xl leading-tight">
            {t('services.title')} <br className="hidden sm:block" />
            <span className="serif-italic text-bronze">{t('services.titleHighlight')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-10 bg-midnight-light border border-white/5 rounded-2xl hover:border-bronze/50 transition-all duration-500 hover:-translate-y-2 shadow-xl flex flex-col h-full"
            >
              <div className="text-bronze mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-white text-lg md:text-xl font-serif mb-3 md:mb-4 group-hover:text-bronze transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed group-hover:text-white/70 transition-colors mb-6 flex-grow">
                {service.description}
              </p>
              {service.slug && (
                <Link 
                  to={`/${service.slug}`}
                  className="inline-flex items-center gap-2 text-bronze text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                >
                  Saiba mais <ChevronRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
