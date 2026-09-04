import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiTerminal, FiUsers, FiDollarSign, FiCheckSquare, FiVideo } from 'react-icons/fi'
import SectionWrapper from '../SectionWrapper'

const PROJECTS = [
  {
    title: 'AI Interview Preparation Platform',
    icon: <FiTerminal />,
    gradient: 'linear-gradient(135deg, #05263A 0%, #0A3B5A 50%, #064E3B 100%)',
    tag: 'AI / Multi-Agent System',
    description:
      'Built an AI-powered interview preparation platform using Gemini AI and LangGraph that generates personalized interview questions, analyzes responses, and helps candidates improve interview performance.',
    tech: ['React', 'Node.js', 'Python', 'FastAPI', 'Gemini AI', 'LangGraph'],
    github: 'https://github.com/anant843',
    demo: 'https://github.com/anant843',
  },
  {
    title: 'Pro Screen Recorder',
    icon: <FiVideo />,
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #071A26 50%, #032b43 100%)',
    tag: 'Web Media / Browser Tool',
    description:
      'Engineered a sleek web-based screen recording suite with full screen, window, or tab capture, microphone audio integration, IndexedDB local gallery, and zero-server client-side privacy using MediaRecorder API.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'MediaRecorder API', 'IndexedDB', 'Vite'],
    github: 'https://github.com/anant843/Pro-Screen-Recorder-main',
    demo: 'https://pro-screen-recorder-main.vercel.app',
  },
  {
    title: 'Full-Stack Voting Application',
    icon: <FiCheckSquare />,
    gradient: 'linear-gradient(135deg, #032b43 0%, #071A26 50%, #1e1b4b 100%)',
    tag: 'Full-Stack / Auth & Security',
    description:
      'Engineered a secure full-stack voting system with Aadhaar-based authentication, candidate lifecycle management, one-person-one-vote enforcement, real-time analytics with Recharts, and role-based access control.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/anant843/Voting-Application',
    demo: 'https://github.com/anant843/Voting-Application',
  },
  {
    title: 'Employee Management System',
    icon: <FiUsers />,
    gradient: 'linear-gradient(135deg, #071A26 0%, #1E293B 50%, #0F172A 100%)',
    tag: 'Full-Stack Web App',
    description:
      'Developed a full-stack employee management system with authentication, employee records, attendance tracking, and role-based access control.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/anant843',
    demo: 'https://github.com/anant843',
  },
  {
    title: 'Expense Tracker Dashboard',
    icon: <FiDollarSign />,
    gradient: 'linear-gradient(135deg, #022c22 0%, #071A26 50%, #0A3B5A 100%)',
    tag: 'Fintech Dashboard',
    description:
      'Created a modern finance dashboard with expense tracking, category analysis, visual reports, and responsive UI.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com/anant843',
    demo: 'https://github.com/anant843',
  },
]

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      badge="05 // Portfolio"
      title="Featured *Projects*"
      subtitle="Production-grade full-stack applications, intelligent AI tools, and high-performance frontend interfaces."
    >
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="project-thumb">
              <div
                className="project-thumb-inner"
                style={{ background: project.gradient }}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="text-3xl text-cyan-400 opacity-80">
                    {project.icon}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-slate-300 font-mono">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="project-thumb-overlay" />
            </div>

            <div className="project-body">
              <span className="project-year">FEATURED PROJECT</span>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn github"
                >
                  <FiGithub />
                  <span>Source Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn demo"
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
