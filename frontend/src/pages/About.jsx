import React, { useState, useEffect, useRef } from "react";
import AboutMyStory from "../components/about/AboutMyStory";
import AboutWhyReang from "../components/about/AboutWhyReang";
import AboutSkill from "../components/about/AboutSkill";

const About = () => {
  const [active, setActive] = useState("story");

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
    <div className="text-neutral-900 font-sans bg-white">

      {/* ---------------------------------------------------------------- */}
      {/* ① Hero Section（MVV） */}
      {/* ---------------------------------------------------------------- */}
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
            Mission / Vision / Value
          </h1>

          <div
            ref={textRef}
            className={`text-lg text-gray-700 leading-relaxed space-y-4 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p>
              <strong>Mission：</strong>
              先進技術とスピードで、誰もが挑戦できる環境をつくる。
            </p>
            <p>
              <strong>Vision：</strong>
              個人でも企業と同じスピードで戦える社会をつくる。
            </p>
            <p>
              <strong>Value：</strong>
              誠実・継続・挑戦・伴走。この4つを軸に、お客様と共に成長します。
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* ② Tabs（Story / Why Reang / Skills） */}
      {/* ---------------------------------------------------------------- */}
      <div className="w-full flex justify-center mt-12">
        <div className="flex bg-gray-100 rounded-full p-2 shadow-inner gap-2">

          <button
            onClick={() => setActive("story")}
            className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "story"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            Story
          </button>

          <button
            onClick={() => setActive("why")}
            className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "why"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            Why Reang
          </button>

          <button
            onClick={() => setActive("skills")}
            className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
              active === "skills"
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            Skills
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
        {active === "skills" && <AboutSkill />}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* ④ CTA */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-32 bg-[#14213d] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 transition-all duration-1000">
          <h2 className="text-4xl font-bold mb-6">まずはお気軽にご相談ください。</h2>
          <p className="text-lg opacity-90 mb-10">
            あなたの挑戦を、ぜひ聞かせてください。  
            どんな相談でも大歓迎です。
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#14213d] px-10 py-4 font-semibold rounded-md shadow hover:bg-brand-sky hover:text-white transition-all"
          >
            お問い合わせページへ
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;