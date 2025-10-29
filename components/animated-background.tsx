"use client"

import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

type AnimatedBackgroundProps = {
  density?: number
  className?: string
}

// Small, friendly animated SVG shapes that float subtly in the background
export function AnimatedBackground({ density = 8, className = "" }: AnimatedBackgroundProps) {
  const isMobile = useIsMobile()
  const reduced = usePrefersReducedMotion()
  // Lower density on mobile and disable entirely if prefers-reduced-motion.
  const effectiveDensity = reduced ? 0 : Math.max(0, Math.round((isMobile ? 0.5 : 1) * density))
  const items = Array.from({ length: effectiveDensity })

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 -z-20 overflow-hidden ${className}`}
    >
      {items.map((_, i) => {
        const duration = 12 + (i % 5)
        const delay = (i * 0.7) % 5
        const left = `${(i * 17) % 100}%`
        const top = `${(i * 23) % 100}%`
        const size = 80 + (i % 4) * 20

        const colors = [
          "oklch(0.82 0.08 240 / 0.25)",
          "oklch(0.78 0.1 210 / 0.25)",
          "oklch(0.9 0.06 160 / 0.25)",
          "oklch(0.85 0.09 280 / 0.25)",
        ]
        const fill = colors[i % colors.length]

        return (
          <motion.svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="absolute sm:blur-[1px]"
            style={{ left, top }}
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={reduced ? undefined : { opacity: 1, y: [0, -8, 0] }}
            transition={reduced ? undefined : { duration, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={fill} />
                <stop offset="100%" stopColor="oklch(0.95 0 0 / 0.2)" />
              </linearGradient>
            </defs>
            {/* Friendly blob shape */}
            <motion.path
              d="M59.6,12.4c8.7,3.3,17.5,7.9,21.2,15.8c3.8,7.9,2.5,18.9-2.8,27.5c-5.3,8.6-14.3,14.9-24.3,18.2c-10,3.3-20.9,3.6-29.1-1.7C16.3,68.8,10.8,57.7,9.4,46.3C8,34.9,10.7,23.2,17.3,16c6.6-7.2,17.2-10.1,27.1-10C54.3,6.2,57.7,9.1,59.6,12.4z"
              fill={`url(#grad-${i})`}
              initial={reduced ? undefined : { rotate: 0 }}
              animate={reduced ? undefined : { rotate: [0, 6, -4, 0] }}
              transition={reduced ? undefined : { duration: duration * 2, delay: delay / 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        )
      })}

      {/* Subtle dotted overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" aria-hidden>
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" className="text-foreground" />
      </svg>
    </div>
  )
}

export default AnimatedBackground
