import React, { useRef, useEffect, useState } from "react";

const ServiceList = () => {
  const listRef = useRef(null);
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShowAnim(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (listRef.current) obs.observe(listRef.current);

    return () => {
      if (listRef.current) obs.unobserve(listRef.current);
    };
  }, []);

  const services = [
    {
      title: "Web開発",
      desc: (
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>企業サイト（コーポレート）制作</li>
          <li>HP / LP（キャンペーン・採用ページなど）</li>
          <li>ECサイト（商品販売・決済連携）</li>
          <li>Webアプリケーションのフルスタック開発</li>
          <li>ブログ・ニュース・CMS構築</li>
        </ul>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#14213d]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16v4H4zm0 6h16v10H4z" />
        </svg>
      ),
    },
    {
      title: "DX支援",
      desc: (
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>業務フローの可視化・整理</li>
          <li>紙/Excel 作業のデジタル化</li>
          <li>自動化（予約通知・在庫同期・顧客管理など）</li>
          <li>クラウド導入（Google Workspace / Notion / AppSheet）</li>
          <li>業務効率を数値化し改善まで伴走</li>
        </ul>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#14213d]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l4 4-4 4-4-4zM4 14h16v2H4z" />
        </svg>
      ),
    },
    {
      title: "業務システム構築",
      desc: (
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>顧客管理システム（CRM）</li>
          <li>予約管理システム（店舗・サロン・スクール）</li>
          <li>在庫管理（入出庫・棚卸し）</li>
          <li>勤怠管理（打刻・集計）</li>
          <li>受発注管理・売上管理</li>
        </ul>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#14213d]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16v6H4zm0 8h16v8H4z" />
        </svg>
      ),
    },
    {
      title: "コンサルティング",
      desc: (
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>現場ヒアリングによる課題抽出</li>
          <li>業務改善の優先順位付けと戦略提案</li>
          <li>ノーコード/ローコード導入支援（AppSheet / Glide）</li>
          <li>AI活用提案（自動化・文章生成・返信効率化）</li>
          <li>現場オペレーションを理解した実践的アドバイス</li>
        </ul>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#14213d]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a5 5 0 015 5H7a5 5 0 015-5zm-5 9h10v11H7z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      ref={listRef}
      className={`w-full max-w-5xl mx-auto mt-20 transition-all duration-700 ${
        showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-[#14213d]">
        提供サービス
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 border-b md:border-none"
          >
            <div>{service.icon}</div>

            <div>
              <h3 className="text-xl font-semibold text-[#14213d]">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;