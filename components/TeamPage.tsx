
import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from './SEO';

interface TeamPageProps {
  onBack: () => void;
}

const TeamPage: React.FC<TeamPageProps> = ({ onBack }) => {
  const { t } = useLanguage();

  const team = [
    {
      name: "Dr. Oldenyr Soares",
      role: "Sócio Fundador",
      oab: "OAB/RJ 267.267",
      specialty: t('team_page.specialty_quote'),
      bio: t('team_page.bio'),
      initials: "OS"
    }
  ];

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-24 px-6 md:px-[10%] animate-fade-in-up bg-midnight overflow-hidden">
      <SEO 
        title={t('nav.team')} 
        description={t('team_page.bio').substring(0, 160)}
      />
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-15 grayscale"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-midnight via-midnight/95 to-midnight" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-bronze text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-10 md:mb-12 hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t('nav.back_home')}
        </button>

        <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <span className="text-bronze text-xs sm:text-sm font-bold uppercase tracking-widest block mb-4">{t('team_page.tag')}</span>
          <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-7xl leading-tight mb-6 md:mb-8">
            {t('team_page.title')} <br className="hidden sm:block" />
            <span className="serif-italic text-bronze">{t('team_page.titleHighlight')}</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-[800px] mx-auto border-t border-white/10 pt-6 md:pt-8 italic whitespace-pre-line">
            {t('team_page.description')}
          </p>
        </div>

        <div className="flex justify-center">
          {team.map((member, index) => (
            <div key={index} className="max-w-3xl w-full bg-midnight-light/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 sm:p-10 md:p-16 hover:border-bronze/30 transition-all group shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center mb-8 md:mb-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-bronze/20 rounded-full flex items-center justify-center text-bronze font-serif text-3xl sm:text-4xl group-hover:bg-bronze group-hover:text-midnight transition-all duration-500 shrink-0">
                  {member.initials}
                </div>
                <div>
                  <h2 className="text-white text-2xl sm:text-3xl font-serif mb-1">{member.name}</h2>
                  <p className="text-bronze text-[10px] sm:text-xs font-bold uppercase tracking-widest">{member.role} | {member.oab}</p>
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-white/90 text-sm sm:text-base font-medium italic">"{member.specialty}"</p>
                <p className="text-text-muted leading-relaxed text-xs sm:text-sm md:text-base">{member.bio}</p>
                
                <div className="flex gap-4 pt-4 md:pt-6">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-bronze hover:text-bronze transition-all">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
