
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
    <section className="py-32 px-[10%] bg-midnight relative" id="atuacao">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <span className="text-bronze text-xs font-bold uppercase tracking-widest">{t('services.tag')}</span>
          <h2 className="font-serif text-white text-5xl md:text-7xl leading-tight">
            {t('services.title')} <br />
            <span className="serif-italic text-bronze">{t('services.titleHighlight')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 bg-midnight-light border border-white/5 rounded-2xl hover:border-bronze/50 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              <div className="text-bronze mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-white text-xl font-serif mb-4 group-hover:text-bronze transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed group-hover:text-white/70 transition-colors">
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
