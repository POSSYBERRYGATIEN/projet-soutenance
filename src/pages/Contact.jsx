import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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
        message: form.message
      })
    })
    .then(response => {
      if (response.ok) {
        alert("Message envoyé !");
        setForm({ name: '', email: '', message: '' });
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    })
    .catch(() => alert("Une erreur s'est produite. Veuillez réessayer."));
  };

  return (
    <div className="container mt-5">
      <h2>Contactez-nous</h2>
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
          <label>Message</label>
          <textarea name="message" className="form-control" value={form.message} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;