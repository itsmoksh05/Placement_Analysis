import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import InformationPage from './components/InformationPage';
import InformationPage2021 from './components/InformationPage2021';
import DetailsPage21 from './components/DetailsPage21';
import InformationPage2022 from './components/InformationPage22'; 
import CompanyYearPage from './components/CompanyYearPage';
import CompanyDetailsPage from './components/CompanyDetailsPage'; 
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/2020" element={<InformationPage />} />
        <Route path="/2021" element={<InformationPage2021 />} />
        <Route path="/details/:year" element={<DetailsPage21 />} />    
        <Route path="/2022" element={<InformationPage2022 />} /> 
        <Route path='/companies' element={<CompanyYearPage/>} />
        <Route path="/company-details/:companyName" element={<CompanyDetailsPage />} /> 
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
