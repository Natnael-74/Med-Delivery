import { RiExchangeLine } from "react-icons/ri";
import { RiCustomerServiceFill } from "react-icons/ri";
import { PiNumberCircleSeven } from "react-icons/pi";
import Title from "./Title";

function OurPolicy() {
  return (
    <div className="my-20">
      <div className="text-center py-8 text-3xl">
        <Title title="OUR" subTitle="POLICY" />
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
          <div className="hover:shadow-md p-10 transition-all duration-300  md:w-1/4 ">
            <RiExchangeLine className="text-3xl w-12 m-auto mb-5" />
            <p className="font-semibold text-xl mb-3">Easy Exchange Policy</p>
            <p className="text-gray-400">
              We offer a hassle-free exchange policy for our products.
            </p>
          </div>

          <div className="hover:shadow-md p-10 transition-all duration-300  md:w-1/4 ">
            <PiNumberCircleSeven className="text-3xl w-12 m-auto mb-5" />
            <p className="font-semibold text-xl mb-3">7 Days Money Back </p>
            <p className="text-gray-400">
              We provide a 7-day free return policy guarantee.
            </p>
          </div>

          <div className="hover:shadow-md p-10 transition-all duration-300  md:w-1/4 ">
            <RiCustomerServiceFill className="text-3xl w-12 m-auto mb-5" />
            <p className="font-semibold text-xl mb-3">Best Customer Service</p>
            <p className="text-gray-400">
              Our dedicated customer service team is 24/7 available to assist
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPolicy;
