import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import Form from "./form";

const SignIn = () => {
  return (
    <div
      className="min-h-screen fixed top-0 bottom-0 left-0 
    right-0 overflow-hidden bg-brand-background"
    >
      <div className="h-full flex flex-col justify-center max-sm:h-[80%]">
        <div className="size-full h-[12%] px-10">
          <Link
            to="/"
            className=" text-n-1 no-underline
        font-bold text-3xl flex"
          >
            <img src={Logo} alt="Nexus-Logo" className="h-8 w-8 mr-2" />
            <p>Nexus</p>
          </Link>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default SignIn;
