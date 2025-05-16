import React, { useState } from 'react';

const QuoteRequest = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    details: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xwpoybwq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        service: form.service,
        details: form.details
      })
    })
    .then(response => {
      if (response.ok) {
        alert("Demande de devis envoyée !");
        setForm({ name: '', email: '', service: '', details: '' });
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    })
    .catch(() => alert("Une erreur s'est produite. Veuillez réessayer."));
  };

  return (
    <div className="container mt-5">
      <h2>Demande de devis</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label>Nom</label>
          <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Service souhaité</label>
          <select name="service" className="form-select" value={form.service} onChange={handleChange} required>
            <option value="">-- Choisir un service --</option>
            <option value="Gardiennage">Gardiennage</option>
            <option value="Surveillance vidéo">Surveillance vidéo</option>
            <option value="Intervention">Intervention</option>
            <option value="Installation d'alarmes">Installation d'alarmes</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Détails supplémentaires</label>
          <textarea name="details" className="form-control" value={form.details} onChange={handleChange} />
        </div>
        <button className="btn btn-success" type="submit">Envoyer la demande</button>
      </form>
    </div>
  );
};

export default QuoteRequest;
