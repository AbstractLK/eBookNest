import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { DropdownLogOut } from "./DropdownLogOut";
import { DropdownLogIn } from "./DropdownLogIn";
import { useCart } from "../context";

export const Header = () => {
  const {cartList} = useCart();
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchSection, setSearchSection] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);


  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:pl-6 md:pr-9 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              eBookNest
            </span>
          </Link>
          <div className="flex items-center space-x-5 relative">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-lg text-gray-700 dark:text-white bi bi-moon-fill"
            ></span>
            <span
              onClick={() => setSearchSection(!searchSection)}
              className="cursor-pointer text-lg text-gray-700 dark:text-white bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white">
              <span className="text-xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setShowMenu(!showMenu)}
              className="bi bi-person-circle cursor-pointer text-xl text-gray-700 dark:text-white"
            ></span>
            {showMenu &&
              (token ? (
                <DropdownLogIn setShowMenu={setShowMenu} />
              ) : (
                <DropdownLogOut setShowMenu={setShowMenu} />
              ))}
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  );
};
