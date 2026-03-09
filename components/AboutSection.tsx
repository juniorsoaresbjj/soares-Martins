
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="escritorio" className="py-32 px-[5%] md:px-[10%] bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-bronze/30 z-0" />
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" 
            className="rounded-2xl shadow-2xl relative z-10 w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            alt="Nosso Escritório"
          />
          <div className="absolute -bottom-6 -right-6 bg-midnight p-8 text-white rounded-xl shadow-xl z-20 max-w-[280px]">
            <span className="text-[10px] uppercase font-bold tracking-widest text-bronze block leading-relaxed">
              {t('about.exp')}
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-bronze text-xs font-bold uppercase tracking-widest">{t('about.tag')}</span>
            <h2 className="font-serif text-midnight text-4xl md:text-6xl leading-tight">
              {t('about.title')} <br />
              <span className="serif-italic text-bronze">{t('about.titleHighlight')}</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.desc1')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.desc2')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="p-6 border border-gray-100 rounded-xl hover:border-bronze/30 transition-all">
              <h4 className="font-bold text-midnight mb-2">{t('about.card1')}</h4>
              <p className="text-sm text-gray-500">{t('about.card1Desc')}</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl hover:border-bronze/30 transition-all">
              <h4 className="font-bold text-midnight mb-2">{t('about.card2')}</h4>
              <p className="text-sm text-gray-500">{t('about.card2Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
