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
    const response = await fetch("/api/diagnostico", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `Erro do servidor (status ${response.status})`;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no diagnóstico IA:", error);
    return {
      riskLevel: 'MEDIUM',
      summary: error instanceof Error ? error.message : "Ocorreu um erro inesperado na análise.",
      recommendations: ["Tente novamente mais tarde ou entre em contato diretamente com o escritório."]
    };
  }
};
