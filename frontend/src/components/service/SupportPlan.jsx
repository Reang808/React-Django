import React from "react";

const SupportPlan = () => {
  const plans = [
    {
      id: "infra",
      title: "運用インフラ",
      subtitle: "止めない・守るための基盤管理",
      price: "月額 1万円〜5万円",
      isRecommended: false,
      features: [
        "ドメイン・サーバー管理",
        "SSL・セキュリティ設定",
        "バックアップ・復旧対応",
        "稼働監視・障害検知",
        "軽微な設定変更",
      ],
      desc: "Webサイト・Webシステムを安定して稼働させるための基盤を管理します。開発や機能追加は含まず、「止めないこと」に特化したサポートです。",
    },
    {
      id: "growth",
      title: "運用改善サポート",
      subtitle: "修正・機能追加・UI改善",
      price: "月額 5万円〜",
      isRecommended: true,
      features: [
        "機能追加・業務フロー改善",
        "UI / UX 改修",
        "既存システムの修正・引き継ぎ",
        "技術相談・仕様整理",
        "継続的な開発対応",
      ],
      desc: "公開後のシステムをビジネスに合わせて育てていく開発サポートです。Reang以外で開発されたシステムの修正・改善も対応可能です。",
    },
  ];

  return (
    <div className="w-full animate-fadeIn pb-10">
      {/* --- ヘッダーエリア --- */}
      <div className="text-center mb-8 sm:mb-10">
        <span className="inline-block px-3 py-1 bg-[#fca311]/10 text-[#fca311] text-xs font-bold tracking-wider rounded-full mb-3">
          SUPPORT & MAINTENANCE
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#14213d] mb-4">
          開発後も、<br className="sm:hidden" />
          「直せる・育てられる」開発サポート
        </h3>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto px-2">
          Reangのサポートは「システムを止めない運用」と「システムを育てる開発」を分けて提供しています。
          運用インフラはサーバーやドメインを守る土台の管理、
          運用改善サポートは機能追加や修正を行う開発支援です。
          Reangで制作したシステムだけでなく、すでに稼働している他社開発のシステムの引き継ぎ・改善にも対応しています。
        </p>
      </div>

      {/* --- プランカード一覧 --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto px-2 mb-8 sm:mb-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col h-full rounded-xl transition-all duration-300 ${
              plan.isRecommended
                ? "border-2 border-[#fca311] bg-white shadow-lg"
                : "border-2 border-gray-200 bg-white hover:border-[#fca311]/50 hover:shadow-md"
            }`}
          >
            {/* おすすめバッジ */}
            {plan.isRecommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#fca311] text-white px-4 py-1 rounded-full font-bold shadow-md text-xs tracking-wider z-10">
                RECOMMENDED
              </div>
            )}

            <div className={`p-5 sm:p-6 md:p-8 flex-1 flex flex-col ${plan.isRecommended ? "pt-8 sm:pt-10" : ""}`}>
              {/* タイトル & 価格 */}
              <div className="text-center mb-6">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#14213d] mb-2">
                  {plan.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                <div className="text-2xl sm:text-3xl font-bold text-[#fca311]">
                  {plan.price}
                </div>
              </div>

              {/* 特徴リスト */}
              <ul className="space-y-2 sm:space-y-3 mb-6 flex-1">
                {plan.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                    <span className="text-[#fca311] font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* 説明文 */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {plan.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- 注釈・FAQエリア --- */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 sm:p-6 md:p-8 mx-auto max-w-5xl shadow-sm">
        <h4 className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#14213d] mb-4">
          <span className="text-xl sm:text-2xl">💡</span> 
          <span>費用と契約に関するご案内</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 text-xs sm:text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <span className="text-[#fca311] font-bold shrink-0 mt-0.5">•</span>
            <p>上記は目安費用です。システムの規模や緊急度に応じて、柔軟にお見積もりいたします。</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#fca311] font-bold shrink-0 mt-0.5">•</span>
            <p>「予算5万円以内でできる範囲」といったご相談も可能です。</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#fca311] font-bold shrink-0 mt-0.5">•</span>
            <p>ドメイン・サーバー費用、外部API利用料（Google Maps等）は実費となります。</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#fca311] font-bold shrink-0 mt-0.5">•</span>
            <p>MVP開発からスタートし、売上の増加に合わせてサポートプランをアップグレード可能です。</p>
          </div>
        </div>
      </div>

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

export default SupportPlan;