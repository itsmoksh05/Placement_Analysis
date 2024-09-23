import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CompanyYearPage.css'; 

const companies = [
  { name: 'Tatvsoft', year: 2020 },
  { name: 'Shaligram', year: 2021 },
  { name: 'Sarjen System', year: 2022 },
  { name: 'Esparkbiz', year: 2023 },
  { name: 'Wappnet', year: 2024 },
];

const years = [2020, 2021, 2022, 2023, 2024];

const CompanyYearPage = () => {
  const [activeTab, setActiveTab] = useState('companies'); 
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); 
  };

  const handleCompanyClick = (companyName) => {
    navigate(`/company-details/${companyName}`); 
  };

  const handleYearClick = (year) => {
    navigate(`/details/${year}`); 
  };

  return (
    <div className="company-year-page">
      <h1>Explore Companies and Years</h1>
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'companies' ? 'active' : ''}`} 
          onClick={() => setActiveTab('companies')}
        >
          Company-wise
        </button>
        <button 
          className={`tab-button ${activeTab === 'years' ? 'active' : ''}`} 
          onClick={() => setActiveTab('years')}
        >
          Year-wise
        </button>
      </div>

      {activeTab === 'companies' && (
        <div className="company-list">
          <h2>Companies</h2>
          <ul>
            {companies.map((company, index) => (
              <li key={index} onClick={() => handleCompanyClick(company.name)} style={{ cursor: 'pointer' }}>
                {company.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'years' && (
        <div className="year-list">
          <h2>Years</h2>
          <ul>
            {years.map((year, index) => (
              <li key={index} onClick={() => handleYearClick(year)} style={{ cursor: 'pointer' }}>
                {year}
              </li>
            ))}
          </ul>
        </div>
      )}

      <footer className="page-footer">
        <button className="back-button" onClick={handleBackClick}>
          Back to Home
        </button>
      </footer>
    </div>
  );
};

export default CompanyYearPage;