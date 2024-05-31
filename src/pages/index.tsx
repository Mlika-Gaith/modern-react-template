import { useState } from "react";
import Navbar from "../components/navbar"
import Hero from "../components/hero";

const Home = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Hero />
        </>

    )
}

export default Home;