import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: 'dharshinipriya.a426@gmail.com',
            subject: `New Contact Message from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #0a67a1 0%, #FF00F5 100%); border-radius: 10px;">
                <div style="background: white; padding: 30px; border-radius: 8px;">
                  <h2 style="color: #0a67a1; margin-bottom: 20px;">📨 New Contact Message</h2>
                  
                  <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                    <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0a67a1;">${email}</a></p>
                  </div>

                  <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #0a67a1; margin-bottom: 20px;">
                    <h3 style="margin-top: 0; color: #0a67a1;">Message:</h3>
                    <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </div>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; text-align: center;">
                    <p style="color: #999; font-size: 12px;">Sent from Dharshini's Portfolio</p>
                  </div>
                </div>
              </div>
            `
          })
        })

        if (resendResponse.ok) {
          return NextResponse.json({ 
            success: true,
            message: 'Message sent successfully!'
          })
        } else {
          console.error('Resend error:', await resendResponse.text())
          throw new Error('Failed to send with Resend')
        }
      } catch (resendError) {
        console.error('Resend API error:', resendError)
      }
    }

    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact message' },
      { status: 500 }
    )
  }
}
