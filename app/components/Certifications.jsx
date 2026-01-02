'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const [certifications, setCertifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
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
    const fetchCertifications = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
        const response = await fetch(`${apiUrl}/api/certifications`)
        if (!response.ok) {
          throw new Error('Failed to fetch certifications')
        }
        const data = await response.json()
        setCertifications(data)
      } catch (err) {
        console.error('Error fetching certifications:', err)
        // Fallback to static data
        setCertifications([
          {
            id: 1,
            image: "/certificates/sql.png",
            title: "Working with Subqueries in SQL",
            issuer: "Coursera",
            date: "Issued April 2025"
          },
          {
            id: 2,
            image: "/certificates/cc.jpg",
            title: "Cloud Computing",
            issuer: "NPTEL Swayam",
            date: "Issued November 2025"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchCertifications()
  }, [])

  useEffect(() => {
    if (certifications.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certifications.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [certifications])

  const visibleCerts = 3 // Number of certificates visible at once
  const maxSlide = Math.max(0, certifications.length - visibleCerts)

  return (
    <section id="certifications" className="py-20 bg-darker-bg/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="neon-text">COURSES & </span>
          <span className="neon-pink animate-neon-pulse-pink">CERTIFICATIONS</span>
        </motion.h2>

        {loading ? (
          <div className="text-center text-neon-blue">
            <i className="fas fa-spinner fa-spin text-4xl"></i>
            <p className="mt-4">Loading certifications...</p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="certifications-slider">
              <div
                className="certifications-track"
                style={{
                  transform: `translateX(-${Math.min(currentSlide, maxSlide) * 330}px)`
                }}
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="certification-card"
                  >
                    <div className="relative h-48 w-full mb-4">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="certification-title">{cert.title}</h3>
                    <div className="certification-issuer">{cert.issuer}</div>
                    <div className="certification-date">{cert.date}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Slider Navigation */}
            <div className="slider-nav">
              {certifications.map((_, index) => (
                <div
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
