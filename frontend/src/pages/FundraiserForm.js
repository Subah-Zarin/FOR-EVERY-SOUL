import { useState } from "react";
import axios from "axios";
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import '../styles/FundraiserForm.css';

const FundraiserForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !goalAmount || !image) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/campaigns/create", {
        title,
        description,
        goalAmount,
        imageUrl: image, 
      });

      setMessage(response.data.message);
      setTitle("");
      setDescription("");
      setGoalAmount("");
      setImage(null);
    } catch (error) {
      setMessage("Error creating campaign.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="fundraiser-wrapper">
        {/* Left Section - Info about Fundraising */}
        <div className="fundraiser-info">
          <h2>Why Start a Fundraiser?</h2>
          <p>Every great cause deserves a platform. Create your fundraiser to:</p>
          <ul>
            <li>Support a personal or community cause</li>
            <li>Help those in urgent need</li>
            <li>Raise funds for medical emergencies</li>
            <li>Contribute to social or environmental issues</li>
          </ul>
          <p>Start your campaign today and make a difference!</p>
        </div>

        {/* Right Section - Fundraiser Form */}
        <div className="fundraiser-container">
          <h2 className="fundraiser-title">Create a Fundraiser</h2>
          <form onSubmit={handleSubmit} className="fundraiser-form">
            <input
              type="text"
              placeholder="Campaign Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="fundraiser-input"
              required
            />
            <textarea
              placeholder="Campaign Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="fundraiser-input fundraiser-textarea"
              required
            />
            <input
              type="number"
              placeholder="Target Amount"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              className="fundraiser-input"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="fundraiser-input"
              required
            />
            <button type="submit" className="fundraiser-button">
              Create Campaign
            </button>
          </form>
          {message && <p className="fundraiser-message">{message}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FundraiserForm;
