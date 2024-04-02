import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import Header from "../components/Header";

import { useEffect } from "react";
import { addUser, removeUser } from "../slice/userSice";
import { removeNowPlayingMovies } from "../slice/moviesSlice";

export default function Body() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        dispatch(removeNowPlayingMovies());
        navigate("/auth");
      }
      // return unsubscribe();
    });
  }, []);

  return (
    <div className="w-screen">
      <Header />
      <Outlet></Outlet>
    </div>
  );
}
