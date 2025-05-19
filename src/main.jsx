import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';


// Vérifie si le navigateur prend en charge les Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });
}

createRoot(document.getElementById('root')).render(
  import.meta.env.MODE === 'development' ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  )
);
