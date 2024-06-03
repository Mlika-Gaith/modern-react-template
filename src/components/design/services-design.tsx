import ChatBubbleWing from "../assets/chat-bubble-wing"


export const PhotoChatMessage = () => {
    return (
        <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl 
        rounded-bl-xl font-grotesk text-base lg:top-16 lg:right-[2.75rem] lg:max-w-[17.5rem]">
            Hey Nexus, enhance this photo !
            <ChatBubbleWing className="absolute left-full bottom-0"/>
        </div>
    )
}

export const VideoChatMessage = () =>{

}