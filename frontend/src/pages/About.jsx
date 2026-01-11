import React, { useState, useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import AboutMyStory from "../components/about/AboutFAQ";
import AboutWhyReang from "../components/about/AboutWhyReang";
import AboutCompany from "../components/about/AboutCompany";

const About = () => {
  const [active, setActive] = useState("why");

  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (e.target === heroRef.current) {
              setHeroVisible(true);
            }
            if (e.target === titleRef.current) {
              setTitleVisible(true);
            }
            if (e.target === textRef.current) {
              setTextVisible(true);
            }
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) obs.observe(heroRef.current);
    if (titleRef.current) obs.observe(titleRef.current);
    if (textRef.current) obs.observe(textRef.current);

    return () => {
      if (heroRef.current) obs.unobserve(heroRef.current);
      if (titleRef.current) obs.unobserve(titleRef.current);
      if (textRef.current) obs.unobserve(textRef.current);
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>About | 株式会社Reang</title>
      <meta name="description" content="株式会社Reang| React(リアクト) × Django(ジャンゴ)でフルスタック開発を行っています。" />
      <meta name="keywords" content="株式会社Reang, Reang, 広島, 個人開発, Web制作, システム開発, DX支援, 業務効率化, ECサイト, 予約システム, 企業向けソリューション" />
      <meta name="author" content="株式会社Reang" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="株式会社Reang | 広島のWeb制作・業務システム開発" />
      <meta property="og:description" content="株式会社Reang | 広島のWeb制作・業務システム開発" />
      <meta property="og:image" content="https://reang.jp/images/reang_ogp.png" />
      <meta property="og:url" content="https://reang.jp" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="株式会社Reang" />
      <meta property="og:locale" content="ja_JP" />
    </Helmet>
    <div className="text-neutral-900 font-sans bg-white">

      {/* ---------------------------------------------------------------- */}
      {/* ① Hero Section（MVV） */}
      {/* ---------------------------------------------------------------- */}
      <section
        ref={heroRef}
        className="relative py-12 md:py-24 text-center text-[#14213d] overflow-hidden"
      >
        <img
          src="/images/bghero.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/20 z-10"></div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-6 transition-all duration-1000 ease-out">
          <h1
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            Mission / Vision 
          </h1>

          <div
            ref={textRef}
            className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed space-y-3 md:space-y-4 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p>
              <strong>Mission：</strong>
              「やりたいこと」を、技術で実現する。
            </p>
            <p>
              <strong>Vision：</strong>
              少人数でも、システムで最大の成果を。
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* ② Tabs（Story / Why Reang / Skills） */}
      {/* ---------------------------------------------------------------- */}
      <div className="w-full flex justify-center mt-8 md:mt-12 px-4">
        <div className="flex bg-gray-100 rounded-full p-1.5 md:p-2 shadow-inner gap-1.5 md:gap-2 flex-wrap justify-center">
          
          <button
            onClick={() => setActive("why")}
            className={`px-4 py-1.5 md:px-6 md:py-2 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "why"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
          なぜReang？
          </button>

          

          <button
            onClick={() => setActive("company")}
            className={`px-4 py-1.5 md:px-6 md:py-2 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "company"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            会社概要
          </button>
          <button
            onClick={() => setActive("story")}
            className={`px-4 py-1.5 md:px-6 md:py-2 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "story"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            よくある質問
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* ③ 切り替えコンテンツ（フェードアニメ入り） */}
      {/* ---------------------------------------------------------------- */}
      <div
        key={active}
        className="transition-opacity duration-700 mt-16"
      >
        {active === "story" && <AboutMyStory />}
        {active === "why" && <AboutWhyReang />}
        {active === "company" && <AboutCompany />}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* ④ CTA */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 md:py-32 bg-[#14213d] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 transition-all duration-1000">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">まずはお気軽にご相談ください。</h2>
          <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 md:mb-10">
            あなたの挑戦を、ぜひ聞かせてください。  
            どんな相談でも大歓迎です。
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#14213d] px-6 py-2.5 md:px-10 md:py-4 text-sm md:text-base font-semibold rounded-md shadow hover:bg-brand-sky hover:text-white transition-all"
          >
            お問い合わせページへ
          </a>
        </div>
      </section>

    </div>
    </>
  );
};

export default About;