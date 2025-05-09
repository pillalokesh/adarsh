import React from 'react';
 
const Home = ({setActiveComponent}) => {
  
           
   
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Graduation Cap Icon */}
        <div className="hero-icon">
          <img src="/cap.jpg" alt="" />
         </div>

        {/* Welcome Text */}
        <h1 className="hero-title">
          Welcome to <span className="highlight">ADARSH DEGREE COLLEGE!</span>
        </h1>

        {/* Description */}
        <p className="hero-description">
          ADARSH DEGREE COLLEGE fosters a vibrant and dynamic learning environment where
          students pursuing BCA, BCom, and BBA degrees.
        </p>

        {/* Search Bar */}
        <div className="hero-search">
        <button onClick={() => setActiveComponent('signup')} className="search-button">Admission Enroll ➡️</button>

         </div><br /><br /><br />

        <img src="/clg.jpg" alt="" />
        <br /><br />

 
     <section className="programs">
      <div className="programs-content">
        {/* Heading */}
        <h2 className="programs-title">
          Invest in Your Future: Explore Our Undergraduate Programs
        </h2>

        {/* Description */}
        <p className="programs-description">
          Embark on your academic journey at ADARSH DEGREE COLLEGE and explore the diverse range of undergraduate programs! We offer the Bachelor of Commerce (BCOM) for a comprehensive understanding of business, the Bachelor of Computer Applications (BCA) for mastering the world of technology, and the Bachelor of Business Administration (BBA) to hone your leadership and management skills. Choose your path and become a well-equipped professional in today’s dynamic world.
        </p>

        {/* Program Cards */}
        <div className="programs-cards">
          <div className="card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="14" rx="2" ry="2"></rect>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <line x1="9" y1="4" x2="9" y2="18"></line>
            </svg>
            <h3 className="card-count">4</h3>
            <p className="card-label">BCOM</p>
          </div>

          <div className="card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="14" rx="2" ry="2"></rect>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <h3 className="card-count">4</h3>
            <p className="card-label">BBA</p>
          </div>

          <div className="card">
            <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="14" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <h3 className="card-count">4</h3>
            <p className="card-label">BCA</p>
          </div>

          <div className="card">
            <svg className="card-icon" xmlns="/clg.jpg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
            </svg>
            <h3 className="card-count">12</h3>
            <p className="card-label">TOTAL</p>
          </div>
        </div>
      </div>
    </section>

    <section className="student-showcase">
      <div className="showcase-content">
        {/* Text Content */}
        <div className="showcase-text">
          <h2 className="showcase-title">Dynamic Student Showcase</h2>
          <p className="showcase-description">
            Implement a visually appealing and dynamic student showcase prominently on the home page of ADARSH DEGREE COLLEGE. This feature should highlight the diverse talents and achievements of students through a rotating carousel or grid display. Include high-quality images, brief bios, and links to individual student profiles, allowing visitors to learn more about each student’s academic journey, extracurricular activities, and notable accomplishments. This dynamic showcase can be updated regularly to reflect the evolving achievements of the student body, fostering a sense of pride and community engagement.
          </p>
        </div>

        {/* Illustration Placeholder */}
        <div className="showcase-image">
          <img
            src="/bcom.jpg"
            alt="Student Showcase Illustration"
            className="illustration"
          />
        </div>
      </div>
    </section>

    <section className="student-showcase">
      <div className="showcase-content">

        {/* Illustration Placeholder */}
        <div className="showcase-image">
          <img
            src="/bca.jpg"
            alt="Student Showcase Illustration"
            className="illustration"
          />
        </div>
                {/* Text Content */}
                <div className="showcase-text">
          <h2 className="showcase-title">Dynamic Student Showcase</h2>
          <p className="showcase-description">
            Implement a visually appealing and dynamic student showcase prominently on the home page of ADARSH DEGREE COLLEGE. This feature should highlight the diverse talents and achievements of students through a rotating carousel or grid display. Include high-quality images, brief bios, and links to individual student profiles, allowing visitors to learn more about each student’s academic journey, extracurricular activities, and notable accomplishments. This dynamic showcase can be updated regularly to reflect the evolving achievements of the student body, fostering a sense of pride and community engagement.
          </p>
        </div>

      </div>
    </section>


    <section className="student-showcase">
      <div className="showcase-content">
        {/* Text Content */}
        <div className="showcase-text">
          <h2 className="showcase-title">Dynamic Student Showcase</h2>
          <p className="showcase-description">
            Implement a visually appealing and dynamic student showcase prominently on the home page of ADARSH DEGREE COLLEGE. This feature should highlight the diverse talents and achievements of students through a rotating carousel or grid display. Include high-quality images, brief bios, and links to individual student profiles, allowing visitors to learn more about each student’s academic journey, extracurricular activities, and notable accomplishments. This dynamic showcase can be updated regularly to reflect the evolving achievements of the student body, fostering a sense of pride and community engagement.
          </p>
        </div>

        {/* Illustration Placeholder */}
        <div className="showcase-image">
          <img
            src="/bba.jpg"
            alt="Student Showcase Illustration"
            className="illustration"
          />
        </div>
      </div>
    </section>

    

 
       </div>
    </section>
  );
};

export default Home;