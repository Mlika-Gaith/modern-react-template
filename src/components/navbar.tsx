import {Link as LinkR} from "react-router-dom";
//@ts-ignore
import {Link as LinkS, animateScroll as scroll} from "react-scroll"
import Logo from "/images/logo.png"
import { useEffect, useState } from "react"
import { NavButton } from "./buttons";
import { AlignJustify as Menu } from 'lucide-react';

type Props  ={
    toggle: () => void;
}
const LINKS: string[] = ["features", "pricing", "how to use", "roadmap"]

const Navbar =  ({toggle}: Props) =>{

    const [scrollNav, setScrollNav] = useState<boolean>(false)
    const onScroll = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll", onScroll)
    })
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return(
        <nav className={`bg-brand-background h-[80px] flex justify-center items-center 
        text-[1.1rem] sticky top-0 z-10 max-md:transition-all max-md:delay-500 max-md:ease`}>
            <div className="flex justify-between h-[80px] z-1 w-full py-0 px-[24px] max-w-[1100px]">
                <LinkR to="/" className="text-[#fff] justify-self-start cursor-pointer text-[2rem] 
                flex items-center ml-[24px] font-bold" onClick={toggleHome}>
                    <img src={Logo} alt="Nexus" className="h-8 w-8 mr-2"/>
                    <p>Nexus</p>
                </LinkR>
                <div className="hidden text-[1.8rem] text-[#fff] max-md:block max-md:absolute max-md:top-0 max-md:right-0
                 max-md:translate-x-[-100%] max-md:translate-y-[100%] cursor-pointer">
                    <Menu onClick={toggle}/>
                </div>
                <ul className="flex items-center list-none text-center mr-[-22px] max-md:hidden">
                    {LINKS.map((link) =>(
                        <li key={link} className="h-[80px]">
                            <LinkS className="text-[#fff] uppercase flex items-center no-underline py-0 px-[1rem] h-full 
                            cursor-pointer hover:border-b-4 hover:border-brand-purple">
                                {link}
                            </LinkS>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center max-md:hidden">
                    <NavButton/>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar