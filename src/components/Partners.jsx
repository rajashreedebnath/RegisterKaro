import React from "react";
import Marquee from "react-fast-marquee";

import adobe from "../assets/logos/adobe.png";
import amazon from "../assets/logos/amazon.png";
import amd from "../assets/logos/amd.png";
import dell from "../assets/logos/dell.png";
import google from "../assets/logos/google.png";
import hp from "../assets/logos/hp.png";
import huawei from "../assets/logos/huawei.png";
import lee from "../assets/logos/lee.png";
import mcdonalds from "../assets/logos/mcDonald.png";
import slack from "../assets/logos/slack.png";
import target from "../assets/logos/target.png";

const partners = [
  adobe,
  amazon,
  amd,
  dell,
  google,
  hp,
  huawei,
  lee,
  mcdonalds,
  slack,
  target,
  google,
];

const shuffledPartners = [
  dell,
  mcdonalds,
  amazon,
  slack,
  hp,
  google,
  lee,
  adobe,
  amd,
  target,
  huawei,
  hp,
];

const Partners = () => {
  return (
    <div className="bg-[#f3f6fd] py-16">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold">
          We <span className="text-orange-400">partner</span> with the best,
        </h2>
        <h2 className="text-4xl font-bold mt-2">
          so that your business can flow{" "}
          <span className="text-orange-400">seamlessly.</span>
        </h2>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
          Your business needs numerous expertise and that's why we are providing
          you the best services with the best names in the field.
        </p>
      </div>

      {/* First Marquee */}
      <Marquee direction="left" gradient={false} speed={50} pauseOnHover>
        {partners.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center mx-8">
            <div className="bg-white w-24 h-24 p-4 rounded-lg shadow-md flex items-center justify-center">
              <img
                src={logo}
                alt={`Partner logo ${idx}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </Marquee>

      {/* Space between rows */}
      <div className="my-8"></div>

      {/* Second Marquee */}
      <Marquee direction="right" gradient={false} speed={40} pauseOnHover>
        {shuffledPartners.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center mx-8">
            <div className="bg-white w-24 h-24 p-4 rounded-lg shadow-md flex items-center justify-center">
              <img
                src={logo}
                alt={`Partner logo shuffled ${idx}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;