import { useState } from "react";
export default function LoginForm() {
  const [isSignIn, setIsSignIn] = useState(true);

  function handleSignUp() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className="login-form bg-transparent m-2">
      <h1 className=" text-3xl text-white font-medium p-6">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      <form className="flex flex-col">
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 bg-transparent"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-transparent"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-transparent"
        ></input>
        <button
          type="submit"
          className="p-4 m-4 bg-red-600 text-white rounded-xl"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>

      {isSignIn ? (
        <div onClick={handleSignUp} className=" cursor-pointer">
          {" "}
          <p className="text-white m-5">New to Netflix? Sign up here</p>{" "}
        </div>
      ) : (
        <div onClick={handleSignUp} className=" cursor-pointer">
          {" "}
          <p className="text-white m-5">Already a member? Sign in here</p>{" "}
        </div>
      )}
    </div>
  );
}
