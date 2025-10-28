"use client"

import { motion } from "framer-motion"

export function WelcomeSection() {
  return (
    <section className="relative overflow-hidden px-4 lg:px-8 min-h-screen pt-28 md:pt-32 pb-24 md:pb-32 flex items-center">
      {/* Background gradient */}
  <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-accent/10" />

      {/* Decorative corner waves */}
      <motion.svg
        aria-hidden
        className="absolute -top-10 -right-10 w-64 h-64 text-primary/20"
        viewBox="0 0 200 200"
        initial={{ rotate: -8, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <path
          d="M47.5,-59.6C59.6,-53.6,66,-39.3,69.7,-25.4C73.3,-11.5,74.2,2.1,70.3,14.6C66.4,27.1,57.6,38.5,46.6,49.1C35.5,59.6,22.2,69.2,7.2,74.1C-7.9,79.1,-23.6,79.3,-37.4,73.9C-51.1,68.5,-62.9,57.5,-70.8,44.1C-78.7,30.7,-82.8,15.4,-82.2,0.4C-81.6,-14.6,-76.4,-29.2,-67.5,-40C-58.6,-50.7,-46,-57.7,-33.2,-63.2C-20.3,-68.8,-10.2,-73,2.3,-76.6C14.8,-80.2,29.6,-83.2,47.5,-59.6Z"
          transform="translate(100 100)"
          fill="currentColor"
        />
      </motion.svg>

      {/* Content */}
  <div className="container mx-auto max-w-6xl text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
          ¡Bienvenido a nuestro espacio!
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight text-balance"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Creamos productos con un toque humano
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nos encanta diseñar experiencias amigables, accesibles y memorables. Relájate y recorre nuestro trabajo.
        </motion.p>

  {/* Cute animated emojis/SVGs */}
  <div className="relative mx-auto mt-2 flex items-center justify-center gap-4">
          {[
            { label: "spark", color: "text-primary", d: "M12 2L9 9 2 12l7 3 3 7 3-7 7-3-7-3-3-7z" },
            { label: "heart", color: "text-rose-500", d: "M12 21s-6-4.35-9-7.5S.5 6 4.5 4.5 9 7 12 9.5 19.5 4.5 23.5 6 21 13.5 12 21z" },
            { label: "star", color: "text-amber-500", d: "M12 2l2.9 6.3L22 9.2l-5 4.8L18.2 22 12 18.6 5.8 22 7 14l-5-4.8 7.1-1L12 2z" },
          ].map((s, i) => (
            <motion.svg
              key={s.label}
              width="36"
              height="36"
              viewBox="0 0 24 24"
              className={`${s.color} opacity-80`}
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 + i * 0.08 }}
            >
              <motion.path
                d={s.d}
                fill="currentColor"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              />
            </motion.svg>
          ))}
        </div>

        {/* Feature chips */}
        <div className="mx-auto mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl">
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.4 }}
              className="rounded-full border border-border bg-card/60 px-3 py-1 text-sm text-muted-foreground backdrop-blur hover:border-primary/50 hover:text-foreground transition-colors"
            >
              {label}
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <motion.a
            href="#nosotros"
            className="rounded-md bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            Conocer más
          </motion.a>
          <motion.a
            href="#equipo"
            className="rounded-md border border-border px-5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-foreground/40"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Ver equipo
          </motion.a>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#inicio"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col items-center text-xs text-muted-foreground/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>Desliza para explorar</span>
          <motion.span
            className="mt-2 block h-9 w-5 rounded-full border border-border relative"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <span className="absolute left-1/2 top-1.5 h-2 w-1 -translate-x-1/2 rounded-full bg-foreground/60" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  )
}

export default WelcomeSection
