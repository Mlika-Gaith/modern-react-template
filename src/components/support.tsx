import { CODE_FEATURES, SLUGS } from "../constants";
import IconCloud from "./assets/icon-cloud";
import Section from "./section";
import lines from "/images/icons/two-lines.svg";
import code from "/images/icons/code.svg";
import { MoveRight } from "lucide-react";
import Chip from "./chip";

const Support = () => {
    return (
        <Section id="how-to-use" crosses>
            <div className="container">

                {/** Chip Should be Here */}
                <Chip text="Code Support" icon={code} />

                {/** Code Support Description Here*/}
                <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 
                lg:max-w-7xl lg:px-8 mt-8 lg:mt-24">

                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-0 gap-y-16 
                    sm:gap-y-20 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                        <div className="lg:row-start-2 lg:max-w-md text-center lg:text-left">
                            <h1 className="text-3xl h1 sm:text-4xl">
                                Open your browser,<br />
                                And you're ready to go.
                            </h1>
                        </div>

                        <div className="relative lg:row-span-4 overflow-hidden">
                            {/** Icons Cloud be Here */}
                            <IconCloud iconSlugs={SLUGS} />
                        </div>

                        <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-neutral-100/10 lg:pt-10">
                            <dl className="max-w-xl space-y-8 text-base leading-7 text-n-3 lg:max-w-none">
                                {CODE_FEATURES.map((item, index) => (
                                    <div key={index} className="relative">
                                        <div className="flex items-center mb-5">
                                            <div className="flex items-center justify-center p-3 bg-brand-purple rounded-xl">
                                                <img src={lines} alt="lines-icon" width={25} height={25} />
                                            </div>
                                            <p className="text-n-3 tracking-wider ml-2">{item.text}</p>
                                        </div>
                                    </div>
                                ))}

                            </dl>
                        </div>
                    </div>
                </div>
                {/** Link Here */}
                <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 text-center mt-10">
                    <a href="#" className="flex items-center justify-center text-brand-purple hover:text-brand-orange transition-colors duration-500 ease-in-out">
                        Start chatting with Nexus <MoveRight className="ml-2 w-4 h-4 mt-1" />
                    </a>
                </div>
            </div>
        </Section>
    )

}

export default Support;