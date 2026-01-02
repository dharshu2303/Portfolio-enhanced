import React, { useEffect, useRef } from 'react';

const About = () => {
  const skillBarsRef = useRef([]);

  useEffect(() => {
    const skillBars = skillBarsRef.current;
    
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-level');
          entry.target.style.setProperty('--target-width', width);
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.5
    });

    skillBars.forEach(bar => {
      if (bar) {
        const percentage = bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent;
        bar.setAttribute('data-level', percentage);
        
        skillsObserver.observe(bar);
      }
    });

    return () => {
      skillBars.forEach(bar => {
        if (bar) skillsObserver.unobserve(bar);
      });
    };
  }, []);

  return (
    <section id="about" className="animate-on-scroll">
      <div className="container">
    <h2 className="section-title neon-text">ABOUT <span className="neon-pink">ME</span></h2>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="mb-4">Who am I?</h3>
            <p>I'm Dharshini Priya, a B.Tech Information Technology student with a strong interest in Full Stack
              development, UI/UX design, and Python Development. I enjoy working on projects that combine
              creativity with functionality, focusing on building user-friendly and efficient applications.
              Passionate about continuous learning, I actively explore emerging technologies and apply them to
              solve real-world problems.</p>
            <p>My approach combines technical expertise with an eye for design, ensuring that the applications I
              build are not only functional but also provide an exceptional user experience.</p>
            <div className="row mt-4">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2"><strong className="neon-green">Name:</strong> DHARSHINI PRIYA</li>
                  <li className="mb-2"><strong className="neon-green">Email:</strong> dharshinipriya.a426@gmail.com</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2"><strong className="neon-green">Age:</strong> 19</li>
                  <li className="mb-2"><strong className="neon-green">From:</strong> Dindigul,Tamil Nadu</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="card p-4 h-100">
              <h3 className="neon-text mb-4">Skills Overview</h3>
              <div className="skill-item">
                <div className="skill-name">
                  <span>Web Development</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    ref={el => skillBarsRef.current[0] = el}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <span>Python Development</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    ref={el => skillBarsRef.current[1] = el}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <span>UI/UX Design</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    ref={el => skillBarsRef.current[2] = el}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
