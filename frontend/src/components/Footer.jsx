import { Link } from "react-router-dom";
import logo from "../assets/reang.jpg";

function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {/* 左：ロゴ＋会社情報 */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <img src={logo} alt="Reang Logo" className="h-8 w-auto" />
          </div>
          
          <p className="text-sm leading-relaxed mb-6">
            代表：後藤田 烈志<br />
            所在地：〒730-0017 <br />広島県広島市中区鉄炮町8-24 <br></br>にしたやビル 704<br />
            メールアドレス：info@reang.jp<br />
          </p>
          
          {/* ソーシャルメディアアイコン */}
          <div className="flex space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/780813908451391"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Facebook"
            >
              <img 
                src="/images/Facebook.png" 
                alt="Facebook" 
                className="w-6 h-6 object-contain"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/reang_develop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <img 
                src="/images/Instagram.png" 
                alt="Instagram" 
                className="w-6 h-6 object-contain"
              />
            </a>

            {/* LINE */}
            <a
              href="https://linevoom.line.me/user/_dUXiZG-QzYilD8hygKJSa1HU5xfLbnqvpln54bA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 transition-colors duration-200"
              aria-label="LINE"
            >
              <img 
                src="/images/LINE_APP_iOS.png" 
                alt="LINE" 
                className="w-6 h-6 object-contain"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Reang808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="GitHub"
            >
              <img 
                src="/images/github.png" 
                alt="GitHub" 
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>

        {/* 中央：ページリンク */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">ページ</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-900 transition">About</Link></li>
            <li><Link to="/service" className="text-gray-600 hover:text-gray-900 transition">Service</Link></li>
            <li><Link to="/news" className="text-gray-600 hover:text-gray-900 transition">News</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition">Contact</Link></li>
            <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition">プライバシーポリシー</Link></li>
          </ul>
        </div>

        {/* 右：サービス情報 */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">サービス</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600">社内システム</li>
            <li className="text-gray-600">業務アプリ</li>
            <li className="text-gray-600">Webサイト・LP制作</li>
            <li className="text-gray-600">運用・改善サポート</li>
          </ul>
        </div>
       
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2025 Reang. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;