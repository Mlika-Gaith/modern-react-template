import { COMPANY_LOGOS } from "../../constants";
import { COMPANY_NAMES } from "../../constants";

type Props = {
    className: string;
}
const CompanyLogos = ({className} : Props) =>{
    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-n-1/50">
            Empowering creators to generate exquisite content at
            </h5>
            <ul className="flex">
                {COMPANY_LOGOS.map((item, index) =>(
                    <li className="flex items-center justify-center flex-1 h-[8.5rem]" 
                    key={index}>
                        <img src={item} alt="Company" height={20} width={20}/>
                        <span className="body-1 text-[1.1rem] ml-2">{COMPANY_NAMES[index]}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyLogos;