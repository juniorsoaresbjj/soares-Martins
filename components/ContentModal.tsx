
import React from 'react';
import { X, Shield, Users, MapPin, Info, Scale, Gavel, FileText, Building2, ShieldAlert } from 'lucide-react';

interface ContentModalProps {
  type: string;
  onClose: () => void;
}

const ContentModal: React.FC<ContentModalProps> = ({ type, onClose }) => {
  const getContent = () => {
    switch (type) {
      case 'escritorio':
        return {
          title: 'O Escritório',
          icon: <Info className="text-bronze" />,
          body: (
            <div className="space-y-4 text-gray-700 leading-relaxed max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
              <p>O <strong>Soares Martins Advogados</strong> nasceu da observação prática e diária da realidade condominial brasileira, a partir da compreensão de que muitos conflitos poderiam ser evitados com orientação jurídica preventiva, técnica e estratégica. Nosso propósito sempre foi entregar mais do que processos judiciais: buscamos soluções que preservem a harmonia entre as pessoas e assegurem a saúde financeira dos patrimônios.</p>
              <p>Fundado com a missão de elevar o padrão da advocacia condominial, o escritório surgiu da visão de seus fundadores em transformar conflitos em soluções sustentáveis, pautadas na prevenção, na eficiência e na segurança jurídica. Acreditamos que a advocacia moderna exige agilidade, tecnologia e profundo conhecimento das dores enfrentadas por quem vive e administra condomínios.</p>
              <p>Desde a sua fundação, o escritório direcionou sua atuação exclusivamente ao nicho imobiliário e condominial, identificando uma clara carência de atendimento técnico especializado no setor. Essa especialização permitiu o desenvolvimento de estratégias jurídicas focadas na prevenção de litígios, na rapidez das negociações e na condução eficiente de demandas, sempre com foco em resultados concretos.</p>
              <p>Nosso diferencial está no atendimento personalizado, na proximidade com nossos clientes e na comunicação clara e constante. Cada caso é analisado de forma individualizada, permitindo decisões seguras e alinhadas aos objetivos de síndicos, administradoras e condôminos.</p>
              <p>Ao longo dos anos, o Soares Martins Advogados investiu fortemente em base tecnológica, tornando-nos referência em gestão de crises condominiais e recuperação de ativos, com atuação estratégica e responsável.</p>
              <p>Atualmente, somos pioneiros na análise de dados aplicadas à prevenção jurídica. O futuro da advocacia, para nós, é digital, estratégico e próximo das pessoas — e é exatamente assim que seguimos atuando.</p>
            </div>
          )
        };
      case 'atuacao':
        return {
          title: 'Áreas de Atuação',
          icon: <Shield className="text-bronze" />,
          body: (
            <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
              <p className="text-sm text-gray-600 font-medium">Especialização Estratégica em Direito Imobiliário, Condominial e Patrimonial voltada à proteção e segurança jurídica.</p>
              
              <div className="space-y-6">
                <div className="p-5 bg-off-white rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3 text-midnight">
                    <Building2 size={20} className="text-bronze" />
                    <h5 className="font-bold">Real Estate & Estruturação</h5>
                  </div>
                  <p className="text-sm text-gray-600">Contencioso Imobiliário: ações possessórias, despejos, revisionais, renovatórias, rescisões e regularização patrimonial.</p>
                </div>

                <div className="p-5 bg-off-white rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3 text-midnight">
                    <Gavel size={20} className="text-bronze" />
                    <h5 className="font-bold">Contencioso Condominial</h5>
                  </div>
                  <p className="text-sm text-gray-600">Responsabilidade civil, vícios construtivos e conflitos de vizinhança com foco na harmonia interna.</p>
                </div>

                <div className="p-5 bg-off-white rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3 text-midnight">
                    <Scale size={20} className="text-bronze" />
                    <h5 className="font-bold">Recuperação de Ativos</h5>
                  </div>
                  <p className="text-sm text-gray-600">Metodologia estruturada para combate à inadimplência através de execução célere e análise de solvência.</p>
                </div>

                <div className="p-5 bg-off-white rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3 text-midnight">
                    <Shield size={20} className="text-bronze" />
                    <h5 className="font-bold">Consultoria Preventiva</h5>
                  </div>
                  <p className="text-sm text-gray-600">Pareceres técnicos, blindagem da gestão e mediação de conflitos para evitar passivos financeiros.</p>
                </div>

                <div className="p-5 bg-off-white rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3 text-midnight">
                    <Users size={20} className="text-bronze" />
                    <h5 className="font-bold">Direito do Trabalho</h5>
                  </div>
                  <p className="text-sm text-gray-600">Gestão de relações laborais e terceirizações, com auditoria de folha e defesa em reclamações.</p>
                </div>

                <div className="p-5 bg-off-white rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3 text-midnight">
                    <FileText size={20} className="text-bronze" />
                    <h5 className="font-bold">Compliance e Modernização</h5>
                  </div>
                  <p className="text-sm text-gray-600">Adequação à LGPD, reforma de Convenções e implementação de políticas de governança moderna.</p>
                </div>

                <div className="p-5 bg-off-white rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3 text-midnight">
                    <ShieldAlert size={20} className="text-bronze" />
                    <h5 className="font-bold">Direito Penal Patrimonial</h5>
                  </div>
                  <p className="text-sm text-gray-600">Defesa contra fraudes, apropriação indébita e desvios, além da responsabilidade penal de gestores.</p>
                </div>
              </div>
            </div>
          )
        };
      case 'equipe':
        return {
          title: 'Nossa Equipe',
          icon: <Users className="text-bronze" />,
          body: (
            <div className="space-y-6">
              <p className="text-gray-700 italic">Contamos com profissionais de alta performance, mestres e especialistas em Direito Imobiliário.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 bg-midnight rounded-full flex items-center justify-center text-bronze font-serif text-xl">OS</div>
                  <div>
                    <h5 className="font-bold text-midnight">Dr. Oldenyr Soares</h5>
                    <p className="text-xs text-bronze uppercase font-bold tracking-widest">Sócio Fundador | OAB/RJ 267.267</p>
                  </div>
                </div>
              </div>
            </div>
          )
        };
      case 'contato':
        return {
          title: 'Contato',
          icon: <MapPin className="text-bronze" />,
          body: (
            <div className="space-y-6">
              <div className="p-6 bg-midnight text-white rounded-xl">
                <h5 className="font-serif text-xl mb-4 text-bronze">Atendimento Exclusivo</h5>
                <div className="space-y-3">
                  <p className="flex items-center gap-3"><span className="text-bronze font-bold">WhatsApp:</span> +55 (21) 97954-9241</p>
                  <p className="flex items-center gap-3"><span className="text-bronze font-bold">E-mail:</span> soaresmartinsadv@hotmail.com</p>
                  <p className="flex items-center gap-3"><span className="text-bronze font-bold">Localização:</span> Rio de Janeiro - RJ - Brasil.</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center uppercase tracking-widest">Segunda a Sexta, das 09:00 às 18:00</p>
            </div>
          )
        };
      default:
        return { title: '', icon: null, body: null };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-fade-in-up">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-midnight text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            {content.icon}
            <h3 className="font-serif text-xl">{content.title}</h3>
          </div>
          <button onClick={onClose} className="hover:text-bronze transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto">
          {content.body}
          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-center">
            <button 
              onClick={onClose}
              className="px-10 py-3 bg-midnight text-white rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-bronze hover:text-midnight transition-all"
            >
              Fechar Janela
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
