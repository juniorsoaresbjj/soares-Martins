import { Language } from './index';

export interface EditalData {
  title: string;
  subtitle: string;
  address: string;
  p1Date: string;
  p2Date: string;
  process: string;
  court: string;
  iptu: string;
  rgi: string;
  val: string;
  p2Val: string;
  description: string;
  checklist: Array<{ title: string; desc: string; risk: string }>;
  faqs: Array<{ q: string; a: string }>;
  modal: {
    title: string;
    sections: Array<{ title: string; text: string }>;
  };
}

export interface EditalCommonTranslations {
  home: string;
  practiceAreas: string;
  auctionsTitle: string;
  backToAuctions: string;
  badgeTag: string;
  imageIllustrative: string;
  valuationLabel: string;
  p1Title: string;
  p1Desc: string;
  p2Title: string;
  p2Desc: string;
  minBidLabel: string;
  btnViewDetails: string;
  btnWhatsApp: string;
  specsTitle: string;
  specsProcess: string;
  specsCourt: string;
  specsValuation: string;
  specsMinBidP2: string;
  specsIptu: string;
  specsRgi: string;
  specsTaxes: string;
  specsCondo: string;
  subrogatedOk: string;
  condoAuditOk: string;
  pillarsTag: string;
  pillarsTitle: string;
  pillarsSub: string;
  modalTitle: string;
  modalClose: string;
  faqTitle: string;
  faqSub: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaWA: string;
  ctaEmail: string;
  ctaFooterNote: string;
  relatedTitle: string;
}

export const editalCommon: Record<Language, EditalCommonTranslations> = {
  pt: {
    home: 'Início',
    practiceAreas: 'Áreas de Atuação',
    auctionsTitle: 'Assessoria em Leilões Judiciais',
    backToAuctions: 'Voltar para Assessoria em Leilões Judiciais',
    badgeTag: 'Leilão Judicial de Imóveis • Rio de Janeiro/RJ',
    imageIllustrative: 'Imagem meramente ilustrativa / Fachada do Edifício',
    valuationLabel: 'Valor de Avaliação Judicial',
    p1Title: '1ª Praça Judicial',
    p1Desc: '100% da Avaliação',
    p2Title: '2ª Praça Judicial',
    p2Desc: 'Até 50% de Desconto',
    minBidLabel: 'Lance Mínimo:',
    btnViewDetails: 'Análise Prévia do Edital (Ver Detalhes)',
    btnWhatsApp: 'Solicitar Parecer via WhatsApp',
    specsTitle: 'Ficha Técnica da Auditoria do Leilão',
    specsProcess: 'Processo Judicial:',
    specsCourt: 'Comarca / Vara:',
    specsValuation: 'Avaliação Oficial:',
    specsMinBidP2: 'Lance Mínimo 2ª Praça:',
    specsIptu: 'Inscrição IPTU:',
    specsRgi: 'Matrícula RGI:',
    specsTaxes: 'Sub-rogação Impostos:',
    specsCondo: 'Passivos Condomínio:',
    subrogatedOk: 'Sub-rogação sobre o preço (Art. 130 CTN)',
    condoAuditOk: 'Análise de Edital e Matriz de Riscos TJRJ',
    pillarsTag: 'Metodologia Interativa',
    pillarsTitle: '4 Pilares da Auditoria de Leilão Judicial',
    pillarsSub: 'Clique em cada etapa para examinar os pontos críticos auditados em nosso parecer prévio.',
    modalTitle: 'Resumo Didático e Análise Técnica do Edital',
    modalClose: 'Fechar Resumo',
    faqTitle: 'Perguntas Frequentes sobre o Leilão',
    faqSub: 'Dúvidas técnicas e jurídicas sobre avaliação, edital e imissão na posse',
    ctaTitle: 'Fale Com Nossa Equipe Especializada',
    ctaDesc: 'O escritório Soares Martins Advogados oferece auditoria jurídica completa e suporte especializado para garantir máxima segurança em sua arrematação.',
    ctaWA: 'Atendimento via WhatsApp',
    ctaEmail: 'Enviar E-mail Corporativo',
    ctaFooterNote: 'Atendimento presencial em Ipanema/RJ e suporte jurídico virtual para todo o Brasil.',
    relatedTitle: 'Conteúdos e Serviços Relacionados'
  },
  es: {
    home: 'Inicio',
    practiceAreas: 'Áreas de Actuación',
    auctionsTitle: 'Asesoría en Subastas Judiciales',
    backToAuctions: 'Volver a Asesoría en Subastas Judiciales',
    badgeTag: 'Subasta Judicial de Inmuebles • Río de Janeiro/RJ',
    imageIllustrative: 'Imagen meramente ilustrativa / Fachada del Edificio',
    valuationLabel: 'Valor de Evaluación Judicial',
    p1Title: '1ª Subasta Judicial',
    p1Desc: '100% de la Evaluación',
    p2Title: '2ª Subasta Judicial',
    p2Desc: 'Hasta 50% de Descuento',
    minBidLabel: 'Puja Mínima:',
    btnViewDetails: 'Análisis Previo del Edicto (Ver Detalles)',
    btnWhatsApp: 'Solicitar Dictamen por WhatsApp',
    specsTitle: 'Ficha Técnica de la Auditoría de Subasta',
    specsProcess: 'Proceso Judicial:',
    specsCourt: 'Juzgado / Comarca:',
    specsValuation: 'Evaluación Oficial:',
    specsMinBidP2: 'Puja Mínima 2ª Subasta:',
    specsIptu: 'Inscripción IPTU:',
    specsRgi: 'Matrícula RGI:',
    specsTaxes: 'Subrogación Impuestos:',
    specsCondo: 'Pasivos Condominio:',
    subrogatedOk: 'Subrogación sobre el precio (Art. 130 CTN)',
    condoAuditOk: 'Análisis del Edicto y Matriz de Riesgos TJRJ',
    pillarsTag: 'Metodología Interactiva',
    pillarsTitle: '4 Pilares de la Auditoría de Subasta Judicial',
    pillarsSub: 'Haga clic en cada etapa para examinar los puntos críticos auditados en nuestro dictamen previo.',
    modalTitle: 'Resumen Didáctico y Análisis Técnico del Edicto',
    modalClose: 'Cerrar Resumen',
    faqTitle: 'Preguntas Frecuentes sobre la Subasta',
    faqSub: 'Dudas técnicas y jurídicas sobre evaluación, edicto e imisión en la posesión',
    ctaTitle: 'Hable Con Nuestro Equipo Especializado',
    ctaDesc: 'El despacho Soares Martins Advogados ofrece auditoría jurídica completa y soporte especializado para garantizar máxima seguridad en su adjudicación.',
    ctaWA: 'Atención por WhatsApp',
    ctaEmail: 'Enviar Email Corporativo',
    ctaFooterNote: 'Atención presencial en Ipanema/RJ y soporte jurídico virtual para todo Brasil.',
    relatedTitle: 'Contenidos y Servicios Relacionados'
  },
  en: {
    home: 'Home',
    practiceAreas: 'Practice Areas',
    auctionsTitle: 'Judicial Auctions Advisory',
    backToAuctions: 'Back to Judicial Auctions Advisory',
    badgeTag: 'Judicial Real Estate Auction • Rio de Janeiro/RJ',
    imageIllustrative: 'Illustrative image / Building Facade',
    valuationLabel: 'Judicial Valuation Amount',
    p1Title: '1st Judicial Bidding',
    p1Desc: '100% Valuation',
    p2Title: '2nd Judicial Bidding',
    p2Desc: 'Up to 50% Discount',
    minBidLabel: 'Minimum Bid:',
    btnViewDetails: 'Prior Notice Analysis (View Details)',
    btnWhatsApp: 'Request Legal Opinion via WhatsApp',
    specsTitle: 'Auction Audit Specs Sheet',
    specsProcess: 'Court Lawsuit:',
    specsCourt: 'Court / Jurisdiction:',
    specsValuation: 'Official Valuation:',
    specsMinBidP2: '2nd Bidding Min Bid:',
    specsIptu: 'IPTU Tax Registration:',
    specsRgi: 'Land Registry (RGI):',
    specsTaxes: 'Tax Subrogation:',
    specsCondo: 'Condo Fee Liabilities:',
    subrogatedOk: 'Subrogation over price (Tax Code Art. 130)',
    condoAuditOk: 'Notice Analysis & TJRJ Risk Matrix',
    pillarsTag: 'Interactive Methodology',
    pillarsTitle: '4 Pillars of Judicial Auction Audit',
    pillarsSub: 'Click each step to examine critical points audited in our prior legal opinion.',
    modalTitle: 'Didactic Summary & Technical Notice Analysis',
    modalClose: 'Close Summary',
    faqTitle: 'Frequently Asked Questions about the Auction',
    faqSub: 'Technical & legal questions about valuation, notice, and writ of possession',
    ctaTitle: 'Talk To Our Specialized Team',
    ctaDesc: 'Soares Martins Advogados provides comprehensive legal audit and specialized support to ensure maximum security in your property acquisition.',
    ctaWA: 'Support via WhatsApp',
    ctaEmail: 'Send Corporate Email',
    ctaFooterNote: 'In-person consultation in Ipanema/RJ and virtual legal support throughout Brazil.',
    relatedTitle: 'Related Content and Services'
  }
};

// Checklists templates per language
const defaultChecklist: Record<Language, Array<{ title: string; desc: string; risk: string }>> = {
  pt: [
    { title: '1. Exame da Matrícula e Ônus Reais', desc: 'Levantamento detalhado de hipotecas, penhoras, indisponibilidades e averbações no RGI.', risk: 'Análise de Ônus' },
    { title: '2. Análise de Débitos Propter Rem', desc: 'Verificação da atribuição de responsabilidade por débitos tributários e condominiais conforme o edital.', risk: 'Análise de Passivos' },
    { title: '3. Regularidade Processual das Intimações', desc: 'Verificação da citação e intimação válida do executado, coproprietários e credores garantidores.', risk: 'Verificação de Nulidades' },
    { title: '4. Rito da Carta de Arrematação e Imissão', desc: 'Acompanhamento dos atos judiciais e cartorários para expedição da carta e mandado de imissão na posse.', risk: 'Procedimento de Posse' }
  ],
  es: [
    { title: '1. Examen de Matrícula y Cargas Reales', desc: 'Revisión detallada de hipotecas, embargos e indisponibilidades en el Registro de Propiedad.', risk: 'Análisis de Cargas' },
    { title: '2. Análisis de Deudas Propter Rem', desc: 'Verificación de la atribución de responsabilidad por deudas tributarias y de condominio.', risk: 'Análisis de Pasivos' },
    { title: '3. Regularidad Procesal de Notificaciones', desc: 'Verificación de la citación y notificación válida del ejecutado, copropietarios y acreedores.', risk: 'Verificación de Nulidades' },
    { title: '4. Procedimiento de Adjudicación e Imisión', desc: 'Seguimiento de actos judiciales y notariales para expedición de la carta e imisión en la posesión.', risk: 'Procedimiento de Posesión' }
  ],
  en: [
    { title: '1. Title Deed & Encumbrances Review', desc: 'Detailed review of mortgages, liens, injunctions, and annotations in the Land Registry.', risk: 'Encumbrance Audit' },
    { title: '2. Analysis of Propter Rem Liabilities', desc: 'Verification of tax and condo debt liabilities according to the auction notice.', risk: 'Liabilities Audit' },
    { title: '3. Procedural Validity of Summons', desc: 'Checking valid summons and notices served to debtor, co-owners, and lienholders.', risk: 'Nullity Check' },
    { title: '4. Bidding Deed & Writ of Possession', desc: 'Tracking court and notary steps for auction deed issuance and writ of possession.', risk: 'Possession Process' }
  ]
};

// Modal template per language
const defaultModal: Record<Language, { title: string; sections: Array<{ title: string; text: string }> }> = {
  pt: {
    title: 'Análise Técnica do Edital de Leilão',
    sections: [
      { title: '1. Sub-rogação de Débitos Tributários', text: 'Conforme art. 130, parágrafo único, do CTN, os débitos de IPTU e taxa de incêndio sub-rogam-se sobre o preço depositado, desonerando o arrematante de dívidas fiscais anteriores.' },
      { title: '2. Cotas Condominiais Pendentes', text: 'Análise minuciosa das disposições do edital para conferência de responsabilidade e jurisprudência pacificada do TJRJ.' },
      { title: '3. Procedimento de Imissão na Posse', text: 'Após o registro da carta de arrematação no RGI competente, requer-se ao juízo o mandado de imissão na posse para desocupação célere.' },
      { title: '4. Proposta de Pagamento Parcelado', text: 'Nos termos do art. 895 do CPC, admite-se proposta de parcelamento (mínimo de 25% à vista e até 30 parcelas corrigidas), mediante protocolo prévio.' }
    ]
  },
  es: {
    title: 'Análisis Técnico del Edicto de Subasta',
    sections: [
      { title: '1. Subrogación de Deudas Tributarias', text: 'Según art. 130 del CTN, las deudas de IPTU e impuestos se subrogan sobre el precio depositado, eximiendo al adjudicatario de deudas previas.' },
      { title: '2. Cuotas Condominiales Pendientes', text: 'Análisis exhaustivo del edicto para verificar la responsabilidad de deudas y jurisprudencia del TJRJ.' },
      { title: '3. Procedimiento de Imisión en la Posesión', text: 'Tras el registro de la carta de adjudicación en el Registro de la Propiedad, se solicita la imisión en la posesión para entrega rápida.' },
      { title: '4. Propuesta de Pago Aconsejable en Cuotas', text: 'Bajo el art. 895 del CPC, se permite propuesta de pago a plazos (mínimo 25% al contado y hasta 30 cuotas), previo protocolo.' }
    ]
  },
  en: {
    title: 'Technical Auction Notice Analysis',
    sections: [
      { title: '1. Tax Debt Subrogation', text: 'Under Tax Code Art. 130, IPTU and property taxes are subrogated onto the winning bid amount, discharging prior tax liabilities.' },
      { title: '2. Outstanding Condo Fees', text: 'Detailed notice audit to verify debt responsibility according to TJRJ court rulings.' },
      { title: '3. Writ of Possession Process', text: 'Upon registering the auction deed in the Land Registry, a court writ of possession is requested for prompt property takeover.' },
      { title: '4. Installment Payment Option', text: 'Under Civil Procedure Code Art. 895, installment proposals (min 25% down payment and up to 30 monthly installments) are permitted prior to bidding.' }
    ]
  }
};

export const editaisData: Record<string, Record<Language, EditalData>> = {
  // 1. Copacabana - M. V. Castro 32
  'copacabana-viveiros': {
    pt: {
      title: 'Leilão Judicial de Apartamento em Copacabana',
      subtitle: 'Rua Ministro Viveiros de Castro, nº 32 — Copacabana, Rio de Janeiro/RJ | Análise Preventiva de Edital e Viabilidade Processual',
      address: 'Rua Ministro Viveiros de Castro, 32 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '24/08/2026 às 14:00h',
      p2Date: '03/09/2026 às 14:00h',
      process: '0084512-19.2018.8.19.0001',
      court: '5ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.123.456-7',
      rgi: '45.123 (5º RGI/RJ)',
      val: 'R$ 480.000,00',
      p2Val: 'R$ 240.000,00',
      description: 'Apartamento residencial situado no coração de Copacabana, a poucos metros da praia e do metrô Cardeal Arcoverde. Oportunidade sob auditoria preventiva de edital e débitos condominiais.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação oficial do imóvel no leilão judicial da Rua M. V. Castro 32 em Copacabana?", a: "O apartamento possui avaliação judicial fixada em R$ 480.000,00. Na 1ª Praça (24/08/2026), o lance mínimo é correspondente a 100% da avaliação. Na 2ª Praça (03/09/2026), admite-se lance mínimo com até 50% de desconto (R$ 240.000,00)." },
        { q: "O arrematante deste apartamento em Copacabana assume débitos anteriores de IPTU e condomínio?", a: "Para IPTU e taxas públicas, aplica-se a regra do art. 130 do CTN (sub-rogação sobre o preço). Quanto ao condomínio, nossa equipe realiza parecer prévio confrontando a redação do edital com a jurisprudência sumulada do TJRJ." },
        { q: "Como funciona a imissão judicial na posse no Rio de Janeiro?", a: "Concluída a arrematação e lavrado o auto, requer-se a expedição da Carta de Arrematação e Mandado de Imissão na Posse diretamente nos autos da execução." },
        { q: "É possível protocolar proposta de pagamento parcelado?", a: "Sim, nos termos do art. 895 do CPC (sinal de no mínimo 25% à vista e saldo em até 30 parcelas mensais)." },
        { q: "Como solicitar a auditoria jurídica completa do edital?", a: "Entre em contato via WhatsApp com o escritório Soares Martins Advogados para emissão do parecer fundamentado de viabilidade." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Copacabana',
      subtitle: 'Calle Ministro Viveiros de Castro, nº 32 — Copacabana, Río de Janeiro/RJ | Análisis Preventivo de Edicto y Viabilidad Procesal',
      address: 'Calle Ministro Viveiros de Castro, 32 — Copacabana, Río de Janeiro - RJ',
      p1Date: '24/08/2026 a las 14:00h',
      p2Date: '03/09/2026 a las 14:00h',
      process: '0084512-19.2018.8.19.0001',
      court: '5º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.123.456-7',
      rgi: '45.123 (5º RGI/RJ)',
      val: 'R$ 480.000,00',
      p2Val: 'R$ 240.000,00',
      description: 'Apartamento residencial situado en el corazón de Copacabana, a pocos metros de la playa y del metro Cardeal Arcoverde. Oportunidad bajo auditoría preventiva de edicto y deudas de condominio.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación oficial del inmueble en la subasta de la Calle M. V. Castro 32?", a: "El apartamento posee evaluación judicial fijada en R$ 480.000,00. En la 1ª Subasta (24/08/2026), la puja mínima equivale al 100%. En la 2ª Subasta (03/09/2026), se admite puja mínima con 50% de descuento (R$ 240.000,00)." },
        { q: "¿El adjudicatario asume deudas anteriores de IPTU y condominio?", a: "Para tributos se aplica el art. 130 del CTN (subrogación sobre el precio). Sobre las cuotas de condominio, emitimos un dictamen analizando la redacción exacta del edicto." },
        { q: "¿Cómo funciona la imisión judicial en la posesión en Río de Janeiro?", a: "Concluida la subasta, se solicita la expedición de la Carta de Adjudicación y el Mandato de Imisión en la Posesión ante el juzgado." },
        { q: "¿Es posible presentar propuesta de pago a plazos?", a: "Sí, según el art. 895 del CPC (al menos 25% al contado y el saldo en hasta 30 cuotas mensuales)." },
        { q: "¿Cómo solicitar la auditoría jurídica completa del edicto?", a: "Contacte vía WhatsApp con el despacho Soares Martins Advogados para la emisión del dictamen previo." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Copacabana',
      subtitle: 'Ministro Viveiros de Castro St, #32 — Copacabana, Rio de Janeiro/RJ | Prior Notice Audit and Procedural Feasibility',
      address: 'Ministro Viveiros de Castro St, 32 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '08/24/2026 at 2:00 PM',
      p2Date: '09/03/2026 at 2:00 PM',
      process: '0084512-19.2018.8.19.0001',
      court: '5th Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.123.456-7',
      rgi: '45.123 (5th Land Registry)',
      val: 'R$ 480,000.00',
      p2Val: 'R$ 240,000.00',
      description: 'Residential apartment in the heart of Copacabana, steps from the beach and Cardeal Arcoverde subway. Opportunity under prior notice audit and condo fee verification.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation of the property on M. V. Castro St #32?", a: "Official court valuation is R$ 480,000.00. 1st Bidding requires 100% valuation bid. 2nd Bidding allows up to 50% discount (R$ 240,000.00)." },
        { q: "Does the buyer assume prior tax and condo fee liabilities?", a: "For tax debts, Tax Code Art. 130 subrogates debts onto the bid price. For condo fees, our team issues a prior legal opinion analyzing notice specifics." },
        { q: "How does the court writ of possession work in Rio de Janeiro?", a: "Once bidding is confirmed and recorded, a petition for writ of possession is filed directly in court to obtain keys." },
        { q: "Is an installment payment proposal permitted?", a: "Yes, under CPC Art. 895 (min 25% down payment and up to 30 monthly installments)." },
        { q: "How to request a complete legal audit of this auction notice?", a: "Contact Soares Martins Advogados via WhatsApp to request a comprehensive legal feasibility opinion." }
      ]
    }
  },

  // 2. Copacabana - Atlântica 2376
  'copacabana-atlantica': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Av. Atlântica nº 2.376',
      subtitle: 'Avenida Atlântica, nº 2.376, Apto 203 — Copacabana, Rio de Janeiro/RJ | Edifício Assú na Orla de Copacabana',
      address: 'Avenida Atlântica, 2376 - Apto 203 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '03/08/2026 às 13:00h',
      p2Date: '05/08/2026 às 13:00h',
      process: '0012345-67.2019.8.19.0001',
      court: '12ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.452.123-1',
      rgi: '88.912 (5º RGI/RJ)',
      val: 'R$ 1.350.000,00',
      p2Val: 'R$ 675.000,00',
      description: 'Apartamento 203 com 119 m² de área no Edifício Assú, localizado na orla de Copacabana. Sala, 3 quartos (2 suítes), entrada suplementar pela Rua Domingos Ferreira 25.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação do apartamento na Av. Atlântica 2376?", a: "O imóvel tem avaliação de R$ 1.350.000,00. Na 2ª Praça, o lance mínimo é R$ 675.000,00 (50% do valor avaliado)." },
        { q: "Quais são as características do apartamento no Edifício Assú?", a: "Possui 119 m², sala, 3 quartos (2 suítes), banheiro social, cozinha, área e portaria com entrada pela Av. Atlântica e Rua Domingos Ferreira." },
        { q: "Como é auditada a situação fiscal e de condomínio?", a: "O escritório emite parecer com a análise das certidões de ônus reais, débitos de IPTU e passivos de condomínio." },
        { q: "Qual é o procedimento para arrematação com segurança jurídica?", a: "Realizamos auditoria prévia completa do edital, certidões e representação no leilão até a imissão na posse." },
        { q: "Como agendar uma consulta com o advogado especialista?", a: "Basta clicar no botão de atendimento via WhatsApp ou enviar mensagem direta." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Av. Atlântica nº 2.376',
      subtitle: 'Avenida Atlântica, nº 2.376, Apto 203 — Copacabana, Río de Janeiro/RJ | Edificio Assú en la Costa de Copacabana',
      address: 'Avenida Atlântica, 2376 - Apto 203 — Copacabana, Río de Janeiro - RJ',
      p1Date: '03/08/2026 a las 13:00h',
      p2Date: '05/08/2026 a las 13:00h',
      process: '0012345-67.2019.8.19.0001',
      court: '12º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.452.123-1',
      rgi: '88.912 (5º RGI/RJ)',
      val: 'R$ 1.350.000,00',
      p2Val: 'R$ 675.000,00',
      description: 'Apartamento 203 con 119 m² en el Edificio Assú, frente a la playa de Copacabana. Salón, 3 dormitorios (2 suites), entrada secundaria por la Calle Domingos Ferreira 25.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación del apartamento en Av. Atlântica 2376?", a: "Evaluación oficial de R$ 1.350.000,00. En 2ª Subasta, la puja mínima es R$ 675.000,00 (50% de descuento)." },
        { q: "¿Cuáles son las características del apartamento en el Edificio Assú?", a: "119 m², salón, 3 habitaciones (2 suites), baño social, cocina, área de servicio y accesos por Av. Atlântica y Calle Domingos Ferreira." },
        { q: "¿Cómo se auditan las deudas de IPTU y condominio?", a: "Emitimos dictamen verificando el registro de propiedad y certidones de pasivos." },
        { q: "¿Cuál es el procedimiento para la adjudicación segura?", a: "Realizamos auditoría previa, revisión procesal y acompañamiento hasta la posesión." },
        { q: "¿Cómo consultar con el especialista?", a: "Haga clic en el botón de atención por WhatsApp para orientación inmediata." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Atlântica Ave #2,376',
      subtitle: 'Atlântica Ave, #2,376, Apt 203 — Copacabana, Rio de Janeiro/RJ | Edifício Assú Beachfront',
      address: 'Atlântica Ave, 2376 - Apt 203 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '08/03/2026 at 1:00 PM',
      p2Date: '08/05/2026 at 1:00 PM',
      process: '0012345-67.2019.8.19.0001',
      court: '12th Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.452.123-1',
      rgi: '88.912 (5th Land Registry)',
      val: 'R$ 1,350,000.00',
      p2Val: 'R$ 675,000.00',
      description: 'Apartment 203 with 119 sqm in Edifício Assú on Copacabana beachfront. Living room, 3 bedrooms (2 suites), secondary entrance at 25 Domingos Ferreira St.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the valuation of the apartment on Atlântica Ave #2,376?", a: "Official court valuation is R$ 1,350,000.00. 2nd Bidding min bid is R$ 675,000.00 (50% discount)." },
        { q: "What are the key features of Edifício Assú unit?", a: "119 sqm area, 3 bedrooms (2 suites), living room, kitchen, and dual building access on Atlântica Ave and Domingos Ferreira St." },
        { q: "How are tax and condo fee liabilities audited?", a: "We issue a written legal opinion reviewing title deeds, tax records, and lawsuit proceedings." },
        { q: "What is the process for safe auction bidding?", a: "Complete prior notice audit, risk matrix evaluation, and full legal assistance until writ of possession." },
        { q: "How to contact the legal specialist?", a: "Click the WhatsApp support button to speak directly with our team." }
      ]
    }
  },

  // 3. Urca - Marechal Cantuária 75
  'urca-cantuaria': {
    pt: {
      title: 'Leilão Judicial de Casa na Rua Marechal Cantuária nº 75 — Urca',
      subtitle: 'Rua Marechal Cantuária, nº 75 — Urca, Rio de Janeiro/RJ | Casa Unifamiliar em Bairro Bucólico da Zona Sul',
      address: 'Rua Marechal Cantuária, 75 — Urca, Rio de Janeiro - RJ',
      p1Date: '19/08/2026 às 12:00h',
      p2Date: '25/08/2026 às 12:00h',
      process: '0152341-88.2020.8.19.0001',
      court: '2ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.422.940-7',
      rgi: '32.105 (2º RGI/RJ)',
      val: 'R$ 3.820.000,00',
      p2Val: 'R$ 1.910.000,00',
      description: 'Casa residencial unifamiliar com 321 m² de área construída em terreno nobre da Urca. Edificada em 1938 em rua bucólica da Zona Sul do Rio de Janeiro. Ativo imobiliário raríssimo.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação oficial da casa na Urca?", a: "Avaliação judicial de R$ 3.820.000,00. Na 2ª Praça, autoriza-se lance mínimo de R$ 1.910.000,00." },
        { q: "Quais são os diferenciais do imóvel na Rua Marechal Cantuária 75?", a: "Trata-se de casa unifamiliar de 321 m² construída em 1938 na bucólica Urca, bairro de altíssima valorização." },
        { q: "Como funciona a verificação de gravames e certidão de ônus reais?", a: "Revisamos integralmente a matrícula junto ao 2º Cartório de Registro de Imóveis para apontamento de indisponibilidades ou penhoras." },
        { q: "A arrematação desonera dívidas fiscais antigas?", a: "Sim, os débitos de IPTU são sub-rogados sobre o valor depositado na arrematação (art. 130 do CTN)." },
        { q: "Como solicitar o parecer jurídico de viabilidade na Urca?", a: "Consulte nosso escritório pelo WhatsApp para recebimento do relatório técnico minucioso." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Casa en Calle Marechal Cantuária nº 75 — Urca',
      subtitle: 'Calle Marechal Cantuária, nº 75 — Urca, Río de Janeiro/RJ | Casa Unifamiliar en Barrio Bucólico',
      address: 'Calle Marechal Cantuária, 75 — Urca, Río de Janeiro - RJ',
      p1Date: '19/08/2026 a las 12:00h',
      p2Date: '25/08/2026 a las 12:00h',
      process: '0152341-88.2020.8.19.0001',
      court: '2º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.422.940-7',
      rgi: '32.105 (2º RGI/RJ)',
      val: 'R$ 3.820.000,00',
      p2Val: 'R$ 1.910.000,00',
      description: 'Casa residencial unifamiliar con 321 m² de área construida en terreno noble de Urca. Edificada en 1938 en calle bucólica de la Zona Sur de Río de Janeiro. Activo rarísimo.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación oficial de la casa en Urca?", a: "Evaluación judicial de R$ 3.820.000,00. En 2ª Subasta, se autoriza puja mínima de R$ 1.910.000,00." },
        { q: "¿Cuáles son los diferenciales del inmueble en Urca?", a: "Casa unifamiliar de 321 m² construida en 1938 en una de las calles más exclusivas y tranquilas de Río." },
        { q: "¿Cómo se verifican cargas y gravámenes?", a: "Revisamos la matrícula en el 2º Registro de la Propiedad para descartar riesgos de nulidad." },
        { q: "¿Se saldan las deudas fiscales anteriores?", a: "Sí, los tributos de IPTU se subrogan sobre el valor de la oferta ganadora (art. 130 del CTN)." },
        { q: "¿Cómo solicitar el dictamen previo?", a: "Envíenos un mensaje por WhatsApp para recibir el análisis jurídico completo." }
      ]
    },
    en: {
      title: 'Judicial Auction of House on Marechal Cantuária St #75 — Urca',
      subtitle: 'Marechal Cantuária St, #75 — Urca, Rio de Janeiro/RJ | Single-Family House in Bucolic South Zone Neighborhood',
      address: 'Marechal Cantuária St, 75 — Urca, Rio de Janeiro - RJ',
      p1Date: '08/19/2026 at 12:00 PM',
      p2Date: '08/25/2026 at 12:00 PM',
      process: '0152341-88.2020.8.19.0001',
      court: '2nd Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.422.940-7',
      rgi: '32.105 (2nd Land Registry)',
      val: 'R$ 3,820,000.00',
      p2Val: 'R$ 1,910,000.00',
      description: 'Single-family house with 321 sqm built area on prime land in Urca. Constructed in 1938 in a peaceful tree-lined street. Extremely rare asset in South Zone Rio.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation of the house in Urca?", a: "Court valuation is R$ 3,820,000.00. 2nd Bidding min bid is R$ 1,910,000.00 (50% discount)." },
        { q: "What makes this Urca property unique?", a: "321 sqm standalone single-family house built in 1938 in Urca, one of Rio's safest and most exclusive neighborhoods." },
        { q: "How are liens and title encumbrances audited?", a: "Full examination of 2nd Land Registry records and court execution files to prevent procedural flaws." },
        { q: "Are past municipal tax debts discharged?", a: "Yes, municipal taxes subrogate onto the winning bid proceeds pursuant to Tax Code Art. 130." },
        { q: "How to request a legal feasibility opinion for Urca?", a: "Contact Soares Martins Advogados on WhatsApp to obtain our detailed legal audit report." }
      ]
    }
  },

  // 4. Copacabana - Prado Júnior 298
  'copacabana-prado-junior': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Av. Prado Júnior nº 298 — Apto 1003',
      subtitle: 'Avenida Prado Júnior, nº 298, Apto 1003 — Copacabana, Rio de Janeiro/RJ | 42 m² de área privativa',
      address: 'Av. Prado Júnior, 298 - Apto 1003 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '17/08/2026 às 14:00h',
      p2Date: '19/08/2026 às 14:00h',
      process: '0098123-11.2021.8.19.0001',
      court: '3ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.691.500-3',
      rgi: '119.755 (5º RGI/RJ)',
      val: 'R$ 520.000,00',
      p2Val: 'R$ 312.000,00',
      description: 'Apartamento 1003 com 42 m², fundos, sem vaga. Edifício residencial construído em 1957 com 12 andares, 2 elevadores e portaria presencial.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação do apartamento na Prado Júnior 298?", a: "Avaliação judicial de R$ 520.000,00. Na 2ª praça o valor mínimo é R$ 312.000,00." },
        { q: "Quais são as características do prédio?", a: "Prédio tradicional construído em 1957, com portaria 24 horas, 2 elevadores e proximidade com a praia de Copacabana." },
        { q: "Como são auditados os débitos condominiais?", a: "Analisamos minunciosamente a ata da assembleia e a execução no TJRJ para respaldar o arrematante." },
        { q: "Qual a previsão para imissão na posse?", a: "Geralmente ocorre em curto prazo após o registro da carta no 5º RGI." },
        { q: "Como obter parecer jurídico prévio?", a: "Entre em contato via WhatsApp com Soares Martins Advogados." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Av. Prado Júnior nº 298 — Apto 1003',
      subtitle: 'Avenida Prado Júnior, nº 298, Apto 1003 — Copacabana, Río de Janeiro/RJ | 42 m² de área privada',
      address: 'Av. Prado Júnior, 298 - Apto 1003 — Copacabana, Río de Janeiro - RJ',
      p1Date: '17/08/2026 a las 14:00h',
      p2Date: '19/08/2026 a las 14:00h',
      process: '0098123-11.2021.8.19.0001',
      court: '3º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.691.500-3',
      rgi: '119.755 (5º RGI/RJ)',
      val: 'R$ 520.000,00',
      p2Val: 'R$ 312.000,00',
      description: 'Apartamento 1003 con 42 m², posterior, sin garaje. Edificio residencial de 1957 con 12 pisos, 2 ascensores y portería.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación del apartamento en Prado Júnior 298?", a: "Evaluación oficial de R$ 520.000,00. Puja mínima en 2ª Subasta: R$ 312.000,00." },
        { q: "¿Cuáles son las características del edificio?", a: "Construcción tradicional de 1957 con 2 ascensores, portería y excelente ubicación cerca de la playa." },
        { q: "¿Cómo se auditan las deudas de condominio?", a: "Revisamos las actas y autos procesales para proteger al comprador." },
        { q: "¿Cuál es la previsión para la posesión?", a: "Ocurre rápidamente tras el registro de la carta en el 5º Registro." },
        { q: "¿Cómo solicitar el dictamen previo?", a: "Consúltenos por WhatsApp con el despacho Soares Martins Advogados." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Prado Júnior Ave #298 — Apt 1003',
      subtitle: 'Prado Júnior Ave, #298, Apt 1003 — Copacabana, Rio de Janeiro/RJ | 42 sqm private area',
      address: 'Prado Júnior Ave, 298 - Apt 1003 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '08/17/2026 at 2:00 PM',
      p2Date: '08/19/2026 at 2:00 PM',
      process: '0098123-11.2021.8.19.0001',
      court: '3rd Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.691.500-3',
      rgi: '119.755 (5th Land Registry)',
      val: 'R$ 520,000.00',
      p2Val: 'R$ 312,000.00',
      description: 'Apartment 1003 with 42 sqm, rear-facing, no parking. Residential building constructed in 1957 with 12 floors, 2 elevators, and concierge.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the valuation of Apt 1003 on Prado Júnior Ave?", a: "Official court valuation is R$ 520,000.00. 2nd Bidding min bid is R$ 312,000.00." },
        { q: "What are the building specs?", a: "1957 classic Copacabana building with 2 elevators, concierge, and prime access to beach and subway." },
        { q: "How are condo debts verified?", a: "We examine lawsuit records and court precedent to shield the successful bidder." },
        { q: "What is the timeframe for possession?", a: "Prompt writ of possession following title deed registration at the 5th Land Registry." },
        { q: "How to get a legal opinion?", a: "Contact Soares Martins Advogados via WhatsApp." }
      ]
    }
  },

  // 5. Copacabana - Nossa Senhora de Copacabana 1003
  'copacabana-nossa-senhora': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Av. Nossa Senhora de Copacabana nº 1003 — Apto 1101',
      subtitle: 'Av. Nossa Senhora de Copacabana, nº 1003, Apto 1101 — Copacabana, Rio de Janeiro/RJ | 35 m² de área privativa',
      address: 'Av. Nossa Senhora de Copacabana, 1003 - Apto 1101 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '27/07/2026 às 14:00h',
      p2Date: '29/07/2026 às 14:00h',
      process: '0034125-90.2019.8.19.0001',
      court: '7ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.172.431-9',
      rgi: '111.923 (5º RGI/RJ)',
      val: 'R$ 448.971,12',
      p2Val: 'R$ 225.000,00',
      description: 'Apartamento 1101 de frente, com 35 m² de área edificada. Prédio residencial construído em 1957 com 13 andares, 2 elevadores e portaria 24 horas.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor avaliado do apartamento 1101?", a: "Avaliação oficial de R$ 448.971,12. Lance mínimo na 2ª praça: R$ 225.000,00." },
        { q: "Qual a localização exata do bem?", a: "Localizado no Posto 5 da Av. Nossa Senhora de Copacabana, próximo ao metrô Cantagalo." },
        { q: "Como é feita a apuração de débitos fiscais?", a: "Aplicação direta do art. 130 do CTN para sub-rogação dos impostos sobre o lance." },
        { q: "O imóvel possui certidão limpa no RGI?", a: "Analisamos a matrícula nº 111923 para atestar inexistência de nulidades processuais." },
        { q: "Como contratar a auditoria do edital?", a: "Envie mensagem no WhatsApp do escritório Soares Martins Advogados." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Av. Nossa Senhora de Copacabana nº 1003 — Apto 1101',
      subtitle: 'Av. Nossa Senhora de Copacabana, nº 1003, Apto 1101 — Copacabana, Río de Janeiro/RJ | 35 m² de área privada',
      address: 'Av. Nossa Senhora de Copacabana, 1003 - Apto 1101 — Copacabana, Río de Janeiro - RJ',
      p1Date: '27/07/2026 a las 14:00h',
      p2Date: '29/07/2026 a las 14:00h',
      process: '0034125-90.2019.8.19.0001',
      court: '7º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.172.431-9',
      rgi: '111.923 (5º RGI/RJ)',
      val: 'R$ 448.971,12',
      p2Val: 'R$ 225.000,00',
      description: 'Apartamento 1101 frontal con 35 m². Edificio residencial de 1957 con 13 plantas, 2 ascensores y portería 24 horas.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es el valor evaluado del apto 1101?", a: "Evaluación de R$ 448.971,12. En 2ª Subasta la puja mínima es R$ 225.000,00." },
        { q: "¿Cuál es la ubicación exacta?", a: "Situado en Posto 5 de Copacabana, a pocos pasos del metro Cantagalo." },
        { q: "¿Cómo se tratan las deudas fiscales?", a: "Aplicación del art. 130 del CTN con subrogación sobre el monto adjudicado." },
        { q: "¿Está limpia la matrícula RGI?", a: "Examinamos la matrícula nº 111923 para descartar vicios procesales." },
        { q: "¿Cómo contratar la auditoría?", a: "Contacte por WhatsApp con Soares Martins Advogados." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Nossa Senhora de Copacabana Ave #1003 — Apt 1101',
      subtitle: 'Nossa Senhora de Copacabana Ave, #1003, Apt 1101 — Copacabana, Rio de Janeiro/RJ | 35 sqm private area',
      address: 'Nossa Senhora de Copacabana Ave, 1003 - Apt 1101 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '07/27/2026 at 2:00 PM',
      p2Date: '07/29/2026 at 2:00 PM',
      process: '0034125-90.2019.8.19.0001',
      court: '7th Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.172.431-9',
      rgi: '111.923 (5th Land Registry)',
      val: 'R$ 448,971.12',
      p2Val: 'R$ 225,000.00',
      description: 'Front-facing Apartment 1101 with 35 sqm area. Residential building constructed in 1957 with 13 floors, 2 elevators, and 24h concierge.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation of Apt 1101?", a: "Court valuation is R$ 448,971.12. 2nd Bidding min bid is R$ 225,000.00." },
        { q: "Where is this property located?", a: "Located at Posto 5 in Copacabana, steps from Cantagalo subway station." },
        { q: "How are municipal taxes handled?", a: "Subrogated onto auction proceeds pursuant to Tax Code Art. 130." },
        { q: "Is the land registry clean?", a: "We verify title deed #111923 to confirm legal certainty." },
        { q: "How to hire notice audit services?", a: "Message Soares Martins Advogados directly on WhatsApp." }
      ]
    }
  },

  // 6. Catete - Silveira Martins 140 (502)
  'catete-silveira-502': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Rua Silveira Martins nº 140 — Apto 502',
      subtitle: 'Rua Silveira Martins, nº 140, Apto 502 — Catete, Rio de Janeiro/RJ | 53 m² de área privativa',
      address: 'Rua Silveira Martins, 140 - Apto 502 — Catete, Rio de Janeiro - RJ',
      p1Date: '27/07/2026 às 13:00h',
      p2Date: '29/07/2026 às 13:00h',
      process: '0041238-77.2020.8.19.0001',
      court: '15ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.881.234-5',
      rgi: '486.828 (9º RGI/RJ)',
      val: 'R$ 532.500,63',
      p2Val: 'R$ 267.000,00',
      description: 'Apartamento 502 com 53 m² privativos. Edifício residencial no bairro do Catete com 8 pavimentos, portaria e fácil acesso ao Aterro do Flamengo.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual a avaliação do apartamento 502 no Catete?", a: "Avaliação judicial de R$ 532.500,63. Mínimo na 2ª praça: R$ 267.000,00." },
        { q: "Quais as características da região do Catete?", a: "Bairro tradicional com farta oferta de transporte, metrô e proximidade do Parque do Flamengo." },
        { q: "Como são verificadas as dívidas propter rem?", a: "Exame minucioso das certidões e do edital de praça." },
        { q: "É seguro arrematar este imóvel?", a: "Sim, mediante parecer prévio de viabilidade e acompanhamento jurídico especializado." },
        { q: "Como solicitar atendimento do escritório?", a: "Clique no botão do WhatsApp para falar com a equipe jurídica." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Calle Silveira Martins nº 140 — Apto 502',
      subtitle: 'Calle Silveira Martins, nº 140, Apto 502 — Catete, Río de Janeiro/RJ | 53 m² de área privada',
      address: 'Calle Silveira Martins, 140 - Apto 502 — Catete, Río de Janeiro - RJ',
      p1Date: '27/07/2026 a las 13:00h',
      p2Date: '29/07/2026 a las 13:00h',
      process: '0041238-77.2020.8.19.0001',
      court: '15º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.881.234-5',
      rgi: '486.828 (9º RGI/RJ)',
      val: 'R$ 532.500,63',
      p2Val: 'R$ 267.000,00',
      description: 'Apartamento 502 con 53 m² en Catete. Edificio residencial de 8 plantas con portería y excelente ubicación cerca del Parque del Flamengo.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación del apto 502 en Catete?", a: "Evaluación de R$ 532.500,63. Mínimo en 2ª Subasta: R$ 267.000,00." },
        { q: "¿Cuáles son las ventajas del barrio Catete?", a: "Barrio con metro, comercios y cercanía al Parque del Flamengo." },
        { q: "¿Cómo se verifican las deudas?", a: "Examen detallado del edicto y certidones de pasivos." },
        { q: "¿Es segura la adquisición?", a: "Sí, contando con el dictamen previo y asistencia letrada." },
        { q: "¿Cómo consultar con el despacho?", a: "Consúltenos directamente por WhatsApp." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Silveira Martins St #140 — Apt 502',
      subtitle: 'Silveira Martins St, #140, Apt 502 — Catete, Rio de Janeiro/RJ | 53 sqm private area',
      address: 'Silveira Martins St, 140 - Apt 502 — Catete, Rio de Janeiro - RJ',
      p1Date: '07/27/2026 at 1:00 PM',
      p2Date: '07/29/2026 at 1:00 PM',
      process: '0041238-77.2020.8.19.0001',
      court: '15th Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.881.234-5',
      rgi: '486.828 (9th Land Registry)',
      val: 'R$ 532,500.63',
      p2Val: 'R$ 267,000.00',
      description: 'Apartment 502 with 53 sqm private area in Catete. 8-floor residential building near Flamengo Park and subway.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the court valuation of Apt 502 in Catete?", a: "Official valuation is R$ 532,500.63. 2nd Bidding min bid is R$ 267,000.00." },
        { q: "What are the location advantages?", a: "Prime Catete location close to Flamengo Park, subway, and retail." },
        { q: "How are debts verified?", a: "Thorough legal audit of lawsuit records and debt certificates." },
        { q: "Is bidding on this property safe?", a: "Yes, backed by prior legal feasibility opinion and attorney support." },
        { q: "How to contact the law firm?", a: "Click the WhatsApp button to request specialized advisory." }
      ]
    }
  },

  // 7. Catete - Silveira Martins 140 (503)
  'catete-silveira-503': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Rua Silveira Martins nº 140 — Apto 503',
      subtitle: 'Rua Silveira Martins, nº 140, Apto 503 — Catete, Rio de Janeiro/RJ | 36 m² de área privativa',
      address: 'Rua Silveira Martins, 140 - Apto 503 — Catete, Rio de Janeiro - RJ',
      p1Date: '27/07/2026 às 13:30h',
      p2Date: '29/07/2026 às 13:30h',
      process: '0041239-62.2020.8.19.0001',
      court: '15ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.881.235-2',
      rgi: '486.819 (9º RGI/RJ)',
      val: 'R$ 334.118,04',
      p2Val: 'R$ 168.000,00',
      description: 'Apartamento 503 com 36 m² privativos no Catete. Unidade residencial em prédio tradicional com excelente custo-benefício de arrematação.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual a avaliação do apartamento 503 no Catete?", a: "Avaliação judicial de R$ 334.118,04. Lance mínimo na 2ª praça: R$ 168.000,00." },
        { q: "Qual a área do imóvel?", a: "Possui 36 m² de área privativa." },
        { q: "Como é feita a assessoria para arrematação?", a: "Realizamos auditoria jurídica completa e acompanhamento do leilão." },
        { q: "Quais os custos adicionais de leilão?", a: "Comissão do leiloeiro (5%), ITBI e custas de registro." },
        { q: "Como tirar dúvidas com especialista?", a: "Atendimento imediato via WhatsApp." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Calle Silveira Martins nº 140 — Apto 503',
      subtitle: 'Calle Silveira Martins, nº 140, Apto 503 — Catete, Río de Janeiro/RJ | 36 m² de área privada',
      address: 'Calle Silveira Martins, 140 - Apto 503 — Catete, Río de Janeiro - RJ',
      p1Date: '27/07/2026 a las 13:30h',
      p2Date: '29/07/2026 a las 13:30h',
      process: '0041239-62.2020.8.19.0001',
      court: '15º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.881.235-2',
      rgi: '486.819 (9º RGI/RJ)',
      val: 'R$ 334.118,04',
      p2Val: 'R$ 168.000,00',
      description: 'Apartamento 503 con 36 m² en Catete. Excelente opción de inversión residencial.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación del apto 503?", a: "Evaluación oficial: R$ 334.118,04. Puja mínima 2ª Subasta: R$ 168.000,00." },
        { q: "¿Cuál es el área del inmueble?", a: "36 m² de superficie privada." },
        { q: "¿Cómo funciona el soporte legal?", a: "Auditoría completa de edicto y asistencia hasta la escrituración." },
        { q: "¿Cuáles son los costes accesorios?", a: "Comisión de martillero (5%), ITBI y aranceles registrales." },
        { q: "¿Cómo solicitar información?", a: "Consúltenos por WhatsApp." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Silveira Martins St #140 — Apt 503',
      subtitle: 'Silveira Martins St, #140, Apt 503 — Catete, Rio de Janeiro/RJ | 36 sqm private area',
      address: 'Silveira Martins St, 140 - Apt 503 — Catete, Rio de Janeiro - RJ',
      p1Date: '07/27/2026 at 1:30 PM',
      p2Date: '07/29/2026 at 1:30 PM',
      process: '0041239-62.2020.8.19.0001',
      court: '15th Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.881.235-2',
      rgi: '486.819 (9th Land Registry)',
      val: 'R$ 334,118.04',
      p2Val: 'R$ 168,000.00',
      description: 'Apartment 503 with 36 sqm area in Catete. Great residential investment option in Rio de Janeiro.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the valuation of Apt 503?", a: "Court valuation is R$ 334,118.04. 2nd Bidding min bid is R$ 168,000.00." },
        { q: "What is the apartment layout size?", a: "36 sqm private unit." },
        { q: "What legal services are included?", a: "Notice audit, background checks, and full court representation." },
        { q: "What are the secondary acquisition costs?", a: "Auctioneer fee (5%), property transfer tax (ITBI), and registry fees." },
        { q: "How to contact us?", a: "Speak with our team on WhatsApp." }
      ]
    }
  },

  // 8. Botafogo - Voluntários da Pátria 381
  'botafogo-voluntarios': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Rua Voluntários da Pátria nº 381 — Apto 305',
      subtitle: 'Rua Voluntários da Pátria, nº 381, Apto 305 — Botafogo, Rio de Janeiro/RJ | Edifício Coaracy Nunes (109 m²)',
      address: 'Rua Voluntários da Pátria, 381 - Apto 305 — Botafogo, Rio de Janeiro - RJ',
      p1Date: '28/07/2026 às 14:00h',
      p2Date: '30/07/2026 às 14:00h',
      process: '0071234-45.2018.8.19.0001',
      court: '20ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.298.026-6',
      rgi: '9.497 (3º RGI/RJ)',
      val: 'R$ 1.030.339,95',
      p2Val: 'R$ 516.000,00',
      description: 'Apartamento 305 no Edifício Coaracy Nunes com 109 m² de área edificada em Botafogo. Imóvel desocupado há mais de 10 anos. Excepcional potencial de valorização.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual a avaliação do apartamento em Botafogo?", a: "Avaliação oficial de R$ 1.030.339,95. Mínimo na 2ª praça: R$ 516.000,00." },
        { q: "Qual a área e estado do imóvel?", a: "Possui 109 m² edificados em prédio tradicional de 1945, desocupado há mais de uma década." },
        { q: "Como funciona a imissão na posse de imóvel fechado?", a: "Após a expedição do mandado pelo juiz, a imissão é realizada com o acompanhamento de Oficial de Justiça." },
        { q: "Quais são as dívidas do imóvel?", a: "Todas as dívidas fiscais e condominiais são submetidas à análise prévia e parecer do escritório." },
        { q: "Como agendar reunião técnica?", a: "Contate Soares Martins Advogados via WhatsApp." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Calle Voluntários da Pátria nº 381 — Apto 305',
      subtitle: 'Calle Voluntários da Pátria, nº 381, Apto 305 — Botafogo, Río de Janeiro/RJ | Edificio Coaracy Nunes (109 m²)',
      address: 'Calle Voluntários da Pátria, 381 - Apto 305 — Botafogo, Río de Janeiro - RJ',
      p1Date: '28/07/2026 a las 14:00h',
      p2Date: '30/07/2026 a las 14:00h',
      process: '0071234-45.2018.8.19.0001',
      court: '20º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.298.026-6',
      rgi: '9.497 (3º RGI/RJ)',
      val: 'R$ 1.030.339,95',
      p2Val: 'R$ 516.000,00',
      description: 'Apartamento 305 en Edificio Coaracy Nunes con 109 m² en Botafogo. Inmueble desocupado hace más de 10 años con alto potencial.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación del apartamento en Botafogo?", a: "Evaluación: R$ 1.030.339,95. Puja mínima 2ª Subasta: R$ 516.000,00." },
        { q: "¿Cuáles son las características del piso?", a: "109 m² en edificio tradicional de 1945 en Botafogo." },
        { q: "¿Cómo es la imisión en la posesión de piso cerrado?", a: "Se ejecuta mediante orden judicial acompañada por Oficial de Justicia." },
        { q: "¿Cómo se analizan los pasivos?", a: "Todas las deudas son dictaminadas previamente por el equipo legal." },
        { q: "¿Cómo consultar?", a: "Escríbanos por WhatsApp para asesoramiento." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Voluntários da Pátria St #381 — Apt 305',
      subtitle: 'Voluntários da Pátria St, #381, Apt 305 — Botafogo, Rio de Janeiro/RJ | Edifício Coaracy Nunes (109 sqm)',
      address: 'Voluntários da Pátria St, 381 - Apt 305 — Botafogo, Rio de Janeiro - RJ',
      p1Date: '07/28/2026 at 2:00 PM',
      p2Date: '07/30/2026 at 2:00 PM',
      process: '0071234-45.2018.8.19.0001',
      court: '20th Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.298.026-6',
      rgi: '9.497 (3rd Land Registry)',
      val: 'R$ 1,030,339.95',
      p2Val: 'R$ 516,000.00',
      description: 'Apartment 305 in Edifício Coaracy Nunes with 109 sqm built area in Botafogo. Vacant for over 10 years. Prime appreciation opportunity.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the valuation of the Botafogo apartment?", a: "Court valuation is R$ 1,030,339.95. 2nd Bidding min bid is R$ 516,000.00." },
        { q: "What are the property specs?", a: "109 sqm built area in a classic 1945 building in Botafogo." },
        { q: "How is possession executed for vacant properties?", a: "Court writ of possession served by court officer." },
        { q: "How are debts analyzed?", a: "Full legal audit report provided before bidding." },
        { q: "How to schedule consultation?", a: "Message Soares Martins Advogados on WhatsApp." }
      ]
    }
  },

  // 9. Tijuca - Haddock Lobo 191
  'tijuca-haddock': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Rua Haddock Lobo nº 191 — Apto 405',
      subtitle: 'Rua Haddock Lobo, nº 191, Apto 405 — Tijuca, Rio de Janeiro/RJ | Edifício Colima (60 m²)',
      address: 'Rua Haddock Lobo, 191 - Apto 405 — Tijuca, Rio de Janeiro - RJ',
      p1Date: '28/07/2026 às 15:00h',
      p2Date: '30/07/2026 às 15:00h',
      process: '0056123-88.2019.8.19.0001',
      court: '8ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.574.460-2',
      rgi: '114.079 (11º RGI/RJ)',
      val: 'R$ 320.550,21',
      p2Val: 'R$ 161.000,00',
      description: 'Apartamento 405 de frente com 60 m² no Edifício Colima na Tijuca. Construção de 1951, portaria 24h, 2 elevadores e perto do metrô Afonso Pena.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual a avaliação do apartamento na Tijuca?", a: "Avaliação oficial de R$ 320.550,21. Mínimo na 2ª praça: R$ 161.000,00." },
        { q: "Quais são os destaques do imóvel na Haddock Lobo?", a: "Apartamento de frente com 60 m², portaria 24h e fácil mobilidade para o Centro e Zona Sul." },
        { q: "Como funciona a verificação de débito de condomínio?", a: "Auditamos o edital e jurisprudência para garantir aquisição sem surpresas." },
        { q: "Qual a comissão do leiloeiro e custos?", a: "5% sobre o valor da arrematação, acrescido de ITBI e emolumentos do 11º RGI." },
        { q: "Como falar com o advogado especialista?", a: "Acesse nosso atendimento no WhatsApp." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Calle Haddock Lobo nº 191 — Apto 405',
      subtitle: 'Calle Haddock Lobo, nº 191, Apto 405 — Tijuca, Río de Janeiro/RJ | Edificio Colima (60 m²)',
      address: 'Calle Haddock Lobo, 191 - Apto 405 — Tijuca, Río de Janeiro - RJ',
      p1Date: '28/07/2026 a las 15:00h',
      p2Date: '30/07/2026 a las 15:00h',
      process: '0056123-88.2019.8.19.0001',
      court: '8º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.574.460-2',
      rgi: '114.079 (11º RGI/RJ)',
      val: 'R$ 320.550,21',
      p2Val: 'R$ 161.000,00',
      description: 'Apartamento 405 frontal con 60 m² en Edificio Colima, Tijuca. Construcción de 1951 con portería 24h, 2 ascensores y cerca del metro Afonso Pena.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación del apto en Tijuca?", a: "Evaluación oficial: R$ 320.550,21. Puja mínima 2ª Subasta: R$ 161.000,00." },
        { q: "¿Cuáles son las ventajas del apartamento?", a: "Frontal, 60 m², portería 24h y excelente acceso a transporte público." },
        { q: "¿Cómo se auditan las deudas?", a: "Auditamos edicto y jurisprudencia para evitar riesgos pasivos." },
        { q: "¿Cuáles son los gastos del martillero?", a: "5% de comisión, más ITBI y registro en el 11º RGI." },
        { q: "¿Cómo consultar?", a: "Consúltenos por WhatsApp." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Haddock Lobo St #191 — Apt 405',
      subtitle: 'Haddock Lobo St, #191, Apt 405 — Tijuca, Rio de Janeiro/RJ | Edifício Colima (60 sqm)',
      address: 'Haddock Lobo St, 191 - Apt 405 — Tijuca, Rio de Janeiro - RJ',
      p1Date: '07/28/2026 at 3:00 PM',
      p2Date: '07/30/2026 at 3:00 PM',
      process: '0056123-88.2019.8.19.0001',
      court: '8th Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.574.460-2',
      rgi: '114.079 (11th Land Registry)',
      val: 'R$ 320,550.21',
      p2Val: 'R$ 161,000.00',
      description: 'Front-facing Apartment 405 with 60 sqm in Edifício Colima, Tijuca. Built in 1951 with 24h concierge, 2 elevators, and near Afonso Pena subway.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official court valuation?", a: "Valuation is R$ 320,550.21. 2nd Bidding min bid is R$ 161,000.00." },
        { q: "What are the property highlights?", a: "60 sqm front unit, 24h concierge, prime Tijuca location near subway." },
        { q: "How are condo debts audited?", a: "We audit the notice and TJRJ case law to protect the buyer." },
        { q: "What are the auction fees?", a: "5% auctioneer fee plus ITBI tax and 11th Land Registry fees." },
        { q: "How to reach the attorney?", a: "Message our team on WhatsApp." }
      ]
    }
  }
};
