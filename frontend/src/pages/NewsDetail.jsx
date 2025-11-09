import { useParams, Link } from 'react-router-dom';
import { getNewsBySlug, formatDate } from '../utils/newsData';

function NewsDetail() {
  const { slug } = useParams();
  const article = getNewsBySlug(slug);

  // 記事が見つからない場合
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">記事が見つかりません</h1>
          <p className="text-gray-600 mb-6">指定された記事は存在しないか、削除された可能性があります。</p>
          <Link
            to="/news"
            className="inline-block bg-brand-navy text-white px-6 py-3 rounded-md hover:bg-[#48b6e8] transition-colors duration-200"
          >
            ニュース一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* パンくずナビゲーション */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-brand-navy">
              ホーム
            </Link>
            <span>/</span>
            <Link to="/news" className="hover:text-brand-navy">
              ニュース
            </Link>
            <span>/</span>
            <span className="text-gray-900">{article.title}</span>
          </div>
        </div>
      </nav>

      {/* 記事ヘッダー */}
      <header className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-block bg-brand-navy text-white text-sm px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-600 text-sm">
              <time dateTime={article.date}>
                {formatDate(article.date)}
              </time>
            </div>
          </div>

          {/* アイキャッチ画像 */}
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </header>

      {/* 記事本文 */}
      <main className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {/* HTMLコンテンツを安全にレンダリング */}
            <div 
              className="article-content leading-relaxed text-gray-800"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* 記事下部のアクション */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link
                to="/news"
                className="inline-flex items-center text-brand-navy hover:text-[#48b6e8] font-medium transition-colors duration-200"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                ニュース一覧に戻る
              </Link>

              {/* ソーシャルシェアボタン（オプション） */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">シェア:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
                  title="Twitterでシェア"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        url: window.location.href,
                      });
                    }
                  }}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  title="シェア"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 関連記事セクション（今後の拡張用） */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            関連記事
          </h2>
          <div className="text-center text-gray-600">
            <p>関連記事は準備中です</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsDetail;