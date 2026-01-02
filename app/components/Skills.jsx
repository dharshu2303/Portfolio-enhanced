'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Web Development',
      icon: 'fas fa-code',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend & Database',
      icon: 'fas fa-server',
      skills: ['Node.js', 'Express', 'MySQL', 'PHP', 'REST APIs']
    },
    {
      title: 'Programming',
      icon: 'fas fa-laptop-code',
      skills: ['Python', 'Java', 'C', 'Flask', 'OpenCV']
    },
    {
      title: 'Design Tools',
      icon: 'fas fa-paint-brush',
      skills: ['UI/UX Design', 'Canva', 'Figma', 'Responsive Design']
    }
  ]

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="neon-text">MY </span>
          <span className="neon-pink animate-neon-pulse-pink">SKILLS</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 gradient-hover"
            >
              <div className="text-center mb-4">
                <i className={`${category.icon} text-5xl text-neon-blue mb-4 inline-block transition-all duration-300 hover:scale-110`}></i>
                <h3 className="text-xl font-bold neon-text">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-darker-bg/60 border border-neon-blue/30 rounded-full text-sm text-gray-300 hover:border-neon-blue hover:text-neon-blue transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
