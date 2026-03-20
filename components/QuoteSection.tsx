
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const QuoteSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-midnight flex items-center justify-center px-6 md:px-[10%] relative overflow-hidden">
      {/* Decorative quotes background */}
      <span className="absolute left-4 sm:left-10 top-10 sm:top-20 text-[120px] sm:text-[200px] text-white/5 font-serif select-none pointer-events-none">“</span>
      <span className="absolute right-4 sm:right-10 bottom-10 sm:bottom-20 text-[120px] sm:text-[200px] text-white/5 font-serif select-none pointer-events-none">”</span>

      <div className="max-w-4xl text-center space-y-8 md:space-y-10 relative z-10">
        <h2 className="font-serif text-white text-xl sm:text-3xl md:text-5xl leading-relaxed italic">
          {t('quote.text')}
        </h2>
        
        <div className="space-y-2">
          <div className="w-12 sm:w-16 h-1px bg-bronze mx-auto mb-4" />
          <p className="text-white font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase">Soares Martins</p>
          <p className="text-bronze text-[8px] sm:text-[10px] uppercase tracking-widest">Advogados</p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
