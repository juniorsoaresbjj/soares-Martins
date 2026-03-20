
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, ChevronRight, Search, Clock, Share2, Printer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getBlogPosts, Post } from '../data/blogPosts';

interface BlogPageProps {
  onBack: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onBack }) => {
  const { language, t } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(t('blog_page.cat_all'));
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const posts = getBlogPosts(language, t);

  const categories = [
    t('blog_page.cat_all'),
    t('blog_page.cat_compliance'),
    t('blog_page.cat_jurisprudence'),
    t('blog_page.cat_financial'),
    t('blog_page.cat_management'),
    t('blog_page.cat_technology'),
    t('blog_page.cat_real_estate_law'),
    t('blog_page.cat_airbnb'),
    t('blog_page.cat_rental'),
    t('blog_page.cat_coexistence')
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Map category back to translated version for comparison if needed, 
    // but here we can just check if the translated category matches the active one.
    // However, the posts data now has translated categories.
    const matchesCategory = activeCategory === t('blog_page.cat_all') || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleShare = () => {
    if (selectedPost && navigator.share) {
      navigator.share({
        title: selectedPost.title,
        text: selectedPost.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handlePrint = () => {
    window.print();
  };

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
      <div className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-24 px-6 md:px-[10%] animate-fade-in-up bg-midnight overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-bronze text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-10 md:mb-12 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t('nav.back_blog')}
          </button>
          <article className="space-y-8 md:space-y-12">
            <header className="space-y-6 md:space-y-8">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[9px] sm:text-[11px] text-text-muted uppercase tracking-widest font-bold">
                <span className="bg-bronze/10 text-bronze px-3 py-1 md:px-4 md:py-1.5 rounded-full">{selectedPost.category}</span>
                <span className="flex items-center gap-2"><Calendar size={14} className="text-bronze" /> {selectedPost.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-bronze" /> {selectedPost.readTime}</span>
              </div>
              <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl leading-tight">{selectedPost.title}</h1>
              <div className="w-full h-64 sm:h-96 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <img src={selectedPost.image} className="w-full h-full object-cover" alt="" />
              </div>
            </header>
            <div className="prose prose-invert max-w-none text-text-muted text-base sm:text-lg leading-relaxed">
              {selectedPost.content}
            </div>
            <footer className="pt-8 md:pt-12 border-t border-white/5 flex flex-wrap gap-4 md:gap-6">
               <button 
                 onClick={handleShare}
                 className="flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-bronze transition-colors"
               >
                  <Share2 size={16} /> {t('blog_page.share')}
               </button>
               <button 
                 onClick={handlePrint}
                 className="flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-bronze transition-colors"
               >
                  <Printer size={16} /> {t('blog_page.print')}
               </button>
            </footer>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-24 px-6 md:px-[10%] animate-fade-in-up bg-midnight">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12 mb-12 md:mb-20">
          <div className="max-w-2xl w-full">
            <button onClick={onBack} className="flex items-center gap-2 text-bronze text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 hover:text-white group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {t('nav.back_home')}
            </button>
            <span className="text-bronze text-xs sm:text-sm font-bold uppercase tracking-widest block mb-4">{t('blog_page.tag')}</span>
            <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-7xl leading-tight">
              {t('blog_page.title')} <span className="serif-italic text-bronze">{t('blog_page.titleHighlight')}</span>
            </h1>
          </div>
          <div className="relative group max-w-md w-full">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('blog_page.search_placeholder')}
              className="w-full bg-midnight-light/80 border border-white/10 rounded-full px-5 py-4 sm:px-6 sm:py-5 text-white text-sm sm:text-base outline-none focus:border-bronze transition-all"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30" size={18} />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 md:mb-16 border-b border-white/5 pb-8 md:pb-10">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'border-bronze text-bronze bg-bronze/10' : 'border-white/10 text-white/50 hover:border-bronze hover:text-bronze'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {currentPosts.map((post) => (
                <article 
                  key={post.id} 
                  onClick={() => setSelectedPost(post)}
                  className="group cursor-pointer bg-midnight-light/60 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 hover:border-bronze/30 transition-all flex flex-col h-full shadow-lg"
                >
                  <div className="h-48 sm:h-56 overflow-hidden relative">
                    <img src={post.image} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-bronze text-midnight text-[8px] sm:text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] text-text-muted uppercase tracking-widest mb-3 sm:mb-4">
                       <span className="flex items-center gap-1.5"><Calendar size={12} className="text-bronze" /> {post.date}</span>
                    </div>
                    <h3 className="font-serif text-white text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:text-bronze transition-colors leading-snug">{post.title}</h3>
                    <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">{post.excerpt}</p>
                    <button className="flex items-center gap-2 text-bronze text-[9px] sm:text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      {t('blog_page.read_more')} <ChevronRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
              <div className="mt-12 md:mt-20 flex justify-center items-center gap-3 md:gap-4">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center font-bold text-[10px] md:text-xs transition-all ${
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
          <div className="py-16 md:py-20 text-center">
            <h3 className="text-white text-xl sm:text-2xl font-serif mb-4">{t('blog_page.no_results')}</h3>
            <p className="text-text-muted text-sm sm:text-base mb-6 md:mb-8">{t('blog_page.no_results_desc')}</p>
            <button onClick={() => {setSearchQuery(''); setActiveCategory(t('blog_page.cat_all'));}} className="text-bronze uppercase text-[9px] sm:text-[10px] font-bold border-b border-bronze pb-1">
              {t('blog_page.clear_filters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
