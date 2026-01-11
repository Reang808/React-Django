import React from "react";

// active や setActive はもう不要なので削除、または現在のスクロール位置判定に使います
const SectionTabs = () => {
  const tabs = [
    { id: "about-section", label: "About" },   // Top.jsの id="about-section" に対応
    { id: "service-section", label: "Service" }, // Top.jsの id="service-section" に対応
    { id: "news-section", label: "News" },     // Top.jsの id="news-section" に対応
    { id: "contact-section", label: "Contact" }, // Top.jsの id="contact-section" に対応
  ];

  // スムーズスクロール用の関数
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-center z-50"> {/* z-indexを追加して手前に表示 */}
      <div className="flex gap-4 bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-md border border-gray-200">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            onClick={(e) => handleScroll(e, tab.id)}
            className="relative px-4 py-2 text-sm font-medium text-gray-500 hover:text-brand-navy transition-all duration-300 group"
          >
            {tab.label}
            
            {/* ホバー時に下線が出る演出 */}
            <span className="absolute left-0 right-0 -bottom-1 mx-auto h-[3px] w-0 rounded-full bg-brand-navy transition-all duration-300 group-hover:w-6"></span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SectionTabs;