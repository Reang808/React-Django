import { useState, useEffect } from 'react';
import { newsAPI, formatDate, transformArticleData } from '../services/newsAPI';

function News() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // カテゴリー一覧を取得
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await newsAPI.getCategories();
        setCategories(response.results || response);
      } catch (err) {
        console.error('カテゴリー取得エラー:', err);
      }
    };

    fetchCategories();
  }, []);

  // 記事一覧を取得
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await newsAPI.getArticles({
          category: selectedCategory
        });
        const transformedArticles = response.results 
          ? response.results.map(transformArticleData)
          : response.map(transformArticleData);
        setArticles(transformedArticles);
      } catch (err) {
        console.error('記事取得エラー:', err);
        setError('記事の取得に失敗しました');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヒーローセクション */}
      <section className="bg-brand-primary text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News</h1>
          <p className="text-lg text-gray-100">最新の情報をお届けします</p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* カテゴリーフィルター */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === ''
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-800'
                }`}
              >
                すべて
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.slug
                      ? 'bg-brand-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* 記事一覧 */}
          <div className="space-y-6">
            {loading ? (
              // ローディング表示
              <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
                <p className="mt-4 text-gray-600">記事を読み込み中...</p>
              </div>
            ) : error ? (
              // エラー表示
              <div className="text-center py-16">
                <p className="text-red-600 text-lg">{error}</p>
              </div>
            ) : articles.length === 0 ? (
              // 記事がない場合
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  該当する記事が見つかりませんでした。
                </p>
              </div>
            ) : (
              articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-4">
                  <div className="w-24 sm:w-32 md:w-40 shrink-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      
                      <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full self-start sm:self-auto">
                        {article.category}
                      </span>
                    </div>  
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-auto sm:h-auto md:h-auto object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1"> 
                       
                    <h2 className="text-sm md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      <a
                        href={`/news/${article.slug}`}
                        className="hover:text-brand-navy transition-colors duration-200"
                      >
                        {article.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-gray-500">
                        {formatDate(article.date)}
                      </span>
                      <a
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center text-brand-navy hover:text-[#48b6e8] font-medium transition-colors duration-200 text-sm"
                      >
                        続きを読む
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                    
                  </div>
                </div>
              </article>
              ))
            )}
          </div>


        </div>
      </section>
    </div>
  );
}

export default News;