import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">For Every Soul</div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header">
        <div className="logo">For Every Soul</div>
        <button className="cta-button">Get Involved</button>
      </header>

      {/* Main Section */}
      <section className="main-section">
        <div>
          <h1 className="title">Make a Difference Today</h1>
          <p className="description">
            Your donation can change lives and help those in need. Every little bit counts.
          </p>
          <button className="donate-button">Donate Now</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-text">Thank you for supporting a better world!</div>
        <div className="social-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </footer>
    </div>
  );

};


export default Homepage;
