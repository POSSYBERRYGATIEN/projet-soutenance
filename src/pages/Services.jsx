import React from 'react';
import './Service.css'

const Services = () => {
  const services = [
    "Gardiennage 24h/24 (Résidance ,Chantier , Cites d'évernement etc)",
    "Surveillance vidéo ",
    "Intervention rapide sur alarme",
    "Rondes de sécurité",
    "Installation de systèmes de Surveillance",
    "Des menagères (Domestique ,Aide menagère etc)",
    "Des agents d'entretient pour mettre au propre vos :( Bureau ,cites d'évernement chantier etc) "
  ];

  return (
    <div className="home-container">
      <h2>Nos Services</h2>
      <img src="/images/mon-image4.png" alt="mon image"  />
      <ul className="list-group mt-4">
        {services.map((service, index) => (
          <li key={index} className="list-group-item">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
