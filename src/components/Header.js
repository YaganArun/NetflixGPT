import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import caretUp from "../assets/caret-up.svg";
import { url } from "../utils/constants";

function LoggedInHeader() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [onDropDownMenu, setOnDropDownMenu] = useState(false);
  const currentOnDropMenu = useRef(null);

  useEffect(() => {
    currentOnDropMenu.current = onDropDownMenu;
  }, [onDropDownMenu]);

  return (
    <div className="flex justify-around items-center bg-black sm: w-screen">
      <img className="w-44" src={url.logo} alt="background" />
      <div className="felx flex-col">
        <div
          className="flex items-center mx-4 cursor-pointer relative"
          onMouseEnter={() => {
            setIsCollapsed(true);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              if (!currentOnDropMenu.current) setIsCollapsed(false);
            }, 500);
          }}
        >
          <img
            className="profile-icon w-10 h-10 rounded-lg m-4"
            src={url.profileIcon}
            alt="profile icon"
          ></img>
          <img
            className={
              isCollapsed
                ? "w-6 h-6 rotate-0 transition duration-400"
                : "w-6 h-6 rotate-180 transition duration-400"
            }
            src={caretUp}
            alt="logo"
          ></img>
        </div>
        {isCollapsed && (
          <div
            className="drop-down-menu mx-auto box-border mt-2 p-4 bg-black absolute opacity-50 sm:w-[20%]"
            onMouseEnter={() => {
              setOnDropDownMenu(true);
            }}
            onMouseLeave={() => {
              console.log("left drop down menu");
              setOnDropDownMenu(false);
              setIsCollapsed(false);
            }}
          >
            <h1 className="p-6 text-white font-thin cursor-pointer hover:underline">
              Manage Profiles
            </h1>
            <h1 className="p-6 text-white font-thin cursor-pointer hover:underline">
              Account
            </h1>
            <h1 className="p-6 text-white font-thin cursor-pointer hover:underline">
              Help center
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

function AuthHeader() {
  return (
    <div className="flex justify-center sm:bg-gradient-to-b from-black absolute z-10 w-screen">
      <img className="w-44" src={url.logo} alt="background" />
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
