import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Theodre EVEDJE",
      text: "Service impeccable. Les agents sont ponctuels et très professionnels."
    },
    {
      name: "ADEOTI sarl",
      text: "Nous avons installé un système d'alarme via Sécurité Pro, tout fonctionne à merveille."
    },
    {
      name: "MOOV Africa sarl",
      text: "Service impeccable. Leurs agents sont très actifs."
    },
    {
      name: "MTN Bénin sarl",
      text: "Service impeccable. Nous avons installé des caméras de surveillance via Sécurité Pro. Tout fonctionne à merveille et leurs agents sont très actifs."
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>Témoignages</h2>
      {reviews.map((review, index) => (
        <div key={index} className="testimonial-card">
          <strong>{review.name} :</strong>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
