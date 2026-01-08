import React from "react";

// 画像パスは実際のプロジェクトの配置場所に合わせて変更してください
// 例: public/assets/images/ など
const images = {
  customerList: "/images/customer_list.png",   // 顧客一覧のスクショ
  webMeeting: "/images/web_meeting.jpg",       // Web会議発行のスクショ
  chat: "/images/chat_communication.png",      // チャット画面のスクショ
  calendar: "/images/calendar_dashboard.png",  // カレンダーのスクショ
};

const Customer = () => {
  return (
    <div className="space-y-10 sm:space-y-16 py-8 px-2 sm:px-4">
      {/* 1. ヘッダーセクション */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-3xl font-extrabold text-[#14213d] leading-tight">
          顧客管理から「商談・成約」まで。<br />
          <span className="text-blue-600">ビジネスを加速させる<br className="sm:hidden"/>オールインワンCRM</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
          ただの名簿管理ではありません。Web会議の即時発行、チャットツール連携、
          そしてAIによる分析まで。あなたの業務フローに合わせて進化するシステムです。
        </p>
      </div>

      {/* 2. 機能紹介：顧客管理＆カレンダー（基本機能） */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* スマホでは画像が上に来るように order を調整する場合、ここを変更しますが今回はそのまま */}
        <div className="order-2 md:order-1 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img 
            src={images.customerList} 
            alt="顧客一覧画面" 
            className="relative rounded-xl shadow-xl border border-gray-100 w-full"
          />
        </div>
        <div className="order-1 md:order-2 space-y-3 sm:space-y-4">
          <div className="inline-block bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 rounded-full">
            一元管理
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-[#14213d] leading-snug">
            情報はチームの資産。<br className="hidden sm:block"/>リアルタイムで共有・可視化
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            顧客ごとのステータス、売上見込み、次回アクションを一目で把握。
            リスト表示とカンバン方式の切り替えや、詳細な検索フィルターにより、
            「今アプローチすべき顧客」を逃しません。
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-blue-500 font-bold">✔</span> 商談履歴・対応状況の見える化
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-blue-500 font-bold">✔</span> カレンダーと連動したタスク管理
            </li>
          </ul>
        </div>
      </div>

      {/* 3. 機能紹介：Web会議連携（強み） */}
      <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="space-y-3 sm:space-y-4 order-1 md:order-1">
            <div className="inline-block bg-indigo-100 text-indigo-800 text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 rounded-full">
              業務効率化
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-[#14213d] leading-snug">
              URL発行からカレンダー登録まで<br className="hidden sm:block"/>
              <span className="text-indigo-600">「ワンクリック」で完結</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Zoom、Google Meet、Microsoft Teamsに対応。
              顧客を選んでボタンを押すだけで、会議URLの発行、案内メールの作成、
              カレンダーへの予定登録、顧客台帳への履歴記録をすべて自動で行います。
            </p>
            <div className="flex gap-2 flex-wrap mt-2">
              <span className="bg-white border border-gray-200 px-2 py-1 rounded text-[10px] sm:text-xs font-bold text-gray-600">Zoom</span>
              <span className="bg-white border border-gray-200 px-2 py-1 rounded text-[10px] sm:text-xs font-bold text-gray-600">Google Meet</span>
              <span className="bg-white border border-gray-200 px-2 py-1 rounded text-[10px] sm:text-xs font-bold text-gray-600">Teams</span>
            </div>
          </div>
          <div className="relative shadow-2xl rounded-xl overflow-hidden border border-gray-200 order-2 md:order-2">
            <img 
              src={images.webMeeting} 
              alt="Web会議発行画面" 
              className="w-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* 4. 機能紹介：コミュニケーション（連携） */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* スマホで見やすいよう、画像を下に配置(order-2)するか、上に配置(order-1)するか統一感を持たせます */}
        <div className="relative shadow-xl rounded-xl overflow-hidden border border-gray-200 group order-2 md:order-1">
          <img 
            src={images.chat} 
            alt="チャット連携画面" 
            className="w-full"
          />
        </div>
        <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
          <div className="inline-block bg-green-100 text-green-800 text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 rounded-full">
            マルチチャネル連携
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-[#14213d] leading-snug">
            メールもチャットも、<br className="hidden sm:block"/>この画面ひとつで繋がる
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Slack、Chatwork、そしてメール。バラバラになりがちなコミュニケーションツールを
            このシステムに集約。顧客ごとにタイムラインでやり取りを追えるため、
            「言った言わない」のトラブルを防ぎます。
          </p>
          <div className="p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <p className="text-[10px] sm:text-xs font-bold text-gray-500 mb-2">連携対応ツール</p>
            <div className="flex gap-3 sm:gap-4 text-xl sm:text-2xl filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
              {/* アイコンの代わりに文字や絵文字で表現 */}
              <span title="Slack" className="text-sm sm:text-base font-bold text-[#14213d]">#️⃣ Slack</span>
              <span title="Chatwork" className="text-sm sm:text-base font-bold text-red-600">🔴 Chatwork</span>
              <span title="Email" className="text-sm sm:text-base font-bold text-blue-600">📧 Email</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. その他の機能 & カスタマイズ（AI・書類など） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-8">
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📄</div>
          <h4 className="font-bold text-[#14213d] mb-1 sm:mb-2 text-sm sm:text-base">書類作成・管理</h4>
          <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
            見積書や請求書をワンクリックでPDF出力。顧客データと連動しているため、入力の手間とミスを削減します。
          </p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🤖</div>
          <h4 className="font-bold text-[#14213d] mb-1 sm:mb-2 text-sm sm:text-base">AI分析・サポート</h4>
          <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
            蓄積されたデータからAIが「成約確度」を予測したり、商談後のネクストアクションを自動提案することも可能です。
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#14213d] to-[#2a406c] p-4 sm:p-6 rounded-xl shadow-md text-white">
          <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🛠️</div>
          <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">完全オーダーメイド開発</h4>
          <p className="text-[10px] sm:text-xs text-gray-300 leading-relaxed">
            「こんな機能が欲しい」にお応えします。貴社の業務フローに合わせて、画面レイアウトから機能まで柔軟に開発いたします。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;