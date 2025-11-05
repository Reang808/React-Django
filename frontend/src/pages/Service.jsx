
function Service() {
  const services = [
    {
      title: "Web開発",
      desc: "ReactとDjangoを活用し、ビジネス課題に合わせたモダンなWebサイトやアプリを構築します。",
      icon: "💻",
    },
    {
      title: "DX支援",
      desc: "業務フローの自動化やクラウド導入など、企業のデジタル変革をサポートします。",
      icon: "⚙️",
    },
    {
      title: "システム構築",
      desc: "受発注管理・予約システム・顧客管理など、現場の課題に沿ったシステムを開発します。",
      icon: "🧩",
    },
    {
      title: "コンサルティング",
      desc: "技術選定・設計レビュー・運用アドバイスなど、エンジニア視点から課題を整理し提案します。",
      icon: "💡",
    },
  ];

  const steps = [
    "ヒアリング・提案",
    "設計・デザイン",
    "開発・実装",
    "運用・サポート"
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-[Work_Sans,sans-serif]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#057ab09a] to-[#10b981] text-gray-800 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">サービス一覧</h1>
          <p className="text-lg text-gray-900">
            ReangはWeb開発からDX支援まで、課題に合わせた柔軟なソリューションを提供します。
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f7f7fa]">
        <div className="max-w-6xl mx-auto px-6 text-left">
          <h2 className="text-3xl font-bold text-black mb-12 border-l-4 border-[#14213d] pl-3">
            提供サービス
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-8 hover:shadow-xl transition transform hover:-translate-y-1 hover:border-[#48b6e8] border border-transparent duration-200"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#14213d] mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-left">
          <h2 className="text-3xl font-bold text-black mb-12 border-l-4 border-[#14213d] pl-3">
            制作の流れ
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-start md:items-center text-left md:text-center flex-1">
                <div className="w-14 h-14 flex items-center justify-center bg-[#14213d] text-white rounded-full text-xl font-bold mb-4 shadow">
                  {i + 1}
                </div>
                <p className="font-semibold text-[#14213d] mb-2">{step}</p>
                {i !== steps.length - 1 && (
                  <div className="hidden md:block w-2 h-10 bg-[#48b6e8] mx-auto rounded-full my-2"></div>
                )}
                <div className="block md:hidden w-full h-1 bg-[#48b6e8] rounded-full md:my-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#14213d] text-white text-left">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#48b6e8] pl-3">
            お問い合わせ
          </h2>
          <p className="mb-10 leading-relaxed text-gray-100">
            ご相談・お見積り・制作依頼など、どんなことでもお気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#14213d] px-8 py-3 rounded-md font-semibold hover:bg-[#48b6e8] hover:text-white transition"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            お問い合わせページへ
          </a>
        </div>
      </section>
    </div>
  );
}

export default Service;
