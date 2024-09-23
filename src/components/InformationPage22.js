import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './InformationPage22.css'; 

const InformationPage2022 = () => {
  const navigate = useNavigate(); 

  const placements2022 = [
    { company: 'Company Alpha', position: 'Software Engineer' },
    { company: 'Company Beta', position: 'Data Analyst' },
    { company: 'Company Gamma', position: 'Product Manager' },
    { company: 'Company Delta', position: 'Web Developer' },
    { company: 'Company Epsilon', position: 'Intern' },
  ];

  const handleBackClick = () => {
    navigate('/'); 
  };

  const handleSeeDetailsClick = () => {
    navigate('/details/2022'); 
  };

  return (
    <div className="information-page">
      <header className="info-header">
        <h1>Placements in 2022</h1>
      </header>
      <main className="info-content">
        <h2>Overview</h2>
        <p>
          In 2022, many students successfully secured placements in various companies across different sectors. 
          The job market saw a resurgence as companies adapted to the post-pandemic landscape.
        </p>
        <h2>Companies that Hired</h2>
        <ul className="company-list">
          {placements2022.map((placement, index) => (
            <li key={index} className="company-item">
              <strong>{placement.company}</strong> - {placement.position}
            </li>
          ))}
        </ul>
      </main>
      <footer className="info-footer">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
        <button className="details-button" onClick={handleSeeDetailsClick}>
          See Details
        </button>
      </footer>
    </div>
  );
};

export default InformationPage2022;
