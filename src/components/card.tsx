import imgBg from "/images/features-section/feature-card-bg.png";
import ClipPath from "./assets/clip-path";

type Props = {
    key: number;
    title: string;
    text: string;
    icon: string;
}

const Card = ({ key, title, text, icon }: Props) => {
    return (
        <div
            key={key}
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-md:min-w-full lg:max-w-[24rem] "

        >
            <div className="relative z-2 flex flex-col min-h-[14rem] p-[2.2rem] pointer-events-none">
                <div className="flex items-center mb-5">
                    <div className="flex items-center justify-center p-3 bg-brand-purple rounded-xl">
                        <img src={icon} alt="icon" width={22} height={22} />
                    </div>
                    <h5 className="h5 ml-2">{title}</h5>
                </div>
                <p className="body-2 mb-6 text-n-3">{text}</p>
            </div>

            {/** Hover Image effect */}

            <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
            >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">

                    <img
                        src={imgBg}
                        width={380}
                        height={362}
                        alt="hover image"
                        className="w-full h-full object-cover"
                    />

                </div>
            </div>
            <ClipPath />
        </div>
    )
}

export default Card;