import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';  
import Login from './pages/login'; 
import Register from './pages/Register'; 
import Account from './pages/Account'; 
import Education from './pages/education';  
import Donation from './pages/Donation';
import Medical from './pages/medical';
import Volunteer from './pages/Volunteer';
import TellYourStory from './pages/TellYourStory';

import 'antd/dist/reset.css'; 
import Relief from "./pages/Relief"; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/education" element={<Education />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/disaster-relief" element={<Relief />} /> 
        <Route path="/volunteer" element={<Volunteer />} /> 
        <Route path="/tell-your-story" element={<TellYourStory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;