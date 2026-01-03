'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Dharshini's AI assistant. Ask me about her projects, skills, or background!"
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

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
        body: JSON.stringify({ message: input }),
      })

      if (response.ok) {
        const data = await response.json()
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
      } else {
        // Fallback response if API fails
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: getFallbackResponse(input)
        }])
      }
    } catch (error) {
      console.error('Chat error:', error)
      // Use fallback for network errors or timeout
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: getFallbackResponse(input)
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const getFallbackResponse = (query) => {
    const lowerQuery = query.toLowerCase()
    
    if (lowerQuery.includes('project')) {
      return "I've worked on several exciting projects including a Solar Power Generation Predictor using AI/ML, an OpenCV-based hand gesture ball game called Drop&Pop, a Food Delivery Website UI/UX design, and an Electricity Bill Management System. Each showcases different aspects of my skills in Full Stack Development, AI, and UI/UX design!"
    }
    
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology')) {
      return "My technical skills include: Web Development (HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS), Backend (Node.js, Express, MySQL, PHP), Programming (Python, Java, C), and Design (UI/UX, Canva, Figma). I'm particularly passionate about Full Stack Development and Python!"
    }
    
    if (lowerQuery.includes('education') || lowerQuery.includes('college')) {
      return "I'm currently pursuing B.Tech in Information Technology at M Kumarasamy College of Engineering, Karur (2023-2027) with a CGPA of 8.3. I completed my Higher Secondary at SMBM Matric Hr Sec School with 89%."
    }
    
    if (lowerQuery.includes('hire') || lowerQuery.includes('why')) {
      return "You should hire me because I bring a unique combination of technical expertise, creative problem-solving, and genuine passion for technology. I'm a fast learner, collaborative team player, and focus on writing clean, maintainable code. My projects demonstrate not just coding ability, but also understanding of user needs and business goals!"
    }
    
    if (lowerQuery.includes('certification') || lowerQuery.includes('course')) {
      return "I have completed numerous certifications including Cloud Computing (NPTEL), SQL (Coursera), Oracle AI certifications (Generative AI Professional & AI Foundations Associate), Full Stack Development, UI/UX Design, and more. I'm committed to continuous learning!"
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('email')) {
      return "You can reach me at dharshinipriya.a426@gmail.com. I'm also on GitHub (dharshu2303) and LinkedIn. I'm based in Dindigul, Tamil Nadu, and currently studying at M Kumarasamy College of Engineering."
    }
    
    return "That's an interesting question! I can tell you about Dharshini's projects, technical skills, education, certifications, or why she would be a great addition to your team. What would you like to know more about?"
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const sampleQuestions = [
    "Tell me about your projects",
    "What are your technical skills?",
    "What's your background?",
    "Why should I hire you?"
  ]

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-white text-xl`}></i>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-8 z-50 w-96 max-w-[calc(100vw-4rem)] h-[500px] bg-card-bg border-2 border-neon-blue/50 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-blue to-neon-pink p-4">
              <h3 className="text-white font-bold text-lg">Chat with Dharshini's AI</h3>
              <p className="text-white/80 text-sm">Ask me anything!</p>
            </div>

            {/* Messages */}
            <div className="h-[340px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-neon-blue text-white'
                        : 'bg-darker-bg border border-neon-blue/30 text-gray-200'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-darker-bg border border-neon-blue/30 p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Sample Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-400 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.slice(0, 2).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInput(question)
                        // Auto-send the question after a brief delay
                        setTimeout(() => {
                          const userMessage = { role: 'user', content: question }
                          setMessages(prev => [...prev, userMessage])
                          setInput('')
                          setIsTyping(true)

                          // Fetch response
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
                        }, 100)
                      }}
                      className="text-xs px-2 py-1 bg-darker-bg border border-neon-blue/30 rounded-full text-gray-300 hover:border-neon-blue transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-neon-blue/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-darker-bg border border-neon-blue/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-neon-blue"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-pink text-white rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
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
