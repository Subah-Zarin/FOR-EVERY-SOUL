import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar"; // Import NavBar
import Footer from "../components/Footer";
import "../styles/Volunteer.css";
import noahImg from "../assets/noah.jpg";
import oliviaImg from "../assets/olivia.jpg";
import ethanImg from "../assets/ethan.jpg";
import sophiaImg from "../assets/sophia.jpg";
import liamImg from "../assets/liam.jpg";
import emilyImg from "../assets/emily.jpg";
import instagramIcon from "../assets/instagram-icon.png";
import facebookIcon from "../assets/facebook-icon.png";

const volunteers = [
  {
    name: "Noah Martinez",
    role: "Social Media Manager",
    img: noahImg,
    instagram: "https://instagram.com/noah",
    facebook: "https://facebook.com/noah"
  },
  {
    name: "Olivia Johnson",
    role: "Volunteer Lead",
    img: oliviaImg,
    instagram: "https://instagram.com/olivia",
    facebook: "https://facebook.com/olivia"
  },
  {
    name: "Ethan Brown",
    role: "Operations Assistant",
    img: ethanImg,
    instagram: "https://instagram.com/ethan",
    facebook: "https://facebook.com/ethan"
  },
  {
    name: "Sophie Lee",
    role: "Fundraising Manager",
    img: sophiaImg,
    instagram: "https://instagram.com/sophie",
    facebook: "https://facebook.com/sophie"
  },
  {
    name: "Liam Patel",
    role: "Event Planner",
    img: liamImg,
    instagram: "https://instagram.com/liam",
    facebook: "https://facebook.com/liam"
  },
  {
    name: "Emily John",
    role: "Outreach Coordinator",
    img: emilyImg,
    instagram: "https://instagram.com/emily",
    facebook: "https://facebook.com/emily"
  }
];

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    occupation: "",
    address: "",
    country: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [showPopup, setShowPopup] = useState(false); // Controls pop-up visibility

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for signing up as a volunteer! 🎉"); // Set message
        setShowPopup(true); // Show the pop-up
        setFormData({
          name: "",
          email: "",
          phone: "",
          dob: "",
          occupation: "",
          address: "",
          country: "",
          message: "",
        });

        setTimeout(() => setShowPopup(false), 5000);

      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, please try again later.");
    }
  };

  return (
    <div className="volunteer-page" style={{ marginTop: "80px" }}>
      <NavBar /> {/* Add the NavBar at the top */}

      {/* Header Section */}
      <header className="volunteer-hero">
        <p className="hero-subtitle">OUR VOLUNTEERS</p>
        <h1 className="hero-title">Our Passionate Volunteers</h1>
      </header>

      {/* Volunteer Profiles */}
      <div className="volunteer-list">
        {volunteers.map((volunteer, index) => (
          <div className="volunteer-card" key={index}>
            <img src={volunteer.img} alt={volunteer.name} />
            <h3>{volunteer.name}</h3>
            <p>{volunteer.role}</p>
            <div className="social-links">
              <a
                href={volunteer.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href={volunteer.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteer Signup Form */}
      <section className="volunteer-form-section">
        <h2>Become A Volunteer</h2>
        <p>And Join Our Community</p>
        <form onSubmit={handleSubmit} className="volunteer-form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            required
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="occupation"
            placeholder="Your Occupation"
            value={formData.occupation}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Your State/Country"
            value={formData.country}
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"
            value={formData.message}
            required
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit Now</button>
        </form>
      </section>
      {/* Pop-up message */}
{showPopup && (
  <div className="popup-container">
    <div className="popup">
      <p>{successMessage}</p>
      <button onClick={() => setShowPopup(false)}>OK</button>
    </div>
  </div>
)}

      <Footer />
    </div>
  );
};

export default VolunteerPage;
