"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-8 h-8 text-primary"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M8.757 15.243l-2.121 2.121m12.728 0l-2.121-2.121M8.757 8.757L6.636 6.636"
                />
              </svg>
            </motion.div>
            <motion.span
              className="text-xl font-semibold text-blue-200"
              
              initial={{ opacity: 1, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
            >
              Portafolio
            </motion.span>
          </div>

          {/* Desktop Navigation */}
            <motion.nav
            className="hidden md:flex items-center gap-8"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            >
              <Link href="/lucaspage" className=" text-sm font-medium text-purple-500/50 hover:text-purple-900/80 transition-colors">
                Lucas
              </Link>
              <Link href="/alejopage" className="text-sm text-primary/50 font-medium hover:text-primary/80 transition-colors">
                Alejo
              </Link>
            <motion.button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
                onClick={() => scrollToSection("contacto")}
                size="sm"
                className="w-full bg-linear-to-r from-primary to-accent hover:opacity-90"
              >
                Contacto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
