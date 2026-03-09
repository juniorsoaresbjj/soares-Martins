
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
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Lang Button (always visible) */}
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="text-white/80 p-2"
          >
            <span>{currentLang.flag}</span>
          </button>
          
          <button 
            className="text-white p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Language Modal for Mobile */}
      {isLangOpen && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-midnight/90 backdrop-blur-md md:hidden" onClick={() => setIsLangOpen(false)}>
          <div className="w-full max-w-xs glass rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsLangOpen(false);
                }}
                className={`w-full flex items-center gap-6 px-8 py-6 text-sm font-bold uppercase tracking-widest text-left transition-colors ${language === lang.code ? 'bg-bronze text-midnight' : 'text-white hover:bg-white/5'}`}
              >
                <span className="text-2xl">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-midnight/95 backdrop-blur-lg z-[-1] transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 p-10">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-serif text-white text-center hover:text-bronze transition-colors py-2 uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20escrit%C3%B3rio%20Soares%20Martins." 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-bronze text-midnight px-12 py-5 rounded-md font-bold text-center uppercase tracking-widest text-sm w-full max-w-xs shadow-xl"
          >
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
