import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white py-24 flex items-center">
      <img
        src="/images/HERo.png"
        alt="背景画像"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-20 max-w-6xl mx-auto text-center px-6">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg transition-all duration-1000 ease-out
          ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          システム開発
        </h1>

        <p
          className={`text-lg md:text-xl mb-10 text-gray-100 drop-shadow-md transition-all duration-1000 ease-out delay-300
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          最新技術を駆使したフルスタック開発で、企業サイト・業務システム・ECサイトまで幅広く対応いたします。
        </p>

        <a
          href="/contact"
          className={`inline-block bg-white text-[#14213d] px-8 py-3 rounded-md font-semibold hover:bg-[#48b6e8] hover:text-white transition-all duration-1000 ease-out delay-500
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          お問い合わせへ
        </a>
      </div>
    </section>
  );
};

export default Hero;