import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  // ✅ Static projects data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      imageUrl: "/images/portfolio.png",   // apne assets folder se import karna hoga
      description: "My personal developer portfolio built using React and CSS glow effects.",
      techStack: "React, CSS, JavaScript",
      githubLink: "https://github.com/pradip-thorat/portfolio",
      liveDemoLink: "https://pradip-thorat.netlify.app/"
    },
    {
      id: 2,
      title: "E-Commerce App",
      imageUrl: "/images/ecommerce.png",
      description: "An e-commerce web app with product listing, cart, and checkout features.",
      techStack: "Spring Boot, React, MySQL",
      githubLink: "https://github.com/pradip-thorat/ecommerce-app",
      liveDemoLink: "#"
    },
    {
      id: 3,
      title: "Chatbot App",
      imageUrl: "/images/chatbot.png",
      description: "AI-powered chatbot integrated into a React frontend.",
      techStack: "React, Node.js, API",
      githubLink: "https://github.com/pradip-thorat/chatbot-app",
      liveDemoLink: "#"
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">💻 GitHub</a> |{" "}
              <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;