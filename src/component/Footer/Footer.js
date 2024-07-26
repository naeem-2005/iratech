import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assests/image/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
        <div className="footer-column">
            <img src={logo} alt="Ira" className="footer-logo" />
          <address>
            <p>Address (India)</p>
            <p>215, 2nd floor</p>
            <p>iThum Tower B, Block A,</p>
             <p>Industrial Area, Sector 62</p>
            <p>Noida(UP)-201301</p>
             <p>Tel: 0120-4227711</p>
          </address>
        </div>
      <div className="footer-column">
        <h3>Services</h3>
         <ul>
           <li><Link to="/">Platform Engineering & Services</Link></li>
          <li><Link to="/">Consulting Services</Link></li>
           <li><Link to="/">Application Development & Maintenance</Link></li>
          <li><Link to="/">Testing and Test Automation</Link></li>
           <li><Link to="/">Data Science and Engineering</Link></li>
            <li><Link to="/">Cybersecurity</Link></li>
          <li><Link to="/t">SDET</Link></li>
           </ul>
          </div>
      <div className="footer-column">
         <h3>Company</h3>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Careers</Link></li>
             <li><Link to="/">Contact</Link></li>
          </ul>
       </div>
      <div className="footer-column">
       <h3>Domains</h3>
         <ul>
          <li><Link to="/">Finance</Link></li>
          <li><Link to="/">Data Science</Link></li>
          <li><Link to="/">Education</Link></li>
          <li><Link to="/">Cybersecurity</Link></li>
        </ul>
      </div>
    </div>
    </div>
     <div className="footer-bottom">
       <div className="container footer-bottom-container">
      <p>&copy; 2023 Ira Technologies. All rights reserved.</p>
        <ul className="social-icons">
        <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
          <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
          <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
         </ul>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
