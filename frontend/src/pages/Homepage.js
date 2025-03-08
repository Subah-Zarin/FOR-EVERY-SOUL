import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import NavBar from '../components/NavBar'; 
import Footer from "../components/Footer"; 
import { Link } from "react-router-dom";
import CampaignListPage from "../pages/CampaignListPage.js";
import axios from 'axios';
import SearchBar from '../components/SearchBar';


import '../styles/Homepage.css';

import medicalCareIcon from '../assets/medical-care-icon.png';
import cleanWaterIcon from '../assets/clean-water-icon.png';
import healthyFoodIcon from '../assets/healthy-food-icon.png';
import childEducationIcon from '../assets/child-education-icon.png';

import carouselImg1 from '../assets/camp1.jpeg';
import carouselImg2 from '../assets/camp2.jpeg';
import carouselImg3 from '../assets/camp3.jpg';



const HomePage = () => {
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  const goToNextSlide = () => setCarouselIndex((prevIndex) => (prevIndex + 1) % 3);
  const goToPreviousSlide = () => setCarouselIndex((prevIndex) => (prevIndex - 1 + 3) % 3);

  const handleDonateClick = () => {
    navigate('/donation'); 
  };

   // Callback function to update the search results
   const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  

  return (
    <div className="homepage">
      <NavBar />

      {/* Hero Section */}
<section className="hero-sectionH">
<video autoPlay loop muted playsInline className="hero-videoH">
  <source src={require('../assets/v3.mp4')} type="video/mp4" />
  Your browser does not support the video tag.
</video>

  <div className="hero-contentH">
    <h2 className="hero-title">Give hope, change lives, spread love.</h2>
    <p className="hero-description">
      We help local nonprofits access the funding, tools, training, and support they need to become more.
    </p>
    <button className="donate-button1" onClick={handleDonateClick}>Donate Now</button>
    <div className="statsH">
      <div className="stat-itemH">
        <span>100+</span>
        <p>Happy Families</p>
      </div>
      <div className="stat-itemH">
        <span>300+</span>
        <p>Projects Done</p>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
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

      {/* How It Works Section */}
<section className="how-it-works">
  <h2>Fundraising on FOR EVERY SOUL Takes Just a Few Minutes</h2>
  <div className="steps">
    <div className="step">
    <span>1</span>
      {/* Wrap the "Start with the Basics" text with Link to navigate to a new page */}
      <Link to="/start-with-basics">
        <button className="step-button">Start with the Basics</button>
      </Link>
    </div>
    <div className="step">
      <span>2</span>
      {/* Wrap "Tell Your Story" in Link and use button */}
      <Link to="/tell-your-story">
        <button className="step-button">Tell Your Story</button>
      </Link>
    </div>
    <div className="step">
      <span>3</span>
      {/* Wrap "Share with Friends and Family" in Link and use button */}
      <Link to="/share-with-friends">
        <button className="step-button">Share with Friends and Family</button>
      </Link>
    </div>
  </div>
</section>





      {/* Mission Section */}
      <section className="mission-section">
        <h2>We Are In A Mission To Help The Helpless</h2>
        <p>
        our purpose is to inspire compassion and empower change by connecting generous individuals with meaningful causes. 
        We are dedicated to providing support to underprivileged children through education and healthcare, ensuring access to essential resources like clean water, food, and medical care, and uplifting communities in need. Additionally, we work to protect stray animals and assist those facing disabilities or crises. 
        Every donation you make has the power to transform lives and bring hope to those who need it most. Together, we can create a world where kindness knows no boundaries and no one is left behind.
        </p>
        <button className="know-more-button">Know More</button>
      </section>

       {/* Search Bar */}
      <section className="search-bar-section">
        <SearchBar onSearchResults={handleSearchResults} /> 
      </section>

  { /*{ Display Search Results }
{searchResults.length > 0 && (
  <section className="search-results">
    <h3>Search Results:</h3>
    <div className="search-results-grid">
      {searchResults.map((campaign) => (
        <div key={campaign._id} className="campaign-card">
          <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
          <div className="campaign-info">
            <h4>{campaign.title}</h4>
            <p>{campaign.description}</p>
            <button className="donate-button">Donate</button>
          </div>
        </div>
      ))}
    </div>
  </section>
)} */}

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

      {/* Donation Campaigns Section */}
      <section className="new-donation-campaigns">
        <h2 className="new-campaigns-title">Our Featured Donation Campaigns</h2>
        <div className="campaigns-container">
        < CampaignListPage/>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;



