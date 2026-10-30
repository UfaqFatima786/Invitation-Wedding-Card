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
const GOLD_DARK = '#b8893f'
const IVORY = '#fff6e6'
const DOORS = [
  { side: 'l', mirror: false, angle: -120 },
  { side: 'r', mirror: true, angle: 120 },
]

function Leaf({ mirror }) {
  const s = mirror ? 'R' : 'L'
  const clip = `fgClip${s}`
  const gold = `fgGold${s}`
  const glass = `fgGlass${s}`
  const lat = `fgLat${s}`

  return (
    <svg viewBox="0 0 200 620" preserveAspectRatio="none">
      <defs>
        <clipPath id={clip}>
          <path d={SHAPE} />
        </clipPath>
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff3c9" />
          <stop offset="0.5" stopColor={GOLD} />
          <stop offset="1" stopColor={GOLD_DARK} />
        </linearGradient>
        <linearGradient id={glass} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd9d6" stopOpacity="0.28" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#e88b93" stopOpacity="0.30" />
        </linearGradient>
        <pattern id={lat} width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M12.5 0 L25 12.5 L12.5 25 L0 12.5 Z" fill="none" stroke={GOLD} strokeWidth="0.9" opacity="0.75" />
          <circle cx="12.5" cy="12.5" r="1.1" fill={GOLD} />
        </pattern>
      </defs>

      <g transform={mirror ? 'translate(200 0) scale(-1 1)' : undefined}>
        <path d={SHAPE} fill={`url(#${glass})`} stroke={IVORY} strokeWidth="5" />
        <path
          d="M10 610 V212 Q10 52 190 34 V610 Z"
          fill="none"
          stroke={`url(#${gold})`}
          strokeWidth="1.8"
        />

        <g clipPath={`url(#${clip})`} stroke={IVORY} fill="none" strokeLinecap="round">
          {/* jaali (lattice) upar aur neeche */}
          <rect x="0" y="0" width="200" height="150" fill={`url(#${lat})`} stroke="none" />
          <rect x="0" y="400" width="200" height="125" fill={`url(#${lat})`} stroke="none" opacity="0.8" />

          {[25, 50, 75, 100, 125, 150, 175].map((x) => (
            <g key={x}>
              <circle cx={x} cy="410" r="3.4" fill={GOLD} stroke="none" />
              <path d={`M${x - 5} 150 L${x} 138 L${x + 5} 150`} stroke={GOLD} strokeWidth="1.6" />
            </g>
          ))}

          <line x1="0" y1="150" x2="200" y2="150" strokeWidth="3.5" stroke={`url(#${gold})`} />
          <line x1="0" y1="400" x2="200" y2="400" strokeWidth="3.5" stroke={`url(#${gold})`} />
          <line x1="0" y1="530" x2="200" y2="530" strokeWidth="4" stroke={`url(#${gold})`} />
          <line x1="0" y1="575" x2="200" y2="575" strokeWidth="2.5" />

          {/* beech ka bara medallion */}
          <circle cx="100" cy="275" r="56" strokeWidth="1.6" stroke={GOLD} strokeDasharray="1 6" />
          <circle cx="100" cy="275" r="52" strokeWidth="3.5" stroke={`url(#${gold})`} />
          <circle cx="100" cy="275" r="40" strokeWidth="1.5" strokeDasharray="2 5" />
          <circle cx="100" cy="275" r="30" strokeWidth="2.5" />
          {/* 8 petal phool */}
          {Array.from({ length: 8 }, (_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="257"
              rx="5"
              ry="13"
              fill={GOLD}
              opacity="0.9"
              stroke="none"
              transform={`rotate(${i * 45} 100 275)`}
            />
          ))}
          <circle cx="100" cy="275" r="7" fill="#d9626d" stroke={IVORY} strokeWidth="1.4" />
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

          {/* upar ke sitare */}
          <path d="M100 70 L104 82 L116 86 L104 90 L100 102 L96 90 L84 86 L96 82 Z" fill={GOLD} stroke="none" />
          <path d="M60 110 L62 116 L68 118 L62 120 L60 126 L58 120 L52 118 L58 116 Z" fill={GOLD} stroke="none" opacity="0.85" />
          <path d="M150 100 L152 106 L158 108 L152 110 L150 116 L148 110 L142 108 L148 106 Z" fill={GOLD} stroke="none" opacity="0.85" />
        </g>

        {/* door handle ring (andar ki taraf) */}
        <circle cx="184" cy="330" r="9" fill="none" stroke={`url(#${gold})`} strokeWidth="3" />
        <circle cx="184" cy="321" r="3.5" fill={GOLD} />
      </g>
    </svg>
  )
}

/* [dark, mid, light] rose shades */
const ROSES = [
  ['#ddaa4b', '#c8414f', '#e8727c'],
  ['#c8a441', '#e0707a', '#f5a8ad'],
  ['#e0707a', '#f2a1a6', '#fbd3d2'],
  ['#b58833', '#d9566a', '#f08f9c'],
]
const PETAL_ANGLES = [0, 72, 144, 216, 288]
const FLOOR_PETALS = ['#e8727c', '#f5a8ad', '#fff6e6', '#c8414f', '#e8cb8e']

export default function Gate({ open, onOpen }) {
  const ease = [0.7, 0, 0.2, 1]

  const { roses, jasmine, gyp, leaves, strands, lights, bokeh, sparkles, petals } = useMemo(() => {
    const r = rng(11)

    const roses = Array.from({ length: 46 }, () => {
      const x = r() * 480 - 10
      return {
        x,
        y: 14 + r() * 56 + Math.sin(x / 38) * 7,
        r: 9 + r() * 12,
        c: ROSES[Math.floor(r() * ROSES.length)],
        rot: r() * 360,
      }
    }).sort((a, b) => a.y - b.y)

    const jasmine = Array.from({ length: 40 }, () => ({
      x: r() * 470,
      y: 10 + r() * 76,
      r: 4 + r() * 4.5,
      rot: r() * 72,
    }))

    const gyp = Array.from({ length: 120 }, () => ({
      x: r() * 470,
      y: 8 + r() * 78,
      r: 1.2 + r() * 1.6,
    }))

    const leaves = Array.from({ length: 46 }, () => ({
      x: r() * 470,
      y: 12 + r() * 74,
      rot: r() * 180,
      c: r() > 0.5 ? '#c9a24f' : '#a98a3d',
    }))

    const strands = Array.from({ length: 22 }, (_, i) => {
      const x = 6 + i * (448 / 21) + r() * 6
      const n = 3 + Math.floor(r() * 5)
      return {
        x,
        delay: r() * 3,
        dots: Array.from({ length: n }, (_, j) => ({
          y: 78 + j * 13,
          r: Math.max(2.4, 6.5 - j * 0.6),
          gold: j % 2 === 0,
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

    const petals = Array.from({ length: 18 }, () => ({
      x: r() * 100,
      y: 78 + r() * 18,
      rot: r() * 360,
      s: 6 + r() * 6,
      c: FLOOR_PETALS[Math.floor(r() * FLOOR_PETALS.length)],
    }))

    return { roses, jasmine, gyp, leaves, strands, lights, bokeh, sparkles, petals }
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

        <div className="fg-floor" />
        {petals.map((p, i) => (
          <span
            key={i}
            className="fg-petal"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.s * 1.6,
              height: p.s,
              background: p.c,
              transform: `rotate(${p.rot}deg)`,
            }}
          />
        ))}

        {/* phoolon ka garland */}
        <svg className="fg-flowers" viewBox="0 0 460 190">
          {leaves.map((l, i) => (
            <ellipse
              key={i}
              cx={l.x}
              cy={l.y}
              rx="14"
              ry="5"
              fill={l.c}
              opacity="0.92"
              transform={`rotate(${l.rot} ${l.x} ${l.y})`}
            />
          ))}

          {strands.map((s, i) => (
            <g
              key={i}
              className="fg-strand"
              style={{ transformOrigin: `${s.x}px 70px`, animationDelay: `${s.delay}s` }}
            >
              <line x1={s.x} y1="70" x2={s.x} y2={78 + s.dots.length * 13} stroke="#c9a24f" strokeWidth="1.1" />
              {s.dots.map((d, j) => (
                <circle
                  key={j}
                  cx={s.x + (j % 2 ? 2 : -2)}
                  cy={d.y}
                  r={d.r}
                  fill={d.gold ? '#e8cb8e' : '#fffdf8'}
                  stroke={d.gold ? '#b8893f' : 'none'}
                  strokeWidth="0.6"
                />
              ))}
              {/* chhota gold tassel */}
              <path
                d={`M${s.x} ${78 + s.dots.length * 13 + 2} l-3 9 h6 Z`}
                fill="#d9b25f"
              />
            </g>
          ))}

          {jasmine.map((j, i) => (
            <g key={i}>
              {PETAL_ANGLES.map((a) => {
                const rad = ((a + j.rot) * Math.PI) / 180
                return (
                  <circle
                    key={a}
                    cx={j.x + Math.cos(rad) * j.r * 0.6}
                    cy={j.y + Math.sin(rad) * j.r * 0.6}
                    r={j.r * 0.48}
                    fill="#fffdf6"
                    stroke="#eadfc4"
                    strokeWidth="0.3"
                  />
                )
              })}
              <circle cx={j.x} cy={j.y} r={j.r * 0.22} fill="#e0c36e" />
            </g>
          ))}

          {roses.map((b, i) => {
            const [dark, mid, light] = b.c
            return (
              <g key={i}>
                {PETAL_ANGLES.map((a) => {
                  const rad = ((a + b.rot) * Math.PI) / 180
                  return (
                    <circle
                      key={a}
                      cx={b.x + Math.cos(rad) * b.r * 0.55}
                      cy={b.y + Math.sin(rad) * b.r * 0.55}
                      r={b.r * 0.52}
                      fill={dark}
                      stroke="#7d1d2c"
                      strokeWidth="0.35"
                    />
                  )
                })}
                {[36, 108, 180, 252, 324].map((a) => {
                  const rad = ((a + b.rot) * Math.PI) / 180
                  return (
                    <circle
                      key={a}
                      cx={b.x + Math.cos(rad) * b.r * 0.3}
                      cy={b.y + Math.sin(rad) * b.r * 0.3}
                      r={b.r * 0.38}
                      fill={mid}
                    />
                  )
                })}
                <circle cx={b.x} cy={b.y} r={b.r * 0.32} fill={light} />
                <path
                  d={`M${b.x - b.r * 0.18} ${b.y} a${b.r * 0.18} ${b.r * 0.18} 0 1 1 ${b.r * 0.18} ${b.r * 0.18}`}
                  fill="none"
                  stroke={dark}
                  strokeWidth="0.8"
                  opacity="0.7"
                />
              </g>
            )
          })}

          {gyp.map((g, i) => (
            <circle key={i} cx={g.x} cy={g.y} r={g.r} fill="#ffffff" opacity="0.95" />
          ))}

          {lights.map((l, i) => (
            <g key={i} className="fg-light" style={{ animationDelay: `${l.d}s` }}>
              <circle cx={l.x} cy={l.y} r="8" fill="#ffe7a0" opacity="0.3" />
              <circle cx={l.x} cy={l.y} r="2.6" fill="#fff3c4" />
            </g>
          ))}
        </svg>

        {/* bow */}
        <motion.div
          className="fg-bow"
          animate={open ? { y: 60, opacity: 0, scale: 1.08, rotate: -3 } : { y: 0, opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <svg viewBox="0 0 460 300">
            <defs>
              <linearGradient id="fgSat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff3d4" />
                <stop offset="0.5" stopColor="#e9c987" />
                <stop offset="1" stopColor="#fff3d4" />
              </linearGradient>
              <linearGradient id="fgSat2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fff8e2" />
                <stop offset="1" stopColor="#d4a655" />
              </linearGradient>
              <radialGradient id="fgPearl" cx="0.35" cy="0.3" r="0.8">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="1" stopColor="#e6c3b8" />
              </radialGradient>
            </defs>
            <rect x="0" y="98" width="460" height="40" fill="url(#fgSat)" />
            <line x1="0" y1="104" x2="460" y2="104" stroke="#fff" strokeOpacity="0.6" />
            <line x1="0" y1="133" x2="460" y2="133" stroke="#b8893f" strokeOpacity="0.8" strokeWidth="1.2" />
            <path d="M230 118 C150 36 66 58 88 122 C100 172 190 152 230 118 Z" fill="url(#fgSat2)" stroke="#b8893f" strokeWidth="1.2" />
            <path d="M230 118 C310 36 394 58 372 122 C360 172 270 152 230 118 Z" fill="url(#fgSat2)" stroke="#b8893f" strokeWidth="1.2" />
            <path d="M226 118 C170 80 120 84 112 112" fill="none" stroke="#c99a4c" strokeWidth="1.6" />
            <path d="M234 118 C290 80 340 84 348 112" fill="none" stroke="#c99a4c" strokeWidth="1.6" />
            <g className="fg-tail l" style={{ transformOrigin: '230px 125px' }}>
              <path d="M222 125 C192 180 152 232 118 292 L170 276 L200 292 C216 232 226 182 232 130 Z" fill="url(#fgSat2)" stroke="#b8893f" strokeWidth="1" />
            </g>
            <g className="fg-tail r" style={{ transformOrigin: '230px 125px' }}>
              <path d="M238 125 C268 180 308 232 342 292 L290 276 L260 292 C244 232 234 182 228 130 Z" fill="url(#fgSat2)" stroke="#b8893f" strokeWidth="1" />
            </g>
            <ellipse cx="230" cy="118" rx="27" ry="31" fill="url(#fgSat)" stroke="#b8893f" strokeWidth="1.2" />
            <circle cx="230" cy="118" r="13" fill="#d9566a" stroke="#e8cb8e" strokeWidth="2.4" />
            <circle cx="230" cy="118" r="5" fill="url(#fgPearl)" />
            <line x1="230" y1="132" x2="230" y2="176" stroke="#b8893f" strokeWidth="1.2" />
            <circle cx="230" cy="142" r="4.5" fill="url(#fgPearl)" />
            <circle cx="230" cy="156" r="5" fill="url(#fgPearl)" />
            <circle cx="230" cy="172" r="5.5" fill="url(#fgPearl)" />
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