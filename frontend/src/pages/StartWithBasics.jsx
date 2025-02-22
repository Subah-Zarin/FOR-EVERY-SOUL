import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/StartWithBasics.css'; 

function StartWithBasics() {
  return (
    <div className="start-with-basics">
      {/* Navbar Section */}
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/login" className="navbar-link">Login</Link></li>
          <li><Link to="/register" className="navbar-link">Register</Link></li>
          <li><Link to="/donation" className="navbar-link">Donation</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <h1>Start with the Basics</h1>
      <p>Here is where you can begin your fundraising journey!</p>
      <div className="basic-info">
        <h2>What You Need to Get Started</h2>
        <ul>
          <li>Basic Information: Name, Email</li>
          <li>Your Goal: Set a fundraising target</li>
          <li>Payment Details: For donations</li>
        </ul>
      </div>
      <button className="next-step">Next Step</button>
    </div>
  );
}

export default StartWithBasics;
