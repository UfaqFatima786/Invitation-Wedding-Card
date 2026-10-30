import { motion } from 'framer-motion'
import { invite } from '../data.js'

const css = `
.hx {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px 150px;
  isolation: isolate;
}

/* Aasman */
.hx-sky { position: absolute; inset: 0; z-index: -5; background: linear-gradient(180deg, #fff8ef 0%, #fde8da 38%, #fad2bf 70%, #f4bda7 100%); }
.hx-stars {
  position: absolute; inset: 0; z-index: -5; opacity: .55;
  background-image:
    radial-gradient(circle at 12% 18%, #fff 0 1.5px, transparent 2px),
    radial-gradient(circle at 30% 8%, #fff 0 1px, transparent 2px),
    radial-gradient(circle at 70% 14%, #fff 0 1.5px, transparent 2px),
    radial-gradient(circle at 88% 30%, #fff 0 1px, transparent 2px),
    radial-gradient(circle at 56% 26%, #fff 0 1px, transparent 2px);
  animation: hxTw 4s ease-in-out infinite;
}
.hx-sun {
  position: absolute; z-index: -4; left: 50%; bottom: 17%;
  width: min(60vw, 300px); aspect-ratio: 1; border-radius: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, #fff6d6 0 28%, rgba(255, 211, 160, 0.8) 40%, rgba(255, 200, 150, 0) 70%);
  animation: hxSun 9s ease-in-out infinite;
}
.hx-cloud { position: absolute; z-index: -3; height: 54px; border-radius: 60px; background: rgba(255, 255, 255, .7); filter: blur(10px); }
.hx-cloud.c1 { top: 12%; width: 220px; left: -240px; animation: hxCloud 60s linear infinite; }
.hx-cloud.c2 { top: 25%; width: 300px; left: -320px; animation: hxCloud 85s linear infinite 12s; opacity: .8; }
.hx-cloud.c3 { top: 6%; width: 160px; left: -180px; animation: hxCloud 70s linear infinite 30s; opacity: .65; }

/* Door ke chhote parindey */
.hx-bird { position: absolute; left: 0; z-index: -1; pointer-events: none; }
.hx-bird svg { width: 100%; height: auto; display: block; overflow: visible; }

/* Samandar */
.hx-sea { position: absolute; left: 0; right: 0; bottom: 0; height: 24vh; min-height: 170px; z-index: 0; pointer-events: none; }
.hx-wave { position: absolute; left: 0; bottom: 0; width: 300%; height: 78%; }
.hx-wave.w1 { bottom: 38%; height: 62%; animation: hxWave 34s linear infinite; }
.hx-wave.w1 path { fill: #efc3b0; opacity: .9; }
.hx-wave.w2 { bottom: 20%; height: 66%; animation: hxWave 24s linear infinite reverse; }
.hx-wave.w2 path { fill: #e3a994; opacity: .92; }
.hx-wave.w3 { bottom: -1px; height: 62%; animation: hxWave 17s linear infinite; }
.hx-wave.w3 path { fill: #fdf3ea; }
.hx-glints { position: absolute; left: 50%; top: 0; bottom: 30%; width: 180px; transform: translateX(-50%); }
.hx-glints span {
  position: absolute; left: 50%; height: 3px; border-radius: 3px; transform: translateX(-50%);
  background: linear-gradient(90deg, transparent, #fff4c8, transparent);
  animation: hxTw 2.4s ease-in-out infinite;
}
.hx-corner { position: absolute; top: -2vw; z-index: 1; width: clamp(200px, 36vw, 420px); pointer-events: none; }
.hx-corner.tl { left: -2vw; }
.hx-corner.tr { right: -2vw; }
.hx-mirror { transform: scaleX(-1); }
.hx-gold { display: block; width: 100%; height: auto; overflow: visible; filter: drop-shadow(0 10px 12px rgba(120, 80, 20, .38)); }
.hx-ring { transform-box: view-box; animation: hxSpin 80s linear infinite; }
.hx-gtw { animation: hxTw 2.6s ease-in-out infinite; }
.hx-bq { position: absolute; bottom: -6px; z-index: 2; width: clamp(200px, 46vw, 480px); pointer-events: none; }
.hx-bq.l { left: -8px; }
.hx-bq.r { right: -8px; }
.hx-bq svg { display: block; width: 100%; height: auto; overflow: visible; filter: drop-shadow(0 -4px 8px rgba(120, 70, 60, .18)); }
.hx-doves { position: absolute; top: 12%; left: 0; z-index: 3; width: 130px; pointer-events: none; }
.hx-dove { display: block; overflow: visible; filter: drop-shadow(0 8px 8px rgba(120, 70, 60, .28)) drop-shadow(0 0 1.5px rgba(150, 120, 90, .55)); }
.hx-wing { transform-box: view-box; animation: hxFlap .8s ease-in-out infinite; }
.hx-bob { transform-box: fill-box; transform-origin: 50% 100%; animation: hxBob 3.4s ease-in-out infinite; }
.hx-head { transform-box: fill-box; transform-origin: 35% 95%; animation: hxHead 4.2s ease-in-out infinite; }
.hx-tail { transform-box: fill-box; transform-origin: 100% 30%; animation: hxTail 2.6s ease-in-out infinite; }
.hx-heart { transform-box: fill-box; transform-origin: 50% 100%; animation: hxHeart 4.5s ease-in-out infinite; opacity: 0; }
.hx-fall {
  position: absolute; top: -30px; z-index: 4; pointer-events: none;
  width: calc(var(--s) * 1px); height: calc(var(--s) * 1.35px);
  border-radius: 80% 0 80% 20%;
  background: linear-gradient(135deg, #e6d169, #be8602);
  opacity: .85;
  animation: hxFall var(--d) linear infinite; animation-delay: var(--w);
}

/* Likhai */
.hx-content { position: relative; z-index: 5; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.hx-content::before {
  content: ''; position: absolute; inset: -34px -48px; z-index: -1; pointer-events: none;
  background: radial-gradient(ellipse at center, rgba(255, 249, 240, .72), rgba(255, 249, 240, 0) 70%);
}
.hx-ornament { display: flex; align-items: center; gap: 14px; color: #c8a165; }
.hx-ornament i { display: block; width: clamp(50px, 16vw, 110px); height: 1px; background: linear-gradient(90deg, transparent, #c8a165); transform-origin: right; }
.hx-ornament i:last-child { background: linear-gradient(270deg, transparent, #c8a165); transform-origin: left; }
.hx-bismillah { font-size: 1.6rem; }
.hx-eyebrow { font-family: 'Cinzel', serif; text-transform: uppercase; font-size: .85rem; letter-spacing: .5em; padding-left: .5em; color: #9a6b3f; }

.hx-names {
  position: relative; display: flex; flex-direction: column; align-items: center;
  font-family: 'Pinyon Script', 'Great Vibes', cursive; font-weight: 400;
  font-size: clamp(3.8rem, 17.5vw, 7.6rem); line-height: 1.02; margin: 4px 0 0;
  filter: drop-shadow(0 6px 12px rgba(154, 107, 63, .32));
}
.hx-name { display: inline-block; white-space: nowrap; }
.hx-letter {
  display: inline-block; padding: 0 .07em;
  background: linear-gradient(180deg, #ad720d 0%, #6e450b 48%, #c0a404 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}
.hx-amp { display: inline-block; font-family: 'Playfair Display', serif; font-style: italic; font-size: .42em; line-height: 1; color: #c8a165; margin: .08em 0; }
.hx-spark { position: absolute; pointer-events: none; overflow: visible; }
.hx-flourish { width: min(70vw, 320px); height: auto; margin-top: -2px; }
.hx-tagline { font-style: italic; font-size: 1.2rem; color: #7a5240; }
.hx-date {
  font-family: 'Cinzel', serif; text-transform: uppercase; font-size: .95rem;
  letter-spacing: .3em; padding: 11px 20px 11px 22px; color: #8a5a2f;
  border-top: 1px solid #c8a165; border-bottom: 1px solid #c8a165;
  background: rgba(255, 255, 255, .35); backdrop-filter: blur(3px);
}
.hx-scroll {
  position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%); z-index: 6;
  display: flex; flex-direction: column; align-items: center;
  font-family: 'Cinzel', serif; font-size: .72rem; letter-spacing: .4em; text-transform: uppercase; color: #8a5a2f;
}
.hx-scroll div { font-size: 2rem; line-height: .6; }
@media (max-width: 480px) {
  .hx-date { letter-spacing: .14em; font-size: .82rem; padding: 10px 14px 10px 16px; }
}
@media (max-width: 380px) {
  .hx { padding: 32px 14px 132px; }
  .hx-content { gap: 9px; }
  .hx-names { font-size: clamp(3.1rem, 16vw, 4rem); }
  .hx-eyebrow { font-size: .72rem; letter-spacing: .28em; }
  .hx-date { max-width: 94%; line-height: 1.5; }
  .hx-scroll { font-size: .62rem; }
}
@media (max-height: 700px) and (max-width: 600px) {
  .hx { min-height: 700px; padding-top: 24px; }
  .hx-scroll { bottom: 10px; }
}

@keyframes hxWave { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes hxCloud { from { transform: translateX(0); } to { transform: translateX(calc(100vw + 600px)); } }
@keyframes hxTw { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
@keyframes hxSun { 0%, 100% { transform: translateX(-50%) scale(1); } 50% { transform: translateX(-50%) scale(1.07); } }
@keyframes hxSpin { to { transform: rotate(360deg); } }
@keyframes hxFlap { 0%, 100% { transform: rotate(-24deg); } 50% { transform: rotate(32deg); } }
@keyframes hxBob { 0%, 100% { transform: rotate(-1.5deg) translateY(0); } 50% { transform: rotate(1.5deg) translateY(-1.5px); } }
@keyframes hxHead { 0%, 30%, 100% { transform: rotate(0deg); } 45%, 60% { transform: rotate(-9deg); } 75% { transform: rotate(5deg); } }
@keyframes hxTail { 0%, 100% { transform: rotate(-4deg); } 50% { transform: rotate(5deg); } }
@keyframes hxHeart { 0%, 40% { transform: translateY(0) scale(.3); opacity: 0; } 55% { opacity: 1; } 100% { transform: translateY(-34px) scale(1.1); opacity: 0; } }
@keyframes hxFall {
  0% { transform: translate3d(0, -5vh, 0) rotate(0deg); }
  25% { transform: translate3d(calc(var(--dx) * 1px), 28vh, 0) rotate(140deg); }
  50% { transform: translate3d(calc(var(--dx) * -.6px), 56vh, 0) rotate(260deg); }
  75% { transform: translate3d(calc(var(--dx) * .9px), 84vh, 0) rotate(400deg); }
  100% { transform: translate3d(calc(var(--dx) * -.3px), 112vh, 0) rotate(540deg); }
}

@media (prefers-reduced-motion: reduce) {
  .hx-wave, .hx-cloud, .hx-sun, .hx-glints span, .hx-stars, .hx-ring, .hx-gtw,
  .hx-wing, .hx-bob, .hx-head, .hx-tail, .hx-heart, .hx-fall { animation: none; }
}
`
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

const n1 = (n) => Math.round(n * 10) / 10
function pt(c, t) {
  const u = 1 - t
  const a = u * u * u
  const b = 3 * u * u * t
  const d = 3 * u * t * t
  const e = t * t * t
  return { x: a * c[0] + b * c[2] + d * c[4] + e * c[6], y: a * c[1] + b * c[3] + d * c[5] + e * c[7] }
}
function ang(c, t) {
  const p = pt(c, Math.max(0, t - 0.01))
  const q = pt(c, Math.min(1, t + 0.01))
  return (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI
}
const ROSE_TONES = [
  ['#fcecbe', '#e0b85c', '#f4da8e', '#cc9c3c', '#e8c870', '#b8862a'], 
  ['#fff8e2', '#f0dca6', '#fcf0c8', '#e8cd8c', '#f4e2b4', '#d4b062'], 
]

function Defs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        {ROSE_TONES.map((t, i) =>
          ['o', 'm', 'i'].map((k, j) => (
            <radialGradient key={`${i}${k}`} id={`hxgR${i}${k}`} cx=".38" cy=".35" r=".8">
              <stop offset="0" stopColor={t[j * 2]} />
              <stop offset="1" stopColor={t[j * 2 + 1]} />
            </radialGradient>
          )),
        )}
        <linearGradient id="hxgBl" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#d9a63e" />
          <stop offset=".5" stopColor="#f6e1a2" />
          <stop offset="1" stopColor="#fffbe8" />
        </linearGradient>
        <linearGradient id="hxgLeaf" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6e4a0e" />
          <stop offset="1" stopColor="#b8892c" />
        </linearGradient>
        <linearGradient id="hxgGoldA" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#dcb25a" />
          <stop offset=".5" stopColor="#f0d386" />
          <stop offset="1" stopColor="#fcebb8" />
        </linearGradient>
        <linearGradient id="hxgGoldB" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#f0d994" />
          <stop offset=".5" stopColor="#f8e8b8" />
          <stop offset="1" stopColor="#fff8e0" />
        </linearGradient>
        <radialGradient id="hxgGoldCore" cx=".4" cy=".35" r=".8">
          <stop offset="0" stopColor="#c8962f" />
          <stop offset="1" stopColor="#6b430e" />
        </radialGradient>
        <linearGradient id="hxgFeather" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e4d9c9" />
          <stop offset=".45" stopColor="#faf6ef" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="hxgDove" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e9dfd1" />
        </linearGradient>
        <linearGradient id="hxgBird" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#86a9c0" />
          <stop offset=".48" stopColor="#86a9c0" />
          <stop offset=".62" stopColor="#f7d9c2" />
          <stop offset="1" stopColor="#fdeedd" />
        </linearGradient>
      </defs>
    </svg>
  )
}
const PETAL = 'M0 0 C-30 -8 -44 -40 -20 -52 C-4 -58 14 -56 22 -44 C36 -30 22 -6 0 0 Z'

function Rose({ x, y, r, rot = 0, tone = 0 }) {
  return (
    <g transform={`translate(${n1(x)} ${n1(y)}) rotate(${n1(rot)}) scale(${n1(r / 50)})`}>
      <circle cx="2" cy="4" r="50" fill="rgba(90,60,10,.2)" />
      {[0, 1, 2, 3, 4].map((k) => (
        <path key={`o${k}`} d={PETAL} transform={`rotate(${k * 72})`} fill={`url(#hxgR${tone % 2}o)`} stroke="rgba(150,105,30,.38)" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4].map((k) => (
        <path key={`m${k}`} d={PETAL} transform={`rotate(${k * 72 + 36}) scale(.72)`} fill={`url(#hxgR${tone % 2}m)`} stroke="rgba(150,105,30,.4)" strokeWidth="1.2" />
      ))}
      {[0, 1, 2, 3].map((k) => (
        <path key={`i${k}`} d={PETAL} transform={`rotate(${k * 90 + 12}) scale(.44)`} fill={`url(#hxgR${tone % 2}i)`} stroke="rgba(150,105,30,.45)" strokeWidth="1.6" />
      ))}
      <path d="M0 -7 C9 -9 13 0 6 7 C-1 13 -11 8 -10 0 C-9 -10 3 -14 11 -8" fill="none" stroke="rgba(140,95,25,.65)" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="-14" cy="-24" rx="12" ry="5" transform="rotate(-35 -14 -24)" fill="#fff" opacity=".22" />
    </g>
  )
}

const BLOSSOM_PETAL = 'M0 0 C-13 -8 -17 -30 -9 -40 C-5 -44 -2 -41 0 -37 C2 -41 5 -44 9 -40 C17 -30 13 -8 0 0 Z'

function Blossom({ x, y, r, rot = 0 }) {
  return (
    <g transform={`translate(${n1(x)} ${n1(y)}) rotate(${n1(rot)}) scale(${n1(r / 40)})`}>
      {[0, 1, 2, 3, 4].map((k) => (
        <path key={k} d={BLOSSOM_PETAL} transform={`rotate(${k * 72})`} fill="url(#hxgBl)" stroke="rgba(180,130,40,.5)" strokeWidth=".9" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((k) => {
        const a = (k * 45 * Math.PI) / 180
        return (
          <g key={k}>
            <line x1="0" y1="0" x2={n1(Math.sin(a) * 11)} y2={n1(-Math.cos(a) * 11)} stroke="#c8962f" strokeWidth=".9" />
            <circle cx={n1(Math.sin(a) * 11)} cy={n1(-Math.cos(a) * 11)} r="1.7" fill="#8a5a14" />
          </g>
        )
      })}
      <circle r="3.4" fill="#a8721c" />
    </g>
  )
}

function Leaf({ x, y, rot, s }) {
  return (
    <g transform={`translate(${n1(x)} ${n1(y)}) rotate(${n1(rot)}) scale(${n1(s)})`}>
      <path d="M0 0 C8 -11 24 -13 36 0 C24 13 8 11 0 0 Z" fill="url(#hxgLeaf)" stroke="rgba(70,45,5,.5)" strokeWidth=".7" />
      <path d="M2 0 L32 0" stroke="rgba(255,226,150,.55)" strokeWidth=".8" />
    </g>
  )
}
const GOLD_PETAL = 'M0 0 C-26 -18 -34 -62 -12 -92 C-6 -100 6 -100 12 -92 C34 -62 26 -18 0 0 Z'
const GOLD_RINGS = [
  { n: 12, s: 1.36, off: 0, g: 'A', dur: 90 },
  { n: 12, s: 1.14, off: 15, g: 'B', dur: 70 },
  { n: 10, s: 0.88, off: 6, g: 'A', dur: 80 },
  { n: 8, s: 0.62, off: 22, g: 'B', dur: 60 },
  { n: 6, s: 0.38, off: 10, g: 'A', dur: 50 },
]

function GoldFlower({ flip = false }) {
  return (
    <svg className="hx-gold" viewBox="0 0 400 400" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((k) => (
        <g key={`l${k}`} transform={`translate(200 200) rotate(${30 + k * 60}) scale(4.5 2.5)`}>
          <path d="M0 0 C8 -11 24 -13 36 0 C24 13 8 11 0 0 Z" fill="url(#hxgLeaf)" stroke="rgba(70,45,5,.55)" strokeWidth=".5" />
          <path d="M2 0 L32 0" stroke="rgba(255,226,150,.55)" strokeWidth=".5" />
        </g>
      ))}
      {GOLD_RINGS.map((ring, i) => (
        <g
          key={i}
          className="hx-ring"
          style={{ transformOrigin: '200px 200px', animationDuration: `${ring.dur}s`, animationDirection: (i % 2 === 0) !== flip ? 'normal' : 'reverse' }}
        >
          {Array.from({ length: ring.n }, (_, k) => (
            <g key={k} transform={`translate(200 200) rotate(${ring.off + (k * 360) / ring.n}) scale(${ring.s})`}>
              <path d={GOLD_PETAL} fill={`url(#hxgGold${ring.g})`} stroke="rgba(170,125,40,.55)" strokeWidth={0.9 / ring.s} />
              <path d="M0 -8 C0 -40 0 -68 0 -86" fill="none" stroke="rgba(170,125,40,.4)" strokeWidth={0.9 / ring.s} strokeLinecap="round" />
            </g>
          ))}
        </g>
      ))}
      <circle cx="200" cy="200" r="22" fill="url(#hxgGoldCore)" stroke="rgba(90,55,10,.5)" strokeWidth="1" />
      {Array.from({ length: 14 }, (_, k) => {
        const a = (k * 360) / 14
        const rad = (a * Math.PI) / 180
        return (
          <g key={k}>
            <line x1="200" y1="200" x2={n1(200 + Math.sin(rad) * 30)} y2={n1(200 - Math.cos(rad) * 30)} stroke="#e8c56e" strokeWidth="1.2" />
            <circle cx={n1(200 + Math.sin(rad) * 30)} cy={n1(200 - Math.cos(rad) * 30)} r="2.6" fill="#fff0b8" stroke="#c8962f" strokeWidth=".6" />
          </g>
        )
      })}
      <circle cx="200" cy="200" r="7" fill="#5e3a0c" />
      <circle cx="198" cy="198" r="2.4" fill="#d9a94a" />
      {[
        [58, 96, 7],
        [340, 70, 5],
        [352, 318, 6],
        [48, 330, 5],
      ].map(([x, y, r], i) => (
        <path
          key={i}
          className="hx-gtw"
          style={{ animationDelay: `${i * 0.6}s` }}
          transform={`translate(${x} ${y}) scale(${r / 10})`}
          d="M0 -10 L2.4 -2.4 L10 0 L2.4 2.4 L0 10 L-2.4 2.4 L-10 0 L-2.4 -2.4 Z"
          fill="#f1cf7a"
        />
      ))}
    </svg>
  )
}

const TWIG = [110, 222, 190, 176, 262, 168, 352, 134]
const TWIG_PATH = 'M110 222 C190 176 262 168 352 134'
const BIRD_T = [0.4, 0.8]

function buildBouquet(seed) {
  const r = rng(seed)
  const leaves = []
  for (let i = 0; i < 26; i++) {
    leaves.push({ x: 34 + (r() - 0.5) * 20, y: 332, rot: -88 + (i / 25) * 84 + (r() - 0.5) * 8, s: 1.2 + r() * 1.3 })
  }
  const roses = [
    { x: 88, y: 258, r: 38, tone: 0 },
    { x: 154, y: 274, r: 32, tone: 1 },
    { x: 52, y: 212, r: 29, tone: 2 },
    { x: 122, y: 214, r: 27, tone: 0 },
    { x: 206, y: 292, r: 24, tone: 2 },
    { x: 24, y: 268, r: 26, tone: 1 },
    { x: 84, y: 168, r: 20, tone: 1 },
  ]
    .map((o) => ({ ...o, x: o.x + (r() - 0.5) * 6, y: o.y + (r() - 0.5) * 6, rot: r() * 360 }))
    .sort((a, b) => a.y - b.y)
  const blooms = Array.from({ length: 10 }, () => ({ x: 20 + r() * 230, y: 150 + r() * 160, r: 11 + r() * 5, rot: r() * 72 }))
  const dots = Array.from({ length: 60 }, () => ({ x: r() * 270, y: 130 + r() * 190, r: 1.2 + r() * 1.6 }))
  const twigLeaves = []
  for (let i = 0; i <= 8; i++) {
    const t = i / 8
    const p = pt(TWIG, t)
    const a = ang(TWIG, t)
    twigLeaves.push({ x: p.x, y: p.y, rot: a - 50 - r() * 20, s: 0.7 + r() * 0.4 })
    twigLeaves.push({ x: p.x, y: p.y, rot: a + 50 + r() * 20, s: 0.6 + r() * 0.4 })
  }
  const twigBlooms = [0.3, 0.64, 0.97].map((t) => {
    const p = pt(TWIG, t)
    return { x: p.x, y: p.y - 5, r: 12, rot: r() * 72 }
  })
  return { leaves, roses, blooms, dots, twigLeaves, twigBlooms }
}

function LoveBird() {
  return (
    <g className="hx-bob">
      <g className="hx-tail">
        <path d="M-12 -14 C-26 -8 -38 0 -46 10 C-36 10 -30 8 -26 6 C-22 4 -16 0 -8 -4 Z" fill="#5a7c95" />
      </g>
      <path d="M-1 0 L-1 6 M5 0 L5 6" stroke="#c98f6a" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M-14 -8 C-18 -28 -4 -40 12 -32 C24 -26 24 -8 12 -2 C2 3 -10 2 -14 -8 Z" fill="url(#hxgBird)" />
      <path d="M-8 -26 C2 -33 14 -24 15 -10 C8 -3 -3 -5 -9 -14 Z" fill="#6f93ab" stroke="rgba(40,60,80,.28)" strokeWidth=".7" />
      <path d="M-3 -22 L9 -9 M1 -25 L12 -12" stroke="rgba(255,255,255,.35)" strokeWidth=".8" strokeLinecap="round" />
      <g className="hx-head">
        <circle cx="12" cy="-36" r="10" fill="#8fb2c8" />
        <circle cx="17" cy="-32" r="3" fill="#f1a3a0" opacity=".75" />
        <path d="M21 -38 L30 -34.5 L21 -31 Z" fill="#e8a76a" />
        <circle cx="16.5" cy="-39" r="1.9" fill="#2b1d1a" />
        <circle cx="17.1" cy="-39.7" r=".6" fill="#fff" />
      </g>
    </g>
  )
}

function Bouquet({ data, birds }) {
  const b1 = pt(TWIG, BIRD_T[0])
  const b2 = pt(TWIG, BIRD_T[1])
  return (
    <svg viewBox="0 0 440 320" aria-hidden="true">
      <path d={TWIG_PATH} fill="none" stroke="#7a5410" strokeWidth="4.5" strokeLinecap="round" />
      {data.twigLeaves.map((l, i) => (
        <Leaf key={`t${i}`} {...l} />
      ))}
      {data.leaves.map((l, i) => (
        <Leaf key={i} {...l} />
      ))}
      {data.roses.map((o, i) => (
        <Rose key={i} {...o} />
      ))}
      {data.blooms.map((b, i) => (
        <Blossom key={i} {...b} />
      ))}
      {data.twigBlooms.map((b, i) => (
        <Blossom key={`tb${i}`} {...b} />
      ))}
      {data.dots.map((d, i) => (
        <circle key={i} cx={n1(d.x)} cy={n1(d.y)} r={n1(d.r)} fill="#fff6d8" opacity=".95" />
      ))}
      {birds && (
        <>
          <g transform={`translate(${n1(b1.x)} ${n1(b1.y - 8)}) scale(1.25)`}>
            <LoveBird />
          </g>
          <g transform={`translate(${n1(b2.x)} ${n1(b2.y - 8)}) scale(-1.25 1.25)`}>
            <LoveBird />
          </g>
          <g transform={`translate(${n1((b1.x + b2.x) / 2)} ${n1(Math.min(b1.y, b2.y) - 52)})`}>
            <g className="hx-heart">
              <path d="M0 7 C-12 -3 -9 -12 0 -7 C9 -12 12 -3 0 7 Z" fill="#dcae45" />
            </g>
          </g>
        </>
      )}
    </svg>
  )
}
const FEATHER = 'M0 0 C7 -12 12 -48 5 -86 C1 -92 -4 -92 -6 -86 C-13 -48 -8 -12 0 0 Z'
const TAIL_FEATHER = 'M0 0 C5 -8 9 -30 4 -58 C1 -63 -3 -63 -5 -58 C-9 -30 -5 -8 0 0 Z'
const FEATHER_STROKE = '#d3c6b3'

function Wing({ far }) {
  const prim = [-36, -27, -18, -9, 0, 9, 18, 26]
  const cov = [-24, -12, 0, 12, 24]
  return (
    <g transform="rotate(-10)" opacity={far ? 0.88 : 1}>
      {prim.map((a) => (
        <path key={`p${a}`} d={FEATHER} transform={`rotate(${a})`} fill={far ? '#e6dccd' : 'url(#hxgFeather)'} stroke={FEATHER_STROKE} strokeWidth=".9" />
      ))}
      {cov.map((a) => (
        <path key={`c${a}`} d={FEATHER} transform={`rotate(${a}) scale(.5 .52)`} fill={far ? '#efe6d8' : '#fffdf9'} stroke={FEATHER_STROKE} strokeWidth="1.4" />
      ))}
    </g>
  )
}

function Dove({ w, flap = 0.8, delay = 0, style }) {
  const t = { animationDuration: `${flap}s`, transformOrigin: '108px 58px' }
  const bodyD = 'M56 66 C60 48 92 40 124 46 C146 50 160 60 162 72 C158 86 128 94 96 92 C70 90 54 82 56 66 Z'
  return (
    <svg className="hx-dove" viewBox="-6 -44 196 150" width={w} style={style} aria-hidden="true">
      <g className="hx-wing far" style={{ ...t, animationDelay: `${delay + 0.14}s` }}>
        <g transform="translate(108 58)">
          <Wing far />
        </g>
      </g>
      <g transform="translate(62 70)">
        {[-12, -6, 0, 6, 12].map((a) => (
          <path key={a} d={TAIL_FEATHER} transform={`rotate(${-90 + a})`} fill="url(#hxgFeather)" stroke={FEATHER_STROKE} strokeWidth=".9" />
        ))}
      </g>
      <path d={bodyD} fill="#fff" stroke="#d3c6b3" strokeWidth="2.4" />
      <circle cx="150" cy="50" r="14" fill="#fff" stroke="#d3c6b3" strokeWidth="2.4" />
      <path d={bodyD} fill="url(#hxgDove)" />
      <circle cx="150" cy="50" r="13.4" fill="#fffdf9" />
      <path d="M163 48 L178 52.5 L163 57 Z" fill="#e2a999" />
      <circle cx="157" cy="45" r="2.2" fill="#2b1d1a" />
      <circle cx="157.7" cy="44.3" r=".7" fill="#fff" />
      <path d="M84 70 C98 78 120 78 138 68" fill="none" stroke="#e5dac9" strokeWidth="1.2" strokeLinecap="round" />
      <g className="hx-wing" style={t}>
        <g transform="translate(108 58)">
          <Wing />
        </g>
      </g>
    </svg>
  )
}

function Doves() {
  return (
    <motion.div
      className="hx-doves"
      initial={{ x: '-30vw', y: 0 }}
      animate={{ x: '125vw', y: [0, -30, 6, -44, -10] }}
      transition={{
        x: { duration: 22, delay: 3.4, repeat: Infinity, ease: 'linear', repeatDelay: 5 },
        y: { duration: 9, delay: 3.4, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <Dove w={120} flap={0.8} />
      <Dove w={84} flap={0.72} delay={0.3} style={{ position: 'absolute', left: -78, top: 40 }} />
    </motion.div>
  )
}
const WINGS_UP = 'M2 12 Q11 1 20 11 Q29 1 38 12'
const WINGS_DOWN = 'M2 7 Q11 13 20 11 Q29 13 38 7'

const BIRDS = [
  { y: '6%', size: 20, dur: 25, delay: 7.5, dir: -1, flap: 0.6 },
  { y: '33%', size: 17, dur: 27, delay: 11, dir: 1, flap: 0.5 },
  { y: '24%', size: 22, dur: 21, delay: 14, dir: -1, flap: 0.62 },
]

function Bird({ y, size, dur, delay, dir, flap }) {
  const from = dir > 0 ? '-14vw' : '114vw'
  const to = dir > 0 ? '114vw' : '-14vw'
  return (
    <motion.div
      className="hx-bird"
      style={{ top: y, width: size }}
      initial={{ x: from, y: 0 }}
      animate={{ x: to, y: [0, -16, 6, -10, 0] }}
      transition={{
        x: { duration: dur, delay, repeat: Infinity, ease: 'linear', repeatDelay: 2 },
        y: { duration: dur / 2.5, delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <svg viewBox="0 0 40 20" style={{ transform: dir < 0 ? 'scaleX(-1)' : 'none' }}>
        <motion.path
          d={WINGS_UP}
          fill="none"
          stroke="#7a5240"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ d: [WINGS_UP, WINGS_DOWN, WINGS_UP] }}
          transition={{ duration: flap, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  )
}
const FALLING = (() => {
  const r = rng(77)
  return Array.from({ length: 16 }, () => ({
    left: `${n1(r() * 100)}%`,
    s: n1(9 + r() * 9),
    d: `${n1(11 + r() * 8)}s`,
    w: `${n1(3 + r() * 12)}s`,
    dx: n1(40 + r() * 70),
  }))
})()

function Name({ text, base }) {
  return (
    <span className="hx-name" aria-label={text}>
      {text.split('').map((c, i) => (
        <motion.span
          key={i}
          className="hx-letter"
          initial={{ opacity: 0, y: 46, scale: 0.5, rotate: -8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
          transition={{ delay: base + i * 0.11, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  )
}

const SPARKLES = [
  { x: '8%', y: '14%', s: 18, d: 0 },
  { x: '90%', y: '22%', s: 14, d: 0.7 },
  { x: '16%', y: '58%', s: 12, d: 1.4 },
  { x: '84%', y: '66%', s: 20, d: 0.3 },
  { x: '50%', y: '2%', s: 12, d: 1.9 },
  { x: '60%', y: '92%', s: 14, d: 1.1 },
]

const WAVE = 'M0 30 Q150 0 300 30 T600 30 T900 30 T1200 30 T1500 30 T1800 30 T2100 30 T2400 30 V120 H0 Z'
const BQ_LEFT = buildBouquet(5)
const BQ_RIGHT = buildBouquet(41)

export default function Hero({ show }) {
  const g = invite.groom.length
  const groomAt = 3.0
  const ampAt = groomAt + g * 0.11 + 0.25
  const brideAt = ampAt + 0.45
  const doneAt = brideAt + invite.bride.length * 0.11 + 0.6

  const topIn = (side) => ({
    initial: { opacity: 0, scale: 0.6, rotate: -30 },
    animate: show ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.6, rotate: -30 },
    transition: { delay: side === 'l' ? 2.3 : 2.6, duration: 1.6, ease: [0.22, 1, 0.36, 1] },
  })
  const bottomIn = (side) => ({
    initial: { opacity: 0, y: 50 },
    animate: show ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { delay: side === 'l' ? 2.5 : 2.8, duration: 1.4, ease: 'easeOut' },
  })

  return (
    <section className="hx">
      <style>{css}</style>
      <Defs />

      <div className="hx-sky" />
      <div className="hx-stars" />
      <div className="hx-sun" />
      <div className="hx-cloud c1" />
      <div className="hx-cloud c2" />
      <div className="hx-cloud c3" />

      {show && BIRDS.map((b, i) => <Bird key={i} {...b} />)}

      {}
      <div className="hx-sea">
        <div className="hx-glints">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} style={{ animationDelay: `${i * 0.5}s`, top: `${10 + i * 11}%`, width: 40 + (i % 3) * 22 }} />
          ))}
        </div>
        <svg className="hx-wave w1" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path d={WAVE} />
        </svg>
        <svg className="hx-wave w2" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path d={WAVE} />
        </svg>
        <svg className="hx-wave w3" viewBox="0 0 2400 120" preserveAspectRatio="none">
          <path d={WAVE} />
        </svg>
      </div>

      {}
      <motion.div className="hx-corner tl" {...topIn('l')}>
        <GoldFlower />
      </motion.div>
      <motion.div className="hx-corner tr" {...topIn('r')}>
        <div className="hx-mirror">
          <GoldFlower flip />
        </div>
      </motion.div>

      {}
      <motion.div className="hx-bq l" {...bottomIn('l')}>
        <Bouquet data={BQ_LEFT} birds />
      </motion.div>
      <motion.div className="hx-bq r" {...bottomIn('r')}>
        <div className="hx-mirror">
          <Bouquet data={BQ_RIGHT} />
        </div>
      </motion.div>

      {show && <Doves />}

      {show &&
        FALLING.map((f, i) => (
          <i key={i} className="hx-fall" style={{ left: f.left, '--s': f.s, '--d': f.d, '--w': f.w, '--dx': f.dx }} />
        ))}

      {show && (
        <div className="hx-content">
          <motion.div
            className="hx-ornament"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            aria-hidden="true"
          >
            <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.5, duration: 1 }} />
            <span>✦</span>
            <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.5, duration: 1 }} />
          </motion.div>

          <motion.p
            className="arabic hx-bismillah"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
          >
            بسم اللہ الرحمن الرحیم
          </motion.p>

          <motion.p
            className="hx-eyebrow"
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ delay: 2.8, duration: 1.4 }}
          >
            The Nikkah of
          </motion.p>

          <h1 className="hx-names">
            <Name text={invite.groom} base={groomAt} />
            <motion.span
              className="hx-amp"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: ampAt, type: 'spring', stiffness: 120, damping: 11 }}
            >
              &amp;
            </motion.span>
            <Name text={invite.bride} base={brideAt} />

            {SPARKLES.map((s, i) => (
              <motion.svg
                key={i}
                className="hx-spark"
                viewBox="0 0 20 20"
                style={{ left: s.x, top: s.y, width: s.s, height: s.s }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1, 0.3, 1, 0], opacity: [0, 1, 0.5, 1, 0], rotate: [0, 45, 90] }}
                transition={{ delay: doneAt + s.d, duration: 3.2, repeat: Infinity, repeatDelay: 1.2 }}
              >
                <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="#e2bd80" />
              </motion.svg>
            ))}
          </h1>

          <motion.svg
            className="hx-flourish"
            viewBox="0 0 400 40"
            fill="none"
            stroke="#c8a165"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <motion.path
              d="M10 22 C80 4 140 38 200 20 S320 4 390 22"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: doneAt - 0.4, duration: 1.4, ease: 'easeInOut' }}
            />
            <motion.path
              d="M200 12 L206 20 L200 28 L194 20 Z"
              fill="#c8a165"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ transformOrigin: '200px 20px' }}
              transition={{ delay: doneAt + 0.9, type: 'spring' }}
            />
          </motion.svg>

          <motion.p
            className="hx-tagline"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: doneAt + 0.3, duration: 0.8 }}
          >
            A celebration of love, family &amp; duas
          </motion.p>

          <motion.p
            className="hx-date"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: doneAt + 0.7, duration: 0.8 }}
          >
            {invite.date}
          </motion.p>
        </div>
      )}

      {show && (
        <motion.div
          className="hx-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: doneAt + 1.2 }}
        >
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
            ⌄
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
