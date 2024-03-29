import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import Header from "../components/Header";
import LoginPage from "./AuthPage";
import BrowsePage from "./BrowsePage";
import { useEffect } from "react";
import { addUser, removeUser } from "../slice/userSice";

export default function Body() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <BrowsePage />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="w-full">
      <Header />
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}
