// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Pradip's Freelancing Services</h2>
        <p>Crafting modern websites with React, Spring Boot & MySQL</p>

        <div className="social-icons">
          <a href="https://github.com/Pradip-9-thorat" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/pradipthorat" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:pradip@example.com">Email</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Pradip Thorat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
