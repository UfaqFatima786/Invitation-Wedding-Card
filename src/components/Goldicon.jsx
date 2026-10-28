import { motion } from 'framer-motion'

// Sirf sunehri outline wale icons. Scroll par line draw hoti hai.
const steam = (x) => ({ t: 'path', d: `M${x} 12 C${x - 4} 8 ${x + 4} 6 ${x} 1` })

const ICONS = {
    // ---------- Dress code ----------
    ladies: {
        box: '0 0 120 170',
        shapes: [
            { t: 'circle', cx: 60, cy: 9, r: 7 },
            { t: 'path', d: 'M45 20 Q60 38 75 20' },
            { t: 'path', d: 'M45 20 L40 32 L50 60 L70 60 L80 32 L75 20' },
            { t: 'path', d: 'M50 60 Q60 67 70 60' },
            { t: 'path', d: 'M50 60 C42 100 22 132 12 156 L108 156 C98 132 78 100 70 60' },
            { t: 'path', d: 'M12 156 Q24 148 36 156 T60 156 T84 156 T108 156' },
            { t: 'path', d: 'M60 66 L60 152' },
            { t: 'path', d: 'M54 68 C48 102 40 132 36 152' },
            { t: 'path', d: 'M66 68 C72 102 80 132 84 152' },
            { t: 'path', d: 'M45 22 C18 46 30 92 20 130 Q14 142 22 152' },
            { t: 'circle', cx: 60, cy: 100, r: 1.8 },
            { t: 'circle', cx: 48, cy: 124, r: 1.8 },
            { t: 'circle', cx: 72, cy: 124, r: 1.8 },
            { t: 'circle', cx: 60, cy: 140, r: 1.8 },
        ],
    },
    gents: {
        box: '0 0 120 170',
        shapes: [
            { t: 'circle', cx: 60, cy: 9, r: 7 },
            { t: 'path', d: 'M50 17 L60 28 L70 17' },
            { t: 'path', d: 'M50 17 Q60 12 70 17' },
            { t: 'path', d: 'M34 28 L38 156 L82 156 L86 28' },
            { t: 'path', d: 'M34 28 C28 50 26 70 24 90 L36 94 L38 60' },
            { t: 'path', d: 'M86 28 C92 50 94 70 96 90 L84 94 L82 60' },
            { t: 'path', d: 'M60 28 L60 156' },
            { t: 'circle', cx: 60, cy: 42, r: 2.2 },
            { t: 'circle', cx: 60, cy: 62, r: 2.2 },
            { t: 'circle', cx: 60, cy: 82, r: 2.2 },
            { t: 'circle', cx: 60, cy: 102, r: 2.2 },
            { t: 'circle', cx: 60, cy: 122, r: 2.2 },
            { t: 'path', d: 'M68 96 H78' },
            { t: 'path', d: 'M38 146 H82' },
            { t: 'path', d: 'M60 128 L64 134 L60 140 L56 134 Z' },
        ],
    },

    // ---------- Menu ----------
    biryani: {
        box: '0 0 64 64',
        shapes: [
            steam(24),
            steam(32),
            steam(40),
            { t: 'path', d: 'M14 34 C14 22 24 16 32 16 C40 16 50 22 50 34' },
            { t: 'path', d: 'M8 34 H56 C56 48 44 58 32 58 C20 58 8 48 8 34 Z' },
            { t: 'circle', cx: 24, cy: 26, r: 1.4 },
            { t: 'circle', cx: 34, cy: 24, r: 1.4 },
            { t: 'circle', cx: 41, cy: 29, r: 1.4 },
            { t: 'circle', cx: 29, cy: 30, r: 1.4 },
        ],
    },
    karahi: {
        box: '0 0 64 64',
        shapes: [
            steam(26),
            steam(38),
            { t: 'path', d: 'M10 32 H54 C54 48 44 56 32 56 C20 56 10 48 10 32 Z' },
            { t: 'path', d: 'M10 34 H3' },
            { t: 'path', d: 'M54 34 H61' },
            { t: 'path', d: 'M24 56 L20 62' },
            { t: 'path', d: 'M40 56 L44 62' },
            { t: 'path', d: 'M18 32 C20 24 26 24 28 32' },
            { t: 'path', d: 'M32 32 C34 22 42 22 44 32' },
        ],
    },
    qorma: {
        box: '0 0 64 64',
        shapes: [
            { t: 'path', d: 'M8 34 H56 C56 48 44 58 32 58 C20 58 8 48 8 34 Z' },
            { t: 'path', d: 'M8 34 C8 29 56 29 56 34' },
            { t: 'path', d: 'M20 44 C26 48 38 48 44 44' },
            { t: 'ellipse', cx: 46, cy: 12, rx: 4.5, ry: 7 },
            { t: 'path', d: 'M45 19 L38 33' },
            { t: 'circle', cx: 20, cy: 22, r: 1.6 },
            { t: 'circle', cx: 28, cy: 18, r: 1.6 },
        ],
    },
    salad: {
        box: '0 0 64 64',
        shapes: [
            { t: 'path', d: 'M8 36 H56 C56 49 45 58 32 58 C19 58 8 49 8 36 Z' },
            { t: 'path', d: 'M16 36 C10 24 20 16 28 24 C31 28 29 33 24 36' },
            { t: 'path', d: 'M36 36 C32 22 44 14 52 22 C55 28 50 33 44 36' },
            { t: 'circle', cx: 32, cy: 28, r: 6 },
            { t: 'path', d: 'M29 26 L35 30' },
        ],
    },
    sweet: {
        box: '0 0 64 64',
        shapes: [
            { t: 'circle', cx: 24, cy: 28, r: 8 },
            { t: 'circle', cx: 40, cy: 28, r: 8 },
            { t: 'path', d: 'M10 36 H54 L49 52 C47 56 40 58 32 58 C24 58 17 56 15 52 Z' },
            { t: 'path', d: 'M32 8 L33.5 12 L37.5 13.5 L33.5 15 L32 19 L30.5 15 L26.5 13.5 L30.5 12 Z' },
        ],
    },
    chai: {
        box: '0 0 64 64',
        shapes: [
            steam(24),
            steam(34),
            { t: 'path', d: 'M12 28 H44 V40 C44 50 38 54 28 54 C18 54 12 50 12 40 Z' },
            { t: 'path', d: 'M44 31 C55 31 55 44 44 44' },
            { t: 'path', d: 'M6 58 H50' },
            { t: 'path', d: 'M28 28 V54' },
        ],
    },

    // ---------- Barat ----------
    dhol: {
        box: '0 0 100 100',
        shapes: [
            { t: 'ellipse', cx: 22, cy: 56, rx: 7, ry: 19 },
            { t: 'ellipse', cx: 78, cy: 56, rx: 7, ry: 19 },
            { t: 'path', d: 'M22 37 C40 31 60 31 78 37' },
            { t: 'path', d: 'M22 75 C40 81 60 81 78 75' },
            { t: 'path', d: 'M30 41 L38 72 L46 41 L54 72 L62 41 L70 72' },
            { t: 'path', d: 'M30 14 L52 34' },
            { t: 'path', d: 'M70 12 L58 32' },
            { t: 'circle', cx: 29, cy: 13, r: 2.5 },
            { t: 'circle', cx: 71, cy: 11, r: 2.5 },
        ],
    },
    trumpet: {
        box: '0 0 100 100',
        shapes: [
            { t: 'path', d: 'M12 58 H66' },
            { t: 'path', d: 'M12 66 H62' },
            { t: 'path', d: 'M66 58 L92 40 V84 L62 66' },
            { t: 'path', d: 'M92 40 C98 62 98 62 92 84' },
            { t: 'path', d: 'M6 54 V70' },
            { t: 'path', d: 'M26 58 C26 38 48 38 48 58' },
            { t: 'path', d: 'M34 50 V36' },
            { t: 'path', d: 'M42 50 V36' },
            { t: 'circle', cx: 34, cy: 33, r: 3 },
            { t: 'circle', cx: 42, cy: 33, r: 3 },
        ],
    },
    horse: {
        box: '0 0 120 110',
        shapes: [
            // ghora
            { t: 'path', d: 'M30 56 C36 46 78 44 90 54 C94 60 90 68 84 70 L84 100' },
            { t: 'path', d: 'M74 100 L74 72' },
            { t: 'path', d: 'M50 72 L50 100' },
            { t: 'path', d: 'M40 100 L40 70 C32 68 28 62 30 56' },
            { t: 'path', d: 'M90 54 L100 36 L111 42 L109 50 L99 52' },
            { t: 'path', d: 'M96 40 L90 33' },
            { t: 'path', d: 'M92 44 L84 38' },
            { t: 'path', d: 'M30 56 C18 60 16 74 20 86' },
            { t: 'circle', cx: 104, cy: 42, r: 1.4 },
            // zeen
            { t: 'path', d: 'M48 48 L52 64 L72 64 L74 48' },
            // dulha
            { t: 'circle', cx: 62, cy: 18, r: 6 },
            { t: 'path', d: 'M55 16 C56 6 68 6 69 16' },
            { t: 'path', d: 'M62 24 L62 46' },
            { t: 'path', d: 'M62 31 L78 38' },
            { t: 'path', d: 'M62 46 L68 64' },
            { t: 'path', d: 'M78 38 L98 44' },
        ],
    },
    family: {
        box: '0 0 100 100',
        shapes: [
            { t: 'circle', cx: 20, cy: 22, r: 7 },
            { t: 'path', d: 'M20 30 C11 32 9 44 9 52 V90 H31 V52 C31 44 29 32 20 30 Z' },
            { t: 'path', d: 'M20 40 V90' },
            { t: 'circle', cx: 52, cy: 22, r: 7 },
            { t: 'path', d: 'M52 30 C45 32 43 42 41 56 L36 90 H68 L63 56 C61 42 59 32 52 30 Z' },
            { t: 'path', d: 'M44 24 C36 36 40 60 38 82' },
            { t: 'circle', cx: 82, cy: 56, r: 5 },
            { t: 'path', d: 'M82 62 L75 90 H89 Z' },
        ],
    },
    palace: {
        box: '0 0 100 100',
        shapes: [
            { t: 'path', d: 'M36 50 C36 24 64 24 64 50' },
            { t: 'path', d: 'M50 26 V12' },
            { t: 'path', d: 'M45 16 H55' },
            { t: 'path', d: 'M20 92 V50 H80 V92' },
            { t: 'path', d: 'M8 92 V46 H26 V92' },
            { t: 'path', d: 'M74 92 V46 H92 V92' },
            { t: 'path', d: 'M8 46 C8 34 26 34 26 46' },
            { t: 'path', d: 'M74 46 C74 34 92 34 92 46' },
            { t: 'path', d: 'M42 92 V70 C42 58 58 58 58 70 V92' },
            { t: 'path', d: 'M30 72 V66 C30 60 36 60 36 66 V72 Z' },
            { t: 'path', d: 'M64 72 V66 C64 60 70 60 70 66 V72 Z' },
            { t: 'path', d: 'M4 92 H96' },
        ],
    },
    petal: {
        box: '0 0 70 70',
        shapes: [
            { t: 'path', d: 'M10 50 C10 20 40 8 60 20 C60 50 32 62 10 50 Z' },
            { t: 'path', d: 'M12 48 L52 24' },
        ],
    },
}

export const goldColor = '#c8a165'

export default function GoldIcon({ name, className = '', delay = 0, width, strokeWidth = 1.8 }) {
    const icon = ICONS[name]
    if (!icon) return null
    return (
        <svg
            className={`gold-icon ${className}`}
            viewBox={icon.box}
            width={width}
            fill="none"
            stroke={goldColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {icon.shapes.map(({ t, ...props }, i) => {
                const Tag = motion[t]
                return (
                    <Tag
                        key={i}
                        {...props}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, delay: delay + i * 0.07, ease: 'easeInOut' }}
                    />
                )
            })}
        </svg>
    )
}