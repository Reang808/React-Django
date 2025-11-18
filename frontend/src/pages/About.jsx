import { useState, useEffect } from "react";


function About() {
  const [active, setActive] = useState("business");
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  const sections = {
    business: {
      title: "事業概要",
      content:
        "Reangは、広島を拠点にWeb開発・DX支援を行うフリーランスエンジニアとして活動しています。中小企業・個人事業主の方々が抱える課題を、テクノロジーの力で解決することを目指しています。",
    },
    message: {
      title: "私のメッセージ",
      content:
        "エンジニアリングは単なる技術ではなく、想いを形にする手段だと考えています。私自身も多くの挑戦と失敗を経験してきました。その中で学んだのは、『誠実さ』と『継続』の大切さです。Reangは、お客様と共に成長し続けるパートナーでありたいと願っています。",
    },
    career: {
      title: "経歴",
      content:
        "高校卒業後、製造業・動画編集・物販など多様な仕事を経験。その後、独学でプログラミングを学び、Django + Reactを中心にフルスタックエンジニアとして独立。現在は広島を中心に、Web制作・システム開発・DX支援を提供中。",
    },
  };

  const activeSection = sections[active];

  // ヒーローセクションのアニメーション
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 300); // 0.3秒後にアニメーション開始

    return () => clearTimeout(timer);
  }, []);

  // About Meセクションのスクロールアニメーション
  useEffect(() => {
    const aboutMeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutMeVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // 10%見えたらトリガー
        rootMargin: '-50px 0px' // 少し遅めにトリガー
      }
    );

    const aboutMeSection = document.getElementById('about-me-section');
    if (aboutMeSection) {
      aboutMeObserver.observe(aboutMeSection);
    }

    return () => {
      if (aboutMeSection) {
        aboutMeObserver.unobserve(aboutMeSection);
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

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden text-[#14213d]">
        {/* 背景画像 */}
        <img
          src="/images/bghero.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#48b6e8]/30 to-white/80 z-10"></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 ease-out ${
            isHeroVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>事業概要 - About</h1>
          <div className="grid md:grid-cols-3 gap-8 text-left md:text-center">
            <div className={`transition-all duration-1000 ease-out delay-300 ${
              isHeroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-xl font-semibold mb-2">ミッション - MISSION</h3>
              <p className="text-[#14213d] text-sm leading-relaxed">
                先進技術とスピードで、ビジネスの可能性を広げる。
              </p>
            </div>
            <div className={`transition-all duration-1000 ease-out delay-500 ${
              isHeroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-xl font-semibold mb-2">ビジョン - VISION</h3>
              <p className="text-[#14213d] text-sm leading-relaxed">
                個人でも企業のように挑戦できる社会を創る。
              </p>
            </div>
            <div className={`transition-all duration-1000 ease-out delay-700 ${
              isHeroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-xl font-semibold mb-2">バリュー - VALUE</h3>
              <p className="text-[#14213d] text-sm leading-relaxed">
                誠実・継続・挑戦。この3つを軸に、お客様と共に成長します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-me-section" className="relative py-24 overflow-hidden">
        {/* 背景画像 */}
        <img
          src="/images/bgservice.png"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 z-10"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-left">
          <h2 className="text-3xl font-bold text-brand-black mb-8 border-l-4 border-brand-navy pl-3 relative overflow-hidden">
            <span className={`inline-block transition-all duration-800 ease-out ${
              isAboutMeVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}>
              About Me
            </span>
          </h2>
          <div className="flex flex-col items-center md:items-start mb-10">
            <img
              src="/images/binmy.JPG"
              alt="プロフィール写真"
              className={`w-40 h-40 object-cover rounded-full shadow mb-8 transition-all duration-800 ease-out delay-300 ${
                isAboutMeVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            />

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => setActive("business")}
                className={`px-6 py-2 rounded-md font-semibold border transition-all duration-800 ease-out delay-500 ${
                  active === "business"
                    ? "bg-gray-900 text-white"
                    : "border-brand-navy text-brand-navy hover:bg-brand-sky hover:text-white"
                } ${
                  isAboutMeVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                事業概要
              </button>
              <button
                onClick={() => setActive("message")}
                className={`px-6 py-2 rounded-md font-semibold border transition-all duration-800 ease-out delay-600 ${
                  active === "message"
                    ? "bg-gray-900 text-white"
                    : "border-brand-navy text-brand-navy hover:bg-brand-sky hover:text-white"
                } ${
                  isAboutMeVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                メッセージ
              </button>
              <button
                onClick={() => setActive("career")}
                className={`px-6 py-2 rounded-md font-semibold border transition-all duration-800 ease-out delay-700 ${
                  active === "career"
                    ? "bg-gray-900 text-white"
                    : "border-brand-navy text-brand-navy hover:bg-brand-sky hover:text-white"
                } ${
                  isAboutMeVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                経歴
              </button>
            </div>

            {/* Content */}
            <div className={`bg-white rounded-lg shadow p-8 w-full transition-all duration-800 ease-out delay-800 ${
              isAboutMeVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                {activeSection.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {activeSection.content}
              </p>
            </div>
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

export default About;
