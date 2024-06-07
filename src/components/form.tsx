import {
  GithubOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import React from "react";

type Props = {};

const OAUTH_OPTIONS: any[] = [
  <GoogleOutlined />,
  <GithubOutlined />,
  <LinkedinOutlined />,
];

const Form = (props: Props) => {
  return (
    <div className="flex items-center justify-center flex-col mt-[20px] mx-auto mb-0">
      <div
        className="relative rounded-[10px] overflow-hidden 
        w-[768px] max-w-full min-h-[480px]
        shadow-[0_14px_28px_rgba(0,0,0,0.25),_0_10px_10px_rgba(0,0,0,0.22)]"
      >
        <div
          className="absolute 
            top-0 h-full transition-all duration-500 ease-in-out
            left-0 w-[50%] z-2"
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
                  h-[40px] w-[40px] text-[1.5rem] hover:text-brand-orange"
                >
                  {item}
                </a>
              ))}
            </div>
            <span className="text-n-3 text-[14px]">or use your account</span>
            <input 
            type="text" 
            placeholder="Name"
            className="bg-n-6 
            border-none py-[12px] px-[15px] my-[8px] mx-0 w-full"
            />
            <input 
            type="email" 
            placeholder="Email"
            className="bg-n-6 
            border-none py-[12px] px-[15px] my-[8px] mx-0 w-full"
            />
            <input 
            type="password" 
            placeholder="Password"
            className="bg-n-6 
            border-none py-[12px] px-[15px] my-[8px] mx-0 w-full"
            />
            <button className="rounded-[20px] border border-brand-purple bg-brand-purple 
            text-n-1 text-[16px] font-bold py-[12px] px-[45px] my-2
            uppercase transition-all duration-75 ease-in">
                Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
