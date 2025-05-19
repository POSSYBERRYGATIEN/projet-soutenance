import React from 'react';
import './About.css'; // Assure-toi que ce fichier existe bien

const About = () => {
  return (
    <div className="about-container mt-5">
      <h2>À propos de nous</h2>
      <p>
        Notre entreprise est spécialisée dans les <strong>services de sécurité</strong> depuis plus de 10 ans. 
        Notre mission est de <strong>protéger vos biens et vos proches</strong> grâce à des solutions modernes et fiables.
      </p>
      <p>
        Nous sommes également experts dans les <strong>services de ménage</strong>, garantissant la propreté de vos bureaux, résidences et sites d'événements. 
        Grâce à notre équipe expérimentée, nous vous offrons un service de qualité supérieure.
      </p>
      <p>
        Notre équipe est composée de <strong>professionnels formés et certifiés</strong>, prêts à vous assurer un service irréprochable.
      </p>
    </div>
  );
};

export default About;
