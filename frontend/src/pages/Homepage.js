import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom'; 
import NavBar from '../components/NavBar'; 
import Footer from "../components/Footer"; 

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
import educationFund from '../assets/education.jpeg';
import healthCare from '../assets/healthCare.jpeg';

const HomePage = () => {
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const goToNextSlide = () => setCarouselIndex((prevIndex) => (prevIndex + 1) % 3);
  const goToPreviousSlide = () => setCarouselIndex((prevIndex) => (prevIndex - 1 + 3) % 3);

  const handleDonateClick = () => {
    navigate('/donation'); 
  };


  return (
    <div className="homepage">
      <NavBar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Give hope, change lives, spread love.</h2>
          <p className="hero-description">
            We help local nonprofits access the funding, tools, training, and support they need to become more.
          </p>
          <button className="donate-button" onClick={handleDonateClick}>Donate Now</button>
          <div className="stats">
            <div className="stat-item">
              <span>100+</span>
              <p>Happy Families</p>
            </div>
            <div className="stat-item">
              <span>300+</span>
              <p>Projects Done</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={require('../assets/hero-image3.jpg')} alt="Helping Hands" />
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
            <p>Start with the Basics</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Tell Your Story</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Share with Friends and Family</p>
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
        <Input.Search
          placeholder="Search donation campaigns..."
          className="donation-search-bar"
          style={{ width: '50%', margin: '20px auto' }}
        />
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

      {/* Donation Campaigns Section */}
      <section className="new-donation-campaigns">
        <h2 className="new-campaigns-title">Our Featured Donation Campaigns</h2>
        <div className="campaigns-container">
          {[{
            img: cancerPaitent,
            title: 'Better Life for Cancer Patients',
            description: 'Provide shelter and resources for cancer patients.',
            amount: 'BDT 10,000',
            targetAmount: 'BDT 20,000',
            progress: 50, // Example progress (percentage)
          }, {
            img: specialChild,
            title: 'Special Child',
            description: 'Support initiatives to help them.',
            amount: 'BDT 15,000',
            targetAmount: 'BDT 20,000',
            progress: 20, 
          }, {
            img: strayAnimal,
            title: 'Let Them Live Too',
            description: 'Provide shelter and resources for stray animals.',
            amount: 'BDT 10,000',
            targetAmount: 'BDT 30,000',
            progress: 33, 
          }, {
            img: disableChild,
            title: 'Better Life for Disabled Children',
            description: 'Provide shelter and resources for disabled children.',
            amount: 'BDT 10,000',
            targetAmount: 'BDT 15,000',
            progress: 67, // Example progress (percentage)
          }, {
            img: educationFund,
            title: 'Education for Underprivileged Children',
            description: 'Support the education of underprivileged children.',
            amount: 'BDT 5,000',
            targetAmount: 'BDT 25,000',
            progress: 10, 
          }, {
            img: healthCare,
            title: 'Healthcare for All',
            description: 'Ensure access to healthcare services for the poor.',
            amount: 'BDT 8,000',
            targetAmount: 'BDT 18,000',
            progress: 44, // Example progress (percentage)
          }].map((campaign, index) => (
            <div className="new-campaign" key={index}>
              <img className="new-campaign-image" src={campaign.img} alt={campaign.title} />
              <div className="new-campaign-content">
                <h3 className="new-campaign-title">{campaign.title}</h3>
                <p className="new-campaign-description">{campaign.description}</p>
                <p className="new-campaign-amount">
                  Amount Collected: {campaign.amount} / Target: {campaign.targetAmount}
                </p>

                {/* Progress Bar */}
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${campaign.progress}%` }}></div>
                </div>

                {/* Donate Button with navigate */}
                <Button className="donate-button" onClick={handleDonateClick}>
                  Donate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
