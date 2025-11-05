"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Mail,Phone,Github,Linkedin } from "lucide-react"

type FlyoutLinkProps = {
  children: React.ReactNode
  href?: string
  flyoutContent?: React.ReactNode
  className?: string
}

const FlyoutLink: React.FC<FlyoutLinkProps> = ({ children, href = "#", flyoutContent, className = "" }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [])

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <a
        href={href}
        onClick={(e) => {
          if (flyoutContent) {
            e.preventDefault()
            setOpen((v) => !v)
          }
        }}
        className=" text-l   text-primary/70 hover:opacity-90"
      >
        {children}
        {flyoutContent ? <span aria-hidden className="ml-1">▾</span> : null}
      </a>

      <AnimatePresence>
        {open && flyoutContent && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute left-0 mt-2 min-w-[160px] bg-[#0b1220] rounded-md shadow-lg ring-1 ring-black/10 z-50"
            role="menu"
            aria-hidden={!open}
          >
            <div className="p-2">{flyoutContent}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FlyOutMenuFixed: React.FC = () => {
  return (
    <nav className="flex items-center gap-4">
      <FlyoutLink
        href="/contact"
        flyoutContent={
          <Card className="w-72 max-w-xs p-0 overflow-hidden flex">
            <CardHeader className="px-4 py-3 bg-primary/10 ">
              <CardTitle className="text-sm font-semibold text-white">Contacta conmigo</CardTitle>
            </CardHeader>
            <CardDescription className="p-3 bg-primary/10 text-sm text-gray-100">
              <div className="grid grid-cols-1 gap-1">
                <a
                  href="mailto:alejomirarchi@gmail.com"
                  className="block w-full px-3 py-2 rounded bg-primary/6 hover:bg-white/10 transition-colors text-white"
                >
                  <Mail className=" h-4 w-3 text-xs" /> Email — alejomirarchi@gmail.com
                </a>

                <a
                  href="tel:+5491131758984"
                  className="block w-full px-3 py-2 rounded bg-primary/6 hover:bg-white/10 transition-colors text-white"
                >
                  <Phone className=" h-4 w-3 text-xs" /> Teléfono — +54 9 11 3175 8984
                </a>

                <div className="pt-1 border-t border-white/6" />

                <a
                  href="https://www.linkedin.com/in/alejo-mirarchi-b0a13b370"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full px-3 py-2 rounded bg-white/6 hover:bg-white/10 transition-colors text-white"
                >
                  <Linkedin className=" h-4 w-3 text-xs" /> LinkedIn
                </a>

                <a
                  href="https://github.com/alejomirarchi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full px-3 py-2 rounded bg-white/6 hover:bg-white/10 transition-colors text-white"
                >
                  <Github className=" h-4 w-3 text-xs" /> GitHub
                </a>
              </div>
            </CardDescription>
          </Card>
        }
      >
        Contacto
      </FlyoutLink>

      

      
    </nav>
  )
}

export default FlyOutMenuFixed
