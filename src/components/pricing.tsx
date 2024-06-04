import { MoveRight } from "lucide-react";
import { LeftLine, RightLine } from "./design/pricing-design";
import Heading from "./heading"
import PricingItems from "./pricing-items";
import Section from "./section"

const Pricing = () => {
    return (
        <Section id="pricing" className="overflow-hidden">
            <div className="container relative z-2">
                <Heading
                    title="Pay Once, Enjoy Forever"
                    tag="Get started with Nexus" />

                <div className="relative">
                    <PricingItems />
                    <LeftLine />
                    <RightLine />
                </div>
                <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-12 text-center mt-10">
                    <a href="#" className="flex items-center justify-center text-brand-purple hover:text-brand-orange 
                    transition-colors duration-500 ease-in-out">
                        See more Details <MoveRight className="ml-2 w-4 h-4 mt-1"/>
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default Pricing;