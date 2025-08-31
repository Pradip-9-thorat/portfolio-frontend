import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="neon-title">Pradip Portfolio</h1>
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/Profile" onClick={() => setMenuOpen(false)}>Profile</Link>
        <Link to="/Projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/Clients" onClick={() => setMenuOpen(false)}>Clients</Link>
        <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/Admin" onClick={() => setMenuOpen(false)}>Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
