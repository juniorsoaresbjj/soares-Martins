import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowLeft, ChevronRight, ChevronDown, ChevronUp, Building2, Gavel, Scale, 
  ShieldCheck, FileText, Users, ShieldAlert, Search, Filter, ExternalLink, 
  CheckCircle2, AlertTriangle, HelpCircle, PhoneCall, CheckSquare 
} from 'lucide-react';
import SEO from './SEO';

const serviceData: Record<string, any> = {
  'cobranca-condominial': {
    titleKey: 'services.s3',
    descKey: 'services.s3Desc',
    icon: <Scale size={48} />,
    detailsKey: 'services_page.details.s3'
  },
  'assessoria-juridica-para-sindicos': {
    titleKey: 'services.s4',
    descKey: 'services.s4Desc',
    icon: <ShieldCheck size={48} />,
    detailsKey: 'services_page.details.s4'
  },
  'direito-condominial': {
    titleKey: 'services.s5',
    descKey: 'services.s5Desc',
    icon: <FileText size={48} />,
    detailsKey: 'services_page.details.s5'
  },
  'assembleias-convencao-regimento': {
    titleKey: 'services.s6',
    descKey: 'services.s6Desc',
    icon: <Users size={48} />,
    detailsKey: 'services_page.details.s6'
  },
  'direito-patrimonial-sucessorio': {
    titleKey: 'services.s1',
    descKey: 'services.s1Desc',
    icon: <ShieldCheck size={48} />,
    detailsKey: 'services_page.details.s1'
  },
  'direito-imobiliario': {
    titleKey: 'services.s2',
    descKey: 'services.s2Desc',
    icon: <Building2 size={48} />,
    detailsKey: 'services_page.details.s2'
  },
  'compliance-condominial-penal': {
    titleKey: 'services_page.penal_title',
    descKey: 'services_page.penal_desc',
    icon: <ShieldAlert size={48} />,
    detailsKey: 'services_page.details.penal'
  },
  'assessoria-leiloes-judiciais': {
    titleKey: 'services.s8',
    descKey: 'services.s8Desc',
    icon: <Gavel size={48} />,
    detailsKey: 'services_page.details.s8'
  },
  'assessoria-leiloes-judiciais-imoveis-rio-de-janeiro': {
    titleKey: 'services.s8',
    descKey: 'services.s8Desc',
    icon: <Gavel size={48} />,
    detailsKey: 'services_page.details.s8'
  }
};

const pageTranslations: Record<string, any> = {
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbServices: 'Áreas de Atuação',
    residentialCommercial: 'Residencial e Comercial',
    heroTitle: 'Assessoria Jurídica em Leilão de Imóveis',
    heroDesc: 'A arrematação de apartamentos, lojas e salas no Rio de Janeiro exige auditoria prévia detalhada da matrícula, verificação de dívidas de cota condominial e análise de risco processual para garantir posse célere e investimento seguro.',
    stat1Title: 'Rio de Janeiro',
    stat1Desc: 'Foco em imóveis residenciais e comerciais no RJ',
    stat2Title: 'Parecer Técnico',
    stat2Desc: 'Avaliação jurídica e matriz de riscos',
    badgeLocation: 'Rio de Janeiro / RJ',
    badgeDesc: 'Análise prévia de edital e débitos de condomínio',
    consultWA: 'Consultar com Especialista no WhatsApp',
    interactiveTag: 'Metodologia Interativa',
    interactiveTitle: '4 Pilares da Auditoria de Leilão Judicial',
    interactiveSub: 'Clique em cada etapa para examinar os pontos críticos auditados em nosso parecer prévio.',
    issuedNotice: 'Parecer emitido em 24h a 48h',
    checklist: [
      {
        title: '1. Exame da Matrícula e Ônus Reais',
        desc: 'Levantamento detalhado de hipotecas, penhoras, indisponibilidades e averbações junto ao Cartório de Registro de Imóveis.',
        risk: 'Análise de Ônus'
      },
      {
        title: '2. Análise de Débitos Propter Rem',
        desc: 'Verificação da atribuição de responsabilidade por débitos tributários e condominiais em observância ao edital e ao art. 130 do CTN.',
        risk: 'Análise de Passivos'
      },
      {
        title: '3. Regularidade Processual das Intimações',
        desc: 'Verificação da citação e intimação válida do executado, coproprietários e credores garantidores nos autos do processo de origem.',
        risk: 'Verificação de Nulidades'
      },
      {
        title: '4. Rito da Carta de Arrematação e Imissão',
        desc: 'Acompanhamento dos atos judiciais e cartorários para expedição da carta de arrematação e mandado de imissão na posse.',
        risk: 'Procedimento de Posse'
      }
    ],
    auctionsTitle: 'Leilões em Análise',
    auctionsSub: 'Painel de consulta e acompanhamento técnico de oportunidades sob auditoria jurídica.',
    filterAll: 'Todos',
    filterRes: 'Residencial',
    filterCom: 'Comercial',
    auditedTag: 'Oportunidade Auditada',
    lawsuitTag: 'Processo TJRJ',
    legalAuditLabel: 'Auditoria Jurídica:',
    auditStatusDone: 'Concluída • Parecer Disponível',
    viewAnalysisReport: 'Ver Análise do Edital e Relatório',
    requestOpinionWA: 'Solicitar Parecer via WhatsApp',
    collapseAuctions: 'Recolher Oportunidades',
    expandAuctions: 'Veja Mais Oportunidades em Análise (+6 imóveis)',
    noCommercialTitle: 'Sem lotes comerciais abertos no momento',
    noCommercialDesc: 'Nossa equipe realiza análises sob demanda para imóveis comerciais e corporativos no Rio de Janeiro.',
    archiveTitle: 'Acervo e Histórico de Análises Técnicas',
    archiveSub: 'Registro institucional e diretrizes de divulgação de pareceres e estudos de caso em leilões imobiliários.',
    ethicsTitle: 'Conformidade Ética e Proteção de Dados',
    ethicsText: 'Em estrita observância ao Código de Ética e Disciplina da OAB (Provimento 205/2021) e às normas de proteção de dados, o acervo de pareceres jurídicos e relatórios de auditoria é mantido sob sigilo profissional. Esta seção é destinada ao registro de notas técnicas descaracterizadas e jurisprudência aplicada aos leilões imobiliários no Estado do Rio de Janeiro, sendo atualizada conforme viabilidade jurídica e regulamentar.',
    ethicsFootnote: 'Pareceres individualizados emitidos mediante contratação prévia',
    relatedTitle: 'Conteúdos e Serviços Relacionados',
    relatedLinks: [
      { title: 'Direito Imobiliário e Negócios', desc: 'Assessoria em compra, venda e estruturação patrimonial.', path: '/direito-imobiliario/' },
      { title: 'Guia de Compra e Venda Segura', desc: 'Passo a passo jurídico para aquisições no Rio de Janeiro.', path: '/blog/guia-compra-venda-segura-imoveis-rj/' },
      { title: 'Due Diligence Imobiliária', desc: 'Auditoria de certidões, ônus e riscos contratuais.', path: '/blog/direito-imobiliario-due-diligence-compra/' },
      { title: 'Leilão por Débito de Condomínio', desc: 'Entenda como funciona o leilão judicial de dívida de cota.', path: '/blog/apartamento-leilao-debito-condominial/' },
      { title: 'Direito Patrimonial e Sucessório', desc: 'Proteção, planejamento de bens e regularização.', path: '/direito-patrimonial-sucessorio/' },
      { title: 'Contratos de Locação e Garantias', desc: 'Análise de cláusulas essenciais e segurança contratual.', path: '/blog/clausulas-fundamentais-contrato-locacao/' }
    ],
    faqHeaderTitle: 'Perguntas Frequentes (FAQ)',
    faqHeaderSub: 'Dúvidas comuns sobre auditoria de editais, arrematação e imissão na posse no RJ',
    ctaHeaderTitle: 'Fale Com Nossa Equipe Especializada',
    ctaHeaderDesc: 'O escritório Soares Martins Advogados oferece auditoria jurídica completa e suporte especializado para garantir máxima segurança em suas decisões e investimentos em leilões imobiliários no Rio de Janeiro.',
    ctaWAButton: 'Atendimento via WhatsApp',
    ctaEmailButton: 'Enviar E-mail Corporativo',
    ctaFooterNote: 'Atendimento presencial em Ipanema/RJ e suporte jurídico virtual para todo o Brasil.',
    auctionItems: [
      {
        tag: 'Residencial • Botafogo (RJ)',
        title: 'Leilão Judicial de Apartamento em Botafogo — Rua Lauro Müller nº 36 — Apto 109',
        desc: 'Apartamento residencial de 38 m² de área edificada privativa correspondente à unidade 109, situado em posição de fundos e formalmente desocupado de pessoas no tradicional condomínio da Rua Lauro Müller nº 36, no estratégico e aprazível bairro de Botafogo, Zona Sul do Rio de Janeiro. Prédio exclusivamente residencial com 16 andares (12 apartamentos por andar), servido por 3 elevadores modernizados, portaria presencial 24 horas, monitoramento por câmeras de segurança 24 horas e salão de festas situado na cobertura com vista panorâmica. Devidamente registrado no 3º Ofício de Registro de Imóveis do Rio de Janeiro sob a Matrícula nº 56.285 e inscrição municipal IPTU nº 1205828-5. Avaliação judicial oficial de R$ 500.000,00. 1º Leilão em 13/11/2026 às 11:00h por R$ 500.000,00 e 2º Leilão em 23/11/2026 às 11:00h com lance inicial de 50% por R$ 250.000,00 (~R$ 6.578,95/m² em Botafogo).',
        p1Label: '1ª Praça (13/11/2026):',
        p1Val: 'R$ 500.000,00',
        p2Label: '2ª Praça (23/11/2026):',
        p2Val: 'R$ 250.000,00 (Lance inicial 2ª Praça)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-36-apto-109/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20109%20na%20Rua%20Lauro%20M%C3%BCller%2036%20em%20Botafogo%20-%20RJ.'
      },
      {
        tag: 'Residencial • Botafogo (RJ)',
        title: 'Leilão Judicial de Apartamento em Botafogo — Rua Álvaro Ramos nº 405 — Bloco 1, Apto 1804',
        desc: 'Apartamento residencial de 89 m² de área edificada privativa situado no 18º pavimento (unidade 1804) do Bloco 01 em tradicional condomínio edificado em 1985 na aprazível Rua Álvaro Ramos nº 405, em Botafogo, Zona Sul do Rio de Janeiro. Imóvel em andar alto com vista panorâmica desafogada e excelente ventilação, composto por 2 quartos (sendo 1 suíte confortável), banheiro social completo, sala de estar e jantar integrada, cozinha funcional, dependências completas com quarto e banheiro de serviço e área de serviço independente, com direito a 1 vaga de garagem no condomínio. Condomínio com 2 blocos de 18 andares (4 unidades por pavimento), servido por 4 elevadores, portaria com controle de acesso 24 horas, playground com parquinho infantil e salão de festas. Registrado no 3º RGI sob a Matrícula 38.417 e inscrição municipal IPTU nº 1.723.344-6. 1º Leilão em 04/11/2026 às 12:00h por R$ 1.068.000,00 e 2º Leilão em 26/11/2026 às 12:00h com lance inicial de R$ 534.000,00 (~R$ 6.000,00/m² em Botafogo).',
        p1Label: '1ª Praça (04/11/2026):',
        p1Val: 'R$ 1.068.000,00',
        p2Label: '2ª Praça (26/11/2026):',
        p2Val: 'R$ 534.000,00 (Lance inicial 2ª Praça)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-alvaro-ramos-405-bloco-1-apto-1804/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201804%20do%20Bloco%201%20na%20Rua%20%C3%81lvaro%20Ramos%20405%20em%20Botafogo%20-%20RJ.'
      },
      {
        tag: 'Residencial • Flamengo / Orla (RJ)',
        title: 'Leilão Judicial de Apartamento no Flamengo — Praia do Flamengo nº 12 — Apto 306',
        desc: 'Amplo conjugado residencial de 40 m² de área privativa dividido em sala, quarto, cozinha e banheiro no 3º pavimento (unidade 306) do tradicional Edifício Rio Carioca, construído em 1940 na prestigiada Praia do Flamengo nº 12, no Flamengo/RJ. Imóvel em razoável estado de conservação face ao tempo de uso, equipado com interfone, sem vaga de garagem. Condomínio com 2 blocos de 13 andares (270 apartamentos), quatro elevadores e portaria 24 horas, sem taxa de lazer. Registrado no 9º RGI sob a Matrícula 154.629 e IPTU nº 0.258.058-7. 1º Leilão em 26/10/2026 por R$ 627.898,69 e 2º Leilão em 29/10/2026 com lance inicial de R$ 313.949,34 (~R$ 7.848,73/m² na orla).',
        p1Label: '1ª Praça (26/10/2026):',
        p1Val: 'R$ 627.898,69',
        p2Label: '2ª Praça (29/10/2026):',
        p2Val: 'R$ 313.949,34 (Lance inicial 2ª Praça)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/praia-do-flamengo-12-apto-306/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20306%20na%20Praia%20do%20Flamengo%2012%20(Edif%C3%ADcio%20Rio%20Carioca)%20no%20Flamengo%20-%20RJ.'
      },
      {
        tag: 'Residencial • Centro / Bairro de Fátima (RJ)',
        title: 'Leilão Judicial de Apartamento no Centro / Bairro de Fátima — Avenida Nossa Senhora de Fátima nº 60 — Apto 501',
        desc: 'Apartamento residencial de 67 m² de área edificada privativa no 5º pavimento (unidade 501), de frente para a rua principal em tradicional edifício construído em 1950 na aprazível Avenida Nossa Senhora de Fátima nº 60, no arborizado Bairro de Fátima / Centro do Rio de Janeiro. Imóvel em bom estado de conservação, composto por 3 quartos (quarto 1 com piso em tábua corrida e quartos 2 e 3 em cerâmica, todos com janelas de alumínio), sala arejada em porcelanato com janela de alumínio, corredor principal em porcelanato, corredor de entrada em cerâmica, cozinha com bancada de alumínio, área de serviço individualizada e banheiro social com box blindex e piso cerâmico. Edifício servido por 2 elevadores (capacidade para 4 pessoas cada), porteiro/zelador presencial (segunda a sexta das 9h às 18h e sábado das 9h às 13h) e circuito interno de TV (CFTV). Registrado no 2º RGI sob a Matrícula 05392 e inscrição municipal IPTU nº 0.580.436-4. 1º Leilão em 26/10/2026 por R$ 420.592,00 e 2º Leilão em 28/10/2026 com lance inicial de R$ 210.296,00 (~R$ 3.138,75/m²).',
        p1Label: '1ª Praça (26/10/2026):',
        p1Val: 'R$ 420.592,00',
        p2Label: '2ª Praça (28/10/2026):',
        p2Val: 'R$ 210.296,00 (Lance inicial 2ª Praça)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/avenida-nossa-senhora-de-fatima-60-apto-501/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20501%20na%20Avenida%20Nossa%20Senhora%20de%20F%C3%A1tima%2060%20no%20Centro%20/%20Bairro%20de%20F%C3%A1tima%20-%20RJ.'
      },
      {
        tag: 'Residencial • Copacabana / Posto 6 (RJ)',
        title: 'Leilão Judicial de Apartamento em Copacabana — Rua Raul Pompéia nº 240 — Apto 702',
        desc: 'Apartamento residencial de frente com 143 m² de área edificada privativa no 7º andar (unidade 702) de clássico edifício construído em 1957 na nobre e aprazível Rua Raul Pompéia nº 240, na cobiçada região do Posto 6 em Copacabana, a passos do Arpoador e Ipanema. Imóvel arejado e ensolarado de tipologia residencial composto por três quartos (sendo dois deles voltados para a fachada da rua), antessala e sala de estar/jantar generosas com janelões para a rua, cozinha espaçosa, dois banheiros sociais completos e um banheiro de serviço. O condomínio dispõe de portaria que funciona 24 horas, elevadores e vaga de garagem. Registrado no 5º RGI sob a Matrícula 26.715 e inscrição municipal IPTU nº 0.277.837-1. Oportunidade com 1º Leilão em 03/11/2026 por R$ 1.300.000,00 e 2º Leilão em 05/11/2026 com lance inicial de R$ 650.000,00 (~R$ 4.545,45/m² no Posto 6).',
        p1Label: '1ª Praça (03/11/2026):',
        p1Val: 'R$ 1.300.000,00',
        p2Label: '2ª Praça (05/11/2026):',
        p2Val: 'R$ 650.000,00 (Lance inicial 2ª Praça)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-raul-pompeia-240-apto-702/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20702%20da%20Rua%20Raul%20Pomp%C3%A9ia%20240%20em%20Copacabana%20(Posto%206)%20-%20RJ.'
      },
      {
        tag: 'Residencial • Barra da Tijuca/RJ',
        title: 'Leilão Judicial de Apartamento na Barra da Tijuca — Avenida Afonso de Taunay nº 631 — Apto 101',
        desc: 'Amplo apartamento residencial de 185 m² de área privativa situado no 1º pavimento (unidade 101) de edifício residencial de baixo gabarito de 3 andares na arborizada Avenida Afonso de Taunay nº 631, na região mais valorizada da Barra da Tijuca (Jardim Oceânico). Imóvel com direito a duas vagas de garagem na escritura. A edificação não possui estrutura de lazer e serviços, assegurando custos de condomínio reduzidos e total privacidade aos moradores. Localização estratégica nas proximidades imediatas do Metrô Jardim Oceânico (Linha 4), Praça do Pomar, polo gastronômico da Olegário Maciel e praia. Avaliação judicial de R$ 1.850.000,00 e 2ª Praça a 50% por R$ 925.000,00 (~R$ 5.000,00/m²). 9º RGI Matrícula nº 165.384 e IPTU nº 186.284.02.',
        p1Label: '1ª Praça (15/10/2026):',
        p1Val: 'R$ 1.850.000,00',
        p2Label: '2ª Praça (20/10/2026):',
        p2Val: 'R$ 925.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-afonso-de-taunay-631-apto-101/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20101%20da%20Avenida%20Afonso%20de%20Taunay%20631%20na%20Barra%20da%20Tijuca%20(Jardim%20Oce%C3%A2nico)%20-%20RJ.'
      },
      {
        tag: 'Residencial • São Conrado/RJ',
        title: 'Leilão Judicial de Apartamento Duplex em São Conrado — Estrada das Canoas nº 722 — Bloco 2, Apto 109',
        desc: 'Apartamento de posição fundos situado no Bloco 2 (unidade 109) do tradicional Conjunto Residencial Recreio das Canoas (1960) na bucólica Estrada das Canoas nº 722, em São Conrado, Zona Sul do Rio de Janeiro. Imóvel com modificação estrutural por escavação de aproximadamente 2 metros sob o solo original, configurando estilo duplex: pavimento inferior com quarto privativo e pavimento superior com sala, cozinha e banheiro social em mármore Carrara (hidromassagem). Condomínio clube integrado à Mata Atlântica com restaurante, piscina, churrasqueira, quadra, campo de terra, academia, salão de festas, lavanderia e portaria 24h. Avaliação judicial de R$ 728.710,50 e 2ª Praça a 50% por R$ 364.355,25. 5º RGI Matrícula nº 24.339 e IPTU nº 0.385.263-9.',
        p1Label: '1ª Praça (04/11/2026):',
        p1Val: 'R$ 728.710,50',
        p2Label: '2ª Praça (25/11/2026):',
        p2Val: 'R$ 364.355,25 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/sao-conrado/apartamento/estrada-das-canoas-722-bloco-2-apto-109/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20109%20do%20Bloco%202%20no%20Conjunto%20Residencial%20Recreio%20das%20Canoas%20(Estrada%20das%20Canoas%20722)%20em%20S%C3%A3o%20Conrado%20-%20RJ.'
      },
      {
        tag: 'Residencial • Leme/RJ',
        title: 'Leilão Judicial de Apartamento no Leme — Rua Gustavo Sampaio nº 723 — Apto 601',
        desc: 'Apartamento residencial de 95 m² de área privativa no 6º andar (unidade 601) do tradicional Edifício Waldorf (construção de 1952) na nobre Rua Gustavo Sampaio nº 723, no bucólico bairro do Leme, Zona Sul do Rio de Janeiro. Edifício de 12 pavimentos construído no alinhamento da via, servido por 3 elevadores (2 sociais e 1 de serviço), garagem coletiva, portaria 24 horas e circuito interno de TV (sem salão de festas ou playground). Avaliação judicial de R$ 1.400.000,00 e 2ª Praça a 50% por R$ 700.000,00 (~R$ 7.368,42/m²). 5º RGI Matrícula nº 87.664 e IPTU nº 0.578.298-2.',
        p1Label: '1ª Praça (05/11/2026):',
        p1Val: 'R$ 1.400.000,00',
        p2Label: '2ª Praça (10/11/2026):',
        p2Val: 'R$ 700.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leme/apartamento/rua-gustavo-sampaio-723-apto-601/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20601%20do%20Edif%C3%ADcio%20Waldorf%20na%20Rua%20Gustavo%20Sampaio%20723%20no%20Leme%20-%20RJ.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Leilão Judicial de Apartamento em Botafogo — Rua General Góes Monteiro nº 8 — Bloco F, Apto 203',
        desc: 'Apartamento de 94 m² no 2º andar (unidade 203 do Bloco F) com vista privilegiada para o Pão de Açúcar, 3 quartos, 2 banheiros sociais, sala, cozinha, área de serviço, dependência completa (quarto e banheiro de serviço), 1 vaga coberta e 1 vaga externa para convidado. Condomínio de 1974 com 7 blocos de 25 andares (4 aptos/andar), 2 piscinas (adulta e infantil), bosque privativo, quadra, parquinho, mercadinho, salões de festa individuais por bloco, vigilância interna, garagista e portarias 24h. Avaliação judicial de R$ 1.128.000,00 e 2ª Praça a 50% por R$ 564.000,00 (~R$ 6.000,00/m²). 3º RGI Matrícula nº 52.894 e IPTU nº 1.245.048-2.',
        p1Label: '1ª Praça (19/10/2026):',
        p1Val: 'R$ 1.128.000,00',
        p2Label: '2ª Praça (22/10/2026):',
        p2Val: 'R$ 564.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-general-goes-monteiro-8-bloco-f-apto-203/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20203%20do%20Bloco%20F%20na%20Rua%20General%20G%C3%B3es%20Monteiro%208%20em%20Botafogo%20-%20RJ.'
      },
      {
        tag: 'Residencial • Santa Rosa / Niterói/RJ',
        title: 'Leilão Judicial de Apartamento em Santa Rosa / Niterói — Rua Vereador Duque Estrada nº 169 — Bloco 3, Apto 402',
        desc: 'Amplo apartamento residencial com 138 m² de área privativa edificada no 4º andar (unidade 402 do Bloco 03) na Rua Vereador Duque Estrada nº 169, no nobre bairro de Santa Rosa, Niterói/RJ. Composto por living e sala de jantar, 2 quartos, banheiro social, copa, cozinha, varanda, área de serviço, quarto e banheiro de empregada (dependência completa), com direito a 1 vaga de garagem. Condomínio clube composto por 4 prédios, sendo o Bloco 3 com 5 andares (apenas 4 aptos/andar + 2 coberturas), fachada em pastilha e 1 elevador. Lazer completo com 2 piscinas (adulto e infantil), academia, salão de festas com churrasqueira, jogos, jardins, estacionamento, portaria 24h e CFTV. Avaliação judicial de R$ 470.000,00 e 2ª Praça a 50% por R$ 235.000,00 (~R$ 1.702,89/m²). 8º RGI Matrícula nº 15.819 e IPTU nº 824741.',
        p1Label: '1ª Praça (22/09/2026):',
        p1Val: 'R$ 470.000,00',
        p2Label: '2ª Praça (24/09/2026):',
        p2Val: 'R$ 235.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/niteroi/apartamento/rua-vereador-duque-estrada-169-bloco-3-apto-402/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20402%20do%20Bloco%203%20na%20Rua%20Vereador%20Duque%20Estrada%20169%20em%20Santa%20Rosa%20-%20Niter%C3%B3i.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento em Copacabana — Rua Barão de Ipanema nº 105 — Apto 604',
        desc: 'Apartamento residencial de 70 m² de área edificada no 6º pavimento (unidade 604) do Edifício Condomínio Carmem D´Almeida na Rua Barão de Ipanema nº 105, Copacabana, Rio de Janeiro. Prédio estritamente residencial construído em 1971 no alinhamento da via pública, dispondo de portaria 24 horas, 3 elevadores (dois sociais e um de serviço), playground e câmeras de vigilância (CFTV). Avaliação judicial de R$ 750.000,00 e 2ª Praça a 50% por R$ 375.000,00 (~R$ 5.357,14/m²). 5º RGI Matrícula nº 31.436 e IPTU nº 0.984.275-8.',
        p1Label: '1ª Praça (14/10/2026):',
        p1Val: 'R$ 750.000,00',
        p2Label: '2ª Praça (21/10/2026):',
        p2Val: 'R$ 375.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-barao-de-ipanema-105-apto-604/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20604%20na%20Rua%20Bar%C3%A3o%20de%20Ipanema%20105%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento em Copacabana — Rua Siqueira Campos nº 143 — Apto 740',
        desc: 'Apartamento residencial de 44 m² de área edificada, situado na posição de fundos do 7º pavimento (unidade 740) do tradicional edifício na Rua Siqueira Campos nº 143, em Copacabana, Rio de Janeiro. Edifício de 1970 com fachada em argamassa, janelas em esquadria de madeira, lojas comerciais no alinhamento da via pública no térreo, 2 elevadores para 7 pessoas e portaria simples com piso em marmorite, sem modernização. Sem vaga de garagem. Avaliação judicial de R$ 390.000,00 e 2ª Praça a 50% por R$ 195.000,00 (~R$ 4.431,81/m²). 5º RGI Matrícula nº 27773 e IPTU nº 046100-9.',
        p1Label: '1ª Praça (05/10/2026):',
        p1Val: 'R$ 390.000,00',
        p2Label: '2ª Praça (08/10/2026):',
        p2Val: 'R$ 195.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-siqueira-campos-143-apto-740/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20740%20na%20Rua%20Siqueira%20Campos%20143%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Centro/RJ',
        title: 'Leilão Judicial de Apartamento no Centro do Rio — Rua Evaristo da Veiga nº 21 — Apto 503',
        desc: 'Apartamento residencial compacto com 27 m² de área privativa no 5º pavimento (unidade 503) do clássico edifício na Rua Evaristo da Veiga nº 21, Centro do Rio de Janeiro. Edifício em concreto armado e alvenaria de tijolos com 80 anos, 7 pavimentos, 49 unidades mistas (salas e moradia) e 2 lojas no térreo. Entrada com porta de ferro, pequeno hall em granito preto, 2 elevadores sociais novos e circuito interno de câmeras CFTV em todos os andares e elevadores. Localização estratégica adjacente à Cinelândia, Theatro Municipal, Passeio Público e Lapa. Oportunidade com 50% de desconto (~R$ 2.968,05/m² na 2ª praça). Avaliação judicial de R$ 160.275,10 e 2ª Praça a 50% por R$ 80.137,55. 7º RGI Matrícula nº 19262-2 e IPTU nº 0704066-0.',
        p1Label: '1ª Praça (26/10/2026):',
        p1Val: 'R$ 160.275,10',
        p2Label: '2ª Praça (05/11/2026):',
        p2Val: 'R$ 80.137,55 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-evaristo-da-veiga-21-apto-503/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20503%20na%20Rua%20Evaristo%20da%20Veiga%2021%20no%20Centro%20do%20Rio.'
      },
      {
        tag: 'Residencial • Jardim Guanabara/RJ',
        title: 'Leilão Judicial de Apartamento no Jardim Guanabara — Rua Breno Guimarães nº 106 — Apto 105',
        desc: 'Apartamento residencial amplo com 122 m² de área privativa situado no 1º pavimento (unidade 105) do condomínio na Rua Breno Guimarães nº 106, em ponto nobre do Jardim Guanabara, Ilha do Governador, Rio de Janeiro. Condomínio com infraestrutura completa de lazer, dispondo de playground infantil e salão de festas. Direito exclusivo a 02 (duas) vagas de garagem. Bairro nobre e seguro com forte demanda residencial familiar e proximidade à Praia da Bica. Deságio de 50% na 2ª praça (~R$ 2.540/m² com 2 vagas). Avaliação judicial de R$ 620.000,00 e 2ª Praça a 50% por R$ 310.000,00. 11º RGI Matrícula nº 86.056 e IPTU nº 1.898.000-3.',
        p1Label: '1ª Praça (19/11/2026):',
        p1Val: 'R$ 620.000,00',
        p2Label: '2ª Praça (26/11/2026):',
        p2Val: 'R$ 310.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/jardim-guanabara/apartamento/rua-breno-guimaraes-106-apto-105/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20105%20na%20Rua%20Breno%20Guimar%C3%A3es%20106%20no%20Jardim%20Guanabara%20(Ilha%20do%20Governador).'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Leilão Judicial de Apartamento na Tijuca — Rua Barão de Itapagipe nº 417 — Bloco A, Apto 501',
        desc: 'Apartamento residencial de 50 m² de área privativa, posição de frente, no 5º pavimento (unidade 501) do Bloco A na tradicional Rua Barão de Itapagipe nº 417, Tijuca, Zona Norte do Rio de Janeiro. Imóvel de frente com excelente iluminação e ventilação natural. Localização privilegiada próxima às estações de metrô Afonso Pena e São Francisco Xavier, comércio, colégios e hospitais. Oportunidade com deságio de 50% (~R$ 2.800/m² na 2ª praça). Avaliação judicial de R$ 280.000,00 e 2ª Praça a 50% por R$ 140.000,00. 11º RGI Matrícula nº 3553 e IPTU nº 11509312.',
        p1Label: '1ª Praça (30/09/2026):',
        p1Val: 'R$ 280.000,00',
        p2Label: '2ª Praça (07/10/2026):',
        p2Val: 'R$ 140.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-barao-de-itapagipe-417-bloco-a-apto-501/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20501%20bloco%20A%20na%20Rua%20Bar%C3%A3o%20de%20Itapagipe%20417%20na%20Tijuca.'
      },
      {
        tag: 'Residencial • Leblon/RJ',
        title: 'Leilão Judicial de Apartamento no Leblon — Rua General Urquiza nº 117 — Apto 501',
        desc: 'Apartamento residencial de 75 m² de área privativa situado no 5º pavimento (unidade 501) do tradicional Edifício 24 de Outubro (1953), na Rua General Urquiza nº 117, no nobre bairro do Leblon, Zona Sul do Rio de Janeiro. Composto por sala para dois ambientes (piso cerâmico), dois quartos (piso de taco), banheiro social cerâmico, cozinha, área de serviço e banheiro de serviço. Não possui vaga de garagem. Oportunidade rara no metro quadrado mais valorizado do país (~R$ 9.660/m² na 2ª praça). Avaliação judicial de R$ 1.449.000,00 e 2ª Praça a 50% por R$ 724.500,00. 2º RGI Matrícula nº 995653 e IPTU nº 0642600-1.',
        p1Label: '1ª Praça (28/09/2026):',
        p1Val: 'R$ 1.449.000,00',
        p2Label: '2ª Praça (01/10/2026):',
        p2Val: 'R$ 724.500,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-general-urquiza-117-apto-501/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20501%20na%20Rua%20General%20Urquiza%20117%20no%20Leblon.'
      },
      {
        tag: 'Residencial • Laranjeiras/RJ',
        title: 'Leilão Judicial de Apartamento em Laranjeiras — Rua das Laranjeiras nº 336 — Apto 826',
        desc: 'Apartamento residencial compacto com 24 m² no 8º pavimento do Bloco 1 (Entrada B) na tradicional Rua das Laranjeiras nº 336, Zona Sul do Rio de Janeiro. Edifício de 1972 em bom estado de conservação com portaria 24h, câmeras de segurança, churrasqueira, capela privativa e bicicletário. Imóvel fechado e sem direito a vaga de garagem. Excelente oportunidade para moradia ou investimento em aluguel na Zona Sul (~R$ 6.875/m² na 2ª praça). Avaliação judicial de R$ 330.000,00 e 2ª Praça a 50% por R$ 165.000,00. Matrícula nº 91.053 (9º RGI) e IPTU nº 0.986.826-6.',
        p1Label: '1ª Praça (22/09/2026):',
        p1Val: 'R$ 330.000,00',
        p2Label: '2ª Praça (23/09/2026):',
        p2Val: 'R$ 165.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/laranjeiras/apartamento/rua-das-laranjeiras-336-bloco-1-apto-826/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20826%20na%20Rua%20das%20Laranjeiras%20336%20bloco%201%20em%20Laranjeiras.'
      },
      {
        tag: 'Residencial • Centro/RJ',
        title: 'Leilão Judicial de Apartamento no Centro do Rio — Avenida Rio Branco nº 185 — Apto 1224',
        desc: 'Apartamento residencial de 33 m² no 12º pavimento do clássico Edifício Marquês do Herval, erguido na icônica esquina da Avenida Rio Branco com Avenida Almirante Barroso. Edifício de 21 pavimentos com 8 elevadores modernizados, portaria no subsolo em pedras portuguesas e mármore, galeria com 10 lojas (livrarias, bistrô e lanchonetes), banco e farmácia. Corredores em mármore e madeira, circuito de câmeras e vigilância 24h. Em bom estado de conservação. Excepcional custo de aquisição na 2ª praça (~R$ 2.847/m²). Avaliação de R$ 187.941,39 e 2ª Praça a 50% por R$ 93.970,70. Matrícula nº 39.611 (7º RGI) e IPTU nº 0.690.969-1.',
        p1Label: '1ª Praça (05/10/2026):',
        p1Val: 'R$ 187.941,39',
        p2Label: '2ª Praça (08/10/2026):',
        p2Val: 'R$ 93.970,70 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/avenida-rio-branco-185-apto-1224/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201224%20na%20Avenida%20Rio%20Branco%20185%20no%20Centro%20do%20Rio.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento em Copacabana — Rua Barata Ribeiro nº 334 — Apto 303',
        desc: 'Apartamento residencial compacto com 33 m² no coração de Copacabana, a apenas três quadras da praia e próximo ao metrô. Edifício de 12 pavimentos com 2 elevadores, total de 37 apartamentos (4 por andar do 2º ao 10º andar e cobertura), portaria simples com piso em pedra e portão de alumínio, área livre no terraço sem benfeitorias, em regular estado de conservação. Excelente potencial para locação tradicional ou por temporada (~R$ 7.884/m² na 2ª praça). Avaliação judicial de R$ 371.704,75 e 2ª Praça a 70% por R$ 260.193,33. Matrícula nº 102.946 (5º RGI) e IPTU nº 0904756-4.',
        p1Label: '1ª Praça (28/09/2026):',
        p1Val: 'R$ 371.704,75',
        p2Label: '2ª Praça (01/10/2026):',
        p2Val: 'R$ 260.193,33 (70% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-barata-ribeiro-334-apto-303/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20303%20na%20Rua%20Barata%20Ribeiro%20334%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Ipanema/RJ',
        title: 'Leilão Judicial de Apartamento em Ipanema — Rua Vinícius de Moraes nº 71 — Apto 402',
        desc: 'Apartamento residencial de 105 m² com direito a 1 vaga de garagem escriturada no Condomínio Edifício Acapulco, situado na cobiçada Rua Vinícius de Moraes, a passos da Praia de Ipanema (Posto 9). Edifício exclusivo de 1972 com 8 pavimentos e apenas 2 apartamentos por andar (total de 16 unidades), segurança 24h, 2 elevadores, playground e salão de festas. Imóvel encontra-se fechado. Avaliação judicial de R$ 2.500.000,00 e 2ª Praça a 50% por R$ 1.250.000,00 (~R$ 11.904/m²). Matrícula nº 32.817 (5º RGI) e IPTU nº 1.227.500-4.',
        p1Label: '1ª Praça (28/09/2026):',
        p1Val: 'R$ 2.500.000,00',
        p2Label: '2ª Praça (30/09/2026):',
        p2Val: 'R$ 1.250.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/ipanema/apartamento/rua-vinicius-de-moraes-71-apto-402/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20402%20na%20Rua%20Vin%C3%ADcius%20de%20Moraes%2071%20em%20Ipanema.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento em Copacabana — Rua Duvivier nº 50 — Apto 201',
        desc: 'Apartamento de frente com 102 m² a apenas duas quadras da Praia de Copacabana. Sala ampla com tacos de madeira, varanda com cortina de vidro, 2 quartos, banheiro social, cozinha, área de serviço e dependência de empregada completa reversível e reformada. Prédio clássico de 1938 com 8 andares, apenas 3 por andar, 2 elevadores, salão de festas, interfone, câmeras e portaria de segunda a sábado das 9h às 21h. Sem vaga de garagem. Avaliação de R$ 1.085.883,50 e 2ª Praça a 50% por R$ 542.941,75 (~R$ 5.320/m²). Matrícula nº 52.950 (2º RGI) e IPTU nº 0.566.818-1.',
        p1Label: '1ª Praça (22/09/2026):',
        p1Val: 'R$ 1.085.883,50',
        p2Label: '2ª Praça (23/09/2026):',
        p2Val: 'R$ 542.941,75 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-duvivier-50-apto-201/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20201%20na%20Rua%20Duvivier%2050%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Humaitá/RJ',
        title: 'Leilão Judicial de Apartamento no Humaitá — Rua Davi Campista nº 296 — Apto 603',
        desc: 'Apartamento de 135 m² com 3 quartos (1 com varanda privativa), sala ampla com varanda, piso em taco de madeira nobre, banheiro social antigo, cozinha e dependência completa de serviço. Direito a 1 vaga de garagem em condomínio com portaria 24 horas e estrutura de lazer no Humaitá. Necessitando de reforma geral (excelente oportunidade de retrofit com aquisição a ~R$ 7.200/m² na 2ª praça). Avaliação de R$ 1.946.197,60 e 2ª Praça a 50% por R$ 973.098,80. Matrícula no 2º RGI e IPTU nº 0520187-6.',
        p1Label: '1ª Praça (21/09/2026):',
        p1Val: 'R$ 1.946.197,60',
        p2Label: '2ª Praça (24/09/2026):',
        p2Val: 'R$ 973.098,80 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/humaita/apartamento/rua-davi-campista-296-apto-603/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20603%20na%20Rua%20Davi%20Campista%20296%20no%20Humait%C3%A1.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Leilão Judicial de Apartamento em Botafogo — Rua Voluntários da Pátria nº 166 — Apto 203',
        desc: 'Apartamento clássico de 115 m² com 3 quartos, banheiro social, sala ampla, cozinha, área de serviço e dependências completas em prédio tradicional de 1946 com 13 andares, hall em granito com jardim, portaria 24h, terraço com churrasqueira e vagas rotativas em parqueamento. Necessita de reforma geral (potencial de retrofit com aquisição a ~R$ 3.900/m² na 2ª praça). Avaliação de R$ 897.000,00 e 2ª Praça a 50% por R$ 448.500,00. Matrícula nº 6.877 (3º RGI) e IPTU nº 0.540.237-5.',
        p1Label: '1ª Praça (18/09/2026):',
        p1Val: 'R$ 897.000,00',
        p2Label: '2ª Praça (28/09/2026):',
        p2Val: 'R$ 448.500,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-166-apto-203/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20203%20na%20Rua%20Volunt%C3%A1rios%20da%20P%C3%A1tria%20166%20em%20Botafogo.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Leilão Judicial de Apartamento na Tijuca — Rua Enes de Souza nº 45 — Apto 204',
        desc: 'Apartamento de 50 m², posição de fundos, com sala, 2 quartos (1 suíte), banheiro social, cozinha e área de serviço em prédio de 1967 com 1 elevador e baixo condomínio. Laudo aponta necessidade de reforma total (oportunidade ideal para retrofit com aquisição a ~R$ 2.600/m² na 2ª praça). Avaliação de R$ 260.000,00 e 2ª Praça a 50% por R$ 130.000,00. Matrícula nº 143.042 (11º RGI) e IPTU nº 0.913.176-4.',
        p1Label: '1ª Praça (13/10/2026):',
        p1Val: 'R$ 260.000,00',
        p2Label: '2ª Praça (15/10/2026):',
        p2Val: 'R$ 130.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-enes-de-souza-45-apto-204/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20204%20na%20Rua%20Enes%20de%20Souza%2045%20na%20Tijuca.'
      },
      {
        tag: 'Residencial • São Conrado/RJ',
        title: 'Leilão Judicial de Apartamento em São Conrado — Av. Prefeito Mendes de Morais nº 1400 — Bloco 2, Apto 503',
        desc: 'Apartamento de 268,84 m² no prestigiado Condomínio Praia Guinle, em frente ao mar da Praia de São Conrado. Infraestrutura completa de lazer (piscina, academia, sauna, quadra, salão de festas, playground) e 3 vagas de garagem. Avaliação judicial de R$ 5.221.000,00 e 2ª Praça a 50% por R$ 2.610.500,00. Matrícula nº 46126 (2º RGI) e IPTU nº 1.730.497-3.',
        p1Label: '1ª Praça (22/09/2026):',
        p1Val: 'R$ 5.221.000,00',
        p2Label: '2ª Praça (29/09/2026):',
        p2Val: 'R$ 2.610.500,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/sao-conrado/apartamento/avenida-prefeito-mendes-de-morais-1400-bloco-2-apto-503/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20503%20do%20Bloco%202%20no%20Condom%C3%ADnio%20Praia%20Guinle%20(Av.%20Prefeito%20Mendes%20de%20Morais%201400)%20em%20S%C3%A3o%20Conrado.'
      },
      {
        tag: 'Residencial • Lagoa/RJ',
        title: 'Leilão Judicial de Cobertura Duplex na Lagoa — Rua Fonte da Saudade nº 270 — Apto 402',
        desc: 'Exclusiva cobertura duplex de 308 m² (e ~390 m² úteis) com 4 suítes, escritório, salão de 90 m², piscina, sauna, hidromassagem, terraço solarium e 4 vagas em endereço nobre na Lagoa. Avaliação judicial de R$ 5.685.000,00 e 2ª Praça a 50% por R$ 2.842.500,00. Matrícula nº 96157 (2º RGI) e IPTU nº 3118779-2.',
        p1Label: '1ª Praça (21/09/2026):',
        p1Val: 'R$ 5.685.000,00',
        p2Label: '2ª Praça (24/09/2026):',
        p2Val: 'R$ 2.842.500,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/lagoa/cobertura/rua-fonte-da-saudade-270-apto-402/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20da%20cobertura%20duplex%20402%20na%20Rua%20Fonte%20da%20Saudade%20270%20na%20Lagoa%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Urca/RJ',
        title: 'Leilão Judicial de Apartamento na Urca — Rua Cândido Gaffrée nº 166 — Apto 202 (121 m²)',
        desc: 'Apartamento de 121 m² no Condomínio do Edifício Enseada, em rua bucólica e arborizada da Urca, próximo à mureta e ao Morro da Urca. Excelente planta residencial de 121 m² com 50% de desconto na 2ª Praça. Matrícula nº 28.527 (3º RGI) e IPTU nº 1.173906-7.',
        p1Label: '1ª Praça (14/10/2026):',
        p1Val: 'R$ 1.700.000,00',
        p2Label: '2ª Praça (20/10/2026):',
        p2Val: 'R$ 850.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/rua-candido-gaffree-166-apto-202/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20202%20no%20Edif%C3%ADcio%20Enseada%20na%20Rua%20C%C3%A2ndido%20Gaffr%C3%A9e%20166%20na%20Urca%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Ipanema/RJ',
        title: 'Leilão Judicial de Apartamento em Ipanema — Rua Barão da Torre nº 292 — Apto 404 (45 m²)',
        desc: 'Apartamento de 45 m² no 4º andar com 1 vaga de garagem na escritura em condomínio de excelente padrão com infraestrutura de lazer, elevadores e portaria no coração nobre de Ipanema. Matrícula nº 104771 (5º RGI) e IPTU nº 3009818-0.',
        p1Label: '1ª Praça (09/09/2026):',
        p1Val: 'R$ 1.357.354,55',
        p2Label: '2ª Praça (11/09/2026):',
        p2Val: 'R$ 814.412,73 (60% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/ipanema/apartamento/rua-barao-da-torre-292-apto-404/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20404%20na%20Rua%20Bar%C3%A3o%20da%20Torre%20292%20em%20Ipanema%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Rio Comprido/RJ',
        title: 'Leilão Judicial de Apartamento em Rio Comprido — Av. Presidente Vargas nº 3555 — Bloco E, Apto 403 (57 m²)',
        desc: 'Apartamento de 57 m² no Bloco E, atualmente desocupado (vazio), o que garante posse imediata. Condomínio com infraestrutura, portaria e elevadores em localização com rápido acesso ao Centro e Zona Sul. Matrícula nº 14.273 (11º RGI) e IPTU nº 0013203-5.',
        p1Label: '1ª Praça (14/09/2026):',
        p1Val: 'R$ 228.000,00',
        p2Label: '2ª Praça (17/09/2026):',
        p2Val: 'R$ 171.000,00 (75% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/rio-comprido/apartamento/avenida-presidente-vargas-3555-bloco-e-apto-403/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20403%20do%20Bloco%20E%20na%20Av.%20Presidente%20Vargas%203555%20no%20Rio%20Comprido%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Leilão Judicial de Apartamento em Botafogo — Rua Lauro Müller nº 26 — Apto 1001 (39 m²)',
        desc: 'Apartamento de 39 m² no 10º andar (frente, sol da manhã) com vista livre para a Enseada de Botafogo, Cristo Redentor e UFRJ. Sala, 1 quarto, banheiro e cozinha em prédio com portaria 24h e 3 elevadores a passos do Rio Sul. Matrícula nº 35.489 (3º RGI) e IPTU nº 0.351.945-1.',
        p1Label: '1ª Praça (14/09/2026):',
        p1Val: 'R$ 541.158,40',
        p2Label: '2ª Praça (16/09/2026):',
        p2Val: 'R$ 271.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-26-apto-1001/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201001%20na%20Rua%20Lauro%20M%C3%BCller%2026%20em%20Botafogo%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Maracanã/RJ',
        title: 'Leilão Judicial de Apartamento no Maracanã — Av. Maracanã nº 480 — Apto 902 (95 m²)',
        desc: 'Apartamento de 95 m² no 9º andar com direito a 1 vaga de garagem em condomínio com portaria 24h, reconhecimento facial, CFTV, hall em mármore e lambri de madeira, 2 blocos com 2 elevadores cada e salão de festas. Matrícula nº 27.191 (11º RGI) e IPTU nº 1.227.137-5.',
        p1Label: '1ª Praça (28/09/2026):',
        p1Val: 'R$ 484.690,00',
        p2Label: '2ª Praça (30/09/2026):',
        p2Val: 'R$ 242.345,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/avenida-maracana-480-apto-902/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20902%20na%20Av.%20Maracan%C3%A3%20480%20no%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Barra da Tijuca/RJ',
        title: 'Leilão Judicial de Apartamento na Barra da Tijuca — Av. Jornalista Ricardo Marinho nº 300 — Apto 312 (101 m²)',
        desc: 'Apartamento de 101 m² com posição fundos (silencioso) no 3º andar em condomínio com lazer completo, serviços, portaria 24h e 1 vaga coberta. Prédio construído em 1989 em localização nobre na Barra. Matrícula nº 150903 (9º RGI) e IPTU nº 1.845.927-1.',
        p1Label: '1ª Praça (24/08/2026):',
        p1Val: 'R$ 1.300.000,00',
        p2Label: '2ª Praça (26/08/2026):',
        p2Val: 'R$ 650.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-jornalista-ricardo-marinho-300-apto-312/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20312%20na%20Av.%20Jornalista%20Ricardo%20Marinho%20300%20na%20Barra%20da%20Tijuca.'
      },
      {
        tag: 'Residencial • Flamengo/RJ',
        title: 'Leilão Judicial de Apartamento na Praia do Flamengo nº 284 — Apto 301 (463 m²)',
        desc: 'Apartamento de altíssimo padrão com 463 m² na nobre orla da Praia do Flamengo. Prédio com 09 pavimentos, 2 apartamentos por andar, portaria 24h e 3 elevadores. Vista deslumbrante para a Baía de Guanabara, Aterro e Pão de Açúcar. Matrícula nº 293012 (9º RGI) e IPTU nº 0245475-9.',
        p1Label: '1ª Praça (05/10/2026):',
        p1Val: 'R$ 4.100.000,00',
        p2Label: '2ª Praça (08/10/2026):',
        p2Val: 'R$ 2.050.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/praia-do-flamengo-284-apto-301/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20301%20na%20Praia%20do%20Flamengo%20284%20no%20Flamengo.'
      },
      {
        tag: 'Residencial • Centro/RJ',
        title: 'Leilão Judicial de Apartamento no Centro do Rio — Rua Leandro Martins nº 22 — Apto 620 (38 m²)',
        desc: 'Apartamento de 38 m² no 6º andar do Edifício Sagres na Rua Leandro Martins, próximo ao VLT e Metrô. Salão dividido em antessala e 2 salas (fundos), banheiro e copa. Portaria 24h e 4 elevadores modernizados. Matrícula nº 14672 (4º RGI) e IPTU nº 0568243-0.',
        p1Label: '1ª Praça (24/09/2026):',
        p1Val: 'R$ 194.619,76',
        p2Label: '2ª Praça (29/09/2026):',
        p2Val: 'R$ 98.000,00 (~50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-leandro-martins-22-apto-620/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20620%20no%20Edif%C3%ADcio%20Sagres%20na%20Rua%20Leandro%20Martins%2022%20no%20Centro%20do%20Rio.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Leilão Judicial de Apartamento em Botafogo — Rua da Passagem nº 159 — Apto 803 (22 m²)',
        desc: 'Apartamento de frente no 8º andar com 22 m² na Rua da Passagem, próximo ao Metrô Botafogo e Botafogo Praia Shopping. Unidade desocupada há vários anos. Portaria 24h e 2 elevadores. Matrícula nº 0053374 (3º RGI) e IPTU nº 0.691.419-6.',
        p1Label: '1ª Praça (21/09/2026):',
        p1Val: 'R$ 340.000,00',
        p2Label: '2ª Praça (23/09/2026):',
        p2Val: 'R$ 204.000,00 (60% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-da-passagem-159-apto-803/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20803%20na%20Rua%20da%20Passagem%20159%20em%20Botafogo.'
      },
      {
        tag: 'Residencial • Maracanã/RJ',
        title: 'Leilão Judicial de Apartamento no Maracanã — Rua Morais e Silva nº 51 — Apto 1401, Bloco 2 (85 m²)',
        desc: 'Apartamento em andar alto com 85 m² e direito a 1 vaga em garagem elevada no Bloco 2. Localização estratégica próximo à UERJ, Estádio do Maracanã e Metrô. Unidade fechada. Matrícula nº 30.179 (11º RGI) e IPTU nº 1.514.716-8.',
        p1Label: '1ª Praça (08/09/2026):',
        p1Val: 'R$ 610.000,00',
        p2Label: '2ª Praça (10/09/2026):',
        p2Val: 'R$ 305.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-morais-e-silva-51-apto-1401/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201401%20Bloco%202%20na%20Rua%20Morais%20e%20Silva%2051%20no%20Maracan%C3%A3.'
      },
      {
        tag: 'Residencial • Urca/RJ',
        title: 'Leilão Judicial de Apartamento na Urca — Avenida Portugal nº 584 — Apto 501 (Edifício Urca-Mar — 68 m²)',
        desc: 'Apartamento no último pavimento com 68 m² no Edifício Urca-Mar, com grande terraço frontal descoberto e vista para a Enseada de Botafogo e Baía de Guanabara. Sala, cozinha, 1 suíte, banheiro social e área de serviço; sem vaga de garagem. Matrícula nº 40.262 (3º RGI) e IPTU nº 0650419-5.',
        p1Label: '1ª Praça (25/08/2026):',
        p1Val: 'R$ 1.091.220,92',
        p2Label: '2ª Praça (27/08/2026):',
        p2Val: 'R$ 545.610,46 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/avenida-portugal-584-apto-501/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20501%20no%20Edif%C3%ADcio%20Urca-Mar%20na%20Avenida%20Portugal%20584%20na%20Urca.'
      },
      {
        tag: 'Residencial • Flamengo/RJ',
        title: 'Leilão Judicial de Apartamento no Flamengo — Rua Honório de Barros nº 23 — Apto 601 (70 m²)',
        desc: 'Apartamento de 70 m² em sólida construção de 1963 com 4 elevadores e portaria 24h na Rua Honório de Barros, via nobre e arborizada do Flamengo próxima ao Aterro e ao Metrô. Sem vaga de garagem vinculada à unidade. Matrícula nº 281.699 (9º RGI) e IPTU nº 0714891-9.',
        p1Label: '1ª Praça (08/09/2026):',
        p1Val: 'R$ 720.000,00',
        p2Label: '2ª Praça (10/09/2026):',
        p2Val: 'R$ 432.000,00 (60% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/rua-honorio-de-barros-23-apto-601/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20601%20na%20Rua%20Hon%C3%B3rio%20de%20Barros%2023%20no%20Flamengo.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Leilão Judicial de Apartamento em Botafogo — Rua Guilhermina Guinle nº 18 — Apto 401 (72 m²)',
        desc: 'Apartamento de frente com 72 m² em clássico edifício de esquina de 1959 entre a Rua Guilhermina Guinle e Rua Voluntários da Pátria. Localização nobre em rua tranquila, a poucos passos do Metrô Botafogo e farto comércio. Matrícula nº 60.137 (3º RGI) e IPTU nº 0.277.088-1.',
        p1Label: '1ª Praça (24/09/2026):',
        p1Val: 'R$ 828.000,00',
        p2Label: '2ª Praça (29/09/2026):',
        p2Val: 'R$ 496.800,00 (60% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-guilhermina-guinle-18-apto-401/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20401%20na%20Rua%20Guilhermina%20Guinle%2018%20em%20Botafogo.'
      },
      {
        tag: 'Residencial • Barra da Tijuca/RJ',
        title: 'Leilão Judicial de Apartamento na Avenida Lúcio Costa nº 6500 — Apto 203 (Condomínio Alfa Plaza — 60 m²)',
        desc: 'Apartamento de frente com 60 m² no prestigiado Condomínio Alfa Plaza, de frente para a praia da Barra da Tijuca. Condomínio com elevadores, churrasqueira, ônibus exclusivo para moradores (itinerários Zona Sul e Centro), complexo de piscinas, clubes, portaria e segurança 24h. Matrícula nº 121.926 (9º RGI) e IPTU nº 1.690.545-7.',
        p1Label: '1ª Praça (27/08/2026):',
        p1Val: 'R$ 850.000,00',
        p2Label: '2ª Praça (01/09/2026):',
        p2Val: 'R$ 425.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-lucio-costa-6500-apto-203/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20203%20no%20Alfa%20Plaza%20na%20Avenida%20L%C3%BAcio%20Costa%206500%20na%20Barra%20da%20Tijuca.'
      },
      {
        tag: 'Residencial • Santa Teresa/RJ',
        title: 'Leilão Judicial de Casa em Santa Teresa — Rua Júlio Otoni nº 254 (203 m²)',
        desc: 'Casa residencial com 12 quartos (incluindo Suíte Presidencial), entrada por jardim, recepção, bar, restaurante, cozinha, piscina, sauna a vapor e vista panorâmica espetacular para o Cristo Redentor e Pão de Açúcar. Matrícula nº 52318 (9º RGI) e IPTU nº 0.417.443-9.',
        p1Label: '1ª Praça (21/09/2026):',
        p1Val: 'R$ 3.153.239,03',
        p2Label: '2ª Praça (23/09/2026):',
        p2Val: 'R$ 1.577.000,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/casa/rua-julio-otoni-254/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20da%20casa%20na%20Rua%20J%C3%BAlio%20Otoni%20254%20em%20Santa%20Teresa.'
      },
      {
        tag: 'Comercial/Residencial • Santa Teresa/RJ',
        title: 'Leilão Judicial de Casarão em Santa Teresa — Rua Joaquim Murtinho nº 587 — Antiga Pousada (1.132 m²)',
        desc: 'Singular propriedade de 1938 com 1.132 m², composta por casa principal (4 andares/suítes/biblioteca), área de lazer com piscina, sauna e churrasqueira, bangalô em mezanino, prédio anexo com 5 unidades e área de mata preservada. Matrícula nº 2.117 (7º RGI) e IPTU nº 0113118-4.',
        p1Label: '1ª Praça (28/09/2026):',
        p1Val: 'R$ 2.900.000,00',
        p2Label: '2ª Praça (01/10/2026):',
        p2Val: 'R$ 1.740.000,00 (60% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/pousada-casarao/rua-joaquim-murtinho-587/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20casar%C3%A3o%20na%20Rua%20Joaquim%20Murtinho%20587%20em%20Santa%20Teresa.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Cobertura em Copacabana — Rua Silva Castro nº 44 — Apto 1001 (206 m²)',
        desc: 'Excepcional cobertura duplex de frente com 206 m², 3 quartos (1 suíte), terraço em ardósia com deck de madeira, piscina redonda de fibra e churrasqueira privativa. Matrícula nº 107.466 (5º RGI) e IPTU nº 0.065.088-7.',
        p1Label: '1ª Praça (14/09/2026):',
        p1Val: 'R$ 2.500.000,00',
        p2Label: '2ª Praça (17/09/2026):',
        p2Val: 'R$ 1.500.000,00 (60% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/cobertura/rua-silva-castro-44-apto-1001/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20da%20cobertura%20na%20Rua%20Silva%20Castro%2044%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento em Copacabana — Rua Marechal Mascarenhas de Morais nº 190 — Apto 703 (79 m²)',
        desc: 'Apartamento residencial de 79 m² em prédio de 1982 com 7 andares mais cobertura. Condomínio com garagem, 3 elevadores, playground com salão de festas, portaria 24h e câmeras de segurança. Matrícula nº 49.437 (5º RGI) e IPTU nº 1.534.550-7.',
        p1Label: '1ª Praça (17/09/2026):',
        p1Val: 'R$ 1.091.500,00',
        p2Label: '2ª Praça (22/09/2026):',
        p2Val: 'R$ 545.750,00 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-marechal-mascarenhas-de-morais-190-apto-703/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20na%20Rua%20Marechal%20Mascarenhas%20de%20Morais%20190%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Maracanã/RJ',
        title: 'Leilão Judicial de Apartamento no Maracanã — Rua Dona Zulmira nº 19 — Apto 101 (66 m²)',
        desc: 'Apartamento residencial de frente com varanda, composto por quarto, sala, banheiro social, cozinha e dependências. Edifício de 1984 com 2 elevadores, segurança, 2 andares de garagem, playground, salão de festas e churrasqueira. Matrícula nº 41.819 (10º RGI) e IPTU nº 1.640.226-5.',
        p1Label: '1ª Praça (02/09/2026):',
        p1Val: 'R$ 406.923,00',
        p2Label: '2ª Praça (09/09/2026):',
        p2Val: 'R$ 203.461,50 (50% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-dona-zulmira-19-apto-101/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20na%20Rua%20Dona%20Zulmira%2019%20no%20Maracan%C3%A3.'
      },
      {
        tag: 'Residencial • Cosme Velho/RJ',
        title: 'Leilão Judicial de Cobertura no Cosme Velho — Praça São Judas Tadeu nº 6 — Apto 601 (590 m²)',
        desc: 'Cobertura residencial de altíssimo padrão com 590 m² na Praça São Judas Tadeu nº 06, Cosme Velho. Composta por amplo salão, sala de jantar, terraço frontal e lateral, 5 quartos (3 suítes), banheiro social, depósito e duas dependências. Matrícula nº 124374 (9º RGI) e IPTU nº 14013544.',
        p1Label: '1ª Praça (09/09/2026):',
        p1Val: 'R$ 4.411.000,00',
        p2Label: '2ª Praça (16/09/2026):',
        p2Val: 'R$ 1.543.850,00 (35% da avaliação)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/cosme-velho/cobertura/praca-sao-judas-tadeu-6-apto-601/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20da%20cobertura%20na%20Pra%C3%A7a%20S%C3%A3o%20Judas%20Tadeu%206%20no%20Cosme%20Velho.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento em Copacabana — Rua M. V. Castro, 32',
        desc: 'Unidade residencial situada em Copacabana, próximo à praia e metrô Cardeal Arcoverde. Análise preventiva de edital, sub-rogação de tributos e verificação de passivos condominiais concluídas.',
        p1Label: '1ª Praça (24/08/2026):',
        p1Val: 'R$ 480.000,00',
        p2Label: '2ª Praça (03/09/2026):',
        p2Val: 'R$ 240.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-ministro-viveiros-de-castro-32/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20em%20Copacabana%20(Rua%20M.%20V.%20Castro%2032).'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento na Avenida Atlântica nº 2.376',
        desc: 'Apartamento 203 com 119 m² no Edifício Assú (orla de Copacabana) e entrada suplementar pela Rua Domingos Ferreira 25. Composto por sala, 3 quartos (2 suítes), banheiro social, cozinha e área de serviço.',
        p1Label: '1ª Praça (03/08/2026):',
        p1Val: 'R$ 1.350.000,00',
        p2Label: '2ª Praça (05/08/2026):',
        p2Val: 'R$ 675.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-2376/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20na%20Av.%20Atl%C3%A2ntica%202376.'
      },
      {
        tag: 'Residencial • Urca/RJ',
        title: 'Leilão Judicial de Casa na Rua Marechal Cantuária nº 75 — Urca',
        desc: 'Casa residencial unifamiliar com 321 m² de área construída, edificada em 1938 de frente para o logradouro bucólico da Urca. Inscrição IPTU nº 0.422.940-7. Ativo raríssimo na Zona Sul do Rio de Janeiro.',
        p1Label: '1ª Praça (19/08/2026):',
        p1Val: 'R$ 3.820.000,00',
        p2Label: '2ª Praça (25/08/2026):',
        p2Val: 'R$ 1.910.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/casa/rua-marechal-cantuaria-75/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20da%20casa%20na%20Rua%20Marechal%20Cantu%C3%A1ria%2075%20na%20Urca.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento na Av. Prado Júnior nº 298 — Apto 1003',
        desc: 'Apartamento 1003 com 42 m² (IPTU), fundos, sem vaga de garagem. Prédio residencial construído em 1957 com 12 andares, 2 elevadores, portaria presencial e câmeras de segurança. Inscrição IPTU nº 0.691.500-3. Matrícula nº 119.755 (5º RGI).',
        p1Label: '1ª Praça (17/08/2026):',
        p1Val: 'R$ 520.000,00',
        p2Label: '2ª Praça (19/08/2026):',
        p2Val: 'R$ 312.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-prado-junior-298/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201003%20na%20Av.%20Prado%20J%C3%BAnior%20298.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento na Av. Nossa Senhora de Copacabana nº 1003 — Apto 1101',
        desc: 'Apartamento 1101 com 35 m² (IPTU), frente, sem vaga de garagem. Prédio residencial construído em 1957 com 13 andares, 2 elevadores, portaria 24 horas e câmeras de segurança. Inscrição IPTU nº 0.172.431-9. Matrícula nº 111923 (5º RGI).',
        p1Label: '1ª Praça (27/07/2026):',
        p1Val: 'R$ 448.971,12',
        p2Label: '2ª Praça (29/07/2026):',
        p2Val: 'R$ 225.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-nossa-senhora-de-copacabana-1003/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201101%20na%20Av.%20Nossa%20Senhora%20de%20Copacabana%201003.'
      },
      {
        tag: 'Residencial • Catete/RJ',
        title: 'Leilão Judicial de Apartamento na Rua Silveira Martins nº 140 — Apto 502',
        desc: 'Apartamento 502 com 53 m² de área privativa, sem vaga de garagem. Prédio residencial com 8 pavimentos, 7 apartamentos por andar, portaria presencial antiga. Registro no 9º RGI sob a Matrícula nº 486828 (fls. 1).',
        p1Label: '1ª Praça (27/07/2026):',
        p1Val: 'R$ 532.500,63',
        p2Label: '2ª Praça (29/07/2026):',
        p2Val: 'R$ 267.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20502%20na%20Rua%20Silveira%20Martins%20140%20no%20Catete.'
      },
      {
        tag: 'Residencial • Catete/RJ',
        title: 'Leilão Judicial de Apartamento na Rua Silveira Martins nº 140 — Apto 503',
        desc: 'Apartamento 503 com 36 m² de área privativa, sem vaga de garagem. Prédio residencial com 8 pavimentos, 7 apartamentos por andar, portaria presencial antiga. Registro no 9º RGI sob a Matrícula nº 486819 (livro 3, fls. 1).',
        p1Label: '1ª Praça (27/07/2026):',
        p1Val: 'R$ 334.118,04',
        p2Label: '2ª Praça (29/07/2026):',
        p2Val: 'R$ 168.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140-apto-503/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20503%20na%20Rua%20Silveira%20Martins%20140%20no%20Catete.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Leilão Judicial de Apartamento na Rua Voluntários da Pátria nº 381 — Apto 305',
        desc: 'Apartamento 305 no Edifício Coaracy Nunes com 109 m² de área edificada. Imóvel fechado há mais de 10 anos. Construção de 1945. Matrícula nº 9497 no 3º RGI e IPTU nº 0.298.026-6.',
        p1Label: '1ª Praça (28/07/2026):',
        p1Val: 'R$ 1.030.339,95',
        p2Label: '2ª Praça (30/07/2026):',
        p2Val: 'R$ 516.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-381-apto-305/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20305%20na%20Rua%20Volunt%C3%A1rios%20da%20P%C3%A1tria%20381%20em%20Botafogo.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Leilão Judicial de Apartamento na Rua Haddock Lobo nº 191 — Apto 405',
        desc: 'Apartamento 405 no Edifício Colima de frente, com 60 m² de área edificada. Prédio residencial construído em 1951, de 7 pavimentos, com portaria 24 horas e 2 elevadores. Matrícula nº 114.079 no 11º RGI e IPTU nº 0.574.460-2.',
        p1Label: '1ª Praça (28/07/2026):',
        p1Val: 'R$ 320.550,21',
        p2Label: '2ª Praça (30/07/2026):',
        p2Val: 'R$ 161.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-haddock-lobo-191-apto-405/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20405%20na%20Rua%20Haddock%20Lobo%20191%20na%20Tijuca.'
      },
      {
        tag: 'Residencial • Leblon/RJ',
        title: 'Leilão Judicial de Apartamento no Leblon na Rua General Urquiza nº 263 — Apto 402',
        desc: 'Apartamento 402 com 40 m² no Edifício Palm Beach, construído em 1950, localizado na agradável quadra sem saída da Rua General Urquiza no Leblon. Matrícula nº 10.627 no 2º RGI e IPTU nº 0.565.962-8.',
        p1Label: '1ª Praça (29/09/2026):',
        p1Val: 'R$ 890.000,00',
        p2Label: '2ª Praça (01/10/2026):',
        p2Val: 'R$ 445.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-general-urquiza-263/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20402%20na%20Rua%20General%20Urquiza%20263%20no%20Leblon.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento em Copacabana na Rua Siqueira Campos nº 43 — Apto 1123',
        desc: 'Apartamento 1123 com 38 m² de área edificada e posição de frente no Edifício Centro Comercial de Copacabana. Composto de banheiro com box de granito, cozinha e sala acopladas e quarto separado por móvel. Matrícula nº 5098 no 5º RGI e IPTU nº 0.686.319-5.',
        p1Label: '1ª Praça (16/09/2026):',
        p1Val: 'R$ 400.000,00',
        p2Label: '2ª Praça (23/09/2026):',
        p2Val: 'R$ 200.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-siqueira-campos-43/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201123%20na%20Rua%20Siqueira%20Campos%2043%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Leilão Judicial de Apartamento em Botafogo na Rua Lauro Müller nº 36 — Apto 1411',
        desc: 'Apartamento 1411 com 38 m² de área edificada e posição de fundos no Condomínio do Edifício Interpraias (1973). Prédio com portaria 24h, 3 elevadores e lazer na cobertura com chuveirão e churrasqueira. Imóvel desocupado há anos. Matrícula nº 11.881 no 3º RGI e IPTU nº 1.205.989-8.',
        p1Label: '1ª Praça (15/05/2026):',
        p1Val: 'R$ 520.000,00',
        p2Label: '2ª Praça (21/07/2026):',
        p2Val: 'R$ 260.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-36/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201411%20na%20Rua%20Lauro%20M%C3%BCller%2036%20em%20Botafogo.'
      },
      {
        tag: 'Residencial • Gávea/RJ',
        title: 'Leilão Judicial de Apartamento na Gávea — Rua Vice Governador Rubens Berardo nº 175 — Apto 506 Bl. III',
        desc: 'Apartamento 506 com 84 m² de área edificada e direito a 2 vagas de garagem na Gávea (acesso também pela Av. Padre Leonel Franca 210). Composto de 2 quartos (1 suíte), banheiro social, sala, cozinha e dependência completa. Matrícula nº 31.349 no 2º RGI e IPTU nº 1.479.851-6.',
        p1Label: '1ª Praça (14/09/2026):',
        p1Val: 'R$ 1.686.801,06',
        p2Label: '2ª Praça (24/09/2026):',
        p2Val: 'R$ 843.401,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/gavea/apartamento/rua-vice-governador-rubens-berardo-175/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20506%20na%20G%C3%A1vea%20na%20Rua%20Vice%20Governador%20Rubens%20Berardo%20175.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Leilão Judicial de Apartamento na Praia de Botafogo nº 356 — Apto 1138',
        desc: 'Apartamento residencial 1138 com 21 metros quadrados (21 m²) em bom estado na Praia de Botafogo nº 356. Composto de rol de entrada/cozinha, banheiro e quarto pequeno. Edifício de 1958 com portaria 24h, circuito de câmeras e 10 elevadores. Matrícula nº 38.841 do 3º RGI e IPTU nº 0.651.974-8.',
        p1Label: '1ª Praça (17/08/2026):',
        p1Val: 'R$ 355.000,42',
        p2Label: '2ª Praça (20/08/2026):',
        p2Val: 'R$ 213.000,25',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/praia-de-botafogo-356/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201138%20na%20Praia%20de%20Botafogo%20356.'
      },
      {
        tag: 'Residencial • Santa Teresa/RJ',
        title: 'Leilão Judicial de Apartamento na Rua Costa Bastos nº 8 — Santa Teresa',
        desc: 'Apartamento 1001 com 51 m², de frente para a rua e com sol da manhã. Composto por sala, quarto, cozinha e banheiro em bom estado de conservação. Prédio tradicional com portaria e sem área de lazer. Matrícula nº 97.791 do 2º RGI/RJ.',
        p1Label: '1ª Praça (13/08/2026):',
        p1Val: 'R$ 290.000,00',
        p2Label: '2ª Praça (18/08/2026):',
        p2Val: 'R$ 145.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/apartamento/rua-costa-bastos-8/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201001%20na%20Rua%20Costa%20Bastos%208%20em%20Santa%20Teresa.'
      },
      {
        tag: 'Residencial • Centro/RJ',
        title: 'Leilão Judicial de Apartamento na Rua Riachuelo nº 220 — Apto 1103',
        desc: 'Apartamento 1103 com 33 metros quadrados (33 m²), de frente para a rua principal. Kitnet composta por cozinha compacta, banheiro com azulejos, corredor e salão com taco. Edifício de 1967 com porteiro 24h, 2 elevadores e circuito interno de TV. Matrícula nº 80.801 do 2º RGI/RJ.',
        p1Label: '1ª Praça (31/08/2026):',
        p1Val: 'R$ 138.524,00',
        p2Label: '2ª Praça (03/09/2026):',
        p2Val: 'R$ 69.262,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-riachuelo-220/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%201103%20na%20Rua%20Riachuelo%20220%20no%20Centro.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento na Av. Atlântica nº 3806 — Apto 312',
        desc: 'Apartamento 312 com 27 m², posição de fundos. Prédio residencial de 1955 na orla de Copacabana com entrada suplementar pela Av. N. Sra. de Copacabana nº 1241. Matrícula nº 29.681 do 5º RGI/RJ.',
        p1Label: '1ª Praça (02/09/2026):',
        p1Val: 'R$ 450.100,00',
        p2Label: '2ª Praça (14/09/2026):',
        p2Val: 'R$ 225.100,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-3806-apto-312/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20312%20na%20Avenida%20Atl%C3%A2ntica%203806%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Leilão Judicial de Apartamento na Rua São Francisco Xavier nº 90 — Apto 503',
        desc: 'Apartamento 503 com 93 m² de área edificada e 2 vagas de garagem. Edifício de 7 andares mais cobertura construído em 1971. Matrícula nº 37.650 do 11º RGI/RJ.',
        p1Label: '1ª Praça (09/09/2026):',
        p1Val: 'R$ 740.100,00',
        p2Label: '2ª Praça (11/09/2026):',
        p2Val: 'R$ 370.100,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-sao-francisco-xavier-90-apto-503/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20503%20na%20Rua%20S%C3%A3o%20Francisco%20Xavier%2090%20na%20Tijuca.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Leilão Judicial de Cobertura na Rua Delgado de Carvalho nº 75 — Cobertura 01',
        desc: 'Cobertura 01 com 106 m² de área edificada e vaga de garagem. Edifício de 1965 com portaria com piso em mármore e entradas laterais de garagem na Tijuca. Matrícula nº 99.412 do 11º RGI/RJ.',
        p1Label: '1ª Praça (12/08/2026):',
        p1Val: 'R$ 668.000,00',
        p2Label: '2ª Praça (26/08/2026):',
        p2Val: 'R$ 334.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/cobertura/rua-delgado-de-carvalho-75-cobertura-01/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20da%20Cobertura%2001%20na%20Rua%20Delgado%20de%20Carvalho%2075%20na%20Tijuca.'
      },
      {
        tag: 'Hotel / Comercial • Copacabana/RJ',
        title: 'Leilão Judicial de Prédio Hoteleiro na Rua Tonelero nº 202 — Copacabana',
        desc: 'Edifício comercial e hoteleiro com 3.760 m² de área edificada. Próximo ao Metrô Siqueira Campos e à Praia de Copacabana. Matrícula nº 4.864 do 5º RGI/RJ.',
        p1Label: '1ª Praça (06/10/2026):',
        p1Val: 'R$ 45.836.204,80',
        p2Label: '2ª Praça (08/10/2026):',
        p2Val: 'R$ 22.918.102,40',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/hotel/rua-tonelero-202/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20pr%C3%A9dio%20hoteleiro%20na%20Rua%20Tonelero%20202%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Leilão Judicial de Apartamento na Rua Santa Clara nº 431 — Apto 704 (Mirante de Copacabana)',
        desc: 'Apartamento residencial de 86 m² com condomínio fechado e portaria. Próximo ao Metrô Siqueira Campos e com comércio farto. Matrícula nº 35.666 do 5º RGI/RJ.',
        p1Label: '1ª Praça (09/09/2025):',
        p1Val: 'R$ 635.000,00',
        p2Label: '2ª Praça (11/09/2025):',
        p2Val: 'R$ 317.500,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-santa-clara-431-apto-704/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20na%20Rua%20Santa%20Clara%20431%20Apto%20704%20em%20Copacabana.'
      },
      {
        tag: 'Residencial • Laranjeiras/RJ',
        title: 'Leilão Judicial de Apartamento em Laranjeiras na Rua das Laranjeiras nº 347/407',
        desc: 'Apartamento de 115 m² com 3 quartos, lavabo, sala com piso em madeira e área de serviço, de fundos para a Rua Sebastião Lacerda. Edifício de 1961 com portaria 24h em ótimo estado. Matrícula nº 17752 do 9º RGI/RJ e IPTU nº 0.355.985-3.',
        p1Label: '1ª Praça (08/09/2026):',
        p1Val: 'R$ 950.000,00',
        p2Label: '2ª Praça (10/09/2026):',
        p2Val: 'R$ 475.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/laranjeiras/apartamento/rua-das-laranjeiras-347/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20na%20Rua%20das%20Laranjeiras%20347%20em%20Laranjeiras.'
      },
      {
        tag: 'Residencial • Rio Comprido/RJ',
        title: 'Leilão Judicial de Apartamento em Rio Comprido na Rua Haddock Lobo nº 117/301',
        desc: 'Apartamento de 74 m² com 3 quartos no 3º andar de frente para a Rua Haddock Lobo. Prédio com 10 andares, portaria reformada até 22h, elevadores, salão de festas e câmeras de segurança. Próximo ao metrô e comércio. Matrícula nº 86.727 (11º RGI/RJ) e IPTU nº 0.699.815-7.',
        p1Label: '1ª Praça (20/08/2026):',
        p1Val: 'R$ 517.827,00',
        p2Label: '2ª Praça (27/08/2026):',
        p2Val: 'R$ 258.913,50',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/rio-comprido/apartamento/rua-haddock-lobo-117-apto-301/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20na%20Rua%20Haddock%20Lobo%20117%20Apto%20301.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Leilão Judicial de Apartamento na Tijuca na Rua Uruguai nº 94/104',
        desc: 'Apartamento de 40 m² de fundos com sala, 1 quarto, banheiro social, dependências completas, sacada e 1 vaga de garagem. Edifício de 1985 com portaria 24h, 2 elevadores, playground e salão de festas a passos do metrô Uruguai. Matrícula nº 19.467 (10º RGI/RJ) e IPTU nº 1.723.354-5.',
        p1Label: '1ª Praça (31/08/2026):',
        p1Val: 'R$ 250.000,00',
        p2Label: '2ª Praça (02/09/2026):',
        p2Val: 'R$ 125.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-uruguai-94-apto-104/',
        waText: 'Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20leil%C3%A3o%20do%20apartamento%20na%20Rua%20Uruguai%2094%20Apto%20104.'
      }
    ]
  },
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Áreas de Actuación',
    residentialCommercial: 'Residencial y Comercial',
    heroTitle: 'Asesoría Jurídica en Subastas de Inmuebles',
    heroDesc: 'La adjudicación de apartamentos, locales y oficinas en Río de Janeiro exige auditoría previa detallada de la matrícula, verificación de deudas de cuotas condominiales y análisis de riesgo procesal para garantizar una posesión rápida e inversión segura.',
    stat1Title: 'Río de Janeiro',
    stat1Desc: 'Enfoque en inmuebles residenciales y comerciales en RJ',
    stat2Title: 'Dictamen Técnico',
    stat2Desc: 'Evaluación jurídica y matriz de riesgos',
    badgeLocation: 'Río de Janeiro / RJ',
    badgeDesc: 'Análisis previo de edictos y deudas de condominio',
    consultWA: 'Consultar con Especialista por WhatsApp',
    interactiveTag: 'Metodología Interactiva',
    interactiveTitle: '4 Pilares de la Auditoría de Subasta Judicial',
    interactiveSub: 'Haga clic en cada etapa para examinar los puntos críticos auditados en nuestro dictamen previo.',
    issuedNotice: 'Dictamen emitido entre 24h y 48h',
    checklist: [
      {
        title: '1. Examen de Matrícula y Cargas Reales',
        desc: 'Revisión detallada de hipotecas, embargos, indisponibilidades y anotaciones en el Registro de la Propiedad.',
        risk: 'Análisis de Cargas'
      },
      {
        title: '2. Análisis de Deudas Propter Rem',
        desc: 'Verificación de atribución de responsabilidad por deudas tributarias y condominiales según el edicto y el art. 130 del CTN.',
        risk: 'Análisis de Pasivos'
      },
      {
        title: '3. Regularidad Procesal de Notificaciones',
        desc: 'Verificación de la citación y notificación válida del ejecutado, copropietarios y acreedores garantizados.',
        risk: 'Verificación de Nulidades'
      },
      {
        title: '4. Procedimiento de Adjudicación e Imisión',
        desc: 'Seguimiento de actos judiciales y notariales para la expedición de la carta de adjudicación e imisión en la posesión.',
        risk: 'Procedimiento de Posesión'
      }
    ],
    auctionsTitle: 'Subastas en Análisis',
    auctionsSub: 'Panel de consulta y seguimiento técnico de oportunidades bajo auditoría jurídica.',
    filterAll: 'Todos',
    filterRes: 'Residencial',
    filterCom: 'Comercial',
    auditedTag: 'Oportunidad Auditada',
    lawsuitTag: 'Proceso TJRJ',
    legalAuditLabel: 'Auditoría Jurídica:',
    auditStatusDone: 'Concluida • Dictamen Disponible',
    viewAnalysisReport: 'Ver Análisis del Edicto y Reporte',
    requestOpinionWA: 'Solicitar Dictamen por WhatsApp',
    collapseAuctions: 'Replegar Oportunidades',
    expandAuctions: 'Ver Más Oportunidades en Análisis (+6 inmuebles)',
    noCommercialTitle: 'Sin lotes comerciales abiertos en este momento',
    noCommercialDesc: 'Nuestro equipo realiza análisis bajo demanda para inmuebles comerciales y corporativos en Río de Janeiro.',
    archiveTitle: 'Acervo e Historial de Análisis Técnicos',
    archiveSub: 'Registro institucional y directrices de divulgación de dictámenes y estudios de caso en subastas inmobiliarias.',
    ethicsTitle: 'Conformidad Ética y Protección de Datos',
    ethicsText: 'En estricta observancia del Código de Ética de la OAB y las normas de protección de datos, el acervo de dictámenes jurídicos y reportes de auditoría se mantiene bajo secreto profesional. Esta sección está destinada al registro de notas técnicas descaracterizadas y jurisprudencia aplicada a subastas inmobiliarias en el Estado de Río de Janeiro.',
    ethicsFootnote: 'Dictámenes individualizados emitidos mediante contratación previa',
    relatedTitle: 'Contenidos y Servicios Relacionados',
    relatedLinks: [
      { title: 'Derecho Inmobiliario y Negocios', desc: 'Asesoría en compra, venta y estructuración patrimonial.', path: '/direito-imobiliario/' },
      { title: 'Guía de Compra y Venta Segura', desc: 'Paso a paso jurídico para adquisiciones en Río de Janeiro.', path: '/blog/guia-compra-venda-segura-imoveis-rj/' },
      { title: 'Due Diligence Inmobiliaria', desc: 'Auditoría de certificados, cargas y riesgos contractuales.', path: '/blog/direito-imobiliario-due-diligence-compra/' },
      { title: 'Subasta por Deuda de Condominio', desc: 'Entienda cómo funciona la subasta judicial de deudas de cuotas.', path: '/blog/apartamento-leilao-debito-condominial/' },
      { title: 'Derecho Patrimonial y Sucesorio', desc: 'Protección, planificación de bienes y regularización.', path: '/direito-patrimonial-sucessorio/' },
      { title: 'Contratos de Alquiler y Garantías', desc: 'Análisis de cláusulas esenciales y seguridad contractual.', path: '/blog/clausulas-fundamentais-contrato-locacao/' }
    ],
    faqHeaderTitle: 'Preguntas Frecuentes (FAQ)',
    faqHeaderSub: 'Dudas comunes sobre auditoría de edictos, adjudicación e imisión en la posesión en RJ',
    ctaHeaderTitle: 'Hable Con Nuestro Equipo Especializado',
    ctaHeaderDesc: 'El despacho Soares Martins Advogados ofrece auditoría jurídica completa y soporte especializado para garantizar la máxima seguridad en sus decisiones e inversiones en subastas inmobiliarias en Río de Janeiro.',
    ctaWAButton: 'Atención por WhatsApp',
    ctaEmailButton: 'Enviar Email Corporativo',
    ctaFooterNote: 'Atención presencial en Ipanema/RJ y soporte jurídico virtual para todo Brasil.',
    auctionItems: [
      {
        tag: 'Residencial • Botafogo (RJ)',
        title: 'Subasta Judicial de Apartamento en Botafogo — Calle Lauro Müller nº 36 — Apto 109',
        desc: 'Apartamento residencial de 38 m² de superficie edificada privativa correspondiente a la unidad 109, de orientación interior y desocupado de personas, en Calle Lauro Müller nº 36, Botafogo, Zona Sur de Río de Janeiro. Edificio exclusivamente residencial de 16 plantas con 12 apartamentos por piso, 3 ascensores modernizados, portería y vigilancia por cámaras 24h, salón de fiestas en la azotea. Inscrito en el 3º Registro bajo Matrícula nº 56.285 e IPTU 1205828-5. Tasación judicial de R$ 500.000,00. 1ª Subasta el 13/11/2026 a las 11:00h por R$ 500.000,00 y 2ª Subasta el 23/11/2026 a las 11:00h con puja inicial del 50% por R$ 250.000,00 (~R$ 6.578,95/m² en Botafogo).',
        p1Label: '1ª Subasta (13/11/2026):',
        p1Val: 'R$ 500.000,00',
        p2Label: '2ª Subasta (23/11/2026):',
        p2Val: 'R$ 250.000,00 (Puja inicial 2ª Subasta)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-36-apto-109/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20109%20en%20Calle%20Lauro%20M%C3%BCller%2036%20en%20Botafogo%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Botafogo (RJ)',
        title: 'Subasta Judicial de Apartamento en Botafogo — Rua Álvaro Ramos nº 405 — Bloque 1, Apto 1804',
        desc: 'Apartamento residencial de 89 m² de superficie privativa situado en la 18ª planta (unidad 1804) del Bloque 01 en un tradicional complejo residencial de 1985 en Rua Álvaro Ramos nº 405, Botafogo, Zona Sur de Río de Janeiro. Vivienda en planta alta con vistas abiertas y excelente luminosidad, con 2 dormitorios (1 suite), baño social, salón comedor, cocina, dependencias completas de servicio y lavadero, con derecho a 1 plaza de garaje. Condominio con 2 bloques de 18 plantas (4 viviendas por planta), 4 ascensores, portería 24h, parque infantil (playground) y salón de eventos. 3º Registro Matrícula 38.417 e IPTU nº 1.723.344-6. 1ª Subasta el 04/11/2026 a las 12:00h por R$ 1.068.000,00 y 2ª Subasta el 26/11/2026 a las 12:00h con puja inicial de R$ 534.000,00 (~R$ 6.000,00/m² en Botafogo).',
        p1Label: '1ª Subasta (04/11/2026):',
        p1Val: 'R$ 1.068.000,00',
        p2Label: '2ª Subasta (26/11/2026):',
        p2Val: 'R$ 534.000,00 (Puja inicial 2ª Subasta)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-alvaro-ramos-405-bloco-1-apto-1804/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%201804%20del%20Bloque%201%20en%20Rua%20%C3%81lvaro%20Ramos%20405%20en%20Botafogo%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Flamengo / Primera Línea (RJ)',
        title: 'Subasta Judicial de Apartamento en Flamengo — Praia do Flamengo nº 12 — Apto 306',
        desc: 'Apartamento residencial conjugado de 40 m² de superficie privativa dividido en salón, dormitorio, cocina y baño en la 3ª planta (unidad 306) del histórico Edifício Rio Carioca, construido en 1940 en la emblemática Praia do Flamengo nº 12, Flamengo/RJ. Inmueble con razonable estado de conservación según su antigüedad, provisto de interfono, sin garaje. Edificio con 2 bloques de 13 plantas (270 apartamentos), cuatro ascensores y portería 24 horas, sin áreas de ocio. Registrado en el 9º Registro bajo Matrícula 154.629 e IPTU nº 0.258.058-7. 1ª Subasta el 26/10/2026 por R$ 627.898,69 y 2ª Subasta el 29/10/2026 con puja inicial de R$ 313.949,34 (~R$ 7.848,73/m² en primera línea).',
        p1Label: '1ª Subasta (26/10/2026):',
        p1Val: 'R$ 627.898,69',
        p2Label: '2ª Subasta (29/10/2026):',
        p2Val: 'R$ 313.949,34 (Puja inicial 2ª Subasta)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/praia-do-flamengo-12-apto-306/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20306%20en%20Praia%20do%20Flamengo%2012%20(Edif%C3%ADcio%20Rio%20Carioca)%20en%20Flamengo%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Centro / Bairro de Fátima (RJ)',
        title: 'Subasta Judicial de Apartamento en Centro / Bairro de Fátima — Avenida Nossa Senhora de Fátima nº 60 — Apto 501',
        desc: 'Apartamento residencial de 67 m² de superficie edificada privativa en 5ª planta (unidad 501), de frente para la calle principal en tradicional edificio construido en 1950 en la apacible Avenida Nossa Senhora de Fátima nº 60, en el arbolado Bairro de Fátima / Centro de Río de Janeiro. Inmueble en buen estado de conservación, compuesto por 3 dormitorios, salón amplio en porcelanato con ventana de aluminio, cocina con encimera de aluminio, área de servicio independiente y baño con box blindex. Edificio servido por 2 ascensores (4 personas c/u), portero/conserje presencial y circuito cerrado de TV (CCTV). Registrado en el 2º Registro bajo Matrícula 05392 e IPTU nº 0.580.436-4. 1ª Subasta el 26/10/2026 por R$ 420.592,00 y 2ª Subasta el 28/10/2026 con puja inicial de R$ 210.296,00 (~R$ 3.138,75/m²).',
        p1Label: '1ª Subasta (26/10/2026):',
        p1Val: 'R$ 420.592,00',
        p2Label: '2ª Subasta (28/10/2026):',
        p2Val: 'R$ 210.296,00 (Puja inicial 2ª Subasta)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/avenida-nossa-senhora-de-fatima-60-apto-501/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20501%20en%20Avenida%20Nossa%20Senhora%20de%20F%C3%A1tima%2060%20en%20Centro%20/%20Bairro%20de%20F%C3%A1tima%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Copacabana / Posto 6 (RJ)',
        title: 'Subasta Judicial de Apartamento en Copacabana — Rua Raul Pompéia nº 240 — Apto 702',
        desc: 'Apartamento residencial exterior de 143 m² en 7ª planta (unidad 702) de un clásico edificio construido en 1957 en la cotizada Rua Raul Pompéia nº 240, en Posto 6 de Copacabana, a pasos de Arpoador e Ipanema. Consta de 3 dormitorios (dos de ellos con ventanas a la calle), antesala y salón amplio con ventanas a la calle, 2 baños sociales, cocina y baño de servicio. Dispone de conserjería 24 horas, ascensor y garaje. Inscrito en el 5º Registro bajo la Matrícula 26.715 e IPTU 0.277.837-1. 1ª Subasta en 03/11/2026 por R$ 1.300.000,00 y 2ª Subasta en 05/11/2026 con lance inicial de R$ 650.000,00 (~R$ 4.545/m²).',
        p1Label: '1ª Subasta (03/11/2026):',
        p1Val: 'R$ 1.300.000,00',
        p2Label: '2ª Subasta (05/11/2026):',
        p2Val: 'R$ 650.000,00 (Lance inicial 2ª Subasta)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-raul-pompeia-240-apto-702/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20702%20de%20Rua%20Raul%20Pomp%C3%A9ia%20240%20en%20Copacabana%20(Posto%206)%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Barra da Tijuca/RJ',
        title: 'Subasta Judicial de Apartamento en Barra da Tijuca — Avenida Afonso de Taunay nº 631 — Apto 101',
        desc: 'Amplio apartamento residencial de 185 m² de superficie privativa situado en la 1ª planta (unidad 101) de un selecto edificio residencial de 3 plantas en la arbolada Avenida Afonso de Taunay nº 631, en Jardim Oceânico, Barra da Tijuca. Dispone de dos plazas de garaje asignadas. El edificio no cuenta con áreas comunes de ocio ni servicios, lo que proporciona alta privacidad y cuotas de mantenimiento mensual reducidas. Excelente ubicación a escasos metros del Metro Jardim Oceânico (Línea 4), polo gastronómico de Olegário Maciel y playas. Tasación oficial de R$ 1.850.000,00 con 2ª Subasta al 50% por R$ 925.000,00 (~R$ 5.000/m²). 9º Registro Matrícula 165.384 e IPTU 186.284.02.',
        p1Label: '1ª Subasta (15/10/2026):',
        p1Val: 'R$ 1.850.000,00',
        p2Label: '2ª Subasta (20/10/2026):',
        p2Val: 'R$ 925.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-afonso-de-taunay-631-apto-101/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20101%20de%20Avenida%20Afonso%20de%20Taunay%20631%20en%20Barra%20da%20Tijuca%20(Jardim%20Oce%C3%A2nico)%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • São Conrado/RJ',
        title: 'Subasta Judicial de Apartamento Dúplex en São Conrado — Estrada das Canoas nº 722 — Bloque 2, Apto 109',
        desc: 'Apartamento de posición interior situado en el Bloque 2 (unidad 109) del tradicional Conjunto Residencial Recreio das Canoas (1960) en la bucólica Estrada das Canoas nº 722, en São Conrado, Zona Sur de Río de Janeiro. Inmueble con modificación estructural mediante excavación de aprox. 2 metros bajo el suelo original, configurando estilo dúplex: planta inferior con dormitorio íntimo y planta superior con salón, cocina y baño completo en mármol Carrara con hidromasaje. Condominio club integrado en la Mata Atlántica con restaurante, piscina, barbacoa, pista multideporte, campo de tierra, gimnasio, salón de eventos, lavandería y portería 24h. Tasación judicial de R$ 728.710,50 y 2ª Subasta al 50% por R$ 364.355,25. 5º Registro Matrícula nº 24.339 e IPTU nº 0.385.263-9.',
        p1Label: '1ª Subasta (04/11/2026):',
        p1Val: 'R$ 728.710,50',
        p2Label: '2ª Subasta (25/11/2026):',
        p2Val: 'R$ 364.355,25 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/sao-conrado/apartamento/estrada-das-canoas-722-bloco-2-apto-109/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20109%20del%20Bloque%202%20en%20Conjunto%20Residencial%20Recreio%20das%20Canoas%20(Estrada%20das%20Canoas%20722)%20en%20S%C3%A3o%20Conrado%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Leme/RJ',
        title: 'Subasta Judicial de Apartamento en Leme — Rua Gustavo Sampaio nº 723 — Apto 601',
        desc: 'Apartamento residencial de 95 m² de superficie privativa en la 6ª planta (unidad 601) del tradicional Edificio Waldorf (construcción de 1952) en Rua Gustavo Sampaio nº 723, en el selecto barrio de Leme, Zona Sur de Río de Janeiro. Edificio de 12 plantas construido sobre la alineación de la vía, con 3 ascensores (2 sociales y 1 de servicio), garaje colectivo, portería 24 horas y circuito cerrado de TV (sin salón de fiestas ni zona de juegos). Tasación judicial de R$ 1.400.000,00 y 2ª Subasta al 50% por R$ 700.000,00 (~R$ 7.368,42/m²). 5º Registro Matrícula nº 87.664 e IPTU nº 0.578.298-2.',
        p1Label: '1ª Subasta (05/11/2026):',
        p1Val: 'R$ 1.400.000,00',
        p2Label: '2ª Subasta (10/11/2026):',
        p2Val: 'R$ 700.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leme/apartamento/rua-gustavo-sampaio-723-apto-601/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20601%20del%20Edificio%20Waldorf%20en%20Rua%20Gustavo%20Sampaio%20723%20en%20Leme%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Subasta Judicial de Apartamento en Botafogo — Rua General Góes Monteiro nº 8 — Bloque F, Apto 203',
        desc: 'Apartamento de 94 m² en 2ª planta (unidad 203 del Bloque F) con vistas despejadas al Pan de Azúcar, 3 dormitorios, 2 baños sociales, salón, cocina, lavadero, dependencia de servicio completa, 1 plaza cubierta y 1 plaza para invitados. Complejo de 1974 con 7 torres de 25 plantas (4 aptos/planta), 2 piscinas, bosque privado, pista deportiva, parque infantil, tienda interna, salones de fiestas independientes, aparcacoches y porterías 24h. Tasación de R$ 1.128.000,00 y 2ª Subasta al 50% por R$ 564.000,00 (~R$ 6.000,00/m²). 3º Registro Matrícula nº 52.894 e IPTU nº 1.245.048-2.',
        p1Label: '1ª Subasta (19/10/2026):',
        p1Val: 'R$ 1.128.000,00',
        p2Label: '2ª Subasta (22/10/2026):',
        p2Val: 'R$ 564.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-general-goes-monteiro-8-bloco-f-apto-203/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20203%20del%20Bloque%20F%20en%20Rua%20General%20G%C3%B3es%20Monteiro%208%20en%20Botafogo%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Santa Rosa / Niterói/RJ',
        title: 'Subasta Judicial de Apartamento en Santa Rosa / Niterói — Rua Vereador Duque Estrada nº 169 — Bloque 3, Apto 402',
        desc: 'Amplio apartamento residencial de 138 m² privativos en 4ª planta (Apto 402 del Bloque 3) en Rua Vereador Duque Estrada nº 169, Santa Rosa, Niterói/RJ. Distribuido en living y comedor, 2 dormitorios, baño social, cocina con office, balcón, área de servicio, dormitorio y baño de servicio (dependencia completa), con derecho a 1 plaza de garaje. Condominio con 4 edificios, fachada de gresite, ascensor, portería 24h, cámaras CCTV, estacionamiento, jardines, 2 piscinas (adultos e infantil), barbacoa, salón de fiestas, sala de juegos y gimnasio. Tasación judicial de R$ 470.000,00 y 2ª Subasta al 50% por R$ 235.000,00 (~R$ 1.702,89/m²). 8º Registro Matrícula nº 15.819 e IPTU nº 824741.',
        p1Label: '1ª Subasta (22/09/2026):',
        p1Val: 'R$ 470.000,00',
        p2Label: '2ª Subasta (24/09/2026):',
        p2Val: 'R$ 235.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/niteroi/apartamento/rua-vereador-duque-estrada-169-bloco-3-apto-402/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20402%20Bloque%203%20en%20Rua%20Vereador%20Duque%20Estrada%20169%20en%20Santa%20Rosa%20-%20Niter%C3%B3i.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Copacabana — Rua Barão de Ipanema nº 105 — Apto 604',
        desc: 'Apartamento residencial de 70 m² de superficie edificada en 6ª planta (Apto 604) en el Edificio Carmem D´Almeida, Rua Barão de Ipanema nº 105, Copacabana, Río de Janeiro. Edificio residencial de 1971 con portería 24 horas, 3 ascensores (dos sociales y uno de servicio), zona recreativa infantil (play) y cámaras CCTV. Tasación judicial de R$ 750.000,00 y 2ª Subasta al 50% por R$ 375.000,00 (~R$ 5.357,14/m²). 5º Registro Matrícula nº 31.436 e IPTU nº 0.984.275-8.',
        p1Label: '1ª Subasta (14/10/2026):',
        p1Val: 'R$ 750.000,00',
        p2Label: '2ª Subasta (21/10/2026):',
        p2Val: 'R$ 375.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-barao-de-ipanema-105-apto-604/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20604%20en%20Rua%20Bar%C3%A3o%20de%20Ipanema%20105%20en%20Copacabana.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Copacabana — Rua Siqueira Campos nº 143 — Apto 740',
        desc: 'Apartamento residencial de 44 m² de superficie edificada en posición interior (fundos) en la 7ª planta (Apto 740) en Rua Siqueira Campos nº 143, Copacabana, Río de Janeiro. Edificio de 1970 con fachada de mortero, ventanas de madera, locales comerciales en planta baja, 2 ascensores para 7 personas y portal sencillo con suelo de marmorita. Sin plaza de garaje. Tasación judicial de R$ 390.000,00 y 2ª Subasta al 50% por R$ 195.000,00 (~R$ 4.431,81/m²). 5º Registro Matrícula nº 27773 e IPTU nº 046100-9.',
        p1Label: '1ª Subasta (05/10/2026):',
        p1Val: 'R$ 390.000,00',
        p2Label: '2ª Subasta (08/10/2026):',
        p2Val: 'R$ 195.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-siqueira-campos-143-apto-740/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20740%20en%20Rua%20Siqueira%20Campos%20143%20en%20Copacabana.'
      },
      {
        tag: 'Residencial • Centro/RJ',
        title: 'Subasta Judicial de Apartamento en el Centro de Río — Rua Evaristo da Veiga nº 21 — Apto 503',
        desc: 'Apartamento residencial compacto de 27 m² en la 5ª planta (Apto 503) en Rua Evaristo da Veiga nº 21, en el Centro Histórico de Río de Janeiro, junto a Cinelândia, Passeio Público y Lapa. Edificio de 80 años con 7 plantas, 49 unidades mixtas, 2 tiendas en planta baja, puerta de hierro, vestíbulo en granito negro, 2 ascensores nuevos y cámaras CCTV en todas las plantas y ascensores. Tasación de R$ 160.275,10 y 2ª Subasta al 50% por R$ 80.137,55 (~R$ 2.968,05/m²). 7º Registro Matrícula nº 19262-2 e IPTU nº 0704066-0.',
        p1Label: '1ª Subasta (26/10/2026):',
        p1Val: 'R$ 160.275,10',
        p2Label: '2ª Subasta (05/11/2026):',
        p2Val: 'R$ 80.137,55 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-evaristo-da-veiga-21-apto-503/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20503%20en%20Rua%20Evaristo%20da%20Veiga%2021%20en%20Centro%20de%20R%C3%ADo.'
      },
      {
        tag: 'Residencial • Jardim Guanabara/RJ',
        title: 'Subasta Judicial de Apartamento en Jardim Guanabara — Rua Breno Guimarães nº 106 — Apto 105',
        desc: 'Apartamento residencial de 122 m² de superficie privativa en la 1ª planta (Apto 105) en Rua Breno Guimarães nº 106, en el cotizado barrio residencial de Jardim Guanabara, Ilha do Governador, Río de Janeiro. Condominio con parque infantil (playground) y salón de fiestas. Incluye derecho a 2 plazas de garaje. Extraordinaria oportunidad con 50% de descuento (~R$ 2.540/m² con 2 plazas en 2ª subasta). Tasación oficial de R$ 620.000,00 y 2ª Subasta al 50% por R$ 310.000,00. 11º Registro Matrícula nº 86.056 e IPTU nº 1.898.000-3.',
        p1Label: '1ª Subasta (19/11/2026):',
        p1Val: 'R$ 620.000,00',
        p2Label: '2ª Subasta (26/11/2026):',
        p2Val: 'R$ 310.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/jardim-guanabara/apartamento/rua-breno-guimaraes-106-apto-105/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20105%20en%20Rua%20Breno%20Guimar%C3%A3es%20106%20en%20Jardim%20Guanabara%20(Ilha%20do%20Governador).'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Subasta Judicial de Apartamento en Tijuca — Rua Barão de Itapagipe nº 417 — Bloque A, Apto 501',
        desc: 'Apartamento residencial de 50 m² de superficie privativa, orientación frontal en la 5ª planta (Apto 501) del Bloque A en Rua Barão de Itapagipe nº 417, Tijuca, Zona Norte de Río de Janeiro. Inmueble de frente con excelente ventilación e iluminación natural. Ubicación estratégica cercana a estaciones de metro Afonso Pena y São Francisco Xavier, comercio y colegios. Gran oportunidad con 50% de descuento (~R$ 2.800/m² en 2ª subasta). Tasación oficial de R$ 280.000,00 y 2ª Subasta al 50% por R$ 140.000,00. 11º Registro Matrícula nº 3553 e IPTU nº 11509312.',
        p1Label: '1ª Subasta (30/09/2026):',
        p1Val: 'R$ 280.000,00',
        p2Label: '2ª Subasta (07/10/2026):',
        p2Val: 'R$ 140.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-barao-de-itapagipe-417-bloco-a-apto-501/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20501%20bloque%20A%20en%20Rua%20Bar%C3%A3o%20de%20Itapagipe%20417%20en%20Tijuca.'
      },
      {
        tag: 'Residencial • Leblon/RJ',
        title: 'Subasta Judicial de Apartamento en Leblon — Rua General Urquiza nº 117 — Apto 501',
        desc: 'Apartamento residencial de 75 m² en la 5ª planta (Apto 501) del Edificio 24 de Outubro (1953) en Rua General Urquiza nº 117, en el exclusivo barrio de Leblon, Zona Sur de Río de Janeiro. Consta de salón en dos ambientes (suelo cerámico), dos dormitorios (suelo de parquet/taco), baño completo, cocina, lavadero y baño de servicio. Sin plaza de garaje. Extraordinaria oportunidad en el metro cuadrado más cotizado de Brasil (~R$ 9.660/m² en 2ª subasta). Tasación oficial de R$ 1.449.000,00 y 2ª Subasta al 50% por R$ 724.500,00. 2º Registro Matrícula nº 995653 e IPTU nº 0642600-1.',
        p1Label: '1ª Subasta (28/09/2026):',
        p1Val: 'R$ 1.449.000,00',
        p2Label: '2ª Subasta (01/10/2026):',
        p2Val: 'R$ 724.500,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-general-urquiza-117-apto-501/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20501%20en%20Rua%20General%20Urquiza%20117%20en%20Leblon.'
      },
      {
        tag: 'Residencial • Laranjeiras/RJ',
        title: 'Subasta Judicial de Apartamento en Laranjeiras — Rua das Laranjeiras nº 336 — Apto 826',
        desc: 'Apartamento residencial compacto de 24 m² en la 8ª planta del Bloque 1 (Entrada B) en la tradicional Rua das Laranjeiras nº 336, Zona Sur de Río de Janeiro. Edificio de 1972 en buen estado con conserjería 24h, cámaras, barbacoa, capilla para residentes y bicicletero. Inmueble cerrado y sin derecho a plaza de garaje. Gran oportunidad para alquiler o vivienda (~R$ 6.875/m² en 2ª subasta). Tasación de R$ 330.000,00 y 2ª Subasta al 50% por R$ 165.000,00. Matrícula nº 91.053 (9º Registro) e IPTU 0.986.826-6.',
        p1Label: '1ª Subasta (22/09/2026):',
        p1Val: 'R$ 330.000,00',
        p2Label: '2ª Subasta (23/09/2026):',
        p2Val: 'R$ 165.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/laranjeiras/apartamento/rua-das-laranjeiras-336-bloco-1-apto-826/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20826%20en%20Rua%20das%20Laranjeiras%20336%20en%20Laranjeiras%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Centro/RJ',
        title: 'Subasta Judicial de Apartamento en Centro de Río — Avenida Rio Branco nº 185 — Apto 1224',
        desc: 'Apartamento residencial de 33 m² en la planta 12 del emblemático Edificio Marquês do Herval, en la confluencia de Avenida Rio Branco nº 185 con Avenida Almirante Barroso. Edificio de 21 plantas con 8 ascensores modernizados, galería comercial con 10 tiendas (librerías, cafeterías, bistró), banco y farmacia. Vigilancia 24h, cámaras y pasillos amplios en mármol y madera. Oportunidad en 2ª subasta (~R$ 2.847/m²). Tasación de R$ 187.941,39 y 2ª Subasta al 50% por R$ 93.970,70. Matrícula nº 39.611 (7º Registro) e IPTU 0.690.969-1.',
        p1Label: '1ª Subasta (05/10/2026):',
        p1Val: 'R$ 187.941,39',
        p2Label: '2ª Subasta (08/10/2026):',
        p2Val: 'R$ 93.970,70 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/avenida-rio-branco-185-apto-1224/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%201224%20en%20Avenida%20Rio%20Branco%20185%20en%20Centro%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Copacabana — Rua Barata Ribeiro nº 334 — Apto 303',
        desc: 'Apartamento residencial compacto de 33 m² en el centro de Copacabana, a tres calles de la playa y cerca del metro. Edificio de 12 plantas con 2 ascensores, 37 viviendas en total (4 por planta del 2º al 10º piso y ático), portería sencilla con suelo de piedra y portón de aluminio, terraza libre y estado de conservación regular. Excelente ocasión para inversión o alquiler (~R$ 7.884/m² en 2ª subasta). Tasación de R$ 371.704,75 y 2ª Subasta al 70% por R$ 260.193,33. Matrícula nº 102.946 (5º Registro) e IPTU 0904756-4.',
        p1Label: '1ª Subasta (28/09/2026):',
        p1Val: 'R$ 371.704,75',
        p2Label: '2ª Subasta (01/10/2026):',
        p2Val: 'R$ 260.193,33 (70% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-barata-ribeiro-334-apto-303/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20303%20en%20Rua%20Barata%20Ribeiro%20334%20en%20Copacabana%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Ipanema/RJ',
        title: 'Subasta Judicial de Apartamento en Ipanema — Rua Vinícius de Moraes nº 71 — Apto 402',
        desc: 'Apartamento residencial de 105 m² con 1 plaza de garaje en escritura en el exclusivo Edificio Acapulco, en la prestigiosa Rua Vinícius de Moraes, a pasos de la playa de Ipanema (Posto 9). Edificio de 1972 con 8 plantas y solo 2 vecinos por planta (16 viviendas en total), seguridad 24h, 2 ascensores, parque infantil y salón social. La vivienda se encuentra cerrada. Tasación de R$ 2.500.000,00 y 2ª Subasta al 50% por R$ 1.250.000,00 (~R$ 11.904/m²). Matrícula nº 32.817 (5º Registro) e IPTU 1.227.500-4.',
        p1Label: '1ª Subasta (28/09/2026):',
        p1Val: 'R$ 2.500.000,00',
        p2Label: '2ª Subasta (30/09/2026):',
        p2Val: 'R$ 1.250.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/ipanema/apartamento/rua-vinicius-de-moraes-71-apto-402/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20402%20en%20Rua%20Vin%C3%ADcius%20de%20Moraes%2071%20en%20Ipanema%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Copacabana — Rua Duvivier nº 50 — Apto 201',
        desc: 'Apartamento exterior de 102 m² a solo dos manzanas de la playa de Copacabana. Salón amplio con parquet, balcón con cortina de cristal, 2 dormitorios, baño social, cocina, lavadero y dependencia de servicio completa reversible reformada. Edificio clásico de 1938 de 8 plantas, 3 por planta, 2 ascensores, salón de fiestas, cámaras y portería de lunes a sábado de 9h a 21h. Sin garaje. Tasación de R$ 1.085.883,50 y 2ª Subasta al 50% por R$ 542.941,75 (~R$ 5.320/m²). Matrícula nº 52.950 (2º Registro) e IPTU 0.566.818-1.',
        p1Label: '1ª Subasta (22/09/2026):',
        p1Val: 'R$ 1.085.883,50',
        p2Label: '2ª Subasta (23/09/2026):',
        p2Val: 'R$ 542.941,75 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-duvivier-50-apto-201/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20201%20en%20Rua%20Duvivier%2050%20en%20Copacabana%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Humaitá/RJ',
        title: 'Subasta Judicial de Apartamento en Humaitá — Rua Davi Campista nº 296 — Apto 603',
        desc: 'Apartamento de 135 m² con 3 dormitorios (1 con balcón privado), salón con balcón, suelo de parquet de madera noble, baño social clásico, cocina y dependencia de servicio completa. Derecho a 1 plaza de garaje en edificio con portería 24 horas y zona de ocio en Humaitá. Necesita reforma general (excelente ocasión para retrofit con adquisición a ~R$ 7.200/m² en 2ª subasta). Tasación de R$ 1.946.197,60 y 2ª Subasta al 50% por R$ 973.098,80. Matrícula en el 2º RGI e IPTU 0520187-6.',
        p1Label: '1ª Subasta (21/09/2026):',
        p1Val: 'R$ 1.946.197,60',
        p2Label: '2ª Subasta (24/09/2026):',
        p2Val: 'R$ 973.098,80 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/humaita/apartamento/rua-davi-campista-296-apto-603/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20603%20en%20Rua%20Davi%20Campista%20296%20en%20Humait%C3%A1%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Subasta Judicial de Apartamento en Botafogo — Rua Voluntários da Pátria nº 166 — Apto 203',
        desc: 'Apartamento clásico de 115 m² con 3 dormitorios, baño social, salón amplio, cocina, lavadero y dependencias completas en edificio tradicional de 1946 de 13 plantas con zaguán de granito y jardín, portería 24h, terraza con barbacoa y plazas en parking rotativo. Necesita reforma integral (potencial de retrofit con compra a ~R$ 3.900/m² en 2ª subasta). Tasación de R$ 897.000,00 y 2ª Subasta al 50% por R$ 448.500,00. Matrícula nº 6.877 (3º RGI) e IPTU nº 0.540.237-5.',
        p1Label: '1ª Subasta (18/09/2026):',
        p1Val: 'R$ 897.000,00',
        p2Label: '2ª Subasta (28/09/2026):',
        p2Val: 'R$ 448.500,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-166-apto-203/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20203%20en%20Rua%20Volunt%C3%A1rios%20da%20P%C3%A1tria%20166%20en%20Botafogo%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Subasta Judicial de Apartamento en Tijuca — Rua Enes de Souza nº 45 — Apto 204',
        desc: 'Apartamento de 50 m², orientación interior silenciosa, con salón, 2 dormitorios (1 suite), baño social, cocina y lavadero en edificio de 1967 con 1 ascensor y bajos gastos comunitarios. Requiere reforma integral (oportunidad para retrofit con adquisición a ~R$ 2.600/m² en 2ª subasta). Tasación de R$ 260.000,00 y 2ª Subasta al 50% por R$ 130.000,00. Matrícula nº 143.042 (11º RGI) e IPTU nº 0.913.176-4.',
        p1Label: '1ª Subasta (13/10/2026):',
        p1Val: 'R$ 260.000,00',
        p2Label: '2ª Subasta (15/10/2026):',
        p2Val: 'R$ 130.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-enes-de-souza-45-apto-204/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20204%20en%20Rua%20Enes%20de%20Souza%2045%20en%20Tijuca%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • São Conrado/RJ',
        title: 'Subasta Judicial de Apartamento en São Conrado — Av. Prefeito Mendes de Morais nº 1400 — Bloco 2, Apto 503',
        desc: 'Apartamento de 268,84 m² en el exclusivo Condominio Praia Guinle, primera línea de playa en São Conrado. Seguridad 24h, piscina, gimnasio, sauna, pista deportiva, salón de fiestas, parque infantil y 3 plazas de garaje. Tasación de R$ 5.221.000,00 con 2ª Subasta al 50% por R$ 2.610.500,00. Matrícula nº 46126 (2º RGI) e IPTU nº 1.730.497-3.',
        p1Label: '1ª Subasta (22/09/2026):',
        p1Val: 'R$ 5.221.000,00',
        p2Label: '2ª Subasta (29/09/2026):',
        p2Val: 'R$ 2.610.500,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/sao-conrado/apartamento/avenida-prefeito-mendes-de-morais-1400-bloco-2-apto-503/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20503%20del%20Bloque%202%20en%20Condominio%20Praia%20Guinle%20en%20S%C3%A3o%20Conrado%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Lagoa/RJ',
        title: 'Subasta Judicial de Ático Dúplex en Lagoa — Rua Fonte da Saudade nº 270 — Apto 402',
        desc: 'Exclusivo ático dúplex de 308 m² (~390 m² útiles) con 4 suites, despacho, salón de 90 m², piscina privada, sauna, hidromasaje, terraza y 4 plazas de garaje en zona noble de Lagoa. Tasación judicial de R$ 5.685.000,00 con 2ª Subasta al 50% por R$ 2.842.500,00. Matrícula nº 96157 (2º RGI) e IPTU nº 3118779-2.',
        p1Label: '1ª Subasta (21/09/2026):',
        p1Val: 'R$ 5.685.000,00',
        p2Label: '2ª Subasta (24/09/2026):',
        p2Val: 'R$ 2.842.500,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/lagoa/cobertura/rua-fonte-da-saudade-270-apto-402/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20%C3%A1tico%20d%C3%BAplex%20402%20en%20Rua%20Fonte%20da%20Saudade%20270%20en%20Lagoa%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Urca/RJ',
        title: 'Subasta Judicial de Apartamento en Urca — Rua Cândido Gaffrée nº 166 — Apto 202 (121 m²)',
        desc: 'Apartamento de 121 m² en el Condominio Edificio Enseada, en calle tranquila y arbolada de Urca, cerca de la costa y el Morro da Urca. Gran distribución residencial con 50% de descuento en 2ª Subasta. Matrícula nº 28.527 (3º RGI) e IPTU nº 1.173906-7.',
        p1Label: '1ª Subasta (14/10/2026):',
        p1Val: 'R$ 1.700.000,00',
        p2Label: '2ª Subasta (20/10/2026):',
        p2Val: 'R$ 850.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/rua-candido-gaffree-166-apto-202/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20202%20en%20el%20Edificio%20Enseada%20en%20Rua%20C%C3%A2ndido%20Gaffr%C3%A9e%20166%20en%20Urca%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Ipanema/RJ',
        title: 'Subasta Judicial de Apartamento en Ipanema — Rua Barão da Torre nº 292 — Apto 404 (45 m²)',
        desc: 'Apartamento de 45 m² en 4º piso con 1 plaza de garaje en escritura en condominio de excelente categoría con área de ocio, elevadores y portería en zona noble de Ipanema. Matrícula nº 104771 (5º RGI) e IPTU nº 3009818-0.',
        p1Label: '1ª Subasta (09/09/2026):',
        p1Val: 'R$ 1.357.354,55',
        p2Label: '2ª Subasta (11/09/2026):',
        p2Val: 'R$ 814.412,73 (60% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/ipanema/apartamento/rua-barao-da-torre-292-apto-404/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20404%20en%20Rua%20Bar%C3%A3o%20da%20Torre%20292%20en%20Ipanema%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Rio Comprido/RJ',
        title: 'Subasta Judicial de Apartamento en Rio Comprido — Av. Presidente Vargas nº 3555 — Bloque E, Apto 403 (57 m²)',
        desc: 'Apartamento de 57 m² en Bloque E, actualmente desocupado (vacío) con entrega de llaves y posesión inmediata. Condominio con infraestructura, portería y ascensores con rápido acceso al Centro y Zona Sur. Matrícula nº 14.273 (11º RGI) e IPTU nº 0013203-5.',
        p1Label: '1ª Subasta (14/09/2026):',
        p1Val: 'R$ 228.000,00',
        p2Label: '2ª Subasta (17/09/2026):',
        p2Val: 'R$ 171.000,00 (75% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/rio-comprido/apartamento/avenida-presidente-vargas-3555-bloco-e-apto-403/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20403%20del%20Bloque%20E%20en%20Av.%20Presidente%20Vargas%203555%20en%20Rio%20Comprido%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Subasta Judicial de Apartamento en Botafogo — Rua Lauro Müller nº 26 — Apto 1001 (39 m²)',
        desc: 'Apartamento de 39 m² en 10º piso (frente, sol de mañana) con vista despejada a la Ensenada de Botafogo, Cristo Redentor y UFRJ. Sala, 1 dormitorio, baño y cocina en edificio con portería 24h y 3 ascensores junto a Rio Sul. Matrícula nº 35.489 (3º RGI) e IPTU nº 0.351.945-1.',
        p1Label: '1ª Subasta (14/09/2026):',
        p1Val: 'R$ 541.158,40',
        p2Label: '2ª Subasta (16/09/2026):',
        p2Val: 'R$ 271.000,00 (50% de la evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-26-apto-1001/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%201001%20en%20Rua%20Lauro%20M%C3%BCller%2026%20en%20Botafogo%20-%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Maracanã/RJ',
        title: 'Subasta Judicial de Apartamento en Maracanã — Av. Maracanã nº 480 — Apto 902 (95 m²)',
        desc: 'Apartamento de 95 m² en 9º piso con 1 plaza de garaje en condominio con portería 24h, reconocimiento facial, CCTV, vestíbulo en mármol y madera, 2 bloques con 2 ascensores cada uno y salón de fiestas. Matrícula nº 27.191 (11º RGI) e IPTU nº 1.227.137-5.',
        p1Label: '1ª Subasta (28/09/2026):',
        p1Val: 'R$ 484.690,00',
        p2Label: '2ª Subasta (30/09/2026):',
        p2Val: 'R$ 242.345,00 (50% de la evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/avenida-maracana-480-apto-902/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20902%20en%20Av.%20Maracan%C3%A3%20480%20en%20R%C3%ADo%20de%20Janeiro.'
      },
      {
        tag: 'Residencial • Barra da Tijuca/RJ',
        title: 'Subasta Judicial de Apartamento en Barra da Tijuca — Av. Jornalista Ricardo Marinho nº 300 — Apto 312 (101 m²)',
        desc: 'Apartamento de 101 m² con posición contrafrente (silencioso) en 3º piso en condominio con ocio completo, servicios, portería 24h y 1 cochera cubierta. Edificio construido en 1989 en ubicación noble en Barra. Matrícula nº 150903 (9º RGI) e IPTU nº 1.845.927-1.',
        p1Label: '1ª Subasta (24/08/2026):',
        p1Val: 'R$ 1.300.000,00',
        p2Label: '2ª Subasta (26/08/2026):',
        p2Val: 'R$ 650.000,00 (50% de la evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-jornalista-ricardo-marinho-300-apto-312/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20312%20en%20Av.%20Jornalista%20Ricardo%20Marinho%20300%20en%20Barra%20da%20Tijuca.'
      },
      {
        tag: 'Residencial • Flamengo/RJ',
        title: 'Subasta Judicial de Apartamento en Praia do Flamengo nº 284 — Apto 301 (463 m²)',
        desc: 'Apartamento de altísimo estándar con 463 m² en la exclusiva orla de Praia do Flamengo. Edificio de 09 pisos, 2 apartamentos por planta, portería 24h y 3 ascensores. Vista panorámica a la Bahía de Guanabara, Aterro y Pan de Azúcar. Matrícula nº 293012 (9º RGI) e IPTU nº 0245475-9.',
        p1Label: '1ª Subasta (05/10/2026):',
        p1Val: 'R$ 4.100.000,00',
        p2Label: '2ª Subasta (08/10/2026):',
        p2Val: 'R$ 2.050.000,00 (50% de la tasación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/praia-do-flamengo-284-apto-301/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20301%20en%20Praia%20do%20Flamengo%20284%20en%20Flamengo.'
      },
      {
        tag: 'Residencial • Centro/RJ',
        title: 'Subasta Judicial de Apartamento en Centro de Río — Calle Leandro Martins nº 22 — Apto 620 (38 m²)',
        desc: 'Apartamento de 38 m² en 6º piso del Edificio Sagres en Calle Leandro Martins, junto al VLT y Metro. Salón dividido en antesala y 2 salas (contrafrente), baño y cocina. Portería 24h y 4 ascensores modernizados. Matrícula nº 14672 (4º RGI) e IPTU nº 0568243-0.',
        p1Label: '1ª Subasta (24/09/2026):',
        p1Val: 'R$ 194.619,76',
        p2Label: '2ª Subasta (29/09/2026):',
        p2Val: 'R$ 98.000,00 (~50% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-leandro-martins-22-apto-620/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20620%20en%20el%20Edificio%20Sagres%20en%20Calle%20Leandro%20Martins%2022%20en%20Centro%20de%20R%C3%ADo.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Subasta Judicial de Apartamento en Botafogo — Calle de la Passagem nº 159 — Apto 803 (22 m²)',
        desc: 'Apartamento de frente en 8º piso con 22 m² en Calle de la Passagem, junto al Metro Botafogo y centro comercial. Unidad desocupada desde hace años. Portería 24h y 2 ascensores. Matrícula nº 0053374 (3º RGI) e IPTU nº 0.691.419-6.',
        p1Label: '1ª Subasta (21/09/2026):',
        p1Val: 'R$ 340.000,00',
        p2Label: '2ª Subasta (23/09/2026):',
        p2Val: 'R$ 204.000,00 (60% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-da-passagem-159-apto-803/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20803%20en%20Calle%20de%20la%20Passagem%20159%20en%20Botafogo.'
      },
      {
        tag: 'Residencial • Maracanã/RJ',
        title: 'Subasta Judicial de Apartamento en Maracanã — Calle Morais e Silva nº 51 — Apto 1401, Bloque 2 (85 m²)',
        desc: 'Apartamento en planta alta con 85 m² y 1 plaza en garaje elevado en el Bloque 2. Ubicación estratégica junto a la UERJ, Estadio Maracanã y metro. Unidad cerrada. Matrícula nº 30.179 (11º RGI) e IPTU nº 1.514.716-8.',
        p1Label: '1ª Subasta (08/09/2026):',
        p1Val: 'R$ 610.000,00',
        p2Label: '2ª Subasta (10/09/2026):',
        p2Val: 'R$ 305.000,00 (50% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-morais-e-silva-51-apto-1401/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%201401%20Bloque%202%20en%20Calle%20Morais%20e%20Silva%2051%20en%20Maracan%C3%A3.'
      },
      {
        tag: 'Residencial • Urca/RJ',
        title: 'Subasta Judicial de Apartamento en Urca — Avenida Portugal nº 584 — Apto 501 (Edificio Urca-Mar — 68 m²)',
        desc: 'Apartamento en última planta de 68 m² en el Edificio Urca-Mar, con gran terraza frontal descubierta y vistas a la Ensenada de Botafogo y Bahía de Guanabara. Salón, cocina, 1 suite, baño social y área de servicio; sin plaza de garaje. Matrícula nº 40.262 (3º RGI) e IPTU nº 0650419-5.',
        p1Label: '1ª Subasta (25/08/2026):',
        p1Val: 'R$ 1.091.220,92',
        p2Label: '2ª Subasta (27/08/2026):',
        p2Val: 'R$ 545.610,46 (50% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/avenida-portugal-584-apto-501/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20501%20en%20Avenida%20Portugal%20584%20en%20Urca.'
      },
      {
        tag: 'Residencial • Flamengo/RJ',
        title: 'Subasta Judicial de Apartamento en Flamengo — Calle Honório de Barros nº 23 — Apto 601 (70 m²)',
        desc: 'Apartamento de 70 m² en sólida construcción de 1963 con 4 ascensores y portería 24h en Calle Honório de Barros, vía exclusiva y arbolada en Flamengo cerca del Parque y del Metro. Sin plaza de garaje asignada a la unidad. Matrícula nº 281.699 (9º RGI) e IPTU nº 0714891-9.',
        p1Label: '1ª Subasta (08/09/2026):',
        p1Val: 'R$ 720.000,00',
        p2Label: '2ª Subasta (10/09/2026):',
        p2Val: 'R$ 432.000,00 (60% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/rua-honorio-de-barros-23-apto-601/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20601%20en%20Calle%20Hon%C3%B3rio%20de%20Barros%2023%20en%20Flamengo.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Subasta Judicial de Apartamento en Botafogo — Calle Guilhermina Guinle nº 18 — Apto 401 (72 m²)',
        desc: 'Apartamento exterior de 72 m² en edificio de 1959 en esquina entre Calle Guilhermina Guinle y Calle Voluntários da Pátria. Ubicación privilegiada en calle tranquila, a pocos pasos del Metro Botafogo y comercio. Matrícula nº 60.137 (3º RGI) e IPTU nº 0.277.088-1.',
        p1Label: '1ª Subasta (24/09/2026):',
        p1Val: 'R$ 828.000,00',
        p2Label: '2ª Subasta (29/09/2026):',
        p2Val: 'R$ 496.800,00 (60% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-guilhermina-guinle-18-apto-401/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20401%20en%20Calle%20Guilhermina%20Guinle%2018%20en%20Botafogo.'
      },
      {
        tag: 'Residencial • Barra da Tijuca/RJ',
        title: 'Subasta Judicial de Apartamento en Avenida Lúcio Costa nº 6500 — Apto 203 (Condominio Alfa Plaza — 60 m²)',
        desc: 'Apartamento de orientación exterior de 60 m² en el prestigioso Condominio Alfa Plaza, en primera línea de playa en Barra da Tijuca. Edificio con ascensores, barbacoa, autobús privado para residentes (itinerarios Zona Sur y Centro), piscinas, clubes y seguridad 24h. Matrícula nº 121.926 (9º RGI) e IPTU nº 1.690.545-7.',
        p1Label: '1ª Subasta (27/08/2026):',
        p1Val: 'R$ 850.000,00',
        p2Label: '2ª Subasta (01/09/2026):',
        p2Val: 'R$ 425.000,00 (50% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-lucio-costa-6500-apto-203/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20203%20en%20Alfa%20Plaza%20en%20Avenida%20L%C3%BAcio%20Costa%206500%20en%20Barra%20da%20Tijuca.'
      },
      {
        tag: 'Residencial • Santa Teresa/RJ',
        title: 'Subasta Judicial de Casa en Santa Teresa — Calle Júlio Otoni nº 254 (203 m²)',
        desc: 'Casa residencial con 12 habitaciones (incluyendo Suite Presidencial), jardín de entrada, recepción, bar, restaurante, cocina, piscina, sauna de vapor y vista panorámica espectacular al Cristo Redentor y Pan de Azúcar. Matrícula nº 52318 (9º RGI) e IPTU nº 0.417.443-9.',
        p1Label: '1ª Subasta (21/09/2026):',
        p1Val: 'R$ 3.153.239,03',
        p2Label: '2ª Subasta (23/09/2026):',
        p2Val: 'R$ 1.577.000,00 (50% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/casa/rua-julio-otoni-254/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20de%20la%20casa%20en%20la%20Calle%20J%C3%BAlio%20Otoni%20254%20en%20Santa%20Teresa.'
      },
      {
        tag: 'Comercial/Residencial • Santa Teresa/RJ',
        title: 'Subasta Judicial de Casona en Santa Teresa — Calle Joaquim Murtinho nº 587 — Antigua Posada (1.132 m²)',
        desc: 'Propiedad histórica de 1938 de 1.132 m², con casa principal (4 plantas/suites), área de piscina, sauna y barbacoa, bungalow independiente, edificio anexo con 5 unidades y zona verde arbolada. Matrícula nº 2.117 (7º RGI) e IPTU nº 0113118-4.',
        p1Label: '1ª Subasta (28/09/2026):',
        p1Val: 'R$ 2.900.000,00',
        p2Label: '2ª Subasta (01/10/2026):',
        p2Val: 'R$ 1.740.000,00 (60% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/pousada-casarao/rua-joaquim-murtinho-587/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20de%20la%20casona%20en%20Santa%20Teresa.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Ático Duplex en Copacabana — Calle Silva Castro nº 44 — Apto 1001 (206 m²)',
        desc: 'Ático duplex residencial de 206 m², 3 dormitorios (1 suite), terraza en pizarra con deck de madera, piscina de fibra y barbacoa. Matrícula nº 107.466 (5º RGI) e IPTU nº 0.065.088-7.',
        p1Label: '1ª Subasta (14/09/2026):',
        p1Val: 'R$ 2.500.000,00',
        p2Label: '2ª Subasta (17/09/2026):',
        p2Val: 'R$ 1.500.000,00 (60% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/cobertura/rua-silva-castro-44-apto-1001/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20%C3%A1tico%20en%20Copacabana.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Copacabana — Calle Marechal Mascarenhas de Morais nº 190 — Apto 703 (79 m²)',
        desc: 'Apartamento residencial de 79 m² en edificio de 1982. Dispone de garaje, 3 ascensores, playground con salón de fiestas, portería 24h y cámaras de seguridad. Matrícula nº 49.437 (5º RGI) e IPTU nº 1.534.550-7.',
        p1Label: '1ª Subasta (17/09/2026):',
        p1Val: 'R$ 1.091.500,00',
        p2Label: '2ª Subasta (22/09/2026):',
        p2Val: 'R$ 545.750,00 (50% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-marechal-mascarenhas-de-morais-190-apto-703/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20en%20Copacabana.'
      },
      {
        tag: 'Residencial • Maracanã/RJ',
        title: 'Subasta Judicial de Apartamento en Maracanã — Calle Dona Zulmira nº 19 — Apto 101 (66 m²)',
        desc: 'Apartamento residencial de frente con balcón, compuesto por habitación, salón, baño, cocina y dependencias. Edificio de 1984 con 2 ascensores, seguridad, 2 pisos de garaje, playground, salón de fiestas y barbacoa. Matrícula nº 41.819 (10º RGI) e IPTU nº 1.640.226-5.',
        p1Label: '1ª Subasta (02/09/2026):',
        p1Val: 'R$ 406.923,00',
        p2Label: '2ª Subasta (09/09/2026):',
        p2Val: 'R$ 203.461,50 (50% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-dona-zulmira-19-apto-101/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20en%20Maracan%C3%A3.'
      },
      {
        tag: 'Residencial • Cosme Velho/RJ',
        title: 'Subasta Judicial de Ático en Cosme Velho — Plaza São Judas Tadeu nº 6 — Apto 601 (590 m²)',
        desc: 'Ático residencial de alto estándar con 590 m² en Plaza São Judas Tadeu nº 06, Cosme Velho. Consta de amplio salón, comedor, terraza frontal y lateral, 5 dormitorios (3 suites), baño social, depósito y 2 dependencias. Matrícula nº 124374 (9º RGI) e IPTU nº 14013544.',
        p1Label: '1ª Subasta (09/09/2026):',
        p1Val: 'R$ 4.411.000,00',
        p2Label: '2ª Subasta (16/09/2026):',
        p2Val: 'R$ 1.543.850,00 (35% de evaluación)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/cosme-velho/cobertura/praca-sao-judas-tadeu-6-apto-601/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20%C3%A1tico%20en%20Cosme%20Velho.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Copacabana — Calle M. V. Castro, 32',
        desc: 'Unidad residencial situada en Copacabana, cerca de la playa y metro Cardeal Arcoverde. Análisis preventivo de edicto, subrogación de tributos y verificación de pasivos condominiales concluidos.',
        p1Label: '1ª Subasta (24/08/2026):',
        p1Val: 'R$ 480.000,00',
        p2Label: '2ª Subasta (03/09/2026):',
        p2Val: 'R$ 240.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-ministro-viveiros-de-castro-32/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20en%20Copacabana%20(Calle%20M.%20V.%20Castro%2032).'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en la Av. Atlântica nº 2.376',
        desc: 'Apartamento 203 con 119 m² en el Edificio Assú (frente a la playa de Copacabana) y entrada suplementaria por Calle Domingos Ferreira 25. Consta de salón, 3 dormitorios (2 suites), baño social, cocina y área de servicio.',
        p1Label: '1ª Subasta (03/08/2026):',
        p1Val: 'R$ 1.350.000,00',
        p2Label: '2ª Subasta (05/08/2026):',
        p2Val: 'R$ 675.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-2376/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20en%20Av.%20Atl%C3%A2ntica%202376.'
      },
      {
        tag: 'Residencial • Urca/RJ',
        title: 'Subasta Judicial de Casa en la Calle Marechal Cantuária nº 75 — Urca',
        desc: 'Casa unifamiliar con 321 m² de área construida, edificada en 1938 frente a la bucólica calle de Urca. Inscripción IPTU nº 0.422.940-7. Activo rarísimo en la Zona Sur de Río de Janeiro.',
        p1Label: '1ª Subasta (19/08/2026):',
        p1Val: 'R$ 3.820.000,00',
        p2Label: '2ª Subasta (25/08/2026):',
        p2Val: 'R$ 1.910.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/casa/rua-marechal-cantuaria-75/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20de%20la%20casa%20en%20Urca.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Av. Prado Júnior nº 298 — Apto 1003',
        desc: 'Apartamento 1003 con 42 m², posterior, sin plaza de garaje. Edificio residencial construido en 1957 con 12 pisos, 2 ascensores, portería presencial y cámaras de seguridad.',
        p1Label: '1ª Subasta (17/08/2026):',
        p1Val: 'R$ 520.000,00',
        p2Label: '2ª Subasta (19/08/2026):',
        p2Val: 'R$ 312.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-prado-junior-298/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%201003.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Av. Nossa Senhora de Copacabana nº 1003 — Apto 1101',
        desc: 'Apartamento 1101 con 35 m², frontal, sin plaza de garaje. Edificio residencial construido en 1957 con 13 pisos, 2 ascensores y portería 24 horas.',
        p1Label: '1ª Subasta (27/07/2026):',
        p1Val: 'R$ 448.971,12',
        p2Label: '2ª Subasta (29/07/2026):',
        p2Val: 'R$ 225.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-nossa-senhora-de-copacabana-1003/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%201101.'
      },
      {
        tag: 'Residencial • Catete/RJ',
        title: 'Subasta Judicial de Apartamento en Calle Silveira Martins nº 140 — Apto 502',
        desc: 'Apartamento 502 con 53 m² de área privada, sin plaza de garaje. Edificio residencial con 8 plantas, 7 apartamentos por piso, portería presencial.',
        p1Label: '1ª Subasta (27/07/2026):',
        p1Val: 'R$ 532.500,63',
        p2Label: '2ª Subasta (29/07/2026):',
        p2Val: 'R$ 267.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%20502.'
      },
      {
        tag: 'Residencial • Catete/RJ',
        title: 'Subasta Judicial de Apartamento en Calle Silveira Martins nº 140 — Apto 503',
        desc: 'Apartamento 503 con 36 m² de área privada, sin plaza de garaje. Edificio residencial con 8 plantas, 7 apartamentos por piso.',
        p1Label: '1ª Subasta (27/07/2026):',
        p1Val: 'R$ 334.118,04',
        p2Label: '2ª Subasta (29/07/2026):',
        p2Val: 'R$ 168.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140-apto-503/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%20503.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Subasta Judicial de Apartamento en Calle Voluntários da Pátria nº 381 — Apto 305',
        desc: 'Apartamento 305 en el Edificio Coaracy Nunes con 109 m² de área edificada. Inmueble cerrado desde hace más de 10 años. Construcción de 1945.',
        p1Label: '1ª Subasta (28/07/2026):',
        p1Val: 'R$ 1.030.339,95',
        p2Label: '2ª Subasta (30/07/2026):',
        p2Val: 'R$ 516.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-381-apto-305/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%20305.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Subasta Judicial de Apartamento en Calle Haddock Lobo nº 191 — Apto 405',
        desc: 'Apartamento 405 en el Edificio Colima de frente, con 60 m² de área edificada. Edificio residencial construido en 1951, 7 plantas, portería 24h y 2 ascensores.',
        p1Label: '1ª Subasta (28/07/2026):',
        p1Val: 'R$ 320.550,21',
        p2Label: '2ª Subasta (30/07/2026):',
        p2Val: 'R$ 161.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-haddock-lobo-191-apto-405/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%20405.'
      },
      {
        tag: 'Residencial • Leblon/RJ',
        title: 'Subasta Judicial de Apartamento en Leblon en Calle General Urquiza nº 263 — Apto 402',
        desc: 'Apartamento 402 con 40 m² en el Edificio Palm Beach, construido en 1950, ubicado en el tramo residencial sin salida de la Calle General Urquiza en Leblon. Matrícula nº 10.627 no 2º RGI e IPTU nº 0.565.962-8.',
        p1Label: '1ª Subasta (29/09/2026):',
        p1Val: 'R$ 890.000,00',
        p2Label: '2ª Subasta (01/10/2026):',
        p2Val: 'R$ 445.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-general-urquiza-263/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%20402%20en%20Leblon.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Copacabana en Calle Siqueira Campos nº 43 — Apto 1123',
        desc: 'Apartamento 1123 con 38 m² construidos, posición al frente en el Edificio Centro Comercial de Copacabana. Cuenta con baño con box de granito, sala/cocina integradas y dormitorio separado. Matrícula nº 5098 no 5º RGI e IPTU nº 0.686.319-5.',
        p1Label: '1ª Subasta (16/09/2026):',
        p1Val: 'R$ 400.000,00',
        p2Label: '2ª Subasta (23/09/2026):',
        p2Val: 'R$ 200.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-siqueira-campos-43/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%201123%20en%20Siqueira%20Campos.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Subasta Judicial de Apartamento en Botafogo en Calle Lauro Müller nº 36 — Apto 1411',
        desc: 'Apartamento 1411 con 38 m² construidos, posición interior (fundos) en el Edificio Interpraias (1973). Edificio con seguridad 24h, 3 ascensores y área de ocio en la terraza con parrilla y ducha. Inmueble desocupado desde hace años. Matrícula nº 11.881 no 3º RGI e IPTU nº 1.205.989-8.',
        p1Label: '1ª Subasta (15/05/2026):',
        p1Val: 'R$ 520.000,00',
        p2Label: '2ª Subasta (21/07/2026):',
        p2Val: 'R$ 260.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-36/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%201411%20en%20Botafogo.'
      },
      {
        tag: 'Residencial • Gávea/RJ',
        title: 'Subasta Judicial de Apartamento en Gávea — Calle Vice Governador Rubens Berardo nº 175 — Apto 506 Bl. III',
        desc: 'Apartamento 506 con 84 m² construidos y 2 plazas de garaje en Gávea (acceso también por Av. Padre Leonel Franca 210). Consta de 2 dormitorios (1 suite), baño social, sala, cocina y dependencia de servicio. Matrícula nº 31.349 no 2º RGI e IPTU nº 1.479.851-6.',
        p1Label: '1ª Subasta (14/09/2026):',
        p1Val: 'R$ 1.686.801,06',
        p2Label: '2ª Subasta (24/09/2026):',
        p2Val: 'R$ 843.401,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/gavea/apartamento/rua-vice-governador-rubens-berardo-175/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%20506%20en%20G%C3%A1vea.'
      },
      {
        tag: 'Residencial • Botafogo/RJ',
        title: 'Subasta Judicial de Apartamento en Praia de Botafogo nº 356 — Apto 1138',
        desc: 'Apartamento residencial 1138 con 21 metros cuadrados (21 m²) en buen estado en Praia de Botafogo nº 356. Consta de recibidor/cocina, baño y dormitorio. Edificio de 1958 con portería 24h, cámaras y 10 ascensores. Matrícula nº 38.841 del 3º RGI e IPTU nº 0.651.974-8.',
        p1Label: '1ª Subasta (17/08/2026):',
        p1Val: 'R$ 355.000,42',
        p2Label: '2ª Subasta (20/08/2026):',
        p2Val: 'R$ 213.000,25',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/praia-de-botafogo-356/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%201138%20en%20Praia%20de%20Botafogo%20356.'
      },
      {
        tag: 'Residencial • Santa Teresa/RJ',
        title: 'Subasta Judicial de Apartamento en Calle Costa Bastos nº 8 — Santa Teresa',
        desc: 'Apartamento 1001 con 51 m², frente a la calle con sol de mañana. Consta de salón, dormitorio, cocina y baño en buen estado. Edificio clásico con portería y sin área de ocio. Matrícula nº 97.791 del 2º RGI/RJ.',
        p1Label: '1ª Subasta (13/08/2026):',
        p1Val: 'R$ 290.000,00',
        p2Label: '2ª Subasta (18/08/2026):',
        p2Val: 'R$ 145.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/apartamento/rua-costa-bastos-8/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%201001%20en%20Calle%20Costa%20Bastos%208%20en%20Santa%20Teresa.'
      },
      {
        tag: 'Residencial • Centro/RJ',
        title: 'Subasta Judicial de Apartamento en Calle Riachuelo nº 220 — Apto 1103',
        desc: 'Apartamento 1103 con 33 metros cuadrados (33 m²), exterior a la calle principal. Estudio (kitnet) que consta de cocina compacta, baño, pasillo y salón. Edificio de 1967 con portería 24h, 2 ascensores y cámaras. Matrícula nº 80.801 del 2º RGI/RJ.',
        p1Label: '1ª Subasta (31/08/2026):',
        p1Val: 'R$ 138.524,00',
        p2Label: '2ª Subasta (03/09/2026):',
        p2Val: 'R$ 69.262,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-riachuelo-220/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%201103%20en%20Calle%20Riachuelo%20220%20en%20el%20Centro.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Av. Atlântica nº 3806 — Apto 312',
        desc: 'Apartamento 312 de 27 m², orientación interior (fundos). Edificio residencial de 1955 en la playa de Copacabana con acceso suplementario por Av. N. Sra. de Copacabana nº 1241. Matrícula nº 29.681 del 5º RGI/RJ.',
        p1Label: '1ª Subasta (02/09/2026):',
        p1Val: 'R$ 450.100,00',
        p2Label: '2ª Subasta (14/09/2026):',
        p2Val: 'R$ 225.100,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-3806-apto-312/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%20312%20en%20Av.%20Atl%C3%A2ntica%203806%20en%20Copacabana.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Subasta Judicial de Apartamento en Calle São Francisco Xavier nº 90 — Apto 503',
        desc: 'Apartamento 503 de 93 m² y 2 plazas de garaje. Edificio de 7 plantas más ático construido en 1971 en el barrio de Tijuca. Matrícula nº 37.650 del 11º RGI/RJ.',
        p1Label: '1ª Subasta (09/09/2026):',
        p1Val: 'R$ 740.100,00',
        p2Label: '2ª Subasta (11/09/2026):',
        p2Val: 'R$ 370.100,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-sao-francisco-xavier-90-apto-503/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apto%20503%20en%20Calle%20S%C3%A3o%20Francisco%20Xavier%2090%20en%20Tijuca.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Subasta Judicial de Ático/Cobertura en Calle Delgado de Carvalho nº 75 — Cobertura 01',
        desc: 'Ático/cobertura 01 de 106 m² y plaza de garaje. Edificio clásico de 1965 con vestíbulo de mármol y entradas de garaje en Tijuca. Matrícula nº 99.412 del 11º RGI/RJ.',
        p1Label: '1ª Subasta (12/08/2026):',
        p1Val: 'R$ 668.000,00',
        p2Label: '2ª Subasta (26/08/2026):',
        p2Val: 'R$ 334.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/cobertura/rua-delgado-de-carvalho-75-cobertura-01/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20%C3%A1tico%2001%20en%20Calle%20Delgado%20de%20Carvalho%2075%20en%20Tijuca.'
      },
      {
        tag: 'Hotel / Comercial • Copacabana/RJ',
        title: 'Subasta Judicial de Edificio Hotelero en Calle Tonelero nº 202 — Copacabana',
        desc: 'Edificio comercial e hotelero con 3.760 m² de superficie construida. Junto al Metro Siqueira Campos y la playa de Copacabana. Matrícula nº 4.864 del 5º RGI/RJ.',
        p1Label: '1ª Subasta (06/10/2026):',
        p1Val: 'R$ 45.836.204,80',
        p2Label: '2ª Subasta (08/10/2026):',
        p2Val: 'R$ 22.918.102,40',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/hotel/rua-tonelero-202/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20edificio%20hotelero%20en%20Calle%20Tonelero%20202%20en%20Copacabana.'
      },
      {
        tag: 'Residencial • Copacabana/RJ',
        title: 'Subasta Judicial de Apartamento en Calle Santa Clara nº 431 — Apto 704 (Mirante de Copacabana)',
        desc: 'Apartamento residencial de 86 m² con portería en el Condomínio Mirante de Copacabana. Cerca del Metro Siqueira Campos. Matrícula nº 35.666 del 5º RGI/RJ.',
        p1Label: '1ª Subasta (09/09/2025):',
        p1Val: 'R$ 635.000,00',
        p2Label: '2ª Subasta (11/09/2025):',
        p2Val: 'R$ 317.500,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-santa-clara-431-apto-704/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20en%20Calle%20Santa%20Clara%20431%20Apto%20704%20en%20Copacabana.'
      },
      {
        tag: 'Residencial • Tijuca/RJ',
        title: 'Subasta Judicial de Apartamento en Tijuca en Calle Uruguai nº 94/104',
        desc: 'Apartamento de 40 m² con salón, 1 habitación, baño, dependencias completas, balcón y 1 plaza de garaje. Edificio de 1985 con consejería 24h y área de ocio junto al metro Uruguai. Matrícula nº 19.467 del 10º RGI/RJ e IPTU nº 1.723.354-5.',
        p1Label: '1ª Subasta (31/08/2026):',
        p1Val: 'R$ 250.000,00',
        p2Label: '2ª Subasta (02/09/2026):',
        p2Val: 'R$ 125.000,00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-uruguai-94-apto-104/',
        waText: 'Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20subasta%20del%20apartamento%20en%20Calle%20Uruguai%2094%20Apto%20104.'
      }
    ]
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Practice Areas',
    residentialCommercial: 'Residential and Commercial',
    heroTitle: 'Legal Consulting for Real Estate Auctions',
    heroDesc: 'Purchasing apartments, stores, and offices in Rio de Janeiro requires a detailed prior audit of title deeds, verification of condo fee liabilities, and procedural risk analysis to ensure fast possession and secure investment.',
    stat1Title: 'Rio de Janeiro',
    stat1Desc: 'Focus on residential and commercial properties in RJ',
    stat2Title: 'Technical Opinion',
    stat2Desc: 'Legal evaluation and risk matrix',
    badgeLocation: 'Rio de Janeiro / RJ',
    badgeDesc: 'Prior audit of auction notices and condo fee liabilities',
    consultWA: 'Consult with Specialist on WhatsApp',
    interactiveTag: 'Interactive Methodology',
    interactiveTitle: '4 Pillars of Judicial Auction Audit',
    interactiveSub: 'Click each step to examine the critical points audited in our prior legal opinion.',
    issuedNotice: 'Legal opinion issued in 24h to 48h',
    checklist: [
      {
        title: '1. Title Deed and Encumbrances Examination',
        desc: 'Detailed review of mortgages, liens, injunctions, and annotations in the Land Registry.',
        risk: 'Encumbrance Audit'
      },
      {
        title: '2. Analysis of Propter Rem Liabilities',
        desc: 'Verification of liability for tax and condo debts according to auction notice and tax law.',
        risk: 'Liabilities Audit'
      },
      {
        title: '3. Procedural Validity of Notifications',
        desc: 'Checking valid summons and notices served to debtor, co-owners, and lienholders.',
        risk: 'Nullity Check'
      },
      {
        title: '4. Bidding Deed and Possession Process',
        desc: 'Tracking court and notary acts for auction deed issuance and writ of possession.',
        risk: 'Possession Process'
      }
    ],
    auctionsTitle: 'Auctions Under Analysis',
    auctionsSub: 'Consultation panel and technical monitoring of opportunities under legal audit.',
    filterAll: 'All',
    filterRes: 'Residential',
    filterCom: 'Commercial',
    auditedTag: 'Audited Opportunity',
    lawsuitTag: 'TJRJ Lawsuit',
    legalAuditLabel: 'Legal Audit:',
    auditStatusDone: 'Completed • Opinion Available',
    viewAnalysisReport: 'View Notice Analysis & Report',
    requestOpinionWA: 'Request Legal Opinion via WhatsApp',
    collapseAuctions: 'Collapse Opportunities',
    expandAuctions: 'View More Opportunities Under Analysis (+6 properties)',
    noCommercialTitle: 'No open commercial lots at the moment',
    noCommercialDesc: 'Our team performs on-demand analysis for commercial and corporate properties in Rio de Janeiro.',
    archiveTitle: 'Repository and History of Technical Analyses',
    archiveSub: 'Institutional record and guidelines for disclosure of opinions and case studies in real estate auctions.',
    ethicsTitle: 'Ethical Compliance and Data Protection',
    ethicsText: 'In strict compliance with the OAB Ethics Code and data protection standards, the repository of legal opinions and audit reports is kept under professional secrecy. This section registers anonymized technical notes and jurisprudence applied to real estate auctions in Rio de Janeiro state.',
    ethicsFootnote: 'Individualized legal opinions issued upon prior engagement',
    relatedTitle: 'Related Content and Services',
    relatedLinks: [
      { title: 'Real Estate Law & Business', desc: 'Advisory in purchase, sale, and asset structuring.', path: '/direito-imobiliario/' },
      { title: 'Safe Purchase and Sale Guide', desc: 'Step-by-step legal guide for acquisitions in Rio de Janeiro.', path: '/blog/guia-compra-venda-segura-imoveis-rj/' },
      { title: 'Real Estate Due Diligence', desc: 'Audit of certificates, encumbrances, and contractual risks.', path: '/blog/direito-imobiliario-due-diligence-compra/' },
      { title: 'Auction for Condo Fee Debt', desc: 'Understand how judicial auctions for condo fee debts work.', path: '/blog/apartamento-leilao-debito-condominial/' },
      { title: 'Asset & Inheritance Law', desc: 'Protection, estate planning, and regularization.', path: '/direito-patrimonial-sucessorio/' },
      { title: 'Lease Contracts & Guarantees', desc: 'Analysis of essential clauses and contractual security.', path: '/blog/clausulas-fundamentais-contrato-locacao/' }
    ],
    faqHeaderTitle: 'Frequently Asked Questions (FAQ)',
    faqHeaderSub: 'Common questions about auction notice audits, bidding, and writ of possession in RJ',
    ctaHeaderTitle: 'Talk To Our Specialized Team',
    ctaHeaderDesc: 'Soares Martins Advogados provides complete legal audit and specialized support to ensure maximum security in your decisions and investments in real estate auctions in Rio de Janeiro.',
    ctaWAButton: 'Support via WhatsApp',
    ctaEmailButton: 'Send Corporate Email',
    ctaFooterNote: 'In-person consultation in Ipanema/RJ and virtual legal support throughout Brazil.',
    auctionItems: [
      {
        tag: 'Residential • Botafogo (RJ)',
        title: 'Judicial Auction of Apartment in Botafogo — Rua Lauro Müller #36 — Apt 109',
        desc: 'Prime 38 sqm (409 sq ft) residential apartment (Unit 109) in a quiet rear position, currently vacant of occupants, within the condominium at Rua Lauro Müller #36, Botafogo, Rio de Janeiro South Zone. Exclusively residential 16-story tower (12 units/floor) serviced by 3 modernized elevators, 24/7 security concierge, 24/7 CCTV surveillance, and a rooftop celebration ballroom. Recorded at the 3rd Land Registry under Title #56.285 and IPTU #1205828-5. Official valuation of R$ 500,000.00. 1st Auction on 11/13/2026 at 11:00 AM at R$ 500,000.00 and 2nd Auction on 11/23/2026 at 11:00 AM starting at 50% for R$ 250,000.00 (~R$ 6,578.95/sqm in prime Botafogo).',
        p1Label: '1st Auction (11/13/2026):',
        p1Val: 'R$ 500,000.00',
        p2Label: '2nd Auction (11/23/2026):',
        p2Val: 'R$ 250,000.00 (2nd Auction starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-36-apto-109/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Lauro%20M%C3%BCller%2036%20Apt%20109%20in%20Botafogo%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Botafogo (RJ)',
        title: 'Judicial Auction of Apartment in Botafogo — Rua Álvaro Ramos #405 — Block 1, Apt 1804',
        desc: 'Prime 89 sqm (958 sq ft) residential apartment situated on the 18th floor (Unit 1804) of Block 01 in a classic 1985 residential development at tree-lined Rua Álvaro Ramos #405, in Botafogo, Rio de Janeiro South Zone. High-floor apartment offering panoramic open views, comprising 2 bedrooms (1 en-suite), guest bathroom, living/dining room, kitchen, laundry room, full maid quarters, and deeded right to 1 parking space. Condominium with 2 towers of 18 stories (4 residences/floor), 4 modern elevators, 24/7 security concierge, kids playground, and celebration ballroom. Registered at 3rd Land Registry under Title #38.417 and IPTU #1.723.344-6. 1st Auction on 11/04/2026 at 12:00 PM at R$ 1,068,000.00 and 2nd Auction on 11/26/2026 at 12:00 PM starting at R$ 534,000.00 (~R$ 6,000.00/sqm in prime Botafogo).',
        p1Label: '1st Auction (11/04/2026):',
        p1Val: 'R$ 1,068,000.00',
        p2Label: '2nd Auction (11/26/2026):',
        p2Val: 'R$ 534,000.00 (2nd Auction starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-alvaro-ramos-405-bloco-1-apto-1804/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20%C3%81lvaro%20Ramos%20405%20Block%201%20Apt%201804%20in%20Botafogo%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Flamengo / Waterfront (RJ)',
        title: 'Judicial Auction of Apartment in Flamengo — Praia do Flamengo #12 — Apt 306',
        desc: 'Spacious 40 sqm (430 sq ft) studio apartment divided into living room, bedroom, kitchen, and bathroom on the 3rd floor (Unit 306) of the classic Edifício Rio Carioca, built in 1940 along the prestigious Praia do Flamengo #12, in Flamengo/RJ. Property in fair condition consistent with age, equipped with intercom, no garage space. The building features 2 blocks of 13 stories (270 apartments), four elevators, and 24-hour manned concierge, with no leisure facilities (low HOA fees). Registered at the 9th Land Registry under Title #154.629 and municipal tax IPTU #0.258.058-7. 1st Auction on 10/26/2026 at R$ 627,898.69 and 2nd Auction on 10/29/2026 starting at R$ 313,949.34 (~R$ 7,848.73/sqm along the beachfront).',
        p1Label: '1st Auction (10/26/2026):',
        p1Val: 'R$ 627,898.69',
        p2Label: '2nd Auction (10/29/2026):',
        p2Val: 'R$ 313,949.34 (2nd Auction starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/praia-do-flamengo-12-apto-306/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Praia%20do%20Flamengo%2012%20Apt%20306%20(Edif%C3%ADcio%20Rio%20Carioca)%20in%20Flamengo%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Centro / Bairro de Fátima (RJ)',
        title: 'Judicial Auction of Apartment in Centro / Bairro de Fátima — Avenida Nossa Senhora de Fátima #60 — Apt 501',
        desc: 'Prime 67 sqm (721 sq ft) street-facing residential apartment on the 5th floor (Unit 501) of a traditional 1950 building located at tree-lined Avenida Nossa Senhora de Fátima #60, in the charming Bairro de Fátima / Centro of Rio de Janeiro. In good condition, comprising 3 bedrooms, airy living room with porcelain tile flooring and aluminum windows, kitchen with aluminum counter, dedicated laundry area, and bathroom with blindex enclosure. The building features 2 passenger elevators (4 people each), doorman/caretaker on duty, and CCTV security cameras. Registered at the 2nd Land Registry under Title #05392 and municipal tax IPTU #0.580.436-4. 1st Auction on 10/26/2026 starting at R$ 420,592.00 and 2nd Auction on 10/28/2026 with starting bid of R$ 210,296.00 (~R$ 3,138.75/sqm).',
        p1Label: '1st Auction (10/26/2026):',
        p1Val: 'R$ 420,592.00',
        p2Label: '2nd Auction (10/28/2026):',
        p2Val: 'R$ 210,296.00 (2nd Auction starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/avenida-nossa-senhora-de-fatima-60-apto-501/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Avenida%20Nossa%20Senhora%20de%20F%C3%A1tima%2060%20Apt%20501%20in%20Centro%20/%20Bairro%20de%20F%C3%A1tima%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Copacabana / Posto 6 (RJ)',
        title: 'Judicial Auction of Apartment in Copacabana — Rua Raul Pompéia #240 — Apt 702',
        desc: 'Prime 143 sqm (1,539 sq ft) street-facing residential apartment on the 7th floor (Unit 702) of a distinguished 1957 building located at charming Rua Raul Pompéia #240 in prestigious Posto 6, Copacabana, footsteps from Arpoador and Ipanema. Bright, sunlit and well-ventilated layout featuring 3 bedrooms (two with direct street-facing windows), generous anteroom and main living/dining room overlooking the tree-lined street, large kitchen, 2 full social bathrooms, and service bathroom. The building provides 24-hour manned concierge, elevators, and garage space. Recorded at the 5th Land Registry under Title #26.715 and municipal tax IPTU #0.277.837-1. 1st Auction on 11/03/2026 starting at R$ 1,300,000.00 and 2nd Auction on 11/05/2026 starting at R$ 650,000.00 (~R$ 4,545/sqm).',
        p1Label: '1st Auction (11/03/2026):',
        p1Val: 'R$ 1,300,000.00',
        p2Label: '2nd Auction (11/05/2026):',
        p2Val: 'R$ 650,000.00 (2nd Auction starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-raul-pompeia-240-apto-702/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Raul%20Pomp%C3%A9ia%20240%20Apt%20702%20in%20Copacabana%20(Posto%206)%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Barra da Tijuca/RJ',
        title: 'Judicial Auction of Apartment in Barra da Tijuca — Avenida Afonso de Taunay #631 — Apt 101',
        desc: 'Spacious 185 sqm (1,991 sq ft) residential apartment on the 1st floor (Unit 101) in an exclusive 3-story low-rise building located at tree-lined Avenida Afonso de Taunay #631, in prime Jardim Oceânico, Barra da Tijuca. The property includes 2 deeded parking spaces. The building does not feature shared leisure or concierge amenities, ensuring exceptional privacy and substantially lower monthly condominium fees. Highly sought-after location within easy walking distance of the Jardim Oceânico Subway Station (Line 4), gourmet dining along Olegário Maciel, and Barra Beach. Official appraisal of R$ 1,850,000.00 with 2nd Auction at 50% for R$ 925,000.00 (~R$ 5,000/sqm). 9th Land Registry Title #165.384 & IPTU #186.284.02.',
        p1Label: '1st Auction (10/15/2026):',
        p1Val: 'R$ 1,850,000.00',
        p2Label: '2nd Auction (10/20/2026):',
        p2Val: 'R$ 925,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-afonso-de-taunay-631-apto-101/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Avenida%20Afonso%20de%20Taunay%20631%20Apt%20101%20in%20Barra%20da%20Tijuca%20(Jardim%20Oce%C3%A2nico)%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • São Conrado/RJ',
        title: 'Judicial Auction of Duplex Apartment in São Conrado — Estrada das Canoas #722 — Block 2, Apt 109',
        desc: 'Quiet rear-facing residential unit in Block 2 (Unit 109) at the classic Conjunto Residencial Recreio das Canoas (built 1960) on Estrada das Canoas #722, São Conrado, Rio de Janeiro South Zone. Featuring a custom duplex configuration resulting from ~2-meter sublevel excavation: lower private floor with bedroom, and upper social floor with living room, architect-designed kitchen and full bathroom cladded in authentic Carrara marble with hydromassage. Resort-style amenities: active on-site restaurant, pool, BBQ pavilion, sports court, dirt soccer field, gym, party hall, laundry, and 24/7 manned security gate. Appraisal of R$ 728,710.50 with 2nd Auction at 50% for R$ 364,355.25. 5th Land Registry Title #24.339 & IPTU #0.385.263-9.',
        p1Label: '1st Auction (11/04/2026):',
        p1Val: 'R$ 728,710.50',
        p2Label: '2nd Auction (11/25/2026):',
        p2Val: 'R$ 364,355.25 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/sao-conrado/apartamento/estrada-das-canoas-722-bloco-2-apto-109/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Estrada%20das%20Canoas%20722%20Block%202%20Apt%20109%20in%20S%C3%A3o%20Conrado%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Leme/RJ',
        title: 'Judicial Auction of Apartment in Leme — Rua Gustavo Sampaio #723 — Apt 601',
        desc: 'Traditional 95 sqm (1,022 sq ft) residential apartment on the 6th floor (Unit 601) in the classic Edifício Waldorf (built in 1952) at Rua Gustavo Sampaio #723, in the peaceful and prestigious neighborhood of Leme, Rio de Janeiro South Zone. 12-story building built on street alignment, serviced by 3 elevators (2 passenger, 1 service), collective garage, 24-hour doorman and CCTV (no party hall or playground, ensuring tranquility). Judicial appraisal of R$ 1,400,000.00 with 2nd Auction starting at 50% for R$ 700,000.00 (~R$ 7,368.42/sqm). 5th Land Registry Title #87.664 & IPTU #0.578.298-2.',
        p1Label: '1st Auction (11/05/2026):',
        p1Val: 'R$ 1,400,000.00',
        p2Label: '2nd Auction (11/10/2026):',
        p2Val: 'R$ 700,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leme/apartamento/rua-gustavo-sampaio-723-apto-601/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Gustavo%20Sampaio%20723%20Apt%20601%20in%20Leme%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Botafogo/RJ',
        title: 'Judicial Auction of Apartment in Botafogo — Rua General Góes Monteiro #8 — Block F, Apt 203',
        desc: 'Prime 94 sqm (1,011 sq ft) residential apartment on the 2nd floor (Unit 203 of Block F) with direct views of Sugarloaf Mountain, 3 bedrooms, 2 social bathrooms, living/dining room, kitchen, laundry, full maid quarters, 1 covered parking stall and 1 guest stall. 1974 gated complex with 7 towers of 25 floors (4 units/floor), 2 pools, private woods, sports court, kids playground, on-site grocery, dedicated party halls per tower, parking attendants, and 24/7 security. Appraisal of R$ 1,128,000.00 with 2nd Auction at 50% for R$ 564,000.00 (~R$ 6,000.00/sqm). 3rd Land Registry Title #52.894 & IPTU #1.245.048-2.',
        p1Label: '1st Auction (10/19/2026):',
        p1Val: 'R$ 1,128,000.00',
        p2Label: '2nd Auction (10/22/2026):',
        p2Val: 'R$ 564,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-general-goes-monteiro-8-bloco-f-apto-203/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20General%20G%C3%B3es%20Monteiro%208%20Block%20F%20Apt%20203%20in%20Botafogo%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Santa Rosa / Niterói/RJ',
        title: 'Judicial Auction of Apartment in Santa Rosa / Niterói — Rua Vereador Duque Estrada #169 — Block 3, Apt 402',
        desc: 'Spacious residential 138 sqm apartment on the 4th floor (Unit 402 of Block 3) at Rua Vereador Duque Estrada #169, in prime Santa Rosa, Niterói/RJ. Featuring living and dining room, 2 bedrooms, bathroom, breakfast kitchen, balcony, laundry area, maid suite (bedroom & bath), and 1 parking space. Club condominium with 4 buildings; Block 3 has 5 floors, tile facade and 1 elevator. Resort-style amenities: 2 swimming pools, gym, party hall with BBQ grill, games room, gardens, 24h security, and CCTV. Court appraisal of R$ 470,000.00 with 2nd Auction at 50% for R$ 235,000.00 (~R$ 1,702.89/sqm). 8th Land Registry Title #15.819 & IPTU #824741.',
        p1Label: '1st Auction (09/22/2026):',
        p1Val: 'R$ 470,000.00',
        p2Label: '2nd Auction (09/24/2026):',
        p2Val: 'R$ 235,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/niteroi/apartamento/rua-vereador-duque-estrada-169-bloco-3-apto-402/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Vereador%20Duque%20Estrada%20169%20Block%203%20Apt%20402%20in%20Santa%20Rosa%20-%20Niter%C3%B3i.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment in Copacabana — Rua Barão de Ipanema #105 — Apt 604',
        desc: 'Residential 70 sqm apartment on the 6th floor (Unit 604) in Edifício Carmem D´Almeida, at Rua Barão de Ipanema #105, Copacabana, Rio de Janeiro. 1971 residential building with 24-hour doorman, 3 elevators (2 passenger and 1 service), children playground, and full CCTV surveillance cameras. Court appraisal of R$ 750,000.00 with 2nd Auction at 50% for R$ 375,000.00 (~R$ 5,357.14/sqm). 5th Land Registry Title #31.436 & IPTU #0.984.275-8.',
        p1Label: '1st Auction (10/14/2026):',
        p1Val: 'R$ 750,000.00',
        p2Label: '2nd Auction (10/21/2026):',
        p2Val: 'R$ 375,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-barao-de-ipanema-105-apto-604/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Bar%C3%A3o%20de%20Ipanema%20105%20Apt%20604%20in%20Copacabana.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment in Copacabana — Rua Siqueira Campos #143 — Apt 740',
        desc: 'Residential 44 sqm apartment on the 7th floor (rear-facing, Unit 740) at Rua Siqueira Campos #143, in prime Copacabana, Rio de Janeiro. Established 1970 building with plaster mortar facade, wooden window frames, street-level retail stores, 2 elevators for 7 passengers, and entrance hall with marmorite floor without modernization. No parking space. Appraisal of R$ 390,000.00 with 2nd Auction at 50% for R$ 195,000.00 (~R$ 4,431.81/sqm). 5th Land Registry Title #27773 & IPTU #046100-9.',
        p1Label: '1st Auction (10/05/2026):',
        p1Val: 'R$ 390,000.00',
        p2Label: '2nd Auction (10/08/2026):',
        p2Val: 'R$ 195,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-siqueira-campos-143-apto-740/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Siqueira%20Campos%20143%20Apt%20740%20in%20Copacabana.'
      },
      {
        tag: 'Residential • Centro/RJ',
        title: 'Judicial Auction of Apartment in Downtown Rio — Rua Evaristo da Veiga #21 — Apt 503',
        desc: 'Compact 27 sqm residential apartment on the 5th floor (Unit 503) at Rua Evaristo da Veiga #21, in prime Downtown Rio de Janeiro, next to Cinelândia, Passeio Público, and Lapa. Classic 80-year-old building with 7 floors, 49 commercial/residential units, 2 ground floor shops, iron gate, black granite lobby, 2 brand new elevators, and CCTV cameras. Appraisal of R$ 160,275.10 with 2nd Auction at 50% for R$ 80,137.55 (~R$ 2,968.05/sqm). 7th Land Registry Title #19262-2 & IPTU #0704066-0.',
        p1Label: '1st Auction (10/26/2026):',
        p1Val: 'R$ 160,275.10',
        p2Label: '2nd Auction (11/05/2026):',
        p2Val: 'R$ 80,137.55 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-evaristo-da-veiga-21-apto-503/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Evaristo%20da%20Veiga%2021%20Apt%20503%20in%20Downtown%20Rio.'
      },
      {
        tag: 'Residential • Jardim Guanabara/RJ',
        title: 'Judicial Auction of Apartment in Jardim Guanabara — Rua Breno Guimarães #106 — Apt 105',
        desc: 'Spacious residential 122 sqm (1,313 sq ft) apartment on the 1st floor (Unit 105) at Rua Breno Guimarães #106, in prime Jardim Guanabara, Ilha do Governador, Rio de Janeiro. Condominium with full leisure amenities including children playground and party room. Exclusive right to 2 deeded parking spaces. Upscale and safe neighborhood close to Praia da Bica. Exceptional 50% discount on 2nd auction (~R$ 2,540/sqm with 2 parking spaces). Appraisal of R$ 620,000.00 with 2nd Auction at 50% for R$ 310,000.00. 11th Land Registry Title #86.056 & IPTU #1.898.000-3.',
        p1Label: '1st Auction (11/19/2026):',
        p1Val: 'R$ 620,000.00',
        p2Label: '2nd Auction (11/26/2026):',
        p2Val: 'R$ 310,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/jardim-guanabara/apartamento/rua-breno-guimaraes-106-apto-105/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Breno%20Guimar%C3%A3es%20106%20Apt%20105%20in%20Jardim%20Guanabara%20(Ilha%20do%20Governador)%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Tijuca/RJ',
        title: 'Judicial Auction of Apartment in Tijuca — Rua Barão de Itapagipe #417 — Block A, Apt 501',
        desc: 'Residential 50 sqm apartment, street-facing on the 5th floor (Unit 501) of Block A at Rua Barão de Itapagipe #417, Tijuca, North Zone of Rio de Janeiro. Street-facing unit offering superior daylight and natural ventilation. Prime residential street near Afonso Pena and São Francisco Xavier metro stations, schools, and commerce. Outstanding acquisition cost with 50% discount (~R$ 2,800/sqm on 2nd auction). Official appraisal of R$ 280,000.00 with 2nd Auction at 50% for R$ 140,000.00. 11th Land Registry Title #3553 & IPTU #11509312.',
        p1Label: '1st Auction (09/30/2026):',
        p1Val: 'R$ 280,000.00',
        p2Label: '2nd Auction (10/07/2026):',
        p2Val: 'R$ 140,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-barao-de-itapagipe-417-bloco-a-apto-501/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Bar%C3%A3o%20de%20Itapagipe%20417%20Block%20A%20Apt%20501%20in%20Tijuca%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Leblon/RJ',
        title: 'Judicial Auction of 2-Bedroom Apartment in Leblon — Rua General Urquiza #117 — Apt 501',
        desc: 'Residential 75 sqm apartment on the 5th floor (Unit 501) of Edifício 24 de Outubro (1953), at Rua General Urquiza #117, in prime Leblon, South Zone of Rio de Janeiro. Features double living room (ceramic floor), 2 bedrooms (parquet floors), ceramic bathroom, kitchen, laundry area, and service bathroom. No deeded parking space. Rare acquisition opportunity in Brazil’s most valued neighborhood (~R$ 9,660/sqm on 2nd auction). Appraisal of R$ 1,449,000.00 with 2nd Auction at 50% for R$ 724,500.00. 2nd Land Registry Title #995653 & IPTU #0642600-1.',
        p1Label: '1st Auction (09/28/2026):',
        p1Val: 'R$ 1,449,000.00',
        p2Label: '2nd Auction (10/01/2026):',
        p2Val: 'R$ 724,500.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-general-urquiza-117-apto-501/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20General%20Urquiza%20117%20Apt%20501%20in%20Leblon%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Laranjeiras/RJ',
        title: 'Judicial Auction of Studio Apartment in Laranjeiras — Rua das Laranjeiras #336 — Apt 826',
        desc: 'Compact residential 24 sqm apartment on the 8th floor of Block 1 (Entrance B) at Rua das Laranjeiras #336, in charming Laranjeiras, South Zone of Rio de Janeiro. 1972 building in good condition with 24-hour doorman, CCTV, BBQ social area, community chapel, and bike storage. Property is closed/vacant and without deeded parking space. Exceptional rental yield potential in South Zone (~R$ 6,875/sqm on 2nd auction). Appraisal of R$ 330,000.00 with 2nd Auction at 50% for R$ 165,000.00. 9th Registry Title #91,053 & IPTU #0.986.826-6.',
        p1Label: '1st Auction (09/22/2026):',
        p1Val: 'R$ 330,000.00',
        p2Label: '2nd Auction (09/23/2026):',
        p2Val: 'R$ 165,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/laranjeiras/apartamento/rua-das-laranjeiras-336-bloco-1-apto-826/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20das%20Laranjeiras%20336%20Apt%20826%20in%20Laranjeiras%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Downtown/RJ',
        title: 'Judicial Auction of Studio Apartment in Downtown Rio — Avenida Rio Branco #185 — Apt 1224',
        desc: 'Residential 33 sqm apartment on the 12th floor of the landmark Edifício Marquês do Herval, at the corner of Avenida Rio Branco and Avenida Almirante Barroso. 21-story building with 8 modernized elevators, subterranean foyer in marble and Portuguese cobblestones, commercial arcade with 10 shops, bank, and pharmacy. 24h security, CCTV, and marble corridors in good maintenance condition. Exceptional acquisition cost on 2nd auction (~R$ 2,847/sqm). Appraisal of R$ 187,941.39 and 2nd Auction at 50% for R$ 93,970.70. 7th Registry Title #39,611 & IPTU #0.690.969-1.',
        p1Label: '1st Auction (10/05/2026):',
        p1Val: 'R$ 187,941.39',
        p2Label: '2nd Auction (10/08/2026):',
        p2Val: 'R$ 93,970.70 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/avenida-rio-branco-185-apto-1224/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Avenida%20Rio%20Branco%20185%20Apt%201224%20in%20Downtown%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Studio Apartment in Copacabana — Rua Barata Ribeiro #334 — Apt 303',
        desc: 'Compact residential 33 sqm apartment in prime Copacabana, just three blocks from the beach and close to metro stations. 12-story building with 2 elevators, 37 apartments total (4 per floor from 2nd to 10th floors and penthouse), simple stone entry with aluminum gate, rooftop open terrace, in regular maintenance condition. Outstanding rental investment yield (~R$ 7,884/sqm on 2nd auction). Appraisal of R$ 371,704.75 with 2nd Auction opening at 70% for R$ 260,193.33. 5th Registry Title #102,946 & IPTU #0904756-4.',
        p1Label: '1st Auction (09/28/2026):',
        p1Val: 'R$ 371,704.75',
        p2Label: '2nd Auction (10/01/2026):',
        p2Val: 'R$ 260,193.33 (70% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-barata-ribeiro-334-apto-303/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Barata%20Ribeiro%20334%20Apt%20303%20in%20Copacabana%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Ipanema/RJ',
        title: 'Judicial Auction of Apartment in Ipanema — Rua Vinícius de Moraes #71 — Apt 402',
        desc: 'Residential 105 sqm apartment with 1 deeded parking space in Edifício Acapulco, located on prestigious Rua Vinícius de Moraes, just steps from Ipanema Beach (Posto 9). Low-density 1972 building with 8 stories and only 2 units per floor (16 residences total), 24h security, 2 elevators, playground, and party hall. Property is currently closed/vacant. Appraisal of R$ 2,500,000.00 with 2nd Auction at 50% for R$ 1,250,000.00 (~R$ 11,904/sqm). 5th Registry Title #32,817 & IPTU #1.227.500-4.',
        p1Label: '1st Auction (09/28/2026):',
        p1Val: 'R$ 2,500,000.00',
        p2Label: '2nd Auction (09/30/2026):',
        p2Val: 'R$ 1,250,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/ipanema/apartamento/rua-vinicius-de-moraes-71-apto-402/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Vin%C3%ADcius%20de%20Moraes%2071%20Apt%20402%20in%20Ipanema%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of 2-Bedroom Apartment in Copacabana — Rua Duvivier #50 — Apt 201',
        desc: 'Front-facing 102 sqm apartment just two blocks from Copacabana Beach. Features parquet living room, balcony with glass curtains, 2 bedrooms, guest bathroom, kitchen, laundry area, and renovated reversible maid quarters. Classic 1938 building with 8 stories, 3 units per floor, 2 elevators, party hall, CCTV, and doorman Mon-Sat 9 AM - 9 PM. No garage. Appraisal of R$ 1,085,883.50 with 2nd Auction opening at 50% for R$ 542,941.75 (~R$ 5,320/sqm). 2nd Registry Title #52,950 & IPTU #0.566.818-1.',
        p1Label: '1st Auction (09/22/2026):',
        p1Val: 'R$ 1,085,883.50',
        p2Label: '2nd Auction (09/23/2026):',
        p2Val: 'R$ 542,941.75 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-duvivier-50-apto-201/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Duvivier%2050%20Apt%20201%20in%20Copacabana%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Humaitá/RJ',
        title: 'Judicial Auction of 3-Bedroom Apartment in Humaitá — Rua Davi Campista #296 — Apt 603',
        desc: 'Spacious 135 sqm apartment with 3 bedrooms (1 with private balcony), expansive living room with balcony, genuine wood parquet floors, vintage bathroom, kitchen, and full maid quarters. Entitled to 1 parking space in a condominium offering 24h doorman and leisure amenities in Humaitá. In need of complete renovation (prime retrofit opportunity with acquisition at ~R$ 7,200/sqm on 2nd auction). Appraisal of R$ 1,946,197.60 with 2nd Auction opening at 50% for R$ 973,098.80. Registered at 2nd Registry & IPTU #0520187-6.',
        p1Label: '1st Auction (09/21/2026):',
        p1Val: 'R$ 1,946,197.60',
        p2Label: '2nd Auction (09/24/2026):',
        p2Val: 'R$ 973,098.80 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/humaita/apartamento/rua-davi-campista-296-apto-603/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Davi%20Campista%20296%20Apt%20603%20in%20Humait%C3%A1%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Botafogo/RJ',
        title: 'Judicial Auction of 3-Bedroom Apartment in Botafogo — Rua Voluntários da Pátria #166 — Apt 203',
        desc: 'Spacious 115 sqm classic apartment with 3 bedrooms, guest bathroom, living room, kitchen, laundry room, and full maid quarters in a classic 1946 building with 13 stories, granite entrance hall with garden, 24h doorman, rooftop terrace with BBQ, and rotary parking spaces. In need of complete renovation (prime retrofit opportunity with acquisition at ~R$ 3,900/sqm on 2nd auction). Appraisal of R$ 897,000.00 with 2nd Auction opening at 50% for R$ 448,500.00. Title #6,877 (3rd Registry) & IPTU #0.540.237-5.',
        p1Label: '1st Auction (09/18/2026):',
        p1Val: 'R$ 897,000.00',
        p2Label: '2nd Auction (09/28/2026):',
        p2Val: 'R$ 448,500.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-166-apto-203/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Volunt%C3%A1rios%20da%20P%C3%A1tria%20166%20Apt%20203%20in%20Botafogo%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Tijuca/RJ',
        title: 'Judicial Auction of 2-Bedroom Apartment in Tijuca — Rua Enes de Souza #45 — Apt 204',
        desc: '50 sqm apartment, quiet rear orientation, featuring living room, 2 bedrooms (1 suite), guest bathroom, kitchen, and laundry room in a 1967 building with 1 elevator and low monthly fees. Requires complete renovation (prime retrofit opportunity with 2nd auction price at ~R$ 2,600/sqm). Appraisal of R$ 260,000.00 with 2nd Auction starting at 50% for R$ 130,000.00. Title #143.042 (11th Registry) & IPTU #0.913.176-4.',
        p1Label: '1st Auction (10/13/2026):',
        p1Val: 'R$ 260,000.00',
        p2Label: '2nd Auction (10/15/2026):',
        p2Val: 'R$ 130,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-enes-de-souza-45-apto-204/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Enes%20de%20Souza%2045%20Apt%20204%20in%20Tijuca%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • São Conrado/RJ',
        title: 'Judicial Auction of Luxury Apartment in São Conrado — Av. Prefeito Mendes de Morais #1400 — Block 2, Apt 503',
        desc: 'Spacious 268.84 sqm apartment in landmark oceanfront Praia Guinle Condominium on São Conrado Beach. High-end resort amenities (pool, gym, sauna, multisport court, party hall, playground) and 3 parking spaces. Appraisal of R$ 5,221,000.00 with 2nd Auction opening at 50% for R$ 2,610,500.00. Title #46126 (2nd Registry) & IPTU #1.730.497-3.',
        p1Label: '1st Auction (09/22/2026):',
        p1Val: 'R$ 5,221,000.00',
        p2Label: '2nd Auction (09/29/2026):',
        p2Val: 'R$ 2,610,500.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/sao-conrado/apartamento/avenida-prefeito-mendes-de-morais-1400-bloco-2-apto-503/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20auction%20for%20apartment%20503%20Block%202%20in%20Praia%20Guinle%20Condominium%20on%20Avenida%20Prefeito%20Mendes%20de%20Morais%201400%20in%20S%C3%A3o%20Conrado.'
      },
      {
        tag: 'Residential • Lagoa/RJ',
        title: 'Judicial Auction of Duplex Penthouse in Lagoa — Rua Fonte da Saudade #270 — Apt 402',
        desc: 'Exclusive 308 sqm duplex penthouse (~390 sqm usable) with 4 suites, office, 90 sqm salon, private pool, sauna, hot tub, sun terrace, and 4 parking spaces in prime Lagoa. Appraisal of R$ 5,685,000.00 with 2nd Auction opening at 50% for R$ 2,842,500.00. Title #96157 (2nd Registry) & IPTU #3118779-2.',
        p1Label: '1st Auction (09/21/2026):',
        p1Val: 'R$ 5,685,000.00',
        p2Label: '2nd Auction (09/24/2026):',
        p2Val: 'R$ 2,842,500.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/lagoa/cobertura/rua-fonte-da-saudade-270-apto-402/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20auction%20for%20duplex%20penthouse%20402%20on%20Rua%20Fonte%20da%20Saudade%20270%20in%20Lagoa%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Urca/RJ',
        title: 'Judicial Auction of Apartment in Urca — Rua Cândido Gaffrée #166 — Apt 202 (121 sqm)',
        desc: '121 sqm apartment in Edifício Enseada Condominium, located on peaceful and leafy Rua Cândido Gaffrée in Urca, steps from the shoreline and Sugarloaf trails. Expansive layout with 50% discount on 2nd Auction. Title #28.527 (3rd Registry) & IPTU #1.173906-7.',
        p1Label: '1st Auction (10/14/2026):',
        p1Val: 'R$ 1,700,000.00',
        p2Label: '2nd Auction (10/20/2026):',
        p2Val: 'R$ 850,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/rua-candido-gaffree-166-apto-202/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Edif%C3%ADcio%20Enseada%20on%20Rua%20C%C3%A2ndido%20Gaffr%C3%A9e%20166%20Apt%20202%20in%20Urca%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Ipanema/RJ',
        title: 'Judicial Auction of Apartment in Ipanema — Rua Barão da Torre #292 — Apt 404 (45 sqm)',
        desc: '45 sqm apartment on the 4th floor with 1 deeded parking space in a luxury condominium featuring leisure amenities, elevators, and security in prime Ipanema. Title #104771 (5th Registry) & IPTU #3009818-0.',
        p1Label: '1st Auction (09/09/2026):',
        p1Val: 'R$ 1,357,354.55',
        p2Label: '2nd Auction (09/11/2026):',
        p2Val: 'R$ 814,412.73 (60% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/ipanema/apartamento/rua-barao-da-torre-292-apto-404/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Bar%C3%A3o%20da%20Torre%20292%20Apt%20404%20in%20Ipanema%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Rio Comprido/RJ',
        title: 'Judicial Auction of Apartment in Rio Comprido — Av. Presidente Vargas #3555 — Block E, Apt 403 (57 sqm)',
        desc: '57 sqm apartment in Block E, currently vacant (unoccupied) guaranteeing immediate key handover and possession. Condominium with infrastructure, concierge, and elevators with fast transit to Downtown and South Zone. Title #14.273 (11th Registry) & IPTU #0013203-5.',
        p1Label: '1st Auction (09/14/2026):',
        p1Val: 'R$ 228,000.00',
        p2Label: '2nd Auction (09/17/2026):',
        p2Val: 'R$ 171,000.00 (75% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/rio-comprido/apartamento/avenida-presidente-vargas-3555-bloco-e-apto-403/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Av.%20Presidente%20Vargas%203555%20Block%20E%20Apt%20403%20in%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Botafogo/RJ',
        title: 'Judicial Auction of Apartment in Botafogo — Rua Lauro Müller #26 — Apt 1001 (39 sqm)',
        desc: '39 sqm 10th floor front-facing apartment with morning sun and open views of Botafogo Bay, Christ the Redeemer, and UFRJ. 1 bedroom, living room, bathroom, kitchen in building with 24/7 concierge and 3 elevators right by Rio Sul. Title #35.489 (3rd Registry) & IPTU #0.351.945-1.',
        p1Label: '1st Auction (09/14/2026):',
        p1Val: 'R$ 541,158.40',
        p2Label: '2nd Auction (09/16/2026):',
        p2Val: 'R$ 271,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-26-apto-1001/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Lauro%20M%C3%BCller%2026%20Apt%201001%20in%20Botafogo%20-%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Maracanã/RJ',
        title: 'Judicial Auction of Apartment in Maracanã — Av. Maracanã #480 — Apt 902 (95 sqm)',
        desc: '95 sqm 9th floor apartment with 1 parking space in a condominium featuring 24/7 concierge, facial recognition access, CCTV, marble and wood lobby, 2 blocks with 2 elevators each, and party hall. Title #27.191 (11th Registry) & IPTU #1.227.137-5.',
        p1Label: '1st Auction (09/28/2026):',
        p1Val: 'R$ 484,690.00',
        p2Label: '2nd Auction (09/30/2026):',
        p2Val: 'R$ 242,345.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/avenida-maracana-480-apto-902/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Av.%20Maracan%C3%A3%20480%20Apt%20902%20in%20Rio%20de%20Janeiro.'
      },
      {
        tag: 'Residential • Barra da Tijuca/RJ',
        title: 'Judicial Auction of Apartment in Barra da Tijuca — Av. Jornalista Ricardo Marinho #300 — Apt 312 (101 sqm)',
        desc: '101 sqm quiet rear-facing apartment on the 3rd floor in a full resort amenity condominium with services, 24/7 security concierge, and 1 covered garage space. Built in 1989 in prime Barra location. Title #150903 (9th Registry) & IPTU #1.845.927-1.',
        p1Label: '1st Auction (08/24/2026):',
        p1Val: 'R$ 1,300,000.00',
        p2Label: '2nd Auction (08/26/2026):',
        p2Val: 'R$ 650,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-jornalista-ricardo-marinho-300-apto-312/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Av.%20Jornalista%20Ricardo%20Marinho%20300%20Apt%20312%20in%20Barra%20da%20Tijuca.'
      },
      {
        tag: 'Residential • Flamengo/RJ',
        title: 'Judicial Auction of Luxury Apartment at Praia do Flamengo #284 — Apt 301 (463 sqm)',
        desc: 'Ultra-luxury 463 sqm residence along prestigious Praia do Flamengo. 9-story building with 2 residences per floor, 24/7 concierge, and 3 elevators. Spectacular views of Guanabara Bay, Flamengo Park, and Sugarloaf Mountain. Title #293012 (9th Registry) & IPTU #0245475-9.',
        p1Label: '1st Auction (10/05/2026):',
        p1Val: 'R$ 4,100,000.00',
        p2Label: '2nd Auction (10/08/2026):',
        p2Val: 'R$ 2,050,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/praia-do-flamengo-284-apto-301/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Praia%20do%20Flamengo%20284%20Apt%20301%20in%20Flamengo.'
      },
      {
        tag: 'Residential • Centro/RJ',
        title: 'Judicial Auction of Apartment in Downtown Rio — Rua Leandro Martins #22 — Apt 620 (38 sqm)',
        desc: '38 sqm apartment on the 6th floor of Sagres Building on Rua Leandro Martins, near VLT light rail and Metro. Salon partitioned into anteroom and 2 rear-facing rooms, bathroom, and kitchen area. 24/7 concierge and 4 elevators. Title #14672 (4th Registry) & IPTU #0568243-0.',
        p1Label: '1st Auction (09/24/2026):',
        p1Val: 'R$ 194,619.76',
        p2Label: '2nd Auction (09/29/2026):',
        p2Val: 'R$ 98,000.00 (~50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-leandro-martins-22-apto-620/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Leandro%20Martins%2022%20Apt%20620%20in%20Downtown%20Rio.'
      },
      {
        tag: 'Residential • Botafogo/RJ',
        title: 'Judicial Auction of Apartment in Botafogo — Rua da Passagem #159 — Apt 803 (22 sqm)',
        desc: 'Front-facing 22 sqm studio on the 8th floor on Rua da Passagem, steps from Botafogo Metro and shopping. Vacant for several years. 24/7 concierge and 2 elevators. Title #0053374 (3rd Registry) & IPTU #0.691.419-6.',
        p1Label: '1st Auction (09/21/2026):',
        p1Val: 'R$ 340,000.00',
        p2Label: '2nd Auction (09/23/2026):',
        p2Val: 'R$ 204,000.00 (60% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-da-passagem-159-apto-803/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20da%20Passagem%20159%20Apt%20803%20in%20Botafogo.'
      },
      {
        tag: 'Residential • Maracanã/RJ',
        title: 'Judicial Auction of Apartment in Maracanã — Rua Morais e Silva #51 — Apt 1401, Block 2 (85 sqm)',
        desc: 'High-floor 85 sqm apartment with 1 parking space in elevated garage of Block 2. Strategic location near UERJ University, Maracanã Stadium, and Metro. Currently closed. Title #30,179 (11th Registry) & IPTU #1.514.716-8.',
        p1Label: '1st Auction (09/08/2026):',
        p1Val: 'R$ 610,000.00',
        p2Label: '2nd Auction (09/10/2026):',
        p2Val: 'R$ 305,000.00 (50% discount)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-morais-e-silva-51-apto-1401/',
        waText: 'Hello,%20I%20would%20like%20information%20regarding%20the%20auction%20for%20apartment%201401%20Block%202%20at%20Rua%20Morais%20e%20Silva%2051%20in%20Maracan%C3%A3.'
      },
      {
        tag: 'Residential • Urca/RJ',
        title: 'Judicial Auction of Top-Floor Apartment in Urca — Portugal Avenue #584 — Apt 501 (Urca-Mar Building — 68 sqm)',
        desc: 'Top-floor 68 sqm apartment in the Urca-Mar Building, featuring an expansive open front terrace with panoramic views of Botafogo Cove and Guanabara Bay. Living room, kitchen, 1 suite, guest bathroom, and laundry; no garage space. Title #40.262 (3rd Registry) & IPTU #0650419-5.',
        p1Label: '1st Auction (08/25/2026):',
        p1Val: 'R$ 1,091,220.92',
        p2Label: '2nd Auction (08/27/2026):',
        p2Val: 'R$ 545,610.46 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/apartamento/avenida-portugal-584-apto-501/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Portugal%20Avenue%20584%20Apt%20501%20in%20Urca.'
      },
      {
        tag: 'Residential • Flamengo/RJ',
        title: 'Judicial Auction of Apartment in Flamengo — Honório de Barros Street #23 — Apt 601 (70 sqm)',
        desc: 'Residential 70 sqm apartment in a 1963 building with 4 elevators and 24/7 concierge on Honório de Barros Street, a tree-lined prime residential street in Flamengo near the park and metro. Unit has no assigned parking. Title #281.699 (9th Registry) & IPTU #0714891-9.',
        p1Label: '1st Auction (09/08/2026):',
        p1Val: 'R$ 720,000.00',
        p2Label: '2nd Auction (09/10/2026):',
        p2Val: 'R$ 432,000.00 (60% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/flamengo/apartamento/rua-honorio-de-barros-23-apto-601/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Hon%C3%B3rio%20de%20Barros%2023%20in%20Flamengo.'
      },
      {
        tag: 'Residential • Botafogo/RJ',
        title: 'Judicial Auction of Apartment in Botafogo — Guilhermina Guinle Street #18 — Apt 401 (72 sqm)',
        desc: 'Front-facing 72 sqm apartment in a 1959 corner building between Guilhermina Guinle and Voluntários da Pátria. Prime quiet residential street steps away from Botafogo Metro and dining. Title #60.137 (3rd Registry) & IPTU #0.277.088-1.',
        p1Label: '1st Auction (09/24/2026):',
        p1Val: 'R$ 828,000.00',
        p2Label: '2nd Auction (09/29/2026):',
        p2Val: 'R$ 496,800.00 (60% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-guilhermina-guinle-18-apto-401/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Guilhermina%20Guinle%2018%20in%20Botafogo.'
      },
      {
        tag: 'Residential • Barra da Tijuca/RJ',
        title: 'Judicial Auction of Apartment on Lúcio Costa Ave #6500 — Apt 203 (Alfa Plaza Condominium — 60 sqm)',
        desc: 'Front-facing 60 sqm apartment in the premier oceanfront Alfa Plaza Condominium on Barra da Tijuca beach. Amenities include elevators, BBQ, private resident shuttle bus to South Zone & Downtown, swimming pools, sports clubs, and 24/7 security. Title #121.926 (9th Registry) & IPTU #1.690.545-7.',
        p1Label: '1st Auction (08/27/2026):',
        p1Val: 'R$ 850,000.00',
        p2Label: '2nd Auction (09/01/2026):',
        p2Val: 'R$ 425,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/barra-da-tijuca/apartamento/avenida-lucio-costa-6500-apto-203/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Alfa%20Plaza%20on%20L%C3%BAcio%20Costa%206500%20in%20Barra%20da%20Tijuca.'
      },
      {
        tag: 'Residential • Santa Teresa/RJ',
        title: 'Judicial Auction of House in Santa Teresa — Júlio Otoni Street #254 (203 sqm)',
        desc: 'Residential house with 12 bedrooms (including Presidential Suite), entry garden, reception, bar, restaurant, kitchen, pool, steam sauna, and panoramic views of Christ the Redeemer and Sugarloaf Mountain. Title #52318 (9th Registry) & IPTU #0.417.443-9.',
        p1Label: '1st Auction (09/21/2026):',
        p1Val: 'R$ 3,153,239.03',
        p2Label: '2nd Auction (09/23/2026):',
        p2Val: 'R$ 1,577,000.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/casa/rua-julio-otoni-254/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20house%20auction%20at%20J%C3%BAlio%20Otoni%20254%20in%20Santa%20Teresa.'
      },
      {
        tag: 'Commercial/Residential • Santa Teresa/RJ',
        title: 'Judicial Auction of Historic Mansion in Santa Teresa — Joaquim Murtinho Street #587 — Former Inn (1,132 sqm)',
        desc: '1938 historic 1,132 sqm property featuring 4-story main mansion with suites, pool/sauna/BBQ leisure grounds, mezzanine bungalow, upper annex building with 5 units, and preserved forest. Title #2.117 (7th Registry) & IPTU #0113118-4.',
        p1Label: '1st Auction (09/28/2026):',
        p1Val: 'R$ 2,900,000.00',
        p2Label: '2nd Auction (10/01/2026):',
        p2Val: 'R$ 1,740,000.00 (60% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/pousada-casarao/rua-joaquim-murtinho-587/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20historic%20mansion%20auction%20at%20Joaquim%20Murtinho%20587%20in%20Santa%20Teresa.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Penthouse in Copacabana — Silva Castro Street #44 — Apt 1001 (206 sqm)',
        desc: 'Exceptional 206 sqm duplex penthouse with 3 bedrooms (1 suite), terrace with slate tiles, wooden deck, round fiberglass pool, and private BBQ. Title #107.466 (5th Registry) & IPTU #0.065.088-7.',
        p1Label: '1st Auction (09/14/2026):',
        p1Val: 'R$ 2,500,000.00',
        p2Label: '2nd Auction (09/17/2026):',
        p2Val: 'R$ 1,500,000.00 (60% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/cobertura/rua-silva-castro-44-apto-1001/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20penthouse%20auction%20at%20Silva%20Castro%2044%20in%20Copacabana.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment in Copacabana — Marechal Mascarenhas de Morais Street #190 — Apt 703 (79 sqm)',
        desc: 'Residential 79 sqm apartment in a 1982 building with 3 elevators, garage, playground with party room, 24/7 doorman, and security cameras. Title #49.437 (5th Registry) & IPTU #1.534.550-7.',
        p1Label: '1st Auction (09/17/2026):',
        p1Val: 'R$ 1,091,500.00',
        p2Label: '2nd Auction (09/22/2026):',
        p2Val: 'R$ 545,750.00 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-marechal-mascarenhas-de-morais-190-apto-703/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Marechal%20Mascarenhas%20de%20Morais%20190%20in%20Copacabana.'
      },
      {
        tag: 'Residential • Maracanã/RJ',
        title: 'Judicial Auction of Apartment in Maracanã — Dona Zulmira Street #19 — Apt 101 (66 sqm)',
        desc: 'Front-facing residential apartment with balcony, bedroom, living room, bathroom, kitchen, and maid quarters. 1984 building with 2 elevators, security cameras, 2 garage levels, playground, party room, and BBQ. Title #41.819 (10th Registry) & IPTU #1.640.226-5.',
        p1Label: '1st Auction (09/02/2026):',
        p1Val: 'R$ 406,923.00',
        p2Label: '2nd Auction (09/09/2026):',
        p2Val: 'R$ 203,461.50 (50% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/maracana/apartamento/rua-dona-zulmira-19-apto-101/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20in%20Maracan%C3%A3.'
      },
      {
        tag: 'Residential • Cosme Velho/RJ',
        title: 'Judicial Auction of Penthouse in Cosme Velho — Praça São Judas Tadeu #6 — Apt 601 (590 sqm)',
        desc: 'Luxury 590 sqm residential penthouse at Praça São Judas Tadeu #06, Cosme Velho. Featuring large living room, dining hall, front and side terraces, 5 bedrooms (3 suites), social bathroom, storage room, and 2 maid quarters. Title #124374 (9th Registry) & IPTU #14013544.',
        p1Label: '1st Auction (09/09/2026):',
        p1Val: 'R$ 4,411,000.00',
        p2Label: '2nd Auction (09/16/2026):',
        p2Val: 'R$ 1,543,850.00 (35% starting bid)',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/cosme-velho/cobertura/praca-sao-judas-tadeu-6-apto-601/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20penthouse%20auction%20in%20Cosme%20Velho.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment in Copacabana — M. V. Castro St, 32',
        desc: 'Residential unit located in Copacabana, near the beach and Cardeal Arcoverde subway. Prior notice analysis, tax subrogation, and condo fee liability check completed.',
        p1Label: '1st Auction (08/24/2026):',
        p1Val: 'R$ 480,000.00',
        p2Label: '2nd Auction (09/03/2026):',
        p2Val: 'R$ 240,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-ministro-viveiros-de-castro-32/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20auction%20in%20Copacabana.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment on Atlântica Ave #2,376',
        desc: 'Apartment 203 with 119 sqm in Edifício Assú (Copacabana beachfront) and secondary entrance at 25 Domingos Ferreira St. Living room, 3 bedrooms (2 suites), bathroom, kitchen, and laundry area.',
        p1Label: '1st Auction (08/03/2026):',
        p1Val: 'R$ 1,350,000.00',
        p2Label: '2nd Auction (08/05/2026):',
        p2Val: 'R$ 675,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-2376/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20auction%20on%20Atl%C3%A2ntica%20Ave.'
      },
      {
        tag: 'Residential • Urca/RJ',
        title: 'Judicial Auction of House on Marechal Cantuária St #75 — Urca',
        desc: 'Single-family house with 321 sqm built area, constructed in 1938 facing Urca street. IPTU tax #0.422.940-7. Extremely rare asset in South Zone, Rio de Janeiro.',
        p1Label: '1st Auction (08/19/2026):',
        p1Val: 'R$ 3,820,000.00',
        p2Label: '2nd Auction (08/25/2026):',
        p2Val: 'R$ 1,910,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/urca/casa/rua-marechal-cantuaria-75/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20house%20auction%20in%20Urca.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment on Prado Júnior Ave #298 — Apt 1003',
        desc: 'Apartment 1003 with 42 sqm, rear-facing, no parking space. Residential building constructed in 1957 with 12 floors, 2 elevators, concierge, and security cameras.',
        p1Label: '1st Auction (08/17/2026):',
        p1Val: 'R$ 520,000.00',
        p2Label: '2nd Auction (08/19/2026):',
        p2Val: 'R$ 312,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-prado-junior-298/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%201003.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment on Nossa Senhora de Copacabana Ave #1003 — Apt 1101',
        desc: 'Apartment 1101 with 35 sqm, front-facing, no parking space. Residential building constructed in 1957 with 13 floors, 2 elevators, and 24h concierge.',
        p1Label: '1st Auction (07/27/2026):',
        p1Val: 'R$ 448,971.12',
        p2Label: '2nd Auction (07/29/2026):',
        p2Val: 'R$ 225,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-nossa-senhora-de-copacabana-1003/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%201101.'
      },
      {
        tag: 'Residential • Catete/RJ',
        title: 'Judicial Auction of Apartment on Silveira Martins St #140 — Apt 502',
        desc: 'Apartment 502 with 53 sqm private area, no parking space. Residential building with 8 floors, 7 units per floor, concierge.',
        p1Label: '1st Auction (07/27/2026):',
        p1Val: 'R$ 532,500.63',
        p2Label: '2nd Auction (07/29/2026):',
        p2Val: 'R$ 267,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%20502.'
      },
      {
        tag: 'Residential • Catete/RJ',
        title: 'Judicial Auction of Apartment on Silveira Martins St #140 — Apt 503',
        desc: 'Apartment 503 with 36 sqm private area, no parking space. Residential building with 8 floors, 7 units per floor.',
        p1Label: '1st Auction (07/27/2026):',
        p1Val: 'R$ 334,118.04',
        p2Label: '2nd Auction (07/29/2026):',
        p2Val: 'R$ 168,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/catete/apartamento/rua-silveira-martins-140-apto-503/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%20503.'
      },
      {
        tag: 'Residential • Botafogo/RJ',
        title: 'Judicial Auction of Apartment on Voluntários da Pátria St #381 — Apt 305',
        desc: 'Apartment 305 in Edifício Coaracy Nunes with 109 sqm built area. Property closed for over 10 years. Built in 1945.',
        p1Label: '1st Auction (07/28/2026):',
        p1Val: 'R$ 1,030,339.95',
        p2Label: '2nd Auction (07/30/2026):',
        p2Val: 'R$ 516,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-voluntarios-da-patria-381-apto-305/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%20305.'
      },
      {
        tag: 'Residential • Tijuca/RJ',
        title: 'Judicial Auction of Apartment on Haddock Lobo St #191 — Apt 405',
        desc: 'Apartment 405 in Edifício Colima front-facing, with 60 sqm built area. Residential building constructed in 1951, 7 floors, 24h concierge, 2 elevators.',
        p1Label: '1st Auction (07/28/2026):',
        p1Val: 'R$ 320,550.21',
        p2Label: '2nd Auction (07/30/2026):',
        p2Val: 'R$ 161,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-haddock-lobo-191-apto-405/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%20405.'
      },
      {
        tag: 'Residential • Leblon/RJ',
        title: 'Judicial Auction of Apartment in Leblon at General Urquiza St #263 — Apt 402',
        desc: 'Apartment 402 with 40 sqm in Edifício Palm Beach, built in 1950, located on the quiet cul-de-sac block of General Urquiza St in Leblon. Title #10.627 at 2nd Registry and IPTU tax #0.565.962-8.',
        p1Label: '1st Auction (09/29/2026):',
        p1Val: 'R$ 890,000.00',
        p2Label: '2nd Auction (10/01/2026):',
        p2Val: 'R$ 445,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/leblon/apartamento/rua-general-urquiza-263/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%20402%20in%20Leblon.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment in Copacabana at Siqueira Campos St #43 — Apt 1123',
        desc: 'Apartment 1123 with 38 sqm built area, front-facing in Edifício Centro Comercial de Copacabana. Features granite bathroom, open kitchen/living area, and partitioned bedroom. Title #5098 at 5th Registry and IPTU tax #0.686.319-5.',
        p1Label: '1st Auction (09/16/2026):',
        p1Val: 'R$ 400,000.00',
        p2Label: '2nd Auction (09/23/2026):',
        p2Val: 'R$ 200,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-siqueira-campos-43/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%201123%20in%20Copacabana.'
      },
      {
        tag: 'Residential • Botafogo/RJ',
        title: 'Judicial Auction of Apartment in Botafogo at Lauro Müller St #36 — Apt 1411',
        desc: 'Apartment 1411 with 38 sqm built area, rear-facing position in Edifício Interpraias (1973). Building with 24h security, 3 elevators, and rooftop leisure area with BBQ and shower. Vacant for years. Title #11.881 at 3rd Registry and IPTU tax #1.205.989-8.',
        p1Label: '1st Auction (05/15/2026):',
        p1Val: 'R$ 520,000.00',
        p2Label: '2nd Auction (07/21/2026):',
        p2Val: 'R$ 260,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/rua-lauro-muller-36/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%201411%20in%20Botafogo.'
      },
      {
        tag: 'Residential • Gávea/RJ',
        title: 'Judicial Auction of Apartment in Gávea — Vice Governador Rubens Berardo St #175 — Apt 506 Bl. III',
        desc: 'Apartment 506 with 84 sqm built area and 2 parking spaces in Gávea (entry also via Av. Padre Leonel Franca 210). Features 2 bedrooms (1 suite), guest bath, living room, kitchen, and maid room. Title #31.349 at 2nd Registry and IPTU tax #1.479.851-6.',
        p1Label: '1st Auction (09/14/2026):',
        p1Val: 'R$ 1,686,801.06',
        p2Label: '2nd Auction (09/24/2026):',
        p2Val: 'R$ 843,401.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/gavea/apartamento/rua-vice-governador-rubens-berardo-175/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%20506%20in%20G%C3%A1vea.'
      },
      {
        tag: 'Residential • Botafogo/RJ',
        title: 'Judicial Auction of Apartment at Praia de Botafogo #356 — Apt 1138',
        desc: 'Well-maintained residential apartment (Apt 1138) spanning 21 m² at Praia de Botafogo #356. Comprises entryway/kitchen, bathroom, and bedroom. 1958 building with 24h security, cameras, and 10 elevators. Title #38.841 at 3rd Registry and IPTU #0.651.974-8.',
        p1Label: '1st Auction (08/17/2026):',
        p1Val: 'R$ 355,000.42',
        p2Label: '2nd Auction (08/20/2026):',
        p2Val: 'R$ 213,000.25',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/botafogo/apartamento/praia-de-botafogo-356/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%201138%20at%20Praia%20de%20Botafogo%20356.'
      },
      {
        tag: 'Residential • Santa Teresa/RJ',
        title: 'Judicial Auction of Apartment on Costa Bastos St #8 — Santa Teresa',
        desc: 'Apartment 1001 spanning 51 m², street-facing with morning sun exposure. Comprising living room, bedroom, kitchen, and bathroom in good condition. Traditional building with concierge. Title #97,791 (2nd RGI/RJ).',
        p1Label: '1st Auction (08/13/2026):',
        p1Val: 'R$ 290,000.00',
        p2Label: '2nd Auction (08/18/2026):',
        p2Val: 'R$ 145,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/santa-teresa/apartamento/rua-costa-bastos-8/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%201001%20on%20Costa%20Bastos%20St%208%20in%20Santa%20Teresa.'
      },
      {
        tag: 'Residential • Downtown (Centro)/RJ',
        title: 'Judicial Auction of Apartment on Riachuelo St #220 — Apt 1103',
        desc: 'Apartment 1103 spanning 33 square meters (33 m²), front-facing street exposure. Compact studio comprising kitchen, bathroom, hallway, and living salon. 1967 building with 24h concierge, 2 elevators, and CCTV. Title #80,801 (2nd RGI/RJ).',
        p1Label: '1st Auction (08/31/2026):',
        p1Val: 'R$ 138,524.00',
        p2Label: '2nd Auction (09/03/2026):',
        p2Val: 'R$ 69,262.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/centro/apartamento/rua-riachuelo-220/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%201103%20on%20Riachuelo%20St%20220%20in%20Downtown%20Rio.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment on Av. Atlântica #3806 — Apt 312',
        desc: 'Apartment 312 featuring 27 m², rear-facing view. 1955 residential building on Copacabana oceanfront with extra entrance at Av. N. Sra. de Copacabana #1241. Title #29,681 (5th RGI/RJ).',
        p1Label: '1st Auction (09/02/2026):',
        p1Val: 'R$ 450,100.00',
        p2Label: '2nd Auction (09/14/2026):',
        p2Val: 'R$ 225,100.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/avenida-atlantica-3806-apto-312/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%20312%20on%20Avenida%20Atlantica%203806%20in%20Copacabana.'
      },
      {
        tag: 'Residential • Tijuca/RJ',
        title: 'Judicial Auction of Apartment on Rua São Francisco Xavier #90 — Apt 503',
        desc: 'Apartment 503 featuring 93 m² and 2 parking spaces. 1971 building with 7 floors plus penthouse in Tijuca. Title #37,650 (11th RGI/RJ).',
        p1Label: '1st Auction (09/09/2026):',
        p1Val: 'R$ 740,100.00',
        p2Label: '2nd Auction (09/11/2026):',
        p2Val: 'R$ 370,100.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-sao-francisco-xavier-90-apto-503/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20apt%20503%20on%20Sao%20Francisco%20Xavier%2090%20in%20Tijuca.'
      },
      {
        tag: 'Residential • Tijuca/RJ',
        title: 'Judicial Auction of Penthouse on Rua Delgado de Carvalho #75 — Cobertura 01',
        desc: 'Penthouse 01 featuring 106 m² and parking space. 1965 classic building with marble entry floor in Tijuca. Title #99,412 (11th RGI/RJ).',
        p1Label: '1st Auction (08/12/2026):',
        p1Val: 'R$ 668,000.00',
        p2Label: '2nd Auction (08/26/2026):',
        p2Val: 'R$ 334,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/cobertura/rua-delgado-de-carvalho-75-cobertura-01/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20penthouse%2001%20on%20Delgado%20de%20Carvalho%2075%20in%20Tijuca.'
      },
      {
        tag: 'Hotel / Commercial • Copacabana/RJ',
        title: 'Judicial Auction of Hotel Building at Rua Tonelero #202 — Copacabana',
        desc: 'Commercial & hotel building offering 3,760 m² of built area. Located steps from Siqueira Campos Subway Station and Copacabana Beach. Title #4,864 (5th Land Registry).',
        p1Label: '1st Auction (10/06/2026):',
        p1Val: 'R$ 45,836,204.80',
        p2Label: '2nd Auction (10/08/2026):',
        p2Val: 'R$ 22,918,102.40',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/hotel/rua-tonelero-202/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20hotel%20building%20on%20Tonelero%20202%20in%20Copacabana.'
      },
      {
        tag: 'Residential • Copacabana/RJ',
        title: 'Judicial Auction of Apartment at Rua Santa Clara #431 — Apt 704 (Mirante de Copacabana)',
        desc: '86 m² residential apartment in Condomínio Mirante de Copacabana with 24h concierge. Steps from Siqueira Campos Subway Station. Title #35,666 (5th Land Registry).',
        p1Label: '1st Auction (09/09/2025):',
        p1Val: 'R$ 635,000.00',
        p2Label: '2nd Auction (09/11/2025):',
        p2Val: 'R$ 317,500.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/copacabana/apartamento/rua-santa-clara-431-apto-704/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Santa%20Clara%20431%20Apt%20704%20in%20Copacabana.'
      },
      {
        tag: 'Residential • Tijuca/RJ',
        title: 'Judicial Auction of Apartment in Tijuca at Rua Uruguai #94/104',
        desc: '40 m² apartment featuring living room, 1 bedroom, bathroom, maid\'s quarters, balcony, and 1 parking space. 1985 building with 24h concierge, elevators, and playground steps from Uruguai Subway Station. Title #19,467 (10th Land Registry) and IPTU #1.723.354-5.',
        p1Label: '1st Auction (08/31/2026):',
        p1Val: 'R$ 250,000.00',
        p2Label: '2nd Auction (09/02/2026):',
        p2Val: 'R$ 125,000.00',
        link: '/assessoria-leiloes-judiciais-imoveis-rio-de-janeiro/tijuca/apartamento/rua-uruguai-94-apto-104/',
        waText: 'Hello,%20I%20would%20like%20information%20about%20the%20apartment%20auction%20at%20Rua%20Uruguai%2094%20Apt%20104.'
      }
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { t, language } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<string>('todos');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeChecklist, setActiveChecklist] = useState<number>(0);
  const [showAllAuctions, setShowAllAuctions] = useState<boolean>(false);

  const rawPath = location.pathname.replace(/^\/|\/$/g, '');
  const slug = paramSlug || (rawPath.includes('assessoria-leiloes-judiciais') ? 'assessoria-leiloes-judiciais-imoveis-rio-de-janeiro' : rawPath);
  
  const service = slug ? serviceData[slug] : serviceData['assessoria-leiloes-judiciais-imoveis-rio-de-janeiro'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-midnight text-white flex items-center justify-center">
        <div className="text-left p-8">
          <h1 className="text-4xl font-serif mb-4">Página não encontrada</h1>
          <Link to="/" className="text-bronze hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Voltar para o início
          </Link>
        </div>
      </div>
    );
  }

  const tPage = pageTranslations[language] || pageTranslations.pt;

  // Determine content from translations or fallback
  const getServiceContent = () => {
    try {
      // @ts-ignore - access nested translations
      const content = (t('service_content') as any)?.[slug as string] || (t('service_content') as any)?.['assessoria-leiloes-judiciais-imoveis-rio-de-janeiro'] || (t('service_content') as any)?.['assessoria-leiloes-judiciais'];
      if (content && content.h1) return content;
    } catch (e) {}
    
    return {
      h1: t(service.titleKey),
      h2: language === 'es' ? 'Especialidades y Actuación' : language === 'en' ? 'Specialties & Practice Areas' : 'Especialidades e Atuação',
      sections: [],
      faqs: []
    };
  };

  const content = getServiceContent();
  const details = t(service.detailsKey) as unknown as string[];

  // Generate description for SEO
  const seoDescription = `${content.h1} no Rio de Janeiro/RJ. ${t(service.descKey)}`.substring(0, 160);
  const canonicalUrl = `https://soaresmartinsadv.com/${slug}/`;

  // Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": tPage.breadcrumbHome,
        "item": "https://soaresmartinsadv.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": tPage.breadcrumbServices,
        "item": "https://soaresmartinsadv.com/servicos/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": content.h1,
        "item": canonicalUrl
      }
    ]
  };

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://soaresmartinsadv.com/#legalservice",
    "name": "Soares Martins Advogados",
    "url": "https://soaresmartinsadv.com/",
    "logo": "https://soaresmartinsadv.com/favicon.svg",
    "image": "https://soaresmartinsadv.com/favicon.svg",
    "telephone": "+55-21-97954-9241",
    "email": "Juniorsadv@hotmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Visconde de Pirajá, 414 - Sala 718",
      "addressLocality": "Ipanema, Rio de Janeiro",
      "addressRegion": "RJ",
      "postalCode": "22410-002",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.9838,
      "longitude": -43.2036
    },
    "areaServed": "Rio de Janeiro/RJ"
  };

  const faqSchema = content.faqs && content.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  const combinedSchemas = [breadcrumbSchema, legalServiceSchema, ...(faqSchema ? [faqSchema] : [])];

  const checklistItems = tPage.checklist;
  const isAuctionPage = slug === 'assessoria-leiloes-judiciais' || slug === 'assessoria-leiloes-judiciais-imoveis-rio-de-janeiro';

  const visibleAuctionItems = showAllAuctions ? tPage.auctionItems : tPage.auctionItems.slice(0, 3);

  return (
    <div className="min-h-screen bg-midnight text-white relative overflow-hidden">
      {/* Background Texture & Modern Architectural Silhouette / Facade Projection Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Rich Radial Lighting and Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-light/90 via-midnight to-midnight" />
        
        {/* Architectural Photo Overlay with High-Contrast Blend */}
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-25 grayscale contrast-125 mix-blend-luminosity"
          alt=""
          referrerPolicy="no-referrer"
        />

        {/* Fine Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* High-Contrast Vivid Lighting Ray Highlights & Golden Glow Orbs */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-bronze/30 via-bronze/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 -right-10 w-[600px] h-[600px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 -left-10 w-[600px] h-[600px] bg-bronze/20 blur-[130px] rounded-full pointer-events-none" />

        {/* Modern Building Silhouette & Glass Facade Projection - Right Modern Tower */}
        <div className="absolute top-10 right-0 lg:right-10 text-bronze pointer-events-none select-none opacity-85 filter drop-shadow-[0_0_20px_rgba(197,160,89,0.4)]">
          <svg width="450" height="750" viewBox="0 0 300 500" fill="none">
            <defs>
              <linearGradient id="towerGradRight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c5a059" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#c5a059" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="windowGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#c5a059" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Skyscraper Outer Shape */}
            <polygon points="50,500 50,140 100,80 150,20 200,80 250,140 250,500" fill="url(#towerGradRight)" stroke="#c5a059" strokeWidth="1.2" />
            
            {/* Spire / Crown Lighting */}
            <line x1="150" y1="20" x2="150" y2="0" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="150" cy="0" r="3.5" fill="#f59e0b" className="animate-pulse" />

            {/* Vertical Glass Facade Columns */}
            <line x1="100" y1="80" x2="100" y2="500" stroke="#c5a059" strokeWidth="0.8" strokeDasharray="6 3" opacity="0.7" />
            <line x1="150" y1="20" x2="150" y2="500" stroke="#c5a059" strokeWidth="1" opacity="0.8" />
            <line x1="200" y1="80" x2="200" y2="500" stroke="#c5a059" strokeWidth="0.8" strokeDasharray="6 3" opacity="0.7" />

            {/* Glowing Window Units */}
            <rect x="110" y="100" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="160" y="100" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="110" y="140" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="160" y="140" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="110" y="180" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="160" y="180" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="65" y="220" width="25" height="6" rx="1" fill="url(#windowGlow)" opacity="0.7" />
            <rect x="110" y="220" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="160" y="220" width="30" height="8" rx="1" fill="url(#windowGlow)" />
            <rect x="210" y="220" width="25" height="6" rx="1" fill="url(#windowGlow)" opacity="0.7" />

            {/* Horizontal Floor Bands */}
            <line x1="50" y1="140" x2="250" y2="140" stroke="#c5a059" strokeWidth="1" />
            <line x1="50" y1="260" x2="250" y2="260" stroke="#c5a059" strokeWidth="1" />
            <line x1="50" y1="380" x2="250" y2="380" stroke="#c5a059" strokeWidth="1" />

            {/* Diagonal Architectural Bracing */}
            <line x1="50" y1="260" x2="150" y2="140" stroke="#c5a059" strokeWidth="0.8" opacity="0.7" />
            <line x1="150" y1="140" x2="250" y2="260" stroke="#c5a059" strokeWidth="0.8" opacity="0.7" />
            <line x1="50" y1="380" x2="150" y2="260" stroke="#c5a059" strokeWidth="0.8" opacity="0.7" />
            <line x1="150" y1="260" x2="250" y2="380" stroke="#c5a059" strokeWidth="0.8" opacity="0.7" />
          </svg>
        </div>

        {/* Modern Building Silhouette & Glass Facade Projection - Left Twin Tower */}
        <div className="absolute top-1/3 -left-10 lg:left-0 text-bronze pointer-events-none select-none opacity-80 filter drop-shadow-[0_0_18px_rgba(197,160,89,0.35)]">
          <svg width="400" height="650" viewBox="0 0 250 450" fill="none">
            <defs>
              <linearGradient id="towerGradLeft" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c5a059" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Left Tower Body */}
            <polygon points="10,450 10,120 40,80 80,80 110,120 110,450" fill="url(#towerGradLeft)" stroke="#c5a059" strokeWidth="1" />
            
            {/* Center Main Tower Body */}
            <polygon points="120,450 120,60 160,20 200,60 230,100 230,450" fill="url(#towerGradLeft)" stroke="#c5a059" strokeWidth="1.2" />

            {/* Spire */}
            <line x1="160" y1="20" x2="160" y2="0" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="160" cy="0" r="3" fill="#f59e0b" className="animate-pulse" />

            {/* Facade Grid Lines */}
            <line x1="120" y1="140" x2="230" y2="140" stroke="#c5a059" strokeWidth="0.8" />
            <line x1="120" y1="220" x2="230" y2="220" stroke="#c5a059" strokeWidth="0.8" />
            <line x1="120" y1="300" x2="230" y2="300" stroke="#c5a059" strokeWidth="0.8" />

            {/* Illuminated Windows */}
            <rect x="135" y="80" width="18" height="20" fill="#f59e0b" opacity="0.8" rx="1" />
            <rect x="165" y="80" width="18" height="20" fill="#f59e0b" opacity="0.8" rx="1" />
            <rect x="135" y="160" width="18" height="20" fill="#f59e0b" opacity="0.7" rx="1" />
            <rect x="195" y="160" width="18" height="20" fill="#f59e0b" opacity="0.7" rx="1" />
            <rect x="165" y="240" width="18" height="20" fill="#f59e0b" opacity="0.8" rx="1" />
            <rect x="30" y="140" width="20" height="15" fill="#f59e0b" opacity="0.6" rx="1" />
            <rect x="60" y="140" width="20" height="15" fill="#f59e0b" opacity="0.6" rx="1" />
          </svg>
        </div>

        {/* Floating Golden Particles / Lights for Added Life */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-bronze/80 blur-[1px] animate-ping pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-amber-400/70 blur-[2px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-bronze/80 blur-[1px] animate-pulse pointer-events-none" />

        {/* Soft Vignette Gradient at Top & Bottom Only */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-transparent to-midnight/80 pointer-events-none" />
      </div>

      <SEO 
        title={content.h1} 
        description={seoDescription}
        schema={combinedSchemas}
      />
      
      <main className="relative z-10 pt-20 sm:pt-28 pb-12 sm:pb-16 px-5 sm:px-8 md:px-[8%] lg:px-[10%]">
        <div className="max-w-4xl mx-auto w-full">
          {/* Breadcrumbs UI */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-text-muted mb-6 flex-wrap text-center">
            <Link to="/" className="hover:text-bronze transition-colors">{tPage.breadcrumbHome}</Link>
            <ChevronRight size={12} className="text-bronze/50" />
            <Link to="/servicos/" className="hover:text-bronze transition-colors">{tPage.breadcrumbServices}</Link>
            <ChevronRight size={12} className="text-bronze/50" />
            <span className="text-bronze font-medium truncate">{content.h1}</span>
          </nav>

          <div className="text-center mb-8">
            <Link to="/#services" className="inline-flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-widest hover:text-white group text-center">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {t('nav.back_home')}
            </Link>
          </div>

          {/* Centralized Hero Header */}
          <div className="text-center mb-12 sm:mb-14 border-b border-white/10 pb-10 sm:pb-12 space-y-5 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center text-bronze p-4 bg-midnight-light/60 rounded-2xl border border-bronze/20 shadow-xl mx-auto">
              {service.icon}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white tracking-tight text-center">{content.h1}</h1>
            <p className="text-base sm:text-lg md:text-xl text-text-muted font-light leading-relaxed text-center px-4">{t(service.descKey)}</p>
          </div>

          {/* Imagem de Prédio Residencial e Destaque de Atuação */}
          <div className="bg-midnight-light/40 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden mb-12 sm:mb-14 shadow-2xl text-left grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-7 p-7 sm:p-10 md:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-bronze/20 text-bronze border border-bronze/30">
                  <Building2 size={14} /> {tPage.residentialCommercial}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white leading-tight text-left">
                  {tPage.heroTitle}
                </h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed text-left">
                  {tPage.heroDesc}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 text-left">
                <div>
                  <span className="text-bronze font-serif text-xl sm:text-2xl font-bold block mb-1">{tPage.stat1Title}</span>
                  <span className="text-xs text-text-muted leading-snug block">{tPage.stat1Desc}</span>
                </div>
                <div>
                  <span className="text-bronze font-serif text-xl sm:text-2xl font-bold block mb-1">{tPage.stat2Title}</span>
                  <span className="text-xs text-text-muted leading-snug block">{tPage.stat2Desc}</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" 
                alt="Edifício residencial de alto padrão no Rio de Janeiro"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 bg-midnight/85 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs text-white/90 shadow-lg text-left">
                <span className="font-bold text-bronze block mb-0.5">{tPage.badgeLocation}</span>
                {tPage.badgeDesc}
              </div>
            </div>
          </div>

          {/* Render Sections with Strictly Left-Aligned Content Cards */}
          {content.sections && content.sections.length > 0 && (
            <div className="space-y-8 sm:space-y-10 mb-10 sm:mb-12 text-left">
              {content.sections.map((sec: any, i: number) => {
                const isStepText = sec.p && (sec.p.includes('1)') && sec.p.includes('2)'));
                let introText = sec.p;
                let stepParts: string[] = [];

                if (isStepText) {
                  const parts = sec.p.split(/(?=\d\)\s)/);
                  introText = parts[0].includes('1)') ? '' : parts.shift();
                  stepParts = parts;
                }

                return (
                  <section key={i} className="relative overflow-hidden bg-midnight-light/50 backdrop-blur-md p-7 sm:p-10 md:p-12 rounded-3xl border border-white/15 hover:border-bronze/50 transition-all text-left space-y-6 shadow-2xl hover:shadow-[0_20px_50px_rgba(197,160,89,0.12)] group">
                    {/* Corner Building Facade Accent Line Wireframe */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity text-bronze pointer-events-none">
                      <svg width="128" height="128" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                        <line x1="100" y1="0" x2="0" y2="100" strokeDasharray="2 2" />
                        <line x1="100" y1="30" x2="30" y2="100" />
                        <line x1="100" y1="60" x2="60" y2="100" />
                        <rect x="60" y="10" width="30" height="30" rx="4" strokeWidth="0.5" />
                      </svg>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif text-bronze flex items-center gap-3 border-b border-white/15 pb-5 text-left">
                      <span className="w-2.5 h-2.5 rounded-full bg-bronze inline-block shrink-0 shadow-md shadow-bronze" />
                      {sec.h2}
                    </h2>
                    
                    {isStepText ? (
                      <div className="space-y-6 pt-2 text-left">
                        {introText && <p className="text-white/90 leading-relaxed text-base md:text-lg text-left font-light">{introText.trim()}</p>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                          {stepParts.map((part, idx) => {
                            const cleanPart = part.replace(/^\d\)\s*/, '');
                            return (
                              <div key={idx} className="bg-midnight/70 border border-white/15 hover:border-bronze/40 p-5 rounded-2xl flex items-start gap-3.5 text-left shadow-md hover:shadow-lg transition-all">
                                <span className="w-6 h-6 rounded-full bg-bronze/20 text-bronze font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-bronze/40 shadow-sm">
                                  {idx + 1}
                                </span>
                                <p className="text-sm text-white/90 leading-relaxed text-left font-normal">{cleanPart}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 text-left">
                        <p className="text-white/90 leading-relaxed text-base md:text-lg pl-5 border-l-2 border-bronze/40 py-1 text-left font-light">
                          {sec.p}
                        </p>
                        <div className="pt-2 text-left">
                          <a 
                            href={`https://wa.me/5521979549241?text=${encodeURIComponent((language === 'es' ? 'Hola, quisiera consultar sobre: ' : language === 'en' ? 'Hello, I would like to inquire about: ' : 'Olá, gostaria de consultar sobre: ') + sec.h2)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-bronze hover:text-white transition-colors group/link"
                          >
                            <PhoneCall size={14} className="group-hover/link:scale-110 transition-transform" />
                            {tPage.consultWA}
                            <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          )}

          {/* Interactive Checklist / Matriz de Risco do Leilão */}
          {isAuctionPage && (
            <section className="bg-midnight-light/40 backdrop-blur-sm p-7 sm:p-10 md:p-12 rounded-3xl border border-white/10 mb-10 sm:mb-12 text-left shadow-2xl space-y-8">
              <div className="border-b border-white/10 pb-6">
                <span className="text-bronze text-xs font-bold uppercase tracking-widest block mb-2">{tPage.interactiveTag}</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white">{tPage.interactiveTitle}</h2>
                <p className="text-sm text-text-muted mt-2">{tPage.interactiveSub}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                <div className="lg:col-span-5 space-y-3.5">
                  {checklistItems.map((item: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveChecklist(index)}
                      className={`w-full p-4.5 rounded-xl text-left border transition-all flex items-center justify-between group ${
                        activeChecklist === index 
                          ? 'bg-bronze text-midnight border-bronze font-bold shadow-lg' 
                          : 'bg-midnight/60 text-white/80 border-white/10 hover:border-bronze/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckSquare size={18} className={activeChecklist === index ? 'text-midnight' : 'text-bronze'} />
                        <span className="text-xs sm:text-sm">{item.title}</span>
                      </div>
                      <ChevronRight size={16} className={`transition-transform ${activeChecklist === index ? 'rotate-90 text-midnight' : 'text-white/40'}`} />
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-7 bg-midnight/80 border border-bronze/30 p-7 sm:p-9 rounded-2xl min-h-[240px] flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-bronze/20 text-bronze border border-bronze/30 mb-5">
                      {checklistItems[activeChecklist]?.risk}
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-white mb-3">{checklistItems[activeChecklist]?.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{checklistItems[activeChecklist]?.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-text-muted">
                    <span>Soares Martins Advogados - Ipanema/RJ</span>
                    <span className="text-bronze font-semibold">{tPage.issuedNotice}</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* SPECIAL STRUCTURE FOR LEILÕES JUDICIAIS */}
          {isAuctionPage && (
            <>
              {/* Leilões em análise */}
              <section className="bg-midnight-light/40 backdrop-blur-sm p-7 sm:p-10 md:p-12 rounded-3xl border border-white/10 mb-10 sm:mb-12 shadow-2xl text-left space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-bronze mb-2 text-left">{tPage.auctionsTitle}</h2>
                    <p className="text-xs sm:text-sm text-text-muted text-left">{tPage.auctionsSub}</p>
                  </div>
                  <div className="flex gap-2 self-start sm:self-auto flex-wrap">
                    <button 
                      onClick={() => setFilterCategory('todos')}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${filterCategory === 'todos' ? 'bg-bronze text-midnight font-bold shadow-md' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                    >
                      {tPage.filterAll}
                    </button>
                    <button 
                      onClick={() => setFilterCategory('residencial')}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${filterCategory === 'residencial' ? 'bg-bronze text-midnight font-bold shadow-md' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                    >
                      {tPage.filterRes}
                    </button>
                    <button 
                      onClick={() => setFilterCategory('comercial')}
                      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${filterCategory === 'comercial' ? 'bg-bronze text-midnight font-bold shadow-md' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                    >
                      {tPage.filterCom}
                    </button>
                  </div>
                </div>

                {/* Cards Grid */}
                {(filterCategory === 'todos' || filterCategory === 'residencial') ? (
                  <div className="grid grid-cols-1 gap-6">
                    {visibleAuctionItems.map((item: any, idx: number) => (
                      <div key={idx} className="bg-midnight/80 rounded-2xl border border-bronze/30 p-6 sm:p-8 space-y-6 shadow-xl hover:border-bronze/60 transition-all text-left">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bronze/20 text-bronze border border-bronze/30">
                              {item.tag}
                            </span>
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {tPage.auditedTag}
                            </span>
                          </div>
                          <span className="text-xs text-text-muted font-mono">{tPage.lawsuitTag}</span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                          <div>
                            <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">{item.p1Label}</span>
                            <span className="text-base sm:text-lg font-serif font-bold text-white">{item.p1Val}</span>
                          </div>
                          <div>
                            <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">{item.p2Label}</span>
                            <span className="text-base sm:text-lg font-serif font-bold text-emerald-400">{item.p2Val}</span>
                          </div>
                          <div>
                            <span className="text-[11px] text-text-muted uppercase tracking-wider block font-medium">{tPage.legalAuditLabel}</span>
                            <span className="text-xs font-semibold text-bronze block mt-1">{tPage.auditStatusDone}</span>
                          </div>
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <Link 
                            to={item.link}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bronze text-midnight hover:bg-white transition-all font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg"
                          >
                            <FileText size={15} />
                            {tPage.viewAnalysisReport}
                            <ChevronRight size={14} />
                          </Link>

                          <a 
                            href={`https://wa.me/5521979549241?text=${item.waText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-text-muted hover:text-bronze font-medium flex items-center gap-1.5 transition-colors"
                          >
                            <PhoneCall size={14} /> {tPage.requestOpinionWA}
                          </a>
                        </div>
                      </div>
                    ))}

                    {/* Botão Veja Mais / Veja Menos */}
                    <div className="pt-4 flex justify-center">
                      <button
                        onClick={() => setShowAllAuctions(!showAllAuctions)}
                        className="inline-flex items-center gap-2.5 bg-midnight/90 text-bronze hover:bg-bronze hover:text-midnight border border-bronze/40 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl"
                      >
                        {showAllAuctions ? (
                          <>
                            <span>{tPage.collapseAuctions}</span>
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            <span>{tPage.expandAuctions}</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-midnight/60 rounded-2xl border border-dashed border-white/15 p-7 sm:p-10 text-left space-y-5">
                    <div className="w-12 h-12 rounded-full bg-bronze/10 text-bronze flex items-center justify-center border border-bronze/20">
                      <Search size={22} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-white text-left">{tPage.noCommercialTitle}</h3>
                    <p className="text-sm text-text-muted max-w-2xl leading-relaxed text-left">
                      {tPage.noCommercialDesc}
                    </p>
                  </div>
                )}
              </section>

              {/* Histórico de leilões analisados */}
              <section className="bg-midnight-light/40 backdrop-blur-sm p-7 sm:p-10 md:p-12 rounded-3xl border border-white/10 mb-10 sm:mb-12 text-left space-y-6 shadow-2xl">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-bronze mb-2 text-left">{tPage.archiveTitle}</h2>
                  <p className="text-xs sm:text-sm text-text-muted text-left">{tPage.archiveSub}</p>
                </div>

                <div className="bg-midnight/60 rounded-2xl border border-white/10 p-6 sm:p-8 space-y-4 text-left">
                  <div className="flex items-center gap-3 text-bronze font-serif font-semibold text-base sm:text-lg">
                    <ShieldCheck size={20} className="shrink-0" />
                    <span>{tPage.ethicsTitle}</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed text-left font-light">
                    {tPage.ethicsText}
                  </p>
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-2">
                      <FileText size={14} className="text-bronze shrink-0" />
                      {tPage.ethicsFootnote}
                    </span>
                    <span className="text-bronze font-medium">Soares Martins Advogados — Rio de Janeiro/RJ</span>
                  </div>
                </div>
              </section>

              {/* Internal Links to Services & Guides */}
              <section className="bg-midnight-light/30 p-7 sm:p-10 md:p-12 rounded-3xl border border-white/5 mb-10 sm:mb-12 text-left">
                <h2 className="text-xl sm:text-2xl font-serif text-white mb-8 text-left">{tPage.relatedTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {tPage.relatedLinks.map((link: any, idx: number) => (
                    <Link 
                      key={idx}
                      to={link.path} 
                      className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-bronze/40 transition-all flex items-center justify-between group text-left shadow-sm"
                    >
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-white group-hover:text-bronze transition-colors">{link.title}</h3>
                        <p className="text-xs text-text-muted">{link.desc}</p>
                      </div>
                      <ChevronRight size={18} className="text-bronze group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Details list fallback for other services */}
          {!isAuctionPage && details && details.length > 0 && (
            <div className="bg-midnight-light/40 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-3xl border border-white/5 mb-10 sm:mb-12 text-left shadow-xl">
              <h2 className="text-2xl font-serif mb-8 text-bronze text-left">
                {content.h2 || "Especialidades e Atuação"}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed text-left">
                    <ChevronRight size={18} className="text-bronze shrink-0 mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ Block */}
          {content.faqs && content.faqs.length > 0 && (
            <div className="mb-10 sm:mb-12">
              <div className="text-center mb-10 border-b border-white/10 pb-6">
                <h2 className="text-2xl sm:text-3xl font-serif text-bronze text-center">{tPage.faqHeaderTitle}</h2>
                <p className="text-sm text-text-muted mt-2 text-center">{tPage.faqHeaderSub}</p>
              </div>
              <div className="space-y-5 text-left">
                {content.faqs.map((faq: any, i: number) => {
                  const isOpen = openFaq === i;
                  return (
                    <div 
                      key={i} 
                      className={`rounded-2xl border transition-all text-left overflow-hidden ${
                        isOpen 
                          ? 'bg-midnight-light/40 border-bronze/40 shadow-xl' 
                          : 'bg-midnight-light/20 border-white/5 hover:border-bronze/20'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 font-serif text-lg text-white hover:text-bronze transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-bronze font-bold text-base font-sans">P.</span> {faq.q}
                        </span>
                        {isOpen ? <ChevronUp size={20} className="text-bronze shrink-0" /> : <ChevronDown size={20} className="text-bronze/60 shrink-0" />}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 sm:px-7 pb-7 pt-0 text-left border-t border-white/5 mt-1">
                          <p className="text-white/80 leading-relaxed text-sm sm:text-base pt-5 border-l-2 border-bronze/30 pl-5 text-left">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-bronze p-8 sm:p-14 md:p-16 rounded-3xl text-midnight text-center shadow-2xl border border-bronze/30">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-serif mb-4 font-bold text-midnight text-center">{tPage.ctaHeaderTitle}</h2>
              <p className="text-base sm:text-lg mb-8 opacity-90 leading-relaxed font-medium text-center">
                {tPage.ctaHeaderDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a 
                  href={`https://wa.me/5521979549241?text=${encodeURIComponent((language === 'es' ? 'Hola, quisiera hablar con un especialista sobre: ' : language === 'en' ? 'Hello, I would like to speak with a specialist about: ' : 'Olá, gostaria de falar com um especialista sobre: ') + content.h1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-midnight text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-midnight transition-all shadow-lg"
                >
                  <PhoneCall size={16} />
                  {tPage.ctaWAButton}
                </a>
                <a 
                  href="mailto:Juniorsadv@hotmail.com"
                  className="inline-flex items-center justify-center gap-2 border-2 border-midnight text-midnight px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-midnight hover:text-white transition-all"
                >
                  {tPage.ctaEmailButton}
                </a>
              </div>
              <p className="mt-6 text-[11px] uppercase tracking-wider opacity-80 font-semibold text-center">{tPage.ctaFooterNote}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;
