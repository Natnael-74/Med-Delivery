import { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } = useShop();

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/collection") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="outline-none flex-1 bg-inherit text-sm"
        />
        <IoIosSearch className="text-2xl  text-gray-600 cursor-pointer" />
      </div>
      <RxCross2
        onClick={() => setShowSearch(false)}
        className="inline text-2xl cursor-pointer"
      />
    </div>
  ) : null;
}

export default SearchBar;
