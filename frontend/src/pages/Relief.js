
import React, { useState, useMemo, useCallback } from 'react'; 
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import { Button, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/Relief.css';
import CampaignListPage from "../components/ReliefCampaigns.js";

// Import images from the assets folder
import heroImage from '../assets/camp2.jpeg';

import campaignImage4 from '../assets/rel2.jpeg';

import campaignImage6 from '../assets/rel4.jpeg';

const { Title, Paragraph } = Typography;

const Relief = () => {
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
    <div className="relief-fundraiser-container">
      <NavBar />

      <header className="relief-header"></header>

         {/* Hero Section */}
         <div className="relief-hero-section">
        <div className="relief-hero-content">
          <div className="relief-hero-text">
            <Title level={1} className="relief-hero-title">Provide Urgent Relief to Those in Need</Title>
            <Paragraph className="relief-hero-description">
              Every donation brings hope and essential aid to communities affected by disasters, conflicts, and crises. Join us in making a life-saving impact today.
            </Paragraph>
            <Button type="primary" size="large" className="relief-donate-btn" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
              Donate Now
            </Button>
          </div>
          <div className="relief-hero-images">
            <img src={campaignImage6} alt="Relief Aid" className="relief-hero-image fade-in" />
            <img src={heroImage} alt="Emergency Supplies" className="relief-hero-image fade-in" />
            <img src={campaignImage4} alt="Food Distribution" className="relief-hero-image fade-in" />
          </div>
        </div>
        <div className="relief-hero-overlay"></div>
      </div>

      {/* Body */}
      <section className="relief-why-donation">
        <h2 className="relief-section-title">Why Your Donation Matters</h2>
        <p className="relief-section-text">
          Millions of people worldwide face extreme hardships due to natural disasters, conflicts, and economic crises. Your support helps provide food, clean water, shelter, and medical assistance to those in urgent need.
        </p>

        <div className="relief-statistics">
          <h3 className="relief-statistics-title">Global Crisis Facts</h3>
          <List
            bordered
            dataSource={[
              'Over 820 million people suffer from hunger every day.',
              'Nearly 2 billion people lack access to clean drinking water.',
              'Millions of families are displaced due to conflicts and natural disasters.'
            ]}
            renderItem={item => (
              <List.Item className="relief-stat-item">
                <span className="relief-stat-bullet">•</span> {item}
              </List.Item>
            )}
          />
        </div>

        <div className="relief-stories">
          <h3 className="relief-stories-title">Real Stories of Hope</h3>
          <div className="relief-story-cards">
            <div className="relief-story-card">
              <p className="relief-section-quote">
                "After losing our home in a flood, we received shelter and food through donations. Thank you for giving us hope." — Ahmed, Refugee.
              </p>
              <div className="relief-story-author">
                <span className="relief-author-name">Ahmed, Refugee</span>
              </div>
            </div>

            <div className="relief-story-card">
              <p className="relief-section-quote">
                "With emergency medical aid, my family survived a devastating earthquake. Your donations save lives." — Fatima, Survivor.
              </p>
              <div className="relief-story-author">
                <span className="relief-author-name">Fatima, Survivor</span>
              </div>
            </div>

            <div className="relief-story-card">
              <p className="relief-section-quote">
                "Food packages and clean water helped my community recover after the drought. Your kindness makes a difference." — Jamal, Community Leader.
              </p>
              <div className="relief-story-author">
                <span className="relief-author-name">Jamal, Community Leader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relief-donation-impact">
        <h2 className="relief-section-title">How Your Donation Helps</h2>
        <p className="relief-section-text">
          Your contributions directly aid communities in crisis. Here's how your support makes an impact:
        </p>
        <ul className="relief-donation-list">
          <li><strong>100 BDT</strong> = Provides clean drinking water for a family for a week.</li>
          <li><strong>500 BDT</strong> = Delivers a food package to a family in need.</li>
          <li><strong>1000 BDT</strong> = Supports emergency medical care for a disaster victim.</li>
          <li><strong>5000 BDT</strong> = Helps rebuild shelters for displaced families.</li>
        </ul>
      </section>

      <section className="relief-donation-campaigns">
        <h2>Our Relief Programs</h2>
        <div className="relief-campaigns-container">
              
        < CampaignListPage/>
            
                        </div>
                
        
                      </section>
                
                      {/* Donation Status Section */}
                <div className="relief-donation-status-card">
                  <h3 className="relief-donation-title">Total Donation Raised</h3>
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
                            { name: 'Shahid Bhai', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                            { name: 'Pias ', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
                            { name: 'Sadeed Panda', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
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

export default Relief;
