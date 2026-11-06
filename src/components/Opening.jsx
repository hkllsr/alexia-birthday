import { useState } from 'react'
import { motion } from 'framer-motion'
import { content } from '../data/content.js'

export default function Opening({ onOpen }) {
  const [opening, setOpening] = useState(false)
  const { opening: o, name } = content
  const go = () => { if (opening) return; setOpening(true); setTimeout(onOpen, 1700) }

  return (
    <motion.section className="opening" exit={{ opacity: 0, scale: 1.04 }} transition={{ duration: 0.9 }}>
      <motion.div className="opening-inner" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}>
        <div className={`envelope ${opening ? 'is-open' : ''}`}>
          <div className="env-back" />
          <motion.div className="env-letter" animate={opening ? { y: -90 } : { y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}>
            <span className="hand">♡</span>
          </motion.div>
          <div className="env-front" />
          <motion.div className="env-flap" animate={{ rotateX: opening ? 180 : 0 }} transition={{ duration: 0.7 }} />
          <div className="env-seal">♡</div>
        </div>
        <p className="to">{o.to}</p>
        <h1>{name}.</h1>
        <p className="line">{o.line}</p>
        <button className="btn" onClick={go} disabled={opening}>{o.button}</button>
      </motion.div>
    </motion.section>
  )
}
