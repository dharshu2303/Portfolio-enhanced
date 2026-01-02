import React from 'react';

const Projects = () => {
  const projects = [
    {
      image: "projects/solar power generation predictor.png",
      title: "Solar Power Generation Predictor",
      description: "AI-based Solar power predictor with usage tips",
      technologies: ["HTML,CSS,JS,BOOTSTRAP", "PYTHON", "FLASK"],
      link: "projects/spgp.mp4"
    },
    {
      image: "projects/drop&pop.png",
      title: "Drop&Pop",
      description: "open cv implemented Ball game based on hand gesture",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      link: "projects/drop&pop.mp4"
    },
    {
      image: "projects/uiux-food delivery website.png",
      title: "Food Delivery Website",
      description: "UI/UX implemented interactive web app with prototype",
      technologies: ["Canva-Prototype", "HTML,CSS", "JavaScript"],
      link: "https://uiux-food-delivery-website.vercel.app/"
    },
    {
      image: "projects/electricity bill management system.png",
      title: "Electricity Bill Management System",
      description: "generate & manage consumer E-Bills with rewards",
      technologies: ["MYSQL", "PHP", "HTML,CSS,JS"],
      link: "projects/ebms.mp4"
    }
  ];

  return (
    <section id="projects" className="bg-darker animate-on-scroll" style={{ backgroundColor: 'var(--darker-bg)' }}>
      <div className="container">
        <h2 className="section-title neon-text">MY <span className="neon-pink">PROJECTS</span></h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-dark me-2">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="btn btn-neon">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;