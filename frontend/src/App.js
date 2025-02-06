import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';  // Make sure it's correct case
import Login from './pages/login'; 
import Register from './pages/Register'; 
import Account from './pages/Account'; 
import 'antd/dist/reset.css'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
