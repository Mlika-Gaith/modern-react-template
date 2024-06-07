import { Check, Loader, MoveRight } from "lucide-react";
import Heading from "./heading";
import Section from "./section";
import TagLine from "./tagline";
import { ROADMAP_ITEMS } from "../constants";

const Roadmap = () => {
  return (
    <Section id="roadmap" className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading title="What We're Working On" tag="Active Tasks" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {/** ROADMAP ITEMS HERE */}
          {ROADMAP_ITEMS.map((item, index) => (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    src="/images/roadmap-section/grid.png"
                    alt="grid-bg"
                    width={550}
                    height={550}
                    className="w-full"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <TagLine>{item.date}</TagLine>
                    <div className="flex items-center px-4 py-2 bg-n-1 rounded text-n-8">
                      {item.status === "done" ? (
                        <>
                          <Check className="w-4 h-4 mr-2.5" />
                          <div className="tagline">Done</div>
                        </>
                      ) : (
                        <>
                          <Loader className="w-4 h-4 mr-2.5" />
                          <div className="tagline">In Progress</div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={item.imageUrl}
                      alt={`roadmap-image-${index + 1}`}
                      width={500}
                      height={526}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.description}</p>
                </div>
                {/** EXTRA JSX HERE */}
                {item.extraJSX !== null && item.extraJSX}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 text-center mt-10">
          <a
            href="#"
            className="flex items-center justify-center text-brand-purple hover:text-brand-orange transition-colors duration-500 ease-in-out"
          >
            See Full Plan{" "}
            <MoveRight className="ml-2 w-4 h-4 mt-1" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
