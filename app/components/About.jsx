'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const skillBarsRef = useRef([])

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

  const skills = [
    { name: 'Web Development', level: '95%' },
    { name: 'Python Development', level: '85%' },
    { name: 'UI/UX Design', level: '75%' }
  ]

  return (
    <section id="about" className="py-20 bg-darker-bg/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="neon-text">ABOUT </span>
          <span className="neon-pink animate-neon-pulse-pink">ME</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 neon-text">Who am I?</h3>
            <p className="mb-4 text-gray-300">
              I'm Dharshini Priya, a B.Tech Information Technology student with a strong interest in Full Stack
              development, UI/UX design, and Python Development. I enjoy working on projects that combine
              creativity with functionality, focusing on building user-friendly and efficient applications.
              Passionate about continuous learning, I actively explore emerging technologies and apply them to
              solve real-world problems.
            </p>
            <p className="mb-6 text-gray-300">
              My approach combines technical expertise with an eye for design, ensuring that the applications I
              build are not only functional but also provide an exceptional user experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="text-gray-300">
                    <strong className="neon-green">Name:</strong> DHARSHINI PRIYA
                  </li>
                  <li className="text-gray-300">
                    <strong className="neon-green">Email:</strong> dharshinipriya.a426@gmail.com
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="text-gray-300">
                    <strong className="neon-green">Age:</strong> 19
                  </li>
                  <li className="text-gray-300">
                    <strong className="neon-green">From:</strong> Dindigul, Tamil Nadu
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 neon-text">Skills Overview</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="mb-6">
                  <div className="skill-name mb-2">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-neon-blue">{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      ref={el => skillBarsRef.current[index] = el}
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: skill.level } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
