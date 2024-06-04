import { useState } from "react";
import Navbar from "../components/navbar"
import Hero from "../components/hero";
import Features from "../components/features";
import Support from "../components/support";
import Services from "../components/services";
import Pricing from "../components/pricing";

const Home = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <div className="overflow-hidden">
                <Hero />
                <Features />
                <Support/>
                <Services/>
                <Pricing/>
            </div>

        </>

    )
}

export default Home;