import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../styles/CampaignListPage.css';  

const CampaignListPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/campaigns"); 
        if (response.data && response.data.length > 0) {
          setCampaigns(response.data);
        } else {
          setMessage("No campaigns available.");
        }
      } catch (error) {
        setMessage("Error fetching campaigns.");
        console.error("Error fetching campaigns:", error);  
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <>
      <NavBar />
      <div className="campaigns-page">
        <h2 className="campaigns-title">Newly Created Campaigns</h2>
        <div className="campaigns-container">
          {message && <p className="campaigns-message">{message}</p>}
          {campaigns.length === 0 ? (
            <p>No campaigns available at the moment.</p>
          ) : (
            campaigns.map((campaign) => (
              <div className="campaign-card" key={campaign._id}>
                <img
                  className="campaign-image"
                  src={campaign.imageUrl}
                  alt={campaign.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="campaign-details">
                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>
                  <p>Goal Amount: ${campaign.goalAmount}</p>
                  <p>Category: {campaign.category}</p>
                  <div className="campaign-progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${(campaign.amountCollected / campaign.goalAmount) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CampaignListPage;
