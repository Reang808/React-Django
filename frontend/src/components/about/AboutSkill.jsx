

import React, { useEffect, useRef, useState } from "react";

const AboutSkill = () => {
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

  const skills = [
  {
    category: "フロントエンド",
    color: "bg-orange-500",
    items: [
      {
        name: "React",
        // React Atom Icon
        icon: (
          <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
        ),
        color: "text-[#61dafb]",
      },
      {
        name: "Next.js",
        // Next.js "N" Icon (Simplified)
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L7.74 5.81C9.364 4.67 11.344 4 12 4zm-2.29 2l7.55 11.95c-1.624 1.14-3.604 1.81-5.74 1.81-5.523 0-10-4.477-10-10 0-2.136.67-4.116 1.81-5.74z" fill="currentColor"/>
          </svg>
        ),
        color: "text-black dark:text-white", // Dark mode対応推奨
      },
      {
        name: "Tailwind CSS",
        // Tailwind Waves
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
            <path d="M12.001 10.3c-2.3 0-4.1-.9-5.7-2.4C4.601 6.2 3.301 5.3 1.701 5.3c-1.7 0-3 .8-3.6 1.5l1.4 1.4c.2-.3.7-.7 2.2-.7 1.8 0 3 .9 4.6 2.4 1.9 1.8 3.6 3.1 5.7 3.1 2.3 0 4.1-.9 5.7-2.4 1.7-1.7 3-2.6 4.6-2.6 1.7 0 3 .8 3.6 1.5l-1.4 1.4c-.2-.3-.7-.7-2.2-.7-1.8 0-3 .9-4.6-2.4-1.9-1.9-3.6-3.2-5.701-3.2zm0 8.4c-2.3 0-4.1-.9-5.7-2.4-1.7-1.7-3-2.6-4.601-2.6-1.7 0-3 .8-3.6 1.5l1.4 1.4c.2-.3.7-.7 2.2-.7 1.8 0 3 .9 4.6 2.4 1.9 1.8 3.6 3.1 5.7 3.1 2.3 0 4.1-.9 5.7-2.4 1.7-1.7 3-2.6 4.6-2.6 1.7 0 3 .8 3.6 1.5l-1.4 1.4c-.2-.3-.7-.7-2.2-.7-1.8 0-3 .9-4.6-2.4-1.9-1.8-3.6-3.1-5.701-3.1z" fill="currentColor"/>
          </svg>
        ),
        color: "text-[#38bdf8]",
      },
      {
        name: "JavaScript",
        // JS Shield/Box
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
             <path d="M3 3h18v18H3V3zm13.63 11.08c0-.98-.54-1.42-1.47-1.62l-1.22-.25c-.82-.18-1.07-.42-1.07-.83 0-.53.45-.8 1.23-.8.73 0 1.1.28 1.2.76h1.43c-.12-1.2-1.06-1.9-2.66-1.9-1.86 0-2.73 1-2.73 2.25 0 1.06.64 1.56 1.62 1.78l1.13.25c.82.19 1.02.46 1.02.9 0 .62-.57.94-1.42.94-.9 0-1.37-.35-1.5-1h-1.5c.15 1.4 1.26 2.2 2.97 2.2 1.93 0 2.93-1 2.93-2.35v-.03zm-5.8-3.2h-1.5v4.9c0 1.07-.48 1.56-1.3 1.56-.6 0-1-.23-1.24-.57v-1.3h-1.45v1.36c.13 1.18 1.1 1.8 2.52 1.8 1.63 0 2.97-.82 2.97-2.6V10.88z" fill="currentColor"/>
          </svg>
        ),
        color: "text-yellow-500",
      },
    ],
  },
  {
    category: "バックエンド",
    color: "bg-blue-500",
    items: [
      {
        name: "Django",
        // Django "d" logo simplified
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
             <path d="M11.5 3v11.5c0 2.5-1.5 4.5-4 4.5s-4-2-4-4.5c0-3 2.5-4.5 5-4.5v2.5c-1 0-2 .5-2 2s1 2 2 2 1.5-.5 1.5-2V3h1.5zm4 5.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5S11 15.5 11 13s2-4.5 4.5-4.5zm0 2.5c-1 0-2 .5-2 2s1 2 2 2 2-.5 2-2-1-2-2-2z" fill="currentColor"/>
          </svg>
        ),
        color: "text-[#092e20]",
      },
      {
        name: "Django REST Framework",
        // Plug Icon (representing API/connection)
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
            <path d="M16.586 3.414a2 2 0 0 1 2.828 2.828l-1.414 1.414a2 2 0 0 1-.896.532l.95 4.752 1.735 1.735a2 2 0 0 1-2.828 2.828l-1.735-1.735-4.752-.95a2 2 0 0 1-.532.896l-1.414 1.414a2 2 0 0 1-2.828-2.828l1.414-1.414a2 2 0 0 1 .896-.532l-.95-4.752L5.32 5.895a2 2 0 0 1 2.828-2.828l1.735 1.735 4.752.95a2 2 0 0 1 .532-.896l1.414-1.414ZM6.5 17.5 3 21l3.5-3.5ZM17.5 6.5 21 3l-3.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        ),
        color: "text-red-600",
      },
      {
        name: "Python",
        // Python Snakes
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
            <path d="M12 2c-2.5 0-4.5.5-4.5 2.5v2h4v1h-6c-2.5 0-4.5 2-4.5 4.5v3c0 2.5 2 4.5 4.5 4.5h1v-3c0-2 1.5-3.5 3.5-3.5h4.5v-2.5c0-2-2-2.5-4.5-2.5h-2v-1.5h2c2.5 0 4.5.5 4.5 2.5v2h-2.5zm-2.5 2.5c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm5 5h-4.5c-2 0-3.5 1.5-3.5 3.5v3h-1c-2.5 0-4.5-2-4.5-4.5v-3c0-2.5 2-4.5 4.5-4.5h6c2.5 0 4.5 2 4.5 4.5v2.5c0 2.5-2 4.5-4.5 4.5h-2v1.5h2c2.5 0 4.5-.5 4.5-2.5v-2h-2.5v-1zm2.5 8c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z" fill="currentColor"/>
          </svg>
        ),
        color: "text-blue-600",
      },
    ],
  },
  {
    category: "インフラ・DevOps",
    color: "bg-purple-600",
    items: [
      {
        name: "Docker",
        // Docker Whale
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
             <path d="M22.6 12.5c-.7-.5-1.8-.5-2.4 0l-.6.4c-1.7-1.4-4.3-1.7-6.5-.6v-1h.6c.3 0 .6-.3.6-.6V9c0-.3-.3-.6-.6-.6H12c-.3 0-.6.3-.6.6v1.7c0 .3.3.6.6.6h.6v.8c-.7-.1-1.3-.1-2-.1H9.5V10c0-.3-.3-.6-.6-.6h-1.7c-.3 0-.6.3-.6.6v2H5V10c0-.3-.3-.6-.6-.6H2.6c-.3 0-.6.3-.6.6v2h-.3c-1.4 1.8-1.5 4.4-.1 6.3l.1.2c1.6 2.1 4.5 2.8 6.9 1.7 2.4-1.1 5.6-1.2 8-.1.6.3 1.3.1 1.6-.5.1-.2.1-.4.1-.6-.1-3.6-2.1-6.5-5.7-7.5zm-11.3-.5h1.7v2h-1.7v-2zm0-3h1.7v2h-1.7V9zM2.7 12h1.7v2H2.7v-2zm2.3 0h1.7v2H5v-2zm2.3 0H9v2H7.3v-2z" fill="currentColor"/>
          </svg>
        ),
        color: "text-[#2496ed]",
      },
      {
        name: "Nginx",
        // Nginx Logo shape
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
            <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm5.3 15.8L12 12.9v3.9l-3.8 2.2v-8l5.3 2.9v-3.9l3.8-2.2v8.1z" fill="currentColor"/>
          </svg>
        ),
        color: "text-[#009639]",
      },
      {
        name: "Netlify",
        // Netlify Diamond
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
             <path d="M5.91 17.07L12 20.4l6.09-3.33L23.91 12 12 5.48.09 12l5.82 5.07zM12 0L5.5 3.56l6.5 3.56 6.5-3.56L12 0z" fill="currentColor"/>
          </svg>
        ),
        color: "text-[#00ad9f]",
      },
      {
        name: "Gunicorn",
        // Unicorn Horn/Head
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
            <path d="M18 3c-2 0-3 1-3 1s-2-2-4-2-3 2-3 2-2 3-2 3s-1 2-1 4c0 0 2 0 3 1s1 1 2 0 2-2 2-2l-1 4s3-1 4-3 1-6 3-8zM6 14c0 0 2-1 3 0s1 3 1 3l-2 3s-3-1-3-3 1-3 1-3z" fill="currentColor"/>
          </svg>
        ),
        color: "text-gray-700",
      },
      {
        name: "VPS",
        // Cloud Server
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
             <path d="M17 16h-2v-2h2v2zm0 3h-2v-2h2v2zm3-3h-2v-2h2v2zm0 3h-2v-2h2v2zM7 15v5h10v-5H7zm13-5.5c0-1.7-1-3.2-2.5-3.9.1-.5.2-1.1.2-1.6 0-3.3-2.7-6-6-6-2.8 0-5.2 2-5.8 4.7-2.8.5-4.9 2.9-4.9 5.8 0 2.8 2 5.2 4.7 5.8V13h10.6c2.1-.5 3.7-2.3 3.7-4.5z" fill="currentColor"/>
          </svg>
        ),
        color: "text-gray-600",
      },
    ],
  },
  {
    category: "ノーコード・ローコード",
    color: "bg-green-600",
    items: [
      {
        name: "AppSheet",
        // Paper plane / Sheet stack
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
             <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/>
          </svg>
        ),
        color: "text-[#0f9dff]",
      },
      {
        name: "Glide",
        // Glide "g" / play shape
        icon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/>
          </svg>
        ),
        color: "text-[#6c3cf0]",
      },
    ],
  },
];

  return (
    <section
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-24 transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-[#14213d]">技術スタック</h2>
        <p className="text-gray-600 text-lg">モダンな技術で、スピーディーかつ高品質な開発を実現します</p>
      </div>

      <div className="space-y-12">
        {skills.map((skillGroup, index) => (
          <div 
            key={index} 
            className={`transition-all duration-700 delay-${index * 100}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* カテゴリーヘッダー */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-1 h-12 ${skillGroup.color} rounded-full`}></div>
              <h3 className="text-2xl font-bold text-[#14213d]">{skillGroup.category}</h3>
            </div>

            {/* スキル一覧 */}
            <div className="flex flex-wrap gap-4 pl-8">
              {skillGroup.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-center gap-3 px-6 py-4 bg-white border-2 border-gray-100 rounded-lg hover:border-[#48b6e8] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="font-medium text-gray-800 group-hover:text-[#14213d]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 追加情報 */}
      <div className="mt-16 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <p className="text-gray-700 text-lg leading-relaxed">
          これらの技術を組み合わせて、<br className="md:hidden" />
          <span className="font-bold text-[#14213d]">スケーラブルで保守性の高いシステム</span>を構築します。
        </p>
      </div>
    </section>
  );
};

export default AboutSkill;