import React, { useState } from "react";

// ============================================
// Individual Service Components
// ============================================

const WebCorporateService = () => (
  <div className="space-y-6">
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <div className="space-y-5">
        <div>
          <span className="inline-block px-3 py-1 bg-[#fca311]/10 text-[#fca311] text-xs font-bold tracking-wider rounded-full mb-3">
            BRANDING & TRUST
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#14213d] leading-tight">
            企業の「顔」となる<br />
            <span className="text-[#fca311]">コーポレートサイト</span>
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          名刺代わりのホームページから、企業のブランド価値を高める大規模サイトまで。
          「信頼感」と「情報の探しやすさ」を両立し、取引先や銀行、ステークホルダーからの信用獲得に貢献します。
        </p>
        <div className="space-y-3">
          <h4 className="font-bold text-[#14213d] flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 h-0.5 bg-[#fca311]"></span>
            制作の特徴
          </h4>
          <ul className="space-y-2">
            {[
              "WordPress/microCMS等での自社更新システム構築",
              "企業イメージに合わせた完全オリジナルデザイン",
              "サービス紹介・事例紹介のデータベース化",
              "多言語対応（英語・中国語など）",
              "お問い合わせフォーム・資料請求機能",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                <span className="text-[#fca311] font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
        <h4 className="font-bold text-[#14213d] mb-3 text-sm sm:text-base">こんな方におすすめ</h4>
        <div className="space-y-2">
          {[
            { icon: "🏢", text: "会社設立・創業期でホームページが必要な方" },
            { icon: "🔄", text: "古いサイトをリニューアルしたい方" },
            { icon: "📈", text: "採用や営業でサイトを活用したい方" },
            { icon: "✨", text: "ブランドイメージを刷新したい方" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-2 sm:p-3 border border-gray-100">
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span className="text-xs sm:text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-[#fca311]/10 rounded-lg border border-[#fca311]/30">
          <p className="text-xs sm:text-sm text-[#14213d]">
            💡 コーポレートサイトは「企業の信頼度」に直結します。
          </p>
        </div>
      </div>
    </div>
  </div>
);

const WebLPService = () => (
  <div className="space-y-6">
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <div className="space-y-5">
        <div>
          <span className="inline-block px-3 py-1 bg-[#fca311]/10 text-[#fca311] text-xs font-bold tracking-wider rounded-full mb-3">
            MARKETING × SYSTEM
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#14213d] leading-tight">
            広告で終わらせない<br />
            <span className="text-[#fca311]">ランディングページ</span>
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          ReangのLPは、ただ「問い合わせを増やす」ためのページではありません。<br />
          広告 → LP → 顧客データ → 営業・成約までを
          <strong className="text-[#14213d]"> ひとつのシステムとして設計 </strong>
          します。<br />
          React × Djangoにより、フォームの先の顧客管理や対応フローまで作り込み、
          広告の費用対効果を最大化します。
        </p>
        <div className="space-y-3">
          <h4 className="font-bold text-[#14213d] flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 h-0.5 bg-[#fca311]"></span>
            制作の特徴
          </h4>
          <ul className="space-y-2">
            {[
              "広告 → LP → 顧客データベースまでを一体設計",
              "Reactによる高速表示と離脱を防ぐUI設計",
              "Djangoで問い合わせ・申込を自動管理",
              "営業が使える管理画面付きLP",
              "改善・A/Bテストを前提とした拡張可能な構成",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                <span className="text-[#fca311] font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
        <h4 className="font-bold text-[#14213d] mb-3 text-sm sm:text-base">こんな方におすすめ</h4>
        <div className="space-y-2">
          {[
            { icon: "🎯", text: "広告を売上につなげたい会社" },
            { icon: "📊", text: "問い合わせ後の対応に課題がある企業" },
            { icon: "📣", text: "営業フローを仕組み化したい会社" },
            { icon: "🚀", text: "LPを起点に事業を伸ばしたい方" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-2 sm:p-3 border border-gray-100">
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span className="text-xs sm:text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-[#fca311]/10 rounded-lg border border-[#fca311]/30">
          <p className="text-xs sm:text-sm text-[#14213d]">
            🔥 ReangのLPは「広告費」を「資産」に変えます。
          </p>
        </div>
      </div>
    </div>
  </div>
);

const WebECService = () => (
  <div className="space-y-6">
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <div className="space-y-5">
        <div>
          <span className="inline-block px-3 py-1 bg-[#fca311]/10 text-[#fca311] text-xs font-bold tracking-wider rounded-full mb-3">
            E-COMMERCE × SYSTEM
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#14213d] leading-tight">
            ただ売るだけではない<br />
            <span className="text-[#fca311]">EC・メディアサイト</span>
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          ReangのECサイトは、商品を並べるだけのショップではありません。<br />
          注文・決済・在庫・顧客・発送までを
          <strong className="text-[#14213d]"> ひとつの業務システムとして設計 </strong>
          します。<br />
          React × Django によるフルスクラッチ開発で、
          売上が増えても回り続けるEC基盤を構築します。
        </p>
        <div className="space-y-3">
          <h4 className="font-bold text-[#14213d] flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 h-0.5 bg-[#fca311]"></span>
            制作の特徴
          </h4>
          <ul className="space-y-2">
            {[
              "EC・在庫・顧客管理を一体化したシステム設計",
              "Shopify等とDjangoのデータ連携・カスタマイズ",
              "注文・発送・請求の自動化フロー構築",
              "Reactによる高速で離脱しにくい購入体験",
              "将来の拡張（卸・BtoB・多店舗展開）を前提とした構成",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                <span className="text-[#fca311] font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
        <h4 className="font-bold text-[#14213d] mb-3 text-sm sm:text-base">こんな方におすすめ</h4>
        <div className="space-y-2">
          {[
            { icon: "🛒", text: "ECを事業の柱として成長させたい会社" },
            { icon: "📦", text: "在庫や発送の管理に限界を感じている方" },
            { icon: "📊", text: "売上データを経営に活かしたい企業" },
            { icon: "🚀", text: "ECをスケールさせたい事業者" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-2 sm:p-3 border border-gray-100">
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span className="text-xs sm:text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-[#fca311]/10 rounded-lg border border-[#fca311]/30">
          <p className="text-xs sm:text-sm text-[#14213d]">
            🛒 ReangのECは「売上」と「業務効率」を同時に伸ばします。
          </p>
        </div>
      </div>
    </div>
  </div>
);

const WebRecruitService = () => (
  <div className="space-y-6">
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <div className="space-y-5">
        <div>
          <span className="inline-block px-3 py-1 bg-[#fca311]/10 text-[#fca311] text-xs font-bold tracking-wider rounded-full mb-3">
            RECRUITING × SYSTEM
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#14213d] leading-tight">
            採用を仕組みにする<br />
            <span className="text-[#fca311]">リクルートサイト</span>
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Reangの採用サイトは、ただ応募を集めるページではありません。<br />
          エントリー → 書類管理 → 面接 → 採用までを
          <strong className="text-[#14213d]"> 一つの業務フローとして設計 </strong>
          します。<br />
          React × Django により、採用活動そのものを効率化し、
          本当に欲しい人材が集まる仕組みを構築します。
        </p>
        <div className="space-y-3">
          <h4 className="font-bold text-[#14213d] flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 h-0.5 bg-[#fca311]"></span>
            制作の特徴
          </h4>
          <ul className="space-y-2">
            {[
              "応募者データを一元管理できる採用システム連携",
              "エントリー・選考ステータスの自動管理",
              "社員紹介・社風コンテンツのデータベース化",
              "Reactによる高速表示と離脱しにくいUI",
              "将来の人事システム連携を前提とした設計",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                <span className="text-[#fca311] font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
        <h4 className="font-bold text-[#14213d] mb-3 text-sm sm:text-base">こんな方におすすめ</h4>
        <div className="space-y-2">
          {[
            { icon: "👥", text: "採用業務が属人化している会社" },
            { icon: "🎯", text: "ミスマッチ採用を減らしたい企業" },
            { icon: "📊", text: "応募者データを活用したい会社" },
            { icon: "🏆", text: "組織づくりを本気で考えている企業" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-2 sm:p-3 border border-gray-100">
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span className="text-xs sm:text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-[#fca311]/10 rounded-lg border border-[#fca311]/30">
          <p className="text-xs sm:text-sm text-[#14213d]">
            🤝 Reangの採用サイトは「人事の武器」になります。
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ============================================
// HTML Preview Modal Component
// ============================================

const HTMLPreviewModal = ({ isOpen, onClose, htmlFile }) => {
  if (!isOpen || !htmlFile) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full max-w-7xl max-h-[90vh] m-4 bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-[#14213d] text-white">
          <h3 className="text-lg font-bold">{htmlFile.name}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="閉じる"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* iframe Container */}
        <div className="relative w-full h-[calc(90vh-64px)]">
          <iframe
            src={htmlFile.path}
            className="w-full h-full border-0"
            title={htmlFile.name}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};

// ============================================
// Infinite Scroll Carousel Component
// ============================================

const InfiniteCarousel = () => {
  const sites = [
    { type: "企業サイト", icon: "🏢", htmlFile: "Request.html" },
    { type: "ECサイト", icon: "🛒", htmlFile: "EC.html" },
    { type: "メディアサイト", icon: "📝", htmlFile: "media.html" },
    { type: "LP", icon: "🔥", htmlFile: "LP.html" },
    { type: "ポートフォリオ", icon: "✨", htmlFile: "potoforil.html" },
    { type: "採用サイト", icon: "🤝", htmlFile: "Recruit.html" },
  ];

  const duplicatedSites = [...sites, ...sites, ...sites];

  return (
    <div className="relative overflow-hidden py-6">
      <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div 
        className="flex gap-4 sm:gap-6 animate-scroll"
        style={{ width: 'max-content' }}
      >
        {duplicatedSites.map((site, index) => (
          <div
            key={index}
            className="shrink-0 w-64 sm:w-80 md:w-96 h-48 sm:h-60 md:h-72 rounded-xl bg-white shadow-lg border-2 border-gray-200 overflow-hidden relative"
          >
            {/* サイトプレビュー iframe */}
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100">
              <iframe
                src={`/${site.htmlFile}`}
                className="w-full h-full border-0 blur-[2px]"
                style={{
                  transform: 'scale(0.4)',
                  transformOrigin: 'top left',
                  width: '250%',
                  height: '250%',
                  pointerEvents: 'none',
                }}
                title={`${site.type} プレビュー`}
                sandbox="allow-same-origin allow-scripts"
                loading="lazy"
              />
            </div>
            
            {/* オーバーレイとラベル */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 flex flex-col justify-end p-4 sm:p-5 z-10">
              <div className="space-y-1 sm:space-y-2">
                <p className="text-[#fca311] text-[10px] sm:text-xs font-semibold tracking-wider opacity-90">
                  制作実績
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">{site.icon}</span>
                  <p className="text-white font-bold text-sm sm:text-base md:text-lg drop-shadow-lg">
                    {site.type}
                  </p>
                </div>
              </div>
            </div>
            
            {/* 軽いぼかし効果のオーバーレイ（プライバシー保護） */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px] pointer-events-none z-[5]"></div>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

// ============================================
// Pricing Section Component
// ============================================

const PricingSection = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200">
      <div className="text-center mb-8">
        <span className="inline-block px-3 py-1 bg-[#fca311]/10 text-[#fca311] text-xs font-bold tracking-wider rounded-full mb-3">
          PRICING
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#14213d] mb-2">
          システム構築の目安費用
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm">
          事業に合わせて設計するため、すべて個別見積となります
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Base System */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#fca311]/50 transition-colors">
          <div className="w-10 h-10 bg-[#fca311]/10 rounded-lg flex items-center justify-center text-xl mb-4">
            🧩
          </div>
          <h4 className="text-sm sm:text-base font-bold text-[#14213d] mb-2">
            Web基盤構築
          </h4>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-xl sm:text-2xl font-bold text-[#fca311]">
              30万円
            </span>
            <span className="text-gray-500 text-xs">〜</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            コーポレート・LP・採用・ECの土台となる
            Webシステムの設計と構築
          </p>
        </div>

        {/* Business Functions */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#fca311]/50 transition-colors">
          <div className="w-10 h-10 bg-[#fca311]/10 rounded-lg flex items-center justify-center text-xl mb-4">
            ⚙️
          </div>
          <h4 className="text-sm sm:text-base font-bold text-[#14213d] mb-2">
            業務機能開発
          </h4>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-xl sm:text-2xl font-bold text-[#fca311]">
              20万円
            </span>
            <span className="text-gray-500 text-xs">〜 / 機能</span>
          </div>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• 顧客・問い合わせ管理</li>
            <li>• 決済・請求・在庫</li>
            <li>• 採用・応募者管理</li>
          </ul>
        </div>

        {/* Operation */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#fca311]/50 transition-colors">
          <div className="w-10 h-10 bg-[#fca311]/10 rounded-lg flex items-center justify-center text-xl mb-4">
            🛠
          </div>
          <h4 className="text-sm sm:text-base font-bold text-[#14213d] mb-2">
            運用・インフラ
          </h4>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-xl sm:text-2xl font-bold text-[#fca311]">
              月額 1〜5万円
            </span>
          </div>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• サーバー・バックアップ</li>
            <li>• 監視・保守・軽微な改修</li>
            <li>• セキュリティ対応</li>
          </ul>
        </div>
      </div>

      {/* Example */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <h4 className="font-bold mb-4 flex items-center gap-2 text-sm text-[#14213d]">
          <span className="text-[#fca311]">💡</span>
          導入例
        </h4>
        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-[#14213d] mb-1">
              業務連携型コーポレートサイト
            </p>
            <p className="text-gray-600">
              サイト + 問い合わせ管理 + 顧客DB
            </p>
            <p className="text-[#fca311] font-bold mt-2">
              50万〜100万円
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-[#14213d] mb-1">
              業務連携型ECサイト
            </p>
            <p className="text-gray-600">
              EC + 在庫 + 注文 + 顧客管理
            </p>
            <p className="text-[#fca311] font-bold mt-2">
              100万〜300万円
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 text-[10px] sm:text-xs mt-6">
        ※ 事業内容・規模により費用は変動します。詳細は無料でご相談ください。
      </p>
    </div>
  );
};

// ============================================
// Main Component
// ============================================

const WebProductionService = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedHTML, setSelectedHTML] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { id: "corporate", label: "コーポレート", shortLabel: "企業", icon: "🏢" },
    { id: "lp", label: "LP制作", shortLabel: "LP", icon: "🔥" },
    { id: "ec", label: "EC・メディア", shortLabel: "EC", icon: "🛒" },
    { id: "recruit", label: "採用サイト", shortLabel: "採用", icon: "🤝" },
  ];

  const handleCardClick = (site) => {
    setSelectedHTML({
      name: site.type,
      path: `/${site.htmlFile}`
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHTML(null);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: return <WebCorporateService />;
      case 1: return <WebLPService />;
      case 2: return <WebECService />;
      case 3: return <WebRecruitService />;
      default: return <WebCorporateService />;
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#14213d]">
          ビジネスの目的に合わせて、<br />
          <span className="text-[#fca311]">最適なWeb戦略</span>を構築します。
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
          「会社を知ってもらいたい」「商品を売りたい」「人材を採用したい」。
          お客様の課題に合わせて最適なWebサイトの形は異なります。
        </p>
      </div>

      {/* Tab Navigation - 4列グリッド（親コンポーネントのシステム選択UIと統一） */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`flex flex-col items-center text-center rounded-lg border-2 transition-all duration-300 p-2 sm:p-4 ${
              activeTab === index
                ? "border-[#fca311] bg-[#fca311]/5 shadow-md"
                : "border-gray-200 hover:border-[#fca311]/50 bg-white"
            }`}
          >
            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{tab.icon}</div>
            {/* スマホ: 短縮ラベル、PC: フルラベル */}
            <span className="font-bold text-[#14213d] text-[10px] sm:text-sm leading-tight">
              <span className="sm:hidden">{tab.shortLabel}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg border-2 border-[#fca311] p-4 sm:p-6 shadow-lg animate-fadeIn">
        {renderTabContent()}
      </div>

      {/* Infinite Carousel */}
      <div className="py-4">
        <div className="text-center mb-4">
          <h4 className="text-base sm:text-lg font-bold text-[#14213d] mb-1">
            こんなサイトを制作できます
          </h4>
          <p className="text-gray-500 text-xs">様々な業種・目的に対応</p>
        </div>
        <InfiniteCarousel />
      </div>

      {/* Quality Standards */}
      <div className="bg-[#14213d] text-white rounded-xl p-4 sm:p-6 md:p-8">
        <div className="text-center mb-4 sm:mb-6">
          <h4 className="text-base sm:text-lg md:text-xl font-bold">
            全てのWeb制作における「3つの標準品質」
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            プロとして妥協しない品質をお約束します。
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
          {[
            { icon: "📱", title: "レスポンシブ対応", desc: "あらゆるデバイスで美しく表示" },
            { icon: "🔍", title: "内部SEO対策済み", desc: "検索エンジン最適化を標準装備" },
            { icon: "🛠️", title: "保守・サポート", desc: "納品後も継続的にサポート" },
          ].map((item, i) => (
            <div key={i} className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl">{item.icon}</div>
              <h5 className="font-bold text-[#fca311] text-[10px] sm:text-sm">{item.title}</h5>
              <p className="text-[10px] sm:text-xs text-gray-300 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* HTML Preview Modal */}
      <HTMLPreviewModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        htmlFile={selectedHTML}
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WebProductionService;
