import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TopService = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
  { 
    title: "社内システム開発", 
    icon: "🖥️", 
    desc: "在庫管理システム ・顧客管理システム(CRM)・勤怠シフト管理など。業務に合わせた専用システムを構築",
    tab: "system"
  },
  { 
    title: "経営可視化システム", 
    icon: "📊", 
    desc: "システム連携 + ダッシュボード + レポート自動生成。経営判断を支援するデータ基盤",
    tab: "visualization"
  },
  { 
    title: "Webサイト・LP制作", 
    icon: "🌐", 
    desc: "・コーポレートサイトやサービスLP・ECサイト・ブログ採用サイトなど、多様なWeb制作に対応",
    tab: "web"
  },
  { 
    title: "運用・改善サポート", 
    icon: "🛠️", 
    desc: "納品後も安心してご利用いただけるよう、お客様の状況に合わせて柔軟にサポートします。",
    tab: "support"
  },
];

  const handleCardClick = (tab) => {
    navigate(`/service?tab=${tab}`);
  };

  return (
    <div ref={sectionRef} className={`w-full flex flex-col items-center py-8 md:py-10 transition-all duration-700 ease-out ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

      {/* Title */}
      <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 transition-all duration-700 ease-out ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>サービス一覧</h2>
      <p className={`text-sm sm:text-base md:text-base text-gray-600 mb-6 md:mb-10 text-center max-w-2xl leading-relaxed transition-all duration-700 ease-out delay-200 px-4 ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        業務システムからWebサイトまで、ワンストップで対応。<br />
        ご相談は無料です。お気軽にお問い合わせください。

      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-4">
        {services.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item.tab)}
            className={`bg-white rounded-xl shadow p-4 md:p-6 flex flex-col items-center text-center 
              transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl cursor-pointer
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className="text-3xl md:text-4xl">{item.icon}</div>
            <h3 className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl font-semibold text-[#14213d]">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 text-xs sm:text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="/service"
        className="mt-6 md:mt-10 inline-block bg-[#14213d] text-white px-5 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-base shadow hover:bg-[#48b6e8] transition-all"
      >
        サービス詳細を見る
      </a>
    </div>
  );
};

export default TopService;