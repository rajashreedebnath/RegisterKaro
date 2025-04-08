import React from "react";

const categories = [
  {
    title: "BUSINESS REGISTRATION",
    links: [
      "Private Limited Company Registration",
      "Public Limited Company Registration",
      "LLP Registration",
      "One Person Company Registration",
      "Partnership Firm Registration",
      "Sole Proprietorship Registration",
      "Indian Subsidiary Registration",
      "Nidhi Company Registration",
      "Producer Company Registration",
      "Startup India Registration",
    ],
  },
  {
    title: "NGO",
    links: ["Section 8 Company Registration", "Trust Registration", "NGO Registration"],
  },
  {
    title: "COMPLIANCES",
    links: [
      "Annual Compliance of LLP",
      "Annual Compliance For Private Limited",
      "Nidhi Company Annual Compliance",
    ],
  },
  {
    title: "CHANGE IN BUSINESS",
    links: [
      "Change In Directors",
      "Change in Registered Office",
      "Increase in Authorized Share Capital",
      "Winding Up of a Company",
    ],
  },
  {
    title: "BIS & CDSCO",
    links: [
      "BIS Certification",
      "BIS FMCS Certification",
      "BIS CRS Certification",
      "ISI Mark Certification",
      "CDSCO Registration",
      "Medical Device Registration",
    ],
  },
  {
    title: "GOVERNMENT REGISTRATION",
    links: [
      "Trademark Registration",
      "IEC Registration",
      "ESI Registration",
      "EPF Registration",
      "MSME Registration",
      "Shop and Establishment Registration",
    ],
  },
  {
    title: "FSSAI",
    links: [
      "FSSAI License",
      "FSSAI State License",
      "FSSAI Central License",
      "FPO Mark Certification",
    ],
  },
  {
    title: "ENVIRONMENTAL",
    links: [
      "EPR Registration",
      "PRO Authorization",
      "Plastic Waste Authorization",
      "Environmental Clearance",
      "EPR Authorization E-Waste",
    ],
  },
];

const StartupDropdown = ({ closeDropdown, isMobile = false }) => {
  return (
    <div
      className={`${
        isMobile
          ? "grid grid-cols-1 gap-4 mt-2"
          : "absolute left-1/2 top-full transform -translate-x-1/2 bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-[95vw] max-w-[1200px] z-50 border border-gray-200"
      }`}
    >
      {categories.map((category, index) => (
        <div key={index} className={`${isMobile ? "border-b pb-3" : ""}`}>
          <div className="flex items-center space-x-2 mb-2">
            <img
              src="https://www.registerkaro.in/_next/static/media/service-icon.22e35367.svg"
              alt=""
              className="w-5 h-5"
            />
            <h4 className="text-sm font-bold text-customBlue uppercase">
              {category.title}
            </h4>
          </div>
          <ul className="space-y-2">
            {category.links.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-sm text-[#212529] hover:text-customOrange block transition"
                  onClick={closeDropdown}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StartupDropdown;
