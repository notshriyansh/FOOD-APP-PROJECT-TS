import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <header className="backdrop-blur-md bg-white/70 shadow-sm sticky top-0 z-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img
              className="w-28 cursor-pointer hover:scale-105 transition-transform duration-300"
              src={LOGO_URL}
              alt="App Logo"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
              <span className="font-semibold">Status:</span>
              {onlineStatus ? "🟢" : "🔴"}
            </li>

            {["Home", "Contact", "About"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "")}`
                  }
                  className="relative hover:text-red-500 transition group"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}

            <li className="hover:text-red-500 transition cursor-pointer relative">
              Cart
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                0
              </span>
            </li>

            <button
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white shadow hover:shadow-lg hover:scale-[1.03] transition-all"
              onClick={() =>
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact}
            </button>
          </ul>

          <button
            className="md:hidden active:scale-95 transition"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-40
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:scale-90 transition"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="p-4 flex flex-col gap-6 text-gray-700 text-lg font-medium">
          <li className="flex items-center gap-2">
            <span>Status:</span>
            <span>{onlineStatus ? "🟢" : "🔴"}</span>
          </li>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <li className="relative">
            Cart
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </li>

          <button
            className="px-5 py-2 mt-4 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white shadow hover:shadow-lg transition"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              setMenuOpen(false);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </>
  );
};

export default Header;
