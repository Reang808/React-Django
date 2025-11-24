import React, { useState, useEffect, useRef } from "react";

const TopAbout = () => {
  const [active, setActive] = useState("overview");

  const aboutRef = useRef(null);
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAnim(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`w-full flex flex-col items-center transition-all duration-700 ease-out ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-6 md:p-8">
        
        {/* ヘッダー部分：画像 + タイトル */}
        <div className="flex flex-col md:flex-row items-center gap-6 pb-6 mb-6 border-b-2 border-gray-100">
          {/* プロフィール写真 */}
          <div className="flex-shrink-0">
            <img
              src="/images/binmy.JPG"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg ring-4 ring-gray-100"
            />
          </div>

          {/* タイトルと説明 */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#14213d]">
              Reang（リアング）について
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              React × Django を軸としたフルスタック開発で、お客様の挑戦を支えます
            </p>
          </div>
        </div>

        {/* タブナビゲーション */}
        <div className="flex gap-3 md:gap-6 border-b pb-2 mb-6 overflow-x-auto">
          <button
            onClick={() => setActive("overview")}
            className={`pb-2 px-2 transition-all whitespace-nowrap text-sm md:text-base ${
              active === "overview"
                ? "border-b-2 border-[#14213d] font-semibold text-[#14213d]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            事業概要
          </button>

          <button
            onClick={() => setActive("message")}
            className={`pb-2 px-2 transition-all whitespace-nowrap text-sm md:text-base ${
              active === "message"
                ? "border-b-2 border-[#14213d] font-semibold text-[#14213d]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            メッセージ
          </button>

          <button
            onClick={() => setActive("career")}
            className={`pb-2 px-2 transition-all whitespace-nowrap text-sm md:text-base ${
              active === "career"
                ? "border-b-2 border-[#14213d] font-semibold text-[#14213d]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            経歴
          </button>
        </div>

        {/* コンテンツエリア */}
        <div className="text-gray-700 leading-relaxed text-sm md:text-base">

            {/* 事業概要 */}
            {active === "overview" && (
              <div className="animate-fadeIn">
                <p>
                  Reangは、React × Django を軸としたフルスタック開発により、
                  お客様の業務に最適化されたオリジナルのWebシステム・アプリケーションを提供しています。<br></br><br></br>
                  主に中小企業・小規模事業者・個人事業主の方々を対象に、
                  テンプレートや既存ツールに頼らず「事業の成長に寄り添うプロダクト」を
                  ゼロから開発することを強みとしています。<br></br><br></br>
                  ビジネスモデルは受託型のプロダクト開発で、
                  ヒアリングから設計・開発・運用サポートまで一貫対応。<br></br>
                  本当に必要な仕組みだけを最適な形で実現し、長く使えるシステムを構築します。
                </p>
              </div>
            )}

            {/* メッセージ */}
            {active === "message" && (
              <div className="animate-fadeIn">
                <p>
                  サイトを訪問いただき、誠にありがとうございます。<br></br><br></br>Reangは、
                  「もっと面白いことをしたい」「新しい挑戦を形にしたい」と考える方々の
                  背中を押すために生まれた開発サービスです。<br></br><br></br>
                  私は、事業やアイデアに本気で向き合う人と一緒に、
                  まだ世の中にない価値をつくり出すことを何よりの喜びとしています。<br></br>
                  もし新しいビジネスの種や実現したい構想があれば、ぜひ気軽に相談してください。<br></br><br></br>
                  また、業務が煩雑で管理が追いつかない、どのツールを使えばよいか分からない、
                  システム化に踏み出せないといった課題は、私が責任を持って解決します。<br></br>
                  Reangは、挑戦を前に進める「伴走型パートナー」として価値を提供し続けます。
                </p>
              </div>
            )}

            {/* 経歴 */}
            {active === "career" && (
              <div className="animate-fadeIn">
                <p className="leading-relaxed">
                  独学で開発を学び始めたことが、エンジニアとしての原点でした。<br></br>
                  当時は副業を複数掛け持ちしながら、自分の武器になるスキルを模索していた中で
                  出会ったプログラミングに強く惹かれ、本気でのめり込むようになりました。<br></br><br></br>
                  最初に学んだPythonではバックエンドの世界に夢中になり、
                  Djangoで業務システムを構築する楽しさに没頭。<br></br>
                  その後Reactを学び、フルスタックとしてフロントからバックエンド、インフラまで
                  一気通貫で開発できるようになりました。
                </p>

                <p className="mt-4 leading-relaxed">
                  これまでに開発してきたプロダクトは、顧客管理・在庫管理・予約システムなど
                  現場で本当に使われる業務ツールが中心です。<br></br>
                  個人事業主、小規模店舗、トレーナー、美容系事業者など、
                  事業の現場で困りごとを抱える方々を支援してきました。
                </p>

                <p className="mt-4 leading-relaxed">
                  現在は React × Django を中心に、受託開発・業務効率化・DX支援、
                  ノーコード導入支援、個人の0→1立ち上げなど、
                  「課題にフィットした仕組みを作る」フルスタックエンジニアとして活動しています。
                </p>
              </div>
            )}
        </div>

        {/* About ページへのリンク */}
        <div className="mt-8 flex justify-center">
          <a
            href="/about"
            className="inline-block bg-[#14213d] text-white px-6 py-3 rounded-md shadow hover:bg-[#48b6e8] transition-all"
          >
            詳しく見る
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopAbout;