import { useState } from "react";
import Navbar from "../components/navbar"
import Hero from "../components/hero";
import Benefits from "../components/benefits";

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
                <Benefits />
            </div>

        </>

    )
}

export default Home;