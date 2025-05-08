import React from 'react';

const BCA = ({setActiveComponent}) => {
  return (
    <div className="bca-main-wrapper">
      <nav className="bca-nav">
        <h1 className="bca-nav-heading">Bachelor of Computer Applications (BCA)</h1>
        <button onClick={() => setActiveComponent('signup')} className="bca-enroll-cta">Get Enroll →</button>
      </nav>

      <div className="bca-info-block">
        <div className="bca-visual-area">
          <img
            src="/bca.jpg"
            alt="Students working on computer"
            className="bca-graphic"
          />
        </div>
        <div className="bca-description">
          <h2>Bachelor of Computer Applications</h2>
          <p>
            Bachelor of Computer Application is a popular course amongst students who have completed
            Class 12th and have studied Computer Science or Information Technology as a main subject
            or elective in Senior Secondary Education. If you are interested in pursuing a career
            in IT, then a BCA course is a great option for you.
          </p>
        </div>
      </div>

      <div className="bca-skills-area">
        <div className="bca-skills-content">
          <div className="bca-skill-column">
            <h3>HTML</h3>
            <p>
              The HyperText Markup Language or HTML is the standard markup language for documents
              designed to be displayed in a web browser. It defines the content and structure of web
              content.
            </p>

            <h3>C++</h3>
            <p>
              The C++ programming language (originally named "C with Classes") was devised by Bjarne
              Stroustrup as an approach to providing object-oriented functionality with a C-like
              syntax.
            </p>
          </div>

          <div className="bca-skill-column">
            <h3>CSS</h3>
            <p>
              Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation
              of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).
            </p>

            <h3>Backend</h3>
            <p>
              It includes the main features and functionalities of the application on the server.
              Programming languages for the backend are mainly Node.js (for JavaScript), Django (for
              Python), Spring (Java), etc.
            </p>
          </div>
        </div>

        <div className="bca-skills-visual">
          <img
            src="/bba.jpg"
            alt="Developer Illustration"
          />
        </div>
      </div>

      <div className="bca-program-details">
        <div className="bca-program-content">
          <div className="bca-program-image">
            <img src="/bca.jpg" alt="BCA Illustration" />
          </div>
          <div className="bca-program-text">
            <h2 className="bca-program-title">
              "Unlock Your Future with BCA: Igniting the Spark of Technological Excellence"
            </h2>

            <div className="bca-program-point">
              <h4>Connect with Industry Leaders:</h4>
              <p>
                Our program is designed in collaboration with industry leaders, ensuring
                that you graduate with the skills and knowledge that employers are seeking.
              </p>
            </div>

            <div className="bca-program-point">
              <h4>Shape the Future, One Line of Code at a Time:</h4>
              <p>
                BCA empowers you to be a catalyst for change. Engage in internships,
                collaborate on real-world projects, and build a network that opens doors
                to exciting career opportunities.
              </p>
            </div>

            <div className="bca-program-point">
              <h4>Empower Your Career Journey:</h4>
              <p>
                Your journey doesn't end with graduation; it begins. BCA opens doors to
                a plethora of career opportunities — from coding maestro to tech visionary.
                Join a league of professionals making waves in the industry.
              </p>
            </div>

            <div className="bca-program-point">
              <h4>Where Passion Meets Profession:</h4>
              <p>
                More than an academic pursuit, BCA is where your passion meets your profession.
                Turn your love for technology into a thriving career, and let every project be
                a testament to your dedication and skill.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bca-additional-info">
          <div className="bca-additional-text">
            <div className="bca-info-point">
              <h4>Best Labs</h4>
              <p>Our lab activities are crafted to hone skills demanded by the industry by engaging with real-world scenarios and troubleshooting challenges.</p>
            </div>

            <div className="bca-info-point">
              <h4>Faculty Support</h4>
              <p>Our BCA faculty is a symphony of expertise, with each teacher contributing their unique notes of knowledge and experience.</p>
            </div>
          </div>

          <div className="bca-central-image">
            <img src="/bcom.jpg" alt="BCA Center Illustration" />
          </div>

          <div className="bca-additional-text">
            <div className="bca-info-point">
              <h4>Placement</h4>
              <p>Our college actively collaborates with renowned tech companies. BCA graduates are job-ready from the moment they step into the market.</p>
            </div>

            <div className="bca-info-point">
              <h4>Activities</h4>
              <p>Experience diversity through multicultural events and international days. We take pride in our inclusive environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCA;