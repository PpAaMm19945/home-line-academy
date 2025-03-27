import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming you have an App.jsx/tsx component
import './index.css';  // Assuming you have a global CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);