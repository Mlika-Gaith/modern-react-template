import { Link } from "react-router-dom";
export const NavButton = () => {
    return (
        <Link to="/sign-in" className="rounded-[50px] bg-brand-purple whitespace-nowrap py-2 px-[22px]
 text-[#fff] text-[16px] outline-none border-none cursor-pointer transition-all delay-200 ease-in-out 
 no-underline hover:transition-all hover:delay-200 hover:ease-in-out hover:bg-brand-orange 
 hover:text-brand-background">
            Sign Up
        </Link>
    )
}