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
const SignUpForm = ({ isRightPanelActive, onClick }: Props) => {
  const width = useScreenWidth();
  console.log("FORM WIDTH: ", width);
  return (
    <div
      className={`
            absolute 
            top-0 h-full transition-all duration-500 ease-in-out
            left-0 w-[50%] max-md:w-full z-2 opacity-0 ${
              isRightPanelActive
                ? "translate-x-[100%] max-md:translate-x-0 opacity-1 z-5 animate-show"
                : ""
            }
            `}
    >
      <form
        action="#"
        className="flex items-center justify-center flex-col py-0 px-[50px] h-full text-center"
      >
        <h1 className="h3 m-0">Create Account</h1>
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
        <FormInput type="text" placeholder="Name" />
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
        <FormButton text="Sign Up" />
        {width < 784 && (
          <p className="text-n-3 font-extralight text-[14px] mt-2">
            Already have an account ? {" "}
            <span className="no-underline text-brand-purple cursor-pointer capitalize ml-2 mb-2" onClick={onClick}>sign in</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
