"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer id="contacto" className="bg-card border-t border-border py-16 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
            
              <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-8 h-8 text-primary"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              />
              
            </motion.svg>
            <motion.span
              className="text-xl font-semibold text-blue-200"
              
              initial={{ opacity: 1, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
            >
              Portafolio
            </motion.span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Un equipo dedicado a crear soluciones tecnológicas innovadoras que transforman ideas en realidad.
              Trabajamos con pasión y compromiso en cada proyecto.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Conecta con nosotros</h3>
            <p className="text-muted-foreground mb-6">
              ¿Tienes un proyecto en mente? Nos encantaría escucharte y colaborar contigo.
            </p>
           
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Portfolio. Todos los derechos reservados.</p>
           
          </div>
        </div>
      </div>
    </footer>
  )
}
