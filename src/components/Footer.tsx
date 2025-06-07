
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="google-footer">
      <div className="footer-country">
        India
      </div>
      
      <div className="footer-links">
        <div className="footer-left">
          <a href="#" className="footer-link">Advertising</a>
          <a href="#" className="footer-link">Business</a>
          <a href="#" className="footer-link">How Search works</a>
        </div>
        
        <div className="footer-right">
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
