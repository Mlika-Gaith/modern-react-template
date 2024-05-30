import { useState } from "react";
import Navbar from "../components/navbar"

const Home = () =>{
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <Navbar toggle={toggle}/>
    )  
}

export default Home;