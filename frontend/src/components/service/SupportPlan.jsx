import React from "react";

const SupportPlan = () => {
  const plans = [
    {
      id: "basic",
      title: "ベーシックサポート",
      subtitle: "安定稼働・セキュリティ重視",
      price: "月額 5万円〜",
      isRecommended: false,
      features: [
        "ドメイン・サーバー管理代行",
        "軽微な修正・テキスト更新",
        "技術相談（月2回まで）",
        "障害対応（平日営業時間内）",
        "定期セキュリティアップデート",
      ],
      desc: "「まずは守りを固めたい」という方向け。システムの健康状態を維持し、万が一のトラブルに備えます。",
    },
    {
      id: "standard",
      title: "スタンダードサポート",
      subtitle: "機能拡張・PDCA改善",
      price: "月額 10万円〜",
      isRecommended: true, // おすすめフラグ
      features: [
        "機能追加・UI改修対応",
        "技術相談・壁打ち（無制限）",
        "24時間監視・優先障害対応",
        "アクセス解析・パフォーマンス改善",
        "月次レポート・定例MTG",
      ],
      desc: "「システムを成長させたい」企業様に最適。能動的な改善提案を行い、ビジネスの加速を後押しします。",
    },
    {
      id: "agile",
      title: "制作費連動プラン",
      subtitle: "大規模・アジャイル開発",
      price: "制作費の 15〜25%",
      isRecommended: false,
      features: [
        "プロジェクト規模に応じた体制構築",
        "専任エンジニアのアサイン",
        "継続的な機能追加（アジャイル）",
        "システム拡張時の割引適用",
        "優先的なリソース確保",
      ],
      desc: "大規模システムや、頻繁な仕様変更が発生する新規事業立ち上げフェーズに。柔軟なリソース調整が可能です。",
    },
  ];

  return (
    <div className="w-full animate-fadeIn pb-10">
      {/* --- ヘッダーエリア --- */}
      <div className="text-center mb-10">
        <h3 className="text-xl sm:text-2xl font-bold text-[#14213d] mb-4">
          作って終わりではなく、<br className="sm:hidden" />
          ビジネスと共に育てるサポート
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto px-2">
          Webシステムは公開してからがスタートです。
          セキュリティ対策から機能追加、売上アップのための改善提案まで、
          貴社のIT部門として並走します。
        </p>
      </div>

      {/* --- プランカード一覧 --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col h-full rounded-xl transition-all duration-300 ${
              plan.isRecommended
                ? "border-4 border-[#48b6e8] bg-white shadow-xl scale-100 md:scale-105 z-10"
                : "border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-lg"
            }`}
          >
            {/* おすすめバッジ */}
            {plan.isRecommended && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#48b6e8] text-white px-6 py-1 rounded-full font-bold shadow-md text-sm tracking-wider">
                RECOMMENDED
              </div>
            )}

            <div className={`p-6 sm:p-8 flex-1 flex flex-col ${plan.isRecommended ? "pt-10" : ""}`}>
              {/* タイトル & 価格 */}
              <div className="text-center border-b border-gray-200 pb-6 mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-[#14213d] mb-1">
                  {plan.title}
                </h4>
                <p className="text-xs text-gray-500 mb-4">{plan.subtitle}</p>
                <div className="text-2xl sm:text-3xl font-bold text-[#48b6e8]">
                  {plan.price}
                </div>
              </div>

              {/* 特徴リスト */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <span className="text-[#48b6e8] font-bold shrink-0 mt-[2px]">
                      ✓
                    </span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              {/* 説明文 */}
              <div className="bg-gray-100 p-4 rounded-lg text-xs sm:text-sm text-gray-600 leading-relaxed">
                {plan.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- 注釈・FAQエリア --- */}
      <div className="bg-white  border-[#14213d] shadow-sm rounded-r-lg p-6 sm:p-8 mx-auto max-w-5xl">
        <h4 className="flex items-center gap-2 text-lg font-bold text-[#14213d] mb-4">
          <span className="text-2xl">💡</span> 費用と契約に関するご案内
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <p>上記は目安費用です。システムの規模や緊急度に応じて、柔軟にお見積もりいたします。</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <p>「予算5万円以内でできる範囲」といったご相談も可能です。</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <p>ドメイン・サーバー費用、外部API利用料（Google Maps等）は実費となります。</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400">•</span>
            <p>MVP開発からスタートし、売上の増加に合わせてサポートプランをアップグレード可能です。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPlan;