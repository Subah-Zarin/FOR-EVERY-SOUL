import React from "react";
import { Link } from "react-router-dom"; // For navigation
import "../styles/Homepage.css"; // Add custom styles

// Import the images
import educationImg from "../assets/education.jpg";
import medicalImg from "../assets/medical.jpg";
import waterImg from "../assets/water.jpg";
import foodImg from "../assets/food.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">GoHelp</div>
        <div className="nav-links">
          <input type="text" placeholder="Search..." className="search-bar" />
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Give Hope, Change Lives, Spread Love</h1>
          <p className="header-description">
            We help local nonprofits access the funding, tools, training, and
            support they need to serve their communities.
          </p>
          <button className="cta-button">Get Involved</button>
        </div>
        <div className="header-image">
          <img
            src="https://via.placeholder.com/300"
            alt="Helping hands"
            className="image"
          />
        </div>
      </header>

      {/* Main Section */}
      <section className="main-section">
        <h2>Our Focus Areas</h2>
        <div className="card-container">
          <div className="card">
            <img src={educationImg} alt="Child Education" />
            <h3>Child Education</h3>
          </div>
          <div className="card">
            <img src={medicalImg} alt="Medical Care" />
            <h3>Medical Care</h3>
          </div>
          <div className="card">
            <img src={waterImg} alt="Clean Water" />
            <h3>Clean Water</h3>
          </div>
          <div className="card">
            <img src={foodImg} alt="Healthy Food" />
            <h3>Healthy Food</h3>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="purpose-section">
        <h2>Our Purpose</h2>
        <p>
          GoHelp is a platform dedicated to empowering local communities by
          connecting them with donors, volunteers, and resources. Whether it's
          education, medical support, clean water, or nutritious food, we
          strive to make a difference in the lives of those in need.
        </p>
      </section>

      {/* Donation Campaign Section */}
      <section className="donation-section">
        <h2>Active Donation Campaign</h2>
        <div className="campaign-card">
          <h3>Help Build Schools in Remote Areas</h3>
          <p>Raised: $15,000 / $25,000</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
          <button className="donate-button">Donate Now</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Thank you for supporting a better world!</p>
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
