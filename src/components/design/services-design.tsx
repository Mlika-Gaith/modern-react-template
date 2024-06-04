import { CirclePlay } from "lucide-react"
import ChatBubbleWing from "../assets/chat-bubble-wing"
import nexus from "/images/logo.png"


export const PhotoChatMessage = () => {
    return (
        <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-brand-purple/90 rounded-t-xl 
        rounded-bl-xl font-grotesk text-base lg:top-16 lg:right-[2.75rem] lg:max-w-[17.5rem]">
            Hey Nexus, enhance this photo !
            <ChatBubbleWing className="absolute left-full bottom-0" pathClassName="fill-brand-purple/90" />
        </div>
    )
}

export const VideoChatMessage = () => {
    return (
        <div className="absolute top-40 left-[3.125rem] sm:left-[1rem] w-full max-w-[14rem] pt-2.5 pr-2.5 
            pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-gentium text-base md:max-w-[17.5rem]">
            Video generated !
            <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center
                    w-[2.5rem] h-[2.5rem] bg-black rounded-[0.75rem]">
                <img src={nexus} alt="Nexus" width={24} height={24} />
            </div>
            <p className="tagline absolute right-2.5 font-gentium bottom-1 text-[0.625] text-n-3 uppercase">
                Just now
            </p>
            <ChatBubbleWing
                className="absolute right-full bottom-0 -scale-x-100"
                pathClassName="fill-n-6"
            />
        </div>
    )
}

export const VideoBar = () => {
    return (
        <div className="absolute left-0 w-full flex items-center p-6">
            <CirclePlay
                width={26}
                height={26}
                className="object-contain mr-3" />
            <div className="flex-1 bg-[#D9D9D9]">
                <div className="w-1/2 h-1 bg-color-1" />
            </div>
        </div>
    )
}