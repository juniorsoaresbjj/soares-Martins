
import React from 'react';
import { Gavel, Scale, ShieldCheck, FileText, Building2, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const servicesList = [
    {
      title: t('services.s1'),
      description: t('services.s1Desc'),
      icon: <Building2 size={28} strokeWidth={1.5} />
    },
    {
      title: t('services.s2'),
      description: t('services.s2Desc'),
      icon: <Gavel size={28} strokeWidth={1.5} />
    },
    {
      title: t('services.s3'),
      description: t('services.s3Desc'),
      icon: <Scale size={28} strokeWidth={1.5} />
    },
    {
      title: t('services.s4'),
      description: t('services.s4Desc'),
      icon: <ShieldCheck size={28} strokeWidth={1.5} />
    },
    {
      title: t('services.s5'),
      description: t('services.s5Desc'),
      icon: <FileText size={28} strokeWidth={1.5} />
    },
    {
      title: t('services.s6'),
      description: t('services.s6Desc'),
      icon: <Users size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-[10%] bg-midnight relative" id="atuacao">
      <div className="max-w-7xl mx-auto">
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
              className="group p-8 md:p-10 bg-midnight-light border border-white/5 rounded-2xl hover:border-bronze/50 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              <div className="text-bronze mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-white text-lg md:text-xl font-serif mb-3 md:mb-4 group-hover:text-bronze transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
