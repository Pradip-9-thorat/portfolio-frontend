import React, { useState, useEffect } from 'react';
import '../styles/Clients.css';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/clients")
      .then(res => res.json())
      .then(data => setClients(data))
      .catch(err => console.error("Error fetching clients:", err));
  }, []);

  return (
    <div className="clients-container">
      <h2>Clients</h2>
      <div className="clients-list">
        {clients.map(client => (
          <div key={client.id} className="client-card">
            <h4>{client.name}</h4>
            <p>{client.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;