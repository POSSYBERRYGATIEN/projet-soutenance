import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Jean Dupont",
      text: "Service impeccable. Les agents sont ponctuels et très professionnels."
    },
    {
      name: "Sophie Martin",
      text: "Nous avons installé un système d'alarme via Sécurité Pro, tout fonctionne à merveille."
    }
  ];

  return (
    <div className="container mt-5">
      <h2>Témoignages</h2>
      {reviews.map((review, index) => (
        <div key={index} className="alert alert-secondary mt-3">
          <strong>{review.name} :</strong> {review.text}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
