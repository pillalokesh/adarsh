import React from 'react';

const BBA = ({setActiveComponent}) => {
  return (
    <div className="bba-main-wrapper">
      <nav className="bba-nav">
        <h1 className="bba-nav-heading">Bachelor of Business Administration (BBA)</h1>
        <button onClick={() => setActiveComponent('signup')} className="bba-enroll-cta">Get Enroll →</button>
        </nav>

      <div className="bba-info-block">
        <div className="bba-visual-area">
          <img
            src="/bca.jpg "
            alt="Students in business meeting"
            className="bba-graphic"
          />
        </div>
        <div className="bba-description">
          <h2>Bachelor of Business Administration</h2>
          <p>
            Bachelor of Business Administration is an ideal course for students who have completed
            Class 12th and aspire to build a career in management, entrepreneurship, or business leadership.
            If you are passionate about driving organizational success, then a BBA course is the perfect choice for you.
          </p>
        </div>
      </div>

      <div className="bba-skills-area">
        <div className="bba-skills-content">
          <div className="bba-skill-column">
            <h3>Business Strategy</h3>
            <p>
              Business strategy involves formulating plans to achieve long-term organizational goals,
              focusing on competitive positioning and market analysis.
            </p>

            <h3>Financial Management</h3>
            <p>
              Financial management encompasses planning, organizing, and controlling financial resources
              to maximize organizational profitability and sustainability.
            </p>
          </div>

          <div className="bba-skill-column">
            <h3>Marketing</h3>
            <p>
              Marketing involves creating strategies to promote products or services, engaging customers,
              and building brand loyalty through effective communication.
            </p>

            <h3>Human Resources</h3>
            <p>
              Human resource management focuses on recruiting, training, and managing employees to enhance
              organizational performance and workplace culture.
            </p>
          </div>
        </div>

        <div className="bba-skills-visual">
          <img
            src="/bca.jpg"
            alt="Business Professional Illustration"
          />
        </div>
      </div>

      <div className="bba-program-details">
        <div className="bba-program-content">
          <div className="bba-program-image">
            <img src="/bca.jpg" alt="BBA Illustration" />
          </div>
          <div className="bba-program-text">
            <h2 className="bba-program-title">
              "Launch Your Career with BBA: Shaping the Future of Business Leadership"
            </h2>

            <div className="bba-program-point">
              <h4>Learn from Industry Experts:</h4>
              <p>
                Our BBA program is crafted with insights from top business leaders, ensuring you gain
                skills and knowledge that are in high demand in the corporate world.
              </p>
            </div>

            <div className="bba-program-point">
              <h4>Drive Innovation in Business:</h4>
              <p>
                BBA equips you to lead change. Participate in internships, work on real-world business
                projects, and build a network that opens doors to global opportunities.
              </p>
            </div>

            <div className="bba-program-point">
              <h4>Build a Dynamic Career:</h4>
              <p>
                Your BBA journey is just the beginning. From management roles to entrepreneurial ventures,
                BBA prepares you to excel in diverse business environments.
              </p>
            </div>

            <div className="bba-program-point">
              <h4>Where Ambition Meets Achievement:</h4>
              <p>
                BBA transforms your passion for business into a thriving career. Let every strategy you
                craft and every decision you make reflect your leadership potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bba-additional-info">
          <div className="bba-additional-text">
            <div className="bba-info-point">
              <h4>State-of-the-Art Facilities</h4>
              <p>Our business simulation labs and case study workshops are designed to develop practical skills for real-world business challenges.</p>
            </div>

            <div className="bba-info-point">
              <h4>Expert Faculty</h4>
              <p>Our BBA faculty comprises seasoned professionals and academics who bring a wealth of industry experience to the classroom.</p>
            </div>
          </div>

          <div className="bba-central-image">
            <img src="/bba.jpg" alt="BBA Center Illustration" />
          </div>

          <div className="bba-additional-text">
            <div className="bba-info-point">
              <h4>Placement Opportunities</h4>
              <p>We partner with leading corporations to ensure our BBA graduates are ready to step into competitive roles in the business world.</p>
            </div>

            <div className="bba-info-point">
              <h4>Extracurricular Activities</h4>
              <p>Join business clubs, leadership summits, and networking events to foster skills and connections in a vibrant community.</p>
            </div>
          </div>
        </div>
      </div>
      
      <button onClick={() => setActiveComponent('course')} className="bba-back-button">Back to Courses</button>
    </div>
  );
};

export default BBA;