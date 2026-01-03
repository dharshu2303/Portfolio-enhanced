'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
        const response = await fetch(`${apiUrl}/api/projects`)
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        const data = await response.json()
        setProjects(data)
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError(err.message)
        // Fallback to static data if backend is not available
        setProjects([
          {
            id: 1,
            image: "/projects/solar power generation predictor.png",
            title: "Solar Power Generation Predictor",
            description: "AI-based Solar power predictor with usage tips",
            technologies: ["HTML,CSS,JS,BOOTSTRAP", "PYTHON", "FLASK"],
            link: "/projects/spgp.mp4",
            category: "AI/ML"
          },
          {
            id: 2,
            image: "/projects/drop&pop.png",
            title: "Drop&Pop",
            description: "OpenCV implemented Ball game based on hand gesture",
            technologies: ["Python", "OpenCV", "MediaPipe"],
            link: "/projects/drop&pop.mp4",
            category: "Computer Vision"
          },
          {
            id: 3,
            image: "/projects/uiux-food delivery website.png",
            title: "Food Delivery Website",
            description: "UI/UX implemented interactive web app with prototype",
            technologies: ["Canva-Prototype", "HTML,CSS", "JavaScript"],
            link: "https://uiux-food-delivery-website.vercel.app/",
            category: "UI/UX"
          },
          {
            id: 4,
            image: "/projects/electricity bill management system.png",
            title: "Electricity Bill Management System",
            description: "Generate & manage consumer E-Bills with rewards",
            technologies: ["MYSQL", "PHP", "HTML,CSS,JS"],
            link: "/projects/ebms.mp4",
            category: "Full Stack"
          },
                 {
            id: 5,
            image: "/projects/ovcare.png",
            title: "OVCare-Ovarian Cancer Early Detection",
            description: "Early detection of ovarian cancer using teporal analysis",
            technologies: ["MYSQL", "PHP", "HTML,CSS,JS","Python","Flask"],
            link: "/projects/ebms.mp4",
            category: "Full Stack"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-20 bg-darker-bg/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="neon-text">MY </span>
          <span className="neon-pink animate-neon-pulse-pink">PROJECTS</span>
        </motion.h2>

        {loading ? (
          <div className="text-center text-neon-blue">
            <i className="fas fa-spinner fa-spin text-4xl"></i>
            <p className="mt-4">Loading projects...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden gradient-hover h-full flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 neon-text">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-darker-bg/60 border border-neon-pink/30 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : '_self'}
                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="btn-neon text-center block"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
