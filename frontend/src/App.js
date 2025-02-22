import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Login from './pages/login';
import Register from './pages/Register';
import Account from './pages/Account';
import Education from './pages/education';
import Donation from './pages/Donation';
import TellYourStory from './pages/TellYourStory'; // Ensure this file exists
import StartWithBasics from './pages/StartWithBasics'; // Correct path here
import 'antd/dist/reset.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/education" element={<Education />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/tell-your-story" element={<TellYourStory />} />
        <Route path="/start-with-basics" element={<StartWithBasics />} /> {/* Corrected route */}
      </Routes>
    </Router>
  );
};

export default App;
