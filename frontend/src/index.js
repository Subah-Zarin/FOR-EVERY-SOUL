import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css'; // Import Ant Design styles

// If you want to render the `Register` component directly for testing purposes
import Register from './pages/Register'; // Update the path based on the correct location of your Register.js

// Create the root for rendering React components
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render either `App` or `Register`
root.render(
  <React.StrictMode>
    {/* Switch between App and Register as needed */}
    <App />
    {/* <Register /> Uncomment this if you want to render the Register component */}
  </React.StrictMode>
);

// Optional performance tracking
reportWebVitals();