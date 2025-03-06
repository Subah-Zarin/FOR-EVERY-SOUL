import React, { useState, useMemo, useCallback } from 'react';
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import { Button, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/medical.css';
import CampaignListPage from "../components/MedicalCampaigns.js";

// Import images from the assets folder
import heroImage from '../assets/healthCare.jpeg';

import campaignImage2 from '../assets/camp3.jpg';

import campaignImage7 from '../assets/bloodDonate.jpeg'; // New image

const { Title, Paragraph } = Typography;

const Medical = () => {
  const [currentDonations, setCurrentDonations] = useState(0);
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('general');
  const [showAllCampaigns, setShowAllCampaigns] = useState(false); // New state for toggle
  const goalAmount = 50000;
  const navigate = useNavigate();

  

  // Calculate the progress percentage for the selected campaign
  const updateProgressBar = useCallback((campaign) => {
    return (campaign.progress / campaign.goal) * 100;
  }, []);


  return (
    <div className="medical-fundraiser-container">
      <NavBar />

      <header className="medical-header"></header>

      {/* Hero Section */}
      <div className="medical-hero-section">
        <div className="medical-hero-content">
          <div className="medical-hero-text">
            <Title level={1} className="medical-hero-title">Make a Difference in Healthcare</Title>
            <Paragraph className="medical-hero-description">
              Every donation brings us closer to providing essential medical care to those who need it most. Join us in making a life-saving impact.
            </Paragraph>
            <Button type="primary" size="large" className="medical-donate-btn" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
              Donate Now
            </Button>
          </div>
          <div className="medical-hero-images">
            <img src={heroImage} alt="Medical Care" className="medical-hero-image fade-in" />
            <img src={campaignImage7} alt="Medical Equipment" className="medical-hero-image fade-in" />
            <img src={campaignImage2} alt="Medical Care 2" className="medical-hero-image fade-in" />
          </div>
        </div>
        <div className="medical-hero-overlay"></div>
      </div>

      {/* Body */}
      <section className="medical-why-healthcare">
        <h2 className="medical-section-title">Why Healthcare Matters</h2>
        <p className="medical-section-text">
          Healthcare is essential for a long and healthy life. Yet, millions of people around the world lack access to quality medical care. With your help, we can ensure that more people have access to the care they deserve.
        </p>

        <div className="medical-statistics">
          <h3 className="medical-statistics-title">Alarming Global Health Statistics</h3>
          <List
            bordered
            dataSource={[
              'Over 2 billion people around the world do not have access to essential medicines.',
              'Approximately 50% of the global population lacks access to essential healthcare services.',
              'Mental health issues affect 1 in 4 people globally.'
            ]}
            renderItem={item => (
              <List.Item className="medical-stat-item">
                <span className="medical-stat-bullet">•</span> {item}
              </List.Item>
            )}
          />
        </div>

        <div className="medical-stories">
          <h3 className="medical-stories-title">Real Stories of Change</h3>
          <div className="medical-story-cards">
            <div className="medical-story-card">
              <p className="medical-section-quote">
                "Thanks to the donors, I received treatment for my illness. Now, I can live a healthy life and work to support my family." — Ibrahim, Patient.
              </p>
              <div className="medical-story-author">
                <span className="medical-author-name">Ibrahim, Patient</span>
              </div>
            </div>

            <div className="medical-story-card">
              <p className="medical-section-quote">
                "I received emergency medical care after a life-threatening accident. This support saved my life." — Amina, Survivor.
              </p>
              <div className="medical-story-author">
                <span className="medical-author-name">Amina, Survivor</span>
              </div>
            </div>

            <div className="medical-story-card">
              <p className="medical-section-quote">
                "Mental health services helped me cope with stress and anxiety. I am now thriving in my personal and professional life." — Tariq, Mental Health Advocate.
              </p>
              <div className="medical-story-author">
                <span className="medical-author-name">Tariq, Advocate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="medical-donation-impact">
        <h2 className="medical-section-title">How Your Donation Makes an Impact</h2>
        <p className="medical-section-text">
          Your generous donations can make a real difference in the lives of individuals and communities. Here's how your support can change the future:
        </p>
        <ul className="medical-donation-list">
          <li><strong>100 BDT</strong> = Provides basic health supplies for one person.</li>
          <li><strong>500 BDT</strong> = Funds a vaccination for a child in need.</li>
          <li><strong>1000 BDT</strong> = Supports emergency medical care for a person in crisis.</li>
          <li><strong>5000 BDT</strong> = Provides a full mental health counseling session for a person in need.</li>
        </ul>
      </section>

      {/* Donation Campaigns Section */}
      <section className="medical-donation-campaigns">
        <h2 className="medical-campaigns-title">Our Featured Donation Campaigns</h2>
        <div className="medical-campaigns-container">
                  
          < CampaignListPage/>
        </div>

      </section>

      {/* Donation Status Section */}
<div className="medical-donation-status-card">
  <h3 className="medical-donation-title">Total Donation Raised</h3>
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
            { name: 'Nakib faiad', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
            { name: 'Tathai Adhikary', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
            { name: 'Mithu Bhai', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
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

export default Medical;
