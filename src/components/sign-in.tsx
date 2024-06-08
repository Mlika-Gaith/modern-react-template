import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import Form from "./form";

const SignIn = () => {
  return (
    <div
      className="min-h-screen bg-brand-background"
    >
      <div className="h-full flex flex-col justify-center">
        <nav
          className="h-[80px] flex justify-center items-center text-[1.1rem] sticky 
        top-0 z-[9999] "
        >
          <div
            className="flex justify-between h-[80px] z-1 w-full py-0 px-[24px] 
          max-w-[1100px]"
          >
            <Link
              to="/"
              className="text-n-1 justify-self-start cursor-pointer text-[2rem]
          flex items-center ml-[24px] font-bold"
            >
              <img src={Logo} alt="Nexus" className="h-8 w-8 mr-2" />
              <p>Nexus</p>
            </Link>
          </div>
        </nav>
        <Form />
      </div>
    </div>
  );
};

export default SignIn;
