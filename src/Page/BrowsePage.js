import { useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
import SecondryContainer from "../components/SecondryContainer";

export default function BrowsePage() {
  const user = useSelector((store) => store.user);

  return (
    <div className=" h-screen w-screen">
      <div className="main-container relative overflow-x-hidden">
        <MainContainer />
      </div>
      <div className="bg-black h-screen">
        <SecondryContainer />
      </div>
    </div>
  );
}
