import React, { useState, useEffect, useRef } from "react";

const Pricing = () => {
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
      { 
        threshold: 0.1,
        rootMargin: "0px 0px 200px 0px"
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const pricingExamples = [
    {
      title: "コーポレートサイト制作",
      description: "会社概要、サービス紹介、お問い合わせフォーム付き",
      pages: "5〜7ページ",
      features: [
        "レスポンシブ対応",
        "お問い合わせフォーム",
        "基本SEO対策",
        "CMS導入（更新可能）"
      ],
      price: "15万円〜30万円",
      period: "1〜2ヶ月",
      icon: "🌐"
    },
    {
      title: "採用サイト・LP制作",
      description: "採用ページやキャンペーンLP、サービス紹介LP",
      pages: "1〜3ページ",
      features: [
        "応募フォーム",
        "動きのあるデザイン",
        "SNS連携",
        "アクセス解析設定"
      ],
      price: "10万円〜25万円",
      period: "2〜4週間",
      icon: "📄"
    },
    {
      title: "顧客管理システム（CRM）",
      description: "顧客情報の登録・検索・編集、営業履歴管理",
      pages: "管理画面",
      features: [
        "ユーザー認証",
        "顧客CRUD機能",
        "検索・フィルター",
        "CSV入出力"
      ],
      price: "30万円〜60万円",
      period: "2〜3ヶ月",
      icon: "👥"
    },
    {
      title: "予約管理システム",
      description: "顧客側の予約フォーム + 管理側のカレンダー・予約管理",
      pages: "フロント + 管理画面",
      features: [
        "予約カレンダー",
        "自動メール通知",
        "キャンセル機能",
        "リマインド機能"
      ],
      price: "40万円〜70万円",
      period: "2〜3ヶ月",
      icon: "📅"
    },
    {
      title: "在庫管理システム",
      description: "商品登録、入出庫管理、在庫アラート、レポート機能",
      pages: "管理画面",
      features: [
        "在庫CRUD機能",
        "入出庫記録",
        "在庫アラート通知",
        "CSV入出力・集計"
      ],
      price: "50万円〜80万円",
      period: "2〜4ヶ月",
      icon: "📦"
    },
    {
      title: "ECサイト構築",
      description: "商品一覧、カート、決済連携、注文管理",
      pages: "フロント + 管理画面",
      features: [
        "決済連携（Stripe等）",
        "会員機能",
        "注文管理",
        "在庫連動"
      ],
      price: "80万円〜150万円",
      period: "3〜5ヶ月",
      icon: "🛒"
    }
  ];

  const supportPlans = [
    {
      name: "ベーシックサポート",
      price: "月額 5万円〜",
      features: [
        "軽微な修正・更新対応",
        "技術相談（月2回まで）",
        "障害対応（平日営業時間内）",
        "セキュリティアップデート"
      ],
      recommended: false
    },
    {
      name: "スタンダードサポート",
      price: "月額 10万円〜",
      features: [
        "機能追加・改修対応",
        "技術相談（無制限）",
        "24時間障害対応",
        "パフォーマンス改善提案",
        "月次レポート提出"
      ],
      recommended: true
    },
    {
      name: "制作費連動プラン",
      price: "制作費の15〜25%",
      features: [
        "プロジェクト規模に応じた柔軟なサポート",
        "継続的な改善提案",
        "優先対応",
        "システム拡張時の割引"
      ],
      recommended: false
    }
  ];

  return (
    <div ref={sectionRef} className="w-full max-w-6xl mx-auto py-20 px-4">
      {/* Header */}
      <div
        className={`text-center mb-16 transition-all duration-700 ${
          showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl font-bold mb-4 text-[#14213d]">費用の目安</h2>
        <p className="text-gray-600 text-lg">
          プロジェクトの規模や要件により変動します。
          <br />
          以下は参考事例です。詳細はお気軽にご相談ください。
        </p>
      </div>

      {/* Pricing Examples */}
      <div className="space-y-6 mb-20">
        {pricingExamples.map((example, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
              showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{example.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#14213d] mb-2">
                  {example.title}
                </h3>
                <p className="text-gray-700 mb-4">{example.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">
                      主な機能
                    </p>
                    <ul className="space-y-1">
                      {example.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 flex items-start"
                        >
                          <span className="text-[#48b6e8] mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">
                      規模感
                    </p>
                    <p className="text-sm text-gray-700 mb-4">
                      {example.pages}
                    </p>
                    <p className="text-sm font-semibold text-gray-500 mb-2">
                      開発期間
                    </p>
                    <p className="text-sm text-gray-700">{example.period}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-3xl font-bold text-[#14213d]">
                      {example.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">（税別）</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Support Plans */}
      <div
        className={`mb-16 transition-all duration-700 delay-500 ${
          showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h3 className="text-3xl font-bold text-center mb-4 text-[#14213d]">
          運用・保守サポート
        </h3>
        <p className="text-center text-gray-600 mb-10">
          制作後も安心してご利用いただけるよう、継続的なサポートを提供します。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {supportPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-xl p-6 ${
                plan.recommended
                  ? "border-[#48b6e8] bg-blue-50 shadow-lg"
                  : "border-gray-200 bg-white"
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#48b6e8] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    おすすめ
                  </span>
                </div>
              )}

              <h4 className="text-xl font-semibold mb-3 text-[#14213d]">
                {plan.name}
              </h4>
              <p className="text-3xl font-bold text-[#14213d] mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start">
                    <span className="text-[#48b6e8] mr-2 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div
        className={`mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl transition-all duration-700 delay-700 ${
          showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h3 className="text-xl font-semibold mb-4 text-[#14213d] flex items-center">
          <span className="text-2xl mr-2">💡</span>
          費用について
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-[#48b6e8] mr-2 flex-shrink-0">•</span>
            <span>
              上記は目安です。要件や優先度に応じて柔軟に対応します。
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#48b6e8] mr-2 flex-shrink-0">•</span>
            <span>
              「予算○○万円でできる範囲で」などのご相談も可能です。
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#48b6e8] mr-2 flex-shrink-0">•</span>
            <span>
              MVPから始めて、段階的に機能を追加することもできます。
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#48b6e8] mr-2 flex-shrink-0">•</span>
            <span>
              詳細なお見積もりは、ヒアリング後に無料でご提出します。
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#48b6e8] mr-2 flex-shrink-0">•</span>
            <span>
              ドメイン・サーバー・外部API利用料は別途実費となります。
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#48b6e8] mr-2 flex-shrink-0">•</span>
            <span>
              運用保守は、システムの安定稼働と継続的な改善のために推奨しています。
            </span>
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default Pricing;