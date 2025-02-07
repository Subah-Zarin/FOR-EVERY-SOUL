import React, { useState, useMemo, useCallback } from 'react';
import NavBar from '../components/NavBar';
import { Button, Input, message, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/education.css';

// Import images from the assets folder
import heroImage from '../assets/edu1.jpeg';
import campaignImage1 from '../assets/education.jpeg';
import campaignImage2 from '../assets/edu4.jpeg';
import campaignImage3 from '../assets/edu5.jpeg';
import campaignImage4 from '../assets/edu8.jpeg';
import campaignImage5 from '../assets/edu7.jpg';
import campaignImage6 from '../assets/edu9.jpeg';
import campaignImage7 from '../assets/edu11.jpeg';
import campaignImage8 from '../assets/special-child.jpeg';
import campaignImage9 from '../assets/edu2.jpeg';
import campaignImage10 from '../assets/edu1.jpeg';
import campaignImage11 from '../assets/edu6.jpeg';
import campaignImage12 from '../assets/edu10.jpeg';

const { Title, Paragraph } = Typography;

const Education = () => {
  const [currentDonations, setCurrentDonations] = useState(0);
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('general');
  const [showAllCampaigns, setShowAllCampaigns] = useState(false); // New state for toggle
  const goalAmount = 50000;
  const navigate = useNavigate();

  // List of donation campaigns with images
  const campaigns = useMemo(() => [
    {
      id: 'general',
      title: 'General Education Fund',
      description: 'Help provide educational resources and scholarships to underprivileged children.',
      goal: goalAmount,
      image: campaignImage1,
      amount: 'BDT 10,000',
      progress: 50,
    },
    {
      id: 'school-supplies',
      title: 'School Supplies Fund',
      description: 'Donate to provide necessary school supplies for children in need.',
      goal: 20000,
      image: campaignImage2,
      progress: 20, // Set initial progress to 0
    },
    {
      id: 'scholarships',
      title: 'Scholarships Fund',
      description: 'Your donations will provide scholarships for bright students who lack financial resources.',
      goal: 30000,
      image: campaignImage3,
      progress: 50,
    },
    {
      id: 'teacher-training',
      title: 'Teacher Training Fund',
      description: 'Help provide training and resources for teachers in underprivileged schools.',
      goal: 25000,
      image: campaignImage4,
      progress: 40, // Set initial progress to 0
    },
    {
      id: 'digital-education',
      title: 'Digital Education Fund',
      description: 'Support the adoption of digital tools and resources in rural schools.',
      goal: 30000,
      image: campaignImage5,
      progress: 0, // Set initial progress to 0
    },
    {
      id: 'school-building',
      title: 'School Building Fund',
      description: 'Help build new classrooms and schools in rural and underserved areas.',
      goal: 50000,
      image: campaignImage6,
      progress: 0, // Set initial progress to 0
    },
    {
      id: 'literacy-program',
      title: 'Literacy Program Fund',
      description: 'Support adult and child literacy programs for communities in need.',
      goal: 15000,
      image: campaignImage7,
      progress: 0, // Set initial progress to 0
    },
    {
      id: 'special-education',
      title: 'Special Education Fund',
      description: 'Help provide education to children with special needs.',
      goal: 20000,
      image: campaignImage8,
      progress: 0, // Set initial progress to 0
    },
    {
      id: 'female-education',
      title: 'Female Education Fund',
      description: 'Empower girls and women through education in marginalized communities.',
      goal: 35000,
      image: campaignImage9,
      progress: 0, // Set initial progress to 0
    },
    {
      id: 'education-in-crisis',
      title: 'Education in Crisis Areas Fund',
      description: 'Support education for children in conflict and disaster-stricken areas.',
      goal: 40000,
      image: campaignImage10,
      progress: 0, // Set initial progress to 0
    },
    {
      id: 'early-childhood',
      title: 'Early Childhood Education Fund',
      description: 'Provide early childhood education to children in low-income areas.',
      goal: 25000,
      image: campaignImage11,
      progress: 0, // Set initial progress to 0
    },
    {
      id: 'higher-education',
      title: 'Higher Education Fund',
      description: 'Support scholarships and resources for students pursuing higher education.',
      goal: 45000,
      image: campaignImage12,
      progress: 0, // Set initial progress to 0
    }
  ], [goalAmount]);

  // Calculate the progress percentage for the selected campaign
  const updateProgressBar = useCallback((campaign) => {
    return (campaign.progress / campaign.goal) * 100;
  }, []);


  return (
    <div className="fundraiser-container">
      <NavBar />

      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Hero Image" className="hero-image" />
        <div className="hero-text">
          <Title level={1}>Support Education for Children in Need</Title>
          <Paragraph className="hero-description">
            Your generous donation can make a difference in the lives of children, providing them with a chance to learn and grow.
          </Paragraph>
          <Button type="primary" size="large" onClick={() => window.scrollTo(0, 600)}>
            Donate Now
          </Button>
        </div>
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
          {campaigns.slice(0, showAllCampaigns ? campaigns.length : 6).map((campaign, index) => (
            <div className="campaign-card" key={index}>
              <img src={campaign.image} alt={campaign.title} className="campaign-image" />
              <div className="campaign-info">
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
                {/* Progress Bar */}
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${updateProgressBar(campaign)}%` }}></div>
                </div>
                <Button 
                  type="primary" 
                  onClick={() => {
                    setSelectedCampaign(campaign.id);
                    navigate(`/donation-form`);
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
<div className="donation-status-card">
  <h3 className="donation-title">Total Donations</h3>
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

export default Education;
