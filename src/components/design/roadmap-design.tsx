import nexus from "/images/logo.png"

type Props = {
    className?: string;
    text: string,
    date: string;
}
export const Message = ({className, text, date}: Props) => {
    return (
        <div className={`absolute z-5 top-40 w-full max-w-[14rem] pt-2.5 pr-2.5 
            pb-8 pl-5 bg-brand-purple rounded-xl font-gentium text-md md:max-w-[17.5rem] ${className}`}>
            {text}
            <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center
                    w-[2.5rem] h-[2.5rem] bg-black rounded-[0.75rem]">
                <img src={nexus} alt="Nexus" width={24} height={24} />
            </div>
            <p className="tagline absolute right-2.5 font-gentium bottom-1 text-[0.625] text-n-3 uppercase">
                {date}
            </p>
        </div>
    )
}