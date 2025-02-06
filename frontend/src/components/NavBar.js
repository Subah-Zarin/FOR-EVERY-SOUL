// src/components/NavBar.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'antd';
import '../styles/NavBar.css'; // Add your styles for the navbar

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-links">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/register" className="navbar-link">Register</Link>
      <Link to="/login" className="navbar-link">Login</Link>
      <Link to="/account" className="navbar-link">Account</Link>
    </div>
    <div className="navbar-actions">
      <Button className="donate-button">Donate</Button>
    </div>
  </nav>
);

export default NavBar;
