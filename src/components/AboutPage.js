import React from 'react';
import './AboutPage.css'; 
import { useNavigate } from 'react-router-dom';


const AboutPage = () => {
   
        const navigate = useNavigate(); 
      
        const handleBackClick = () => {
          navigate(-1); 
        };
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Placement Analytics</h1>
      </header>
      <main className="about-content">
        <div className='H2'>
        <h2>What is Placement Analytics?</h2></div>
        <p>
          Placement Analytics is a comprehensive platform designed to help students and educational institutions
          track and analyze placement trends across various companies and years. Our goal is to provide valuable
          insights into the job market and help students make informed career decisions.
        </p>
        <div className='H2'><h2>Features</h2></div>
        <ul>
          <li>Explore placement data by company and year.</li>
          <li>Visualize placement trends using interactive charts.</li>
          <li>Access detailed information about companies and their placement statistics.</li>
          <li>User-friendly interface for easy navigation and data retrieval.</li>
        </ul>
        <div className='H2'><h2>Get Started!</h2></div>
        <p>
          Ready to explore placement data? Go to the <a href="/companies">Companies</a> page to get started!
        </p>
      </main>
      <footer className="about-footer">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      </footer>

    </div>
  );
};


export default AboutPage;
