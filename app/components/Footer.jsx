'use client'

export default function Footer() {
  return (
    <footer className="bg-darker-bg border-t border-neon-blue/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} <span className="neon-pink">Dharshini Priya A</span>. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/dharshu2303"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dharshini-priya-a-74a446290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="mailto:dharshinipriya.a426@gmail.com"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
