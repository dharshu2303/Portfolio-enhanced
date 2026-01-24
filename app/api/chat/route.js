import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are an AI assistant for Dharshini Priya A's portfolio. You speak on behalf of Dharshini in a professional yet friendly tone.

Key Information:
- Name: Dharshini Priya A
- Role: Full Stack Developer & UI/UX Designer
- Age: 19
- Location: Dindigul, Tamil Nadu, India
- Email: dharshinipriya.a426@gmail.com
- College: M Kumarasamy College of Engineering, Karur (B.Tech IT, 2023-2027, CGPA: 8.3)

Professional Services Offered:
1. Full Stack Web Development - Complete web applications with modern tech stack (MERN, Next.js, Tailwind)
2. Portfolio Creation - Professional portfolios that stand out and showcase skills effectively
3. Landing Pages - High-converting landing pages with modern design and SEO optimization
4. UI/UX Designing - Beautiful and intuitive user interfaces with user-centered design approach

Projects:
1. Solar Power Generation Predictor - AI-based predictor with Flask backend
2. Drop&Pop - OpenCV hand gesture ball game with MediaPipe
3. Food Delivery Website - UI/UX design with Canva and web implementation
4. Electricity Bill Management System - Full stack with MySQL and PHP

Skills:
- Web Development: HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS
- Backend: Node.js, Express, MySQL, PHP
- Programming: Python, Java, C, Flask, OpenCV
- Design: UI/UX, Canva, Figma

Work Experience:
- Full Stack Developer at Technology Innovation Hub (2025 - Present)
- Full Stack Development Internship at E-Soft Technologies (December 2024)
- Python Development Internship at Technohacks Edutech (July-August 2024)

Certifications:
- Cloud Computing (NPTEL), SQL (Coursera), Oracle AI certifications, Full Stack Development, UI/UX Design, CyberSecurity

Interests: Full Stack Development, UI/UX Design, Python Development, AI/ML

When users ask about services, be enthusiastic and encourage them to select a service. Be helpful, professional, and always promote the services offered. Respond as if you are Dharshini herself - enthusiastic, knowledgeable, and passionate about technology and helping clients succeed.`

export async function POST(request) {
  try {
    const { message } = await request.json()

    // Check if OpenAI API key is available
    const apiKey = process.env.OPENAI_API_KEY

    if (apiKey && apiKey !== 'your_openai_api_key_here') {
      // Use OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: message }
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        return NextResponse.json({
          message: data.choices[0].message.content
        })
      }
    }

    // Fallback to rule-based responses
    return NextResponse.json({
      message: getFallbackResponse(message)
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({
      message: getFallbackResponse('')
    })
  }
}

function getFallbackResponse(query) {
  const lowerQuery = query.toLowerCase()
  
  if (lowerQuery.includes('service') || lowerQuery.includes('offer') || lowerQuery.includes('hire') || lowerQuery.includes('work')) {
    return "I offer professional services including:\n\n💻 Full Stack Web Development - Complete web applications with modern tech stack\n👤 Portfolio Creation - Professional portfolios that stand out\n📄 Landing Pages - High-converting landing pages\n🎨 UI/UX Designing - Beautiful and intuitive user interfaces\n\nWould you like to inquire about any of these services?"
  }
  
  if (lowerQuery.includes('project')) {
    return "I've worked on several exciting projects! 🚀\n\n• Solar Power Generation Predictor - AI/ML with Flask for accurate predictions\n• Drop&Pop - OpenCV hand gesture game with MediaPipe\n• Food Delivery Website - UI/UX design and implementation\n• Electricity Bill Management System - Full stack with MySQL and PHP\n\nEach showcases different aspects of my Full Stack Development, AI, and UI/UX skills!"
  }
  
  if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech stack')) {
    return "My technical toolkit includes:\n\n💻 Web Development: HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS\n⚙️ Backend: Node.js, Express, MySQL, PHP\n🐍 Programming: Python, Java, C, Flask, OpenCV\n🎨 Design: UI/UX, Canva, Figma\n\nI'm particularly passionate about Full Stack Development and Python!"
  }
  
  if (lowerQuery.includes('education') || lowerQuery.includes('college') || lowerQuery.includes('study')) {
    return "I'm currently in my second year of B.Tech in Information Technology at M Kumarasamy College of Engineering, Karur (2023-2027). I've maintained a CGPA of 8.3 and I'm really enjoying the journey! 📚\n\nBefore this, I completed my Higher Secondary at SMBM Matric Hr Sec School with 89%."
  }
  
  if (lowerQuery.includes('experience') || lowerQuery.includes('internship')) {
    return "My professional journey includes:\n\n💼 Full Stack Developer at Technology Innovation Hub (2025 - Present)\n💼 Full Stack Development Internship at E-Soft Technologies (December 2024)\n💼 Python Development Internship at Technohacks Edutech (July-August 2024)\n\nI've gained hands-on experience in building real-world applications!"
  }
  
  if (lowerQuery.includes('why') || lowerQuery.includes('choose') || lowerQuery.includes('best') || lowerQuery.includes('hire')) {
    return "Here's why I stand out: ✨\n\n• Strong technical foundation across full stack\n• Creative problem-solving approach\n• Fast learner who loves new challenges\n• Focus on clean, maintainable code\n• Understanding of UX and business goals\n• Collaborative team player\n\nI bring both technical expertise and genuine passion for technology!"
  }
  
  if (lowerQuery.includes('certification') || lowerQuery.includes('course') || lowerQuery.includes('learn')) {
    return "I'm committed to continuous learning! 📜\n\nKey certifications:\n• Cloud Computing (NPTEL)\n• SQL (Coursera)\n• Oracle AI certifications (Generative AI Professional & AI Foundations Associate)\n• Full Stack Development\n• UI/UX Design\n• CyberSecurity (Cisco, TCS)\n\nAlways staying updated with the latest technologies!"
  }
  
  if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach') || lowerQuery.includes('connect')) {
    return "I'd love to connect with you! 📧\n\n• Email: dharshinipriya.a426@gmail.com\n• GitHub: dharshu2303\n• LinkedIn: dharshini-priya-a-74a446290\n• Location: Dindigul, Tamil Nadu\n\nFeel free to reach out anytime!"
  }
  
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
    return "Hello! I'm Dharshini, a passionate Full Stack Developer and UI/UX Designer. 👋\n\nI love building user-friendly applications and exploring new technologies. What would you like to know about me?"
  }
  
  if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('rate')) {
    return "Pricing varies based on project scope and requirements. I'd be happy to discuss your specific needs and provide a custom quote.\n\nWould you like to inquire about a specific service? I offer:\n• Full Stack Web Development\n• Portfolio Creation\n• Landing Pages\n• UI/UX Designing"
  }
  
  if (lowerQuery.includes('time') || lowerQuery.includes('duration') || lowerQuery.includes('how long')) {
    return "Project timelines depend on complexity and requirements:\n\n⚡ Landing Page: 3-5 days\n💼 Portfolio: 5-7 days\n🎨 UI/UX Design: 7-10 days\n🚀 Full Stack Web App: 2-4 weeks\n\nI can provide a more accurate timeline once I understand your specific needs!"
  }
  
  return "That's an interesting question! I'd be happy to tell you more about:\n\n• My projects and experience 🚀\n• Technical skills and technologies 💻\n• Professional services I offer 💼\n• How to get in touch 📧\n\nWhat interests you most? 🤔"
}
