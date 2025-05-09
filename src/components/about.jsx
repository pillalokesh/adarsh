import React from 'react';
 
const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h3 className="about-subtitle">TEAM</h3>
        <h1 className="about-title">
          Welcome to ADARSH DEGREE COLLEGE, a revolutionary platform dedicated to reshaping the landscape of education. <span className="highlight">inspiring learners to excel and shaping the leaders of tomorrow.</span>
        </h1>
        <img src="/clg.jpg" alt="" />


     <div className="about-page">
      {/* Welcome Section */}
 
      {/* Mission and Story Section */}
      <section className="mission-story">
        <div className="mission-story-content">
          {/* Our Mission */}
          <div className="mission">
            <h2 className="section-title mission-title">Our mission</h2>
            <p className="section-description">
              At ADARSH DEGREE COLLEGE, our mission is to empower and inspire a diverse community of learners by providing a cutting-edge platform that fosters collaborative and immersive educational experiences. Rooted in our commitment to accessibility, innovation, and inclusion, we strive to reshape the landscape of education, making high-quality learning opportunities accessible.
            </p>
            <p className="section-description">
              Through state-of-the-art technology and a dedication to lifelong learning, ADARSH DEGREE COLLEGE aims to be a catalyst for personal and societal growth, creating a world where education knows no boundaries.
            </p>
          </div>

          {/* Our Story */}
          <div className="story">
            <h2 className="section-title story-title">Our story</h2>
            <img
              src="/bba.jpg"
              alt="Our Story Image"
              className="story-image"
            />
            <p className="section-description">
              ADARSH DEGREE COLLEGE was born out of a shared vision among a group of passionate educators and technologists who believed in the transformative power of education. Driven by a commitment to break down barriers to learning, our founders set out to create a platform that would redefine the educational experience.
            </p>
            <p className="section-description">
              In the early days, we faced challenges that tested our resilience, but each obstacle became an opportunity for innovation. The ADARSH DEGREE COLLEGE story is an ongoing narrative of innovation, impact, and a relentless pursuit of a world where knowledge has no limits.
            </p>
          </div>
        </div>
      </section>
    </div>


 
 
      {/* Crafting the Future Section */}
      <section className="future-crafting-block">
        <div className="future-crafting-wrapper">
          <img
            src="/bcom.jpg"
            alt="Crafting the Future Image"
            className="future-img"
          />
          <div className="future-text-content">
            <h2 className="future-heading">Crafting the Future</h2>
            <p className="future-text">
              Welcome to ADARSH DEGREE COLLEGE, where innovation meets creativity, and passion fuels seamless user experiences. At ADARSH DEGREE COLLEGE, we’ve meticulously crafted Pagedone to empower creators, designers, and developers alike. Our mission? To provide you with a comprehensive toolkit that enables you to build intuitive, beautiful interfaces that resonate with users on every interaction. Join us in our journey to redefine the art of digital creation
            </p>
          </div>
        </div>
      </section>
  
       </div>
    </section>
  );
};

export default About;