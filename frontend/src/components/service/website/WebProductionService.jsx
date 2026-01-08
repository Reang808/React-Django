import React, { useState } from "react";

const WebProductionService = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "corporate",
      icon: "🏢",
      title: "コーポレートサイト制作",
      tag: "BRANDING & TRUST",
      description: "名刺代わりのホームページから、企業のブランド価値を高める大規模サイトまで。「信頼感」と「情報の探しやすさ」を両立し、取引先や銀行、ステークホルダーからの信用獲得に貢献します。",
      features: [
        "WordPress等での自社更新システム",
        "企業イメージに合わせた完全オリジナルデザイン",
        "サービス紹介・事例紹介のデータベース化",
      ],
    },
    {
      id: "lp",
      icon: "🔥",
      title: "LP（ランディングページ）制作",
      tag: "MARKETING & AD",
      description: "広告運用と連動し、商品の購入やお問い合わせ（コンバージョン）を獲得することに特化した1枚の長いページを制作します。ユーザー心理に基づいたセールスライティングと構成で、成果を最大化します。",
      features: [
        "競合調査に基づいた「勝てる」構成案",
        "インパクトのあるファーストビュー制作",
        "フォーム離脱を防ぐUI改善 (EFO)",
      ],
    },
    {
      id: "ec",
      icon: "🛒",
      title: "EC・メディアサイト構築",
      tag: "E-COMMERCE & SEO",
      description: "Shopify等を用いた「売れる」オンラインストアの構築や、検索流入を狙うオウンドメディアの立ち上げを行います。単に作るだけでなく、決済機能の導入から在庫連携、SEO（検索対策）まで技術的にサポートします。",
      features: [
        "Shopify / WooCommerce / カラーミー等の実装",
        "決済システム・配送システムの連携設定",
        "記事コンテンツが見やすいメディア設計",
      ],
    },
    {
      id: "recruit",
      icon: "🤝",
      title: "採用サイト制作",
      tag: "RECRUITING",
      description: "求人媒体だけでは伝えきれない、貴社の「カルチャー」や「働く人の想い」を伝え、マッチ度の高い人材からの応募を増やします。先輩社員インタビューや1日の流れなど、求職者が本当に知りたいコンテンツを企画します。",
      features: [
        "社員の魅力を引き出すインタビュー・撮影",
        "IndeedやGoogleしごと検索への連携対応",
        "エントリーフォームの最適化",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-10 md:space-y-16 font-sans text-gray-800 bg-white">
      
      {/* 1. ヘッダー：全方位対応であることをアピール */}
      <div className="text-center space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14213d]">
          ビジネスの目的に合わせて、<br />
          <span className="text-[#fca311]">最適なWeb戦略</span>を構築します。
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          「会社を知ってもらいたい」「商品を売りたい」「人材を採用したい」。
          お客様の課題に合わせて最適なWebサイトの形は異なります。
          私たちは4つの専門領域で、貴社のビジネス成長をサポートします。
        </p>
      </div>

      {/* 2. 4つのサービス詳細 */}
      {/* スマホ: タブUI、デスクトップ: グリッド表示 */}
      
      {/* スマホ用タブナビゲーション */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === index
                  ? "bg-[#14213d] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="mr-1">{service.icon}</span>
              <span className="whitespace-nowrap">
                {index === 0 && "コーポレート"}
                {index === 1 && "LP制作"}
                {index === 2 && "EC・メディア"}
                {index === 3 && "採用サイト"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* スマホ: アクティブなタブのコンテンツのみ表示 */}
      <div className="md:hidden">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`bg-gray-50 rounded-xl p-5 md:p-8 border border-gray-200 transition-all ${
              activeTab === index ? "block" : "hidden"
            }`}
          >
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-xl md:text-2xl shadow-sm">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#14213d]">{service.title}</h3>
                <p className="text-xs text-gray-500 font-bold tracking-wide">{service.tag}</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm bg-white p-3 md:p-4 rounded-lg border border-gray-100">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#fca311] shrink-0">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* デスクトップ: グリッド表示 */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-50 rounded-xl p-6 lg:p-8 border border-gray-200 hover:border-[#14213d] transition-all group"
          >
            <div className="flex items-center gap-4 mb-4 lg:mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm group-hover:bg-[#14213d] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-[#14213d]">{service.title}</h3>
                <p className="text-xs text-gray-500 font-bold tracking-wide">{service.tag}</p>
              </div>
            </div>
            <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2 text-sm bg-white p-4 rounded-lg border border-gray-100">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#fca311] shrink-0">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 3. 共通の強み (ステップの代わりに安心感を担保) */}
      <div className="bg-[#14213d] text-white rounded-2xl p-6 md:p-8 lg:p-12">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold">全てのWeb制作における「3つの標準品質」</h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-2">どのプランをお選びいただいても、プロとして妥協しない品質をお約束します。</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="space-y-2 md:space-y-3">
            <div className="text-3xl md:text-4xl">📱</div>
            <h4 className="text-sm md:text-base font-bold text-[#fca311]">完全レスポンシブ対応</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              スマホ、タブレット、PC。あらゆるデバイスで美しく表示され、使いやすいレイアウトを実装します。
            </p>
          </div>
          <div className="space-y-2 md:space-y-3">
            <div className="text-3xl md:text-4xl">🔍</div>
            <h4 className="text-sm md:text-base font-bold text-[#fca311]">内部SEO対策済み</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Googleに正しく評価されるためのタグ設定や高速化施策を、制作段階から標準で組み込みます。
            </p>
          </div>
          <div className="space-y-2 md:space-y-3">
            <div className="text-3xl md:text-4xl">🛠️</div>
            <h4 className="text-sm md:text-base font-bold text-[#fca311]">納品後の保守・サポート</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              作りっぱなしにはしません。サーバー管理からドメイン更新、軽微な修正まで継続的にサポートします。
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WebProductionService;