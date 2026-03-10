
import { GoogleGenAI, Type } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

const getAiInstance = () => {
  if (!aiInstance) {
    const key = process.env.GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY;
    if (!key) {
      throw new Error("API Key não configurada. Por favor, defina a variável de ambiente VITE_GEMINI_API_KEY.");
    }
    aiInstance = new GoogleGenAI({ apiKey: key });
  }
  return aiInstance;
};

export interface DiagnosticResult {
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  summary: string;
  recommendations: string[];
}

export const generateLegalDiagnostic = async (input: string): Promise<DiagnosticResult> => {
  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `O usuário descreveu o seguinte problema em seu condomínio: "${input}". 
      Aja como um especialista em direito condominial da Soares Martins Advogados. 
      Analise o risco e sugira próximos passos.`,
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
              description: "Um breve resumo jurídico do impacto da situação."
            },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista de recomendações práticas para o síndico."
            }
          },
          required: ["riskLevel", "summary", "recommendations"]
        }
      }
    });

    const text = response.text || "{}";
    try {
      return JSON.parse(text);
    } catch (e) {
      return {
        riskLevel: 'MEDIUM',
        summary: "Não foi possível realizar a análise automática, mas nossa equipe pode avaliar manualmente.",
        recommendations: ["Agende uma consulta com um de nossos advogados para análise detalhada."]
      };
    }
  } catch (error) {
    console.error("Erro no diagnóstico IA:", error);
    return {
      riskLevel: 'MEDIUM',
      summary: error instanceof Error ? error.message : "Ocorreu um erro inesperado na análise.",
      recommendations: ["Tente novamente mais tarde ou entre em contato diretamente com o escritório."]
    };
  }
};
