import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, RotateCcw } from 'lucide-react'
import { content } from '../data/content.js'
import { Photo, Reveal, SectionTitle } from './Extras.jsx'

export function Hero() {
  const h = content.hero
  return (
    <section className="hero">
      <Reveal><span className="hand eyebrow">{h.eyebrow}</span></Reveal>
      <Reveal delay={0.15}><h1>{h.heading}</h1></Reveal>
      <Reveal delay={0.3}><p className="name">{content.name}</p></Reveal>
      <Reveal delay={0.45}><blockquote>“{h.quote}”</blockquote></Reveal>
      <Reveal delay={0.6} className="hero-text">{h.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</Reveal>
      <div className="scroll-hint" aria-hidden="true">scroll ↓</div>
    </section>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="section">
      <SectionTitle kicker="chapter by chapter" title="Our Little Timeline" />
      <div className="timeline">
        {content.timeline.map((t, i) => (
          <Reveal key={i} className={`tl-item ${i % 2 ? 'alt' : ''}`}>
            <div className="tl-dot" />
            <div className="tl-photo"><Photo src={t.image} alt={t.title} ratio="4/3" /></div>
            <div className="tl-text">
              <span className="hand">{t.date}</span>
              <h3>{t.title}</h3>
              <p>{t.story}</p>
              {t.quote && <q>{t.quote}</q>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Poems() {
  const [sel, setSel] = useState(null)
  const poem = sel !== null ? content.poems[sel] : null
  return (
    <section id="poems" className="section dark-soft">
      <SectionTitle kicker="Poetry Corner" title="Words I Never Want to Lose" note="Pick a page and read it slowly." />
      <div className="poem-grid">
        {content.poems.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <button className="poem-card" onClick={() => setSel(i)}>
              <small>{p.mood}</small><h3>{p.title}</h3><span className="hand">open the page ♡</span>
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {poem && (
          <motion.div className="poem-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.article className="poem-page" initial={{ rotateY: -35, opacity: 0, y: 30 }} animate={{ rotateY: 0, opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }} onClick={(e) => e.stopPropagation()}>
              <button className="x" aria-label="Close" onClick={() => setSel(null)}><X size={20} /></button>
              <small>{poem.mood}</small>
              <h3>{poem.title}</h3>
              <div className="poem-lines">
                {poem.lines.map((l, i) => l === ''
                  ? <br key={i} />
                  : <motion.p key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.12 }}>{l}</motion.p>)}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export function Letter() {
  const [open, setOpen] = useState(false)
  const l = content.letter
  return (
    <section id="letter" className="section">
      <SectionTitle kicker="a letter for you" title="Dear You," />
      <Reveal>
        <div className="letter-wrap">
          {!open ? (
            <button className="btn" onClick={() => setOpen(true)}>{l.button}</button>
          ) : (
            <motion.div className="letter" initial={{ opacity: 0, scaleY: 0.2 }} animate={{ opacity: 1, scaleY: 1 }}
              style={{ transformOrigin: 'top' }} transition={{ duration: 1 }}>
              <p className="hand big">{l.greeting}</p>
              {l.paragraphs.map((p, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 1.1, duration: 0.9 }}>{p}</motion.p>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + l.paragraphs.length * 1.1 }}>
                <p className="hand big">{l.signoff}</p><p className="hand big sign">{l.from}</p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </Reveal>
    </section>
  )
}

export function Loves() {
  const [flip, setFlip] = useState(null)
  return (
    <section id="loves" className="section">
      <SectionTitle kicker="little things" title="Things I Love About You" note="Tap a card to straighten it." />
      <div className="loves">
        {content.loves.map((t, i) => (
          <Reveal key={i} delay={(i % 4) * 0.07}>
            <button className={`love ${flip === i ? 'on' : ''}`} style={{ '--r': `${((i * 37) % 9) - 4}deg` }} onClick={() => setFlip(flip === i ? null : i)}>
              <span className="pin">♡</span>{t}
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Closing({ onReplay }) {
  const c = content.closing
  return (
    <section className="section closing">
      <SectionTitle kicker="to more chapters with you" title={c.heading} />
      <Reveal><p className="closing-msg">{c.message}</p></Reveal>
      <Reveal delay={0.2}><p className="final hand">{c.final}</p></Reveal>
      <Reveal delay={0.4}><button className="btn ghost" onClick={onReplay}><RotateCcw size={16} /> {c.replay}</button></Reveal>
    </section>
  )
}
