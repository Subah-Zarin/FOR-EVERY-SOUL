import React, { useState } from 'react';
import { Button, Input } from 'antd';

import '../styles/Homepage.css';

import medicalCareIcon from '../assets/medical-care-icon.png';
import cleanWaterIcon from '../assets/clean-water-icon.png';
import healthyFoodIcon from '../assets/healthy-food-icon.png';
import childEducationIcon from '../assets/child-education-icon.png';

import carouselImg1 from '../assets/camp1.jpeg';
import carouselImg2 from '../assets/camp2.jpeg';
import carouselImg3 from '../assets/camp3.jpg';

import cancerPaitent from '../assets/cancer-paitent.jpeg';
import specialChild from '../assets/special-child.jpeg';
import disableChild from '../assets/Disablechild.jpeg';
import strayAnimal from '../assets/stray-animal.jpeg';


const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const goToNextSlide = () => setCarouselIndex((prevIndex) => (prevIndex + 1) % 3);
  const goToPreviousSlide = () => setCarouselIndex((prevIndex) => (prevIndex - 1 + 3) % 3);

  return (
    <div className="homepage">
     {/* Header */}
<header className="homepage-header">
  <div className="logo-container">
    <img 
      src="/src/assets/logo3.png" 
      alt="Logo" 
      className="logo-image"
    />
    <h1 className="homepage-logo">FOR EVERY SOUL</h1>
  </div>
  
  <nav className="desktop-nav">
    <ul className="homepage-nav">
      <li><a href="/" className="nav-link">Home</a></li>
      <li><a href="/about" className="nav-link">About</a></li>
      <li><a href="/contact" className="nav-link">Contact</a></li>
      <li><a href="/login" className="nav-link login-btn">Login</a></li>
      <li><a href="/register" className="nav-link register-btn">Register</a></li>
    </ul>
  </nav>
  
  <div className="hamburger-menu" onClick={toggleMenu}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>

  <div className={`navbar-mobile ${menuOpen ? 'active' : ''}`}>
    <a href="/login" className="mobile-link">Login</a>
    <a href="/register" className="mobile-link">Register</a>
    <a href="/campaigns" className="mobile-link">Campaigns</a>
  </div>
</header>




      {/* Hero Section */}
      <section className="homepage-hero">
        <div className="hero-content">
          <h2 className="hero-title">Give hope, change lives, spread love.</h2>
          <p className="hero-description">
            We help local nonprofits access the funding, tools, training, and
            support they need to become more.
          </p>
          <Button className="hero-button">Get Involved</Button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="search-bar-section">
        <Input.Search
          placeholder="Search donation campaigns..."
          className="donation-search-bar"
          style={{ width: '50%', margin: '20px auto' }}
        />
      </section>

      {/* Cards Section */}
      <section className="homepage-cards">
        {[{
          img: medicalCareIcon,
          title: 'Medical Care',
        }, {
          img: cleanWaterIcon,
          title: 'Clean Water',
      
        }, {
          img: childEducationIcon,
          title: 'Child Education',
          
        }, {
          img: healthyFoodIcon,
          title: 'Healthy Food',
          
        }].map((card, index) => (
          <div className="card" key={index}>
            <img className="card-image" src={card.img} alt={card.title} />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            
          </div>
        ))}
      </section>

      {/* Carousel Section */}
      <section className="carousel">
        <div className="carousel-images" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
          <img src={carouselImg1} alt="Campaign 1" />
          <img src={carouselImg2} alt="Campaign 2" />
          <img src={carouselImg3} alt="Campaign 3" />
        </div>
        <button className="carousel-button carousel-button-left" onClick={goToPreviousSlide}>❮</button>
        <button className="carousel-button carousel-button-right" onClick={goToNextSlide}>❯</button>
      </section>

      {/* New Donation Campaigns Section */}
      <section className="new-donation-campaigns">
        <h2 className="new-campaigns-title">More Donation Campaigns</h2>
        {[{
          img: cancerPaitent,
          title: 'Better Life for Cancer Patients',
          description: 'Provide shelter and resources for cancer patients.',
          amount: 'BDT 10,000',
        }, {
          img: specialChild,
          title: 'Special Child',
          description: 'Support initiatives to help them.',
          amount: '$15,000',
        }, {
          img: strayAnimal,
          title: 'Let Them Live Too',
          description: 'Provide shelter and resources for stray animals.',
          amount: 'BDT 10,000',
        }, {
          img: disableChild,
          title: 'Better Life for Disabled Children',
          description: 'Provide shelter and resources for disabled children.',
          amount: 'BDT 10,000',
        }].map((campaign, index) => (
          <div className="new-campaign" key={index}>
            <img className="new-campaign-image" src={campaign.img} alt={campaign.title} />
            <div className="new-campaign-content">
              <h3 className="new-campaign-title">{campaign.title}</h3>
              <p className="new-campaign-description">{campaign.description}</p>
              <p className="new-campaign-amount">Amount Collected: {campaign.amount}</p>
              <Button type="primary">Donate</Button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EverySoul. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
