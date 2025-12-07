import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header: React.FC = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="backdrop-blur-md bg-white/70 shadow-sm sticky top-0 z-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            className="w-28 cursor-pointer hover:scale-105 transition-transform duration-300"
            src={LOGO_URL}
            alt="App Logo"
          />
        </Link>

        <ul className="flex items-center gap-8 text-gray-700 font-medium">
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
      </div>
    </div>
  );
};

export default Header;
