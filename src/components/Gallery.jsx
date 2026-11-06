import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { content } from '../data/content.js'
import { Photo, Reveal, SectionTitle } from './Extras.jsx'

export default function Gallery() {
  const items = content.gallery
  const [i, setI] = useState(null)
  const step = (d) => setI((v) => (v + d + items.length) % items.length)

  useEffect(() => {
    if (i === null) return
    const key = (e) => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }
    window.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = '' }
  }, [i])

  const cur = i !== null ? items[i] : null
  return (
    <section id="gallery" className="section">
      <SectionTitle kicker="polaroids & little proofs" title="Our Memory Gallery" note="Tap a photo to hold the moment a little longer." />
      <div className="masonry">
        {items.map((p, n) => (
          <Reveal key={n} delay={(n % 3) * 0.08} className="mason-item">
            <figure className="polaroid" style={{ '--tilt': `${((n * 7) % 5) - 2}deg` }} onClick={() => setI(n)} tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setI(n)}>
              <span className="tape" />
              <Photo src={p.image} alt={p.title} ratio={p.ratio} />
              <figcaption className="hand">{p.title}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {cur && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setI(null)}>
            <button className="lb-x" aria-label="Close" onClick={() => setI(null)}><X /></button>
            <button className="lb-nav l" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1) }}><ChevronLeft /></button>
            <button className="lb-nav r" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1) }}><ChevronRight /></button>
            <motion.div key={i} className="lb-card" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }} onClick={(e) => e.stopPropagation()}>
              <Photo src={cur.image} alt={cur.title} ratio={cur.ratio} />
              <h3 className="hand">{cur.title}</h3>
              <p>{cur.description}</p>
              {cur.date && <small>{cur.date}</small>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
