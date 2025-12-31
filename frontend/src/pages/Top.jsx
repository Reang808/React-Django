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
      title: 'Webシステム開発', // 「Web開発」より少し具体的に
      desc: 'React × Django のモダンな技術選定により、拡張性と保守性に優れたWebアプリケーションを構築。貴社の事業成長を支える堅牢なシステムを提供します。',
      link: '/service',
      image: '/images/coding-photo.jpg',
      alt: 'Webシステム開発のイメージ'
    },
    dx: {
      title: 'DXコンサルティング・支援', // 単なる支援よりコンサル色を出す
      desc: '最新のWeb技術と自動化ツールを活用し、業務フローの刷新やデジタル化を推進。企業のデジタルトランスフォーメーションを伴走型で支援します。',
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
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer の共通処理化も可能ですが、今回は既存ロジックを維持します
  useEffect(() => {
    const createObserver = (setter, id) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setter(true);
            }
          });
        },
        { threshold: 0.1, rootMargin: '-50px 0px' }
      );
      const target = document.getElementById(id);
      if (target) observer.observe(target);
      return () => { if (target) observer.unobserve(target); };
    };

    const cleanupAbout = createObserver(setIsAboutVisible, 'about-section');
    const cleanupService = createObserver(setIsServiceVisible, 'service-section');
    const cleanupNews = createObserver(setIsNewsVisible, 'news-section');
    const cleanupContact = createObserver(setIsContactVisible, 'contact-section');

    return () => {
      cleanupAbout();
      cleanupService();
      cleanupNews();
      cleanupContact();
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
      <section className="relative overflow-hidden text-white py-24 flex items-center">
        <img
          src="/images/HERo.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
       
        <div className="relative z-20 max-w-6xl mx-auto text-center px-6">
          {/* キャッチコピーをより法人らしく力強いものに変更 */}
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg transition-all duration-1000 ease-out ${
            isHeroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            技術で、ビジネスを加速させる。
          </h1>
          <p className={`text-lg md:text-xl mb-10 text-gray-100 drop-shadow-md transition-all duration-1000 ease-out delay-300 ${
            isHeroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            株式会社Reangは、確かな技術力と柔軟な発想で<br className="hidden md:block"/>
            企業のDX推進とシステム開発をトータルサポートします。
          </p>
          <a
            href="/contact"
            className={`inline-block bg-white text-[#14213d] px-8 py-3 rounded-md font-semibold hover:bg-[#48b6e8] hover:text-white transition-all duration-1000 ease-out delay-500 ${
              isHeroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            無料相談・お問い合わせ
          </a>
        </div>
      </section>

      {/* About & Service Section - 統合 */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="/images/bgcontent.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
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
                About Us
              </span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
              <div className="flex-1">
                {/* 法人化に合わせて文章を刷新 */}
                <h3 className={`text-2xl font-bold mb-4 text-brand-navy transition-all duration-800 ease-out delay-200 ${
                  isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  広島から全国へ、<br/>最適なITソリューションを。
                </h3>
                <p className={`text-lg text-neutral-700 mb-8 leading-relaxed text-left transition-all duration-800 ease-out delay-300 ${
                  isAboutVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}>
                  株式会社Reang（リアング）は、React × Django を専門領域とするWeb開発企業です。<br />
                  単なるシステム開発にとどまらず、お客様のビジネス課題を深く理解し、事業成長に直結するDXソリューションをご提案いたします。法人・個人問わず、技術の力で新しい価値を創造します。
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
                  会社概要・ビジョン
                </a>
                </div>
              </div>
              
              <div className="flex-1 max-w-md">
                <img
                  src="/images/IMG_1338.jpg"
                  /* alt属性を変更: 個人の名前よりも風景としての説明がベター */
                  alt="開発風景"
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
              プロフェッショナルによるフルスクラッチ開発から、スピード重視のローコード開発まで。<br />
              お客様のフェーズや予算に合わせ、最適な技術選定を行います。
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
                    ? 'bg-brand-navy text-gray-800' // 配色は既存を維持していますが、ブランドカラーに合わせて調整推奨
                    : 'text-brand-primary border border-brand-primary hover:bg-gray-100 bg-white'
                }`}
              >
                Webシステム開発
              </button>
            
              <button
                onClick={() => setActive('dx')}
                className={`px-8 py-3 rounded-md font-medium transition shadow-lg ${
                  active === 'dx'
                    ? 'bg-brand-navy text-gray-800'
                    : 'text-brand-primary border border-brand-primary hover:bg-gray-100 bg-white'
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
                    サービス詳細
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
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
              株式会社Reangからの最新のお知らせ、技術ブログ、開発事例をご紹介します。
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
                ニュース一覧
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* News List Content (Logic Unchanged) */}
          <div className={`space-y-6 transition-all duration-800 ease-out delay-700 ${
            isNewsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-navy"></div>
                <p className="mt-2 text-gray-600">読み込み中...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-red-600">{error}</p>
              </div>
            ) : latestNews.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">現在、新しいお知らせはありません</p>
              </div>
            ) : (
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
        <img
          src="/images/bgcontac.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
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
            開発のご相談、お見積り依頼、協業のご相談など<br />
            まずはフォームよりお気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className={`inline-block bg-white text-[#14213d] px-8 py-3 rounded-md font-semibold hover:bg-[#48b6e8] hover:text-white transition-all duration-800 ease-out delay-500 shadow-lg ${
              isContactVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            お問い合わせフォームへ
          </a>
        </div>
      </section>
    </div>
  );
}

export default Top;