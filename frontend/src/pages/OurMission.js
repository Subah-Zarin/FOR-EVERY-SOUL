import React, { useState, useMemo, useCallback } from 'react'; 
import { Button, List, Typography } from 'antd';
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import "../styles/OurMission.css"; 

// Import images
import handshakeIcon from "../assets/handshake.png";
import donationIcon from "../assets/donation.png";
import charityEventImage from "../assets/edu6.jpeg";

const OurMission = () => {
  return (
    <div className="mission-container">
      <NavBar /> 

      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="hero-subtitle">ABOUT US</h2>
        <h1 className="hero-title">Our Mission: Food, Education, Medicine</h1>
      </section>

      {/* Trusted Non-Profit Section */}
      <section className="trusted-nonprofit">
        <div className="nonprofit-text">
          <h2 className="welcome-text">Welcome, Let's Make a Difference!</h2>
          <h1 className="nonprofit-title">A Trusted Non-Profit Charity Organization</h1>
          <p className="nonprofit-description">
            Our non-profit charity center is dedicated to changing the world.
            Our goal is to create positive change by providing assistance to
            those in need and offering funding.
          </p>

          {/* Donation Options */}
          <div className="donation-options">
            <div className="donation-box">
              <img src={handshakeIcon} alt="Contribute" />
              <p><strong>Be a Hero,</strong> Contribute Now</p>
            </div>
            <div className="donation-box">
              <img src={donationIcon} alt="Help Children" />
              <p><strong>Help Children</strong> with Donations</p>
            </div>
          </div>

          {/* List of Services */}
          <ul className="nonprofit-list">
            <li>💛 Providing essential resources to underserved communities.</li>
            <li>💛 Offering support through educational and health programs.</li>
            <li>💛 Facilitating volunteer opportunities for community involvement.</li>
          </ul>

          <Link to ="/volunteer">
          <button className="support-btn">Support Now</button>
          </Link>
        </div>
         
        {/* Image Section */}
        <div className="nonprofit-image">
          <img src={charityEventImage} alt="Charity Event" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box"><h2>500K</h2><p>Fund Raised</p></div>
          <div className="stat-box"><h2>200+</h2><p>Global Partners</p></div>
          <div className="stat-box"><h2>100+</h2><p>Our Volunteers</p></div>
          <div className="stat-box"><h2>1000+</h2><p>Glad Donors</p></div>
        </div>
      </section>

      {/* Core Goals Section */}
      <section className="section-box">
        <h2 className="highlight-title">OUR MISSION</h2>
        <h3 className="sub-heading">Committed to Achieving Our Core Goals</h3>
        <p className="section-text">
          Our mission is to improve impoverished areas by offering opportunity,
          assistance, and necessary resources. Our nonprofit works to enhance
          people's lives and promote sustainable development.
        </p>
        <Link to="/donation">
        <button className="cta-button">Donate Now</button>
        </Link>
      </section>

      {/* Positive Change Section */}
      <section className="section-box">
        <h3 className="sub-heading">Dedicated To Positive Change Through Charity</h3>
        <p className="section-text">
          Our charity foundation is dedicated to making a meaningful impact
          in the community. Through targeted initiatives and compassionate
          outreach, we strive to uplift lives, foster positive change, and
          support those in need.
        </p>
        <div className="list-items">
          <div className="list-item">🟧 Providing essential medical aid.</div>
          <div className="list-item">🟧 Delivering nutritious food to families.</div>
          <div className="list-item">🟧 Offering critical resources and aid.</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurMission;
