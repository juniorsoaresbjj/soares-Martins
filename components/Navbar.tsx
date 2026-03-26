
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

interface NavbarProps {
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t('nav.history'), href: '#history', id: 'history' },
    { name: t('nav.services'), href: '#services', id: 'services' },
    { name: t('nav.team'), href: '#team', id: 'team' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' },
    { name: t('nav.blog'), href: '#blog', id: 'blog' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.hash = hash;
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentView === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '';
    }
    setIsMobileMenuOpen(false);
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 py-6 pl-[3%] pr-[5%] ${isScrolled || currentView !== 'home' ? 'glass py-4' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <a href="#home" onClick={handleHomeClick} className="transition-transform hover:scale-105">
          <Logo className="h-10 md:h-12" variant="light" />
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`${currentView === item.id ? 'text-bronze' : 'text-white/90'} hover:text-bronze transition-colors text-[10px] lg:text-[11px] font-bold uppercase tracking-wider relative group whitespace-nowrap p-2`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-bronze transition-all duration-300 ${currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}

          {/* LANGUAGE SELECTOR */}
          <div className="relative" ref={langMenuRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-white/90 hover:text-bronze transition-colors text-[11px] font-bold uppercase tracking-wider p-2"
            >
              <Globe size={14} className="text-bronze" />
              <span>{currentLang.flag}</span>
              <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 glass rounded-xl overflow-hidden shadow-2xl animate-fade-in-up">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-left transition-colors hover:bg-bronze hover:text-midnight ${language === lang.code ? 'text-bronze bg-white/5' : 'text-white/80'}`}
                  >
                    <span>{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20escrit%C3%B3rio%20Soares%20Martins." 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 text-white px-6 lg:px-8 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-midnight transition-all duration-300 whitespace-nowrap"
          >
            {t('nav.cta')}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Lang Button (Quick Access) */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-white/80 p-3 flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Trocar idioma"
            >
              <span className="text-lg">{currentLang.flag}</span>
            </button>
            
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 glass rounded-xl overflow-hidden shadow-2xl animate-fade-in-up">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-4 text-[10px] font-bold uppercase tracking-widest text-left transition-colors hover:bg-bronze hover:text-midnight ${language === lang.code ? 'text-bronze bg-white/5' : 'text-white/80'}`}
                  >
                    <span>{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button 
            className="text-white p-3 flex items-center justify-center min-w-[44px] min-h-[44px]" 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsLangOpen(false);
            }}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-midnight/98 backdrop-blur-xl z-[-1] transition-all duration-500 md:hidden overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
        <div className="flex flex-col items-center justify-start min-h-full py-24 px-10 space-y-8">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-serif text-white text-center hover:text-bronze transition-colors py-2 uppercase tracking-widest w-full border-b border-white/5"
            >
              {item.name}
            </a>
          ))}

          {/* Language Selector in Mobile Menu */}
          <div className="w-full pt-8 space-y-4">
            <p className="text-bronze text-[10px] font-bold uppercase tracking-[0.2em] text-center mb-4">{t('nav.language') || 'Idioma'}</p>
            <div className="grid grid-cols-3 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${language === lang.code ? 'bg-bronze/10 border-bronze text-bronze' : 'bg-white/5 border-white/10 text-white/60'}`}
                >
                  <span className="text-2xl mb-2">{lang.flag}</span>
                  <span className="text-[9px] font-bold uppercase tracking-tighter">{lang.code}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full pt-8">
            <a 
              href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20escrit%C3%B3rio%20Soares%20Martins." 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-bronze text-midnight px-12 py-5 rounded-md font-bold text-center uppercase tracking-widest text-sm w-full shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              {t('nav.cta')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
