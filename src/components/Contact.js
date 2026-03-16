import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-darker animate-on-scroll" style={{ backgroundColor: 'var(--darker-bg)' }}>
      <div className="container">
        <h2 className="section-title neon-text">GET IN <span className="neon-pink">TOUCH</span></h2>
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h3 className="mb-4 neon-green">Contact Info</h3>
            <div className="card p-4 h-100">
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-map-marker-alt fa-2x me-3 neon-green"></i>
                  <div>
                    <h5 className="mb-0">Location</h5>
                    <p className="mb-0">DINDIGUL</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-envelope fa-2x me-3 neon-pink"></i>
                  <div>
                    <h5 className="mb-0">Email</h5>
                    <p className="mb-0">dharshinipriya.a426@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <h5 className="mb-3 neon-text">Follow Me</h5>
                <div className="d-flex">
                  <a href="https://github.com/dharshu2303" className="social-icon neon-blue"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/dharshini-priya-a-74a446290/" className="social-icon neon-blue"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-4 neon-green">Send Me a Message</h3>
            <form action="https://formspree.io/f/mzzvovyb" method="POST">
              <div className="mb-3">
                <input type="text" className="form-control" name="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-neon">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
