import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import SectionWrapper from '../SectionWrapper'

const EXPERIENCES = [
  {
    role: 'Data Analytics Intern',
    company: '3Skill',
    period: 'Internship Experience',
    location: 'Remote',
    responsibilities: [
      'Worked with structured datasets to optimize queries and extract actionable metrics.',
      'Built interactive dashboards and reports to track and present business KPIs.',
      'Performed data cleaning, preprocessing, and exploratory analysis across multiple sources.',
      'Delivered business insights using visualization tools and automated reporting workflows.',
    ],
  },
]

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      badge="03 // Work History"
      title="Work *Experience*"
      subtitle="Hands-on professional experience, internship contributions, and software engineering deliverables."
    >
      <div className="timeline">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <motion.div
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />

            <motion.div
              className="glass-card exp-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="exp-badge">
                    <FiCalendar className="inline mr-1" />
                    {exp.period}
                  </span>
                  <span className="exp-badge">
                    <FiMapPin className="inline mr-1" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx}>
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
