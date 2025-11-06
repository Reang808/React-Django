function Privacy() {
  return (
    <div className="min-h-screen bg-gray-100 text-neutral-900 font-sans">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#48b6e8] via-white to-[#48b6e8] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl text-gray-800 md:text-5xl font-bold mb-6">プライバシーポリシー</h1>
          <p className="text-lg text-gray-800">
            個人情報の取り扱いについて
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            
            {/* 基本方針 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                基本方針
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                株式会社REANG（以下「当社」）は、お客様の個人情報保護の重要性を深く認識し、個人情報の保護に関する法律および関連法令を遵守するとともに、以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
              </p>
            </div>

            {/* 個人情報の定義 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                1. 個人情報の定義
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される個人情報、すなわち生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）をいいます。
              </p>
            </div>

            {/* 個人情報の収集 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                2. 個人情報の収集
              </h2>
              <div className="text-neutral-700 leading-relaxed">
                <p className="mb-4">当社は、以下の方法により個人情報を収集いたします：</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>お問い合わせフォームからの情報提供</li>
                  <li>メールや電話でのご連絡時の情報提供</li>
                  <li>サービス利用時の必要な情報入力</li>
                  <li>その他、お客様が任意で提供される情報</li>
                </ul>
                <p className="mt-4">
                  収集する個人情報は、お名前、メールアドレス、電話番号、住所、会社名、部署名、その他お客様にご提供いただく情報です。
                </p>
              </div>
            </div>

            {/* 利用目的 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                3. 個人情報の利用目的
              </h2>
              <div className="text-neutral-700 leading-relaxed">
                <p className="mb-4">当社は、収集した個人情報を以下の目的で利用いたします：</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>お問い合わせへの回答・対応</li>
                  <li>サービスの提供・運営</li>
                  <li>サービスの改善・新サービスの開発</li>
                  <li>重要なお知らせやご案内の送信</li>
                  <li>マーケティング・営業活動</li>
                  <li>統計データの作成（個人を特定できない形式）</li>
                  <li>法令に基づく対応</li>
                </ul>
              </div>
            </div>

            {/* 第三者提供 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                4. 個人情報の第三者提供
              </h2>
              <div className="text-neutral-700 leading-relaxed">
                <p className="mb-4">
                  当社は、以下の場合を除き、お客様の同意を得ることなく個人情報を第三者に提供することはありません：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </div>
            </div>

            {/* 安全管理措置 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                5. 個人情報の安全管理措置
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                当社は、個人情報の漏えい、滅失または毀損の防止その他の個人情報の安全管理のため、必要かつ適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対して、必要かつ適切な監督を行います。
              </p>
            </div>

            {/* お客様の権利 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                6. お客様の権利
              </h2>
              <div className="text-neutral-700 leading-relaxed">
                <p className="mb-4">お客様は、当社が保有する個人情報について、以下の権利を有します：</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>開示請求権（個人情報の利用目的の通知を求める権利）</li>
                  <li>訂正・追加・削除請求権（個人情報の内容の訂正等を求める権利）</li>
                  <li>利用停止・消去請求権（個人情報の利用の停止等を求める権利）</li>
                  <li>第三者提供停止請求権（個人情報の第三者への提供の停止を求める権利）</li>
                </ul>
                <p className="mt-4">
                  これらの請求をされる場合は、下記のお問い合わせ先までご連絡ください。
                </p>
              </div>
            </div>

            {/* Cookie */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                7. Cookieの利用
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                当社のウェブサイトでは、サービスの向上やユーザビリティの改善のため、Cookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定によりCookieの受け入れを拒否することができます。ただし、Cookieを無効にされた場合、一部のサービスがご利用いただけない場合があります。
              </p>
            </div>

            {/* プライバシーポリシーの変更 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                8. プライバシーポリシーの変更
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                当社は、法令の改正や事業内容の変更等により、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイト上に掲載した時点から効力を生じるものとします。
              </p>
            </div>

            {/* お問い合わせ先 */}
            <div className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 border-l-4 border-brand-navy pl-4">
                9. お問い合わせ先
              </h2>
              <div className="text-neutral-700 leading-relaxed">
                <p className="mb-4">個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：</p>
                <div className="ml-4">
                  <p className="font-semibold">Reang</p>
                  <p>代表：後藤田烈志</p>
                  <p>メール: info@reang.jp</p>
                  <p>電話: 080-8636-3296</p>
                  <p>受付時間: 平日 9:00-18:00</p>
                </div>
              </div>
            </div>

            {/* 制定日 */}
            <div className="text-center text-sm text-neutral-600 border-t pt-8">
              <p>制定日：2025年11月6日</p>
              <p>Reang</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;