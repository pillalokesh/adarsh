import React, { useEffect, useState, useRef } from 'react';
const AboutUs = () => {
  const [classes, setClasses] = useState(0);
  const [activities, setActivities] = useState(0);
  const [review, setReview] = useState(0);
  const [laureates, setLaureates] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const animateCount = (setter, target, duration, suffix = '') => {
    let start = 0;
    const increment = target / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target + suffix);
        clearInterval(timer);
      } else {
        setter(Math.floor(start) + suffix);
      }
    }, 50);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount(setClasses, 20, 2000);
          animateCount(setActivities, 12, 2000);
          animateCount(setReview, 87, 2000, '%');
          animateCount(setLaureates, 45, 2000, '%');
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="about-us">
            <h4 className='boldd'>About/ <b>AboutUs</b></h4>

      <h1 className="about-us-heading">About Us</h1>
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>Welcome to Education</h2>
          <p>
            ADARSH DEGREE COLLEGE was established in 2005 & affiliated to ANDHRA UNIVERSITY in the same year & approved by AICTE, NEW DELHI in 2024. Intending to facilitate a large number of aspiring students for both urban and rural regions, the College owns TWO CAMPUSES and the College has achieved historic SUCCESS IN EDUCATION.
          </p>
          <p>
            ADARSH DEGREE COLLEGE is located at non-polluted area: Beside SBI, BRTS MAIN ROAD, PENDURTHI, VISAKHAPATNAM. Both the campuses are located in serene environment with spacious classrooms, comfortable furniture, hygienic and comprehensive SANITIZATION.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="/principal.webp"
            alt="Person working at desk"
          />
        </div>
      </div>

      <section className="college-infoo">
        <div className="college-infoo-content">
          <p>
            ADARSH DEGREE COLLEGE is well-equipped with comprehensive LABORATORY infrastructure including AC Computer Lab, Chemistry Lab, Digital AC Seminar hall, Skill Development Centre for conducting advanced Scientific Experiments as per the UNIVERSITY GUIDELINES. Focuses on students’ safety, security and vigilant all the time the Classes and Laboratories equipped with 40 CC TV CAMERAS and controlled by the Principal. ADARSH DEGREE COLLEGE have very good means of transport and very easy accessible to Bus, Train and Auto transport facility for all the Students and Staff to reach College in time.
          </p>
          <p className="facilities-heading">
            <strong>OTHER FACILITIES FOR OUR STUDENTS:</strong>
          </p>
          <ol>
            <li> 1.Campus Recruitment Training</li>
            <li>2.Training in soft skills and personality development.</li>
            <li>3.Career counseling and recruitment drives</li>
            <li>4.Organizing holistic service activities</li>
            <li>5.Hosting, organizing and participating in inter-collegiate competitions</li>
          </ol>
          <p>
            ADARSH DEGREE COLLEGE organizes TRAINING & PLACEMENT DRIVES for enabling and empowering Integrated Skills & Employability Skills in association with APSSDC. Large number of students have been benefited from these provisions by getting suitable employment in the organizations of Private and Public Sector, achieved result in 189 Campus Selections from topmost and prestigious multi-national companies like Capgemini, Wipro, TCS, Infosys, ICICI Bank, Cognizant, Hetero, Deccan Fine Chemicals, Srikhar Labs etc. Our College is sprinkled with 189 CAMPUS SELECTIONS last year.
          </p>
          <p>
            ADARSH DEGREE COLLEGE is a citadel of quality education, traditional culture and scientific temperament that gives every individual a glowing personality, shining potential and a hope of empowering JOB while stepping out of College.
          </p>
          <p>
            ADARSH DEGREE COLLEGE offers English Medium instruction and the Students coming from Telugu Medium are trained in SPOKEN ENGLISH who can gradually work, communicate and follow English Medium topics within stipulated time.
          </p>
        </div>
      </section>
      <video src="/video.mp4" controls style={{ width: "100%", height: "20%" }}></video>

      <section className="why-choose-section" ref={sectionRef}>
        <h2 className="why-choose-heading">The Number Say It All</h2>
        <h1 className="why-choose-title">Why Choose Us</h1>
        <div className="why-choose-container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">{classes}</h3>
              <p className="stat-label">Classes</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{activities}</h3>
              <p className="stat-label">Activities</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{review}</h3>
              <p className="stat-label">Review</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{laureates}</h3>
              <p className="stat-label">Prize Laureates</p>
            </div>
          </div>
          <div className="vision-mission">
            <h3 className="vision-mission-heading">Vision & Mission</h3>
            <div className='mis'>
              <p className="vision-mission-text">
                <span className="vision-text">  To bring the smile on the faces of thousands of students and giving hope to the society by providing wholistic education.</span><br />
                <span className="mission-text">  Best higher education, value based education, placements every year & further higher education.</span>
              </p>
              <img src="/vission.webp" alt="" />
            </div>
          </div>
          <div className="correspondent-message">
            <h3 className="correspondent-heading">Correspondent's Message</h3>
            <p className="correspondent-text">
              Adarsh Degree College was established to set a bench mark in Undergraduate education in the city of destiny, Visakhapatnam. Adarsh is committed to impart quality value based education. We aspire to help our students to become true professionals who adhere themselves to ethical standards besides acquiring appropriate knowledge and skills. It is our destined aim to see them as learners with passion and dedication for the nation building.
            </p>
          </div>
        </div>
      </section>

<section className="teacher-browse-section">
      <h2 className="teacher-browse-heading">There Are Many Ways To Learn</h2>
      <h1 className="teacher-browse-title">Browse By Teacher</h1>
      <div className="teacher-browse-container">
        <div className="teacher-grid">
          <div className="teacher-card">
            <img
              src="/t theophilus.webp"
              alt="T Theophilus"
              className="teacher-image"
            />
            <h3 className="teacher-name">T Theophilus</h3>
            <p className="teacher-designation">Principal</p>
          </div>
          <div className="teacher-card">
            <img
              src="/NE flora.webp"
              alt="N E Flora"
              className="teacher-image"
            />
            <h3 className="teacher-name">N E Flora</h3>
            <p className="teacher-designation">Principal</p>
          </div>
          <div className="teacher-card">
            <img
              src="K beluah mercy.webp"
              alt="K Beulah Mercy"
              className="teacher-image"
            />
            <h3 className="teacher-name">K Beulah Mercy</h3>
            <p className="teacher-designation">Lecturer in Computer Science</p>
          </div>
          <div className="teacher-card">
            <img
              src="ksr rajeswara rao.webp"
              alt="K S R Rajeswara Rao"
              className="teacher-image"
            />
            <h3 className="teacher-name">K S R Rajeswara Rao</h3>
            <p className="teacher-designation">Lecturer in Computer Science</p>
          </div>
          <div className="teacher-card">
            <img
              src="D santhi pradeep.webp"
              alt="D Santhi Pradeep"
              className="teacher-image"
            />
            <h3 className="teacher-name">D Santhi Pradeep</h3>
            <p className="teacher-designation">Lecturer in Computer Science</p>
          </div>
          <div className="teacher-card">
            <img
              src="U venkata avinash.webp"
              alt="U Venkata Avinash"
              className="teacher-image"
            />
            <h3 className="teacher-name">U Venkata Avinash</h3>
            <p className="teacher-designation">Lecturer in Computer Science</p>
          </div>
          <div className="teacher-card">
            <img
              src="M sailaja.webp"
              alt="M Sailaja Kumari"
              className="teacher-image"
            />
            <h3 className="teacher-name">M Sailaja Kumari</h3>
            <p className="teacher-designation">Lecturer in Computer Science</p>
          </div>
          <div className="teacher-card">
            <img
              src="G mutyalya.webp"
              alt="G Mutyala Naidu"
              className="teacher-image"
            />
            <h3 className="teacher-name">G Mutyala Naidu</h3>
            <p className="teacher-designation">Lecturer in Computer Science</p>
          </div>
          <div className="teacher-card">
            <img
              src="p navya.webp"
              alt="P Navya"
              className="teacher-image"
            />
            <h3 className="teacher-name">P Navya</h3>
            <p className="teacher-designation">Lecturer in Computer Science</p>
          </div>
          <div className="teacher-card">
            <img
              src="N sandhya.webp"
              alt="N Sandhya Rani"
              className="teacher-image"
            />
            <h3 className="teacher-name">N Sandhya Rani</h3>
            <p className="teacher-designation">Lecturer in Commerce and Management</p>
          </div>
          <div className="teacher-card">
            <img
              src="p g padma.webp"
              alt="P G Padma"
              className="teacher-image"
            />
            <h3 className="teacher-name">P G Padma</h3>
            <p className="teacher-designation">Lecturer in Commerce and Management</p>
          </div>
          <div className="teacher-card">
            <img
              src="d bhavani.webp"
              alt="D Bhavani"
              className="teacher-image"
            />
            <h3 className="teacher-name">D Bhavani</h3>
            <p className="teacher-designation">Lecturer in Commerce and Management</p>
          </div>
          <div className="teacher-card">
            <img
              src="b r g parmala.webp"
              alt="B R G.PARIMALA"
              className="teacher-image"
            />
            <h3 className="teacher-name">B R G.PARIMALA</h3>
            <p className="teacher-designation">Lecturer in Commerce and Management</p>
          </div>
          <div className="teacher-card">
            <img
              src="Dt ramya.webp"
              alt="D Santhi Pradeep"
              className="teacher-image"
            />
            <h3 className="teacher-name">DT Ramya</h3>
            <p className="teacher-designation">Lecturer in Physics</p>
          </div>
          <div className="teacher-card">
            <img
              src="m v nagamani.webp"
              alt="U Venkata Avinash"
              className="teacher-image"
            />
            <h3 className="teacher-name">M V Nagamani</h3>
            <p className="teacher-designation">Lecturer in Mathematics</p>
          </div>
          <div className="teacher-card">
            <img
              src="/k . ammaji.webp"
              alt="M Sailaja Kumari"
              className="teacher-image"
            />
            <h3 className="teacher-name">K Ammaji</h3>
            <p className="teacher-designation">Lecturer in Chemistry</p>
          </div>
          <div className="teacher-card">
            <img
              src="p v santhi.webp"
              alt="G Mutyala Naidu"
              className="teacher-image"
            />
            <h3 className="teacher-name">P V Santhi</h3>
            <p className="teacher-designation">Lecturer in Biotechnology</p>
          </div>
          <div className="teacher-card">
            <img
              src="p kamala rani.webp"
              alt="P Navya"
              className="teacher-image"
            />
            <h3 className="teacher-name">P Kamala Rani</h3>
            <p className="teacher-designation">Lecturer in Statistics</p>
          </div>
          <div className="teacher-card">
            <img
              src="s kamaeswari.webp"
              alt="N Sandhya Rani"
              className="teacher-image"
            />
            <h3 className="teacher-name">S Kameswari</h3>
            <p className="teacher-designation">Lecturer in English</p>
          </div>
          <div className="teacher-card">
            <img
              src="g manjula.webp"
              alt="P G Padma"
              className="teacher-image"
            />
            <h3 className="teacher-name">G Manjula</h3>
            <p className="teacher-designation">Lecturer in Telugu</p>
          </div>
          <div className="teacher-card">
            <img
              src="d simhachalam.webp"
              alt="D Bhavani"
              className="teacher-image"
            />
            <h3 className="teacher-name">D Simhachalam</h3>
            <p className="teacher-designation">Lecturer in History</p>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default AboutUs;