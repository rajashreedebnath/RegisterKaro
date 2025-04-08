import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  { title: "Company Formation", icon: "🏢" },
  { title: "Company Secretarial Services", icon: "💼" },
  { title: "Virtual Office Address", icon: "💻" },
  { title: "Annual Compliance Services", icon: "📑" },
  { title: "VAT Registration, Preparation & Filing", icon: "💹" },
  { title: "Payroll Services", icon: "💸" },
  { title: "Bookkeeping Services", icon: "📚" },
  { title: "Live Online Webinars & Workshops", icon: "💻" },
];

const generateRandomPosition = () => ({
  top: Math.random() * 90 + "%",
  left: Math.random() * 90 + "%",
});

export default function Services() {
  const [ballPositions, setBallPositions] = useState([]);

  useEffect(() => {
    const positions = Array.from({ length: 5 }, () => generateRandomPosition());
    setBallPositions(positions);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Floating Balls */}
      {ballPositions.map((pos, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: idx * 0.5,
          }}
          className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-300 opacity-50 absolute"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-customOrange mb-10"
        >
          OUR SERVICES
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow group"
            >
              {/* Animated Icon */}
              <motion.div
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-4"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* more content */}
        <div className="m-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Our Client Services Team is always happy to talk to you about what
            is best for your needs.
          </h2>
          <p className="mt-4 text-gray-600">
            Contact our team to find out if we are the right fit for you.
          </p>

          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center text-orange-500 font-semibold hover:underline"
            >
              Explore our services
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#a77cc6] to-[#87b6c0] bg-transparent py-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6">
            {/* Big Card */}
            <div className="bg-white rounded-2xl w-full lg:w-3/4 shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300">
                {/* Section 1 */}
                <div className="p-6 flex flex-col justify-between w-full md:w-1/3">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                    Small business & Startup Accounts
                    </h3>
                    <p className="text-gray-600 mb-4">
                    Make sure your business meets its statutory requirements.
                    </p>
                    <div className="font-semibold">
                      Number of employees
                      <div className="flex items-center justify-between mt-1">
                        <div className="text-center w-full">0 - 10</div>
                        <div className="text-orange-400 ml-2">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="p-6 flex flex-col justify-between w-full md:w-1/3">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                    Growing Business Package
                    </h3>
                    <p className="text-gray-600 mb-4">
                    Additional support to help you reach your business goals.
                    </p>
                    <div className="font-semibold">
                      Number of employees
                      <div className="flex items-center justify-between mt-1">
                        <div className="text-center w-full">11 - 50</div>
                        <div className="text-orange-400 ml-2">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="p-6 flex flex-col justify-between w-full md:w-1/3">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                    Scale-Up Company Offer
                    </h3>
                    <p className="text-gray-600 mb-4">
                    Compliance, reporting & analysis of performance.
                    </p>
                    <div className="font-semibold">
                      Number of employees
                      <div className="flex items-center justify-between mt-1">
                        <div className="text-center w-full">50 +</div>
                        <div className="text-orange-400 ml-2">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Separate Card */}
            <div className="bg-white rounded-2xl p-6 w-full lg:w-1/4 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Setting up a business
                </h3>
                <p className="text-gray-600 mb-4">
                  Make sure your business meets its statutory requirements.
                </p>
                <div className="flex items-center justify-between mt-1">
                        <div className="text-center w-full font-semibold">Company Formation Services</div>
                        <div className="text-orange-400 ml-2">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
