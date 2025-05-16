import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Sécurité Pro. Tous droits réservés.</p>
        <p className="mb-0">Tél :+229 01 68 80 15 09 | Email : gatienpossyberry@gmail.com</p>
        <p className="mb-1">Adress: Ouidah</p>
      </div>
    </footer>
  );
};

export default Footer;
