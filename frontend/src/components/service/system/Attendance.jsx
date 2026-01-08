import React from "react";

// スクリーンショット用画像（配置に合わせて変更）
const images = {
  attendanceList: "/images/attendance_list.png",   // 勤怠一覧
  punch: "/images/punch_screen.png",               // 打刻画面
  summary: "/images/attendance_summary.png",       // 月次集計
  payroll: "/images/payroll_export.png",           // CSV出力
};

const Attendance = () => {
  return (
    <div className="space-y-10 sm:space-y-16 py-8 px-2 sm:px-4">
      {/* 1. ヘッダー */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-3xl font-extrabold text-[#14213d] leading-tight">
          複雑な勤怠集計を、もっとシンプルに
          <br className="hidden sm:block" />
          <span className="text-[#fca311] block sm:inline mt-1 sm:mt-0">多様な働き方に対応する<br className="sm:hidden"/>勤怠管理システム</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
          リモートワーク、フレックスタイム、複雑なシフト管理まで。
          日々の打刻から月次集計、給与計算ソフト連携までを一元化します。
        </p>
      </div>

      {/* 2. 勤怠一覧（メイン画面） */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* スマホ(order-2):画像下 / PC(order-1):画像左 */}
        <div className="relative group order-2 md:order-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#fca311] to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src={images.attendanceList}
            alt="勤怠一覧画面"
            className="relative rounded-xl shadow-xl border border-gray-100 w-full"
          />
        </div>
        {/* スマホ(order-1):テキスト上 / PC(order-2):テキスト右 */}
        <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
          <div className="inline-block bg-yellow-100 text-yellow-800 text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 rounded-full">
            リアルタイム集計
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-[#14213d] leading-snug">
            全社員の勤怠を<br className="hidden sm:block" />ひと目で把握
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            出退勤時刻、労働時間、残業時間、有給消化状況を自動で集計。
            日次・月次・社員別など、用途に応じた表示が可能です。
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-[#fca311] font-bold">✔</span> 残業時間の自動算出
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-[#fca311] font-bold">✔</span> 有給取得状況の可視化
            </li>
          </ul>
        </div>
      </div>

      {/* 3. 打刻機能 */}
      <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="space-y-3 sm:space-y-4 order-1 md:order-1">
            <div className="inline-block bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 rounded-full">
              打刻機能
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-[#14213d] leading-snug">
              スマホ・PCから<br className="hidden sm:block" />
              <span className="text-blue-600">ワンタップ打刻</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              スマートフォン・PCどちらからでも簡単に打刻可能。
              GPS情報を利用した位置確認で、不正打刻を防止します。
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-white border px-2 py-1 rounded text-[10px] sm:text-xs font-bold text-gray-600">
                📱 スマホ対応
              </span>
              <span className="bg-white border px-2 py-1 rounded text-[10px] sm:text-xs font-bold text-gray-600">
                📍 GPS打刻
              </span>
              <span className="bg-white border px-2 py-1 rounded text-[10px] sm:text-xs font-bold text-gray-600">
                ⏱ リアルタイム反映
              </span>
            </div>
          </div>
          <div className="relative shadow-2xl rounded-xl overflow-hidden border border-gray-200 order-2 md:order-2">
            <img
              src={images.punch}
              alt="打刻画面"
              className="w-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* 4. 月次集計 */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* スマホ(order-2):画像下 / PC(order-1):画像左 */}
        <div className="order-2 md:order-1">
          <img
            src={images.summary}
            alt="月次集計画面"
            className="rounded-xl shadow-xl border border-gray-200 w-full"
          />
        </div>
        {/* スマホ(order-1):テキスト上 / PC(order-2):テキスト右 */}
        <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
          <div className="inline-block bg-green-100 text-green-800 text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 rounded-full">
            勤務管理
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-[#14213d] leading-snug">
            月次集計・残業管理も<br className="hidden sm:block" />自動化
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            所定労働時間、残業、深夜勤務などを就業ルールに基づいて自動計算。
            管理者の集計作業を大幅に削減します。
          </p>
        </div>
      </div>

      {/* 5. 給与連携・カスタマイズ
         (コメントアウトされていますが、もし使う場合は以下のクラス設定でスマホ対応されます)
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-8">
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💰</div>
          <h4 className="font-bold text-[#14213d] mb-1 sm:mb-2 text-sm sm:text-base">給与計算ソフト連携</h4>
          <p className="text-[10px] sm:text-xs text-gray-600">
            勤怠データをCSV出力し、各種給与計算ソフトへそのまま連携可能です。
          </p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📄</div>
          <h4 className="font-bold text-[#14213d] mb-1 sm:mb-2 text-sm sm:text-base">CSV・データ出力</h4>
          <p className="text-[10px] sm:text-xs text-gray-600">
            月次勤怠データをワンクリックでエクスポートできます。
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#14213d] to-[#2a406c] p-4 sm:p-6 rounded-xl shadow-md text-white">
          <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🛠️</div>
          <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">完全オーダーメイド対応</h4>
          <p className="text-[10px] sm:text-xs text-gray-300">
            独自の就業規則やシフト形態にも柔軟に対応可能です。
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Attendance;