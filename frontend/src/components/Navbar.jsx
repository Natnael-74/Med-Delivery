import { Link, NavLink } from "react-router-dom";
import { BsCapsule } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { LiaUserCogSolid } from "react-icons/lia";
import { PiShoppingCartLight } from "react-icons/pi";
import { TbMenuDeep } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { setShowSearch, getCartCount, cart } = useShop();

  useEffect(() => {
    setCartCount(getCartCount());
  }, [cart, getCartCount]);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/" className="flex items-center gap-2">
        <BsCapsule className="text-3xl text-gray-700 transform hover:scale-110 transition-all duration-300" />
        <span className="text-2xl text-gray-700">Med-Delivery</span>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-800 ">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 transition-all duration-300 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300"
        >
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 transition-all duration-300 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 transition-all duration-300 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 transition-all duration-300 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <IoIosSearch
          className="text-2xl cursor-pointer"
          onClick={() => setShowSearch(true)}
        />

        <div className="group relative">
          <LiaUserCogSolid className="text-2xl cursor-pointer" />
          <div className="absolute pt-4 right-0 hidden group-hover:block dropdown-menu">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-500 rounded-xl shadow-lg">
              <p className="text-gray-700 text-sm cursor-pointer hover:text-black hover:transform hover:scale-105 transition-all duration-300">
                My Profile
              </p>
              <p className="text-gray-700 text-sm cursor-pointer hover:text-black hover:transform hover:scale-105 transition-all duration-300">
                Orders
              </p>
              <p className="text-gray-700 text-sm cursor-pointer hover:text-black hover:transform hover:scale-105 transition-all duration-300">
                Logout
              </p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <PiShoppingCartLight className="text-2xl font-bolder cursor-pointer w-5 min-w-5" />
          <span className="absolute bottom-[-5px] right-[-7px] w-4 text-center leading-4 bg-black font-semibold text-white aspect-square rounded-full text-[8px]">
            {cartCount}
          </span>
        </Link>
        <TbMenuDeep
          onClick={() => setIsVisible(true)}
          className="text-2xl cursor-pointer text-gray-900 hover:transform hover:scale-110 active:scale-110 transition-all duration-300 sm:hidden"
        />
      </div>

      {/* Mobile Menu */}

      <div
        className={`sm:hidden absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out ${
          isVisible ? "w-full" : "w-0"
        }
            }`}
      >
        <div className="flex flex-col text-gray-700 transform ease-in-out transition-all duration-300">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer hover:text-gray-900 hover:transform hover:scale-110 transition-all duration-300s"
            onClick={() => setIsVisible(false)}
          >
            <IoIosArrowRoundBack className="font-bolder text-2xl cursor-pointer text-gray-900 hover:text-gray-900 " />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-2 pl-6 border-b border-gray-200 hover:text-gray-900 hover:shadow-xl transition-all duration-300"
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setIsVisible(false)}
            className="py-2 pl-6 border-b border-gray-200  hover:text-gray-900 hover:shadow-xl transition-all duration-300"
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsVisible(false)}
            className="py-2 pl-6 border-b border-gray-200  hover:text-gray-900 hover:shadow-xl transition-all duration-300"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsVisible(false)}
            className="py-2 pl-6 border-b border-gray-200  hover:text-gray-900 hover:shadow-xl transition-all duration-300"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
