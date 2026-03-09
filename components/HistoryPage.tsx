
import React from 'react';
import { ArrowLeft, Landmark, History, Target, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HistoryPageProps {
  onBack: () => void;
}

const HistoryPage: React.FC<HistoryPageProps> = ({ onBack }) => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-[5%] md:px-[10%] animate-fade-in-up bg-midnight overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad11ab?auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-20 grayscale"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Botão Voltar */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-widest mb-16 hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t('nav.back_home')}
        </button>

        {/* Seção de Cabeçalho */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="flex flex-col items-start text-left">
            <span className="text-bronze text-sm font-bold uppercase tracking-widest mb-8">{t('about.tag')}</span>
            <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10 inline-flex flex-col items-center">
              <span className="block uppercase">{t('history_page.title')}</span>
              <span className="serif-italic text-bronze block text-3xl md:text-4xl my-2 italic">DE</span>
              <span className="serif-italic text-bronze block uppercase">Excelência.</span>
            </h1>
            <div className="space-y-6 text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -inset-4 border border-bronze/20 rounded-3xl z-0" />
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" 
              className="rounded-2xl shadow-2xl relative z-10 w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700 aspect-[4/3] object-cover"
              alt="Prédios residenciais modernos"
            />
          </div>
        </div>

        {/* Trajetória em Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="space-y-6 p-8 bg-midnight-light/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-bronze/30 transition-all group">
            <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-midnight transition-all">
              <Landmark size={24} />
            </div>
            <h3 className="font-serif text-white text-2xl">{t('history_page.card1_title')}</h3>
            <p className="text-text-muted leading-relaxed">
              {t('history_page.card1_desc')}
            </p>
          </div>
          
          <div className="space-y-6 p-8 bg-midnight-light/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-bronze/30 transition-all group">
            <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-midnight transition-all">
              <History size={24} />
            </div>
            <h3 className="font-serif text-white text-2xl">{t('history_page.card2_title')}</h3>
            <p className="text-text-muted leading-relaxed">
              {t('history_page.card2_desc')}
            </p>
          </div>

          <div className="space-y-6 p-8 bg-midnight-light/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-bronze/30 transition-all group">
            <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-midnight transition-all">
              <Target size={24} />
            </div>
            <h3 className="font-serif text-white text-2xl">{t('history_page.card3_title')}</h3>
            <p className="text-text-muted leading-relaxed">
              {t('history_page.card3_desc')}
            </p>
          </div>
        </div>

        {/* Pilares */}
        <div className="bg-white/95 backdrop-blur-sm rounded-[40px] p-12 md:p-24 text-midnight shadow-inner">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-midnight">{t('history_page.pillars_title')}</h2>
              <div className="w-16 h-1px bg-bronze mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-4">
                <h4 className="flex items-center gap-3 font-bold text-xl uppercase tracking-widest text-bronze-dark">
                  <ShieldCheck size={20} /> {t('history_page.mission_title')}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('history_page.mission_desc')}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="flex items-center gap-3 font-bold text-xl uppercase tracking-widest text-bronze-dark">
                  <Landmark size={20} /> {t('history_page.vision_title')}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
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
