
import { useState, useEffect } from "react";

function Service() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  const services = [
    {
      title: "Web開発",
      desc: "UI と API を分離したモダン構成で、スピード・安全性・拡張性に優れた Web プロダクトを構築します。LPや企業サイトから、EC・予約システムなどの実用アプリまで、あなたの事業を動かす「本物の土台」をゼロからつくります。",
      icon: "💻",
    },
    {
      title: "DX支援",
      desc: "現在の業務フローを可視化し、デジタルツール導入・自動化・データ活用で「仕組みで回る会社」へ進化させます。作業の整理、ワークフロー再設計、各部署の連携改善まで、現場に合ったDXを実装します。",
      icon: "⚙️",
    },
    {
      title: "システム構築",
      desc: "ノーコード/ローコードでコストを抑えながら、現場が「すぐに使える」業務ツールを開発します。在庫管理、勤怠、事務処理自動化、データ集計など、あなたの会社にフィットする業務ツールを短期間で導入可能です。",
      icon: "🧩",
    },
    {
      title: "コンサルティング",
      desc: "ただアドバイスをするのではなく、実際に手を動かしながら 「会社で使える力」 を育てる伴走型支援です。ノーコード活用、AI導入、ツール運用、業務整理など、あなたのチームが自走できるまで徹底してサポートします。",
      icon: "💡",
    },
  ];

  const steps = [
    {
      title: "ヒアリング・提案",
      description: "お客様のご要望や課題を詳しくお聞きし、最適なソリューションを提案いたします",
      duration: "1-2週間",
      icon: "🔍"
    },
    {
      title: "設計・デザイン",
      description: "ワイヤーフレーム作成からUI/UXデザインまで、使いやすさを重視した設計を行います",
      duration: "2-3週間",
      icon: "🎨"
    },
    {
      title: "開発・実装",
      description: "モダンな技術スタックを使用し、安全性と拡張性を重視した開発を実施します",
      duration: "3-6週間",
      icon: "⚙️"
    },
    {
      title: "運用・サポート",
      description: "公開後の運用サポートや機能追加など、継続的なサービス向上をお手伝いします",
      duration: "継続的",
      icon: "🚀"
    }
  ];

  // ヒーローセクションのアニメーション
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 300); // 0.3秒後にアニメーション開始

    return () => clearTimeout(timer);
  }, []);

  // 各セクションのスクロールアニメーション
  useEffect(() => {
    const observers = [];

    // サービスセクション
    const servicesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsServicesVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    // プロセスセクション
    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProcessVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    // コンタクトセクション
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContactVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    // 要素の監視開始
    const servicesSection = document.getElementById('services-section');
    const processSection = document.getElementById('process-section');
    const contactSection = document.getElementById('contact-section');

    if (servicesSection) servicesObserver.observe(servicesSection);
    if (processSection) processObserver.observe(processSection);
    if (contactSection) contactObserver.observe(contactSection);

    observers.push(servicesObserver, processObserver, contactObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-[Work_Sans,sans-serif]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-[#14213d]">
        {/* 背景画像 */}
        <img
          src="/images/bghero.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover to-white/80 z-0"
        />
        
        
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-left">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight transition-all duration-1000 ease-out ${
            isHeroVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>サービス一覧</h1>
          <p className={`text-lg text-gray-900 transition-all duration-1000 ease-out delay-300 ${
            isHeroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            ReangはWeb開発からDX支援まで、課題に合わせた柔軟なソリューションを提供します。
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-24 bg-[#f7f7fa]">
        <div className="max-w-6xl mx-auto px-6 text-left">
          <h2 className="text-4xl font-bold text-black mb-8 border-l-4 border-[#14213d] pl-3 relative overflow-hidden">
            <span className={`inline-block transition-all duration-800 ease-out ${
              isServicesVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}>
              提供サービス
            </span>
          </h2>
          <p className={`text-xl text-left text-gray-700 mb-12 max-w-4xl leading-relaxed transition-all duration-800 ease-out delay-300 ${
            isServicesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            お客様のニーズに合わせて、最適なソリューションをご提供いたします。<br />
            単発のプロジェクトから継続的なサポートまで、幅広く対応可能です。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 hover:border-[#48b6e8] border border-transparent duration-800 ease-out ${
                  isServicesVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  fontFamily: "'Work Sans', sans-serif",
                  transitionDelay: `${500 + index * 100}ms`
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#14213d] mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process-section" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-left">
          <h2 className="text-4xl font-bold text-black mb-8 border-l-4 border-[#14213d] pl-3 relative overflow-hidden">
            <span className={`inline-block transition-all duration-800 ease-out ${
              isProcessVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}>
              制作の流れ
            </span>
          </h2>
          <p className={`text-xl text-left text-gray-700 mb-12 max-w-4xl leading-relaxed transition-all duration-800 ease-out delay-300 ${
            isProcessVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            お客様との密なコミュニケーションを重視し、品質の高いプロダクトをお届けします。<br />
            各フェーズで進捗をご報告し、安心してお任せいただけるよう努めています。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-800 ease-out border border-gray-100 ${
                  isProcessVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#14213d] text-white rounded-full text-xl font-bold mb-4 shadow-lg">
                    {i + 1}
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="font-bold text-[#14213d] mb-2 text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                  <span className="inline-block bg-[#48b6e8] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
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

export default Service;
