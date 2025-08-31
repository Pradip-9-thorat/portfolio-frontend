import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import Footer from './components/Footer';
import './styles/App.css'; // global background

function App() {
  return (
    <div className="app-background">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;