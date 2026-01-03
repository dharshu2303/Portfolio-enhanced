'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/mzzvovyb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="neon-text">GET IN </span>
          <span className="neon-pink animate-neon-pulse-pink">TOUCH</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 neon-text">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-2xl text-neon-blue mt-1"></i>
                <div>
                  <h4 className="font-bold text-neon-green mb-1">Location</h4>
                  <p className="text-gray-300">Dindigul, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-2xl text-neon-blue mt-1"></i>
                <div>
                  <h4 className="font-bold text-neon-green mb-1">Email</h4>
                  <a
                    href="mailto:dharshinipriya.a426@gmail.com"
                    className="text-gray-300 hover:text-neon-blue transition-colors"
                  >
                    dharshinipriya.a426@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fas fa-university text-2xl text-neon-blue mt-1"></i>
                <div>
                  <h4 className="font-bold text-neon-green mb-1">College</h4>
                  <p className="text-gray-300">M Kumarasamy College of Engineering</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-neon-green mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dharshu2303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-neon-blue flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/dharshini-priya-a-74a446290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-neon-blue flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
               <a
                  href="https://medium.com/@dharshinipriya.a426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-neon-blue flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-medium text-xl"></i>
                </a>
                
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
                   <div className="col-lg-6">
            <h3 className="mb-4 neon-green">Send Me a Message</h3>
            <form action="https://formspree.io/f/mzzvovyb" method="POST">
              <div className="mb-3">
                <input type="text" className="form-control" name="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-neon">Send Message</button>
            </form>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
