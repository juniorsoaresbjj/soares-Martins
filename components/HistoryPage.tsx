
import React from 'react';
import { ArrowLeft, Landmark, History, Target, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from './SEO';

interface HistoryPageProps {
  onBack: () => void;
}

const HistoryPage: React.FC<HistoryPageProps> = ({ onBack }) => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-24 px-6 md:px-[10%] animate-fade-in-up bg-midnight overflow-hidden">
      <SEO 
        title={t('nav.history')} 
        description={t('about.desc1')}
      />
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad11ab?auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-20 grayscale"
          alt=""
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Botão Voltar */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-bronze text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-12 md:text-xs md:mb-16 hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t('nav.back_home')}
        </button>

        {/* Seção de Cabeçalho */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20 md:mb-32">
          <div className="flex flex-col items-start text-left">
            <span className="text-bronze text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">{t('about.tag')}</span>
            <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 md:mb-10 inline-flex flex-col items-start sm:items-center">
              <span className="block uppercase">{t('history_page.title')}</span>
              <span className="serif-italic text-bronze block text-2xl sm:text-3xl md:text-4xl my-2 italic">DE</span>
              <span className="serif-italic text-bronze block uppercase">Excelência.</span>
            </h1>
            <div className="space-y-4 md:space-y-6 text-text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              {[t('about.desc1'), t('about.desc2'), t('about.desc3'), t('about.desc4'), t('about.desc5')].map((text, i) => (
                text && <p key={i}>{text}</p>
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-2 sm:-inset-4 border border-bronze/20 rounded-2xl sm:rounded-3xl z-0" />
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" 
              className="rounded-xl sm:rounded-2xl shadow-2xl relative z-10 w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700 aspect-[4/3] object-cover"
              alt="Prédios residenciais modernos"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Trajetória em Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
          <div className="space-y-4 md:space-y-6 p-6 md:p-8 bg-midnight-light/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-bronze/30 transition-all group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-midnight transition-all">
              <Landmark className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-serif text-white text-xl md:text-2xl">{t('history_page.card1_title')}</h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              {t('history_page.card1_desc')}
            </p>
          </div>
          
          <div className="space-y-4 md:space-y-6 p-6 md:p-8 bg-midnight-light/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-bronze/30 transition-all group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-midnight transition-all">
              <History className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-serif text-white text-xl md:text-2xl">{t('history_page.card2_title')}</h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              {t('history_page.card2_desc')}
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 p-6 md:p-8 bg-midnight-light/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-bronze/30 transition-all group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-midnight transition-all">
              <Target className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-serif text-white text-xl md:text-2xl">{t('history_page.card3_title')}</h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              {t('history_page.card3_desc')}
            </p>
          </div>
        </div>

        {/* Pilares */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl md:rounded-[40px] p-8 sm:p-12 md:p-24 text-midnight shadow-inner">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 text-midnight">{t('history_page.pillars_title')}</h2>
              <div className="w-12 md:w-16 h-1px bg-bronze mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-3 md:space-y-4">
                <h4 className="flex items-center gap-3 font-bold text-lg md:text-xl uppercase tracking-widest text-bronze-dark">
                  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> {t('history_page.mission_title')}
                </h4>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {t('history_page.mission_desc')}
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="flex items-center gap-3 font-bold text-lg md:text-xl uppercase tracking-widest text-bronze-dark">
                  <Landmark className="w-4 h-4 md:w-5 md:h-5" /> {t('history_page.vision_title')}
                </h4>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {t('history_page.vision_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
