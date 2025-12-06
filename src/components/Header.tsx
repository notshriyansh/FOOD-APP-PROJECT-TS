import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header: React.FC = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="shadow-md bg-white sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            className="w-28 cursor-pointer hover:opacity-80 transition"
            src={LOGO_URL}
            alt="App Logo"
          />
        </Link>

        <div className="">
          <ul className="flex items-center gap-8 text-gray-700 font-medium">
            <li className="flex items-center gap-1">
              <span className="font-semibold">Status:</span>
              {onlineStatus ? "🟢" : "🔴"}
            </li>

            <li>
              <Link to="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-red-500 transition">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-red-500 transition">
                About Us
              </Link>
            </li>

            <li className="hover:text-red-500 transition cursor-pointer">
              Cart
            </li>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
              onClick={() =>
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
