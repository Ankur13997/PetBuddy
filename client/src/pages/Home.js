import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import SubscribeSection from "../components/SubscribeSection";
import HomePet from "../components/HomePet";
import HomeHeroSection from "../components/HomeHeroSection";
import AdoptionPhilosophy from "../components/AdoptionPhilosophy";
import WelcomeSection from "../components/WelcomeSection";
// Update the image path as needed

const Home = () => {
  return (
    <div className="home-container">
      {/* Top bar for the promotion */}
      <Header />

      {/* Hero Section */}
      <HomeHeroSection />

      <AdoptionPhilosophy />

      <WelcomeSection />
      <HomePet />
      <Testimonials />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Home;
