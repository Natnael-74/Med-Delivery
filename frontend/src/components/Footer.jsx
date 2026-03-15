import { BsCapsule } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-5">
            <BsCapsule className="text-3xl text-gray-700 transform hover:scale-110 transition-all duration-300" />
            <span className="text-2xl text-gray-700">Med-Delivery</span>
          </Link>
          <p className="text-gray-600 w-full md:w-2/3">
            We are committed to providing you with the best possible experience
            on our website. If you have any questions or concerns, please don't
            hesitate to contact us. Our dedicated customer service team is
            available 24/7 to assist you.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li className="hover:text-gray-950 transition-all duration-300">
              Home
            </li>
            <li className="hover:text-gray-950 transition-all duration-300">
              About Us
            </li>
            <li className="hover:text-gray-950 transition-all duration-300">
              Delivery
            </li>
            <li className="hover:text-gray-950 transition-all duration-300">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li className="hover:text-gray-950 transition-all duration-300">
              +91 1234567890
            </li>
            <li className="hover:text-gray-950 transition-all duration-300">
              med-delivery@.com
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2026 Med-Delivery.com. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
