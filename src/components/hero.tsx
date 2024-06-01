import { useRef, useState } from "react"
import Section from "./section";
import { Button } from "./buttons";
import astronaut from "/images/hero-section/hero-image.jpg";
import heroBackground from "/images/hero-section/hero-background.png";
import Generating from "./assets/loading";
import { ScrollParallax } from "react-just-parallax";
import { HERO_ICONS } from "../constants";
import Notification from "./assets/notification";
import { BackgroundCircles, BottomLine, Gradient } from "./design/hero-design";
import CompanyLogos from "./assets/company-logos";

const Hero = () => {
    const parallaxRef = useRef(null);
    const [hover, setHover] = useState<boolean>(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero">
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 
                    max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Exploring the Cosmos, Empowered by AI with {' '}
                        <span className="inline-block relative gradient-text uppercase tracking-wider text-[3rem]">
                            Nexus. {' '}
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Embark on a Galactic Journey with Nexus.<br /> Unleash the AI Frontier, and
                        elevate your Efficiency with Nexus, the Stellar AI Companion.
                    </p>
                    <div className="flex items-center justify-center">
                        <Button
                            to="/pricing"
                            onHover={onHover}
                            hover={hover}
                            text="Get Started"
                        />
                    </div>
                </div>
                <div className="relative max-w-[23rem] 
                mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl 
                    bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden 
                            md:aspect[688/490] lg:aspect-[1024/490]">
                                <img src={astronaut} alt="Astronaut"
                                    width={1024} height={490} className="w-full scale-[1.7] 
                                translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"/>
                                <Generating className="absolute left-4 right-4 
                                bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"
                                    text="AI is Generating" />

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute 
                                        -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10
                                        rounded-2xl xl:flex">
                                        {HERO_ICONS.map((icon, index) => (
                                            <li className="p-5" key={index}>
                                                {icon}
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification
                                        className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                                        title="Code Generation ..."
                                    />
                                </ScrollParallax>
                            </div>
                        </div>
                        {/**Gradient */}
                        <Gradient />
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] 
                    -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img src={heroBackground} alt="Background" className="w-full" width={1000} height={1800} />
                    </div>
                    {/** Background Circles */}
                    <BackgroundCircles />
                </div>
                {/** Company Logos */}
                <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>
            </div>
            {/** Section Bottom Line */}
            <BottomLine />
        </Section>
    )
}

export default Hero;