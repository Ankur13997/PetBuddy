import React from "react";
import "./Error.css"; // Optional: For custom CSS styles
import Header from "./Header";
import Footer from "./Footer";
const Error = () => {
  const handleBackToHome = () => {
    window.location.href = "/"; // Redirect to home page
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
