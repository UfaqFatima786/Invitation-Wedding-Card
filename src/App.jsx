import { useEffect, useRef, useState } from 'react'
import Gate from './components/Gate.jsx'
import Hero from './components/Hero.jsx'
import Venue from './components/Venue.jsx'
import Barat from './components/Barat.jsx'
import DressCode from './components/DressCode.jsx'
import Menu from './components/Menu.jsx'
import MusicButton from './components/MusicButton.jsx'
import { invite } from './data.js'

export default function App() {
  const [open, setOpen] = useState(false)
  const [gone, setGone] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'auto' : 'hidden'
  }, [open])

  const handleOpen = () => {
    setOpen(true)

    audioRef.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
    setTimeout(() => setGone(true), 3500)
  }

  const toggleMusic = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      a.play().then(() => setPlaying(true))
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={invite.song} loop preload="auto" />
      {!gone && <Gate open={open} onOpen={handleOpen} />}
      <main>
        <Hero show={open} />
        <Venue />
        <Barat />
        <DressCode />
        <Menu />
        <footer className="footer">
          <p className="script">Jazak Allah Khair</p>
          <p>Aap ki tashreef hamari khushi dugni kar degi</p>
        </footer>
      </main>
      {open && <MusicButton playing={playing} onClick={toggleMusic} />}
    </>
  )
}