import { motion } from 'framer-motion'

export default function MusicButton({ playing, error, onClick }) {
  return (
    <motion.div
      className="music-control"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.5, type: 'spring' }}
    >
      <span className="music-status" aria-live="polite">
        {error
          ? 'Song unavailable · add public/song.mp3'
          : `Music ${playing ? 'on' : 'off'} · Tap to ${playing ? 'turn off' : 'play'}`}
      </span>
      <button
        className="music-btn"
        type="button"
        onClick={onClick}
        aria-label={playing ? 'Turn music off' : 'Play wedding song'}
        aria-pressed={playing}
        title={playing ? 'Turn music off' : 'Play wedding song'}
      >
        <motion.span
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={playing ? { repeat: Infinity, duration: 4, ease: 'linear' } : {}}
          style={{ display: 'inline-block' }}
        >
          {playing ? '🎵' : '🔇'}
        </motion.span>
      </button>
    </motion.div>
  )
}
