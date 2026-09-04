import { useState, useEffect } from 'react'

const DEFAULT_ROLES = [
  'Software Developer',
  'Frontend Developer',
  'Full Stack Developer',
  'React Developer',
  'Problem Solver',
  'Tech Enthusiast',
]

export default function TypeWriter({ roles = DEFAULT_ROLES, speed = 80, pause = 2000, deleteSpeed = 40 }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex]
    let timer

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        }, speed)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, pause)
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1))
        }, deleteSpeed)
      } else {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRoleIndex, roles, speed, pause, deleteSpeed])

  return (
    <span className="tw-wrapper inline-flex items-center">
      <span className="tw-role">{displayText}</span>
      <span className="tw-cur" aria-hidden="true">|</span>
    </span>
  )
}
