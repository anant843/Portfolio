import { useEffect, useRef } from 'react'

export default function ParticlesBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate balanced star/particle field with neon cyan and subtle cold white hues
    const particleCount = Math.min(Math.floor(window.innerWidth / 11), 130)
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      baseAlpha: Math.random() * 0.5 + 0.15,
      phase: Math.random() * Math.PI * 2,
      freq: Math.random() * 0.015 + 0.005,
      isCyan: Math.random() > 0.45,
    }))

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw subtle grid intersection dots or connections if nearby
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.phase += p.freq
        const alpha = p.baseAlpha * (0.55 + 0.45 * Math.sin(p.phase))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.isCyan
          ? `rgba(34, 211, 238, ${alpha})`
          : `rgba(203, 213, 225, ${alpha})`
        ctx.fill()

        p.x = (p.x + p.vx + canvas.width) % canvas.width
        p.y = (p.y + p.vy + canvas.height) % canvas.height
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <canvas ref={canvasRef} className="star-canvas" aria-hidden="true" />
    </>
  )
}
