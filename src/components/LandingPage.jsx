import React from "react";
import HeroSection from "../elements/HeroSection";
import Description from "../elements/Description";
import Landingpageimg from "../elements/Landingpageimg";
import Listing from "../elements/Listing";
import Header from "../elements/Header";
import CustomFooter from "../elements/CustomFooter";
import Footer from "../elements/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Description />
      <Landingpageimg />
      <Listing />
      <Footer />
    </div>
  );
};

export default LandingPage;
