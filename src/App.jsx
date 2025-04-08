import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs"
import Services from "./components/Services";
import GrowYourBusiness from "./components/GrowYourBusiness"
import Partners from "./components/Partners";
import WhatWeDo from "./components/WhatWeDo";
import CustomerReview from "./components/CustomerReview";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <GrowYourBusiness />
      <Partners />
      <WhatWeDo />
      <CustomerReview />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
