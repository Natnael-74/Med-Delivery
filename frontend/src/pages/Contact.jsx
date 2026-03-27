import { useState } from "react";
import Title from "../components/Title";

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
        <img className="w-full md:max-w-[480px]" src="" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our store</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
