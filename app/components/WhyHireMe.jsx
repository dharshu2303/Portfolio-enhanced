'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function WhyHireMe() {
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

  const reasons = [
    {
      icon: 'fas fa-rocket',
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Problem Solver',
      description: 'Creative solutions to complex technical challenges'
    },
    {
      icon: 'fas fa-users',
      title: 'Team Player',
      description: 'Collaborative approach with excellent communication'
    },
    {
      icon: 'fas fa-code',
      title: 'Clean Code',
      description: 'Focus on maintainable and efficient code quality'
    }
  ]

  return (
    <section id="why-hire-me" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="neon-text">WHY SHOULD YOU </span>
          <span className="neon-pink animate-neon-pulse-pink">HIRE ME?</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 neon-text">Introduction Video</h3>
              <div className="relative aspect-video bg-darker-bg rounded-lg overflow-hidden border border-neon-blue/30">
                {/* Placeholder for video - users can upload their video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-video text-6xl text-neon-blue mb-4"></i>
                    <p className="text-gray-400">Video Placeholder</p>
                    <p className="text-sm text-gray-500 mt-2">Upload your 1-2 minute introduction video</p>
                  </div>
                </div>
                {/* Example video element - uncomment and add your video
                <video
                  controls
                  className="w-full h-full"
                  poster="/video-thumbnail.jpg"
                >
                  <source src="/intro-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="card p-6 text-center gradient-hover"
                >
                  <i className={`${reason.icon} text-4xl text-neon-blue mb-4`}></i>
                  <h4 className="font-bold mb-2 neon-green">{reason.title}</h4>
                  <p className="text-sm text-gray-400">{reason.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 card p-6"
            >
              <p className="text-gray-300 leading-relaxed">
                I bring a unique combination of technical skills, creative problem-solving, 
                and genuine passion for technology. My projects demonstrate not just coding 
                ability, but also an understanding of user needs and business goals. I'm 
                committed to continuous learning and staying current with industry trends.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
