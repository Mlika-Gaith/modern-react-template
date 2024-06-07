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
        ${primary ? 'bg-brand-purple' : 'bg-brand-orange'} text-n-1 
        ${big ? 'px-12 py-4' : 'px-8 py-3'} ${fontBig ? 'text-xl' : 'text-base'} 
        transition-colors delay-100 ease-in-out hover:bg-transparent hover:text-n-1 
        outline-none border-none cursor-pointer hover:ring-1 hover:ring-brand-purple`} onClick={onClick}>
            {text} {hover ? <ChevronRight className="w-6 h-6 ml-2" /> : <MoveRight className="w-6 h-6 ml-2" />}
        </LinkS>
    )
}

type PriceBtnProps = {
    className?: string;
    href?: string;
    onClick?: () => void;
    children: any;
}

export const PriceBtn = (
    { className,
        href,
        onClick,
        children,
    }:
        PriceBtnProps) => {
    const classes = 'button inline-flex justify-center ' +
        'items-center bg-brand-purple rounded-[4px] border-0 shadow-lg shadow-indigo-500/50' +
        'box-border text-n-1 cursor-pointer h-[48px] leading-none list-none overflow-hidden px-[16px] relative text-left no-underline' +
        'select-none whitespace-nowrap text-[18px]' +
        'focus:ring-2 focus:ring-n-2 focus:ring-inset focus:ring-offset-[1.5px] focus:ring-offset-n-3 ' +
        'hover:shadow-indigo-500/50 hover:transform hover:-translate-y-[2px]' +
        'active:shadow-[#D6D6E7_0px_3px_7px_inset] active:transform active:translate-y-[2px]' +
        `${className ||  ""}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={classes} onClick={onClick}>
                {children}
            </button>
        );
    }
}
