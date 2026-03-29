import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          to="/add"
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
        >
          <IoAddCircleOutline className="text-gray-700 text-3xl w-5 h-5" />
          <p className="text-gray-700 text-sm hidden md:block">Add Item</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
        >
          <CiCircleList className="text-gray-700 text-3xl w-5 h-5" />
          <p className="text-gray-700 text-sm hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
        >
          <BsBoxSeam className="text-gray-700 text-3xl w-5 h-5" />
          <p className="text-gray-700 text-sm hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
