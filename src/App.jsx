import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      <div>

      <Navbar />
      </div>

      <div className="w-full bg-gray-100 text-gray-900">
        <Hero />
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default App;
