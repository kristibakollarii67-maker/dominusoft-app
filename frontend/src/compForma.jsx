import { useState } from 'react';

function CompForma() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/addContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setMessage('Kontakti u ruajt me sukses!');
        setForm({ firstName: '', lastName: '', email: '', comment: '' });
      } else {
        setMessage('Dicka shkoi gabim.');
      }
    } catch (err) {
      setMessage('Serveri nuk u gjend.');
    }
  };

  return (
    <div>
      <h2>Forma e Kontaktit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Emri"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Mbiemri"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="comment"
            placeholder="Mesazhi"
            value={form.comment}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Dergo</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CompForma;
