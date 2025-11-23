import React, { useEffect, useRef, useState } from "react";

const AboutMyStory = () => {
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
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-24 transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-3xl font-bold mb-10">My Story</h2>
      <div className="flex justify-center mb-10">
        <img
          src="/images/IMG_1338.jpg"
          alt="My Story Visual"
          className="w-48 h-48 object-cover rounded-2xl shadow-md"
        />
      </div>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Reang の代表である私は、これまで製造業、物販、動画編集など
          様々な仕事を経験してきました。遠回りも失敗もたくさんありました。
        </p>

        <p>
          その過程で気づいたのは、
          <strong>「スキルは人生を変える力になる」</strong>ということです。
          独学でプログラミングを学び、React × Django を中心とした
          フルスタックエンジニアとして独立しました。
        </p>

        <p>
          1人で挑戦する不安、何をしたらいいかわからない孤独。
          そうした感覚を誰よりも理解しています。
          だからこそ今は、
          <strong>挑戦する人の背中を押す存在でありたい</strong>
          と考えています。
        </p>

        <p>
          技術はアイデアを実現し、人生を前へ進める力になる。
          その信念のもと、Reang は
          「個人・小規模事業者の0→1」を支える開発パートナーとして活動しています。
        </p>
      </div>
    </section>
  );
};

export default AboutMyStory;