import "./Footer.css"; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
        
          <img
            src="/images/dog.png"
            alt="Petpew Logo"
            className="footer-logo"
          />
          <span>PetBuddy</span>
          <p className="footer-description">
            Petpew’s holistic pet foods prioritize nutrient-rich ingredients for
            pet vitality.
          </p>
          <div className="footer-social-icons">
            <a href="/">
              <img src="/path-to-social-icon1.png" alt="Facebook" />
            </a>
            <a href="/">
              <img src="/path-to-social-icon2.png" alt="Instagram" />
            </a>
            <a href="/">
              <img src="/path-to-social-icon3.png" alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="footer-section about-section">
          <h4>About</h4>
          <p>(+99)12345678</p>
          <p>information@supp.net</p>
        </div>

        <div className="footer-section quick-links-section">
          <h4>Quick links</h4>
          <ul>
            <li>
              <a href="/">Cat product</a>
            </li>
            <li>
              <a href="/">Dog product</a>
            </li>
            <li>
              <a href="/">Rabbit product</a>
            </li>
            <li>
              <a href="/">Reptile product</a>
            </li>
          </ul>
        </div>

        <div className="footer-section subscribe-section">
          <p>Join our list and get 15% off your first purchase!</p>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="your email"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;