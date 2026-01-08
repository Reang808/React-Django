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
    <section className="relative w-full overflow-hidden text-white py-12 md:py-24 flex items-center">
      <img
        src="/images/HERo.png"
        alt="背景画像"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-20 max-w-6xl mx-auto text-center px-4 md:px-6">
        <h1
          className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg transition-all duration-1000 ease-out
          ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          スタートアップと共に<br />
          プロダクトを創る開発会社
        </h1>

        <p
          className={`text-sm sm:text-base md:text-xl mb-6 md:mb-10 text-gray-100 drop-shadow-md transition-all duration-1000 ease-out delay-300
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          業務システム、Webサイト、アプリ開発まで。<br />
          初めてのシステム導入でも安心してお任せください。
        </p>

        <a
          href="/contact"
          className={`inline-block bg-white text-[#14213d] px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base font-semibold hover:bg-[#48b6e8] hover:text-white transition-all duration-1000 ease-out delay-500
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