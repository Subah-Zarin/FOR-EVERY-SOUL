import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Ensure the correct path to your Homepage component
import Register from './pages/Register'; // Ensure the correct path to your Register component
import Login from './pages/login'; // Ensure the correct path to your Login component
import Account from './pages/Account'; // Ensure the correct path to your Account component
import 'antd/dist/reset.css'; // Import Ant Design styles

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Register Route */}
        <Route path="/register" element={<Register />} />
        
        {/* Account Route */}
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
