import React, { useEffect, useRef, useState } from "react";

const AboutCompany = () => {
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

  const companyInfo = [
    { label: "会社名", value: "株式会社Reang" },
    { label: "代表者", value: "代表取締役 [お名前]" },
    { label: "設立", value: "[設立年月]" },
    { label: "資本金", value: "[金額]" },
    { label: "所在地", value: "[住所]" },
    { 
      label: "事業内容", 
      value: [
        "業務システム開発",
        "Webアプリケーション開発",
        "Webサイト・LP制作",
        "システム運用保守サポート"
      ]
    },
    { label: "対応地域", value: "全国（リモート開発対応）" },
    { label: "お問い合わせ", value: "contact@reang.co.jp", isLink: true },
  ];

  return (
    <section
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-20 transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#14213d]">会社概要</h2>
        <p className="text-gray-600 text-lg">
          現在登記申請中のため、詳細は追って公開いたします。
        </p>
      </div>

      {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {companyInfo.map((info, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-all duration-300 ${
              show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-r border-gray-100">
              <h3 className="font-semibold text-[#14213d] text-lg">
                {info.label}
              </h3>
            </div>
            <div className="md:col-span-2 px-8 py-6">
              {Array.isArray(info.value) ? (
                <ul className="space-y-2">
                  {info.value.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-[#48b6e8] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : info.isLink ? (
                <a
                  href={`mailto:${info.value}`}
                  className="text-[#48b6e8] hover:text-[#14213d] transition-colors duration-300 font-medium"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-700">{info.value}</p>
              )}
            </div>
          </div>
        ))}
      </div> */}


    </section>
  );
};

export default AboutCompany;