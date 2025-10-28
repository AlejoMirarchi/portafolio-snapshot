"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

const getVariants = (direction: Direction): Variants => {
  const distance = 24
  const map: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }
  const { x, y } = map[direction]
  return {
    hidden: { opacity: 0, x, y, filter: "blur(2px)" },
    show: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
  }
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
}: {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: Direction
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={getVariants(direction)}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
