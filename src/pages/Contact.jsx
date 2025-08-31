import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
const [form, setForm] = useState({ name: '', email: '', message: '' });
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState(null); // success | error

const handleChange = (e) => {
 setForm({ ...form, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 setLoading(true);
 fetch("http://localhost:8080/api/contact", {
 method: "POST",
  headers: { "Content-Type": "application/json" },
 body: JSON.stringify(form),
 })
 .then(res => {
 if (res.ok) {
 setStatus('success');
  setForm({ name: '', email: '', message: '' });
 } else {
 setStatus('error');
 }
 })
 .catch(() => setStatus('error'))
 .finally(() => setLoading(false));
 };

 return (     
 <div className="contact-container">
<form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
 <input
name="name"
placeholder="Name"
 value={form.name}
 onChange={handleChange}
required
 />
 <input
 type="email"
  name="email"
  placeholder="Email"
 value={form.email}
  onChange={handleChange}
 required
/>
 <textarea
 name="message"
placeholder="Message"
 value={form.message}
 onChange={handleChange}
 required
 />
 <button type="submit" disabled={loading}>
         {loading ? 'Sending...' : 'Send Message'}
 </button>
  {status === 'success' && <p style={{ color: 'lightgreen' }}>Message sent successfully!</p>}
 {status === 'error' && <p style={{ color: 'red' }}>Failed to send message.</p>}
 </form>
 </div>
);
};

export default Contact;
