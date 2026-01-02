import React from 'react';

const Education = () => {
  return (
    <section id="education" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title neon-text">EDUCATION</h2>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card h-100 p-4">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <i className="fas fa-graduation-cap fa-3x me-4 neon-pink"></i>
                </div>
                <div className="flex-grow-1">
                  <h4>B.Tech(Information Technology)</h4>
                  <p className="text-muted">M Kumarasamy college of Engineering,Karur • 2023 - 2027</p>
                  <p className="text-muted">CGPA:8.3(up to 4th semester)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100 p-4">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <i className="fas fa-graduation-cap fa-3x me-4 neon-pink"></i>
                </div>
                <div className="flex-grow-1">
                  <h4>Higher Secondary certification</h4>
                  <p className="text-muted">SMBM Matric Hr Sec School,Dindigul</p>
                  <p className="text-muted">Percentage:89%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;