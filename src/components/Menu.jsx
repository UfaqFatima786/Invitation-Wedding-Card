import { motion } from 'framer-motion'
import { menu } from '../data.js'
import GoldIcon from './GoldIcon.jsx'

export default function Menu() {
  return (
    <section className="section menu">
      <h2 className="script title">Dawat Menu</h2>
      <div className="menu-list">
        {menu.map((d, i) => (
          <motion.div
            key={d.name}
            className="card dish"
            initial={{ opacity: 0, x: i % 2 ? 90 : -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 14 }}
          >
            <GoldIcon name={d.icon} className="dish-icon" delay={0.3} />
            <div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}