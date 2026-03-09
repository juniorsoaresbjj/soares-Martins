
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const maxLength = 500;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > maxLength) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;
    
    const subject = encodeURIComponent(`Novo Contato: ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\n` +
      `Telefone: ${phone}\n` +
      `E-mail: ${email}\n\n` +
      `Mensagem:\n${message}`
    );
    
    window.location.href = `mailto:soaresmartinsadv@hotmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-[5%] md:px-[10%] animate-fade-in-up bg-midnight overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-10 grayscale"
          alt=""
        />
        <div className="absolute inset-0 bg-midnight/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-widest mb-12 hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t('nav.back_home')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <div>
              <span className="text-bronze text-sm font-bold uppercase tracking-widest block mb-4">{t('contact_page.tag')}</span>
              <h1 className="font-serif text-white text-5xl md:text-7xl leading-tight mb-2">
                {t('contact_page.title')} <br />
                <span className="serif-italic text-bronze">{t('contact_page.titleHighlight')}</span>
              </h1>
              
              <div className="space-y-8 pt-4">
                <div className="flex gap-6 items-start border-l border-bronze/30 pl-8">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">{t('contact_page.location')}</h4>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {t('contact_page.city')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start border-l border-white/5 pl-8">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">{t('contact_page.phone_label')}</h4>
                    <p className="text-text-muted leading-relaxed text-sm">
                      +55 (21) 97954-9241
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start border-l border-white/5 pl-8">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">{t('contact_page.email_label')}</h4>
                    <p className="text-text-muted leading-relaxed text-sm">
                      soaresmartinsadv@hotmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start border-l border-white/5 pl-8">
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">{t('contact_page.hours_label')}</h4>
                    <p className="text-text-muted leading-relaxed text-sm">
                      {t('contact_page.hours_desc')}<br />
                      {t('contact_page.emergency')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-midnight-light/90 backdrop-blur-md border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl mt-12 lg:mt-0">
            <h3 className="text-white font-serif text-3xl mb-8">{t('contact_page.form_title')}</h3>
            
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-bronze block">{t('contact_page.form_name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact_page.form_name_place')}
                    className="w-full bg-midnight border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-bronze transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-bronze block">{t('contact_page.form_phone')}</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(00) 00000-0000"
                      className="w-full bg-midnight border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-bronze transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-bronze block">{t('contact_page.form_email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="email@exemplo.com"
                      className="w-full bg-midnight border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-bronze transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-bronze block">{t('contact_page.form_message')}</label>
                    <span className={`text-[10px] font-bold ${formData.message.length >= maxLength ? 'text-red-500' : 'text-text-muted'}`}>
                      {formData.message.length} / {maxLength}
                    </span>
                  </div>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact_page.form_message_place')}
                    className="w-full bg-midnight border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-bronze transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-bronze text-midnight py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                >
                  <Send size={16} />
                  {t('contact_page.form_submit')}
                </button>
              </form>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-text-muted">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-[10px] uppercase tracking-widest font-medium italic">{t('contact_page.response_time')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
