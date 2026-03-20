
import React, { useState } from 'react';
import { generateLegalDiagnostic, DiagnosticResult } from '../services/geminiService';
import { useLanguage } from '../context/LanguageContext';

interface AIDiagnosticModalProps {
  onClose: () => void;
}

const AIDiagnosticModal: React.FC<AIDiagnosticModalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    try {
      const diag = await generateLegalDiagnostic(input);
      setResult(diag);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'HIGH': return 'bg-red-500';
      case 'MEDIUM': return 'bg-yellow-500';
      case 'LOW': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getRiskLabel = (level: string) => {
    switch (level) {
      case 'HIGH': return t('diagnostic.risk_high');
      case 'MEDIUM': return t('diagnostic.risk_medium');
      case 'LOW': return t('diagnostic.risk_low');
      default: return t('diagnostic.risk_unknown');
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-4 sm:p-6 border-b border-gray-100 flex justify-between items-center bg-midnight text-white rounded-t-2xl">
          <h3 className="font-serif text-lg sm:text-xl">{t('diagnostic.title')}</h3>
          <button onClick={onClose} className="hover:text-bronze transition-colors p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
          </button>
        </div>
        <div className="p-5 sm:p-8 overflow-y-auto flex-grow">
          {!result ? (
            <div className="space-y-4 sm:y-6">
              <p className="text-sm sm:text-base text-gray-600">{t('diagnostic.desc')}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('diagnostic.place')}
                  className="w-full p-3 sm:p-4 border-2 border-gray-100 rounded-xl min-h-[120px] sm:min-h-[150px] text-sm sm:text-base outline-none focus:border-bronze"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-full bg-bronze text-midnight font-bold py-3 sm:py-4 rounded-xl hover:bg-bronze-light disabled:opacity-50 transition-all flex justify-center items-center gap-2 text-sm sm:text-base"
                >
                  {loading ? t('diagnostic.analyzing') : t('diagnostic.btn')}
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4">
                <div className={`px-3 py-1 rounded-full text-white text-[10px] sm:text-xs font-bold ${getRiskColor(result.riskLevel)}`}>
                  {t('diagnostic.risk')} {getRiskLabel(result.riskLevel)}
                </div>
                <div className="h-px flex-grow bg-gray-100"></div>
              </div>
              <div>
                <h4 className="font-bold text-midnight mb-2 sm:mb-3 uppercase tracking-wider text-[10px] sm:text-xs">{t('diagnostic.summary')}</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-off-white p-4 sm:p-6 rounded-xl border border-gray-100">{result.summary}</p>
              </div>
              <div>
                <h4 className="font-bold text-midnight mb-2 sm:mb-3 uppercase tracking-wider text-[10px] sm:text-xs">{t('diagnostic.recs')}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm sm:text-base text-gray-700"><span className="text-bronze font-bold">•</span>{rec}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button onClick={() => {setResult(null); setInput('');}} className="flex-1 border border-gray-200 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-gray-50 text-sm sm:text-base">{t('diagnostic.new')}</button>
                <a href="#contato" onClick={onClose} className="flex-1 bg-midnight text-white py-2.5 sm:py-3 rounded-lg text-center font-bold text-sm sm:text-base">{t('diagnostic.validate')}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIDiagnosticModal;
