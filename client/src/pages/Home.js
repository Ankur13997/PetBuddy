import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Assuming you have a CSS file for styling
import Header from "./Header";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import SubscribeSection from './SubscribeSection';
// Update the image path as needed

const Home = () => {
  return (
    <div className="home-container">
      {/* Top bar for the promotion */}
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Slow-Cooked Pet Food Optimal Nutrition & Taste</h1>
          <p>
            Welcome to our platform, your ultimate destination for fulfilling
            all your pet's food needs!
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
        <h2>Our Nutrition Philosophy</h2>
        <p>
          Slow-cooking at reduced temperatures results in heightened
          preservation of essential nutrients
        </p>

        <div className="nutrition-features">
          <div className="feature-item">
            <img src="/images/tick.png" alt="Quality Product" />
            <h3>Quality Product</h3>
            <p>Unprecedented safety and quality now for your pets</p>
          </div>

          <div className="feature-item">
            <img src="/images/bone.png" alt="Real Food" />
            <h3>Real Food</h3>
            <p>
              Human-grade meat, veggies, simple recipes—perfect for your dog
            </p>
          </div>

          <div className="feature-item">
            <img src="/images/phone-call.png" alt="24/6 Support" />
            <h3>24/6 Support</h3>
            <p>Reliable assistance available around the clock, every day</p>
          </div>

          <div className="feature-item">
            <img src="/images/natural.png" alt="Premium Ingredient" />
            <h3>Premium Ingredient</h3>
            <p>
              Ensure integrity of both nutritional content and whole food
              quality
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
            Ingredients in Petpew holistic pet foods are meticulously chosen for
            their nutrient-rich profiles and health benefits, ensuring your pets
            thrive both physically and mentally. We prioritize ingredients that
            offer optimal nutrition and well-being, because we understand that
            when pets are healthy, they exude vitality and joy.
          </p>
          <Link to="/about" className="btn-about-us">
            About Us
          </Link>
        </div>
      </section>

      <Testimonials />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Home;
