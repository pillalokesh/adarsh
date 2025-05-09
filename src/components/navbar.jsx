import React, { useState } from 'react';

const Navbar = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (component) => {
    setActiveComponent(component); // Navigate to the selected component
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <header>
      {/* Top Strip with Logo, Contact, Email, and Hamburger Menu */}
      <div className="header-top">
        <div className="header-top-container">
          <div className="header-logo">
            <img src="/logo1.webp" alt="Adarsh Degree College" className="header-logo-img" />
          </div>
          <div className="header-contact">
            <span className="header-contact-item">
              <svg className="header-contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 123-456-7890
            </span>
            <span className="header-contact-item">
              <svg className="header-contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              info@adarshcollege.edu
            </span>
          </div>
          {/* Hamburger Menu in Top Header */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Navigation Links */}
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <button onClick={() => handleNavClick('home')}>Home</button>
            <div className="nav-link dropdown">
              <button onClick={() => handleNavClick('about')}>
                About <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-content">
              <a href="#" onClick={() =>  handleNavClick('aboutus')}>About Us</a>
                <a href="#" onClick={() =>  handleNavClick('placement')}>Placements</a>
                <a href="#" onClick={() =>  handleNavClick('gallary')}>Gallary</a>
              </div>
            </div>
            <button onClick={() => handleNavClick('course')}>Courses</button>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
            <button onClick={() => handleNavClick('certification')}>Certification</button>
            <button onClick={() => handleNavClick('aucode')}>AU Code</button>
            <div className="nav-link dropdown">
              More <span className="dropdown-arrow">▼</span>
              <div className="dropdown-content">
                <a href="#" onClick={() => setIsOpen(false)}>Gallary</a>
                <a href="#" onClick={() => setIsOpen(false)}>more</a>
                <a href="#" onClick={() => setIsOpen(false)}>more</a>
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="navbar-auth">
            <button onClick={() => handleNavClick('signin')} className="auth-btn">Sign In</button>
            <span className="auth-divider">|</span>
            <button onClick={() => handleNavClick('signup')} className="auth-btn">Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;