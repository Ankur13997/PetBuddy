import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"; // Assuming you have a CSS file for styling
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import SubscribeSection from '../components/SubscribeSection';
import HomePet from "../components/HomePet";
// Update the image path as needed

const Home = () => {
  return (
    <div className="home-container">
      {/* Top bar for the promotion */}
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Find Your Perfect Companion Today</h1>
          <p>
          Welcome to PetBuddy, where every pet deserves a loving home!
          
          </p>
          <Link to="/pets" className="btn-buy-now">
            Explore Now
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/home_logo.jpg" alt="Happy dog" />
        </div>
      </section>

      

      <section className="nutrition-philosophy">
        <h2>Our Adoption Philosophy</h2>
        <p>
      
        Our mission is to connect pets in need with families ready to welcome them.
        </p>

        <div className="nutrition-features">
          <div className="feature-item">
            <img src="/images/home.png" alt="Quality Product" />
            <h3>Loving Homes</h3>
            <p>We match pets with caring families for a brighter future.</p>
          </div>

          <div className="feature-item">
            <img src="/images/heart.png" alt="Real Food" />
            <h3>Heartfelt Care</h3>
            <p>
            Every pet receives the attention and love they deserve.
            </p>
          </div>

          <div className="feature-item">
            <img src="/images/support.png" alt="24/6 Support" />
            <h3>Support & Guidance</h3>
            <p>Our team is here to help you every step of the way.</p>
          </div>

          <div className="feature-item">
            <img src="/images/community.png" alt="Premium Ingredient" />
            <h3>Community</h3>
            <p>
            Join a network of pet lovers dedicated to making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* New Section with Woman and Dog */}
      <section className="welcome-section">
        <div className="welcome-image">
          <img src='/images/about.png'alt="Woman holding a dog" />
        </div>
        <div className="welcome-text">
          <h2>Welcome to The Pet Care Company</h2>
          <p>
          At PetBuddy, we are dedicated to finding loving homes for pets in need. 
          Every animal deserves a second chance and a family to call their own. 
          Our commitment extends beyond adoption; we provide resources and support to ensure a smooth transition for both pets and their new owners. 
          Because when pets are loved, they bring joy and happiness to our lives.
          </p>
          <Link to="/about" className="btn-about-us">
            About Us
          </Link>
        </div>
      </section>
      <HomePet/>
      <Testimonials />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Home;
