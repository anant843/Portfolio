import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const scrollPos = window.scrollY + 140
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i]
        const element = document.getElementById(item.id)
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(item.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <button
        className="nav-brand"
        onClick={() => scrollTo('hero')}
        aria-label="Scroll to top"
      >
        Anant
      </button>

      <button
        id="hamburger-btn"
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              id={`nav-${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
