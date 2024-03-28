import { url } from "../utils/constants";
export default function Header() {
  return (
    <div className="flex justify-center sm:bg-gradient-to-b from-black absolute z-10 w-screen">
      <img className="w-44" src={url.logo} alt="background" />
    </div>
  );
}
