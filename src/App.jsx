import './App.css'

// Modular Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBg from './components/Hero/ParticlesBg'

export default function App() {
  return (
    <div className="portfolio revealed">
      {/* Background Atmosphere */}
      <ParticlesBg />
      <div className="aurora a1" />
      <div className="aurora a2" />
      <div className="aurora a3" />
      <div className="aurora a4" />

      {/* Global Navigation */}
      <Navbar />

      {/* Page Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
