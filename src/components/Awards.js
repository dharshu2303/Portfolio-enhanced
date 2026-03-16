import React from 'react';

const Awards = () => {
  return (
    <section id="awards" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title neon-text">AWARDS & <span className="neon-pink">ACHIEVEMENTS</span></h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 text-center p-4">
              <i className="fas fa-user-graduate fa-3x mb-3 neon-pink"></i>
              <h4>Ranked Top 5% in NPTEL Cloud Computing Certification Course</h4>
              <p className="text-muted">NPTEL Swayam</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 text-center p-4">
              <i className="fas fa-trophy fa-3x mb-3 neon-green"></i>
              <h4>Awarded Student of the Month at college.</h4>
              <p className="text-muted">M Kumarasamy College of Engineering,Karur</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 text-center p-4">
              <i className="fas fa-medal fa-3x mb-3 neon-pink"></i>
              <h4>Published a motivation article titled "Stronger than before – the art of resilience, optimism and success".</h4>
              <p className="text-muted">Medium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
