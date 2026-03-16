'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Dharshini's AI assistant. 👋\n\nI can help you with:\n• My projects and skills\n• Professional services I offer\n• Getting in touch\n\nWhat would you like to know?"
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [leadForm, setLeadForm] = useState({ name: '', email: '', contact: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const messagesEndRef = useRef(null)

  const services = [
    {
      id: 'fullstack',
      name: 'Full Stack Web Development',
      icon: 'fas fa-code',
      description: 'Complete web applications with modern tech stack',
      color: 'from-neon-blue to-purple-500'
    },
    {
      id: 'portfolio',
      name: 'Portfolio Creation',
      icon: 'fas fa-user-circle',
      description: 'Professional portfolios that stand out',
      color: 'from-neon-pink to-neon-purple'
    },
    {
      id: 'landing',
      name: 'Landing Pages',
      icon: 'fas fa-pager',
      description: 'High-converting landing pages',
      color: 'from-neon-green to-teal-500'
    },
    {
      id: 'uiux',
      name: 'UI/UX Designing',
      icon: 'fas fa-palette',
      description: 'Beautiful and intuitive user interfaces',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'mobile',
      name: 'Mobile App Development',
      icon: 'fas fa-mobile-alt',
      description: 'Cross-platform mobile apps for Android & iOS',
      color: 'from-neon-yellow to-neon-green'
    }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, showServices])

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setShowServices(false)
    setMessages(prev => [...prev, 
      { role: 'user', content: `I'm interested in ${service.name}` },
      { 
        role: 'assistant', 
        content: `Great choice! ${service.name} is one of my specialties. 🎯\n\nTo help you better, please share your details below.`
      }
    ])
  }

  const handleLeadSubmit = async () => {
    if (!leadForm.name || !leadForm.email || !leadForm.contact) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Please fill in all the required fields (name, email, and contact number) to proceed.'
      }])
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/service-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: selectedService.name,
          ...leadForm
        }),
      })

      if (response.ok) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `Thank you, ${leadForm.name}! 🎉\n\nI've received your inquiry for ${selectedService.name}. I'll get back to you at ${leadForm.email} within 24 hours.\n\nLooking forward to working with you!`
        }])
        setLeadForm({ name: '', email: '', contact: '' })
        setSelectedService(null)
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I apologize, but there was an issue sending your inquiry. Please email me directly at dharshinipriya.a426@gmail.com with your service request.`
      }])
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm Dharshini's AI assistant. 👋\n\nI can help you with:\n• My projects and skills\n• Professional services I offer\n• Getting in touch\n\nWhat would you like to know?"
      }
    ])
    setInput('')
    setShowServices(false)
    setSelectedService(null)
    setLeadForm({ name: '', email: '', contact: '' })
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    const currentInput = input
    setInput('')
    setIsTyping(true)

    // Check if user is asking about services
    const lowerInput = currentInput.toLowerCase()
    if (lowerInput.includes('service') || lowerInput.includes('work') || lowerInput.includes('offer')) {
      setIsTyping(false)
      setShowServices(true)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I offer the following professional services. Click on any service card below to get started! 💼"
      }])
      return
    }

    // Timeout wrapper for fetch
    const fetchWithTimeout = (url, options, timeout = 10000) => {
      return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), timeout)
        )
      ])
    }

    try {
      const response = await fetchWithTimeout('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      })

      if (response.ok) {
        const data = await response.json()
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
      } else {
        // Fallback response if API fails
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: getFallbackResponse(currentInput)
        }])
      }
    } catch (error) {
      console.error('Chat error:', error)
      // Use fallback for network errors or timeout
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: getFallbackResponse(currentInput)
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const getFallbackResponse = (query) => {
    const lowerQuery = query.toLowerCase()
    
    if (lowerQuery.includes('service') || lowerQuery.includes('offer') ) {
      return "I offer professional services including Full Stack Web Development, Portfolio Creation, Landing Pages, UI/UX Designing, and Mobile App Development. Would you like to know more about any specific service? 💼"
    }
    
    if (lowerQuery.includes('project')) {
      return "Here are some of my latest projects! 🚀\n\n• Solar Power Generation Predictor (AI/ML, Flask)\n• Drop&Pop (OpenCV hand gesture game)\n• Food Delivery Website (UI/UX design)\n• Electricity Bill Management System (Full stack app)\n• Portfolio Website (React/Next.js, Tailwind)\n• MedTech IEEE Research Paper\n\nEach project highlights my skills in Full Stack, AI, and UI/UX!"
    }
    
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech stack')) {
      return "My technical toolkit includes:\n\n💻 Web: HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS\n📱 Mobile: React Native, Flutter basics\n⚙️ Backend: Node.js, Express, MySQL, PHP\n🐍 Programming: Python, Java, C\n🎨 Design: UI/UX, Canva, Figma\n\nI'm passionate about Full Stack, Mobile, and UI/UX!"
    }
    
    if (lowerQuery.includes('education') || lowerQuery.includes('college') || lowerQuery.includes('study')) {
      return "I'm currently pursuing B.Tech in Information Technology at M Kumarasamy College of Engineering, Karur (2023-2027) with a CGPA of 8.3. 📚\n\nI completed my Higher Secondary at SMBM Matric Hr Sec School with 89%."
    }
    
    if (lowerQuery.includes('experience') || lowerQuery.includes('internship') || lowerQuery.includes('work')) {
      return "My professional journey includes:\n\n💼 Full Stack Developer at Technology Innovation Hub (2025 - Present)\n💼 Full Stack Development Internship at E-Soft Technologies (Dec 2024)\n💼 Python Development Internship at Technohacks Edutech (Jul-Aug 2024)\n\nI've gained hands-on experience in building real-world applications!"
    }
    
    if (lowerQuery.includes('why') || lowerQuery.includes('hire') || lowerQuery.includes('choose') || lowerQuery.includes('best')) {
      return "Here's why I stand out: ✨\n\n• Strong technical foundation across full stack\n• Creative problem-solving approach\n• Fast learner who loves new challenges\n• Focus on clean, maintainable code\n• Understanding of UX and business goals\n• Collaborative team player\n\nI bring both technical expertise and genuine passion for technology!"
    }
    
    if (lowerQuery.includes('certification') || lowerQuery.includes('course') || lowerQuery.includes('learn')) {
      return "I'm committed to continuous learning! 📜\n\nKey certifications:\n• Cloud Computing (NPTEL, Top 5%)\n• SQL (Coursera)\n• Oracle AI\n• Full Stack Development\n• UI/UX Design\n• CyberSecurity\n\nI keep up with the latest tech and best practices!"
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach') || lowerQuery.includes('connect')) {
      return "I'd love to connect with you! 📧\n\n• Email: dharshinipriya.a426@gmail.com\n• GitHub: dharshu2303\n• LinkedIn: dharshini-priya-a-74a446290\n• Location: Dindigul, Tamil Nadu\n\nFeel free to reach out anytime!"
    }
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Hello! I'm Dharshini, a passionate Full Stack Developer and UI/UX Designer. 👋\n\nI love building user-friendly applications and exploring new technologies. What would you like to know about me?"
    }
    
    return "That's an interesting question! I'd be happy to tell you more about:\n\n• My projects and experience\n• Technical skills and technologies\n• Certifications & achievements\n• Professional services I offer\n• How to get in touch\n\nWhat interests you most? 🤔"
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const sampleQuestions = [
    "What services do you offer?",
    "Tell me about your projects",
    "What's your tech stack?",
    "Tell about your experience"
  ]

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink flex items-center justify-center shadow-2xl hover:shadow-neon-blue/50 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.i
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="fas fa-times text-white text-2xl"
            />
          ) : (
            <motion.i
              key="chat"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="fas fa-robot text-white text-2xl"
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 left-8 z-50 w-[420px] max-w-[calc(100vw-4rem)] h-[600px] bg-gradient-to-br from-card-bg to-darker-bg border-2 border-neon-blue/50 rounded-3xl shadow-2xl shadow-neon-blue/20 overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <i className="fas fa-robot text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Dharshini's AI Assistant</h3>
                    <p className="text-white/90 text-xs flex items-center gap-1">
                      <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                      Online & Ready to Help
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="text-white/80 hover:text-white transition-colors"
                  title="Reset conversation"
                >
                  <i className="fas fa-redo text-sm"></i>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neon-blue/30 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-neon-blue to-neon-purple text-white rounded-br-sm'
                        : 'bg-darker-bg/80 border border-neon-blue/30 text-gray-200 rounded-bl-sm backdrop-blur'
                    } whitespace-pre-line shadow-lg`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {/* Service Cards */}
              {showServices && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid grid-cols-2 gap-3 my-4"
                >
                  {services.map((service) => (
                    <motion.button
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-xl bg-gradient-to-br ${service.color} text-white text-left transition-all duration-300 hover:shadow-lg`}
                    >
                      <i className={`${service.icon} text-2xl mb-2 block`}></i>
                      <h4 className="font-bold text-sm mb-1">{service.name}</h4>
                      <p className="text-xs opacity-90">{service.description}</p>
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* Lead Form */}
              {selectedService && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-darker-bg/80 border border-neon-blue/30 rounded-2xl p-4 space-y-3 backdrop-blur"
                >
                  <h4 className="text-neon-blue font-bold text-sm mb-3">Your Details</h4>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full bg-card-bg border border-neon-blue/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-neon-blue transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full bg-card-bg border border-neon-blue/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-neon-blue transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Contact Number *"
                    value={leadForm.contact}
                    onChange={(e) => setLeadForm({ ...leadForm, contact: e.target.value })}
                    className="w-full bg-card-bg border border-neon-blue/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-neon-blue transition-colors"
                  />
                  <button
                    onClick={handleLeadSubmit}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-pink text-white rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </span>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                </motion.div>
              )}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-darker-bg/80 border border-neon-blue/30 p-4 rounded-2xl rounded-bl-sm backdrop-blur">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Sample Questions */}
            {messages.length <= 2 && !showServices && !selectedService && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-400 mb-2 font-semibold">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInput(question)
                        // Auto-send the question
                        setTimeout(() => {
                          const userMessage = { role: 'user', content: question }
                          setMessages(prev => [...prev, userMessage])
                          setInput('')
                          
                          // Check if it's a service question
                          const lowerQ = question.toLowerCase()
                          if (lowerQ.includes('service')) {
                            setShowServices(true)
                            setMessages(prev => [...prev, {
                              role: 'assistant',
                              content: "I offer the following professional services. Click on any service card below to get started! 💼"
                            }])
                          } else {
                            setIsTyping(true)
                            fetch('/api/chat', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ message: question }),
                            })
                              .then(res => res.json())
                              .then(data => {
                                setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
                                setIsTyping(false)
                              })
                              .catch(error => {
                                console.error('Chat error:', error)
                                setMessages(prev => [...prev, {
                                  role: 'assistant',
                                  content: getFallbackResponse(question)
                                }])
                                setIsTyping(false)
                              })
                          }
                        }, 100)
                      }}
                      className="text-xs px-3 py-1.5 bg-darker-bg/60 border border-neon-blue/40 rounded-full text-gray-300 hover:border-neon-blue hover:text-neon-blue hover:bg-darker-bg transition-all duration-300"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-neon-blue/30 bg-gradient-to-r from-darker-bg/50 to-card-bg/50 backdrop-blur">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-darker-bg border border-neon-blue/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="px-5 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-xl hover:opacity-90 disabled:opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/30"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
