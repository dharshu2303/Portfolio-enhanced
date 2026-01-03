'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Awards() {
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

  const awards = [
    {
      icon: 'fas fa-user-graduate',
      title: 'Ranked Top 5% in NPTEL Cloud Computing Certification Course',
      issuer: 'NPTEL Swayam',
      color: 'neon-pink'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Awarded Student of the Month at college',
      issuer: 'M Kumarasamy College of Engineering, Karur',
      color: 'neon-green'
    },
    {
      icon: 'fas fa-medal',
      title: 'Published a motivation article titled "Stronger than before – the art of resilience, optimism and success"',
      issuer: 'Medium',
      color: 'neon-pink'
    }
  ]

  return (
    <section id="awards" className="py-20 bg-darker-bg/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="neon-text">AWARDS & </span>
          <span className="neon-pink animate-neon-pulse-pink">ACHIEVEMENTS</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card p-8 text-center gradient-hover h-full"
            >
              <i className={`${award.icon} text-6xl mb-6 text-${award.color} icon-glow`}></i>
              <h4 className="text-lg font-semibold mb-4 text-white">{award.title}</h4>
              <p className="text-gray-400">{award.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
