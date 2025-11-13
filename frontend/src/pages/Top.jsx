import { useState, useEffect } from 'react';
import { newsAPI, formatDate, transformArticleData } from '../services/newsAPI';

function Top() {
  const [active, setActive] = useState('web');
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const services = {
    web: {
      title: 'Web開発',
      desc: 'React×Djangoのフルスタックで、UI設計からバックエンド・API・運用基盤まで一気通貫で構築。高速・拡張性・保守性を両立したWebサイト/EC/業務アプリを、事業成長に寄り添うプロダクトとして開発します。',
      link: '/service',
      image: '/images/coding-photo.jpg',
      alt: 'Web開発のイメージ'
    },
    dx: {
      title: 'DX支援',
      desc: '業務自動化・データ可視化・管理ツール構築を、ノーコード・ローコード・フルスクラッチから最適選択。企業の運用に馴染む形で設計し、コスト最小・成果最大の業務改善を実現します。',
      link: '/service',
      image: '/images/profile.png',
      alt: 'DX支援のイメージ'
    },
  };

  const activeService = services[active];

  // 最新記事を取得
  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        setLoading(true);
        const response = await newsAPI.getLatestArticles(3);
        const transformedArticles = response.results 
          ? response.results.map(transformArticleData)
          : response.map(transformArticleData);
        setLatestNews(transformedArticles);
      } catch (err) {
        console.error('ニュース取得エラー:', err);
        setError('ニュースの取得に失敗しました');
        // エラー時はダミーデータを表示（フォールバック）
        setLatestNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-24  flex items-center">
        {/* 背景画像 */}
        <img
          src="/images/bgtop2.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0 "
        />
       
        {/* コンテンツ */}
        <div className="relative z-20 max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            ビジネスを加速させる<br />技術パートナー
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-100 drop-shadow-md">
            Web開発からDX支援まで、あなたのビジネスをお手伝いします。
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#14213d] px-8 py-3 rounded-md font-semibold hover:bg-[#48b6e8] hover:text-white transition"
          >
            お問い合わせへ
          </a>
        </div>
      </section>
      {/* About & Service Section - 統合 */}
      <section className="relative py-32 overflow-hidden">
        {/* 背景画像 */}
        <img
          src="/images/bgcontent.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30 z-10"></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-6">
          
          {/* About Section */}
          <div className="mb-24">
            <h2 className="text-4xl text-brand-primary font-bold mb-12 text-left border-l-4 border-[#14213d] pl-3">
              About
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
              {/* テキスト部分 */}
              <div className="flex-1">
                <p className="text-xl text-neutral-700 mb-8 leading-relaxed text-left">
                  Reang（リアング）はReact＋Djangoという技術を使ったモダンなシステム開発を軸に、
                  中小企業や個人事業主のDXを支援しています。
                </p>
                <div className="text-left">
                <a
                  href="/about"
                  className="inline-block text-[#14213d] bg-white px-8 py-3 rounded-md font-semibold hover:bg-[#14213d] hover:text-white transition shadow-lg"
                >
                  事業概要を見る
                </a>
                </div>
              </div>
              
              {/* 画像部分 */}
              <div className="flex-1 max-w-md">
                <img
                  src="/images/IMG_1338.jpg"
                  alt="コーディング中の烈志"
                  className="w-full h-auto rounded-lg shadow-xl object-cover hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>

          {/* Service Section */}
          <div>
            <h2 className="text-4xl text-brand-primary font-bold mb-12 text-left border-l-4 border-[#14213d] pl-3">
              Service
            </h2>
            <p className="text-xl text-left text-gray-700 mb-12 max-w-4xl leading-relaxed">
              モダンなWeb技術を活用して、ノーコード、ローコード開発からプログラミングまで幅広く対応します。<br />
              小規模な個人サイトから大規模な企業システムまで、幅広いニーズにお応えします。
            </p>
            
            <div className="flex justify-center space-x-4 mb-12">
              <button
                onClick={() => setActive('web')}
                className={`px-8 py-3 rounded-md font-medium transition shadow-lg ${
                  active === 'web'
                    ? 'bg-brand-navy text-gray-800'
                    : 'text-brand-primary border border-brand-primary hover:bg-gray-300 hover:text-gray-300 bg-white'
                }`}
              >
                Web開発
              </button>
              <button
                onClick={() => setActive('dx')}
                className={`px-8 py-3 rounded-md font-medium transition shadow-lg ${
                  active === 'dx'
                    ? 'bg-brand-navy text-gray-800'
                    : 'text-brand-primary border border-brand-primary hover:bg-gray-300 hover:text-gray-500 bg-white'
                }`}
              >
                DX支援
              </button>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
              <div className="flex flex-col md:flex-row">
                {/* テキスト部分 */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl font-semibold text-gray-900 text-left mb-6">
                    {activeService.title}
                  </h3>
                  <p className="text-neutral-700 mb-8 leading-relaxed text-left text-lg">
                    {activeService.desc}
                  </p>
                  <a
                    href={activeService.link}
                    className="inline-flex items-center text-black hover:text-[#48b6e8] font-semibold transition-colors duration-200 text-lg"
                  >
                    詳しく見る
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                {/* 画像部分 */}
                <div className="md:w-1/2 order-1 md:order-2">
                  <img
                    src={activeService.image}
                    alt={activeService.alt}
                    className="w-full h-72 md:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* News Section */}
      <section className="relative py-24 overflow-hidden">
        
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-brand-black border-l-4 border-brand-navy pl-3">
              News
            </h2>
            <a
              href="/news"
              className="text-brand-navy hover:text-[#48b6e8] font-medium transition-colors duration-200 flex items-center"
            >
              すべて見る
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="space-y-6">
            {loading ? (
              // ローディング表示
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-navy"></div>
                <p className="mt-2 text-gray-600">読み込み中...</p>
              </div>
            ) : error ? (
              // エラー表示
              <div className="text-center py-8">
                <p className="text-red-600">{error}</p>
              </div>
            ) : latestNews.length === 0 ? (
              // 記事がない場合
              <div className="text-center py-8">
                <p className="text-gray-600">まだ記事がありません</p>
              </div>
            ) : (
              // 記事一覧表示
              latestNews.map((article) => (
              <div key={article.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex gap-4">
                  <div className="w-24 sm:w-28 md:w-32 shrink-0">
                    
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-auto sm:h-auto md:h-auto object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <span className="inline-block bg-brand-navy text-gray-800 text-xs px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      
                      
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 hover:text-brand-primary transition-colors">
                      <a href={`/news/${article.slug}`}>
                        {article.title}
                      </a>
                    </h4>
                    <span className="text-sm text-gray-500 mb-1 md:mb-0">
                        {formatDate(article.date)}
                      </span>
                    
                  </div>
                </div>
              </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden text-gray-100">
        {/* 背景画像 */}
        <img
          src="/images/bgcontac.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 z-10"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-left">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[var(--color-brand-secondary)] pl-3">Contact</h2>
          <p className="text-lg text-white mb-8 leading-relaxed">
            ご相談・お見積り・制作依頼など、どんなことでもお気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#14213d] px-8 py-3 rounded-md font-semibold hover:bg-[#48b6e8] hover:text-white transition"
          >
            お問い合わせページへ
          </a>
        </div>
      </section>
    </div>
  );
}

export default Top;
