import { motion } from 'framer-motion'
import { invite } from '../data.js'

const css = `
.venue-modern {
  position: relative;
  padding: 90px 20px 10px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 12% 35%, rgba(233, 179, 157, 0.18), transparent 38%),
    linear-gradient(180deg, rgba(255, 248, 235, 0.7), rgba(250, 231, 199, 0.62));
}

.venue-modern::before,
.venue-modern::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.7;
  z-index: 0;
}

.venue-modern::before {
  width: 420px;
  height: 420px;
  right: -120px;
  top: -120px;
  background: radial-gradient(circle, rgba(232, 198, 129, 0.68), rgba(232, 198, 129, 0) 70%);
}

.venue-modern::after {
  width: 340px;
  height: 340px;
  left: -120px;
  bottom: 30px;
  background: radial-gradient(circle, rgba(244, 220, 176, 0.7), rgba(244, 220, 176, 0) 70%);
}

.venue-shell {
  position: relative;
  z-index: 1;
  max-width: 500px;
  margin: 0 auto;
  padding: 42px 28px 30px;
  border-radius: 34px;
  background: linear-gradient(145deg, #fff9e9 0%, #f8e8c4 58%, #f1d9a8 100%);
  border: 1px solid rgba(168, 119, 43, 0.4);
  box-shadow:
    0 26px 60px rgba(110, 75, 35, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.7),
    0 0 40px rgba(198, 146, 63, 0.12);
}

.venue-shell::before {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: 26px;
  border: 1px solid rgba(168, 119, 43, 0.23);
  pointer-events: none;
}

.venue-ribbon {
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid rgba(168, 119, 43, 0.32);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.74), rgba(241, 217, 168, 0.78));
  color: #80551c;
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.pin-wrap {
  position: relative;
  width: 86px;
  height: 86px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 252, 235, 0.95), rgba(226, 187, 113, 0.38));
  box-shadow: inset 0 0 0 1px rgba(168, 119, 43, 0.2), 0 8px 22px rgba(139, 90, 38, 0.12);
}

.pin-wrap::before,
.pin-wrap::after {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  border: 1px solid rgba(164, 115, 44, 0.35);
}

.pin-wrap::after {
  animation: venuePulse 2.8s ease-in-out infinite;
}

.pin {
  position: relative;
  z-index: 1;
  font-size: 2.5rem;
  filter: drop-shadow(0 8px 12px rgba(146, 91, 42, 0.2));
}

.venue-shell h3 {
  margin-bottom: 10px;
  font-size: clamp(2rem, 4vw, 2.7rem);
  color: #80551c;
  text-shadow: 0 2px 12px rgba(169, 119, 43, 0.14);
}

.venue-shell p {
  font-size: 1.18rem;
  color: #875f31;
  line-height: 1.6;
  font-style: italic;
}

.venue-times {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 26px 0 18px;
}

.time-pill {
  position: relative;
  padding: 18px 14px 16px;
  border-radius: 18px;
  background: linear-gradient(160deg, rgba(255, 253, 242, 0.9), rgba(237, 211, 159, 0.7));
  border: 1px solid rgba(153, 105, 39, 0.24);
}

.time-pill small {
  display: block;
  margin-bottom: 8px;
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #9a604b;
}

.time-pill b {
  display: block;
  font-size: 1.45rem;
  color: #80551c;
  font-weight: 600;
}

.venue-shell .open-btn {
  margin-top: 10px;
  color: #80551c;
  box-shadow: 0 12px 28px rgba(168, 105, 42, 0.35);
}

@keyframes venuePulse {
  0% {
    transform: scale(0.85);
    opacity: 0.8;
  }
  70% {
    transform: scale(1.32);
    opacity: 0;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@media (max-width: 480px) {
  .venue-shell {
    padding: 34px 18px 24px;
  }

  .venue-times {
    gap: 10px;
  }

  .venue-modern {
    padding: 72px 16px 48px;
  }

  .venue-shell h3 {
    font-size: 1.9rem;
  }

  .time-pill {
    padding: 16px 8px 14px;
  }

  .time-pill b {
    font-size: 1.2rem;
  }
}

@media (max-width: 360px) {
  .venue-ribbon {
    letter-spacing: 0.18em;
  }

  .venue-shell p {
    font-size: 1.05rem;
  }
}
`

export default function Venue() {
  return (
    <section className="section venue-modern">
      <style>{css}</style>

      <motion.h2
        className="script title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Venue
      </motion.h2>

      <motion.div
        className="venue-shell"
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="venue-ribbon">Wedding Venue</div>

        <div className="pin-wrap">
          <motion.span
            className="pulse"
            animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
          />
          <span className="pin"></span>
        </div>

        <h3>{invite.venueName}</h3>
        <p>{invite.venueAddress}</p>

        <div className="venue-times">
          <div className="time-pill">
            <small>Nikkah</small>
            <b>{invite.nikkahTime}</b>
          </div>
          <div className="time-pill">
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
