import { useState } from 'react';
import { newsArticles, getNewsByCategory, formatDate } from '../utils/newsData';

function News() {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // 利用可能なカテゴリーを取得
  const categories = [...new Set(newsArticles.map(article => article.category))];
  
  // フィルタリングされた記事を取得
  const filteredArticles = getNewsByCategory(selectedCategory);

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
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-brand-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 記事一覧 */}
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-4">
                  <div className="w-24 sm:w-32 md:w-40 shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-auto sm:h-20 md:h-24 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      
                      <span className="inline-block bg-brand-navy text-gray-700 text-xs px-2 py-1 rounded-full self-start sm:self-auto">
                        {article.category}
                      </span>
                    </div>
                    
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      <a
                        href={`/news/${article.slug}`}
                        className="hover:text-brand-navy transition-colors duration-200"
                      >
                        {article.title}
                      </a>
                      
                    </h2>
                    <span className="text-sm text-gray-500 mb-1 sm:mb-0">
                        {formatDate(article.date)}
                      </span>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
                      {article.excerpt}
                    </p>
                    
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
              </article>
            ))}
          </div>

          {/* 記事が見つからない場合 */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                該当する記事が見つかりませんでした。
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default News;