import { ChevronRight, MoveRight } from "lucide-react";
import { Link as LinkR } from "react-router-dom";
//@ts-ignore
import { Link as LinkS } from "react-scroll"
export const NavButton = () => {
    return (
        <LinkR to="/sign-in" className="rounded-[50px] bg-brand-purple whitespace-nowrap py-2 px-[22px]
 text-[#fff] text-[16px] outline-none border-none cursor-pointer transition-all delay-200 ease-in-out 
 no-underline hover:transition-all hover:delay-200 hover:ease-in-out hover:bg-brand-orange 
 hover:text-brand-background">
            Sign Up
        </LinkR>
    )
}

type ButtonProps = {
    to?: string,
    hover: boolean;
    onHover: () => void;
    primary?: boolean
    text: string;
    big?: boolean
    fontBig?: boolean
    onClick?: () => void
    width?: string
}

export const Button = ({
    to,
    hover,
    onHover,
    primary,
    text,
    big,
    fontBig,
    onClick,
    width,
 }: ButtonProps) => {
    return (
        <LinkS to={to} 
        onMouseEnter={onHover} 
        onMouseLeave={onHover} 
        className={`${width} rounded-[5px] flex items-center justify-center
        ${primary ? 'bg-brand-purple' : 'bg-brand-purple'} text-n-1 
        ${big ? 'px-12 py-4' : 'px-8 py-3'} ${fontBig ? 'text-xl' : 'text-base'} 
        transition-colors delay-200 easse-in-out hover:bg-transparent hover:text-n-1 
        outline-none border-none cursor-pointer hover:ring-1 hover:ring-brand-purple`} onClick={onClick}>
            {text} {hover? <ChevronRight className="w-6 h-6 ml-2"/> : <MoveRight className="w-6 h-6 ml-2"/>  }
        </LinkS>
    )
}