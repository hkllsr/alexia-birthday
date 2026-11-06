import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['Timeline', '#timeline'], ['Gallery', '#gallery'], ['Poems', '#poems'], ['Letter', '#letter'], ['Little things', '#loves']]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const go = (e, id) => { e.preventDefault(); setOpen(false); document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <nav className="nav">
      <span className="brand hand">Alexia's 18th</span>
      <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <ul className={open ? 'open' : ''}>
        {links.map(([t, id]) => <li key={id}><a href={id} onClick={(e) => go(e, id)}>{t}</a></li>)}
      </ul>
    </nav>
  )
}
