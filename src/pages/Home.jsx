import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Bienvenue chez Sécurité Pro</h1>
      <p>
        Nous assurons votre sécurité avec professionnalisme : gardiennage, vidéosurveillance, intervention rapide, et plus.
      </p>
      <Link to="/services" className="btn btn-primary me-2">Nos Services</Link>
      <Link to="/quote" className="btn btn-outline-secondary">Demande de devis</Link>
    </div>
  );
};

export default Home;
