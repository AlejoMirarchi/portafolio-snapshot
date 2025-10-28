"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import {motion} from "framer-motion"
import React from "react" // Importamos React para habilitar el espacio de nombres JSX

interface TeamMemberCardProps {
  name: string
  role: string
  description: string
  skills: string[]
  icon: JSX.Element // Cambiamos el tipo de LucideIcon a JSX.Element
  experience: string
  projects: string
}

export function TeamMemberCard({
  name,
  role,
  description,
  skills,
  icon,
  experience,
  projects,
}: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border-border bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-primary transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <CardHeader className="space-y-4 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              {icon} {/* Renderizamos el nodo JSX directamente */}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{name}</h3>
              <p className="text-sm text-primary font-medium">{role}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-sm text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">{experience}</span>
            <span className="ml-1">experiencia</span>
          </div>
          <div className="border-l border-border pl-4">
            <span className="font-semibold text-foreground">{projects}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Habilidades</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
