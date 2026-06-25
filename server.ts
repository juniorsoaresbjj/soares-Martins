import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON
  app.use(express.json());

  // API endpoint for legal diagnostic
  app.post("/api/diagnostico", async (req, res) => {
    try {
      const { input } = req.body;
      if (!input) {
        return res.status(400).json({ error: "Input is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn("API Key não configurada. Executando diagnóstico local de contingência...");
        const fallbackResult = getLocalDiagnosticFallback(input);
        return res.json(fallbackResult);
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      let response;
      let usedSearch = true;

      // 1. PRIMEIRA TENTATIVA: Com busca do Google (Search Grounding)
      try {
        console.log("Tentando gerar diagnóstico com Busca Google...");
        response = await ai.models.generateContent({
          model: 'gemini-3.5-flash',
          contents: `O usuário descreveu o seguinte problema em seu condomínio ou dúvida jurídica: "${input}". 
          Aja como um especialista em direito condominial e imobiliário da Soares Martins Advogados. 
          Analise a situação de forma aprofundada. Use a ferramenta de pesquisa do Google (Google Search) para encontrar e fundamentar sua resposta nas leis mais recentes e atualizadas, jurisprudências relevantes vigentes no Brasil, artigos do Código Civil (ex: art. 1.348 e seguintes para condomínios) ou regulamentações municipais/estaduais pertinentes.
          Responda estruturado com nível de risco, resumo claro e recomendações práticas.`,
          config: {
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                riskLevel: {
                  type: Type.STRING,
                  description: "Nível de risco jurídico: LOW, MEDIUM, HIGH"
                },
                summary: {
                  type: Type.STRING,
                  description: "Um resumo detalhado e fundamentado legalmente da situação de acordo com as leis encontradas na busca Google."
                },
                recommendations: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Lista de 3 a 5 recomendações práticas e passos jurídicos recomendados."
                }
              },
              required: ["riskLevel", "summary", "recommendations"]
            }
          }
        });
      } catch (searchError) {
        console.warn("Aviso: Busca Google indisponível ou quota excedida. Tentando processamento padrão sem busca.");
        usedSearch = false;
        
        // 2. SEGUNDA TENTATIVA: Sem busca do Google (Evita limite estrito de Grounding)
        try {
          response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: `O usuário descreveu o seguinte problema em seu condomínio ou dúvida jurídica: "${input}". 
            Aja como um especialista em direito condominal e imobiliário da Soares Martins Advogados no Rio de Janeiro. 
            Analise a situação de forma técnica e aprofundada. Fundamente sua resposta na legislação brasileira de condomínios (Código Civil art. 1.331 a 1.358, Lei 4.591/64) e jurisprudência aplicável.
            Responda estruturado como JSON com as chaves: riskLevel ("LOW" | "MEDIUM" | "HIGH"), summary (resumo claro e explicativo da lei) e recommendations (lista de 3 a 5 recomendações práticas).`,
            config: {
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  riskLevel: {
                    type: Type.STRING,
                    description: "Nível de risco jurídico: LOW, MEDIUM, HIGH"
                  },
                  summary: {
                    type: Type.STRING,
                    description: "Um resumo técnico e legalmente embasado sobre o problema apresentado."
                  },
                  recommendations: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "Lista de 3 a 5 recomendações práticas e passos jurídicos recomendados."
                  }
                },
                required: ["riskLevel", "summary", "recommendations"]
              }
            }
          });
        } catch (apiError) {
          console.warn("Aviso: Serviço da API Gemini indisponível ou instável. Iniciando fallback de contingência local...");
          const fallbackResult = getLocalDiagnosticFallback(input);
          return res.json(fallbackResult);
        }
      }

      const text = response.text || "{}";
      let parsedResult;
      try {
        parsedResult = JSON.parse(text);
      } catch (e) {
        parsedResult = {
          riskLevel: 'MEDIUM',
          summary: "Análise preliminar automatizada Soares Martins: " + text,
          recommendations: [
            "Solicite uma análise detalhada diretamente aos nossos advogados especializados.",
            "Consulte a convenção interna e o regimento de seu condomínio.",
            "Evite adotar medidas drásticas sem a devida consultoria legal prévia."
          ]
        };
      }

      // Extract sources if available
      if (usedSearch) {
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (chunks && chunks.length > 0) {
          const sources: Array<{ title: string; uri: string }> = [];
          const seenUris = new Set<string>();
          
          for (const chunk of chunks) {
            if (chunk.web && chunk.web.uri && chunk.web.title) {
              if (!seenUris.has(chunk.web.uri)) {
                seenUris.add(chunk.web.uri);
                sources.push({
                  title: chunk.web.title,
                  uri: chunk.web.uri
                });
              }
            }
          }
          
          if (sources.length > 0) {
            parsedResult.sources = sources;
          }
        }
      }

      return res.json(parsedResult);
    } catch (err) {
      console.warn("Aviso: Falha de processamento geral. Acionando fallback absoluto...");
      const fallbackResult = getLocalDiagnosticFallback(req?.body?.input || "");
      return res.json(fallbackResult);
    }
  });

  // Helper local para diagnóstico de contingência inteligente (Garante funcionamento mesmo offline ou sem quota)
  function getLocalDiagnosticFallback(input: string) {
    const textNormalized = input.toLowerCase();
    
    // Categorias de maior relevância condominial
    if (textNormalized.includes("barulho") || textNormalized.includes("sossego") || textNormalized.includes("som") || textNormalized.includes("gritaria") || textNormalized.includes("vizinho")) {
      return {
        riskLevel: 'MEDIUM',
        summary: "Análise de Sossego e Perturbação (Código Civil Art. 1.336, IV e Lei de Contravenções Penais Art. 42). O direito ao sossego nas unidades residenciais é protegido por lei. O condômino tem o dever de utilizar as partes comuns de maneira a não perturbar o sossego dos demais ocupantes, sob pena de advertências ou multas estipuladas no regulamento interno e na convenção.",
        recommendations: [
          "Registre todas as perturbações formalmente no Livro de Ocorrências (físico ou digital) do condomínio com datas e horários exatos.",
          "Comunique o síndico por escrito ou e-mail, solicitando que a administração aplique as sanções previstas na convenção do condomínio.",
          "Se o barulho persistir sem atuação do condomínio, reuna provas (testemunhas, medição de decibéis por app, vídeos) para fundamentar uma notificação extrajudicial ou ação de obrigação de não fazer.",
          "Em casos extremos de perturbação tardia do trabalho ou repouso, acione as autoridades policiais por infração ao art. 42 do Decreto-Lei nº 3.688/41 (Lei das Contravenções Penais)."
        ],
        sources: [
          { title: "Artigo 1.336 do Código Civil Brasileiro - Direitos e Deveres do Condômino", uri: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
          { title: "Artigo 42 do Decreto-Lei nº 3.688/1941 - Lei das Contravenções Penais", uri: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3688.htm" }
        ]
      };
    }

    if (textNormalized.includes("vazamento") || textNormalized.includes("infiltra") || textNormalized.includes("água") || textNormalized.includes("vazar") || textNormalized.includes("teto") || textNormalized.includes("chuva")) {
      return {
        riskLevel: 'HIGH',
        summary: "Análise de Infiltração e Danos Estruturais (Responsabilidade Civil - Código Civil Art. 1.331 e Art. 927). Em infiltrações prediais, é essencial diagnosticar a causa do vazamento. Se a origem do vazamento está na prumada principal (coluna geral), a responsabilidade pelas obras de reparação é integral do condomínio. Se a origem for ramificação horizontal exclusiva de uma unidade autônoma superior, o proprietário do imóvel de cima responde civilmente pelos danos causados.",
        recommendations: [
          "Solicite imediatamente uma vistoria técnica de um encanador ou profissional especializado para emitir um laudo indicando a origem física da infiltração.",
          "Comunique formalmente o condomínio por meio de e-mail e livro de ocorrências para resguardar seus direitos em caso de danos nas tubulações comuns.",
          "Envie uma notificação extrajudicial por escrito com prazo razoável de reparo ao proprietário vizinho caso a origem seja privativa.",
          "Guarde todos os recibos, fotos dos danos materiais e orçamentos detalhados para instruir eventual pedido de indenização ou reembolso judicial das despesas emergenciais."
        ],
        sources: [
          { title: "Código Civil - Da Responsabilidade Civil (Artigos 927 e 186)", uri: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
          { title: "Artigo 1.331 do Código Civil - Divisão de Propriedade em Edificações", uri: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" }
        ]
      };
    }

    if (textNormalized.includes("assembleia") || textNormalized.includes("votação") || textNormalized.includes("votar") || textNormalized.includes("quórum") || textNormalized.includes("ata") || textNormalized.includes("reunião")) {
      return {
        riskLevel: 'MEDIUM',
        summary: "Análise de Regularidade de Assembleias de Condomínio (Código Civil Art. 1.350 a 1.355). Todas as deliberações em assembleia só têm validade legal se todos os condôminos forem regularmente convocados. Além disso, certas votações (alteração de convenção, regimento interno, destituição do síndico, realização de obras úteis ou voluptuárias) exigem quóruns estritos previstos no Código Civil ou na própria convenção sob pena de nulidade.",
        recommendations: [
          "Verifique se o edital de convocação foi enviado com antecedência legal mínima para todas as unidades sem exceção.",
          "Examine a convenção condominial para checar os quóruns obrigatórios para a aprovação do tema específico discutido na reunião.",
          "Exija o registro em ata detalhada de todas as presenças, impugnações declaradas em plenário e a exata proporção de frações ideais na votação.",
          "Havendo irregularidades procedimentais graves na convocação ou votação, consulte assessoria jurídica para ingressar com ação de anulação de assembleia no prazo decadencial."
        ],
        sources: [
          { title: "Artigos 1.350 a 1.355 do Código Civil - Convocação, Quóruns e Deliberações", uri: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" }
        ]
      };
    }

    if (textNormalized.includes("inadimplemento") || textNormalized.includes("atraso") || textNormalized.includes("dívida") || textNormalized.includes("condomínio") || textNormalized.includes("taxa") || textNormalized.includes("pagar")) {
      return {
        riskLevel: 'HIGH',
        summary: "Cobrança de Cotas Condominiais e Inadimplência (Código Civil Art. 1.336, I e Código de Processo Civil Art. 784, X). A cota condominial é uma obrigação 'propter rem' e, conforme o novo CPC, as despesas ordinárias e extraordinárias constituem título executivo extrajudicial. Isso permite que a cobrança judicial seja feita por meio de Execução direta, agilizando imensamente o recebimento e autorizando medidas rápidas como a penhora do próprio imóvel devedor.",
        recommendations: [
          "Consulte o regimento interno para aplicação imediata de multa de 2% e juros de mora estipulados sobre a parcela em atraso.",
          "Busque inicialmente uma composição amigável enviando notificações de cobrança extrajudicial para celebração de termo de acordo formal.",
          "Caso o atraso ultrapasse o limite razoável tolerado, ingresse prontamente com a Ação de Execução de Título Extrajudicial para recuperação célere do saldo devedor.",
          "Garanta que a ata de aprovação da previsão orçamentária que fixou a cota condominial esteja devidamente lavrada e guardada, pois ela é peça essencial para a execução."
        ],
        sources: [
          { title: "Artigo 784, Inciso X do Código de Processo Civil (Títulos Executivos)", uri: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" },
          { title: "Direito de Contribuir - Código Civil Artigo 1.336, Inciso I", uri: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" }
        ]
      };
    }

    if (textNormalized.includes("animal") || textNormalized.includes("pet") || textNormalized.includes("gato") || textNormalized.includes("cachorro") || textNormalized.includes("cão")) {
      return {
        riskLevel: 'LOW',
        summary: "Direito de Permanência de Animais em Condomínios (Jurisprudência Pacífica do STJ). A proibição absoluta e abstrata de permanência de animais de estimação em convenções ou regimentos é considerada abusiva pela jurisprudência do Superior Tribunal de Justiça (STJ). O condomínio só pode restringir ou punir a presença de pets se houver perturbação comprovada do sossego, segurança ou à higiene coletiva dos moradores.",
        recommendations: [
          "Verifique as cláusulas do regimento sobre o transporte e trânsito dos animais em elevadores (ex: exigência de guia ou colo) e áreas comuns.",
          "Mantenha sempre os registros de vacinação atualizados e zele pela conduta pacífica do animal para blindar-se de queixas infundadas.",
          "Se for notificado de proibição arbitrária unicamente pela existência do animal, envie uma contra-notificação invocando a tese fixada pelo STJ.",
          "Lembre-se que o direito ao pet cessa se houver latido contínuo que retire comprovadamente o sossego alheio ou represente real ameaça de ataque."
        ],
        sources: [
          { title: "Acórdão do Recurso Especial (REsp) 1783074 - Decisão do STJ sobre pets em condomínio", uri: "https://processo.stj.jus.br/processo/pesquisa/" }
        ]
      };
    }

    if (textNormalized.includes("obra") || textNormalized.includes("reforma") || textNormalized.includes("construção") || textNormalized.includes("pedreiro") || textNormalized.includes("barulho de obra")) {
      return {
        riskLevel: 'MEDIUM',
        summary: "Diretrizes de Obras e Reformas em Unidades Autônomas (ABNT NBR 16.280 e Código Civil Art. 1.336, II). Toda reforma interna que possa impactar a segurança estrutural ou as prumadas de água e gás do edifício precisa cumprir os requisitos da norma técnica ABNT NBR 16.280. O morador é obrigado a entregar um plano detalhado de obra assinado por engenheiro ou arquiteto habilitado junto com a respectiva ART/RRT.",
        recommendations: [
          "Solicite imediatamente ao condômino a apresentação da ART (Anotação de Responsabilidade Técnica) e o cronograma da obra antes que ela inicie.",
          "O síndico tem o poder e o dever legal de embargar ou paralisar administrativamente obras que coloquem em risco evidente a estabilidade do prédio.",
          "Observe rigidamente os horários e dias úteis definidos pelo Regimento Interno para ruídos de obras e movimentação de materiais e caçambas.",
          "Fiscalize se os entulhos resultantes estão sendo retirados adequadamente pelo proprietário, proibindo o descarte em lixeiras normais do condomínio."
        ],
        sources: [
          { title: "ABNT NBR 16.280 - Reforma em edificações — Sistema de gestão de reformas", uri: "https://www.abnt.org.br/" },
          { title: "Dever de não alterar a fachada ou partes estruturais - CC Artigo 1.336, II", uri: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" }
        ]
      };
    }

    // Diagnóstico Padrão Geral para outros assuntos de Direito Condominial
    return {
      riskLevel: 'MEDIUM',
      summary: "Diagnóstico Preliminar de Direito de Condomínios e Imobiliário. A convivência em condomínio edilício e a gestão condominial envolvem uma teia de regulamentos dispostos no Código Civil Brasileiro (Artigos 1.331 a 1.358-A), na Lei de Condomínios (Lei Federal nº 4.591/1964) e nas normas internas (Convenção e Regimento Interno). Casos de conflitos de vizinhança, responsabilidade civil do síndico ou de condôminos requerem análise individual detalhada das provas.",
      recommendations: [
        "Consulte e estude minuciosamente a Convenção do Condomínio e o Regimento Interno aplicáveis ao seu edifício.",
        "Registre sempre as ocorrências, problemas ou irregularidades de forma formal e documentada (e-mails, livros, fotos).",
        "Busque canais internos de diálogo amigável promovidos pela administração ou síndico antes de judicializar a contenda.",
        "Marque uma reunião direta com a nossa banca de advogados especialistas para fundamentar as medidas ideais ao seu caso real."
      ],
      sources: [
        { title: "Código Civil Brasileiro - Seção de Condomínio Edilício (Artigo 1.331 e seguintes)", uri: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
        { title: "Lei nº 4.591 de 16 de Dezembro de 1964 - Dispõe sobre condomínios e incorporações", uri: "https://www.planalto.gov.br/ccivil_03/leis/L4591.htm" }
      ]
    };
  }

  // Serve static assets/Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // For full static prerendered support, try to serve specific HTML files if they exist (e.g., /historia/ -> dist/historia/index.html)
    app.get('*all', (req, res, next) => {
      let reqPath = req.path;
      if (reqPath.endsWith('/')) {
        reqPath += 'index.html';
      }
      
      const potentialFile = path.join(distPath, reqPath);
      const potentialIndex = path.join(distPath, req.path, 'index.html');
      
      if (fs.existsSync(potentialFile) && fs.statSync(potentialFile).isFile()) {
        res.sendFile(potentialFile);
      } else if (fs.existsSync(potentialIndex) && fs.statSync(potentialIndex).isFile()) {
        res.sendFile(potentialIndex);
      } else {
        res.sendFile(path.join(distPath, 'index.html'));
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
