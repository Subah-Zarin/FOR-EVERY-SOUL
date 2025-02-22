import React, { useState } from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar
import '../styles/TellYourStory.css'; 

const TellYourStory = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setMessage('Your story has been submitted successfully! 🎉');
    setTimeout(() => setMessage(''), 5000); // Hide after 5 seconds
  };

  return (
    <div>
      <NavBar /> {/* Call the NavBar component here */}

      <div className="story-map-container">
        <h2 className="story-map-title">Tell Your Story</h2>

        <div className="story-map-circle">
          <div className="story-map-section who">
            <h3>Who</h3>
            <textarea placeholder="Describe the main character(s)..." />
          </div>

          <div className="story-map-section what">
            <h3>What</h3>
            <textarea placeholder="Describe what happened..." />
          </div>

          <div className="story-map-section where">
            <h3>Where</h3>
            <textarea placeholder="Describe the location..." />
          </div>

          <div className="story-map-section when">
            <h3>When</h3>
            <textarea placeholder="Describe the time period..." />
          </div>

          <div className="story-map-section why">
            <h3>Why</h3>
            <textarea placeholder="Describe the purpose or reason..." />
          </div>
        </div>

        <button className="story-submit-button" onClick={handleSubmit}>
          Submit Story
        </button>

        {message && <div className="success-message">{message}</div>}
      </div>
    </div>
  );
};

export default TellYourStory;
