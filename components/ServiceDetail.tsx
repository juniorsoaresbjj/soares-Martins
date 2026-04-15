
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ChevronRight, Building2, Gavel, Scale, ShieldCheck, FileText, Users, ShieldAlert } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const serviceData: Record<string, any> = {
  'cobranca-inadimplentes-condominio-rj': {
    titleKey: 'services.s3',
    descKey: 'services.s3Desc',
    icon: <Scale size={48} />,
    detailsKey: 'services_page.details.s3'
  },
  'assessoria-juridica-sindico-rj': {
    titleKey: 'services.s4',
    descKey: 'services.s4Desc',
    icon: <ShieldCheck size={48} />,
    detailsKey: 'services_page.details.s4'
  },
  'compliance-condominial': {
    titleKey: 'services.s5',
    descKey: 'services.s5Desc',
    icon: <FileText size={48} />,
    detailsKey: 'services_page.details.s5'
  },
  'trabalhista-condominio-rj': {
    titleKey: 'services.s6',
    descKey: 'services.s6Desc',
    icon: <Users size={48} />,
    detailsKey: 'services_page.details.s6'
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  
  const service = slug ? serviceData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-midnight text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Página não encontrada</h1>
          <Link to="/" className="text-bronze hover:underline">Voltar para o início</Link>
        </div>
      </div>
    );
  }

  const details = t(service.detailsKey) as unknown as string[];

  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navbar currentView="services" />
      
      <main className="pt-32 pb-20 px-6 md:px-[10%]">
        <div className="max-w-4xl mx-auto">
          <Link to="/#services" className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-widest mb-12 hover:text-white group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t('nav.back_home')}
          </Link>

          <div className="flex flex-col md:flex-row gap-8 md:items-center mb-12">
            <div className="text-bronze">
              {service.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{t(service.titleKey)}</h1>
              <p className="text-xl text-text-muted font-light">{t(service.descKey)}</p>
            </div>
          </div>

          <div className="bg-midnight-light/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/5 mb-16">
            <h2 className="text-2xl font-serif mb-8 text-bronze">Especialidades e Atuação</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                  <ChevronRight size={18} className="text-bronze shrink-0 mt-0.5" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-bronze p-10 md:p-16 rounded-3xl text-midnight text-center">
            <h3 className="text-3xl font-serif mb-6">Precisa de assessoria especializada?</h3>
            <p className="text-lg mb-10 opacity-80">Nossa equipe está pronta para oferecer a melhor solução jurídica para o seu condomínio no Rio de Janeiro.</p>
            <a 
              href={`https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20falar%20sobre%20${t(service.titleKey)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-midnight text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-midnight transition-all"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
