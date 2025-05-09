import React from 'react';

const Place = () => {
  const items = [
    { position: 1, image: '/ama.webp' },
    { position: 2, image: '/alc.webp' },
    { position: 3, image: '/tata.webp' },
    { position: 4, image: 'cong.webp' },
    { position: 5, image: '/icic.webp' },
    { position: 6, image: '/name.webp' },
    { position: 7, image: '/infos.webp' },
    { position: 8, image: '/con.webp' },
    { position: 9, image: '/wns.webp' },
    { position: 10, image: '/vr.webp' },
  ];
  return (
    <section id='placement'>
      <img src="clg.jpg" alt="" style={{ height: "100vh", width: "100%" }} />
      <h4 className='bold'>About/ <b>Placements</b></h4>
              <h1 className='campus'>CAMPUS PLACEMENT TRAINING </h1>

      <div className="image-carousel" style={{ '--width': '300px', '--height': '250px', '--quantity': items.length }}>
        <div className="carousel-items">
          {items.map((item) => (
            <div key={item.position} className="carousel-slide" style={{ '--position': item.position }}>
              <div className="slide-content" style={{ background: item.gradient }}>
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="place-container">
        <div className="training-box">
          <h2 className="title">EMPLOYABILITY TRAINING</h2>
          <p className="description">
            Training programmers are conducted throughout the year for students in an effort towards preparing the prospective students for the campus selection program.
          </p>
          <ul className="skills-list">
            <li>Aptitude</li>
            <li>Communication skills</li>
            <li>Leadership skills</li>
            <li>Personality Development</li>
            <li>Time management</li>
            <li>Team management</li>
            <li>Interview skills</li>
          </ul>
        </div>

        <div className="training-box">
          <h2 className="title">EMPLOYABILITY TRAINING</h2>
          <p className="description">
            Given the highly competitive and rocky job market scenario and highest importance is given to training of students in the areas of problem solving, critical thinking, communication skills and team work skills.
          </p>
        </div>
      </div>
    </section>


  );
};

export default Place;