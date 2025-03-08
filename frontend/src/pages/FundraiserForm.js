import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import '../styles/FundraiserForm.css';
import { message } from "antd";

const FundraiserForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [category, setCategory] = useState("");  
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const username = localStorage.getItem('username');
      if (!username) {
        message.error('You are not logged in!');
        navigate('/login');
      }
    };
    fetchUserData();
  }, [navigate]);

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
    if (!title || !description || !goalAmount || !category || !image) {
      setMsg("All fields are required.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/campaigns/create", {
        title,
        description,
        goalAmount,
        category,  
        imageUrl: image,
      });
      setMsg(response.data.message);
      setTitle("");
      setDescription("");
      setGoalAmount("");
      setCategory("");  
      setImage(null);
    } catch (error) {
      setMsg("Error creating campaign.");
    }
  };

  return (
    <div className="fundraiser-page">
      <NavBar />
      <header className="Fund-header"></header>
      <div className="fundraiser-wrapper">
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
            <select
              className="fundraiser-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}  
              required
            >
              <option value="" disabled>Select Donation Category</option>
              <option value="education">Education</option>
              <option value="medical">Medical</option>
              <option value="relief">Relief</option>
            </select>
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
          {msg && <p className="fundraiser-message">{msg}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FundraiserForm;