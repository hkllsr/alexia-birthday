import { useRef, useState } from 'react'
import { Play, Pause, Music2 } from 'lucide-react'
import { content } from '../data/content.js'
import { asset } from './Extras.jsx'

export default function Music() {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)
  const toggle = async () => {
    const a = ref.current
    if (!a) return
    try { if (a.paused) { await a.play(); setPlaying(true) } else { a.pause(); setPlaying(false) } }
    catch { setMissing(true); setPlaying(false) }
  }
  const status = missing ? 'add your song in public/audio' : playing ? 'now playing' : 'paused'
  return (
    <div className="music">
      <audio ref={ref} src={asset(content.music.file)} loop preload="none" onError={() => setMissing(true)} />
      <button onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'}>{playing ? <Pause size={16} /> : <Play size={16} />}</button>
      <div><strong><Music2 size={12} /> {content.music.title}</strong><small>{status}</small></div>
    </div>
  )
}
