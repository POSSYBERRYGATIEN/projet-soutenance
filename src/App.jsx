import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/about';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import QuoteRequest from './pages/QuoteRequest';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  // Vérification WebGL
  useEffect(() => {
    function isWebGLAvailable() {
      try {
        const canvas = document.createElement('canvas');
        return !!window.WebGLRenderingContext && !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      } catch  {
        return false;
      }
    }

    if (!isWebGLAvailable()) {
      console.error("Votre navigateur ne supporte pas WebGL.");
    } else {
      console.log("WebGL est activé.");
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quoterequest" element={<QuoteRequest />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;