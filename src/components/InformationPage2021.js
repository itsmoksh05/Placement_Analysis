import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './InformationPage2021.css'; 

const InformationPage2021 = () => {
  const navigate = useNavigate(); 

  const placements2021 = [
    { company: 'Company X', position: 'Software Developer' },
    { company: 'Company Y', position: 'Data Scientist' },
    { company: 'Company Z', position: 'Product Manager' },
    { company: 'Company A', position: 'UI/UX Designer' },
    { company: 'Company B', position: 'DevOps Engineer' },
  ];

  const handleBackClick = () => {
    navigate('/'); 
  };

  const handleSeeDetailsClick = () => {
    navigate('/details/2021'); 
  };

  return (
    <div className="information-page">
      <header className="info-header">
        <h1>Placements in 2021</h1>
      </header>
      <main className="info-content">
        <h2>Overview</h2>
        <p>
          In 2021, despite the ongoing challenges, many students successfully secured placements in various companies across different sectors. 
          The demand for skilled professionals remained strong, with numerous companies adapting to the changing market conditions.
        </p>
        <h2>Companies that Hired</h2>
        <ul className="company-list">
          {placements2021.map((placement, index) => (
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

export default InformationPage2021;
