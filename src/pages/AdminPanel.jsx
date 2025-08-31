import React, { useState, useEffect } from 'react';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [project, setProject] = useState({
    title: '',
    description: '',
    techStack: '',
    githubLink: '',
    liveDemoLink: '',
    imageUrl: ''
  });
  const [client, setClient] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const fetchProjects = () => {
    fetch('http://localhost:8080/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  };
 const fetchClients = () => {
    fetch('http://localhost:8080/api/clients')
      .then(res => res.json())
      .then(data => setClients(data));
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchProjects();
      fetchClients();
    }
  }, [isLoggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!isLoggedIn) {
      setLoginData({ ...loginData, [name]: value });
    } else if (name in project) {
      setProject({ ...project, [name]: value });
    } else {
      setClient({ ...client, [name]: value });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };
 const handleProjectSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch('http://localhost:8080/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    })
      .then(res => {
        setLoading(false);
        if (res.ok) {
          alert('✅ Project Added');
          fetchProjects();
          setProject({ title: '', description: '', techStack: '', githubLink: '', liveDemoLink: '', imageUrl: '' });
        } else alert('❌ Failed to add');
      })
      .catch(err => {
        setLoading(false);
        alert('❌ Error');
        console.error(err);
      });
  };

  const handleClientSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch('http://localhost:8080/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client)
    })
      .then(res => {
        setLoading(false);
        if (res.ok) {
          alert('✅ Client Added');
          fetchClients();
          setClient({ name: '', email: '', company: '', message: '' });
        } else alert('❌ Failed to add');
      })
      .catch(err => {
        setLoading(false);
        alert('❌ Error');
        console.error(err);
      });
  };
 const handleDeleteProject = (id) => {
    fetch(`http://localhost:8080/api/projects/${id}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          alert('🗑️ Project deleted');
          fetchProjects();
        }
      });
  };

  const handleDeleteClient = (id) => {
    fetch(`http://localhost:8080/api/clients/${id}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          alert('🗑️ Client deleted');
          fetchClients();
        }
      });
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin} className="admin-form">
          <input type="text" name="username" placeholder="Username" value={loginData.username} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
 return (
    <div>
     <div className="admin-container">
      <h2>Add New Project</h2>
      <form onSubmit={handleProjectSubmit} className="admin-form">
        <input type="text" name="title" placeholder="Title" value={project.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={project.description} onChange={handleChange} required />
        <input type="text" name="techStack" placeholder="Tech Stack" value={project.techStack} onChange={handleChange} required />
        <input type="url" name="githubLink" placeholder="GitHub Link" value={project.githubLink} onChange={handleChange} />
        <input type="url" name="liveDemoLink" placeholder="Live Demo Link" value={project.liveDemoLink} onChange={handleChange} />
        <input type="url" name="imageUrl" placeholder="Image URL" value={project.imageUrl} onChange={handleChange} />
        <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Project'}</button>
      </form>
      </div>
      <div className="admin-container" >
      <h2>Add New Client</h2>
      <form onSubmit={handleClientSubmit} className="admin-form">
        <input type="text" name="name" placeholder="Client Name" value={client.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={client.email} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company" value={client.company} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={client.message} onChange={handleChange} />
        <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Client'}</button>
      </form>
      </div>

       <div className="admin-container">
      <h2>Existing Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.title} <button onClick={() => handleDeleteProject(p.id)}>Delete</button></li>
        ))}
      </ul>
       <h2>Existing Clients</h2>
      <ul>
        {clients.map(c => (
          <li key={c.id}>{c.name} ({c.company}) <button onClick={() => handleDeleteClient(c.id)}>Delete</button></li>
        ))}
      </ul>
      </div>
      </div>
  );
};

export default AdminPanel;