import React, { useEffect, useState, useRef } from "react";
import { newsAPI, formatDate, transformArticleData } from "../../services/newsAPI";

const TopNews = () => {
  const sectionRef = useRef(null);
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAnim(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(false);

  // アニメーション ON
  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
  }, []);

  // 最新記事 3件を取得
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const response = await newsAPI.getArticles({ limit: 3 });
        const data = response.results
          ? response.results.map(transformArticleData)
          : response.map(transformArticleData);
        setArticles(data.slice(0, 3)); // 念のため3件に絞る
      } catch (err) {
        console.error("ニュース取得エラー:", err);
      }
    };

    fetchLatest();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full flex flex-col items-center py-10 transition-all duration-700 ease-out ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className={`text-3xl font-bold mb-6 transition-all duration-700 ease-out ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>最新ニュース</h2>
      <p className={`text-gray-600 mb-10 text-center max-w-2xl transition-all duration-700 ease-out delay-200 ${showAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        お知らせ・サービス更新・技術記事など最新情報をお届けします。
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {articles.map((article, index) => (
          <a
            key={article.id}
            href={`/news/${article.slug}`}
            className={`bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${200 + index * 150}ms` }}
          >
            {/* 画像 */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover"
            />

            {/* 内容 */}
            <div className="p-5">
              <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mb-3">
                {article.category}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {article.excerpt}
              </p>

              <span className="text-xs text-gray-500">
                {formatDate(article.date)}
              </span>
            </div>
          </a>
        ))}
      </div>

      <a
        href="/news"
        className="mt-10 inline-block bg-[#14213d] text-white px-6 py-3 rounded-md shadow hover:bg-[#48b6e8] transition-all"
      >
        ニュース一覧を見る
      </a>
    </div>
  );
};

export default TopNews;