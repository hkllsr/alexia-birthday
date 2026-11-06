import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export function Reveal({ children, delay = 0, y = 26, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

// Shows the photo, or a soft placeholder if the file hasn't been added yet.
export function Photo({ src, alt = '', ratio = '4/3', className = '' }) {
  const [failed, setFailed] = useState(!src)
  return failed ? (
    <div className={`photo-empty ${className}`} style={{ aspectRatio: ratio }}>
      <span>♡</span><small>your photo goes here</small><em>{src}</em>
    </div>
  ) : (
    <img className={className} src={asset(src)} alt={alt} loading="lazy" style={{ aspectRatio: ratio }} onError={() => setFailed(true)} />
  )
}

export function SectionTitle({ kicker, title, note }) {
  return (
    <Reveal className="section-title">
      <span className="hand">{kicker}</span>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </Reveal>
  )
}

export function Hearts() {
  const items = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    left: Math.round(Math.random() * 100), size: 10 + Math.round(Math.random() * 14),
    dur: 14 + Math.round(Math.random() * 14), delay: -Math.round(Math.random() * 20), ch: i % 3 === 0 ? '✦' : '♡',
  })), [])
  return (
    <div className="hearts" aria-hidden="true">
      {items.map((h, i) => (
        <span key={i} style={{ left: `${h.left}%`, fontSize: h.size, animationDuration: `${h.dur}s`, animationDelay: `${h.delay}s` }}>{h.ch}</span>
      ))}
    </div>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <button className={`btt ${show ? 'on' : ''}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp size={18} />
    </button>
  )
}
