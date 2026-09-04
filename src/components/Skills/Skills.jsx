import { motion } from 'framer-motion'
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCpu,
} from 'react-icons/fi'
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { TbSql, TbApi, TbDeviceMobile, TbBrandVscode } from 'react-icons/tb'
import SectionWrapper from '../SectionWrapper'

const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    icon: <FiCode />,
    skills: [
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'SQL', icon: <TbSql /> },
    ],
  },
  {
    name: 'Frontend',
    icon: <FiLayout />,
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'Material UI', icon: <SiMui /> },
      { name: 'Responsive Design', icon: <TbDeviceMobile /> },
    ],
  },
  {
    name: 'Backend',
    icon: <FiServer />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs', icon: <TbApi /> },
    ],
  },
  {
    name: 'Database',
    icon: <FiDatabase />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    name: 'Tools & Cloud',
    icon: <FiCpu />,
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'VS Code', icon: <TbBrandVscode /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'AWS Amplify', icon: <FaAws /> },
    ],
  },
]

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      badge="02 // Capabilities"
      title="Technical *Skills*"
      subtitle="Robust technical foundation spanning systems programming, modern frontend frameworks, backend architecture, and databases."
    >
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.name}
            className="glass-card skill-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="skill-card-header">
              <div className="skill-cat-icon">{category.icon}</div>
              <h3 className="skill-cat-name">{category.name}</h3>
            </div>

            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill.name} className="skill-tag">
                  <span className="skill-item-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
