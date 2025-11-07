"use client"

import React, { useState } from "react"
import Link from "next/link"

type Avatar = {
  name: string
  src?: string
  role?: string
  href?: string
  tabId?: number
}

type AvatarListProps = {
  avatars: Avatar[]
  size?: number
  showNames?: boolean
}

function InitialsCircle({ name, size }: { name: string; size: number }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0]!)
    .slice(0, 2)
    .join("")
    .toUpperCase()
  return (
    <div
      className="rounded-full bg-white/15 flex items-center justify-center text-sm font-semibold text-white shadow-sm ring-1 ring-white/20"
      style={{ width: size, height: size }}
    >
      {initials}
    </div>
  )
}

function AvatarItem({ a, size, showNames }: { a: Avatar; size: number; showNames: boolean }) {
  const [errored, setErrored] = useState(false)
  const content = !a.src || errored ? (
    <InitialsCircle name={a.name} size={size} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={a.src}
      alt={a.name}
      width={size}
      height={size}
      onError={() => setErrored(true)}
      className="rounded-full object-cover shadow-sm ring-1 ring-white/20 hover:scale-105 transition-transform bg-white/10"
      style={{ width: size, height: size }}
    />
  )

  return (
    <div className="flex flex-col items-center text-center">
      {a.href ? (
        <a
          href={a.href}
          className="rounded-full overflow-hidden"
          aria-label={`Ir a la página de ${a.name}`}
          onMouseEnter={(e) => {
            if (!a.tabId) return
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
            window.dispatchEvent(new CustomEvent("shifting-dropdown-open", { detail: { id: a.tabId, rect } }))
          }}
          onMouseLeave={() => a.tabId && window.dispatchEvent(new CustomEvent("shifting-dropdown-open", { detail: { id: null } }))}
          onFocus={(e) => {
            if (!a.tabId) return
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
            window.dispatchEvent(new CustomEvent("shifting-dropdown-open", { detail: { id: a.tabId, rect } }))
          }}
          onBlur={() => a.tabId && window.dispatchEvent(new CustomEvent("shifting-dropdown-open", { detail: { id: null } }))}
        >
          {content}
        </a>
      ) : (
        <div
          onMouseEnter={(e) => {
            if (!a.tabId) return
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
            window.dispatchEvent(new CustomEvent("shifting-dropdown-open", { detail: { id: a.tabId, rect } }))
          }}
          onMouseLeave={() => a.tabId && window.dispatchEvent(new CustomEvent("shifting-dropdown-open", { detail: { id: null } }))}
          onFocus={(e) => {
            if (!a.tabId) return
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
            window.dispatchEvent(new CustomEvent("shifting-dropdown-open", { detail: { id: a.tabId, rect } }))
          }}
          onBlur={() => a.tabId && window.dispatchEvent(new CustomEvent("shifting-dropdown-open", { detail: { id: null } }))}
        >
          {content}
        </div>
      )}
      {showNames && <span className="mt-1 text-xs text-white/80">{a.name.split(" ")[0]}</span>}
    </div>
  )
}

export default function ProfileAvatars({ avatars, size = 48, showNames = true }: AvatarListProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {avatars.map((a) => (
        <AvatarItem key={a.name} a={a} size={size} showNames={showNames} />
      ))}
    </div>
  )
}
