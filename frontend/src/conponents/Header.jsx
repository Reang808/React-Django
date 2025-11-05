import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/reang.jpg"; // ← ロゴ画像（あとで置き換え）

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Service" },
    { to: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* ロゴ */}
        <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <img src={logo} alt="Reang Logo" className="h-8 w-auto" />
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-gray-600 hover:text-indigo-600 transition ${
                  isActive ? "border-b-2 border-indigo-600 pb-1" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ハンバーガーボタン（モバイル用） */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1 focus:outline-none"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden z-50 ${
          isMenuOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 text-brand-primary hover:bg-gray-50 hover:text-brand-secondary transition ${
                  isActive ? "bg-indigo-50 text-brand-secondary border-r-4 border-gray-200" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;