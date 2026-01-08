import React from "react";

const StockSystemFlow = () => {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 py-8 sm:py-12 space-y-10 sm:space-y-16 font-sans text-gray-800">
      
      {/* 1. ヒーローセクション */}
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#14213d] leading-tight">
          受注から請求発行まで、<br />
          <span className="text-[#fca311]">もう迷わない、ミスしない。</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
          「在庫引当忘れ」や「請求漏れ」といった人為的ミスをシステムが防ぎます。
          モノとカネの流れをリアルタイムに連動させ、バックオフィス業務を劇的に効率化します。
        </p>
      </div>

      {/* 2. 課題と解決 (Before/After) */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-stretch">
        {/* Before */}
        <div className="bg-gray-100 rounded-xl p-5 sm:p-8 border border-gray-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl">😫</span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-700">これまでの課題</h3>
          </div>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-red-500 font-bold mt-0.5">×</span>
              <span>「在庫ある？」と倉庫へ確認に行く手間</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-red-500 font-bold mt-0.5">×</span>
              <span>Excelへの転記ミスで請求額がズレる</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-red-500 font-bold mt-0.5">×</span>
              <span>出荷したのに請求書を出し忘れる</span>
            </li>
          </ul>
        </div>

        {/* After */}
        <div className="bg-white rounded-xl p-5 sm:p-8 border-2 border-[#fca311] shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#fca311] text-[#14213d] text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1">
            SOLUTION
          </div>
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl">✨</span>
            <h3 className="text-lg sm:text-xl font-bold text-[#14213d]">システム導入後</h3>
          </div>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[#fca311] font-bold mt-0.5">✔</span>
              <span className="font-bold">受注と同時に在庫を自動引当・確保</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[#fca311] font-bold mt-0.5">✔</span>
              <span className="font-bold">出荷実績からワンクリックで請求書作成</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[#fca311] font-bold mt-0.5">✔</span>
              <span className="font-bold">アラート機能で発注点割れを即座に通知</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. 具体的な業務フロー (画像付き) */}
      <div className="space-y-8 sm:space-y-12">
        <h3 className="text-lg sm:text-2xl font-bold text-center text-[#14213d] mb-4 sm:mb-8">
          実際の画面で見る、業務の流れ
        </h3>

        {/* STEP 1: 受注管理 */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 group">
          <div className="md:w-1/2 space-y-2 sm:space-y-4">
            <div className="inline-block bg-[#14213d] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
              STEP 01
            </div>
            <h4 className="text-lg sm:text-2xl font-bold text-gray-800">
              ステータスが一目でわかる<br className="sm:hidden" />「受注管理」
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              電話・FAX・メールなど、あらゆる経路からの注文を一元管理。
              「未処理」「出荷準備中」「出荷済」などのステータスが色分けされ、
              対応漏れを防ぎます。
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img 
              src="/images/2026-01-07 21.16の画像.png" 
              alt="受注管理一覧画面" 
              className="rounded-lg shadow-xl border border-gray-200 w-full transition-transform transform group-hover:scale-105 duration-300"
            />
          </div>
        </div>

        {/* 矢印 (SPは非表示) */}
        <div className="hidden md:flex justify-center">
          <div className="h-12 w-0.5 bg-gray-300"></div>
        </div>

        {/* STEP 2: 在庫管理 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-8 group">
          <div className="md:w-1/2 space-y-2 sm:space-y-4">
            <div className="inline-block bg-[#14213d] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
              STEP 02
            </div>
            <h4 className="text-lg sm:text-2xl font-bold text-gray-800">
              適正数をキープする<br className="sm:hidden" />「在庫管理」
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              受注データに基づいて、在庫数はリアルタイムに変動します。
              安全在庫数を下回ると「危険」「過剰」などのアラートが表示されるため、
              欠品による機会損失を未然に防ぎます。
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img 
              src="/images/2026-01-07 21.17の画像.png" 
              alt="在庫管理画面" 
              className="rounded-lg shadow-xl border border-gray-200 w-full transition-transform transform group-hover:scale-105 duration-300"
            />
          </div>
        </div>

        {/* 矢印 */}
        <div className="hidden md:flex justify-center">
          <div className="h-12 w-0.5 bg-gray-300"></div>
        </div>

        {/* STEP 3: 出荷・納品 */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 group">
          <div className="md:w-1/2 space-y-2 sm:space-y-4">
            <div className="inline-block bg-[#14213d] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
              STEP 03
            </div>
            <h4 className="text-lg sm:text-2xl font-bold text-gray-800">
              現場と連携する<br className="sm:hidden" />「出荷・納品管理」
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              ピッキングの進捗状況（ピッキング中・出荷準備完了など）を可視化。
              倉庫担当者と営業担当者が同じ画面を見ることで、
              「あの荷物、もう出た？」という確認の手間がなくなります。
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img 
              src="/images/2026-01-07 21.18の画像.png" 
              alt="出荷納品管理画面" 
              className="rounded-lg shadow-xl border border-gray-200 w-full transition-transform transform group-hover:scale-105 duration-300"
            />
          </div>
        </div>

         {/* 矢印 */}
         <div className="hidden md:flex justify-center">
          <div className="h-12 w-0.5 bg-gray-300"></div>
        </div>

        {/* STEP 4: 請求書発行 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-8 group">
          <div className="md:w-1/2 space-y-2 sm:space-y-4">
            <div className="inline-block bg-[#fca311] text-[#14213d] px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
              STEP 04 (GOAL)
            </div>
            <h4 className="text-lg sm:text-2xl font-bold text-gray-800">
              自動生成で完了<br className="sm:hidden" />「請求書発行」
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              出荷が確定したデータを選択するだけで、インボイス対応の請求書を自動作成。
              PDF出力はもちろん、そのままメール送付も可能です。
              手入力が不要になるため、金額ミスはゼロになります。
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img 
              src="/images/2026-01-07 21.20の画像.png" 
              alt="請求書プレビュー画面" 
              className="rounded-lg shadow-xl border border-gray-200 w-full transition-transform transform group-hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockSystemFlow;