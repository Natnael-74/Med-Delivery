import { Link } from "react-router-dom";
import { BsCapsule } from "react-icons/bs";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 w-[max(10%, 80px)]">
      <BsCapsule className="text-3xl text-gray-700 transform hover:scale-110 transition-all duration-300" />
      <span className="text-2xl text-gray-700">Med-Delivery Admin</span>
    </Link>
  );
}

export default Logo;
