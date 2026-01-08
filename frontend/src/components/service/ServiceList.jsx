import React, { useRef, useEffect, useState } from "react";
import Stock from "./system/StockSystemFlow";
import Customer from "./system/Customer";
import Attendance from "./system/Attendance";
import WebProductionService from "./website/WebProductionService";

const ServiceList = () => {
  const listRef = useRef(null);
  const [showAnim, setShowAnim] = useState(false);
  
  const [activeTab, setActiveTab] = useState("system");
  const [activeSystem, setActiveSystem] = useState("stocksystemflow");

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
      { threshold: 0.1 }
    );

    if (listRef.current) obs.observe(listRef.current);

    return () => {
      if (listRef.current) obs.unobserve(listRef.current);
    };
  }, []);

  const mainTabs = [
    { id: "system", title: "社内システム", icon: "🖥️" },
    { id: "visualization", title: "経営可視化システム", icon: "📊" },
    { id: "web", title: "Webサイト・LP制作", icon: "🌐" },
  ];

  const systems = [
    {
      id: "stocksystemflow",
      title: "在庫管理システム",
      icon: "📦",
      desc: "在庫の過不足を防ぎ、適切な発注タイミングを把握",
      component: Stock,
    },
    {
      id: "customer",
      title: "顧客管理システム(CRM)",
      icon: "👥",
      desc: "営業リスト・商談履歴を一元管理", 
      component: Customer,
    },
    {
      id: "attendance",
      title: "勤怠・シフト管理",
      icon: "⏰",
      desc: "出退勤を自動化し、給与計算の工数を削減",
      component: Attendance,
    },
  ];

  const ActiveComponent = activeSystem
    ? systems.find((s) => s.id === activeSystem)?.component
    : null;

  return (
    <div
      ref={listRef}
      className={`w-full max-w-6xl mx-auto mt-20 px-2 sm:px-4 transition-all duration-700 ${
        showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-[#14213d]">
        提供サービス
      </h2>

      {/* --- 上部タブナビゲーション（修正箇所） --- */}
      {/* スマホ：スクロールなし、flex-nowrapで全表示 */}
      <div className="flex w-full justify-between gap-1 sm:gap-4 mb-8 sm:mb-12 border-b-2 border-gray-100 pb-0">
        {mainTabs.map((tab) => (
          <button
            key={tab.id}
            data-tab-id={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              // スマホでボタンを押した際、タブが隠れないよう少しスクロール位置を調整しても良いですが、
              // 全部収まっているので必須ではありません。必要に応じて有効化してください。
              // const el = document.querySelector(`[data-tab-id="${tab.id}"]`);
              // el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }}
            // ▼▼▼ スタイル修正 ▼▼▼
            // flex-1: 3等分
            // flex-col sm:flex-row: スマホは縦積み(アイコン上・文字下)、PCは横並び
            // text-[10px]: スマホ文字サイズ極小
            // whitespace-normal: スマホで文字折り返しを許可
            className={`flex-1 relative top-[2px] px-1 py-2 sm:px-6 sm:py-3 rounded-t-lg font-bold transition-all duration-300 flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-1 sm:gap-2 border-b-4 ${
              activeTab === tab.id
                ? "text-[#fca311] border-[#fca311] bg-gray-50"
                : "text-gray-500 border-transparent hover:text-[#14213d] hover:bg-gray-50"
            }`}
          >
            <span className="text-lg sm:text-2xl">{tab.icon}</span>
            {/* テキストエリア: leading-tightで行間を詰め、2行になっても崩れにくくする */}
            <span className="text-[10px] sm:text-lg leading-tight text-center whitespace-normal sm:whitespace-nowrap">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* --- コンテンツエリア --- */}
      <div className="min-h-[400px]">
        {/* 1. 社内システム開発 */}
        {activeTab === "system" && (
          <div className="animate-fadeIn">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#14213d] mb-4">
                業務効率化・DX推進
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto px-2">
                業務に合わせた専用システムを構築。Excel管理から脱却し、効率的なフローを実現します。
              </p>
            </div>

            {/* システム選択ボタン（前回修正分：3列グリッド強制） */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
              {systems.map((system) => (
                <button
                  key={system.id}
                  onClick={() =>
                    setActiveSystem(
                      activeSystem === system.id ? null : system.id
                    )
                  }
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left rounded-lg border-2 transition-all duration-300 p-2 sm:p-6 h-full ${
                    activeSystem === system.id
                      ? "border-[#fca311] bg-[#fca311]/5 shadow-md"
                      : "border-gray-200 hover:border-[#fca311]/50 bg-white"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-3">{system.icon}</div>
                  <h4 className="font-bold text-[#14213d] mb-1 sm:mb-2 text-xs sm:text-lg leading-tight w-full break-words">
                    {system.title}
                  </h4>
                  <p className="text-[10px] sm:text-sm text-gray-600 leading-tight">
                    {system.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* システム詳細表示エリア */}
            {ActiveComponent && (
              <div className="bg-white rounded-lg border-2 border-[#fca311] p-4 sm:p-8 shadow-lg animate-fadeIn mb-8 scroll-mt-24">
                <ActiveComponent />
              </div>
            )}

            <details className="group text-center">
              <summary className="cursor-pointer inline-flex items-center gap-2 text-[#fca311] font-semibold hover:text-[#14213d] transition-colors text-sm sm:text-base">
                <span>その他のシステムも対応可能</span>
                <span className="group-open:rotate-90 transition-transform">
                  ▶
                </span>
              </summary>
              <div className="mt-4 text-gray-700 bg-gray-50 p-4 rounded-lg inline-block text-left mx-auto text-xs sm:text-base">
                <p>・営業支援ツール(SFA)</p>
                <p>・予約管理システム</p>
                <p>・承認ワークフローシステム</p>
                <p>・社内ポータル・情報共有ツール</p>
              </div>
            </details>
          </div>
        )}

        {/* 2. 経営可視化システム */}
        {activeTab === "visualization" && (
          <div className="animate-fadeIn max-w-4xl mx-auto bg-white p-4 sm:p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 text-center sm:text-left">
              <span className="text-4xl sm:text-5xl">📊</span>
              <h3 className="text-lg sm:text-2xl font-bold text-[#14213d]">
                経営可視化 × AIダッシュボード
              </h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-lg">
              会計・営業・マーケティングなど、複数のシステムに分散したデータを一元化。
              リアルタイム可視化とAI分析により、
              <strong className="text-[#14213d]">「今、何を判断すべきか」</strong>
              が一目で分かる経営ダッシュボードを構築します。
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#fca311] font-bold mt-1">✓</span>
                <span className="text-xs sm:text-base">
                  <strong>データ統合基盤：</strong>
                  会計・SFA・CRM・マーケティングデータを自動連携
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fca311] font-bold mt-1">✓</span>
                <span className="text-xs sm:text-base">
                  <strong>AI分析・予測：</strong>
                  売上予測・成長率・異常値をAIが自動分析
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fca311] font-bold mt-1">✓</span>
                <span className="text-xs sm:text-base">
                  <strong>レポート自動化：</strong>
                  KPI・グラフ・定例会議資料を自動生成
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <img 
                src="/images/AI_dashboard.png" 
                alt="経営ダッシュボード画面イメージ" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}

        {/* 3. Webサイト・LP制作 */}
        {activeTab === "web" && (
          <div className="animate-fadeIn">
            <WebProductionService />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ServiceList;