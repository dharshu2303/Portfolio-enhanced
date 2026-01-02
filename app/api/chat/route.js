import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are an AI assistant for Dharshini Priya A's portfolio. You speak on behalf of Dharshini in a professional yet friendly tone.

Key Information:
- Name: Dharshini Priya A
- Role: Full Stack Developer & UI/UX Designer
- Age: 19
- Location: Dindigul, Tamil Nadu, India
- Email: dharshinipriya.a426@gmail.com
- College: M Kumarasamy College of Engineering, Karur (B.Tech IT, 2023-2027, CGPA: 8.3)

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

Certifications:
- Cloud Computing (NPTEL), SQL (Coursera), Oracle AI certifications, Full Stack Development, and more

Interests: Full Stack Development, UI/UX Design, Python Development, AI/ML

Respond as if you are Dharshini herself - enthusiastic, knowledgeable, and passionate about technology.`

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
  
  if (lowerQuery.includes('project')) {
    return "I've worked on several exciting projects! My Solar Power Generation Predictor uses AI/ML with Flask for accurate predictions. Drop&Pop is an innovative OpenCV-based game controlled by hand gestures using MediaPipe. I also designed and developed a Food Delivery Website focusing on great UI/UX, and built an Electricity Bill Management System as a full-stack application with MySQL and PHP."
  }
  
  if (lowerQuery.includes('skill') || lowerQuery.includes('technology')) {
    return "I'm proficient in a wide range of technologies! For web development, I work with HTML5, CSS3, JavaScript, React.js, Next.js, and Tailwind CSS. On the backend, I use Node.js, Express, MySQL, and PHP. I'm also skilled in Python (including Flask and OpenCV), Java, and C. Plus, I have a strong foundation in UI/UX design using tools like Canva and Figma!"
  }
  
  if (lowerQuery.includes('education') || lowerQuery.includes('college')) {
    return "I'm currently in my second year of B.Tech in Information Technology at M Kumarasamy College of Engineering, Karur. I've maintained a CGPA of 8.3 and I'm really enjoying the journey! Before this, I completed my Higher Secondary at SMBM Matric Hr Sec School with 89%."
  }
  
  if (lowerQuery.includes('hire') || lowerQuery.includes('why')) {
    return "I believe I'd be a great fit because I bring together technical skills, creativity, and genuine passion for technology. I'm a fast learner who loves taking on new challenges, and I focus on writing clean, maintainable code. My projects show that I don't just code—I think about user experience and business value. Plus, I'm a collaborative team player who communicates well!"
  }
  
  if (lowerQuery.includes('certification') || lowerQuery.includes('course')) {
    return "I'm committed to continuous learning! I've earned certifications in Cloud Computing from NPTEL, SQL from Coursera, and Oracle AI certifications including Generative AI Professional and AI Foundations Associate. I've also completed courses in Full Stack Development, UI/UX Design, Prompt Engineering, and CyberSecurity from institutions like IBM, Cisco, and TCS."
  }
  
  if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
    return "I'd love to connect with you! You can reach me at dharshinipriya.a426@gmail.com. I'm also active on GitHub (dharshu2303) and LinkedIn. Feel free to reach out anytime—I'm always excited to discuss new opportunities or interesting tech projects!"
  }
  
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
    return "Hello! I'm Dharshini, a passionate Full Stack Developer and UI/UX Designer. I love building user-friendly applications and exploring new technologies. What would you like to know about me?"
  }
  
  return "That's a great question! I'd be happy to tell you more about my projects, skills, education, certifications, or anything else you'd like to know. What interests you most?"
}
