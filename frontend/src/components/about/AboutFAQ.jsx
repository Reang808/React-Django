import React, { useEffect, useRef, useState } from "react";

const AboutFAQ = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

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
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "初めてシステム開発を依頼するのですが大丈夫ですか？",
      answer:
        "はい、問題ありません。丁寧なヒアリングで要件を整理し、専門用語を使わず分かりやすく説明します。「何から始めればいいか分からない」という状態からでも、一緒に形にしていくことができます。",
    },
    {
      question: "予算が限られているのですが対応可能ですか？",
      answer:
        "はい、ご予算に応じた提案が可能です。「予算○○万円でできる範囲で」というご相談も大歓迎です。MVPから始めて段階的に機能を追加していくなど、柔軟な開発プランをご提案します。",
    },
    {
      question: "開発期間はどれくらいかかりますか？",
      answer:
        "プロジェクトの規模により異なりますが、目安は以下の通りです。\n• Webサイト・LP: 2〜4週間\n• 小規模システム: 1〜2ヶ月\n• 中規模システム: 2〜4ヶ月\n• 大規模システム: 3〜6ヶ月\n詳細はヒアリング後にお見積もりと合わせてご提示します。",
    },
    {
      question: "途中で仕様変更はできますか？",
      answer:
        "はい、柔軟に対応します。開発を進める中で「やっぱりこうしたい」という変更は自然なことです。ただし、大幅な変更の場合は追加費用や納期の調整が発生する可能性がありますので、その都度ご相談させていただきます。",
    },
    {
      question: "運用保守は必須ですか？",
      answer:
        "必須ではありませんが、システムの安定稼働と継続的な改善のため推奨しています。運用保守契約をいただくことで、障害対応、機能追加、セキュリティアップデートなどを優先的にサポートできます。スポット対応も可能です。",
    },
    {
      question: "リモートでの開発ですか？対面での打ち合わせは可能ですか？",
      answer:
        "基本的にリモートでの開発となりますが、必要に応じて対面でのミーティングも可能です。オンラインMTGツール（Zoom、Google Meetなど）を使った定期的な進捗共有も行います。",
    },
    {
      question: "どんな業種・規模の企業に対応していますか？",
      answer:
        "主にスタートアップや中小企業を対象としています。業種は問わず、「業務を効率化したい」「システムで課題を解決したい」という企業様であれば、どのような業界でも対応可能です。",
    },
    {
      question: "見積もりは無料ですか？",
      answer:
        "はい、お見積もりは完全無料です。まずはヒアリングでご要望をお伺いし、最適なプランと詳細な見積もりをご提出します。見積もり後のキャンセルも可能ですので、お気軽にご相談ください。",
    },
    {
      question: "既存システムの改修や追加開発も依頼できますか？",
      answer:
        "はい、対応可能です。他社で開発されたシステムの改修や機能追加もお任せください。まずは現状のシステムを確認させていただき、最適な改修プランをご提案します。",
    },
    {
      question: "納品後のサポート体制はどうなっていますか？",
      answer:
        "納品後も継続的にサポートします。運用保守契約では、月次でのミーティング、障害対応、機能追加、改善提案などを提供。スポット対応も可能ですので、必要なときだけご依頼いただくこともできます。",
    },
  ];

  return (
    <section
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-20 transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#14213d]">
          よくある質問
        </h2>
        <p className="text-gray-600 text-lg">
          お客様からよくいただく質問をまとめました
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-start gap-4 flex-1">
                <span className="flex-shrink-0 w-8 h-8 bg-[#48b6e8] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  Q
                </span>
                <h3 className="font-semibold text-[#14213d] text-lg pr-4">
                  {faq.question}
                </h3>
              </div>
              <svg
                className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-start gap-4 pl-12">
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-8 h-8 bg-gray-100 text-[#14213d] rounded-full flex items-center justify-center font-bold text-sm">
                        A
                      </span>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line pt-1">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 追加情報 */}
      <div
        className={`mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl transition-all duration-1000 delay-500 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h3 className="text-xl font-semibold mb-4 text-[#14213d] flex items-center">
          <span className="text-2xl mr-2">💬</span>
          その他のご質問
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          上記以外にもご不明な点がございましたら、お気軽にお問い合わせください。
          丁寧にご回答させていただきます。
        </p>
      </div>

      
    </section>
  );
};

export default AboutFAQ;