import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* College Info Section */}
        <div className="college-info">
          <h2 className="college-name">Adarsh Degree College</h2>
          <p className="college-affiliation">
            (Affiliated to Andhra University & Approved by AICTE, New Delhi)
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f social-icon"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter social-icon"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube social-icon"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram social-icon"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in social-icon"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="quick-links">
          <h3 className="section-title">Quick Links</h3>
          <ul className="links-list">
            <li><a href="#" className="link-item">Home</a></li>
            <li><a href="#" className="link-item">About Us</a></li>
            <li><a href="#" className="link-item">Academics</a></li>
            <li><a href="#" className="link-item">Admission</a></li>
            <li><a href="#" className="link-item">Placement</a></li>
            <li><a href="#" className="link-item">Contact Us</a></li>
          </ul>
        </div>

        {/* Academics Section */}
        <div className="academics">
          <h3 className="section-title">Academics</h3>
          <ul className="academics-list">
            <li><a href="#" className="link-item">B.SC. Honours</a></li>
            <li><a href="#" className="link-item">BBA Honours</a></li>
            <li><a href="#" className="link-item">B.COM Honours</a></li>
            <li><a href="#" className="link-item">BCA Honours</a></li>
            <li><a href="#" className="link-item">B.COM BFSI Honours</a></li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="contact-details">
          <h3 className="section-title">Details</h3>
          <p className="contact-item">
            <span className="contact-icon">📍</span> Beside SBI, Pendurthi, Visakhapatnam.
          </p>
          <p className="contact-item">
            <span className="contact-icon">📧</span> <a href="mailto:info@adarshdc.com" className="link-item">info@adarshdc.com</a>
          </p>
          <p className="contact-item">
            <span className="contact-icon">📞</span> <a href="tel:+919030199997" className="link-item">+91 90301 99997</a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>© 2025, LOMAA IT SOLUTIONS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
