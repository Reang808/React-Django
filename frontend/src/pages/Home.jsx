import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import SectionTabs from "../components/SectionTabs";
import TopAbout from "../components/top/TopAbout";
import TopService from "../components/top/TopService";
import TopNews from "../components/top/TopNews";
import TopContact from "../components/top/TopContact";

const Home = () => {
  const [activeSection, setActiveSection] = useState("service");

  const sections = {
    service: <TopService />,
    about: <TopAbout />,
    news: <TopNews />,
    contact: <TopContact />,
  };

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">

      {/* ------------------------- */}
      {/* 1. Hero セクション */}
      {/* ------------------------- */}
      <Hero />

      {/* ------------------------- */}
      {/* 2. 背景＋コンテンツ全体ラッパー */}
      {/* ------------------------- */}
      <div className="relative w-full mt-0">

        {/* 背景画像（コンテンツに合わせて縦が伸びる） */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/bgcontent.png"
            alt="背景画像"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* ------------------------- */}
        {/* 3. Tabs + ActiveSection */}
        {/* ------------------------- */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 relative z-20">

          {/* タブ（レスポンシブ Pill UI） */}
          <div className="w-full flex justify-center mb-8 md:mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1.5 sm:p-2 shadow-inner gap-1.5 sm:gap-2 flex-wrap justify-center max-w-full">

              <button
                onClick={() => setActiveSection("service")}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === "service"
                    ? "bg-[#14213d] text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-[#14213d] hover:bg-white/50"
                }`}
              >
                Service
              </button>

              <button
                onClick={() => setActiveSection("about")}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === "about"
                    ? "bg-[#14213d] text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-[#14213d] hover:bg-white/50"
                }`}
              >
                About
              </button>

              <button
                onClick={() => setActiveSection("news")}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === "news"
                    ? "bg-[#14213d] text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-[#14213d] hover:bg-white/50"
                }`}
              >
                News
              </button>

              <button
                onClick={() => setActiveSection("contact")}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === "contact"
                    ? "bg-[#14213d] text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-[#14213d] hover:bg-white/50"
                }`}
              >
                Contact
              </button>

            </div>
          </div>

          {/* 切替コンテンツ */}
          <div className="mt-8 md:mt-12">
            {sections[activeSection]}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;