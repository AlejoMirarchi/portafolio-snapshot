"use client"
import React from "react"
import Link from "next/link"
import Member, { MemberProps } from "@/components/member"
import { Code, Briefcase, Mail, ExternalLink, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const abrilData: MemberProps = {
  name: "Abril",
  role: "Ingeniera de datos",
  bio: "Experta en análisis de datos y machine learning. Transforma datos complejos en insights accionables para impulsar decisiones estratégicas.",
 
  image: "",
  location: "Buenos Aires, AR",
  experienceYears: 3,
  // Reemplazado: lenguajes de front -> programas gestores de bases de datos (DBMS)
  skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis", "Oracle"],
  socialLinks: {
    github: "https://github.com/abril",
    linkedin: "https://linkedin.com/in/abril",
    website: "https://Manuelsadosky.com",
    email: "lezcanoabril896@gmail.com",
  },
};
const animationsVariants= {
  hidden: { opacity: 0, y: 20 
    
  },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
}

const AbrilPage = () => {
  return (
    <section className="frutiger-aero">
      <div className="container mx-auto py-10">
        <div className="aero-panel">
          {/* Controles de ventana: Mac (círculos) y Win (botones) */}
          <div className="aero-window-controls">
            
            <div className="aero-controls-win ml-auto hidden sm:flex" aria-hidden>
              <span className="aero-btn win-min" />
              <span className="aero-btn win-max" />
              <span className="aero-btn win-close" />
            </div>
          </div>
      <motion.div className="mb-10 flex items-center justify-between"
      variants={animationsVariants}
      initial="hidden"
      animate="visible"
      >

        <Link
          href="/"
          className="inline-flex bg-primary/70 items-center rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-primary/30 transition-colors"
        >
          ← Volver al inicio
        </Link>
        <div className="text-xs text-muted-foreground inline-flex items-center gap-2">
          <MapPin className="w-4 h-4" /> {abrilData.location}
        </div>
      </motion.div>

      {/* Fondo sutil con gradiente */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-background to-background rounded-2xl" />

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda: Perfil */}
          <motion.div
            className="lg:col-span-1"
            variants={animationsVariants}
            initial="hidden"
            animate="visible"
          >
            <Member {...abrilData} />
          </motion.div>

          {/* Columna derecha: Bloques informativos */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sobre mí */}
            <div className="rounded-xl border border-border bg-card/70 p-6 shadow-lg shadow-primary/10">
              <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">Sobre mí</h3>
              <motion.p 
              variants={animationsVariants}
              initial="hidden"
              animate="visible"
              className="text-foreground/90 leading-relaxed">
                Me enfoco en construir interfaces limpias, accesibles y performantes. Disfruto trabajar con
                herramientas modernas como React, Next.js y Tailwind. Fuera del código, me interesa el skate y la música.
              </motion.p>
            </div>

            {/* Stack y habilidades */}
            <div className="rounded-xl background-red border border-border bg-card/70 p-6 shadow-lg shadow-primary/10">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Stack principal</h3>
              </div>
              <motion.div
                variants={animationsVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
              >
                {abrilData.skills?.map((skill) => (
                  <span key={skill} className="aero-badge">{skill}</span>
                ))}
              </motion.div>
            </div>

            {/* Contacto y enlaces */}
            <motion.div
              variants={animationsVariants}
              initial="hidden"
              animate="visible"
              className="rounded-xl border border-border bg-card/70 p-6 shadow-lg shadow-primary/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Contacto & enlaces</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {abrilData.socialLinks.email && (
                  <a
                    href={`mailto:${abrilData.socialLinks.email}`}
                    className="aero-window-btn primary"
                  >
                    <Mail className="w-4 h-4" /> {abrilData.socialLinks.email}
                  </a>
                )}
                {abrilData.socialLinks.website && (
                  <a
                    href={abrilData.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aero-window-btn"
                  >
                    <ExternalLink className="w-4 h-4" /> {abrilData.socialLinks.website}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default AbrilPage;