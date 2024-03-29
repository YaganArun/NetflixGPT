import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useNavigate } from "react-router-dom";

export default function BrowsePage() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  console.log(user);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-thin m-4">
        Hi <span className=" font-bold m-2">{user?.info?.email}</span>Browse
        Page, Soon will be developed 🚀
      </h1>
      <button
        className=" bg-red-600 text-white p-4 rounded-lg hover:bg-red-700"
        onClick={handleSignOut}
      >
        Sign Of
      </button>
    </div>
  );
}
