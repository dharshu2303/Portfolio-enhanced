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

  return (
    <section id="education" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="neon-text">MY </span>
          <span className="neon-pink animate-neon-pulse-pink">EDUCATION</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card p-6 mb-6 gradient-hover"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center">
                    <i className={`${edu.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 neon-text">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-neon-pink mb-2">{edu.institution}</h4>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt text-neon-green"></i>
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fas fa-calendar text-neon-green"></i>
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fas fa-award text-neon-green"></i>
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
