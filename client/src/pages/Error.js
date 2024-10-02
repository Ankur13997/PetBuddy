import React from "react";
import "../css/Error.css"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
const Error = () => {
  const handleBackToHome = () => {
    window.location.href = "/"; 
  };

  return (
    <>
      <Header />

      <div className="not-found-container">
        <h1 className="error-code">404</h1>
        <img
          src="/images/404.png" // Replace this with your image path
          alt="Cute dog tearing paper"
          className="error-image"
        />
        <h2 className="error-message">Page not found</h2>
        <p>
          This page doesn’t exist or was removed! We suggest you back to home
        </p>
        <button onClick={handleBackToHome} className="back-home-button">
          Back to home
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Error;
