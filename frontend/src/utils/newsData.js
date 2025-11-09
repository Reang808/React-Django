// ニュース記事のダミーデータ
export const newsArticles = [
  {
    id: 1,
    title: "Instagram始めました！",
    date: "2024-11-01",
    image: "/images/Instagram.png",
    excerpt: "日々の活動の裏側を公開しています。開発中の様子、学習記録、技術の備忘録など、リアルな情報をお届けします。",
    content: `
      <div class="prose max-w-none">
        <p>この度、Reang（リアング）のInstagramアカウントを開設しました！🎉</p>
        
        <h2>投稿内容について</h2>
        <p>日々の開発作業の裏側や学習記録を中心に、以下のような内容を投稿していきます：</p>
        
        <ul>
          <li>開発中のコーディング風景</li>
          <li>新しい技術の学習記録</li>
          <li>プロジェクトの進捗状況</li>
          <li>技術的な備忘録やTips</li>
          <li>開発環境や使用ツールの紹介</li>
        </ul>
        
        <p>普段のWebサイトでは見ることができない、リアルな開発現場の様子をお届けします。</p>
        
        <h2>フォローのお願い</h2>
        <p>ぜひフォローしていただき、一緒にReangの成長を見守っていただけると嬉しいです！</p>
        
        <p><a href="https://www.instagram.com/reang_develop/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">@reang_develop</a></p>
      </div>
    `,
    slug: "instagram-started",
    category: "お知らせ"
  },
  {
    id: 2,
    title: "React + Django プロジェクトの構築方法",
    date: "2024-10-28",
    image: "/images/coding-photo.jpg",
    excerpt: "ReactとDjangoを組み合わせたフルスタック開発の基本的な構築方法について解説します。",
    content: `
      <div class="prose max-w-none">
        <p>ReactとDjangoを組み合わせたフルスタック開発は、モダンなWebアプリケーション開発において非常に強力な組み合わせです。</p>
        
        <h2>なぜReact + Djangoなのか</h2>
        <p>この組み合わせが選ばれる理由：</p>
        
        <ul>
          <li>Reactの豊富なエコシステムとコンポーネント指向</li>
          <li>DjangoのORMと管理画面の強力さ</li>
          <li>Django REST frameworkによるAPI開発の簡単さ</li>
          <li>両方ともアクティブなコミュニティを持つ</li>
        </ul>
        
        <h2>基本的な構成</h2>
        <p>一般的なプロジェクト構成は以下のようになります：</p>
        
        <pre><code>project/
├── backend/          # Djangoプロジェクト
│   ├── manage.py
│   ├── requirements.txt
│   └── apps/
└── frontend/         # Reactプロジェクト
    ├── package.json
    ├── src/
    └── public/
        </code></pre>
        
        <h2>開発環境のセットアップ</h2>
        <p>効率的な開発のため、以下のような環境構築をお勧めします：</p>
        
        <ul>
          <li>バックエンド: Python仮想環境 + Django</li>
          <li>フロントエンド: Node.js + Vite</li>
          <li>API通信: Axios</li>
          <li>スタイリング: Tailwind CSS</li>
        </ul>
      </div>
    `,
    slug: "react-django-setup",
    category: "技術"
  },
  {
    id: 3,
    title: "DX支援サービスを開始しました",
    date: "2024-10-25",
    image: "/images/profile.png",
    excerpt: "中小企業や個人事業主向けのDX（デジタルトランスフォーメーション）支援サービスを正式に開始いたします。",
    content: `
      <div class="prose max-w-none">
        <p>この度、Reangでは中小企業や個人事業主の皆様向けのDX支援サービスを正式に開始いたします。</p>
        
        <h2>DX支援サービスとは</h2>
        <p>デジタル技術を活用して、ビジネスプロセスの改善や効率化を支援するサービスです。</p>
        
        <h2>提供するサービス内容</h2>
        <ul>
          <li><strong>業務効率化システムの開発</strong> - 日常業務を自動化・効率化</li>
          <li><strong>データ分析・可視化</strong> - ビジネスデータの分析とレポート作成</li>
          <li><strong>Webサイト・アプリケーション開発</strong> - オンライン展開の支援</li>
          <li><strong>既存システムの改善・移行</strong> - レガシーシステムの現代化</li>
          <li><strong>ITコンサルティング</strong> - 技術選定から運用まで総合的にサポート</li>
        </ul>
        
        <h2>対象となるお客様</h2>
        <p>以下のような課題をお持ちの企業様に特におすすめです：</p>
        
        <ul>
          <li>手作業が多く、業務効率を改善したい</li>
          <li>データを活用してビジネスを改善したい</li>
          <li>オンラインでの事業展開を検討している</li>
          <li>古いシステムを新しくしたい</li>
          <li>IT導入を検討しているが、何から始めれば良いかわからない</li>
        </ul>
        
        <h2>お問い合わせ</h2>
        <p>DX支援に関するご相談・お見積りは、お気軽にお問い合わせフォームからご連絡ください。</p>
      </div>
    `,
    slug: "dx-service-started",
    category: "サービス"
  },
  {
    id: 4,
    title: "Tailwind CSSを使ったレスポンシブデザインのコツ",
    date: "2024-10-20",
    image: "/images/coding-photo.jpg",
    excerpt: "Tailwind CSSを活用して効率的にレスポンシブデザインを実装するためのテクニックをご紹介します。",
    content: `
      <div class="prose max-w-none">
        <p>Tailwind CSSは、ユーティリティファーストのCSSフレームワークとして、迅速なレスポンシブデザインの構築を可能にします。</p>
        
        <h2>レスポンシブ設計の基本原則</h2>
        <p>Tailwind CSSでは、以下のブレークポイントが標準で用意されています：</p>
        
        <ul>
          <li><code>sm:</code> - 640px以上</li>
          <li><code>md:</code> - 768px以上</li>
          <li><code>lg:</code> - 1024px以上</li>
          <li><code>xl:</code> - 1280px以上</li>
          <li><code>2xl:</code> - 1536px以上</li>
        </ul>
        
        <h2>実践的なテクニック</h2>
        
        <h3>1. Flexboxの活用</h3>
        <pre><code>&lt;div class="flex flex-col md:flex-row gap-4"&gt;
  &lt;div class="flex-1"&gt;コンテンツ1&lt;/div&gt;
  &lt;div class="flex-1"&gt;コンテンツ2&lt;/div&gt;
&lt;/div&gt;</code></pre>
        
        <h3>2. グリッドシステム</h3>
        <pre><code>&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
  &lt;div&gt;アイテム1&lt;/div&gt;
  &lt;div&gt;アイテム2&lt;/div&gt;
  &lt;div&gt;アイテム3&lt;/div&gt;
&lt;/div&gt;</code></pre>
        
        <h3>3. テキストサイズの調整</h3>
        <pre><code>&lt;h1 class="text-2xl md:text-4xl lg:text-5xl font-bold"&gt;
  レスポンシブなタイトル
&lt;/h1&gt;</code></pre>
        
        <h2>パフォーマンスの最適化</h2>
        <p>Tailwind CSSを使用する際のパフォーマンス最適化のポイント：</p>
        
        <ul>
          <li>PurgeCSS（現在はJIT）を活用して未使用のクラスを削除</li>
          <li>コンポーネント化により重複を削減</li>
          <li>カスタムブレークポイントの適切な設定</li>
        </ul>
      </div>
    `,
    slug: "tailwind-responsive-tips",
    category: "技術"
  },
  {
    id: 5,
    title: "新しいプロジェクトを開始します",
    date: "2024-10-15",
    image: "/images/IMG_1338.jpg",
    excerpt: "地域の中小企業向けの業務管理システムの開発プロジェクトを開始いたします。",
    content: `
      <div class="prose max-w-none">
        <p>この度、地域の中小企業様向けの業務管理システム開発プロジェクトを開始することになりました。</p>
        
        <h2>プロジェクト概要</h2>
        <p>今回開発するシステムは、以下の機能を持つ総合的な業務管理システムです：</p>
        
        <ul>
          <li>顧客管理システム</li>
          <li>売上・請求管理</li>
          <li>在庫管理</li>
          <li>スタッフスケジュール管理</li>
          <li>レポート機能</li>
        </ul>
        
        <h2>使用技術</h2>
        <p>このプロジェクトでは、以下の技術スタックを採用します：</p>
        
        <ul>
          <li><strong>フロントエンド:</strong> React + TypeScript + Tailwind CSS</li>
          <li><strong>バックエンド:</strong> Django + Django REST Framework</li>
          <li><strong>データベース:</strong> PostgreSQL</li>
          <li><strong>インフラ:</strong> AWS (EC2, RDS, S3)</li>
        </ul>
        
        <h2>プロジェクトの特徴</h2>
        <p>このシステムの特徴は、中小企業の実際のワークフローに合わせてカスタマイズされていることです。</p>
        
        <p>一般的なSaaSとは異なり、お客様の業務フローに完全に適合するよう設計されています。</p>
        
        <h2>今後のスケジュール</h2>
        <ul>
          <li>要件定義・設計: 10月〜11月</li>
          <li>開発フェーズ1: 12月〜1月</li>
          <li>テスト・調整: 2月</li>
          <li>リリース・運用開始: 3月予定</li>
        </ul>
        
        <p>プロジェクトの進捗については、随時こちらのブログやInstagramで報告していきます。</p>
      </div>
    `,
    slug: "new-project-announcement",
    category: "お知らせ"
  }
];

// 最新の記事を取得する関数
export const getLatestNews = (count = 3) => {
  return newsArticles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

// IDで記事を取得する関数
export const getNewsById = (id) => {
  return newsArticles.find(article => article.id === parseInt(id));
};

// スラッグで記事を取得する関数
export const getNewsBySlug = (slug) => {
  return newsArticles.find(article => article.slug === slug);
};

// カテゴリーで記事をフィルタリングする関数
export const getNewsByCategory = (category) => {
  if (!category) return newsArticles;
  return newsArticles.filter(article => article.category === category);
};

// 日付をフォーマットする関数
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};