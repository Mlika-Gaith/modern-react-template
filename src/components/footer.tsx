import { FOOTER_LINKS } from "../constants";
import Section from "./section";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import { SOCIAL_MEDIA_LINKS } from '../constants/index';

const Footer = () => {
  return (
    <Section id="footer" crosses className="!px-0 !py-10">
      <div className="container py-[5px] px-[10px] flex flex-col justify-center items-center max-w-[1100px] my-0 mx-auto">
        <div className="flex items-center justify-center  max-md:pt-[32px] w-full">
          <div className="flex w-full max-sm:grid max-sm:grid-cols-2">
            {FOOTER_LINKS.map((footerLink, index) => (
              <div
                key={index}
                className="flex flex-col items-start m-[16px] text-left w-[160px] box-border text-n-3 sm:m-0 sm:p-[10px] sm:w-full"
              >
                <h1 className="text-lg mb-[16px] font-bold">
                  {footerLink.title}
                </h1>
                {footerLink.links.map((link, linkIndex) => (
                  <Link
                    key={`${footerLink.title}-${linkIndex}`}
                    to={link.url}
                    className="text-n-3 underline-none mb-2 text-md hover:text-brand-purple ease-out transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1000px] w-full">
          <div className="flex justify-between items-center mx-auto my-5 max-md:flex-col">
            <Link
              to="/"
              className="text-n-1 justify-start cursor-pointer underline-none text-[1.5rem] flex items-center font-bold max-md:mb-4"
            >
              <img
                src={logo}
                alt="Nexus-Logo"
                width={30}
                height={30}
                className="mr-2"
              />
              Nexus
            </Link>
            <p className="text-n-3 max-md:mb-4">
              Nexus &trade; {new Date().getFullYear()} Registered TradeMark.
            </p>
            <div className="flex justify-between items-center w-[240px] max-md:mb-4">
              {SOCIAL_MEDIA_LINKS.map((item, index) =>(
                <Link
                key={`social-${index}`}
                to="/"
                className="text-n-4 text-[1.5rem] hover:text-brand-orange transition-colors duration-200 ease-in-out"
              >
               {item}
              </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
