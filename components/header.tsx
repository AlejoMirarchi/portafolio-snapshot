"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, Variants, AnimatePresence } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import Link from "next/link"
import { NavLink } from "@/components/nav-link"
import { Code, User, Star } from "lucide-react"
import FlyOutMenu from "./FlyOutMenuFixed"
import FlyOutMenuFixed from "./FlyOutMenuFixed"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const reduced = usePrefersReducedMotion()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }
  const navVariants: Variants = {
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
      
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "tween",
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  }

  // cerrar modal pero re choton
  useEffect(() => {
    const MouseClick = (e: MouseEvent) => {
      if (e.target === e.currentTarget) setIsContactOpen(false)
    }

    if (isContactOpen) window.addEventListener("click", MouseClick)
    return () => window.removeEventListener("click", MouseClick)
  }, [isContactOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-8 h-8 text-primary"
              
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ rotate: 0, path:0 }}
              animate={{ rotate: 360,path:1 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity
                
               }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M8.757 15.243l-2.121 2.121m12.728 0l-2.121-2.121M8.757 8.757L6.636 6.636"
                />
              </motion.svg></motion.div>
              <motion.span
                className="text-xl font-semibold"
                style={{ color: "#0b3d91" }}
                initial={reduced ? { opacity: 1 } : { opacity: 1, x: 5 }}
                animate={
                  reduced
                    ? undefined
                    : {
                        // From dark blue to light blue and back
                        color: ["#0b3d91", "#1e40af", "#2563eb", "#60a5fa", "#bfdbfe", "#0b3d91"],
                        x: 0,
                      }
                }
                transition={reduced ? undefined : { duration: 6, ease: "easeInOut", repeat: Infinity }}
              >
                MonsterCoders
              </motion.span>
            
          </div>
          

          {/* Desktop Contact button removed - kept only in mobile menu (user will add a custom desktop CTA) */}

          {/* Desktop Navigation */}
            <motion.nav
            className="hidden md:flex items-center gap-8"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            >
              <NavLink href="/lucaspage" icon={<Code className="w-4 h-4" />} className="text-sm font-medium text-purple-500/50 hover:text-purple-900/80 transition-colors">
                Lucas
              </NavLink>
              <NavLink href="/alejopage" icon={<Code className="w-4 h-4" />} className="text-sm text-primary/50 font-medium hover:text-primary/80 transition-colors">
                Alejo
              </NavLink>
              <NavLink href="/abrilpage" icon={<Code className="w-4 h-4" />} className="text-sm text-primary/50 font-medium hover:text-primary/80 transition-colors">
                Abril
              </NavLink>
              <FlyOutMenuFixed/>
            <motion.button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-muted-foreground  hover:text-foreground transition-colors"
              whileHover="hover"
            >
              Inicio
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              whileHover="hover"
            >
              Nosotros
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("equipo")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              whileHover="hover"
            >
              Equipo
            </motion.button>
            </motion.nav>

          {/* Mobile Menu Button */} 
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {/* Añadidos: enlaces a las páginas de Lucas, Alejo y Abril */}
              <NavLink
                href="/lucaspage"
                icon={<Code className="w-4 h-4" />}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Lucas
              </NavLink>
              <NavLink
                href="/alejopage"
                icon={<User className="w-4 h-4" />}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Alejo
              </NavLink>
              <NavLink
                href="/abrilpage"
                icon={<Star className="w-4 h-4" />}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Abril
              </NavLink>

              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("equipo")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Equipo
              </button>
              <Button
                onClick={() => setIsContactOpen(true)}
                size="sm"
                className="w-full bg-linear-to-r from-primary to-accent hover:opacity-90"
              >
                Contacto
              </Button>
            </div>
          </nav>
        )}
        {/* animate presense para animar cuando sale del dom y usestate verificacion */}
        <AnimatePresence>
          {isContactOpen && (
            <motion.div
              className="fixed bg-primary/10 md:backdrop-blur-2xl inset-0 flex items-center justify-center"
              style={{ zIndex: 9999 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* backdrop */}
              <div className="absolute inset-0 bg-black/40" onClick={() => setIsContactOpen(false)} />

              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-title"
                aria-describedby="contact-desc"
                className="relative w-full max-w-md mx-4 bg-background border border-border rounded-lg p-6 shadow-lg"
                style={{ zIndex: 10000 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between">
                  <h2 id="contact-title" className="text-lg font-semibold">Contacto</h2>
                  <button
                    onClick={() => setIsContactOpen(false)}
                    aria-label="Cerrar"
                    className="text-foreground hover:text-primary transition-colors p-1 rounded"
                  >
                    <X />
                  </button>
                </div>

                <p id="contact-desc" className="mt-3 text-sm text-muted-foreground">
                  Email: <a className="text-primary underline" href="mailto:alejomirarchi@gmail.com">alejomirarchi@gmail.com</a>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Teléfono: +54 9 11 3175 8984</p>

                <div className="mt-4 flex gap-3">
                  <a href="https://github.com/AlejoMirarchi" className="text-sm text-muted-foreground underline">GitHub</a>
                  <a href="https://www.linkedin.com/in/alejomirarchi" className="text-sm text-muted-foreground underline">LinkedIn</a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
