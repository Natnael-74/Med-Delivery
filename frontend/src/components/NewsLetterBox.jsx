import { useState } from "react";
import Title from "./Title";

function NewsLetterBox() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="my-18 text-center">
      <div className="text-3xl text-center sm:py-8">
        <Title title="NEWSLETTER" subTitle="SIGNUP" />
      </div>

      <p className="w-3/4 font-medium m-auto text-sm sm:text-sm md:text-base text-gray-600">
        Subscribe to our newsletter to get the latest updates on our products
        and promotions. By subscribing to our newsletter, you agree to receive
        emails from us.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 my-6 w-full sm:w-1/2 mx-auto border pl-3"
      >
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full sm:flex-1 outline-none"
        />
        <button
          type="submit"
          className=" px-10 py-4 cursor-pointer bg-gray-700 text-white hover:bg-gray-900 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
