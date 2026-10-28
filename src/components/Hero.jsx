import { motion } from 'framer-motion'
import { invite } from '../data.js'

const letters = (text, base) =>
  text.split('').map((c, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay: base + i * 0.08, duration: 0.6 }}
      style={{ display: 'inline-block' }}
    >
      {c}
    </motion.span>
  ))

export default function Hero({ show }) {
  return (
    <section className="hero">
      {show && (
        <>
          <motion.p
            className="arabic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            بسم اللہ الرحمن الرحیم
          </motion.p>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            The Nikkah of
          </motion.p>

          <h1 className="names script">
            <span>{letters(invite.groom, 2)}</span>
            <motion.span
              className="amp"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2.6, type: 'spring' }}
            >
              &amp;
            </motion.span>
            <span>{letters(invite.bride, 3)}</span>
          </h1>

          <motion.p
            className="date"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4 }}
          >
            {invite.date}
          </motion.p>

          <motion.div
            className="scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.6 }}
          >
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >
              ⌄
            </motion.div>
          </motion.div>
        </>
      )}
    </section>
  )
}
