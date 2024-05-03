// import { useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
import SecondryContainer from "../components/SecondryContainer";

export default function BrowsePage() {
  // const user = useSelector((store) => store.user);

  return (
    <div className="w-screen h-screen relative bg-black">
      <div className="main-container">
        <MainContainer />
      </div>
      <div className="w-screen h-screen bg-black absolute top-full"></div>
      <div className="w-screen absolute top-2/3">
        <SecondryContainer />
      </div>
    </div>
  );
}
