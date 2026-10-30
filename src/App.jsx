import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Gate from './components/Gate.jsx'
import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import Venue from './components/Venue.jsx'
import Barat from './components/Barat.jsx'
import DressCode from './components/DressCode.jsx'
import Menu from './components/Menu.jsx'
import MusicButton from './components/MusicButton.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import { invite } from './data.js'

export default function App() {
  const [open, setOpen] = useState(false)
  const [gone, setGone] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [musicError, setMusicError] = useState(false)
  const audioRef = useRef(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    document.body.style.overflow = open ? 'auto' : 'hidden'
  }, [open])

  const handleOpen = () => {
    setOpen(true)

    setTimeout(() => setGone(true), 3500)
  }

  const toggleMusic = async () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      try {
        await a.play()
        setPlaying(true)
        setMusicError(false)
      } catch {
        setPlaying(false)
        setMusicError(true)
      }
    } else {
      a.pause()
      setPlaying(false)
      setMusicError(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={invite.song} loop preload="none" />
      {!gone && <Gate open={open} onOpen={handleOpen} />}
      <motion.div
        aria-hidden="true"
        className="scroll-progress"
        style={{ scaleX: scrollYProgress, opacity: open ? 1 : 0 }}
      />
      <main>
        <Hero show={open} />
        <ScrollReveal><Countdown /></ScrollReveal>
        <ScrollReveal><Venue /></ScrollReveal>
        <ScrollReveal><Barat /></ScrollReveal>
        <ScrollReveal><DressCode /></ScrollReveal>
        <ScrollReveal><Menu /></ScrollReveal>
        <ScrollReveal>
          <footer className="footer">
            <div className="footer-panel">
              <span className="footer-ornament" aria-hidden="true">✦</span>
              <p className="script">Jazak Allah Khair</p>
              <p>Aap ki tashreef hamari khushi dugni kar degi</p>
              <span className="footer-divider" aria-hidden="true" />
            </div>
          </footer>
        </ScrollReveal>
      </main>
      {open && <MusicButton playing={playing} error={musicError} onClick={toggleMusic} />}
    </>
  )
}