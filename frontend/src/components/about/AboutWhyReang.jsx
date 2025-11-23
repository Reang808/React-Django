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
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-24 transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">
        Why Reang?
      </h2>

      <div className="relative w-full max-w-4xl mx-auto mb-16">
        <img
          src="/images/profile.png"
          alt="Reang Workspace Main"
          className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
        />

        <img
          src="/images/IMG_9984.jpg"
          alt="Reang Sub Visual"
          className="absolute bottom-[-20px] right-[-20px] w-40 h-40 md:w-56 md:h-56 object-cover rounded-xl shadow-xl border-4 border-white"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">フルスタックで完結</h3>
          <p className="text-gray-700 leading-relaxed">
            企画・設計・フロント・バックエンド・インフラまで  
            すべて一貫して対応できます。窓口を一本化できるため、  
            スピードと正確性が圧倒的に高まります。
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">小回りとスピード</h3>
          <p className="text-gray-700 leading-relaxed">
            個人事業・小規模事業者に最適化された柔軟な対応が可能です。  
            「早く形にしたい」「相談しながら進めたい」という方に  
            ぴったりの伴走型スタイルです。
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">業務理解が強い</h3>
          <p className="text-gray-700 leading-relaxed">
            在庫管理・勤怠管理・予約システム・顧客管理など、  
            中小企業の実務に直結したシステムの開発経験が豊富です。  
            「現場で本当に使える」プロダクトを構築できます。
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3">0→1の伴走力</h3>
          <p className="text-gray-700 leading-relaxed">
            アイデアを形にし、MVP開発・改善まで一緒に進める  
            伴走型支援が得意です。企画段階の曖昧な悩みからでも  
            気軽にご相談いただけます。
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutWhyReang;
