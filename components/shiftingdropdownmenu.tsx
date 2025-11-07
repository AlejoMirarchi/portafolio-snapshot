"use client"

import React, { useEffect, useRef, useState, ReactNode } from "react"
import { FiChevronUp } from "react-icons/fi"
import { AnimatePresence, motion } from "framer-motion"


export const ShiftingDropdownMenu = ({ listenToExternal = false }: { listenToExternal?: boolean }) => {
  return <Tabs listenToExternal={listenToExternal} />
}

type TabDef = { id: number; title: string; Component: React.FC }

const TABS: TabDef[] = [
  { id: 1, title: "Alejo", Component: () => <div>Pagina de Alejo</div> },
  { id: 2, title: "Abril", Component: () => <div>Pagina de Abril</div> },
  { id: 3, title: "Lucas", Component: () => <div>Pagina de Lucas</div> },
]

function Tabs({ listenToExternal = false }: { listenToExternal?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null)
  const [dir, setDir] = useState<"left" | "right" | null>(null)
  const containerRef = useRef<HTMLDivElement>(null!)
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "left" : "right")
    } else if (val === null) setDir(null)
    setSelected(val)
  }

  useEffect(() => {
    if (!listenToExternal) return
    const handler = (e: Event) => {
      const ce = e as CustomEvent
      if (typeof ce.detail?.id !== "undefined") {
        setSelected(ce.detail.id ?? null)
        setAnchorRect(ce.detail?.rect ?? null)
      }
    }
    window.addEventListener("shifting-dropdown-open", handler as EventListener)
    return () => window.removeEventListener("shifting-dropdown-open", handler as EventListener)
  }, [listenToExternal])

  return (
    <div ref={containerRef} onMouseLeave={() => handleSetSelected(null)} className="relative flex h-fit w-fit gap-2">
      {TABS.map((t) => (
        <Tab key={t.id} tab={t.id} selected={selected} handleSetSelected={handleSetSelected}>
          {t.title}
        </Tab>
      ))}

      <AnimatePresence>{selected && <Content dir={dir} selected={selected} anchorRef={containerRef} anchorRect={anchorRect} onClose={() => handleSetSelected(null)} />}</AnimatePresence>
    </div>
  )
}

function Tab({ children, tab, handleSetSelected, selected }: { children: ReactNode; tab: number; handleSetSelected: (v: number | null) => void; selected: number | null }) {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm transition-colors ${selected === tab ? "bg-white/20 text-white" : "hover:bg-white/10 hover:text-white/80 text-white/50"}`}>
      <span>{children}</span>
      <FiChevronUp className={`transition-transform ${selected === tab ? "rotate-180" : ""}`} />
    </button>
  )
}

function Content({ selected, dir, anchorRef, anchorRect, onClose }: { selected: number | null; dir: null | "left" | "right"; anchorRef: React.RefObject<HTMLDivElement>; anchorRect: DOMRect | null; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 })
  const GAP = 12

  const computePosition = () => {
    const anchor = anchorRef.current
    if (!anchor || !selected) return
    const tabEl = document.getElementById(`shift-tab-${selected}`)
    const rect = anchor.getBoundingClientRect()
    const tabRect = tabEl?.getBoundingClientRect()
    const sourceRect = anchorRect ?? tabRect ?? rect
    const overlayW = overlayRef.current?.offsetWidth ?? Math.min(384, window.innerWidth - 24)
    const left = (sourceRect.left ?? rect.left) + ((sourceRect.width ?? overlayW) / 2 - overlayW / 2)
    const maxLeft = window.innerWidth - overlayW - 8
    const clampedLeft = Math.max(8, Math.min(left, maxLeft))
    const top = (sourceRect.bottom ?? rect.bottom) + GAP
    setPos({ top, left: clampedLeft })
  }

  useEffect(() => {
    computePosition()
    const onResize = () => computePosition()
    window.addEventListener("resize", onResize)
    window.addEventListener("scroll", onResize, true)
    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("scroll", onResize, true)
    }
    
  }, [selected, anchorRect])

  
  useEffect(() => {
    if (!selected) return
    const handler = (ev: PointerEvent) => {
      const target = ev.target as HTMLElement | null
      const overlay = overlayRef.current
      if (!overlay) return
      if (target && overlay.contains(target)) return
      const anyTab = document.querySelectorAll('[id^="shift-tab-"]')
      for (let i = 0; i < anyTab.length; i++) {
        if (anyTab[i].contains(target)) return
      }
      onClose()
    }
    window.addEventListener("pointerdown", handler)
    return () => window.removeEventListener("pointerdown", handler)
  }, [selected, onClose])

  return (
  <motion.div id="overlay-content" ref={overlayRef as any} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="fixed z-50 w-96 rounded-lg border border-primary/20 bg-linear-to-b from-primary/90 to-primary/30 p-4 shadow-xl pointer-events-auto" style={{ top: pos.top, left: pos.left }}>
      <Bridge />
      <Flechita selected={selected} pos={pos} anchorRect={anchorRect} />
      {TABS.map((t) => (
        <div className="overflow-hidden" key={t.id}>
          {selected === t.id && (
            <motion.div initial={{ opacity: 0, x: dir === "left" ? 100 : dir === "right" ? -100 : 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} style={{ zIndex: 99999 }}>
              <t.Component />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  )
}

function Flechita({ selected, pos, anchorRect }: { selected: number | null; pos: { top: number; left: number }; anchorRect: DOMRect | null }) {
  const nubRef = useRef<HTMLSpanElement | null>(null)
  const [left, setLeft] = useState(0)

  useEffect(() => {
    if (!selected) return
    if (anchorRect && nubRef.current) {
      const center = anchorRect.left + anchorRect.width / 2
      const newLeft = center - pos.left
      setLeft(newLeft)
      nubRef.current.style.left = `${newLeft}px`
      return
    }
    const hoveredTab = document.getElementById(`shift-tab-${selected}`)
    if (hoveredTab && nubRef.current) {
      const tabRect = hoveredTab.getBoundingClientRect()
      const parentRect = hoveredTab.parentElement?.getBoundingClientRect()
      if (parentRect) {
        const newLeft = tabRect.left + tabRect.width / 2 - parentRect.left
        setLeft(newLeft)
        nubRef.current.style.left = `${newLeft}px`
      }
    }
  }, [selected, pos, anchorRect])

  return <motion.span ref={nubRef as any} animate={{ left: left }} style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0 100%)" }} className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-black/40 bg-white/90" />
}

function Bridge() {
  return <div className="absolute -top-6 left-0 right-0 h-6" />
}

export default ShiftingDropdownMenu

