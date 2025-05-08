import React from 'react';

const BSC = ({setActiveComponent}) => {
  return (
    <div className="bsc-main-wrapper">
      <nav className="bsc-nav">
        <h1 className="bsc-nav-heading">Bachelor of Science (BSC)</h1>
        <button onClick={() => setActiveComponent('signup')} className="bba-enroll-cta">Get Enroll →</button>
      </nav>

      <div className="bsc-info-block">
        <div className="bsc-visual-area">
          <img
            src="/bba.jpg"
            alt="Students in science lab"
            className="bsc-graphic"
          />
        </div>
        <div className="bsc-description">
          <h2>Bachelor of Science</h2>
          <p>
            Bachelor of Science is a versatile course for students who have completed Class 12th with a
            focus on science subjects like Physics, Chemistry, Biology, or Mathematics. If you are passionate
            about scientific discovery and research, a BSC course is an excellent choice to launch your career.
          </p>
        </div>
      </div>

      <div className="bsc-skills-area">
        <div className="bsc-skills-content">
          <div className="bsc-skill-column">
            <h3>Physics</h3>
            <p>
              Physics explores the fundamental principles governing the universe, from mechanics to quantum
              theory, enabling advancements in technology and research.
            </p>

            <h3>Chemistry</h3>
            <p>
              Chemistry studies the composition, structure, and properties of matter, driving innovations
              in materials, pharmaceuticals, and environmental solutions.
            </p>
          </div>

          <div className="bsc-skill-column">
            <h3>Biology</h3>
            <p>
              Biology examines living organisms and their interactions, contributing to breakthroughs in
              medicine, biotechnology, and environmental conservation.
            </p>

            <h3>Mathematics</h3>
            <p>
              Mathematics provides the foundation for scientific analysis, modeling complex systems in
              physics, engineering, and data science.
            </p>
          </div>
        </div>

        <div className="bsc-skills-visual">
          <img
            src="/bca.jpg"
            alt="Scientist Illustration"
          />
        </div>
      </div>

      <div className="bsc-program-details">
        <div className="bsc-program-content">
          <div className="bsc-program-image">
            <img src="/bca.jpg" alt="BSC Illustration" />
          </div>
          <div className="bsc-program-text">
            <h2 className="bsc-program-title">
              "Discover Your Potential with BSC: Pioneering the Future of Science"
            </h2>

            <div className="bsc-program-point">
              <h4>Engage with Cutting-Edge Research:</h4>
              <p>
                Our BSC program is designed in collaboration with leading scientists, ensuring you acquire
                skills and knowledge for groundbreaking research and innovation.
              </p>
            </div>

            <div className="bsc-program-point">
              <h4>Shape Scientific Progress:</h4>
              <p>
                BSC empowers you to contribute to scientific advancements. Participate in research projects,
                internships, and build a network for global opportunities.
              </p>
            </div>

            <div className="bsc-program-point">
              <h4>Launch a Rewarding Career:</h4>
              <p>
                Your BSC journey opens doors to diverse careers, from research scientist to science educator.
                Join a community driving innovation in science and technology.
              </p>
            </div>

            <div className="bsc-program-point">
              <h4>Where Curiosity Meets Discovery:</h4>
              <p>
                BSC transforms your passion for science into a fulfilling career. Let every experiment and
                discovery reflect your commitment to advancing human knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bsc-additional-info">
          <div className="bsc-additional-text">
            <div className="bsc-info-point">
              <h4>Advanced Laboratories</h4>
              <p>Our state-of-the-art labs provide hands-on experience with cutting-edge equipment, preparing you for real-world scientific challenges.</p>
            </div>

            <div className="bsc-info-point">
              <h4>Expert Faculty</h4>
              <p>Our BSC faculty includes renowned scientists and educators who mentor students with their extensive research and teaching expertise.</p>
            </div>
          </div>

          <div className="bsc-central-image">
            <img src="/bcom.jpg" alt="BSC Center Illustration" />
          </div>

          <div className="bsc-additional-text">
            <div className="bsc-info-point">
              <h4>Career Placement</h4>
              <p>We collaborate with research institutions and industries to ensure BSC graduates are ready for competitive roles in science and technology.</p>
            </div>

            <div className="bsc-info-point">
              <h4>Science Events</h4>
              <p>Participate in science fairs, research symposiums, and workshops to foster skills and connections in a vibrant scientific community.</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => setActiveComponent('course')} className="bsc-back-button">Back to Courses</button>
    </div>
  );
};

export default BSC;