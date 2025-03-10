import React, { useState, useMemo, useCallback } from 'react';
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import CampaignListPage from "../components/EducationCampaignsPage.js";
//import EducationCampaignsPage from "../components/EducationCampaignsPage";

import { Button, Input, message, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/education.css';

// Import images from the assets folder
import heroImage from '../assets/edu1.jpeg';
import campaignImage6 from '../assets/edu9.jpeg';
import campaignImage7 from '../assets/edu11.jpeg';


const { Title, Paragraph } = Typography;

const Education = () => {
  const [currentDonations, setCurrentDonations] = useState(0);
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);
  const goalAmount = 50000;
  const navigate = useNavigate();


  // Calculate the progress percentage
  const updateProgressBar = useCallback((campaign) => {
    return (campaign.progress / campaign.goal) * 100;
  }, []);


  return (
    <div className="fundraiser-container">
      <NavBar />

      <header className="education-header"></header>


      {/* Hero Section */}
<div className="hero-section2">
  <div className="hero-content2">
    <div className="hero-text2">
      <Title level={1} className="hero-title2">Empower a Child’s Future with Your Donation</Title>
      <Paragraph className="hero-description2">
        Every contribution helps provide education, books, and a brighter future for children in need. Join us in making a difference.
      </Paragraph>
      <Button type="primary" size="large" className="donate-btn" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
        Donate Now
      </Button>
    </div>
    <div className="hero-images2">
      <img src={heroImage} alt="Children Learning" className="hero-image fade-in" />
      <img src={campaignImage7} alt="Child with Books" className="hero-image fade-in" />
      <img src={campaignImage6} alt="Happy Kids in School" className="hero-image fade-in" />
    </div>
  </div>
  <div className="hero-overlay2"></div>
</div>



      {/* Body */}
<section className="why-education">
  <h2 className="section-title">Why Education Matters</h2>
  <p className="section-text">
    Education is one of the most powerful tools in breaking the cycle of poverty. It not only empowers individuals but also opens doors to a brighter future, improves overall quality of life, and enables societal growth. Yet, millions of children, especially in marginalized areas, still face barriers to accessing basic education.
  </p>

  <div className="statistics">
    <h3 className="statistics-title">Staggering Global Statistics</h3>
    <List
      bordered
      dataSource={[
        'Over 260 million children and youth worldwide are currently out of school.',
        'Around 20% of adults are illiterate, severely limiting economic and social opportunities.',
        'Girls in poverty-stricken areas often face early marriages or domestic pressures that prevent them from completing their education.'
      ]}
      renderItem={item => (
        <List.Item className="stat-item">
          <span className="stat-bullet">•</span> {item}
        </List.Item>
      )}
    />
  </div>

  <div className="stories">
    <h3 className="stories-title">Real Stories of Change</h3>
    <div className="story-cards">
      <div className="story-card">
        <p className="section-quote">
          "Thanks to the generosity of donors like you, I completed my education and became a teacher. Now, I am helping other children fulfill their potential." — Aisha, teacher from a rural community.
        </p>
        <div className="story-author">
          <span className="author-name">Aisha, Teacher</span>
        </div>
      </div>

      <div className="story-card">
        <p className="section-quote">
          "Education was the turning point in my life. With the opportunity to go to school, I became a doctor and now serve in my community. Your donations make all the difference." — Farida, Doctor.
        </p>
        <div className="story-author">
          <span className="author-name">Farida, Doctor</span>
        </div>
      </div>

      <div className="story-card">
        <p className="section-quote">
          "I was able to continue my education because of supporters like you. Today, I am the first in my family to graduate from college, and I'm now helping other girls like me dream big." — Priya, College Graduate.
        </p>
        <div className="story-author">
          <span className="author-name">Priya, College Graduate</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="donation-impact">
  <h2 className="section-title">How Your Donation Makes an Impact</h2>
  <p className="section-text">
    Every donation, no matter how small, can make a significant impact in the lives of children and communities. Here's a breakdown of what your generous contribution can achieve:
  </p>
  <ul className="donation-list">
    <li><strong>10 BDT</strong> = School supplies for one child for an entire year.</li>
    <li><strong>50 BDT</strong> = Provides a scholarship for a deserving student for one semester.</li>
    <li><strong>100 BDT</strong> = Trains 5 teachers to improve quality of education in rural areas.</li>
    <li><strong>500 BDT</strong> = Builds a classroom to provide safe and supportive learning spaces.</li>
  </ul>
</section>


{/* Donation Campaigns Section */}
<section className="donation-campaigns">
        <h2 className="campaigns-title">Our Featured Donation Campaigns</h2>
        <div className="campaigns-container">
          < CampaignListPage/>
      </div>
      

  
      </section>

      {/* Donation Status Section */}
<div className="donation-status-card">
  <h3 className="donation-title">Total Donation Raised</h3>
  <p className="donation-amount">
    <strong>{currentDonations.toLocaleString()} BDT</strong> 
  </p>
  {currentDonations >= goalAmount && (
    <p className="goal-reached">🎉 Goal reached! Thank you for your generosity! 🎉</p>
  )}
</div>

{/* Recent Supporters Section */}
<div className="recent-supporters-card">
  <h3 className="supporters-title">Recent Donors</h3>
  <List
    className="supporters-list"
    dataSource={[
      { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
      { name: 'Robert Brown', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    ]}
    renderItem={(item) => (
      <List.Item className="supporter-item">
        <img src={item.avatar} alt={item.name} className="supporter-avatar" />
        <Typography.Text className="supporter-name">{item.name}</Typography.Text>
      </List.Item>
    )}
  />
</div>

  <Footer />

    </div>
  );
};

export default Education;