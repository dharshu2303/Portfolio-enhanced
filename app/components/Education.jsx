'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const education = [
    {
      degree: 'B.Tech Information Technology',
      institution: 'M Kumarasamy College of Engineering',
      location: 'Karur, Tamil Nadu',
      period: '2023 - 2027',
      grade: 'CGPA: 8.3',
      icon: 'fas fa-graduation-cap'
    },
    {
      degree: 'Higher Secondary',
      institution: 'SMBM Matric Hr Sec School',
      location: 'Dindigul, Tamil Nadu',
      period: 'Completed 2023',
      grade: '89%',
      icon: 'fas fa-school'
    }
  ]

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Technology Innovation Hub',
      period: '2025 - Present',
      description: 'Contributing to the design and development of robust full-stack applications, with a strong focus on the MERN stack. Collaborating with cross-functional teams to deliver innovative and user-friendly solutions.'
    },
    {
      title: 'Full Stack Development Internship',
      company: 'E-Soft Technologies, Trichy',
      period: 'December 2024',
      description: 'Developed and deployed a complete full-stack project, integrating front-end and back-end functionalities effectively. Applied industry best practices and learned to optimize performance for real-world scenarios.'
    },
    {
      title: 'Python Development Internship (Remote)',
      company: 'Technohacks Edutech',
      period: 'July-August 2024',
      description: 'Gained hands-on experience in Python programming by working on practical projects, enhancing problem-solving skills, and applying core concepts to build efficient and scalable applications.'
    }
  ]

  return (
    <section id="education" className="py-20 bg-darker-bg/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="neon-text">EDUCATION & </span>
          <span className="neon-pink animate-neon-pulse-pink">EXPERIENCE</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 neon-green">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="card p-6 gradient-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center">
                        <i className={`${edu.icon} text-xl text-white`}></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1 neon-text">{edu.degree}</h4>
                      <p className="text-neon-pink mb-2">{edu.institution}</p>
                      <div className="text-sm text-gray-400 space-y-1">
                        <p>{edu.location} • {edu.period}</p>
                        <p className="text-neon-green">{edu.grade}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section with Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 neon-green">Experience</h3>
            <div className="timeline relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue to-neon-pink timeline-line"></div>
              
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="timeline-item relative mb-8 p-5 bg-card-bg/70 rounded-lg hover:bg-card-bg transition-all duration-300 hover:translate-x-1"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-6 w-3 h-3 rounded-full bg-neon-blue timeline-dot"></div>
                  
                  <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">{exp.company} • {exp.period}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
