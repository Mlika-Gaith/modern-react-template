import Heading from "./heading";
import Section from "./section";
import Card from "./card";
import { FEATURES } from "../constants";

const Features = () => {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl"
                    title="Code Smarter, Not Harder with Nexus." />
                <div className="flex flex-wrap gap-5 mb-10">
                    {/** Card Component Here */}
                    {FEATURES.map((item, index) => (
                        <Card
                        key={index}
                        title={item.title}
                        text={item.text}
                        icon={item.icon}
                        light={item.light}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Features;