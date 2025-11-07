import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { TeamMemberCard } from "@/components/team-member-card";

function FeaturedWork() {
  const featuredWorks = [
    {
      title: "Pagina Tecnica7",
      description:
        "Desarrollo de una página web para la Técnica 7 del Instituto Manuel Sadosky, que incluye información sobre los cursos, el equipo docente y recursos para los estudiantes.",
      imageUrl: "/escudotec.png",
      projectUrl: "https://manuelsadosky.tecnica7ldz.edu.ar/",
      technologies: ["React", "TypeScript", "CSS", "PostgreSQL"],
      githubRepo: "https://github.com/HelloMeow10/Tecnica7-WebApp",
    },
    {
      title: "Juego ahorcado web",
      description:
        "Desarrollo de una página web para jugar al clásico juego del ahorcado. La página web incluye una interfaz interactiva donde los usuarios pueden adivinar palabras y ver su progreso.",
      imageUrl: "/ahorcado.png",
      projectUrl: "https://github.com/AlejoMirarchi/ahorcado",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubRepo: "https://github.com/AlejoMirarchi/ahorcado",
    },
    {
      title: "Sistema de expedientes MDLZ",
      description:
        "Estamos desarrollando un sistema de expedientes para la municipalidad de Lomas, donde los usuarios puedan realizar el seguimiento de los expedientes en las áreas correspondientes y evitar que queden estancados.",
      imageUrl: "LOGO-MDLZ.png",
      projectUrl: "",
      technologies: ["React", "TypeScript", "CSS", "PostgreSQL"],
      githubRepo: "",
    },
  ];

  return (
    <section className="py-10 mt-auto mb-0 px-4 lg:px-8 bg-muted/30 shadow-lg ">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl text-center font-bold text-foreground ">
            Trabajos {" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Destacados
            </span>
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <TeamMemberCard
              key={work.title}
              variant="project"
              title={work.title}
              description={work.description}
              imageUrl={work.imageUrl}
              projectUrl={work.projectUrl}
              repoUrl={work.githubRepo}
              technologies={work.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;