import React from 'react';
import '../styles/Profile.css';
import profilePic from '../assets/images/profile.jpg'; // path correct rakho

const Profile = () => {
  return (
    <div className="Profile-wrapper">
      {/* Top section with profile and text */}
      <div className="Profile-container">
        {/* Left: Profile image */}
        <div className="left-section">
          <img
              src={profilePic} 
              alt="Pradip Thorat"
              className="profile-pic"
          />
        </div>
        {/* RighSt: Intro content */}
        <div className="right-section">
          <div className="intro-text">
            <h1>Hi, I’m Pradip Thorat 👨‍💻</h1>
            <p>
              I build modern web apps using <span className="highlight">Java</span>,{' '}
              <span className="highlight">Spring Boot</span>, and{' '}
              <span className="highlight">React</span>.
            </p>
            <a href="/Projects" className="cta-button">
              🚀 View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section with cards */}
      <div className="cards-section">
        <div className="info-card">
          <h3>🎓 Education</h3>
          <p>BCA - Bachelor of Computer Applications</p>
          <p>Graduated in 2022</p>
        </div>
        <div className="info-card">
          <h3>🛠 Skills</h3>
          <p>Java, Spring Boot, React</p>
          <p>MySQL, REST API</p>
        </div>
         <div className="info-card">
          <h3>🔝 Work Experiences</h3>
          <p>Java Developer Trainee</p>
          <p>HEF-Shine Softwares</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
