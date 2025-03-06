import React, { useEffect, useState } from "react";
import { message, Progress, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "../styles/CampaignListPage.css";

const CampaignListPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/campaigns/all");

        console.log("Fetching campaigns...");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched campaigns:", data);

        // Filter campaigns where category is "education"
        const educationCampaigns = data.filter(campaign => campaign.category === "relief");
        setCampaigns(educationCampaigns);
      } catch (err) {
        message.error("Failed to fetch campaigns");
        console.error("Error fetching campaigns:", err);
      }
    };

    fetchCampaigns();
  }, []);

  // Show only the first 6 campaigns unless 'Show More' is clicked
  const visibleCampaigns = showAll ? campaigns : campaigns.slice(0, 6);

  return (
    <div className="campaigns-container">
      <h2>Relief Campaigns</h2>
      {campaigns.length > 0 ? (
        <div className="campaign-list">
          {visibleCampaigns.map((campaign) => (
            <div key={campaign._id} className="campaign-card">
              <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <p><strong>Goal:</strong> BDT{campaign.goalAmount}&nbsp; | &nbsp;
              <strong>Raised:</strong> BDT{campaign.raisedAmount}</p>
              
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
      {campaigns.length > 6 && (
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
