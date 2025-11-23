import React, { useRef, useEffect, useState } from "react";

const ServiceFlow = () => {
  const flowRef = useRef(null);
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

    if (flowRef.current) obs.observe(flowRef.current);

    return () => {
      if (flowRef.current) obs.unobserve(flowRef.current);
    };
  }, []);

  const steps = [
    {
      title: "ヒアリング",
      description:
        "事業内容・現状の課題・理想の形を丁寧にヒアリングし、必要な機能や方向性を整理します。",
    },
    {
      title: "プラン設計・要件定義",
      description:
        "ヒアリング内容をもとに、画面構成・必要機能・技術選定・スケジュールを明確にします。",
    },
    {
      title: "デザイン・UI設計",
      description:
        "ユーザー導線や使いやすさを重視しながら、Web・アプリのデザイン案を作成します。",
    },
    {
      title: "開発（React × Django）",
      description:
        "フロントエンドとバックエンドを並行して開発し、モダンで高速なプロダクトを構築します。",
    },
    {
      title: "動作確認・改善",
      description:
        "実際の操作感を確かめながら、必要に応じてUI改善や追加調整を行います。",
    },
    {
      title: "納品・運用サポート",
      description:
        "納品後もアップデート・保守・追加機能など、運用フェーズを継続的にサポートします。",
    },
  ];

  return (
    <div
      ref={flowRef}
      className={`w-full max-w-5xl mx-auto mt-20 transition-all duration-700 ${
        showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-[#14213d]">
        制作の流れ
      </h2>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 w-14 h-14 bg-[#14213d] text-white rounded-full flex items-center justify-center text-xl font-bold">
              {index + 1}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#14213d]">
                {step.title}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFlow;