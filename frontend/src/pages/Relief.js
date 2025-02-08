import React, { useState, useMemo, useCallback } from 'react'; 
import NavBar from '../components/NavBar';
import { Button, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/Relief.css';

// Import images from the assets folder
import heroImage from '../assets/camp2.jpeg';
import campaignImage1 from '../assets/foodDonate.jpeg';
import campaignImage2 from '../assets/rel5.jpeg';
import campaignImage3 from '../assets/rel1.jpeg';
import campaignImage4 from '../assets/rel2.jpeg';
import campaignImage5 from '../assets/rel3.jpeg';
import campaignImage6 from '../assets/rel4.jpeg';

const { Title, Paragraph } = Typography;

const Relief = () => {
  const [currentDonations, setCurrentDonations] = useState(0);
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('general');
  const [showAllCampaigns, setShowAllCampaigns] = useState(false); // New state for toggle
  const goalAmount = 50000;
  const navigate = useNavigate();

  // List of relief donation campaigns with images
  const campaigns = useMemo(() => [
    {
      id: 'food-relief',
      title: 'Food Assistance',
      description: 'Help provide meals to families in crisis.',
      image: campaignImage1,
      progress: 40,
    },
    {
      id: 'shelter-relief',
      title: 'Emergency Shelter',
      description: 'Support temporary housing for displaced individuals.',
      image: campaignImage2,
      progress: 60,
    },
    {
      id: 'water-relief',
      title: 'Clean Water Access',
      description: 'Provide safe drinking water to affected communities.',
      image: campaignImage3,
      progress: 50,
    },
    {
      id: 'medical-relief',
      title: 'Medical Aid',
      description: 'Ensure medical assistance for those in need.',
      image: campaignImage4,
      progress: 30,
    },
    {
      id: 'education-relief',
      title: 'Education Support',
      description: 'Provide learning materials for displaced children.',
      image: campaignImage5,
      progress: 20,
    },
    {
      id: 'clothing-relief',
      title: 'Clothing & Essentials',
      description: 'Distribute clothing and daily essentials.',
      image: campaignImage6,
      progress: 10,
    },
  ], []);

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
          {campaigns.slice(0, showAllCampaigns ? campaigns.length : 3).map((campaign, index) => (
            <div className="relief-campaign-card" key={index}>
              <img src={campaign.image} alt={campaign.title} className="relief-campaign-image" />
              <div className="relief-campaign-info">
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
                {/* Progress Bar */}
                <div className="relief-progress-bar-container">
                <div className="relief-progress-bar" style={{ width: `${updateProgressBar(campaign)}%` }}></div>
                </div>
                <Button 
                 type="primary" 
                onClick={() => {
                setSelectedCampaign(campaign.id);
                    navigate(`/donation`); // Adjust the route based on your setup
                                  }}>
                                  Donate
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                
                        {/* Show More Button */}
                        <Button 
                          type="link" 
                          onClick={() => setShowAllCampaigns(prev => !prev)} 
                          style={{ marginTop: '20px' }}>
                          {showAllCampaigns ? 'Show Less' : 'Show More'}
                        </Button>
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
                
                {/* Footer Section */}
                <footer className="footer">
                        <p>&copy; 2025 Education Fund. All rights reserved.</p>
                      </footer>

    </div>
  );
};

export default Relief;
