'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      const offset = 70
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-darker-bg/95 shadow-lg shadow-neon-blue/20'
          : 'bg-dark-bg/90'
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 relative">
              <Image
                src="/brand.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="ml-2 text-xl font-bold text-white">
              <span className="neon-text">Dharshini</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, '#skills')}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={(e) => scrollToSection(e, '#education')}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              Education
            </a>
            <a
              href="#certifications"
              onClick={(e) => scrollToSection(e, '#certifications')}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              Certifications
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-neon"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#hero"
                onClick={(e) => scrollToSection(e, '#hero')}
                className="text-white hover:text-neon-blue transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, '#about')}
                className="text-white hover:text-neon-blue transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, '#skills')}
                className="text-white hover:text-neon-blue transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="text-white hover:text-neon-blue transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#education"
                onClick={(e) => scrollToSection(e, '#education')}
                className="text-white hover:text-neon-blue transition-colors duration-300"
              >
                Education
              </a>
              <a
                href="#certifications"
                onClick={(e) => scrollToSection(e, '#certifications')}
                className="text-white hover:text-neon-blue transition-colors duration-300"
              >
                Certifications
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn-neon inline-block text-center"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
