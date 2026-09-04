import { motion } from 'framer-motion'
import { FiBookOpen, FiAward, FiExternalLink } from 'react-icons/fi'
import SectionWrapper from '../SectionWrapper'

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management (DBMS)',
  'Operating Systems',
  'Computer Networks',
  'Full Stack Web Development',
]

const CERTIFICATIONS = [
  {
    name: 'Frontend Development',
    issuer: 'Simplilearn',
    year: '2025',
    tag: 'Web Development',
  },
  {
    name: 'Python for Data Science',
    issuer: 'Cognitive Class',
    year: '2024',
    tag: 'Data & AI',
  },
  {
    name: 'Career Advancement Bootcamp',
    issuer: 'Medha',
    year: '2022',
    tag: 'Professional Skills',
  },
]

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      badge="04 // Academics"
      title="Education & *Certifications*"
      subtitle="Academic foundation in Information Technology and verified industry certifications."
    >
      {/* Degree Card */}
      <motion.div
        className="glass-card edu-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="edu-header">
          <div>
            <div className="edu-badge-row">
              <FiBookOpen className="text-cyan-400 text-lg" />
              <span className="edu-type-label">Undergraduate Degree</span>
            </div>
            <h3 className="edu-degree">B.Tech in Information Technology</h3>
            <div className="edu-college">ABES Engineering College</div>
            <div className="edu-meta">2024 – 2027 • Ghaziabad, Uttar Pradesh, India</div>
          </div>

          <div className="edu-cgpa-box">
            <div className="edu-cgpa">7.5 / 10</div>
            <div className="edu-cgpa-label">Cumulative GPA</div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="edu-coursework">
          <div className="coursework-label">Core Technical Coursework</div>
          <div className="coursework-tags">
            {COURSEWORK.map((course) => (
              <span key={course} className="coursework-tag">
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Certifications */}
        <div className="cert-wrapper">
          <div className="cert-section-label">Verified Certifications</div>
          <div className="cert-list">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="cert-row">
                <div className="flex items-center gap-3">
                  <div className="cert-icon-box">
                    <FiAward className="text-cyan-400 text-sm" />
                  </div>
                  <div>
                    <span className="cert-name font-semibold text-white">
                      {cert.name}
                    </span>
                    <span className="cert-issuer text-xs text-slate-400 ml-2">
                      — {cert.issuer}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="cert-tag">{cert.tag}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
