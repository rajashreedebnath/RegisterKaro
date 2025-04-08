"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const feeds = [
  "ADT 1 filling - Rs.1,000",
  "Monthly GST fillings - Rs.10,000",
  "Board Minutes preparation - Rs.1,000",
  "Annual AOC 4 filling - Rs.2,000",
  "Annual MGT - 7 filling - Rs.2,000",
  "DIR 3KYC for all the directors - Rs.3,000",
  "Bookkeeping and Accounting - Rs.5,000",
  "Payroll compliance - Rs.5,000",
  "Leave Management - Rs.2,000",
  "Financial Preparation and Audit support - Rs.4,000",
  "Annual general Meeting Minutes - Rs.1,000",
  "Maintenance of Statutory Registers - Rs.1,000",
  "Income Tax Return filling for the Company - Rs.4,000",
  "Income Tax Return filling of the Directors and Shareholders - Rs.4,000",
  "INC 20A filling - Rs.1,000",
];

export default function GrowYourBusiness() {
  const [checkedItems, setCheckedItems] = useState(Array(feeds.length).fill(false));
  const [registerKaroChecked, setRegisterKaroChecked] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % feeds.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFeedCheckbox = (index) => {
    setCheckedItems((prev) => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };

  const toggleRegisterKaroCheckbox = () => {
    setRegisterKaroChecked((prev) => !prev);
  };

  return (
    <section className="bg-gradient-to-b from-orange-50 via-white to-blue-50 py-12">
      <h1 className="text-center text-3xl font-bold mb-12 text-gray-700 px-4 animate-fade-down">
        Grow Your Business instead of Complex Registration processes and leave it for us
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-10 items-center px-4 md:px-16">
        
        {/* Left Box */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="bg-orange-100 shadow-2xl rounded-3xl p-6 w-full md:w-1/2 relative overflow-hidden h-96"
        >
          <h2 className="text-2xl mb-6 text-center text-gray-800">
            With other service providers you would have to pay for each compliance filing individually!
          </h2>
          <div className="h-72 overflow-hidden relative">
            <div
              className="flex flex-col transition-transform duration-700 ease-in-out"
              style={{ transform: `translateY(-${scrollIndex * 4.5}rem)` }}
            >
              {feeds.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-white rounded-lg shadow-md p-3 mb-4 mx-6 hover:bg-orange-50 transition-all"
                >
                  <input
                    type="checkbox"
                    checked={checkedItems[idx]}
                    onChange={() => toggleFeedCheckbox(idx)}
                    className="accent-orange-400 w-5 h-5 mr-4 cursor-pointer"
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Circle */}
          <div className="absolute top-[80px] right-[-20px] bg-orange-400 text-white font-bold text-lg w-20 h-20 flex items-center justify-center rounded-full shadow-lg animate-bounce">
            49k
          </div>
        </motion.div>

        {/* Right Box */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="bg-blue-100 shadow-2xl rounded-3xl p-6 w-full md:w-1/2 relative overflow-hidden h-96 flex flex-col items-center text-center"
        >
          <h2 className="text-2xl mb-6 text-gray-800">Or you could</h2>
          
          <div
            className="flex items-center bg-blue-50 rounded-md p-2 w-full mb-6 cursor-pointer hover:bg-blue-100 transition"
            onClick={toggleRegisterKaroCheckbox}
          >
            <input
              type="checkbox"
              checked={registerKaroChecked}
              onChange={toggleRegisterKaroCheckbox}
              className="accent-orange-400 w-5 h-5 mr-2 cursor-pointer"
            />
            <span className="font-semibold text-gray-800">Use RegisterKaro</span>
          </div>
          
          <p className="text-gray-600 mb-6 px-4">
            Get all your <span className="font-semibold">Compliance</span> done with the help of{" "}
            <span className="font-semibold">Industry Experts</span> and channelize that precious time
            to grow your <span className="font-semibold">business</span>.
          </p>
          
          <button className="bg-orange-400 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-500 transition-all shadow-md">
            Get Started!
          </button>
        </motion.div>

      </div>
    </section>
  );
}
