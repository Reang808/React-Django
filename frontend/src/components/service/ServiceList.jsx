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
    title: "社内システム開発",
    desc: (
      <>
        <p className="text-gray-700 mb-4">
          顧客管理、営業支援、勤怠管理など、業務に合わせた専用システムを構築します。
          Excelやスプレッドシートでの管理から脱却し、効率的な業務フローを実現。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>顧客管理システム（CRM）</li>
          <li>営業支援ツール（SFA）</li>
          <li>勤怠・シフト管理</li>
          <li>在庫・発注管理</li>
          <li>予約管理システム</li>
          <li>受発注・請求管理</li>
        </ul>
      </>
    ),
    icon: (
      <svg className="w-10 h-10 text-[#14213d]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v6H4zm0 8h16v8H4z" />
      </svg>
    ),
  },
  {
    title: "業務Webアプリ開発",
    desc: (
      <>
        <p className="text-gray-700 mb-4">
          社内ツールやダッシュボードをWeb化。ブラウザからアクセスできるため、
          どこからでも業務が可能に。リモートワークにも最適です。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>管理画面・ダッシュボード</li>
          <li>社内ポータル・情報共有ツール</li>
          <li>レポート自動生成システム</li>
          <li>承認ワークフローシステム</li>
          <li>データ分析・可視化ツール</li>
          <li>API連携・外部サービス統合</li>
        </ul>
      </>
    ),
    icon: (
      <svg className="w-10 h-10 text-[#14213d]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v4H4zm0 6h16v10H4z" />
      </svg>
    ),
  },
  {
    title: "Webサイト・LP制作",
    desc: (
      <>
        <p className="text-gray-700 mb-4">
          コーポレートサイトやサービスLP、採用サイトなど、
          集客・採用を強化するデザインと実装を提供します。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>コーポレートサイト制作</li>
          <li>サービスLP（ランディングページ）</li>
          <li>採用サイト・リクルーティングページ</li>
          <li>ECサイト構築</li>
          <li>ブログ・メディアサイト</li>
          <li>レスポンシブ対応・SEO最適化</li>
        </ul>
      </>
    ),
    icon: (
      <svg className="w-10 h-10 text-[#14213d]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v4H4zm0 6h16v10H4z" />
      </svg>
    ),
  },
  {
    title: "運用・改善サポート",
    desc: (
      <>
        <p className="text-gray-700 mb-4">
          リリース後の機能追加、改善提案、トラブル対応まで継続的にサポート。
          成長に合わせてシステムを進化させます。
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>機能追加・改修対応</li>
          <li>パフォーマンス改善・最適化</li>
          <li>セキュリティアップデート</li>
          <li>障害対応・トラブルシューティング</li>
          <li>定期メンテナンス</li>
          <li>技術相談・改善提案</li>
        </ul>
      </>
    ),
    icon: (
      <svg className="w-10 h-10 text-[#14213d]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l4 4-4 4-4-4zM4 14h16v2H4z" />
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
              <div className="text-gray-700 mt-2 leading-relaxed">
                {service.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;