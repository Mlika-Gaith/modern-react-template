
type Props = {
    text: string,
    icon: string,
    width?: number
}

const Chip = ({ text, icon, width }: Props) => {
    return (
        <div className="mx-auto px-4 sm:px-6 
                md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 text-center">
            <h2 className="inline-flex items-center rounded-full px-4 py-2 
                    text-n-1 ring-1 ring-inset ring-n-4">
                <span className="text-md font-grotesk">
                    <img src={icon} alt="code-icon" width={width ?? 20} />
                </span>
                <span className="ml-3 h-4 w-px bg-n-4" />
                <span className="ml-3 text-md font-grotesk tracking-light">
                    {text}
                </span>
            </h2>
        </div>
    )
}

export default Chip;