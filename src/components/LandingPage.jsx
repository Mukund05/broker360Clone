import React, { useEffect, useState } from "react";
import HeroSection from "../elements/HeroSection";
import Description from "../elements/Description";
import Landingpageimg from "../elements/Landingpageimg";
import Listing from "../elements/Listing";
import Header from "../elements/Header";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import API from "../Api";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const userId = localStorage.getItem("userId");
  //   if (token && userId) {
  //     API.getProfile(); // Set the token in the headers if using axios or similar
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/login");
  };

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
