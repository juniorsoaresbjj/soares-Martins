
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, ChevronRight, Search, Clock, Share2, Printer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

interface BlogPageProps {
  onBack: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onBack }) => {
  const { language, t } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const posts: Post[] = [
    {
      id: 1,
      title: "LGPD nos Condomínios: Como adequar a portaria e as câmeras?",
      excerpt: "A proteção de dados pessoais tornou-se obrigatória para condomínios. Saiba como tratar as informações dos visitantes e condôminos conforme a lei.",
      readTime: `6 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>A Lei Geral de Proteção de Dados (LGPD) não poupa ninguém, nem mesmo os condomínios edilícios. Embora não possuam personalidade jurídica plena, os condomínios são considerados "controladores de dados" sob a ótica da lei.</p>
          <h4 className="text-white text-xl font-serif">O Desafio da Portaria</h4>
          <p>A coleta excessiva de dados na recepção é o ponto mais crítico. Solicitar RG, CPF, foto e até biometria de visitantes sem uma finalidade clara e um aviso de privacidade é uma violação direta. O condomínio deve coletar apenas o estritamente necessário para a segurança.</p>
          <h4 className="text-white text-xl font-serif">Monitoramento por Câmeras</h4>
          <p>As imagens captadas pelo circuito interno (CFTV) são dados biométricos. É fundamental que existam placas informativas e que o acesso a essas imagens seja restrito e auditável.</p>
        </div>
      ),
      date: "15 Mai, 2026",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "STJ define regras para animais em condomínios: o que mudou?",
      excerpt: "Entenda os limites das proibições em convenções e regimentos internos após as recentes decisões dos tribunais superiores sobre pets.",
      readTime: `4 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>A questão dos animais de estimação em unidades autônomas foi pacificada pelo Superior Tribunal de Justiça (STJ). A decisão reforça que a convenção condominial não pode proibir de forma genérica a permanência de animais nas unidades.</p>
          <p>A restrição só é válida se o animal representar uma ameaça real à segurança, à higiene ou ao sossego dos demais condôminos.</p>
        </div>
      ),
      date: "08 Mai, 2026",
      category: "Jurisprudência",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Inadimplência recorde? Estratégias jurídicas para recuperação de caixa.",
      excerpt: "Novas ferramentas processuais permitem maior rapidez na execução de cotas condominiais. Descubra como proteger as finanças do prédio.",
      readTime: `8 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>A saúde financeira é o pilar de qualquer condomínio. Com o novo Código de Processo Civil, a cota condominial passou a ser título executivo extrajudicial, permitindo que o processo de cobrança seja muito mais ágil.</p>
        </div>
      ),
      date: "02 Mai, 2026",
      category: "Financeiro",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Responsabilidade Civil do Síndico em obras irregulares.",
      excerpt: "O síndico pode responder pessoalmente por danos causados por reformas não autorizadas. Veja como realizar a fiscalização técnica correta.",
      readTime: `5 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>O síndico é o representante legal do condomínio e possui o dever de vigilância sobre as obras realizadas tanto nas áreas comuns quanto nas unidades privativas conforme a NBR 16.280.</p>
        </div>
      ),
      date: "25 Abr, 2026",
      category: "Gestão",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Assembleias Virtuais: Validade jurídica e boas práticas.",
      excerpt: "A digitalização das decisões condominiais veio para ficar. Saiba como garantir que as votações online não sejam anuladas na justiça.",
      readTime: `5 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>A Lei 14.309/2022 alterou o Código Civil para permitir assembleias eletrônicas de forma definitiva. No entanto, o edital de convocação deve ser extremamente preciso.</p>
        </div>
      ),
      date: "18 Abr, 2026",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Vícios Construtivos: Prazos e como acionar a incorporadora.",
      excerpt: "Infiltrações, rachaduras e problemas estruturais? Entenda a diferença entre garantia legal e contratual para reparos em áreas comuns.",
      readTime: `7 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>Muitos condomínios novos sofrem com falhas de entrega. É preciso distinguir vícios aparentes de vícios ocultos para não perder prazos de garantia.</p>
        </div>
      ),
      date: "10 Abr, 2026",
      category: "Direito Imobiliário",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Airbnb e Locações de Curta Duração: O que diz o STJ?",
      excerpt: "A polêmica sobre o aluguel por plataformas digitais em áreas residenciais. Saiba quando o condomínio pode proibir a atividade.",
      readTime: `9 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>A locação por plataformas como o Airbnb em condomínios residenciais gerou uma das maiores disputas jurídicas recentes. O STJ decidiu que o condomínio pode proibir a atividade caso ela desvirtue a finalidade residencial do prédio.</p>
        </div>
      ),
      date: "03 Abr, 2026",
      category: "Airbnb",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Lei do Inquilinato: Quem deve pagar as obras do prédio?",
      excerpt: "Confusão entre despesas ordinárias e extraordinárias gera conflito entre locadores e locatários. Veja o guia definitivo de quem paga o quê.",
      readTime: `5 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>De acordo com a Lei 8.245/91, despesas extraordinárias (pintura de fachada, fundo de reserva, obras estruturais) são obrigação do proprietário. Já as ordinárias (salários, água, luz, manutenção preventiva) cabem ao inquilino.</p>
        </div>
      ),
      date: "28 Mar, 2026",
      category: "Locação",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "O vizinho barulhento: Limites legais do sossego e multas.",
      excerpt: "Crianças jogando bola, festas fora de hora ou obras intermináveis? Entenda como aplicar a lei do silêncio e o direito de vizinhança.",
      readTime: `6 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>O sossego é um direito fundamental. O Código Civil estabelece que o uso da propriedade não pode prejudicar a segurança, o sossego ou a saúde dos vizinhos.</p>
        </div>
      ),
      date: "21 Mar, 2026",
      category: "Convivência",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      title: "Aluguel Residencial: Riscos da rescisão antecipada.",
      excerpt: "Vai entregar o imóvel antes do prazo? Saiba como calcular a multa proporcional e quais os direitos do locador nessas situações.",
      readTime: `4 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>A multa por rescisão antecipada deve ser sempre proporcional ao tempo restante do contrato. Cláusulas de isenção de multa após 12 meses são comuns, mas precisam estar expressas no contrato para serem válidas.</p>
        </div>
      ),
      date: "14 Mar, 2026",
      category: "Locação",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      title: "Vazamentos entre andares: Quem paga o conserto?",
      excerpt: "A eterna dúvida: a culpa é do vizinho de cima ou do condomínio? Entenda a diferença entre prumada e ramais internos.",
      readTime: `5 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>Se o vazamento ocorre na coluna principal (prumada), a responsabilidade é do condomínio. Se ocorre nos canos que atendem exclusivamente a unidade (ramais), a obrigação de reparar é do condômino proprietário.</p>
        </div>
      ),
      date: "05 Mar, 2026",
      category: "Direito Imobiliário",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      title: "Drones e Privacidade: O uso de câmeras voadoras no condomínio.",
      excerpt: "A regulamentação da ANAC e o direito à privacidade. Até onde o condomínio pode usar drones para fiscalização de fachadas?",
      readTime: `7 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>O uso de drones para inspeção de telhados e fachadas é uma tendência, mas deve respeitar a privacidade das unidades. Captar imagens do interior de apartamentos sem autorização gera responsabilidade civil.</p>
        </div>
      ),
      date: "25 Fev, 2026",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 13,
      title: "Condômino Antissocial: Quando a expulsão é juridicamente possível?",
      excerpt: "Medida extrema que requer quórum qualificado e provas robustas. Entenda como o judiciário tem tratado a exclusão de moradores agressivos.",
      readTime: `10 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>A expulsão de um condômino é a sanção máxima. É necessário que o morador torne a convivência impossível e que todas as multas pecuniárias tenham se mostrado ineficazes.</p>
        </div>
      ),
      date: "15 Fev, 2026",
      category: "Jurisprudência",
      image: "https://images.unsplash.com/photo-1574621100236-d25b64cfd647?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 14,
      title: "Garagens e Vagas: Conflitos comuns e sorteios anuais.",
      excerpt: "Uso de vagas por visitantes, carros mal estacionados e a proibição de depósito de entulho. Regras para evitar brigas no subsolo.",
      readTime: `5 min ${t('blog_page.read_time_suffix')}`,
      content: (
        <div className="space-y-6">
          <p>A garagem é fonte constante de atrito. O regimento interno deve ser rigoroso quanto ao limite de velocidade, uso exclusivo para veículos e proibição de uso de vagas como depósito de objetos.</p>
        </div>
      ),
      date: "02 Fev, 2026",
      category: "Convivência",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ['Todos', 'Compliance', 'Jurisprudência', 'Financeiro', 'Gestão', 'Tecnologia', 'Direito Imobiliário', 'Airbnb', 'Locação', 'Convivência'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  if (selectedPost) {
    return (
      <div className="relative min-h-screen pt-32 pb-24 px-[5%] md:px-[10%] animate-fade-in-up bg-midnight overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-widest mb-12 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t('nav.back_blog')}
          </button>
          <article className="space-y-12">
            <header className="space-y-8">
              <div className="flex flex-wrap items-center gap-6 text-[11px] text-text-muted uppercase tracking-widest font-bold">
                <span className="bg-bronze/10 text-bronze px-4 py-1.5 rounded-full">{selectedPost.category}</span>
                <span className="flex items-center gap-2"><Calendar size={14} className="text-bronze" /> {selectedPost.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-bronze" /> {selectedPost.readTime}</span>
              </div>
              <h1 className="font-serif text-white text-4xl md:text-6xl leading-tight">{selectedPost.title}</h1>
              <div className="w-full h-96 overflow-hidden rounded-3xl shadow-2xl">
                <img src={selectedPost.image} className="w-full h-full object-cover" alt="" />
              </div>
            </header>
            <div className="prose prose-invert max-w-none text-text-muted text-lg leading-relaxed">
              {selectedPost.content}
            </div>
            <footer className="pt-12 border-t border-white/5 flex gap-6">
               <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-bronze transition-colors">
                  <Share2 size={16} /> {t('blog_page.share')}
               </button>
               <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-bronze transition-colors">
                  <Printer size={16} /> {t('blog_page.print')}
               </button>
            </footer>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-[5%] md:px-[10%] animate-fade-in-up bg-midnight">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <button onClick={onBack} className="flex items-center gap-2 text-bronze text-xs font-bold uppercase tracking-widest mb-8 hover:text-white group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {t('nav.back_home')}
            </button>
            <span className="text-bronze text-sm font-bold uppercase tracking-widest block mb-4">{t('blog_page.tag')}</span>
            <h1 className="font-serif text-white text-5xl md:text-7xl leading-tight">
              {t('blog_page.title')} <span className="serif-italic text-bronze">{t('blog_page.titleHighlight')}</span>
            </h1>
          </div>
          <div className="relative group max-w-md w-full">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('blog_page.search_placeholder')}
              className="w-full bg-midnight-light/80 border border-white/10 rounded-full px-6 py-5 text-white outline-none focus:border-bronze transition-all"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30" size={20} />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-16 border-b border-white/5 pb-10">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'border-bronze text-bronze bg-bronze/10' : 'border-white/10 text-white/50 hover:border-bronze hover:text-bronze'}`}
            >
              {cat === 'Todos' ? t('blog_page.cat_all') : cat}
            </button>
          ))}
        </div>

        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentPosts.map((post) => (
                <article 
                  key={post.id} 
                  onClick={() => setSelectedPost(post)}
                  className="group cursor-pointer bg-midnight-light/60 rounded-3xl overflow-hidden border border-white/5 hover:border-bronze/30 transition-all flex flex-col h-full shadow-lg"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img src={post.image} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-bronze text-midnight text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-[10px] text-text-muted uppercase tracking-widest mb-4">
                       <span className="flex items-center gap-1.5"><Calendar size={12} className="text-bronze" /> {post.date}</span>
                    </div>
                    <h3 className="font-serif text-white text-2xl mb-4 group-hover:text-bronze transition-colors leading-snug">{post.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                    <button className="flex items-center gap-2 text-bronze text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      {t('blog_page.read_more')} <ChevronRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center items-center gap-4">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold text-xs transition-all ${
                      currentPage === i + 1
                        ? 'bg-bronze border-bronze text-midnight'
                        : 'border-white/10 text-white/50 hover:border-bronze hover:text-bronze'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-white text-2xl font-serif mb-4">{t('blog_page.no_results')}</h3>
            <p className="text-text-muted mb-8">{t('blog_page.no_results_desc')}</p>
            <button onClick={() => {setSearchQuery(''); setActiveCategory('Todos');}} className="text-bronze uppercase text-[10px] font-bold border-b border-bronze pb-1">
              {t('blog_page.clear_filters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
