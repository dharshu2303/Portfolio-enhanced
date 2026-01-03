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
          },
          {
            id: 3,
            image: "/certificates/infosys.jpg",
            title: "Pragati:Path to Future-cohort 5",
            issuer: "Infosys Springboard",
            date: "Issued September 2025"
          },
          {
            id: 4,
            image: "/certificates/conference.jpg",
            title: "ICAIIHI Conference",
            issuer: "ICAIIHI",
            date: "Issued December 2025"
          },
          {
            id: 5,
            image: "/certificates/HCI.jpg",
            title: "Human Computer Interaction",
            issuer: "NPTEL Swayam",
            date: "Issued April 2025"
          },
          {
            id: 6,
            image: "/certificates/IOT.jpg",
            title: "Internet Of Things",
            issuer: "NPTEL Swayam",
            date: "Issued April 2025"
          },
          {
            id: 7,
            image: "/certificates/oracle-1.png",
            title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            issuer: "Oracle University",
            date: "Issued October 2025"
          },
          {
            id: 8,
            image: "/certificates/oracle-2.png",
            title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
            issuer: "Oracle University",
            date: "Issued October 2025"
          },
          {
            id: 9,
            image: "/certificates/communication.png",
            title: "Communication Skills",
            issuer: "TATA Consultancy Services",
            date: "Issued August 2024"
          },
          {
            id: 10,
            image: "/certificates/implant training.jpg",
            title: "Full Stack Development",
            issuer: "e-soft technologies,Trichy",
            date: "Issued December 2024"
          },
          {
            id: 11,
            image: "/certificates/prompt.png",
            title: "Prompt Engineering For Everyone",
            issuer: "IBM Cognitive Class.ai",
            date: "Issued November 2024"
          },
          {
            id: 12,
            image: "/certificates/intern.jpg",
            title: "Python Development",
            issuer: "Technohacks Edutech",
            date: "Issued August 2024"
          },
          {
            id: 13,
            image: "/certificates/pp.jpg",
            title: "Paper presentation",
            issuer: "Coimbatore Institute of Technology",
            date: "Issued April 2024"
          },
          {
            id: 14,
            image: "/certificates/som.jpg",
            title: "Student of the Month Award",
            issuer: "M Kumarasamy college of Engineering,Karur",
            date: "Issued September 2024"
          },
          {
            id: 15,
            image: "/certificates/uiux.png",
            title: "Intro to Graphic Design,basics of UI/UX",
            issuer: "Simplilearn",
            date: "Issued January 2025"
          },
          {
            id: 16,
            image: "/certificates/workshop.jpg",
            title: "Crack the Code Workshop",
            issuer: "PSG College of Technology,Coimbatore",
            date: "Issued March 2025"
          },
          {
            id: 17,
            image: "/certificates/cisco.png",
            title: "Introduction to CyberSecurity",
            issuer: "Cisco Academy",
            date: "Issued February 2025"
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
