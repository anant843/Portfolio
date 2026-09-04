import { motion } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '', badge = '', title = '', subtitle = '' }) {
  return (
    <section id={id} className={`page-section ${className}`}>
      <div className="section-inner">
        {(badge || title) && (
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {badge && <span className="section-badge">{badge}</span>}
            {title && (
              <h2 className="section-title">
                {title.split('*').map((part, i) =>
                  i % 2 === 1 ? <span key={i}>{part}</span> : part
                )}
              </h2>
            )}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
