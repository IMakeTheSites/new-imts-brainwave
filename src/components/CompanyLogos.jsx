import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <div className="flex justify-center">
        <ul className="flex gap-8 items-center">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center"
              key={index}
            >
              <div className="w-32 h-20 bg-n-8 rounded-lg p-4 flex items-center justify-center border border-n-6">
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyLogos;
