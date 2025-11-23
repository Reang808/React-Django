

import React from "react";

const SectionTabs = ({ active, setActive }) => {
  const tabs = [
    { id: "about", label: "About" },
    { id: "service", label: "Service" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-4 bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-md border border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300
              ${active === tab.id ? "text-black" : "text-gray-500 hover:text-gray-700"}
            `}
          >
            {tab.label}

            {active === tab.id && (
              <span
                className="absolute left-0 right-0 -bottom-1 mx-auto h-[3px] w-6 rounded-full bg-black transition-all duration-300"
              ></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionTabs;