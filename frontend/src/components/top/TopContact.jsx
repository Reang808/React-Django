import React, { useEffect, useState, useRef } from "react";

const TopContact = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
  }, []);

  return (
    <div ref={sectionRef} className={`w-full flex flex-col items-center py-16 px-6 transition-all duration-700 ease-out ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

      {/* タイトル */}
      <h2 className={`text-3xl font-bold mb-6 transition-all duration-700 ease-out ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>お問い合わせ</h2>
      <p className={`text-gray-600 mb-10 text-center max-w-2xl transition-all duration-700 ease-out delay-200 ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        Web制作・アプリ開発・業務システム・DX支援など、
        まずはお気軽にご相談ください。
      </p>

      {/* カード */}
      <div
        className={`bg-white shadow-lg rounded-2xl p-10 w-full max-w-3xl transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >

        {/* フォーム */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">お問い合わせフォーム</h3>
          <p className="text-gray-600 mb-4">
            必要事項を入力して送信いただくと、1〜3営業日以内に返信いたします。
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#14213d] text-white px-6 py-3 rounded-md shadow hover:bg-[#48b6e8] transition"
          >
            フォームから問い合わせる
          </a>
        </div>

        <hr className="my-6" />

        {/* LINE連絡 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">LINEでのご相談</h3>
          <p className="text-gray-600 mb-4">
            公式LINEを追加していただくと、チャットで気軽に相談できます。
          </p>

          <a
            href="https://linevoom.line.me/user/_dUXiZG-QzYilD8hygKJSa1HU5xfLbnqvpln54bA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#06C755] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            LINEで相談する
          </a>
        </div>

        <hr className="my-6" />

        {/* 緊急連絡 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">緊急のご連絡</h3>
          <p className="text-gray-600 mb-4">
            急ぎのトラブル対応はお電話でも受け付けています。
          </p>
          <p className="text-2xl font-bold text-[#14213d]">
            080-8636-3296
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopContact;