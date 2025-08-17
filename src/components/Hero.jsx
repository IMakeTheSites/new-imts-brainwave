import { curve, heroBackground } from "../assets";
import Mark_Headshot from "../assets/Mark_Wlodawski_Headshot.png";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
// import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
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
          <Button href="/services" white>
            Get Started
          </Button>
        </div>
        
        {/* Personal Profile Style Layout */}
        <div className="relative mx-auto md:max-w-5xl xl:mb-24 max-w-[95%]">
          <div className="relative z-1 rounded-2xl p-0.5 bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] p-10 border border-n-6">
              {/* Friendly Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-n-1">Meet Mark Wlodawski</h3>
                <p className="text-n-3 mt-2">Your friendly neighborhood developer</p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-start gap-10">
                {/* Headshot with Casual Style */}
                <div className="flex-shrink-0 -mt-4">
                  <div className="relative">
                    <div className="w-56 h-56 rounded-2xl overflow-hidden border-2 border-n-6 bg-gradient-to-br from-n-7 to-n-8 p-2 shadow-lg">
                      <img
                        src={Mark_Headshot}
                        alt="Mark Wlodawski Headshot"
                        className="w-full h-full object-cover object-center rounded-xl"
                        width={224}
                        height={224}
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-400 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
                      Available
                    </div>
                  </div>
                </div>
                
                {/* Casual Description */}
                <div className="flex-grow text-left">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✨</span>
                      <span className="text-n-2 text-lg">Senior Fullstack Developer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">🎯</span>
                      <span className="text-n-2 text-lg">13+ years experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">🤖</span>
                      <span className="text-n-2 text-lg">AI/ML specialist</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">🐕</span>
                      <span className="text-n-2 text-lg">Dog walker & people person</span>
                    </div>
                    <div className="mt-6 p-4 bg-n-7 rounded-xl border border-n-6">
                      <p className="text-base text-n-3">
                        "Hey there! I love building awesome websites and apps. When I'm not coding, 
                        you'll find me walking my dog or chatting with fellow developers. Let's build something amazing together!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img
            src={heroBackground}
            alt="robot"
            className="w-full"
            width={1440}
            height={1800}
          />
        </div>
        <BackgroundCircles />
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
