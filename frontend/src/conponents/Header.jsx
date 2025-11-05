import { Link, NavLink } from "react-router-dom";
import logo from "../assets/reang.jpg"; // ← ロゴ画像（あとで置き換え）

function Header() {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Service" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* ロゴ */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Reang Logo" className="h-8 w-auto" />
        </Link>

        {/* ナビゲーション */}
        <nav className="flex space-x-6">
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
      </div>
    </header>
  );
}

export default Header;