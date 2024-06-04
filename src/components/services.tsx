import { GRAPHIC_FEATURES, GRAPHIC_ICONS } from "../constants";
import Chip from "./chip";
import Heading from "./heading";
import Section from "./section";
import star from "/images/icons/fun-star.svg";
import cyberNinja from "/images/services-section/cyber-ninja.png";
import lines from "/images/icons/two-lines.svg"
import Generating from "./assets/loading";
import soldier from "/images/services-section/cyber-person-1.png";
import person from "/images/services-section/cyber-person-2.png";
import { PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/services-design";

const Services = () => {
    return <Section id="how-to-use">
        <div className="container">

            {/** Chip should be here */}
            <Chip text="Graphic Support" icon={star} width={16} />
            <div className="mb-10" />
            {/** Heading Title */}
            <Heading
                title="Illuminate Your Imagination"
                text="Watch your imaginative visions come to life in brilliant colors"
            />

            {/** Bento Layout Here */}
            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-9 p-8 border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">

                    <div className="absolute top-0 left-0 w-full h-full 
                    pointer-events-none md:w-auto after:absolute after:top-0 
                    after:left-0 after:size-full after:bg-black/60 after:pointer-events-none">

                        {/** Image Here */}
                        <div className="relative z-1 p-1 rounded-2xl bg-brand-pink" />
                        <div className="h-[.3rem] relative z-1 p-0.5 bg-brand-purple" />
                        <div className="h-[.7rem] bg-n-10" />
                        <div className="aspect-[38/40] rounded-b-[0.9rem] overflow-hidden 
                        md:aspect[688/490]">
                            <img src={cyberNinja} alt="CyberPunk Ninja"
                                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" />
                        </div>


                    </div>

                    {/** Text Here */}
                    <div className="relative z-1 max-w-[17rem] ml-auto">
                        <h4 className="h4 mb-4">The Most Intelligent AI Tool</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                            Nexus unlocks the potential of graphic creators.
                        </p>
                        <ul className="body-2">
                            {GRAPHIC_FEATURES.map((item, index) => (
                                <li key={index} className="flex items-start py-4 border-t border-n-3">
                                    <img src={lines} alt="Lines" width={20} height={20} className="text-brand-purple" />
                                    <p className="ml-4">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Generating
                        className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:right-auto lg:bottom-8 "
                        text="Hang Tight ! Nexus is Crafting your Image" />
                </div>

                {/** Second Bento Layout Element */}
                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">

                        <div className="absolute inset-0 after:absolute after:top-0 after:left-0 after:size-full after:bg-black/40 after:pointer-events-none">
                            <img
                                src={soldier}
                                className="w-full h-full object-cover scale-100 md:scale-100"
                                alt="robot"
                            />
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8-/0 to-n-8/90 lg:p-15">
                            <h4 className="h1 mb-4">Photo Editing</h4>
                            <p className="body-2 text-xl mb-[3rem] text-n-3">
                                Experience the power of our Nexus AI-powered photo enhancement tool. Give it a try today!
                            </p>
                        </div>

                        {/** Photo Chat Message Here */}
                        <PhotoChatMessage />
                    </div>

                    {/** Third Element of Bento Layout */}
                    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                        <div className="py-12 px-4 xl:px-8">
                            <h4 className="h3 mb-4">Video Generation</h4>
                            <p className="body-2 mb-[2rem] text-n-3">
                                The ultimate AI-powered photo and video art creation platform.
                                Unleash your creativity !
                            </p>

                            <ul className="flex items-center justify-between">
                                {GRAPHIC_ICONS.map((item, index) => (
                                    <li key={index} className={`rounded-2xl flex items-center justify-center 
                                    ${index === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" :
                                            "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                                        }`}>
                                        <div className={
                                            index === 2 ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                                                : ""
                                        }>
                                            {item}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative top-0 left-0 w-full h-full 
                    pointer-events-none md:w-auto">

                            {/** Image Here */}
                            <div className="h-[.3rem] relative z-1 p-0.5 rounded-t-xl bg-brand-purple" />
                            <div className="aspect-[38/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490]">
                                <img src={person} alt="CyberPunk Ninja"
                                    className="w-full h-full object-cover scale-100 md:scale-100" />
                            </div>

                            {/** Video Chat Message */}
                            <VideoChatMessage />
                            {/** Video Bar */}
                            <VideoBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
}

export default Services;