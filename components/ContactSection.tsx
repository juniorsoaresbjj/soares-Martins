
import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, whatsapp, email, message } = formData;
    
    const subject = encodeURIComponent(`Novo Contato: ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\n` +
      `WhatsApp/Telefone: ${whatsapp}\n` +
      `E-mail: ${email}\n\n` +
      `Mensagem:\n${message}`
    );
    
    window.location.href = `mailto:soaresmartinsadv@hotmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-32 px-[10%] bg-off-white text-midnight" id="contato">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row shadow-2xl rounded-[40px] overflow-hidden">
        {/* Info Panel */}
        <div className="lg:w-2/5 bg-midnight text-white p-16 flex flex-col justify-between">
          <div>
            <span className="text-bronze text-[10px] font-bold uppercase tracking-widest mb-4 block">{t('contact.tag')}</span>
            <h2 className="font-serif text-5xl mb-8 leading-tight">{t('contact.title')} <br /> <span className="serif-italic text-bronze">{t('contact.titleHighlight')}</span></h2>
            <p className="text-text-muted mb-16 text-lg">{t('contact.desc')}</p>
            
            <div className="space-y-10">
              <a href="https://wa.me/5521979549241?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20escrit%C3%B3rio%20Soares%20Martins." target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-midnight transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">{t('contact.phone')}</p>
                  <p className="font-bold">+55 (21) 97954-9241</p>
                </div>
              </a>
              <a href="mailto:soaresmartinsadv@hotmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-midnight transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">{t('contact.email')}</p>
                  <p className="font-bold text-sm md:text-base">soaresmartinsadv@hotmail.com</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/10 text-xs text-text-muted italic">
            {t('contact.disclaimer')}
          </div>
        </div>

        {/* Form Panel */}
        <div className="lg:w-3/5 bg-white p-16 md:p-24">
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group border-b border-gray-200 focus-within:border-bronze transition-colors py-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none py-2 text-lg font-medium" 
                  placeholder={t('contact.form.namePlace')} 
                />
              </div>
              <div className="group border-b border-gray-200 focus-within:border-bronze transition-colors py-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">{t('contact.form.whatsapp')}</label>
                <input 
                  type="tel" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none py-2 text-lg font-medium" 
                  placeholder="(00) 00000-0000" 
                />
              </div>
            </div>

            <div className="group border-b border-gray-200 focus-within:border-bronze transition-colors py-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">{t('contact.form.email')}</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none py-2 text-lg font-medium" 
                placeholder="nome@condominio.com.br" 
              />
            </div>

            <div className="group border-b border-gray-200 focus-within:border-bronze transition-colors py-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2">{t('contact.form.message')}</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={2} 
                className="w-full bg-transparent outline-none py-2 text-lg font-medium resize-none" 
                placeholder={t('contact.form.messagePlace')} 
              />
            </div>

            <button 
              type="submit"
              className="block w-full bg-midnight text-white py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-bronze hover:text-midnight transition-all duration-500 shadow-xl transform active:scale-95 text-center"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
