function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-neutral-900 font-sans">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#48b6e8] via-white to-[#48b6e8] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl text-gray-800 md:text-5xl font-bold mb-6">お問い合わせ</h1>
          <p className="text-lg text-gray-800">
            ご要望・ご相談・お見積りなど、お気軽にお問い合わせください。
          </p>
        </div>
      </section>
 
      {/* Contact Methods */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-5xl mx-auto px-6 text-left space-y-20">
          {/* 1. フォーム連絡 */}
          <div>
            <h2 className="text-3xl font-bold text-brand-black mb-6 border-l-4 border-brand-navy pl-3">
              お問い合わせフォーム
            </h2>
            <p className="text-neutral-700 mb-8">
              フォームからご連絡いただいた後、内容を確認しメールでご返信いたします。
            </p>
            <form className="bg-white rounded-lg shadow p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sky"
                  placeholder="例：山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sky"
                  placeholder="例：info@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-2">
                  お問い合わせ内容
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-brand-sky"
                  placeholder="ご要望・お問い合わせ内容をご記入ください。"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-brand-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-sky transition"
              >
                送信する
              </button>
            </form>
          </div>

          {/* 2. LINEでのご連絡 */}
          <div>
            <h2 className="text-3xl font-bold text-brand-black mb-6 border-l-4 border-brand-navy pl-3">
              LINEでのご連絡
            </h2>
            <p className="text-neutral-700 mb-6">
              公式LINEを追加していただき、簡単な質問にご回答後、ヒアリングやお見積りを行います。
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white shadow rounded-lg p-8">
              <img
                src="https://qr-official.line.me/gs/M_155yuhvy_GW.png?oat_content=qr"
                alt="LINE QRコード"
                className="w-40 h-40 object-contain rounded-md border"
              />
              <div>
                <p className="text-neutral-700 mb-4">
                  下のボタンからLINE公式アカウントを追加できます。
                </p>
                <a
                  href="https://linevoom.line.me/user/_dUXiZG-QzYilD8hygKJSa1HU5xfLbnqvpln54bA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#06C755] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
                >
                  LINEで相談する
                </a>
              </div>
            </div>
          </div>

          {/* 3. 緊急の方へ */}
          <div>
            <h2 className="text-3xl font-bold text-brand-black mb-6 border-l-4 border-brand-navy pl-3">
              緊急のご連絡
            </h2>
            <p className="text-neutral-700 mb-6">
              急ぎのご依頼・トラブル対応はお電話でも受け付けております。<br />
              営業時間外の場合は折り返しのご連絡となる場合がございます。
            </p>
            <div className="bg-white shadow rounded-lg p-8 flex items-center justify-between flex-col md:flex-row">
              <div>
                <p className="text-xl font-semibold text-brand-navy mb-2">
                  電話番号
                </p>
                <p className="text-2xl font-bold text-brand-black tracking-wide">
                  080-8636-3296
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
