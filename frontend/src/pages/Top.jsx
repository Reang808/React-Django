import { useState } from 'react';

function Top() {
  const [active, setActive] = useState('web');

  const services = {
    web: {
      title: 'Web開発',
      desc: 'ReactとDjangoを活用したフルスタック開発で、モダンで高性能なWebサイトを構築します。',
      link: '/service',
      image: '/images/buridge.jpg',
      alt: 'Web開発のイメージ'
    },
    dx: {
      title: 'DX支援',
      desc: '業務効率化・自動化・データ分析など、企業の課題をテクノロジーで解決します。',
      link: '/service',
      image: '/images/city-1-1400w.jpg',
      alt: 'DX支援のイメージ'
    },
  };

  const activeService = services[active];

  return (
    <div className="min-h-screen bg-white text-brand-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-24  flex items-center">
        {/* 背景動画 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-90 contrast-110 hue-rotate-180 saturate-125 blur-sm"
        >
          <source src="/videos/computerwork.mp4" type="video/mp4" />
          {/* フォールバック用の画像 */}
          Your browser does not support the video tag.
        </video>
        
        {/* 動画の上に重ねるオーバーレイ（青×黄色グラデーション） */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(251, 191, 36, 0.2) 100%)'
          }}
        ></div>
        
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
      {/* About Section */}
      <section className="py-24 bg-gray-300">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-brand-primary font-bold mb-10 text-left border-l-4 border-[#14213d] pl-3">
            About
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* テキスト部分 */}
            <div className="flex-1">
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed text-left">
                Reang（リアング）はReact＋Djangoという技術を使ったモダンなシステム開発を軸に、
                中小企業や個人事業主のDXを支援しています。
              </p>
              <div className="text-left">
              <a
                href="/about"
                className="inline-block text-[#14213d] bg-white px-8 py-3 rounded-md font-semibold hover:bg-[#14213d] hover:text-white transition"
              >
                事業概要を見る
              </a>
              </div>
            </div>
            
            {/* 画像部分 */}
            <div className="flex-1 max-w-md">
              <img
                src="/images/coding-photo.jpg"
                alt="コーディング中の烈志"
                className="w-full h-auto rounded-lg shadow-lg object-cover hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Service Section */}
      <section className="py-24 bg-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-brand-primary font-bold mb-10 text-left border-l-4 border-[#14213d] pl-3">
            Service
          </h2>
          <p className="text-lg text-left text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            モダンなWeb技術を活用して、ノーコード、ローコード開発からプログラミングまで幅広く対応します。<br />
            小規模な個人サイトから大規模な企業システムまで、幅広いニーズにお応えします。
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActive('web')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                active === 'web'
                  ? 'bg-brand-navy text-black'
                  : 'text-brand-navy border border-brand-navy hover:bg-brand-sky hover:text-black'
              }`}
            >
              Web開発
            </button>
            <button
              onClick={() => setActive('dx')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                active === 'dx'
                  ? 'bg-brand-navy text-black'
                  : 'text-brand-navy border border-brand-navy hover:bg-brand-sky hover:text-black'
              }`}
            >
              DX支援
            </button>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
              {/* テキスト部分 */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-gray-90 text-left mb-4">
                  {activeService.title}
                </h3>
                <p className="text-neutral-700 mb-6 leading-relaxed text-left">
                  {activeService.desc}
                </p>
                <a
                  href={activeService.link}
                  className="inline-flex items-center text-black hover:text-[#48b6e8] font-semibold transition-colors duration-200"
                >
                  詳しく見る
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              {/* 画像部分 */}
              <div className="md:w-1/2 order-1 md:order-2">
                <img
                  src={activeService.image}
                  alt={activeService.alt}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-brand-primary text-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-left">
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
