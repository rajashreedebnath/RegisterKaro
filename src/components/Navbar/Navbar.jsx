import React, { useState } from "react";
import StartupDropdown from "./StartupDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStartupDropdown, setShowStartupDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleStartupDropdown = () => {
    setShowStartupDropdown((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-[#efefe5] bg-opacity-100 fixed top-0 z-[9999] w-full">
        <div className="container flex items-center justify-between py-2 px-20 max-w-screen-xl mx-auto relative">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              alt="RegisterKaro logo"
              loading="lazy"
              width="48"
              height="48"
              className="max-w-full h-auto"
              src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.77348f99.png&w=96&q=75"
            />
            <h1 className="mb-0 text-xl font-bold">
              <span className="text-[#ffa229]">
                <span className="text-[#164760]">Register</span>Karo
              </span>
            </h1>
          </a>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle navigation"
            className="lg:hidden p-[0.25rem] px-[0.75rem] text-[#164760] bg-transparent border-[#d9d9d9] border-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="block w-[1.5em] h-[0.2em] bg-[#212529] mb-[0.3em] rounded-md"></span>
            <span className="block w-[1.5em] h-[0.2em] bg-[#212529] mb-[0.3em] rounded-md"></span>
            <span className="block w-[1.5em] h-[0.2em] bg-[#212529] rounded-md"></span>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full right-0 w-[60%] h-[calc(100vh-64px)] bg-white shadow-md z-[9998] transition-all duration-300 overflow-y-auto rounded-bl-xl">
              <div className="flex flex-col justify-start px-6 py-4 space-y-6">
                <a
                  href="/"
                  onClick={toggleMenu}
                  className="text-lg font-semibold text-[#212529] hover:text-[#ffa229]"
                >
                  Home
                </a>

                {/* Startup Dropdown Toggle for Mobile */}
                <div>
                  <button
                    onClick={toggleStartupDropdown}
                    className="text-lg font-semibold text-[#212529] hover:text-[#ffa229] flex justify-between w-full"
                  >
                    <span>Startup</span>
                    <span className="ml-2">
                      {showStartupDropdown ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 256 256">
                          <polyline points="48 160 128 80 208 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 256 256">
                          <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {showStartupDropdown && (
                    <div className="mt-4 pl-4 pt-4 border-2 border-[#dadada] rounded-[5px] shadow-[0_6px_20px_0_rgba(1,6,33,.06)] p-4 overflow-hidden">
                      <StartupDropdown closeDropdown={toggleStartupDropdown} isMobile={true} />
                    </div>
                  )}
                </div>

                {/* Other links */}
                <a href="/blog" onClick={toggleMenu} className="text-lg font-semibold text-[#212529] hover:text-[#ffa229]">Blog</a>
                <a href="/contact-us" onClick={toggleMenu} className="text-lg font-semibold text-[#212529] hover:text-[#ffa229]">Contact Us</a>
                <a href="/about-us" onClick={toggleMenu} className="text-lg font-semibold text-[#212529] hover:text-[#ffa229]">About Us</a>

                <a href="tel:+918447746183" className="w-full flex justify-center items-center bg-[#ffa229] text-white font-semibold text-lg py-3 rounded-full shadow hover:bg-[#e6951f] transition">
                  <img alt="RegisterKaro phone" className="w-5 h-5 mr-2" src="https://www.registerkaro.in/_next/static/media/phone.5caf28ea.svg" />
                  +918447746183
                </a>
              </div>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="/" className="text-[#164760] hover:text-[#ffa229] text-lg font-semibold whitespace-nowrap">Home</a>

            {/* Startup Toggle Button (no dropdown here) */}
            <button
              onClick={toggleStartupDropdown}
              className="flex items-center text-[#164760] hover:text-[#ffa229] text-lg font-semibold whitespace-nowrap"
            >
              Startup
              <span className="ml-1">
                {showStartupDropdown ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 256 256">
                    <polyline points="48 160 128 80 208 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 256 256">
                    <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  </svg>
                )}
              </span>
            </button>

            <a href="/blog" className="text-[#164760] hover:text-[#ffa229] text-lg font-semibold whitespace-nowrap">Blog</a>
            <a href="/contact-us" className="text-[#164760] hover:text-[#ffa229] text-lg font-semibold whitespace-nowrap">Contact Us</a>
            <a href="/about-us" className="text-[#164760] hover:text-[#ffa229] text-lg font-semibold whitespace-nowrap">About Us</a>

            <a href="tel:+918447746183" className="p-5 flex justify-center items-center bg-[#ffa229] text-white font-semibold text-lg py-3 rounded-full shadow hover:bg-[#e6951f] transition">
              <img alt="RegisterKaro phone" className="w-5 h-5 mr-2" src="https://www.registerkaro.in/_next/static/media/phone.5caf28ea.svg" />
              +918447746183
            </a>
          </div>
        </div>
      </nav>

      {/* StartupDropdown rendered separately for desktop */}
      {showStartupDropdown && (
        <div className="hidden lg:block absolute top-[80px] left-1/2 -translate-x-1/2 z-[9998]">
          <StartupDropdown closeDropdown={toggleStartupDropdown} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
