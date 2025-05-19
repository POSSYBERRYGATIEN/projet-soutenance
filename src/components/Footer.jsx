import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mon Entreprise. Tous droits réservés.</p>
        <p>Tél : +229 01 68 80 15 09 | 01 62 15 33 59 | Email : monentreprise@gmail.com</p>
        <p>Adresse: Ouidah | Quartier : Place Maro</p>
      </div>
    </footer>
  );
};

export default Footer;
