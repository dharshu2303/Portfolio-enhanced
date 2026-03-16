import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-darker animate-on-scroll" style={{ backgroundColor: 'var(--darker-bg)' }}>
      <div className="container">
        <h2 className="section-title neon-text">SKILLS & <span className="neon-pink">EXPERIENCE</span></h2>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="mb-4 neon-green">My Skills</h3>
            <div className="card p-4 mb-4">
              <div className="row">
                <h5 className="text-center"><u>WEB DEVELOPMENT</u></h5><br /><br />
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-html5 fa-2x me-3 neon-green"></i>
                    <span style={{ color: 'white' }}>HTML5</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-css3-alt fa-2x me-3 neon-green"></i>
                    <span style={{ color: 'white' }}>CSS3</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-js fa-2x me-3 neon-green"></i>
                    <span style={{ color: 'white' }}>JavaScript</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-react fa-2x me-3 neon-green"></i>
                    <span style={{ color: 'white' }}>React.js</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-filetype-sql fa-2x me-3 neon-green"></i>
                    <span style={{ color: 'white' }}>MYSQL</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-php fa-2x me-3 neon-green"></i>
                    <span style={{ color: 'white' }}>PHP</span>
                  </div>
                </div>
                <hr />
                <h5 className="text-center"><u>Programming Languages</u></h5><br /><br />
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-python fa-2x me-3 neon-pink"></i>
                    <span style={{ color: 'white' }}>PYTHON</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-java fa-3x me-3 neon-pink"></i>
                    <span style={{ color: 'white' }}>JAVA</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-c fa-2x me-3 neon-pink"></i>
                    <span style={{ color: 'white' }}>C PROGRAMMING</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="me-3 neon-pink">
                      <h4>C#</h4>
                    </i>
                    <span style={{ color: 'white' }}>C#</span>
                  </div>
                </div>
                <hr />
                <h5 className="text-center"><u>Tools & Frameworks</u></h5><br /><br />
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="me-3 neon-pink">
                      <img src="vmware.ico" alt="VMWare" className="neon-pink" />
                    </i>
                    <span style={{ color: 'white' }}>VMWare</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-figma fa-3x me-3 neon-pink"></i>
                    <span style={{ color: 'white' }}>Figma</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-github fa-2x me-3 neon-pink"></i>
                    <span style={{ color: 'white' }}>Github</span>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-android fa-2x me-3 neon-pink"></i>
                    <span style={{ color: 'white' }}>Android Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-4 neon-green">Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <h4>Full Stack Developer</h4>
                <p className="text-muted">Technology Innovation Hub • 2025 - Present</p>
                <p>Contributing to the design and development of robust full-stack applications, with a
                  strong focus on the MERN stack. Collaborating with cross-functional teams to deliver
                  innovative and user-friendly solutions.</p>
              </div>
              <div className="timeline-item">
                <h4>Full Stack Development Internship</h4>
                <p className="text-muted">E-Soft Technologies, Trichy • December 2024</p>
                <p>Developed and deployed a complete full-stack project, integrating front-end and back-end
                  functionalities effectively. Applied industry best practices and learned to optimize
                  performance for real-world scenarios.</p>
              </div>
              <div className="timeline-item">
                <h4>Python Development Internship(Remote)</h4>
                <p className="text-muted">Technohacks Edutech • July-August 2024</p>
                <p>Gained hands-on experience in Python programming by working on practical projects,
                  enhancing problem-solving skills, and applying core concepts to build efficient and
                  scalable applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;