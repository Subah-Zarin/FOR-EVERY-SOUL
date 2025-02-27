import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';  
import Login from './pages/login'; 
import Register from './pages/Register'; 
import Education from './pages/education';  
import Donation from './pages/Donation';
import Medical from './pages/medical';
import Volunteer from './pages/Volunteer';
import OurMission from './pages/OurMission';

import TellYourStory from './pages/TellYourStory';
import FundraiserForm from "./pages/FundraiserForm";


import 'antd/dist/reset.css'; 
import Relief from "./pages/Relief"; 
import Impact from './pages/impact';
import Profile from './pages/Profile';
import CampaignListPage from './pages/CampaignListPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/disaster-relief" element={<Relief />} /> 
        <Route path="/volunteer" element={<Volunteer />} /> 
        <Route path="/tell-your-story" element={<TellYourStory />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/FundraiserForm" element={<FundraiserForm />} />
        <Route path="/campaigns" component={CampaignListPage} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;