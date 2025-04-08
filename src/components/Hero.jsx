"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

const images = [hero1, hero2, hero3, hero4];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(Math.random() > 0.5 ? "left" : "right");
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#4f696e] to-[#a89258] px-20 pt-40 pb-20 overflow-hidden">
      <div className="absolute bottom-[100px] left-[-30px] w-[100px] h-[100px] rounded-full opacity-30 bg-[#ffa229] shadow-[2px_0_15px_5px_rgba(1,6,33,0.06)] animate-moveUpDown"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.4 },
              },
            }}
            className="space-y-6 text-center md:text-left"
          >
            {/* Title */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: -20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-2xl md:text-2xl font-extrabold text-white leading-tight"
            >
              We take care of ALL your business compliance needs
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1.2, ease: "easeOut" },
                },
              }}
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-3xl md:text-5xl font-bold text-[#ffa229]"
            >
              <span className="text-customBlue">Register</span>Karo
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.4, ease: "easeOut" },
                },
              }}
              animate={{
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-lg md:text-xl text-gray-300"
            >
              An online business compliance platform that helps entrepreneurs
              and other individuals with various, registrations, tax filings,
              and other legal matters.
            </motion.p>

            {/* Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.6, ease: "easeOut" },
                },
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(255,162,41,0.8)",
              }}
              className="inline-block"
            >
              <button className="px-8 py-4 bg-[#ffa229] hover:bg-[#e68a00] text-white rounded-full text-lg font-semibold shadow-xl transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative h-[400px]">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Hero"
            initial={{
              opacity: 0,
              scale: 0.8,
              x: direction === "left" ? -100 : 100,
              y: direction === "left" ? 50 : -50,
            }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-3xl"
          />
        </div>

        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#ffa229] rounded-full blur-3xl opacity-100 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#7d6f84] rounded-full blur-2xl opacity-50 animate-pulse" />
      </div>
    </section>
  );
}
