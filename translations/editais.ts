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
  },

  // Leblon - Rua General Urquiza 263
  'leblon-general-urquiza': {
    pt: {
      title: 'Leilão Judicial de Apartamento no Leblon na Rua General Urquiza nº 263',
      subtitle: 'Rua General Urquiza, nº 263, Apto 402 — Leblon, Rio de Janeiro/RJ | Edifício Palm Beach',
      address: 'Rua General Urquiza, 263 - Apto 402 — Leblon, Rio de Janeiro - RJ',
      p1Date: '20/07/2026 às 14:00h',
      p2Date: '01/09/2026 às 13:03h',
      process: '0023411-88.2021.8.19.0001',
      court: '3ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.565.962-8',
      rgi: '10.627 (2º RGI/RJ)',
      val: 'R$ 890.000,00',
      p2Val: 'R$ 445.000,00',
      description: 'Apartamento 402 com 40 m² no Edifício Palm Beach, construído em 1950, localizado na quadra final sem saída da Rua General Urquiza com escadaria de acesso à Rua Capitão César de Andrade no nobre bairro do Leblon.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação do apartamento na Rua General Urquiza 263 no Leblon?", a: "O imóvel possui avaliação judicial de R$ 890.000,00. Na 2ª Praça, o lance mínimo é R$ 445.000,00 (50% do valor de avaliação)." },
        { q: "Quais são as características do Edifício Palm Beach e da localização?", a: "Imóvel residencial com 40 m² de área edificada em prédio construído em 1950, situado na quadra final e reservada da Rua General Urquiza no Leblon." },
        { q: "Como é realizada a auditoria jurídica deste leilão?", a: "Nosso escritório realiza due diligence completa da Matrícula 10.627 do 2º RGI, débitos de IPTU (0.565.962-8), processo de execução e dívidas de condomínio." },
        { q: "Qual a oportunidade de investimento em um apartamento de 40m² no Leblon?", a: "O metro quadrado do Leblon é um dos mais valorizados do país. A aquisição por 50% do valor avaliado oferece margem excepcional de retorno para renda ou valorização." },
        { q: "Como agendar consultoria para arrematação com segurança?", a: "Atendemos via WhatsApp ou no nosso escritório em Ipanema para apresentação de parecer jurídico prévio." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Leblon en Calle General Urquiza nº 263',
      subtitle: 'Calle General Urquiza, nº 263, Apto 402 — Leblon, Río de Janeiro/RJ | Edificio Palm Beach',
      address: 'Calle General Urquiza, 263 - Apto 402 — Leblon, Río de Janeiro - RJ',
      p1Date: '20/07/2026 a las 14:00h',
      p2Date: '01/09/2026 a las 13:03h',
      process: '0023411-88.2021.8.19.0001',
      court: '3º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.565.962-8',
      rgi: '10.627 (2º RGI/RJ)',
      val: 'R$ 890.000,00',
      p2Val: 'R$ 445.000,00',
      description: 'Apartamento 402 con 40 m² en el Edificio Palm Beach, construido en 1950, ubicado en la tranquila cuadra final sin salida de la Calle General Urquiza en Leblon.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación del apartamento en Leblon?", a: "Evaluación judicial oficial de R$ 890.000,00. En 2ª Subasta la puja mínima es de R$ 445.000,00 (50% de descuento)." },
        { q: "¿Cuáles son las características del inmueble?", a: "40 m² de área en edificio clásico de 1950 situado en tramo residencial sin salida de la Calle General Urquiza." },
        { q: "¿Cómo se audita la situación legal?", a: "Verificamos la Matrícula 10.627 del 2º RGI, impostos de IPTU, expediente judicial y cargas del condominio." },
        { q: "¿Por qué es una gran oportunidad de inversión?", a: "El metro cuadrado en Leblon destaca entre los de mayor demanda y valor del mercado brasileño." },
        { q: "¿Cómo consultar con el abogado?", a: "Contáctenos vía WhatsApp para un dictamen de viabilidad personalizado." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Leblon at General Urquiza St #263',
      subtitle: 'General Urquiza St, #263, Apt 402 — Leblon, Rio de Janeiro/RJ | Edifício Palm Beach',
      address: 'General Urquiza St, 263 - Apt 402 — Leblon, Rio de Janeiro - RJ',
      p1Date: '07/20/2026 at 2:00 PM',
      p2Date: '09/01/2026 at 1:03 PM',
      process: '0023411-88.2021.8.19.0001',
      court: '3rd Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.565.962-8',
      rgi: '10.627 (2nd Land Registry)',
      val: 'R$ 890,000.00',
      p2Val: 'R$ 445,000.00',
      description: 'Apartment 402 with 40 sqm in Edifício Palm Beach, built in 1950, located on the quiet cul-de-sac block of General Urquiza St in Leblon.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official court valuation of the Leblon unit?", a: "Court valuation is R$ 890,000.00. 2nd Bidding min bid is R$ 445,000.00 (50% discount)." },
        { q: "What are the key specs of Edifício Palm Beach Apt 402?", a: "Features 40 sqm built area in a 1950 building located at the cul-de-sac end of General Urquiza St in Leblon." },
        { q: "How is due diligence performed?", a: "Our team audits Title 10.627 (2nd Registry), municipal taxes (IPTU 0.565.962-8), court records, and condo fees." },
        { q: "Why invest in Leblon real estate auction?", a: "Leblon is Brazil's most prime market, offering exceptional yield and long-term capital preservation." },
        { q: "How to consult with an attorney?", a: "Reach out on WhatsApp to request a prior legal audit." }
      ]
    }
  },

  // Copacabana - Rua Siqueira Campos 43
  'copacabana-siqueira-campos': {
    pt: {
      title: 'Leilão Judicial de Apartamento em Copacabana na Rua Siqueira Campos nº 43 — Apto 1123',
      subtitle: 'Rua Siqueira Campos, nº 43, Apto 1123 — Copacabana, Rio de Janeiro/RJ | Edifício Centro Comercial de Copacabana',
      address: 'Rua Siqueira Campos, 43 - Apto 1123 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '05/08/2026 às 15:00h',
      p2Date: '12/08/2026 às 15:00h',
      process: '0018542-43.2022.8.19.0001',
      court: '5ª Vara Cível da Comarca da Capital / TJRJ',
      iptu: '0.686.319-5',
      rgi: '5.098 (5º RGI/RJ)',
      val: 'R$ 400.000,00',
      p2Val: 'R$ 200.000,00',
      description: 'Unidade residencial de frente com 38m² de área edificada no Edifício Centro Comercial de Copacabana. O apartamento é composto de banheiro com box de granito, cozinha e sala acopladas e um quarto separado dos demais espaços por um móvel funcional, localizado no coração de Copacabana próximo ao metrô e à praia.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça?", a: "O imóvel possui avaliação judicial de R$ 400.000,00. Na 2ª Praça, o lance mínimo é de R$ 200.000,00 (50% do valor avaliado)." },
        { q: "Quais são as características do apartamento 1123 da Rua Siqueira Campos 43?", a: "Possui 38m² de área edificada, posição de frente, banheiro com acabamento em granito, sala/cozinha acopladas e dormitório separado por divisória de móvel no Condomínio Centro Comercial de Copacabana." },
        { q: "Como funciona a auditoria jurídica prévia para esta arrematação?", a: "Auditamos a Matrícula nº 5098 do 5º RGI, certidões fiscais de IPTU (0.686.319-5), débitos condominiais e eventuais pendências processuais para garantir arrematação 100% segura." },
        { q: "Por que este imóvel na Rua Siqueira Campos é atrativo para investimento?", a: "Siqueira Campos é um dos eixos comerciais e residenciais mais valorizados de Copacabana. Pelo valor de 2ª praça (R$ 200.000,00), apresenta excelente potencial de rentabilidade e liquidez para locação ou revenda." },
        { q: "Como contar com a assessoria especializada do Soares Martins Advogados?", a: "Entre em contato via WhatsApp ou agende uma reunião em nosso escritório em Ipanema/RJ para recebimento do parecer jurídico completo antes do leilão." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Copacabana en Calle Siqueira Campos nº 43 — Apto 1123',
      subtitle: 'Calle Siqueira Campos, nº 43, Apto 1123 — Copacabana, Río de Janeiro/RJ | Edificio Centro Comercial de Copacabana',
      address: 'Calle Siqueira Campos, 43 - Apto 1123 — Copacabana, Río de Janeiro - RJ',
      p1Date: '05/08/2026 a las 15:00h',
      p2Date: '12/08/2026 a las 15:00h',
      process: '0018542-43.2022.8.19.0001',
      court: '5º Juzgado Civil de la Comarca de la Capital / TJRJ',
      iptu: '0.686.319-5',
      rgi: '5.098 (5º RGI/RJ)',
      val: 'R$ 400.000,00',
      p2Val: 'R$ 200.000,00',
      description: 'Unidad residencial al frente con 38 m² de superficie edificada en el Edificio Centro Comercial de Copacabana. El apartamento cuenta con baño con cabina de granito, cocina y sala integradas y un dormitorio separado por un mueble modular.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la tasación oficial y la puja mínima en 2ª Subasta?", a: "La evaluación judicial es de R$ 400.000,00. En 2ª Subasta, el precio inicial arranca en R$ 200.000,00 (50% de descuento)." },
        { q: "¿Cuáles son las características del apartamento 1123 en Calle Siqueira Campos 43?", a: "Cuenta con 38 m² construidos, posición exterior de frente, baño en granito, espacio integrado de sala/cocina y dormitorio semi-independiente." },
        { q: "¿Cómo se analiza la viabilidad jurídica?", a: "Verificamos la Matrícula nº 5098 del 5º RGI, impuestos municipales (IPTU 0.686.319-5), expensas y proceso judicial ejecutor." },
        { q: "¿Por qué invertir en un inmueble en Siqueira Campos?", a: "Es una ubicación neurálgica de Copacabana con altísima demanda de alquiler y gran conectividad con metro y comercios." },
        { q: "¿Cómo agendar asesoramiento con los abogados?", a: "Envíenos un mensaje por WhatsApp para recibir un dictamen de seguridad previa." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Copacabana at Siqueira Campos St #43 — Apt 1123',
      subtitle: 'Siqueira Campos St, #43, Apt 1123 — Copacabana, Rio de Janeiro/RJ | Edifício Centro Comercial de Copacabana',
      address: 'Siqueira Campos St, 43 - Apt 1123 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '08/05/2026 at 3:00 PM',
      p2Date: '08/12/2026 at 3:00 PM',
      process: '0018542-43.2022.8.19.0001',
      court: '5th Civil Court of Rio de Janeiro / TJRJ',
      iptu: '0.686.319-5',
      rgi: '5.098 (5th Land Registry)',
      val: 'R$ 400,000.00',
      p2Val: 'R$ 200,000.00',
      description: 'Front-facing residential unit with 38 sqm built area in Edifício Centro Comercial de Copacabana. Features a bathroom with granite shower box, open kitchen and living space, and a separate bedroom partitioned by custom furniture.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the valuation and 2nd auction minimum bid?", a: "Court valuation is R$ 400,000.00. 2nd Auction starting bid is R$ 200,000.00 (50% discount)." },
        { q: "What are the main specs of Apt 1123 at Siqueira Campos St 43?", a: "38 sqm built area, front-facing position, granite bathroom, open kitchen/living area, and partitioned bedroom in Copacabana." },
        { q: "How is legal due diligence conducted?", a: "We audit Title #5098 (5th Registry), municipal IPTU taxes (0.686.319-5), condo debts, and court records." },
        { q: "Why is Siqueira Campos a top investment opportunity?", a: "Located near subway and beach in Copacabana, offering outstanding rental yield and high liquidity at a 50% acquisition discount." },
        { q: "How to contact the legal advisory team?", a: "Contact us on WhatsApp or visit our office in Ipanema to obtain a detailed legal report before bidding." }
      ]
    }
  },

  // Botafogo - Rua Lauro Müller 36
  'botafogo-lauro-muller': {
    pt: {
      title: 'Leilão Judicial de Apartamento em Botafogo na Rua Lauro Müller nº 36 — Apto 1411',
      subtitle: 'Rua Lauro Müller, nº 36, Apto 1411 — Botafogo, Rio de Janeiro/RJ | Condomínio do Edifício Interpraias',
      address: 'Rua Lauro Müller, 36 - Apto 1411 — Botafogo, Rio de Janeiro - RJ',
      p1Date: '15/05/2026 às 15:00h',
      p2Date: '21/07/2026 às 11:00h',
      process: 'Sob consulta',
      court: '3º Ofício de Registro de Imóveis / TJRJ',
      iptu: '1.205.989-8',
      rgi: '11.881 (3º RGI/RJ)',
      val: 'R$ 520.000,00',
      p2Val: 'R$ 260.000,00',
      description: 'Apartamento residencial de fundos com 38 m² de área edificada no Edifício Interpraias, prédio construído em 1973 de 12 andares com área de lazer na cobertura (chuveirão e churrasqueira), portaria 24h, monitoramento por câmeras e 3 elevadores. Imóvel desocupado há anos, em localização privilegiada no bairro de Botafogo, próximo à Enseada de Botafogo, Urca, shoppings e farta rede de transporte.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça?", a: "O imóvel possui avaliação judicial oficial de R$ 520.000,00. Na 2ª Praça, o lance mínimo é de R$ 260.000,00 (50% do valor avaliado)." },
        { q: "Quais são as características do condomínio e do apartamento 1411?", a: "Unidade residencial de fundos com 38m² construída em 1973 no Condomínio do Edifício Interpraias. O prédio conta com portaria 24h, 3 elevadores, circuito de segurança e área de lazer na cobertura com chuveirão e churrasqueira. Imóvel desocupado há anos." },
        { q: "Como é realizada a auditoria jurídica prévia para este leilão em Botafogo?", a: "Auditamos minuciosamente a Matrícula nº 11.881 do 3º RGI, dívidas de IPTU (1.205.989-8), débitos de condomínio e a integridade da execução judicial para assegurar arrematação isenta de riscos." },
        { q: "Qual o diferencial do bairro de Botafogo para investimento imobiliário?", a: "Botafogo é um dos bairros mais dinâmicos e valorizados da Zona Sul carioca, limítrofe à Urca, Copacabana e Flamengo, com altíssima demanda para locação residencial e valorização patrimonial." },
        { q: "Como solicitar o parecer jurídico de viabilidade com os advogados?", a: "Entre em contato diretamente via WhatsApp ou agende atendimento presencial em nosso escritório em Ipanema/RJ para ter suporte completo." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Botafogo en Calle Lauro Müller nº 36 — Apto 1411',
      subtitle: 'Calle Lauro Müller, nº 36, Apto 1411 — Botafogo, Río de Janeiro/RJ | Edificio Interpraias',
      address: 'Calle Lauro Müller, 36 - Apto 1411 — Botafogo, Río de Janeiro - RJ',
      p1Date: '15/05/2026 a las 15:00h',
      p2Date: '21/07/2026 a las 11:00h',
      process: 'Bajo consulta',
      court: '3º Registro de Inmuebles / TJRJ',
      iptu: '1.205.989-8',
      rgi: '11.881 (3º RGI/RJ)',
      val: 'R$ 520.000,00',
      p2Val: 'R$ 260.000,00',
      description: 'Apartamento residencial interior de 38 m² en el Edificio Interpraias, edificio de 1973 con 12 pisos, área de ocio en la azotea con ducha y parrilla, portería 24h, cámaras y 3 ascensores. Inmueble desocupado desde hace años en excelente ubicación en Botafogo.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la tasación oficial y la puja mínima en 2ª Subasta?", a: "Evaluación judicial de R$ 520.000,00. En 2ª Subasta la oferta mínima es de R$ 260.000,00 (50% de descuento)." },
        { q: "¿Cuáles son las características del apartamento y del edificio?", a: "Unidad residencial de 38 m² interior en el Condominio Edificio Interpraias. Dispone de terraza con barbacoa y ducha, 3 ascensores y seguridad 24 horas. Inmueble desocupado." },
        { q: "¿Cómo se analiza la viabilidad jurídica?", a: "Revisamos la Matrícula nº 11.881 del 3º RGI, impostos de IPTU 1.205.989-8, expensas y proceso judicial ejecutor." },
        { q: "¿Por qué invertir en Botafogo?", a: "Barrio estratégico de la Zona Sur de Río de Janeiro con altísima rentabilidad por alquiler y cercanía a centros comerciales, playa y metro." },
        { q: "¿Cómo consultar con el equipo de abogados?", a: "Contáctenos vía WhatsApp para solicitar una auditoría jurídica previa." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Botafogo at Lauro Müller St #36 — Apt 1411',
      subtitle: 'Lauro Müller St, #36, Apt 1411 — Botafogo, Rio de Janeiro/RJ | Edifício Interpraias',
      address: 'Lauro Müller St, 36 - Apt 1411 — Botafogo, Rio de Janeiro - RJ',
      p1Date: '05/15/2026 at 3:00 PM',
      p2Date: '07/21/2026 at 11:00 AM',
      process: 'Upon request',
      court: '3rd Land Registry Court / TJRJ',
      iptu: '1.205.989-8',
      rgi: '11.881 (3rd Land Registry)',
      val: 'R$ 520,000.00',
      p2Val: 'R$ 260,000.00',
      description: 'Rear-facing 38 sqm residential unit in Edifício Interpraias, a 1973 12-story building with rooftop leisure area featuring outdoor shower and barbecue grill, 24h concierge, security cameras, and 3 elevators. Vacant for years, prime location in Botafogo.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation and 2nd auction minimum bid?", a: "Court valuation is R$ 520,000.00. 2nd Auction starting bid is R$ 260,000.00 (50% discount)." },
        { q: "What are the key building and apartment specs?", a: "38 sqm rear-facing residential apartment in Edifício Interpraias (1973). Building features rooftop BBQ and shower area, 24h security, and 3 elevators. Vacant for years." },
        { q: "How is legal due diligence conducted?", a: "We audit Title #11.881 (3rd Registry), municipal IPTU taxes (1.205.989-8), condo debts, and legal proceedings." },
        { q: "Why invest in Botafogo real estate?", a: "Botafogo is one of Rio's most vibrant South Zone neighborhoods, bordering Urca and Copacabana, offering strong rental yield and capital growth." },
        { q: "How to contact the legal advisory team?", a: "Reach out via WhatsApp or schedule a consultation at our office in Ipanema to get a full legal report." }
      ]
    }
  },

  // Gávea - Rua Vice Governador Rubens Berardo 175 / Av. Padre Leonel Franca 210
  'gavea-rubens-berardo': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Gávea — Rua Vice Governador Rubens Berardo 175 — Apto 506 Bl. III',
      subtitle: 'Rua Vice Governador Rubens Berardo, nº 175, Apto 506, Bloco III (Av. Padre Leonel Franca, nº 210) — Gávea, Rio de Janeiro/RJ',
      address: 'Rua Vice Governador Rubens Berardo, 175 - Apto 506 Bl. III — Gávea, Rio de Janeiro - RJ',
      p1Date: '14/09/2026 às 11:00h',
      p2Date: '24/09/2026 às 11:00h',
      process: 'Sob consulta',
      court: '2º Ofício de Registro de Imóveis / TJRJ',
      iptu: '1.479.851-6',
      rgi: '31.349 (2º RGI/RJ)',
      val: 'R$ 1.686.801,06',
      p2Val: 'R$ 843.401,00',
      description: 'Excelente apartamento residencial de 84 m² no tradicional e valorizado bairro da Gávea, composto por 2 quartos (sendo 1 suíte), sala ampla, banheiro social, cozinha, dependência completa de empregada e direito a 2 vagas de garagem. O condomínio conta com portaria, segurança e infraestrutura em localização privilegiada, próximo à PUC-Rio, Shopping da Gávea, Planetário e farta oferta de comércio, restaurantes e opções de transporte.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça do leilão na Gávea?", a: "O imóvel possui avaliação judicial oficial de R$ 1.686.801,06. Na 2ª Praça, o lance mínimo é de R$ 843.401,00 (50% do valor avaliado)." },
        { q: "Quais são as características do apartamento 506 e do condomínio?", a: "Unidade residencial de 84 m² com 2 quartos (1 suíte), banheiro social, sala, cozinha, dependências e 2 vagas de garagem registradas na convenção. Localizado na Rua Vice Governador Rubens Berardo 175 (com entrada também pela Av. Padre Leonel Franca 210) na Gávea." },
        { q: "Como é realizada a auditoria jurídica prévia para este leilão na Gávea?", a: "Auditamos minuciosamente a Matrícula nº 31.349 do 2º RGI, débitos de IPTU (1.479.851-6), dívidas condominiais e a integridade da execução judicial para assegurar arrematação segura." },
        { q: "Qual o diferencial do bairro da Gávea para investimento e moradia?", a: "A Gávea é um dos bairros mais nobres, arborizados e desejados da Zona Sul do Rio de Janeiro, com altíssima demanda residencial, próximo ao Jóquei Clube, Parque da Cidade, PUC-Rio e Praça Santos Dumont." },
        { q: "Como solicitar o parecer jurídico de viabilidade com a equipe jurídica?", a: "Entre em contato via WhatsApp ou agende uma reunião em nosso escritório em Ipanema para obter relatório detalhado de viabilidade antes de licitar." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Gávea — Calle Vice Governador Rubens Berardo 175 — Apto 506 Bl. III',
      subtitle: 'Calle Vice Governador Rubens Berardo, nº 175, Apto 506, Bloque III (Av. Padre Leonel Franca, nº 210) — Gávea, Río de Janeiro/RJ',
      address: 'Calle Vice Governador Rubens Berardo, 175 - Apto 506 Bl. III — Gávea, Río de Janeiro - RJ',
      p1Date: '14/09/2026 a las 11:00h',
      p2Date: '24/09/2026 a las 11:00h',
      process: 'Bajo consulta',
      court: '2º Registro de Inmuebles / TJRJ',
      iptu: '1.479.851-6',
      rgi: '31.349 (2º RGI/RJ)',
      val: 'R$ 1.686.801,06',
      p2Val: 'R$ 843.401,00',
      description: 'Apartamento residencial de 84 m² en el distinguido barrio de Gávea, compuesto por 2 dormitorios (1 suite), amplio salón, baño social, cocina, dependencia completa de servicio y 2 plazas de garaje. Excelente ubicación cerca de PUC-Rio, Shopping da Gávea y Planetario.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la tasación oficial y la puja mínima en 2ª Subasta?", a: "Evaluación judicial oficial de R$ 1.686.801,06. En 2ª Subasta la oferta mínima es de R$ 843.401,00 (50% de descuento)." },
        { q: "¿Cuáles son las características del apartamento y del edificio?", a: "Unidad residencial de 84 m² con 2 dormitorios (1 suite), baño social, sala, cocina, dependencia y 2 plazas de aparcamiento en Gávea." },
        { q: "¿Cómo se analiza la viabilidad jurídica?", a: "Revisamos la Matrícula nº 31.349 del 2º RGI, impuestos IPTU 1.479.851-6, expensas y proceso judicial ejecutor." },
        { q: "¿Por qué invertir en el barrio de Gávea?", a: "Barrio exclusivo de la Zona Sur de Río de Janeiro con alta demanda de alquiler, rodeado de naturaleza, universidades y gastronomía." },
        { q: "¿Cómo consultar con el equipo de abogados?", a: "Contáctenos vía WhatsApp para solicitar un dictamen jurídico completo de viabilidad." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Gávea — Vice Governador Rubens Berardo St #175 — Apt 506 Bl. III',
      subtitle: 'Vice Governador Rubens Berardo St, #175, Apt 506, Block III (Av. Padre Leonel Franca, #210) — Gávea, Rio de Janeiro/RJ',
      address: 'Vice Governador Rubens Berardo St, 175 - Apt 506 Bl. III — Gávea, Rio de Janeiro - RJ',
      p1Date: '09/14/2026 at 11:00 AM',
      p2Date: '09/24/2026 at 11:00 AM',
      process: 'Upon request',
      court: '2nd Land Registry Court / TJRJ',
      iptu: '1.479.851-6',
      rgi: '31.349 (2nd Land Registry)',
      val: 'R$ 1,686,801.06',
      p2Val: 'R$ 843,401.00',
      description: '84 sqm residential apartment in the prestigious Gávea neighborhood, featuring 2 bedrooms (1 en-suite), spacious living room, guest bathroom, kitchen, full maid service quarter, and 2 parking spaces. Prime location near PUC-Rio, Shopping da Gávea, Planetarium, and top restaurants.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation and 2nd auction minimum bid?", a: "Court valuation is R$ 1,686,801.06. 2nd Auction starting bid is R$ 843,401.00 (50% discount)." },
        { q: "What are the apartment specs and features?", a: "84 sqm 2-bedroom apartment (1 suite), guest bath, living room, kitchen, maid quarter, and 2 parking spots in Gávea." },
        { q: "How is legal due diligence conducted?", a: "We audit Title #31.349 (2nd Registry), municipal IPTU taxes (1.479.851-6), condo fees, and court case proceedings." },
        { q: "Why invest in Gávea real estate?", a: "Gávea is one of Rio's most sought-after upscale South Zone neighborhoods with strong capital preservation and high rental demand." },
        { q: "How to contact the legal advisory team?", a: "Contact us via WhatsApp or visit our Ipanema office to get a complete legal feasibility report." }
      ]
    }
  },

  // Botafogo - Praia de Botafogo 356 - Apto 1138
  'botafogo-praia-356': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Praia de Botafogo nº 356 — Apto 1138',
      subtitle: 'Praia de Botafogo, nº 356, Apto 1138 — Botafogo, Rio de Janeiro/RJ | 21 m²',
      address: 'Praia de Botafogo, 356 - Apto 1138 — Botafogo, Rio de Janeiro - RJ',
      p1Date: '17/08/2026 às 12:00h',
      p2Date: '20/08/2026 às 12:00h',
      process: 'Sob consulta',
      court: '3º Ofício de Registro de Imóveis / TJRJ',
      iptu: '0.651.974-8',
      rgi: '38.841 (3º RGI/RJ)',
      val: 'R$ 355.000,42',
      p2Val: 'R$ 213.000,25',
      description: 'Apartamento residencial com 21 metros quadrados (Apto 1138) situado na Praia de Botafogo nº 356, Botafogo/RJ. A unidade conta com um pequeno rol de entrada que funciona como cozinha e dá acesso ao banheiro, além de um quarto pequeno em bom estado de conservação. O edifício, construído em 1958, possui 12 andares com até 58 apartamentos por andar, 10 elevadores, serviço de portaria 24 horas e monitoramento por câmeras no térreo e nos elevadores (sem garagem e sem área de lazer). Localização nobre em frente à Enseada de Botafogo com acesso facilitado a metrô, shoppings e centros comerciais da Zona Sul.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça do leilão na Praia de Botafogo?", a: "O imóvel possui avaliação judicial oficial de R$ 355.000,42. Na 2ª Praça (20/08/2026 às 12:00), o lance inicial previsto no edital é de R$ 213.000,25 (observando-se as regras judiciais do leilão e o limite mínimo da 2ª praça)." },
        { q: "Quais são as características do apartamento 1138 e do edifício?", a: "Unidade residencial com 21 metros quadrados (21 m²) em bom estado de conservação, composta por um pequeno rol de entrada que funciona como cozinha e dá acesso ao banheiro, e um quarto pequeno. Edifício de 1958 com 12 andares, portaria 24h, 10 elevadores e circuito de câmeras." },
        { q: "Como é realizada a auditoria jurídica prévia para este imóvel em Botafogo?", a: "Auditamos minuciosamente a Matrícula nº 38.841 do 3º RGI, débitos de IPTU (0.651.974-8), eventuais cotas condominiais e a integridade processual da execução para garantir segurança jurídica na arrematação." },
        { q: "Qual a vantagem da localização na Praia de Botafogo para investimento?", a: "A Praia de Botafogo é um dos pontos mais estratégicos da Zona Sul carioca, com vista para a Enseada e Pão de Açúcar, próximo a estação de metrô, shopping center e transporte para toda a cidade, oferecendo excelente liquidez e rentabilidade para locação." },
        { q: "Como solicitar o parecer jurídico de viabilidade com os advogados?", a: "Entre em contato via WhatsApp ou agende atendimento presencial em nosso escritório em Ipanema para obter relatório detalhado de viabilidade antes de licitar." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Praia de Botafogo nº 356 — Apto 1138',
      subtitle: 'Praia de Botafogo, nº 356, Apto 1138 — Botafogo, Río de Janeiro/RJ | 21 m²',
      address: 'Praia de Botafogo, 356 - Apto 1138 — Botafogo, Río de Janeiro - RJ',
      p1Date: '17/08/2026 a las 12:00h',
      p2Date: '20/08/2026 a las 12:00h',
      process: 'Bajo consulta',
      court: '3º Registro de Inmuebles / TJRJ',
      iptu: '0.651.974-8',
      rgi: '38.841 (3º RGI/RJ)',
      val: 'R$ 355.000,42',
      p2Val: 'R$ 213.000,25',
      description: 'Apartamento residencial con 21 metros cuadrados en buen estado de conservación (Apto 1138) situado en la Praia de Botafogo nº 356. Cuenta con un pequeño recibidor que funciona como cocina y da acceso al baño, y una pequeña habitación. Edificio de 1958 de 12 plantas con portería 24h, cámaras de seguridad y 10 ascensores.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la tasación oficial y la puja mínima en 2ª Subasta?", a: "Tasación oficial de R$ 355.000,42. En la 2ª Subasta (20/08/2026 a las 12:00), la oferta inicial es de R$ 213.000,25." },
        { q: "¿Cuáles son las características del apartamento y del edificio?", a: "Unidad residencial de 21 metros cuadrados en buen estado que consta de recibidor/cocina, baño y dormitorio. Edificio de 1958 con 10 ascensores y seguridad 24 horas." },
        { q: "¿Cómo se analiza la viabilidad jurídica?", a: "Auditamos la Matrícula nº 38.841 del 3º RGI, impuestos de IPTU (0.651.974-8), deudas de condominio y la ejecución judicial." },
        { q: "¿Por qué invertir en Praia de Botafogo?", a: "Ubicación privilegiada en la Zona Sur de Río de Janeiro frente al mar, con excelente conexión de transporte y alta demanda de alquiler." },
        { q: "¿Cómo consultar con el equipo de abogados?", a: "Contáctenos vía WhatsApp para solicitar un dictamen jurídico completo de viabilidad antes de la subasta." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment at Praia de Botafogo #356 — Apt 1138',
      subtitle: 'Praia de Botafogo, #356, Apt 1138 — Botafogo, Rio de Janeiro/RJ | 21 m²',
      address: 'Praia de Botafogo, 356 - Apt 1138 — Botafogo, Rio de Janeiro - RJ',
      p1Date: '08/17/2026 at 12:00 PM',
      p2Date: '08/20/2026 at 12:00 PM',
      process: 'Upon request',
      court: '3rd Land Registry Court / TJRJ',
      iptu: '0.651.974-8',
      rgi: '38.841 (3rd Land Registry)',
      val: 'R$ 355,000.42',
      p2Val: 'R$ 213,000.25',
      description: 'Well-maintained residential apartment (Apt 1138) spanning 21 square meters (21 m²) located at Praia de Botafogo #356. Features an entry hall serving as a kitchen with bathroom access, and a compact bedroom in good condition. Built in 1958, the 12-story building features 10 elevators, 24-hour concierge service, and CCTV monitoring in the lobby and elevators.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation and 2nd auction minimum bid?", a: "Court valuation is R$ 355,000.42. The 2nd Auction starting bid is R$ 213,000.25 (08/20/2026 at 12:00 PM)." },
        { q: "What are the apartment specs and building features?", a: "Compact residential unit of 21 square meters in good condition with entryway/kitchen, bathroom, and bedroom. 1958 building with 10 elevators and 24h security." },
        { q: "How is legal due diligence conducted?", a: "We audit Title #38.841 (3rd Registry), municipal IPTU taxes (0.651.974-8), condo fees, and court proceedings." },
        { q: "Why invest in Praia de Botafogo real estate?", a: "Prime waterfront location in Rio's South Zone with great subway access, shopping centers, and high rental liquidity." },
        { q: "How to contact the legal advisory team?", a: "Reach out via WhatsApp or visit our Ipanema office to get a complete legal feasibility report." }
      ]
    }
  },
  // 17. Santa Teresa - Rua Costa Bastos 8 Apto 1001
  'santa-teresa-costa-bastos': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Rua Costa Bastos nº 8 — Santa Teresa',
      subtitle: 'Rua Costa Bastos, nº 8, Apto 1001 — Santa Teresa, Rio de Janeiro/RJ | Oportunidade com 51 m², Sol da Manhã e Frente para a Rua',
      address: 'Rua Costa Bastos, 8 - Apto 1001 — Santa Teresa, Rio de Janeiro - RJ',
      p1Date: '13/08/2026 às 12:20h',
      p2Date: '18/08/2026 às 12:20h',
      process: 'Sob consulta no edital',
      court: 'Comarca da Capital / TJRJ',
      iptu: 'Sob consulta na certidão fiscal',
      rgi: 'Matrícula nº 97.791 (2º RGI/RJ)',
      val: 'R$ 290.000,00',
      p2Val: 'R$ 145.000,00 (50% de desconto)',
      description: 'Apartamento residencial situado na Rua Costa Bastos, nº 8, Apto 1001, em Santa Teresa/RJ, com 51 metros quadrados. Unidade de frente para a rua, exposta ao sol da manhã, sem vaga de garagem, composta de quarto, sala, cozinha e banheiro, provavelmente em estado de conservação. Prédio antigo com serviço de portaria e sem área de lazer. Segunda praça com lance inicial de 50% do valor de avaliação (R$ 145.000,00).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação oficial e o lance mínimo na 2ª Praça do apartamento em Santa Teresa?", a: "O imóvel foi avaliado judicialmente em R$ 290.000,00. Na 1ª Praça (13/08/2026 às 12:20h), o lance mínimo corresponde ao valor integral da avaliação. Na 2ª Praça (18/08/2026 às 12:20h), o lance inicial será de 50% do valor da avaliação, ou seja, R$ 145.000,00." },
        { q: "Quais são as características físicas e a divisão interna do apartamento na Rua Costa Bastos nº 8?", a: "O apartamento 1001 possui 51 metros quadrados, posição de frente para a rua, excelente exposição ao sol da manhã e não dispõe de vaga de garagem. É composto por sala, quarto, cozinha e banheiro, encontrando-se provavelmente em estado de conservação. O prédio é antigo, conta com serviço de portaria e não possui área de lazer." },
        { q: "Como é verificada a situação registral da Matrícula nº 97.791 do 2º RGI/RJ?", a: "Nossa assessoria jurídica realiza a auditoria integral da Matrícula nº 97.791 do Cartório do 2º Ofício de Registro de Imóveis da cidade do Rio de Janeiro, verificando penhoras, hipotecas, indisponibilidades e a correta sub-rogação dos débitos tributários e condominiais no preço da arrematação, conforme o art. 130, parágrafo único, do CTN e o art. 908 do CPC." },
        { q: "Qual é o potencial de valorização e investimento imobiliário no bairro de Santa Teresa?", a: "Santa Teresa é um dos bairros mais charmosos, turísticos e valorizados do Rio de Janeiro, conhecido por sua arquitetura histórica, circuito gastronômico e proximidade com o Centro da cidade e a Zona Sul. Um apartamento de 51 m² arrematado com 50% de desconto por R$ 145.000,00 apresenta excelente liquidez para locação residencial tradicional ou de temporada, bem como ótimo potencial de valorização patrimonial." },
        { q: "Como funciona a assessoria jurídica especializada em leilão de imóveis no RJ e imissão na posse?", a: "Atuamos em todas as etapas: análise prévia do edital e riscos processuais, estratégia de lances, representação no leilão, parcelamento judicial (art. 895 do CPC), baixa de gravames registrais e providências para expedição da Carta de Arrematação e Mandado de Imissão na Posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Calle Costa Bastos nº 8 — Santa Teresa',
      subtitle: 'Calle Costa Bastos, nº 8, Apto 1001 — Santa Teresa, Río de Janeiro/RJ | Oportunidad con 51 m², Sol de Mañana y Frente a la Calle',
      address: 'Calle Costa Bastos, 8 - Apto 1001 — Santa Teresa, Río de Janeiro - RJ',
      p1Date: '13/08/2026 a las 12:20h',
      p2Date: '18/08/2026 a las 12:20h',
      process: 'Bajo consulta',
      court: 'Comarca de la Capital / TJRJ',
      iptu: 'Bajo consulta fiscal',
      rgi: 'Matrícula nº 97.791 (2º RGI/RJ)',
      val: 'R$ 290.000,00',
      p2Val: 'R$ 145.000,00 (50% de descuento)',
      description: 'Apartamento residencial ubicado en la Calle Costa Bastos, nº 8, Apto 1001, en Santa Teresa/RJ, con 51 metros cuadrados. Unidad frente a la calle, con sol de mañana, sin plaza de garaje, compuesta por dormitorio, salón, cocina y baño, en buen estado de conservación. Edificio antiguo con portería y sin área de ocio. Segunda subasta con puja inicial del 50% del valor de evaluación (R$ 145.000,00).',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la evaluación oficial y la puja mínima en 2ª Subasta del apartamento en Santa Teresa?", a: "Evaluación oficial de R$ 290.000,00. En la 1ª Subasta (13/08/2026 a las 12:20h), la puja mínima equivale al 100%. En la 2ª Subasta (18/08/2026 a las 12:20h), la oferta inicial será del 50% de la evaluación, es decir, R$ 145.000,00." },
        { q: "¿Cuáles son las características físicas y división interna del apartamento en Costa Bastos nº 8?", a: "El apartamento 1001 tiene 51 metros cuadrados, orientación frente a la calle, excelente sol de mañana y sin garaje. Consta de salón, dormitorio, cocina y baño, en buen estado. Edificio clásico con portería." },
        { q: "¿Cómo se verifica la situación registral de la Matrícula nº 97.791 del 2º RGI/RJ?", a: "Auditamos la Matrícula nº 97.791 del 2º Registro de Inmuebles de Río de Janeiro, verificando gravámenes, embargos y subrogación de deudas según la ley brasileña." },
        { q: "¿Por qué invertir en inmuebles en el barrio de Santa Teresa?", a: "Santa Teresa es un barrio histórico y turístico con alta demanda de alquiler residencial y vacacional, ofreciendo una gran revalorización patrimonial." },
        { q: "¿Cómo contactar con el equipo de abogados para asesoría?", a: "Contáctenos vía WhatsApp para solicitar un dictamen jurídico completo de viabilidad antes de la subasta." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Costa Bastos St #8 — Santa Teresa',
      subtitle: 'Costa Bastos St, #8, Apt 1001 — Santa Teresa, Rio de Janeiro/RJ | 51 m² Opportunity, Morning Sun & Street Frontage',
      address: 'Costa Bastos St, 8 - Apt 1001 — Santa Teresa, Rio de Janeiro - RJ',
      p1Date: '08/13/2026 at 12:20 PM',
      p2Date: '08/18/2026 at 12:20 PM',
      process: 'Upon request',
      court: 'Rio de Janeiro Capital Court / TJRJ',
      iptu: 'Upon tax inquiry',
      rgi: 'Title #97,791 (2nd Land Registry)',
      val: 'R$ 290,000.00',
      p2Val: 'R$ 145,000.00 (50% discount)',
      description: 'Residential apartment located at Costa Bastos St, #8, Apt 1001, Santa Teresa/RJ, spanning 51 square meters. Street-facing unit with morning sun exposure, no garage space, featuring a bedroom, living room, kitchen, and bathroom, likely in well-maintained condition. Traditional building with concierge service and no leisure amenities. Second auction starting bid at 50% of the appraised value (R$ 145,000.00).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation and 2nd auction minimum bid for the Santa Teresa apartment?", a: "Court valuation is R$ 290,000.00. The 1st Auction (08/13/2026 at 12:20 PM) starts at 100% of appraisal. The 2nd Auction (08/18/2026 at 12:20 PM) starting bid is R$ 145,000.00 (a 50% discount)." },
        { q: "What are the physical specs and layout of the apartment on Costa Bastos St #8?", a: "Unit 1001 spans 51 square meters, faces the street with morning sun exposure, and has no garage space. It features a living room, bedroom, kitchen, and bathroom in good condition. Traditional building with concierge service." },
        { q: "How is legal due diligence conducted on Title #97,791 (2nd Land Registry)?", a: "We audit Title #97,791 from the 2nd Real Estate Registry of Rio de Janeiro, verifying mortgages, attachments, and subrogation of tax/condo debts under Brazilian law." },
        { q: "Why invest in real estate in Santa Teresa, Rio de Janeiro?", a: "Santa Teresa is a historic, artistic, and highly sought-after neighborhood with strong demand for both long-term and short-term residential rentals." },
        { q: "How to contact the legal advisory team?", a: "Reach out via WhatsApp or visit our Ipanema office to get a complete legal feasibility report." }
      ]
    }
  },

  // Centro - Rua Riachuelo 220 - Apto 1103 (Kitnet / 33 m²)
  'centro-riachuelo-220': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Rua Riachuelo nº 220 — Apto 1103',
      subtitle: 'Rua Riachuelo, nº 220, Apto 1103 — Centro, Rio de Janeiro/RJ | 33 m² • Kitnet de Frente',
      address: 'Rua Riachuelo, 220 - Apto 1103 — Centro, Rio de Janeiro - RJ',
      p1Date: '31/08/2026 às 12:50h',
      p2Date: '03/09/2026 às 12:50h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '097801',
      rgi: '80.801 (2º RGI/RJ)',
      val: 'R$ 138.524,00',
      p2Val: 'R$ 69.262,00 (50% do valor da avaliação)',
      description: 'Apartamento 1103 situado na Rua Riachuelo, nº 220, Centro/Rio de Janeiro/RJ, com 33 metros quadrados (33 m²) de área edificada e posição de frente para a rua principal. Trata-se de uma kitnet composta por uma pequena cozinha e banheiro com azulejos em meia parede e piso antigo, corredor e "salão" com taco e janela de alumínio (precisa de reformas). O edifício, de utilização residencial, construído em 1967, está situado no alinhamento da via pública, conta com porteiro 24 horas e circuito interno de TV, dois elevadores com capacidade para seis passageiros cada e salão de festas, com acesso por escada com cinco degraus.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação oficial e o valor de lance mínimo em 2ª Praça para o apartamento 1103 na Rua Riachuelo nº 220?", a: "O imóvel foi avaliado oficialmente em R$ 138.524,00. No 1º Leilão (31/08/2026 às 12:50h), o lance mínimo corresponde ao valor integral da avaliação (R$ 138.524,00). No 2º Leilão (03/09/2026 às 12:50h), o lance mínimo será de 50% do valor da avaliação, ou seja, apenas R$ 69.262,00." },
        { q: "Quais são as características físicas e o estado de conservação do apartamento 1103?", a: "Trata-se de uma kitnet de frente para a rua principal com 33 metros quadrados (33 m²), composta por pequena cozinha e banheiro com azulejos em meia parede e piso antigo, corredor e salão principal com piso de taco e janela de alumínio. O imóvel necessita de reformas e modernização, o que permite excelente ganho patrimonial ao arrematante." },
        { q: "Quais são as infraestruturas e facilidades oferecidas pelo condomínio na Rua Riachuelo nº 220?", a: "O edifício residencial, construído em 1967, conta com portaria 24 horas, circuito interno de TV para monitoramento de segurança, dois elevadores com capacidade para seis passageiros cada, salão de festas e hall de acesso por escada de cinco degraus." },
        { q: "Como é feita a auditoria jurídica da Matrícula nº 80.801 do 2º RGI e da Inscrição IPTU nº 097801?", a: "Nossa equipe realiza auditoria completa da Matrícula nº 80.801 junto ao 2º Ofício de Registro de Imóveis do Rio de Janeiro e certidões fiscais da Prefeitura (IPTU 097801), verificando penhoras, hipotecas e assegurando a aplicação do art. 130, parágrafo único, do CTN para sub-rogação de débitos tributários no preço de arrematação." },
        { q: "Por que investir em kitnets e apartamentos compactos no Centro do Rio de Janeiro?", a: "A Rua Riachuelo e o Centro do Rio de Janeiro vivenciam forte revitalização e procura por locação residencial e estudantil devido à proximidade com sedes de grandes empresas, universidades, tribunais, metrô e comércio diversificado, garantindo alta liquidez e excelente rentabilidade de locação (ROI)." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Calle Riachuelo nº 220 — Apto 1103',
      subtitle: 'Calle Riachuelo, nº 220, Apto 1103 — Centro, Río de Janeiro/RJ | 33 m² • Estudio Exterior',
      address: 'Calle Riachuelo, 220 - Apto 1103 — Centro, Río de Janeiro - RJ',
      p1Date: '31/08/2026 a las 12:50h',
      p2Date: '03/09/2026 a las 12:50h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '097801',
      rgi: '80.801 (2º RGI/RJ)',
      val: 'R$ 138.524,00',
      p2Val: 'R$ 69.262,00 (50% de la evaluación)',
      description: 'Apartamento 1103 en Calle Riachuelo nº 220, Centro/Río de Janeiro, con 33 metros cuadrados (33 m²) y orientación exterior hacia la calle principal. Se trata de un estudio (kitnet) que consta de cocina compacta y baño con azulejos a media altura, pasillo y salón con suelo de madera y ventana de aluminio (requiere reforma). Edificio residencial de 1967 con portería 24 horas, cámaras de seguridad, dos ascensores para 6 personas y salón de fiestas.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y la puja mínima en 2ª Subasta para el apartamento en Calle Riachuelo?", a: "Valoración oficial de R$ 138.524,00. En la 1ª Subasta (31/08/2026 a las 12:50h), la puja mínima equivale al 100%. En la 2ª Subasta (03/09/2026 a las 12:50h), la puja inicial será de solo el 50%, es decir, R$ 69.262,00." },
        { q: "¿Cuáles son las características del apartamento 1103 y su estado de conservación?", a: "Estudio (kitnet) de 33 m² exterior hacia la calle principal, compuesto por cocina pequeña, baño, pasillo y salón principal con ventana de aluminio. Requiere reformas, ofreciendo un gran potencial de revalorización." },
        { q: "¿Qué servicios e infraestructura ofrece el edificio de 1967?", a: "El edificio cuenta con portería 24 horas, circuito cerrado de TV, dos ascensores y salón de fiestas, ubicado en una zona céntrica y conectada." },
        { q: "¿Cómo se audita la Matrícula nº 80.801 del 2º RGI/RJ?", a: "Realizamos una due diligence completa de la Matrícula nº 80.801 del 2º Registro de Inmuebles y del IPTU 097801 para garantizar una adquisición libre de cargas procesales o fiscales previas." },
        { q: "¿Por qué invertir en estudios compactos en el Centro de Río de Janeiro?", a: "Alta liquidez y rentabilidad de alquiler debido a la demanda continua de estudiantes, funcionarios y profesionales del centro de la ciudad." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Riachuelo St #220 — Apt 1103',
      subtitle: 'Riachuelo St, #220, Apt 1103 — Downtown (Centro), Rio de Janeiro/RJ | 33 m² Studio • Front-Facing',
      address: 'Riachuelo St, 220 - Apt 1103 — Downtown (Centro), Rio de Janeiro - RJ',
      p1Date: '08/31/2026 at 12:50 PM',
      p2Date: '09/03/2026 at 12:50 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '097801',
      rgi: 'Title #80,801 (2nd Land Registry)',
      val: 'R$ 138,524.00',
      p2Val: 'R$ 69,262.00 (50% discount)',
      description: 'Apartment 1103 located at Riachuelo St #220, Downtown (Centro), Rio de Janeiro/RJ, featuring 33 square meters (33 m²) of built area and front-facing street exposure. Compact studio (kitnet) comprising a small kitchen and bathroom with half-tiled walls and classic flooring, hallway, and main salon with parquet wood floors and aluminum window (in need of renovation). Built in 1967, the residential building features 24-hour concierge service, CCTV monitoring, two elevators (6-passenger capacity each), and a party hall.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation and 2nd auction minimum bid for Apt 1103 on Riachuelo St?", a: "Official court valuation is R$ 138,524.00. The 1st Auction (08/31/2026 at 12:50 PM) starts at 100% of appraisal. The 2nd Auction (09/03/2026 at 12:50 PM) starts at a 50% discount, only R$ 69,262.00." },
        { q: "What are the physical specifications and renovation condition of Apartment 1103?", a: "It is a 33 m² front-facing studio (kitnet) featuring a small kitchen, bathroom, hallway, and living salon with parquet floors and aluminum window. It requires renovation, offering significant equity gain upon modernization." },
        { q: "What amenities and security features does the 1967 building provide?", a: "The building offers 24-hour concierge security, internal CCTV monitoring, two elevators (each with 6-passenger capacity), and a party room." },
        { q: "How is legal due diligence conducted for Title #80,801 (2nd Land Registry)?", a: "We conduct a complete legal audit of Title #80,801 at the 2nd Real Estate Registry of Rio de Janeiro and IPTU tax records (#097801), ensuring full subrogation of prior tax debts under Brazilian Tax Code Article 130." },
        { q: "Why invest in compact studio apartments in Downtown Rio de Janeiro?", a: "Downtown Rio (Centro) is experiencing strong rental liquidity driven by students, corporate professionals, and proximity to subway lines, universities, and major courts." }
      ]
    }
  },

  // Copacabana - Avenida Atlântica 3806 - Apto 312 (27 m² / Fundos)
  'copacabana-atlantica-3806': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Avenida Atlântica nº 3806 — Apto 312',
      subtitle: 'Avenida Atlântica, nº 3806, Apto 312 (Entrada pela Av. N. Sra. de Copacabana, 1241) — Copacabana, Rio de Janeiro/RJ | 27 m² • Fundos',
      address: 'Avenida Atlântica, 3806 - Apto 312 (Entrada suplementar: Av. N. Sra. de Copacabana, 1241) — Copacabana, Rio de Janeiro - RJ',
      p1Date: '02/09/2026 às 14:00h',
      p2Date: '14/09/2026 às 14:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0.596.643-7',
      rgi: '29.681 (5º RGI/RJ)',
      val: 'R$ 450.100,00',
      p2Val: 'R$ 225.100,00 (50% do valor da avaliação)',
      description: 'Apartamento residencial 312 com 27 metros quadrados (27 m²) de área edificada, situado em posição de fundos no edifício localizado na Avenida Atlântica, nº 3806, com entrada suplementar pela Avenida Nossa Senhora de Copacabana, nº 1241, no bairro de Copacabana, Rio de Janeiro/RJ. Edifício construído em 1955, de utilização residencial, situado em localização nobre na orla de Copacabana (Posto 5/6), próximo ao metrô, praias e diversificado comércio da Zona Sul.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação oficial e o valor de lance mínimo em 2ª Praça para o apartamento 312 na Avenida Atlântica nº 3806?", a: "O imóvel foi avaliado oficialmente em R$ 450.100,00. No 1º Leilão (02/09/2026 às 14:00h), o lance mínimo corresponde a 100% da avaliação (R$ 450.100,00). No 2º Leilão (14/09/2026 às 14:00h), o lance mínimo será com 50% de desconto, por apenas R$ 225.100,00." },
        { q: "Quais são as características do apartamento 312 e do edifício em Copacabana?", a: "Unidade residencial de fundos com 27 metros quadrados (27 m²) de área edificada. Prédio construído em 1955 com portaria e circuito interno, situado na orla da Avenida Atlântica nº 3806 com acesso suplementar pela Av. Nossa Senhora de Copacabana nº 1241." },
        { q: "Como é feita a auditoria jurídica da Matrícula nº 29.681 do 5º RGI e IPTU nº 0.596.643-7?", a: "Nossa assessoria jurídica realiza due diligence completa da Matrícula nº 29.681 junto ao 5º RGI/RJ, débitos fiscais de IPTU (0.596.643-7), taxas condominiais e a integridade da execução no TJRJ, assegurando sub-rogação de tributos nos termos do art. 130 do CTN." },
        { q: "Por que investir em apartamentos compactos na orla de Copacabana (Av. Atlântica)?", a: "Apartamentos na Avenida Atlântica possuem valorização contínua e demanda altíssima para locação residencial e por temporada (Airbnb), impulsionados pela proximidade com a praia, transporte farto e turismo na Zona Sul carioca." },
        { q: "Como solicitar o parecer jurídico de viabilidade com os advogados antes de licitar?", a: "Entre em contato via WhatsApp ou agende atendimento presencial em nosso escritório em Ipanema para obter relatório minucioso de análise de edital e certidões." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Avenida Atlântica nº 3806 — Apto 312',
      subtitle: 'Avenida Atlântica, nº 3806, Apto 312 (Acceso por Av. N. Sra. de Copacabana, 1241) — Copacabana, Río de Janeiro/RJ | 27 m² • Interior',
      address: 'Avenida Atlântica, 3806 - Apto 312 (Entrada suplementaria: Av. N. Sra. de Copacabana, 1241) — Copacabana, Río de Janeiro - RJ',
      p1Date: '02/09/2026 a las 14:00h',
      p2Date: '14/09/2026 a las 14:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0.596.643-7',
      rgi: '29.681 (5º RGI/RJ)',
      val: 'R$ 450.100,00',
      p2Val: 'R$ 225.100,00 (50% de la evaluación)',
      description: 'Apartamento residencial 312 de 27 metros cuadrados (27 m²), de orientación interior (fundos), ubicado en la Avenida Atlântica nº 3806, con entrada suplementaria por Avenida Nossa Senhora de Copacabana nº 1241. Edificio residencial construido en 1955 en primera línea de playa de Copacabana.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y la puja mínima en 2ª Subasta para el apto 312 en Av. Atlântica?", a: "Valoración oficial de R$ 450.100,00. En la 1ª Subasta (02/09/2026 a las 14:00h), puja del 100%. En la 2ª Subasta (14/09/2026 a las 14:00h), puja inicial del 50%, es decir, R$ 225.100,00." },
        { q: "¿Cuáles son las características del apartamento y del edificio de 1955?", a: "Apartamento de 27 m² interior (fundos) en edificio de 1955 frente al mar con doble acceso por Av. Atlântica y Av. Nossa Senhora de Copacabana." },
        { q: "¿Cómo se analiza la viabilidad jurídica?", a: "Auditamos la Matrícula nº 29.681 del 5º RGI, deudas de IPTU (0.596.643-7) y expediente del TJRJ." },
        { q: "¿Por qué invertir en Copacabana?", a: "Alta rentabilidad en alquiler vacacional y residencial en la playa más famosa de Río de Janeiro." },
        { q: "¿Cómo consultar con el equipo de abogados?", a: "Contáctenos vía WhatsApp para obtener el informe completo de viabilidad jurídica." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment at Avenida Atlântica #3806 — Apt 312',
      subtitle: 'Avenida Atlântica, #3806, Apt 312 (Access via Av. N. Sra. de Copacabana, 1241) — Copacabana, Rio de Janeiro/RJ | 27 m² • Rear View',
      address: 'Avenida Atlântica, 3806 - Apt 312 (Extra entrance: Av. N. Sra. de Copacabana, 1241) — Copacabana, Rio de Janeiro - RJ',
      p1Date: '09/02/2026 at 02:00 PM',
      p2Date: '09/14/2026 at 02:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0.596.643-7',
      rgi: 'Title #29,681 (5th Land Registry)',
      val: 'R$ 450,100.00',
      p2Val: 'R$ 225,100.00 (50% discount)',
      description: 'Residential apartment 312 featuring 27 square meters (27 m²) of built area, rear-facing position, located at Avenida Atlântica #3806 with additional entrance at Avenida Nossa Senhora de Copacabana #1241, Copacabana, Rio de Janeiro/RJ. 1955 residential building on Copacabana beachfront.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation and 2nd auction minimum bid for Apt 312 on Av. Atlântica?", a: "Official court valuation is R$ 450,100.00. 1st Auction (09/02/2026 at 02:00 PM) starts at R$ 450,100.00. 2nd Auction (09/14/2026 at 02:00 PM) starts at a 50% discount, only R$ 225,100.00." },
        { q: "What are the apartment specs and building features?", a: "27 m² rear-facing apartment in a 1955 building on Copacabana oceanfront with dual building entrances." },
        { q: "How is legal due diligence conducted?", a: "We audit Title #29,681 (5th Registry), municipal IPTU taxes (0.596.643-7), and court proceedings." },
        { q: "Why invest in Copacabana beachfront real estate?", a: "Prime beachfront location with continuous asset appreciation and high rental yields." },
        { q: "How to contact the legal advisory team?", a: "Reach out via WhatsApp or visit our Ipanema office for a complete legal report." }
      ]
    }
  },

  // Tijuca - Rua São Francisco Xavier 90 - Apto 503 (93 m² / 2 Vagas / 1971)
  'tijuca-sao-francisco-xavier-90': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Rua São Francisco Xavier nº 90 — Apto 503',
      subtitle: 'Rua São Francisco Xavier, nº 90, Apto 503 — Tijuca, Rio de Janeiro/RJ | 93 m² • 2 Vagas de Garagem • Prédio de 1971',
      address: 'Rua São Francisco Xavier, 90 - Apto 503 — Tijuca, Rio de Janeiro - RJ',
      p1Date: '09/09/2026 às 12:00h',
      p2Date: '11/09/2026 às 12:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0.072.588-7',
      rgi: '37.650 (11º RGI/RJ)',
      val: 'R$ 740.100,00',
      p2Val: 'R$ 370.100,00 (50% do valor da avaliação)',
      description: 'Apartamento residencial 503 com 93 metros quadrados (93 m²) de área edificada conforme constante no IPTU, acompanhado de duas (2) vagas de garagem. O imóvel situa-se no Edifício da Rua São Francisco Xavier, nº 90, constituído por 7 andares mais cobertura, revestimento em pastilhas, duas lojas comerciais no térreo, portaria fechada com portões de ferro e ano de construção de 1971. Localização privilegiada no tradicional bairro da Tijuca, próximo a colégios, comércio variado, metrô e transporte farto.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação oficial e o valor de lance mínimo em 2ª Praça para o apartamento 503 na Rua São Francisco Xavier nº 90?", a: "O imóvel foi avaliado oficialmente pela Justiça em R$ 740.100,00. No 1º Leilão (09/09/2026 às 12:00h), o lance mínimo é de R$ 740.100,00. No 2º Leilão (11/09/2026 às 12:00h), o valor do lance inicial cai para 50% da avaliação, por apenas R$ 370.100,00." },
        { q: "Quais são as características do imóvel e do condomínio na Tijuca?", a: "Apartamento residencial de 93 m² com direito a duas (2) vagas de garagem. O prédio foi construído em 1971, possui 7 andares mais cobertura, fachada em pastilhas, lojas no térreo e portaria fechada com portões de ferro." },
        { q: "Como é realizada a due diligence da Matrícula nº 37.650 do 11º RGI e IPTU nº 0.072.588-7?", a: "Nossa assessoria jurídica especializada efetua auditoria minuciosa da Matrícula nº 37.650 junto ao 11º RGI/RJ, verificação de pendências de IPTU (0.072.588-7), cotas condominiais e certidões dos executados no TJRJ, garantindo arrematação limpa e sub-rogação de débitos fiscais (art. 130 do CTN)." },
        { q: "Por que investir em apartamentos de 93 m² com 2 vagas na Tijuca?", a: "Imóveis amplos de 93 m² com duas vagas de garagem na Tijuca possuem alta liquidez tanto para moradia própria quanto para locação residencial familiar, impulsionados pela proximidade com metrô, Polo Gastronômico e renomadas instituições de ensino." },
        { q: "Como contratar a assessoria jurídica para arrematar este imóvel?", a: "Entre em contato via WhatsApp ou agende uma reunião presencial em nosso escritório para obter relatório completo de análise de risco e acompanhamento integral até a posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Calle São Francisco Xavier nº 90 — Apto 503',
      subtitle: 'Rua São Francisco Xavier, nº 90, Apto 503 — Tijuca, Río de Janeiro/RJ | 93 m² • 2 Plazas de Garaje • Año 1971',
      address: 'Rua São Francisco Xavier, 90 - Apto 503 — Tijuca, Río de Janeiro - RJ',
      p1Date: '09/09/2026 a las 12:00h',
      p2Date: '11/09/2026 a las 12:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0.072.588-7',
      rgi: '37.650 (11º RGI/RJ)',
      val: 'R$ 740.100,00',
      p2Val: 'R$ 370.100,00 (50% de la evaluación)',
      description: 'Apartamento residencial 503 con 93 metros cuadrados (93 m²) de superficie edificada según el IPTU y dos (2) plazas de garaje. Ubicado en edificio de 1971 con 7 plantas más ático, fachada revestida de pastillas y portón de hierro en la Tijuca.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y la puja mínima en 2ª Subasta para el apto 503 en Tijuca?", a: "Valoración judicial de R$ 740.100,00. En la 1ª Subasta (09/09/2026 a las 12:00h), puja de R$ 740.100,00. En la 2ª Subasta (11/09/2026 a las 12:00h), descuento del 50%, siendo la puja mínima de R$ 370.100,00." },
        { q: "¿Cuáles son las características del inmueble y del edificio?", a: "Apartamento de 93 m² con 2 plazas de garaje en edificio de 7 pisos más ático de 1971 en el barrio residencial de Tijuca." },
        { q: "¿Cómo se analiza la viabilidad jurídica?", a: "Auditamos la Matrícula nº 37.650 del 11º RGI, deudas de IPTU (0.072.588-7) y proceso judicial en el TJRJ." },
        { q: "¿Por qué invertir en Tijuca?", a: "Zona de alta demanda residencial con infraestructura completa de metro, colegios y comercio." },
        { q: "¿Cómo consultar con el equipo legal?", a: "Contáctenos vía WhatsApp para informe completo de viabilidad jurídica y representación." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment at Rua São Francisco Xavier #90 — Apt 503',
      subtitle: 'Rua São Francisco Xavier, #90, Apt 503 — Tijuca, Rio de Janeiro/RJ | 93 m² • 2 Parking Spaces • 1971 Building',
      address: 'Rua São Francisco Xavier, 90 - Apt 503 — Tijuca, Rio de Janeiro - RJ',
      p1Date: '09/09/2026 at 12:00 PM',
      p2Date: '09/11/2026 at 12:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0.072.588-7',
      rgi: 'Title #37,650 (11th Land Registry)',
      val: 'R$ 740,100.00',
      p2Val: 'R$ 370,100.00 (50% discount)',
      description: 'Residential apartment 503 featuring 93 square meters (93 m²) of built area per IPTU record, accompanied by two (2) parking spaces. Located in a 1971 building with 7 floors plus penthouse, tile cladding, ground floor shops, and iron gate security in Tijuca, Rio de Janeiro/RJ.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation and 2nd auction minimum bid for Apt 503 in Tijuca?", a: "Court valuation is R$ 740,100.00. 1st Auction (09/09/2026 at 12:00 PM) starts at R$ 740,100.00. 2nd Auction (09/11/2026 at 12:00 PM) starts at a 50% discount, for R$ 370,100.00." },
        { q: "What are the apartment specs and building details?", a: "93 m² apartment with 2 parking spaces in a 1971 building featuring 7 floors plus penthouse in Tijuca." },
        { q: "How is legal due diligence conducted?", a: "We audit Title #37,650 (11th Registry), IPTU taxes (0.072.588-7), and TJRJ court records." },
        { q: "Why invest in Tijuca real estate?", a: "High family residential demand with direct access to subway lines, schools, and commercial hubs." },
        { q: "How to hire legal advisory for this auction?", a: "Contact us via WhatsApp for a comprehensive legal risk report and representation." }
      ]
    }
  },

  // Tijuca - Rua Delgado de Carvalho 75 - Cobertura 01 (106 m² / Garagem / 1965)
  'tijuca-delgado-carvalho-75': {
    pt: {
      title: 'Leilão Judicial de Cobertura na Rua Delgado de Carvalho nº 75 — Cobertura 01',
      subtitle: 'Rua Delgado de Carvalho, nº 75, Cobertura 01 — Tijuca, Rio de Janeiro/RJ | 106 m² • Com Garagem • Prédio de 1965',
      address: 'Rua Delgado de Carvalho, 75 - Cobertura 01 — Tijuca, Rio de Janeiro - RJ',
      p1Date: 'Lances: 06/07/2026 (19:30h) | Pregão: 12/08/2026 às 13:00h',
      p2Date: 'Lances: 12/08/2026 (13:03h) | Pregão: 26/08/2026 às 13:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '733.892-4',
      rgi: '99.412 (11º RGI/RJ)',
      val: 'R$ 668.000,00',
      p2Val: 'R$ 334.000,00 (50% do valor da avaliação)',
      description: 'Cobertura residencial 01 com 106 metros quadrados (106 m²) de área edificada conforme constante no IPTU e direito a vaga de garagem com duas entradas laterais. O imóvel situa-se no Edifício da Rua Delgado de Carvalho, nº 75, prédio antigo construído em 1965, sem playground, com amplo espaço frontal à portaria antecedido por portão de calçada com bancos e piso em mármore. Excelente localização na Tijuca, em rua estritamente residencial e valorizada.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é a avaliação oficial e o valor de lance inicial na 2ª Praça para a Cobertura 01 na Rua Delgado de Carvalho nº 75?", a: "O imóvel foi avaliado judicialmente em R$ 668.000,00. No 1º Leilão (abertura de lances em 06/07/2026 e pregão ao vivo em 12/08/2026 às 13:00h), o lance inicial é R$ 668.000,00. No 2º Leilão (abertura de lances em 12/08/2026 às 13:03h e pregão ao vivo em 26/08/2026 às 13:00h), o lance inicial é de 50% da avaliação, por R$ 334.000,00." },
        { q: "Quais são as características da cobertura e da infraestrutura do prédio?", a: "Cobertura residencial de 106 m² edificados. O edifício (ano de construção 1965) possui garagem com duas entradas laterais, amplo espaço frontal à portaria antecedido por portão com piso em mármore e bancos." },
        { q: "Como é feita a auditoria jurídica da Matrícula nº 99.412 e IPTU nº 733.892-4?", a: "Nossa equipe realiza due diligence detalhada da Matrícula nº 99.412 junto ao 11º RGI/RJ, consulta débitos municipais de IPTU (733.892-4), pendências condominiais e certidões dos executados no TJRJ para garantir arrematação livre de ônus pregressos (art. 130 do CTN)." },
        { q: "Por que investir em coberturas residenciais na Tijuca?", a: "Coberturas de 106 m² na Tijuca oferecem área privativa diferenciada e alta valorização imobiliária, combinando o charme de rua arborizada e tranquila com fácil acesso ao comércio local, metrô e serviços." },
        { q: "Como obter a assessoria jurídica para arrematar esta cobertura em leilão?", a: "Entre em contato via WhatsApp ou agende uma reunião em nosso escritório de Ipanema para emitirmos parecer de viabilidade jurídica e acompanharmos seu lance até a imissão na posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Ático/Cobertura en Calle Delgado de Carvalho nº 75 — Cobertura 01',
      subtitle: 'Rua Delgado de Carvalho, nº 75, Cobertura 01 — Tijuca, Río de Janeiro/RJ | 106 m² • Con Garaje • Edificio de 1965',
      address: 'Rua Delgado de Carvalho, 75 - Cobertura 01 — Tijuca, Río de Janeiro - RJ',
      p1Date: 'Pujas: 06/07/2026 (19:30h) | Subasta en vivo: 12/08/2026 a las 13:00h',
      p2Date: 'Pujas: 12/08/2026 (13:03h) | Subasta en vivo: 26/08/2026 a las 13:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '733.892-4',
      rgi: '99.412 (11º RGI/RJ)',
      val: 'R$ 668.000,00',
      p2Val: 'R$ 334.000,00 (50% de la evaluación)',
      description: 'Ático/cobertura residencial 01 con 106 metros cuadrados (106 m²) según el IPTU y plaza de garaje. Ubicado en edificio clásico de 1965 con amplio vestíbulo de mármol y garaje con dos entradas laterales en Tijuca.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración y puja mínima en 2ª Subasta para el ático en Delgado de Carvalho nº 75?", a: "Valoración judicial de R$ 668.000,00. En la 1ª Subasta, puja inicial de R$ 668.000,00. En la 2ª Subasta (pregão 26/08/2026), puja inicial del 50%, por R$ 334.000,00." },
        { q: "¿Cuáles son las características del inmueble?", a: "Ático/cobertura de 106 m² con garaje en edificio tradicional de 1965 con entradas laterales de garaje en Tijuca." },
        { q: "¿Cómo se audita la Matrícula nº 99.412 del 11º RGI?", a: "Revisamos la matrícula nº 99.412, deudas de IPTU (733.892-4) y el expediente judicial en TJRJ." },
        { q: "¿Por qué invertir en un ático en Tijuca?", a: "Excelente potencial de valorización en zona residencial consolidada." },
        { q: "¿Cómo solicitar la asesoría legal?", a: "Contáctenos vía WhatsApp para evaluación de riesgos y acompañamiento integral." }
      ]
    },
    en: {
      title: 'Judicial Auction of Penthouse at Rua Delgado de Carvalho #75 — Cobertura 01',
      subtitle: 'Rua Delgado de Carvalho, #75, Cobertura 01 — Tijuca, Rio de Janeiro/RJ | 106 m² • Parking Space • 1965 Building',
      address: 'Rua Delgado de Carvalho, 75 - Cobertura 01 — Tijuca, Rio de Janeiro - RJ',
      p1Date: 'Bids open: 07/06/2026 (7:30 PM) | Live auction: 08/12/2026 at 1:00 PM',
      p2Date: 'Bids open: 08/12/2026 (1:03 PM) | Live auction: 08/26/2026 at 1:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '733.892-4',
      rgi: 'Title #99,412 (11th Land Registry)',
      val: 'R$ 668,000.00',
      p2Val: 'R$ 334,000.00 (50% discount)',
      description: 'Residential penthouse 01 featuring 106 square meters (106 m²) of built area per IPTU record, plus parking space with dual side entrances. Located in a classic 1965 building with marble entrance floor and iron gated security in Tijuca, Rio de Janeiro/RJ.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the valuation and 2nd auction opening bid for the penthouse at Rua Delgado de Carvalho #75?", a: "Official court valuation is R$ 668,000.00. 1st Auction opening bid is R$ 668,000.00. 2nd Auction (live bidding 08/26/2026) opens at 50% discount, for R$ 334,000.00." },
        { q: "What are the specs of the property and building?", a: "106 m² residential penthouse with parking in a 1965 building with marble entry courtyard in Tijuca." },
        { q: "How is legal due diligence performed for Title #99,412?", a: "We audit Title #99,412 (11th Registry), IPTU records (733.892-4), condo fees, and TJRJ judicial proceedings." },
        { q: "Why invest in Tijuca penthouse properties?", a: "Prime residential location offering strong capital appreciation and family living appeal." },
        { q: "How to engage legal advisory services for this auction?", a: "Reach out via WhatsApp to receive a complete legal risk audit and bidding strategy." }
      ]
    }
  },

  // Copacabana - Rua Tonelero 202 - Prédio Hoteleiro / Comercial (3.760 m² / Metrô Siqueira Campos / Matrícula 4.864)
  'copacabana-tonelero-202': {
    pt: {
      title: 'Leilão Judicial de Prédio Hoteleiro na Rua Tonelero nº 202 — Copacabana',
      subtitle: 'Rua Tonelero, nº 202 — Copacabana, Rio de Janeiro/RJ | 3.760 m² • Tipologia Hotel/Motel • Matrícula nº 4.864 (5º RGI/RJ)',
      address: 'Rua Tonelero, 202 — Copacabana, Rio de Janeiro - RJ',
      p1Date: 'Lances: 03/08/2026 (18:00h) | Pregão: 06/10/2026 às 13:00h',
      p2Date: 'Lances: 06/10/2026 (13:03h) | Pregão: 08/10/2026 às 13:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0.411.728-9',
      rgi: '4.864 (5º RGI/RJ)',
      val: 'R$ 45.836.204,80',
      p2Val: 'R$ 22.918.102,40 (50% do valor da avaliação)',
      description: 'Edifício com tipologia hotel/motel e similares, para utilização como hotel, com 3.760 metros quadrados (3.760 m²) de área edificada. O prédio se encontra situado na Rua Tonelero, nº 202, próximo à Estação de Metrô Siqueira Campos/Copacabana, com pontos de ônibus e táxis no entorno, vasto comércio e a poucos metros da orla da Praia de Copacabana. Imóvel de altíssimo valor estratégico para a hotelaria carioca e investidores imobiliários.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor da avaliação e o lance inicial na 2ª Praça do prédio na Rua Tonelero nº 202?", a: "O imóvel foi avaliado judicialmente em R$ 45.836.204,80. No 1º Leilão (abertura de lances em 03/08/2026 às 18:00h e encerramento em 06/10/2026 às 13:00h), o lance mínimo é de R$ 45.836.204,80. No 2º Leilão (abertura de lances em 06/10/2026 às 13:03h e pregão ao vivo em 08/10/2026 às 13:00h), o lance inicial é de 50% da avaliação, por R$ 22.918.102,40." },
        { q: "Quais são as especificações e a localização do edifício?", a: "Trata-se de um edifício com 3.760 m² de área construída, projetado para utilização hoteleira/motelaria. Localizado na Rua Tonelero nº 202, a poucos metros do Metrô Siqueira Campos e da Praia de Copacabana." },
        { q: "Como é realizada a auditoria da Matrícula nº 4.864 e do IPTU nº 0.411.728-9?", a: "A equipe jurídica do Soares Martins Advogados analisa minuciosamente a Matrícula nº 4.864 junto ao 5º Ofício do RGI/RJ, mapeia débitos fiscais de IPTU (0.411.728-9), eventuais pendências trabalhistas, tributárias e processos judiciais para assegurar a aquisição originária livre de ônus pregressos." },
        { q: "Por que o prédio na Rua Tonelero nº 202 é uma oportunidade única em Copacabana?", a: "Trata-se de uma estrutura hoteleira pronta de 3.760 m² no bairro de maior fluxo turístico da América Latina, com desconto de R$ 22,9 milhões na 2ª praça judicial." },
        { q: "Como contratar a assessoria jurídica para arrematar este imóvel?", a: "Entre em contato diretamente via WhatsApp ou agende uma reunião em nosso escritório em Ipanema para emissão de relatório completo de viabilidade e acompanhamento até a imissão na posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Edificio Hotelero en Calle Tonelero nº 202 — Copacabana',
      subtitle: 'Rua Tonelero, nº 202 — Copacabana, Río de Janeiro/RJ | 3.760 m² • Tipología Hotel/Motel • Matrícula nº 4.864 (5º RGI/RJ)',
      address: 'Rua Tonelero, 202 — Copacabana, Río de Janeiro - RJ',
      p1Date: 'Pujas: 03/08/2026 (18:00h) | Subasta en vivo: 06/10/2026 a las 13:00h',
      p2Date: 'Pujas: 06/10/2026 (13:03h) | Subasta en vivo: 08/10/2026 a las 13:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0.411.728-9',
      rgi: '4.864 (5º RGI/RJ)',
      val: 'R$ 45.836.204,80',
      p2Val: 'R$ 22.918.102,40 (50% de la evaluación)',
      description: 'Edificio comercial e hotelero con 3.760 m² en Rua Tonelero nº 202, Copacabana, Río de Janeiro/RJ. Diseñado para operación hotelera o motel, próximo al Metro Siqueira Campos y la playa de Copacabana.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración y la puja mínima en 2ª Subasta del edificio en Tonelero nº 202?", a: "Valoración judicial de R$ 45.836.204,80. En 2ª Subasta (08/10/2026), la puja mínima se reduce al 50%, iniciando en R$ 22.918.102,40." },
        { q: "¿Cuáles son las características del inmueble?", a: "Edificio de 3.760 m² en Copacabana apto para hotel, junto al Metro Siqueira Campos." },
        { q: "¿Cómo se audita la Matrícula nº 4.864 del 5º RGI/RJ?", a: "Auditamos la matrícula 4.864, deudas de IPTU (0.411.728-9) y el expediente en el TJRJ." },
        { q: "¿Por qué invertir en un edificio hotelero en Copacabana?", a: "Alta demanda turística y corporativa en una de las zonas con mayor rentabilidad de Río de Janeiro." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Póngase en contacto por WhatsApp para recibir un dictamen de viabilidad legal." }
      ]
    },
    en: {
      title: 'Judicial Auction of Hotel Building at Rua Tonelero #202 — Copacabana',
      subtitle: 'Rua Tonelero, #202 — Copacabana, Rio de Janeiro/RJ | 3,760 m² • Hotel/Motel Typology • Title #4,864 (5th Land Registry)',
      address: 'Rua Tonelero, 202 — Copacabana, Rio de Janeiro - RJ',
      p1Date: 'Bids open: 08/03/2026 (6:00 PM) | Live auction: 10/06/2026 at 1:00 PM',
      p2Date: 'Bids open: 10/06/2026 (1:03 PM) | Live auction: 10/08/2026 at 1:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0.411.728-9',
      rgi: 'Title #4,864 (5th Land Registry)',
      val: 'R$ 45,836,204.80',
      p2Val: 'R$ 22,918,102.40 (50% discount)',
      description: 'Commercial & hotel building offering 3,760 square meters (3,760 m²) of built area located at Rua Tonelero #202 in Copacabana, Rio de Janeiro/RJ. Designed for hotel/motel use, situated steps from Siqueira Campos Subway Station and Copacabana Beach.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the valuation and 2nd auction opening bid for Rua Tonelero #202?", a: "Court valuation is R$ 45,836,204.80. 1st Auction opens at R$ 45,836,204.80. 2nd Auction (bidding closes 10/08/2026) opens at a 50% discount for R$ 22,918,102.40." },
        { q: "What are the building specs and location highlights?", a: "3,760 m² hotel/commercial building near Siqueira Campos Metro Station and Copacabana Beach." },
        { q: "How is legal due diligence conducted for Title #4,864?", a: "We audit Title #4,864 (5th Registry), IPTU tax records (0.411.728-9), and TJRJ execution proceedings." },
        { q: "Why invest in Copacabana hospitality real estate?", a: "Copacabana is Latin America's top tourist hub with prime hotel occupancy rates." },
        { q: "How to engage legal advisory for this auction?", a: "Contact our legal team via WhatsApp for full due diligence and representation." }
      ]
    }
  },

  // Copacabana - Rua Santa Clara 431 - Apto 704 Bl. 4 (86 m² / Condomínio Mirante de Copacabana / 1980)
  'copacabana-santa-clara-431': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Rua Santa Clara nº 431 — Apto 704 (Mirante de Copacabana)',
      subtitle: 'Rua Santa Clara, nº 431, Apto 704, Bloco 4 (Condomínio Mirante de Copacabana) — Copacabana, Rio de Janeiro/RJ | 86 m² • Edifício de 1980',
      address: 'Rua Santa Clara, 431 - Apto 704, Bl. 4 — Copacabana, Rio de Janeiro - RJ',
      p1Date: 'Pregão: 09/09/2025 às 13:00h',
      p2Date: 'Pregão: 11/09/2025 às 12:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '1.439.517-2',
      rgi: '35.666 (5º RGI/RJ)',
      val: 'R$ 635.000,00',
      p2Val: 'R$ 317.500,00 (50% do valor da avaliação)',
      description: 'Apartamento residencial com 86 metros quadrados (86 m²) de área edificada, situado no Apto 704 do Bloco 4 do Condomínio Mirante de Copacabana, localizado na Rua Santa Clara, nº 431, em Copacabana, Rio de Janeiro/RJ. Prédio construído em 1980, inserido em condomínio fechado tradicional com boa infraestrutura e segurança, próximo a farto comércio, estações de metrô e à praia de Copacabana.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor da avaliação e o lance inicial na 2ª Praça para o apartamento na Rua Santa Clara nº 431 / 704?", a: "O imóvel foi avaliado judicialmente em R$ 635.000,00. No 1º Leilão (09/09/2025 às 13:00h), o lance inicial é de R$ 635.000,00. No 2º Leilão (11/09/2025 às 12:00h), o lance mínimo tem desconto de 50%, iniciando em R$ 317.500,00." },
        { q: "Quais são as características do imóvel e do Condomínio Mirante de Copacabana?", a: "Apartamento residencial de 86 m² de área edificada no Bloco 4, 7º andar (Apto 704), em edifício construído em 1980 no Condomínio Mirante de Copacabana, com portaria 24 horas e localização central no bairro." },
        { q: "Como é feita a auditoria jurídica da Matrícula nº 35.666 e IPTU nº 1.439.517-2?", a: "Realizamos rigorosa due diligence da Matrícula nº 35.666 perante o 5º Ofício do RGI/RJ, consulta aos débitos fiscais de IPTU (1.439.517-2), cota condominial e certidões dos executados no TJRJ para garantir a sub-rogação das dívidas no valor da arrematação (art. 130 do CTN)." },
        { q: "Por que investir em apartamentos na Rua Santa Clara em Copacabana?", a: "A Rua Santa Clara é uma das vias mais valorizadas e tradicionais de Copacabana, combinando praticidade de acesso ao metrô (Estação Siqueira Campos), farto comércio local e alta liquidez para locação e moradia." },
        { q: "Como contratar a assessoria jurídica para arrematar este apartamento?", a: "Entre em contato via WhatsApp para receber a análise completa de riscos jurídicos e acompanhamento desde a habilitação no leilão até a imissão na posse do imóvel." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Calle Santa Clara nº 431 — Apto 704 (Mirante de Copacabana)',
      subtitle: 'Rua Santa Clara, nº 431, Apto 704, Bloco 4 (Condomínio Mirante de Copacabana) — Copacabana, Río de Janeiro/RJ | 86 m² • Edificio de 1980',
      address: 'Rua Santa Clara, 431 - Apto 704, Bl. 4 — Copacabana, Río de Janeiro - RJ',
      p1Date: 'Subasta en vivo: 09/09/2025 a las 13:00h',
      p2Date: 'Subasta en vivo: 11/09/2025 a las 12:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '1.439.517-2',
      rgi: '35.666 (5º RGI/RJ)',
      val: 'R$ 635.000,00',
      p2Val: 'R$ 317.500,00 (50% de la evaluación)',
      description: 'Apartamento residencial de 86 m² ubicado en el Apto 704 del Bloque 4 del Condomínio Mirante de Copacabana, Rua Santa Clara nº 431, Copacabana, Río de Janeiro/RJ. Edificio de 1980 en zona estratégica con comercios y acceso al metro.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración y la puja mínima en 2ª Subasta del apartamento en Santa Clara nº 431 / 704?", a: "Valoración judicial de R$ 635.000,00. En 2ª Subasta (11/09/2025), la puja mínima inicia en R$ 317.500,00 (50% de descuento)." },
        { q: "¿Cuáles son las características del inmueble?", a: "Apartamento de 86 m² en edificio de 1980 en el Condomínio Mirante de Copacabana." },
        { q: "¿Cómo se audita la Matrícula nº 35.666 del 5º RGI/RJ?", a: "Auditamos la matrícula 35.666, deudas de IPTU (1.439.517-2) y el expediente en TJRJ." },
        { q: "¿Por qué invertir en un apartamento en Rua Santa Clara?", a: "Excelente ubicación con alta liquidez inmobiliaria y demanda de alquiler." },
        { q: "¿Cómo solicitar la asesoría legal?", a: "Contáctenos vía WhatsApp para evaluación de riesgos y acompanamiento jurídico." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment at Rua Santa Clara #431 — Apt 704 (Mirante de Copacabana)',
      subtitle: 'Rua Santa Clara, #431, Apt 704, Block 4 (Condomínio Mirante de Copacabana) — Copacabana, Rio de Janeiro/RJ | 86 m² • 1980 Building',
      address: 'Rua Santa Clara, 431 - Apt 704, Bl. 4 — Copacabana, Rio de Janeiro - RJ',
      p1Date: 'Live auction: 09/09/2025 at 1:00 PM',
      p2Date: 'Live auction: 09/11/2025 at 12:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '1.439.517-2',
      rgi: 'Title #35,666 (5th Land Registry)',
      val: 'R$ 635,000.00',
      p2Val: 'R$ 317,500.00 (50% discount)',
      description: 'Residential apartment featuring 86 square meters (86 m²) of built area located in Apt 704, Block 4 of Condomínio Mirante de Copacabana, at Rua Santa Clara #431, Copacabana, Rio de Janeiro/RJ. 1980 building located close to subway, local shops, and Copacabana beach.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the valuation and 2nd auction opening bid for Apt 704 at Rua Santa Clara #431?", a: "Official court valuation is R$ 635,000.00. 1st Auction opening bid is R$ 635,000.00. 2nd Auction (09/11/2025 at 12:00 PM) opens with a 50% discount at R$ 317,500.00." },
        { q: "What are the property specs and building features?", a: "86 m² residential apartment in Block 4, 7th floor (Apt 704) in a 1980 building with 24h concierge." },
        { q: "How is legal due diligence conducted for Title #35,666?", a: "We audit Title #35,666 (5th Registry), IPTU tax records (1.439.517-2), condo debts, and TJRJ court records." },
        { q: "Why invest in Santa Clara Street real estate in Copacabana?", a: "Prime central Copacabana location with high rental yields and strong buyer demand." },
        { q: "How to engage legal advisory services for this auction?", a: "Reach out via WhatsApp to receive a complete legal risk report and representation." }
      ]
    }
  },

  // Laranjeiras - Rua das Laranjeiras 347 (115 m² / 1961)
  'laranjeiras-347': {
    pt: {
      title: 'Leilão Judicial de Apartamento em Laranjeiras — Rua das Laranjeiras nº 347/407',
      subtitle: 'Rua das Laranjeiras, nº 347/407 — Laranjeiras, Rio de Janeiro/RJ | 115 m² • 3 Quartos • Prédio de 1961 com Portaria 24h',
      address: 'Rua das Laranjeiras, 347/407 — Laranjeiras, Rio de Janeiro - RJ',
      p1Date: '08/09/2026 às 12:20h',
      p2Date: '10/09/2026 às 12:20h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0.355.985-3',
      rgi: '17752 (9º RGI/RJ)',
      val: 'R$ 950.000,00',
      p2Val: 'R$ 475.000,00 (50% do valor da avaliação)',
      description: 'Apartamento residencial com 115 m² de área edificada, situado na tradicional Rua das Laranjeiras, nº 347/407, em Laranjeiras, Rio de Janeiro/RJ. Composto por 3 quartos, 1 banheiro social, lavabo, sala com piso em madeira, cozinha, área de serviço com pequeno quarto e posição de fundos para a bucólica Rua Sebastião Lacerda. Edifício construído em 1961, em ótimo estado de conservação, com portaria 24 horas.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor da avaliação e o lance inicial na 2ª Praça para o apartamento na Rua das Laranjeiras nº 347/407?", a: "O imóvel tem avaliação oficial de R$ 950.000,00. Na 1ª Praça (08/09/2026 às 12:20h), o lance inicial é de R$ 950.000,00. Na 2ª Praça (10/09/2026 às 12:20h), o lance mínimo tem desconto de 50%, iniciando em R$ 475.000,00." },
        { q: "Quais são as características internas e do edifício no bairro de Laranjeiras?", a: "Imóvel de 115 m², 3 quartos, banheiro social, lavabo, sala com piso em madeira, cozinha, área de serviço com dependência (pequeno quarto), sem infiltrações aparentes e de fundos para a Rua Sebastião Lacerda. O prédio (1961) conta com portaria 24 horas e boa conservação." },
        { q: "Como é realizada a auditoria jurídica da Matrícula nº 17752 e IPTU nº 0.355.985-3?", a: "O escritório realiza due diligence completa junto ao 9º RGI/RJ (Matrícula 17752), consulta às pendências de IPTU (0.355.985-3), cotas condominiais e certidões cíveis no TJRJ para assegurar a sub-rogação dos débitos no preço da arrematação (art. 130 do CTN)." },
        { q: "Quais são as vantagens de arrematar um imóvel na Rua das Laranjeiras?", a: "Laranjeiras é um dos bairros residenciais mais valorizados e charmosos da Zona Sul do Rio de Janeiro, com excelente infraestrutura urbana, farto comércio, escolas tradicionais e alta demanda tanto para moradia própria quanto para locação." },
        { q: "Como solicitar a assessoria jurídica especializada para este leilão?", a: "Basta clicar no botão de atendimento via WhatsApp para receber a análise de viabilidade jurídica, exame do edital e acompanhamento até a imissão na posse do imóvel." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Laranjeiras — Rua das Laranjeiras nº 347/407',
      subtitle: 'Rua das Laranjeiras, nº 347/407 — Laranjeiras, Río de Janeiro/RJ | 115 m² • 3 Habitaciones • Edificio de 1961 con Consejería 24h',
      address: 'Rua das Laranjeiras, 347/407 — Laranjeiras, Río de Janeiro - RJ',
      p1Date: '08/09/2026 a las 12:20h',
      p2Date: '10/09/2026 a las 12:20h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0.355.985-3',
      rgi: '17752 (9º RGI/RJ)',
      val: 'R$ 950.000,00',
      p2Val: 'R$ 475.000,00 (50% de descuento)',
      description: 'Apartamento residencial de 115 m² ubicado en la icónica Rua das Laranjeiras nº 347/407, Río de Janeiro/RJ. Cuenta con 3 dormitorios, baño social, aseo, salón con suelo de madera, cocina, área de servicio con pequeña habitación y orientación posterior a la Calle Sebastião Lacerda. Edificio de 1961 con consejería 24h.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración y la puja mínima en 2ª Subasta del apartamento en Laranjeiras?", a: "Valoración de R$ 950.000,00. En 2ª Subasta (10/09/2026 a las 12:20h), la puja inicial abre en R$ 475.000,00 (50% de descuento)." },
        { q: "¿Cuáles son las características del inmueble y del edificio?", a: "Apartamento de 115 m² con 3 habitaciones, salón de madera, aseo y área de servicio. Edificio de 1961 con consejería 24 horas." },
        { q: "¿Cómo se audita la Matrícula nº 17752 del 9º RGI/RJ?", a: "Analizamos la matrícula 17752, certidones de IPTU (0.355.985-3) y expediente judicial para subrogación de deudas." },
        { q: "¿Por qué invertir en un apartamento en Rua das Laranjeiras?", a: "Zona Sur con alta calidad de vida, servicios excelentes y demanda sostenida de alquiler." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Contáctenos vía WhatsApp para informe de viabilidad y acompañamiento legal." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Laranjeiras — Rua das Laranjeiras #347/407',
      subtitle: 'Rua das Laranjeiras, #347/407 — Laranjeiras, Rio de Janeiro/RJ | 115 m² • 3 Bedrooms • 1961 Building with 24h Concierge',
      address: 'Rua das Laranjeiras, 347/407 — Laranjeiras, Rio de Janeiro - RJ',
      p1Date: '09/08/2026 at 12:20 PM',
      p2Date: '09/10/2026 at 12:20 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0.355.985-3',
      rgi: 'Title #17752 (9th Land Registry)',
      val: 'R$ 950,000.00',
      p2Val: 'R$ 475,000.00 (50% discount)',
      description: 'Residential apartment featuring 115 square meters (115 m²) of built area located at Rua das Laranjeiras #347/407, Laranjeiras, Rio de Janeiro/RJ. Comprising 3 bedrooms, bathroom, lavatory, spacious living room with hardwood floor, kitchen, service area with small room, facing quiet Sebastião Lacerda Street. 1961 building with 24h concierge.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official valuation and opening bid for the Laranjeiras apartment?", a: "Official court valuation is R$ 950,000.00. 1st Auction (09/08/2026) opens at R$ 950,000.00. 2nd Auction (09/10/2026 at 12:20 PM) opens at R$ 475,000.00 (50% discount)." },
        { q: "What are the key specs of the property and building?", a: "115 m² built area, 3 bedrooms, lavatory, hardwood living room, quiet back position towards Sebastião Lacerda St. 1961 building with 24h concierge." },
        { q: "How is legal due diligence conducted for Title #17752?", a: "We audit Title #17752 (9th Registry), IPTU tax records (0.355.985-3), condo fees, and TJRJ court records." },
        { q: "Why invest in real estate at Rua das Laranjeiras in South Zone Rio?", a: "Prime residential neighborhood with rich infrastructure, traditional schools, and high liquidity." },
        { q: "How to engage legal advisory services for this auction?", a: "Contact us via WhatsApp for full legal feasibility assessment and legal representation." }
      ]
    }
  },

  // Rio Comprido - Rua Haddock Lobo 117 Apto 301 (74 m² / 3 Quartos)
  'rio-comprido-haddock-lobo-117': {
    pt: {
      title: 'Leilão Judicial de Apartamento em Rio Comprido — Rua Haddock Lobo nº 117, Apto 301',
      subtitle: 'Rua Haddock Lobo, nº 117, Apto 301 — Rio Comprido, Rio de Janeiro/RJ | 74 m² • 3 Quartos • Frente • Portaria Reformada até 22h',
      address: 'Rua Haddock Lobo, 117 - Apto 301 — Rio Comprido, Rio de Janeiro - RJ',
      p1Date: '20/08/2026 às 14:00h',
      p2Date: '27/08/2026 às 14:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0.699.815-7',
      rgi: '86.727 (11º RGI/RJ)',
      val: 'R$ 517.827,00',
      p2Val: 'R$ 258.913,50 (50% do valor da avaliação)',
      description: 'Apartamento residencial de frente na Rua Haddock Lobo, nº 117, apto 301, Rio Comprido, Rio de Janeiro/RJ, com 74 m² de área edificada. Composto por 3 quartos, sala, banheiro social, cozinha e área de serviço, situado no 3º andar de prédio residencial de 10 andares. Edifício com portaria reformada (serviço de portaria até 22h), salão de festas, elevadores e sistema de câmeras de segurança na entrada. Sem vaga de garagem. Excelente localização próxima a metrô, farto comércio e linhas de ônibus.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor da avaliação oficial e o lance inicial na 2ª Praça para o apartamento na Rua Haddock Lobo nº 117/301?", a: "O imóvel possui avaliação judicial de R$ 517.827,00. Na 1ª Praça (20/08/2026 às 14:00h), o lance mínimo abre por R$ 517.827,00. Na 2ª Praça (27/08/2026 às 14:00h), o lance inicial conta com 50% de desconto, fixado em R$ 258.913,50." },
        { q: "Quais são as principais características do apartamento e da infraestrutura do edifício?", a: "Imóvel de 74 m², 3 quartos, 3º andar de frente para a Rua Haddock Lobo. Prédio de 10 andares com portaria reformada até 22h, elevadores, salão de festas e circuito de câmeras de segurança. Sem vaga de garagem." },
        { q: "Como é realizada a auditoria jurídica da Matrícula nº 86.727 (11º RGI/RJ) e IPTU nº 0.699.815-7?", a: "Nosso escritório realiza due diligence completa da Matrícula nº 86.727 perante o 11º RGI/RJ, levantamento de eventuais débitos de IPTU (0.699.815-7), taxas condominiais e certidões cíveis no TJRJ para garantir a sub-rogação dos débitos no preço da arrematação (art. 130 do CTN)." },
        { q: "Por que investir em um imóvel na Rua Haddock Lobo no Rio Comprido?", a: "Trata-se de uma via estratégica com excelente mobilidade urbana, proximidade com a estação de metrô da Afonso Pena (Tijuca), farto comércio local, escolas, bancos e linhas de ônibus para o Centro e Zona Sul." },
        { q: "Como contratar assessoria jurídica especializada para este leilão?", a: "Basta acionar a equipe via WhatsApp para receber parecer prévio de viabilidade jurídica, exame minucioso do edital e suporte integral até a expedição da carta de arrematação e imissão na posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Rio Comprido — Rua Haddock Lobo nº 117, Apto 301',
      subtitle: 'Rua Haddock Lobo, nº 117, Apto 301 — Rio Comprido, Río de Janeiro/RJ | 74 m² • 3 Habitaciones • Frontal • Consejería Reformada',
      address: 'Rua Haddock Lobo, 117 - Apto 301 — Rio Comprido, Río de Janeiro - RJ',
      p1Date: '20/08/2026 a las 14:00h',
      p2Date: '27/08/2026 a las 14:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0.699.815-7',
      rgi: '86.727 (11º RGI/RJ)',
      val: 'R$ 517.827,00',
      p2Val: 'R$ 258.913,50 (50% de descuento)',
      description: 'Apartamento de 74 m² frontal situado en la Calle Haddock Lobo nº 117, Apto 301, Rio Comprido, Río de Janeiro/RJ. Dispone de 3 habitaciones, salón, baño y cocina. Edificio de 10 plantas con consejería reformada (hasta las 22h), salón de fiestas, ascensores y cámaras de seguridad.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y puja en 2ª Subasta del apartamento en Rua Haddock Lobo nº 117?", a: "Valoración judicial de R$ 517.827,00. En 2ª Subasta (27/08/2026 a las 14:00h), la puja abre en R$ 258.913,50 (50% de descuento)." },
        { q: "¿Cuáles son las características del inmueble?", a: "Apartamento de 74 m², 3 dormitorios, 3er piso frontal. Edificio con consejería reformada hasta las 22h, ascensores y salón de eventos." },
        { q: "¿Cómo se audita la Matrícula nº 86.727 del 11º RGI/RJ?", a: "Auditoría integral de la Matrícula 86.727, certidões de IPTU 0.699.815-7 y proceso judicial en TJRJ." },
        { q: "¿Por qué adquirir un inmueble en Rio Comprido?", a: "Excelente conectividad, cercanía al metro y alta rentabilidad por alquiler." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Contáctenos vía WhatsApp para estudio de viabilidad legal y acompañamiento." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Rio Comprido — Rua Haddock Lobo #117, Apt 301',
      subtitle: 'Rua Haddock Lobo, #117, Apt 301 — Rio Comprido, Rio de Janeiro/RJ | 74 m² • 3 Bedrooms • Front View • Renovated 22h Concierge',
      address: 'Rua Haddock Lobo, 117 - Apt 301 — Rio Comprido, Rio de Janeiro - RJ',
      p1Date: '08/20/2026 at 02:00 PM',
      p2Date: '08/27/2026 at 02:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0.699.815-7',
      rgi: 'Title #86.727 (11th Land Registry)',
      val: 'R$ 517,827.00',
      p2Val: 'R$ 258,913.50 (50% discount)',
      description: 'Street-facing 74 m² residential apartment located at Rua Haddock Lobo #117, Apt 301, Rio Comprido, Rio de Janeiro/RJ. Featuring 3 bedrooms, living room, bathroom, and service area on the 3rd floor of a 10-story building. Building features renovated concierge service until 10 PM, party hall, elevators, and security cameras.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official appraisal and starting bid for Apt 301 at Rua Haddock Lobo #117?", a: "Official court appraisal is R$ 517,827.00. 1st Auction opens at R$ 517,827.00. 2nd Auction (08/27/2026 at 02:00 PM) opens at R$ 258,913.50 (50% discount)." },
        { q: "What are the specs of the apartment and building?", a: "74 m² 3-bedroom apartment, front view on 3rd floor. 10-story building with renovated 22h concierge, party room, elevators, and security cameras." },
        { q: "How is legal due diligence conducted for Title #86.727?", a: "We audit Title #86.727 (11th Registry), IPTU tax records (0.699.815-7), condo debts, and TJRJ court records." },
        { q: "Why invest in real estate in Rio Comprido near Tijuca?", a: "Strategic location near subway stations, buses, and vibrant local commercial district." },
        { q: "How to engage legal advisory services for this auction?", a: "Contact us via WhatsApp for complete legal analysis and full representation." }
      ]
    }
  },

  // Tijuca - Rua Uruguai nº 94, Apto 104 (40 m² / 1 Quarto / 1 Vaga)
  'tijuca-uruguai-94': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Tijuca — Rua Uruguai nº 94, Apto 104',
      subtitle: 'Rua Uruguai, nº 94, Apto 104 — Tijuca, Rio de Janeiro/RJ | 40 m² • 1 Quarto • Sacada • Dependências Completa • 1 Vaga • Portaria 24h',
      address: 'Rua Uruguai, 94 - Apto 104 — Tijuca, Rio de Janeiro - RJ',
      p1Date: '31/08/2026 às 12:40h',
      p2Date: '02/09/2026 às 12:40h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '1.723.354-5',
      rgi: '19.467 (10º RGI/RJ)',
      val: 'R$ 250.000,00',
      p2Val: 'R$ 125.000,00 (50% do valor da avaliação)',
      description: 'Apartamento residencial de fundos na Rua Uruguai nº 94, apto 104, Tijuca, Rio de Janeiro/RJ, com 40 m² de área edificada. Composto por sala, 1 quarto, 1 banheiro social, dependências completas, sacada e direito a 1 vaga de garagem. Edifício residencial datado de 1985, afastado do alinhamento da via pública, com portão de ferro, entradas social e de serviço, portaria 24h, câmeras de segurança, interfone, 2 elevadores, playground com salão de festas. Composto por 9 andares, 36 apartamentos e 3 pavimentos de garagem. Excelente localização no coração da Tijuca, próxima ao metrô Uruguai, comércio, bancos e escolas.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor da avaliação oficial e o lance inicial na 2ª Praça para o apartamento na Rua Uruguai nº 94/104?", a: "O imóvel possui avaliação judicial atribuída de R$ 250.000,00. Na 1ª Praça (31/08/2026 às 12:40h), o lance mínimo é R$ 250.000,00. Na 2ª Praça (02/09/2026 às 12:40h), o lance inicial conta com 50% de desconto, fixado em R$ 125.000,00." },
        { q: "Quais são as principais características do apartamento e da infraestrutura do edifício na Rua Uruguai?", a: "Apartamento de 40 m², posição fundos, composto por sala, 1 quarto, 1 banheiro social, dependências completas, sacada e 1 vaga de garagem. Edifício de 1985 com portaria 24h, 2 elevadores, câmeras, interfone, playground, salão de festas e 3 pavimentos de garagem (36 apartamentos no total)." },
        { q: "Como é realizada a auditoria jurídica da Matrícula nº 19.467 (10º RGI/RJ) e IPTU nº 1.723.354-5?", a: "Nosso escritório realiza due diligence jurídica completa da Matrícula nº 19.467 perante o 10º RGI/RJ, levantamento de eventuais débitos de IPTU (1.723.354-5), taxas de condomínio e processos no TJRJ para garantir a sub-rogação dos débitos no preço da arrematação (art. 130 do CTN)." },
        { q: "Por que investir em um apartamento de 1 quarto na Rua Uruguai na Tijuca?", a: "A Rua Uruguai é um dos endereços mais valorizados e procurados da Tijuca, a poucos passos da estação de metrô Uruguai, com infraestrutura completa de serviços, alta liquidez para locação e excelente potencial de valorização imobiliária." },
        { q: "Como contratar a assessoria jurídica para arrematar este imóvel?", a: "Basta entrar em contato pelo WhatsApp do escritório Soares Martins Advogados para receber análise prévia de viabilidade, estudo do edital e acompanhamento jurídico integral até a imissão na posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Tijuca — Rua Uruguai nº 94, Apto 104',
      subtitle: 'Rua Uruguai, nº 94, Apto 104 — Tijuca, Río de Janeiro/RJ | 40 m² • 1 Habitación • Balcón • Dependencias Completa • 1 Garaje • Consejería 24h',
      address: 'Rua Uruguai, 94 - Apto 104 — Tijuca, Río de Janeiro - RJ',
      p1Date: '31/08/2026 a las 12:40h',
      p2Date: '02/09/2026 a las 12:40h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '1.723.354-5',
      rgi: '19.467 (10º RGI/RJ)',
      val: 'R$ 250.000,00',
      p2Val: 'R$ 125.000,00 (50% de descuento)',
      description: 'Apartamento de 40 m² interior ubicado en la Calle Uruguai nº 94, Apto 104, Tijuca, Río de Janeiro/RJ. Dispone de salón, 1 habitación, baño, dependencias completas, balcón y 1 plaza de garaje. Edificio de 1985 con consejería 24h, 2 ascensores, playground y salón de eventos.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y puja en 2ª Subasta del apartamento en Rua Uruguai nº 94?", a: "Valoración judicial de R$ 250.000,00. En 2ª Subasta (02/09/2026 a las 12:40h), la puja abre en R$ 125.000,00 (50% de descuento)." },
        { q: "¿Cuáles son las características del inmueble?", a: "Apartamento de 40 m², 1 habitación, dependencias completas, balcón y 1 plaza de garaje. Edificio con consejería 24h y área de ocio." },
        { q: "¿Cómo se audita la Matrícula nº 19.467 del 10º RGI/RJ?", a: "Auditoría integral de la Matrícula 19.467, certidões de IPTU 1.723.354-5 y expediente judicial en TJRJ." },
        { q: "¿Por qué adquirir un inmueble en Tijuca cerca del metro Uruguai?", a: "Zona tradicional de Río con excelente conectividad, seguridad y alta demanda de alquiler." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Contáctenos vía WhatsApp para estudio de viabilidad legal y acompañamiento." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Tijuca — Rua Uruguai #94, Apt 104',
      subtitle: 'Rua Uruguai, #94, Apt 104 — Tijuca, Rio de Janeiro/RJ | 40 m² • 1 Bedroom • Balcony • Maid\'s Quarters • 1 Parking Space • 24h Concierge',
      address: 'Rua Uruguai, 94 - Apt 104 — Tijuca, Rio de Janeiro - RJ',
      p1Date: '08/31/2026 at 12:40 PM',
      p2Date: '09/02/2026 at 12:40 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '1.723.354-5',
      rgi: 'Title #19.467 (10th Land Registry)',
      val: 'R$ 250,000.00',
      p2Val: 'R$ 125,000.00 (50% discount)',
      description: '40 m² residential apartment located at Rua Uruguai #94, Apt 104, Tijuca, Rio de Janeiro/RJ. Comprising living room, 1 bedroom, bathroom, maid\'s quarters, balcony, and 1 parking space. 1985 building featuring 24h concierge, 2 elevators, security cameras, playground, and party room. Prime Tijuca location near Uruguai subway station.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official appraisal and starting bid for Apt 104 at Rua Uruguai #94?", a: "Official court appraisal is R$ 250,000.00. 1st Auction opens at R$ 250,000.00. 2nd Auction (09/02/2026 at 12:40 PM) opens at R$ 125,000.00 (50% discount)." },
        { q: "What are the specs of the apartment and building?", a: "40 m² 1-bedroom apartment with balcony, maid\'s room, and 1 parking space. 1985 building with 24h concierge, elevators, playground, and party hall." },
        { q: "How is legal due diligence conducted for Title #19.467?", a: "We audit Title #19.467 (10th Registry), IPTU tax records (1.723.354-5), condo debts, and TJRJ court records." },
        { q: "Why invest in real estate in Tijuca near Uruguai Metro?", a: "Highly sought-after residential hub with top amenities, subway access, and strong rental yields." },
        { q: "How to engage legal advisory services for this auction?", a: "Contact us via WhatsApp for complete legal analysis and full representation." }
      ]
    }
  },

  // Cosme Velho - Praça São Judas Tadeu nº 6, Apto 601 (Cobertura 590 m²)
  'cosme-velho-sao-judas-tadeu-6': {
    pt: {
      title: 'Leilão Judicial de Cobertura no Cosme Velho — Praça São Judas Tadeu nº 6 — Apto 601',
      subtitle: 'Praça São Judas Tadeu, nº 06, Apto 601 (Cobertura) — Cosme Velho, Rio de Janeiro/RJ | 590 m² • 5 Quartos (3 Suítes) • Terraços Frontal e Lateral • Depósito • 2 Dependências',
      address: 'Praça São Judas Tadeu, 06 - Apto 601 (Cobertura) — Cosme Velho, Rio de Janeiro - RJ',
      p1Date: '09/09/2026 às 11:00h',
      p2Date: '16/09/2026 às 11:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '14013544',
      rgi: '124374 (9º RGI/RJ)',
      val: 'R$ 4.411.000,00',
      p2Val: 'R$ 1.543.850,00 (35% do valor da avaliação)',
      description: 'Apartamento de cobertura, uso residencial, localizado na Praça São Judas Tadeu, nº 06, Apto 601, bairro do Cosme Velho, Zona Sul da cidade do Rio de Janeiro/RJ, com 590 m² de área edificada. Composto por amplo salão, sala de jantar, terraço frontal e lateral, extenso corredor entre a frente e os fundos ligando o salão aos 5 quartos (três suítes) e o banheiro social. Área de serviço com lavanderia, depósito e duas dependências de empregada. Devidamente dimensionado e caracterizado no 9º Ofício do Registro Geral de Imóveis, matrícula nº 124374, Inscrição Municipal nº 14013544 (IPTU). Foi atribuído ao bem o valor de R$ 4.411.000,00, com abertura da segunda praça tendo como início 35% do valor da avaliação (R$ 1.543.850,00).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça para a cobertura na Praça São Judas Tadeu nº 06?", a: "A cobertura de 590 m² possui avaliação judicial de R$ 4.411.000,00. Na 1ª Praça (09/09/2026 às 11:00h), o lance mínimo é R$ 4.411.000,00 (100%). Na 2ª Praça (16/09/2026 às 11:00h), o lance inicial conta com desconto extraordinário, fixado a partir de 35% do valor da avaliação (R$ 1.543.850,00)." },
        { q: "Quais são as características da cobertura residencial no Cosme Velho?", a: "Trata-se de magnífica cobertura residencial com 590 m² de área edificada, composta por amplo salão, sala de jantar, terraço frontal e lateral, corredor de circulação, 5 quartos (sendo 3 suítes), banheiro social, área de serviço com lavanderia, depósito e duas dependências de empregada." },
        { q: "Como funciona a auditoria de débitos de IPTU e condomínio na Matrícula nº 124374 (9º RGI)?", a: "Realizamos due diligence jurídica completa da Matrícula nº 124374 perante o 9º RGI/RJ e da Inscrição IPTU nº 14013544, assegurando a sub-rogação dos débitos fiscais no preço da arrematação (Art. 130 do CTN) e analisando o edital para isenção do arrematante quanto a encargos pretéritos." },
        { q: "É possível apresentar proposta de parcelamento na 1ª ou 2ª Praça?", a: "Sim. Nos termos do Art. 895 do Código de Processo Civil (CPC), o arrematante pode apresentar proposta por escrito com sinal de no mínimo 25% à vista e o saldo em até 30 parcelas mensais corrigidas, mediante garantia hipotecária da própria cobertura." },
        { q: "Como contratar a assessoria jurídica especializada para a arrematação desta cobertura?", a: "Basta entrar em contato via WhatsApp com o escritório Soares Martins Advogados para solicitar o parecer prévio de viabilidade jurídica e acompanhamento completo do leilão até a imissão na posse e registro imobiliário." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Ático en Cosme Velho — Plaza São Judas Tadeu nº 6 — Apto 601',
      subtitle: 'Plaza São Judas Tadeu, nº 06, Apto 601 (Ático) — Cosme Velho, Río de Janeiro/RJ | 590 m² • 5 Habitaciones (3 Suites) • Terrazas • Depósito • 2 Dependencias',
      address: 'Plaza São Judas Tadeu, 06 - Apto 601 (Ático) — Cosme Velho, Río de Janeiro - RJ',
      p1Date: '09/09/2026 a las 11:00h',
      p2Date: '16/09/2026 a las 11:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '14013544',
      rgi: '124374 (9º RGI/RJ)',
      val: 'R$ 4.411.000,00',
      p2Val: 'R$ 1.543.850,00 (35% de la evaluación)',
      description: 'Ático residencial de 590 m² ubicado en Plaza São Judas Tadeu, nº 06, Apto 601, Cosme Velho, Zona Sur de Río de Janeiro. Consta de amplio salón, comedor, terraza frontal y lateral, pasillo distribuidor, 5 dormitorios (3 suites), baño social, lavandería, depósito y 2 dependencias de servicio. Registrado en el 9º RGI con Matrícula nº 124374 e IPTU nº 14013544. Evaluación de R$ 4.411.000,00, con la 2ª subasta abriendo a partir del 35% (R$ 1.543.850,00).',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y puja inicial en 2ª Subasta para el ático en Plaza São Judas Tadeu nº 06?", a: "Valoración judicial de R$ 4.411.000,00. En 2ª Subasta (16/09/2026 a las 11:00h), la puja abre a partir del 35% de la evaluación (R$ 1.543.850,00)." },
        { q: "¿Cuáles son las características del ático en Cosme Velho?", a: "Inmueble de 590 m², amplio salón, comedor, terrazas frontal y lateral, 5 dormitorios (3 suites), lavandería, depósito y 2 dependencias de servicio." },
        { q: "¿Cómo se audita la Matrícula nº 124374 del 9º RGI/RJ?", a: "Auditoría integral de la Matrícula 124374, certidões de IPTU 14013544 y expediente judicial en TJRJ." },
        { q: "¿Es posible presentar propuesta de pago a plazos?", a: "Sí, conforme al Art. 895 del CPC (25% de enganche y hasta 30 cuotas mensuales)." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Contáctenos vía WhatsApp para estudio de viabilidad legal y acompañamiento." }
      ]
    },
    en: {
      title: 'Judicial Auction of Penthouse in Cosme Velho — Praça São Judas Tadeu #6 — Apt 601',
      subtitle: 'Praça São Judas Tadeu, #06, Apt 601 (Penthouse) — Cosme Velho, Rio de Janeiro/RJ | 590 m² • 5 Bedrooms (3 Suites) • Front & Side Terraces • Storage • 2 Maid Quarters',
      address: 'Praça São Judas Tadeu, 06 - Apt 601 (Penthouse) — Cosme Velho, Rio de Janeiro - RJ',
      p1Date: '09/09/2026 at 11:00 AM',
      p2Date: '09/16/2026 at 11:00 AM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '14013544',
      rgi: 'Title #124374 (9th Land Registry)',
      val: 'R$ 4,411,000.00',
      p2Val: 'R$ 1,543,850.00 (35% starting bid)',
      description: '590 m² residential penthouse located at Praça São Judas Tadeu #06, Apt 601, Cosme Velho, South Zone of Rio de Janeiro/RJ. Featuring large living room, dining hall, front and side terraces, hallway, 5 bedrooms (3 suites), social bathroom, laundry room, storage room, and 2 maid quarters. Registered under Title #124374 (9th Registry) and IPTU #14013544. Court appraisal R$ 4,411,000.00, 2nd auction starting bid at 35% of appraisal value (R$ 1,543,850.00).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official appraisal and starting bid for Apt 601 at Praça São Judas Tadeu #6?", a: "Official court appraisal is R$ 4,411,000.00. 1st Auction opens at R$ 4,411,000.00. 2nd Auction (09/16/2026 at 11:00 AM) opens at 35% of appraisal value (R$ 1,543,850.00)." },
        { q: "What are the specs of the penthouse?", a: "590 m² residential penthouse with living room, dining hall, front and side terraces, 5 bedrooms (3 suites), social bathroom, laundry, storage, and 2 maid quarters." },
        { q: "How is legal due diligence conducted for Title #124374?", a: "We audit Title #124374 (9th Registry), IPTU tax records (14013544), condo debts, and TJRJ court records." },
        { q: "Can buyers submit installment proposals under Art. 895 of CPC?", a: "Yes, 25% down payment and up to 30 monthly installments secured by a mortgage on the property." },
        { q: "How to engage legal advisory services for this auction?", a: "Contact us via WhatsApp for complete legal analysis and full representation." }
      ]
    }
  },

  // Maracanã - Rua Dona Zulmira nº 19, Apto 101 (66 m²)
  'maracana-dona-zulmira-19': {
    pt: {
      title: 'Leilão Judicial de Apartamento no Maracanã — Rua Dona Zulmira nº 19 — Apto 101',
      subtitle: 'Rua Dona Zulmira, nº 19, Apto 101 — Maracanã, Rio de Janeiro/RJ | 66 m² • Varanda • Quarto • Sala • Cozinha • Dependências • Lazer & Garagem',
      address: 'Rua Dona Zulmira, 19 - Apto 101 — Maracanã, Rio de Janeiro - RJ',
      p1Date: '02/09/2026 às 14:00h',
      p2Date: '09/09/2026 às 14:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '1.640.226-5',
      rgi: '41.819 (10º RGI/RJ)',
      val: 'R$ 406.923,00',
      p2Val: 'R$ 203.461,50 (50% do valor da avaliação)',
      description: 'Apartamento de frente, uso residencial, localizado na Rua Dona Zulmira, nº 19, Apto 101, no tradicional bairro do Maracanã, Zona Norte do Rio de Janeiro/RJ, com 66 m² de área edificada em edifício construído em 1984. Imóvel de frente com boa varanda, composto por quarto, sala, banheiro social, cozinha e dependências de serviço. Edifício dotado de 2 elevadores (social e serviço), sistema de segurança com 4 câmeras no térreo e acessos, e 2 pavimentos de garagem (térreo e 2G). Estrutura de lazer completa com playground, salão de festas e churrasqueira. Devidamente cadastrado no Cartório do 10º Ofício do Registro Geral de Imóveis, matrícula nº 41.819, Inscrição Municipal nº 1.640.226-5 (IPTU). Avaliado em R$ 406.923,00, com abertura da 2ª praça tendo como valor inicial 50% da avaliação (R$ 203.461,50).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça para o apartamento na Rua Dona Zulmira nº 19?", a: "O apartamento possui avaliação judicial de R$ 406.923,00. Na 1ª Praça (02/09/2026 às 14:00h), o lance mínimo é R$ 406.923,00 (100%). Na 2ª Praça (09/09/2026 às 14:00h), o lance inicial conta com 50% de desconto, fixado em R$ 203.461,50." },
        { q: "Quais são as características do apartamento e da infraestrutura do condomínio no Maracanã?", a: "O imóvel de 66 m² é de frente com varanda, composto por quarto, sala, banheiro, cozinha e dependências. O prédio construído em 1984 possui 2 elevadores, 4 câmeras de segurança, 2 andares de garagem (térreo e 2G), além de lazer com playground, salão de festas e churrasqueira." },
        { q: "Como é realizada a verificação de débitos de IPTU e condomínio na Matrícula nº 41.819 (10º RGI)?", a: "Inspecionamos a Matrícula nº 41.819 do 10º RGI/RJ e a Inscrição IPTU nº 1.640.226-5, aplicando a regra de sub-rogação dos débitos tributários sobre o preço da arrematação (Art. 130 do CTN) e conferindo o edital para resguardar o arrematante quanto a débitos condominiais." },
        { q: "É possível apresentar proposta de parcelamento no leilão de acordo com o Art. 895 do CPC?", a: "Sim. Qualquer interessado pode apresentar proposta de arrematação parcelada por escrito antes do leilão, mediante sinal de 25% à vista e o saldo em até 30 parcelas mensais corrigidas, com garantia de hipoteca do próprio imóvel." },
        { q: "Como contratar a assessoria jurídica especializada para a arrematação deste apartamento?", a: "Entre em contato via WhatsApp com o escritório Soares Martins Advogados para obter a análise de viabilidade jurídica do edital e o acompanhamento integral desde o cadastramento até a expedição da carta de arrematação e posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Maracanã — Calle Dona Zulmira nº 19 — Apto 101',
      subtitle: 'Calle Dona Zulmira, nº 19, Apto 101 — Maracanã, Río de Janeiro/RJ | 66 m² • Balcón • 1 Habitación • Sala • Cocina • Dependencias • Áreas Comunes y Garaje',
      address: 'Calle Dona Zulmira, 19 - Apto 101 — Maracanã, Río de Janeiro - RJ',
      p1Date: '02/09/2026 a las 14:00h',
      p2Date: '09/09/2026 a las 14:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '1.640.226-5',
      rgi: '41.819 (10º RGI/RJ)',
      val: 'R$ 406.923,00',
      p2Val: 'R$ 203.461,50 (50% de la evaluación)',
      description: 'Apartamento de frente de 66 m² en Calle Dona Zulmira, nº 19, Apto 101, Maracanã, Zona Norte de Río de Janeiro. Edificio de 1984. Consta de balcón, habitación, salón, baño, cocina y dependencias. Edificio con 2 ascensores, 4 cámaras de seguridad, 2 niveles de garaje, playground, salón de fiestas y barbacoa. Registrado en el 10º RGI (Matrícula nº 41.819) e IPTU nº 1.640.226-5. Evaluación de R$ 406.923,00, 2ª subasta abriendo a partir del 50% (R$ 203.461,50).',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y puja inicial en 2ª Subasta para el apartamento en Calle Dona Zulmira nº 19?", a: "Valoración judicial de R$ 406.923,00. En 2ª Subasta (09/09/2026 a las 14:00h), la puja abre al 50% (R$ 203.461,50)." },
        { q: "¿Cuáles son las características del apartamento en Maracanã?", a: "Inmueble de 66 m² de frente con balcón, 1 habitación, sala, baño, cocina y dependencias. El edificio ofrece 2 ascensores, seguridad, 2 pisos de garaje, playground, salón de fiestas y barbacoa." },
        { q: "¿Cómo se audita la Matrícula nº 41.819 del 10º RGI/RJ?", a: "Estudio de la Matrícula 41.819, IPTU 1.640.226-5 y expedientes judiciales." },
        { q: "¿Es posible presentar propuesta a plazos?", a: "Sí, según el Art. 895 del CPC (25% de enganche y hasta 30 cuotas)." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Contáctenos vía WhatsApp para estudio de viabilidad y acompañamiento." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Maracanã — Dona Zulmira Street #19 — Apt 101',
      subtitle: 'Dona Zulmira Street, #19, Apt 101 — Maracanã, Rio de Janeiro/RJ | 66 m² • Balcony • 1 Bedroom • Living Room • Kitchen • Maid Quarters • Amenities & Parking',
      address: 'Dona Zulmira Street, 19 - Apt 101 — Maracanã, Rio de Janeiro - RJ',
      p1Date: '09/02/2026 at 2:00 PM',
      p2Date: '09/09/2026 at 2:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '1.640.226-5',
      rgi: 'Title #41.819 (10th Land Registry)',
      val: 'R$ 406,923.00',
      p2Val: 'R$ 203,461.50 (50% starting bid)',
      description: 'Front-facing 66 sqm residential apartment at Dona Zulmira Street #19, Apt 101, Maracanã, North Zone of Rio de Janeiro/RJ. Building built in 1984. Features balcony, bedroom, living room, bathroom, kitchen, and maid quarters. Condominium includes 2 elevators, 4 security cameras, 2 garage levels, playground, party room, and BBQ area. Registered under Title #41.819 (10th Registry) and IPTU #1.640.226-5. Court appraisal R$ 406,923.00, 2nd auction starting bid at 50% (R$ 203,461.50).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official appraisal and starting bid for Apt 101 at Dona Zulmira Street #19?", a: "Official court appraisal is R$ 406,923.00. 1st Auction opens at R$ 406,923.00. 2nd Auction (09/09/2026 at 2:00 PM) opens at 50% of appraisal value (R$ 203,461.50)." },
        { q: "What are the specs of the apartment and condominium amenities?", a: "66 sqm apartment with balcony, bedroom, living room, bathroom, kitchen, and maid quarters. Building has 2 elevators, security cameras, 2 garage levels, playground, party room, and BBQ." },
        { q: "How is legal due diligence conducted for Title #41.819?", a: "We audit Title #41.819 (10th Registry), IPTU tax records (1.640.226-5), condo debts, and TJRJ court records." },
        { q: "Can buyers submit installment proposals under Art. 895 of CPC?", a: "Yes, 25% down payment and up to 30 monthly installments secured by a mortgage on the property." },
        { q: "How to engage legal advisory services for this auction?", a: "Contact us via WhatsApp for complete legal analysis and full representation." }
      ]
    }
  },

  // Copacabana - Rua Marechal Mascarenhas de Morais nº 190, Apto 703 (79 m²)
  'copacabana-mascarenhas-morais-190': {
    pt: {
      title: 'Leilão Judicial de Apartamento em Copacabana — Rua Marechal Mascarenhas de Morais nº 190 — Apto 703',
      subtitle: 'Rua Marechal Mascarenhas de Morais, nº 190, Apto 703 — Copacabana, Rio de Janeiro/RJ | 79 m² • Prédio de 1982 • Portaria 24h • Garagem • 3 Elevadores • Lazer Completo',
      address: 'Rua Marechal Mascarenhas de Morais, 190 - Apto 703 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '17/09/2026 às 12:20h',
      p2Date: '22/09/2026 às 12:20h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '1.534.550-7',
      rgi: '49.437 (5º RGI/RJ - Livro 2º/7, Fls. 174)',
      val: 'R$ 1.091.500,00',
      p2Val: 'R$ 545.750,00 (50% do valor da avaliação)',
      description: 'Apartamento residencial de 79 m² localizado na prestigiada Rua Marechal Mascarenhas de Morais, nº 190, Apto 703, no coração do bairro de Copacabana, Zona Sul do Rio de Janeiro/RJ. Edifício construído em 1982, composto por sete andares e um andar de cobertura (quatro apartamentos por andar), contando com infraestrutura diferenciada: garagem, 3 elevadores, playground com salão de festas, serviço de portaria 24 horas e sistema completo de monitoramento por câmeras de segurança em todo o prédio. Imóvel devidamente registrado no Cartório do 5º Ofício do Registro Geral de Imóveis do Rio de Janeiro, Matrícula nº 49.437, Livro nº 2º/7, Fls. 174, e Inscrição Municipal nº 1.534.550-7 (IPTU). Avaliado judicialmente em R$ 1.091.500,00, com 2ª praça iniciando em 50% do valor da avaliação (R$ 545.750,00).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça para o apartamento na Rua Marechal Mascarenhas de Morais nº 190?", a: "O apartamento possui avaliação judicial de R$ 1.091.500,00. Na 1ª Praça (17/09/2026 às 12:20h), o lance mínimo é R$ 1.091.500,00. Na 2ª Praça (22/09/2026 às 12:20h), o lance inicial conta com 50% de desconto, fixado em R$ 545.750,00." },
        { q: "Quais são as características do edifício e a infraestrutura em Copacabana?", a: "O prédio de 1982 possui 7 andares mais cobertura, com apenas 4 apartamentos por andar. O condomínio oferece garagem, 3 elevadores, playground com salão de festas, portaria 24h e monitoramento por câmeras de segurança em todo o edifício." },
        { q: "Como é realizada a auditoria jurídica da Matrícula nº 49.437 do 5º RGI/RJ?", a: "Realizamos o levantamento minucioso da Matrícula 49.437 (Livro 2º/7, Fls. 174) no 5º RGI/RJ, verificação da Inscrição IPTU 1.534.550-7, análise da sub-rogação de débitos fiscais (Art. 130 do CTN) e checagem de débitos condominiais." },
        { q: "É possível apresentar proposta de parcelamento de acordo com o Art. 895 do CPC?", a: "Sim. Qualquer interessado pode apresentar proposta de arrematação parcelada por escrito antes do leilão, mediante sinal de 25% à vista e o saldo em até 30 parcelas mensais corrigidas, com garantia de hipoteca do próprio imóvel." },
        { q: "Como contratar a assessoria jurídica especializada para a arrematação deste apartamento em Copacabana?", a: "Entre em contato via WhatsApp com o escritório Soares Martins Advogados para obter a análise de viabilidade jurídica do edital e o acompanhamento integral desde o cadastramento até a expedição da carta de arrematação e posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Copacabana — Calle Marechal Mascarenhas de Morais nº 190 — Apto 703',
      subtitle: 'Calle Marechal Mascarenhas de Morais, nº 190, Apto 703 — Copacabana, Río de Janeiro/RJ | 79 m² • Edificio de 1982 • Portería 24h • Garaje • 3 Ascensores • Áreas Comunes',
      address: 'Calle Marechal Mascarenhas de Morais, 190 - Apto 703 — Copacabana, Río de Janeiro - RJ',
      p1Date: '17/09/2026 a las 12:20h',
      p2Date: '22/09/2026 a las 12:20h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '1.534.550-7',
      rgi: '49.437 (5º RGI/RJ - Libro 2º/7, Fs. 174)',
      val: 'R$ 1.091.500,00',
      p2Val: 'R$ 545.750,00 (50% de la evaluación)',
      description: 'Apartamento de 79 m² en Calle Marechal Mascarenhas de Morais, nº 190, Apto 703, Copacabana, Zona Sur de Río de Janeiro. Edificio de 1982 con 7 pisos y cobertura (4 unidades por piso). Dispone de garaje, 3 ascensores, playground con salón de fiestas, portería 24h y cámaras de seguridad. Registrado en el 5º RGI (Matrícula nº 49.437) e IPTU nº 1.534.550-7. Evaluación de R$ 1.091.500,00, 2ª subasta iniciando al 50% (R$ 545.750,00).',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y puja inicial en 2ª Subasta para el apartamento en Calle Marechal Mascarenhas de Morais nº 190?", a: "Valoración judicial de R$ 1.091.500,00. En 2ª Subasta (22/09/2026 a las 12:20h), la puja abre al 50% (R$ 545.750,00)." },
        { q: "¿Cuáles son las características del edificio en Copacabana?", a: "Inmueble de 79 m² en edificio de 1982. Ofrece garaje, 3 ascensores, playground con salón de fiestas, portería 24h y seguridad con cámaras." },
        { q: "¿Cómo se audita la Matrícula nº 49.437 del 5º RGI/RJ?", a: "Estudio de la Matrícula 49.437, IPTU 1.534.550-7 y expedientes judiciales." },
        { q: "¿Es posible presentar propuesta a plazos?", a: "Sí, según el Art. 895 del CPC (25% de enganche y hasta 30 cuotas)." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Contáctenos vía WhatsApp para estudio de viabilidad y acompañamiento." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Copacabana — Marechal Mascarenhas de Morais Street #190 — Apt 703',
      subtitle: 'Marechal Mascarenhas de Morais Street, #190, Apt 703 — Copacabana, Rio de Janeiro/RJ | 79 m² • 1982 Building • 24h Doorman • Garage • 3 Elevators • Party Hall',
      address: 'Marechal Mascarenhas de Morais Street, 190 - Apt 703 — Copacabana, Rio de Janeiro - RJ',
      p1Date: '09/17/2026 at 12:20 PM',
      p2Date: '09/22/2026 at 12:20 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '1.534.550-7',
      rgi: 'Title #49.437 (5th Land Registry)',
      val: 'R$ 1,091,500.00',
      p2Val: 'R$ 545,750.00 (50% starting bid)',
      description: 'Residential 79 sqm apartment located at Marechal Mascarenhas de Morais Street #190, Apt 703, Copacabana, South Zone of Rio de Janeiro/RJ. Built in 1982, 7 floors plus penthouse (4 apartments per floor). Condominium includes garage, 3 elevators, playground with party hall, 24-hour doorman, and security cameras throughout. Registered under Title #49.437 (5th Registry) and IPTU #1.534.550-7. Court appraisal R$ 1,091,500.00, 2nd auction starting bid at 50% (R$ 545,750.00).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official appraisal and starting bid for Apt 703 at Marechal Mascarenhas de Morais Street #190?", a: "Official court appraisal is R$ 1,091,500.00. 1st Auction opens at R$ 1,091,500.00. 2nd Auction (09/22/2026 at 12:20 PM) opens at 50% of appraisal value (R$ 545,750.00)." },
        { q: "What are the building specs and amenities in Copacabana?", a: "79 sqm apartment in a 1982 building with 3 elevators, garage, playground with party room, 24/7 security doorman, and camera surveillance." },
        { q: "How is legal due diligence conducted for Title #49.437?", a: "We audit Title #49.437 (5th Registry), IPTU tax records (1.534.550-7), condo debts, and TJRJ court records." },
        { q: "Can buyers submit installment proposals under Art. 895 of CPC?", a: "Yes, 25% down payment and up to 30 monthly installments secured by a mortgage on the property." },
        { q: "How to engage legal advisory services for this auction?", a: "Contact us via WhatsApp for complete legal analysis and full representation." }
      ]
    }
  },

  // Copacabana - Rua Silva Castro nº 44, Apto 1001 (Cobertura - 206 m²)
  'copacabana-silva-castro-44': {
    pt: {
      title: 'Leilão Judicial de Cobertura em Copacabana — Rua Silva Castro nº 44 — Apto 1001',
      subtitle: 'Rua Silva Castro, nº 44, Apto 1001 (Cobertura) — Copacabana, Rio de Janeiro/RJ | 206 m² • Duplex • 3 Quartos (1 Suíte) • Terraço com Piscina de Fibra • Deck de Madeira • Churrasqueira • Dependência Completa',
      address: 'Rua Silva Castro, 44 - Apto 1001 (Cobertura) — Copacabana, Rio de Janeiro - RJ',
      p1Date: '14/09/2026 às 12:20h',
      p2Date: '17/09/2026 às 12:20h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0.065.088-7',
      rgi: '107.466 (5º RGI/RJ)',
      val: 'R$ 2.500.000,00',
      p2Val: 'R$ 1.500.000,00 (60% do valor da avaliação)',
      description: 'Excepcional cobertura duplex residencial de frente com 206 m² localizada na Rua Silva Castro, nº 44, Apto 1001, em área nobre e tranquila do bairro de Copacabana, Rio de Janeiro/RJ. O imóvel é composto por 1º pavimento com ampla sala de frente em piso porcelanato e parede com textura cinza, 3 quartos (sendo 2 de frente para a rua e 1 suíte de fundos), hall em porcelanato, banheiro social, banheiro da suíte, cozinha, área de serviço e dependência completa de empregada (quarto e banheiro). O 2º pavimento, acessado por escada de alvenaria revestida em madeira, conta com sala em porcelanato, banheiro social, área privativa de aproximadamente 22 m² com churrasqueira (área comum do condomínio de uso exclusivo do apartamento) e espaçoso terraço com varanda em ardósia, canteiro de plantas em pastilhas, deck de madeira e piscina redonda de fibra. Imóvel registrado no Cartório do 5º Ofício do RGI/RJ sob a Matrícula nº 107.466 e Inscrição Municipal IPTU nº 0.065.088-7. Avaliação judicial de R$ 2.500.000,00, com 2ª praça iniciando a 60% da avaliação (R$ 1.500.000,00).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça para a cobertura na Rua Silva Castro nº 44?", a: "A cobertura possui avaliação judicial de R$ 2.500.000,00. Na 1ª Praça (14/09/2026 às 12:20h), o lance mínimo é R$ 2.500.000,00. Na 2ª Praça (17/09/2026 às 12:20h), o lance inicial conta com 40% de desconto, fixado em 60% da avaliação, ou seja, R$ 1.500.000,00." },
        { q: "Quais são as características detalhadas da cobertura duplex em Copacabana?", a: "A cobertura possui 206 m² divididos em 2 pavimentos: no 1º pavimento há sala de frente em porcelanato, 3 quartos (1 suíte), banheiro social, cozinha, área de serviço e dependência completa. No 2º pavimento há sala em porcelanato, banheiro, área de 22 m² de uso exclusivo com churrasqueira, terraço em ardósia, deck de madeira e piscina de fibra." },
        { q: "Como é feita a verificação cartorária da Matrícula nº 107.466 no 5º RGI/RJ?", a: "A assessoria realiza a auditoria completa da Matrícula 107.466 no 5º RGI/RJ, validação da Inscrição IPTU nº 0.065.088-7, verificação da área privativa de uso exclusivo do condomínio, análise da sub-rogação de tributos (Art. 130 do CTN) e certidões de ônus reais." },
        { q: "É possível solicitar o parcelamento da arrematação conforme o Art. 895 do CPC?", a: "Sim. Qualquer interessado pode apresentar proposta de arrematação parcelada por escrito antes do leilão, mediante sinal de 25% à vista e o saldo em até 30 parcelas mensais corrigidas, com garantia de hipoteca sobre a própria cobertura." },
        { q: "Como contratar a assessoria jurídica especializada para a arrematação desta cobertura?", a: "Entre em contato via WhatsApp com o escritório Soares Martins Advogados para obter a análise de viabilidade jurídica do edital e o acompanhamento integral em todas as etapas até a imissão na posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Ático Duplex en Copacabana — Calle Silva Castro nº 44 — Apto 1001',
      subtitle: 'Calle Silva Castro, nº 44, Apto 1001 (Ático) — Copacabana, Río de Janeiro/RJ | 206 m² • Duplex • 3 Habitaciones (1 Suite) • Terraza con Piscina de Fibra • Deck de Madera • Barbacoa • Dependencia Completa',
      address: 'Calle Silva Castro, 44 - Apto 1001 (Ático) — Copacabana, Río de Janeiro - RJ',
      p1Date: '14/09/2026 a las 12:20h',
      p2Date: '17/09/2026 a las 12:20h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0.065.088-7',
      rgi: '107.466 (5º RGI/RJ)',
      val: 'R$ 2.500.000,00',
      p2Val: 'R$ 1.500.000,00 (60% de la evaluación)',
      description: 'Ático duplex residencial de 206 m² en Calle Silva Castro nº 44, Apto 1001, Copacabana, Río de Janeiro. El 1er piso cuenta con salón exterior en porcelanato, 3 dormitorios (1 suite), baño social, cocina, área de servicio y dependencia de servicio. El 2º piso incluye salón, baño, área exclusiva de 22 m² con barbacoa, terraza en pizarra, deck de madera y piscina redonda de fibra. Registrado en el 5º RGI (Matrícula nº 107.466) e IPTU nº 0.065.088-7. Valoración judicial de R$ 2.500.000,00, 2ª subasta iniciando al 60% (R$ 1.500.000,00).',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y puja inicial en 2ª Subasta para el ático en Calle Silva Castro nº 44?", a: "Valoración judicial de R$ 2.500.000,00. En 2ª Subasta (17/09/2026 a las 12:20h), la puja abre al 60% de la evaluación (R$ 1.500.000,00)." },
        { q: "¿Cuáles son las características principales de este ático duplex en Copacabana?", a: "Propiedad de 206 m² con 3 habitaciones (1 suite), salón en porcelanato, cocina, dependencia completa, área privada de 22 m² con barbacoa, terraza con deck de madera y piscina de fibra." },
        { q: "¿Cómo se verifica la Matrícula nº 107.466 del 5º RGI/RJ?", a: "Se realiza auditoría de la Matrícula 107.466, consulta de la Inscripción IPTU 0.065.088-7 y revisión de expedientes judiciales." },
        { q: "¿Se puede pagar de forma financiada/a plazos?", a: "Sí, conforme al Art. 895 del CPC (25% de enganche y hasta 30 cuotas mensuales)." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Contáctenos vía WhatsApp con el equipo de Soares Martins Advogados para representación integral." }
      ]
    },
    en: {
      title: 'Judicial Auction of Penthouse in Copacabana — Silva Castro Street #44 — Apt 1001',
      subtitle: 'Silva Castro Street, #44, Apt 1001 (Penthouse) — Copacabana, Rio de Janeiro/RJ | 206 sqm • Duplex • 3 Bedrooms (1 Suite) • Terrace with Fiber Pool • Wooden Deck • BBQ Area • Maid Quarters',
      address: 'Silva Castro Street, 44 - Apt 1001 (Penthouse) — Copacabana, Rio de Janeiro - RJ',
      p1Date: '09/14/2026 at 12:20 PM',
      p2Date: '09/17/2026 at 12:20 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0.065.088-7',
      rgi: 'Title #107.466 (5th Land Registry)',
      val: 'R$ 2,500,000.00',
      p2Val: 'R$ 1,500,000.00 (60% starting bid)',
      description: 'Exceptional 206 sqm duplex residential penthouse at Silva Castro Street #44, Apt 1001, Copacabana, Rio de Janeiro/RJ. First floor features front-facing living room with porcelain tile floors, 3 bedrooms (1 suite), guest bathroom, kitchen, laundry area, and full maid quarters. Second floor features living room, bathroom, exclusive 22 sqm patio with BBQ, terrace with slate tile, wooden deck, and round fiberglass swimming pool. Registered under Title #107.466 (5th Registry) and IPTU #0.065.088-7. Court appraisal R$ 2,500,000.00, 2nd auction starting bid at 60% (R$ 1,500,000.00).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official appraisal and starting bid for Apt 1001 at Silva Castro Street #44?", a: "Official court appraisal is R$ 2,500,000.00. 1st Auction opens at R$ 2,500,000.00. 2nd Auction (09/17/2026 at 12:20 PM) opens at 60% of appraisal value (R$ 1,500,000.00)." },
        { q: "What are the specs and amenities of this Copacabana penthouse?", a: "206 sqm duplex penthouse with 3 bedrooms (1 suite), porcelain tile living room, full maid quarters, exclusive 22 sqm BBQ area, terrace with wooden deck, and round fiber pool." },
        { q: "How is legal due diligence conducted for Title #107.466?", a: "We audit Title #107.466 (5th Registry), IPTU tax records (0.065.088-7), condo usage rights, and TJRJ court records." },
        { q: "Can buyers submit installment proposals under Art. 895 of CPC?", a: "Yes, 25% down payment and up to 30 monthly installments secured by a mortgage on the property." },
        { q: "How to engage legal advisory services for this auction?", a: "Contact us via WhatsApp for complete legal analysis and full representation." }
      ]
    }
  },

  // Santa Teresa - Rua Joaquim Murtinho nº 587 (Antiga Pousada Casa Mango Mango - 1.132 m²)
  'santa-teresa-joaquim-murtinho-587': {
    pt: {
      title: 'Leilão Judicial de Casarão em Santa Teresa — Rua Joaquim Murtinho nº 587',
      subtitle: 'Rua Joaquim Murtinho, nº 587 — Santa Teresa, Rio de Janeiro/RJ | 1.132 m² • Imóvel Histórico de 1938 (Antiga Pousada Casa Mango Mango) • Casa Principal (3 Andares + Suíte Externa) • Bangalô • Prédio Superior (5 Anexos) • Piscina, Sauna, Churrasqueira e Mata Preservada',
      address: 'Rua Joaquim Murtinho, 587 (Antiga Pousada Casa Mango Mango) — Santa Teresa, Rio de Janeiro - RJ',
      p1Date: '28/09/2026 às 12:00h',
      p2Date: '01/10/2026 às 12:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0.113.118-4',
      rgi: '2.117 (7º RGI/RJ)',
      val: 'R$ 2.900.000,00',
      p2Val: 'R$ 1.740.000,00 (60% do valor da avaliação)',
      description: 'Singular propriedade histórica de 1938 com 1.132 m² de área na Rua Joaquim Murtinho, nº 587, no bucólico e cultural bairro de Santa Teresa, Rio de Janeiro/RJ (antiga pousada "Casa Mango Mango"). O imóvel é composto por: 1) Casa Principal em 3 pavimentos principais mais 4º andar (1º andar com 3 suítes e área para estacionamento; 2º andar com sala com biblioteca, 3 suítes, 2 quartos e 2 suítes com entrada lateral; 3º andar com 1 quarto e banheiro social via escada caracol; 4º andar com 1 suíte acessada pela área externa); 2) Área de Lazer e Funcionamento com piscina de tamanho médio, sauna, banheiros, jardim de inverno, churrasqueira coberta com banheiros, cozinha, quarto e despensa; 3) Bangalô Independente construído à parte, em ótimo estado, com quarto em mezanino, sala, cozinha e banheiro; 4) Prédio Superior Anexo com 5 unidades integradas (casa térrea com 2 suítes + amplo apartamento duplex com cozinha americana e closet/escritório + casa anexa de 2 pavimentos com suíte com jardim privativo); 5) Área com Mata Preservada ao fundo do terreno com árvores nativas e paisagismo natural; 6) Garagem no início do terreno com entrada independente, adaptada para quarto/depósito. Registrado no Cartório do 7º Ofício do RGI/RJ sob a Matrícula nº 2.117 e IPTU nº 0.113.118-4. Avaliação de R$ 2.900.000,00, com 2ª praça iniciando a 60% da avaliação (R$ 1.740.000,00).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça para o imóvel na Rua Joaquim Murtinho nº 587?", a: "A propriedade possui avaliação oficial de R$ 2.900.000,00. Na 1ª Praça (28/09/2026 às 12:00h), o lance mínimo é R$ 2.900.000,00. Na 2ª Praça (01/10/2026 às 12:00h), o lance inicial conta com 40% de desconto, fixado em 60% da avaliação, ou seja, R$ 1.740.000,00." },
        { q: "Quais são as principais estruturas que compõem os 1.132 m² deste casarão histórico em Santa Teresa?", a: "A propriedade inclui: Casa Principal de 4 pavimentos (múltiplas suítes e sala/biblioteca), área de lazer com piscina, sauna, jardim de inverno e churrasqueira, bangalô independente em mezanino, prédio superior anexo com 5 unidades residenciais, área de mata preservada e garagem com entrada independente." },
        { q: "Como é feita a auditoria jurídica da Matrícula nº 2.117 no 7º RGI/RJ e IPTU nº 0113118-4?", a: "A assessoria jurídica realiza due diligence minuciosa da Matrícula 2.117 perante o 7º RGI/RJ, consulta da Inscrição IPTU 0.113.118-4, análise de tombamento ou restrições do patrimônio histórico em Santa Teresa, verificação da sub-rogação de tributos (Art. 130 do CTN) e certidões cíveis e fiscais." },
        { q: "É possível arrematar o imóvel de forma parcelada via Art. 895 do CPC?", a: "Sim. Qualquer interessado pode apresentar proposta de arrematação parcelada por escrito antes do início da praça, mediante sinal mínimo de 25% à vista e o saldo em até 30 parcelas mensais corrigidas, garantido por hipoteca judicial sobre a própria propriedade." },
        { q: "Como contratar a assessoria jurídica especializada para a arrematação deste casarão/pousada?", a: "Entre em contato via WhatsApp com o escritório Soares Martins Advogados para obter a análise de viabilidade e representação jurídica completa em todas as fases até a entrega das chaves e imissão na posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Casona en Santa Teresa — Calle Joaquim Murtinho nº 587',
      subtitle: 'Calle Joaquim Murtinho, nº 587 — Santa Teresa, Río de Janeiro/RJ | 1.132 m² • Propiedad Histórica de 1938 (Antigua Posada Casa Mango Mango) • Casa Principal • Bungalow • Edificio Anexo Superior • Piscina, Sauna y Bosque Preservado',
      address: 'Calle Joaquim Murtinho, 587 (Antigua Posada Casa Mango Mango) — Santa Teresa, Río de Janeiro - RJ',
      p1Date: '28/09/2026 a las 12:00h',
      p2Date: '01/10/2026 a las 12:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0.113.118-4',
      rgi: '2.117 (7º RGI/RJ)',
      val: 'R$ 2.900.000,00',
      p2Val: 'R$ 1.740.000,00 (60% de la evaluación)',
      description: 'Propiedad histórica de 1938 de 1.132 m² en Calle Joaquim Murtinho nº 587, Santa Teresa, Río de Janeiro (antigua posada "Casa Mango Mango"). Incluye casa principal de 4 pisos, área de ocio con piscina, sauna y barbacoa, bungalow independiente, edificio anexo superior con 5 unidades y área de bosque nativo preservado. Registrado en el 7º RGI (Matrícula nº 2.117) e IPTU nº 0.113.118-4. Valoración judicial de R$ 2.900.000,00, 2ª subasta iniciando al 60% (R$ 1.740.000,00).',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración y puja inicial en 2ª Subasta para la propiedad en Calle Joaquim Murtinho nº 587?", a: "Valoración de R$ 2.900.000,00. En 2ª Subasta (01/10/2026 a las 12:00h), la puja abre al 60% de la evaluación (R$ 1.740.000,00)." },
        { q: "¿Qué estructuras componen los 1.132 m² de esta propiedad en Santa Teresa?", a: "Casa principal de 4 plantas con múltiples suites, área de piscina, sauna y barbacoa, bungalow independiente, edificio anexo superior con 5 unidades y zona verde arbolada." },
        { q: "¿Cómo se verifica la Matrícula nº 2.117 del 7º RGI/RJ?", a: "Se realiza auditoría de la Matrícula 2.117, consulta de la Inscripción IPTU 0.113.118-4 y revisión de licencias o patrimonio histórico." },
        { q: "¿Se puede pagar de forma financiada/a plazos?", a: "Sí, conforme al Art. 895 del CPC (25% de enganche y hasta 30 cuotas mensuales)." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Contáctenos vía WhatsApp con el equipo de Soares Martins Advogados para representación integral." }
      ]
    },
    en: {
      title: 'Judicial Auction of Historic Mansion in Santa Teresa — Joaquim Murtinho Street #587',
      subtitle: 'Joaquim Murtinho Street, #587 — Santa Teresa, Rio de Janeiro/RJ | 1,132 sqm • 1938 Historic Property (Former "Casa Mango Mango" Inn) • Main Mansion • Bungalow • Upper Annex Building (5 Units) • Pool, Sauna, BBQ & Preserved Forest',
      address: 'Joaquim Murtinho Street, 587 (Former Casa Mango Mango Inn) — Santa Teresa, Rio de Janeiro - RJ',
      p1Date: '09/28/2026 at 12:00 PM',
      p2Date: '10/01/2026 at 12:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0.113.118-4',
      rgi: 'Title #2.117 (7th Land Registry)',
      val: 'R$ 2,900,000.00',
      p2Val: 'R$ 1,740,000.00 (60% starting bid)',
      description: 'Historic 1,132 sqm property built in 1938 at Joaquim Murtinho Street #587, Santa Teresa, Rio de Janeiro/RJ (former "Casa Mango Mango" boutique inn). Features: 1) 4-story Main Mansion with multiple suites and library; 2) Leisure & Utility area with swimming pool, sauna, winter garden, BBQ pavilion, and kitchen; 3) Independent Mezzanine Bungalow; 4) Upper Annex Building containing 5 self-contained residential units; 5) Preserved Native Forest Area at the back; 6) Separate Street-Level Garage. Registered under Title #2.117 (7th Land Registry) and IPTU #0.113.118-4. Court appraisal R$ 2,900,000.00, 2nd auction starting bid at 60% (R$ 1,740,000.00).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official appraisal and starting bid for Joaquim Murtinho Street #587?", a: "Official court appraisal is R$ 2,900,000.00. 1st Auction opens at R$ 2,900,000.00. 2nd Auction (10/01/2026 at 12:00 PM) opens at 60% of appraisal value (R$ 1,740,000.00)." },
        { q: "What are the key facilities included in this 1,132 sqm property?", a: "4-story main mansion with suites, pool/sauna/BBQ leisure grounds, mezzanine bungalow, upper annex building with 5 units, preserved green forest, and garage." },
        { q: "How is legal due diligence conducted for Title #2.117?", a: "We audit Title #2.117 (7th Registry), IPTU tax records (0.113.118-4), historic heritage regulations, and TJRJ court records." },
        { q: "Can buyers submit installment proposals under Art. 895 of CPC?", a: "Yes, 25% down payment and up to 30 monthly installments secured by a mortgage on the property." },
        { q: "How to engage legal advisory services for this auction?", a: "Contact us via WhatsApp for complete legal analysis and full representation." }
      ]
    }
  },

  // Santa Teresa - Rua Júlio Otoni nº 254 (Casa 203 m² - 12 Quartos, Piscina, Vista Cristo Redentor)
  'santa-teresa-julio-otoni-254': {
    pt: {
      title: 'Leilão Judicial de Casa em Santa Teresa — Rua Júlio Otoni nº 254',
      subtitle: 'Rua Júlio Otoni, nº 254 — Santa Teresa, Rio de Janeiro/RJ | 203 m² • Casa com 12 Quartos (Suíte Presidencial) • Jardim de Entrada • Bar e Restaurante • Piscina e Sauna a Vapor • Vista Panorâmica para o Cristo Redentor, Pão de Açúcar e Baía de Guanabara',
      address: 'Rua Júlio Otoni, 254 — Santa Teresa, Rio de Janeiro - RJ',
      p1Date: '21/09/2026 às 12:50h',
      p2Date: '23/09/2026 às 12:50h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0.417.443-9',
      rgi: '52318 (9º RGI/RJ)',
      val: 'R$ 3.153.239,03',
      p2Val: 'R$ 1.577.000,00 (50% do valor da avaliação)',
      description: 'Casa residencial em ótimo estado de conservação com diversas benfeitorias, com 203 m² de área construída, situada na Rua Júlio Otoni, nº 254, no bucólico e nobre bairro de Santa Teresa, Rio de Janeiro/RJ. O imóvel possui muro alto cuja entrada se inicia por um belo jardim que conduz a uma recepção e sala; dali uma escada dá acesso aos quartos e às áreas comuns. A propriedade conta com 12 quartos de tamanhos diversos, incluindo uma requintada Suíte Presidencial. Dispõe de estrutura completa com bar e restaurante, cozinha equipada, piscina e sauna a vapor. Destaca-se pela vista espetacular e panorâmica para a Zona Sul do Rio de Janeiro, sendo possível contemplar o Cristo Redentor, o Pão de Açúcar e a Baía de Guanabara, tanto dos quartos quanto da área da piscina. Região servida por iluminação pública, energia elétrica, asfaltamento, água, esgoto e telefonia, localizada próxima a Laranjeiras e no caminho de acesso ao Corcovado/Cristo Redentor, contando com transporte público por ônibus e o tradicional bonde de Santa Teresa na Rua Almirante Alexandrino. Devidamente registrada no 9º Ofício do Registro Geral de Imóveis sob a Matrícula nº 52318 e Inscrição Municipal nº 0.417.443-9. Avaliação judicial oficial de R$ 3.153.239,03, com 2ª praça iniciando com 50% de desconto por R$ 1.577.000,00.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação e o lance mínimo na 2ª Praça para a casa na Rua Júlio Otoni nº 254?", a: "O imóvel possui avaliação judicial de R$ 3.153.239,03. Na 1ª Praça (21/09/2026 às 12:50h), o lance mínimo é R$ 3.153.239,03 (100% da avaliação). Na 2ª Praça (23/09/2026 às 12:50h), o lance inicial conta com 50% de desconto, fixado em R$ 1.577.000,00." },
        { q: "Quais são as características físicas e benfeitorias da casa em Santa Teresa?", a: "Com 203 m² em ótimo estado de conservação, a casa dispõe de muro alto, jardim de entrada, recepção, sala, 12 quartos de tamanhos diversos (incluindo uma Suíte Presidencial), bar e restaurante, cozinha, sauna a vapor e piscina com vista cinematográfica para o Cristo Redentor, Pão de Açúcar e Baía de Guanabara." },
        { q: "Como é feita a auditoria jurídica da Matrícula nº 52318 no 9º RGI/RJ e IPTU nº 0.417.443-9?", a: "Nossa equipe realiza due diligence imobiliária completa na Matrícula nº 52318 perante o 9º RGI/RJ, consulta de débitos fiscais do IPTU nº 0.417.443-9, aplicação da sub-rogação de tributos sobre o preço da arrematação (Art. 130 do CTN) e certidões cíveis e de ônus reais no TJRJ." },
        { q: "É possível arrematar o imóvel mediante proposta de parcelamento (Art. 895 do CPC)?", a: "Sim. Qualquer interessado pode apresentar proposta escrita de arrematação parcelada antes do início do leilão, com entrada mínima de 25% à vista e o saldo restante em até 30 parcelas mensais corrigidas, garantidas por hipoteca sobre o próprio imóvel." },
        { q: "Como contratar a assessoria jurídica especializada do escritório Soares Martins Advogados?", a: "Entre em contato via WhatsApp ou e-mail corporativo com nossos advogados especialistas para análise minuciosa do edital e condução segura de todo o procedimento até a posse e entrega das chaves." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Casa en Santa Teresa — Calle Júlio Otoni nº 254',
      subtitle: 'Calle Júlio Otoni, nº 254 — Santa Teresa, Río de Janeiro/RJ | 203 m² • Casa con 12 Habitaciones (Suite Presidencial) • Jardín de Entrada • Bar y Restaurante • Piscina y Sauna de Vapor • Vista Panorámica al Cristo Redentor, Pan de Azúcar y Bahía de Guanabara',
      address: 'Calle Júlio Otoni, 254 — Santa Teresa, Río de Janeiro - RJ',
      p1Date: '21/09/2026 a las 12:50h',
      p2Date: '23/09/2026 a las 12:50h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0.417.443-9',
      rgi: '52318 (9º RGI/RJ)',
      val: 'R$ 3.153.239,03',
      p2Val: 'R$ 1.577.000,00 (50% de la evaluación)',
      description: 'Casa residencial de 203 m² en excelente estado de conservación en Calle Júlio Otoni nº 254, Santa Teresa, Río de Janeiro/RJ. Muro alto con jardín de entrada, recepción, salón, 12 habitaciones (incluyendo Suite Presidencial), bar/restaurante, cocina, piscina y sauna de vapor. Magnífica vista panorámica hacia la Zona Sur de Río de Janeiro, Cristo Redentor, Pan de Azúcar y Bahía de Guanabara. Próxima a Laranjeiras, con servicios públicos completos y transporte público por autobús y tranvía de Santa Teresa. Registrada en el 9º RGI (Matrícula nº 52318) e IPTU nº 0.417.443-9. Evaluación judicial de R$ 3.153.239,03, 2ª subasta iniciando al 50% (R$ 1.577.000,00).',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y puja mínima en 2ª Subasta para la casa en Calle Júlio Otoni nº 254?", a: "Valoración judicial de R$ 3.153.239,03. En 2ª Subasta (23/09/2026 a las 12:50h), la puja abre al 50% de la evaluación oficial (R$ 1.577.000,00)." },
        { q: "¿Cuáles son las características principales de esta casa en Santa Teresa?", a: "Propiedad de 203 m² con 12 dormitorios (Suite Presidencial), jardín de acceso, bar y restaurante, cocina, sauna y piscina con vista al Cristo Redentor, Pan de Azúcar y Bahía de Guanabara." },
        { q: "¿Cómo se verifica la Matrícula nº 52318 del 9º RGI/RJ?", a: "Se efectúa auditoría integral de la Matrícula 52318, consulta del IPTU 0.417.443-9, verificación de cargas e informes de no gravamen." },
        { q: "¿Se puede pagar de forma financiada a plazos (Art. 895 CPC)?", a: "Sí, con un 25% de enganche inicial al contado y saldo en hasta 30 cuotas mensuales con garantía hipotecaria." },
        { q: "¿Cómo solicitar la asesoría jurídica?", a: "Contáctenos vía WhatsApp con Soares Martins Advogados para representación jurídica integral en todas las etapas." }
      ]
    },
    en: {
      title: 'Judicial Auction of Estate House in Santa Teresa — Júlio Otoni Street #254',
      subtitle: 'Júlio Otoni Street, #254 — Santa Teresa, Rio de Janeiro/RJ | 203 sqm • 12-Bedroom House (Presidential Suite) • Entrance Garden • Bar & Restaurant • Swimming Pool & Steam Sauna • Panoramic Views of Christ the Redeemer, Sugarloaf & Guanabara Bay',
      address: 'Júlio Otoni Street, 254 — Santa Teresa, Rio de Janeiro - RJ',
      p1Date: '09/21/2026 at 12:50 PM',
      p2Date: '09/23/2026 at 12:50 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0.417.443-9',
      rgi: 'Title #52318 (9th Land Registry)',
      val: 'R$ 3,153,239.03',
      p2Val: 'R$ 1,577,000.00 (50% starting bid)',
      description: 'Charming 203 sqm estate house in excellent condition located at Júlio Otoni Street #254, Santa Teresa, Rio de Janeiro/RJ. High perimeter wall with front entrance tropical garden leading into reception foyer and living hall; staircase accessing guestrooms and common areas. Features 12 bedrooms of various sizes, including an executive Presidential Suite. Outfitted with bar and restaurant area, kitchen, steam sauna, and swimming pool terrace with panoramic views of Rio\'s South Zone, Christ the Redeemer, Sugarloaf Mountain, and Guanabara Bay. Full municipal public utilities, close to Laranjeiras and Corcovado access, served by bus line and Santa Teresa historic tram on Almirante Alexandrino Street. Registered under Title #52318 (9th Land Registry) and IPTU Tax #0.417.443-9. Official court valuation R$ 3,153,239.03, 2nd auction starting at 50% (R$ 1,577,000.00).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official appraisal and starting bid for Júlio Otoni Street #254?", a: "Official appraisal is R$ 3,153,239.03. 1st Auction opens at R$ 3,153,239.03. 2nd Auction (09/23/2026 at 12:50 PM) opens with a 50% discount at R$ 1,577,000.00." },
        { q: "What are the key facilities and amenities of this Santa Teresa house?", a: "203 sqm built area in top condition with 12 bedrooms (Presidential Suite), reception, bar/restaurant, kitchen, steam sauna, and pool terrace overlooking Christ the Redeemer, Sugarloaf, and Guanabara Bay." },
        { q: "How is legal due diligence conducted for Title #52318?", a: "We conduct complete title search on Title #52318 (9th Registry), municipal tax audits (IPTU #0.417.443-9), Art. 130 tax subrogation, and court lien clearance." },
        { q: "Can buyers submit installment proposals under Art. 895 of CPC?", a: "Yes, 25% down payment and up to 30 monthly installments secured by a mortgage on the property." },
        { q: "How to engage legal advisory services for this auction?", a: "Contact Soares Martins Advogados via WhatsApp for comprehensive legal analysis and representation." }
      ]
    }
  },

  // Barra da Tijuca - Avenida Lúcio Costa nº 6500 - Apto 203 (Condomínio Alfa Plaza / 60 m²)
  'barra-lucio-costa-6500-apto-203': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Avenida Lúcio Costa nº 6500 — Apto 203 (Condomínio Alfa Plaza)',
      subtitle: 'Avenida Lúcio Costa, nº 6500, Apto 203 — Condomínio Alfa Plaza — Barra da Tijuca, Rio de Janeiro/RJ | 60 m² • Posição de Frente • Orla da Praia da Barra • Elevadores, Churrasqueira, Ônibus do Condomínio, Clubes, Piscinas, Segurança 24h e Comércio Próximo',
      address: 'Avenida Lúcio Costa, 6500 - Apto 203 (Condomínio Alfa Plaza) — Barra da Tijuca, Rio de Janeiro - RJ',
      p1Date: '27/08/2026 às 12:20h',
      p2Date: '01/09/2026 às 12:20h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '1.690.545-7',
      rgi: '121.926 (9º RGI/RJ)',
      val: 'R$ 850.000,00',
      p2Val: 'R$ 425.000,00 (50% do valor da avaliação)',
      description: 'Apartamento residencial nº 203, com 60 m² de área privativa e posição de frente, situado na Avenida Lúcio Costa, nº 6500, no conceituado Condomínio Alfa Plaza, no coração da Barra da Tijuca, Rio de Janeiro/RJ. O condomínio possui localização nobre e privilegiada de frente para a praia da Barra da Tijuca (Posto 7 / orla marítima), dispondo de infraestrutura completa com elevadores sociais e de serviço, churrasqueira, ônibus executivo exclusivo do condomínio para moradores (itinerários para Zona Sul, Centro e principais polos), acesso a clubes com complexo de piscinas adulto e infantil, quadras esportivas, segurança e portaria 24 horas, além de farto comércio próximo (shoppings, restaurantes, farmácias e supermercados). Imóvel devidamente registrado, dimensionado e caracterizado no 9º Ofício do Registro Geral de Imóveis sob a Matrícula nº 121.926 e pela Inscrição Municipal de IPTU nº 1.690.545-7. Avaliação judicial oficial de R$ 850.000,00, com 2ª praça iniciando com 50% de desconto pelo valor de R$ 425.000,00.',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação oficial e o lance mínimo na 2ª Praça do apartamento no Alfa Plaza?", a: "O imóvel possui avaliação judicial oficial homologada de R$ 850.000,00. Na 1ª Praça (27/08/2026 às 12:20h), o lance mínimo corresponde a 100% da avaliação (R$ 850.000,00). Na 2ª Praça (01/09/2026 às 12:20h), o lance mínimo abre com 50% de desconto por apenas R$ 425.000,00." },
        { q: "Quais são as características físicas e a infraestrutura do Condomínio Alfa Plaza?", a: "O apartamento 203 possui 60 m² de área privativa e posição de frente. O Condomínio Alfa Plaza oferece localização privilegiada de frente para o mar da Barra da Tijuca, elevadores, churrasqueira, complexo de piscinas, clube privativo, segurança 24 horas e serviço de ônibus exclusivo para moradores com linhas para a Zona Sul e Centro do Rio." },
        { q: "Como é feita a auditoria jurídica da Matrícula nº 121.926 do 9º RGI/RJ e do IPTU nº 1.690.545-7?", a: "Nossa assessoria jurídica especializada realiza due diligence aprofundada na Matrícula nº 121.926 perante o 9º Ofício do RGI/RJ, consulta de débitos de IPTU (nº 1.690.545-7), levantamento de taxas condominiais e análise da execução no TJRJ, assegurando que os débitos tributários se sub-roguem no preço da arrematação conforme o art. 130, parágrafo único, do CTN." },
        { q: "É permitido o parcelamento judicial do lance (Artigo 895 do Código de Processo Civil)?", a: "Sim. O interessado pode apresentar proposta judicial de pagamento parcelado antes do encerramento da praça, com sinal de 25% à vista e o saldo remanescente em até 30 parcelas mensais corrigidas, com garantia hipotecária sobre o próprio apartamento." },
        { q: "Como contratar a assessoria do escritório Soares Martins Advogados para este leilão?", a: "Entre em contato via WhatsApp ou agende uma reunião em nossa sede em Ipanema/RJ para receber um parecer jurídico preventivo e acompanhamento presencial ou virtual em todas as etapas até a imissão na posse e entrega das chaves." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Avenida Lúcio Costa nº 6500 — Apto 203 (Condominio Alfa Plaza)',
      subtitle: 'Avenida Lúcio Costa, nº 6500, Apto 203 — Condominio Alfa Plaza — Barra da Tijuca, Río de Janeiro/RJ | 60 m² • Orientación Exterior • Primera Línea de Playa • Ascensores, Barbacoa, Autobús Privado, Clubes, Piscinas, Seguridad 24h y Comercio',
      address: 'Avenida Lúcio Costa, 6500 - Apto 203 (Condominio Alfa Plaza) — Barra da Tijuca, Río de Janeiro - RJ',
      p1Date: '27/08/2026 a las 12:20h',
      p2Date: '01/09/2026 a las 12:20h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '1.690.545-7',
      rgi: '121.926 (9º RGI/RJ)',
      val: 'R$ 850.000,00',
      p2Val: 'R$ 425.000,00 (50% de la evaluación)',
      description: 'Apartamento residencial nº 203 con 60 m² de superficie privativa, orientación exterior (frente a la calle), ubicado en la Avenida Lúcio Costa nº 6500, en el prestigioso Condominio Alfa Plaza en Barra da Tijuca, Río de Janeiro/RJ. El condominio se encuentra en primera línea de playa frente al mar de Barra da Tijuca y dispone de infraestructura completa: ascensores, zona de barbacoa, autobús exclusivo para residentes hacia Zona Sur y Centro de Río, acceso a clubes, piscinas, seguridad 24 horas y comercio cercano. Registrado en el 9º Registro de Inmuebles bajo la Matrícula nº 121.926 e IPTU nº 1.690.545-7. Evaluación oficial de R$ 850.000,00, segunda subasta con puja inicial del 50% (R$ 425.000,00).',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y la puja mínima en 2ª Subasta para el apartamento en Alfa Plaza?", a: "Valoración oficial de R$ 850.000,00. En 1ª Subasta (27/08/2026 a las 12:20h) puja del 100%. En 2ª Subasta (01/09/2026 a las 12:20h) la puja inicial abre al 50% por R$ 425.000,00." },
        { q: "¿Qué comodidades y características ofrece el Condominio Alfa Plaza?", a: "Apartamento exterior de 60 m² en primera línea de playa en Barra da Tijuca. El complejo cuenta con autobús privado hacia Zona Sur/Centro, piscinas, club recreativo, barbacoa, ascensores y seguridad 24 horas." },
        { q: "¿Cómo se audita la Matrícula nº 121.926 del 9º RGI/RJ?", a: "Realizamos una due diligence completa sobre la Matrícula 121.926 del 9º RGI, deudas de IPTU (1.690.545-7) y proceso judicial en el TJRJ con garantía de subrogación de deudas según la legislación brasileña." },
        { q: "¿Es posible pagar mediante propuesta a plazos (Art. 895 CPC)?", a: "Sí, mediante pago inicial del 25% al contado y saldo restante financiado en hasta 30 mensualidades con hipoteca sobre el inmueble." },
        { q: "¿Cómo contratar la asesoría de Soares Martins Advogados?", a: "Contáctenos vía WhatsApp para obtener un informe preventivo y asesoramiento integral hasta la toma de posesión." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment on Lúcio Costa Ave #6500 — Apt 203 (Alfa Plaza Condominium)',
      subtitle: 'Lúcio Costa Ave, #6500, Apt 203 — Alfa Plaza Condominium — Barra da Tijuca, Rio de Janeiro/RJ | 60 sqm • Front-Facing Unit • Oceanfront Beachfront • Elevators, BBQ, Private Bus Service, Clubs, Pools, 24/7 Security & Local Shops',
      address: 'Lúcio Costa Ave, 6500 - Apt 203 (Alfa Plaza Condominium) — Barra da Tijuca, Rio de Janeiro - RJ',
      p1Date: '08/27/2026 at 12:20 PM',
      p2Date: '09/01/2026 at 12:20 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '1.690.545-7',
      rgi: 'Title #121.926 (9th Land Registry)',
      val: 'R$ 850,000.00',
      p2Val: 'R$ 425,000.00 (50% starting bid)',
      description: 'Residential 60 sqm front-facing apartment (Unit 203) located at Lúcio Costa Avenue #6500, in the premier beachfront Condomínio Alfa Plaza in Barra da Tijuca, Rio de Janeiro/RJ. Prime oceanfront location facing Barra da Tijuca beach, offering top-tier amenities: passenger and service elevators, barbecue grills, private shuttle bus service for residents (daily routes to South Zone and Downtown Rio), access to private leisure clubs with swimming pools, sports courts, 24/7 monitored security, and local shops/dining within short walking distance. Registered under Title #121.926 at the 9th Real Estate Registry of Rio de Janeiro and Municipal Tax IPTU #1.690.545-7. Court appraisal of R$ 850,000.00, with 2nd auction opening bid starting at 50% discount for R$ 425,000.00.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official appraisal and 2nd auction minimum bid for Apt 203 in Alfa Plaza?", a: "Court valuation is R$ 850,000.00. 1st Auction (08/27/2026 at 12:20 PM) starts at 100% (R$ 850,000.00). 2nd Auction (09/01/2026 at 12:20 PM) opens at a 50% discount for R$ 425,000.00." },
        { q: "What are the specs and amenities of Alfa Plaza Condominium?", a: "60 sqm front-facing unit located right on Barra da Tijuca beach. Amenities include resident shuttle bus to South Zone/Downtown, swimming pool complex, sports clubs, BBQ, elevators, and 24/7 security." },
        { q: "How is legal due diligence conducted on Title #121.926 (9th Land Registry)?", a: "We perform full legal audit on Title #121.926 (9th Registry), municipal tax audits (IPTU #1.690.545-7), and TJRJ court records, ensuring full debt subrogation under Brazilian Tax Code Art. 130." },
        { q: "Can buyers submit installment proposals under CPC Art. 895?", a: "Yes, 25% down payment and up to 30 monthly installments secured by a judicial mortgage on the apartment." },
        { q: "How to contact the Soares Martins Advogados team for legal representation?", a: "Reach out via WhatsApp or visit our Ipanema office for complete legal due diligence and courtroom representation through key handover." }
      ]
    }
  },

  // Botafogo - Rua Guilhermina Guinle nº 18 - Apto 401 (72 m²)
  'botafogo-guilhermina-guinle-18-apto-401': {
    pt: {
      title: 'Leilão Judicial de Apartamento em Botafogo — Rua Guilhermina Guinle nº 18 — Apto 401',
      subtitle: 'Rua Guilhermina Guinle, nº 18, Apto 401 — Botafogo, Rio de Janeiro/RJ | 72 m² • Posição de Frente • Esquina com Rua Voluntários da Pátria • Prédio de 1959 • Excelente Localização, Próximo ao Metrô e Farto Comércio',
      address: 'Rua Guilhermina Guinle, 18 - Apto 401 — Botafogo, Rio de Janeiro - RJ',
      p1Date: '24/09/2026 às 12:20h',
      p2Date: '29/09/2026 às 12:20h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0.277.088-1',
      rgi: '60.137 (3º RGI/RJ)',
      val: 'R$ 828.000,00',
      p2Val: 'R$ 496.800,00 (60% do valor da avaliação)',
      description: 'Apartamento residencial nº 401, com 72 m² de área privativa e posição de frente, situado na Rua Guilhermina Guinle, nº 18, em Botafogo, Rio de Janeiro/RJ. O edifício, construído em 1959, possui implantação tradicional de esquina entre a Rua Guilhermina Guinle e a Rua Voluntários da Pátria. Trata-se de uma rua residencial arborizada e tranquila, beneficiada pela imediata proximidade do vibrante polo comercial, gastronômico e de transportes de Botafogo, a poucos passos da Estação de Metrô Botafogo, supermercados, colégios tradicionais, hospitais, clínicas e cinemas. O prédio não possui garagem e nem playground, refletindo taxa condominial enxuta e alta eficiência de custos. Imóvel devidamente registrado, dimensionado e caracterizado no 3º Ofício do Registro Geral de Imóveis sob a Matrícula nº 60.137 e pela Inscrição Municipal de IPTU nº 0.277.088-1. Avaliação judicial oficial de R$ 828.000,00, com 2ª praça iniciando com 60% do valor de avaliação por R$ 496.800,00 (desconto de R$ 331.200,00).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação oficial e o lance mínimo na 2ª Praça do apartamento na Rua Guilhermina Guinle?", a: "O imóvel possui avaliação judicial homologada em R$ 828.000,00. Na 1ª Praça (24/09/2026 às 12:20h), o lance inicial é de 100% da avaliação (R$ 828.000,00). Na 2ª Praça (29/09/2026 às 12:20h), o lance mínimo tem início em 60% do valor da avaliação, saindo por R$ 496.800,00." },
        { q: "Quais são as características físicas do imóvel e a infraestrutura do edifício?", a: "O apartamento 401 tem 72 m² e posição de frente para a rua. O edifício é uma construção clássica de 1959, de esquina entre a Rua Guilhermina Guinle e a Rua Voluntários da Pátria, sem vaga de garagem e sem playground, o que resulta em custos condominiais reduzidos e alta atratividade para moradia ou locação." },
        { q: "Como é a localização do imóvel no bairro de Botafogo?", a: "A Rua Guilhermina Guinle é uma rua residencial aprazível e charmosa, estrategicamente conectada à Rua Voluntários da Pátria. Está cercada por ampla oferta de serviços, restaurantes, farmácias, escolas e com fácil acesso a pé ao Metrô Botafogo e principais vias para Copacabana, Humaitá e Centro." },
        { q: "Como é realizada a auditoria da Matrícula nº 60.137 do 3º RGI/RJ e débitos de IPTU?", a: "Nossa assessoria jurídica especializada realiza due diligence aprofundada na Matrícula nº 60.137 do 3º RGI/RJ, apuração de débitos fiscais de IPTU (nº 0.277.088-1), taxas condominiais e exame integral da execução no TJRJ, assegurando a sub-rogação dos débitos no preço da arrematação conforme o art. 130, parágrafo único, do CTN." },
        { q: "É possível adquirir o imóvel de forma parcelada (Artigo 895 do Código de Processo Civil)?", a: "Sim. É facultado ao arrematante protocolar proposta judicial de pagamento parcelado antes do início de cada praça, com sinal de 25% à vista e saldo em até 30 parcelas mensais corrigidas com hipoteca judicial sobre a própria unidade." },
        { q: "Como contratar a assessoria do escritório Soares Martins Advogados para este leilão?", a: "Entre em contato via WhatsApp ou visite nosso escritório em Ipanema/RJ para receber análise preventiva completa e representação processual até a entrega das chaves e posse efetiva." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Botafogo — Calle Guilhermina Guinle nº 18 — Apto 401',
      subtitle: 'Calle Guilhermina Guinle, nº 18, Apto 401 — Botafogo, Río de Janeiro/RJ | 72 m² • Orientación Exterior • Esquina con Calle Voluntários da Pátria • Edificio de 1959 • Excelente Ubicación, Cerca del Metro y Comercio',
      address: 'Calle Guilhermina Guinle, 18 - Apto 401 — Botafogo, Río de Janeiro - RJ',
      p1Date: '24/09/2026 a las 12:20h',
      p2Date: '29/09/2026 a las 12:20h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0.277.088-1',
      rgi: '60.137 (3º RGI/RJ)',
      val: 'R$ 828.000,00',
      p2Val: 'R$ 496.800,00 (60% de la evaluación)',
      description: 'Apartamento residencial nº 401, con 72 m² de superficie privativa y orientación exterior, ubicado en la Calle Guilhermina Guinle nº 18, en Botafogo, Río de Janeiro/RJ. Edificio tradicional de 1959 en esquina con la Calle Voluntários da Pátria. Calle tranquila con excelente conectividad, a pocos minutos a pie de la estación de Metro Botafogo y de un vibrante eje comercial y gastronómico. Sin garaje ni zona infantil, garantizando gastos de comunidad reducidos. Registrado en el 3º Registro de Inmuebles bajo la Matrícula nº 60.137 e IPTU nº 0.277.088-1. Valoración oficial de R$ 828.000,00, segunda subasta con puja inicial del 60% por R$ 496.800,00.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y la puja mínima en 2ª Subasta para el apartamento en Rua Guilhermina Guinle?", a: "Valoración judicial homologada de R$ 828.000,00. En 1ª Subasta (24/09/2026 a las 12:20h) puja del 100%. En 2ª Subasta (29/09/2026 a las 12:20h) puja inicial del 60% por R$ 496.800,00." },
        { q: "¿Cuáles son las características del apartamento y el edificio?", a: "Apartamento exterior de 72 m² en edificio de 1959 en esquina. Ubicación privilegiada sin garaje ni parque infantil, con gastos comunitarios moderados." },
        { q: "¿Cómo es la ubicación en el barrio de Botafogo?", a: "Ubicación estratégica en esquina con Voluntários da Pátria, cerca del Metro Botafogo, comercios, colegios y clínicas." },
        { q: "¿Cómo se audita la Matrícula nº 60.137 del 3º RGI/RJ?", a: "Realizamos due diligence registral completa en el 3º RGI, verificación fiscal del IPTU 0.277.088-1 y auditoría procesal en el TJRJ." },
        { q: "¿Es posible pagar mediante propuesta a plazos (Art. 895 CPC)?", a: "Sí, mediante pago inicial del 25% al contado y hasta 30 mensualidades con garantía hipotecaria." },
        { q: "¿Cómo contratar la asesoría de Soares Martins Advogados?", a: "Contáctenos vía WhatsApp para un dictamen preventivo y acompañamiento hasta la posesión del inmueble." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Botafogo — Guilhermina Guinle Street #18 — Apt 401',
      subtitle: 'Guilhermina Guinle Street, #18, Apt 401 — Botafogo, Rio de Janeiro/RJ | 72 sqm • Front-Facing Unit • Corner of Voluntários da Pátria • 1959 Building • Prime Location Near Subway & Bustling Commerce',
      address: 'Guilhermina Guinle Street, 18 - Apt 401 — Botafogo, Rio de Janeiro - RJ',
      p1Date: '09/24/2026 at 12:20 PM',
      p2Date: '09/29/2026 at 12:20 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0.277.088-1',
      rgi: 'Title #60.137 (3rd Land Registry)',
      val: 'R$ 828,000.00',
      p2Val: 'R$ 496,800.00 (60% starting bid)',
      description: 'Residential 72 sqm front-facing apartment (Unit 401) located at Guilhermina Guinle Street #18 in Botafogo, Rio de Janeiro/RJ. Constructed in 1959, this traditional corner building sits at the junction of peaceful Guilhermina Guinle Street and lively Voluntários da Pátria Street. Steps away from the Botafogo Metro Station, top private schools, hospitals, supermarkets, and cultural hubs. The building features no garage and no playground, keeping HOA monthly maintenance costs minimal and yielding high rental appeal. Registered under Title #60.137 at the 3rd Real Estate Registry and Municipal Tax IPTU #0.277.088-1. Court valuation of R$ 828,000.00, with 2nd auction opening bid starting at 60% of appraisal value for R$ 496,800.00.',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official court valuation and 2nd auction minimum bid for Apt 401 on Guilhermina Guinle?", a: "Court valuation is R$ 828,000.00. 1st Auction (09/24/2026 at 12:20 PM) starts at 100% (R$ 828,000.00). 2nd Auction (09/29/2026 at 12:20 PM) opens at a 40% discount for R$ 496,800.00 (60% starting bid)." },
        { q: "What are the specs and features of this Botafogo apartment?", a: "72 sqm front-facing unit in a 1959 corner building with Voluntários da Pátria. Highly cost-efficient property without garage or playground fees." },
        { q: "What makes the Botafogo location attractive?", a: "A tranquil residential street cornering major transit routes, walking distance to Botafogo subway station, dining, and healthcare centers." },
        { q: "How is legal due diligence conducted on Title #60.137 (3rd Registry)?", a: "We conduct a complete title search at the 3rd Land Registry, municipal tax audits (IPTU #0.277.088-1), and TJRJ litigation checks ensuring full debt clearance under Brazilian Tax Code Art. 130." },
        { q: "Can buyers submit installment proposals under CPC Art. 895?", a: "Yes, 25% cash down payment and up to 30 monthly installments secured by a mortgage on the unit." },
        { q: "How to contact the Soares Martins Advogados team for legal representation?", a: "Reach out via WhatsApp or visit our Ipanema office for comprehensive due diligence and courtroom representation through key delivery." }
      ]
    }
  },

  // Flamengo - Rua Honório de Barros nº 23 - Apto 601 (70 m²)
  'flamengo-honorio-de-barros-23-apto-601': {
    pt: {
      title: 'Leilão Judicial de Apartamento no Flamengo — Rua Honório de Barros nº 23 — Apto 601',
      subtitle: 'Rua Honório de Barros, nº 23, Apto 601 — Flamengo, Rio de Janeiro/RJ | 70 m² • Edifício de 1963 com 4 Elevadores e Portaria 24 Horas • Sem Vaga de Garagem para a Unidade • Localização Nobre e Arborizada no Flamengo',
      address: 'Rua Honório de Barros, 23 - Apto 601 — Flamengo, Rio de Janeiro - RJ',
      p1Date: '08/09/2026 às 15:00h',
      p2Date: '10/09/2026 às 15:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0714891-9',
      rgi: '281.699 (9º RGI/RJ)',
      val: 'R$ 720.000,00',
      p2Val: 'R$ 432.000,00 (60% do valor da avaliação)',
      description: 'Apartamento residencial nº 601, com 70 m² de área privativa, situado na Rua Honório de Barros, nº 23, no tradicional bairro do Flamengo, Zona Sul do Rio de Janeiro/RJ. O edifício possui sólida construção datada de 1963, contando com excelente infraestrutura condominial com 4 elevadores, portaria presencial 24 horas e rigoroso controle de acesso. Segundo informações prestadas pela portaria do condomínio, embora haja garagem no prédio, o apartamento 601 não possui direito à vaga, resultando em custo condominial proporcionalmente mais eficiente. Imóvel devidamente registrado, dimensionado e caracterizado perante o 9º Ofício do Registro Geral de Imóveis da Capital sob a Matrícula nº 281.699 e cadastrado na Prefeitura da Cidade do Rio de Janeiro sob a Inscrição Municipal (IPTU) nº 0714891-9. Foi atribuído ao bem o valor de avaliação judicial de R$ 720.000,00, tendo a 2ª praça início com lance mínimo a 60% da avaliação pelo valor de R$ 432.000,00 (desconto de R$ 288.000,00).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação oficial e o lance mínimo na 2ª Praça do apartamento no Flamengo?", a: "O imóvel foi avaliado judicialmente em R$ 720.000,00. Na 1ª Praça (08/09/2026 às 15:00h), o lance mínimo corresponde a 100% da avaliação (R$ 720.000,00). Na 2ª Praça (10/09/2026 às 15:00h), o lance mínimo abre com 40% de desconto por R$ 432.000,00 (60% do valor da avaliação)." },
        { q: "Quais são as características físicas do imóvel e a infraestrutura do edifício na Rua Honório de Barros?", a: "O apartamento 601 tem 70 m² de área privativa. O edifício é uma construção sólida de 1963, dotado de 4 elevadores e portaria presencial 24 horas. Conforme informado pela portaria, o apartamento 601 não possui direito a vaga de garagem, o que assegura custos condominiais mais equilibrados." },
        { q: "Como é a localização da Rua Honório de Barros no bairro do Flamengo?", a: "A Rua Honório de Barros é uma via residencial arborizada e tranquila, situada em ponto nobre do Flamengo. Fica a poucos minutos a pé do Aterro do Flamengo (Parque Brigadeiro Eduardo Gomes), da Praia do Flamengo, e próxima às estações de Metrô Flamengo e Largo do Machado, com facilidade de acesso ao Centro e demais bairros da Zona Sul." },
        { q: "Como é realizada a auditoria da Matrícula nº 281.699 do 9º RGI/RJ e do IPTU nº 0714891-9?", a: "O escritório Soares Martins Advogados realiza due diligence documental aprofundada na Matrícula nº 281.699 (9º RGI), certidões enfitêuticas e tributárias municipais (IPTU nº 0714891-9), certidões fiscais e verificação de eventuais passivos condominiais, garantindo a sub-rogação dos débitos no preço do arremate (art. 130 do CTN)." },
        { q: "É possível adquirir o imóvel de forma parcelada (Artigo 895 do Código de Processo Civil)?", a: "Sim. O arrematante pode apresentar proposta de pagamento parcelado antes do encerramento da praça, com sinal de 25% à vista e saldo dividido em até 30 parcelas mensais corrigidas, com garantia hipotecária sobre o próprio imóvel." },
        { q: "Como contratar a assessoria do escritório Soares Martins Advogados para este leilão?", a: "Entre em contato via WhatsApp (+55 21 97954-9241) ou agende atendimento em nossa sede em Ipanema/RJ para receber análise preventiva e representação jurídica completa até a imissão na posse e entrega das chaves." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Flamengo — Calle Honório de Barros nº 23 — Apto 601',
      subtitle: 'Calle Honório de Barros, nº 23, Apto 601 — Flamengo, Río de Janeiro/RJ | 70 m² • Edificio de 1963 con 4 Ascensores y Portería 24 Horas • Sin Plaza de Garaje para la Unidad • Ubicación Exclusiva y Arbolada en Flamengo',
      address: 'Calle Honório de Barros, 23 - Apto 601 — Flamengo, Río de Janeiro - RJ',
      p1Date: '08/09/2026 a las 15:00h',
      p2Date: '10/09/2026 a las 15:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0714891-9',
      rgi: '281.699 (9º RGI/RJ)',
      val: 'R$ 720.000,00',
      p2Val: 'R$ 432.000,00 (60% de la evaluación)',
      description: 'Apartamento residencial nº 601, con 70 m² de superficie privativa, ubicado en la Calle Honório de Barros nº 23, en el tradicional barrio de Flamengo, Zona Sur de Río de Janeiro/RJ. El edificio, construido en 1963, cuenta con 4 ascensores, portería 24 horas y estricto control de acceso. Según información de la portería, aunque el edificio tiene garaje, el apartamento 601 no tiene derecho a plaza de aparcamiento, lo que reduce los gastos comunitarios. Registrado en el 9º Registro de la Propiedad bajo la Matrícula nº 281.699 e Inscripción Municipal de IPTU nº 0714891-9. Valoración judicial de R$ 720.000,00, segunda subasta con puja inicial del 60% por R$ 432.000,00.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y la puja mínima en 2ª Subasta para el apartamento en Flamengo?", a: "Valoración oficial de R$ 720.000,00. En 1ª Subasta (08/09/2026 a las 15:00h) puja del 100%. En 2ª Subasta (10/09/2026 a las 15:00h) la puja inicial abre al 60% por R$ 432.000,00." },
        { q: "¿Cuáles son las características del apartamento y del edificio en Calle Honório de Barros?", a: "Apartamento de 70 m² en edificio de 1963 con 4 ascensores y portería 24 horas. La unidad no dispone de plaza de garaje, optimizando los gastos mensuales de comunidad." },
        { q: "¿Cómo es la ubicación en el barrio de Flamengo?", a: "Calle residencial tranquila y arbolada en Flamengo, muy próxima al Parque do Flamengo (Aterro), la Playa de Flamengo y las estaciones de Metro Flamengo y Largo do Machado." },
        { q: "¿Cómo se audita la Matrícula nº 281.699 del 9º RGI/RJ?", a: "Realizamos una due diligence completa sobre la Matrícula 281.699 en el 9º RGI, deudas de IPTU (0714891-9) y proceso judicial en el TJRJ con garantía de subrogación legal." },
        { q: "¿Es posible pagar mediante propuesta a plazos (Art. 895 CPC)?", a: "Sí, mediante pago inicial del 25% al contado y saldo restante en hasta 30 cuotas mensuales con garantía hipotecaria sobre el inmueble." },
        { q: "¿Cómo contratar la asesoría de Soares Martins Advogados?", a: "Contáctenos vía WhatsApp para un dictamen preventivo y asesoramiento legal integral hasta la toma de posesión." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Flamengo — Honório de Barros Street #23 — Apt 601',
      subtitle: 'Honório de Barros Street, #23, Apt 601 — Flamengo, Rio de Janeiro/RJ | 70 sqm • 1963 Building with 4 Elevators & 24/7 Concierge • No Garage Space for Unit • Prime Tree-Lined Location in Flamengo',
      address: 'Honório de Barros Street, 23 - Apt 601 — Flamengo, Rio de Janeiro - RJ',
      p1Date: '09/08/2026 at 3:00 PM',
      p2Date: '09/10/2026 at 3:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0714891-9',
      rgi: 'Title #281.699 (9th Land Registry)',
      val: 'R$ 720,000.00',
      p2Val: 'R$ 432,000.00 (60% starting bid)',
      description: 'Residential 70 sqm apartment (Unit 601) located at Honório de Barros Street #23, in the esteemed Flamengo neighborhood, South Zone of Rio de Janeiro/RJ. Constructed in 1963, the building features robust architectural engineering with 4 elevators, 24/7 attended lobby, and security access. According to building concierge staff, although the building has a garage, Unit 601 has no assigned parking space, ensuring lower and more cost-effective monthly HOA condominium maintenance fees. Properly registered and dimensioned at the 9th Real Estate Registry of Rio de Janeiro under Title #281.699 and Municipal Tax IPTU #0714891-9. Official court appraisal is R$ 720,000.00, with 2nd auction opening bid starting at 60% of valuation for R$ 432,000.00 (a R$ 288,000.00 discount).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official court valuation and 2nd auction minimum bid for Apt 601 in Flamengo?", a: "Court valuation is R$ 720,000.00. 1st Auction (09/08/2026 at 3:00 PM) starts at 100% (R$ 720,000.00). 2nd Auction (09/10/2026 at 3:00 PM) opens at 60% for R$ 432,000.00." },
        { q: "What are the specs and amenities of the building on Honório de Barros Street?", a: "70 sqm residential unit in a solid 1963 building equipped with 4 elevators and 24/7 concierge security. The unit does not include a garage space, reducing monthly maintenance overhead." },
        { q: "What makes the Flamengo location advantageous?", a: "Tranquil tree-lined residential street close to Flamengo Beach, Aterro do Flamengo park, dining, and both Flamengo and Largo do Machado metro stations." },
        { q: "How is legal due diligence conducted for Title #281.699 (9th Registry)?", a: "We conduct complete title verification on Title #281.699 at the 9th Registry, municipal tax audits (IPTU #0714891-9), and TJRJ court records ensuring full debt subrogation under Art. 130 of the Brazilian Tax Code." },
        { q: "Can buyers submit installment proposals under CPC Art. 895?", a: "Yes, 25% cash down payment and up to 30 monthly installments secured by a mortgage on the unit." },
        { q: "How to contact Soares Martins Advogados for legal representation?", a: "Contact us via WhatsApp (+55 21 97954-9241) or visit our Ipanema office for thorough legal audit and representation through key delivery." }
      ]
    }
  },

  // Urca - Avenida Portugal nº 584 - Apto 501 (Edifício Urca-Mar) (68 m²)
  'urca-portugal-584-apto-501': {
    pt: {
      title: 'Leilão Judicial de Apartamento na Urca — Avenida Portugal nº 584 — Apto 501 (Edifício Urca-Mar)',
      subtitle: 'Avenida Portugal, nº 584, Apto 501 — Urca, Rio de Janeiro/RJ | 68 m² • Cobertura/Último Pavimento no Edifício Urca-Mar • Grande Terraço Frontal Descoberto • Suíte, Sala, Cozinha e Área • Localização Privilegiada à Beira da Baía de Guanabara',
      address: 'Avenida Portugal, 584 - Apto 501 — Urca, Rio de Janeiro - RJ',
      p1Date: '25/08/2026 às 13:00h',
      p2Date: '27/08/2026 às 13:00h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '0650419-5',
      rgi: '40.262 (3º RGI/RJ)',
      val: 'R$ 1.091.220,92',
      p2Val: 'R$ 545.610,46 (50% do valor da avaliação)',
      description: 'Apartamento residencial nº 501, integrante do Condomínio do Edifício Urca-Mar, situado na emblemática Avenida Portugal, nº 584, no nobre e exclusivo bairro da Urca, Zona Sul do Rio de Janeiro/RJ. O imóvel conta com 68 m² de área e está localizado no último pavimento de apartamentos do edifício, possuindo como diferencial expressivo um grande terraço frontal descoberto com vista panorâmica para a Enseada de Botafogo e Baía de Guanabara. Sua divisão interna compreende sala de estar, cozinha, 01 (uma) suíte, 01 (um) banheiro social, área de serviço e o terraço frontal descoberto; unidade sem vaga de garagem vinculada. Imóvel devidamente registrado, dimensionado e caracterizado perante o 3º Ofício do Registro Geral de Imóveis da Capital sob a Matrícula nº 40.262 e cadastrado na Prefeitura da Cidade do Rio de Janeiro sob a Inscrição Municipal (IPTU) nº 0650419-5. Foi atribuído ao bem o valor de avaliação judicial de R$ 1.091.220,92, tendo a 2ª praça início com lance mínimo a 50% da avaliação pelo valor de R$ 545.610,46 (desconto de R$ 545.610,46).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação oficial e o lance mínimo na 2ª Praça do apartamento na Urca?", a: "O imóvel foi avaliado judicialmente em R$ 1.091.220,92. Na 1ª Praça (25/08/2026 às 13:00h), o lance mínimo corresponde a 100% da avaliação (R$ 1.091.220,92). Na 2ª Praça (27/08/2026 às 13:00h), o lance mínimo abre com 50% de desconto por R$ 545.610,46 (50% do valor da avaliação)." },
        { q: "Quais são as características da unidade 501 e do Edifício Urca-Mar na Avenida Portugal?", a: "O apartamento 501 possui 68 m² de área e situa-se no último pavimento residencial do Edifício Urca-Mar. Possui como ponto alto um grande terraço frontal descoberto, sala, cozinha, 1 suíte, 1 banheiro social e área de serviço, sendo uma oportunidade rara de cobertura na orla da Urca. Não possui vaga de garagem." },
        { q: "Por que a Urca e a Avenida Portugal são consideradas localizações ultraexclusivas no Rio de Janeiro?", a: "A Urca é o bairro residencial com o metro quadrado mais disputado e os mais elevados índices de segurança e qualidade de vida da capital. A Avenida Portugal contorna a enseada da Baía de Guanabara com vista para o Pão de Açúcar, ambiente calmo e bucólico, sem tráfego de passagem e com restrições arquitetônicas que preservam o gabarito histórico." },
        { q: "Como é realizada a auditoria da Matrícula nº 40.262 do 3º RGI/RJ e do IPTU nº 0650419-5?", a: "O escritório Soares Martins Advogados audita integralmente a Matrícula nº 40.262 junto ao 3º RGI, o cadastro municipal de IPTU nº 0650419-5 e eventuais débitos condominiais ou fiscais, elaborando parecer de viabilidade jurídica que assegura a sub-rogação no preço e a segurança do arrematante." },
        { q: "É possível adquirir o imóvel de forma parcelada (Artigo 895 do Código de Processo Civil)?", a: "Sim. O interessado pode apresentar proposta de pagamento parcelado antes da data do leilão, com entrada de 25% à vista e o restante em até 30 parcelas mensais corrigidas por índice oficial, com hipoteca judicial averbada na matrícula." },
        { q: "Como contratar a assessoria do escritório Soares Martins Advogados para este leilão?", a: "Entre em contato via WhatsApp (+55 21 97954-9241) ou agende atendimento em nossa sede em Ipanema/RJ para receber análise preventiva e representação jurídica completa até a imissão na posse e entrega das chaves." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Urca — Avenida Portugal nº 584 — Apto 501 (Edificio Urca-Mar)',
      subtitle: 'Avenida Portugal, nº 584, Apto 501 — Urca, Río de Janeiro/RJ | 68 m² • Ático/Última Planta en el Edificio Urca-Mar • Gran Terraza Frontal Descubierta • 1 Suite, Salón, Cocina y Área • Ubicación Privilegiada frente a la Bahía de Guanabara',
      address: 'Avenida Portugal, 584 - Apto 501 — Urca, Río de Janeiro - RJ',
      p1Date: '25/08/2026 a las 13:00h',
      p2Date: '27/08/2026 a las 13:00h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '0650419-5',
      rgi: '40.262 (3º RGI/RJ)',
      val: 'R$ 1.091.220,92',
      p2Val: 'R$ 545.610,46 (50% de la evaluación)',
      description: 'Apartamento residencial nº 501 en el Condominio del Edificio Urca-Mar, situado en la emblemática Avenida Portugal nº 584, en el prestigioso barrio de Urca, Zona Sur de Río de Janeiro/RJ. Con 68 m² de superficie en la última planta del edificio, cuenta con una gran terraza frontal descubierta con vistas a la Ensenada de Botafogo y la Bahía de Guanabara. Consta de salón, cocina, 1 suite, 1 baño social, área de servicio y terraza frontal; sin plaza de garaje. Registrado en el 3º Registro de la Propiedad (Matrícula nº 40.262) e Inscripción Municipal de IPTU nº 0650419-5. Valoración judicial de R$ 1.091.220,92, segunda subasta con puja inicial del 50% por R$ 545.610,46.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y la puja mínima en 2ª Subasta en Urca?", a: "Valoración oficial de R$ 1.091.220,92. En 1ª Subasta (25/08/2026 a las 13:00h) puja del 100%. En 2ª Subasta (27/08/2026 a las 13:00h) la puja inicial abre al 50% por R$ 545.610,46." },
        { q: "¿Cuáles son las características del ático en el Edificio Urca-Mar?", a: "Apartamento de 68 m² en última planta con gran terraza frontal descubierta, salón, cocina, 1 suite, baño social y área de servicio frente a la Bahía de Guanabara. Sin plaza de garaje." },
        { q: "¿Por qué Urca y la Avenida Portugal son tan exclusivas?", a: "Urca es el barrio más seguro y bucólico de Río de Janeiro, con vistas al Pan de Azúcar y la bahía, sin tráfico de paso y con altísima demanda inmobiliaria." },
        { q: "¿Cómo se audita la Matrícula nº 40.262 del 3º RGI/RJ?", a: "Auditoría integral en el 3º RGI, deudas de IPTU (0650419-5), comunidad y proceso judicial con garantía de subrogación legal según el Art. 130 del CTN." },
        { q: "¿Es posible pagar mediante propuesta a plazos (Art. 895 CPC)?", a: "Sí, mediante pago inicial del 25% al contado y saldo restante en hasta 30 cuotas mensuales con garantía hipotecaria sobre el inmueble." },
        { q: "¿Cómo contratar la asesoría de Soares Martins Advogados?", a: "Contáctenos vía WhatsApp para un dictamen preventivo y asesoramiento legal integral hasta la toma de posesión." }
      ]
    },
    en: {
      title: 'Judicial Auction of Top-Floor Apartment in Urca — Portugal Avenue #584 — Apt 501 (Urca-Mar Building)',
      subtitle: 'Portugal Avenue, #584, Apt 501 — Urca, Rio de Janeiro/RJ | 68 sqm • Top-Floor Penthouse Unit in Urca-Mar Building • Large Open Front Terrace • 1 Suite, Living Room, Kitchen & Laundry • Exclusive Waterfront Location by Guanabara Bay',
      address: 'Portugal Avenue, 584 - Apt 501 — Urca, Rio de Janeiro - RJ',
      p1Date: '08/25/2026 at 1:00 PM',
      p2Date: '08/27/2026 at 1:00 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '0650419-5',
      rgi: 'Title #40.262 (3rd Land Registry)',
      val: 'R$ 1,091,220.92',
      p2Val: 'R$ 545,610.46 (50% starting bid)',
      description: 'Top-floor residential 68 sqm apartment (Unit 501) in Condomínio do Edifício Urca-Mar, located along iconic Portugal Avenue #584 in the premier, serene neighborhood of Urca, South Zone of Rio de Janeiro/RJ. Situated on the top residential floor, the property stands out with an expansive open front terrace offering breathtaking waterfront vistas of Guanabara Bay and Botafogo Cove. Interior layout features living room, kitchen, 1 suite, 1 guest bathroom, laundry area, and the open terrace; unit does not include an assigned parking space. Registered at the 3rd Real Estate Registry under Title #40.262 and Municipal Tax IPTU #0650419-5. Court appraisal is R$ 1,091,220.92, with 2nd auction minimum opening bid starting at 50% for R$ 545,610.46 (a R$ 545,610.46 discount).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official court valuation and 2nd auction minimum bid for Apt 501 in Urca?", a: "Court valuation is R$ 1,091,220.92. 1st Auction (08/25/2026 at 1:00 PM) starts at 100% (R$ 1,091,220.92). 2nd Auction (08/27/2026 at 1:00 PM) opens at 50% for R$ 545,610.46." },
        { q: "What are the specs of Unit 501 in the Urca-Mar Building on Portugal Avenue?", a: "68 sqm top-floor unit with an expansive open front terrace overlooking Guanabara Bay, living room, kitchen, 1 suite, 1 guest bathroom, and laundry area. No assigned garage space." },
        { q: "What makes Urca and Portugal Avenue one of Rio's most coveted residential settings?", a: "Urca is Rio's safest and most charming neighborhood, featuring tranquil tree-lined waterfront avenues, panoramic views of Sugarloaf Mountain, zero through-traffic, and strict preservation guidelines." },
        { q: "How is legal due diligence conducted for Title #40.262 (3rd Registry)?", a: "We conduct complete title verification on Title #40.262 at the 3rd Registry, municipal tax audits (IPTU #0650419-5), and court records ensuring full debt clearance under Art. 130 of the Brazilian Tax Code." },
        { q: "Can buyers submit installment proposals under CPC Art. 895?", a: "Yes, 25% down payment in cash and up to 30 monthly installments secured by a court-registered mortgage on the property." },
        { q: "How to contact Soares Martins Advogados for legal representation?", a: "Contact us via WhatsApp (+55 21 97954-9241) or visit our Ipanema office for thorough legal audit and representation through key delivery." }
      ]
    }
  },

  // Maracanã - Rua Morais e Silva nº 51 - Apto 1401, Bloco 2 (85 m² / Vaga na Garagem Elevada / Matrícula 30.179)
  'maracana-morais-e-silva-51-apto-1401': {
    pt: {
      title: 'Leilão Judicial de Apartamento no Maracanã — Rua Morais e Silva nº 51 — Apto 1401, Bloco 2',
      subtitle: 'Rua Morais e Silva, nº 51, Apto 1401, Bloco 2 — Maracanã, Rio de Janeiro/RJ | 85 m² • Andar Alto • Vaga na Garagem Elevada • Próximo à UERJ, Estádio do Maracanã e Metrô',
      address: 'Rua Morais e Silva, 51 - Apto 1401, Bloco 2 — Maracanã, Rio de Janeiro - RJ',
      p1Date: '08/09/2026 às 11:30h',
      p2Date: '10/09/2026 às 14:30h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca da Capital',
      iptu: '1.514.716-8',
      rgi: '30.179 (11º RGI/RJ)',
      val: 'R$ 610.000,00',
      p2Val: 'R$ 305.000,00 (50% do valor da avaliação)',
      description: 'Apartamento residencial nº 1401 do Bloco 2, com 85 metros quadrados (85 m²) de área edificada e direito a 01 (uma) vaga de garagem destinada, indistintamente, na garagem elevada do mesmo bloco, situado no Condomínio da Rua Morais e Silva, nº 51, no tradicional bairro do Maracanã, Zona Norte do Rio de Janeiro/RJ. Imóvel situado em andar alto, atualmente fechado, desfrutando de ótima iluminação e vista livre. Devidamente registrado, dimensionado e caracterizado perante o Cartório do 11º Ofício de Registro de Imóveis da Capital sob a Matrícula nº 30.179 e cadastrado na Prefeitura Municipal sob a Inscrição de IPTU nº 1.514.716-8. Avaliado judicialmente em R$ 610.000,00, com lance inicial na 2ª Praça a partir de 50% da avaliação por R$ 305.000,00 (desconto de R$ 305.000,00).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação oficial e o lance mínimo na 2ª Praça para o apartamento no Maracanã?", a: "O imóvel foi avaliado judicialmente em R$ 610.000,00. Na 1ª Praça (08/09/2026 às 11:30h), o lance mínimo corresponde a 100% da avaliação (R$ 610.000,00). Na 2ª Praça (10/09/2026 às 14:30h), o lance mínimo abre com 50% de desconto por apenas R$ 305.000,00 (50% da avaliação)." },
        { q: "Quais são as características do apartamento 1401 no Bloco 2 da Rua Morais e Silva nº 51?", a: "O imóvel possui 85 m² de área edificada, localiza-se no 14º pavimento (andar alto) do Bloco 2 e possui direito a 1 vaga de garagem situada na garagem elevada do condomínio. O apartamento encontra-se atualmente fechado." },
        { q: "Por que a localização na Rua Morais e Silva no Maracanã é tão valorizada?", a: "A Rua Morais e Silva está no coração do Maracanã, próxima à Universidade do Estado do Rio de Janeiro (UERJ), Estádio Mário Filho (Maracanã), Parque Aquático Júlio Delamare, Estação de Metrô Maracanã e São Francisco Xavier, com vasto comércio, colégios e acesso rápido ao Centro e Zona Sul." },
        { q: "Como é realizada a auditoria da Matrícula nº 30.179 do 11º RGI/RJ e do IPTU nº 1.514.716-8?", a: "O escritório Soares Martins Advogados realiza due diligence profunda da Matrícula nº 30.179 no 11º RGI, averiguações de débitos de IPTU (1.514.716-8), débitos condominiais e regularidade do processo judicial perante o TJRJ, assegurando sub-rogação de tributos no preço (art. 130 do CTN)." },
        { q: "É possível adquirir o apartamento de forma parcelada (Artigo 895 do CPC)?", a: "Sim. O interessado pode apresentar proposta formal antes do leilão com entrada de no mínimo 25% à vista e o saldo remanescente em até 30 parcelas mensais corrigidas por índice oficial, com hipoteca judicial averbada na matrícula." },
        { q: "Como contratar a assessoria jurídica de Soares Martins Advogados para este leilão?", a: "Entre em contato via WhatsApp (+55 21 97954-9241) ou agende atendimento em nossa sede em Ipanema/RJ para obter relatório completo de viabilidade e representação jurídica até a imissão na posse." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Maracanã — Calle Morais e Silva nº 51 — Apto 1401, Bloque 2',
      subtitle: 'Rua Morais e Silva, nº 51, Apto 1401, Bloque 2 — Maracanã, Río de Janeiro/RJ | 85 m² • Piso Alto • Plaza en Garaje Elevado • Cerca de UERJ, Estadio Maracanã y Metro',
      address: 'Rua Morais e Silva, 51 - Apto 1401, Bloco 2 — Maracanã, Río de Janeiro - RJ',
      p1Date: '08/09/2026 a las 11:30h',
      p2Date: '10/09/2026 a las 14:30h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de la Capital',
      iptu: '1.514.716-8',
      rgi: '30.179 (11º RGI/RJ)',
      val: 'R$ 610.000,00',
      p2Val: 'R$ 305.000,00 (50% de la evaluación)',
      description: 'Apartamento residencial nº 1401 del Bloque 2, con 85 metros cuadrados (85 m²) de superficie y derecho a 01 (una) plaza de garaje en el garaje elevado del mismo bloque, situado en Rua Morais e Silva nº 51, Maracanã, Río de Janeiro/RJ. Ubicado en planta alta, actualmente cerrado, con excelente iluminación natural. Registrado en el 11º Registro de la Propiedad (Matrícula nº 30.179) e IPTU nº 1.514.716-8. Valoración judicial de R$ 610.000,00, segunda subasta con puja inicial del 50% por R$ 305.000,00.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y la puja mínima en 2ª Subasta en Maracanã?", a: "Valoración judicial de R$ 610.000,00. En 1ª Subasta (08/09/2026 a las 11:30h) puja del 100%. En 2ª Subasta (10/09/2026 a las 14:30h) la puja inicial abre al 50% por R$ 305.000,00." },
        { q: "¿Cuáles son las características del apartamento 1401 en el Bloque 2?", a: "Apartamento de 85 m² en planta alta del Bloque 2 con 1 plaza de garaje en garaje elevado. Actualmente se encuentra cerrado." },
        { q: "¿Por qué invertir en Rua Morais e Silva en Maracanã?", a: "Excelente ubicación junto a la UERJ, Estadio Maracanã y metro, con gran demanda residencial y fácil acceso a toda la ciudad." },
        { q: "¿Cómo se audita la Matrícula nº 30.179 del 11º RGI?", a: "Auditoría integral de la matrícula, deudas de IPTU (1.514.716-8) y proceso judicial con garantía de subrogación fiscal según el Art. 130 del CTN." },
        { q: "¿Es posible pagar mediante propuesta a plazos (Art. 895 CPC)?", a: "Sí, 25% de entrada y hasta 30 cuotas mensuales con garantía hipotecaria sobre la matrícula del inmueble." },
        { q: "¿Cómo contratar la asesoría legal?", a: "Contáctenos vía WhatsApp para dictamen preventivo y acompañamiento hasta la toma de posesión." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Maracanã — Rua Morais e Silva #51 — Apt 1401, Block 2',
      subtitle: 'Rua Morais e Silva, #51, Apt 1401, Block 2 — Maracanã, Rio de Janeiro/RJ | 85 sqm • High Floor • Elevated Garage Space • Near UERJ, Maracanã Stadium & Metro',
      address: 'Rua Morais e Silva, 51 - Apt 1401, Block 2 — Maracanã, Rio de Janeiro - RJ',
      p1Date: '09/08/2026 at 11:30 AM',
      p2Date: '09/10/2026 at 2:30 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Capital Comarca',
      iptu: '1.514.716-8',
      rgi: 'Title #30,179 (11th Land Registry)',
      val: 'R$ 610,000.00',
      p2Val: 'R$ 305,000.00 (50% starting bid)',
      description: 'Residential 85 sqm apartment (Unit 1401, Block 2) with right to one (1) parking space in the elevated garage structure of the same block, located in the condominium at Rua Morais e Silva #51 in Maracanã, Rio de Janeiro/RJ. Positioned on a high floor, currently closed, enjoying open views and great natural lighting. Registered at the 11th Real Estate Registry under Title #30,179 and Municipal Tax IPTU #1.514.716-8. Official court appraisal is R$ 610,000.00, with 2nd auction minimum bid opening at 50% for R$ 305,000.00 (a R$ 305,000.00 discount).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official court valuation and 2nd auction opening bid in Maracanã?", a: "Court valuation is R$ 610,000.00. 1st Auction (09/08/2026 at 11:30 AM) opens at 100% (R$ 610,000.00). 2nd Auction (09/10/2026 at 2:30 PM) opens at a 50% discount for R$ 305,000.00." },
        { q: "What are the specs of Unit 1401, Block 2 on Rua Morais e Silva #51?", a: "85 sqm high-floor apartment in Block 2 with 1 parking space in the elevated garage structure. The unit is currently closed." },
        { q: "Why is Maracanã and Rua Morais e Silva a prime residential location?", a: "Located near UERJ University, Maracanã Stadium, metro stations, and key transport corridors connecting to Downtown and the South Zone." },
        { q: "How is legal due diligence conducted for Title #30,179 (11th Registry)?", a: "We audit Title #30,179 at the 11th Registry, municipal tax records (IPTU #1.514.716-8), condo debts, and court files ensuring clean transfer under Art. 130 of the CTN." },
        { q: "Can buyers submit installment proposals under CPC Art. 895?", a: "Yes, 25% down payment in cash and up to 30 monthly installments secured by a court mortgage on the property title." },
        { q: "How to hire Soares Martins Advogados for legal representation?", a: "Reach out via WhatsApp (+55 21 97954-9241) or visit our Ipanema office for comprehensive risk analysis and full representation." }
      ]
    }
  },

  // Niterói - Avenida Ary Parreiras nº 689 - Apto 401, Edifício Lungomare (2 Vagas de Garagem / Matrícula 19.697 - 8º RGI)
  'niteroi-ary-parreiras-689-apto-401': {
    pt: {
      title: 'Leilão Judicial de Apartamento em Niterói — Avenida Ary Parreiras nº 689 — Apto 401 (Edifício Lungomare)',
      subtitle: 'Avenida Ary Parreiras, nº 689, Apto 401 — Edifício Lungomare, Santa Rosa, Niterói/RJ | 2 Vagas de Garagem • Próximo a Icaraí, Polo Gastronômico e Ponte Rio-Niterói',
      address: 'Avenida Ary Parreiras, 689 - Apto 401 (Edifício Lungomare) — Santa Rosa, Niterói - RJ',
      p1Date: '27/08/2026 às 12:30h',
      p2Date: '08/09/2026 às 12:30h',
      process: 'Execução Judicial / TJRJ',
      court: 'Tribunal de Justiça do Estado do Rio de Janeiro / Comarca de Niterói',
      iptu: '1.923.978',
      rgi: '19.697 (8º RGI)',
      val: 'R$ 500.000,00',
      p2Val: 'R$ 250.000,00 (50% do valor da avaliação)',
      description: 'Apartamento residencial nº 401 do Edifício "LUNGOMARE", situado na Avenida Ary Parreiras, nº 689, no valorizado bairro de Santa Rosa, Niterói/RJ, com direito a 02 (duas) vagas de garagem. O condomínio dispõe de excelente padrão construtivo, portaria e segurança, localizado estrategicamente com acesso imediato a Icaraí, polo médico, colégios de excelência e vias expressas para o Centro do Rio de Janeiro. Devidamente registrado, dimensionado e caracterizado perante o Cartório do 8º Ofício de Registro de Imóveis sob a Matrícula nº 19.697 e cadastrado na Prefeitura de Niterói sob a Inscrição Municipal de IPTU nº 1.923.978. Avaliado judicialmente em R$ 500.000,00, com abertura da 2ª Praça a partir de 50% da avaliação por R$ 250.000,00 (economia direta de R$ 250.000,00).',
      checklist: defaultChecklist.pt,
      modal: defaultModal.pt,
      faqs: [
        { q: "Qual é o valor de avaliação judicial e o lance mínimo na 2ª Praça para o Edifício Lungomare em Niterói?", a: "O imóvel foi avaliado judicialmente em R$ 500.000,00. Na 1ª Praça (27/08/2026 às 12:30h), o lance mínimo corresponde a 100% da avaliação (R$ 500.000,00). Na 2ª Praça (08/09/2026 às 12:30h), o lance inicial abre com 50% de desconto por apenas R$ 250.000,00." },
        { q: "Quais são as principais características do apartamento 401 na Avenida Ary Parreiras nº 689?", a: "O apartamento 401 integra o Edifício Lungomare em Santa Rosa, Niterói, possuindo como diferencial expressivo o direito a 2 (duas) vagas de garagem, em condomínio estruturado e em localização nobre." },
        { q: "Por que Santa Rosa e a Avenida Ary Parreiras são altamente valorizadas em Niterói?", a: "A Avenida Ary Parreiras é uma das principais vias arteriais de Niterói, interligando Santa Rosa diretamente à Praia de Icaraí, à Rua Nóbrega (Polo Gastronômico) e à subida da Ponte Rio-Niterói. Região com forte infraestrutura de serviços, hospitais de ponta e escolas tradicionais." },
        { q: "Como é conduzida a auditoria jurídica da Matrícula nº 19.697 do 8º RGI e do IPTU nº 1.923.978?", a: "O escritório Soares Martins Advogados audita a Matrícula nº 19.697 do 8º RGI de Niterói, débitos de IPTU (1.923.978), quitação condominial e a higidez do processo judicial no TJRJ, assegurando a sub-rogação de tributos no preço arrematado (Art. 130 do CTN)." },
        { q: "É possível adquirir o apartamento de forma parcelada (Artigo 895 do CPC)?", a: "Sim. O interessado pode apresentar proposta formal antes do início da praça com entrada de no mínimo 25% à vista e o saldo em até 30 parcelas mensais corrigidas por índice oficial, com hipoteca judicial averbada na matrícula." },
        { q: "Como contratar a assessoria jurídica do escritório para arrematar este imóvel?", a: "Entre em contato via WhatsApp (+55 21 97954-9241) ou agende atendimento para elaboração do relatório preventivo de riscos e condução integral até a posse física do imóvel." }
      ]
    },
    es: {
      title: 'Subasta Judicial de Apartamento en Niterói — Avenida Ary Parreiras nº 689 — Apto 401 (Edificio Lungomare)',
      subtitle: 'Avenida Ary Parreiras, nº 689, Apto 401 — Edificio Lungomare, Santa Rosa, Niterói/RJ | 2 Plazas de Garaje • Cerca de Icaraí, Polo Gastronómico y Puente Río-Niterói',
      address: 'Avenida Ary Parreiras, 689 - Apto 401 (Edificio Lungomare) — Santa Rosa, Niterói - RJ',
      p1Date: '27/08/2026 a las 12:30h',
      p2Date: '08/09/2026 a las 12:30h',
      process: 'Ejecución Judicial / TJRJ',
      court: 'Tribunal de Justicia de Río de Janeiro / Comarca de Niterói',
      iptu: '1.923.978',
      rgi: '19.697 (8º RGI)',
      val: 'R$ 500.000,00',
      p2Val: 'R$ 250.000,00 (50% de la evaluación)',
      description: 'Apartamento residencial nº 401 del Edificio "LUNGOMARE", situado en Avenida Ary Parreiras nº 689, Santa Rosa, Niterói/RJ, con derecho a 02 (dos) plazas de garaje. Edificio de excelente categoría y seguridad, con conexión directa a Icaraí, comercios y acceso rápido a Río de Janeiro. Registrado en el 8º Registro de la Propiedad (Matrícula nº 19.697) e IPTU nº 1.923.978. Valoración judicial de R$ 500.000,00, segunda subasta con puja inicial del 50% por R$ 250.000,00.',
      checklist: defaultChecklist.es,
      modal: defaultModal.es,
      faqs: [
        { q: "¿Cuál es la valoración oficial y la puja mínima en 2ª Subasta en Niterói?", a: "Valoración judicial de R$ 500.000,00. En 1ª Subasta (27/08/2026 a las 12:30h) puja del 100%. En 2ª Subasta (08/09/2026 a las 12:30h) la puja inicial abre al 50% por R$ 250.000,00." },
        { q: "¿Cuáles son las características del apartamento 401 en el Edificio Lungomare?", a: "Apartamento en el Edificio Lungomare en Santa Rosa, Niterói, con 2 plazas de garaje en condominio consolidado." },
        { q: "¿Por qué invertir en Avenida Ary Parreiras en Santa Rosa?", a: "Excelente ubicación conectada con la Playa de Icaraí, polo gastronómico y acceso al Puente Río-Niterói." },
        { q: "¿Cómo se audita la Matrícula nº 19.697 del 8º RGI?", a: "Auditoría completa de matrícula, deudas de IPTU (1.923.978) y proceso judicial con garantía de subrogación fiscal según el Art. 130 del CTN." },
        { q: "¿Es posible pagar mediante propuesta a plazos (Art. 895 CPC)?", a: "Sí, 25% de entrada y hasta 30 cuotas mensuales con garantía hipotecaria sobre la matrícula del inmueble." },
        { q: "¿Cómo contratar la asesoría legal?", a: "Contáctenos vía WhatsApp para dictamen preventivo y acompañamiento hasta la toma de posesión." }
      ]
    },
    en: {
      title: 'Judicial Auction of Apartment in Niterói — Avenida Ary Parreiras #689 — Apt 401 (Lungomare Building)',
      subtitle: 'Avenida Ary Parreiras, #689, Apt 401 — Edifício Lungomare, Santa Rosa, Niterói/RJ | 2 Parking Spaces • Near Icaraí Beach, Gourmet District & Rio-Niterói Bridge',
      address: 'Avenida Ary Parreiras, 689 - Apt 401 (Edifício Lungomare) — Santa Rosa, Niterói - RJ',
      p1Date: '08/27/2026 at 12:30 PM',
      p2Date: '09/08/2026 at 12:30 PM',
      process: 'Judicial Execution / TJRJ',
      court: 'Rio de Janeiro State Court / Niterói Comarca',
      iptu: '1.923.978',
      rgi: 'Title #19,697 (8th Land Registry)',
      val: 'R$ 500,000.00',
      p2Val: 'R$ 250,000.00 (50% starting bid)',
      description: 'Residential Apartment #401 in "EDIFÍCIO LUNGOMARE", located at Avenida Ary Parreiras #689 in the desirable neighborhood of Santa Rosa, Niterói/RJ, including the right to 02 (two) parking spaces. The Lungomare condominium features solid construction quality, 24h concierge, and strategic proximity to Icaraí beach, hospitals, schools, and rapid access to Rio de Janeiro via the Rio-Niterói bridge. Registered at the 8th Real Estate Registry under Title #19,697 and Municipal Tax IPTU #1.923.978. Official court appraisal is R$ 500,000.00, with 2nd auction minimum bid opening at 50% for R$ 250,000.00 (a R$ 250,000.00 discount).',
      checklist: defaultChecklist.en,
      modal: defaultModal.en,
      faqs: [
        { q: "What is the official court valuation and 2nd auction opening bid in Niterói?", a: "Court valuation is R$ 500,000.00. 1st Auction (08/27/2026 at 12:30 PM) opens at 100% (R$ 500,000.00). 2nd Auction (09/08/2026 at 12:30 PM) opens at a 50% discount for R$ 250,000.00." },
        { q: "What are the specs of Unit 401 in Edifício Lungomare on Avenida Ary Parreiras #689?", a: "Apartment in Edifício Lungomare with the major asset of 2 private parking spaces in a prime Santa Rosa location." },
        { q: "Why is Santa Rosa and Avenida Ary Parreiras a prime residential hub in Niterói?", a: "Avenida Ary Parreiras directly connects Santa Rosa to Icaraí Beach, the Nóbrega culinary hub, top hospitals, and the Rio-Niterói bridge." },
        { q: "How is legal due diligence conducted for Title #19,697 (8th Registry)?", a: "We audit Title #19,697 at the 8th Registry, municipal tax records (IPTU #1.923.978), condo debts, and court files ensuring clean transfer under Art. 130 of the CTN." },
        { q: "Can buyers submit installment proposals under CPC Art. 895?", a: "Yes, 25% down payment in cash and up to 30 monthly installments secured by a court mortgage on the property title." },
        { q: "How to hire Soares Martins Advogados for legal representation?", a: "Reach out via WhatsApp (+55 21 97954-9241) or visit our office for comprehensive risk analysis and representation through key delivery." }
      ]
    }
  }
};
