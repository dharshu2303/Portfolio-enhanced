import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { service, name, email, contact } = await request.json()

    // Validate required fields
    if (!service || !name || !email || !contact) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // In a production environment, you would use a service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend
    // - EmailJS

    // For demonstration, we'll use FormSubmit or a similar service
    // You can also integrate with your backend Express server

    const emailContent = {
      to: 'dharshinipriya.a426@gmail.com',
      subject: `New Service Inquiry: ${service}`,
      text: `
New Service Inquiry Received!

Service: ${service}
Name: ${name}
Email: ${email}
Contact: ${contact}

Please respond to this inquiry within 24 hours.

---
Sent from Dharshini's Portfolio Chatbot
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0a67a1 0%, #FF00F5 100%); border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 8px;">
            <h2 style="color: #0a67a1; margin-bottom: 20px;">🎉 New Service Inquiry!</h2>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0a67a1;">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Contact:</strong> ${contact}</p>
            </div>
            
            <p style="color: #666;">Please respond to this inquiry within 24 hours.</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; text-align: center;">
              <p style="color: #999; font-size: 12px;">Sent from Dharshini's Portfolio Chatbot</p>
            </div>
          </div>
        </div>
      `
    }

    // Option 1: Use FormSubmit (no API key needed)
    // This sends an email to your address via FormSubmit service
    const formSubmitResponse = await fetch('https://formsubmit.co/ajax/dharshinipriya.a426@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New Service Inquiry: ${service}`,
        _template: 'box',
        _captcha: 'false',
        service: service,
        name: name,
        email: email,
        contact: contact,
        message: `Service inquiry for ${service} from ${name}`
      })
    })

    if (formSubmitResponse.ok) {
      return NextResponse.json({ 
        success: true,
        message: 'Service inquiry sent successfully!'
      })
    }

    // Fallback: Log the inquiry (in production, save to database)
    console.log('Service Inquiry:', { service, name, email, contact })

    return NextResponse.json({ 
      success: true,
      message: 'Service inquiry received! We will contact you soon.'
    })

  } catch (error) {
    console.error('Service inquiry error:', error)
    return NextResponse.json(
      { error: 'Failed to process service inquiry' },
      { status: 500 }
    )
  }
}
