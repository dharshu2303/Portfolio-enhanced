import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const metadata = {
  title: 'Dharshini Priya A - Full Stack Developer & UI/UX Designer',
  description: 'Portfolio of Dharshini Priya A, a Full Stack Developer and UI/UX Designer specializing in web development, Python, and modern technologies.',
  keywords: 'Full Stack Developer, UI/UX Designer, Web Development, Python, React, Next.js, Portfolio',
  authors: [{ name: 'Dharshini Priya A' }],
  openGraph: {
    title: 'Dharshini Priya A - Full Stack Developer',
    description: 'Portfolio showcasing projects and skills in Full Stack Development and UI/UX Design',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="/particles.min.js" defer></script>
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
