import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { validateData } from "../utils/utils";
export default function LoginForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);

  function handleAuthentication() {
    const isValid = validateData(
      nameRef?.current?.value,
      emailRef.current.value,
      passwordRef.current.value
    );
    if (isSignIn) {
      if (isValid.email && isValid.password) {
        //api call for sign in
        signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " " + errorMessage);
          });
      } else {
        validateEmail();
        validatePassword();
      }
    } else {
      if (isValid.name && isValid.email && isValid.password) {
        //api call for sign in
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + " " + errorMessage);
          });
      } else {
        validateName();
        validateEmail();
        validatePassword();
      }
    }
  }

  function handleSignUp() {
    formRef.current.reset();
    setIsSignIn(!isSignIn);
    setIsValidName(true);
    setIsValidEmail(true);
    setIsValidPassword(true);
  }

  function validateName() {
    const isValid = validateData(nameRef.current.value, null, null);
    if (!isValid.name) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  }

  function validateEmail() {
    const isValid = validateData(null, emailRef.current.value, null);
    if (!isValid.email) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  }

  function validatePassword() {
    const isValid = validateData(null, null, passwordRef.current.value);
    if (!isValid.password) {
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
      <form
        onSubmit={(e) => e.preventDefault()}
        ref={formRef}
        className="flex flex-col"
      >
        {!isSignIn && (
          <div className="flex flex-col flex-1">
            <input
              ref={nameRef}
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
          ref={emailRef}
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
          ref={passwordRef}
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
          onClick={handleAuthentication}
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
