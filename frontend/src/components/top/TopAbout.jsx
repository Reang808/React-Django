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
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-4 md:p-6 lg:p-8">
        
        {/* ヘッダー部分：画像 + タイトル */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 pb-4 md:pb-6 mb-4 md:mb-6 border-b-2 border-gray-100">
          {/* プロフィール写真 */}
          <div className="shrink-0">
            <img
              src="/images/binmy.JPG"
              alt="Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg ring-4 ring-gray-100"
            />
          </div>

          {/* タイトルと説明 */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#14213d]">
              Reang（リアング）について
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">
              React（リアクト） × Django（ジャンゴ）で、スタートアップの成長を支える開発パートナー
            </p>
          </div>
        </div>

        {/* タブナビゲーション */}
        <div className="flex gap-2 md:gap-3 lg:gap-6 border-b pb-2 mb-4 md:mb-6 overflow-x-auto">
          <button
            onClick={() => setActive("overview")}
            className={`pb-2 px-2 transition-all whitespace-nowrap text-xs sm:text-sm md:text-base ${
              active === "overview"
                ? "border-b-2 border-[#14213d] font-semibold text-[#14213d]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            事業概要
          </button>

          <button
            onClick={() => setActive("message")}
            className={`pb-2 px-2 transition-all whitespace-nowrap text-xs sm:text-sm md:text-base ${
              active === "message"
                ? "border-b-2 border-[#14213d] font-semibold text-[#14213d]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            メッセージ
          </button>

          <button
            onClick={() => setActive("career")}
            className={`pb-2 px-2 transition-all whitespace-nowrap text-xs sm:text-sm md:text-base ${
              active === "career"
                ? "border-b-2 border-[#14213d] font-semibold text-[#14213d]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            経歴
          </button>
        </div>

        {/* コンテンツエリア */}
        <div className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">

            {/* 事業概要 */}
            {active === "overview" && (
              <div className="animate-fadeIn">
                <p>
                  Reangは、Django × Reactを使ったフルスタック開発で、
                  スタートアップの業務システムやWebアプリを開発しています。<br></br><br></br>

                  【提供サービス】<br></br>
                  ・社内システム開発（顧客管理、在庫管理など）
                  ・業務Webアプリ開発
                  ・Webサイト・LP制作
                  ・運用保守サポート<br></br><br></br> 

                  ヒアリングから開発・運用まで一貫対応。
                  予算に応じた柔軟な開発が可能です。

                </p>
              </div>
            )}

            {/* メッセージ */}
            {active === "message" && (
              <div className="animate-fadeIn">
                <p>
                  「少人数で効率よく事業を回したい」
                  「手作業を自動化して、本業に集中したい」<br></br><br></br>

                  そんなスタートアップの課題を、システムで解決します。<br></br><br></br>

                  Reangは、アイデアを形にし、業務を効率化する
                  開発パートナーとして、御社の成長を支えます。<br></br><br></br>

                  まずはお気軽にご相談ください。
                </p>
              </div>
            )}

            {/* 経歴 */}
            {active === "career" && (
              <div className="animate-fadeIn">
                <p className="leading-relaxed">
                  独学でプログラミングを学び、
                  PythonとDjangoでバックエンド開発を習得。
                  その後Reactを学び、フルスタックエンジニアとして活動開始。<br></br><br></br>

                  これまでに、顧客管理・在庫管理・予約システムなど
                  多数の業務システムを開発。<br></br><br></br>

                  現在は、スタートアップや中小企業向けに
                  受託開発・業務効率化支援を行っています。
                </p>
              </div>
            )}
        </div>

        {/* About ページへのリンク */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <a
            href="/about"
            className="inline-block bg-[#14213d] text-white px-5 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-base shadow hover:bg-[#48b6e8] transition-all"
          >
            詳しく見る
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopAbout;