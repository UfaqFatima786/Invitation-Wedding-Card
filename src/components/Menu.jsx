import { motion } from 'framer-motion'
import { menu } from '../data.js'
import GoldIcon from './Goldicon.jsx'

const css = `
.mn { position: relative; overflow: hidden; }
.mn-glow { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; opacity: .55; }
.mn-glow.a { width: 440px; height: 440px; right: -150px; top: 8%; background: radial-gradient(circle, #f3dca8, transparent 70%); animation: mnFloat 16s ease-in-out infinite alternate; }
.mn-glow.b { width: 420px; height: 420px; left: -150px; bottom: 6%; background: radial-gradient(circle, #f7c9bb, transparent 70%); animation: mnFloat 19s ease-in-out infinite alternate-reverse; }
.mn-inner { position: relative; z-index: 1; }
.mn-lead { font-family: 'Cinzel', serif; font-size: .78rem; letter-spacing: .36em; text-transform: uppercase; color: #8a5a2f; margin: -22px 0 36px; padding-left: .36em; }

.mn-list { position: relative; display: grid; gap: 20px; max-width: 660px; margin: 0 auto; }
.mn-list::before {
  content: ''; position: absolute; left: 50%; top: 20px; bottom: 20px; width: 2px; transform: translateX(-50%);
  background: linear-gradient(180deg, transparent, #c8a165 12%, #c8a165 88%, transparent); opacity: .45;
}

.mn-item {
  position: relative; overflow: hidden; display: flex; align-items: center; gap: 20px; text-align: left;
  padding: 16px 24px 16px 16px; border-radius: 30px; border: 1px solid rgba(200, 161, 101, .6);
  background: linear-gradient(100deg, rgba(255, 255, 255, .95) 0%, rgba(253, 234, 216, .92) 55%, rgba(248, 214, 190, .9) 100%);
  box-shadow: 0 16px 32px rgba(168, 101, 90, .22);
}
.mn-item.r {
  flex-direction: row-reverse; text-align: right; padding: 16px 16px 16px 24px;
  background: linear-gradient(260deg, rgba(255, 255, 255, .95) 0%, rgba(251, 238, 205, .92) 55%, rgba(241, 214, 150, .9) 100%);
}
.mn-item::before { content: ''; position: absolute; top: 0; bottom: 0; left: 0; width: 5px; background: linear-gradient(180deg, #f6df9f, #c8a165, #8a5a2f); }
.mn-item.r::before { left: auto; right: 0; }
.mn-item::after {
  content: ''; position: absolute; top: 0; bottom: 0; left: -80%; width: 45%; pointer-events: none;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .65), transparent); animation: mnSweep 7s ease-in-out infinite;
}
.mn-item:nth-child(2n)::after { animation-delay: 2.5s; }
.mn-item:nth-child(3n)::after { animation-delay: 4.5s; }

.mn-medal {
  position: relative; flex-shrink: 0; width: 86px; height: 86px; display: flex; align-items: center; justify-content: center; border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #b2566a, #5a1b2c 78%);
  box-shadow: 0 10px 20px rgba(90, 31, 44, .45), inset 0 0 0 3px #f6df9f, inset 0 0 0 5px rgba(90, 31, 44, .6);
}
.mn-item.r .mn-medal { background: radial-gradient(circle at 32% 28%, #5b6a9c, #161d3a 78%); box-shadow: 0 10px 20px rgba(22, 29, 58, .5), inset 0 0 0 3px #f6df9f, inset 0 0 0 5px rgba(22, 29, 58, .6); }
.mn-ring { position: absolute; inset: -8px; border-radius: 50%; border: 2px dashed rgba(200, 150, 47, .95); animation: mnSpin 16s linear infinite; }
.mn-item.r .mn-ring { animation-direction: reverse; }
.mn-medal .gold-icon { width: 52px; height: 52px; margin: 0; filter: brightness(1.45) drop-shadow(0 0 5px rgba(255, 214, 120, .8)); }

.mn-text { position: relative; flex: 1; min-width: 0; }
.mn-num { font-family: 'Cinzel', serif; font-size: .68rem; letter-spacing: .36em; color: #8a5a2f; }
.mn-item h3 { font-size: 1.5rem; margin: 2px 0 2px; }
.mn-item p { color: #5f4040; font-style: italic; font-size: 1.1rem; }

@keyframes mnSpin { to { transform: rotate(360deg); } }
@keyframes mnSweep { 0% { left: -80%; } 50%, 100% { left: 150%; } }
@keyframes mnFloat { from { transform: translate(0, 0) scale(1); } to { transform: translate(-40px, 30px) scale(1.15); } }

@media (max-width: 480px) {
  .mn-item, .mn-item.r { gap: 14px; padding: 14px 18px 14px 14px; }
  .mn-item.r { padding: 14px 14px 14px 18px; }
  .mn-medal { width: 70px; height: 70px; }
  .mn-medal .gold-icon { width: 42px; height: 42px; }
  .mn-item h3 { font-size: 1.25rem; }
}
@media (prefers-reduced-motion: reduce) {
  .mn-glow, .mn-ring, .mn-item::after { animation: none; }
}
`

export default function Menu() {
  return (
    <section className="mn">
      <style>{css}</style>
      <div className="mn-glow a" />
      <div className="mn-glow b" />

      <div className="section mn-inner">
        <motion.h2
          className="script title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Dawat Menu
        </motion.h2>
        <p className="mn-lead">A feast prepared with love</p>

        <div className="mn-list">
          {menu.map((d, i) => (
            <motion.div
              key={d.name}
              className={`mn-item ${i % 2 ? 'r' : 'l'}`}
              initial={{ opacity: 0, x: i % 2 ? 110 : -110, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ scale: 1.025 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 70, damping: 14 }}
            >
              <div className="mn-medal">
                <i className="mn-ring" />
                <GoldIcon name={d.icon} delay={0.4} strokeWidth={2.4} />
              </div>
              <div className="mn-text">
                <span className="mn-num">COURSE {String(i + 1).padStart(2, '0')}</span>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
