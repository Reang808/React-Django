import { useState, useEffect } from 'react';
import { newsAPI, formatDate, transformArticleData } from '../services/newsAPI';

function Top() {
  const [active, setActive] = useState('web');
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isServiceVisible, setIsServiceVisible] = useState(false);
  const [isNewsVisible, setIsNewsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  const services = {
    web: {
      title: 'Web開発',
      desc: 'Web開発では、React×Djangoのモダンなフルスタック技術を用い、事業成長を支える以下のようなプロダクトを開発します。',
      link: '/service',
      image: '/images/coding-photo.jpg',
      alt: 'Web開発のイメージ'
    },
    dx: {
      title: 'DX支援',
      desc: 'DX支援では、最新のWeb技術と自動化ツールを活用し、企業のデジタルトランスフォーメーションを推進します。',
      link: '/service',
      image: '/images/profile.png',
      alt: 'DX支援のイメージ'
    },
  };

  const activeService = services[active];

  // ヒーローセクションのアニメーション
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 300); // 0.3秒後にアニメーション開始

    return () => clearTimeout(timer);
  }, []);

  // Aboutセクションのスクロールアニメーション
  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // 10%見えたらトリガー
        rootMargin: '-50px 0px' // 少し遅めにトリガー
      }
    );

    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutObserver.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        aboutObserver.unobserve(aboutSection);
      }
    };
  }, []);

  // Serviceセクションのスクロールアニメーション
  useEffect(() => {
    const serviceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsServiceVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // 10%見えたらトリガー
        rootMargin: '-50px 0px' // 少し遅めにトリガー
      }
    );

    const serviceSection = document.getElementById('service-section');
    if (serviceSection) {
      serviceObserver.observe(serviceSection);
    }

    return () => {
      if (serviceSection) {
        serviceObserver.unobserve(serviceSection);
      }
    };
  }, []);

  // Newsセクションのスクロールアニメーション
  useEffect(() => {
    const newsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNewsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // 10%見えたらトリガー
        rootMargin: '-50px 0px' // 少し遅めにトリガー
      }
    );

    const newsSection = document.getElementById('news-section');
    if (newsSection) {
      newsObserver.observe(newsSection);
    }

    return () => {
      if (newsSection) {
        newsObserver.unobserve(newsSection);
      }
    };
  }, []);

  // Contactセクションのスクロールアニメーション
  useEffect(() => {
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContactVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // 10%見えたらトリガー
        rootMargin: '-50px 0px' // 少し遅めにトリガー
      }
    );

    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactObserver.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        contactObserver.unobserve(contactSection);
      }
    };
  }, []);

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
          src="/images/HERo.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0 "
        />
       
        {/* コンテンツ */}
        <div className="relative z-20 max-w-6xl mx-auto text-center px-6">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg transition-all duration-1000 ease-out ${
            isHeroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            システム開発
          </h1>
          <p className={`text-lg md:text-xl mb-10 text-gray-100 drop-shadow-md transition-all duration-1000 ease-out delay-300 ${
            isHeroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            最新技術を駆使したフルスタック開発で、企業サイト・業務システム・ECサイトまで幅広く対応いたします。
          </p>
          <a
            href="/contact"
            className={`inline-block bg-white text-[#14213d] px-8 py-3 rounded-md font-semibold hover:bg-[#48b6e8] hover:text-white transition-all duration-1000 ease-out delay-500 ${
              isHeroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
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
          <div id="about-section" className="mb-24">
            <h2 className="text-4xl text-brand-primary font-bold mb-12 text-left border-l-4 border-[#14213d] pl-3 relative overflow-hidden">
              <span className={`inline-block transition-all duration-800 ease-out ${
                isAboutVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                About
              </span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
              {/* テキスト部分 */}
              <div className="flex-1">
                <p className={`text-xl text-neutral-700 mb-8 leading-relaxed text-left transition-all duration-800 ease-out delay-300 ${
                  isAboutVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  Reang（リアング）は、React × Django を専門とするWebアプリケーション開発会社です。<br />
                  企業サイト・業務システム・ECサイトなど、お客様のニーズに合わせた高品質なWebアプリケーションを開発いたします。
                </p>
                <div className="text-left">
                <a
                  href="/about"
                  className={`inline-block text-[#14213d] bg-white px-8 py-3 rounded-md font-semibold hover:bg-[#14213d] hover:text-white transition-all duration-800 ease-out delay-500 shadow-lg ${
                    isAboutVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
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
                  className={`w-full h-auto rounded-lg shadow-xl object-cover hover:shadow-2xl transition-all duration-800 ease-out delay-700 ${
                    isAboutVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Service Section */}
          <div id="service-section">
            <h2 className="text-4xl text-brand-primary font-bold mb-12 text-left border-l-4 border-[#14213d] pl-3 relative overflow-hidden">
              <span className={`inline-block transition-all duration-800 ease-out ${
                isServiceVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                Service
              </span>
            </h2>
            <p className={`text-xl text-left text-gray-700 mb-12 max-w-4xl leading-relaxed transition-all duration-800 ease-out delay-300 ${
              isServiceVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              モダンなWeb技術を活用して、ノーコード、ローコード開発からプログラミングまで幅広く対応します。<br />
              小規模な個人サイトから大規模な企業システムまで、幅広いニーズにお応えします。
            </p>
            
            <div className={`flex justify-center space-x-4 mb-12 transition-all duration-800 ease-out delay-500 ${
              isServiceVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
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

            <div className={`max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-800 ease-out delay-700 hover:shadow-3xl ${
              isServiceVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex flex-col md:flex-row">
                {/* テキスト部分 */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl font-semibold text-gray-900 text-left mb-6">
                    {activeService.title}
                  </h3>
                  <div 
                    className="text-neutral-700 mb-8 leading-relaxed text-left text-lg"
                    dangerouslySetInnerHTML={{ __html: activeService.desc }}
                  />
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
      <section id="news-section" className="relative py-24 overflow-hidden">
        
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl text-brand-black font-bold mb-6 text-left border-l-4 border-brand-navy pl-3 relative overflow-hidden">
              <span className={`inline-block transition-all duration-800 ease-out ${
                isNewsVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                News
              </span>
            </h2>
            <p className={`text-xl text-left text-gray-700 mb-8 max-w-4xl leading-relaxed transition-all duration-800 ease-out delay-300 ${
              isNewsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              最新の開発事例やお知らせ、技術情報など、Reangの取り組みをお届けします。<br />
              
            </p>
            <div className={`flex justify-end transition-all duration-800 ease-out delay-500 ${
              isNewsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
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
          </div>
          
          <div className={`space-y-6 transition-all duration-800 ease-out delay-700 ${
            isNewsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
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
      <section id="contact-section" className="relative py-24 overflow-hidden text-gray-100">
        {/* 背景画像 */}
        <img
          src="/images/bgcontac.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 z-10"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-left">
          <h2 className="text-4xl font-bold mb-8 border-l-4 border-[#48b6e8] pl-3 relative overflow-hidden">
            <span className={`inline-block transition-all duration-800 ease-out ${
              isContactVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}>
              Contact
            </span>
          </h2>
          <p className={`text-xl text-white mb-8 leading-relaxed transition-all duration-800 ease-out delay-300 ${
            isContactVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            ご相談・お見積り・制作依頼など、どんなことでもお気軽にお問い合わせください。<br />
            まずは無料でご相談いただけますので、お気軽にお声がけください。
          </p>
          <a
            href="/contact"
            className={`inline-block bg-white text-[#14213d] px-8 py-3 rounded-md font-semibold hover:bg-[#48b6e8] hover:text-white transition-all duration-800 ease-out delay-500 shadow-lg ${
              isContactVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            お問い合わせページへ
          </a>
        </div>
      </section>
    </div>
  );
}

export default Top;
