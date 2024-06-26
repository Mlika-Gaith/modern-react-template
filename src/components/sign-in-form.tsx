import {
  GithubOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import FormInput from "./form-input";
import { FormButton } from "./buttons";
import useScreenWidth from "../hooks/use-screen-width";

type Props = {
  isRightPanelActive: boolean;
  onClick: () => void;
};

const OAUTH_OPTIONS: React.ReactElement[] = [
  <GoogleOutlined />,
  <GithubOutlined />,
  <LinkedinOutlined />,
];

const SignInForm = ({ isRightPanelActive, onClick }: Props) => {
  const width = useScreenWidth();
  return (
    <div
      className={`
            absolute 
            top-0 h-full transition-all duration-500 ease-in-out
            left-0 w-1/2 max-md:w-full z-5 opacity-1 ${
              isRightPanelActive
                ? "translate-x-[50%] opacity-0 z-2"
                : "translate-x-0"
            }`}
    >
      <form className="flex items-center justify-center flex-col py-0 px-[50px] h-full text-center">
        <h1 className="h3 m-0">Sign In</h1>
        <div className="my-[20px] mx-0">
          {OAUTH_OPTIONS.map((item, index) => (
            <a
              key={index}
              className="cursor-pointer inline-flex 
                  items-center justify-center mt-0 mx-[5px] 
                  h-[40px] w-[40px] text-[1.5rem] hover:text-brand-purple"
            >
              {item}
            </a>
          ))}
        </div>
        <span className="text-n-3 text-[14px]">or use your account</span>
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
        <FormButton text="Sign in" />
        {width < 784 && (
          <p className="text-n-3 font-extralight text-[14px] mt-2">
            Don't have an account{" "}
            <span className="no-underline text-brand-purple cursor-pointer" onClick={onClick}>sign up</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignInForm;
