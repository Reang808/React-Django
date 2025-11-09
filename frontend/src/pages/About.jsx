import { useState } from "react";


function About() {
  const [active, setActive] = useState("business");

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

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-t from-[#48b6e8]  to-white text-[#14213d]  py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">MISSION / VISION / VALUE</h1>
          <div className="grid md:grid-cols-3 gap-8 text-left md:text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">MISSION</h3>
              <p className="text-[#14213d] text-sm leading-relaxed">
                技術と誠実さで、ビジネスの可能性を広げる。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">VISION</h3>
              <p className="text-[#14213d] text-sm leading-relaxed">
                個人でも企業のように挑戦できる社会を創る。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">VALUE</h3>
              <p className="text-[#14213d] text-sm leading-relaxed">
                誠実・継続・挑戦。この3つを軸に、お客様と共に成長します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-5xl mx-auto px-6 text-left">
          <h2 className="text-3xl font-bold text-brand-black mb-8 border-l-4 border-brand-navy pl-3">
            About Me
          </h2>
          <div className="flex flex-col items-center md:items-start mb-10">
            <img
              src="/images/binmy.JPG"
              alt="プロフィール写真"
              className="w-40 h-40 object-cover rounded-full shadow mb-8"
            />

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => setActive("business")}
                className={`px-6 py-2 rounded-md font-semibold border transition ${
                  active === "business"
                    ? "bg-gray-900 text-white"
                    : "border-brand-navy text-brand-navy hover:bg-brand-sky hover:text-white"
                }`}
              >
                事業概要
              </button>
              <button
                onClick={() => setActive("message")}
                className={`px-6 py-2 rounded-md font-semibold border transition ${
                  active === "message"
                    ? "bg-gray-900 text-white"
                    : "border-brand-navy text-brand-navy hover:bg-brand-sky hover:text-white"
                }`}
              >
                メッセージ
              </button>
              <button
                onClick={() => setActive("career")}
                className={`px-6 py-2 rounded-md font-semibold border transition ${
                  active === "career"
                    ? "bg-gray-900 text-white"
                    : "border-brand-navy text-brand-navy hover:bg-brand-sky hover:text-white"
                }`}
              >
                経歴
              </button>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg shadow p-8 w-full transition">
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

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-black mb-6 border-l-4 border-brand-navy pl-3 text-left">
            News
          </h2>
          <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* テキスト部分 */}
              <div className="flex-1 text-left order-2 md:order-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <img 
                    src="/images/Instagram.png" 
                    alt="Instagram" 
                    className="w-10 h-10 mr-2 object-contain"
                  /> 🎉 Instagram始めました！
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  日々の活動の裏側を公開しています。<br />
                  開発中の様子、学習記録、技術の備忘録など、リアルな情報をお届けします。
                </p>
                <a
                  href="https://www.instagram.com/reang_develop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-linear-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-md font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
                >
                  
                  Instagramをフォロー
                </a>
              </div>
              
              {/* 写真部分 */}
              <div className="shrink-0 order-1 md:order-2">
                <div className="w-80 h-80rounded-lg overflow-hidden shadow-lg border-2 border-white">
                  <img 
                    src="/images/image.png" 
                    alt="News写真" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-brand-primary text-white text-left">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#48b6e8] pl-3">
            Contact
          </h2>
          <p className="mb-10 leading-relaxed text-gray-100">
            ご相談・お見積り・制作依頼など、どんなことでもお気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#14213d] px-8 py-3 rounded-md font-semibold hover:bg-[#48b6e8] hover:text-white transition"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            お問い合わせページへ
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
