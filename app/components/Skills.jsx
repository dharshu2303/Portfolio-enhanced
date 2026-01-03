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

  return (
    <section id="skills" className="py-20 bg-darker-bg" ref={sectionRef}>
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-8 max-w-4xl mx-auto"
        >
          {/* WEB DEVELOPMENT */}
          <h5 className="text-center text-lg font-semibold mb-6 neon-green">
            <u>WEB DEVELOPMENT</u>
          </h5>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <i className="fab fa-html5 text-3xl text-neon-green"></i>
              <span className="text-white">HTML5</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-css3-alt text-3xl text-neon-green"></i>
              <span className="text-white">CSS3</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-js text-3xl text-neon-green"></i>
              <span className="text-white">JavaScript</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-react text-3xl text-neon-green"></i>
              <span className="text-white">React.js</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="bi bi-filetype-sql text-3xl text-neon-green"></i>
              <span className="text-white">MYSQL</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-php text-3xl text-neon-green"></i>
              <span className="text-white">PHP</span>
            </div>
          </div>

          <hr className="border-neon-blue/30 my-6" />

          {/* PROGRAMMING LANGUAGES */}
          <h5 className="text-center text-lg font-semibold mb-6 neon-pink">
            <u>Programming Languages</u>
          </h5>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <i className="fab fa-python text-3xl text-neon-pink"></i>
              <span className="text-white">PYTHON</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-java text-4xl text-neon-pink"></i>
              <span className="text-white">JAVA</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-copyright text-3xl text-neon-pink"></i>
              <span className="text-white">C PROGRAMMING</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl text-neon-pink font-bold">C#</span>
              <span className="text-white">C#</span>
            </div>
          </div>

          <hr className="border-neon-blue/30 my-6" />

          {/* TOOLS & FRAMEWORKS */}
          <h5 className="text-center text-lg font-semibold mb-6 neon-pink">
            <u>Tools &amp; Frameworks</u>
          </h5>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <i className="fas fa-desktop text-3xl text-neon-pink"></i>
              <span className="text-white">VMWare</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-figma text-4xl text-neon-pink"></i>
              <span className="text-white">Figma</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-github text-3xl text-neon-pink"></i>
              <span className="text-white">Github</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-android text-3xl text-neon-pink"></i>
              <span className="text-white">Android Studio</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
