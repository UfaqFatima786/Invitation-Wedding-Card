import { motion } from 'framer-motion'
import { dress } from '../data.js'
import GoldIcon from './Goldicon.jsx'

const css = `
@property --dca { syntax: '<angle>'; initial-value: 0deg; inherits: false; }

.dc {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 8% 18%, rgba(234, 183, 162, 0.22), transparent 34%),
    radial-gradient(circle at 92% 78%, rgba(224, 185, 112, 0.28), transparent 34%),
    linear-gradient(180deg, #fff8eb 0%, #f9edda 48%, #f5e3c2 100%);
}

.dc-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  opacity: 0.48;
}

.dc-glow.a {
  width: 430px;
  height: 430px;
  left: -120px;
  top: 6%;
  background: radial-gradient(circle, rgba(239, 191, 170, 0.72), transparent 70%);
  animation: dcFloat 15s ease-in-out infinite alternate;
}

.dc-glow.b {
  width: 470px;
  height: 470px;
  right: -170px;
  bottom: 4%;
  background: radial-gradient(circle, rgba(231, 195, 126, 0.8), transparent 70%);
  animation: dcFloat 18s ease-in-out infinite alternate-reverse;
}

.dc-inner {
  position: relative;
  z-index: 1;
}

.dc-lead {
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  letter-spacing: 0.36em;
  text-transform: uppercase;
  color: #80551c;
  margin: -22px 0 36px;
  padding-left: 0.36em;
  text-shadow: 0 2px 14px rgba(169, 119, 43, 0.15);
}

.dc-grid {
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.dc-card {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  padding: 36px 24px 30px;
  text-align: center;
  box-shadow: 0 24px 52px rgba(112, 76, 35, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.7);
}

.dc-card.l {
  background: linear-gradient(150deg, #fffaf0 0%, #f8e8ce 58%, #f1d5bd 100%);
}

.dc-card.g {
  background: linear-gradient(150deg, #fffdf2 0%, #f7ebce 52%, #e9d39f 100%);
}

.dc-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 32px;
  padding: 2.5px;
  pointer-events: none;
  background: conic-gradient(from var(--dca), #f4dd9f, #bd8740, #fff4d8, #d98e7d, #f4dd9f);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  animation: dcSpin 9s linear infinite;
}

.dc-card::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -80%;
  width: 50%;
  pointer-events: none;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.72), transparent);
  animation: dcSweep 6.5s ease-in-out infinite;
}

.dc-card.g::after {
  animation-delay: 2.2s;
}

.dc-halo {
  position: absolute;
  left: 50%;
  top: 134px;
  width: 330px;
  height: 330px;
  margin: -165px 0 0 -165px;
  border-radius: 50%;
  pointer-events: none;
  background: conic-gradient(from 0deg, rgba(255, 240, 190, 0), rgba(255, 236, 170, 0.62), rgba(255, 240, 190, 0), rgba(231, 165, 148, 0.36), rgba(255, 240, 190, 0));
  filter: blur(10px);
  animation: dcRot 14s linear infinite;
}

.dc-arch {
  position: relative;
  width: 156px;
  height: 206px;
  margin: 0 auto 18px;
  padding: 4px;
  border-radius: 84px 84px 16px 16px;
  background: linear-gradient(160deg, #f6df9f, #b88a52 50%, #f6df9f);
  box-shadow: 0 14px 30px rgba(108, 72, 39, 0.24), 0 0 0 5px rgba(255, 255, 255, 0.75);
}

.dc-arch-in {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 80px 80px 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dc-card.l .dc-arch-in {
  background: radial-gradient(circle at 50% 28%, #f3c8b7, #a85f5b 80%);
}

.dc-card.g .dc-arch-in {
  background: radial-gradient(circle at 50% 28%, #f2d89e, #936b32 80%);
}

.dc-arch-in::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(from 0deg at 50% 100%, rgba(255, 244, 204, 0.22) 0 6deg, transparent 6deg 16deg);
  animation: dcRays 6s ease-in-out infinite;
}

.dc-arch .gold-icon {
  position: relative;
  width: 96px;
  height: auto;
  margin: 0;
  filter: brightness(1.45) drop-shadow(0 0 8px rgba(255, 214, 120, 0.9));
  animation: dcFloatIcon 3.6s ease-in-out infinite;
}

.dc-card h3 {
  position: relative;
  font-size: 2rem;
  margin: 4px 0 8px;
  color: #80551c;
  text-shadow: 0 2px 14px rgba(164, 112, 42, 0.14);
}

.dc-card p {
  position: relative;
  font-size: 1.12rem;
  line-height: 1.45;
  color: #795a3a;
  max-width: 340px;
  margin: 0 auto;
}

.dc-cap {
  position: relative;
  margin-top: 18px;
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #9a604b;
  padding-left: 0.3em;
}

.dc-fan {
  position: relative;
  height: 92px;
  margin-top: 10px;
}

.dc-fan span {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 34px;
  height: 80px;
  margin-left: -17px;
  border-radius: 17px 17px 9px 9px;
  border: 2.5px solid rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 16px rgba(104, 71, 38, 0.24);
  transform-origin: 50% 100%;
}

.dc-fan span::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.38), transparent 45%);
}

.dc-pivot {
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 16px;
  height: 16px;
  margin-left: -8px;
  border-radius: 50%;
  z-index: 5;
  background: radial-gradient(circle at 35% 30%, #fff3c4, #b88a52);
  box-shadow: 0 2px 6px rgba(104, 71, 38, 0.25);
}

.dc-spk {
  position: absolute;
  width: 14px;
  height: 14px;
  pointer-events: none;
  background: #fff3d4;
  clip-path: polygon(50% 0, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0 50%, 40% 40%);
  animation: dcTw 3s ease-in-out infinite;
}

@keyframes dcSpin { to { --dca: 360deg; } }
@keyframes dcRot { to { transform: rotate(360deg); } }
@keyframes dcSweep { 0% { left: -80%; } 55%, 100% { left: 150%; } }
@keyframes dcFloat { from { transform: translate(0, 0) scale(1); } to { transform: translate(40px, -30px) scale(1.15); } }
@keyframes dcRays { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
@keyframes dcFloatIcon { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes dcTw { 0%, 100% { opacity: 0.2; transform: scale(0.6) rotate(0deg); } 50% { opacity: 1; transform: scale(1.1) rotate(45deg); } }

@media (max-width: 480px) {
  .dc-inner { padding: 70px 16px; }
  .dc-grid { gap: 20px; grid-template-columns: minmax(0, 1fr); }
  .dc-card { padding: 30px 18px 26px; border-radius: 26px; }
  .dc-card::before { border-radius: 26px; }
  .dc-arch { width: 138px; height: 184px; }
  .dc-arch .gold-icon { width: 84px; }
  .dc-lead { font-size: 0.68rem; letter-spacing: 0.24em; }
}

@media (max-width: 360px) {
  .dc-lead { letter-spacing: 0.16em; }
  .dc-card p { font-size: 1.02rem; }
  .dc-fan span { width: 30px; margin-left: -15px; }
}

@media (prefers-reduced-motion: reduce) {
  .dc-card::before, .dc-card::after, .dc-halo, .dc-glow, .dc-arch-in::before, .dc-arch .gold-icon, .dc-spk { animation: none; }
}
`

const SPK = [
  { x: '10%', y: '10%', d: 0 },
  { x: '88%', y: '16%', d: 0.9 },
  { x: '14%', y: '58%', d: 1.6 },
  { x: '90%', y: '62%', d: 0.5 },
]

function Card({ info, variant, from }) {
  const n = info.colors.length
  return (
    <motion.div
      className={`dc-card ${variant}`}
      initial={{ opacity: 0, y: 70, rotate: from > 0 ? 4 : -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="dc-halo" />
      {SPK.map((s, i) => (
        <span key={i} className="dc-spk" style={{ left: s.x, top: s.y, animationDelay: `${s.d}s` }} />
      ))}

      <div className="dc-arch">
        <div className="dc-arch-in">
          <GoldIcon name={info.icon} delay={0.4} strokeWidth={2.4} />
        </div>
      </div>

      <h3>{info.title}</h3>
      <p>{info.note}</p>
      <div className="dc-cap">Colour palette</div>

      <div className="dc-fan">
        {info.colors.map((c, i) => (
          <motion.span
            key={c}
            style={{ background: c }}
            initial={{ rotate: 0, opacity: 0, y: 14 }}
            whileInView={{ rotate: (i - (n - 1) / 2) * 17, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.13, type: 'spring', stiffness: 90, damping: 12 }}
          />
        ))}
        <i className="dc-pivot" />
      </div>
    </motion.div>
  )
}

export default function DressCode() {
  return (
    <section className="dc">
      <style>{css}</style>
      <div className="dc-glow a" />
      <div className="dc-glow b" />

      <div className="section dc-inner">
        <motion.h2
          className="script title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Dress Code
        </motion.h2>
        <p className="dc-lead">Dress to match the glow</p>

        <div className="dc-grid">
          <Card info={dress.girls} variant="l" from={-80} />
          <Card info={dress.boys} variant="g" from={80} />
        </div>
      </div>
    </section>
  )
}
