'use client';

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import profile1 from '../assets/review/review1.png';
import profile2 from '../assets/review/review2.png';

import googleLogo from '../assets/logos/adobe.png';
import facebookLogo from '../assets/logos/amazon.png';

const reviews = [
  {
    name: "Muruganandan Palanisamy",
    platform: "Google",
    review: "Professional, Very Professional Service...",
    profileImage: profile1,
    platformLogo: googleLogo,
  },
  {
    name: "Another Customer",
    platform: "Facebook",
    review: "Amazing experience with RegisterKaro...",
    profileImage: profile2,
    platformLogo: facebookLogo,
  },
];

export default function CustomerReview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-md md:text-lg">
            Join thousands of happy entrepreneurs using <span className="font-semibold text-orange-500">RegisterKaro</span>
          </p>
        </div>

        {/* Review Card */}
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl text-center space-y-6"
            >
              <div className="flex justify-center">
                <img
                  src={currentReview.platformLogo}
                  alt="Platform Logo"
                  className="h-8"
                />
              </div>
              <p className="text-gray-700 text-lg md:text-xl">
                "{currentReview.review}"
              </p>

              <div className="flex flex-col items-center gap-2">
                <img
                  src={currentReview.profileImage}
                  alt={currentReview.name}
                  className="w-16 h-16 rounded-full border-4 border-orange-400 object-cover"
                />
                <h4 className="font-semibold text-gray-800">{currentReview.name}</h4>
                <p className="text-gray-500 text-sm">{currentReview.platform}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
