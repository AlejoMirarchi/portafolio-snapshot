// components/alejopage.tsx (renderizado en app/alejopage/page.tsx)
"use client"
import React from "react";
import Link from "next/link";
import Member, { MemberProps } from "@/components/member";
import { Code, Briefcase, Mail, ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background"

const alejoData: MemberProps = {
  name: "Alejo",
  role: "Frontend Developer",
  bio: "Apasionado por el desarrollo web, el rendimiento y las interfaces modernas accesibles.",
 
  image: "/cffbe951f74aae885fd7576960d442a0.jpg",
  location: "Buenos Aires, AR",
  experienceYears: 3,
  skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "UI/UX"],
  socialLinks: {
    github: "https://github.com/alejo",
    linkedin: "https://linkedin.com/in/alejo",
    twitter: "https://twitter.com/alejo",
    website: "https://Manuelsadosky.com",
    email: "alejomirarchi@gmail.com",
  },
};
const animationsVariants= {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const AlejoPage = () => {
  return (
    <div className="container mx-auto py-10 backdrop-blur-lg">
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
          <MapPin className="w-4 h-4" /> {alejoData.location}
        </div>
      </motion.div>

      {/* Fondo sutil con gradiente + animación */}
      <div className="relative">
  <AnimatedBackground density={6} />
  <div className="absolute inset-0 -z-30 bg-linear-to-b from-primary/5 via-background to-background rounded-2xl" />

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda: Perfil */}
          <motion.div
            className="lg:col-span-1"
            variants={animationsVariants}
            initial="hidden"
            animate="visible"
          >
            <Member {...alejoData} />
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
            <div className="rounded-xl border border-border bg-card/70 p-6 shadow-lg shadow-primary/10">
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
                {alejoData.skills?.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-primary shadow-sm"
                  >
                    {skill}
                  </div>
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
                {alejoData.socialLinks.email && (
                  <a
                    href={`mailto:${alejoData.socialLinks.email}`}
                    className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 hover:bg-accent/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> {alejoData.socialLinks.email}
                  </a>
                )}
                {alejoData.socialLinks.website && (
                  <a
                    href={alejoData.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex  items-center gap-2 rounded-md border border-border px-3 py-2 hover:bg-accent/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> {alejoData.socialLinks.website}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlejoPage;