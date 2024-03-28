import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Header from "../components/Header";
import LoginPage from "./AuthPage";
import BrowsePage from "./BrowsePage";

export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage authType={true} />,
    },
    {
      path: "/browse",
      element: <BrowsePage />,
    },
  ]);

  return (
    <div className=" w-full">
      <Header />
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}
