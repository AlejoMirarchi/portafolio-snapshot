"use client"
import { Reveal } from "@/components/reveal"
import { useRef } from "react"
import { useInView,motion } from "framer-motion";

export function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null);
 
  const isInView = useInView(ref, {
    amount: 0.2,
    once: true,
  });
  return (
    <section id="nosotros" className="relative py-20 px-4 lg:px-8 overflow-hidden">
      {/* SVG decorativo de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 -z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.45 0.15 240)" />
              <stop offset="100%" stopColor="oklch(0.5 0.18 240)" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#about-gradient)" />
          <circle cx="150" cy="50" r="40" fill="url(#about-gradient)" opacity="0.6" />
          <circle cx="50" cy="150" r="30" fill="url(#about-gradient)" opacity="0.4" />
        </svg>
      </div>
    
    <motion.div
      animate={{
        y: isInView ? "-100%" : "0%",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="absolute bottom-0 left-0 top-0 z-10 w-1/2 bg-primary/70"
      
      style={{
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
      }}
    />
    <motion.div
      animate={{
        y: isInView ? "100%" : "0%",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="absolute bottom-0 right-0 top-0 z-10 w-1/2 bg-primary/70"
      
      style={{
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
      }}
    />
  <div ref={ref} className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Sobre{" "}
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Nosotros</span>
              </h2>
            
            
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Somos un equipo multidisciplinario de profesionales apasionados por la tecnología y la innovación. Con
                años de experiencia combinada, nos especializamos en crear soluciones digitales que transforman negocios y
                mejoran la vida de las personas.
              </p>
            
            
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Nuestra misión es llevar cada proyecto al siguiente nivel, combinando creatividad, experiencia técnica y
                un enfoque centrado en el usuario para entregar resultados excepcionales que superen las expectativas.
              </p>
            
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8 space-y-6">
              <Reveal direction="left">
                <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Innovación Constante</h3>
                  <p className="text-muted-foreground">
                    Siempre a la vanguardia de las últimas tecnologías y tendencias del mercado.
                  </p>
                </div>
                </div>
              </Reveal>

              <Reveal delay={0.05} direction="left">
                <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-accent to-primary flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Calidad Garantizada</h3>
                  <p className="text-muted-foreground">
                    Cada proyecto es tratado con el máximo nivel de profesionalismo y atención al detalle.
                  </p>
                </div>
                </div>
              </Reveal>

              
                <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Trabajo en Equipo</h3>
                  <p className="text-muted-foreground">
                    Colaboración efectiva que potencia las fortalezas individuales de cada miembro.
                  </p>
                </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
