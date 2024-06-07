import { Link } from "react-router-dom";
import Logo from "/images/logo.png"
import Form from "./form";
type Props = {};

const SignIn = (props: Props) => {
  return (
    <div className="min-h-screen fixed top-0 bottom-0 left-0 
    right-0 overflow-hidden bg-brand-background">
      <div className="h-full flex flex-col justify-center max-sm:h-[80%]">
        <Link
        to="/"
        className="ml-[32px] text-n-1 mt-[32px] no-underline 
        font-bold text-3xl max-sm:ml-[16px] max-sm:mt-[8px] flex">
            <img
            src={Logo}
            alt="Nexus-Logo"
            className="h-8 w-8 mr-2"
            />
            <p>Nexus</p>
        </Link>
        <Form/>
      </div>
    </div>
  );
};

export default SignIn;
