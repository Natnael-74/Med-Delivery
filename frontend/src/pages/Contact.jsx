import { useState } from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import image1 from "../assets/pill-box-arrangement-still-life.jpg";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div className="text-center text-2xl border-t pt-10">
        <Title title="CONTACT" subTitle="US" />
      </div>
      <div className="flex flex-col my-10 justify-center gap-10 md:flex-row mb-28">
        <img
          className="w-full h-100 object-cover md:max-w-[480px]"
          src={image1}
          alt="medicine"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our store</p>
          <p className="text-gray-500 ">
            54097 Natnael Endale <br />
            Ethiopia, Addis Ababa
          </p>
          <p className="text-gray-500">
            Tel : (251) 11 11 11 11 <br /> Email : 2t5bR@example.com{" "}
          </p>
          <p className="text-gray-600 font-semibold text-xl">
            Careers at Med-Delivery
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black cursor-pointer px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default Contact;
