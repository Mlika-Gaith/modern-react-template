import brackets from "./assets/brackets";

type Props ={
     className?: string | undefined;
     children: any;
}

const TagLine = ({className, children}: Props) =>{
    return(
        <div className={`tagline flex items-center ${className || ""}`}>
            {brackets("left")}
            <div className="mx-3 text-n-3">{children}</div>
            {brackets("right")}
        </div>
    )
}

export default TagLine;