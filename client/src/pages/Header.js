import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useUser } from "./UserContext";
const Header = () => {
  const { userId, username, isAdmin, setUserId, setUsername } = useUser(); // Get user info and setter from context
  const isLoggedIn = Boolean(userId);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    // Reset user context to null
    setUserId(null);
    setUsername(null);
    // Redirect to login page
    navigate("/login");
  };

  return (
    <>
      <div className="top-bar">
        <p></p>
        <div className="contact-infor">
          <span>(+91)7588130302</span>
          <span>ankur.130120@gmail.com</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="linklogo">
          <div className="logo">
            <img src="/images/dog.png" alt="PetPaw Logo" />
            <span>PetBuddy</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/pets">Pets List</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {isAdmin && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </ul>

        {/* Conditional User Links */}
        <div>
          <ul className="nav-links">
            {isLoggedIn ? (
              <>
                <li className="profile-link">
                  <Link to="/profile">
                    <FaUserCircle size={24} className="profile-icon" />
                    {username ? username : "Profile"}
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout}>
                    <FaSignOutAlt />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
