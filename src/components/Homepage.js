import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css'; 
import wappnetLogo from '../Assets/wappnet.jpeg';
import shaligramLogo from '../Assets/final_logo_shaligram.jpg';
import esparkLogo from '../Assets/espark.jpeg';
import icsLogo from '../Assets/ics.jpeg';
import silentLogo from '../Assets/silent.jpeg';

const companyLogos = [
  { src: wappnetLogo, alt: 'Wappnet Logo' },
  { src: shaligramLogo, alt: 'Shaligram Logo' },
  { src: esparkLogo, alt: 'Espark Logo' },
  { src: icsLogo, alt: 'ICS Logo' },
  { src: silentLogo, alt: 'Silent Logo' },
];

const HomePage = () => {
  const [logoIndexes, setLogoIndexes] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndexes((prevIndexes) => prevIndexes.map(
        () => Math.floor(Math.random() * companyLogos.length)
      ));
    }, 3000); // Change logos every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>Placement Analytics</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-main-content">
              <h2>Welcome to Placement Analytics!</h2>
              <p>
                Your go-to platform for exploring placement data and making informed career decisions.
                Discover insights into company placements, recruitment trends, and student experiences.
              </p>
            </div>
            <div className="hero-button-container">
              <a href="/companies" className="cta-button">Get Started</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="logo-grid">
              {logoIndexes.map((index, i) => (
                <div key={i} className="logo-cell hanging-logo">
                  <img 
                    src={companyLogos[index].src} 
                    alt={companyLogos[index].alt} 
                    className="company-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Placement Analytics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
