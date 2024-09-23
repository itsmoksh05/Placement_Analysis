import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import './DetailsPage21.css'; 

const DetailsPage21 = () => {
  const { year } = useParams(); 
  const navigate = useNavigate(); 

  const companies2020 = [
    { company: 'Company A', packages: [{ student: 'Avani', package: '10 LPA' }, { student: 'Shivani', package: '8 LPA' }] },
    { company: 'Company B', packages: [{ student: 'Man', package: '7 LPA' }, { student: 'Varun', package: '9 LPA' }] },
    { company: 'Company C', packages: [{ student: 'Eve', package: '6 LPA' }, { student: 'Frank', package: '5 LPA' }] },
    { company: 'Company D', packages: [{ student: 'Grace', package: '11 LPA' }, { student: 'Heidi', package: '8.5 LPA' }] },
    { company: 'Company E', packages: [{ student: 'Ivan', package: '7.5 LPA' }, { student: 'Judy', package: '6.5 LPA' }] },
  ];

  const companies2021 = [
    { company: 'Company X', packages: [{ student: 'Alice', package: '12 LPA' }, { student: 'Varun', package: '10 LPA' }] },
    { company: 'Company Y', packages: [{ student: 'Charlie', package: '9 LPA' }, { student: 'Varun', package: '11 LPA' }] },
    { company: 'Company Z', packages: [{ student: 'Eve', package: '8 LPA' }, { student: 'Frank', package: '7 LPA' }] },
    { company: 'Company A', packages: [{ student: 'Grace', package: '13 LPA' }, { student: 'Heidi', package: '10.5 LPA' }] },
    { company: 'Company B', packages: [{ student: 'Ivan', package: '9.5 LPA' }, { student: 'Judy', package: '8.5 LPA' }] },
  ];

  const companies = year === '2020' ? companies2020 : companies2021; 

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="details-page">
      <header className="details-header">
        <h1>Company Details for {year}</h1>
      </header>
      <main className="details-content">
        {companies.map((company, index) => (
          <div key={index} className="company-details">
            <h2>{company.company}</h2>
            <h3>Packages Offered:</h3>
            <ul className="package-list">
              {company.packages.map((pkg, idx) => (
                <li key={idx} className="package-item">
                  <strong>{pkg.student}</strong> - {pkg.package}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      <footer className="details-footer">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      </footer>
    </div>
  );
};

export default DetailsPage21;
