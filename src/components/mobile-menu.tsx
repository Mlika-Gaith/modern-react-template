import { X } from "lucide-react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const LINKS: string[] = ["features", "how to use", "pricing", "roadmap"];
const SCROLL_TO: string[] = ["features", "how-to-use", "pricing", "roadmap"];

const MobileMenu = ({ isOpen, toggle }: Props) => {
  return (
    <aside
      className={`fixed z-[9999] size-full bg-brand-background 
    grid items-center top-0 left-0 transition-all ease-in-out duration-300
    ${isOpen ? "opacity-1" : "opacity-0"} ${isOpen ? "top-0" : "-top-[100%]"}`}
    >
      <div
        className="absolute top-[1.2rem] text-n-1 right-[1.5rem] bg-transparent cursor-pointer text-[2rem] outline-none"
        onClick={toggle}
      >
        <X />
      </div>
      <div className="text-n-1">
        <ul className="grid grid-cols-1 grid-rows-6 text-center">
          {LINKS.map((item, index) => (
            <LinkS
              key={index}
              to={SCROLL_TO[index]}
              onClick={toggle}
              className="flex items-center justify-center py-2
            text-[1.5rem] no-underline list-none transition-all 
            ease-in-out duration-200 cursor-pointer hover:text-brand-purple"
            >
              {item}
            </LinkS>
          ))}
          <LinkR
            to="/sign-in"
            onClick={toggle}
            className="flex items-center justify-center py-2
            text-[1.5rem] no-underline list-none transition-all 
            ease-in-out duration-200 cursor-pointer hover:text-brand-purple"
          >
            Sign In
          </LinkR>
        </ul>
      </div>
    </aside>
  );
};

export default MobileMenu;
