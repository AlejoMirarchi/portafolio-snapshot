"use client"
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import AnimatedBackground from "./animated-background"

export default function MultilayerParallax() {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduced = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  
  const bgRangeEnd = reduced ? "10%" : "30%"
  const midRangeEnd = reduced ? "6%" : "15%"
  const contentY = useTransform(scrollYProgress, [0, 0.6, 1], ["40%", "10%", "-10%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [0, 1, 1])
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", bgRangeEnd])
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", midRangeEnd])

  const verticalMask =
    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)"

  return (
    <section
      ref={ref}
      aria-label="Parallax"
      className="backdrop-blur-2xl relative w-full min-h-[110vh] md:min-h-screen overflow-hidden grid place-items-center bg-black"
       style={{ WebkitMaskImage: verticalMask, maskImage: verticalMask, WebkitMaskSize: "100% 100%", maskSize: "100% 100%" }}
    >
      
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-30 bg-[url('/coder.jpg')] bg-cover bg-center opacity-40"
      />

      {/* animatedbg */}
      <AnimatedBackground density={12} className="z-20" />

      {/* middle */}
      <motion.div
        aria-hidden
        style={{ y: midY }}
        className="absolute inset-0 -z-10 bg-[url('/coder.png')] bg-bottom bg-cover opacity-40 mix-blend-overlay"
      />
      
      <div className="absolute inset-0 -z-5 bg-linear-to-br from-primary/9 via-background/6 to-accent/8" />
      
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 container mx-auto max-w-6xl text-center px-4 py-24 md:py-32"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold text-white/80 tracking-tight mb-4">
          Creamos productos modernos y funcionales 
        </h1>

        {/* animated small icons / emojis */}
        <div className="relative mx-auto mt-2 flex items-center justify-center gap-4">
          {[
            { key: "spark", color: "text-primary", path: "M12 2L9 9 2 12l7 3 3 7 3-7 7-3-7-3-3-7z" },
            { key: "heart", color: "text-rose-400", path: "M12 21s-6-4.35-9-7.5S.5 6 4.5 4.5 9 7 12 9.5 19.5 4.5 23.5 6 21 13.5 12 21z" },
            { key: "star", color: "text-amber-400", path: "M12 2l2.9 6.3L22 9.2l-5 4.8L18.2 22 12 18.6 5.8 22 7 14l-5-4.8 7.1-1L12 2z" },
          ].map((s, i) => (
            <motion.svg
              key={s.key}
              width={36}
              height={36}
              viewBox="0 0 24 24"
              className={`${s.color} opacity-90`}
              initial={reduced ? undefined : { scale: 0.85, rotate: -8, opacity: 0 }}
              animate={reduced ? undefined : { scale: 1, rotate: 0, opacity: 1 }}
              transition={reduced ? undefined : { type: "spring", stiffness: 120, damping: 14, delay: 0.15 + i * 0.08 }}
            >
              <path d={s.path} fill="currentColor" />
            </motion.svg>
          ))}
        </div>

        {/* feature chips */}
        <div className="mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl">
          {[
            "Accesible",
            "Rápido",
            "Responsivo",
            "Animado",
            "SEO Ready",
            "Escalable",
          ].map((label, i) => (
            <motion.div
              key={label}
              initial={reduced ? undefined : { opacity: 0, y: 8 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={reduced ? undefined : { delay: 0.15 + i * 0.05, duration: 0.45 }}
              className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-sm text-white/90 backdrop-blur-sm hover:border-primary/50 hover:text-white transition-colors"
            >
              {label}
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <motion.a
            href="#nosotros"
            className="rounded-md bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-95"
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={reduced ? undefined : { duration: 0.45, delay: 0.25 }}
          >
            Conocer más
          </motion.a>
          <motion.a
            href="#equipo"
            className="rounded-md border border-white/10 px-5 py-2 text-sm font-medium text-white/90 hover:opacity-95"
            initial={reduced ? undefined : { opacity: 0, y: 10 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={reduced ? undefined : { duration: 0.45, delay: 0.3 }}
          >
            Ver equipo
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}