import { useState } from "react";
import Navbar from "../components/navbar"
import Hero from "../components/hero";
import Features from "../components/features";

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
            </div>

        </>

    )
}

export default Home;