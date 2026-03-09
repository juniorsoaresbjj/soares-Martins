
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const QuoteSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-midnight flex items-center justify-center px-[10%] relative overflow-hidden">
      {/* Decorative quotes background */}
      <span className="absolute left-10 top-20 text-[200px] text-white/5 font-serif select-none pointer-events-none">“</span>
      <span className="absolute right-10 bottom-20 text-[200px] text-white/5 font-serif select-none pointer-events-none">”</span>

      <div className="max-w-4xl text-center space-y-10 relative z-10">
        <h2 className="font-serif text-white text-3xl md:text-5xl leading-relaxed italic">
          {t('quote.text')}
        </h2>
        
        <div className="space-y-2">
          <div className="w-16 h-1px bg-bronze mx-auto mb-4" />
          <p className="text-white font-bold tracking-[0.3em] text-xs uppercase">Soares Martins</p>
          <p className="text-bronze text-[10px] uppercase tracking-widest">Advogados</p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
