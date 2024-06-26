import { useState } from "react";
import { FormButton } from "./buttons";
import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";
import useScreenWidth from "../hooks/use-screen-width";

const Form = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const width = useScreenWidth();

  const onBtnClick = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <div className="flex items-center justify-center flex-col mx-auto mb-0 mt-10">
      <div
        className="relative rounded-[10px] overflow-hidden 
        w-[768px] max-md:w-[360px] max-w-full min-h-[480px]
        shadow-2xl bg-n-7 max-md:shadow-none max-md:bg-transparent"
      >
        {/** First Form */}
        <SignInForm isRightPanelActive={isRightPanelActive} onClick={onBtnClick}/>
        {/** Second Form */}
        <SignUpForm isRightPanelActive={isRightPanelActive} onClick={onBtnClick}/>

        {/**Overlay container */}
        {width >= 784 && (
          <div
            className={`
          absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-500 ease-in-out z-[100]
          ${isRightPanelActive ? "translate-x-[-100%]" : "translate-x-0"}
          `}
          >
            <div
              className={`
              bg-purple-gradient bg-cover bg-no-repeat text-n-1 relative left-[-100%] h-full w-[200%]
        transform translate-x-0 transition-transform duration-500 ease-in-out ${
          isRightPanelActive ? "translate-x-1/2" : "translate-x-0"
        }
              `}
            >
              {/** Left overlay panel */}
              <div
                className={`
                absolute flex items-center justify-center flex-col py-0 px-[40px]
          text-center yop-0 h-full w-1/2 transform transition-transform duration-500 ease-in-out
          ${isRightPanelActive ? "translate-x-0" : "translate-x-[-20%]"}
                `}
              >
                <h1 className="h3 m-0">Welcome Back</h1>
                <p className="text-[14px] font-extralight leading-5 letter tracking-[0.5px] mr-0 mt-[20px] mb-[30px]">
                  To keep connected with Nexus please login with your personal info
                </p>
                <FormButton
                  className="bg-transparent ring-1 ring-purple-900"
                  text="Sign In"
                  onClick={onBtnClick}
                />
              </div>
              {/** Right overlay panel*/}
              <div
                className={`absolute flex items-center justify-center flex-col py-0 px-[40px]
          text-center yop-0 h-full w-1/2 transform transition-transform duration-500 ease-in-out right-0
          ${isRightPanelActive ? "translate-x-[20%]" : "translate-x-0"}
                `}
              >
                <h1 className="h3 m-0">Hello There</h1>
                <p className="text-[14px] font-extralight leading-5 letter tracking-[0.5px] mr-0 mt-[20px] mb-[30px]">
                  Enter your personal details and start journey with us
                </p>
                <FormButton
                  className="bg-transparent ring-1 ring-purple-600"
                  text="Sign Up"
                  onClick={onBtnClick}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
