import React, { useEffect, useRef, useState } from "react";

const AboutWhyReang = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            obs.unobserve(e.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px 200px 0px"
      }
    );

    if (ref.current) obs.observe(ref.current);

    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  const strengths = [
    {
      title: "フルスタック開発で一貫対応",
      description:
        "フロントからバックエンド、インフラまで一貫開発。窓口が一本化されるため、スピーディーかつ正確な開発が可能です。",
      technologies: ["React", "Next.js", "Django", "Python", "Docker", "AWS"],
      icon: "⚡",
      examples: [
        "企画・要件定義から納品まで一貫サポート",
        "複数の業者とやり取りする手間を削減",
        "認識のズレを最小限に",
      ],
    },
    {
      title: "業務システムの豊富な実績",
      description:
        "顧客管理、在庫管理、予約システムなど、実際の業務で使われるシステムの開発経験が豊富。現場で本当に使えるツールを構築します。",
      technologies: null,
      icon: "🛠️",
      examples: [
        "顧客管理システム（CRM）",
        "在庫管理システム",
        "予約管理システム",
        "勤怠管理システム",
      ],
    },
    {
      title: "予算に応じた柔軟な開発",
      description:
        "MVPから本格展開まで、フェーズに応じた提案が可能。「予算○○万円でできる範囲で」というご相談も大歓迎です。",
      technologies: null,
      icon: "💰",
      examples: [
        "MVP開発（最小限の機能で素早くリリース）",
        "段階的な機能追加",
        "既存システムの改修",
      ],
    },
    {
      title: "継続的なサポート体制",
      description:
        "リリースして終わりではなく、運用保守も充実。機能追加、改善提案、トラブル対応まで長期サポートします。",
      technologies: null,
      icon: "🤝",
      examples: [
        "月次サポート（月額5万円〜）",
        "スポット対応",
        "技術相談・改善提案",
      ],
    },
  ];

  const techStack = [
    {
      category: "フロントエンド",
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      color: "bg-orange-500",
    },
    {
      category: "バックエンド",
      items: ["Django", "Django REST Framework", "Python", "PostgreSQL"],
      color: "bg-blue-500",
    },
    {
      category: "インフラ",
      items: ["Docker", "AWS", "Netlify", "Vercel"],
      color: "bg-purple-600",
    },
  ];

  return (
    <section
      ref={ref}
      className={`max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-[#14213d]">
          Reangを選ぶ理由
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          スタートアップの成長を支える、4つの強み
        </p>
      </div>

      {/* 強み一覧 */}
      <div className="space-y-6 md:space-y-10 mb-12 md:mb-20">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="text-3xl sm:text-4xl md:text-5xl">{strength.icon}</span>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#14213d] mb-2 md:mb-3">
                  {strength.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
                  {strength.description}
                </p>

                {/* 技術スタック表示 */}
                {strength.technologies && (
                  <div className="mb-3 md:mb-4">
                    <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-2">
                      使用技術
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {strength.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 text-[#14213d] rounded-full text-xs sm:text-sm font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 具体例 */}
                {strength.examples && (
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-2">
                      具体的には
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {strength.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 flex items-start text-xs sm:text-sm"
                        >
                          <span className="text-[#48b6e8] mr-2 shrink-0">
                            ✓
                          </span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 技術スタック */}
      <div
        className={`transition-all duration-1000 delay-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-[#14213d]">
          技術スタック
        </h3>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-6 md:mb-10">
          モダンな技術で、拡張性の高いシステムを構築
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className={`w-1 h-8 md:h-12 ${stack.color} rounded-full`}></div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#14213d]">
                  {stack.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {stack.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 md:px-3 md:py-2 bg-gray-50 text-gray-700 rounded-lg text-xs sm:text-sm font-medium border border-gray-200 hover:border-[#48b6e8] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-10 text-center p-4 md:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            これらの技術を組み合わせて、
            <br className="md:hidden" />
            <span className="font-bold text-[#14213d]">
              スケーラブルで保守性の高いシステム
            </span>
            を提供します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyReang;