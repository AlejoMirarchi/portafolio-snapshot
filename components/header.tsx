"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-sm" />
            <span className="text-xl font-semibold text-foreground">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Equipo
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              Contacto
            </Button>
          </nav>

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
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
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
