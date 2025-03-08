import React, { useEffect, useState } from "react";
import { message, Button, Progress, Select } from "antd";
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar'; 
import "../styles/CampaignListPage.css";

const { Option } = Select;

const CampaignListPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default: Show all categories
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/campaigns/all");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setCampaigns(data);
      } catch (err) {
        message.error("Failed to fetch campaigns");
        console.error("Error fetching campaigns:", err);
      }
    };

    fetchCampaigns();
  }, []);

  // Filter campaigns by selected category
  const filteredCampaigns = selectedCategory === "all" 
    ? campaigns 
    : campaigns.filter(campaign => campaign.category === selectedCategory);

  // Show only the first 6 campaigns unless 'Show More' is clicked
  const visibleCampaigns = showAll ? filteredCampaigns : filteredCampaigns.slice(0, 6);

  return (
    <div class="campaigns-container">
      

      <NavBar/>

      <header className="camp-header"></header>

      <h2>All Campaigns</h2>

      {/* Category Selector */}
      <Select
        defaultValue="all"
        style={{ width: 200, marginBottom: 20 }}
        onChange={setSelectedCategory}
      >
        <Option value="all">All Categories</Option>
        <Option value="education">Education</Option>
        <Option value="medical">Medical</Option>
        <Option value="relief">Relief</Option>
      </Select>

      {filteredCampaigns.length > 0 ? (
        <div class="campaign-list">
          {visibleCampaigns.map((campaign) => (
            <div key={campaign._id} className="campaign-card">
              <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <p>
                <strong>Goal:</strong> BDT{campaign.goalAmount} &nbsp; | &nbsp; 
                <strong>Raised:</strong> BDT{campaign.raisedAmount}
              </p>

              {/* Progress Bar */}
              <Progress 
                percent={(campaign.raisedAmount / campaign.goalAmount) * 100} 
                status="active" 
                strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
              />
              
              {/* Donate Button */}
              <Button 
                type="primary" 
                onClick={() => navigate(`/donation`)}
                style={{ marginTop: "10px" }}
              >
                Donate
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p>No campaigns available in this category.</p>
      )}

      {/* Show More / Show Less Button */}
      {filteredCampaigns.length > 6 && (
        <Button 
          type="link" 
          onClick={() => setShowAll(prev => !prev)} 
          style={{ marginTop: '20px' }}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </div>
  );
};

export default CampaignListPage;
