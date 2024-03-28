import LoginForm from "../components/AuthForm";
import backgroundImage from "../assets/background.jpg";
export default function AuthPage() {
  return (
    <div className="relative">
      <div className="login-form absolute z-20 my-auto top-0 bottom-0 mx-auto left-0 right-0 w-[30%] h-[60%]">
        <LoginForm></LoginForm>
      </div>
      <div className="bg-black absolute z-10  my-auto top-0 bottom-0 mx-auto left-0 right-0 w-[30%] h-[60%] opacity-70 rounded-lg"></div>
      <div className="bg-black">
        <div
          className="opacity-0 sm:opacity-0 h-screen w-screen md:opacity-50"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>
    </div>
  );
}
