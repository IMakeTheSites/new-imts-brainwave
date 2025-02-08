import { curve } from "../assets";
import Mark_Headshot from "../assets/Mark_Wlodawski_Headshot.jpeg";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  return (
    <Section
      className="pt-[12-rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 mx-auto text-center mb-[4rem] max-w-[52rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Hi, I&apos;m Mark Wlodawski
            <span className="inline-block relative">
              Web and Software Developer
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Mark is a dedicated and experienced developer with a wide range of
            skills. Unleash the power of a knowledgeable developer on your
            application today!
          </p>
          <Button href="/services" white>
            Get Started
          </Button>
        </div>
        <div className="relative mx-auto md:max-w-5xl xl:mb-24 max-w-[23rem]">
          <div className="relative z-1 rounded-2xl p-0.5 bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div>
                <img
                  src={Mark_Headshot}
                  alt="robot"
                  className="w-full"
                  width={1440}
                  height={1800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
