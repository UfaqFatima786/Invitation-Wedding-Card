import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GoldIcon from './Goldicon.jsx'

// Scroll karne par barat dulhan ke ghar ki taraf chalti hai
const procession = [
  { icon: 'dhol', cls: 'bar-icon' },
  { icon: 'trumpet', cls: 'bar-icon' },
  { icon: 'horse', cls: 'bar-horse' },
  { icon: 'family', cls: 'bar-icon' },
]

export default function Barat() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const w = typeof window !== 'undefined' ? window.innerWidth : 400
  const rowW = 400
  const x = useTransform(scrollYProgress, [0.15, 0.7], [-rowW, Math.max(0, w - rowW - 100)])
  const houseOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0.4, 1])
  const houseScale = useTransform(scrollYProgress, [0.5, 0.7], [0.9, 1.1])
  const petals = useTransform(scrollYProgress, [0.55, 0.75], [0, 1])

  return (
    <section className="section barat" ref={ref}>
      <h2 className="script title">Barat Aa Rahi Hai</h2>

      <div className="road">
        <motion.div className="house" style={{ opacity: houseOpacity, scale: houseScale }}>
          <GoldIcon name="palace" className="house-icon" strokeWidth={2.6} />
          <small>Dulhan ka ghar</small>
        </motion.div>

        <motion.div className="procession" style={{ x, width: rowW }}>
          {procession.map((p, i) => (
            <motion.div
              key={p.icon}
              animate={{ y: [0, -10, 0], rotate: [0, i % 2 ? 2 : -2, 0] }}
              transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15 }}
            >
              <GoldIcon name={p.icon} className={p.cls} strokeWidth={2.6} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="petals" style={{ opacity: petals }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.span
              key={i}
              animate={{ y: [0, 130], opacity: [1, 0], rotate: [0, 120] }}
              transition={{ repeat: Infinity, duration: 2.6, delay: i * 0.4 }}
              style={{ left: `${10 + i * 15}%` }}
            >
              <GoldIcon name="petal" className="petal-icon" strokeWidth={3} />
            </motion.span>
          ))}
        </motion.div>

        <div className="ground" />
      </div>
    </section>
  )
}