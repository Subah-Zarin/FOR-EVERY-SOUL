import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Volunteer.css";
import instagramIcon from "../assets/instagram-icon.png";
import facebookIcon from "../assets/facebook-icon.png";

const VolunteerPage = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", dob: "", occupation: "", address: "", country: "", message: "",
  });

  // Fetch volunteers from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/volunteers")
      .then(response => setVolunteers(response.data))
      .catch(error => console.error("Error fetching volunteers:", error));
  }, []);

  // Handle input change
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/volunteers", formData)
      .then(response => {
        alert("Thank you for signing up as a volunteer!");
        setVolunteers([...volunteers, response.data]); // Add new volunteer to UI
        setFormData({ name: "", email: "", phone: "", dob: "", occupation: "", address: "", country: "", message: "" }); // Reset form
      })
      .catch(error => console.error("Error signing up:", error));
  };

  return (
    <div className="volunteer-page" style={{ marginTop: "80px" }}>
      <NavBar />

      {/* Header */}
      <header className="volunteer-hero">
        <p className="hero-subtitle">OUR VOLUNTEERS</p>
        <h1 className="hero-title">Our Passionate Volunteers</h1>
      </header>

      {/* Volunteer List */}
      <div className="volunteer-list">
        {volunteers.map((volunteer, index) => (
          <div className="volunteer-card" key={index}>
            <h3>{volunteer.name}</h3>
            <p>{volunteer.role || "Volunteer"}</p>
            <div className="social-links">
              <a href={`https://instagram.com/${volunteer.name.split(" ")[0].toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
              <a href={`https://facebook.com/${volunteer.name.split(" ")[0].toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteer Form */}
      <section className="volunteer-form-section">
        <h2>Become A Volunteer</h2>
        <p>And Join Our Community</p>
        <form onSubmit={handleSubmit} className="volunteer-form">
          <input type="text" name="name" placeholder="Your Full Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Your Phone" required value={formData.phone} onChange={handleChange} />
          <input type="date" name="dob" required value={formData.dob} onChange={handleChange} />
          <input type="text" name="occupation" placeholder="Your Occupation" required value={formData.occupation} onChange={handleChange} />
          <input type="text" name="address" placeholder="Your Address" required value={formData.address} onChange={handleChange} />
          <input type="text" name="country" placeholder="Your State/Country" required value={formData.country} onChange={handleChange} />
          <textarea name="message" placeholder="Why do you want to volunteer?" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Submit Now</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default VolunteerPage;
