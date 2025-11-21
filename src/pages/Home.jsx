import React from 'react';
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaEnvelope, FaCode, FaUser } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const neonText = "Welcome to Pradip's Freelancing World";

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          {/* 🌈 Neon Animated Title */}
          <h1 className='neon-text'>
            {neonText.split("").map((char, index) => (
              <span key={index}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </h1>

          <p>I empower businesses with modern and scalable web solutions.</p>
          <p>
            I build modern web apps using <span className="highlight">Java</span>,{' '}
            <span className="highlight">Spring Boot</span>, and{' '}
            <span className="highlight">React</span>.
          </p>
          <a href="#services"><button className="btn-glow">Explore Services</button></a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>My Freelancing Services</h2>
        <div className="service-cards">
          <div className="card">Web Development</div>
          <div className="card">React UI Design</div>
          <div className="card">Admin Dashboards</div>
          <div className="card">Bug Fixing</div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="quick-links">
        <div className="quick-card">
          <Link to="/projects">
            <FaCode size={32} />
            <p>Projects</p>
          </Link>
        </div>
        <div className="quick-card">
          <Link to="/contact">
            <FaEnvelope size={32} />
            <p>Contact Me</p>
          </Link>
        </div>
        <div className="quick-card">
          <Link to="/profile">
            <FaUser size={32} />
            <p>My Profile</p>
          </Link>
        </div>
      </section>

      {/* Social Icons */}
      <section className="social-links">
        <a href="https://linkedin.com/in/pradip-thorat" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/pradip.thorat_09" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="mailto:pradip9thorat@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
      </section>
    </div>
  );
};

export default Home;