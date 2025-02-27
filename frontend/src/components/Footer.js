import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

import instagramIcon from "../assets/instagram-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import logo from "../assets/logo.png"; 

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail(""); // Clear input field after subscription
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-container">
          <img src={logo} alt="For Every Soul Logo" className="footer-logo-img" />
          <h2 className="footer-logo">
            <Link to="/" className="footer-logo-link">FOR EVERY SOUL</Link>
          </h2>
        </div>
        <p>
          Together, we can make a difference today. Join our community and help create lasting change!
        </p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="footer-grid">
        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p><strong>ADDRESS:</strong> 533 Main Street, New York, NY 10001, USA</p>
          <p><strong>PHONE:</strong> (423) 643-5345</p>
          <p>
            <strong>EMAIL:</strong> 
            <a href="mailto:info@foreverysoul.com" className="footer-email"> info@foreverysoul.com</a>
          </p>
        </div>

        {/* Donation Section */}
        <div className="footer-column">
          <h3>Donation</h3>
          <ul>
            <li><Link to="/donation/medical">Medical</Link></li>
            <li><Link to="/donation/education">Education</Link></li>
            <li><Link to="/donation/disaster-relief">Disaster Relief</Link></li>
          </ul>
        </div>

        {/* About Section */}
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li><Link to="/about/mission">Our Mission</Link></li>
            <li><Link to="/about/team">Team</Link></li>
            <li><Link to="/about/impact">Impact</Link></li>
          </ul>
        </div>

        {/* How to Help Section */}
        <div className="footer-column">
          <h3>How to Help</h3>
          <ul>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/volunteer">Join as a Volunteer</Link></li>
            <li><Link to="/fundraise">Fundraise</Link></li>
            <li><Link to="/share">Share with Friends</Link></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="footer-bottom">
        <h3>Subscribe to our newsletter</h3>
        <div className="newsletter">
          <input 
            type="email" 
            placeholder="Enter your email address..." 
            value={email} 
            onChange={handleEmailChange}
          />
          <button onClick={handleSubscribe}>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
