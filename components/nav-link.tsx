"use client"

import Link from "next/link"
import React from "react"

interface NavLinkProps {
  href: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, icon, children, className = "", onClick }: NavLinkProps) {
  return (
    <Link href={href} onClick={onClick} className={`inline-flex items-center gap-2 ${className}`}>
      {icon && <span className="w-5 h-5 flex items-center justify-center text-muted-foreground">{icon}</span>}
      <span>{children}</span>
    </Link>
  )
}
