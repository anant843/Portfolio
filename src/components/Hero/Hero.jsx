import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiSend } from 'react-icons/fi'
import TypeWriter from './TypeWriter'
import profilePic from '../../assets/images/profile.jpg'

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-radial" aria-hidden="true" />

      <div className="hero-grid-container">
        {/* Left: Content */}
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="dot" />
            <span>Available for New Opportunities</span>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Anant Singh <span className="gradient-text">Shishodia</span>
          </motion.h1>

          <motion.div
            className="hero-role-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span>I am a</span>
            <TypeWriter />
          </motion.div>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Information Technology student passionate about building scalable web
            applications, modern user experiences, and intelligent software
            solutions.
          </motion.p>

          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="/Anant_Resume.pdf"
              download="Anant_Resume.pdf"
              className="btn-primary"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollTo('projects')}
              className="btn-secondary"
            >
              <span>View Projects</span>
              <FiArrowRight />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="btn-secondary"
            >
              <FiSend />
              <span>Contact Me</span>
            </button>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a
              href="https://github.com/anant843"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/anant-singh-shishodia"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:anantthakur2005@gmail.com"
              className="social-icon-btn"
              aria-label="Send Email"
            >
              <FiMail />
            </a>
          </motion.div>
        </div>

        {/* Right: Professional Circular Photo */}
        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="avatar-ambient-glow" aria-hidden="true" />
          <div className="avatar-circle-outer">
            <div className="avatar-circle-inner">
              <img
                src={profilePic}
                alt="Anant Singh Shishodia"
                className="avatar-photo"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
