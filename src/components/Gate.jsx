import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './gate.css'
function rng(seed) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const SHAPE = 'M2 620 V210 Q2 40 198 22 V620 Z'
const GOLD = '#e8cb8e'
const DOORS = [
  { side: 'l', mirror: false, angle: -120 },
  { side: 'r', mirror: true, angle: 120 },
]

function Leaf({ mirror }) {
  const id = mirror ? 'fgClipR' : 'fgClipL'
  return (
    <svg className={mirror ? 'mirror' : ''} viewBox="0 0 200 620" preserveAspectRatio="none">
      <defs>
        <clipPath id={id}>
          <path d={SHAPE} />
        </clipPath>
      </defs>
      <path d={SHAPE} fill="rgba(255,248,232,0.10)" stroke="#f6eddb" strokeWidth="5" />
      <path d="M10 610 V212 Q10 52 190 34 V610 Z" fill="none" stroke={GOLD} strokeWidth="1.4" opacity="0.8" />
      <g clipPath={`url(#${id})`} stroke="#f6eddb" fill="none" strokeLinecap="round">
        {[25, 50, 75, 100, 125, 150, 175].map((x) => (
          <g key={x}>
            <line x1={x} y1="0" x2={x} y2="150" strokeWidth="2" />
            <line x1={x} y1="400" x2={x} y2="620" strokeWidth="2" />
            <circle cx={x} cy="410" r="3.4" fill={GOLD} stroke="none" />
            <path d={`M${x - 5} 150 L${x} 138 L${x + 5} 150`} stroke={GOLD} strokeWidth="1.6" />
          </g>
        ))}
        <line x1="0" y1="150" x2="200" y2="150" strokeWidth="3.5" />
        <line x1="0" y1="400" x2="200" y2="400" strokeWidth="3.5" />
        <line x1="0" y1="530" x2="200" y2="530" strokeWidth="4" />
        <line x1="0" y1="575" x2="200" y2="575" strokeWidth="2.5" />
        {/* beech ka bara ring (gold) */}
        <circle cx="100" cy="275" r="52" strokeWidth="3.5" stroke={GOLD} />
        <circle cx="100" cy="275" r="40" strokeWidth="1.5" strokeDasharray="2 5" />
        <circle cx="100" cy="275" r="30" strokeWidth="2.5" />
        <circle cx="100" cy="275" r="7" fill={GOLD} stroke="none" />
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const r = (a * Math.PI) / 180
          return (
            <circle key={a} cx={100 + Math.cos(r) * 52} cy={275 + Math.sin(r) * 52} r="3.4" fill={GOLD} stroke="none" />
          )
        })}
        {/* scroll curls */}
        <path d="M0 190 C45 190 60 235 52 262" strokeWidth="3" />
        <path d="M0 360 C45 360 60 315 52 288" strokeWidth="3" />
        <path d="M200 190 C155 190 140 235 148 262" strokeWidth="3" />
        <path d="M200 360 C155 360 140 315 148 288" strokeWidth="3" />
        <path d="M30 150 C30 190 70 200 78 172 C84 152 60 146 58 164" strokeWidth="2.6" stroke={GOLD} />
        <path d="M30 400 C30 360 70 350 78 378 C84 398 60 404 58 386" strokeWidth="2.6" stroke={GOLD} />
        <path d="M165 150 C165 185 130 195 122 172 C117 154 140 150 142 164" strokeWidth="2.6" stroke={GOLD} />
        <path d="M165 400 C165 365 130 355 122 378 C117 396 140 400 142 386" strokeWidth="2.6" stroke={GOLD} />
        {/* neeche ka panel */}
        <rect x="14" y="542" width="172" height="22" rx="4" strokeWidth="2" />
        <path d="M14 600 C60 580 80 620 100 600 C120 580 140 620 186 600" strokeWidth="2.4" stroke={GOLD} />
        {/* 4-point sitare */}
        <path d="M100 100 L104 112 L116 116 L104 120 L100 132 L96 120 L84 116 L96 112 Z" fill={GOLD} stroke="none" />
      </g>
    </svg>
  )
}

const PALETTE = ['#ffffff', '#fbf8f1', '#f3ecdc', '#ece2cb', '#f9ece6']
const PETAL_ANGLES = [0, 72, 144, 216, 288]

export default function Gate({ open, onOpen }) {
  const ease = [0.7, 0, 0.2, 1]

  const { blooms, gyp, leaves, strands, lights, bokeh, sparkles, petals } = useMemo(() => {
    const r = rng(11)
    const blooms = Array.from({ length: 62 }, () => {
      const x = r() * 480 - 10
      return {
        x,
        y: 12 + r() * 60 + Math.sin(x / 38) * 7,
        r: 8 + r() * 12,
        c: PALETTE[Math.floor(r() * PALETTE.length)],
        o: 0.88 + r() * 0.12,
      }
    }).sort((a, b) => a.y - b.y)

    const gyp = Array.from({ length: 150 }, () => ({
      x: r() * 470,
      y: 8 + r() * 78,
      r: 1.3 + r() * 1.8,
    }))

    const leaves = Array.from({ length: 34 }, () => ({
      x: r() * 470,
      y: 14 + r() * 70,
      rot: r() * 180,
    }))

    const strands = Array.from({ length: 22 }, (_, i) => {
      const x = 6 + i * (448 / 21) + r() * 6
      const n = 3 + Math.floor(r() * 5)
      return {
        x,
        delay: r() * 3,
        dots: Array.from({ length: n }, (_, j) => ({
          y: 78 + j * 13,
          r: Math.max(2.4, 7 - j * 0.65),
        })),
      }
    })

    const lights = Array.from({ length: 34 }, () => ({
      x: 6 + r() * 448,
      y: 16 + r() * 150,
      d: r() * 2.5,
    }))

    const bokeh = Array.from({ length: 18 }, () => ({
      x: r() * 100,
      y: r() * 100,
      s: 18 + r() * 50,
      d: r() * 4,
    }))

    const sparkles = Array.from({ length: 24 }, () => ({
      x: r() * 100,
      s: 6 + r() * 10,
      d: r() * 6,
      t: 5 + r() * 5,
    }))

    const petals = Array.from({ length: 16 }, () => ({
      x: r() * 100,
      y: 78 + r() * 18,
      rot: r() * 360,
      s: 6 + r() * 6,
    }))

    return { blooms, gyp, leaves, strands, lights, bokeh, sparkles, petals }
  }, [])

  return (
    <motion.div
      className="fgate"
      animate={{ opacity: open ? 0 : 1 }}
      transition={{ delay: 2.4, duration: 0.9 }}
      style={{ pointerEvents: open ? 'none' : 'auto' }}
    >
      <div className="fg-bokeh">
        {bokeh.map((b, i) => (
          <span
            key={i}
            style={{ left: `${b.x}%`, top: `${b.y}%`, width: b.s, height: b.s, animationDelay: `${b.d}s` }}
          />
        ))}
      </div>

      <div className="fg-sparkles">
        {sparkles.map((s, i) => (
          <span
            key={i}
            style={{ left: `${s.x}%`, width: s.s, height: s.s, animationDelay: `${s.d}s`, animationDuration: `${s.t}s` }}
          />
        ))}
      </div>

      <div className="fg-stage">
        <div className="fg-glow">
          <motion.div
            className="fg-rays"
            animate={{ opacity: open ? 1 : 0.35 }}
            transition={{ duration: 1.6, delay: open ? 0.9 : 0 }}
          />
        </div>

        <div className="fg-pillar l" />
        <div className="fg-pillar r" />

        <div className="fg-doors">
          {DOORS.map(({ side, mirror, angle }) => (
            <motion.div
              key={side}
              className={`fg-door ${side}`}
              animate={{ rotateY: open ? angle : 0 }}
              transition={{ duration: 2, ease, delay: open ? 0.7 : 0 }}
            >
              <Leaf mirror={mirror} />
            </motion.div>
          ))}
        </div>
        {}
        <div className="fg-floor" />
        {petals.map((p, i) => (
          <span
            key={i}
            className="fg-petal"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s * 1.6, height: p.s, transform: `rotate(${p.rot}deg)` }}
          />
        ))}

        {}
        <svg className="fg-flowers" viewBox="0 0 460 190">
          {leaves.map((l, i) => (
            <ellipse
              key={i}
              cx={l.x}
              cy={l.y}
              rx="13"
              ry="5"
              fill="#7f8f6a"
              opacity="0.85"
              transform={`rotate(${l.rot} ${l.x} ${l.y})`}
            />
          ))}
          {strands.map((s, i) => (
            <g
              key={i}
              className="fg-strand"
              style={{ transformOrigin: `${s.x}px 70px`, animationDelay: `${s.delay}s` }}
            >
              <line x1={s.x} y1="70" x2={s.x} y2={78 + s.dots.length * 13} stroke="#9fae8a" strokeWidth="1.2" />
              {s.dots.map((d, j) => (
                <circle key={j} cx={s.x + (j % 2 ? 2 : -2)} cy={d.y} r={d.r} fill="#fffdf8" opacity="0.95" />
              ))}
            </g>
          ))}
          {blooms.map((b, i) => (
            <g key={i} opacity={b.o}>
              {PETAL_ANGLES.map((a) => {
                const rad = (a * Math.PI) / 180
                return (
                  <circle
                    key={a}
                    cx={b.x + Math.cos(rad) * b.r * 0.55}
                    cy={b.y + Math.sin(rad) * b.r * 0.55}
                    r={b.r * 0.5}
                    fill={b.c}
                    stroke="#e9dfc7"
                    strokeWidth="0.4"
                  />
                )
              })}
              <circle cx={b.x} cy={b.y} r={b.r * 0.38} fill="#fffef9" />
              <circle cx={b.x} cy={b.y} r={b.r * 0.16} fill="#e0c98a" />
            </g>
          ))}
          {gyp.map((g, i) => (
            <circle key={i} cx={g.x} cy={g.y} r={g.r} fill="#ffffff" opacity="0.95" />
          ))}
          {lights.map((l, i) => (
            <g key={i} className="fg-light" style={{ animationDelay: `${l.d}s` }}>
              <circle cx={l.x} cy={l.y} r="8" fill="#ffe7a0" opacity="0.28" />
              <circle cx={l.x} cy={l.y} r="2.6" fill="#fff3c4" />
            </g>
          ))}
        </svg>
        {}
        <motion.div
          className="fg-bow"
          animate={open ? { y: 60, opacity: 0, scale: 1.08, rotate: -3 } : { y: 0, opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <svg viewBox="0 0 460 300">
            <defs>
              <linearGradient id="fgSat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fffaf0" />
                <stop offset="0.5" stopColor="#eadfc4" />
                <stop offset="1" stopColor="#fffaf0" />
              </linearGradient>
              <linearGradient id="fgSat2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fffdf7" />
                <stop offset="1" stopColor="#e2d4b2" />
              </linearGradient>
              <radialGradient id="fgPearl" cx="0.35" cy="0.3" r="0.8">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="1" stopColor="#d9cfb8" />
              </radialGradient>
            </defs>
            <rect x="0" y="98" width="460" height="40" fill="url(#fgSat)" />
            <line x1="0" y1="104" x2="460" y2="104" stroke="#fff" strokeOpacity="0.6" />
            <line x1="0" y1="133" x2="460" y2="133" stroke={GOLD} strokeOpacity="0.8" strokeWidth="1.2" />
            <path d="M230 118 C150 36 66 58 88 122 C100 172 190 152 230 118 Z" fill="url(#fgSat2)" stroke={GOLD} strokeWidth="1.2" />
            <path d="M230 118 C310 36 394 58 372 122 C360 172 270 152 230 118 Z" fill="url(#fgSat2)" stroke={GOLD} strokeWidth="1.2" />
            <path d="M226 118 C170 80 120 84 112 112" fill="none" stroke="#d8c9a4" strokeWidth="1.6" />
            <path d="M234 118 C290 80 340 84 348 112" fill="none" stroke="#d8c9a4" strokeWidth="1.6" />
            <g className="fg-tail l" style={{ transformOrigin: '230px 125px' }}>
              <path d="M222 125 C192 180 152 232 118 292 L170 276 L200 292 C216 232 226 182 232 130 Z" fill="url(#fgSat2)" stroke={GOLD} strokeWidth="1" />
            </g>
            <g className="fg-tail r" style={{ transformOrigin: '230px 125px' }}>
              <path d="M238 125 C268 180 308 232 342 292 L290 276 L260 292 C244 232 234 182 228 130 Z" fill="url(#fgSat2)" stroke={GOLD} strokeWidth="1" />
            </g>
            <ellipse cx="230" cy="118" rx="27" ry="31" fill="url(#fgSat)" stroke="#d8c9a4" strokeWidth="1.2" />
            <circle cx="230" cy="118" r="13" fill="url(#fgPearl)" stroke="#d4b77a" strokeWidth="2" />
            <line x1="230" y1="132" x2="230" y2="176" stroke="#d4b77a" strokeWidth="1.2" />
            <circle cx="230" cy="142" r="4.5" fill="url(#fgPearl)" />
            <circle cx="230" cy="156" r="5" fill="url(#fgPearl)" />
            <circle cx="230" cy="172" r="5.5" fill="url(#fgPearl)" />
            {}
            <path
              className="fg-glint"
              d="M244 100 L246 106 L252 108 L246 110 L244 116 L242 110 L236 108 L242 106 Z"
              fill="#fffbe6"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="fg-cta"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="arabic">بسم اللہ الرحمن الرحیم</p>
        <button className="open-btn" onClick={onOpen}>
          Open Invitation
        </button>
      </motion.div>
    </motion.div>
  )
}
