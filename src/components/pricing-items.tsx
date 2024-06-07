import { OFFERS } from "../constants";
import { PriceBtn } from "./buttons";
import check from "/images/icons/check.svg";

const PricingItems = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {OFFERS.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full 
                        h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto 
                        even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-n-1 [&>h4]:even:text-brand-purple 
                        [&>h4]:last:text-brand-orange"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/3">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price ? (
              <>
                <div className="h3">&#8364;</div>
                <div className="text-[5.5rem] ml-2 leading-none font-bold">
                  {item.price}
                </div>
              </>
            ) : (
              <div className="text-[3.5rem] capitalize leading-none font-bold">
                get your quote
              </div>
            )}
          </div>

          <PriceBtn
            className="h-full mb-6 w-full"
            href={item.price ? "#" : "mailto:ghaith.mlika@polytechnicient.tn"}
          >
            {item.price ? "Get started" : "Contact us"}
          </PriceBtn>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={10} height={10} alt="check-mark"/>
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingItems;
