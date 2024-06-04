import React from "react";
import HeroSection from "../elements/HeroSection";
import Description from "../elements/Description";
import Landingpageimg from "../elements/Landingpageimg";
import Listing from "../elements/Listing";
import Header from "../elements/Header";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import { useAuth } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      {isAuthenticated ? <CustomHeader /> : <Header />}
      <HeroSection />
      <Description />
      <Landingpageimg />
      <Listing />
      <Footer />
    </div>
  );
};

export default LandingPage;
