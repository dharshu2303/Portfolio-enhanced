'use client'

import { useEffect } from 'react'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WhyHireMe from './components/WhyHireMe'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function Home() {
  useEffect(() => {
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
          }
        })
      },
      { threshold: 0.1 }
    )

    animateElements.forEach((element) => {
      observer.observe(element)
    })

    // Touch hover effect for mobile
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    if (isTouch) {
      const touchElements = () => Array.from(document.querySelectorAll('.gradient-hover'))

      const clearAll = () => {
        touchElements().forEach((el) => el.classList.remove('hover'))
      }

      const onTouchStart = (e) => {
        clearAll()
        e.currentTarget.classList.add('hover')
      }

      const onTouchEnd = (e) => {
        setTimeout(() => e.currentTarget.classList.remove('hover'), 800)
      }

      // Attach listeners after a short delay to ensure DOM is ready
      setTimeout(() => {
        touchElements().forEach((el) => {
          el.addEventListener('touchstart', onTouchStart, { passive: true })
          el.addEventListener('touchend', onTouchEnd, { passive: true })
        })
      }, 500)
    }

    return () => {
      animateElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <main className="relative">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyHireMe />
      <Education />
      <Certifications />
      <Awards />
      <Contact />
      <Footer />
      <Chatbot />
      <div className="glow"></div>
    </main>
  )
}
