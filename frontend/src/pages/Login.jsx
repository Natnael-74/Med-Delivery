import { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl ">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState == "Sign Up" && (
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full px-3 py-2 border border-gray-800"
        />
      )}
      <input
        type="email"
        placeholder="Email"
        required
        className="w-full px-3 py-2 border border-gray-800"
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="w-full px-3 py-2 border border-gray-800"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer hover:underline">Forgot your password ?</p>
        {currentState == "Log In" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer hover:underline"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Log In")}
            className="cursor-pointer hover:underline"
          >
            Log In
          </p>
        )}
      </div>
      <button
        className="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer"
        type="submit"
      >
        {currentState == "Sign Up" ? "Create Account" : "Log In"}
      </button>
    </form>
  );
}

export default Login;
