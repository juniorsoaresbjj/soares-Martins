import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, Link, Check, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  onOpenDiagnostic?: (contextText: string) => void;
}

const faqData: Record<'pt' | 'es' | 'en', {
  tag: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  items: FAQItem[];
}> = {
  pt: {
    tag: 'Dúvidas Frequentes',
    title: 'Perguntas',
    titleHighlight: 'Frequentes.',
    subtitle: 'Esclareça as principais dúvidas jurídicas sobre Direito Condominial e a gestão de condomínios com nossos especialistas.',
    items: [
      {
        question: 'O que o condomínio pode fazer legalmente em caso de inadimplência da cota condominial?',
        answer: 'O condomínio pode realizar a cobrança amigável (extrajudicial) e, se não houver acordo, ingressar com uma Ação de Execução de Título Extrajudicial. Pelo Novo CPC brasileiro, o processo é extremamente célere, permitindo a penhora online de contas bancárias, bens e até mesmo do próprio imóvel devedor (mesmo sendo bem de família) para quitação do débito. Também são aplicados multa legal de 2%, juros de mora convencionados e correção monetária desde o vencimento.'
      },
      {
        question: 'Como lidar juridicamente com perturbação de sossego e barulho excessivo no condomínio?',
        answer: 'A perturbação do sossego é tutelada pelo Código Civil (Art. 1.277) e pela Lei de Contravenções Penais (Art. 42). O síndico deve seguir rigorosamente o rito do Regimento Interno, aplicando advertências e multas progressivas ao morador infrator. Se o problema persistir, cabe ação judicial com pedido de obrigação de não fazer sob pena de multa diária, além de indenização por danos morais. É fundamental documentar todas as ocorrências no livro oficial, reunir áudios, medições de decibéis e testemunhas.'
      },
      {
        question: 'Quais são as responsabilidades civis e criminais do síndico na gestão condominial?',
        answer: 'O síndico responde civil e criminalmente por seus atos ou omissões que causem prejuízos ao condomínio ou a terceiros, conforme o Art. 1.348 do Código Civil. Isso inclui negligência na manutenção preventiva de estruturas (como fachadas, elevadores e marquises), desvio de verbas, ausência de prestação de contas obrigatória, ou contratação de serviços sem a devida aprovação em assembleia. A assessoria jurídica preventiva resguarda o síndico de eventuais responsabilizações pessoais.'
      },
      {
        question: 'O condomínio pode proibir a locação de apartamentos por temporada (como Airbnb)?',
        answer: 'De acordo com o entendimento consolidado pelo Superior Tribunal de Justiça (STJ), a assembleia geral de condomínio possui legitimidade para proibir a locação por curta temporada (como Airbnb) através de alteração na Convenção Condominial, respeitando o quórum de 2/3 de todos os proprietários. Caso não haja proibição expressa na Convenção, a locação é permitida, desde que o inquilino respeite estritamente as normas de segurança, sossego e a destinação estritamente residencial do edifício.'
      },
      {
        question: 'Quais são as regras para realização de obras nas unidades e alteração de fachada?',
        answer: 'Qualquer obra que altere a fachada (como envidraçamento de varanda, alteração de janelas ou pintura externa) exige aprovação em assembleia de acordo com os quóruns da convenção. Já reformas internas nas unidades devem seguir rigorosamente a norma técnica ABNT NBR 16.280. Isso exige a entrega prévia ao síndico de um plano de reforma detalhado com ART ou RRT assinado por engenheiro ou arquiteto habilitado antes do início dos trabalhos, sob pena de embargo judicial da obra.'
      }
    ]
  },
  es: {
    tag: 'Dudas Frecuentes',
    title: 'Preguntas',
    titleHighlight: 'Frecuentes.',
    subtitle: 'Resuelva las principales dudas jurídicas sobre Derecho Condominial y la gestión de condominios con nuestros especialistas.',
    items: [
      {
        question: '¿Qué puede hacer legalmente el condominio en caso de impago de la cuota condominial?',
        answer: 'El condominio puede realizar el cobro amistoso (extrajudicial) y, si no hay acuerdo, entablar una Acción de Ejecución de Título Extrajudicial. Bajo el Nuevo Código de Proceso Civil brasileño, el proceso es sumamente ágil, permitiendo el embargo online de cuentas bancarias, bienes e incluso de la propia vivienda deudora (incluso si es bien de familia) para saldar la deuda. También se aplica una multa del 2%, intereses moratorios acordados y corrección monetaria desde el vencimiento.'
      },
      {
        question: '¿Cómo abordar jurídicamente las perturbaciones de la paz y el ruido excesivo en el condominio?',
        answer: 'La perturbación de la paz está protegida por el Código Civil brasileño (Art. 1.277) y la Ley de Contravenciones Penales. El administrador debe seguir rigurosamente el procedimiento del Reglamento Interno, aplicando advertencias y multas progresivas al residente infractor. Si el problema persiste, se puede interponer una demanda judicial con solicitud de obligación de no hacer bajo pena de multa diaria e indemnización por daños morales. Es fundamental documentar todo en el libro de incidencias y reunir testigos o pruebas.'
      },
      {
        question: '¿Cuáles son las responsabilidades civiles y penales del administrador (síndico) en la gestión?',
        answer: 'El administrador responde civil y penalmente por sus actos u omisiones que causen perjuicios al condominio o a terceros, según el Art. 1.348 del Código Civil. Esto incluye negligencia en el mantenimiento preventivo (fachadas, ascensores, marquesinas), desvío de fondos, falta de rendición de cuentas o contratación de servicios sin aprobación de la asamblea. La asesoría jurídica preventiva protege la responsabilidad personal del administrador.'
      },
      {
        question: '¿Puede el condominio prohibir el alquiler temporal de apartamentos (como Airbnb)?',
        answer: 'Según el criterio establecido por el Superior Tribunal de Justicia (STJ) de Brasil, la asamblea del condominio tiene legitimidad para prohibir el alquiler temporal a corto plazo (tipo Airbnb) mediante una modificación en el Convenio del Condominio, requiriendo el voto de 2/3 de todos los propietarios. Si no hay prohibición expresa, el alquiler está permitido siempre que se respeten estrictamente las normas de seguridad, convivencia y el fin puramente residencial del edificio.'
      },
      {
        question: '¿Cuáles son las reglas para realizar obras en los apartamentos y alterar la fachada?',
        answer: 'Cualquier obra que altere la fachada (como cerramiento de balcones con vidrio, cambio de ventanas o pintura exterior) requiere aprobación en asamblea según los quórums establecidos. Las reformas internas dentro de las unidades deben cumplir estrictamente con la norma técnica ABNT NBR 16.280, requiriendo la entrega previa al administrador de un plano de reforma detallado avalado por un ingeniero o arquitecto (con ART/RRT) antes de iniciar los trabajos.'
      }
    ]
  },
  en: {
    tag: 'Common Questions',
    title: 'Frequently Asked',
    titleHighlight: 'Questions.',
    subtitle: 'Clarify the main legal doubts regarding Condominium Law and building management with our specialists.',
    items: [
      {
        question: 'What can the condominium legally do in case of delinquency of the condo fee?',
        answer: 'The condominium can carry out amicable (out-of-court) collection and, if there is no agreement, file an Action for Execution of Extrajudicial Title. Under the Brazilian New Civil Procedure Code (CPC), the process is extremely fast, allowing online freezing of bank accounts, assets, and even the debtor property itself (even if it is a family home) to settle the debt. A 2% legal fine, agreed-upon default interest, and inflation adjustment from the due date also apply.'
      },
      {
        question: 'How to legally deal with peace disturbance and excessive noise in the condominium?',
        answer: 'Peace disturbance is protected by the Brazilian Civil Code (Art. 1,277) and the Law of Criminal Misdemeanors (Art. 42). The building manager must strictly follow the Internal Regulations procedure, applying warnings and progressive fines to the offending resident. If the problem persists, a lawsuit can be filed requesting an injunction to cease the disturbance under daily fine penalty, alongside moral damages. Documenting all events in the official book and gathering audio and witnesses is essential.'
      },
      {
        question: 'What are the civil and criminal liabilities of the building manager (síndico) in condominium management?',
        answer: 'The manager is civilly and criminally liable for acts or omissions that cause damage to the condominium or third parties, under Art. 1,348 of the Brazilian Civil Code. This includes negligence in preventive maintenance of structures (such as facades, elevators, and canopies), embezzlement, lack of mandatory financial accountability, or contracting services without proper assembly approval. Preventive legal consulting shields the manager from personal liability.'
      },
      {
        question: 'Can the condominium prohibit short-term apartment rentals (such as Airbnb)?',
        answer: 'According to the consolidated understanding of the Superior Court of Justice (STJ), the condominium general assembly has the authority to prohibit short-term rentals (such as Airbnb) by amending the Condominium Convention, which requires a 2/3 quorum of all owners. Without an express prohibition in the Convention, renting is permitted, provided the tenant strictly respects safety, peace, and the building\'s residential purpose.'
      },
      {
        question: 'What are the rules for carrying out remodeling inside units and altering the facade?',
        answer: 'Any remodeling that alters the building facade (such as balcony glass enclosures, window replacements, or external painting) requires assembly approval according to convention quorums. Internal renovations within apartments must strictly comply with the ABNT NBR 16.280 technical standard, requiring the owner to submit a detailed renovation plan with an ART or RRT signed by a licensed engineer or architect to the manager before work begins.'
      }
    ]
  }
};

const FAQSection: React.FC<FAQSectionProps> = ({ onOpenDiagnostic }) => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Normalize language key to ensure it matches record keys
  const langKey = (language === 'pt' || language === 'es' || language === 'en') ? language : 'pt';
  const content = faqData[langKey];

  // Auto-open and scroll to FAQ item if hash is present in URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#faq-item-')) {
        const indexStr = hash.replace('#faq-item-', '');
        const index = parseInt(indexStr, 10);
        if (!isNaN(index) && index >= 0 && index < content.items.length) {
          setOpenIndex(index);
          setTimeout(() => {
            const element = document.getElementById(`faq-item-${index}`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 150);
        }
      }
    };

    // Run on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [content.items.length]);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const handleCopyLink = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#faq-item-${index}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => {
          setCopiedIndex(null);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy link:', err);
      });
  };

  // Construct JSON-LD schema for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': content.items.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-[10%] bg-off-white text-midnight relative" id="faq">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <span className="text-bronze text-[10px] sm:text-xs font-bold uppercase tracking-widest block">
            {content.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight">
            {content.title} <span className="serif-italic text-bronze">{content.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div 
                key={index}
                id={`faq-item-${index}`}
                className="border-b border-gray-200/80 transition-colors duration-300 hover:border-bronze/40"
              >
                <h3 className="m-0 flex items-center justify-between group/item">
                  <button
                    id={headingId}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    type="button"
                    className="flex-grow flex justify-between items-center py-6 text-left focus:outline-none focus-visible:text-bronze transition-colors duration-200 cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg md:text-xl text-midnight font-medium pr-6 hover:text-bronze transition-colors duration-200 leading-snug">
                      {item.question}
                    </span>
                  </button>

                  {/* Actions Group (Copy Link & Toggle Icon) */}
                  <div className="flex items-center gap-2 shrink-0 pl-2">
                    <button
                      onClick={(e) => handleCopyLink(e, index)}
                      type="button"
                      title={langKey === 'pt' ? 'Copiar link direto' : langKey === 'es' ? 'Copiar enlace directo' : 'Copy direct link'}
                      className="w-8 h-8 rounded-full border border-transparent hover:border-bronze/30 hover:bg-bronze/5 flex items-center justify-center text-gray-400 hover:text-bronze transition-all duration-300 cursor-pointer opacity-0 group-hover/item:opacity-100 group-focus-within/item:opacity-100 focus:opacity-100 focus:outline-none focus:border-bronze/50"
                    >
                      {copiedIndex === index ? (
                        <Check size={14} className="text-emerald-600 animate-pulse" />
                      ) : (
                        <Link size={14} />
                      )}
                    </button>
                    
                    <button
                      onClick={() => handleToggle(index)}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={`w-8 h-8 rounded-full border border-gray-200 hover:border-bronze hover:bg-bronze/5 flex items-center justify-center transition-all duration-300 text-bronze cursor-pointer ${isOpen ? 'border-bronze bg-bronze/5' : ''}`}
                    >
                      <Plus 
                        size={14} 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} 
                      />
                    </button>
                  </div>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.25, ease: "linear" }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-6 md:pr-12 text-gray-600 text-sm sm:text-base leading-relaxed text-justify flex flex-col items-start gap-4">
                        <p>{item.answer}</p>
                        {onOpenDiagnostic && (
                          <button
                            onClick={() => {
                              const promptText = langKey === 'pt'
                                ? `Gostaria de um detalhamento com IA sobre esta dúvida do FAQ:\n\nPergunta: ${item.question}\n\nResposta padrão: ${item.answer}\n\nPor favor, faça uma análise complementar e aponte os caminhos legais aplicáveis.`
                                : langKey === 'es'
                                ? `Me gustaría un análisis detallado con IA sobre esta pregunta de las preguntas frecuentes:\n\nPregunta: ${item.question}\n\nRespuesta estándar: ${item.answer}\n\nPor favor, proporcione un análisis complementario e indique los caminos legales aplicables.`
                                : `I would like an AI detailed analysis regarding this FAQ question:\n\nQuestion: ${item.question}\n\nStandard Answer: ${item.answer}\n\nPlease provide a complementary analysis and point out the applicable legal avenues.`;
                              onOpenDiagnostic(promptText);
                            }}
                            type="button"
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-bronze hover:text-white bg-bronze/10 hover:bg-bronze border border-bronze/30 hover:border-bronze rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-bronze"
                          >
                            <Sparkles size={14} className="shrink-0 animate-pulse" />
                            {langKey === 'pt' ? 'Pedir detalhamento por IA' : langKey === 'es' ? 'Pedir detalles por IA' : 'Request AI Detail'}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic SEO Support Widget */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5 italic">
            <HelpCircle size={12} className="text-bronze" />
            {langKey === 'pt' && 'Possui outra dúvida jurídica? Entre em contato com nossos advogados especialistas.'}
            {langKey === 'es' && '¿Tiene otra duda jurídica? Póngase en contacto con nuestros abogados especialistas.'}
            {langKey === 'en' && 'Have another legal question? Get in touch with our expert lawyers.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
