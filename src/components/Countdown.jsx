import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { invite } from '../data.js'

const css = `
.countdown {
  position: relative;
  overflow: hidden;
  padding: 48px 20px 60px;
  background:
    radial-gradient(ellipse at 12% 50%, rgba(232, 183, 162, 0.2), transparent 34%),
    radial-gradient(ellipse at 88% 50%, rgba(230, 195, 126, 0.24), transparent 36%);
}

.countdown-inner {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.countdown-label {
  margin: 0 0 22px;
  color: #9a604b;
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(10px, 3vw, 22px);
}

.countdown-unit {
  position: relative;
  padding: clamp(16px, 4vw, 24px) 8px;
  border: 1px solid rgba(168, 119, 43, 0.35);
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(255, 253, 245, 0.95), rgba(241, 220, 179, 0.78));
  box-shadow: 0 14px 30px rgba(112, 76, 35, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.7);
}

.countdown-number {
  display: block;
  color: #80551c;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.7rem, 6vw, 3rem);
  line-height: 1.05;
  font-variant-numeric: tabular-nums;
}

.countdown-unit span:last-child {
  display: block;
  margin-top: 8px;
  color: #9a604b;
  font-family: 'Cinzel', serif;
  font-size: clamp(0.55rem, 2vw, 0.7rem);
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.countdown-finished {
  color: #80551c;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.35rem, 4vw, 1.8rem);
}

@media (max-width: 380px) {
  .countdown {
    padding: 40px 14px 46px;
  }

  .countdown-label {
    font-size: 0.64rem;
    letter-spacing: 0.18em;
    line-height: 1.6;
  }

  .countdown-grid {
    gap: 7px;
  }

  .countdown-unit {
    border-radius: 15px;
    padding-right: 4px;
    padding-left: 4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .countdown-unit {
    transition: none;
  }
}
`

const units = [
  ['days', 'Days'],
  ['hours', 'Hours'],
  ['minutes', 'Minutes'],
  ['seconds', 'Seconds'],
]

function getTimeLeft() {
  const difference = Math.max(0, new Date(invite.eventDateTime).getTime() - Date.now())

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    finished: difference === 0,
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="countdown" aria-label="Wedding countdown">
      <style>{css}</style>
      <div className="countdown-inner">
        <p className="countdown-label">Counting down to our special day</p>

        {timeLeft.finished ? (
          <p className="countdown-finished">Today is the day — let the celebrations begin!</p>
        ) : (
          <div className="countdown-grid">
            {units.map(([key, label], index) => (
              <motion.div
                key={key}
                className="countdown-unit"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="countdown-number">{String(timeLeft[key]).padStart(2, '0')}</span>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
