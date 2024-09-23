import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './InformationPage.css'; 

const InformationPage = () => {
  const navigate = useNavigate(); 

  const placements2020 = [
    { company: 'Company A', position: 'Software Engineer' },
    { company: 'Company B', position: 'Data Analyst' },
    { company: 'Company C', position: 'Product Manager' },
    { company: 'Company D', position: 'Web Developer' },
    { company: 'Company E', position: 'Intern' },
  ];

  const handleBackClick = () => {
    navigate('/'); 
  };
  const handleSeeDetailsClick = () => {
    
    navigate('/details/2020');
  };

  return (
    <div className="information-page">
    
      <header className="info-header">
        
        <h1>Placements in 2020</h1>
      </header>
      <main className="info-content">
        <h2>Overview</h2>
        <p>
          In 2020, despite the global challenges, many students successfully secured placements in various companies across different sectors. 
          The demand for tech-related roles remained strong, with numerous companies adapting to the new normal.
        </p>
        <h2>Companies that Hired</h2>
        <ul className="company-list">
          {placements2020.map((placement, index) => (
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

export default InformationPage;
