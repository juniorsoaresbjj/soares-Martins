
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-[10%] pt-24 pb-12 overflow-hidden bg-midnight">
      {/* Background Architectural Style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-midnight/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-50 grayscale-0"
          alt="Advogado condominial no Rio de Janeiro - Soares Martins"
        />
      </div>
      
      <div className="relative z-20 max-w-4xl w-full">
        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 md:mb-10 animate-fade-in-up stagger-1">
          Soluções Jurídicas Para Condomínios e Patrimônios.
        </h1>
        
        <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-2xl leading-relaxed animate-fade-in-up stagger-2 font-light">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 items-stretch sm:items-center animate-fade-in-up stagger-3">
          <Link 
            to="/historia" 
            className="bg-bronze text-midnight px-8 md:px-12 py-4 font-bold text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg text-center sm:min-w-[200px] md:min-w-[240px]"
          >
            {t('hero.cta1')}
          </Link>
          
          <Link 
            to="/servicos" 
            className="border border-white/40 text-white px-8 md:px-12 py-4 font-bold text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all duration-300 text-center sm:min-w-[200px] md:min-w-[240px]"
          >
            {t('hero.cta2')}
          </Link>

          <a 
            href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20escrit%C3%B3rio%20Soares%20Martins."
            target="_blank"
            rel="noopener noreferrer"
            className="text-bronze px-4 py-4 font-bold text-[11px] uppercase tracking-widest hover:text-white transition-all duration-300 text-center flex items-center gap-2 group whitespace-nowrap"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover:scale-150 transition-transform"></span>
            {t('hero.online')}
          </a>
        </div>
      </div>

      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <span className="text-white/10 text-[120px] font-serif font-bold whitespace-nowrap select-none uppercase tracking-widest">MARTINS</span>
      </div>
    </section>
  );
};

export default Hero;
