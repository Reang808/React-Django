// APIクライアントの設定
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

class NewsAPI {
  constructor() {
    this.baseURL = `${API_BASE_URL}/news`;
  }

  // 共通のfetch設定
  async fetchWithConfig(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    // デバッグ用ログ
    console.log('API Request:', url);
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors', // CORS明示的に設定
    };
    
    const config = { ...defaultOptions, ...options };
    
    try {
      const response = await fetch(url, config);
      
      console.log('API Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      
      const data = await response.json();
      console.log('API Response data:', data);
      return data;
    } catch (error) {
      console.error('API Error:', {
        url,
        error: error.message,
        stack: error.stack
      });
      throw error;
    }
  }

  // 記事一覧を取得
  async getArticles(params = {}) {
    const searchParams = new URLSearchParams();
    
    // パラメータの構築
    if (params.category) searchParams.append('category', params.category);
    if (params.search) searchParams.append('search', params.search);
    if (params.featured) searchParams.append('featured', params.featured);
    if (params.limit) searchParams.append('limit', params.limit);
    
    const queryString = searchParams.toString();
    const endpoint = `/articles/${queryString ? `?${queryString}` : ''}`;
    
    return await this.fetchWithConfig(endpoint);
  }

  // 記事詳細を取得
  async getArticle(slug) {
    return await this.fetchWithConfig(`/articles/${slug}/`);
  }

  // 注目記事を取得
  async getFeaturedArticles(limit = 3) {
    return await this.fetchWithConfig(`/featured/?limit=${limit}`);
  }

  // 最新記事を取得
  async getLatestArticles(limit = 5) {
    return await this.fetchWithConfig(`/articles/latest/?limit=${limit}`);
  }

  // カテゴリー一覧を取得
  async getCategories() {
    return await this.fetchWithConfig('/categories/');
  }

  // カテゴリー別記事を取得
  async getArticlesByCategory(categorySlug) {
    return await this.fetchWithConfig(`/articles/by_category/?category=${categorySlug}`);
  }
}

// シングルトンインスタンスをエクスポート
export const newsAPI = new NewsAPI();

// 日付フォーマット関数（既存のものと互換性を保つ）
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// APIレスポンスからフロントエンド形式に変換
export const transformArticleData = (apiArticle) => {
  return {
    id: apiArticle.id,
    title: apiArticle.title,
    slug: apiArticle.slug,
    excerpt: apiArticle.excerpt,
    content: apiArticle.content || '', // 詳細ページ用
    image: apiArticle.featured_image_url || '/images/default-news.jpg', // デフォルト画像
    date: apiArticle.published_at,
    category: apiArticle.category?.name || '未分類',
    categorySlug: apiArticle.category?.slug || '',
    isFeatured: apiArticle.is_featured || false,
    metaTitle: apiArticle.meta_title || apiArticle.title,
    metaDescription: apiArticle.meta_description || apiArticle.excerpt,
  };
};