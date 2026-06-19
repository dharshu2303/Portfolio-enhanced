'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
export default function Hero() {
  const videoRef = useRef(null)
  const [interactionPhase, setInteractionPhase] = useState('idle') // 'idle', 'animating_cursor', 'playing'

  const handleInteraction = () => {
    if (interactionPhase === 'idle') {
      // Capture user gesture synchronously for mobile browsers
      if (videoRef.current) {
        videoRef.current.play().then(() => {
          videoRef.current.pause()
        }).catch(err => {
          console.log("Gesture capture play/pause failed:", err)
        })
      }
      setInteractionPhase('animating_cursor')
    } else if (interactionPhase === 'playing') {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play().catch(error => {
            console.log("Play failed:", error)
          })
        } else {
          videoRef.current.pause()
        }
      }
    }
  }

  const startPlaying = () => {
    setInteractionPhase('playing')
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.currentTime = 0
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay with sound prevented by browser:", error)
        })
      }
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const offset = 70
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="neon-pink animate-neon-pulse-pink">DHARSHINI <span className="inline-block relative left-8 md:left-16">PRIYA A</span></span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 neon-purple"
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-neon"
              >
                See My Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-neon"
              >
                Let's Connect
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div 
              className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl group cursor-pointer mt-16 md:mt-0"
              onClick={handleInteraction}
            >
              {/* Thought Bubble Overlay */}
              <motion.div 
                initial={{ opacity: 1 }}
                animate={{ opacity: interactionPhase === 'idle' ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-[-85px] left-1/2 -translate-x-1/2 md:top-[10%] md:right-[5%] md:left-auto md:translate-x-0 md:transform-none z-10 pointer-events-none flex flex-col items-center w-max max-w-[280px] md:max-w-none"
              >
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="bg-[#0A0A0A]/90 backdrop-blur-md px-6 py-4 rounded-[3rem] border border-[#00F5FF]/80 shadow-[0_0_20px_rgba(0,245,255,0.8)] flex items-center justify-center relative left-4">
                    <span className="text-[#00F5FF] font-bold tracking-widest uppercase text-xs md:text-sm">Click me to activate</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#00F5FF]/50 border border-[#00F5FF] shadow-[0_0_10px_rgba(0,245,255,0.8)] self-start ml-16 md:ml-8"></div>
                  <div className="w-3 h-3 rounded-full bg-[#00F5FF]/30 border border-[#00F5FF] shadow-[0_0_10px_rgba(0,245,255,0.8)] self-start ml-24 md:ml-4"></div>
                </motion.div>
              </motion.div>

              {/* Fake Animated Cursor */}
              {interactionPhase !== 'idle' && (
                <motion.div
                  initial={{ y: 300, x: 100, opacity: 0, scale: 1.5 }}
                  animate={
                    interactionPhase === 'animating_cursor' 
                      ? { y: 0, x: 0, opacity: 1, scale: 1 } 
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{ type: 'spring', stiffness: 40, damping: 12 }}
                  onAnimationComplete={() => {
                    if (interactionPhase === 'animating_cursor') {
                      setTimeout(() => startPlaying(), 200); // Slight delay for the "click" feel
                    }
                  }}
                  className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                >
                  <motion.div
                    animate={interactionPhase === 'animating_cursor' ? { scale: [1, 0.8, 1] } : {}}
                    transition={{ delay: 0.8, duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF00F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_15px_rgba(255,0,245,0.8)]" style={{ transform: "rotate(-15deg)" }}>
                      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                      <path d="m13 13 6 6"/>
                    </svg>
                  </motion.div>
                </motion.div>
              )}

              <video
                ref={videoRef}
                src="/vid.mp4"
                playsInline
                onEnded={() => {
                  setInteractionPhase('idle')
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0
                  }
                }}
                className="w-full h-auto block mix-blend-screen md:mix-blend-lighten filter brightness-110 contrast-125"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
