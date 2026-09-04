import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-badge mb-4">05 // GET IN TOUCH</span>

          <h2 className="contact-heading">
            Let's Build <span>Something Amazing</span> Together
          </h2>

          <p className="contact-subtext">
            Whether you have an upcoming project, software engineering opportunity,
            or simply want to connect — my inbox is always open.
          </p>

          <div className="contact-links-row">
            <a
              href="mailto:anantthakur2005@gmail.com"
              className="contact-link-item"
              id="contact-email"
            >
              <FiMail />
              <span>anantthakur2005@gmail.com</span>
            </a>

            <a
              href="tel:+919456986961"
              className="contact-link-item"
              id="contact-phone"
            >
              <FiPhone />
              <span>+91 94569 86961</span>
            </a>

            <a
              href="https://linkedin.com/in/anant-singh-shishodia"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
              id="contact-linkedin"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/anant843"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
              id="contact-github"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="mailto:anantthakur2005@gmail.com"
              className="btn-primary"
            >
              <FiMail />
              <span>Say Hello Directly</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
