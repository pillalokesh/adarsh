import React from 'react';

const BCom = ({setActiveComponent}) => {
  return (
    <div className="bcom-main-wrapper">
      <nav className="bcom-nav">
        <h1 className="bcom-nav-heading">Bachelor of Commerce (BCom)</h1>
        <button onClick={() => setActiveComponent('signup')} className="bba-enroll-cta">Get Enroll →</button>
      </nav>

      <div className="bcom-info-block">
        <div className="bcom-visual-area">
          <img
            src="/bca.jpg"
            alt="Students in finance meeting"
            className="bcom-graphic"
          />
        </div>
        <div className="bcom-description">
          <h2>Bachelor of Commerce</h2>
          <p>
            Bachelor of Commerce is a dynamic course for students who have completed Class 12th and are
            interested in pursuing careers in accounting, finance, banking, or business management. If you
            aspire to excel in the world of commerce, a BCom course is the ideal stepping stone for you.
          </p>
        </div>
      </div>

      <div className="bcom-skills-area">
        <div className="bcom-skills-content">
          <div className="bcom-skill-column">
            <h3>Accounting</h3>
            <p>
              Accounting involves recording, analyzing, and reporting financial transactions to ensure
              business compliance and informed decision-making.
            </p>

            <h3>Finance</h3>
            <p>
              Finance focuses on managing money, investments, and financial planning to drive business
              growth and economic stability.
            </p>
          </div>

          <div className="bcom-skill-column">
            <h3>Economics</h3>
            <p>
              Economics studies the allocation of resources, market trends, and economic policies,
              shaping business strategies and global markets.
            </p>

            <h3>Business Law</h3>
            <p>
              Business law covers legal frameworks governing commercial transactions, ensuring ethical
              and compliant business practices.
            </p>
          </div>
        </div>

        <div className="bcom-skills-visual">
          <img
            src="/bca.jpg"
            alt="Commerce Professional Illustration"
          />
        </div>
      </div>

      <div className="bcom-program-details">
        <div className="bcom-program-content">
          <div className="bcom-program-image">
            <img src="/bba.jpg" alt="BCom Illustration" />
          </div>
          <div className="bcom-program-text">
            <h2 className="bcom-program-title">
              "Build Your Future with BCom: Mastering the Art of Commerce"
            </h2>

            <div className="bcom-program-point">
              <h4>Learn from Financial Experts:</h4>
              <p>
                Our BCom program is designed with input from industry leaders in finance and accounting,
                ensuring you gain skills that employers value.
              </p>
            </div>

            <div className="bcom-program-point">
              <h4>Shape the World of Business:</h4>
              <p>
                BCom equips you to lead in commerce. Engage in internships, work on real-world financial
                projects, and build a network for global opportunities.
              </p>
            </div>

            <div className="bcom-program-point">
              <h4>Launch a Thriving Career:</h4>
              <p>
                Your BCom journey opens doors to careers in accounting, banking, financial analysis, and
                beyond. Join professionals shaping the financial landscape.
              </p>
            </div>

            <div className="bcom-program-point">
              <h4>Where Precision Meets Prosperity:</h4>
              <p>
                BCom transforms your passion for commerce into a rewarding career. Let every financial
                decision you make reflect your expertise and ambition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bcom-additional-info">
          <div className="bcom-additional-text">
            <div className="bcom-info-point">
              <h4>Practical Training</h4>
              <p>Our financial simulations and case studies prepare you for real-world challenges in accounting and finance.</p>
            </div>

            <div className="bcom-info-point">
              <h4>Expert Faculty</h4>
              <p>Our BCom faculty includes experienced accountants, economists, and business professionals who mentor students with industry insights.</p>
            </div>
          </div>

          <div className="bcom-central-image">
            <img src="/bcom.jpg" alt="BCom Center Illustration" />
          </div>

          <div className="bcom-additional-text">
            <div className="bcom-info-point">
              <h4>Placement Opportunities</h4>
              <p>We partner with top banks, financial firms, and corporations to ensure BCom graduates are job-ready for competitive roles.</p>
            </div>

            <div className="bcom-info-point">
              <h4>Commerce Events</h4>
              <p>Join finance workshops, economic seminars, and networking events to build skills and connections in a vibrant community.</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => setActiveComponent('course')} className="bcom-back-button">Back to Courses</button>
    </div>
  );
};

export default BCom;