import React, { useState, useEffect, useRef } from "react";
import { newsAPI, formatDate, transformArticleData } from "../services/newsAPI";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hero animation refs
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // IntersectionObserver for Hero section
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (e.target === heroRef.current) setHeroVisible(true);
            if (e.target === titleRef.current) setTitleVisible(true);
            if (e.target === textRef.current) setTextVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) obs.observe(heroRef.current);
    if (titleRef.current) obs.observe(titleRef.current);
    if (textRef.current) obs.observe(textRef.current);

    return () => {
      if (heroRef.current) obs.unobserve(heroRef.current);
      if (titleRef.current) obs.unobserve(titleRef.current);
      if (textRef.current) obs.unobserve(textRef.current);
    };
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await newsAPI.getCategories();
        setCategories(response.results || response);
      } catch (err) {
        console.error("カテゴリー取得エラー:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch articles
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await newsAPI.getArticles({
          category: selectedCategory,
        });

        const transformedArticles = response.results
          ? response.results.map(transformArticleData)
          : response.map(transformArticleData);

        setArticles(transformedArticles);
      } catch (err) {
        console.error("記事取得エラー:", err);
        setError("記事の取得に失敗しました");
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [selectedCategory]);

  return (
    <div className="text-neutral-900 font-sans bg-white">

      {/* --------------------------------------------------------------- */}
      {/* ① Hero Section（他ページと完全統一） */}
      {/* --------------------------------------------------------------- */}
      <section
        ref={heroRef}
        className="relative py-24 text-center text-[#14213d] overflow-hidden"
      >
        <img
          src="/images/bghero.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/20 z-10"></div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 transition-all duration-1000 ease-out">
          <h1
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            News
          </h1>

          <p
            ref={textRef}
            className={`text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            お知らせ・サービスアップデート・技術記事など、最新情報をお届けします。
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* ② Category Tabs（About/Service と同じUIに統一） */}
      {/* --------------------------------------------------------------- */}
      <div className="w-full flex justify-center mt-12">
        <div className="flex bg-gray-100 rounded-full p-2 shadow-inner gap-2 flex-wrap">

          <button
            onClick={() => setSelectedCategory("")}
            className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
              selectedCategory === ""
                ? "bg-[#14213d] text-white shadow"
                : "text-gray-600 hover:text-[#14213d]"
            }`}
          >
            すべて
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                selectedCategory === cat.slug
                  ? "bg-[#14213d] text-white shadow"
                  : "text-gray-600 hover:text-[#14213d]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* ③ Article List */}
      {/* --------------------------------------------------------------- */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">

          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#14213d]"></div>
              <p className="mt-4 text-gray-600">記事を読み込み中...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              該当する記事が見つかりませんでした。
            </div>
          ) : (
            <div className="space-y-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex gap-6">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-40 h-28 object-cover rounded-md"
                    />

                    <div className="flex-1">
                      <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
                        {article.category}
                      </span>

                      <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        <a
                          href={`/news/${article.slug}`}
                          className="hover:text-[#48b6e8]"
                        >
                          {article.title}
                        </a>
                      </h2>

                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {formatDate(article.date)}
                        </span>
                        <a
                          href={`/news/${article.slug}`}
                          className="text-[#14213d] hover:text-[#48b6e8] font-medium text-sm flex items-center"
                        >
                          続きを読む
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;