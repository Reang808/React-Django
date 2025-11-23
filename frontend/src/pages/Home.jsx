import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import SectionTabs from "../components/SectionTabs";
import TopAbout from "../components/top/TopAbout";
import TopService from "../components/top/TopService";
import TopNews from "../components/top/TopNews";
import TopContact from "../components/top/TopContact";

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: <TopAbout />,
    service: <TopService />,
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
        <div className="w-full max-w-6xl mx-auto px-4 py-20 relative z-20">

          {/* タブ（Pill UI） */}
          <div className="w-full flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-full p-2 shadow-inner gap-2">

              <button
                onClick={() => setActiveSection("about")}
                className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                  activeSection === "about"
                    ? "bg-[#14213d] text-white shadow"
                    : "text-gray-600 hover:text-[#14213d]"
                }`}
              >
                About
              </button>

              <button
                onClick={() => setActiveSection("service")}
                className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                  activeSection === "service"
                    ? "bg-[#14213d] text-white shadow"
                    : "text-gray-600 hover:text-[#14213d]"
                }`}
              >
                Service
              </button>

              <button
                onClick={() => setActiveSection("news")}
                className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                  activeSection === "news"
                    ? "bg-[#14213d] text-white shadow"
                    : "text-gray-600 hover:text-[#14213d]"
                }`}
              >
                News
              </button>

              <button
                onClick={() => setActiveSection("contact")}
                className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                  activeSection === "contact"
                    ? "bg-[#14213d] text-white shadow"
                    : "text-gray-600 hover:text-[#14213d]"
                }`}
              >
                Contact
              </button>

            </div>
          </div>

          {/* 切替コンテンツ */}
          <div className="mt-12">
            {sections[activeSection]}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;