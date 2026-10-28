import { motion } from 'framer-motion'

export default function MusicButton({ playing, onClick }) {
  return (
    <motion.button
      className="music-btn"
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.5, type: 'spring' }}
      aria-label={playing ? 'Pause music' : 'Play music'}
    >
      <motion.span
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={playing ? { repeat: Infinity, duration: 4, ease: 'linear' } : {}}
        style={{ display: 'inline-block' }}
      >
        {playing ? '🎵' : '🔇'}
      </motion.span>
    </motion.button>
  )
}
