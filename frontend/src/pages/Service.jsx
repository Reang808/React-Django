import React, { useState, useEffect, useRef } from "react";
import ServiceList from "../components/service/ServiceList";
import ServiceFlow from "../components/service/ServiceFlow";

const Service = () => {
  const [active, setActive] = useState("services");

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
    <div className="text-neutral-900 font-sans bg-white">

      {/* --------------------------------------------------------------- */}
      {/* ① Hero Section */}
      {/* --------------------------------------------------------------- */}
      <section
        ref={heroRef}
        className="relative py-24 text-center text-[#14213d] overflow-hidden"
      >
        <img
          src="/images/bghero.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/20 z-10"></div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 transition-all duration-1000 ease-out">
          <h1
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            Service
          </h1>

          <p
            ref={textRef}
            className={`text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Web制作・アプリ開発・システム構築まで、事業に合わせた最適なソリューションをご提供します。
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* ② Tabs */}
      {/* --------------------------------------------------------------- */}
      <div className="w-full flex justify-center mt-12">
        <div className="flex bg-gray-100 rounded-full p-2 shadow-inner gap-2">

          <button
            onClick={() => setActive("services")}
            className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "services"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            提供サービス
          </button>

          <button
            onClick={() => setActive("flow")}
            className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "flow"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            制作の流れ
          </button>

        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* ③ Toggle Content */}
      {/* --------------------------------------------------------------- */}
      <div
        key={active}
        className="transition-opacity duration-700 mt-16"
      >
        {active === "services" && <ServiceList />}
        {active === "flow" && <ServiceFlow steps={steps} />}
      </div>

      {/* --------------------------------------------------------------- */}
      {/* ④ CTA Section */}
      {/* --------------------------------------------------------------- */}
      <section className="py-32 bg-[#14213d] text-white text-center mt-24">
        <div className="max-w-3xl mx-auto px-6 transition-all duration-1000">
          <h2 className="text-4xl font-bold mb-6">まずはお気軽にご相談ください。</h2>
          <p className="text-lg opacity-90 mb-10 leading-relaxed">
            ご依頼前の相談だけでも大歓迎です。  
            課題やアイデアを一緒に形にしていきましょう。
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#14213d] px-10 py-4 font-semibold rounded-md shadow hover:bg-[#48b6e8] hover:text-white transition-all"
          >
            お問い合わせページへ
          </a>
        </div>
      </section>

    </div>
  );
};

export default Service;
