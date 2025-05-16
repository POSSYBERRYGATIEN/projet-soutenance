import React, { useState } from 'react';

const QuoteRequest = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    details: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Demande de devis envoyée !');
    // À connecter avec le backend plus tard
  };

  return (
    <div className="container mt-5">
      <h2>Demande de devis</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label>Nom</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Service souhaité</label>
          <select name="service" className="form-select" onChange={handleChange} required>
            <option value="">-- Choisir un service --</option>
            <option value="Gardiennage">Gardiennage</option>
            <option value="Surveillance vidéo">Surveillance vidéo</option>
            <option value="Intervention">Intervention</option>
            <option value="Installation d'alarmes">Installation d'alarmes</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Détails supplémentaires</label>
          <textarea name="details" className="form-control" onChange={handleChange} />
        </div>
        <button className="btn btn-success" type="submit">Envoyer la demande</button>
      </form>
    </div>
  );
};

export default QuoteRequest;
