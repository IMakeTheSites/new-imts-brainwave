import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";

const Bio = () => {
  return (
    <Section className="overflow-hidden" id="bio">
      <div className="container md:pb-10">
        <Heading
          title="A Little About Mark's Background"
          tag="More than you ever wanted to know"
        />
        <div className="relative grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-3 lg:gap-4 md:pb-[3rem]">
          {roadmap.map((item) => {
            const status = "Earned";

            return (
              <div
                key={item.id}
                className={`p-0.25 rounded-[1.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-4 md:p-5 bg-n-8 rounded-[1.4375rem] overflow-hidden">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="grid"
                      className="w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-full mb-4">
                      <Tagline className="text-xs">{item.date}</Tagline>
                      <div className="flex items-center px-2 py-2 bg-n-1 rounded text-n-8">
                        <img
                          src={check2}
                          className="mr-1.5"
                          width={12}
                          height={12}
                          alt={status}
                        />
                        <div className="tagline text-xs">{status}</div>
                      </div>
                    </div>
                    <div className="mb-4 -mx-4 -mt-4">
                      <img
                        src={item.imageUrl}
                        className="w-full h-32 object-cover"
                        width={300}
                        height={128}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h5 mb-2 text-base">{item.title}</h4>
                    <p className="body-2 text-sm text-n-4 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Bio;
