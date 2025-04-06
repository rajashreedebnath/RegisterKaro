import React from "react";
import CountUpNumber from "./CountUpNumber";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-white pt-[100px] flex flex-col md:flex-row justify-center items-center w-full"
    >
      {/* Floating orange blob */}
      <div className="absolute top-[150px] left-[-30px] w-[100px] h-[100px] rounded-full opacity-30 bg-[#ffa229] shadow-[2px_0_15px_5px_rgba(1,6,33,0.06)] animate-moveUpDown"></div>

      <div className="w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-16 pt-10 relative">
          {/* Left Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-[#161E2E] text-[25px] font-bold">
              We take care of ALL your business compliance needs
            </p>
            <h1 className="text-[42px] md:text-[56px] font-bold leading-tight text-[#164760]">
              Register<span className="text-[#FFA229]">Karo</span>
            </h1>
            <p className="text-gray-700 mt-2 text-[20px]">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various, registrations, tax filings,
              and other legal matters.
            </p>
            <button className="bg-[#FFA229] text-white font-semibold px-6 py-3 mt-6 rounded-md">
              Get Started
            </button>
          </div>

          {/* Right Column */}
          <div className="relative w-full md:w-[480px] max-w-[480px] mt-10 md:mt-0 flex justify-center items-end">
            {/* Smaller Orange Polygon Background */}
            <div className="absolute bottom-0 right-0 w-[90%] h-[420px] bg-[#ffa229] [clip-path:polygon(10%_0,90%_0,100%_10%,100%_90%,90%_100%,10%_100%,0_90%,0_10%)] z-0"></div>

            {/* Smaller Hero Image */}
            <img
              alt="RegisterKaro"
              src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero_model.1595b1c8.webp&w=1080&q=75"
              className="relative z-10 w-[260px] md:w-[360px] h-auto"
            />

            {/* Stat Boxes (same) */}
            <div className="absolute top-[30%] left-[-10px] bg-white px-6 py-4 rounded-lg shadow-md w-[180px] z-20">
              <h3 className="text-[1.5rem] font-semibold text-[#161e2e]">
                <CountUpNumber end={500} />
              </h3>
              <p className="text-sm text-gray-600 leading-snug">
                Businesses Incorporated Every Month
              </p>
            </div>

            <div className="absolute bottom-24 left-0 bg-white px-6 py-4 rounded-lg shadow-md w-[180px] z-20">
              <h3 className="text-[1.5rem] font-semibold text-[#161e2e]">
                <CountUpNumber end={20000} />
              </h3>
              <p className="text-sm text-gray-600 leading-snug">
                Clients all over India
              </p>
            </div>

            <div className="absolute bottom-24 right-0 translate-x-[40%] bg-white px-6 py-4 rounded-lg shadow-md w-[200px] z-20">
              <h3 className="text-[1.5rem] font-semibold text-[#161e2e]">
                <CountUpNumber end={250} />
              </h3>
              <p className="text-sm text-gray-600 leading-snug">
                Professionals Network
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
