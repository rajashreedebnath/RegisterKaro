import { motion } from "framer-motion";
import personImage from "../assets/person.jpg";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-br from-[#848889] to-[#f0f4fa] py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        {/* Left Side - Images */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-fit"
          >
            {/* Background Image */}
            <img
              src="https://www.registerkaro.in/_next/static/media/why_bg.99c3588f.svg"
              alt="Background"
              className="w-[506px] h-[640px] object-contain"
            />

            {/* Main Person Image */}
            <img
              src={personImage}
              alt="Person"
              className="absolute top-[91px] right-[10px] w-[435px] h-[461px] z-20 object-contain"
            />

            {/* Rating Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-4 left-4 bg-white p-4 rounded-2xl shadow-lg z-30 w-40 animate-bounce-slow"
            >
              <div className="text-customBlue font-bold text-lg">
                100+ Ratings
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Trusted by 20,000+ clients
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-customOrange"
          >
            Why choose us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-customBlue mb-8 max-w-lg leading-relaxed"
          >
            Our All-In-One Platform And Team Of Experts will help direct you in
            the right path and ensure that your business starts the right way in
            record time.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Affordable",
              "Compliance Ensured",
              "Simplified Process",
              "On-time Service",
              "Instant Response",
              "Industry Experts",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="flex items-center p-4 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div className="w-6 h-6 flex items-center justify-center bg-customOrange rounded-full text-white font-bold mr-4">
                  ✓
                </div>
                <div className="text-customBlue font-semibold">{feature}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
