import { services } from "../constants";
import { check } from "../assets";
import Button from "./Button";

const ServicesList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap justify-center">
      {services.map((item) => (
        <div
          key={item.id}
          className="w-[24rem] max-lg:w-full flex flex-col px-6 py-8 bg-n-8 border border-n-6 rounded-[2rem] [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <div className="h-40 mb-6 pb-4">
            <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 text-n-1/50 leading-relaxed">
              {item.description}
            </p>
          </div>
          
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:imakethesites@gmail.com"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
