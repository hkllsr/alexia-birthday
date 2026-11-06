import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Opening from './components/Opening.jsx'
import Nav from './components/Nav.jsx'
import Music from './components/Music.jsx'
import { Hearts, BackToTop } from './components/Extras.jsx'
import Gallery from './components/Gallery.jsx'
import { Hero, Timeline, Poems, Letter, Loves, Closing } from './components/Sections.jsx'

export default function App() {
  const [open, setOpen] = useState(false)
  const replay = () => { window.scrollTo({ top: 0 }); setOpen(false) }

  return (
    <>
      <Hearts />
      <Music />
      <AnimatePresence mode="wait">
        {!open ? (
          <Opening key="opening" onOpen={() => setOpen(true)} />
        ) : (
          <motion.main key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            <Nav />
            <Hero />
            <Timeline />
            <Gallery />
            <Poems />
            <Letter />
            <Loves />
            <Closing onReplay={replay} />
            <BackToTop />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
