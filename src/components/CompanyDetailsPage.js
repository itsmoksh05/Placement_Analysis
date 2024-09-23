import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CompanyDetailsPage.css';

const CompanyDetailsPage = () => {
  const { companyName } = useParams();
  const navigate = useNavigate();


  const studentPlacements = {
    'Tatvsoft': [
      { year: 2020, students: [{ name: 'John Doe' }, { name: 'Jane Smith' }] },
      { year: 2021, students: [{ name: 'Michael Johnson' }, { name: 'Emily Davis' }, { name: 'David Wilson' }] },
      { year: 2022, students: [{ name: 'Sarah Lee' }] },
    ],
    'Shaligram': [
      { year: 2020, students: [{ name: 'Sophia Patel' }] },
      { year: 2021, students: [{ name: 'Ethan Gupta' }, { name: 'Olivia Chopra' }] },
      { year: 2022, students: [{ name: 'Aditya Malhotra' }, { name: 'Isha Sharma' }, { name: 'Rohan Kapoor' }, { name: 'Priya Mehta' }] },
    ],
    'Sarjen System': [
      { year: 2020, students: [{ name: 'Alice Brown' }, { name: 'Bob White' }] },
      { year: 2021, students: [{ name: 'Charlie Green' }, { name: 'Diana Prince' }] },
      { year: 2022, students: [{ name: 'Eve Adams' }, { name: 'Frank Castle' }] },
    ],
    'Esparkbiz': [
      { year: 2020, students: [{ name: 'George Martin' }, { name: 'Hannah Lee' }] },
      { year: 2021, students: [{ name: 'Ian Wright' }, { name: 'Judy Garland' }] },
      { year: 2022, students: [{ name: 'Kevin Spacey' }] },
    ],
    'Wappnet': [
      { year: 2020, students: [{ name: 'Liam Neeson' }, { name: 'Mia Farrow' }] },
      { year: 2021, students: [{ name: 'Noah Baumbach' }, { name: 'Olivia Wilde' }] },
      { year: 2022, students: [{ name: 'Peter Parker' }, { name: 'Quinn Fabray' }] },
    ],
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="company-details-page">
      <header className="details-header">  
  
        <h1>Details for {companyName}</h1>
      </header>
      <main className="details-content">
        <h2>Student Placements</h2>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Student Names</th>
            </tr>
          </thead>
          <tbody>
            {studentPlacements[companyName]?.map((placement, index) => (
              <tr key={index}>
                <td>{placement.year}</td>
                <td>
                  <ul>
                    {placement.students.map((student, studentIndex) => (
                      <li key={studentIndex}>{student.name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer className="details-footer">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      </footer>
    </div>
  );
};

export default CompanyDetailsPage;