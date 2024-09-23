import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
    const navigate = useNavigate(); 

    const handleBack = () => {
      navigate(-1); 
    };
  return (
    <div className='main'>
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! If you have any questions, comments, or feedback about our placement analytics services, please don't hesitate to reach out.
      </p>

      <h2>Contact Form</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
  <div className="contact-item">
    <h2>Address</h2>
    <address>
      Placement Analytics<br />
      123 Main Street<br />
      Anytown, USA 12345
    </address>
  </div>
  <div className="contact-item">
    <h2>Email</h2>
    <p><a href="mailto:info@placementanalytics.com">info@placementanalytics.com</a></p>
  </div>
  <div className="contact-item">
    <h2>Phone</h2>
    <p>555-123-4567</p>
  </div>
</div>

      <h2>Social Media</h2>
      <p>Follow us on social media for the latest updates and insights:</p>
      <ul>
        <li><a href="https://twitter.com/PlacementAnalytics" target="_blank" rel="noopener noreferrer">Twitter: @PlacementAnalytics</a></li>
        <li><a href="https://www.linkedin.com/company/placement-analytics" target="_blank" rel="noopener noreferrer">LinkedIn: Placement Analytics</a></li>
        <li><a href="https://www.facebook.com/PlacementAnalytics" target="_blank" rel="noopener noreferrer">Facebook: Placement Analytics</a></li>
      </ul>

      <h2>FAQ</h2>
      <p>Check out our <a href="/faq">FAQ page</a> for answers to common questions about our placement analytics services.</p>
      <button className="back-button" onClick={handleBack}>Back</button>

    </div>
    
  );
};

export default ContactPage;