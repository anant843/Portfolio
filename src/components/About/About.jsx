import { motion } from 'framer-motion'
import { FiAward, FiLayers, FiCode, FiZap } from 'react-icons/fi'
import SectionWrapper from '../SectionWrapper'

const STATS = [
  { value: '10+', label: 'Projects' },
  { value: '300+', label: 'DSA Problems' },
  { value: '7.5', label: 'CGPA' },
  { value: '1+', label: 'Internship Experience' },
]

const ACHIEVEMENTS = [
  {
    icon: <FiAward />,
    title: 'Data Analytics Internship Completed',
    subtitle: 'Successfully analyzed structured datasets and delivered stakeholder dashboards at 3Skill.',
  },
  {
    icon: <FiLayers />,
    title: 'Built Multiple Full Stack Projects',
    subtitle: 'Engineered production-level MERN and AI applications with end-to-end cloud deployments.',
  },
  {
    icon: <FiCode />,
    title: 'Strong Foundation in DSA & Problem Solving',
    subtitle: 'Solved 300+ Data Structures and Algorithms problems across competitive programming platforms.',
  },
  {
    icon: <FiZap />,
    title: 'Active Learner of AI & Modern Web Tech',
    subtitle: 'Constantly adopting cutting-edge developer tools, LLM multi-agent systems, and modern frameworks.',
  },
]

export default function About() {
  return (
    <SectionWrapper
      id="about"
      badge="01 // Profile"
      title="About *Me*"
      subtitle="Engineering digital products with high performance, elegant UI, and modern stack."
    >
      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>
            I'm an Information Technology student at ABES Engineering College
            with strong interests in Software Development, Frontend Engineering,
            and Full Stack Applications.
          </p>
          <p>
            I enjoy creating fast, scalable, and user-focused products using
            React, Node.js, Python, and modern web technologies.
          </p>
          <p>
            My goal is to contribute to impactful software products while
            continuously improving my engineering and problem-solving skills.
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="glass-card stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="about-subheading" aria-hidden="true">
        <span>Key Highlights & Focus</span>
      </div>

      <div className="achievements-grid">
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={item.title}
            className="glass-card achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="achievement-icon">
              {item.icon}
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
