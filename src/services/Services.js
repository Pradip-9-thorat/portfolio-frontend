// ✅ Services.jsx
import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/services")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error("Error fetching services:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Services</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>{service.title} - {service.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;