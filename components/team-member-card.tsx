"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { motion } from "framer-motion"
import React from "react" // Importamos React para habilitar el espacio de nombres JSX
import { Github, Linkedin } from "lucide-react"

interface TeamMemberCardProps {
  // Generic props that cover both team members and featured projects
  variant?: "member" | "project"
  // member props (kept for backward compatibility)
  name?: string
  role?: string
  description?: string
  skills?: string[]
  icon?: React.ReactNode // Puede ser un icono o una imagen pequeña
  experience?: string
  projects?: string
  linkedin?: string
  github?: string
  // project props
  title?: string
  imageUrl?: string
  projectUrl?: string
  technologies?: string[]
  repoUrl?: string
}

export function TeamMemberCard({
  variant = "member",
  // member
  name,
  role,
  description,
  skills = [],
  icon,
  experience,
  projects,
  linkedin,
  github,
  // project
  title,
  imageUrl,
  projectUrl,
  technologies = [],
  repoUrl,
}: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className=" relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border-border bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-primary transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <CardHeader className="space-y-4 pb-4">
        {variant === "member" ? (
          <>
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
                <span className="ml-1"> experiencia</span>
              </div>
              <div className="border-l border-border pl-4">
                <span className="font-semibold text-foreground">{projects}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-start gap-4">
            {imageUrl ? (
              // imagen del proyecto
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imageUrl} alt={title} className="w-28 h-20 object-cover rounded-md" />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">{icon}</div>
            )}

            <div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              {role && <p className="text-sm text-primary font-medium">{role}</p>}
            </div>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground leading-relaxed">{variant === "member" ? description : description}</p>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">{variant === "member" ? "Habilidades" : "Tecnologías"}</h4>
          <div className="flex flex-wrap gap-2">
            {(variant === "member" ? skills : technologies).map((skill, index) => (
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

        {/* Sección de enlaces: social para miembro, proyecto/repo para project */}
        {variant === "member" ? (
          (linkedin || github) && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Conecta</h4>
              <div className="flex items-center gap-3">
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${name}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                )}

                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${name}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                )}
              </div>
            </div>
          )
        ) : (
          (projectUrl || repoUrl) && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Enlaces</h4>
              <div className="flex items-center gap-3">
                {projectUrl && (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver proyecto ${title}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="underline">Ver proyecto</span>
                  </a>
                )}

                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Repositorio de ${title}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="hidden sm:inline">Repositorio</span>
                  </a>
                )}
              </div>
            </div>
          )
        )}
      </CardContent>
    </Card>
  )
}
