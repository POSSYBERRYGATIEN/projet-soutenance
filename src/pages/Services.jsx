import React from 'react';

const Services = () => {
  const services = [
    "Gardiennage 24h/24",
    "Surveillance vidéo (CCTV)",
    "Intervention rapide sur alarme",
    "Rondes de sécurité",
    "Installation de systèmes d'alarme"
  ];

  return (
    <div className="container mt-5">
      <h2>Nos Services</h2>
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
