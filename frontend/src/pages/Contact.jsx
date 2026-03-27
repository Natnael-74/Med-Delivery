import { useState } from "react";
import Title from "../components/Title";
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
        <img className="w-full md:max-w-[480px]" src={image1} alt="medicine" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our store</p>
          <p className="text-gray-500 ">
            54097 Natnael Endale <br />
            Ethiopia, Addis Ababa
          </p>
          <p className="">
            Tel : (251) 11 11 11 11 <br /> Email : 2t5bR@example.com{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
