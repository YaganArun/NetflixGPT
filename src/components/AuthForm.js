import { useRef, useState } from "react";
export default function LoginForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleSignUp() {
    setIsSignIn(!isSignIn);
    setIsValidEmail(true);
    setIsValidPassword(true);
  }

  function validateName() {
    const isValid =
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
        name.current.value
      );
    if (!isValid) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  }

  function validateEmail() {
    const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
      email.current.value
    );
    if (!isValid) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  }

  function validatePassword() {
    const isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password.current.value
    );
    if (!isValid) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
  }

  return (
    <div className="login-form bg-transparent m-2">
      <h1 className=" text-3xl text-white font-medium p-6">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      <form className="flex flex-col">
        {!isSignIn && (
          <div className="flex flex-col flex-1">
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 m-2 bg-transparent text-white border border-white rounded-lg "
              onBlur={validateName}
            ></input>
            {!isValidName && (
              <div className="flex justify-start m-2">
                <p className=" text-red-700">Please enter a valid full name</p>
              </div>
            )}
          </div>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-transparent text-white border border-white rounded-lg"
          onBlur={validateEmail}
        ></input>
        {!isValidEmail && (
          <div className="flex justify-start m-2">
            <p className=" text-red-700">Please enter a valid email address</p>
          </div>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-transparent text-white border border-white rounded-lg"
          onBlur={validatePassword}
        ></input>
        {!isValidPassword && (
          <div className="flex justify-start m-2">
            <p className=" text-red-700">
              Your password must contain between 4 and 60 characters.
            </p>
          </div>
        )}
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
