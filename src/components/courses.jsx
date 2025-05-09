import React, { useState, useEffect } from 'react';



const Courses = ({setActiveComponent}) => {

   
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const totalCards = 6;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= totalCards - cardsToShow + 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, []);
  

  return (
    <section className="courses">
      <div className="courses-content" style={{ overflow: 'hidden' }}>
        <div 
          className="courses-slider"
          style={{
            display: 'flex',
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            transition: 'transform 0.5s ease',
            width: `${(totalCards / cardsToShow) * 100}%`
          }}
        >
          {/* BCA */}
          <div className="course-card" style={{ width: `${100 / cardsToShow}%`, flexShrink: 0 }}>
            <div className="course-header">
              <span className="course-title">BCA</span>
              <img src="/bca.jpg" alt="BCA Image" className="course-image" />
            </div>
            <div className="course-body">
              <h3 className="course-full-title">Bachelor's of Computer Application</h3>
              <ul className="course-details">
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="8"></line>
                  </svg>
                  3 Years
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="14" rx="2" ry="2"></rect>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  6 Semesters
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  Web/App Development
                </li>
              </ul>
              <button onClick={() => setActiveComponent('bca')} className="view-more-button">View More</button>
            </div>
          </div>&nbsp;&nbsp;

          {/* BCOM */}
          <div className="course-card" style={{ width: `${100 / cardsToShow}%`, flexShrink: 0 }}>
            <div className="course-header">
              <span className="course-title">BCOM</span>
              <img src="/bcom.jpg" alt="BCOM Image" className="course-image" />
            </div>
            <div className="course-body">
              <h3 className="course-full-title">Bachelor's of Commerce</h3>
              <ul className="course-details">
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="8"></line>
                  </svg>
                  3 Years
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="14" rx="2" ry="2"></rect>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  6 Semesters
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  Accounting/Banking
                </li>
              </ul>
              <button onClick={() => setActiveComponent('bcom')} className="view-more-button">View More</button>
            </div>
          </div>&nbsp;&nbsp;

          {/* BBA */}
          <div className="course-card" style={{ width: `${100 / cardsToShow}%`, flexShrink: 0 }}>
            <div className="course-header">
              <span className="course-title">BBA</span>
              <img src="/bba.jpg" alt="BBA Image" className="course-image" />
            </div>
            <div className="course-body">
              <h3 className="course-full-title">Bachelor's of Business Administration</h3>
              <ul className="course-details">
                <li>
                <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="8"></line>
                  </svg>
                  3 Years
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="14" rx="2" ry="2"></rect>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  6 Semesters
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  Business Management
                </li>
              </ul>
              <button onClick={() => setActiveComponent('bba')} className="view-more-button">View More</button>
            </div>
          </div>&nbsp;&nbsp;

          {/* BSC */}
          <div className="course-card" style={{ width: `${100 / cardsToShow}%`, flexShrink: 0 }}>
            <div className="course-header">
              <span className="course-title">BSC</span>
              <img src="/bca.jpg" alt="BCA Image" className="course-image" />
            </div>
            <div className="course-body">
              <h3 className="course-full-title">Bachelor's of Computer Application</h3>
              <ul className="course-details">
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="8"></line>
                  </svg>
                  3 Years
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="14" rx="2" ry="2"></rect>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  6 Semesters
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  Web/App Development
                </li>
              </ul>
              <button onClick={() => setActiveComponent('bsc')} className="view-more-button">View More</button>

             </div>
          </div>&nbsp;&nbsp;

          {/* BCOM */}
          <div className="course-card" style={{ width: `${100 / cardsToShow}%`, flexShrink: 0 }}>
            <div className="course-header">
              <span className="course-title">BCOM</span>
              <img src="/clg.jpg" alt="BCOM Image" className="course-image" />
            </div>
            <div className="course-body">
              <h3 className="course-full-title">Bachelor's of Commerce</h3>
              <ul className="course-details">
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="8"></line>
                  </svg>
                  3 Years
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="14" rx="2" ry="2"></rect>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  6 Semesters
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  Accounting/Banking
                </li>
              </ul>
              <button onClick={() => setActiveComponent('View More')} className="view-more-button">View More</button>
            </div>
          </div>&nbsp;&nbsp;

          {/* BBA */}
          <div className="course-card" style={{ width: `${100 / cardsToShow}%`, flexShrink: 0 }}>
            <div className="course-header">
              <span className="course-title">BBA</span>
              <img src="/clg.jpg" alt="BBA Image" className="course-image" />
            </div>
            <div className="course-body">
              <h3 className="course-full-title">Bachelor's of Business Administration</h3>
              <ul className="course-details">
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="8"></line>
                  </svg>
                  3 Years
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="14" rx="2" ry="2"></rect>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  6 Semesters
                </li>
                <li>
                  <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  Business Management
                </li>
              </ul>
              <button onClick={() => setActiveComponent('View More')} className="view-more-button">View More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="dots-container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '1rem' 
      }}>
        {Array.from({ length: totalCards - cardsToShow + 1 }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: index === currentIndex ? '#333' : '#ccc',
              margin: '0 5px',
              cursor: 'pointer'
            }}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Courses;