import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import caretUp from "../assets/caret-up.svg";
import { URL } from "../utils/constants";
import { Link } from "react-router-dom";

function LoggedInHeader() {
  const [isOnCaret, setisOnCaret] = useState(false);
  const [isOnDropDownMenu, setIsOnDropDownMenu] = useState(false);
  const isOnDropDownMenuRef = useRef(null);

  useEffect(() => {
    isOnDropDownMenuRef.current = isOnDropDownMenu;
  }, [isOnDropDownMenu]);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="flex justify-around items-center absolute z-10 bg-black  sm: w-screen">
      <img className="w-[10%]" src={URL.logo} alt="background" />
      <div className="flex-col">
        <div
          className="flex items-center mx-4 cursor-pointer relative"
          onMouseEnter={() => {
            setisOnCaret(true);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              if (!isOnDropDownMenuRef.current) setisOnCaret(false);
            }, 100);
          }}
        >
          <img
            className="profile-icon w-10 h-10 rounded-lg m-4"
            src={URL.profileIcon}
            alt="profile icon"
          ></img>
          <img
            className={
              isOnCaret
                ? "w-6 h-6 rotate-0 transition duration-700"
                : "w-6 h-6 rotate-180 transition duration-700"
            }
            src={caretUp}
            alt="logo"
          ></img>
        </div>
        {isOnCaret && (
          <div
            className={`drop-down-menu mx-auto box-border mt-2 p-4 bg-black absolute transition-opacity ease-in-out duration-700 ${
              isOnCaret ? "opacity-80" : "opacity-0"
            } sm:w-[20%]`}
            onMouseEnter={() => {
              setIsOnDropDownMenu(true);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsOnDropDownMenu(false);
                setisOnCaret(false);
              }, 300);
            }}
          >
            <h1 className="p-6 text-white font-thin cursor-pointer hover:underline">
              Manage Profiles
            </h1>
            <h1 className="p-6 text-white font-thin cursor-pointer hover:underline">
              <Link to="account">Account</Link>
            </h1>
            <h1 className="p-6 text-white font-thin cursor-pointer hover:underline">
              Help center
            </h1>
            <div onClick={handleSignOut}>
              <h1 className="p-6 text-white font-thin cursor-pointer hover:underline">
                Sign Of
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AuthHeader() {
  return (
    <div className="flex justify-around sm:bg-gradient-to-b from-black absolute z-10 w-screen">
      <img className="w-44" src={URL.logo} alt="background" />
    </div>
  );
}

export default function Header() {
  const user = useSelector((store) => store.user);
  if (user.isLoggedIn) {
    return <LoggedInHeader />;
  } else {
    return <AuthHeader />;
  }
}
