import React, { useState, useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import ServiceList from "../components/service/ServiceList";
import SupportPlan from "../components/service/SupportPlan";

const Service = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  
  // URLパラメータからタブを決定
  const getInitialActive = () => {
    if (tabParam === 'support') return 'support';
    if (tabParam === 'system' || tabParam === 'visualization' || tabParam === 'web') return 'services';
    return 'services';
  };
  
  const [active, setActive] = useState(getInitialActive());

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

  const steps = [
    { title: "ヒアリング・提案", description: "お客様の課題を深く理解し最適なプランをご提案します。" },
    { title: "設計・デザイン", description: "要件に基づきUI/UXデザイン・画面設計を実施します。" },
    { title: "開発・実装", description: "React / Django を中心としたモダン開発で高品質なプロダクトを構築します。" },
    { title: "運用・サポート", description: "公開後の改善・追加開発も継続的に支援します。" },
  ];

  return (
    <>
      <Helmet>
        <title>Service | 株式会社Reang</title>
        <meta name="description" content="株式会社Reangの業務管理システム開発・Webサイト制作などの事業内容についてご紹介します。" />
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="株式会社Reang | 広島のWeb制作・業務システム開発" />
        <meta name="twitter:description" content="株式会社Reang | 広島のWeb制作・業務システム開発" />
      </Helmet>
    <div className="text-neutral-900 font-sans bg-white">

      {/* --------------------------------------------------------------- */}
      {/* ① Hero Section */}
      {/* --------------------------------------------------------------- */}
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
            Service
          </h1>

          <p
            ref={textRef}
            className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            システム開発からWebサイト制作、運用サポートまで。<br />
            スタートアップの成長を、ワンストップで支援します。
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* ② Tabs */}
      {/* --------------------------------------------------------------- */}
      <div className="w-full flex justify-center mt-8 md:mt-12 px-4">
        <div className="flex bg-gray-100 rounded-full p-1.5 md:p-2 shadow-inner gap-1.5 md:gap-2">

          <button
            onClick={() => setActive("services")}
            className={`px-4 py-1.5 md:px-6 md:py-2 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "services"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            提供サービス
          </button>

          <button
            onClick={() => setActive("support")}
            className={`px-4 py-1.5 md:px-6 md:py-2 text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "support"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            運用・改善サポート
          </button>

        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* ③ Toggle Content */}
      {/* --------------------------------------------------------------- */}
      <div
        className="transition-opacity duration-700 mt-16"
      >
        {active === "services" && <ServiceList key="services" initialTab={tabParam} />}
        {active === "support" && <SupportPlan key="support" />}
      </div>

      {/* --------------------------------------------------------------- */}
      {/* ④ CTA Section */}
      {/* --------------------------------------------------------------- */}
      <section className="py-16 md:py-32 bg-[#14213d] text-white text-center mt-12 md:mt-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 transition-all duration-1000">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">まずはお気軽にご相談ください。</h2>
          <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 md:mb-10 leading-relaxed">
            ご依頼前の相談だけでも大歓迎です。  
            課題やアイデアを一緒に形にしていきましょう。
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#14213d] px-6 py-2.5 md:px-10 md:py-4 text-sm md:text-base font-semibold rounded-md shadow hover:bg-[#48b6e8] hover:text-white transition-all"
          >
            お問い合わせページへ
          </a>
        </div>
      </section>

    </div>
    </>
  );
};

export default Service;
