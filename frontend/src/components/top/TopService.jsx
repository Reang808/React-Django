import React, { useState, useEffect, useRef } from "react";

const TopService = () => {
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
    desc: "顧客管理・営業支援・勤怠管理など。業務に合わせた専用システムを構築" 
  },
  { 
    title: "業務Webアプリ", 
    icon: "📱", 
    desc: "社内ツールやダッシュボードをWeb化。どこからでもアクセス可能に" 
  },
  { 
    title: "Webサイト・LP制作", 
    icon: "🌐", 
    desc: "コーポレートサイトやサービスLP。集客・採用を強化するデザイン" 
  },
  { 
    title: "運用・改善サポート", 
    icon: "🛠️", 
    desc: "リリース後の機能追加や改善提案。成長に合わせてシステムを進化" 
  },
];

  return (
    <div ref={sectionRef} className={`w-full flex flex-col items-center py-10 transition-all duration-700 ease-out ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

      {/* Title */}
      <h2 className={`text-3xl font-bold mb-6 transition-all duration-700 ease-out ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>サービス一覧</h2>
      <p className={`text-gray-600 mb-10 text-center max-w-2xl leading-relaxed transition-all duration-700 ease-out delay-200 ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        業務システムからWebサイトまで、ワンストップで対応。<br />
        ご相談は無料です。お気軽にお問い合わせください。

      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {services.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow p-6 flex flex-col items-center text-center 
              transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-[#14213d]">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="/service"
        className="mt-10 inline-block bg-[#14213d] text-white px-6 py-3 rounded-md shadow hover:bg-[#48b6e8] transition-all"
      >
        サービス詳細を見る
      </a>
    </div>
  );
};

export default TopService;