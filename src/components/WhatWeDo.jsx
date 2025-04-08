// WhatWeDo.jsx
import { motion } from "framer-motion";
import womanLaptop from "../assets/womanlaptop.png";
import smallTeam from "../assets/smallteam.png";
import menWorking from "../assets/menworking.png";

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-br from-[#d8bfda] to-[#879c4f] py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h4 className="text-xl text-gray-600 uppercase">What We Do</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Receive support at every stage of business development.
          </h2>
          <p className="text-gray-600">
            Launch, grow and scale with ease. Each of our clients has a
            dedicated team that is committed to answering all queries within 24
            hours, so you can rely on our helpful and professional support
            throughout your business journey.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-400 hover:bg-orange-500 text-white rounded-full px-6 py-3">
              Popular Services
            </button>
            <button className="border border-gray-400 text-gray-800 rounded-full px-6 py-3">
              Get Started →
            </button>
          </div>
        </motion.div>

        {/* Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center min-h-[500px]"
        >
          {/* Background Balls */}
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px]">
            {/* Dotted Circle - moves to Top Right */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{ x: 40, y: -40 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 8,
                ease: "easeInOut",
              }}
              className="absolute w-[250px] h-[250px] bg-[radial-gradient(#1e3a8a_1.5px,transparent_1.5px)] [background-size:10px_10px] rounded-full opacity-60"
            ></motion.div>

            {/* Solid Circle - moves to Bottom Left */}
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{ x: -40, y: 40 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 8,
                ease: "easeInOut",
              }}
              className="absolute top-16 left-24 w-[250px] h-[250px] bg-pink-300 rounded-full opacity-70"
            ></motion.div>
          </div>

          {/* Floating Small Image - Top Left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -top-10 left-0 md:left-[-40px] z-20"
          >
            <div className="rounded-2xl overflow-hidden w-[160px] md:w-[200px] h-[160px] md:h-[160px]">
              <img
                src={smallTeam}
                alt="Small Team"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-10"
          >
            <div className="rounded-3xl overflow-hidden w-[250px] md:w-[320px] h-[350px] md:h-[420px]">
              <img
                src={womanLaptop}
                alt="Woman with Laptop"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Floating Small Image - Bottom Right */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-[-20px] right-0 md:right-[-40px] z-20"
          >
            <div className="rounded-2xl overflow-hidden w-[160px] md:w-[200px] h-[160px] md:h-[160px]">
              <img
                src={menWorking}
                alt="Team Working"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Timeline Steps */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
        {[
          { label: "Sole Trader", icon: "👨‍💼" },
          { label: "Limited Company", icon: "🏢" },
          { label: "Growing Business", icon: "📈" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center text-3xl">
              {item.icon}
            </div>
            <p className="text-gray-700">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
