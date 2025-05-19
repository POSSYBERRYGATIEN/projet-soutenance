import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Assure-toi que ce fichier existe

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Bienvenue chez Mon Entreprise</h1>
        <img src="/images/mon-image1.jpg" alt="mon image1" className="images" />
        <p>
          Nous assurons votre sécurité avec professionnalisme : gardiennage, vidéosurveillance, intervention rapide, et plus.
          Nous sommes également disponibles pour vous mettre au propre vos : (Bureau, Site d'événement, Chantier, Résidence, etc.).
          Nous sommes également disponibles pour mettre à votre disposition : (Ménagère, Domestique, Boutiquière, etc.).
        </p>
        <div className="buttons">
          <Link to="/services" className="btn btn-primary">Nos Services</Link>
          <Link to="/quoterequest" className="btn btn-outline-secondary">Demande de Devis</Link>
          <Link to="/contact" className="btn btn-outline-secondary">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;