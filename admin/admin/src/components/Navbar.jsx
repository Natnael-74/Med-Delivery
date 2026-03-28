import Logo from "./Logo";

function Navbar() {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <Logo />
      <button className="bg-gray-600 text-white px-5 py-2 md:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition-all duration-300 cursor-pointer">
        LOGOUT
      </button>
    </div>
  );
}

export default Navbar;
