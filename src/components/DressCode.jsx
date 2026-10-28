import { motion } from 'framer-motion'
import { dress } from '../data.js'
import GoldIcon from './GoldIcon.jsx'

function Card({ info, from }) {
  return (
    <motion.div
      className="card dress-card"
      initial={{ opacity: 0, x: from }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <GoldIcon name={info.icon} className="dress-icon" delay={0.3} />
      <h3>{info.title}</h3>
      <p>{info.note}</p>
      <div className="swatches">
        {info.colors.map((c, i) => (
          <motion.span
            key={c}
            style={{ background: c }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + i * 0.15, type: 'spring' }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function DressCode() {
  return (
    <section className="section dress">
      <h2 className="script title">Dress Code</h2>
      <div className="dress-grid">
        <Card info={dress.girls} from={-80} />
        <Card info={dress.boys} from={80} />
      </div>
    </section>
  )
}