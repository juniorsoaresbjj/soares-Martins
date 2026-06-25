
import { GoogleGenAI, Type } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

const getAiInstance = () => {
  if (!aiInstance) {
    const key = process.env.GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY;
    if (!key) {
      throw new Error("API Key não configurada. Por favor, defina a variável de ambiente VITE_GEMINI_API_KEY.");
    }
    aiInstance = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiInstance;
};

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface DiagnosticResult {
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  summary: string;
  recommendations: string[];
  sources?: GroundingSource[];
}

export const generateLegalDiagnostic = async (input: string): Promise<DiagnosticResult> => {
  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
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

    const text = response.text || "{}";
    let parsedResult: DiagnosticResult;
    try {
      parsedResult = JSON.parse(text);
    } catch (e) {
      parsedResult = {
        riskLevel: 'MEDIUM',
        summary: "Não foi possível estruturar os dados da análise automática como JSON, mas geramos uma resposta direta para você: " + text,
        recommendations: ["Agende uma consulta com um de nossos advogados para análise detalhada baseada em dados reais."]
      };
    }

    // Extract sources from grounding metadata
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks && chunks.length > 0) {
      const sources: GroundingSource[] = [];
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

    return parsedResult;
  } catch (error) {
    console.error("Erro no diagnóstico IA:", error);
    return {
      riskLevel: 'MEDIUM',
      summary: error instanceof Error ? error.message : "Ocorreu um erro inesperado na análise.",
      recommendations: ["Tente novamente mais tarde ou entre em contato diretamente com o escritório."]
    };
  }
};
