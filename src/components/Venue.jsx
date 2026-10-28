import { motion } from 'framer-motion'
import { invite } from '../data.js'

export default function Venue() {
  return (
    <section className="section venue">
      <motion.h2
        className="script title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Venue
      </motion.h2>

      <motion.div
        className="card venue-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="pin-wrap">
          <motion.span
            className="pulse"
            animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <span className="pin">📍</span>
        </div>
        <h3>{invite.venueName}</h3>
        <p>{invite.venueAddress}</p>
        <div className="times">
          <div>
            <small>Nikkah</small>
            <b>{invite.nikkahTime}</b>
          </div>
          <div>
            <small>Barat</small>
            <b>{invite.barat}</b>
          </div>
        </div>
        <a className="open-btn" href={invite.mapsLink} target="_blank" rel="noreferrer">
          Open in Maps
        </a>
      </motion.div>
    </section>
  )
}
